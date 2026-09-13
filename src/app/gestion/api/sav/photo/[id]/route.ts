/* GET /gestion/api/sav/photo/[id] — photo d'un billet de service, propriétaire connecté seulement. */
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { privateFileResponse } from "@/lib/gestion/partenaires/files";
import { ticketPhotoForAdmin } from "@/lib/gestion/sav/service";
import { TICKET_PHOTO_ID_RE } from "@/lib/gestion/sav/types";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return unauthorizedJson();
  const { id } = await params;
  const f = TICKET_PHOTO_ID_RE.test(id) ? await ticketPhotoForAdmin(id) : null;
  return f ? privateFileResponse(f.data, f.ext, { maxAge: 86400 }) : new Response(null, { status: 404 });
}
