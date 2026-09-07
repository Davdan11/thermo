import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import EspaceInstallateurClient from "./InstallateurClient";

export const metadata: Metadata = createMetadata({
  title: "Espace installateur — Thermopompe A Vendre.ca",
  description:
    "Espace dédié aux installateurs certifiés CVAC. Rejoignez le réseau Thermopompe A Vendre.ca et recevez des demandes de soumission qualifiées au Québec.",
  alternates: { canonical: "/espace-installateur" },
  robots: { index: false, follow: true },
});

export default function EspaceInstallateurPage() {
  return <EspaceInstallateurClient />;
}
