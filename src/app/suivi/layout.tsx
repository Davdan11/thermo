/* Dossier du client après la vente (/suivi/[jeton]) : aucun élément du site public (voir SiteChrome), jamais indexé,
   aucun référent transmis. */
import type { Metadata, Viewport } from "next";
import "@/components/gestion/argent/argent.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Votre dossier" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = {
  themeColor: "#0C1821",
};

export default function SuiviLayout({ children }: { children: React.ReactNode }) {
  return children;
}
