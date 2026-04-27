'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Loading.module.css'
import { usePathname } from 'next/navigation'

export default function Loader() {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('active'), 100)
    const t2 = setTimeout(() => setPhase('exit'),   2800)
    const t3 = setTimeout(() => setPhase('done'),   3400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])
  const pathnams = usePathname()
  if (pathnams.startsWith("/services") || pathnams.startsWith("/contact")) {
    return null;
  }
  if (phase === 'done') return null

  return (
    <div className={`${styles.loader} ${styles[phase]}`}>

      {/* ── Logo ── */}
      <div className={styles.brand}>
        <div className={styles.logoWrap}>
          <span className={styles.ring1} />
          <span className={styles.ring2} />
          <span className={styles.ring3} />
          <Image
            src="/logo.png"
            alt="SJ Arts"
            width={220}
            height={220}
            priority
            unoptimized
            className={styles.logoImg}
          />
        </div>
        <div className={styles.brandText}>
          <span className={styles.brandSJ}>SJ</span>
          <span className={styles.brandArts}>ARTS</span>
        </div>
        <span className={styles.brandSub}>PRINTERS · SINCE 2009</span>
      </div>

      {/* ── Loading text ── */}
      <div className={styles.loaderText}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`${styles.textSlice} ${styles[`s${i + 1}`]}`}>
            <span>Loading</span>
          </div>
        ))}
        <div className={styles.line} />
      </div>

      {/* ── Progress ── */}
      <div className={styles.progressWrap}>
        <div className={styles.progressTrack}>
          <div className={`${styles.progressFill} ${phase === 'active' ? styles.progressRun : ''}`} />
        </div>
        <span className={styles.progressLabel}>Loading Experience</span>
      </div>

    </div>
  )
}