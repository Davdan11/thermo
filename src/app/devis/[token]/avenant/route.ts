/* Conformité C1 — POST /devis/[jeton]/avenant : le client signe (ou refuse) un avenant, AVANT l'exécution des travaux
   qu'il vise. Même preuve que le contrat (nom tapé, horodatage, IP, navigateur, empreinte). 303 vers la page. */
import { NextResponse, type NextRequest } from "next/server";
import { contratLimits } from "@/lib/contrats/limits";
import { answerAvenantAsClient } from "@/lib/contrats/service";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { TOKEN_RE } from "@/lib/soumissions/tokens";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return text("Lien invalide.", 404);
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  const ip = ipFromHeaders(req.headers);
  if (!contratLimits.write.hit(ip)) return text("Trop de requêtes. Réessayez dans quelques minutes.", 429);
  const form = await req.formData().catch(() => null);
  if (!form) return text("Réponse manquante.", 400);
  const get = (k: string, max = 200) => String(form.get(k) ?? "").slice(0, max);
  const base = baseUrlFromHeaders(req.headers);
  const r = await answerAvenantAsClient(token, get("avenant", 40), { approve: get("decision", 20) === "signer", typedName: get("nom"), postedSha256: get("sha", 64), reason: get("raison", 600), ip, userAgent: (req.headers.get("user-agent") ?? "").slice(0, 400) }, { baseUrl: base });
  const url = new URL(`/devis/${encodeURIComponent(token)}`, base);
  if (r.ok) url.searchParams.set("r", "avenant");
  else url.searchParams.set("e", r.code ?? "erreur");
  url.hash = "avenants";
  return NextResponse.redirect(url, 303);
}

export function GET() {
  return text("Méthode non permise.", 405);
}
