import type { Metadata } from "next";
import GuidesPageClient from "./GuidesPageClient";
import { getAllGuides } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Guides & Conseils — Thermopompes au Québec",
  description:
    "Guides pratiques pour choisir, comparer et installer votre thermopompe au Québec. BTU, SEER2, prix installé, subventions et marques expliqués clairement.",
  alternates: { canonical: "/guides" },
  robots: { index: true, follow: true },
};

export default function GuidesPage() {
  const guides = getAllGuides();
  return <GuidesPageClient initialGuides={guides} />;
}

