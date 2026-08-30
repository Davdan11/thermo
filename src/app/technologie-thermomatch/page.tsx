import type { Metadata } from "next";
import { ThermoMatchTechClient } from "./ThermoMatchTechClient";

export const metadata: Metadata = {
  title: "Technologie ThermoMatch — Recommandations personnalisées | ThermopompesÀVendre.ca",
  description:
    "Découvrez comment ThermoMatch analyse votre propriété, votre climat et vos priorités pour vous recommander les thermopompes les mieux adaptées au Québec.",
  alternates: {
    canonical: "/technologie-thermomatch",
  },
};

export default function TechThermoMatchPage() {
  return (
    <main>
      <ThermoMatchTechClient />
    </main>
  );
}
