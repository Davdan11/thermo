import type { Metadata } from "next";
import { ThermoMatchLoader } from "./_components/ThermoMatchLoader";

export const metadata: Metadata = {
  title: "Trouver ma thermopompe — ThermoMatch",
  description:
    "Répondez à quelques questions pour trouver la thermopompe idéale pour votre propriété au Québec. Recommandation personnalisée selon votre habitation.",
  alternates: { canonical: "/trouver-ma-thermopompe" },
  robots: { index: true, follow: true },
};

export default function TrouverMaThermopompePage() {
  return (
    <main>
      <ThermoMatchLoader />
    </main>
  );
}
