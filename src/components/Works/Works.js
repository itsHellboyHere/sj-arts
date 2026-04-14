'use client'

import Image from 'next/image'
import Link from 'next/link'
import useInView from '@/hooks/useInview'
import styles from './Works.module.css'

const WORKS = [
  { url: 'https://res.cloudinary.com/dgifa4wgb/image/upload/q_auto/f_auto/v1776016026/IMG_4106_wvv6xe.jpg', type: 'Neon Sign Board',  location: 'Ludhiana' },
  { url: 'https://res.cloudinary.com/dgifa4wgb/image/upload/q_auto/f_auto/v1776016026/IMG_4105_rdnjqx.jpg', type: 'Acrylic Letters',  location: 'Mohali'   },
  { url: 'https://res.cloudinary.com/dgifa4wgb/image/upload/q_auto/f_auto/v1776016024/IMG_4112_unemra.jpg', type: 'Glow Sign Board',  location: 'Ludhiana' },
  { url: 'https://res.cloudinary.com/dgifa4wgb/image/upload/q_auto/f_auto/v1776016023/IMG_4111_iweoxc.jpg', type: 'ACP Elevation',    location: 'Ludhiana' },
  { url: 'https://res.cloudinary.com/dgifa4wgb/image/upload/q_auto/f_auto/v1776016023/IMG_4110_wjdgaa.jpg', type: 'Fabric LED Board', location: 'Himachal' },
  { url: 'https://res.cloudinary.com/dgifa4wgb/image/upload/q_auto/f_auto/v1776016023/IMG_4092_fpu5fq.jpg', type: 'Running LED',      location: 'Haryana'  },
  { url: 'https://res.cloudinary.com/dxdofhauf/image/upload/v1776057813/IMG_4121_z3s13z.jpg',               type: 'Acrylic Board',   location: 'Ludhiana' },
  { url: 'https://res.cloudinary.com/dxdofhauf/image/upload/v1776057813/IMG_4118_hmrpea.jpg',               type: 'Steel Letters',   location: 'Mohali'   },
  { url: 'https://res.cloudinary.com/dxdofhauf/image/upload/v1776057812/IMG_4108_i63h02.jpg',               type: 'Glow Board',      location: 'Ludhiana' },
  { url: 'https://res.cloudinary.com/dxdofhauf/image/upload/v1776057812/IMG_4112_i0vnrc.jpg',               type: 'ACP Board',       location: 'Ludhiana' },
  { url: 'https://res.cloudinary.com/dxdofhauf/image/upload/v1776057813/IMG_4117_nix8vx.jpg',               type: 'Neon Sign',       location: 'Himachal' },
  { url: 'https://res.cloudinary.com/dxdofhauf/image/upload/v1776057814/IMG_4126_gbxcbe.jpg',               type: 'Vinyl Print',     location: 'Haryana'  },
]

// 4 unique per column — no repeats visible
const COL1 = [...WORKS.slice(0, 4),  ...WORKS.slice(0, 4)]
const COL2 = [...WORKS.slice(4, 8),  ...WORKS.slice(4, 8)]
const COL3 = [...WORKS.slice(8, 12), ...WORKS.slice(8, 12)]

export default function Works() {
  const [headRef, headInView] = useInView({ threshold: 0.15 })

  return (
    <section className={styles.section}>

      <div className={styles.bgGlow} aria-hidden />

      {/* Header */}
      <div
        ref={headRef}
        className={`${styles.header} ${headInView ? styles.headerIn : ''}`}
      >
        <div className={styles.headLeft}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Featured Projects
          </p>
          <h2 className={styles.h2}>
            OUR FINEST <span className={styles.gold}>WORK.</span>
          </h2>
        </div>
        <Link href="/gallery" className={styles.viewAll}>
          View All →
        </Link>
      </div>

      {/* 3D scene */}
      <div className={styles.scene}>
        <div className={styles.perspective}>

          {/* Col 1 — imgs 1-4 */}
          <div className={`${styles.col} ${styles.col1}`}>
            <div className={`${styles.colTrack} ${styles.scrollUp1}`}>
              {COL1.map((work, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <Image
                      src={work.url}
                      alt={work.type}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="260px"
                      priority={i < 2}
                    />
                    <div className={styles.overlay} />
                  </div>
                  <div className={styles.info}>
                    <span className={styles.infoType}>{work.type}</span>
                    <span className={styles.infoLoc}>{work.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — imgs 5-8 */}
          <div className={`${styles.col} ${styles.col2}`}>
            <div className={`${styles.colTrack} ${styles.scrollUp2}`}>
              {COL2.map((work, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <Image
                      src={work.url}
                      alt={work.type}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="260px"
                    />
                    <div className={styles.overlay} />
                  </div>
                  <div className={styles.info}>
                    <span className={styles.infoType}>{work.type}</span>
                    <span className={styles.infoLoc}>{work.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — imgs 9-12 */}
          <div className={`${styles.col} ${styles.col3}`}>
            <div className={`${styles.colTrack} ${styles.scrollUp3}`}>
              {COL3.map((work, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <Image
                      src={work.url}
                      alt={work.type}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="260px"
                    />
                    <div className={styles.overlay} />
                  </div>
                  <div className={styles.info}>
                    <span className={styles.infoType}>{work.type}</span>
                    <span className={styles.infoLoc}>{work.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className={styles.fadeTop}    aria-hidden />
        <div className={styles.fadeBottom} aria-hidden />
      </div>

      {/* Bottom CTA */}
      <div className={`${styles.bottom} ${headInView ? styles.bottomIn : ''}`}>
        <Link href="/gallery" className={styles.cta}>
          See All Projects
          <span className={styles.ctaArrow}>→</span>
        </Link>
      </div>

    </section>
  )
}