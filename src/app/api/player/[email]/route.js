import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    // in this dynamic route we expect email as part of pathname
    const parts = req.url.split('/').filter(Boolean)
    const email = parts[parts.length - 1]
    if (!email) return new Response(JSON.stringify({ error: 'Missing email' }), { status: 400 })

    const player = await prisma.players.findUnique({
      where: { email }
    })
    if (!player) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
    return new Response(JSON.stringify(player), { status: 200 })
  } catch (err) {
    console.error('Get player error', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export async function PUT(req) {
  try {
    const parts = req.url.split('/').filter(Boolean)
    const email = parts[parts.length - 1]
    if (!email) return new Response(JSON.stringify({ error: 'Missing email' }), { status: 400 })

    const body = await req.json()
    const updated = await prisma.players.update({
      where: { email },
      data: { ...body, updatedAt: new Date() }
    })
    if (!updated) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
    return new Response(JSON.stringify(updated), { status: 200 })
  } catch (err) {
    console.error('Update player error', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
