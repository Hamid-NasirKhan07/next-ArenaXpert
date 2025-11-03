"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ArenaActions({ id }) {
  const [busy, setBusy] = useState(false)
  const onDelete = async () => {
    if (!id) return
    const ok = window.confirm('Delete this arena? This cannot be undone.')
    if (!ok) return
    setBusy(true)
    try {
      const res = await fetch(`/api/arena/${id}`, { method: 'DELETE' })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'Failed to delete')
      window.location.reload()
    } catch (e) {
      alert(e.message || String(e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="d-flex gap-2">
      <Link href={`/arena/${id}`} className="btn btn-sm btn-outline-secondary">View</Link>
      <button type="button" className="btn btn-sm btn-outline-danger" onClick={onDelete} disabled={busy}>
        {busy ? 'Deleting…' : 'Delete'}
      </button>
    </div>
  )
}
