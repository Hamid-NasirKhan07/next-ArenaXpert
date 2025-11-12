import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    const body = await request.json()

    // Accept either top-level email or nested user.email
    const email = body.email || (body.user && body.user.email)
    if (!email) {
      return new Response(JSON.stringify({ error: 'Missing user email' }), { status: 400 })
    }

    // Accept arena id from several shapes (arenaId, arena._id, arena.id)
    const arenaId = body.arenaId || (body.arena && (body.arena._id || body.arena.id)) || null
    if (!arenaId) {
      return new Response(JSON.stringify({ error: 'Missing arenaId' }), { status: 400 })
    }

    const bookingData = {
      email,
      name: (body.user && body.user.name) || body.name || null,
      phone: (body.user && body.user.phone) || body.phone || null,
      arenaId,
      arenaName: body.arenaName,
      timeSlot: body.timeSlot,
      date: body.date,
      status: body.status || 'Confirmed',
    }

    // Try to create; if email already exists, update that booking (one booking per email)
    try {
      const created = await prisma.booking.create({ data: bookingData })
      return new Response(JSON.stringify(created), { status: 201 })
    } catch (err) {
      // Handle unique constraint violation (email already exists)
      // Prisma error code for unique constraint is P2002
      if (err?.code === 'P2002') {
        const existing = await prisma.booking.update({
          where: { email: bookingData.email },
          data: bookingData,
        })
        return new Response(JSON.stringify(existing), { status: 200 })
      }
      throw err
    }
  } catch (error) {
    console.error('Booking POST error', error)
    return new Response(JSON.stringify({ error: error.message || 'Internal error' }), { status: 500 })
  }
}
