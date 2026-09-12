import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import SoumissionPageClient from "./SoumissionClient";

export const metadata: Metadata = createMetadata({
  title: `Demander une soumission de thermopompe`,
  description:
    `Obtenez une soumission gratuite pour l'installation d'une thermopompe au Québec. Remplissez le formulaire et recevez des offres d'installateurs certifiés.`,
  canonicalPath: "/soumission",
  robots: { index: true, follow: true },
});

export default function SoumissionPage() {
  return <SoumissionPageClient />;
}
