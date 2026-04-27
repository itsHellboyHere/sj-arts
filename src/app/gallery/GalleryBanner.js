"use client";

import styles from "./gallery.module.css";

const IMAGES = [
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057811/IMG_4105_hr1ycz.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057811/IMG_4111_vsauut.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057810/IMG_4110_b6tbay.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057811/IMG_4106_iix3qo.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057809/IMG_4115_kwxbvc.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057813/IMG_4121_z3s13z.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057813/IMG_4120_rcfphu.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057815/IMG_4123_l2s8pw.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057812/IMG_4107_n3ebe8.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057813/IMG_4119_bvbf4y.jpg",
  "https://res.cloudinary.com/dxdofhauf/image/upload/q_auto/f_auto/v1776057814/IMG_4127_bgtp5e.jpg",
];

export default function GalleryBanner() {
  return (
    <div className={styles.banner}>

      {/* grid bg */}
      <div className={styles.gridBg} aria-hidden />

      {/* top label */}
      <div className={styles.topLabel}>
        <span className={styles.dot} />
        <span>SJ Arts · Our Work · Since 2009</span>
      </div>

      {/* 3D carousel — untouched */}
      <div
        className={styles.slider}
        style={{ "--quantity": IMAGES.length }}
      >
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className={styles.item}
            style={{ "--position": i + 1 }}
          >
            <img
              src={src}
              alt={`SJ Arts project ${i + 1}`}
              loading={i < 4 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* logo watermark + stats */}
      <div className={styles.content}>
        <div className={styles.logoWatermark} aria-hidden>
          <img src="/logo.png" alt="" className={styles.logoImg} />
        </div>
        <div className={styles.stats}>
          <span>500+ Projects</span>
          <span className={styles.statSep}>·</span>
          <span>Punjab · Himachal · Pan India</span>
          <span className={styles.statSep}>·</span>
          <span>Since 2009</span>
        </div>
      </div>

    </div>
  );
}