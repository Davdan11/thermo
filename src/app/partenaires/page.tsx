import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PartnerForm } from "./PartnerForm";
import { PartnersDossier } from "@/components/heroes-v2/entreprise/PartnersDossier";
import { PartnersSections } from "@/components/sections-v2/entreprise/PartnersSections";

export const metadata: Metadata = createMetadata({
  title: `Devenir installateur partenaire au Québec`,
  description:
    `Rejoignez le réseau d'installateurs d'élite du Québec : des projets qualifiés par ThermoMatch (superficie, isolation, budget), une clientèle déjà renseignée.`,
  canonicalPath: "/partenaires",
  robots: { index: true, follow: true },
});

export default function PartenairesPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", colorScheme: "light", backgroundColor: "#1F3A5F" }}>
      {/* HÉROS « Dossier » : src/components/heroes-v2/entreprise/PartnersDossier.tsx */}
      <PartnersDossier />

      {/* Sections sous le héros, en dossier : src/components/sections-v2/entreprise/PartnersSections.tsx
          (pièce A : ThermoMatch ; pièce B : #candidature et le formulaire). */}
      <PartnersSections form={<PartnerForm />} />
    </main>
  );
}

