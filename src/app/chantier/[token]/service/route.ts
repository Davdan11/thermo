/* POST /chantier/[jeton]/service — l'installateur d'origine prévoit la visite ou note la résolution d'un appel de service
   de CE job ({ ticketId, type: "visite", visitAt } ou { ticketId, type: "resolu", note }). */
import { type NextRequest } from "next/server";
import { z } from "zod";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { json } from "@/lib/gestion/partenaires/http";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { isSameOrigin } from "@/lib/gestion/origin";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { installerTicketAction } from "@/lib/gestion/sav/service";
import { TICKET_ID_RE } from "@/lib/gestion/sav/types";

export const dynamic = "force-dynamic";

const schema = z.discriminatedUnion("type", [
  z.object({ ticketId: z.string().regex(TICKET_ID_RE), type: z.literal("visite"), visitAt: z.string().max(40) }),
  z.object({ ticketId: z.string().regex(TICKET_ID_RE), type: z.literal("resolu"), note: z.string().trim().min(3).max(2000) }),
]);

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ ok: false, error: "Lien invalide." }, 404);
  if (!isSameOrigin(req)) return json({ ok: false, error: "Origine inconnue." }, 403);
  if (!voletLimits.chantierSync.hit(token.slice(0, 16))) return json({ ok: false, error: "Trop de requêtes." }, 429);
  const p = schema.safeParse(await req.json().catch(() => null));
  if (!p.success) return json({ ok: false, error: "Demande invalide." }, 400);
  const d = p.data;
  const r = await installerTicketAction(token, d.ticketId, d.type === "visite" ? { type: "visite", visitAt: d.visitAt } : { type: "resolu", note: d.note }, baseUrlFromHeaders(req.headers));
  return json(r, r.ok ? 200 : 400);
}
