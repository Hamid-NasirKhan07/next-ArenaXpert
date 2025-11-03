import { headers } from 'next/headers'
import BadmintonPage from './BadmintonPage'

export default async function Badminton() {
  // Build a robust base URL that respects the current host and port
  const h = await headers()
  const host = h.get('host') || 'localhost:3000'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`

  const res = await fetch(`${baseUrl}/api/arenas`, { cache: 'no-store' })
  let arenas = []
  try {
    if (res.ok) {
      arenas = await res.json()
    }
  } catch (e) {
    arenas = []
  }

  // Filter only badminton arenas
  const badmintonArenas = arenas.filter(arena => {
    const categories = arena.arenaDetails?.categories || []
    return categories.some(cat => cat.toLowerCase() === 'badminton')
  })

  return <BadmintonPage arenas={badmintonArenas} />
}
