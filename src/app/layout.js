// app/layout.js
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteChrome from "../components/SiteChrome";

export const metadata = {
  title: "ArenaXpert | Sports Booking Application",
  description: "Sports booking and management system for cricket, football, and badminton arenas.",
  icons: {
    icon: "/img/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
