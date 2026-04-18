'use client';
import { useRef } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import styles from './OurStory.module.css';

const STORIES = [
  {
    id: 1,
    chapter: '01',
    badge: 'Where It Began',
    headline: ['A single press.', 'A thousand possibilities.'],
    body: 'In 2009, SJ Arts was born from one conviction — that every brand deserves to be seen. We started with a single printing press and a relentless belief that quality signage could change how businesses connect with the world.',
    image: 'story/1.jpg',
    imageCaption: 'Our first workshop, 2009',
    stat: { value: '2009', label: 'Founded' },
    accent: 'cream',
  },
  {
    id: 2,
    chapter: '02',
    badge: 'The Craft',
    headline: ['Every surface is', 'a canvas for identity.'],
    body: "From storefront fascias to interior wall wraps, we mastered the art of turning blank surfaces into brand statements. Our craftsmen obsess over millimetre precision — because a great sign is never just a sign.",
    image: 'story/2.jpg',
    imageCaption: 'Precision print production',
    stat: { value: '15+', label: 'Years of craft' },
    accent: 'dark',
  },
  {
    id: 3,
    chapter: '03',
    badge: 'The Scale',
    headline: ['Trusted by brands', 'that refuse to be ignored.'],
    body: "Across 500+ projects, SJ Arts has partnered with the country's most recognised names — delivering complete brand environments from elevation signage to bespoke corporate gifts, all under one roof.",
    image: 'story/3.jpg',
    imageCaption: "Brand environments we've built",
    stat: { value: '500+', label: 'Projects delivered' },
    accent: 'gold',
  },
  {
    id: 4,
    chapter: '04',
    badge: 'The Promise',
    headline: ["We don't make signs.", 'We build brand experiences.'],
    body: 'Today, SJ Arts is more than a printing company. We are a full-service brand environment partner — combining cutting-edge fabrication with old-school craft values. On time. Every time.',
    image: 'story/4.jpg',
    imageCaption: "Where we're headed next",
    stat: { value: '∞', label: 'Brand stories ahead' },
    accent: 'cream',
  },
];

const N = STORIES.length;
const SPRING_CFG = { stiffness: 120, damping: 22, mass: 0.1, restDelta: 0.0001 };

function Card({ story, index, smoothProgress }) {
  const isFirst = index === 0;
  const isLast  = index === N - 1;
  const isEven  = index % 2 === 0;

  const sliceSize = 1 / N;
  const s         = index * sliceSize;
  const e         = s + sliceSize;
  const entryEnd  = s + sliceSize * 0.30;
  const exitStart = s + sliceSize * 0.70;

  const yIn = useTransform(
    smoothProgress,
    isFirst ? [0, 1]         : [s,       entryEnd],
    isFirst ? ['0vh', '0vh'] : ['100vh', '0vh']
  );

  const scaleOut = useTransform(
    smoothProgress,
    isLast ? [0, 1] : [exitStart, e],
    isLast ? [1, 1] : [1,         0.95]
  );

  const veilOut = useTransform(
    smoothProgress,
    isLast ? [0, 1] : [exitStart, e],
    isLast ? [0, 0] : [0,         0.28]
  );

  return (
    <motion.div
      className={styles.card}
      data-accent={story.accent}
      style={{
        y: yIn,
        scale: scaleOut,
        zIndex: index + 1,
        transformOrigin: 'top center',
      }}
    >
      <motion.div className={styles.veil} style={{ opacity: veilOut }} />

      <div className={`${styles.grid} ${!isEven ? styles.reversed : ''}`}>

        <div className={styles.imgWrap}>
          <div className={styles.chNum} aria-hidden="true">{story.chapter}</div>
          <div className={styles.imgFrame}>
            <img src={story.image} alt={story.imageCaption} className={styles.img} loading="eager" />
            <div className={styles.imgGrad} />
            <span className={styles.imgCap}>{story.imageCaption}</span>
          </div>
        </div>

        <div className={styles.textCol}>
          <div className={styles.badge}>
            <span className={styles.badgeLine} />
            <span className={styles.badgeTxt}>{story.badge}</span>
          </div>
          <h2 className={styles.hl}>
            <span>{story.headline[0]}</span>
            <em>{story.headline[1]}</em>
          </h2>
          <p className={styles.body}>{story.body}</p>
          <div className={styles.stat}>
            <span className={styles.statVal}>{story.stat.value}</span>
            <span className={styles.statLbl}>{story.stat.label}</span>
          </div>
          <div className={styles.prog}>
            <span className={styles.progN}>{String(index + 1).padStart(2, '0')}</span>
            <div className={styles.progTrack}>
              <div className={styles.progFill} style={{ width: `${((index + 1) / N) * 100}%` }} />
            </div>
            <span className={styles.progN}>{String(N).padStart(2, '0')}</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function OurStory() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const smoothProgress = useSpring(scrollYProgress, SPRING_CFG);

  return (
    <>
      <div className={styles.header}>
        <span className={styles.eyebrow}>The SJ Arts Legacy</span>
        <h1 className={styles.title}>Our Story</h1>
      </div>

      <section
        ref={sectionRef}
        className={styles.section}
        style={{ height: `${(N + 0.5) * 100}vh` }}
      >
        <div className={styles.stage}>
          {STORIES.map((story, i) => (
            <Card
              key={story.id}
              story={story}
              index={i}
              smoothProgress={smoothProgress}
            />
          ))}
        </div>
      </section>

      <div className={styles.close}>
        <p className={styles.closeTxt}>
          Every mark we make. Every brand we build.<br />
          <em>SJ Arts — since 2009.</em>
        </p>
      </div>
    </>
  );
}