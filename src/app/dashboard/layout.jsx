"use client"

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import Guard from './Guard'

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith('/dashboard/login') || pathname?.startsWith('/dashboard/signup')

  // Minimal layout for auth pages: no sidebar/header, no heavy vendor scripts
  if (isAuthPage) {
    return (
      <>
        {/* Keep any baseline CSS if needed; omit heavy scripts */}
        <div className="container-fluid p-0">
          {children}
        </div>
      </>
    )
  }

  // Default layout for authenticated dashboard pages
  return (
    <>
  {/* Dashboard-only vendor CSS */}
  {/* <link rel="stylesheet" href="/owner-assets/vendor/charts/c3charts/c3.css" /> */}
  {/* <link rel="stylesheet" href="/owner-assets/vendor/charts/chartist-bundle/chartist.css" /> */}
      <Guard>
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-2 d-none d-md-block bg-light sidebar p-0" style={{minHeight:'100vh', borderRight:'1px solid #eee'}}>
              <div className="p-3">
                <h5 className="text-primary">Owner Panel</h5>
                <ul className="nav flex-column mt-4">
                  <li className="nav-item"><a className="nav-link" href="/dashboard">Overview</a></li>
                  <li className="nav-item"><a className="nav-link" href="/dashboard/arenas">Arenas</a></li>
                  <li className="nav-item"><a className="nav-link" href="/dashboard/booking">Booking</a></li>
                  <li className="nav-item"><a className="nav-link" href="/dashboard/customers">Customers</a></li>
                  <li className="nav-item"><a className="nav-link" href="/dashboard/transactions">Transactions</a></li>
                  <li className="nav-item"><a className="nav-link" href="/dashboard/bookings">Bookings</a></li>
                  <li className="nav-item"><a className="nav-link" href="/dashboard/users">Users</a></li>
                  <li className="nav-item"><a className="nav-link" href="/dashboard/profile">Profile</a></li>
                </ul>
              </div>
            </div>

            {/* Main content */}
            <div className="col-md-10 col-12 p-0">
              <div className="p-3 border-bottom d-flex align-items-center justify-content-between" style={{background:'#fff'}}>
                <h4 className="m-0">Dashboard</h4>
              </div>
              <div className="p-3">
                {children}
              </div>
            </div>
          </div>
        </div>
      </Guard>
      {/* Dashboard-only vendor JS */}
  <Script src="/owner-assets/vendor/jquery/jquery-3.3.1.min.js" strategy="afterInteractive" />
  <Script src="/owner-assets/vendor/charts/chartist-bundle/chartist.min.js" strategy="afterInteractive" />
  <Script src="/owner-assets/vendor/charts/c3charts/d3-5.4.0.min.js" strategy="afterInteractive" />
  <Script src="/owner-assets/vendor/charts/c3charts/c3.min.js" strategy="afterInteractive" />
  <Script src="/owner-assets/vendor/charts/sparkline/jquery.sparkline.js" strategy="afterInteractive" />
    </>
  )
}
