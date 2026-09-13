/* Factures de commission des installateurs (/facture/[jeton]) : aucun élément du site public (voir SiteChrome),
   jamais indexées, aucun référent transmis. */
import type { Metadata, Viewport } from "next";
import "@/components/gestion/argent/argent.css";

export const metadata: Metadata = {
  title: { template: "%s", default: "Facture de commission" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = {
  themeColor: "#0C1821",
};

export default function FactureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
