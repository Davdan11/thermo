import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { AboutManifesto } from "@/components/heroes-v2/entreprise/AboutManifesto";
import { AboutSections } from "@/components/sections-v2/entreprise/AboutSections";
import { GoogleReviews } from "@/components/avis/GoogleReviews";
import { getPublishedBrandsSummary } from "@/lib/data/queries/brand-detail";
import { getEligibleModelCount } from "@/lib/data/queries/stats";

export const metadata: Metadata = createMetadata({
  title: `À propos de Thermopompes À Vendre.ca`,
  description:
    `Nous construisons une meilleure façon de découvrir, comparer et acheter les thermopompes au Québec, en traduisant les fiches techniques en repères utiles.`,
  canonicalPath: "/a-propos",
  robots: { index: true, follow: true },
});


export default function AProposPage() {
  // Chiffres vivants du catalogue (mêmes calculs que l’accueil).
  const brandsSummary = getPublishedBrandsSummary();
  const heroStats = {
    eligible: getEligibleModelCount(),
    brands: brandsSummary.length,
    coldClimate: brandsSummary.reduce((sum, b) => sum + b.coldClimateCount, 0),
  };
  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light" }}>

      {/* HÉROS « Manifeste » : src/components/heroes-v2/entreprise/AboutManifesto.tsx */}
      <AboutManifesto stats={heroStats} />

      {/* Sections sous le héros, en livret : src/components/sections-v2/entreprise/AboutSections.tsx.
          Chapitre IV : les vrais avis Google (rien si non configurés ou sans avis). */}
      <AboutSections avis={<GoogleReviews variant="a-propos" />} />
    </main>
  );
}
