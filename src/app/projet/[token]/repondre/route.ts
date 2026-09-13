/* ==================================================================
   Chantier P — POST /projet/[jeton]/repondre : réponses du client dans
   son portail. Formulaires HTML ordinaires (fonctionnent sans
   JavaScript) : origine vérifiée, débit limité, validation zod, puis
   retour (303) au portail.
     - reserver / annuler : date choisie parmi les créneaux ;
     - adherer : plan d'entretien (consentement + nom tapé) ;
     - service : nouveau lien « Un problème ? » (billet avec photos) ;
     - sondage, logisvert, changer, probleme, entretien, desabonnement :
       mêmes réponses que /suivi (volet B), même dossier, même jeton.
   Le désabonnement en un clic des messageries (RFC 8058) reste sur
   /suivi/<jeton>/repondre.
   ================================================================== */
import { NextResponse, after, type NextRequest } from "next/server";
import { z } from "zod";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { ID_RE } from "@/lib/gestion/service";
import { alertOwner, answerLogisvert, answerSurvey, submitRequest, unsubscribeSuivi, type AnswerResult } from "@/lib/gestion/automatisations/followup";
import { LOGISVERT_STATUSES } from "@/lib/gestion/automatisations/types";
import { portalLimits } from "@/lib/gestion/portail/limits";
import { cancelBooking, joinPlan, portalServiceToken, reserveSlot } from "@/lib/gestion/portail/service";
import { PLAN_ID_RE, SLOT_ID_RE } from "@/lib/gestion/portail/types";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

const Form = z.discriminatedUnion("action", [
  z.object({ action: z.literal("reserver"), jobId: z.string().regex(ID_RE), slotId: z.string().regex(SLOT_ID_RE) }),
  z.object({ action: z.literal("annuler"), jobId: z.string().regex(ID_RE) }),
  z.object({ action: z.literal("adherer"), planId: z.string().regex(PLAN_ID_RE), nom: z.string().max(200).optional().default(""), accepte: z.string().optional() }),
  z.object({ action: z.literal("service") }),
  z.object({ action: z.literal("sondage"), note: z.coerce.number().int().min(1).max(5), commentaire: z.string().max(2000).optional().default("") }),
  z.object({ action: z.literal("logisvert"), statut: z.enum(LOGISVERT_STATUSES) }),
  z.object({ action: z.enum(["changer", "probleme", "entretien"]), message: z.string().max(2000).optional().default("") }),
  z.object({ action: z.literal("desabonnement") }),
]);

const FOCUS: Record<string, string> = { reserver: "changer", annuler: "changer", adherer: "entretien", sondage: "sondage", logisvert: "logisvert", changer: "changer", probleme: "probleme", entretien: "entretien" };

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  if (!portalLimits.write.hit(ipFromHeaders(req.headers))) return text("Trop de requêtes. Réessayez dans quelques minutes ou appelez le 438-900-3224.", 429);
  const raw = await req.text().catch(() => "");
  if (raw.length > 8000) return text("Message trop long.", 413);
  const base = baseUrlFromHeaders(req.headers);
  const back = (q: Record<string, string>) => {
    const url = new URL(`/projet/${encodeURIComponent(token)}`, base);
    for (const [k, v] of Object.entries(q)) url.searchParams.set(k, v);
    return NextResponse.redirect(url, 303);
  };
  const parsed = Form.safeParse(Object.fromEntries(new URLSearchParams(raw).entries()));
  if (!parsed.success) return back({ e: "formulaire" });
  const f = parsed.data;
  const now = new Date();
  const fail = (code: string) => back({ e: code, ...(FOCUS[f.action] ? { q: FOCUS[f.action] } : {}) });

  if (f.action === "reserver" || f.action === "annuler") {
    const r = f.action === "reserver" ? await reserveSlot(token, f.jobId, f.slotId, { now, baseUrl: base }) : await cancelBooking(token, f.jobId, { now, baseUrl: base });
    if (!r.ok) return r.code === "invalide" ? text("Lien invalide.", 404) : fail(r.code);
    return back({ ok: f.action });
  }
  if (f.action === "adherer") {
    const r = await joinPlan(token, { planId: f.planId, typedName: f.nom, accepted: f.accepte === "on", ip: ipFromHeaders(req.headers), userAgent: req.headers.get("user-agent") ?? "" }, { now, baseUrl: base });
    if (!r.ok) return r.code === "invalide" ? text("Lien invalide.", 404) : fail(r.code);
    return back({ ok: "adherer" });
  }
  if (f.action === "service") {
    const t = await portalServiceToken(token, now);
    if (!t) return text("Lien invalide.", 404);
    return NextResponse.redirect(new URL(`/service/${encodeURIComponent(t)}`, base), 303);
  }

  // Réponses du volet B : même dossier (même jeton), alerte au propriétaire et tâche CRM après la réponse.
  let r: AnswerResult | { ok: boolean };
  if (f.action === "sondage") r = await answerSurvey(token, f.note, f.commentaire, now);
  else if (f.action === "logisvert") r = await answerLogisvert(token, f.statut, now);
  else if (f.action === "desabonnement") r = { ok: await unsubscribeSuivi(token) };
  else r = await submitRequest(token, f.action, f.message, now);
  if (!r.ok) return text("Lien invalide.", 404);
  if ("alert" in r && r.alert) {
    const a = { ...r.alert, jobId: r.jobId };
    after(() => alertOwner(a, { now, baseUrl: base }).catch((e) => console.error("[portail] alerte impossible :", e)));
  }
  return back({ ok: f.action, ...(f.action === "sondage" ? { note: String(f.note) } : {}), ...(f.action === "logisvert" ? { r: f.statut } : {}), ...(f.action === "desabonnement" ? { q: "desabonnement" } : {}) });
}

export function GET() {
  return text("Méthode non permise.", 405);
}
