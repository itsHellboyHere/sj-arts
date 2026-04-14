'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import useInView from '@/hooks/useInview'
import styles from './CTA.module.css'

export default function CTA() {
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)
  const [secRef, secInView] = useInView({ threshold: 0.2 })
  const [headRef, headInView] = useInView({ threshold: 0.3 })

  // magnetic effect
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 768) return

    const applyMagnetic = (btn) => {
      if (!btn) return

      const onMove = (e) => {
        const rect = btn.getBoundingClientRect()
        const cx   = rect.left + rect.width  / 2
        const cy   = rect.top  + rect.height / 2
        const dx   = e.clientX - cx
        const dy   = e.clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const threshold = 100

        if (dist < threshold) {
          const strength = (threshold - dist) / threshold
          btn.style.transform = `translate(${dx * strength * 0.45}px, ${dy * strength * 0.45}px)`
          btn.style.transition = 'transform 0.15s ease'
        }
      }

      const onLeave = () => {
        btn.style.transform = 'translate(0, 0)'
        btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }

      window.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)

      return () => {
        window.removeEventListener('mousemove', onMove)
        btn.removeEventListener('mouseleave', onLeave)
      }
    }

    const c1 = applyMagnetic(btn1Ref.current)
    const c2 = applyMagnetic(btn2Ref.current)
    return () => { c1?.(); c2?.() }
  }, [])

  return (
    <section className={styles.section} ref={secRef}>

      {/* ── dot pattern corners ── */}
      <div className={styles.dotTL} aria-hidden>
        {Array.from({ length: 120 }).map((_, i) => (
          <span key={i} className={styles.dot} />
        ))}
      </div>
      <div className={styles.dotBR} aria-hidden>
        {Array.from({ length: 120 }).map((_, i) => (
          <span key={i} className={styles.dot} />
        ))}
      </div>

      {/* ── floating particles ── */}
      <div className={styles.particles} aria-hidden>
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left:              `${5 + (i * 17 + i * i * 3) % 90}%`,
              animationDelay:    `${(i * 0.4) % 4}s`,
              animationDuration: `${4 + (i * 1.3) % 4}s`,
              width:             `${2 + (i % 3)}px`,
              height:            `${2 + (i % 3)}px`,
              opacity:           `${0.15 + (i % 5) * 0.06}`,
            }}
          />
        ))}
      </div>

      {/* ── bg glow ── */}
      <div className={styles.glow} aria-hidden />

      {/* ── content ── */}
      <div
        ref={headRef}
        className={`${styles.content} ${headInView ? styles.contentIn : ''}`}
      >

        {/* eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Since 2009 · Ludhiana, Punjab
          <span className={styles.eyebrowDot} />
        </div>

        {/* headline */}
        <h2 className={styles.h2}>
          Make your brand<br />
          <span className={styles.gold}>impossible</span> to ignore.
        </h2>

        {/* sub */}
        <p className={styles.sub}>
          We don't just print — we build identities that last.
          <br />
          From acrylic letters to full building elevations.
        </p>

        {/* magnetic buttons */}
        <div className={styles.btns}>
          <div className={styles.btnWrap} ref={btn1Ref}>
            <Link href="/contact" className={styles.btnDark}>
              <span className={styles.btnPlus}>+</span>
              Get a Quote
            </Link>
          </div>
          <div className={styles.btnWrap} ref={btn2Ref}>
            <a href="tel:+919888808193" className={styles.btnGold}>
              <span className={styles.btnPlus}>+</span>
              Call Us Now
            </a>
          </div>
        </div>

        {/* contact strip */}
        <div className={styles.contactStrip}>
          <a href="mailto:sjarts7@gmail.com" className={styles.contactItem}>
            sjarts7@gmail.com
          </a>
          <span className={styles.contactDiv}>·</span>
          <a href="tel:+919888808193" className={styles.contactItem}>
            98888-08193
          </a>
          <span className={styles.contactDiv}>·</span>
          <a href="tel:+918146234430" className={styles.contactItem}>
            81462-34430
          </a>
        </div>

      </div>

    </section>
  )
}