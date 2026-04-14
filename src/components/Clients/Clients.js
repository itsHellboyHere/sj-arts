'use client'

import Link from 'next/link'
import useInView from '@/hooks/useInview'
import styles from './Clients.module.css'

const CLIENTS = [
  'Bank of Maharashtra',
  'JBL',
  'Indus University',
  'Kent RO',
  'Venus',
  'Rikhi Ram Nand Lal',
]

const MARQUEE = [...CLIENTS, ...CLIENTS, ...CLIENTS]

export default function Clients() {
  const [secRef,  secInView]  = useInView({ threshold: 0.1 })
  const [headRef, headInView] = useInView({ threshold: 0.2 })

  return (
    <section className={styles.section} ref={secRef}>

      {/* ── BG layers ── */}
      <div className={styles.bg}    aria-hidden />
      <div className={styles.glow1} aria-hidden />
      <div className={styles.glow2} aria-hidden />

      {/* ── Top bar ── */}
      <div className={styles.topbar}>
        <div className={styles.topLeft}>
          <span className={styles.liveDot} />
          <span className={styles.topLabel}>Our Clients</span>
        </div>
        <span className={styles.topRight}>Trusted Since 2009</span>
      </div>

      {/* ── SVG stroke headline ── */}
      <div
        ref={headRef}
        className={`${styles.headWrap} ${headInView ? styles.headIn : ''}`}
      >
        <svg
          className={styles.svg}
          viewBox="0 0 900 160"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Brands that mean business work with us"
        >
          <symbol id="s-line1">
            <text textAnchor="middle" x="50%" y="52%" dy=".35em">
              Brands that mean business
            </text>
          </symbol>
          <symbol id="s-line2">
            <text textAnchor="middle" x="50%" y="52%" dy=".35em">
              work with us.
            </text>
          </symbol>

          {/* Line 1 — stroke copies */}
          <g className={styles.svgGroup1}>
            <use className={`${styles.sText} ${styles.s1}`} href="#s-line1" />
            <use className={`${styles.sText} ${styles.s2}`} href="#s-line1" />
            <use className={`${styles.sText} ${styles.s3}`} href="#s-line1" />
            <use className={`${styles.sText} ${styles.s4}`} href="#s-line1" />
            <use className={`${styles.sText} ${styles.s5}`} href="#s-line1" />
            {/* solid fill on top */}
            <use className={styles.sFill} href="#s-line1" />
          </g>
        </svg>

        <svg
          className={`${styles.svg} ${styles.svgLine2}`}
          viewBox="0 0 900 120"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <symbol id="s-line2b">
            <text textAnchor="middle" x="50%" y="52%" dy=".35em">
              work with us.
            </text>
          </symbol>
          <g className={styles.svgGroup2}>
            <use className={`${styles.sText} ${styles.s1}`} href="#s-line2b" />
            <use className={`${styles.sText} ${styles.s2}`} href="#s-line2b" />
            <use className={`${styles.sText} ${styles.s3}`} href="#s-line2b" />
            <use className={`${styles.sText} ${styles.s4}`} href="#s-line2b" />
            <use className={`${styles.sText} ${styles.s5}`} href="#s-line2b" />
            <use className={styles.sFill} href="#s-line2b" />
          </g>
        </svg>
      </div>

      {/* ── Gold rule ── */}
      <div className={`${styles.rule} ${headInView ? styles.ruleIn : ''}`} />

      {/* ── Marquee ── */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {MARQUEE.map((name, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.name}>{name}</span>
              <span className={styles.sep}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className={`${styles.bottom} ${secInView ? styles.bottomIn : ''}`}>
        <div className={styles.locs}>
          {['Punjab', 'Haryana', 'Himachal', 'Pan India'].map((l, i) => (
            <span key={i} className={styles.loc}>{l}</span>
          ))}
        </div>
        <Link href="/gallery" className={styles.cta}>
          View Our Work →
        </Link>
      </div>

    </section>
  )
}