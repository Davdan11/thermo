import type { MetadataRoute } from "next";
import { registry } from "@/lib/data/registry";

const BASE = "https://thermopompeavendre.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  /* ── Static pages ── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/thermopompes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/comparer`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/marques`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/prix`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/subventions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/glossaire`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/thermoscan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/technologie-thermomatch`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/comment-ca-marche`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/soumission`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/trouver-ma-thermopompe`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  /* ── Product pages ── */
  const publishedModels = registry.models.filter(
    (m) => m.status === "published" && m.isActive2026
  );
  const productPages: MetadataRoute.Sitemap = publishedModels.map((m) => ({
    url: `${BASE}/produit/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ── Brand pages ── */
  const activeBrands = registry.brands.filter((b) => b.activeInQuebec);
  const brandPages: MetadataRoute.Sitemap = activeBrands.map((b) => ({
    url: `${BASE}/marques/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  /* ── SEO category pages (thermopompes/[slug]) ── */
  const seoSlugs = [
    "thermopompe-murale",
    "thermopompe-centrale",
    "thermopompe-multizone",
    "thermopompe-a-vendre",
    "installation-thermopompe",
    "remplacement-thermopompe",
    "thermopompe-climat-froid",
    "thermopompe-haute-efficacite",
    "soumission-thermopompe",
    "comparateur-thermopompe",
  ];
  const seoPages: MetadataRoute.Sitemap = seoSlugs.map((slug) => ({
    url: `${BASE}/thermopompes/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...seoPages, ...brandPages, ...productPages];
}
