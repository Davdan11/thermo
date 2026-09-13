/* POST /chantier/[jeton]/photo — photo d'une étape du chantier (ou d'un appel de service : champ ticketId).
   Type et taille vérifiés au serveur, image réencodée sans métadonnées, stockée hors de public/. */
import { type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { MAX_IMAGE_BYTES } from "@/lib/gestion/partenaires/files";
import { json } from "@/lib/gestion/partenaires/http";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { isSameOrigin } from "@/lib/gestion/origin";
import { installerTicketPhoto } from "@/lib/gestion/sav/service";
import { TICKET_ID_RE } from "@/lib/gestion/sav/types";
import { uploadFieldPhoto } from "@/lib/gestion/terrain/service";
import { isPhotoStep, OP_ID_RE } from "@/lib/gestion/terrain/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return json({ ok: false, error: "Lien invalide." }, 404);
  if (!isSameOrigin(req)) return json({ ok: false, error: "Origine inconnue." }, 403);
  if (!voletLimits.chantierPhoto.hit(token.slice(0, 16))) return json({ ok: false, error: "Trop de photos d’un coup : réessayez dans quelques minutes." }, 429);
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof Blob) || file.size === 0) return json({ ok: false, error: "Photo manquante." }, 400);
  if (file.size > MAX_IMAGE_BYTES) return json({ ok: false, error: "Photo trop lourde (12 Mo au plus)." }, 413);
  const buf = Buffer.from(await file.arrayBuffer());

  const ticketId = String(form?.get("ticketId") ?? "");
  if (ticketId) {
    if (!TICKET_ID_RE.test(ticketId)) return json({ ok: false, error: "Appel de service invalide." }, 400);
    const r = await installerTicketPhoto(token, ticketId, buf);
    return json(r, r.ok ? 200 : 400);
  }

  const step = String(form?.get("step") ?? "");
  if (!isPhotoStep(step)) return json({ ok: false, error: "Étape inconnue." }, 400);
  const clientId = String(form?.get("clientId") ?? "");
  const takenAt = String(form?.get("takenAt") ?? "").slice(0, 40);
  const r = await uploadFieldPhoto(token, { step, ...(OP_ID_RE.test(clientId) ? { clientId } : {}), takenAt }, buf);
  return json(r, r.ok ? 200 : 400);
}
