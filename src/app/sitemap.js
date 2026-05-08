import { SITE_URL } from "@/lib/seo";
import { services } from "@/data/services";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: `${SITE_URL}/`,          lastModified: now, priority: 1.0,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/about`,     lastModified: now, priority: 0.8,  changeFrequency: "yearly"  },
    { url: `${SITE_URL}/services`,  lastModified: now, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${SITE_URL}/gallery`,   lastModified: now, priority: 0.8,  changeFrequency: "weekly"  },
    { url: `${SITE_URL}/contact`,   lastModified: now, priority: 0.7,  changeFrequency: "yearly"  },
    { url: `${SITE_URL}/faq`,       lastModified: now, priority: 0.6,  changeFrequency: "yearly"  },
  ];

  const serviceRoutes = services.map((s) => ({
    url:             `${SITE_URL}/services/${s.slug}`,
    lastModified:    now,
    priority:        0.85,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...serviceRoutes];
}