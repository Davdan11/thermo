/* ==================================================================
   POST /gestion/api/assistant — Chantier A : « Demande à Claude ».
   Session vérifiée ici (getAdminSession) : sans session, 401 et rien
   n'est lu ni envoyé. Appels du site seulement, corps limité, zod.
   Réponse JSON (pas de flux) : { ok, answer, drafts… } ou { ok: false, message }.
   ================================================================== */

import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { CRM_ASSISTANT_LIMITS as L } from "@/lib/gestion/assistant/config";
import { askCrmAssistant, type AskErrorCode } from "@/lib/gestion/assistant/service";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  question: z.string().trim().min(1).max(L.maxQuestionChars),
  history: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().max(L.maxHistoryChars * 2) }))
    .max(L.maxHistoryTurns * 2)
    .optional(),
  clientId: z.string().regex(CLIENT_ID_RE).optional(),
});

const STATUS: Record<AskErrorCode, number> = { "cle-absente": 503, invalide: 400, plafond: 402, "tarifs-manquants": 402, "en-cours": 429, frequence: 429, erreur: 502 };
const headers = { "Cache-Control": "no-store" };

export async function POST(req: Request): Promise<Response> {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  const site = req.headers.get("sec-fetch-site");
  if (site && site !== "same-origin") return NextResponse.json({ ok: false, code: "invalide", message: "Origine refusée." }, { status: 403, headers });

  const raw = await req.text();
  if (raw.length > L.maxBodyBytes) return NextResponse.json({ ok: false, code: "invalide", message: "Conversation trop longue : recommencez-en une nouvelle." }, { status: 413, headers });
  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, code: "invalide", message: "Requête invalide." }, { status: 400, headers });
  }
  const p = bodySchema.safeParse(json);
  if (!p.success) return NextResponse.json({ ok: false, code: "invalide", message: "Question invalide." }, { status: 400, headers });

  const r = await askCrmAssistant({ email: session.email, question: p.data.question, history: p.data.history, clientId: p.data.clientId });
  return NextResponse.json(r, { status: r.ok ? 200 : STATUS[r.code], headers });
}
