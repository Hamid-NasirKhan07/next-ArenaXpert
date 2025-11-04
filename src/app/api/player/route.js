import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const players = await prisma.players.findMany({ orderBy: { createdAt: 'desc' } })
    return new Response(JSON.stringify(players), { status: 200 })
  } catch (err) {
    console.error('List players error', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
