import BookingClient from './BookingClient'

export default async function BookingPage() {
  let initialBookings = []
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL || ''
    const res = await fetch(`${base}/api/bookings`, { cache: 'no-store' })
    if (res.ok) initialBookings = await res.json()
  } catch (err) {
    // swallow - client can fetch later
    console.error('Failed to fetch initial bookings', err)
  }

  return <BookingClient initialBookings={initialBookings} />
}
