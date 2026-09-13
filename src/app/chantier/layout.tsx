/* Page de chantier de l'installateur (/chantier/[jeton]) : sans éléments du site public (voir SiteChrome),
   jamais indexée, aucun référent transmis. */
import type { Metadata, Viewport } from "next";
import "@/components/partenaires/public.css";
import "@/components/partenaires/terrain.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Chantier" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function ChantierLayout({ children }: { children: React.ReactNode }) {
  return children;
}
