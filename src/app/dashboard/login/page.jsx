"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient as createSupabaseBrowserClient } from '@/lib/supabase/browserClient'

export default function DashboardLoginPage() {
  const router = useRouter()
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const signInWithProvider = async (provider) => {
    setError('')
    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : ''
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${origin}/auth/callback?next=/dashboard`,
        },
      })
      if (error) throw error
    } catch (e) {
      setError(e.message || 'Failed to sign in with provider')
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      router.replace('/dashboard')
    } catch (e) {
      setError(e.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div className="card shadow-sm" style={{maxWidth: 420, width: '100%'}}>
        <div className="card-body p-4">
          <h4 className="card-title mb-1">Owner Login</h4>
          <p className="text-muted mb-4">Access your dashboard</p>

          <div className="d-grid gap-2 mb-3">
            <button type="button" className="btn btn-outline-dark" onClick={() => signInWithProvider('google')}>
              <img src="/owner-assets/img/google.svg" alt="" width="18" height="18" className="me-2" />
              Continue with Google
            </button>
            <button type="button" className="btn btn-primary" style={{background:'#1877F2', borderColor:'#1877F2'}} onClick={() => signInWithProvider('facebook')}>
              <img src="/owner-assets/img/facebook.svg" alt="" width="18" height="18" className="me-2" />
              Continue with Facebook
            </button>
          </div>

          <div className="text-center text-muted my-3">
            <span>or</span>
          </div>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>

            {error && <div className="alert alert-danger py-2">{error}</div>}

            <div className="d-grid">
              <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
            </div>
          </form>

          <div className="text-center mt-3">
            <small className="text-muted">Don't have an account? <Link href="/dashboard/signup">Create one</Link></small>
          </div>
        </div>
      </div>
    </div>
  )
}
