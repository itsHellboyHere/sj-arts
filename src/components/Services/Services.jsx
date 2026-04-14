'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import useInView from '@/hooks/useInview'
import styles from './Services.module.css'

const SERVICES = [
  { label: 'Acrylic Letters',    desc: 'Premium 3D letters for shops & offices' },
  { label: 'Neon Sign Boards',   desc: 'Custom LED neon for any brand' },
  { label: 'Glow Sign Boards',   desc: 'Backlit boards that shine day & night' },
  { label: 'ACP Elevation',      desc: 'Aluminium composite cladding & boards' },
  { label: 'Fabric LED Boards',  desc: 'Slim lightbox fabric displays' },
  { label: 'Running LED',        desc: 'Scrolling text & animated LED strips' },
  { label: 'Video LED',          desc: 'Full colour outdoor video displays' },
  { label: 'Vinyl Printing',     desc: 'High resolution vinyl wraps & prints' },
  { label: 'Hoardings',          desc: 'Large format outdoor advertising' },
  { label: 'Visiting Cards',     desc: 'Premium cards, matte & glossy finish' },
]

export default function Services() {
  const bgRef = useRef(null)
  const sectionRef = useRef(null)

  const [leftRef,  leftInView]  = useInView({ threshold: 0.15 })
  const [listRef,  listInView]  = useInView({ threshold: 0.08 })

  // JS parallax — moves bg slower than scroll
  useEffect(() => {
    const section = sectionRef.current
    const bg      = bgRef.current
    if (!section || !bg) return

    const onScroll = () => {
      const rect   = section.getBoundingClientRect()
      const vh     = window.innerHeight
      // only run when section is visible
      if (rect.bottom < 0 || rect.top > vh) return
      // progress 0 → 1 as section scrolls through viewport
      const progress = (vh - rect.top) / (vh + rect.height)
      // shift bg by max ±80px
      const shift = (progress - 0.5) * 260
      bg.style.transform = `scale(1.15) translateY(${shift}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>

      {/* Parallax bg */}
      <div className={styles.bgWrap}>
        <div className={styles.bg} ref={bgRef} />
      </div>
      <div className={styles.overlay} />
      <div className={styles.grain} aria-hidden />
      <span className={styles.accentTR} aria-hidden />

      <div className={styles.inner}>

        {/* LEFT */}
        <div
          ref={leftRef}
          className={`${styles.left} ${leftInView ? styles.leftIn : ''}`}
        >
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Our Services
          </p>

          <h2 className={styles.heading}>
            WHAT<br />WE<br />
            <span className={styles.gold}>CREATE.</span>
          </h2>

          <p className={styles.para}>
            From a single visiting card to a full
            building elevation — we handle every
            branding need with precision and craft.
          </p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaN}>15+</span>
              <span className={styles.metaL}>Years</span>
            </div>
            <div className={styles.metaDiv} />
            <div className={styles.metaItem}>
              <span className={styles.metaN}>15+</span>
              <span className={styles.metaL}>Services</span>
            </div>
          </div>

          <Link href="/gallery" className={styles.cta}>
            <span>View Our Work</span>
            <span className={styles.ctaIcon}>→</span>
          </Link>
        </div>

        {/* RIGHT */}
        <ul ref={listRef} className={styles.list}>
          {SERVICES.map(({ label, desc }, i) => (
            <li
              key={label}
              className={`${styles.item} ${listInView ? styles.itemIn : ''}`}
              style={{ transitionDelay: listInView ? `${i * 65}ms` : '0ms' }}
            >
              <div className={styles.itemInner}>
                <div className={styles.itemLeft}>
                  <span className={styles.itemNum}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.itemText}>
                    <span className={styles.itemLabel}>{label}</span>
                    <span className={styles.itemDesc}>{desc}</span>
                  </div>
                </div>
                <span className={styles.itemArrow}>→</span>
              </div>
              <div className={styles.itemLine} />
            </li>
          ))}
        </ul>

      </div>

    </section>
  )
}