/* GET /gestion/soumissions/photo/[photo] — photo du chantier ou logo, pour le propriétaire connecté seulement. */
import { NextResponse, type NextRequest } from "next/server";
import { getUserSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
// Chantier V : un vendeur voit le logo de l'entreprise et les photos de SES soumissions (ou celles qu'il a téléversées).
import { mayQuote } from "@/lib/gestion/equipe/garde";
import { readSettings } from "@/lib/soumissions/store";
import { PHOTO_ID_RE, photoResponse } from "@/lib/soumissions/photos";
import { adminPhoto } from "@/lib/soumissions/service";

export const dynamic = "force-dynamic";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ photoId: string }> }) {
  const session = await getUserSession(); // Chantier V
  if (!session) return unauthorizedJson();
  const { photoId } = await params;
  if (!PHOTO_ID_RE.test(photoId)) return new NextResponse(null, { status: 404 });
  const found = await adminPhoto(photoId);
  if (!found) return new NextResponse(null, { status: 404 });
  if (session.role === "vendeur") {
    const logo = (await readSettings()).company.logoId === photoId;
    const mine = found.meta.quoteId ? await mayQuote(session, found.meta.quoteId) : found.meta.createdBy.toLowerCase() === session.email.toLowerCase();
    if (!logo && !mine) return new NextResponse(null, { status: 404 });
  }
  return photoResponse(found.meta, found.data, "private");
}
