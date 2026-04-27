import Clients  from "@/components/Clients/Clients"
import CTA      from "@/components/CTA/CTA"
import Hero     from "@/components/Hero/Hero"
import Services from "@/components/Services/Services"
import WhyUs    from "@/components/WhyUs/WhyUs"
import Works    from "@/components/Works/Works"
import { SITE_URL, SITE_NAME, DEFAULT_OG } from "@/lib/seo"

// Home gets its own metadata — overrides the layout default
// via the template: `%s | SJ Arts` set in layout
export const metadata = {
  // No title template used here — absolute title for home
  title: "SJ Arts Printers | Branding & Printing Since 2009",
  description:
    "Ludhiana's most trusted printing & signage studio. Acrylic letters, neon signs, glow boards, ACP cladding, LED displays, banners, mug printing and more across Punjab and North India. Since 2009.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:       "SJ Arts Printers | Branding & Printing Since 2009",
    description: "Ludhiana's most trusted printing & signage studio since 2009. Acrylic letters, neon signs, glow boards, ACP cladding, LED displays and more.",
    url:         SITE_URL,
    images: [{
      url:    DEFAULT_OG,
      width:  1280,
      height: 853,
      alt:    "SJ Arts Printers — Ludhiana's Premier Printing & Signage Studio",
    }],
  },
}

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Works />
      <Clients />
      <CTA />
    </>
  )
}