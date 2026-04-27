import { buildMetadata, SITE_URL } from "@/lib/seo";
import styles        from "./gallery.module.css";
import GalleryBanner from "./GalleryBanner";
import GalleryMasonry from "./GalleryMasonry";

export const metadata = buildMetadata({
  title:       "Gallery",
  description:
    "View SJ Arts' portfolio — 500+ real client projects across signage, branding, LED displays, ACP cladding, neon signs, acrylic letters and more across Punjab and North India.",
  path:        "/gallery",
  keywords: [
    "signage portfolio ludhiana",
    "printing work punjab",
    "sign board examples ludhiana",
    "acrylic letter photos",
    "neon sign portfolio",
    "SJ Arts gallery",
  ],
});

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <GalleryBanner />
      <GalleryMasonry />
    </main>
  );
}