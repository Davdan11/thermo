/* Outil de gestion privé : aucun élément du site public (voir SiteChrome), jamais indexé. */
import type { Metadata, Viewport } from "next";
import "@/components/gestion/gestion.css";

export const metadata: Metadata = {
  title: { template: "%s · Gestion", default: "Gestion" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#0C1821",
};

export default function GestionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
