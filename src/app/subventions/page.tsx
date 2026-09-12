import type { Metadata } from "next";
import { SubventionsClient } from "./SubventionsClient";
import { getLogisVertHeroSamples } from "@/components/tools-hero/logisvert-samples";

export const metadata: Metadata = {
  title: "Subventions",
  description:
    "Vérifiez l'admissibilité de votre projet aux programmes gouvernementaux. Calculez l'aide financière potentielle pour votre thermopompe.",
  alternates: { canonical: "/subventions" },
};

export default function SubventionsPage() {
  // Extraits réels de la liste officielle LogisVert pour le relevé du héros.
  return <SubventionsClient heroSamples={getLogisVertHeroSamples()} />;
}
