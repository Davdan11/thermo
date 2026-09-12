import type { Metadata } from "next";
import { HorsPlageHero } from "@/components/heroes-v2/outils/HorsPlageHero";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <HorsPlageHero />
    </main>
  );
}
