import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { CareerBoard, type Poste } from "@/components/heroes-v2/entreprise/CareerBoard";
import { CareerSections } from "@/components/sections-v2/entreprise/CareerSections";

export const metadata: Metadata = createMetadata({
  title: `Carrières chez Thermopompes À Vendre.ca`,
  description:
    `Rejoignez notre équipe pour simplifier l'achat et l'installation de thermopompes au Québec, avec nos technologies ThermoMatch et ThermoScan.`,
  canonicalPath: "/carriere",
  robots: { index: true, follow: true },
});

// Postes ouverts : une seule liste pour le héros et la section « Postes actuellement ouverts ».
const POSTES: Poste[] = [
  { title: "Développeur(se) Full-Stack (ThermoMatch)", type: "Temps plein", loc: "Montréal / Hybride" },
  { title: "Spécialiste Expérience Client (HVAC)", type: "Temps plein", loc: "Télétravail (Québec)" },
  { title: "Gestionnaire Réseau Partenaires", type: "Temps plein", loc: "Montréal / Hybride" },
];

export default function CarrierePage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light" }}>
      {/* HÉROS « Plein orange » : src/components/heroes-v2/entreprise/CareerBoard.tsx */}
      <CareerBoard postes={POSTES} />

      {/* Sections sous le héros, en gare : src/components/sections-v2/entreprise/CareerSections.tsx */}
      <CareerSections postes={POSTES} />
    </main>
  );
}
