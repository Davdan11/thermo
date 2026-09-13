/* POST /visite/[jeton]/vue — Chantier D : première ouverture dans un vrai navigateur (envoyé par la page). */
import { type NextRequest } from "next/server";
import { json } from "@/lib/gestion/partenaires/http";
import { isSameOrigin } from "@/lib/gestion/origin";
import { TOKEN_RE } from "@/lib/visites/access";
import { visiteLimiters } from "@/lib/visites/limits";
import { markVisitOpened } from "@/lib/visites/service";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ ok: false }, 404);
  if (!isSameOrigin(req)) return json({ ok: false }, 403);
  if (!visiteLimiters.write.hit(token.slice(0, 16))) return json({ ok: false }, 429);
  return json({ ok: true, first: await markVisitOpened(token) });
}
