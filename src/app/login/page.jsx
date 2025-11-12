import Link from 'next/link'
import { loginAction } from './actions'

export const metadata = { title: 'Login | ArenaXpert' }

// Server action is moved to `./actions` to avoid exporting invalid Page fields

// ✅ Login Page Component
export default async function LoginPage({ searchParams }) {
  const params = (await searchParams) || {}
  const { error, message } = params

  return (
    <div>
      {/* Hero Section */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">Login</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Login
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="container mt-5" style={{ maxWidth: '400px' }}>
        {!process.env.NEXT_PUBLIC_SITE_URL && (
          <div className="alert alert-warning">
            Using default http://localhost:3000 for OAuth redirects. 
            Set NEXT_PUBLIC_SITE_URL in your .env for consistency.
          </div>
        )}

        {error && <div className="alert alert-danger">{decodeURIComponent(error)}</div>}
        {message && <div className="alert alert-success">{decodeURIComponent(message)}</div>}

        <form action={loginAction} method="POST" className="mb-4">
          <h4 className="mb-3 text-center">Login</h4>

          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="mb-4">
          <div className="text-center text-muted mb-2">or continue with</div>
          <div className="d-grid gap-2">
            <a href="/auth/oauth?provider=google" className="btn btn-outline-danger w-100">Google</a>
            <a href="/auth/oauth?provider=github" className="btn btn-outline-dark w-100">GitHub</a>
            <a href="/auth/oauth?provider=facebook" className="btn btn-outline-primary w-100">Facebook</a>
          </div>
        </div>

        <div className="text-center">
          <span>Don&apos;t have an account? </span>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  )
}
