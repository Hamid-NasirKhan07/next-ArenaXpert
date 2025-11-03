import { headers } from 'next/headers'
import Link from 'next/link'
import ArenaActions from './ArenaActions'

export default async function DashboardArenas() {
  const h = await headers()
  const host = h.get('host') || 'localhost:3000'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`

  let arenas = []
  try {
    const res = await fetch(`${baseUrl}/api/arenas`, { cache: 'no-store' })
    if (res.ok) arenas = await res.json()
  } catch {}

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="card-title mb-0">Arenas</h5>
          <Link href="/dashboard/arenas/new" className="btn btn-primary btn-sm">+ Add Arena</Link>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Categories</th>
                <th>Price/hr</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arenas.map((a) => (
                <tr key={a._id || a.id}>
                  <td>{a.arenaDetails?.arenaName || a.name || '—'}</td>
                  <td>{(a.arenaDetails?.categories || []).join(', ')}</td>
                  <td>{a.arenaDetails?.price ? `Rs ${a.arenaDetails.price}` : '—'}</td>
                  <td><ArenaActions id={a._id || a.id} /></td>
                </tr>
              ))}
              {arenas.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-muted">No arenas found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
