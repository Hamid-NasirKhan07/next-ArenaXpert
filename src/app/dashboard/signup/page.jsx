"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient as createSupabaseBrowserClient } from '@/lib/supabase/browserClient'

export default function DashboardSignupPage() {
  const router = useRouter()
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const signUpWithProvider = async (provider) => {
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
      setError(e.message || 'Failed to continue with provider')
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, role: 'owner' },
          emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/auth/callback?next=/dashboard` : undefined,
        },
      })
      if (error) throw error
      setMessage('Check your email to confirm your account. Once confirmed, you can log in.')
    } catch (e) {
      setError(e.message || 'Sign up failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div className="card shadow-sm" style={{maxWidth: 460, width: '100%'}}>
        <div className="card-body p-4">
          <h4 className="card-title mb-1">Create Owner Account</h4>
          <p className="text-muted mb-4">Sign up to manage your arenas</p>

          <div className="d-grid gap-2 mb-3">
            <button type="button" className="btn btn-outline-dark" onClick={() => signUpWithProvider('google')}>
              <img src="/Owner_Dashboard_Assets/img/google.svg" alt="" width="18" height="18" className="me-2" />
              Continue with Google
            </button>
            <button type="button" className="btn btn-primary" style={{background:'#1877F2', borderColor:'#1877F2'}} onClick={() => signUpWithProvider('facebook')}>
              <img src="/Owner_Dashboard_Assets/img/facebook.svg" alt="" width="18" height="18" className="me-2" />
              Continue with Facebook
            </button>
          </div>

          <div className="text-center text-muted my-3">
            <span>or</span>
          </div>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm password</label>
              <input type="password" className="form-control" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required />
            </div>

            {error && <div className="alert alert-danger py-2">{error}</div>}
            {message && <div className="alert alert-success py-2">{message}</div>}

            <div className="d-grid">
              <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Creating…' : 'Create account'}</button>
            </div>
          </form>

          <div className="text-center mt-3">
            <small className="text-muted">Already have an account? <Link href="/dashboard/login">Sign in</Link></small>
          </div>
        </div>
      </div>
    </div>
  )
}
