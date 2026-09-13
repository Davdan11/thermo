/* POST /visite/[jeton]/retirer — Chantier D : le client retire une de SES photos, avant l'envoi seulement. */
import { type NextRequest } from "next/server";
import { json } from "@/lib/gestion/partenaires/http";
import { isSameOrigin } from "@/lib/gestion/origin";
import { TOKEN_RE } from "@/lib/visites/access";
import { visiteLimiters } from "@/lib/visites/limits";
import { removeVisitPhoto } from "@/lib/visites/service";
import { VISIT_PHOTO_ID_RE } from "@/lib/visites/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ ok: false, error: "Lien invalide." }, 404);
  if (!isSameOrigin(req)) return json({ ok: false, error: "Origine inconnue." }, 403);
  if (!visiteLimiters.write.hit(token.slice(0, 16))) return json({ ok: false, error: "Trop d’essais : réessayez dans quelques minutes." }, 429);
  const body = (await req.json().catch(() => null)) as { photoId?: unknown } | null;
  const photoId = typeof body?.photoId === "string" ? body.photoId : "";
  if (!VISIT_PHOTO_ID_RE.test(photoId)) return json({ ok: false, error: "Photo introuvable." }, 400);
  const r = await removeVisitPhoto(token, photoId);
  return json(r, r.ok ? 200 : 400);
}
