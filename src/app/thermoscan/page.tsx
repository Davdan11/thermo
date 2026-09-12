import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ViseurHero } from "@/components/heroes-v2/outils/ViseurHero";
import { ViseurSections } from "@/components/sections-v2/outils/viseur/ViseurSections";

/* ------------------------------------------------------------------
   /thermoscan — Lecture de l'étiquette d'une thermopompe existante.
   Le héros « Viseur » montre le geste (mise au point, balayage, champs
   lus) ; la suite de la page garde l'écran de l'appareil photo :
   l'outil (ThermoScanSection, client) dans son cadre, les trois gestes,
   où est l'étiquette, ce qu'on obtient, les garanties.
   ------------------------------------------------------------------ */

export const metadata: Metadata = createMetadata({
  title: "ThermoScan : identifiez votre thermopompe actuelle à partir de son étiquette",
  description:
    "Photographiez l'étiquette de votre thermopompe. ThermoScan lit la marque, le modèle et l'année, retrouve la fiche ENERGY STAR et compare l'appareil avec les modèles admissibles à LogisVert.",
  alternates: { canonical: "/thermoscan" },
  robots: { index: true, follow: true },
});

export default function ThermoScanPage() {
  return (
    <main className="min-h-screen" style={{ background: "#141414" }}>
      {/* ── Héros « Viseur » : mise au point sur la plaque, photo réelle ── */}
      <ViseurHero />
      {/* ── Suite du viseur : scanner, gestes, étiquette, fiche, garanties ── */}
      <ViseurSections />
    </main>
  );
}
