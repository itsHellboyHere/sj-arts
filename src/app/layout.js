import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"
import Loader from "@/components/Loader/Loading"


export const metadata = {
  title: 'SJ Arts Printers | Branding & Printing Since 2009',
  description: 'All types of branding, printing and advertising. Acrylic letters, steel letters, glow sign boards, ACP elevation boards — Ludhiana, Punjab.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader/>
        <Navbar/>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}