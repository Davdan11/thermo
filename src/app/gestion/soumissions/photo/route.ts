/* POST /gestion/soumissions/photo — téléversement d'une photo du chantier (ou du logo). Session et origine vérifiées ;
   l'image est compressée et nettoyée de ses métadonnées (photos.ts). */
import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { isSameOrigin } from "@/lib/gestion/origin";
import { limiters } from "@/lib/gestion/rate-limit";
import { LIMITS } from "@/lib/soumissions/config";
import { PhotoError, savePhoto } from "@/lib/soumissions/photos";
import { QUOTE_ID_RE } from "@/lib/soumissions/quote";

export const dynamic = "force-dynamic";

const json = (body: unknown, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  if (!isSameOrigin(req)) return json({ ok: false, error: "Origine refusée." }, 403);
  if (!limiters.lookup.hit(`photo:${session.email}`)) return json({ ok: false, error: "Trop de requêtes." }, 429);
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof Blob)) return json({ ok: false, error: "Aucune image reçue." }, 400);
  if (file.size > LIMITS.photoBytes) return json({ ok: false, error: "Image trop lourde (12 Mo au plus)." }, 413);
  const quoteId = String(form?.get("quoteId") ?? "");
  try {
    const meta = await savePhoto(Buffer.from(await file.arrayBuffer()), session.email, QUOTE_ID_RE.test(quoteId) ? quoteId : null, { logo: form?.get("logo") === "1" });
    return json({ ok: true, id: meta.id, width: meta.width, height: meta.height });
  } catch (e) {
    if (e instanceof PhotoError) return json({ ok: false, error: e.message }, 400);
    console.error("[soumissions] photo :", e);
    return json({ ok: false, error: "Enregistrement impossible." }, 500);
  }
}
