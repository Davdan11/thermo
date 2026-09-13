/* GET /entente/[jeton]/document — le document signé (HTML imprimable), pour le partenaire qui a le lien. Aucun script
   autorisé (politique de sécurité), jamais indexé, jamais dans un cache partagé. */
import { type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { documentHeaders } from "@/lib/gestion/partenaires/http";
import { signedDocumentForToken } from "@/lib/gestion/partenaires/service";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!voletLimits.ententeView.hit(ipFromHeaders(req.headers))) return new Response("Trop de visites.", { status: 429 });
  const html = TOKEN_RE.test(token) ? await signedDocumentForToken(token) : null;
  if (!html) return new Response("Document introuvable.", { status: 404, headers: { "Cache-Control": "no-store" } });
  return new Response(html, { headers: documentHeaders() });
}
