/* Pages de réponse des installateurs (/job/[jeton]) : sans éléments du site public, jamais indexées. */
import type { Metadata, Viewport } from "next";
import "@/components/gestion/gestion.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Offre de job" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#0C1821",
};

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return children;
}
