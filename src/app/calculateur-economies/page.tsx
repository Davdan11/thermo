import type { Metadata } from "next";
import React from "react";
import { createMetadata } from "@/lib/seo";
import { SavingsCalculator } from "@/components/calculators/SavingsCalculator";
import { MeterHero } from "@/components/heroes-v2/prix/MeterHero";
import { Root } from "@/components/sections-v2/prix/kit";
import { CompteurExplain } from "@/components/sections-v2/prix/CompteurSections";

export const metadata: Metadata = createMetadata({
  title: `Calculateur d'économies de thermopompe`,
  description:
    `Calculez rapidement combien d'argent vous pouvez économiser chaque année sur votre facture d'électricité en installant une thermopompe.`,
  canonicalPath: "/calculateur-economies",
  robots: { index: true, follow: true },
});

export default function CalculateurEconomiesPage() {
  return (
    <main className="min-h-screen pb-24" style={{ background: "#FBFAF4" }}>
      {/* Héros « Le compteur » : compteur électrique animé (COP 1 contre 3 à 4), sans montant inventé */}
      <MeterHero calculatorId="calculateur" />

      {/* Sous le héros : panneaux blancs à ombre franche, roues chiffrées (src/components/sections-v2/prix/) */}
      <Root>
        {/* Calculator Section : à cheval sur le tournesol du héros */}
        <div style={{ background: "linear-gradient(#F4C542 0 120px, #FBFAF4 120px)" }}>
          <div id="calculateur" className="max-w-7xl mx-auto px-5 relative z-10 pt-2" style={{ scrollMarginTop: 110 }}>
            <SavingsCalculator />
          </div>
        </div>

        {/* SEO Content Section */}
        <CompteurExplain />
      </Root>
    </main>
  );
}
