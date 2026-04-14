'use client'

import Link from 'next/link'
import styles from './Hero.module.css'

const ORDERS = [
  { name: 'Kanda Jewellers',  type: 'Acrylic 3D Letters', status: 'production', location: 'Ludhiana' },
  { name: 'White Cow',        type: 'Neon Sign Board',    status: 'delivered',  location: 'Mohali'   },
  { name: "Diva's Salon",     type: 'LED Glow Board',     status: 'design',     location: 'Ludhiana' },
  { name: 'Wall Masters',     type: 'ACP Elevation',      status: 'delivered',  location: 'Ludhiana' },
  { name: 'Sewak Travels',    type: 'Flex Hoarding',      status: 'production', location: 'Himachal' },
]

const STEPS = [
  'Design Approved',
  'Material Ordered',
  'Fabrication',
  'Quality Check',
  'Delivered',
]

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.bg} aria-hidden />
      <div className={styles.blob1} aria-hidden />
      <div className={styles.blob2} aria-hidden />

      {/* ── Text block ── */}
      <div className={styles.text}>

        <h1 className={styles.h1}>
          Printing Solutions<br />
          that makes your{' '}
          <em className={styles.em}>business<br />stand out.</em>
        </h1>

        <p className={styles.sub}>
          From acrylic letters to full building elevations —
          trusted by 500+ businesses across Punjab since 2009.
        </p>

        <div className={styles.ctas}>
          <Link href="/contact" className={styles.btnDark}>
            Get Free Quote
          </Link>
          <Link href="/gallery" className={styles.btnGhost}>
            View Our Work
          </Link>
        </div>

      </div>

      {/* ── Mac mockup ── */}
      <div className={styles.macWrap}>

        {/* Mac body */}
        <div className={styles.mac}>

          {/* Screen bezel */}
          <div className={styles.screen}>

            {/* Camera dot */}
            <div className={styles.camera} />

            {/* Dashboard UI */}
            <div className={styles.dash}>

              {/* Sidebar */}
              <div className={styles.sidebar}>

                <div className={styles.sideTop}>
                  <div className={styles.sideLogoWrap}>
                    <div className={styles.sideLogo}>SJ</div>
                    <div className={styles.sideLogoText}>
                      <span className={styles.sideLogoBrand}>SJ Arts</span>
                      <span className={styles.sideLogoSub}>Studio</span>
                    </div>
                  </div>
                </div>

                <nav className={styles.sideNav}>
                  {['Dashboard','Orders','Clients','Designs','Delivered'].map((item, i) => (
                    <div
                      key={item}
                      className={`${styles.sideItem} ${i === 1 ? styles.sideItemActive : ''}`}
                    >
                      <span className={styles.sideItemDot} />
                      {item}
                    </div>
                  ))}
                </nav>

                <div className={styles.sideStats}>
                  <div className={styles.statBox}>
                    <span className={styles.statNum}>38</span>
                    <span className={styles.statLbl}>Active</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statNum}>500+</span>
                    <span className={styles.statLbl}>Delivered</span>
                  </div>
                </div>

              </div>

              {/* Orders list */}
              <div className={styles.orderList}>

                <div className={styles.listHeader}>
                  <span className={styles.listTitle}>Active Orders</span>
                  <span className={styles.listBadge}>12 in progress</span>
                </div>

                {ORDERS.map((o, i) => (
                  <div
                    key={i}
                    className={`${styles.orderRow} ${i === 0 ? styles.orderRowActive : ''}`}
                  >
                    <div className={styles.orderAvatar}>
                      {o.name.charAt(0)}
                    </div>
                    <div className={styles.orderInfo}>
                      <span className={styles.orderName}>{o.name}</span>
                      <span className={styles.orderType}>{o.type}</span>
                    </div>
                    <div className={`${styles.orderBadge} ${styles[o.status]}`}>
                      {o.status === 'delivered' ? '✓ Done' :
                       o.status === 'production' ? '⚙ Making' : '✏ Design'}
                    </div>
                  </div>
                ))}

              </div>

              {/* Detail panel */}
              <div className={styles.detail}>

                <div className={styles.detailHeader}>
                  <div className={styles.detailAvBig}>KJ</div>
                  <div>
                    <div className={styles.detailName}>Kanda Jewellers</div>
                    <div className={styles.detailSub}>Ludhiana · Acrylic 3D Letters</div>
                  </div>
                </div>

                <div className={styles.detailMeta}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaKey}>Material</span>
                    <span className={styles.metaVal}>Gold Acrylic + LED</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaKey}>Size</span>
                    <span className={styles.metaVal}>12ft × 3ft</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaKey}>Delivery</span>
                    <span className={styles.metaVal}>2 days remaining</span>
                  </div>
                </div>

                <div className={styles.progressLabel}>Production Progress</div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} />
                </div>
                <div className={styles.progressPct}>60%</div>

                <div className={styles.steps}>
                  {STEPS.map((s, i) => (
                    <div key={i} className={`${styles.step} ${i < 3 ? styles.stepDone : i === 3 ? styles.stepActive : ''}`}>
                      <div className={styles.stepDot} />
                      {i < 4 && <div className={styles.stepLine} />}
                      <span className={styles.stepLbl}>{s}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* Mac chin */}
          <div className={styles.chin}>
            <div className={styles.chinLogo}>SJ ARTS</div>
          </div>

        </div>

        {/* Mac stand */}
        <div className={styles.stand}>
          <div className={styles.standNeck} />
          <div className={styles.standBase} />
        </div>

      </div>

    </section>
  )
}