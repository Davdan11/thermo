/* POST /devis/[jeton]/vue — consultation notée (date, compteur, navigateur ; aucune adresse IP). Envoyée par la page
   une fois affichée : pas de pixel de suivi dans les courriels. Origine vérifiée, débit limité. Un GET ne fait rien. */
import { NextResponse, type NextRequest } from "next/server";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { devisLimiters } from "@/lib/soumissions/rate-limit";
import { recordClientView } from "@/lib/soumissions/service";
import { TOKEN_RE } from "@/lib/soumissions/tokens";

export const dynamic = "force-dynamic";

const empty = (status: number) => new NextResponse(null, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isSameOrigin(req)) return empty(403);
  if (!devisLimiters.beacon.hit(ipFromHeaders(req.headers))) return empty(429);
  if (!TOKEN_RE.test(token)) return empty(404);
  const r = await recordClientView(token, req.headers.get("user-agent") ?? "", baseUrlFromHeaders(req.headers));
  return empty(r.recorded ? 204 : 404);
}

export function GET() {
  return empty(405);
}
