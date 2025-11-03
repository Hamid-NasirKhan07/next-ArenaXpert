import { PrismaClient } from '../../../../../src/generated/prisma'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, password } = body
    if (!email || !password || !name) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return new Response(JSON.stringify({ error: 'Email already registered' }), { status: 409 })
    }

    const passwordHash = password
    const user = await prisma.user.create({
      data: { name, email, passwordHash }
    })

    return new Response(JSON.stringify({ success: true, user: { id: user.id, email: user.email, name: user.name } }), { status: 201 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
