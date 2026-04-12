'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const SERVICES_TICKER = [
    'Acrylic Letters', 'Acrylic Lollipop', 'ACP Board',
    'ACP Elevation', 'Glow Sign Board', 'Fabric LED Board',
    'Neon Sign Board', 'Running LED', 'Video LED',
    'Vinyl Printing', 'One Way Vision', 'Banners',
    'Hoardings', 'Mug Printing', 'Visiting Cards',
]

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => setMenuOpen(false), [pathname])

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>

            {/* ── Ticker ── */}
            <div className={`${styles.ticker} ${scrolled ? styles.tickerHidden : ''}`}>
                <div className={styles.tickerInner}>
                    <div className={styles.tickerTrack}>
                        {[...SERVICES_TICKER, ...SERVICES_TICKER].map((s, i) => (
                            <span key={i} className={styles.tickerItem}>
                                {s}
                                <span className={styles.tickerDot}>✦</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Main Nav ── */}
            <nav className={styles.nav}>

                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="SJ Arts Printers"
                        width={50}
                        height={50}
                        priority
                        unoptimized
                        className={styles.logoImg}
                    />
                    <div className={styles.logoText}>
                        <div className={styles.logoMain}>
                            <span className={styles.logoSJ}>SJ</span>
                            <span className={styles.logoArts}>ARTS</span>
                        </div>
                        <span className={styles.logoPrinters}>Printers · Since 2009</span>
                    </div>
                </Link>

                {/* Center links */}
                <ul className={styles.links}>
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`${styles.link} ${pathname === href ? styles.active : ''}`}
                            >
                                {label}
                                <span className={styles.linkLine} />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right — phone + CTA */}
                <div className={styles.ctaWrapper}>
                    <span className={styles.phone}>
                        <span className={styles.phoneDot} />
                        98888-08193
                    </span>
                    <Link href="/contact" className={styles.cta}>
                        Get Quote
                        <span className={styles.ctaArrow}>→</span>
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>

            </nav>

            {/* ── Mobile Menu ── */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileInner}>
                    <ul className={styles.mobileLinks}>
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`${styles.mobileLink} ${pathname === href ? styles.active : ''}`}
                                >
                                    {label}
                                    <span className={styles.mobileLinkArrow}>→</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.mobileBottom}>
                        <div className={styles.mobileContactInfo}>
                            <span>98888-08193</span>
                            <span>sjarts7@gmail.com</span>
                        </div>
                        <Link href="/contact" className={styles.mobileCta}>
                            Get Quote →
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    )
}