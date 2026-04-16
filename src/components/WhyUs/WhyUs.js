'use client'

import { useRef } from 'react'
import styles from './WhyUs.module.css'

const CARDS = [
  {
    num: '01',
    tag: 'Premium Materials',
    title: 'Built To Last',
    desc: 'Every sign crafted with premium acrylic, steel, and ACP. No shortcuts — ever.',
    size: 'sm',
  },
  {
    num: '02',
    tag: 'Full Service',
    title: 'One Stop Studio',
    desc: 'Visiting card to full building elevation — concept, fabrication, and installation all under one roof. Zero coordination headache.',
    size: 'lg',
  },
  {
    num: '03',
    tag: 'Wide Coverage',
    title: 'Pan Punjab & Beyond',
    desc: 'Ludhiana to Gurgaon — we design, produce, and install anywhere across North India.',
    size: 'sm',
  },
  {
    num: '04',
    tag: 'Quick Delivery',
    title: 'Fast Turnaround',
    desc: 'Urgent orders welcome. Our in-house plant moves faster without ever compromising on finish.',
    size: 'md',
  },
]

export default function WhyUs() {
  const sectionRef = useRef(null)

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>

      {/* ────── TOP ROW ────── */}
      <div className={styles.top}>

        <div className={styles.topLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Why Choose Us
          </div>

          <p className={styles.headingStatic}>WHY BRANDS TRUST</p>

          {/* HANGING NEON LOGO SIGN (BLUE EDITION) */}
          <div className={styles.neonSignWrapper}>
            {/* Hanging Wires */}
            <div className={styles.hardware}>
              <div className={styles.wire}></div>
              <div className={styles.wire}></div>
            </div>

            {/* Dark Glassmorphic Backing Board */}
            <div className={styles.neonBoard}>
              {/* Mounting Bolts */}
              <span className={styles.bolt} style={{ left: '15%' }}></span>
              <span className={styles.bolt} style={{ right: '15%' }}></span>

              <svg
                className={styles.neonSvg}
                viewBox="0 0 550 160"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="SJ Arts."
              >
                <symbol id="neon-text">
                  <text textAnchor="middle" x="50%" y="55%" dy=".35em">
                    SJ ARTS.
                  </text>
                </symbol>

                {/* Moving Blue SVG Strokes */}
                <g className={styles.svgGroup}>
                  {/* Base tube fill underneath */}
                  <use className={styles.sFill} href="#neon-text" />
                  
                  {/* Glowing moving layers */}
                  <use className={`${styles.sText} ${styles.s1}`} href="#neon-text" />
                  <use className={`${styles.sText} ${styles.s2}`} href="#neon-text" />
                  <use className={`${styles.sText} ${styles.s3}`} href="#neon-text" />
                  <use className={`${styles.sText} ${styles.s4}`} href="#neon-text" />
                  <use className={`${styles.sText} ${styles.s5}`} href="#neon-text" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.topRight}>
          <p className={styles.lead}>
            Since 2009 — trusted by 500+ businesses
            across Punjab, Himachal, and beyond.
            Every project is a long-term relationship.
          </p>

          <div className={styles.statsRow}>
            {[
              { num: '500+', lbl: 'Projects Done'  },
              { num: '15+',  lbl: 'Years Active'   },
              { num: '5+',   lbl: 'States Covered' },
            ].map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLbl}>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ────── CARD GRID ────── */}
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <article
            key={i}
            className={`${styles.card} ${styles['card_' + card.size]}`}
          >
            <div className={styles.cardGradient} aria-hidden="true" />
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>{card.num}</span>
                <span className={styles.cardTag}>{card.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.cardArrow} aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

      </div>
    </section>
  )
}