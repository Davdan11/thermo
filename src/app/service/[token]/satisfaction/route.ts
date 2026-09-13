/* POST /service/[jeton]/satisfaction — le client confirme (ou non) qu'un appel de service est réglé. */
import { NextResponse, type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { clientSatisfaction } from "@/lib/gestion/sav/service";
import { TICKET_ID_RE } from "@/lib/gestion/sav/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return new NextResponse("Lien invalide.", { status: 404 });
  if (!isSameOrigin(req)) return new NextResponse("Requête refusée : origine inconnue.", { status: 403 });
  if (!voletLimits.serviceWrite.hit(ipFromHeaders(req.headers))) return new NextResponse("Trop d’envois.", { status: 429 });
  const form = await req.formData().catch(() => null);
  const ticketId = String(form?.get("ticketId") ?? "");
  const url = new URL(`/service/${encodeURIComponent(token)}`, baseUrlFromHeaders(req.headers));
  if (!TICKET_ID_RE.test(ticketId)) {
    url.searchParams.set("e", "erreur");
    return NextResponse.redirect(url, 303);
  }
  const r = await clientSatisfaction(token, ticketId, String(form?.get("satisfied") ?? "") === "1", String(form?.get("note") ?? "").slice(0, 1000));
  url.searchParams.set(r.ok ? "r" : "e", r.ok ? "merci" : "erreur");
  return NextResponse.redirect(url, 303);
}
