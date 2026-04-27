"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { services } from "@/data/services";
import styles from "./Services.module.css";

function HeroWord({ word, delay }) {
  return (
    <span className={styles.heroWordWrap}>
      <motion.span
        className={styles.heroWord}
        initial={{ y: "110%", opacity: 0, rotateX: -40 }}
        animate={{ y: "0%", opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

function RevealOnScroll({ children, direction = "bottom", delay = 0, className }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    bottom: { y: 80,  x: 0,   opacity: 0 },
    left:   { y: 0,   x: -80, opacity: 0 },
    right:  { y: 0,   x: 80,  opacity: 0 },
    top:    { y: -80, x: 0,   opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants[direction]}
      animate={inView ? { y: 0, x: 0, opacity: 1 } : variants[direction]}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ServiceCard({ service, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay:    (index % 4) * 0.08,
        ease:     [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/services/${service.slug}`} className={styles.card}>
        <span className={styles.cardAccent} style={{ background: service.color }} />
        <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
        <span className={styles.cardTitle}>{service.title}</span>
        <span className={styles.cardTagline}>{service.tagline}</span>
        <span className={styles.cardArrow}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}

const MARQUEE_ITEMS = [
  "Signage","Printing","LED Displays","Neon","ACP","Branding",
  "Banners","Acrylic","Wallpapers","Menus","Glow Signs","Hoardings",
];

function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className={styles.marqueeTrack} aria-hidden="true">
      <motion.div
        className={styles.marqueeInner}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={styles.marqueeItem}>
            {item}
            <span className={styles.marqueeDot} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY    = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpac = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Every", "Surface,", "A", "Statement."];

  return (
    <main className={styles.page}>

      <section className={styles.hero} ref={heroRef}>
        <motion.div className={styles.heroBg} style={{ y: heroY }} />
        <div className={styles.heroGrain} />

        <motion.div className={styles.heroContent} style={{ opacity: heroOpac }}>
          <RevealOnScroll direction="bottom" delay={0}>
            <p className={styles.heroEyebrow}>
              <span className={styles.eyebrowDot} />
              SJ Arts · Ludhiana
            </p>
          </RevealOnScroll>

          <h1 className={styles.heroTitle}>
            {words.map((w, i) => (
              <HeroWord key={w} word={w} delay={0.15 + i * 0.13} />
            ))}
          </h1>

          <RevealOnScroll direction="bottom" delay={0.75}>
            <p className={styles.heroSub}>
              15 specialised printing & signage services —<br />
              from laser-cut acrylic to full-motion LED walls.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="bottom" delay={0.9}>
            <div className={styles.heroActions}>
              <a href="#services" className={styles.btnPrimary}>Explore Services</a>
              <Link href="/contact" className={styles.btnSecondary}>Get a Quote</Link>
            </div>
          </RevealOnScroll>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className={styles.scrollDot}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <MarqueeStrip />

      <section className={styles.introSection} id="services">
        <div className={styles.introGrid}>
          <RevealOnScroll direction="left" className={styles.introLeft}>
            <h2 className={styles.introHeading}>
              Print that<br /><em>performs.</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="right" delay={0.15} className={styles.introRight}>
            <p>
              SJ Arts has been Ludhiana's trusted signage and printing partner
              for over two decades. We don't just print — we fabricate, install,
              and maintain. From a single branded mug to a 40-foot highway
              hoarding, every job gets the same obsessive attention to craft.
            </p>
            <p>
              Browse our full service catalogue below. Click any service to see
              real client work, detailed specs, and how to get started.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className={styles.bottomCta}>
        <RevealOnScroll direction="bottom">
          <div className={styles.ctaInner}>
            <p className={styles.ctaEyebrow}>Ready to start?</p>
            <h2 className={styles.ctaTitle}>Let's build something remarkable.</h2>
            <p className={styles.ctaSub}>
              Share your brief and we'll respond within 2 hours with a custom quote.
            </p>
            <Link href="/contact" className={styles.btnPrimary}>
              Request a Service →
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}