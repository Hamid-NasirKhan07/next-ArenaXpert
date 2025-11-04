import Link from 'next/link'

export default function CricketPage({ arenas = [] }) {
  return (
    <div>
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">Cricket Arenas</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/categories/cricket">Cricket</Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Start */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="position-relative d-inline text-primary ps-4">Cricket Arenas</h6>
            <h2 className="mt-2">Book your favorite cricket arena now!</h2>
          </div>
          
          <div className="row g-4 portfolio-container" style={{ minHeight: '400px', marginBottom: '50px' }}>
            {arenas.length > 0 ? (
              arenas.map((arena) => (
                <div key={arena._id} className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s" style={{ position: 'relative', marginBottom: '30px' }}>
                  <div className="position-relative rounded overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={arena.arenaDetails?.images?.[0] || '/img/arena.jpg'}
                      alt={arena.arenaDetails?.arenaName}
                      style={{ width: '100%', height: '330px', objectFit: 'cover', display: 'block' }}
                    />
                    <div className="portfolio-overlay">
                      <a className="btn btn-light" href={arena.arenaDetails?.images?.[0] || '/img/arena.jpg'} data-lightbox="portfolio">
                        <i className="fa fa-plus fa-2x text-primary"></i>
                      </a>
                      <div className="mt-auto">
                        <small className="text-white">
                          <i className="fa fa-folder me-2"></i>
                          {arena.arenaDetails?.arenaName}
                        </small>
                        <br />
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
                <p className="text-muted">No cricket arenas found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Portfolio End */}
    </div>
  )
}
