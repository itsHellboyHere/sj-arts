import ContactHero from "./ContactHero";
import ContactPanel from "./ContactPanel";
import styles from "./contact.module.css";

export default function ContactClient() {
  return (
    <main className={styles.page}>
      <ContactHero />
      <ContactPanel />
    </main>
  );
}