/* POST /gestion/api/sav/photos — photos ajoutées à un billet par le propriétaire (signalement ou résolution).
   Session et origine vérifiées, 12 Mo au plus par photo, retour 303 vers le billet. */
import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { isSameOrigin } from "@/lib/gestion/origin";
import { MAX_IMAGE_BYTES } from "@/lib/gestion/partenaires/files";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { addTicketPhotos } from "@/lib/gestion/sav/service";
import { TICKET_ID_RE } from "@/lib/gestion/sav/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  if (!isSameOrigin(req)) return new NextResponse("Origine inconnue.", { status: 403 });
  const form = await req.formData().catch(() => null);
  const ticketId = String(form?.get("ticketId") ?? "");
  if (!TICKET_ID_RE.test(ticketId)) return new NextResponse("Demande invalide.", { status: 400 });
  const kind = form?.get("kind") === "resolution" ? "resolution" : "signalement";
  const url = new URL(`/gestion/sav/${ticketId}`, baseUrlFromHeaders(req.headers));
  const bufs: Buffer[] = [];
  for (const f of form?.getAll("photos") ?? []) {
    if (!(f instanceof File) || f.size === 0) continue;
    if (f.size > MAX_IMAGE_BYTES) {
      url.searchParams.set("erreur", "Photo trop lourde (12 Mo au plus).");
      return NextResponse.redirect(url, 303);
    }
    bufs.push(Buffer.from(await f.arrayBuffer()));
  }
  if (!bufs.length) {
    url.searchParams.set("erreur", "Aucune photo choisie.");
    return NextResponse.redirect(url, 303);
  }
  const r = await addTicketPhotos(ticketId, bufs.slice(0, 6), kind, session.email);
  url.searchParams.set(r.ok ? "ok" : "erreur", r.ok ? `${r.count} photo${r.count > 1 ? "s" : ""} ajoutée${r.count > 1 ? "s" : ""}.` : r.error);
  return NextResponse.redirect(url, 303);
}
