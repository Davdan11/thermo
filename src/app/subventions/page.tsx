import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { SubventionsClient } from "./SubventionsClient";
import { getLogisVertHeroSamples } from "@/components/tools-hero/logisvert-samples";

export const metadata: Metadata = createMetadata({
  title: `Subventions pour thermopompe au Québec`,
  description:
    `Vérifiez l'admissibilité de votre projet aux programmes gouvernementaux. Calculez l'aide financière potentielle pour votre thermopompe.`,
  canonicalPath: "/subventions",
  robots: { index: true, follow: true },
});

export default function SubventionsPage() {
  // Extraits réels de la liste officielle LogisVert pour le relevé du héros.
  return <SubventionsClient heroSamples={getLogisVertHeroSamples()} />;
}
