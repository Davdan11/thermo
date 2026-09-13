/* « Un problème ? » (/service/[jeton]) : page du client, sans éléments du site public, jamais indexée, sans référent. */
import type { Metadata, Viewport } from "next";
import "@/components/partenaires/public.css";

export const metadata: Metadata = {
  title: { template: "%s · Thermopompes À Vendre", default: "Un problème ?" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export const viewport: Viewport = { themeColor: "#0C1821" };

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
