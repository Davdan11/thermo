/* GET /gestion/api/partenaires/document/[signature] — document signé (HTML imprimable), propriétaire connecté seulement. */
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { documentHeaders } from "@/lib/gestion/partenaires/http";
import { signedDocumentHtml } from "@/lib/gestion/partenaires/service";
import { SIGNATURE_ID_RE } from "@/lib/gestion/partenaires/types";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return unauthorizedJson();
  const { id } = await params;
  const html = SIGNATURE_ID_RE.test(id) ? await signedDocumentHtml(id) : null;
  if (!html) return new Response("Document introuvable.", { status: 404, headers: { "Cache-Control": "no-store" } });
  return new Response(html, { headers: documentHeaders() });
}
