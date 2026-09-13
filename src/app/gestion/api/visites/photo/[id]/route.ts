/* GET /gestion/api/visites/photo/[id] — Chantier D : photo d'une visite à distance, propriétaire connecté seulement. */
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { privateFileResponse } from "@/lib/gestion/partenaires/files";
import { adminVisitPhoto } from "@/lib/visites/service";
import { VISIT_PHOTO_ID_RE } from "@/lib/visites/types";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return unauthorizedJson();
  const { id } = await params;
  const f = VISIT_PHOTO_ID_RE.test(id) ? await adminVisitPhoto(id) : null;
  return f ? privateFileResponse(f.data, f.ext, { maxAge: 86400 }) : new Response(null, { status: 404 });
}
