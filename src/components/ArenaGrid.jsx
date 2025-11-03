"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ArenaGrid({ arenas = [] }) {
  const [selectedFilter, setSelectedFilter] = useState('All')

  // Filter arenas based on selected category
  const filteredArenas = arenas.filter(arena => {
    if (selectedFilter === 'All') return true
    
    const categories = arena.arenaDetails?.categories || []
    return categories.some(cat => 
      cat.toLowerCase() === selectedFilter.toLowerCase()
    )
  })

  return (
    <>
      <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
        <div className="col-12 text-center">
          <ul className="list-inline mb-5" id="portfolio-flters">
            <li 
              className={`btn px-3 pe-4 ${selectedFilter === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('All')}
              style={{ cursor: 'pointer' }}
            >
              All
            </li>
            <li 
              className={`btn px-3 pe-4 ${selectedFilter === 'Cricket' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('Cricket')}
              style={{ cursor: 'pointer' }}
            >
              Cricket
            </li>
            <li 
              className={`btn px-3 pe-4 ${selectedFilter === 'Football' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('Football')}
              style={{ cursor: 'pointer' }}
            >
              Football
            </li>
            <li 
              className={`btn px-3 pe-4 ${selectedFilter === 'Badminton' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('Badminton')}
              style={{ cursor: 'pointer' }}
            >
              Badminton
            </li>
          </ul>
        </div>
      </div>
      <div className="row g-4 portfolio-container" style={{ minHeight: '400px', marginBottom: '50px' }}>
        {filteredArenas.length > 0 ? (
          filteredArenas.map((arena) => (
            <div key={arena._id} className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s" style={{ position: 'relative', marginBottom: '30px' }}>
              <div className="position-relative rounded overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src={arena.arenaDetails?.images?.[0] || '/img/arena.jpg'}
                  alt={arena.arenaDetails?.arenaName}
                  style={{ width: '100%', height: '330px', objectFit: 'cover', display: 'block' }}
                />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-light"
                    href={arena.arenaDetails?.images?.[0] || '/img/arena.jpg'}
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-plus fa-2x text-primary"></i>
                  </a>
                  <div className="mt-auto">
                    <small className="text-white">
                      <i className="fa fa-folder me-2"></i>
                      {arena.arenaDetails?.arenaName}
                    </small>
                    <Link href={`/arena/${arena._id}`} className="h5 d-block text-white mt-1 mb-0">
                      Rs {arena.arenaDetails?.price}/hr
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="text-muted">No arenas found for the selected category.</p>
          </div>
        )}
      </div>
    </>
  )
}
