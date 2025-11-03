"use client"

import { useEffect, useState, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { createClient as createSupabaseBrowserClient } from '@/lib/supabase/browserClient'

export default function Guard({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true
    const check = async () => {
      try {
        // Allow unauthenticated access for dashboard auth routes
        if (pathname?.startsWith('/dashboard/login') || pathname?.startsWith('/dashboard/signup')) {
          if (mounted) setReady(true)
          return
        }
        const { data } = await supabase.auth.getUser()
        if (!data?.user) {
          router.replace('/dashboard/login')
          return
        }

        // Enforce owner profile completion: allow /dashboard/profile even if incomplete
        if (!pathname?.startsWith('/dashboard/profile')) {
          try {
            const res = await fetch('/api/owner/profile', { cache: 'no-store' })
            if (res.status === 404) {
              router.replace('/dashboard/profile')
              return
            }
            if (res.ok) {
              const body = await res.json().catch(() => ({}))
              const required = ['firstName','lastName','username','phone','province','city']
              const incomplete = required.some((k) => !body?.[k])
              if (incomplete) {
                router.replace('/dashboard/profile')
                return
              }
            } else {
              // If API fails, be conservative and redirect to profile
              router.replace('/dashboard/profile')
              return
            }
          } catch {
            router.replace('/dashboard/profile')
            return
          }
        }
      } catch {}
      if (mounted) setReady(true)
    }
    check()
    return () => { mounted = false }
  }, [router, supabase, pathname])

  if (!ready) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{minHeight:'40vh'}}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
