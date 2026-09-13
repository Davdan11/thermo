/* ==================================================================
   /dev/avis-google?v=accueil|a-propos — aperçu de développement des
   avis Google avec des données FICTIVES, entre les vraies sections
   voisines de chaque page. Répond 404 dès que NODE_ENV n'est pas
   « development » : `next build` / `next start` fixent toujours
   NODE_ENV=production, l'aperçu est donc impossible en ligne.
   ================================================================== */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidesEditorial } from "@/components/home/premium/GuidesEditorial";
import { ProcessRail } from "@/components/home/premium/JourneyFinale";
import { AboutSections } from "@/components/sections-v2/entreprise/AboutSections";
import { ReviewsAccueil } from "@/components/avis/ReviewsAccueil";
import { ReviewsLivret } from "@/components/avis/ReviewsLivret";

export const metadata: Metadata = {
  title: "Aperçu des avis (développement)",
  robots: { index: false, follow: false },
};

export default async function AvisGoogleApercu({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  if (process.env.NODE_ENV !== "development") notFound();
  const { v } = await searchParams;
  const { REVIEW_FIXTURES } = await import("@/components/avis/fixtures");
  if (v === "a-propos") {
    return (
      <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light" }}>
        <AboutSections avis={<ReviewsLivret data={REVIEW_FIXTURES} />} />
      </main>
    );
  }
  return (
    <main style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)", color: "#172126", backgroundColor: "#fff" }}>
      <GuidesEditorial />
      <ReviewsAccueil data={REVIEW_FIXTURES} />
      <ProcessRail />
    </main>
  );
}
