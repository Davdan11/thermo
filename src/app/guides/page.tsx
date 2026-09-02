import type { Metadata } from "next";
import GuidesPageClient from "./GuidesPageClient";

export const metadata: Metadata = {
  title: "Guides & Conseils — Thermopompes au Québec | ThermopompesÀVendre.ca",
  description:
    "Guides pratiques pour choisir, comparer et installer votre thermopompe au Québec. BTU, SEER2, prix installé, subventions et marques expliqués clairement.",
};

export default function GuidesPage() {
  return <GuidesPageClient />;
}
