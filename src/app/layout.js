// app/layout.js
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteChrome from "../components/SiteChrome";
import Script from 'next/script'

export const metadata = {
  title: "ArenaXpert | Sports Booking Application",
  description: "Sports booking and management system for cricket, football, and badminton arenas.",
  icons: {
    icon: "/img/favicon.ico",
  },
  // viewport is exported separately for proper Next.js usage
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* Load jQuery before hydration so legacy scripts can use the global $ */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        {/* Load other frontend vendor scripts after hydration */}
        <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/lib/isotope/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/lib/lightbox/js/lightbox.min.js" strategy="afterInteractive" />
        {/* Bootstrap JS (bundle with Popper) - required for modals and other components */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />

        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
