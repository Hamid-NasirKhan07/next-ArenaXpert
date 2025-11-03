import Hero_Home from '../components/Hero_Home'
import ArenaGrid from '../components/ArenaGrid'
import Link from 'next/link'
import { headers } from 'next/headers'
import { createClient } from '@/server/supabase/serverClient'

export default async function Home() {
  // Try to read arenas from Supabase first (server-side). Fall back to internal API.
  let arenas = []
  try {
    const supabase = await createClient()
    // Try common table names 'arena' and 'arenas'
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
    // Fallback: call internal API
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

  return (
    <div>
      <Hero_Home />
      {/* <!-- Portfolio Start --> */}
          <div className="container-xxl py-5">
            <div className="container px-lg-5">
              <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="position-relative d-inline text-primary ps-4">Book now</h6>
                <h2 className="mt-2">Book your favorite arena now!</h2>
              </div>
              <ArenaGrid arenas={arenas} />
            </div>
          </div>
      {/* <!-- Portfolio End --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-5 col-sm-4 col-lg-5"></div>
          <div className="col-md-4 col-xl-2 col-sm-4 col-lg-3">
            <a href="" className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">View more</a>
          </div>
          <div className="col-md-4 col-xl-5 col-sm-4 col-lg-4"></div>
        </div>
      </div>
      {/* <!-- Newsletter Start --> */}
      <div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container px-lg-5">
          <div className="row align-items-center" style={{ height: '250px' }}>
            <div className="col-12 col-md-6">
              <h3 className="text-white">What are you waiting for?</h3>
              <small className="text-white">Ready to enjoy your favorite sports</small>
              <div className="position-relative w-100 mt-3">
                <Link href="/book" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInDown">Book now</Link>
                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
              </div>
            </div>
            <div className="col-md-6 text-center mb-n5 d-none d-md-block">
              <img className="img-fluid mt-5" style={{ height: '250px', width: '100%' }} src="img/sports.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
