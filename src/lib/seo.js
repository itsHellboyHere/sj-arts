// ─────────────────────────────────────────────────────────────
//  SJ ARTS — SEO Constants
//  Single file to change when domain goes live.
//  Replace SITE_URL with the real domain — nothing else changes.
// ─────────────────────────────────────────────────────────────

export const SITE_URL     = "http://localhost:3000"; // ← change to https://sjarts.in when live
export const SITE_NAME    = "SJ Arts Printers";
export const SITE_TAGLINE = "Ludhiana's Premier Printing & Signage Studio";
export const DEFAULT_OG   = `${SITE_URL}/og-image.jpg`;

export const BUSINESS = {
  name:    "SJ Arts Printers",
  founded: "2009",
  phone:   "+91-98888-08193",
  email:   "sjarts7@gmail.com",
  gstin:   "03BIQPV5422C1ZA",
  owner:   "Jatin Verma",
  address: {
    street:  "Jai Mata Street, Opposite Manvata Dham, Haibowal Kalan",
    city:    "Ludhiana",
    state:   "Punjab",
    zip:     "141001",
    country: "IN",
    full:    "Jai Mata Street, Opposite Manvata Dham, Haibowal Kalan, Ludhiana, Punjab 141001",
  },
  geo: { lat: 30.8745, lng: 75.8017 },
  social: {
    instagram: "https://instagram.com/sjartsindia",
    whatsapp:  "https://wa.me/919888808193",
  },
};

// ─── Canonical URL builder ────────────────────────────────────
export function canonical(path = "") {
  return `${SITE_URL}${path}`;
}

// ─── Per-page metadata builder ────────────────────────────────
export function buildMetadata({
  title,
  description,
  path     = "",
  ogImage  = DEFAULT_OG,
  noIndex  = false,
  keywords = [],
}) {
  const url       = canonical(path);
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | ${SITE_TAGLINE}`;

  return {
    metadataBase: new URL(SITE_URL),

    title: fullTitle,
    description,

    keywords: [
      "printing services Ludhiana",
      "signage company Punjab",
      "acrylic letters Ludhiana",
      "neon sign boards Punjab",
      "glow sign boards",
      "ACP boards",
      "LED signage",
      "hoarding printing",
      "SJ Arts",
      "branding Punjab",
      "mug printing",
      "banner printing",
      "Haibowal Kalan printing",
      ...keywords,
    ].join(", "),

    authors:   [{ name: SITE_NAME, url: SITE_URL }],
    creator:   SITE_NAME,
    publisher: SITE_NAME,

    alternates: { canonical: url },

    robots: noIndex
      ? { index: false, follow: false }
      : {
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
      url,
      siteName:    SITE_NAME,
      title:       fullTitle,
      description,
      images: [{
        url:    ogImage,
        width:  1280,
        height: 853,
        alt:    `${SITE_NAME} — ${SITE_TAGLINE}`,
      }],
    },

    twitter: {
      card:        "summary_large_image",
      title:       fullTitle,
      description,
      images:      [ogImage],
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
  };
}