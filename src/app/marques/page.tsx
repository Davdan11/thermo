import type { Metadata } from "next";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { createMetadata } from "@/lib/seo";
import { getPublishedBrandsSummary } from "@/lib/data/queries/brand-detail";
import { BrandDirectoryClient, type BrandSummaryWithLogo } from "@/components/brand/BrandDirectoryClient";
import type { OrbitBrand } from "@/components/brand/hero/BrandDirectoryHero";
import { orbitLogo } from "@/components/brand/hero/brand-hero-data";

/* ------------------------------------------------------------------
   Metadata
   ------------------------------------------------------------------ */

export const metadata: Metadata = createMetadata({
  title: "Marques de thermopompes",
  description:
    "Explorez les marques et les modèles de thermopompes présents dans notre catalogue. Comparez leurs capacités, performances et garanties.",
  alternates: { canonical: "/marques" },
});

/* ------------------------------------------------------------------
   Page
   ------------------------------------------------------------------ */

export default function MarquesPage() {
  const brands = getPublishedBrandsSummary();

  const brandsWithLogo: BrandSummaryWithLogo[] = brands.map((summary) => ({
    ...summary,
    hasLogo: brandLogoPath(summary.brand.slug) !== null
  }));

  // Héros : les 20 marques les plus fournies qui ont un logo monochrome vérifié (orbites),
  // et les totaux réels de l'annuaire.
  const orbit: OrbitBrand[] = brands
    .flatMap((s) => {
      const logo = orbitLogo(s.brand.slug);
      return logo
        ? [{ slug: s.brand.slug, name: s.brand.name.replace(" [DEV]", ""), logo: logo.src, ratio: logo.ratio, models: s.modelCount, cold: s.coldClimateCount }]
        : [];
    })
    .sort((a, b) => b.models - a.models || a.name.localeCompare(b.name))
    .slice(0, 20);
  const totals = {
    brands: brands.length,
    models: brands.reduce((sum, s) => sum + s.modelCount, 0),
    cold: brands.reduce((sum, s) => sum + s.coldClimateCount, 0),
  };

  return <BrandDirectoryClient brands={brandsWithLogo} orbit={orbit} totals={totals} />;
}

