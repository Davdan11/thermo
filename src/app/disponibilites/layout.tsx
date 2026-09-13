/* Chantier P — « Mes disponibilités » de l'installateur (/disponibilites/[jeton]) : sans éléments du site public,
   jamais indexée (balise ici, X-Robots-Tag dans next.config.ts), aucun référent transmis. */
import type { Metadata, Viewport } from "next";
import "@/components/partenaires/public.css";
import "@/components/portail/portail.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Mes disponibilités" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function DisponibilitesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
