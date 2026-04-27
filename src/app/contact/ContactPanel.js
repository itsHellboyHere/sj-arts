"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./ContactPanel.module.css";

// ─── Constants ────────────────────────────────────────────────
const WHATSAPP_NUMBER = "919888808193";
const ADDRESS_LINE1   = "Jai Mata Street, Opposite Manvata Dham";
const ADDRESS_LINE2   = "Haibowal Kalan, Ludhiana, Punjab 141001";
const PHONE           = "+91 98888-08193";
const EMAIL           = "sjarts7@gmail.com";
const MAPS_URL        = "https://maps.google.com/?q=Jai+Mata+Street+Opposite+Manvata+Dham+Haibowal+Kalan+Ludhiana+Punjab";

// ─── Scroll-triggered reveal ──────────────────────────────────
function FadeUp({ children, delay = 0, x = 0, className }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Social links ─────────────────────────────────────────────
const SOCIALS = [
  {
    name:    "Instagram",
    href:    "https://instagram.com/sjartsindia",
    handle:  "@sjartsindia",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)",
  },
  {
    name:    "WhatsApp",
    href:    `https://wa.me/${WHATSAPP_NUMBER}`,
    handle:  "+91 98888-08193",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #25D366, #128C7E)",
  },
  {
    name:    "Google Maps",
    href:    MAPS_URL,
    handle:  "Find us on Maps",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #4285F4, #34A853)",
  },
  {
    name:    "Email",
    href:    `mailto:${EMAIL}`,
    handle:  EMAIL,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" strokeLinecap="round" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #B8860B, #D4A017)",
  },
];

// ─── Form field ───────────────────────────────────────────────
function Field({ label, name, type = "text", placeholder, value, onChange, as, rows, required }) {
  const Tag = as ?? "input";
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel} htmlFor={name}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <Tag
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className={styles.fieldInput}
        autoComplete="off"
      />
    </div>
  );
}

// ─── Contact form ─────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    const text = encodeURIComponent(
      `Hi SJ Arts! 👋\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      (form.service ? `*Service needed:* ${form.service}\n` : "") +
      (form.message ? `*Message:* ${form.message}\n` : "") +
      `\nSent from sjarts.in`
    );
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    }, 600);
  };

  return (
    <div className={styles.formWrap}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className={styles.successState}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{    opacity: 0, scale: 0.92       }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className={styles.successIcon}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <h3 className={styles.successTitle}>Opening WhatsApp…</h3>
            <p className={styles.successSub}>Your message is pre-filled and ready to send.</p>
            <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className={styles.formGrid}>
              <Field label="Your Name" name="name"  placeholder="e.g. Rahul Sharma" value={form.name}  onChange={update} required />
              <Field label="Phone"     name="phone" placeholder="+91 98765 43210"   value={form.phone} onChange={update} type="tel" required />
            </div>

            <div className={styles.serviceSelect}>
              <label className={styles.fieldLabel} htmlFor="service">
                Service needed <span className={styles.optional}>(optional)</span>
              </label>
              <select id="service" name="service" value={form.service} onChange={update} className={styles.fieldInput}>
                <option value="">Select a service…</option>
                <option>Acrylic Letters</option>
                <option>Acrylic Lollipop</option>
                <option>ACP Boards</option>
                <option>Glow Sign Boards</option>
                <option>Fabric LED Boards</option>
                <option>Neon Sign Boards</option>
                <option>Clip On Boards</option>
                <option>Video LED</option>
                <option>Running LED Boards</option>
                <option>Pen Printing</option>
                <option>Mug Printing</option>
                <option>PVC / WPC / UV Sheets</option>
                <option>Wallpapers</option>
                <option>Menu Printing</option>
                <option>Banners &amp; Hoarding</option>
                <option>Other / Not sure</option>
              </select>
            </div>

            <Field label="Message" name="message" as="textarea" rows={4}
              placeholder="Tell us about your requirement — size, quantity, deadline…"
              value={form.message} onChange={update} />

            <button className={styles.submitBtn} onClick={handleSubmit} disabled={!form.name || !form.phone}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </button>

            <p className={styles.formNote}>
              Clicking above opens WhatsApp with your message pre-filled.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPanel() {
  return (
    <section className={styles.panel}>

      <div className={styles.pullHandle}>
        <div className={styles.pullBar} />
      </div>

      <div className={styles.layout}>

        {/* ── LEFT ────────────────────────────────────── */}
        <div className={styles.infoCol}>

          <FadeUp x={-80} delay={0}>
            <div className={styles.infoBlock}>
              <p className={styles.infoEyebrow}>Get in touch</p>
              <h2 className={styles.infoTitle}>We're here<br />to help.</h2>
              <p className={styles.infoBody}>
                Whether you have a detailed brief or just an idea on a napkin — reach out.
                Our team in Ludhiana handles everything from single mugs to full building facades.
              </p>
            </div>
          </FadeUp>

          {/* Address */}
          <FadeUp x={-80} delay={0.1}>
            <div className={styles.addressCard}>
              <div className={styles.addressIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <p className={styles.addressLine}>{ADDRESS_LINE1}</p>
                <p className={styles.addressLine}>{ADDRESS_LINE2}</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
                  Open in Maps →
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Direct contacts */}
          <FadeUp x={-80} delay={0.15}>
            <div className={styles.directContacts}>
              <a href={`tel:${PHONE}`} className={styles.directLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.2 2h3a2 2 0 012 1.72c.13 1 .37 1.97.7 2.91a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.17-.57a2 2 0 012.11.45c.94.33 1.91.57 2.91.7A2 2 0 0122 16.92z" strokeLinecap="round" />
                </svg>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className={styles.directLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" strokeLinecap="round" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </FadeUp>

          {/* Socials */}
          <FadeUp x={-80} delay={0.2}>
            <div className={styles.socialsBlock}>
              <p className={styles.socialsLabel}>Find us on</p>
              <div className={styles.socialsList}>
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                    initial={{ opacity: 0, x: -40, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                    transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <span className={styles.socialIconWrap} style={{ background: s.gradient }}>
                      {s.icon}
                    </span>
                    <span className={styles.socialInfo}>
                      <span className={styles.socialName}>{s.name}</span>
                      <span className={styles.socialHandle}>{s.handle}</span>
                    </span>
                    <svg className={styles.socialArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>

        {/* ── RIGHT — form ────────────────────────────── */}
        <FadeUp x={80} delay={0.05} className={styles.formCol}>
          <div className={styles.formCard}>
            <div className={styles.formCardHeader}>
              <p className={styles.formCardEyebrow}>Quick enquiry</p>
              <h3 className={styles.formCardTitle}>Send us a message</h3>
              <p className={styles.formCardSub}>Takes 30 seconds. Goes straight to WhatsApp.</p>
            </div>
            <ContactForm />
          </div>
        </FadeUp>

      </div>

      {/* ── Hours ───────────────────────────────────── */}
      <FadeUp className={styles.hoursStrip}>
        <div className={styles.hoursInner}>
          <div className={styles.hoursBadge}>
            <span className={styles.hoursLiveDot} />
            Open Now
          </div>
          <div className={styles.hoursGrid}>
            <div className={styles.hoursItem}>
              <span className={styles.hoursDay}>Mon – Sat</span>
              <span className={styles.hoursTime}>9:00 AM – 8:00 PM</span>
            </div>
            <div className={styles.hoursDivider} />
            <div className={styles.hoursItem}>
              <span className={styles.hoursDay}>Sunday</span>
              <span className={styles.hoursTime}>10:00 AM – 5:00 PM</span>
            </div>
            <div className={styles.hoursDivider} />
            <div className={styles.hoursItem}>
              <span className={styles.hoursDay}>Response time</span>
              <span className={styles.hoursTime}>Within 2 hours</span>
            </div>
          </div>
        </div>
      </FadeUp>

    </section>
  );
}