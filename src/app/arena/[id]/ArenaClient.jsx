"use client"

import React, { useState, useEffect } from 'react'
import styles from './arena.module.css'


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
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))
  const [availableTimeSlots, setAvailableTimeSlots] = useState([])

  async function fetchAvailableSlotsForDate(arenaId, dateStr, arenaObj = null) {
    try {
      const details = (arenaObj && arenaObj.arenaDetails) || (arena && arena.arenaDetails) || {}
      const openTime = details.openingTime || '06:00'
      const closeTime = details.closingTime || '22:00'
      const slots = generateTimeSlots(openTime, closeTime)

      // Fetch bookings for this arena and date from server
      const url = `/api/bookings?arenaId=${encodeURIComponent(arenaId)}&date=${encodeURIComponent(dateStr)}`
      const res = await fetch(url)
      if (!res.ok) {
        console.error('Failed to fetch bookings for date', dateStr)
        setAvailableTimeSlots(slots)
        return
      }
      const bookings = await res.json()
      const bookedSlots = Array.isArray(bookings) ? bookings.map((b) => b.timeSlot) : []
      const filtered = slots.filter((s) => !bookedSlots.includes(s))
      setAvailableTimeSlots(filtered)
    } catch (err) {
      console.error('Error fetching available slots:', err)
      const openTime = arena.arenaDetails?.openingTime || '06:00'
      const closeTime = arena.arenaDetails?.closingTime || '22:00'
      setAvailableTimeSlots(generateTimeSlots(openTime, closeTime))
    }
  }

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
        // fetch available slots for the selected date (pass arena details to avoid race)
        fetchAvailableSlotsForDate(data._id || id, selectedDate, data)
      } catch (error) {
        console.error('Error fetching arena data:', error)
      }
    }

    // If initialArena wasn't provided by server, fetch on client
    if (!arena && id) {
      fetchArena()
    } else if (arena) {
      // initialize slots from provided arena for the selected date
      fetchAvailableSlotsForDate(arena._id || id, selectedDate, arena)
    }

    return () => { mounted = false }
  }, [id, arena])

  // Whenever the selected date changes (or arena becomes available), refresh available slots
  useEffect(() => {
    if (arena) {
      fetchAvailableSlotsForDate(arena._id || id, selectedDate)
    }
  }, [selectedDate, arena, id])

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
        <div className={`container-xxl bg-white p-0 ${styles['container-xxl'] || ''}`}>
          <div className={`container ${styles.container || ''}`}>
            <div className={`row ${styles.row || ''}`}>
              <div className={`col-lg-6 col-md-6 ${styles['col-lg-6'] || ''}`}>
                <div className={styles['product-details-tab'] || ''}>
                  <div id="img-1" className={`${styles['zoom-wrapper'] || ''} ${styles['single-zoom'] || ''}`}>
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
                  <div className={styles['single-zoom-thumb'] || ''}>
                    <ul className={`s-tab-zoom owl-carousel single-product-active ${styles['s-tab-zoom'] || ''}`} id="gallery_01">
                      {arena.arenaDetails?.images &&
                        arena.arenaDetails.images
                          .slice(0, 4)
                          .map((img, index) => (
                            <li key={index}>
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
              <div className={`col-lg-6 col-md-6 ${styles['product-d-right'] || ''}`}>
                <div>
                  <h1>{arena.arenaDetails?.arenaName || 'Arena'}</h1>
                  <div className={styles['price-box'] || ''}>
                    <span className={styles['current-price'] || ''}>Rs {arena.arenaDetails?.price || 0}/hr</span>
                  </div>
                  <div className={styles['product-desc'] || ''}>
                    <p>{arena.arenaDetails?.description || 'No description available.'}</p>
                  </div>
                  <div className={styles['product-d-meta'] || ''}>
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
                  <div className={`product_variant size ${styles['product-variant-size'] || ''}`}>
                    <label style={{ display: 'block', marginBottom: '6px' }}><strong>Select Date:</strong></label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      style={{ marginBottom: '10px', padding: '6px', display: 'block' }}
                    />
                    <label><strong>Select Time Slot:</strong></label><br/>
                    <select
                      id="timeSlots"
                      name="timeSlots"
                      className={`niceselect_option ml-2 ${styles['niceselect-option'] || ''}`}
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
                    className={styles.button || ''}
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
                        arenaId: arena._id || arena.id || id,
                        arenaName: arena.arenaDetails.arenaName,
                        timeSlot: selectedTimeSlot,
                        date: selectedDate,
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
                          setSelectedTimeSlot('')
                          // refresh slots for the selected date so the booked slot is removed for everyone
                          fetchAvailableSlotsForDate(arena._id || arena.id || id, selectedDate)
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
        <div className={styles['product-d-info'] || ''}>
          <div className={`container ${styles.container || ''}`}>
            <div className={`row ${styles.row || ''}`}>
              <div className="col-12">
                <div className={styles['product-d-inner'] || ''}>
                  <div className={styles['product-info-button'] || ''}>
                    <ul className={`nav ${styles.nav || ''}`} role="tablist">
                      <li>
                        <a
                          data-toggle="tab"
                          href="#info"
                          role="tab"
                          aria-controls="info"
                          aria-selected="false"
                          className={`active ${styles['nav-link'] || ''}`}
                        >
                          Description
                        </a>
                      </li>
                      <li>
                        <a
                          data-toggle="tab"
                          href="#sheet"
                          role="tab"
                          aria-controls="sheet"
                          aria-selected="false"
                          className={styles['nav-link'] || ''}
                        >
                          Specification
                        </a>
                      </li>
                      <li>
                        <a
                          data-toggle="tab"
                          href="#reviews"
                          role="tab"
                          aria-controls="reviews"
                          aria-selected="false"
                          className={styles['nav-link'] || ''}
                        >
                          Reviews (1)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={`tab-content ${styles['tab-content'] || ''}`}>
                    <div className={`tab-pane fade show active ${styles['tab-pane'] || ''}`} id="info" role="tabpanel">
                      <div>
                        <p>{arena.arenaDetails?.description || 'No description available.'}</p>
                      </div>
                    </div>
                    <div className={`tab-pane fade ${styles['tab-pane'] || ''}`} id="sheet" role="tabpanel">
                      <div>
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
                      <div>
                        <p>{arena.arenaDetails?.description || 'No description available.'}</p>
                      </div>
                    </div>
                    <div className={`tab-pane fade ${styles['tab-pane'] || ''}`} id="reviews" role="tabpanel">
                      <div>
                        <h2>1 review for Management</h2>
                        <div>
                          <div>
                            <img src="/img/testimonial-2.jpg" alt="" />
                          </div>
                          <div>
                            <div>
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
                        <div>
                          <form action="#">
                            <div className="row">
                              <div className="col-12">
                                <label htmlFor="review_comment">Your review </label>
                                <textarea name="comment" id="review_comment"></textarea>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <label htmlFor="author">Name</label>
                                <input id="author" type="text" />
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <label htmlFor="email">Email </label>
                                <input id="email" type="text" />
                              </div>
                            </div>
                            <button type="submit">
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
