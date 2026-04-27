"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { services, imgUrl, videoUrl } from "@/data/services";
import MasonryGallery from "@/components/Services/Masonrygallery";
import styles from "./slug.module.css";

// ─── Stagger reveal helper ────────────────────────────────────
function FadeUp({ children, delay = 0, className }) {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Sticky parallax divider ──────────────────────────────────
function StickyParallax({ color }) {
  return (
    <div className={styles.stickyParallaxWrap}>
      <div
        className={styles.stickyParallaxBg}
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${color}28 0%, transparent 70%)`,
        }}
      />
      <div className={styles.stickyParallaxLine} style={{ background: color }} />
    </div>
  );
}

// ─── Spec table ───────────────────────────────────────────────
function SpecTable({ specs }) {
  return (
    <div className={styles.specTable}>
      {specs.map(({ label, value }) => (
        <div key={label} className={styles.specRow}>
          <span className={styles.specLabel}>{label}</span>
          <span className={styles.specValue}>{value}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Sibling service nav ──────────────────────────────────────
function SiblingNav({ current }) {
  const idx   = services.findIndex(s => s.slug === current.slug);
  const prev  = services[idx - 1] || null;
  const next  = services[idx + 1] || null;

  return (
    <div className={styles.siblingNav}>
      {prev ? (
        <Link href={`/services/${prev.slug}`} className={styles.siblingLink}>
          <span className={styles.siblingDir}>← Previous</span>
          <span className={styles.siblingTitle}>{prev.title}</span>
        </Link>
      ) : <div />}
      <Link href="/services" className={styles.allServices}>All Services</Link>
      {next ? (
        <Link href={`/services/${next.slug}`} className={`${styles.siblingLink} ${styles.siblingLinkRight}`}>
          <span className={styles.siblingDir}>Next →</span>
          <span className={styles.siblingTitle}>{next.title}</span>
        </Link>
      ) : <div />}
    </div>
  );
}

// ─── Main client component ────────────────────────────────────
export default function ServiceSlugClient({ service }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target:  heroRef,
    offset:  ["start start", "end start"],
  });
  const heroY    = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpac = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Build fallback Cloudinary URLs if no assets array defined
  // Real images come from service.assets — this shows the pattern.
  const galleryAssets = service.assets ?? [];

  return (
    <main className={styles.page}>

      {/* ── MINI HERO (≈30vh) ─────────────────────────────────── */}
      <section className={styles.hero} ref={heroRef}>
        {/* Parallax coloured bg blob */}
        <motion.div
          className={styles.heroBg}
          style={{ y: heroY }}
          aria-hidden="true"
        >
          <div
            className={styles.heroBgBlob}
            style={{
              background: `radial-gradient(ellipse 80% 70% at 55% 50%, ${service.color}30 0%, transparent 70%)`,
            }}
          />
          <div className={styles.heroBgBase} />
        </motion.div>

        <div className={styles.heroGrain} aria-hidden="true" />

        <motion.div className={styles.heroContent} style={{ opacity: heroOpac }}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {service.tagline}
          </motion.p>

          {/* Accent line */}
          <motion.div
            className={styles.heroAccentLine}
            style={{ background: service.color }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </section>

      {/* ── STICKY PARALLAX DIVIDER ────────────────────────────── */}
      <StickyParallax color={service.color} />

      {/* ── INFO SECTION — Description + Specs ─────────────────── */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>

          {/* Description paragraphs */}
          <div className={styles.infoLeft}>
            {service.description.map((para, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <p className={i === 0 ? styles.descLead : styles.descBody}>
                  {para}
                </p>
              </FadeUp>
            ))}
          </div>

          {/* Specs */}
          <FadeUp delay={0.2} className={styles.infoRight}>
            <div className={styles.specsCard}>
              <p className={styles.specsHeading}>Specifications</p>
              <SpecTable specs={service.specs} />
              <Link href="/contact" className={styles.specsQuoteBtn}>
                Get a Quote for {service.title}
              </Link>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── GALLERY DIVIDER ────────────────────────────────────── */}
      <div className={styles.galleryDivider}>
        <FadeUp>
          <p className={styles.galleryEyebrow}>
            <span style={{ color: service.color }}>—</span> Client Work
          </p>
          <h2 className={styles.galleryTitle}>Real projects. Real results.</h2>
        </FadeUp>
      </div>

      {/* ── MASONRY GALLERY ────────────────────────────────────── */}
      <MasonryGallery
        assets={galleryAssets}
        accentColor={service.color}
        folder={service.folder}
      />

      {/* ── STICKY CTA SECTION ─────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div
          className={styles.ctaBg}
          style={{
            background: `radial-gradient(ellipse 60% 70% at 50% 50%, ${service.color}22 0%, transparent 70%)`,
          }}
        />
        <FadeUp className={styles.ctaContent}>
          <p className={styles.ctaEyebrow}>Interested?</p>
          <h2 className={styles.ctaTitle}>
            Need {service.title}?
          </h2>
          <p className={styles.ctaSub}>
            Share your requirement and get a custom quote within 2 hours.
            We handle design, fabrication, and installation end-to-end.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaBtnPrimary}
              style={{
                background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}CC 100%)`,
              }}
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20your%20printing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnWhatsApp}
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </FadeUp>
      </section>

      {/* ── SIBLING NAV ────────────────────────────────────────── */}
      <SiblingNav current={service} />

    </main>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}