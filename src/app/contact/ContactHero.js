"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ContactHero.module.css";

function RevealWord({ word, delay, gold }) {
  return (
    <span className={styles.wordWrap}>
      <motion.span
        className={gold ? styles.heroTitleWordGold : styles.heroTitleWord}
        initial={{ y: "110%", opacity: 0, rotateX: -30 }}
        animate={{ y: "0%",   opacity: 1, rotateX: 0   }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: "inline-block", transformOrigin: "top center" }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function ContactHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target:  heroRef,
    offset:  ["start start", "end start"],
  });
  const heroY    = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroOpac = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className={styles.hero} ref={heroRef}>

      {/* Parallax bg */}
      <motion.div className={styles.heroBg} style={{ y: heroY }}>
        <img
          src="/contact-hero.jpg"
          alt="SJ Arts studio"
          className={styles.heroBgImg}
        />
        <div className={styles.heroBgOverlay} />
      </motion.div>

      {/* Grain */}
      <div className={styles.heroGrain} aria-hidden="true" />

      {/* Content */}
      <motion.div className={styles.heroContent} style={{ opacity: heroOpac }}>
        <motion.p
          className={styles.heroEyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrowDot} />
          SJ Arts · Since 2009
        </motion.p>

        <h1 className={styles.heroTitle} style={{ perspective: "900px" }}>
          <RevealWord word="Let's"     delay={0.20} />
          <RevealWord word="build"     delay={0.33} gold />
          <RevealWord word="something." delay={0.46} />
        </h1>

        <motion.p
          className={styles.heroSub}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Drop us a message — we respond within 2 hours.
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className={styles.pullIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <span>Pull up to Connect</span>
      </motion.div>

    </section>
  );
}