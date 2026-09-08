import type { Metadata } from "next";
import { ThermoMatchTechClient } from "./ThermoMatchTechClient";
import { getEligibleModelCount, roundDownHundreds } from "@/lib/data/queries/stats";

export const metadata: Metadata = {
  title: "Technologie ThermoMatch — Recommandations personnalisées",
  description:
    "Découvrez comment ThermoMatch analyse votre propriété, votre climat et vos priorités pour vous recommander les thermopompes les mieux adaptées au Québec.",
  alternates: {
    canonical: "/technologie-thermomatch",
  },
};

export default function TechThermoMatchPage() {
  const modelCount = roundDownHundreds(getEligibleModelCount());
  return (
    <main>
      <ThermoMatchTechClient modelCount={modelCount} />
    </main>
  );
}

