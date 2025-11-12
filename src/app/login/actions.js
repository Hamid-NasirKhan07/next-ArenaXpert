'use server'
import { redirect } from 'next/navigation'
import { createClient } from '@/server/supabase/serverClient'

export async function loginAction(formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/login?error=' + encodeURIComponent(error.message))
  }

  redirect('/')
}
