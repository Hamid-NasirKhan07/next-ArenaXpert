import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { createClient } from '@/lib/supabase/serverClient'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const arenas = await prisma.arena.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(arenas)
  } catch (err) {
    console.error('Get arenas error', err)
    // Return empty array without dummy fallback
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
      userId: owner.id,
    }

    // Create arena record in database
    const created = await prisma.arena.create({
      data: {
        name: details.arenaName || undefined,
        arenaDetails: details,
        ownerProfileId: owner.id,
      },
    })

    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    console.error('Create arena error', err)
    return NextResponse.json({ error: 'Failed to create arena' }, { status: 500 })
  }
}
