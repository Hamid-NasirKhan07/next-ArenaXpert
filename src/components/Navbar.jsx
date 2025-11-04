"use client"

import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient as createSupabaseBrowserClient } from '@/lib/supabase/browserClient'

export default function Navbar() {
  const [user, setUser] = useState(null);
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])
  const router = useRouter()

  useEffect(() => {
    // 1) Seed from localStorage if available
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null
    if (storedUser) {
      try { setUser(JSON.parse(storedUser)) } catch {}
    }

    // 2) Ensure local user mirrors Supabase session (useful after OAuth redirects)
    const syncFromSupabase = async () => {
      try {
        const { data } = await supabase.auth.getUser()
        if (data?.user) {
          const u = data.user
          const normalized = { id: u.id, email: u.email || '', name: u.user_metadata?.name || '', phone: '' }
          localStorage.setItem('user', JSON.stringify(normalized))
          try {
            localStorage.setItem('arenaXpert/user', JSON.stringify(normalized))
            localStorage.setItem('arenaXpert/login', JSON.stringify(normalized))
          } catch {}
          setUser(normalized)
        }
      } catch {}
    }
    syncFromSupabase()

    // 3) Subscribe to auth state changes to keep UI updated
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const u = session.user
        const normalized = { id: u.id, email: u.email || '', name: u.user_metadata?.name || '', phone: '' }
        localStorage.setItem('user', JSON.stringify(normalized))
        try {
          localStorage.setItem('arenaXpert/user', JSON.stringify(normalized))
          localStorage.setItem('arenaXpert/login', JSON.stringify(normalized))
        } catch {}
        setUser(normalized)
      } else {
        localStorage.removeItem('user')
        try {
          localStorage.removeItem('arenaXpert/user')
          localStorage.removeItem('arenaXpert/login')
        } catch {}
        setUser(null)
      }
    })

    return () => {
      sub?.subscription?.unsubscribe?.()
    }
  }, [supabase])

  return (
    <div>
           {/* <!-- Navbar & Hero Start --> */}
        <div className="w-full relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" style={{backgroundColor: '#0D6EFD'}}>
        <Link href='/' className="navbar-brand p-0">
          <h1 className="m-0">ArenaXpert</h1>
        </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link href="/" className="nav-item nav-link active">Home</Link>
                        <Link href="/play" className="nav-item nav-link">Play</Link>
                        <Link href="/book" className="nav-item nav-link">Book</Link>
                        
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Categories</a>
                            <div className="dropdown-menu m-0">
                                <Link href="/categories/cricket" className="dropdown-item">Cricket</Link>
                                <Link href="/categories/football" className="dropdown-item">Football</Link>
                                <Link href="/categories/badminton" className="dropdown-item">Badminton</Link>
                            </div>
                        </div>

                        <Link href="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <button type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    {user ? (
                      <Link href="/account" className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">
                        My Account
                      </Link>
                    ) : (
                      // Try opening the modal programmatically. If the modal markup/Bootstrap JS
                      // isn't available on the current page, fall back to navigating to /loginmodal.
                      <button
                        type="button"
                        className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
                        onClick={(e) => {
                          e.preventDefault()
                          try {
                            const el = typeof document !== 'undefined' ? document.getElementById('loginSignupModal') : null
                            const BootstrapModal = typeof window !== 'undefined' ? window.bootstrap?.Modal : null
                            if (el && BootstrapModal) {
                              new BootstrapModal(el).show()
                              return
                            }
                          } catch (err) {
                            // ignore and fallback to navigation
                          }
                          router.push('/loginmodal')
                        }}
                      >
                        Login / Signup
                      </button>
                    )}
                </div>
            </nav>
        </div>
    </div>
  )
}
