/* POST /approbation/[jeton]/vue — signal d'ouverture envoyé par la page affichée dans un vrai navigateur. Rien d'autre. */
import { type NextRequest } from "next/server";
import { contratLimits } from "@/lib/contrats/limits";
import { markApprovalOpened } from "@/lib/contrats/service";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (TOKEN_RE.test(token) && isSameOrigin(req) && contratLimits.write.hit(ipFromHeaders(req.headers))) await markApprovalOpened(token);
  return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
}
