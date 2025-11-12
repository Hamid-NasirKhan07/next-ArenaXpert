import prisma from '@/lib/prisma'

export async function GET(request) {
  try {
    const url = new URL(request.url)
    const email = url.searchParams.get('email')

    if (email) {
      const booking = await prisma.booking.findUnique({ where: { email } })
      return new Response(JSON.stringify(booking ? [booking] : []), { status: 200 })
    }

    // If no email specified, return all bookings
    const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } })
    return new Response(JSON.stringify(bookings), { status: 200 })
  } catch (error) {
    console.error('Bookings GET error', error)
    return new Response(JSON.stringify({ error: error.message || 'Internal error' }), { status: 500 })
  }
}

