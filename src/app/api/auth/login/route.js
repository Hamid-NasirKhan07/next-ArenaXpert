import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const body = await req.json()
    const { email, password } = body
    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 })
    }

    // Plaintext comparison: password is stored raw in `passwordHash` per request
    if (password !== user.passwordHash) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 })
    }

    // Return user object only (no JWT/token)
    return new Response(JSON.stringify({ success: true, user: { id: user.id, email: user.email, name: user.name } }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
