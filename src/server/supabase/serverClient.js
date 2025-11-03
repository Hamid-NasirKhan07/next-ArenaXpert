import { createServerClient } from '@supabase/ssr'
import { cookies, headers } from 'next/headers'

export const createClient = async () => {
  const cookieStore = await cookies()
  const headerList = await headers()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch {}
        },
        remove(name, options) {
          try {
            cookieStore.set({ name, value: '', ...options, maxAge: 0 })
          } catch {}
        },
      },
      headers: {
        get(key) {
          return headerList.get(key)
        },
      },
    }
  )
}
