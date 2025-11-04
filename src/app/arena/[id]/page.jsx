import ArenaClient from './ArenaClient'

export default async function Page({ params }) {
  const id = params?.id
  let initialArena = null
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL || ''
    const res = await fetch(`${base}/api/arena/${id}`, { cache: 'no-store' })
    if (res.ok) initialArena = await res.json()
  } catch (err) {
    console.error('Failed to fetch arena on server', err)
  }

  return <ArenaClient id={id} initialArena={initialArena} />
}
