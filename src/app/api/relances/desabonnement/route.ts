/* ==================================================================
   /api/relances/desabonnement?token=…
   POST : désabonnement en un clic depuis le bouton des messageries
          (en-têtes List-Unsubscribe / List-Unsubscribe-Post, RFC 8058).
   GET  : renvoie vers la page /relances/desabonnement, qui désabonne
          et l'affiche (liens des courriels).
   L'adresse ne reçoit plus rien : ni rappel ThermoMatch, ni demande d'avis.
   ================================================================== */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isToken } from "@/lib/alerts/logisvert-alerts-core";
import { unsubscribeByToken } from "@/lib/relances/store";
import { journalLead } from "@/lib/crm/lead-journal";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";

export async function POST(req: NextRequest) {
  if (!rateLimit(req, { name: "relances-desabonnement", limit: 30, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
  const token = req.nextUrl.searchParams.get("token");
  if (!isToken(token)) return NextResponse.json({ ok: false, error: "Lien invalide." }, { status: 400 });
  const r = await unsubscribeByToken(token);
  if (r && !r.already) await journalLead("relances", { event: "desabonnement", via: "list-unsubscribe", email: r.email, cancelled: r.cancelled });
  // Toujours 200 : un jeton déjà utilisé veut dire « déjà désabonné ».
  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  const url = new URL("/relances/desabonnement", req.nextUrl);
  if (isToken(token)) url.searchParams.set("token", token);
  return NextResponse.redirect(url, 303);
}
