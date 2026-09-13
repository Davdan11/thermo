/* GET /devis/[jeton]/photo/[photo] — photo du chantier, seulement si le document de cette version la contient. Lecture seule. */
import { NextResponse, type NextRequest } from "next/server";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { PHOTO_ID_RE, photoResponse } from "@/lib/soumissions/photos";
import { devisLimiters } from "@/lib/soumissions/rate-limit";
import { clientPhoto } from "@/lib/soumissions/service";
import { TOKEN_RE } from "@/lib/soumissions/tokens";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string; photoId: string }> }) {
  const { token, photoId } = await params;
  if (!devisLimiters.photo.hit(ipFromHeaders(req.headers))) return new NextResponse(null, { status: 429 });
  if (!TOKEN_RE.test(token) || !PHOTO_ID_RE.test(photoId)) return new NextResponse(null, { status: 404 });
  const found = await clientPhoto(token, photoId);
  if (!found) return new NextResponse(null, { status: 404 });
  return photoResponse(found.meta, found.data, "client");
}
