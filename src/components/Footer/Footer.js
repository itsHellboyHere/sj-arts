"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./Footer.module.css";

const MAPS_URL = "https://maps.google.com/?q=Jai+Mata+Street+Opposite+Manvata+Dham+Haibowal+Kalan+Ludhiana+Punjab";

const SERVICES_COL = [
  { label: "Acrylic Letters",       href: "/services/acrylic-letters"   },
  { label: "Acrylic Lollipop",      href: "/services/acrylic-lollipop"  },
  { label: "ACP Boards",            href: "/services/acp-boards"         },
  { label: "Glow Sign Boards",      href: "/services/glow-sign-boards"   },
  { label: "Fabric LED Boards",     href: "/services/fabric-led-boards"  },
  { label: "Neon Sign Boards",      href: "/services/neon-sign-boards"   },
  { label: "Clip On Boards",        href: "/services/clip-on-boards"     },
  { label: "Video LED",             href: "/services/video-led"          },
  { label: "Running LED Boards",    href: "/services/running-led"        },
  { label: "Pen Printing",          href: "/services/pen-printing"       },
  { label: "Mug Printing",          href: "/services/mug-printing"       },
  { label: "PVC / WPC / UV Sheets", href: "/services/pvc-wpc-uv-sheets" },
  { label: "Wallpapers",            href: "/services/wallpapers"         },
  { label: "Menu Printing",         href: "/services/menu-printing"      },
  { label: "Banners & Hoarding",    href: "/services/banners-hoarding"   },
];

const SERVICES_COL2 = [
  { label: "Running LED Boards",    href: "/services/running-led"        },
  { label: "Pen Printing",          href: "/services/pen-printing"       },
  { label: "Mug Printing",          href: "/services/mug-printing"       },
  { label: "PVC / WPC / UV Sheets", href: "/services/pvc-wpc-uv-sheets" },
  { label: "Wallpapers",            href: "/services/wallpapers"         },
  { label: "Menu Printing",         href: "/services/menu-printing"      },
  { label: "Banners & Hoarding",    href: "/services/banners-hoarding"   },
];

const QUICK_LINKS = [
  { label: "Home",     href: "/"         },
  { label: "Services", href: "/services" },
  { label: "Gallery",  href: "/gallery"  },
  { label: "About",    href: "/about"    },
  { label: "FAQ",      href: "/faq"      },
  { label: "Contact",  href: "/contact"  },
];

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/sjartsindia",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919888808193",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: "Google Maps",
    href: MAPS_URL,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
  },
];

function FadeUp({ children, delay = 0, x = 0, className }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 50, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FooterCol({ heading, links, delay, x = 0 }) {
  return (
    <FadeUp delay={delay} x={x}>
      <div className={styles.col}>
        <p className={styles.colHeading}>{heading}</p>
        <ul className={styles.colList}>
          {links.map(l => (
            <li key={l.label}>
              <Link href={l.href} className={styles.colLink}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}

function MobileAccordion({ heading, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordion}>
      <button className={styles.accordionTrigger} onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{heading}</span>
        <motion.span className={styles.accordionIcon}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div className={styles.accordionBody}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.accordionInner}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const ALL_SERVICES = [...SERVICES_COL, ...SERVICES_COL2];
  const seen = new Set();
  const MOBILE_SERVICES = ALL_SERVICES.filter(s => {
    if (seen.has(s.href)) return false;
    seen.add(s.href);
    return true;
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.topLine} />

      {/* ══ DESKTOP ══ */}
      <div className={styles.main}>
        <FadeUp delay={0} x={-60} className={styles.brandCol}>
          <div>
            <div className={styles.logoWrap}>
              <Image src="/logo.png" alt="SJ Arts" width={220} height={220} className={styles.logoImg} />
            </div>
            <p className={styles.brandTagline}>
              Ludhiana's most trusted printing &amp; signage studio.
              Since 2009 — every surface, a statement.
            </p>
            <div className={styles.contactPills}>
              <a href="tel:+919888808193" className={styles.pill}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.2 2h3a2 2 0 012 1.72c.13 1 .37 1.97.7 2.91a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.17-.57a2 2 0 012.11.45c.94.33 1.91.57 2.91.7A2 2 0 0122 16.92z" strokeLinecap="round"/>
                </svg>
                +91 98888-08193
              </a>
              <a href="mailto:sjarts7@gmail.com" className={styles.pill}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7" strokeLinecap="round"/>
                </svg>
                sjarts7@gmail.com
              </a>
            </div>
            <div className={styles.socials}>
              {SOCIALS.map(s => (
                <motion.a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={styles.socialBtn} aria-label={s.name}
                  whileHover={{ y: -3, scale: 1.1 }} transition={{ duration: 0.2 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </FadeUp>

        <FooterCol heading="Services"      links={SERVICES_COL}  delay={0.08} />
        <FooterCol heading="More Services" links={SERVICES_COL2} delay={0.14} />

        <FadeUp delay={0.20} x={60}>
          <div className={styles.col}>
            <p className={styles.colHeading}>Quick Links</p>
            <ul className={styles.colList}>
              {QUICK_LINKS.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className={styles.addressBlock}>
              <p className={styles.colHeading} style={{ marginTop: 32 }}>Visit Us</p>
              <p className={styles.addressText}>
                Jai Mata Street,<br />
                Opposite Manvata Dham,<br />
                Haibowal Kalan,<br />
                Ludhiana, Punjab 141001
              </p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
                Open in Maps →
              </a>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* ══ MOBILE ══ */}
      <div className={styles.mobileLayout}>
        <div className={styles.mobileBrand}>
          <div className={styles.mobileBrandRow}>
            <Image src="/logo.png" alt="SJ Arts" width={110} height={110} className={styles.mobileLogoImg} />
            <div>
              <p className={styles.mobileBrandName}>SJ Arts Printers</p>
              <p className={styles.mobileBrandSub}>Since 2009 · Ludhiana</p>
              <div className={styles.mobileSocials}>
                {SOCIALS.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={styles.mobileSocialBtn} aria-label={s.name}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.mobilePills}>
            <a href="tel:+919888808193" className={styles.mobilePill}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.2 2h3a2 2 0 012 1.72c.13 1 .37 1.97.7 2.91a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.17-.57a2 2 0 012.11.45c.94.33 1.91.57 2.91.7A2 2 0 0122 16.92z" strokeLinecap="round"/>
              </svg>
              +91 98888-08193
            </a>
            <a href="mailto:sjarts7@gmail.com" className={styles.mobilePill}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7" strokeLinecap="round"/>
              </svg>
              sjarts7@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.accordions}>
          <MobileAccordion heading="Services">
            <ul className={styles.accordionList}>
              {MOBILE_SERVICES.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.accordionLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </MobileAccordion>
          <MobileAccordion heading="Quick Links">
            <ul className={styles.accordionList}>
              {QUICK_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.accordionLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </MobileAccordion>
          <MobileAccordion heading="Visit Us">
            <p className={styles.mobileAddress}>
              Jai Mata Street, Opposite Manvata Dham,<br />
              Haibowal Kalan, Ludhiana, Punjab 141001
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
              Open in Maps →
            </a>
          </MobileAccordion>
        </div>
      </div>

      {/* ══ BIG TEXT ══ */}
      <div className={styles.bigTextWrap} aria-hidden="true">
        <motion.div className={styles.bigText}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          SJ ARTS
        </motion.div>
      </div>

      {/* ══ BOTTOM BAR ══ */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© {year} SJ Arts Printers. All rights reserved.</p>
        <p className={styles.credit}>
          Crafted by{" "}
          <a href="https://creatormonk.in" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>
            CreatorMonk
          </a>
        </p>
      </div>
    </footer>
  );
}