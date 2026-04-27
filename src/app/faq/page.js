import { buildMetadata } from "@/lib/seo";
import styles from './faq.module.css'
import Link from 'next/link'

const FAQS = [
  {
    category: 'Production & Delivery',
    items: [
      { q: 'How long does delivery or project completion take?', a: 'For standard items like visiting cards, banners, or small sign boards, we deliver within 2–4 working days. Larger projects like ACP elevations, LED displays, or hoardings have timelines confirmed at order. Our in-house production plant lets us work faster than most and meet urgent deadlines without compromising quality.' },
      { q: 'Do you provide installation services?', a: "Yes. SJ Arts provides complete end-to-end service — from design and production to on-site installation. Our experienced team ensures every sign, board, or interior element is fitted correctly and exactly as planned. You don't need to arrange anything separately. We handle it all." },
      { q: 'Can you handle bulk or large-scale orders?', a: 'Absolutely. Whether you need 500 visiting cards, 100 branded mugs, signage across multiple store locations, or a large outdoor hoarding campaign — our in-house plant handles high volumes efficiently while maintaining consistent quality. Bulk orders also benefit from better pricing.' },
      { q: 'How long will my sign or board last?', a: 'ACP boards and acrylic letters typically last 7–10 years. Quality vinyl prints last 3–5 years outdoors. LED lighting carries a lifespan of 30,000–50,000 hours. Flex banners generally last 1–3 years depending on weather. We always recommend the right material for maximum value.' },
    ],
  },
  {
    category: 'Design & Customisation',
    items: [
      { q: "Can you help with design if we don't have artwork or a logo?", a: 'Yes. Our in-house design team will create artwork from scratch. Just share your idea, brand colours, or any reference — we take it from there. We make the entire process simple and stress-free.' },
      { q: 'Can you match our exact brand colours and fonts?', a: 'Absolutely. Whether you provide a brand guideline document or simply share colour codes, logo files, and font references, our design and production team will ensure the final output matches your brand identity precisely — across every product and location.' },
      { q: 'Can I see samples or previous work before a large order?', a: 'Yes. We are happy to share our portfolio of completed projects and, where applicable, provide material samples before you commit. We believe in full transparency and want you to feel completely confident before any work begins.' },
      { q: 'What materials do you use for outdoor signage?', a: 'All our outdoor signage — ACP boards, glow sign boards, hoardings, and vinyl prints — uses weather-resistant, UV-protected materials built for long-term outdoor use. They withstand rain, heat, dust, and direct sunlight without fading or peeling.' },
    ],
  },
  {
    category: 'Scope & Coverage',
    items: [
      { q: 'Do you work outside North India?', a: 'Yes. While we are strongly rooted in Punjab, Himachal Pradesh, Noida, Gurgaon, Uttarakhand, J&K, and UP — we are fully equipped to take on projects anywhere across India. Distance is not a barrier for us.' },
      { q: 'Do you handle signage for multiple branches or chain locations?', a: 'Yes, and this is something we do very well. SJ Arts executes uniform branding rollouts across multiple outlets simultaneously — ensuring every location looks consistent, on-brand, and professionally installed. We are the right single vendor for chains and franchises.' },
      { q: 'Do you work with small businesses and startups?', a: "We work with everyone. We've served Bank of Maharashtra, JBL, and Kent RO — but we are equally committed to small shops, new startups, and individual entrepreneurs. Every project, big or small, receives the same dedication and quality." },
      { q: 'Do you provide interior design consultation?', a: 'We do both — supply & install, and consultation. For interior solutions including wallpapers, flooring, artificial green grass, wall cladding, and glass films, we guide you through material selection, layout planning, and design choices based on your space and budget.' },
    ],
  },
  {
    category: 'Orders & Payments',
    items: [
      { q: 'How do I place an order or get a quote?', a: 'Simply reach out via WhatsApp, phone, or email with your requirement — product type, size, quantity, and location. Our team will get back to you promptly with a quote and timeline. Simple, transparent, and hassle-free from start to finish.' },
      { q: 'What is the minimum order quantity for printed products?', a: 'For visiting cards, we accept orders from as few as 100 cards. For mugs, pens, and promotional merchandise, minimums are kept as low as possible to accommodate small businesses and individuals. Contact us and we will work out the best option.' },
      { q: 'Do you provide GST invoices?', a: 'Yes. SJ Arts provides proper GST invoices for all business orders, making it easy for companies and organisations to process payments and maintain accurate accounts.' },
      { q: 'What payment methods do you accept?', a: 'We accept bank transfer, UPI, cheque, and cash for local clients. Payment terms are clearly discussed before any project begins. For bulk or long-term clients, we are open to discussing credit terms.' },
      { q: 'Do you offer any warranty?', a: 'Yes. We offer a warranty on LED signage, fabricated sign boards, and installation work. Warranty duration varies by product and is communicated clearly at order. Any manufacturing defect or installation issue is addressed promptly at no additional cost.' },
    ],
  },
]

export const metadata = buildMetadata({
  title:       "FAQ",
  description:
    "Frequently asked questions about SJ Arts signage and printing services — delivery timelines, installation, materials, bulk orders, payments, and more.",
  path:        "/faq",
  keywords: [
    "SJ Arts FAQ",
    "signage questions ludhiana",
    "printing delivery time punjab",
    "sign board warranty",
    "bulk printing minimum order",
    "GST invoice printing ludhiana",
  ],
});

export default function FAQPage() {
  return (
    <main className={styles.page}>

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Help Centre</span>
          <h1 className={styles.h1}>
            Frequently Asked<br />
            <em className={styles.em}>Questions.</em>
          </h1>
          <p className={styles.heroSub}>
            Everything you need to know about working with SJ Arts.
            Can't find your answer?{' '}
            <a href="https://wa.me/919888808193" className={styles.heroLink}
              target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp →
            </a>
          </p>
        </div>
      </div>

      <div className={styles.body}>

        <aside className={styles.aside}>
          <p className={styles.asideLabel}>Jump to</p>
          {FAQS.map((section) => (
            <Link
              key={section.category}
              href={`#${section.category.replace(/\s+/g, '-').toLowerCase()}`}
              className={styles.asideLink}
            >
              {section.category}
            </Link>
          ))}
          <div className={styles.asideCta}>
            <p className={styles.asideCtaText}>Still have questions?</p>
            <a href="https://wa.me/919888808193" target="_blank" rel="noopener noreferrer" className={styles.asideCtaBtn}>
              Chat with us
            </a>
          </div>
        </aside>

        <div className={styles.sections}>
          {FAQS.map((section) => (
            <section
              key={section.category}
              id={section.category.replace(/\s+/g, '-').toLowerCase()}
              className={styles.section}
            >
              <h2 className={styles.sectionTitle}>{section.category}</h2>
              <div className={styles.items}>
                {section.items.map((item, i) => (
                  <details key={i} className={styles.item}>
                    <summary className={styles.q}>
                      <span>{item.q}</span>
                      <span className={styles.icon} aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </summary>
                    <div className={styles.a}><p>{item.a}</p></div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>

      <div className={styles.bottomCta}>
        <div className={styles.bottomCtaInner}>
          <h3 className={styles.bottomCtaTitle}>Still have a question?</h3>
          <p className={styles.bottomCtaSub}>Our team typically replies within minutes on WhatsApp.</p>
          <div className={styles.bottomCtaBtns}>
            <Link href="https://wa.me/919888808193" target="_blank" rel="noopener noreferrer" className={styles.btnGreen}>
              WhatsApp Us
            </Link>
            <a href="tel:+919888808193" className={styles.btnOutline}>Call 98888-08193</a>
          </div>
        </div>
      </div>

    </main>
  )
}