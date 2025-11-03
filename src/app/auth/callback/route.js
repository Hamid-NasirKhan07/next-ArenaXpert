import { NextResponse } from 'next/server'
import { createClient } from '@/server/supabase/serverClient'

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
  const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) {
      console.error('Supabase exchange error:', error)
      return NextResponse.redirect(`${origin}/login?error=oauth`)
    }
  }

  return NextResponse.redirect(`${origin}${next}`)
}
