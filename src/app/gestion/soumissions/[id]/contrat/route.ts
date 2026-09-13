/* Conformité C1 — GET /gestion/soumissions/[id]/contrat : document conservable du contrat (dernier contrat, ou ?c=<id>),
   avec la preuve vérifiée. Session exigée ; un vendeur ne voit que ses soumissions. Aucun script, jamais indexé. */
import { type NextRequest } from "next/server";
import { getUserSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { mayQuote } from "@/lib/gestion/equipe/garde";
import { documentHeaders } from "@/lib/gestion/partenaires/http";
import { contractDocumentForQuote } from "@/lib/contrats/service";
import { QUOTE_ID_RE } from "@/lib/soumissions/quote";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getUserSession();
  if (!session) return unauthorizedJson();
  const { id } = await params;
  if (!QUOTE_ID_RE.test(id) || !(await mayQuote(session, id))) return new Response("Introuvable.", { status: 404 });
  const c = req.nextUrl.searchParams.get("c");
  const html = await contractDocumentForQuote(id, c && /^cs_[A-Za-z0-9_-]{8,16}$/.test(c) ? c : null);
  if (!html) return new Response("Aucun contrat pour cette soumission.", { status: 404, headers: { "Cache-Control": "no-store" } });
  return new Response(html, { headers: documentHeaders() });
}
