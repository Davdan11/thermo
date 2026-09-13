/* Conformité C1 — POST /chantier/[jeton]/avenant/creer : avenant préparé et approuvé par l'installateur depuis sa page de
   chantier ; le client le signe ensuite, avant l'exécution. Origine vérifiée, débit limité ; 303 vers la page. */
import { NextResponse, type NextRequest } from "next/server";
import { contratLimits } from "@/lib/contrats/limits";
import { createAvenant, fieldContract } from "@/lib/contrats/service";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { parseMoney } from "@/lib/soumissions/money";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return text("Lien invalide.", 404);
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  const ip = ipFromHeaders(req.headers);
  if (!contratLimits.write.hit(ip)) return text("Trop de requêtes. Réessayez dans quelques minutes.", 429);
  const fc = await fieldContract(token);
  if (!fc) return text("Aucun contrat signé pour ce chantier.", 404);
  const form = await req.formData().catch(() => null);
  if (!form) return text("Réponse manquante.", 400);
  const get = (k: string, max = 600) => String(form.get(k) ?? "").trim().slice(0, max);
  const lines = [1, 2, 3]
    .map((i) => ({ label: get(`l${i}_label`, 160), cents: parseMoney(get(`l${i}_amount`, 20)), minus: form.get(`l${i}_minus`) === "1" }))
    .filter((l) => l.label || l.cents !== null)
    .map((l) => ({ label: l.label, amountCents: l.cents === null ? 0 : l.minus ? -Math.abs(l.cents) : l.cents }));
  const base = baseUrlFromHeaders(req.headers);
  const url = new URL(`/chantier/${encodeURIComponent(token)}/avenant`, base);
  if (get("authorized", 2) !== "1") {
    url.searchParams.set("e", "Cochez la case d’autorisation.");
    return NextResponse.redirect(url, 303);
  }
  const r = await createAvenant(
    {
      quoteId: fc.quoteId,
      by: `installateur:${fc.installerId}`,
      draft: { reason: get("reason"), added: get("added", 1000), removed: get("removed", 1000), lines, scheduleEffect: get("schedule", 300) },
      installerApproval: { name: get("name", 120), title: get("title", 80), ip, userAgent: (req.headers.get("user-agent") ?? "").slice(0, 400) },
    },
    { baseUrl: base },
  );
  if (r.ok) url.searchParams.set("r", "ok");
  else url.searchParams.set("e", r.error.slice(0, 400));
  return NextResponse.redirect(url, 303);
}

export function GET() {
  return text("Méthode non permise.", 405);
}
