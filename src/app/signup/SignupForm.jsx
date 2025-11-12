'use client'
import { useTransition } from 'react'
import { signupAction } from './actions'  // 👈 we’ll export this from your server file

export default function SignupForm() {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    startTransition(async () => {
      await signupAction(formData)
      // ✅ redirect manually after success
      window.location.href = '/login?message=Check your email'
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="mb-3 text-center">Create an account</h4>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" required />
      </div>

      <div className="mb-3">
        <label htmlFor="signupEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="signupEmail" name="email" required />
      </div>

      <div className="mb-3">
        <label htmlFor="signupPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="signupPassword" name="password" required />
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
      </div>

      <button disabled={isPending} type="submit" className="btn btn-success w-100">
        {isPending ? 'Creating...' : 'Sign Up'}
      </button>
    </form>
  )
}
