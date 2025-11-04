import OwnerProfileClient from './OwnerProfileClient'

export default async function OwnerProfilePage() {
  let initialProfile = null
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL || ''
    const res = await fetch(`${base}/api/owner/profile`, { cache: 'no-store' })
    if (res.ok) initialProfile = await res.json()
  } catch (err) {
    console.error('Failed to fetch initial profile', err)
  }

  return <OwnerProfileClient initialProfile={initialProfile} />
}
