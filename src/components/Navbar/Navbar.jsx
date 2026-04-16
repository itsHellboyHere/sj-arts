'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'F&Q', href: '/faq' },
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

            {/* ── Main Nav ── */}
            <nav className={styles.nav}>

                {/* Logo (Neon Board Only) */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoText}>
                        
                        {/* MINI NEON BOARD */}
                        <div className={styles.miniNeonBoard}>
                            {/* Tiny mounting bolts */}
                            <span className={styles.boardBolt} style={{ left: '6px' }}></span>
                            <span className={styles.boardBolt} style={{ right: '6px' }}></span>
                            
                            <svg
                                className={styles.neonSvg}
                                viewBox="0 0 110 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="SJ ARTS"
                            >
                                <symbol id="nav-neon-text">
                                    <text x="50%" y="26" textAnchor="middle">SJ ARTS</text>
                                </symbol>
                                <g>
                                    <use className={styles.sFill} href="#nav-neon-text" />
                                    <use className={`${styles.sText} ${styles.s1}`} href="#nav-neon-text" />
                                    <use className={`${styles.sText} ${styles.s2}`} href="#nav-neon-text" />
                                    <use className={`${styles.sText} ${styles.s3}`} href="#nav-neon-text" />
                                    <use className={`${styles.sText} ${styles.s4}`} href="#nav-neon-text" />
                                    <use className={`${styles.sText} ${styles.s5}`} href="#nav-neon-text" />
                                </g>
                            </svg>
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
                        Contact Us
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
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    )
}