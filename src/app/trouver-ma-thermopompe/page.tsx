import type { Metadata } from "next";
import { ThermoMatchLoader } from "./_components/ThermoMatchLoader";
import { getEligibleModelCount } from "@/lib/data/queries/stats";
import { displayFont, serifFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Trouver ma thermopompe — ThermoMatch",
  description:
    "Répondez à quelques questions pour trouver la thermopompe idéale pour votre propriété au Québec. Recommandation personnalisée selon votre habitation.",
  alternates: { canonical: "/trouver-ma-thermopompe" },
  robots: { index: true, follow: true },
};

export default function TrouverMaThermopompePage() {
  const catalogueCount = getEligibleModelCount();
  return (
    <main className={`${displayFont.variable} ${serifFont.variable}`}>
      <div className="sr-only">
        <h1>Trouver ma thermopompe avec ThermoMatch</h1>
        <p>
          Répondez à 13 questions sur votre maison (superficie, année de construction, isolation, système actuel, budget). ThermoMatch calcule
          votre charge de chauffage et compare toutes les marques vendues au Québec avec les données certifiées d'Hydro-Québec pour proposer
          trois machines réellement adaptées, avec leur subvention LogisVert.
        </p>
      </div>
      <ThermoMatchLoader catalogueCount={catalogueCount} />
    </main>
  );
}
