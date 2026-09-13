/* ==================================================================
   Conformité C2 — POST /projet/[jeton]/reference : le recommandant
   déclare avoir 18 ans ou plus et résider au Canada (programme de
   recommandation, trousse 7.2). Formulaire HTML ordinaire : origine
   vérifiée, débit limité, case obligatoire, retour (303) au portail.
   ================================================================== */
import { NextResponse, type NextRequest } from "next/server";
import { isSameOrigin } from "@/lib/gestion/origin";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { declareFromPortal } from "@/lib/reference/portail";

export const dynamic = "force-dynamic";

const limiter = createLimiter({ limit: 10, windowMs: 10 * 60 * 1000 });
const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  if (!limiter.hit(ipFromHeaders(req.headers))) return text("Trop de requêtes. Réessayez dans quelques minutes.", 429);
  const body = new URLSearchParams((await req.text().catch(() => "")).slice(0, 2000));
  const url = new URL(`/projet/${encodeURIComponent(token)}`, baseUrlFromHeaders(req.headers));
  if (body.get("declaration") !== "oui") {
    url.searchParams.set("erreur", "declaration");
  } else {
    if (!(await declareFromPortal(token))) return text("Lien invalide.", 404);
    url.searchParams.set("ok", "reference");
  }
  url.hash = "parrainage";
  return NextResponse.redirect(url, 303);
}
