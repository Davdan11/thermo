/* GET /gestion/api/terrain/photo/[id] — photo de chantier ou signature du client, propriétaire connecté seulement. */
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { privateFileResponse } from "@/lib/gestion/partenaires/files";
import { fieldFileForAdmin } from "@/lib/gestion/terrain/service";

export const dynamic = "force-dynamic";

const ID = /^[fg]_[A-Za-z0-9_-]{8,16}$/;

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return unauthorizedJson();
  const { id } = await params;
  const f = ID.test(id) ? await fieldFileForAdmin(id) : null;
  return f ? privateFileResponse(f.data, f.ext, { maxAge: 86400 }) : new Response(null, { status: 404 });
}
