"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ClientScripts() {
  useEffect(() => {
    // load bootstrap JS dynamically for client-side interactivity
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((mod) => {
      try {
        // Attach exported bootstrap module to window so other scripts can access Modal
        if (typeof window !== 'undefined') {
          // some bundlers export nothing; we still set a marker to indicate bootstrap is loaded
          // attempt to set window.bootstrap to the module or to the global bootstrap if present
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.bootstrap = mod || window.bootstrap || {}
        }
      } catch (e) {}
    }).catch(() => {});
  }, []);

  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
      <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
      <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
      <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
      <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/lib/isotope/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/lib/lightbox/js/lightbox.min.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
