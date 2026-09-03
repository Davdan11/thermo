import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { getPublishedBrandsSummary } from "@/lib/data/queries/brand-detail";
import fs from "fs";
import path from "path";
import { BrandDirectoryClient, type BrandSummaryWithLogo } from "@/components/brand/BrandDirectoryClient";

/* ------------------------------------------------------------------
   Metadata
   ------------------------------------------------------------------ */

export const metadata: Metadata = createMetadata({
  title: "Marques de thermopompes | Thermopompe A Vendre.ca",
  description:
    "Explorez les marques et les modèles de thermopompes présents dans notre catalogue. Comparez leurs capacités, performances et garanties.",
  alternates: { canonical: "/marques" },
});

/* ------------------------------------------------------------------
   Page
   ------------------------------------------------------------------ */

export default function MarquesPage() {
  const brands = getPublishedBrandsSummary();
  const logosDir = path.join(process.cwd(), "public/images/marques");

  const brandsWithLogo: BrandSummaryWithLogo[] = brands.map((summary) => ({
    ...summary,
    hasLogo: fs.existsSync(path.join(logosDir, `logo-${summary.brand.slug}-bleu-nuit.png`))
  }));

  return <BrandDirectoryClient brands={brandsWithLogo} />;
}

