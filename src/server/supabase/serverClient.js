import { createServerClient } from '@supabase/ssr'
import { cookies, headers } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  const headerList = await headers()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (name) => cookieStore.get(name)?.value,
        set: async (name, value, options) => {
          try {
            (await cookies()).set({ name, value, ...options })
          } catch {}
        },
        remove: async (name, options) => {
          try {
            (await cookies()).set({ name, value: '', ...options, maxAge: 0 })
          } catch {}
        },
      },
      headers: {
        get: (key) => headerList.get(key),
      },
    }
  )
}
