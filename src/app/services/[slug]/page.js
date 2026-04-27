import { services, getServiceBySlug } from "@/data/services";
import { buildMetadata, SITE_URL, DEFAULT_OG } from "@/lib/seo";
import ServiceSlugClient from "./ServiceSlugClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug }  = await params;
  const service   = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title:       service.title,
    description: `${service.tagline} ${service.description[0]}`,
    path:        `/services/${service.slug}`,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} ludhiana`,
      `${service.title.toLowerCase()} punjab`,
      `best ${service.title.toLowerCase()} near me`,
      "SJ Arts " + service.title,
    ],
    ogImage: service.assets?.[0]?.url
      ?? (service.assets?.[0]?.publicId
          ? `https://res.cloudinary.com/dxdofhauf/image/upload/q_auto,f_auto,w_1200/${service.assets[0].publicId}`
          : DEFAULT_OG),
  });
}

// ─── Breadcrumb JSON-LD ───────────────────────────────────────
function BreadcrumbSchema({ service }) {
  const schema = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: [
      {
        "@type":    "ListItem",
        position:   1,
        name:       "Home",
        item:       SITE_URL,
      },
      {
        "@type":    "ListItem",
        position:   2,
        name:       "Services",
        item:       `${SITE_URL}/services`,
      },
      {
        "@type":    "ListItem",
        position:   3,
        name:       service.title,
        item:       `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Service JSON-LD ──────────────────────────────────────────
function ServiceSchema({ service }) {
  const schema = {
    "@context":   "https://schema.org",
    "@type":      "Service",
    name:         service.title,
    description:  service.description[0],
    url:          `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id":   `${SITE_URL}/#business`,
      name:    "SJ Arts Printers",
    },
    areaServed: {
      "@type": "State",
      name:    "Punjab",
    },
    serviceType: service.title,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ServiceSlugPage({ params }) {
  const { slug }  = await params;
  const service   = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <BreadcrumbSchema service={service} />
      <ServiceSchema    service={service} />
      <ServiceSlugClient service={service} />
    </>
  );
}