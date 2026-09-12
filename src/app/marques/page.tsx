import type { Metadata } from "next";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { createMetadata } from "@/lib/seo";
import { getPublishedBrandsSummary } from "@/lib/data/queries/brand-detail";
import { BrandDirectoryClient, type BrandSummaryWithLogo } from "@/components/brand/BrandDirectoryClient";
import { buildPlacards } from "@/components/heroes-v2/marques/server";

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

  // Héros « Galerie » : les marques les plus fournies qui ont un logo officiel vérifié (cadres au mur),
  // et les totaux réels de l'annuaire.
  const placards = buildPlacards(brands, 7);
  const totals = {
    brands: brands.length,
    models: brands.reduce((sum, s) => sum + s.modelCount, 0),
    cold: brands.reduce((sum, s) => sum + s.coldClimateCount, 0),
  };

  return <BrandDirectoryClient brands={brandsWithLogo} placards={placards} totals={totals} />;
}
