import type { Metadata } from "next";
import { NotFoundHero } from "@/components/tools-hero/NotFoundHero";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <NotFoundHero />
    </main>
  );
}
