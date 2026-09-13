/* GET /gestion/api/partenaires/fichier/[id] — document de conformité (licence RBQ, certificat d'assurance) ou
   signature tracée, propriétaire connecté seulement. Jamais dans public/. */
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { privateFileResponse } from "@/lib/gestion/partenaires/files";
import { readPartnerFile } from "@/lib/gestion/partenaires/service";
import { FILE_ID_RE } from "@/lib/gestion/partenaires/types";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return unauthorizedJson();
  const { id } = await params;
  const f = FILE_ID_RE.test(id) ? await readPartnerFile(id) : null;
  if (!f) return new Response(null, { status: 404 });
  return privateFileResponse(f.data, f.ext, { maxAge: 600 });
}
