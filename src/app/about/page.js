import AboutHero from '@/components/About/AboutHero';
import BrandsMarquee from '@/components/About/Brandsmarquee';
import OurStory from '@/components/About/OurStory';
import OwnerSpotlight from '@/components/About/Ownerspotlight';
import WhatWeDo from '@/components/About/Whatwedo';
import WhyChooseUs from '@/components/About/Whychooseus';
import WorksGallery from '@/components/About/Worksgallery';

export const metadata = {
  title: 'About Us | SJ Arts — Signage, Branding & Interior Solutions',
  description: 'Discover SJ Arts — 15+ years of signage, branding, and interior excellence across North India. Founded by Jatin Verma in 2009.',
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. Hero: full-viewport neon sign + parallax */}
      <AboutHero />

      {/* 2. Our Story: dark ink section with scroll-driven marquee */}
      <OurStory/>

      {/* 3. Owner Spotlight: magazine-style founder feature */}
      <OwnerSpotlight/>

      {/* 4. What We Do: service cards with neon board aesthetic */}
      <WhatWeDo/>

      {/* 5. Works Gallery: masonry parallax of company work images */}
      {/* <WorksGallery/> */}

      {/* 6. Why Choose Us: sticky left + animated reasons */}
      <WhyChooseUs/>

      {/* 7. Brands Marquee: scrolling client logos */}
      <BrandsMarquee/>
    </main>
  );
}