import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { createClient } from '@/server/supabase/serverClient'

// Helper to normalize arenas so consumers can rely on arenaDetails fields
function normalizeArenas(rows = []) {
  return rows.map((r) => {
    const details = r.arenaDetails || {}
    const displayName = r.name || details.arenaName || ''
    const displayPrice = r.price || details.price || 0
    const image =
      (details.images && details.images[0]) ||
      (details.arenaImageUrls && details.arenaImageUrls[0]) ||
      details.image ||
      '/img/arena.jpg'
    return {
      _id: r.id || r._id,
      arenaDetails: {
        arenaName: displayName,
        price: displayPrice,
        images: [image],
        arenaImageUrls: details.arenaImageUrls || details.images || [],
        ...details,
      },
      raw: r,
    }
  })
}

export async function GET() {
  // Prefer Supabase (HTTP) first so we don't hard-fail when Prisma cannot reach the DB
  try {
    const supabase = await createClient()
    // Try common table names 'arena' and 'arenas'
    let supResponse = await supabase.from('arena').select('id, name, price, arenaDetails').order('createdAt', { ascending: false })
    if (supResponse.error) {
      supResponse = await supabase.from('arenas').select('id, name, price, arenaDetails').order('createdAt', { ascending: false })
    }

    if (!supResponse.error && Array.isArray(supResponse.data) && supResponse.data.length > 0) {
      return NextResponse.json(normalizeArenas(supResponse.data))
    }
  } catch (e) {
    // swallow and try prisma fallback below
    console.warn('Supabase GET fallback to Prisma due to:', e?.message || e)
  }

  // Fallback to Prisma if Supabase did not return data
  try {
    const arenas = await prisma.arena.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(normalizeArenas(arenas))
  } catch (err) {
    console.error('Get arenas error (Prisma + Supabase fallback failed):', err)
    return NextResponse.json([])
  }
}

export async function POST(request) {
  try {
  const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    const user = data?.user
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await request.json()
    // Expect arenaDetails object from client
    const arenaDetails = body.arenaDetails || body

    // Basic validation
    if (!arenaDetails || !arenaDetails.arenaName) {
      return NextResponse.json({ error: 'arenaName is required' }, { status: 400 })
    }
    // Time validation (24h HH:MM) closing must be greater than opening
    const toMinutes = (t) => {
      if (!t || typeof t !== 'string') return null
      const [h, m] = t.split(':').map((x) => parseInt(x, 10))
      if (Number.isNaN(h) || Number.isNaN(m)) return null
      return h * 60 + m
    }
    const openMin = toMinutes(arenaDetails.openingTime)
    const closeMin = toMinutes(arenaDetails.closingTime)
    if (openMin == null || closeMin == null) {
      return NextResponse.json({ error: 'openingTime and closingTime are required in HH:MM (24h) format' }, { status: 400 })
    }
    if (closeMin <= openMin) {
      return NextResponse.json({ error: 'closingTime must be greater than openingTime' }, { status: 400 })
    }

    // Try to resolve owner and write via Supabase first (HTTP). If that fails, fall back to Prisma.

    // Normalize details and keep compatibility key `images`
    const details = {
      arenaName: arenaDetails.arenaName,
      phoneNumber: arenaDetails.phoneNumber || '',
      address: arenaDetails.address || '',
      length: Number(arenaDetails.length) || 0,
      width: Number(arenaDetails.width) || 0,
      height: Number(arenaDetails.height) || 0,
      price: Number(arenaDetails.price) || 0,
      openingTime: arenaDetails.openingTime,
      closingTime: arenaDetails.closingTime,
      description: arenaDetails.description || '',
      categories: Array.isArray(arenaDetails.categories) ? arenaDetails.categories : [],
      arenaImageUrls: Array.isArray(arenaDetails.arenaImageUrls) ? arenaDetails.arenaImageUrls : [],
      images: Array.isArray(arenaDetails.arenaImageUrls) ? arenaDetails.arenaImageUrls : (Array.isArray(arenaDetails.images) ? arenaDetails.images : []),
      // ownerProfileId will be populated after we resolve owner below
    }

    // Supabase-first path
    try {
      // Resolve owner profile by supabase user id
      // Try variations of table name to match existing DB naming
      let ownerRes = await supabase.from('OwnerProfile').select('id').eq('supabaseUserId', user.id).maybeSingle()
      if (ownerRes.error || !ownerRes.data) {
        ownerRes = await supabase.from('owner_profile').select('id').eq('supabaseUserId', user.id).maybeSingle()
      }
      if (ownerRes.error || !ownerRes.data) {
        return NextResponse.json({ error: 'Complete owner profile first' }, { status: 403 })
      }
      const ownerId = ownerRes.data.id

      // Enforce max 3 arenas per owner
      let countRes = await supabase
        .from('arena')
        .select('id', { count: 'exact', head: true })
        .eq('ownerProfileId', ownerId)
      if (countRes.error) {
        countRes = await supabase
          .from('arenas')
          .select('id', { count: 'exact', head: true })
          .eq('ownerProfileId', ownerId)
      }
      const arenaCount = typeof countRes.count === 'number' ? countRes.count : 0
      if (arenaCount >= 3) {
        return NextResponse.json({ error: 'You can only add up to 3 arenas' }, { status: 403 })
      }

      // Create arena via Supabase REST
      const insertPayload = {
        name: details.arenaName || null,
        price: details.price || null,
        arenaDetails: details,
        ownerProfileId: ownerId,
      }
      let insertRes = await supabase.from('arena').insert(insertPayload).select('*').single()
      if (insertRes.error) {
        insertRes = await supabase.from('arenas').insert(insertPayload).select('*').single()
      }
      if (insertRes.error) {
        throw insertRes.error
      }
      return NextResponse.json(insertRes.data, { status: 201 })
    } catch (supErr) {
      console.warn('Supabase POST failed, falling back to Prisma:', supErr?.message || supErr)
    }

    // Prisma fallback path
    try {
      // Attach owner by supabaseUserId
      const owner = await prisma.ownerProfile.findUnique({ where: { supabaseUserId: user.id } })
      if (!owner) {
        return NextResponse.json({ error: 'Complete owner profile first' }, { status: 403 })
      }

      // Enforce max 3 arenas per owner
      const count = await prisma.arena.count({ where: { ownerProfileId: owner.id } })
      if (count >= 3) {
        return NextResponse.json({ error: 'You can only add up to 3 arenas' }, { status: 403 })
      }

      const created = await prisma.arena.create({
        data: {
          name: details.arenaName || undefined,
          arenaDetails: details,
          ownerProfileId: owner.id,
        },
      })
      return NextResponse.json(created, { status: 201 })
    } catch (prismaErr) {
      throw prismaErr
    }
  } catch (err) {
    console.error('Create arena error', err)
    return NextResponse.json({ error: 'Failed to create arena' }, { status: 500 })
  }
}
