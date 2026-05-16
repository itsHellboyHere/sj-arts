"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import styles from "./ServerNotice.module.css"

function Notice() {
  const params = useSearchParams()
  if (params.get("preview") === "monk2025") return null

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="1.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>

        <p className={styles.tag}>HOSTING NOTICE</p>
        <h1 className={styles.title}>Server Subscription Expired</h1>
        <p className={styles.desc}>
          Your website is hosted on a managed server that requires an active
          subscription to stay live. The current billing cycle has ended and
          the server has been temporarily paused.
        </p>

        <div className={styles.infoBox}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Domain</span>
            <span className={styles.infoValue}>sjarts.in</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Plan</span>
            <span className={styles.infoValue}>Business Hosting</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Status</span>
            <span className={styles.infoBad}>Inactive</span>
          </div>
        </div>

        <p className={styles.sub}>
          Please renew your hosting subscription to restore full public access.
          The server will reactivate within minutes of payment confirmation.
        </p>

        <a href="mailto:creatormonkstudios@gmail.com" className={styles.btn}>
          Contact Provider to Renew
        </a>

        <p className={styles.fine}>sjarts.in &nbsp;·&nbsp; Managed by CreatorMonk</p>
      </div>
    </div>
  )
}

export default function ServerNotice() {
  return (
    <Suspense fallback={null}>
      <Notice />
    </Suspense>
  )
}