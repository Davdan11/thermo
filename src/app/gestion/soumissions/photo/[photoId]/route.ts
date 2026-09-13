/* GET /gestion/soumissions/photo/[photo] — photo du chantier ou logo, pour le propriétaire connecté seulement. */
import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { PHOTO_ID_RE, photoResponse } from "@/lib/soumissions/photos";
import { adminPhoto } from "@/lib/soumissions/service";

export const dynamic = "force-dynamic";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ photoId: string }> }) {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  const { photoId } = await params;
  if (!PHOTO_ID_RE.test(photoId)) return new NextResponse(null, { status: 404 });
  const found = await adminPhoto(photoId);
  if (!found) return new NextResponse(null, { status: 404 });
  return photoResponse(found.meta, found.data, "private");
}
