/* ==================================================================
   POST /approbation/[jeton]/repondre — réponse de l'installateur :
   approuver (avec la date confirmée ou proposée), demander un
   changement, refuser ; approuver ou refuser un avenant. Formulaire
   HTML ordinaire ; origine vérifiée, débit limité, IP et navigateur
   notés avec l'approbation. Retour 303 vers la page.
   ================================================================== */
import { NextResponse, type NextRequest } from "next/server";
import { contratLimits } from "@/lib/contrats/limits";
import { answerAvenantAsInstaller, approveAsInstaller, declineAsInstaller } from "@/lib/contrats/service";
import type { DateChoice } from "@/lib/contrats/types";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

function dateChoiceOf(form: FormData): DateChoice | null {
  const kind = String(form.get("date") ?? "");
  if (kind === "confirme") return { kind: "confirme" };
  if (kind !== "autre") return null;
  const mode = String(form.get("mode") ?? "") === "fenetre" ? "fenetre" : "date";
  const g = (k: string) => String(form.get(k) ?? "").slice(0, 10);
  return { kind: "autre", mode, date: g("d"), windowStart: g("d1"), windowEnd: g("d2"), note: String(form.get("note") ?? "").slice(0, 300) };
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return text("Lien invalide.", 404);
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  const ip = ipFromHeaders(req.headers);
  if (!contratLimits.write.hit(ip)) return text("Trop de tentatives. Réessayez dans quelques minutes.", 429);
  const form = await req.formData().catch(() => null);
  if (!form) return text("Réponse manquante.", 400);
  const base = baseUrlFromHeaders(req.headers);
  const ua = (req.headers.get("user-agent") ?? "").slice(0, 400);
  const decision = String(form.get("decision") ?? "");
  const get = (k: string, max: number) => String(form.get(k) ?? "").slice(0, max);
  let result: { ok: boolean; code?: string; error?: string };
  let done = "";
  if (decision === "approuver") {
    result = await approveAsInstaller(token, { name: get("name", 200), title: get("title", 120), authorized: get("authorized", 2) === "1", dateChoice: dateChoiceOf(form), postedSha256: get("sha", 64), ip, userAgent: ua }, { baseUrl: base });
    done = "approuve";
  } else if (decision === "changements" || decision === "refuser") {
    result = await declineAsInstaller(token, decision === "changements" ? "changements" : "refus", get("message", 2000), { baseUrl: base });
    done = decision === "changements" ? "changements" : "refuse";
  } else if (decision === "avenant-approuver" || decision === "avenant-refuser") {
    result = await answerAvenantAsInstaller(token, get("avenant", 40), { approve: decision === "avenant-approuver", name: get("name", 200), title: get("title", 120), authorized: get("authorized", 2) === "1", postedSha256: get("sha", 64), reason: get("raison", 600), ip, userAgent: ua }, { baseUrl: base });
    done = "avenant";
  } else return text("Réponse inconnue.", 400);
  const url = new URL(`/approbation/${encodeURIComponent(token)}`, base);
  if (result.ok) url.searchParams.set("r", done);
  else {
    url.searchParams.set("e", result.code ?? "erreur");
    if (result.code === "bloque" && result.error) url.searchParams.set("m", result.error.slice(0, 600));
  }
  return NextResponse.redirect(url, 303);
}

export function GET() {
  return text("Méthode non permise.", 405);
}
