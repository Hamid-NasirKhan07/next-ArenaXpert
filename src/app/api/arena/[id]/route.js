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
