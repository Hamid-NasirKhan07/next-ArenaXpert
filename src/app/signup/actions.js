'use server'
import { createClient } from '@/server/supabase/serverClient'

export async function signupAction(formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match')
  }

  const supabase = createClient()

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : '')

  const redirectTo = `${siteUrl}/auth/callback?next=/`

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: redirectTo, data: { name } },
  })

  if (error) {
    throw new Error(error.message)
  }

  if (data?.session) {
    await supabase.from('profiles').insert({
      id: data.user.id,
      name,
      email,
    })
  }

  // Don’t use redirect() here — handled in client file
}
