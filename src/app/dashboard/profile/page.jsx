"use client"

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient as createSupabaseBrowserClient } from '@/lib/supabase/browserClient'

const provinceCities = {
  Punjab: ['Lahore', 'Multan', 'Faisalabad', 'Rawalpindi'],
  Sindh: ['Karachi', 'Hyderabad', 'Sukkur'],
  KPK: ['Peshawar', 'Abbottabad', 'Mardan'],
}

export default function OwnerProfilePage() {
  const router = useRouter()
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')

  const [cityOptions, setCityOptions] = useState([])
  const [profileId, setProfileId] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setCityOptions(province ? provinceCities[province] || [] : [])
  }, [province])

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        const res = await fetch('/api/owner/profile', { cache: 'no-store' })
        if (res.status === 404) {
          // No profile yet
          return
        }
        if (!res.ok) {
          const body = await res.json().catch(() => ({}))
          throw new Error(body.error || 'Failed to load profile')
        }
        const data = await res.json()
        if (!mounted) return
        setProfileId(data.id)
        setFirstName(data.firstName || '')
        setLastName(data.lastName || '')
        setUsername(data.username || '')
        setPhone(data.phone || '')
        setProvince(data.province || '')
        setCity(data.city || '')
      } catch (e) {
        setError(e.message || String(e))
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    try {
      const payload = { firstName, lastName, username, phone, province, city }
      const method = profileId ? 'PUT' : 'POST'
      const res = await fetch('/api/owner/profile', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'Failed to save profile')

      setMessage('Profile saved successfully')
      setProfileId(body.id)
      // Optionally navigate to dashboard after save
      setTimeout(() => router.push('/dashboard'), 600)
    } catch (e) {
      setError(e.message || String(e))
    }
  }

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{minHeight:'40vh'}}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h4 className="card-title">Owner Profile</h4>
              <p className="text-muted mb-4">Complete your profile to access all dashboard features.</p>

              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First name</label>
                    <input className="form-control" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last name</label>
                    <input className="form-control" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                  </div>
                </div>

                <div className="row g-3 mt-1">
                  <div className="col-md-6">
                    <label className="form-label">Username</label>
                    <input className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone number</label>
                    <input className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
                  </div>
                </div>

                <div className="row g-3 mt-1">
                  <div className="col-md-6">
                    <label className="form-label">Province</label>
                    <select className="form-select" value={province} onChange={(e)=>setProvince(e.target.value)} required>
                      <option value="">-- Select Province --</option>
                      {Object.keys(provinceCities).map((prov) => (
                        <option key={prov} value={prov}>{prov}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <select className="form-select" value={city} onChange={(e)=>setCity(e.target.value)} disabled={!province} required>
                      <option value="">-- Select City --</option>
                      {cityOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="form-label">User ID</label>
                  <input className="form-control" value={profileId || 'Will be generated on save'} readOnly />
                  <small className="text-muted">Stored as an auto-generated ID in the database.</small>
                </div>

                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {message && <div className="alert alert-success mt-3">{message}</div>}

                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-primary" type="submit">Save profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
