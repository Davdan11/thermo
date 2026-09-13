/* Chantier T — page du lien d'alerte (/appel/[jeton]) : sans éléments du site public, jamais indexée. */
import type { Metadata, Viewport } from "next";
import "@/components/gestion/gestion.css";
import "@/components/gestion/crm.css";
import "@/components/gestion/telephonie/telephonie.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Appeler un client" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function AppelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
