"use client";

import { InstallerDashboard } from "@/components/heroes-v2/entreprise/InstallerDashboard";

/* Espace installateur : le portail n’est pas encore ouvert. Toute la page
   tient dans le héros « Tableau de bord » (src/components/heroes-v2/entreprise/InstallerDashboard.tsx) :
   titre, état du portail, lien vers la candidature et parcours ThermoMatch. */
export default function EspaceInstallateurPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)" }}>
      <InstallerDashboard />
    </main>
  );
}
