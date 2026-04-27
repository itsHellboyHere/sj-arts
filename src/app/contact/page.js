import { buildMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

export const metadata = buildMetadata({
  title:       "Contact Us",
  description:
    "Get in touch with SJ Arts — Ludhiana's trusted printing & signage studio. WhatsApp, call, or visit us at Jawala Singh Chowk, Haibowal Kalan, Ludhiana, Punjab.",
  path:        "/contact",
  keywords: [
    "contact SJ Arts",
    "sign maker ludhiana contact",
    "printing shop ludhiana phone",
    "SJ Arts whatsapp",
    "signage quote ludhiana",
  ],
});

export default function ContactPage() {
  return <ContactClient />;
}