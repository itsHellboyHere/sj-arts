"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./GalleryMasonry.module.css";

const ITEMS = [
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/75953d7f-7801-4640-a3c1-9fccdd883f27_kuiwyg",     caption: "Acrylic Letters"   },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/ebaad071-1bdf-4cc7-8710-7e06108c2671_ayojju",     caption: "Neon Sign"         },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/284a5a4d-cd80-48ea-977c-fc16fd00745c_eiidfk",     caption: "Glow Sign Board"   },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/60d8fe3e-81f5-4cac-80ba-9830d19b94b9_v7ykac.jpg", caption: "Acrylic Lollipop" },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/c1d6a7b5-44d7-4ecf-ade0-18067c7ed58f_luzobv",     caption: "Fabric LED Board"  },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/bf07decc-cf41-49ee-87e1-a83ec4a1cf8f_xyn5nu",     caption: "Neon Sign"         },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/9daa60e6-5baf-48c9-adfe-b72472e90908_chhlko",     caption: "ACP Board"         },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/674211e2-6a90-48d2-8ed8-b433286c497a_aumfrp",     caption: "Acrylic Letters"   },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/71a9a7f3-5c7e-4149-96c6-660975ee394d_ng4l2g",     caption: "Clip On Board"     },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/ae518bb3-8ada-41d7-aeb4-262271ac3d17_eowe8b",     caption: "Mug Printing"      },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/849d90b8-a4de-4a5f-b42a-cd81a731db1b_flqr6e",     caption: "Fabric LED Board"  },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/ca64eb4d-37a0-4ddc-b062-45050341233c_n8p5wq",     caption: "Glow Sign Board"   },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/61c5ad9e-5fa5-41eb-b3e7-f3f05eb42bd2_ntsjkx",     caption: "Pen Printing"      },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/7149cf6b-0750-4c36-b93d-03672e9a62df_cib520",     caption: "Acrylic Lollipop"  },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/e8c7849c-beca-47cb-8100-7da9aee6f2ef_sdohta",     caption: "Neon Sign"         },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/92c68f04-c0fe-4070-a040-31846b29c1e8_xbzrmz",     caption: "ACP Board"         },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/764bb252-c16f-4918-90d9-54b5ff4c0c4f_vqvno2",     caption: "Mug Printing"      },
  { type: "image", src: "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_900/4795dc8e-140c-4e1e-b1f7-4dadb2c7c442_rffsu8",     caption: "Fabric LED Board"  },
  {
    type:  "video",
    src:   "https://res.cloudinary.com/dxdofhauf/video/upload/q_60/VIDEO-2026-04-12-21-10-46_k5xrjs",
    thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_900,so_2/VIDEO-2026-04-12-21-10-46_k5xrjs",
    caption: "Acrylic Install Reel",
  },
  {
    type:  "video",
    src:   "https://res.cloudinary.com/dxdofhauf/video/upload/q_60/e92098c1-49dc-4dc0-88fe-aee6e9008262_oil71n",
    thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_900,so_2/e92098c1-49dc-4dc0-88fe-aee6e9008262_oil71n",
    caption: "Video LED Wall",
  },
];

// ─── Height + entry maps ──────────────────────────────────────
const HEIGHT_MAP = {
  0: ["tall","medium","short","tall","medium","short"],
  1: ["medium","short","tall","medium","short","tall"],
  2: ["short","tall","medium","short","tall","medium"],
};
const ENTRY = {
  0: { x: -100, y: 40  },
  1: { x: 0,    y: 100 },
  2: { x: 100,  y: 40  },
};

// ─── Lightbox ─────────────────────────────────────────────────
function Lightbox({ item, onClose }) {
  // keyboard close
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  // lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <motion.div
      className={styles.lbBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Close */}
      <button className={styles.lbClose} onClick={onClose} aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
        </svg>
      </button>

      <motion.div
        className={styles.lbMedia}
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.93, y: 24  }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            className={styles.lbVideo}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img
            src={item.src}
            alt={item.caption}
            className={styles.lbImg}
          />
        )}
      </motion.div>

      {/* Caption */}
      <div className={styles.lbCaption}>{item.caption}</div>
    </motion.div>
  );
}

// ─── Single grid item ─────────────────────────────────────────
function Item({ item, colIndex, rowIndex, globalIndex, onOpen }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  const heights = HEIGHT_MAP[colIndex] ?? HEIGHT_MAP[0];
  const h       = heights[rowIndex % heights.length];
  const entry   = ENTRY[colIndex] ?? ENTRY[1];
  const delay   = colIndex * 0.1;

  return (
    <motion.div
      ref={ref}
      className={`${styles.item} ${styles[h]}`}
      initial={{ opacity: 0, x: entry.x, y: entry.y, scale: 0.92 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onOpen(globalIndex)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(globalIndex)}
    >
      {item.type === "video" ? (
        <>
          <img src={item.thumb} alt={item.caption} className={styles.img} loading="lazy" />
          <div className={styles.playOverlay}>
            <div className={styles.playBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#D4A017">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </>
      ) : (
        <img
          src={item.src}
          alt={item.caption}
          className={styles.img}
          loading={globalIndex < 6 ? "eager" : "lazy"}
        />
      )}
      <div className={styles.caption}>
        <span className={styles.captionNum}>{String(globalIndex + 1).padStart(2, "0")}</span>
        <span className={styles.captionText}>{item.caption}</span>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────
export default function GalleryMasonry() {
  const [activeIndex, setActiveIndex] = useState(null);

  const cols = [[], [], []];
  ITEMS.forEach((item, i) => cols[i % 3].push({ item, globalIndex: i }));

  return (
    <>
      <section className={styles.section}>
        <div className={styles.grid}>
          {cols.map((col, colIndex) => (
            <div key={colIndex} className={styles.col}>
              {col.map(({ item, globalIndex }, rowIndex) => (
                <Item
                  key={globalIndex}
                  item={item}
                  colIndex={colIndex}
                  rowIndex={rowIndex}
                  globalIndex={globalIndex}
                  onOpen={setActiveIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            item={ITEMS[activeIndex]}
            onClose={() => setActiveIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}