/* ==================================================================
   Conformité C1 — POST /devis/[jeton]/signer : le client signe le
   contrat final (seulement après l'approbation de l'installateur),
   le refuse, ou demande un autre installateur. Formulaire ordinaire ;
   origine vérifiée, débit limité, IP et navigateur notés. 303.
   ================================================================== */
import { NextResponse, type NextRequest } from "next/server";
import { contratLimits } from "@/lib/contrats/limits";
import { refuseContract, signContract } from "@/lib/contrats/service";
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
  const ua = (req.headers.get("user-agent") ?? "").slice(0, 400);
  const decision = get("decision", 30);
  let r: { ok: boolean; code?: string };
  let done: string;
  if (decision === "signer") {
    const totalRaw = get("total", 14);
    r = await signContract(
      token,
      {
        typedName: get("nom"),
        confirmations: form.getAll("confirmation").map((x) => Number(x)).filter((n) => Number.isInteger(n) && n >= 0 && n < 50),
        selection: form.getAll("options").map(String).slice(0, 100),
        client: { firstName: get("c_firstName"), lastName: get("c_lastName"), email: get("c_email"), phone: get("c_phone"), address: get("c_address"), city: get("c_city"), postalCode: get("c_postalCode") },
        site: { sameAsBilling: get("s_same", 2) === "1", address: get("s_address"), city: get("s_city"), postalCode: get("s_postalCode") },
        postedSha256: get("sha", 64),
        postedTotalCents: /^\d{1,12}$/.test(totalRaw) ? Number(totalRaw) : null,
        ip,
        userAgent: ua,
      },
      { baseUrl: base },
    );
    done = "signe";
  } else if (decision === "refuser" || decision === "autre-installateur") {
    r = await refuseContract(token, decision === "refuser" ? "refus" : "autre-installateur", get("raison", 1000), { ip, userAgent: ua }, { baseUrl: base });
    done = decision === "refuser" ? "refuse" : "autre";
  } else return text("Réponse inconnue.", 400);
  const url = new URL(`/devis/${encodeURIComponent(token)}`, base);
  if (r.ok) url.searchParams.set("r", done);
  else url.searchParams.set("e", r.code ?? "erreur");
  url.hash = r.ok ? "" : "signature";
  return NextResponse.redirect(url, 303);
}

export function GET() {
  return text("Méthode non permise.", 405);
}
