import { NextResponse } from 'next/server'
import { createClient } from '@/server/supabase/serverClient'

export async function GET(request) {
  const url = new URL(request.url)
  const provider = url.searchParams.get('provider')
  if (!provider) {
    return NextResponse.redirect(new URL('/login?error=' + encodeURIComponent('Missing provider'), url.origin))
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV !== 'production' ? 'http://localhost:3001' : '')
  if (!siteUrl) {
    return NextResponse.redirect(new URL('/login?error=' + encodeURIComponent('Missing NEXT_PUBLIC_SITE_URL'), url.origin))
  }

  const redirectTo = `${siteUrl}/auth/callback?next=/`
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({ provider, options: { redirectTo } })
    if (error) {
      return NextResponse.redirect(new URL('/login?error=' + encodeURIComponent(error.message), url.origin))
    }
    if (data?.url) {
      return NextResponse.redirect(data.url)
    }
    return NextResponse.redirect(new URL('/login?error=' + encodeURIComponent('OAuth failed'), url.origin))
  } catch (e) {
    return NextResponse.redirect(new URL('/login?error=' + encodeURIComponent(e.message || 'OAuth error'), url.origin))
  }
}
