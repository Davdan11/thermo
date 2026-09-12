"use client";

import { InstallerHero } from "@/components/company-hero/InstallerHero";

/* Espace installateur : le portail n’est pas encore ouvert. Toute la page
   tient dans le héros premium (src/components/company-hero/InstallerHero.tsx) :
   titre, état du portail, lien vers la candidature et parcours ThermoMatch. */
export default function EspaceInstallateurPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)" }}>
      <InstallerHero />
    </main>
  );
}
