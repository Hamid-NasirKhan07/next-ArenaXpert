import prisma from '@/lib/prisma'

export async function GET(request) {
  try {
    const url = new URL(request.url)
    const email = url.searchParams.get('email')
    const arenaId = url.searchParams.get('arenaId')
    const date = url.searchParams.get('date')

    // If email specified, return bookings for that email
    if (email) {
      const bookings = await prisma.booking.findMany({ where: { email }, orderBy: { createdAt: 'desc' } })
      return new Response(JSON.stringify(bookings), { status: 200 })
    }

    // If arenaId and date specified, return bookings for that arena on that date
    if (arenaId && date) {
      const bookings = await prisma.booking.findMany({ where: { arenaId, date }, orderBy: { createdAt: 'desc' } })
      return new Response(JSON.stringify(bookings), { status: 200 })
    }

    // If no specific filters, return all bookings
    const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } })
    return new Response(JSON.stringify(bookings), { status: 200 })
  } catch (error) {
    console.error('Bookings GET error', error)
    return new Response(JSON.stringify({ error: error.message || 'Internal error' }), { status: 500 })
  }
}

