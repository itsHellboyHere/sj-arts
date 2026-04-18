'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className={styles.hero} ref={containerRef}>
      {/* Subtle texture and lighting */}
      <motion.div className={styles.ambientGold} style={{ y: yBg }} />
      <div className={styles.noise} />

      <motion.div 
        className={styles.content}
        style={{ y: yText, opacity: opacityFade }}
      >
        <div className={styles.badgeWrapper}>
          <motion.span 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            EST. 2009 — NORTH INDIA
          </motion.span>
        </div>

        <motion.h1 
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.outline}>WHERE BRANDS</span>
          <br />
          <span className={styles.solidGlow}>
            COME TO LIF<span className={styles.brokenE}>E</span>
          </span>
        </motion.h1>
      </motion.div>

      {/* Scroll indicator pointing to the cream section below */}
      <motion.div 
        className={styles.scrollDown}
        style={{ opacity: opacityFade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className={styles.scrollText}>Discover Our Story</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}