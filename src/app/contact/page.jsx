import Link from 'next/link'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/server/supabase/serverClient'
import { randomUUID } from 'crypto'

export const dynamic = 'force-dynamic'

// ✅ Server Action — handles form submission directly on the server
async function handleSubmit(formData) {
  'use server'

  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')

  try {
    // Use Supabase server client to insert into the contacts table directly
    const supabase = await createClient()

    // Basic validation
    if (!name || !email || !phone || !message) {
      throw new Error('All fields are required')
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format')
    }

    // Generate an id to satisfy tables that require non-null id (some DBs don't set defaults)
    const id = typeof randomUUID === 'function' ? randomUUID() : String(Date.now())
    const now = new Date().toISOString()

    // Try multiple possible table name variants in case the DB uses a different casing
    const tableCandidates = ['Contact', 'contact', 'contacts', 'Contacts']
    let insertResult = null
    let insertError = null

    for (const table of tableCandidates) {
      const res = await supabase
        .from(table)
        .insert([{ id, name, email, phone, message, status: 'pending', createdAt: now, updatedAt: now }])
        .select('id')

      if (res.error) {
        // remember the error and try the next candidate
        insertError = res.error
        // If PostgREST complains table not found, keep trying other variants
        const isTableNotFound = String(res.error?.code || '').startsWith('PGRST205')
        if (isTableNotFound) continue
        // other errors are likely fatal for this table attempt — remember and break
        insertResult = res
        break
      } else {
        insertResult = res
        insertError = null
        break
      }
    }

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      throw new Error(insertError.message || 'Failed to submit message')
    }

    revalidatePath('/contact') // refresh page after submit if needed
  } catch (error) {
    console.error('Form submission error:', error)
  }
}

export default async function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">Contact Us</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-white" href="/contact">Contact</Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="section-title position-relative text-center mb-5 pb-2">
            <h6 className="position-relative d-inline text-primary ps-4">Contact Us</h6>
            <h2 className="mt-2">Have Questions? Get In Touch!</h2>
          </div>

          <div className="row g-5" style={{ minHeight: '400px', marginBottom: '50px' }}>
            {/* Contact Info */}
            <div className="col-lg-5 col-md-12">
              <div className="bg-light rounded p-5">
                <h4 className="text-primary mb-4">Get In Touch</h4>

                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50, borderRadius: '50%' }}>
                    <i className="fa fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary mb-1">Headquarters</h5>
                    <p className="mb-0">Sports Board Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50, borderRadius: '50%' }}>
                    <i className="fa fa-envelope text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary mb-1">Email</h5>
                    <p className="mb-0">info@arenaxpert.com</p>
                    <p className="mb-0">support@arenaxpert.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50, borderRadius: '50%' }}>
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary mb-1">Phone</h5>
                    <p className="mb-0">+92 303 4395349</p>
                    <p className="mb-0">+92 321 7654321</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="text-primary mb-3">Our Location</h5>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2850385193693!2d67.0099481!3d24.8829214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                      style={{ border: 0, borderRadius: '10px' }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7 col-md-12">
              <div className="bg-light rounded p-5">
                <h4 className="text-primary mb-4">Complaints & Suggestions</h4>
                <p className="mb-4">
                  We value your feedback! Please share your complaints, suggestions, or any questions you may have. Our team will get back to you as soon as possible.
                </p>

                {/* ✅ Server Action Form */}
                <form action={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone Number" required />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave your complaint or suggestion here" id="message" name="message" style={{ height: 200 }} required></textarea>
                        <label htmlFor="message">Complaint / Suggestion</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Submit Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
