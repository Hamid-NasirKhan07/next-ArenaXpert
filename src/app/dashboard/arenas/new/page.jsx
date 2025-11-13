import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/server/supabase/serverClient'
import prisma from '@/lib/prisma'
import { createClient as createSupabaseAdmin } from '@supabase/supabase-js'

// SERVER ACTION
async function addArenaAction(formData) {
  'use server'

  const supabase = await createClient()

  // Create an admin Supabase client using the service role key for server-only operations
  // resolve authenticated user early so we can attach ownerProfileId on inserts
  const { data: authData } = await supabase.auth.getUser()
  const currentUser = authData?.user
  let ownerProfileId = null
  if (currentUser) {
    const owner = await prisma.ownerProfile.findUnique({ where: { supabaseUserId: currentUser.id } })
    if (owner) ownerProfileId = owner.id
  }

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY
  let adminSupabase = null
  if (serviceRoleKey) {
    adminSupabase = createSupabaseAdmin(process.env.NEXT_PUBLIC_SUPABASE_URL, serviceRoleKey)
  } else {
    // If no service role key is provided, we still proceed but some operations may fail due to RLS.
    console.warn('No SUPABASE_SERVICE_ROLE_KEY found — server admin operations may be restricted')
  }

  const arenaName = formData.get('arenaName')
  const price = Number(formData.get('price') || 0)
  const phoneNumber = formData.get('phoneNumber')
  const address = formData.get('address')
  const length = Number(formData.get('length') || 0)
  const width = Number(formData.get('width') || 0)
  const height = Number(formData.get('height') || 0)
  const openingTime = formData.get('openingTime')
  const closingTime = formData.get('closingTime')
  const description = formData.get('description')
  const categories = formData.getAll('categories')

  const files = formData.getAll('files')
  const imageUrls = []

  // Upload each image to Supabase Storage. Use the admin client if available (required when RLS blocks anon uploads).
  const storageClient = adminSupabase || supabase
  for (const file of files) {
    if (!file || typeof file === 'string') continue
    const bucketName = 'arenaImages'
    const { data, error } = await storageClient.storage
      .from(bucketName)
      .upload(`public/${Date.now()}-${file.name}`, file, {
        cacheControl: '3600',
        upsert: false,
      })
    if (error) {
      // surface a clearer message for RLS/permission issues
      throw new Error(`Storage upload failed: ${error.message || JSON.stringify(error)}. Ensure the bucket exists and the server has permission to upload (use SUPABASE_SERVICE_ROLE_KEY for server uploads or make the bucket public).`)
    }
    // getPublicUrl returns an object with shape { data: { publicUrl } }
    const urlResult = storageClient.storage.from(bucketName).getPublicUrl(data.path)
    const publicUrl = (urlResult && urlResult.data && urlResult.data.publicUrl) || urlResult?.publicUrl || ''
    if (!publicUrl) {
      // If bucket is private, consider creating a signed URL when rendering, or use createSignedUrl here.
      imageUrls.push('')
    } else {
      imageUrls.push(publicUrl)
    }
  }

  // Validate time
  const [oh, om] = openingTime.split(':').map(Number)
  const [ch, cm] = closingTime.split(':').map(Number)
  const oMin = oh * 60 + om
  const cMin = ch * 60 + cm
  if (cMin <= oMin) throw new Error('Closing time must be after opening time')

  // Save data to Supabase DB
  // Try to insert into Supabase table first. If that fails (missing table, RLS, or permissions), fall back to Prisma.
  const dbClient = adminSupabase || supabase
  try {
    // Create a payload that supports different schema shapes:
    // - top-level 'name' and 'arenaDetails' (used by API normalization)
    // - legacy snake_case fields and top-level 'images' for compatibility
    const arenaDetailsObj = {
      arenaName,
      price,
      phoneNumber,
      address,
      length,
      width,
      height,
      openingTime,
      closingTime,
      description,
      categories,
      images: imageUrls,
      arenaImageUrls: imageUrls,
    }

    const supPayload = {
      name: arenaName,
      arena_name: arenaName,
        ownerProfileId: ownerProfileId,
      price,
      phone_number: phoneNumber,
      address,
      length,
      width,
      height,
      opening_time: openingTime,
      closing_time: closingTime,
      description,
      categories,
      images: imageUrls,
      arenaDetails: arenaDetailsObj,
    }

    // If owner profile wasn't found, abort so records aren't orphaned (Prisma fallback will also require owner)
    if (!ownerProfileId) {
      throw new Error('Complete owner profile first (ownerProfileId not found)')
    }

    const { error: insertError } = await dbClient.from('arenas').insert([supPayload])
    if (insertError) throw insertError
  } catch (err) {
    console.warn('Supabase insert failed, falling back to Prisma:', err?.message || err)
    // Prisma fallback: store arenaDetails as JSON in the Prisma `Arena` model
    try {
      if (!ownerProfileId) {
        throw new Error('Complete owner profile first (ownerProfileId not found)')
      }
      await prisma.arena.create({
        data: {
          name: arenaName || undefined,
          arenaDetails: {
            arenaName,
            price,
            phoneNumber,
            address,
            length,
            width,
            height,
            openingTime,
            closingTime,
            description,
            categories,
            images: imageUrls,
          },
          ownerProfileId: ownerProfileId,
        },
      })
    } catch (pErr) {
      throw new Error(`Failed to insert arena into Supabase and Prisma fallback failed: ${pErr?.message || JSON.stringify(pErr)}`)
    }
  }

  // Revalidate and redirect
  revalidatePath('/dashboard/arenas')
  redirect('/dashboard/arenas')
}

export default async function AddArenaPage() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Add Arena</h5>

        <form action={addArenaAction}>
          <div className="mb-3">
            <label className="form-label">Arena Name</label>
            <input className="form-control" name="arenaName" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Price (per hour)</label>
            <input type="number" className="form-control" name="price" />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact</label>
            <input className="form-control mb-2" placeholder="Phone number" name="phoneNumber" required />
            <input className="form-control" placeholder="Address" name="address" required />
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Length (feet)</label>
              <input type="number" className="form-control" name="length" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Width (feet)</label>
              <input type="number" className="form-control" name="width" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Height (feet)</label>
              <input type="number" className="form-control" name="height" />
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <label className="form-label">Opening Time</label>
              <input type="time" className="form-control" name="openingTime" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Closing Time</label>
              <input type="time" className="form-control" name="closingTime" required />
            </div>
          </div>

          <div className="mb-2 mt-2">
            <label className="form-label">Categories</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="categories" value="cricket" id="catCricket" />
              <label className="form-check-label" htmlFor="catCricket">Cricket</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="categories" value="football" id="catFootball" />
              <label className="form-check-label" htmlFor="catFootball">Football</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="categories" value="badminton" id="catBadminton" />
              <label className="form-check-label" htmlFor="catBadminton">Badminton</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows={4} name="description" />
          </div>

          <div className="mb-3">
            <label className="form-label">Images</label>
            <input className="form-control" type="file" accept="image/*" multiple name="files" />
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit">Create Arena</button>
            <a href="/dashboard/arenas" className="btn btn-secondary">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  )
}
