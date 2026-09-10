/**
 * SEO Utilities
 *
 * Metadata generation helpers, structured data (JSON-LD), sitemap helpers, etc.
 */

import type { Metadata } from "next";

/* ------------------------------------------------------------------
   Constants
   ------------------------------------------------------------------ */

export const SITE_NAME = "Thermopompes À Vendre.ca";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermopompesavendre.ca").replace(/\/$/, "");
const SITE_DESCRIPTION =
  "Comparez les thermopompes, comprenez les prix et les subventions, et trouvez la machine adaptée à votre propriété au Québec.";

/* ------------------------------------------------------------------
   createMetadata — unified metadata generator
   ------------------------------------------------------------------ */

interface MetadataOverrides extends Metadata {
  /** Will be converted to an absolute canonical URL */
  canonicalPath?: string;
}

/**
 * Generate page metadata with consistent defaults.
 * Handles title, description, canonical, robots, Open Graph, and Twitter.
 */
/** Google tronque vers 155–160 caractères : on coupe proprement sur un mot plutôt que de laisser une phrase hachée. */
export function clampDescription(text: string, max = 158): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const at = cut.lastIndexOf(" ");
  return `${cut.slice(0, at > 80 ? at : max - 1).replace(/[,;:\s]+$/, "")}…`;
}

export function createMetadata(overrides: MetadataOverrides = {}): Metadata {
  const { canonicalPath, ...rest } = overrides;

  const title = rest.title ?? SITE_NAME;
  const description = clampDescription(rest.description ?? SITE_DESCRIPTION);

  // Build canonical from path or alternates
  let canonical: string | undefined;
  if (canonicalPath) {
    canonical = `${SITE_URL}${canonicalPath}`;
  } else if (
    rest.alternates?.canonical &&
    typeof rest.alternates.canonical === "string"
  ) {
    // If a relative canonical was passed, make it absolute
    canonical = rest.alternates.canonical.startsWith("http")
      ? rest.alternates.canonical
      : `${SITE_URL}${rest.alternates.canonical}`;
  }

  // Build OG defaults
  const ogTitle =
    typeof rest.openGraph?.title === "string"
      ? rest.openGraph.title
      : typeof title === "string"
        ? title
        : SITE_NAME;
  const ogDesc =
    rest.openGraph?.description ??
    (typeof description === "string" ? description : SITE_DESCRIPTION);

  return {
    ...rest,
    title,
    description,
    alternates: {
      ...rest.alternates,
      ...(canonical ? { canonical } : {}),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "fr_CA",
      ...rest.openGraph,
      url: rest.openGraph?.url ?? canonical ?? SITE_URL,
      title: ogTitle,
      description: ogDesc,
      // Pas d'image par défaut ici : l'image OG racine (src/app/opengraph-image.tsx) s'applique automatiquement.
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDesc,
      ...rest.twitter,
    },
  };
}

/* ------------------------------------------------------------------
   JSON-LD Helpers
   ------------------------------------------------------------------ */

/** Organization schema for the site */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/headerlogo-720.webp`,
    areaServed: { "@type": "State", name: "Québec", address: { "@type": "PostalAddress", addressRegion: "QC", addressCountry: "CA" } },
    // À compléter avec les URL réelles des profils sociaux quand ils existeront.
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+1-438-900-3224",
      areaServed: "CA-QC",
      availableLanguage: "French",
    },
  };
}

/** WebSite schema with search action */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr-CA",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/thermopompes?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** BreadcrumbList schema */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/** Product schema for product detail pages */
export function getProductSchema(data: {
  name: string;
  brand: string;
  model: string;
  description: string;
  imageUrl?: string | null;
  slug: string;
  category: string;
  additionalProperties?: { name: string; value: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    brand: { "@type": "Brand", name: data.brand },
    model: data.model,
    category: data.category,
    description: data.description,
    url: `${SITE_URL}/produit/${data.slug}`,
    ...(data.imageUrl ? { image: data.imageUrl } : {}),
    ...(data.additionalProperties?.length
      ? {
          additionalProperty: data.additionalProperties.map((p) => ({
            "@type": "PropertyValue",
            name: p.name,
            value: p.value,
          })),
        }
      : {}),
  };
}

/** FAQPage schema */
export function getFaqPageSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Service schema */
export function getServiceSchema(data: {
  name: string;
  description: string;
  serviceType: string;
  areaServed: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    serviceType: data.serviceType,
    areaServed: {
      "@type": "City",
      name: data.areaServed,
    },
    url: data.url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    }
  };
}

/** Article schema */
export function getArticleSchema(data: {
  headline: string;
  image?: string;
  datePublished: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    image: data.image ? [data.image] : [],
    datePublished: data.datePublished,
    author: {
      "@type": "Organization",
      name: data.authorName
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/headerlogo-720.webp`
      }
    }
  };
}

/** ItemList schema (listes de modèles, palmarès, villes) */
export function getItemListSchema(data: { name: string; items: { name: string; url: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data.name,
    numberOfItems: data.items.length,
    itemListElement: data.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

/** CollectionPage schema (page hub) */
export function getCollectionPageSchema(data: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.name,
    description: data.description,
    url: data.url.startsWith("http") ? data.url : `${SITE_URL}${data.url}`,
    inLanguage: "fr-CA",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}
