import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          if (typeof document === 'undefined') return null
          const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
          if (match) return decodeURIComponent(match[2])
          return null
        },
        set(name, value, options) {
          if (typeof document === 'undefined') return
          let cookie = `${name}=${encodeURIComponent(value)}; Path=/; SameSite=Lax`
          if (options?.maxAge) cookie += `; Max-Age=${options.maxAge}`
          if (options?.expires) cookie += `; Expires=${options.expires.toUTCString()}`
          if (options?.domain) cookie += `; Domain=${options.domain}`
          if (options?.secure) cookie += `; Secure`
          document.cookie = cookie
        },
        remove(name, options) {
          if (typeof document === 'undefined') return
          document.cookie = `${name}=; Path=/; Max-Age=0${options?.domain ? `; Domain=${options.domain}` : ''}`
        },
      },
    }
  )
