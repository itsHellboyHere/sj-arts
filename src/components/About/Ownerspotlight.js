'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import styles from './Ownerspotlight.module.css';

export default function OwnerSpotlight() {
  const containerRef = useRef(null);
  

  const { scrollYProgress: entranceProgress } = useScroll({
    target: containerRef,
    // Start animation when top of section hits bottom of screen
    // End animation when top of section hits 10% from the top of the screen
    offset: ["start end", "start 10%"] 
  });

  const sectionScale = useTransform(entranceProgress, [0, 1], [0.85, 1]);
  const sectionOpacity = useTransform(entranceProgress, [0, 0.4], [0, 1]);
  const sectionY = useTransform(entranceProgress, [0, 1], ['15vh', '0vh']);
  const sectionRadius = useTransform(entranceProgress, [0, 1], ['60px', '0px']);

  // 2. Parallax for the portrait image
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(parallaxProgress, [0, 1], ['-10%', '10%']);

  // 3. Staggered text entrance (triggers when 30% of the section is in view)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

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
        <div className={`container ${styles.grid}`}>
          
          {/* Left Column: The Portrait */}
          <div className={styles.imageCol}>
            <motion.div 
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.img 
                src="/owner.png" 
                alt="Mr. Jatin Verma - Founder of SJ Arts" 
                className={styles.image}
                style={{ y: imageY }}
              />
              {/* Gold architectural accent frame */}
              <div className={styles.imageFrame} />
            </motion.div>
          </div>

          {/* Right Column: The Editorial Content */}
          <motion.div 
            className={styles.contentCol}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className={styles.header}>
              <span className={styles.eyebrow}>Meet the Man Behind SJ Arts</span>
              <h2 className={styles.name}>Mr. Jatin Verma</h2>
              <span className={styles.role}>Founder & Owner</span>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.body}>
              <p>
                Mr. Jatin Verma is the driving force behind SJ Arts. With a career rooted entirely in the signage and branding industry, Jatin began this journey in <strong>2009</strong> with a clear vision — to bring high-quality, reliable, and creative branding solutions to businesses of every size across India.
              </p>
              <p>
                Over the years, his hands-on approach, deep industry knowledge, and relentless commitment to quality have built SJ Arts into a company that clients return to again and again. What started as a lean operation has grown into a well-equipped organisation with its own in-house production infrastructure — a testament to Jatin's belief that quality cannot be outsourced.
              </p>
            </motion.div>

            {/* High-end blockquote */}
            <motion.blockquote variants={fadeUp} className={styles.quote}>
              "Understand the client's need, deliver without compromise, and build relationships that last longer than any sign ever will."
            </motion.blockquote>
            
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}