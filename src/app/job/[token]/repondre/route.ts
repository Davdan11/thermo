/* ==================================================================
   POST /job/[jeton]/repondre — Accepter ou Refuser une offre.
   Formulaire HTML ordinaire (fonctionne sans JavaScript, dans le
   navigateur intégré d'une messagerie). Origine vérifiée, débit limité,
   puis retour (303) vers la page de l'offre. Un GET ne fait rien (405).
   ================================================================== */
import { NextResponse, type NextRequest } from "next/server";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders, limiters } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { respondToOffer } from "@/lib/gestion/service";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  if (!limiters.jobRespond.hit(ipFromHeaders(req.headers))) return text("Trop de requêtes. Réessayez dans quelques minutes ou appelez le 438-900-3224.", 429);
  const form = await req.formData().catch(() => null);
  const decision = form?.get("decision");
  if (decision !== "accepter" && decision !== "refuser") return text("Réponse manquante.", 400);
  const reason = String(form?.get("raison") ?? "").slice(0, 500);
  const base = baseUrlFromHeaders(req.headers);
  const result = await respondToOffer(token, decision, reason, base);
  const url = new URL(`/job/${encodeURIComponent(token)}`, base);
  url.searchParams.set("r", result.state);
  return NextResponse.redirect(url, 303);
}
