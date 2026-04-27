import { buildMetadata } from "@/lib/seo";

import AboutHero      from "@/components/About/AboutHero";
import OurStory       from "@/components/About/OurStory";
import OwnerSpotlight from "@/components/About/Ownerspotlight";
import WhatWeDo       from "@/components/About/Whatwedo";
import WhyChooseUs    from "@/components/About/Whychooseus";
import BrandsMarquee  from "@/components/About/Brandsmarquee";

export const metadata = buildMetadata({
  title:       "About Us",
  description:
    "Discover SJ Arts — 15+ years of signage, branding, and interior excellence across North India. Founded by Jatin Verma in 2009 at Haibowal Kalan, Ludhiana, Punjab. 500+ projects delivered across Punjab, Himachal, and beyond.",
  path:        "/about",
  keywords: [
    "about SJ Arts",
    "SJ Arts history",
    "Jatin Verma SJ Arts",
    "printing company ludhiana",
    "signage company founded 2009",
    "branding studio punjab",
    "SJ Arts Haibowal Kalan",
    "printing studio Haibowal Kalan Ludhiana",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OwnerSpotlight />
      <WhatWeDo />
      <WhyChooseUs />
      <BrandsMarquee />
    </main>
  );
}