import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')
    if (!email) {
      return new Response(JSON.stringify({ error: 'Missing email' }), { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })
    }

    const safe = { id: user.id, email: user.email, name: user.name, phone: user.phone }
    return new Response(JSON.stringify({ success: true, user: safe }), { status: 200 })
  } catch (err) {
    console.error('Get user error', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
