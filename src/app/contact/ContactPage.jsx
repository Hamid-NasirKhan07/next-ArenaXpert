"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('Submitting...')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus(data.message || 'Thank you! Your message has been submitted successfully.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        
        setTimeout(() => {
          setSubmitStatus('')
        }, 5000)
      } else {
        setSubmitStatus(data.error || 'Failed to submit your message. Please try again.')
        setTimeout(() => {
          setSubmitStatus('')
        }, 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('An error occurred. Please try again later.')
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
    }
  }

  return (
    <div>
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

      {/* Contact Section Start */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="position-relative d-inline text-primary ps-4">Contact Us</h6>
            <h2 className="mt-2">Have Questions? Get In Touch!</h2>
          </div>

          <div className="row g-5" style={{ minHeight: '400px', marginBottom: '50px' }}>
            {/* Contact Information */}
            <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-light rounded p-5">
                <h4 className="text-primary mb-4">Get In Touch</h4>
                
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                    <i className="fa fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary mb-1">Headquarters</h5>
                    <p className="mb-0">Sports Board Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                    <i className="fa fa-envelope text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary mb-1">Email</h5>
                    <p className="mb-0">info@arenaxpert.com</p>
                    <p className="mb-0">support@arenaxpert.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary mb-1">Phone</h5>
                    <p className="mb-0">+92 303 4395349</p>
                    <p className="mb-0">+92 321 7654321</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                    <i className="fa fa-clock text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary mb-1">Working Hours</h5>
                    <p className="mb-0">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                    <p className="mb-0">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Location Map */}
                <div className="mt-4">
                  <h5 className="text-primary mb-3">Our Location</h5>
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2850385193693!2d67.0099481!3d24.8829214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s" 
                      style={{ border: 0, borderRadius: '10px' }}
                      allowFullScreen="" 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-light rounded p-5">
                <h4 className="text-primary mb-4">Complaints & Suggestions</h4>
                <p className="mb-4">We value your feedback! Please share your complaints, suggestions, or any questions you may have. Our team will get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input 
                          type="tel" 
                          className="form-control" 
                          id="phone" 
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea 
                          className="form-control" 
                          placeholder="Leave your complaint or suggestion here" 
                          id="message"
                          name="message"
                          style={{ height: '200px' }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
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

                {submitStatus && (
                  <div 
                    className={`alert ${
                      submitStatus.includes('Thank you') || submitStatus.includes('successfully') 
                        ? 'alert-success' 
                        : submitStatus.includes('Submitting') 
                        ? 'alert-info' 
                        : 'alert-danger'
                    } mt-4`} 
                    role="alert"
                  >
                    {submitStatus}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section End */}

      {/* FAQ Section */}
      <div className="container-xxl py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container px-lg-5">
          <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="position-relative d-inline text-primary ps-4">FAQ</h6>
            <h2 className="mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How do I book an arena?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You can browse available arenas on our Book page, select your preferred arena, choose a time slot, and complete the booking process. Make sure you're logged in to book an arena.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What are the payment options?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We accept multiple payment methods including credit/debit cards, mobile wallets, and online banking. Payment is required at the time of booking.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Can I cancel or reschedule my booking?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, you can cancel or reschedule your booking up to 24 hours before your scheduled time. Cancellations made within 24 hours may be subject to cancellation fees.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Do you provide sports equipment?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Most of our arenas provide basic equipment, but we recommend bringing your own for the best experience. You can check the specific amenities for each arena on their detail page.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section End */}
    </div>
  )
}
