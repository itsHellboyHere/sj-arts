import Navbar  from "@/components/Navbar/Navbar"
import Loader  from "@/components/Loader/Loading"
import Footer  from "@/components/Footer/Footer"
import "./globals.css"

import { SITE_URL, SITE_NAME, SITE_TAGLINE, DEFAULT_OG, BUSINESS } from "@/lib/seo"

// ─── Root metadata ────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:  `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "All types of branding, printing and advertising in Ludhiana — acrylic letters, neon signs, glow sign boards, ACP elevation boards, LED displays, banners, mug printing and more. Since 2009.",

  keywords:
    "SJ Arts, printing Ludhiana, signage Punjab, acrylic letters, neon sign boards, glow sign boards, ACP boards, LED displays, banner printing, mug printing, branding Punjab",

  authors:   [{ name: SITE_NAME, url: SITE_URL }],
  creator:   SITE_NAME,
  publisher: SITE_NAME,

  alternates: { canonical: SITE_URL },

  robots: {
    index:     true,
    follow:    true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:         SITE_URL,
    siteName:    SITE_NAME,
    title:       `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: "All types of branding, printing and advertising in Ludhiana — acrylic letters, neon signs, glow sign boards, ACP boards, LED displays and more. Since 2009.",
    images: [{
      url:    DEFAULT_OG,
      width:  1280,
      height: 853,
      alt:    `${SITE_NAME} — ${SITE_TAGLINE}`,
    }],
  },

  twitter: {
    card:        "summary_large_image",
    title:       `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: "All types of branding, printing and advertising in Ludhiana. Since 2009.",
    images:      [DEFAULT_OG],
    creator:     "@sjartsindia",
  },

  icons: {
    icon: [
      { url: "/favicon.ico",                  sizes: "any"           },
      { url: "/icon.svg",                     type:  "image/svg+xml" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple:    [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",
}

// ─── JSON-LD structured data ──────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type":    "LocalBusiness",
  "@id":      `${SITE_URL}/#business`,
  name:       BUSINESS.name,
  url:        SITE_URL,
  logo:       `${SITE_URL}/logo.png`,
  image:      `${SITE_URL}/og-image.jpg`,
  description:
    "Full-service printing and signage studio in Ludhiana, Punjab. Acrylic letters, neon signs, ACP boards, LED displays, banners, mug printing and more.",
  foundingDate: BUSINESS.founded,
  telephone:    BUSINESS.phone,
  email:        BUSINESS.email,
  address: {
    "@type":         "PostalAddress",
    streetAddress:   BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion:   BUSINESS.address.state,
    postalCode:      BUSINESS.address.zip,
    addressCountry:  BUSINESS.address.country,
  },
  geo: {
    "@type":    "GeoCoordinates",
    latitude:   BUSINESS.geo.lat,
    longitude:  BUSINESS.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type":     "OpeningHoursSpecification",
      dayOfWeek:   ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens:       "09:00",
      closes:      "20:00",
    },
    {
      "@type":     "OpeningHoursSpecification",
      dayOfWeek:   ["Sunday"],
      opens:       "10:00",
      closes:      "17:00",
    },
  ],
  sameAs: [BUSINESS.social.instagram, BUSINESS.social.whatsapp],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name:    "Printing & Signage Services",
    itemListElement: [
      "Acrylic Letters","Acrylic Lollipop","ACP Boards","Glow Sign Boards",
      "Fabric LED Boards","Neon Sign Boards","Clip On Boards","Video LED",
      "Running LED Boards","Pen Printing","Mug Printing","PVC/WPC/UV Sheets",
      "Wallpapers","Menu Printing","Banners & Hoarding",
    ].map((name, i) => ({
      "@type":     "Offer",
      itemOffered: { "@type": "Service", name },
      position:    i + 1,
    })),
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  "@id":      `${SITE_URL}/#website`,
  url:        SITE_URL,
  name:       SITE_NAME,
  publisher:  { "@id": `${SITE_URL}/#business` },
}

// ─── Root layout ──────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />

        {/* Cloudinary preconnect for faster image loads */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}