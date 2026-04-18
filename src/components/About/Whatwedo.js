'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styles from './Whatwedo.module.css';

const services = [
  {
    cat: 'Exterior & Signage',
    num: '01',
    color: '#FF6B1A',
    borderRgb: '255,107,26',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="9" width="36" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 31v7M31 31v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 20l5 4 5-7 5 5 5-6 5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: ['Acrylic Letters','Acrylic Lollipop','ACP Board','ACP Elevation','Glow Sign Board','Fabric LED Board','Neon Sign Board','Running LED','Video LED','Vinyl Printing','One Way Vision','Banners & Hoardings'],
  },
  {
    cat: 'Interior Solutions',
    num: '02',
    color: '#D4A017',
    borderRgb: '212,160,23',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 38V16L22 6l16 10v22Z" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="26" width="12" height="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M22 6v20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.5"/>
      </svg>
    ),
    items: ['Custom Wallpapers','Decorative Flooring','Artificial Green Grass','Wall Cladding','Interior Branding','Decorative Laminates','False Ceiling','Glass Films & Frosting'],
  },
  {
    cat: 'Promotional & Print',
    num: '03',
    color: '#C084FC',
    borderRgb: '192,132,252',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 30v8h20v-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="15" y="17" width="14" height="2" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="15" y="22" width="9" height="2" rx="1" fill="currentColor" opacity="0.35"/>
      </svg>
    ),
    items: ['Visiting Cards','Mug Printing','Pen Printing','Flex Banners','Vinyl Stickers','Corporate Gifts','Brand Merchandise'],
  },
];

// Apple's signature cubic-bezier timing curve
const appleEase = [0.16, 1, 0.3, 1];

// Internal Animation Variants
const boardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', 
    transition: { duration: 1.2, ease: appleEase, delay: 0.2 } // Slight delay so the card scales up first
  }
};

const cardsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 } // Triggers cards after the board drops in
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(6px)' },
  visible: { 
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', 
    transition: { duration: 0.9, ease: appleEase } 
  }
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { duration: 0.8, ease: appleEase, delay: 0.8 } 
  }
};

export default function WhatWeDo() {
  const containerRef = useRef(null);

  // 1. Scrubbing Scroll Effect for the entire section (The "Card Reveal")
  const { scrollYProgress: entranceProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 10%"] 
  });

  const sectionScale = useTransform(entranceProgress, [0, 1], [0.85, 1]);
  const sectionOpacity = useTransform(entranceProgress, [0, 0.4], [0, 1]);
  const sectionY = useTransform(entranceProgress, [0, 1], ['15vh', '0vh']);
  const sectionRadius = useTransform(entranceProgress, [0, 1], ['60px', '0px']);

  // 2. Trigger internal animations when the section is 30% in view
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className={styles.sectionWrapper} ref={containerRef}>
      
      {/* The Animated "Card" that grows into the viewport */}
      <motion.div 
        className={styles.animatedSection}
        style={{
          scale: sectionScale,
          opacity: sectionOpacity,
          y: sectionY,
          borderRadius: sectionRadius,
          transformOrigin: "bottom center"
        }}
      >
        <div className={styles.noise} aria-hidden="true" />

        {/* ── HANGING BOARD ─────────────────────────── */}
        <motion.div 
          className={styles.boardWrap}
          variants={boardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className={styles.wires} aria-hidden="true">
            <div className={styles.wire} />
            <div className={styles.wire} />
            <div className={styles.wire} />
          </div>

          <div className={styles.board}>
            <svg className={styles.tubeSvg} viewBox="0 0 860 110" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="854" height="104" rx="12" stroke="#FF6B1A" strokeWidth="2.5" className={styles.tubeRect}/>
              {[190, 430, 670].map((x,i) => (
                <g key={i}>
                  <circle cx={x} cy="3" r="5" fill="#FF6B1A" opacity="0.8"/>
                  <circle cx={x} cy="3" r="2.5" fill="#FFAA70"/>
                </g>
              ))}
              {[[14,14],[846,14],[14,96],[846,96]].map(([cx,cy],i)=>(
                <circle key={i} cx={cx} cy={cy} r="4.5" stroke="#FF6B1A" strokeWidth="1" opacity="0.5" fill="none"/>
              ))}
            </svg>

            <div className={styles.boardContent}>
              <span className={styles.boardEye}>What We Do</span>
              <div className={styles.boardTitleRow}>
                <span className={styles.t1}>End-to-End</span>
                <span className={styles.t2}>Brand Solutions</span>
              </div>
              <p className={styles.boardSub}>
                All under one roof · All under our direct supervision
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── CARDS ─────────────────────────────────── */}
        <div className={styles.cardsWrap}>
          <motion.div 
            className={styles.cardsGrid}
            variants={cardsContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((svc) => (
              <motion.div 
                key={svc.cat}
                className={styles.card}
                variants={cardVariants}
                style={{
                  '--c': svc.color,
                  '--crgb': svc.borderRgb,
                }}
              >
                <div className={styles.cardBg} />
                <div className={styles.cardHead}>
                  <span className={styles.cardNum}>{svc.num}</span>
                  <div className={styles.iconBox} style={{ color: svc.color }}>
                    {svc.icon}
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{svc.cat}</h3>
                <div className={styles.divider} />
                <ul className={styles.itemList}>
                  {svc.items.map((item, ii) => (
                    <li key={item} className={styles.item} style={{ '--ii': ii }}>
                      <span className={styles.dot} />
                      {item}
                    </li>
                  ))}
                </ul>
                {['tl','tr','bl','br'].map(c => (
                  <span key={c} className={`${styles.screw} ${styles[c]}`} />
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── BADGE ─────────────────────────────────── */}
        <motion.div 
          className={styles.badge}
          variants={badgeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.badgeIcon}>
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span>100% In-House Production · No Third-Party Vendors</span>
        </motion.div>

      </motion.div>
    </section>
  );
}