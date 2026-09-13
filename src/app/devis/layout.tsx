/* Soumissions envoyées aux clients (/devis/[jeton]) : aucun élément du site public (voir SiteChrome), jamais indexées,
   aucun référent transmis (en-têtes dans next.config.ts, balise ici en plus). */
import type { Metadata, Viewport } from "next";
import "@/components/gestion/soumissions/document/devis.css";

export const metadata: Metadata = {
  title: { template: "%s", default: "Votre soumission" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = {
  themeColor: "#0C1821",
};

export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
