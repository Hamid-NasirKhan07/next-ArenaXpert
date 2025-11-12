import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/server/supabase/serverClient'

// SERVER ACTION
async function addArenaAction(formData) {
  'use server'

  const supabase = await createClient()

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

  // Upload each image to Supabase Storage
  for (const file of files) {
    if (!file || typeof file === 'string') continue
    const { data, error } = await supabase.storage
      .from('arena-images')
      .upload(`public/${Date.now()}-${file.name}`, file, {
        cacheControl: '3600',
        upsert: false,
      })
    if (error) throw new Error(error.message)
    const { data: urlData } = supabase.storage
      .from('arena-images')
      .getPublicUrl(data.path)
    imageUrls.push(urlData.publicUrl)
  }

  // Validate time
  const [oh, om] = openingTime.split(':').map(Number)
  const [ch, cm] = closingTime.split(':').map(Number)
  const oMin = oh * 60 + om
  const cMin = ch * 60 + cm
  if (cMin <= oMin) throw new Error('Closing time must be after opening time')

  // Save data to Supabase DB
  const { error } = await supabase.from('arenas').insert([
    {
      arena_name: arenaName,
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
    },
  ])
  if (error) throw new Error(error.message)

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
