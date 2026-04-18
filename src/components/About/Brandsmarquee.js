'use client';
import styles from './Brandsmarquee.module.css';

const brands = [
  'Bank of Maharashtra',
  'JBL',
  'Indus University',
  'Rikhi Ram Nand Lal',
  'Venus',
  'Kent RO',
  'Trustlam Mica',
];

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands, ...brands];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Brands That Trust Us</span>
        <div className={styles.track}>
          <div className={styles.marquee}>
            {doubled.map((b, i) => (
              <div key={i} className={styles.brand}>
                <span className={styles.brandName}>{b}</span>
                <span className={styles.sep}>·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient fades */}
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
      </div>
    </section>
  );
}