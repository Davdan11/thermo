/* ==================================================================
   POST /suivi/[jeton]/repondre — réponses du client depuis ses liens :
   note du sondage, statut LogisVert, problème ou changement de date,
   entretien, désabonnement des suivis.
   Formulaire HTML ordinaire (fonctionne sans JavaScript) : origine
   vérifiée, débit limité, validation zod, puis retour (303) à la page.
   Exception : le désabonnement en un clic des messageries (RFC 8058,
   corps « List-Unsubscribe=One-Click », sans en-tête Origin).
   Alerte au propriétaire et tâche CRM après la réponse (after()).
   ================================================================== */
import { NextResponse, after, type NextRequest } from "next/server";
import { z } from "zod";
import { isSameOrigin } from "@/lib/gestion/origin";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { alertOwner, answerLogisvert, answerSurvey, submitRequest, unsubscribeSuivi, type AnswerResult } from "@/lib/gestion/automatisations/followup";
import { LOGISVERT_STATUSES } from "@/lib/gestion/automatisations/types";

export const dynamic = "force-dynamic";

const limiter = createLimiter({ limit: 20, windowMs: 10 * 60 * 1000 });
const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

const Form = z.discriminatedUnion("action", [
  z.object({ action: z.literal("sondage"), note: z.coerce.number().int().min(1).max(5), commentaire: z.string().max(2000).optional().default("") }),
  z.object({ action: z.literal("logisvert"), statut: z.enum(LOGISVERT_STATUSES) }),
  z.object({ action: z.enum(["changer", "probleme", "entretien"]), message: z.string().max(2000).optional().default("") }),
  z.object({ action: z.literal("desabonnement") }),
]);

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const raw = await req.text().catch(() => "");
  if (raw.length > 8000) return text("Message trop long.", 413);
  const body = new URLSearchParams(raw);
  const oneClick = new URL(req.url).searchParams.get("action") === "desabonnement" && body.get("List-Unsubscribe") === "One-Click";
  if (!oneClick && !isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  if (!limiter.hit(ipFromHeaders(req.headers))) return text("Trop de requêtes. Réessayez dans quelques minutes ou appelez le 438-900-3224.", 429);

  const fields = Object.fromEntries(body.entries());
  const parsed = Form.safeParse(oneClick ? { action: "desabonnement" } : fields);
  if (!parsed.success) return text("Réponse invalide.", 400);
  const f = parsed.data;
  const base = baseUrlFromHeaders(req.headers);
  const now = new Date();

  let r: AnswerResult | { ok: boolean };
  if (f.action === "sondage") r = await answerSurvey(token, f.note, f.commentaire, now);
  else if (f.action === "logisvert") r = await answerLogisvert(token, f.statut, now);
  else if (f.action === "desabonnement") r = { ok: await unsubscribeSuivi(token) };
  else r = await submitRequest(token, f.action, f.message, now);

  if (!r.ok) return oneClick ? Response.json({ ok: true }) : text("Lien invalide.", 404);
  if ("alert" in r && r.alert) {
    const a = { ...r.alert, jobId: r.jobId };
    after(() => alertOwner(a, { now, baseUrl: base }).catch((e) => console.error("[suivi] alerte impossible :", e)));
  }
  if (oneClick) return Response.json({ ok: true });
  const url = new URL(`/suivi/${encodeURIComponent(token)}`, base);
  url.searchParams.set("ok", f.action);
  if (f.action === "sondage") url.searchParams.set("note", String(f.note));
  return NextResponse.redirect(url, 303);
}
