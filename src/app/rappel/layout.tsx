/* Chantier T — page du client (/rappel/[jeton]) : choisir le moment du rappel. Sans éléments du site public, jamais indexée. */
import type { Metadata, Viewport } from "next";
import "@/components/gestion/gestion.css";
import "@/components/gestion/crm.css";
import "@/components/gestion/telephonie/telephonie.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Choisir le moment de notre appel" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function RappelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
