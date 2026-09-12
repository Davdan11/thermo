import type { Metadata } from "next";
import { PartnerForm } from "./PartnerForm";
import { PartnersDossier } from "@/components/heroes-v2/entreprise/PartnersDossier";
import { PartnersSections } from "@/components/sections-v2/entreprise/PartnersSections";

export const metadata: Metadata = {
  title: "Devenir Partenaire Installateur — Thermopompes À Vendre.ca",
  description: "Rejoignez le réseau d'installateurs d'élite du Québec. Accédez à une clientèle éduquée et des projets haut de gamme.",
  alternates: { canonical: "/partenaires" },
  robots: { index: true, follow: true },
};

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

