"use client"

import React, { useState, useEffect } from 'react'

const styles = {
  containerXxl: {
    maxWidth: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '1140px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-15px',
    marginRight: '-15px',
  },
  colLg6: {
    position: 'relative',
    width: '50%',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  productDetailsTab: {
    marginBottom: '47px',
  },
  zoomWrapper: {
    position: 'relative',
  },
  singleZoom: {
    display: 'block',
  },
  singleZoomThumb: {
    marginTop: '20px',
    width: '100%',
  },
  sTabZoom: {
    display: 'flex',
    listStyle: 'none',
    paddingLeft: 0,
    marginBottom: 0,
    overflowX: 'auto',
  },
  sTabZoomLi: {
    border: '1px solid #ddd',
    marginRight: '10px',
  },
  productDRight: {
    textTransform: 'capitalize',
  },
  priceBox: {
    marginBottom: '14px',
  },
  currentPrice: {
    color: '#fd5018',
    fontSize: '23px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  productDesc: {
    marginBottom: '19px',
    fontSize: '14px',
  },
  productVariantSize: {
    marginBottom: '30px',
  },
  niceselectOption: {
    marginBottom: '16px',
    padding: '6px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#fd5018',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  productDMeta: {
    marginTop: '20px',
  },
  productDInfo: {
    marginBottom: '50px',
  },
  productDInner: {
    padding: '20px 30px 50px',
  },
  productInfoButton: {
    borderBottom: '1px solid #f0f0f0',
    marginBottom: '20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    paddingLeft: 0,
    marginBottom: 0,
  },
  navLi: {
    marginRight: '25px',
  },
  navLink: {
    display: 'block',
    color: '#999',
    textDecoration: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
  },
  tabContent: {
    marginTop: '20px',
  },
  tabPane: {
    display: 'none',
  },
  tabPaneActive: {
    display: 'block',
  },
}

function generateTimeSlots(openingTime, closingTime) {
  const slots = []
  if (!openingTime || !closingTime) return slots

  const [openHour, openMinute] = openingTime.split(':').map(Number)
  const [closeHour, closeMinute] = closingTime.split(':').map(Number)

  let start = new Date()
  start.setHours(openHour, openMinute, 0, 0)

  let end = new Date()
  end.setHours(closeHour, closeMinute, 0, 0)

  while (start < end) {
    const slotStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    start.setHours(start.getHours() + 1)
    const slotEnd = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    slots.push(`${slotStart} to ${slotEnd}`)
  }
  return slots
}

export default function ArenaClient({ id, initialArena = null }) {
  const [arena, setArena] = useState(initialArena)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('')
  const [availableTimeSlots, setAvailableTimeSlots] = useState([])

  useEffect(() => {
    let mounted = true

    async function fetchArena() {
      try {
        const response = await fetch(`/api/arena/${id}`)
        if (!response.ok) {
          console.error('Arena not found')
          return
        }
        const data = await response.json()
        if (!mounted) return
        setArena(data)

        const openTime = data.arenaDetails?.openingTime || '06:00'
        const closeTime = data.arenaDetails?.closingTime || '22:00'
        const slots = generateTimeSlots(openTime, closeTime)

        const bookings = JSON.parse(localStorage.getItem('bookings')) || []
        const bookedSlots = bookings.filter((b) => b.arenaId === id).map((b) => b.timeSlot)
        const filteredSlots = slots.filter((slot) => !bookedSlots.includes(slot))
        setAvailableTimeSlots(filteredSlots)
      } catch (error) {
        console.error('Error fetching arena data:', error)
      }
    }

    // If initialArena wasn't provided by server, fetch on client
    if (!arena && id) {
      fetchArena()
    } else if (arena) {
      // initialize slots from provided arena
      const openTime = arena.arenaDetails?.openingTime || '06:00'
      const closeTime = arena.arenaDetails?.closingTime || '22:00'
      const slots = generateTimeSlots(openTime, closeTime)
      const bookings = JSON.parse(localStorage.getItem('bookings')) || []
      const bookedSlots = bookings.filter((b) => b.arenaId === (arena._id || id)).map((b) => b.timeSlot)
      const filteredSlots = slots.filter((slot) => !bookedSlots.includes(slot))
      setAvailableTimeSlots(filteredSlots)
    }

    return () => { mounted = false }
  }, [id, arena])

  if (!arena) {
    return (
      <div>
        <div style={{ marginTop: '10%', textAlign: 'center' }}>Loading arena details...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5"></div>
        </div>
      </div>
      <div style={{ marginTop: '10%' }}>
        <div className="container-xxl bg-white p-0" style={styles.containerXxl}>
          <div className="container" style={styles.container}>
            <div className="row" style={styles.row}>
              <div className="col-lg-6 col-md-6" style={styles.colLg6}>
                <div style={styles.productDetailsTab}>
                  <div id="img-1" style={{ ...styles.zoomWrapper, ...styles.singleZoom }}>
                    <a href="#">
                      <img
                        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                        id="zoom1"
                        src={
                          arena.arenaDetails?.images && arena.arenaDetails.images.length > 0
                            ? arena.arenaDetails.images[0]
                            : '/img/arena.jpg'
                        }
                        alt={arena.arenaDetails?.arenaName || 'Arena'}
                      />
                    </a>
                  </div>
                  <div style={styles.singleZoomThumb}>
                    <ul className="s-tab-zoom owl-carousel single-product-active" id="gallery_01" style={styles.sTabZoom}>
                      {arena.arenaDetails?.images &&
                        arena.arenaDetails.images
                          .slice(0, 4)
                          .map((img, index) => (
                            <li key={index} style={styles.sTabZoomLi}>
                              <a
                                href="#"
                                className="elevatezoom-gallery active"
                                data-update=""
                                data-image={img}
                                data-zoom-image={img}
                              >
                                <img src={img} alt={`arena-img-${index}`} style={{ width: '100px', height: '80px', objectFit: 'cover' }} />
                              </a>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6" style={styles.productDRight}>
                <div>
                  <h1>{arena.arenaDetails?.arenaName || 'Arena'}</h1>
                  <div style={styles.priceBox}>
                    <span style={styles.currentPrice}>Rs {arena.arenaDetails?.price || 0}/hr</span>
                  </div>
                  <div style={styles.productDesc}>
                    <p>{arena.arenaDetails?.description || 'No description available.'}</p>
                  </div>
                  <div style={styles.productDMeta}>
                    <p><strong>Address:</strong> {arena.arenaDetails?.address || 'N/A'}</p>
                    <p>
                      <strong>Categories:</strong>{' '}
                      {arena.arenaDetails?.categories && arena.arenaDetails.categories.length > 0
                        ? arena.arenaDetails.categories.join(', ')
                        : 'N/A'}
                    </p>
                    <p>
                      <strong>Dimensions:</strong> Length {arena.arenaDetails?.dimensions?.length || 0}ft, 
                      Width {arena.arenaDetails?.dimensions?.width || 0}ft, 
                      Height {arena.arenaDetails?.dimensions?.height || 0}ft
                    </p>
                    <p>
                      <strong>Timing:</strong> {arena.arenaDetails?.openingTime || '06:00'} - {arena.arenaDetails?.closingTime || '22:00'}
                    </p>
                  </div>
                  <div className="product_variant size" style={styles.productVariantSize}>
                    <label><strong>Select Time Slot:</strong></label>
                    <select
                      className="niceselect_option ml-2"
                      id="timeSlots"
                      name="timeSlots"
                      style={styles.niceselectOption}
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    >
                      <option value="">Select Time</option>
                      {availableTimeSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    style={styles.button}
                    onClick={async () => {
                      if (!selectedTimeSlot) {
                        alert('Please select a time slot before booking.')
                        return
                      }
                      const storedUser = localStorage.getItem('user')
                      if (!storedUser) {
                        alert('Please complete your profile information in your Account before booking.')
                        return
                      }
                      const user = JSON.parse(storedUser)
                      if (!user.email) {
                        alert('Please complete your profile information in your Account before booking.')
                        return
                      }
                      const newBooking = {
                        arenaId: arena._id,
                        arenaName: arena.arenaDetails.arenaName,
                        timeSlot: selectedTimeSlot,
                        date: new Date().toLocaleDateString(),
                        status: 'Confirmed',
                        user: {
                          email: user.email,
                          name: user.name || '',
                          phone: user.phone || '',
                        },
                      }
                      try {
                        const response = await fetch('/api/booking', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(newBooking),
                        })
                        if (response.ok) {
                          alert('Booking successful!')
                          setAvailableTimeSlots(availableTimeSlots.filter((slot) => slot !== selectedTimeSlot))
                          setSelectedTimeSlot('')
                        } else {
                          const errorData = await response.json()
                          alert('Booking failed: ' + (errorData.error || JSON.stringify(errorData)))
                        }
                      } catch (error) {
                        alert('Booking failed: ' + error.message)
                      }
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.productDInfo}>
          <div className="container" style={styles.container}>
            <div className="row" style={styles.row}>
              <div className="col-12">
                <div style={styles.productDInner}>
                  <div style={styles.productInfoButton}>
                    <ul className="nav" role="tablist" style={styles.nav}>
                      <li style={styles.navLi}>
                        <a
                          className="active"
                          data-toggle="tab"
                          href="#info"
                          role="tab"
                          aria-controls="info"
                          aria-selected="false"
                          style={styles.navLink}
                        >
                          Description
                        </a>
                      </li>
                      <li style={styles.navLi}>
                        <a
                          data-toggle="tab"
                          href="#sheet"
                          role="tab"
                          aria-controls="sheet"
                          aria-selected="false"
                          style={styles.navLink}
                        >
                          Specification
                        </a>
                      </li>
                      <li style={styles.navLi}>
                        <a
                          data-toggle="tab"
                          href="#reviews"
                          role="tab"
                          aria-controls="reviews"
                          aria-selected="false"
                          style={styles.navLink}
                        >
                          Reviews (1)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" style={styles.tabContent}>
                    <div className="tab-pane fade show active" id="info" role="tabpanel" style={styles.tabPaneActive}>
                      <div style={styles.productInfoContent}>
                        <p>{arena.arenaDetails?.description || 'No description available.'}</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="sheet" role="tabpanel" style={styles.tabPane}>
                      <div style={styles.productDTable}>
                        <form action="#">
                          <table>
                            <tbody>
                              <tr>
                                <td><strong>Length</strong></td>
                                <td>{arena.arenaDetails?.dimensions?.length || 0}ft</td>
                              </tr>
                              <tr>
                                <td><strong>Width</strong></td>
                                <td>{arena.arenaDetails?.dimensions?.width || 0}ft</td>
                              </tr>
                              <tr>
                                <td><strong>Height</strong></td>
                                <td>{arena.arenaDetails?.dimensions?.height || 0}ft</td>
                              </tr>
                              <tr>
                                <td><strong>Opening Time</strong></td>
                                <td>{arena.arenaDetails?.openingTime || 'N/A'}</td>
                              </tr>
                              <tr>
                                <td><strong>Closing Time</strong></td>
                                <td>{arena.arenaDetails?.closingTime || 'N/A'}</td>
                              </tr>
                              <tr>
                                <td><strong>Categories</strong></td>
                                <td>{arena.arenaDetails?.categories?.join(', ') || 'N/A'}</td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                      </div>
                      <div style={styles.productInfoContent}>
                        <p>{arena.arenaDetails?.description || 'No description available.'}</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel" style={styles.tabPane}>
                      <div style={styles.reviewsWrapper}>
                        <h2>1 review for Management</h2>
                        <div style={styles.reviewsCommentBox}>
                          <div style={styles.commentThmb}>
                            <img src="assets/img/blog/comment2.jpg" alt="" />
                          </div>
                          <div style={styles.commentText}>
                            <div style={styles.reviewsMeta}>
                              <p>
                                <strong>Muzammal </strong>- May 2, 2025
                              </p>
                              <span>Good management nice and cooperative</span>
                            </div>
                          </div>
                        </div>
                        <div className="commentTitle">
                          <h2>Add a review </h2>
                          <p>Your email address will not be published. Required fields are marked </p>
                        </div>
                        <div style={styles.productReviewForm}>
                          <form action="#">
                            <div className="row">
                              <div className="col-12">
                                <label htmlFor="review_comment">Your review </label>
                                <textarea name="comment" id="review_comment" style={styles.productReviewFormTextarea}></textarea>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <label htmlFor="author">Name</label>
                                <input id="author" type="text" style={styles.productReviewFormInput} />
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <label htmlFor="email">Email </label>
                                <input id="email" type="text" style={styles.productReviewFormInput} />
                              </div>
                            </div>
                            <button type="submit" style={styles.productReviewFormButton}>
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
