/* ==================================================================
   POST /gestion/api/blogue/image — téléversement d'une image pour un
   article (formulaire multipart, champ « image »). Propriétaire
   seulement (getAdminSession), même origine exigée. Route plutôt que
   Server Action : une photo dépasse la limite de 1 Mo des actions.
   Réponse : { path: "/blogue/images/<fichier>.webp" }.
   ================================================================== */

import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { IMAGE_MAX_BYTES, saveUploadedImage } from "@/lib/blogue/images";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) return json({ error: "Origine refusée." }, 403);
  const len = Number(req.headers.get("content-length") ?? 0);
  if (len > IMAGE_MAX_BYTES + 64 * 1024) return json({ error: "Image trop lourde (8 Mo au plus)." }, 413);
  let file: File | null = null;
  try {
    const fd = await req.formData();
    const f = fd.get("image");
    file = f instanceof File ? f : null;
  } catch {
    return json({ error: "Envoi illisible." }, 400);
  }
  if (!file) return json({ error: "Aucune image reçue." }, 400);
  const r = await saveUploadedImage(Buffer.from(await file.arrayBuffer()), file.type);
  return r.ok ? json({ path: r.path }) : json({ error: r.error }, 400);
}
