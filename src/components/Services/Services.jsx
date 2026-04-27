'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import useInView from '@/hooks/useInview'
import styles from './Services.module.css'

const SERVICES = [
  { label: 'Acrylic Letters',       desc: 'Premium 3D letters for shops & offices',        slug: 'acrylic-letters'    },
  { label: 'Acrylic Lollipop',      desc: 'Freestanding pole-mounted acrylic displays',     slug: 'acrylic-lollipop'   },
  { label: 'ACP Boards',            desc: 'Aluminium composite cladding & boards',          slug: 'acp-boards'         },
  { label: 'Glow Sign Boards',      desc: 'Backlit boards that shine day & night',          slug: 'glow-sign-boards'   },
  { label: 'Fabric LED Boards',     desc: 'Slim SEG lightbox fabric displays',              slug: 'fabric-led-boards'  },
  { label: 'Neon Sign Boards',      desc: 'Custom LED neon for any brand or space',         slug: 'neon-sign-boards'   },
  { label: 'Clip On Boards',        desc: 'Snap-frame boards for quick graphic swaps',      slug: 'clip-on-boards'     },
  { label: 'Video LED',             desc: 'Full colour outdoor video LED walls',            slug: 'video-led'          },
  { label: 'Running LED Boards',    desc: 'Scrolling text & animated LED marquees',         slug: 'running-led'        },
  { label: 'Pen Printing',          desc: 'Branded pens for gifting & promotions',          slug: 'pen-printing'       },
  { label: 'Mug Printing',          desc: 'Dye-sublimation full-wrap mug printing',         slug: 'mug-printing'       },
  { label: 'PVC / WPC / UV Sheets', desc: 'UV flatbed printing on rigid board substrates',  slug: 'pvc-wpc-uv-sheets'  },
  { label: 'Wallpapers',            desc: 'Custom wall murals & self-adhesive prints',      slug: 'wallpapers'         },
  { label: 'Menu Printing',         desc: 'Premium bound menus for restaurants & hotels',   slug: 'menu-printing'      },
  { label: 'Banners & Hoarding',    desc: 'Large format flex, mesh & billboard printing',   slug: 'banners-hoarding'   },
]

export default function Services() {
  const bgRef      = useRef(null)
  const sectionRef = useRef(null)

  const [leftRef, leftInView] = useInView({ threshold: 0.15 })
  const [listRef, listInView] = useInView({ threshold: 0.08 })

  useEffect(() => {
    const section = sectionRef.current
    const bg      = bgRef.current
    if (!section || !bg) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const vh   = window.innerHeight
      if (rect.bottom < 0 || rect.top > vh) return
      const progress = (vh - rect.top) / (vh + rect.height)
      const shift    = (progress - 0.5) * 260
      bg.style.transform = `scale(1.15) translateY(${shift}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.section} ref={sectionRef}>

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

        {/* RIGHT — each item links to its slug */}
        <ul ref={listRef} className={styles.list}>
          {SERVICES.map(({ label, desc, slug }, i) => (
            <li
              key={slug}
              className={`${styles.item} ${listInView ? styles.itemIn : ''}`}
              style={{ transitionDelay: listInView ? `${i * 65}ms` : '0ms' }}
            >
              <Link href={`/services/${slug}`} className={styles.itemLink}>
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
              </Link>
              <div className={styles.itemLine} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}