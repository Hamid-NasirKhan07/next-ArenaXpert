import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import path from 'path'
import { promises as fs } from 'fs'
import { createClient } from '@/server/supabase/serverClient'

export const runtime = 'nodejs'

export async function GET(request, props) {
  const params = await props.params;
  const { id } = params || {}
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

  // Try Supabase first (HTTP)
  try {
    const supabase = await createClient()
    let sel = await supabase.from('arena').select('*').eq('id', id).maybeSingle()
    if (sel.error || !sel.data) {
      sel = await supabase.from('arenas').select('*').eq('id', id).maybeSingle()
    }
    if (sel.data) return NextResponse.json(sel.data)
  } catch (e) {
    console.warn('Arena [id] GET: Supabase fetch failed, trying Prisma', e?.message || e)
  }

  // Prisma fallback
  try {
    const arena = await prisma.arena.findUnique({ where: { id } })
    if (arena) return NextResponse.json(arena)
  } catch (err) {
    console.error('Arena [id] GET: Prisma fetch error', err)
  }

  // Fallback to sample data
  const { origin } = new URL(request.url)
  const sampleArenas = {
    arena1: {
      _id: 'arena1',
      arenaDetails: {
        arenaName: 'Downtown Arena',
        price: 1200,
        description:
          'A premium indoor sports facility located in the heart of downtown. Perfect for cricket, football, and badminton. Features modern amenities, professional lighting, and high-quality turf.',
        address: '123 Downtown Street, City Center',
        categories: ['Cricket', 'Football', 'Badminton'],
        dimensions: { length: 120, width: 80, height: 30 },
        openingTime: '06:00',
        closingTime: '22:00',
        images: [`${origin}/img/arena1.jpg`, `${origin}/img/arena.jpg`, `${origin}/img/cric.jpg`],
      },
    },
    arena2: {
      _id: 'arena2',
      arenaDetails: {
        arenaName: 'City Sports Complex',
        price: 1500,
        description:
          'State-of-the-art sports complex with multiple courts and facilities. Ideal for tournaments and regular practice sessions. Equipped with changing rooms, cafeteria, and parking.',
        address: '456 Sports Avenue, North District',
        categories: ['Cricket', 'Football'],
        dimensions: { length: 150, width: 100, height: 35 },
        openingTime: '05:00',
        closingTime: '23:00',
        images: [`${origin}/img/arena2.jpg`, `${origin}/img/sports.jpg`, `${origin}/img/sports-2.jpg`],
      },
    },
    arena3: {
      _id: 'arena3',
      arenaDetails: {
        arenaName: 'Lakeside Field',
        price: 900,
        description:
          'Beautiful outdoor arena with scenic lake views. Perfect for cricket and football matches. Natural grass pitch with excellent drainage system.',
        address: '789 Lake Road, Riverside',
        categories: ['Cricket', 'Football'],
        dimensions: { length: 110, width: 75, height: 25 },
        openingTime: '07:00',
        closingTime: '20:00',
        images: [`${origin}/img/arena3.jpg`, `${origin}/img/arena.jpg`],
      },
    },
    arena4: {
      _id: 'arena4',
      arenaDetails: {
        arenaName: 'Green Park Turf',
        price: 1100,
        description:
          'Eco-friendly sports facility with synthetic turf. Suitable for all weather conditions. Features floodlights for evening games and comfortable seating for spectators.',
        address: '321 Green Park, West Zone',
        categories: ['Football', 'Badminton'],
        dimensions: { length: 100, width: 70, height: 28 },
        openingTime: '06:00',
        closingTime: '21:00',
        images: [`${origin}/img/arena4.jpg`, `${origin}/img/arena.jpg`],
      },
    },
    arena5: {
      _id: 'arena5',
      arenaDetails: {
        arenaName: 'Arena Five',
        price: 1300,
        description:
          'Multi-purpose indoor arena with air conditioning. Perfect for badminton and indoor cricket. Professional court markings and equipment available for rent.',
        address: '555 Stadium Road, East District',
        categories: ['Badminton', 'Cricket'],
        dimensions: { length: 95, width: 65, height: 32 },
        openingTime: '06:00',
        closingTime: '22:00',
        images: [`${origin}/img/arena5.jpg`, `${origin}/img/arena.jpg`],
      },
    },
    arena7: {
      _id: 'arena7',
      arenaDetails: {
        arenaName: 'Arena Seven',
        price: 1400,
        description:
          'Premium sports venue with international standard facilities. Hosts professional tournaments and training camps. Includes gym, physiotherapy room, and coaching staff.',
        address: '777 Champions Way, South City',
        categories: ['Cricket', 'Football', 'Badminton'],
        dimensions: { length: 130, width: 90, height: 40 },
        openingTime: '05:00',
        closingTime: '23:00',
        images: [`${origin}/img/arena7.jpg`, `${origin}/img/arena.jpg`, `${origin}/img/sports.jpg`],
      },
    },
  }

  const arena = sampleArenas[id]
  if (arena) return NextResponse.json(arena)
  return NextResponse.json({ error: 'Arena not found' }, { status: 404 })
}

export async function DELETE(request, props) {
  const params = await props.params;
  const { id } = params || {}
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  try {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    const user = data?.user
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const prismaArena = await prisma.arena.findUnique({ where: { id } })
    if (!prismaArena) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    // Check ownership via OwnerProfile
    const owner = await prisma.ownerProfile.findUnique({ where: { supabaseUserId: user.id } })
    if (!owner || prismaArena.ownerProfileId !== owner.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Attempt to delete local images if they are under /public/uploads/arenas/{ownerId}
    try {
      const details = prismaArena.arenaDetails || {}
      const urls = Array.isArray(details.arenaImageUrls) ? details.arenaImageUrls : []
      const basePrefix = `/uploads/arenas/${owner.id}/`
      for (const url of urls) {
        if (typeof url !== 'string') continue
        if (!url.startsWith(basePrefix)) continue
        const rel = url.replace(/^\/+/, '') // strip leading '/'
        const fullPath = path.join(process.cwd(), 'public', rel)
        try {
          await fs.unlink(fullPath)
        } catch {}
      }
    } catch {}

    await prisma.arena.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Delete arena error', err)
    return NextResponse.json({ error: 'Failed to delete arena' }, { status: 500 })
  }
}
