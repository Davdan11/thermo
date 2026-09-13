/* Conformité C1 — approbation du contrat final par l'installateur (/approbation/[jeton]) : aucun élément du site public
   (voir SiteChrome), jamais indexée, aucun référent transmis (le lien contient le jeton). */
import type { Metadata, Viewport } from "next";
import "@/components/partenaires/public.css";
import "@/components/contrats/contrat.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Contrat à approuver" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function ApprobationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
