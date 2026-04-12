'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Loading.module.css'

export default function Loader() {
  const [phase, setPhase] = useState('enter') // enter → active → exit → done

  useEffect(() => {
    // enter → active
    const t1 = setTimeout(() => setPhase('active'), 100)
    // active → exit
    const t2 = setTimeout(() => setPhase('exit'),  2400)
    // exit → done (unmount)
    const t3 = setTimeout(() => setPhase('done'),  3000)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`${styles.loader} ${styles[phase]}`}>

      {/* ── Logo block ── */}
      <div className={styles.brand}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="SJ Arts"
            width={100}
            height={100}
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

      {/* ── Loading text animation ── */}
      <div className={styles.loaderText}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`${styles.textSlice} ${styles[`s${i + 1}`]}`}>
            <span>Loading</span>
          </div>
        ))}
        <div className={styles.line} />
      </div>

      {/* ── Progress bar ── */}
      <div className={styles.progressWrap}>
        <div className={styles.progressTrack}>
          <div className={`${styles.progressFill} ${phase === 'active' ? styles.progressRun : ''}`} />
        </div>
        <span className={styles.progressLabel}>Loading Experience</span>
      </div>

    </div>
  )
}