"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { imgUrl, videoUrl, CLOUDINARY_CLOUD } from "@/data/services";
import styles from "./MasonryGallery.module.css";

// ─── URL helpers ──────────────────────────────────────────────
function buildSrc(asset) {
  if (asset.type === "video")
    return asset.url ?? videoUrl(asset.publicId, "q_30,w_1200");
  return asset.url ?? imgUrl(asset.publicId, "q_auto,f_auto,w_1200");
}

function buildThumb(asset) {
  if (asset.type === "video") {
    return (
      asset.thumb ??
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload/q_auto,f_jpg,w_800,so_2/${asset.publicId}`
    );
  }
  return asset.url ?? imgUrl(asset.publicId, "q_auto,f_auto,w_800");
}

// ─── Height pattern per visual column ────────────────────────
const HEIGHT_MAP = {
  0: ["tall",   "medium", "short",  "tall",  "medium"],
  1: ["medium", "short",  "tall",   "short", "tall"  ],
  2: ["short",  "tall",   "medium", "tall",  "short" ],
};

// ─── Entry vectors per column ─────────────────────────────────
const ENTRY = {
  0: { x: -120, y: 40,  scale: 0.88 },
  1: { x: 0,    y: 120, scale: 0.88 },
  2: { x: 120,  y: 40,  scale: 0.88 },
};

// ─── Shimmer loader ───────────────────────────────────────────
function MediaLoader({ type, accentColor }) {
  return (
    <div className={styles.loaderWrap}>
      {/* Pulsing icon */}
      <div className={styles.loaderIcon}>
        {type === "video" ? (
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke={accentColor} strokeWidth="1.5" opacity="0.3" />
              <path d="M10 8l6 4-6 4V8z" fill={accentColor} opacity="0.9" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke={accentColor} strokeWidth="1.5" opacity="0.3" />
              <circle cx="8.5" cy="8.5" r="1.5" fill={accentColor} opacity="0.7" />
              <path d="M3 15l5-5 4 4 3-3 6 6" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Progress bar */}
      <div className={styles.loaderBarTrack}>
        <motion.div
          className={styles.loaderBar}
          style={{ background: accentColor }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Label */}
      <motion.p
        className={styles.loaderLabel}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {type === "video" ? "Loading video…" : "Loading image…"}
      </motion.p>
    </div>
  );
}

// ─── Single gallery item ──────────────────────────────────────
function GalleryItem({ asset, colIndex, rowIndex, globalIndex, onOpen, accentColor }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const heightList = HEIGHT_MAP[colIndex] ?? HEIGHT_MAP[0];
  const h          = heightList[rowIndex % heightList.length];
  const entry      = ENTRY[colIndex] ?? ENTRY[1];
  const delay      = colIndex * 0.12;

  return (
    <motion.div
      ref={ref}
      className={`${styles.item} ${styles[h]}`}
      initial={{ opacity: 0, x: entry.x, y: entry.y, scale: entry.scale }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onOpen(globalIndex)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onOpen(globalIndex)}
      aria-label={`View ${asset.type === "video" ? "video" : "image"} ${globalIndex + 1}`}
    >
      {asset.type === "video" ? (
        <>
          <img src={buildThumb(asset)} alt={asset.alt ?? `Project ${globalIndex + 1}`} className={styles.itemImg} loading="lazy" />
          <div className={styles.videoOverlay}>
            <div className={styles.playBtn} style={{ borderColor: accentColor }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={accentColor}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <img src={buildThumb(asset)} alt={asset.alt ?? `Project ${globalIndex + 1}`} className={styles.itemImg} loading="lazy" />
      )}
      <div className={styles.itemOverlay} style={{ "--accent": accentColor }}>
        <span className={styles.itemNum}>{String(globalIndex + 1).padStart(2, "0")}</span>
      </div>
    </motion.div>
  );
}

// ─── Lightbox media with loading state ───────────────────────
function LightboxMedia({ asset, accentColor }) {
  const [loaded,  setLoaded]  = useState(false);
  const [errored, setErrored] = useState(false);

  // Reset loaded state when asset changes
  useEffect(() => {
    setLoaded(false);
    setErrored(false);
  }, [asset]);

  const src = buildSrc(asset);

  return (
    <div className={styles.lbMediaInner}>
      {/* Loader — shown while media hasn't loaded */}
      <AnimatePresence>
        {!loaded && !errored && (
          <motion.div
            className={styles.lbLoaderOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MediaLoader type={asset.type} accentColor={accentColor} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error state */}
      {errored && (
        <div className={styles.lbError}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
          </svg>
          <p>Failed to load media</p>
        </div>
      )}

      {/* Actual media — fades in when ready */}
      {asset.type === "video" ? (
        <motion.video
          src={src}
          className={styles.lbVideo}
          controls
          autoPlay
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          onLoadedData={() => setLoaded(true)}
          onError={() => { setErrored(true); setLoaded(true); }}
        />
      ) : (
        <motion.img
          src={src}
          alt={asset.alt ?? "Project image"}
          className={styles.lbImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setLoaded(true)}
          onError={() => { setErrored(true); setLoaded(true); }}
        />
      )}
    </div>
  );
}

// ─── Lightbox shell ───────────────────────────────────────────
function Lightbox({ assets, currentIndex, onClose, onPrev, onNext, accentColor }) {
  const asset = assets[currentIndex];
  if (!asset) return null;

  useEffect(() => {
    function handler(e) {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < assets.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.lightboxBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
        onClick={onClose}
      >
        {/* Top bar */}
        <div className={styles.lbTopBar} onClick={e => e.stopPropagation()}>
          {/* Counter pill */}
          <div className={styles.lbCounter}>
            <span style={{ color: accentColor }}>{currentIndex + 1}</span>
            <span className={styles.lbCounterSep}>/</span>
            <span>{assets.length}</span>
          </div>

          {/* Type badge */}
          <div className={styles.lbTypeBadge}>
            {asset.type === "video" ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Video
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                Photo
              </>
            )}
          </div>

          {/* Close */}
          <button className={styles.lbClose} onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Media container */}
        <motion.div
          className={styles.lbMedia}
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          exit={{    opacity: 0, scale: 0.93, y: 24  }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={e => e.stopPropagation()}
        >
          <LightboxMedia asset={asset} accentColor={accentColor} />
        </motion.div>

        {/* Prev / Next */}
        {hasPrev && (
          <button
            className={`${styles.lbNav} ${styles.lbNavPrev}`}
            onClick={e => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {hasNext && (
          <button
            className={`${styles.lbNav} ${styles.lbNavNext}`}
            onClick={e => { e.stopPropagation(); onNext(); }}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {/* Bottom filmstrip dots */}
        <div className={styles.lbDots} onClick={e => e.stopPropagation()}>
          {assets.map((_, i) => (
            <button
              key={i}
              className={`${styles.lbDot} ${i === currentIndex ? styles.lbDotActive : ""}`}
              style={i === currentIndex ? { background: accentColor } : {}}
              onClick={() => {
                if (i < currentIndex) onPrev();
                else if (i > currentIndex) onNext();
              }}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Placeholder ──────────────────────────────────────────────
function GalleryPlaceholder({ accentColor }) {
  const cols = [[], [], []];
  Array.from({ length: 6 }, (_, i) => i).forEach(i => cols[i % 3].push(i));
  return (
    <div className={styles.grid}>
      {cols.map((col, ci) => (
        <div key={ci} className={styles.col}>
          {col.map((i, ri) => (
            <div key={i} className={`${styles.item} ${styles[HEIGHT_MAP[ci][ri % HEIGHT_MAP[ci].length]]} ${styles.placeholder}`}>
              <div className={styles.placeholderInner} style={{ "--accent": accentColor }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.4">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <span className={styles.placeholderText}>Client image</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────
export default function MasonryGallery({ assets = [], accentColor = "#D4A017", folder }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox  = (i) => setLightboxIndex(i);
  const closeLightbox = ()  => setLightboxIndex(null);
  const goPrev = ()         => setLightboxIndex(i => Math.max(0, i - 1));
  const goNext = ()         => setLightboxIndex(i => Math.min(assets.length - 1, i + 1));

  if (assets.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <GalleryPlaceholder accentColor={accentColor} />
          <p className={styles.addNote}>
            Add assets to this service in <code>data/services.js</code> using the <code>assets</code> array.
          </p>
        </div>
      </section>
    );
  }

  const cols = [[], [], []];
  assets.forEach((asset, i) => {
    cols[i % 3].push({ asset, globalIndex: i });
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cols.map((col, colIndex) => (
            <div key={colIndex} className={styles.col}>
              {col.map(({ asset, globalIndex }, rowIndex) => (
                <GalleryItem
                  key={globalIndex}
                  asset={asset}
                  colIndex={colIndex}
                  rowIndex={rowIndex}
                  globalIndex={globalIndex}
                  onOpen={openLightbox}
                  accentColor={accentColor}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          assets={assets}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          accentColor={accentColor}
        />
      )}
    </section>
  );
}