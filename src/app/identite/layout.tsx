/* Identité légale remplie par le partenaire (/identite/[jeton]) : aucun élément du site public (voir SiteChrome),
   jamais indexée, aucun référent transmis (le lien contient le jeton). */
import type { Metadata, Viewport } from "next";
import "@/components/partenaires/public.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Identité légale de l’entreprise" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function IdentiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
