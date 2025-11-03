import { NextResponse } from 'next/server'

// Sample booking data; in the future connect to Prisma/Supabase
const SAMPLE = [
  { _id: 'b1', arenaName: 'Downtown Arena', userName: 'Ali Raza', date: '2025-11-01', timeSlot: '10:00 to 11:00', status: 'confirmed' },
  { _id: 'b2', arenaName: 'City Sports Complex', userName: 'Zeeshan', date: '2025-11-02', timeSlot: '12:00 to 13:00', status: 'pending' },
  { _id: 'b3', arenaName: 'Downtown Arena', userName: 'Zain', date: '2025-11-03', timeSlot: '14:00 to 15:00', status: 'cancelled' },
]

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const arenaName = searchParams.get('arenaName')?.toLowerCase() || ''

  const filtered = arenaName
    ? SAMPLE.filter(b => (b.arenaName || '').toLowerCase().includes(arenaName))
    : SAMPLE

  return NextResponse.json(filtered)
}
