/* Chantier P — portail client « Mon projet » (/projet/[jeton]) : aucun élément du site public (voir SiteChrome),
   jamais indexé (balise ici, en-tête X-Robots-Tag dans next.config.ts), aucun référent transmis. */
import type { Metadata, Viewport } from "next";
import "@/components/portail/portail.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Mon projet" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function ProjetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
