/* ==================================================================
   /chantier/[jeton]/sync
   GET  : vue à jour du chantier (JSON).
   POST : opérations de la file hors ligne ({ ops: [...] }), validées
          par zod, appliquées une seule fois (identifiant par opération).
   Origine vérifiée, débit limité par jeton.
   ================================================================== */
import { type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { json } from "@/lib/gestion/partenaires/http";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { fieldOpsSchema } from "@/lib/gestion/terrain/rules";
import { applyFieldOps, getFieldView } from "@/lib/gestion/terrain/service";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ state: "invalide" }, 404);
  if (!voletLimits.chantierView.hit(ipFromHeaders(req.headers))) return json({ error: "Trop de requêtes." }, 429);
  const res = await getFieldView(token);
  return res.state === "ok" ? json(res) : json(res, 404);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ state: "invalide", results: [] }, 404);
  if (!isSameOrigin(req)) return json({ error: "Origine inconnue." }, 403);
  if (!voletLimits.chantierSync.hit(token.slice(0, 16))) return json({ error: "Trop de requêtes." }, 429);
  const body = await req.json().catch(() => null);
  const parsed = fieldOpsSchema.safeParse(body);
  if (!parsed.success) return json({ error: "Opérations invalides." }, 400);
  const out = await applyFieldOps(token, parsed.data.ops, { ip: ipFromHeaders(req.headers), userAgent: req.headers.get("user-agent") ?? "", baseUrl: baseUrlFromHeaders(req.headers) });
  return json(out, out.state === "ok" ? 200 : 404);
}
