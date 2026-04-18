'use client';
import { useRef, useEffect, useState } from 'react';
import styles from './Worksgallery.module.css';

// Placeholders — replace with real work images in /public/works/
const works = [
  { src: '/works/work-1.jpg', label: 'ACP Elevation', tag: 'Exterior' },
  { src: '/works/work-2.jpg', label: 'Neon Sign Board', tag: 'Signage' },
  { src: '/works/work-3.jpg', label: 'Interior Branding', tag: 'Interior' },
  { src: '/works/work-4.jpg', label: 'Acrylic Letters', tag: 'Signage' },
  { src: '/works/work-5.jpg', label: 'LED Board', tag: 'Exterior' },
  { src: '/works/work-6.jpg', label: 'Wall Cladding', tag: 'Interior' },
];

function WorkCard({ work, index }) {
  const cardRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * 0.12 * (index % 2 === 0 ? -1 : 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.imgWrap} style={{ transform: `translateY(${offset}px)` }}>
        <img
          src={work.src}
          alt={work.label}
          className={styles.img}
          onError={e => {
            e.target.parentNode.classList.add(styles.noImg);
            e.target.style.display = 'none';
          }}
        />
        <div className={styles.imgFallback}>
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="44" height="44" rx="4" stroke="rgba(212,160,23,0.3)" strokeWidth="1.5"/>
            <path d="M8 36 L20 24 L30 32 L40 20 L52 36" stroke="rgba(212,160,23,0.2)" strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="22" cy="20" r="4" fill="rgba(212,160,23,0.15)"/>
          </svg>
          <span>{work.label}</span>
        </div>
      </div>
      <div className={styles.overlay}>
        <span className={styles.tag}>{work.tag}</span>
        <p className={styles.cardLabel}>{work.label}</p>
      </div>
    </div>
  );
}

export default function WorksGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Our Work</span>
        <h2 className={styles.heading}>
          15 Years of<br/>
          <span className={styles.accent}>Craftsmanship</span>
        </h2>
        <p className={styles.sub}>A glimpse of what we've built across India.</p>
      </div>

      <div className={styles.masonry}>
        {works.map((work, i) => (
          <WorkCard key={work.src} work={work} index={i} />
        ))}
      </div>

      <div className={styles.footer}>
        <a href="/projects" className={styles.viewAll}>
          View All Projects
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
}