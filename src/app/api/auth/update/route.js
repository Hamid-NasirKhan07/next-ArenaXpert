import prisma from '@/lib/prisma'

export async function POST(req) {
  try {
    const body = await req.json()
    const { id, email, name, phone } = body

    if (!id && !email) {
      return new Response(JSON.stringify({ error: 'Missing user identifier (id or email)' }), { status: 400 })
    }

    const update = {}
    if (typeof name === 'string') update.name = name
    if (typeof phone === 'string') update.phone = phone

    let user = null
    if (id) {
      user = await prisma.user.update({
        where: { id },
        data: update
      })
    } else {
      // Update by email when id not provided
      user = await prisma.user.update({
        where: { email },
        data: update
      })
    }
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })
    }

    // Return a minimal, safe user object to the client
    const safe = { id: user.id, email: user.email, name: user.name, phone: user.phone }
    return new Response(JSON.stringify({ success: true, user: safe }), { status: 200 })
  } catch (err) {
    console.error('Profile update error', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
