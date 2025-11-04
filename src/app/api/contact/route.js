import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create contact entry in database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
        status: 'pending'
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! Your message has been submitted successfully.',
        contactId: contact.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit your message. Please try again later.' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve all contacts (for admin purposes)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    let contacts
    if (status) {
      contacts = await prisma.contact.findMany({
        where: { status },
        orderBy: { createdAt: 'desc' }
      })
    } else {
      contacts = await prisma.contact.findMany({
        orderBy: { createdAt: 'desc' }
      })
    }

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve contacts' },
      { status: 500 }
    )
  }
}
