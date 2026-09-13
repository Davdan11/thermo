/* Chantier D — visite photo à distance (/visite/[jeton]) : aucun élément du site public (voir SiteChrome), jamais
   indexée, aucun référent transmis (en-têtes dans next.config.ts, balises ici en plus). */
import type { Metadata, Viewport } from "next";
import "@/components/visite/visite.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Visite photo" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function VisiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
