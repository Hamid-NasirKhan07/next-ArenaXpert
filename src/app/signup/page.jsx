import Link from 'next/link'
import SignupForm from './SignupForm'

export const metadata = { title: 'Sign Up | ArenaXpert' }

export default function SignupPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">Sign Up</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Sign Up</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mt-5" style={{ maxWidth: '400px' }}>
        <SignupForm />

        <div className="my-4">
          <div className="text-center text-muted mb-2">or continue with</div>
          <div className="d-grid gap-2">
            <a href="/auth/oauth?provider=google" className="btn btn-outline-danger w-100">Google</a>
            <a href="/auth/oauth?provider=github" className="btn btn-outline-dark w-100">GitHub</a>
            <a href="/auth/oauth?provider=facebook" className="btn btn-outline-primary w-100">Facebook</a>
          </div>
        </div>

        <div className="text-center mt-3">
          <span>Already have an account? </span>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}
