import { buildMetadata, SITE_URL } from "@/lib/seo";
import ServicesPage from "./ServicesClient";

export const metadata = buildMetadata({
  title:       "Our Services",
  description:
    "Explore all 15 printing & signage services by SJ Arts — acrylic letters, neon signs, glow boards, ACP cladding, LED displays, banners, mug printing and more. Serving Ludhiana, Punjab and North India since 2009.",
  path:        "/services",
  keywords: [
    "all printing services ludhiana",
    "signage services punjab",
    "acrylic letter maker ludhiana",
    "neon sign board ludhiana",
    "LED display Punjab",
    "banner printing ludhiana",
  ],
});

export default function Page() {
  return <ServicesPage />;
}