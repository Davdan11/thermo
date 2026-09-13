/* ==================================================================
   /avis — lien des demandes d'avis. Redirige vers la page « Laisser
   un avis » de la fiche Google (GOOGLE_REVIEW_URL, lue à chaque visite).
   Sans ce lien : page simple avec un lien vers /contact. Non indexée.
   ================================================================== */
import type { Metadata } from "next";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { googleReviewUrl } from "@/lib/relances/config";
import { AvisFallback } from "./AvisFallback";

export const metadata: Metadata = {
  title: "Laisser un avis",
  description: "Donnez votre avis sur Thermopompes À Vendre.",
  robots: { index: false, follow: false },
};

export default async function AvisPage() {
  // Lien lu à la requête (shared/.env), jamais figé au build.
  await connection();
  const url = googleReviewUrl();
  if (url) redirect(url);
  return (
    <main>
      <AvisFallback />
    </main>
  );
}
