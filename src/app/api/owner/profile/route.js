import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { createClient } from '@/lib/supabase/serverClient'

const prisma = new PrismaClient()

export async function GET() {
  try {
  const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
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
