/* POST /visite/[jeton]/photo — Chantier D : photo d'une étape de la visite. Origine, débit, type réel et taille
   vérifiés ; image réencodée sans métadonnées, stockée hors de public/ (visites/service.ts). */
import { type NextRequest } from "next/server";
import { MAX_IMAGE_BYTES } from "@/lib/gestion/partenaires/files";
import { json } from "@/lib/gestion/partenaires/http";
import { isSameOrigin } from "@/lib/gestion/origin";
import { TOKEN_RE } from "@/lib/visites/access";
import { visiteLimiters } from "@/lib/visites/limits";
import { uploadVisitPhoto } from "@/lib/visites/service";
import { CLIENT_PHOTO_ID_RE, isStepId } from "@/lib/visites/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ ok: false, error: "Lien invalide." }, 404);
  if (!isSameOrigin(req)) return json({ ok: false, error: "Origine inconnue." }, 403);
  if (!visiteLimiters.photo.hit(token.slice(0, 16))) return json({ ok: false, error: "Trop de photos d’un coup : réessayez dans quelques minutes." }, 429);
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof Blob) || file.size === 0) return json({ ok: false, error: "Photo manquante." }, 400);
  if (file.size > MAX_IMAGE_BYTES) return json({ ok: false, error: "Photo trop lourde (12 Mo au plus)." }, 413);
  const step = String(form?.get("step") ?? "");
  if (!isStepId(step)) return json({ ok: false, error: "Étape inconnue." }, 400);
  const rawUnit = String(form?.get("unit") ?? "");
  const unit = /^\d{1,2}$/.test(rawUnit) ? Number(rawUnit) : null;
  const clientId = String(form?.get("clientId") ?? "");
  const r = await uploadVisitPhoto(token, { step, unit, ...(CLIENT_PHOTO_ID_RE.test(clientId) ? { clientId } : {}) }, Buffer.from(await file.arrayBuffer()));
  return json(r, r.ok ? 200 : 400);
}
