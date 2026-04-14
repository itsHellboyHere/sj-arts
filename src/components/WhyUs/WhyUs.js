'use client'

import { useEffect, useRef } from 'react'
import styles from './WhyUs.module.css'

const CARDS = [
  {
    num: '01',
    tag: 'Premium Materials',
    title: 'Built To Last',
    desc: 'Every sign crafted with premium acrylic, steel, and ACP. No shortcuts, no compromise on material quality — ever.',
  },
  {
    num: '02',
    tag: 'Full Service',
    title: 'One Stop Studio',
    desc: 'Visiting card to full building elevation — concept, fabrication, and installation all under one roof. Zero coordination headache.',
  },
  {
    num: '03',
    tag: 'Wide Coverage',
    title: 'Pan Punjab & Beyond',
    desc: 'Ludhiana, Mohali, Himachal, Haryana, Noida, Gurgaon — we design, produce, and install anywhere across North India.',
  },
  {
    num: '04',
    tag: 'Quick Delivery',
    title: 'Fast Turnaround',
    desc: 'Urgent orders welcome. Our in-house plant means we move faster than most without ever compromising on finish or quality.',
  },
]

export default function WhyUs() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || 0)
            setTimeout(() => {
              entry.target.classList.add(styles.cardVisible)
            }, delay)
          }
        })
      },
      { threshold: 0.15 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>

      {/* ── Sticky left panel ── */}
      <div className={styles.sticky}>
        <div className={styles.stickyInner}>

          <span className={styles.eyebrow}>Why Choose Us</span>

          <h2 className={styles.h2}>
            Why brands<br />
            trust <em className={styles.em}>SJ Arts.</em>
          </h2>

          <p className={styles.stickyText}>
            Since 2009 — trusted by 500+ businesses
            across Punjab, Himachal, and beyond.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLbl}>Projects Done</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>15+</span>
              <span className={styles.statLbl}>Years Active</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLbl}>States Covered</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scrolling cards ── */}
      <div className={styles.cards}>
        <div className={styles.cardsSpacer} />
        {CARDS.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            data-delay={i * 100}
            className={styles.card}
          >
            <div className={styles.cardTop}>
              <span className={styles.cardNum}>{card.num}</span>
              <span className={styles.cardTag}>{card.tag}</span>
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
        <div className={styles.cardsBottom} />
      </div>

    </section>
  )
}