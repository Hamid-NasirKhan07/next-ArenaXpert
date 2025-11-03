import Book from '../Book'
import { headers } from 'next/headers'
import { createClient } from '@/server/supabase/serverClient'

export default async function Page() {
  let arenas = []
  try {
    const supabase = await createClient()
    let supResponse = await supabase.from('arena').select('id, name, price, arenaDetails')
    if (supResponse.error) {
      supResponse = await supabase.from('arenas').select('id, name, price, arenaDetails')
    }
    if (!supResponse.error && Array.isArray(supResponse.data) && supResponse.data.length > 0) {
      arenas = supResponse.data.map((r) => {
        const details = r.arenaDetails || {}
        const displayName = r.name || details.arenaName || ''
        const displayPrice = r.price || details.price || 0
        const image = (details.images && details.images[0]) || (details.arenaImageUrls && details.arenaImageUrls[0]) || details.image || '/img/arena.jpg'
        return {
          _id: r.id || r._id,
          arenaDetails: {
            arenaName: displayName,
            price: displayPrice,
            images: [image],
            arenaImageUrls: details.arenaImageUrls || details.images || [],
            ...details,
          },
          raw: r,
        }
      })
    }
    // if supResponse had no error but empty data, treat as no-result and fallthrough to fallback
    if (supResponse && (!supResponse.data || supResponse.data.length === 0)) {
      throw new Error('No supabase data')
    }
  } catch (err) {
    // fallback to internal API using headers
    try {
      const h = await headers()
      const host = h.get('host') || 'localhost:3000'
      const protocol = host.includes('localhost') ? 'http' : 'https'
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`
      const res = await fetch(`${baseUrl}/api/arenas`, { cache: 'no-store' })
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data)) {
          arenas = data.map((r) => {
            const details = r.arenaDetails || {}
            const displayName = r.name || details.arenaName || ''
            const displayPrice = r.price || details.price || 0
            const image = (details.images && details.images[0]) || (details.arenaImageUrls && details.arenaImageUrls[0]) || details.image || '/img/arena.jpg'
            return {
              _id: r.id || r._id,
              arenaDetails: {
                arenaName: displayName,
                price: displayPrice,
                images: [image],
                arenaImageUrls: details.arenaImageUrls || details.images || [],
                ...details,
              },
              raw: r,
            }
          })
        }
      }
    } catch (e) {
      arenas = []
    }
  }

  return <Book arenas={arenas} />
}
