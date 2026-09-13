/* POST /visite/[jeton]/envoyer — Chantier D : « Envoyer » la visite (réponses validées par zod ; répété : sans effet). */
import { type NextRequest } from "next/server";
import { json } from "@/lib/gestion/partenaires/http";
import { isSameOrigin } from "@/lib/gestion/origin";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { TOKEN_RE } from "@/lib/visites/access";
import { visiteLimiters } from "@/lib/visites/limits";
import { submitVisit } from "@/lib/visites/service";
import { parseAnswers } from "@/lib/visites/validate";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ ok: false, error: "Lien invalide." }, 404);
  if (!isSameOrigin(req)) return json({ ok: false, error: "Origine inconnue." }, 403);
  if (!visiteLimiters.write.hit(token.slice(0, 16))) return json({ ok: false, error: "Trop d’essais : réessayez dans quelques minutes." }, 429);
  const body = (await req.json().catch(() => null)) as { answers?: unknown } | null;
  const parsed = parseAnswers(body?.answers);
  if (!parsed.ok) return json(parsed, 400);
  const r = await submitVisit(token, parsed.data, baseUrlFromHeaders(req.headers));
  return json(r, r.ok ? 200 : 400);
}
