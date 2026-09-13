/* POST /chantier/[jeton]/plaque — lecture du numéro de série sur la photo d'une plaque déjà envoyée (vision de
   ThermoScan, si GEMINI_API_KEY est configurée). Pré-remplit seulement : le numéro reste corrigible. */
import { type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { json } from "@/lib/gestion/partenaires/http";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { isSameOrigin } from "@/lib/gestion/origin";
import { readPlateForToken } from "@/lib/gestion/terrain/service";
import { FIELD_PHOTO_ID_RE } from "@/lib/gestion/terrain/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ ok: false, error: "Lien invalide." }, 404);
  if (!isSameOrigin(req)) return json({ ok: false, error: "Origine inconnue." }, 403);
  if (!voletLimits.plaque.hit(token.slice(0, 16))) return json({ ok: false, error: "Trop de lectures : saisissez le numéro à la main." }, 429);
  const body = (await req.json().catch(() => null)) as { photoId?: unknown } | null;
  const photoId = typeof body?.photoId === "string" ? body.photoId : "";
  if (!FIELD_PHOTO_ID_RE.test(photoId)) return json({ ok: false, error: "Photo invalide." }, 400);
  const r = await readPlateForToken(token, photoId);
  return json(r, r.ok ? 200 : 422);
}
