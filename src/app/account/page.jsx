
"use client"

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient as createSupabaseBrowserClient } from '@/lib/supabase/browserClient';

export default function Account() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [bookings, setBookings] = useState([]);
  // Removed unused state for login modal as Bootstrap modal is triggered via data attributes

  const loadBookings = async () => {
    try {
      // Try server endpoint first, fall back to localStorage for demo/legacy data
      const response = await fetch('/api/bookings');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
        return;
      }
      // If API returns non-ok, fall back to localStorage
      const stored = localStorage.getItem('bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
        return;
      }
      // Nothing found
      setBookings([]);
    } catch (error) {
      // If network or endpoint doesn't exist, try reading from localStorage
      const stored = localStorage.getItem('bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
        return;
      }
      console.warn('Error loading bookings:', error.message);
    }
  };

  useEffect(() => {
    // Load user profile from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '',
      });

      // If we have no id locally but we have an email, try to fetch the user id from server
      if ((!userData.id || userData.id === null) && userData.email) {
        (async () => {
          try {
            const resp = await fetch(`/api/auth/get?email=${encodeURIComponent(userData.email)}`)
            if (!resp.ok) return
            const data = await resp.json()
            if (data && data.success && data.user) {
              const serverUser = data.user
              // update localStorage with id and phone returned by server
              const merged = { id: serverUser.id, name: serverUser.name || userData.name || '', email: serverUser.email || userData.email, phone: serverUser.phone || userData.phone || '' }
              localStorage.setItem('user', JSON.stringify(merged))
              try {
                localStorage.setItem('arenaXpert/user', JSON.stringify(merged))
                localStorage.setItem('arenaXpert/login', JSON.stringify(merged))
              } catch (e) {}
              setUser({ name: merged.name, email: merged.email, phone: merged.phone })
            }
          } catch (e) {
            // ignore fetch errors — keep using local data
            console.warn('Could not fetch user id by email', e)
          }
        })()
      }
    }

    loadBookings();

    // Listen for storage changes to update bookings
    const handleStorageChange = (event) => {
      if (event.key === 'bookings') {
        loadBookings();
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSave = async () => {
    // Try to persist profile to the server; fall back to localStorage if API not available
    try {
      const storedUser = localStorage.getItem('user')
      const parsed = storedUser ? JSON.parse(storedUser) : null
      const id = parsed && parsed.id ? parsed.id : null

      if (!id) {
        // No user id available locally; fall back to saving to localStorage only
        const updatedUser = { ...user }
        localStorage.setItem('user', JSON.stringify(updatedUser))
  localStorage.setItem('arenaXpert/user', JSON.stringify(updatedUser))
        localStorage.setItem('arenaXpert/login', JSON.stringify(updatedUser))
        alert('Profile updated locally (no user id).')
        return
      }

      const resp = await fetch('/api/auth/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name: user.name, phone: user.phone })
      })

      if (resp.ok) {
        const data = await resp.json()
        if (data && data.success && data.user) {
          // Persist server-returned user to localStorage and legacy keys
          localStorage.setItem('user', JSON.stringify(data.user))
          try {
            localStorage.setItem('arenaXpert/user', JSON.stringify(data.user))
            localStorage.setItem('arenaXpert/login', JSON.stringify(data.user))
          } catch (e) {}
          setUser({ name: data.user.name || '', email: data.user.email || '', phone: data.user.phone || '' })
          alert('Profile updated successfully!')
          return
        }
      }

      // If API failed, fall back to localStorage
      const updatedUser = { ...user }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      try {
        localStorage.setItem('arenaXpert/user', JSON.stringify(updatedUser))
        localStorage.setItem('arenaXpert/login', JSON.stringify(updatedUser))
      } catch (e) {}
      alert('Profile updated locally (server unavailable).')
    } catch (err) {
      console.warn('Error saving profile, falling back to localStorage:', err)
      const updatedUser = { ...user }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      try {
        localStorage.setItem('arenaXpert/user', JSON.stringify(updatedUser))
        localStorage.setItem('arenaXpert/login', JSON.stringify(updatedUser))
      } catch (e) {}
      alert('Profile updated locally (error).')
    }
  };

  const handleLogout = async () => {
    try { await supabase.auth.signOut() } catch {}
    try {
      localStorage.removeItem('user')
      localStorage.removeItem('arenaXpert/user')
      localStorage.removeItem('arenaXpert/login')
    } catch {}
    setUser({ name: '', email: '', phone: '' })
  };

  const isLoggedIn = user && user.email;

  if (!isLoggedIn) {
    return (
      <>
        <div className="container-xxl py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5 text-center text-white">
            <h1 className="animated zoomIn">Please Login or Sign Up</h1>
              <Link href="/loginmodal">
            <button
              className="btn btn-light me-2"
              data-bs-toggle="modal"
              data-bs-target="#loginSignupModal"
            >
              Login / Sign Up
            </button>
              </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">My Account</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                      <Link className="text-white" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Account
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5" style={{ color: 'white' }}>
        <div className="row">
          <div className="col-md-6">
            <h4>Profile Information</h4>
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                  style={{ color: 'black' }}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  style={{ color: 'black' }}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  style={{ color: 'black' }}
                  placeholder="Enter your phone number"
                />
              </div>
              <button type="submit" className="btn btn-primary me-2">Save Profile</button>
              <Link href="/player" type="button" className="btn btn-secondary me-2">Register as a Player</Link>
              <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </form>
          </div>
          <div className="col-md-6">
            <h4>My Bookings</h4>
            {bookings.length === 0 ? (
              <p>No bookings found.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Arena</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.arenaName}</td>
                      <td>{booking.date}</td>
                      <td>{booking.timeSlot}</td>
                      <td>{booking.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
