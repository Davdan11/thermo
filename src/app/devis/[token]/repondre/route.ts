/* ==================================================================
   POST /devis/[jeton]/repondre — Accepter, Refuser ou poser une
   question. Formulaire HTML ordinaire (fonctionne sans JavaScript).
   Origine vérifiée, débit limité ; l'IP et le navigateur sont notés
   avec l'acceptation. Retour (303) vers la soumission. Un GET ne fait
   rien (405).
   ================================================================== */
import { NextResponse, type NextRequest } from "next/server";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { devisLimiters } from "@/lib/soumissions/rate-limit";
import { respondToQuote, type RespondAction } from "@/lib/soumissions/service";
import { TOKEN_RE } from "@/lib/soumissions/tokens";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
// Conformité C1 : « jumelage » (Je veux aller de l'avant, case 3.1) ; « accepter » est refusé par le service.
const ACTIONS: RespondAction[] = ["accepter", "refuser", "question", "jumelage"];

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  const ip = ipFromHeaders(req.headers);
  if (!devisLimiters.respond.hit(ip)) return text("Trop de requêtes. Réessayez dans quelques minutes.", 429);
  if (!TOKEN_RE.test(token)) return text("Lien invalide.", 404);
  const form = await req.formData().catch(() => null);
  const decision = String(form?.get("decision") ?? "") as RespondAction;
  if (!form || !ACTIONS.includes(decision)) return text("Réponse manquante.", 400);
  const totalRaw = String(form.get("total") ?? "");
  const hash = String(form.get("hash") ?? "");
  const base = baseUrlFromHeaders(req.headers);
  const result = await respondToQuote(
    token,
    decision,
    {
      selection: form.getAll("options").map(String).slice(0, 100),
      typedName: String(form.get("nom") ?? "").slice(0, 200),
      termsAccepted: form.get("conditions") === "oui",
      reason: String(form.get("raison") ?? "").slice(0, 1000),
      message: String(form.get("message") ?? "").slice(0, 2000),
      postedTotalCents: /^\d{1,12}$/.test(totalRaw) ? Number(totalRaw) : null,
      postedHash: /^[0-9a-f]{64}$/.test(hash) ? hash : null,
      ip,
      userAgent: (req.headers.get("user-agent") ?? "").slice(0, 400),
      jumelageChecked: form.get("jumelage") === "oui", // Conformité C1
    },
    base,
  );
  const url = new URL(`/devis/${encodeURIComponent(token)}`, base);
  if (result.ok) url.searchParams.set("r", result.state);
  else {
    url.searchParams.set("r", "erreur");
    url.searchParams.set("c", result.code);
  }
  url.hash = "acceptation";
  return NextResponse.redirect(url, 303);
}

export function GET() {
  return text("Méthode non permise.", 405);
}
