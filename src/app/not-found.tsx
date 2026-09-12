import type { Metadata } from "next";
import { HorsPlageHero } from "@/components/heroes-v2/outils/HorsPlageHero";
import { HorsPlagePresets } from "@/components/sections-v2/outils/horsplage/Presets";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <HorsPlageHero />
      <HorsPlagePresets />
    </main>
  );
}
