import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import FAQPageClient from "./FaqClient";

export const metadata: Metadata = createMetadata({
  title: "FAQ — Questions fréquentes sur les thermopompes au Québec",
  description:
    "Réponses aux questions les plus fréquentes sur les thermopompes : fonctionnement, BTU, SEER2, HSPF2, prix, subventions, installation et entretien au Québec.",
  alternates: { canonical: "/faq" },
  robots: { index: true, follow: true },
});

export default function FaqPage() {
  return <FAQPageClient />;
}
