import React from 'react'

export default function Hero_Home() {
  return (
    <div>
           <div className="container-xxl py-5 bg-primary hero-header mb-5">
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated zoomIn">One Click to the Pitch Reserve, Compete, Repeat!</h1>
                            <p className="text-white pb-3 animated zoomIn">ArenaXpert is an intuitive sports booking application that connects players and arena owners. Users can easily schedule matches, form teams, and reserve sports arenas, while owners manage bookings and availability with ease.</p>
                            <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Book now</a>
                        </div>
                        <div className="col-md-6 col-lg-6 text-center text-lg-start">
                            <img  src="img/cric.jpg" alt="" style={{width:"100%",borderRadius:"10px"}}/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
