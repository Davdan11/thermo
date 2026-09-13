/* POST /identite/[jeton]/envoyer — le partenaire envoie l'identité légale de son entreprise (formulaire HTML ordinaire).
   Origine vérifiée, débit limité, un seul envoi par lien, puis retour 303 vers la page. Un GET ne fait rien. */
import { NextResponse, type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { identityLimits, submitIdentity } from "@/lib/gestion/partenaires/identity";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export function GET() {
  return new Response(null, { status: 405, headers: { Allow: "POST" } });
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return text("Lien invalide.", 404);
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  const ip = ipFromHeaders(req.headers);
  if (!identityLimits.write.hit(ip)) return text("Trop de tentatives. Réessayez dans quelques minutes.", 429);
  const form = await req.formData().catch(() => null);
  const get = (k: string, max = 400) => String(form?.get(k) ?? "").slice(0, max);
  const base = baseUrlFromHeaders(req.headers);
  const r = await submitIdentity(
    token,
    {
      legalName: get("legalName"),
      tradeName: get("tradeName"),
      neq: get("neq"),
      address: get("address"),
      city: get("city"),
      postalCode: get("postalCode"),
      phone: get("phone"),
      email: get("email"),
      tps: get("tps"),
      tvq: get("tvq"),
      rbqDeclared: get("rbqDeclared"),
      confirm: get("confirm", 2) === "1",
    },
    { baseUrl: base },
  );
  const url = new URL(`/identite/${encodeURIComponent(token)}`, base);
  if (r.ok) url.searchParams.set("r", "recu");
  else url.searchParams.set("e", r.error);
  return NextResponse.redirect(url, 303);
}
