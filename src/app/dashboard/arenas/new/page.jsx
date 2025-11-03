"use client"

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'

export default function AddArenaPage() {
  const router = useRouter()

  const [arenaName, setArenaName] = useState('')
  const [price, setPrice] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [openingTime, setOpeningTime] = useState('')
  const [closingTime, setClosingTime] = useState('')
  const [categories, setCategories] = useState({ cricket: false, football: false, badminton: false })
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const timeToMinutes = useMemo(() => (t) => {
    if (!t) return null
    const [h, m] = t.split(':').map((x) => parseInt(x, 10))
    if (Number.isNaN(h) || Number.isNaN(m)) return null
    return h * 60 + m
  }, [])

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files || []))
  }

  async function uploadFilesLocally() {
    if (!files || files.length === 0) return []
    const form = new FormData()
    for (const f of files) form.append('files', f)
    const res = await fetch('/api/uploads/arena', { method: 'POST', body: form })
    const body = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(body.error || 'Failed to upload images')
    return body.urls || []
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
  const imageUrls = await uploadFilesLocally()

      // Validate time (24h) closing > opening
      const oMin = timeToMinutes(openingTime)
      const cMin = timeToMinutes(closingTime)
      if (oMin == null || cMin == null || cMin <= oMin) {
        throw new Error('Closing time must be greater than opening time (24h format HH:MM).')
      }

      const selectedCategories = Object.entries(categories)
        .filter(([, v]) => v)
        .map(([k]) => k)

      const arenaDetails = {
        arenaName,
        phoneNumber,
        address,
        length: Number(length) || 0,
        width: Number(width) || 0,
        height: Number(height) || 0,
        price: price ? Number(price) : 0,
        openingTime,
        closingTime,
        description,
        categories: selectedCategories,
        arenaImageUrls: imageUrls,
        images: imageUrls,
      }

      const res = await fetch('/api/arenas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ arenaDetails }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Failed to create arena')
      }

      // On success redirect back to arenas list
      router.push('/dashboard/arenas')
    } catch (err) {
      console.error(err)
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Add Arena</h5>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Arena Name</label>
            <input className="form-control" value={arenaName} onChange={(e) => setArenaName(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Price (per hour)</label>
            <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact</label>
            <input className="form-control mb-2" placeholder="Phone number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required />
            <input className="form-control" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} required />
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Length (feet)</label>
              <input type="number" className="form-control" value={length} onChange={(e)=>setLength(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Width (feet)</label>
              <input type="number" className="form-control" value={width} onChange={(e)=>setWidth(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Height (feet)</label>
              <input type="number" className="form-control" value={height} onChange={(e)=>setHeight(e.target.value)} />
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <label className="form-label">Opening Time</label>
              <input type="time" className="form-control" value={openingTime} onChange={(e)=>setOpeningTime(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Closing Time</label>
              <input type="time" className="form-control" value={closingTime} onChange={(e)=>setClosingTime(e.target.value)} required />
            </div>
          </div>

          <div className="mb-2 mt-2">
            <label className="form-label">Categories</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="catCricket" checked={categories.cricket} onChange={(e)=>setCategories((c)=>({...c, cricket: e.target.checked}))} />
              <label className="form-check-label" htmlFor="catCricket">Cricket</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="catFootball" checked={categories.football} onChange={(e)=>setCategories((c)=>({...c, football: e.target.checked}))} />
              <label className="form-check-label" htmlFor="catFootball">Football</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="catBadminton" checked={categories.badminton} onChange={(e)=>setCategories((c)=>({...c, badminton: e.target.checked}))} />
              <label className="form-check-label" htmlFor="catBadminton">Badminton</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Images</label>
            <input className="form-control" type="file" accept="image/*" multiple onChange={handleFiles} />
            <small className="form-text text-muted">Upload one or more images for the arena.</small>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="d-flex gap-2">
            <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Saving…' : 'Create Arena'}</button>
            <button type="button" className="btn btn-secondary" onClick={() => router.back()} disabled={loading}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
