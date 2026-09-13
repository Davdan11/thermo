/* GET /visite/[jeton]/photo/[photo] — Chantier D : seulement une photo de la demande de CE jeton (lien valide). */
import { type NextRequest } from "next/server";
import { privateFileResponse } from "@/lib/gestion/partenaires/files";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { TOKEN_RE } from "@/lib/visites/access";
import { visiteLimiters } from "@/lib/visites/limits";
import { photoForVisitToken } from "@/lib/visites/service";
import { VISIT_PHOTO_ID_RE } from "@/lib/visites/types";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string; photoId: string }> }) {
  const { token, photoId } = await params;
  if (!visiteLimiters.photoView.hit(ipFromHeaders(req.headers))) return new Response(null, { status: 429 });
  if (!TOKEN_RE.test(token) || !VISIT_PHOTO_ID_RE.test(photoId)) return new Response(null, { status: 404 });
  const found = await photoForVisitToken(token, photoId);
  return found ? privateFileResponse(found.data, found.ext) : new Response(null, { status: 404 });
}
