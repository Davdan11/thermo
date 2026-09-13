/* GET /chantier/[jeton]/photo/[photo] — seulement une photo du job de ce jeton (chantier ou appel de service). */
import { type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { privateFileResponse } from "@/lib/gestion/partenaires/files";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { photoForToken } from "@/lib/gestion/terrain/service";

export const dynamic = "force-dynamic";

const PHOTO_RE = /^[fv]_[A-Za-z0-9_-]{8,16}$/;

export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string; photoId: string }> }) {
  const { token, photoId } = await params;
  if (!voletLimits.chantierView.hit(ipFromHeaders(req.headers))) return new Response(null, { status: 429 });
  if (!TOKEN_RE.test(token) || !PHOTO_RE.test(photoId)) return new Response(null, { status: 404 });
  const found = await photoForToken(token, photoId);
  return found ? privateFileResponse(found.data, found.ext) : new Response(null, { status: 404 });
}
