import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const body = await req.json()
    const { email, sport, displayName, speciality, description, contactNumber } = body
    if (!email) return new Response(JSON.stringify({ error: 'Missing email' }), { status: 400 })

    // Upsert player by email
    const player = await prisma.players.upsert({
      where: { email },
      update: {
        sport,
        displayName,
        speciality,
        description,
        contactNumber,
        updatedAt: new Date()
      },
      create: {
        email,
        sport,
        displayName,
        speciality,
        description,
        contactNumber
      }
    })

    return new Response(JSON.stringify({ success: true, player }), { status: 200 })
  } catch (err) {
    console.error('Create player error', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
