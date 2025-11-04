export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import prisma from '@/lib/prisma'
import { createClient } from '@/server/supabase/serverClient'

const prisma = new PrismaClient()

function sanitize(name) {
  return name.replace(/[^a-z0-9.\-_]/gi, '_')
}

export async function POST(request) {
  try {
    // Require auth and determine owner folder name from OwnerProfile.id
  const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    const user = data?.user
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const owner = await prisma.ownerProfile.findUnique({ where: { supabaseUserId: user.id } })
    if (!owner) return NextResponse.json({ error: 'Complete owner profile first' }, { status: 403 })

    const form = await request.formData()
    const files = form.getAll('files')
    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No files uploaded' }, { status: 400 })
    }

    const baseDir = path.join(process.cwd(), 'public', 'uploads', 'arenas', owner.id)
    await fs.mkdir(baseDir, { recursive: true })

    const urls = []
    for (const f of files) {
      if (!f || typeof f === 'string') continue
      // f is a File from formData
      const file = f
      const type = file.type || ''
      if (!type.startsWith('image/')) continue
      const arrayBuf = await file.arrayBuffer()
      const buf = Buffer.from(arrayBuf)
      const filename = `${Date.now()}_${sanitize(file.name || 'image')}`
      const fullPath = path.join(baseDir, filename)
      await fs.writeFile(fullPath, buf)
      urls.push(`/uploads/arenas/${encodeURIComponent(owner.id)}/${encodeURIComponent(filename)}`)
    }

    if (urls.length === 0) {
      return NextResponse.json({ error: 'No valid image files' }, { status: 400 })
    }

    return NextResponse.json({ urls }, { status: 201 })
  } catch (err) {
    console.error('Local upload error', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
