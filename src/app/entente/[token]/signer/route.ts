/* POST /entente/[jeton]/signer — signature de l'entente (formulaire HTML ordinaire). Origine vérifiée, débit limité,
   preuve conservée (horodatage, version, IP, navigateur, SHA-256 du texte signé, image), puis retour 303 vers la page. */
import { NextResponse, type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { signAgreement } from "@/lib/gestion/partenaires/service";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return text("Lien invalide.", 404);
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  const ip = ipFromHeaders(req.headers);
  if (!voletLimits.ententeWrite.hit(ip)) return text("Trop de tentatives. Réessayez dans quelques minutes.", 429);
  const form = await req.formData().catch(() => null);
  const get = (k: string, max: number) => String(form?.get(k) ?? "").slice(0, max);
  const base = baseUrlFromHeaders(req.headers);
  const result = await signAgreement(
    token,
    {
      name: get("signerName", 200),
      title: get("signerTitle", 200),
      authorized: get("authorized", 2) === "1",
      accepted: get("accepted", 2) === "1",
      method: get("method", 10) === "trace" ? "trace" : "nom",
      image: get("image", 600_000),
      textSha256: get("textSha256", 64),
    },
    { ip, userAgent: req.headers.get("user-agent") ?? "", baseUrl: base },
  );
  const url = new URL(`/entente/${encodeURIComponent(token)}`, base);
  if (result.ok) url.searchParams.set("r", "signee");
  else url.searchParams.set("e", result.error);
  url.hash = "signer";
  return NextResponse.redirect(url, 303);
}
