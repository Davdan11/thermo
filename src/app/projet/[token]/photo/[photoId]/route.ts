/* Chantier P — GET /projet/[jeton]/photo/[photo] : seulement une photo du chantier de CE projet (installation ou visite). */
import { type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/soumissions/tokens";
import { privateFileResponse } from "@/lib/gestion/partenaires/files";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { portalLimits } from "@/lib/gestion/portail/limits";
import { photoForPortal } from "@/lib/gestion/portail/service";

export const dynamic = "force-dynamic";

const PHOTO_RE = /^f_[A-Za-z0-9_-]{8,16}$/;

export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string; photoId: string }> }) {
  const { token, photoId } = await params;
  if (!portalLimits.photo.hit(ipFromHeaders(req.headers))) return new Response(null, { status: 429 });
  if (!TOKEN_RE.test(token) || !PHOTO_RE.test(photoId)) return new Response(null, { status: 404 });
  const found = await photoForPortal(token, photoId);
  return found ? privateFileResponse(found.data, found.ext) : new Response(null, { status: 404 });
}
