import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import ContactPageClient from "./ContactClient";

export const metadata: Metadata = createMetadata({
  title: "Contactez-nous — Thermopompe A Vendre.ca",
  description:
    "Contactez l'équipe de Thermopompe A Vendre.ca pour toute question sur les thermopompes, les soumissions ou notre service au Québec.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
});

export default function ContactPage() {
  return <ContactPageClient />;
}
