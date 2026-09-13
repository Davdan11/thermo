/* Conformité C1 — GET /devis/[jeton]/contrat : copie conservable et imprimable du contrat signé (HTML autonome, même
   procédé que l'entente du volet A : « Imprimer », puis « Enregistrer en PDF »). Aucun script, jamais indexée. */
import { type NextRequest } from "next/server";
import { contratLimits } from "@/lib/contrats/limits";
import { contractDocumentForToken } from "@/lib/contrats/service";
import { documentHeaders } from "@/lib/gestion/partenaires/http";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { TOKEN_RE } from "@/lib/soumissions/tokens";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!contratLimits.view.hit(ipFromHeaders(req.headers))) return new Response("Trop de visites.", { status: 429 });
  const html = TOKEN_RE.test(token) ? await contractDocumentForToken(token) : null;
  if (!html) return new Response("Document introuvable.", { status: 404, headers: { "Cache-Control": "no-store" } });
  return new Response(html, { headers: documentHeaders() });
}
