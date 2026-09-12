import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ThermoMatchTechClient } from "./ThermoMatchTechClient";
import { getEligibleModelCount, roundDownHundreds } from "@/lib/data/queries/stats";

export const metadata: Metadata = createMetadata({
  title: `ThermoMatch : des recommandations personnalisées`,
  description:
    `Découvrez comment ThermoMatch analyse votre propriété, votre climat et vos priorités pour vous recommander les thermopompes les mieux adaptées au Québec.`,
  canonicalPath: "/technologie-thermomatch",
  robots: { index: true, follow: true },
});

export default function TechThermoMatchPage() {
  const modelCount = roundDownHundreds(getEligibleModelCount());
  return (
    <main>
      <ThermoMatchTechClient modelCount={modelCount} />
    </main>
  );
}

