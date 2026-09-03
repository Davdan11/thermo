/**
 * SEO Utilities
 *
 * Metadata generation helpers, structured data (JSON-LD), sitemap helpers, etc.
 */

import type { Metadata } from "next";

/* ------------------------------------------------------------------
   Constants
   ------------------------------------------------------------------ */

export const SITE_NAME = "Thermopompe A Vendre.ca";
export const SITE_URL = "https://thermopompeavendre.ca";
const SITE_DESCRIPTION =
  "Comparez les thermopompes, comprenez les prix et les subventions, et trouvez la machine adaptée à votre propriété au Québec.";
const DEFAULT_OG_IMAGE = "/images/og-default.png";

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
export function createMetadata(overrides: MetadataOverrides = {}): Metadata {
  const { canonicalPath, ...rest } = overrides;

  const title = rest.title ?? SITE_NAME;
  const description = rest.description ?? SITE_DESCRIPTION;

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
    title,
    description,
    ...rest,
    alternates: {
      ...rest.alternates,
      ...(canonical ? { canonical } : {}),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "fr_CA",
      url: canonical ?? SITE_URL,
      title: ogTitle,
      description: ogDesc,
      images: rest.openGraph?.images ?? [
        { url: `${SITE_URL}${DEFAULT_OG_IMAGE}`, width: 1200, height: 630, alt: SITE_NAME },
      ],
      ...rest.openGraph,
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
    logo: `${SITE_URL}/images/headerlogo.png`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
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
