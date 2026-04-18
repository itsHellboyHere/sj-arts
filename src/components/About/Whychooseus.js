'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Whychooseus.module.css';

const reasons = [
  { 
    num: '01', 
    title: '15+ Years of Mastery', 
    desc: 'Delivering excellence across hundreds of landmark projects in North India since 2009. We don’t just make signs; we engineer brand identities.' 
  },
  { 
    num: '02', 
    title: '100% In-House Production', 
    desc: 'Total control over quality, timelines, and pricing through our state-of-the-art facility. No middlemen, no compromises, no delays.' 
  },
  { 
    num: '03', 
    title: 'End-to-End Execution', 
    desc: 'From architectural signage to complete interior branding, we handle every microscopic detail under one roof.' 
  },
  { 
    num: '04', 
    title: 'Pan-India Capability', 
    desc: 'Deep logistical roots in the North, paired with the robust infrastructure required to execute projects flawlessly nationwide.' 
  },
  { 
    num: '05', 
    title: 'National Brand Trust', 
    desc: 'The chosen branding partner for Bank of Maharashtra, JBL, Kent RO, Indus University, and dozens of top-tier enterprises.' 
  },
  { 
    num: '06', 
    title: 'Founder-Led Dedication', 
    desc: 'Every project receives the personal oversight of our founder. We aren\'t looking to close tickets; we build lifelong partnerships.' 
  },
];

const appleEase = [0.16, 1, 0.3, 1];

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  // Tracks the scroll progress to draw the orange timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"] 
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.inner}>
        
        {/* ── LEFT COLUMN: STICKY HEADER ── */}
        <div className={styles.leftCol}>
          <div className={styles.stickyLabel}>
            <motion.span 
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The SJ Arts Standard
            </motion.span>
            
            <motion.h2 
              className={styles.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: appleEase }}
            >
              SIX REASONS <br/>
              TO TRUST <span className={styles.accent}>OUR TEAM.</span>
            </motion.h2>

            <motion.p 
              className={styles.leftSub}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: appleEase }}
            >
              We bring precision, scale, and uncompromising quality to every brand we touch. Here is how we do it differently.
            </motion.p>
          </div>
        </div>

        {/* ── RIGHT COLUMN: TIMELINE & CARDS ── */}
        <div className={styles.rightCol}>
          
          <div className={styles.timelineTrack}>
            <motion.div 
              className={styles.timelineFill} 
              style={{ height: lineHeight }} 
            />
          </div>

          <div className={styles.cardsWrapper}>
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                className={styles.cardWrapper}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }} 
                transition={{ duration: 0.8, ease: appleEase }}
              >
                {/* Timeline Node */}
                <motion.div 
                  className={styles.node}
                  initial={{ backgroundColor: "#E5E7EB", borderColor: "#ffffff" }}
                  whileInView={{ backgroundColor: "#FF6B1A", borderColor: "#FFE4D6" }}
                  viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                  transition={{ duration: 0.4 }}
                />

                {/* UIVerse Style Card (Light Mode Adaptation) */}
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardNumber}>
                      <span>{r.num}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{r.title}</h3>
                    <p className={styles.cardDesc}>{r.desc}</p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}