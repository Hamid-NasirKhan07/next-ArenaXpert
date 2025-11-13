"use client"
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import FullScreen_Search from './FullScreen_Search'
import Footer from './Footer'
import BackToTop from './BackToTop'
// ClientScripts no longer used for script loading; scripts are included in `app/layout.js`

export default function SiteChrome({ children }) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')

  if (isDashboard) {
    // Do not render public site chrome on dashboard routes
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <FullScreen_Search />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
