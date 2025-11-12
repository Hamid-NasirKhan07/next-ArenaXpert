import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { createClient } from '@/server/supabase/serverClient'

export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Supabase environment variables are missing')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const supabase = await createClient()
    if (!supabase || !supabase.auth) {
      console.error('Failed to create Supabase client or auth is undefined')
      return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }

    const { data, error } = await supabase.auth.getUser()
    if (error) {
      console.error('Supabase auth error:', error)
      return NextResponse.json({ error: 'Authentication error' }, { status: 401 })
    }
    const user = data?.user
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const profile = await prisma.ownerProfile.findUnique({ where: { supabaseUserId: user.id } })
    if (!profile) return NextResponse.json({ error: 'Not Found' }, { status: 404 })

    return NextResponse.json(profile)
  } catch (err) {
    console.error('Owner profile GET error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    const user = data?.user
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await request.json()
    const { firstName, lastName, username, phone, province, city } = body

    if (!firstName || !lastName || !username || !phone || !province || !city) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const created = await prisma.ownerProfile.upsert({
      where: { supabaseUserId: user.id },
      update: { firstName, lastName, username, phone, province, city },
      create: { supabaseUserId: user.id, firstName, lastName, username, phone, province, city },
    })

    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    if (err?.code === 'P2002') {
      // Unique constraint (e.g., username)
      return NextResponse.json({ error: 'Username already taken' }, { status: 409 })
    }
    console.error('Owner profile POST error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    const user = data?.user
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await request.json()
    const { firstName, lastName, username, phone, province, city } = body

    const updated = await prisma.ownerProfile.update({
      where: { supabaseUserId: user.id },
      data: { firstName, lastName, username, phone, province, city },
    })

    return NextResponse.json(updated)
  } catch (err) {
    if (err?.code === 'P2025') {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }
    if (err?.code === 'P2002') {
      return NextResponse.json({ error: 'Username already taken' }, { status: 409 })
    }
    console.error('Owner profile PUT error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
