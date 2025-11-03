import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import normalizePlayer from '@/lib/normalizePlayer'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/serverClient'

const prisma = new PrismaClient()

export default async function Play() {
  // Determine logged-in user server-side via Supabase cookies
  let user = null
  try {
    const supabase = await createSupabaseServerClient()
    const { data } = await supabase.auth.getUser()
    user = data?.user || null
  } catch (e) {
    // ignore auth errors and treat as unauthenticated
    user = null
  }

  if (!user) {
    // Render login prompt server-side for unauthenticated visitors
    return (
      <>
        <div className="container-xxl py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5 text-center text-white">
            <h1 className="animated zoomIn">Please Login or Sign Up</h1>
            <Link href="/loginmodal">
              <button className="btn btn-light me-2">Login / Sign Up</button>
            </Link>
          </div>
        </div>
      </>
    )
  }

  // Fetch players server-side for SSR
  const rows = await prisma.players.findMany({ orderBy: { createdAt: 'desc' } })
  const players = (Array.isArray(rows) ? rows : []).map(normalizePlayer).filter(Boolean)

  return (
    <div>
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">All Players</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Players
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Players cards */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="position-relative d-inline text-primary ps-4">Play now</h6>
            <h2 className="mt-2">Pick your player and complete your team now</h2>
          </div>
          <div className="row g-4">
            {players.length === 0 ? (
              <p>No players registered yet.</p>
            ) : (
              players.map((player) => (
                <div key={player.id} className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{player.displayName}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{(player.sport || '').charAt(0).toUpperCase() + (player.sport || '').slice(1)}</h6>
                      <p className="card-text"><strong>Speciality:</strong> {player.speciality || 'N/A'}</p>
                      <p className="card-text"><strong>Description:</strong> {player.description || 'N/A'}</p>
                      <p className="card-text"><strong>Contact:</strong> {player.contactNumber || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
