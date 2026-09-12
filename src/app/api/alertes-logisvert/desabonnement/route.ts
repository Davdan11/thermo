/* ==================================================================
   /api/alertes-logisvert/desabonnement?token=…
   POST : désabonnement en un clic depuis le bouton des messageries
          (en-têtes List-Unsubscribe / List-Unsubscribe-Post, RFC 8058).
   GET  : renvoie vers la page /alertes-logisvert/desabonnement, qui
          désabonne et l'affiche (liens des courriels).
   ================================================================== */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isToken } from "@/lib/alerts/logisvert-alerts-core";
import { unsubscribe } from "@/lib/alerts/logisvert-alerts-store";
import { journalLead } from "@/lib/crm/lead-journal";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";

export async function POST(req: NextRequest) {
  if (!rateLimit(req, { name: "alertes-logisvert-desabonnement", limit: 30, windowMs: 10 * 60 * 1000 })) return tooManyRequests();
  const token = req.nextUrl.searchParams.get("token");
  if (!isToken(token)) return NextResponse.json({ ok: false, error: "Lien invalide." }, { status: 400 });
  const removed = await unsubscribe(token);
  if (removed) await journalLead("alerte-logisvert", { event: "desabonnement", via: "list-unsubscribe", email: removed.email, target: removed.target, alertId: removed.id });
  // Toujours 200 : un jeton déjà retiré veut dire « déjà désabonné ».
  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  const url = new URL("/alertes-logisvert/desabonnement", req.nextUrl);
  if (isToken(token)) url.searchParams.set("token", token);
  return NextResponse.redirect(url, 303);
}
