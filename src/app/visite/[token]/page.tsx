/* ==================================================================
   /visite/[jeton] — Chantier D : visite guidée par photos, sans
   compte, pensée d'abord pour le cellulaire. GET en lecture seule ;
   l'ouverture est notée par un POST de la page (les robots qui
   vérifient les liens ne comptent pas). Tout le reste (file hors
   ligne, compression, reprise) vit dans VisitApp.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { visiteLimiters } from "@/lib/visites/limits";
import { getVisitView, maybePurgeVisits } from "@/lib/visites/service";
import { VisitApp } from "@/components/visite/VisitApp";
import { VisitPlain } from "@/components/visite/VisitPlain";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Visite photo" };

export default async function VisitePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!visiteLimiters.view.hit(ipFromHeaders(await headers()))) return <VisitPlain kind="attente" title="Trop de visites" text="Réessayez dans quelques minutes." />;
  await maybePurgeVisits();
  const res = await getVisitView(token);
  if (res.state === "expiree") return <VisitPlain kind="expire" title="Ce lien a expiré" text="Répondez au texto ou au courriel reçu : nous vous enverrons un nouveau lien." />;
  if (res.state === "supprimee") return <VisitPlain kind="supprime" title="Ces photos ont été supprimées" text="La durée de conservation est terminée. Merci !" />;
  if (res.state !== "ok") return <VisitPlain kind="invalide" title="Ce lien n’est pas valide" text="Vérifiez qu’il est complet, ou répondez au texto ou au courriel reçu." />;
  return <VisitApp token={token} initial={res.view} />;
}
