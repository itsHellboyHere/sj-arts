'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  const h1Ref = useRef(null)

  useEffect(() => {
    const words = h1Ref.current?.querySelectorAll('[data-w]')
    if (!words) return
    words.forEach((w, i) => {
      setTimeout(() => w.classList.add(styles.visible), i * 140)
    })
  }, [])

  return (
    <section className={styles.hero}>

      {/* BG */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />
      <span className={styles.accentTR} aria-hidden />
      <span className={styles.accentBL} aria-hidden />

      {/* INNER */}
      <div className={styles.inner}>

        {/* ── LEFT ── */}
        <div className={styles.left}>

          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            Since 2009 · Ludhiana, Punjab
          </p>

          <h1 className={styles.h1} ref={h1Ref}>
            <span className={styles.word} data-w>PRINT.</span>
            <span className={styles.word} data-w>BUILD.</span>
            <span className={`${styles.word} ${styles.gold}`} data-w>
              DOMINATE.
            </span>
          </h1>

          <p className={styles.sub}>
            Premium signage & branding crafted to make
            your business impossible to ignore.
          </p>

          <div className={styles.ctas}>
            <Link href="/contact" className={styles.btnPrimary}>
              Get Free Quote <span className={styles.arrow}>→</span>
            </Link>
            <Link href="/gallery" className={styles.btnOutline}>
              View Our Work
            </Link>
          </div>

          <div className={styles.stats}>
            {[
              ['15+',   'Years'],
              ['1000+', 'Projects'],
              ['2',     'Cities'],
              ['15+',   'Services'],
            ].map(([n, l], i, arr) => (
              <div key={l} className={styles.statGroup}>
                <div className={styles.stat}>
                  <span className={styles.statN}>{n}</span>
                  <span className={styles.statL}>{l}</span>
                </div>
                {i < arr.length - 1 && <div className={styles.div} />}
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT — collage ── */}
        <div className={styles.right}>
          <div className={styles.collage}>

            {/* Main — tall left */}
            <div className={styles.imgA}>
              <Image src="/hero/1.jpg" alt="Signage work" fill
                style={{ objectFit: 'cover' }} priority
                sizes="30vw" />
              <div className={styles.overlay} />
              <span className={styles.tag}>Signage</span>
            </div>

            {/* Top right */}
            <div className={styles.imgB}>
              <Image src="/hero/2.jpg" alt="Acrylic letters" fill
                style={{ objectFit: 'cover' }}
                sizes="22vw" />
              <div className={styles.overlay} />
              <span className={styles.tag}>Acrylic</span>
            </div>

            {/* Bottom right */}
            <div className={styles.imgC}>
              <Image src="/hero/3.jpg" alt="Glow boards" fill
                style={{ objectFit: 'cover' }}
                sizes="22vw" />
              <div className={styles.overlay} />
              <span className={styles.tag}>Glow Boards</span>
            </div>

            {/* Floating badge */}
            <div className={styles.badge}>
              <span className={styles.badgeN}>1000+</span>
              <span className={styles.badgeL}>Projects Done</span>
            </div>

            {/* Gold frame accent */}
            <div className={styles.frameAccent} aria-hidden />

          </div>
        </div>

      </div>

    </section>
  )
}