/* POST /service/[jeton]/envoyer — signalement du client (description + jusqu'à 4 photos). Origine vérifiée, débit
   limité, photos validées (type, taille) et réencodées sans métadonnées ; retour 303 vers la page. */
import { NextResponse, type NextRequest } from "next/server";
import { TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { MAX_IMAGE_BYTES } from "@/lib/gestion/partenaires/files";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { isSameOrigin } from "@/lib/gestion/origin";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { clientReport } from "@/lib/gestion/sav/service";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!TOKEN_RE.test(token)) return text("Lien invalide.", 404);
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  if (!voletLimits.serviceWrite.hit(ipFromHeaders(req.headers))) return text("Trop d’envois. Réessayez plus tard ou appelez-nous au 438-900-3224.", 429);
  const base = baseUrlFromHeaders(req.headers);
  const back = (params: Record<string, string>) => {
    const url = new URL(`/service/${encodeURIComponent(token)}`, base);
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
    return NextResponse.redirect(url, 303);
  };
  const form = await req.formData().catch(() => null);
  if (!form) return back({ e: "erreur" });
  const description = String(form.get("description") ?? "").slice(0, 3000);
  if (description.trim().length < 5) return back({ e: "description" });
  const photos: Buffer[] = [];
  for (const f of form.getAll("photos").slice(0, 4)) {
    if (!(f instanceof Blob) || f.size === 0) continue;
    if (f.size > MAX_IMAGE_BYTES) return back({ e: "photo" });
    photos.push(Buffer.from(await f.arrayBuffer()));
  }
  const r = await clientReport(token, { description, contactPreference: String(form.get("contactPreference") ?? "").slice(0, 200) }, photos, base);
  return r.ok ? back({ r: "envoye", n: String(r.number) }) : back({ e: /photo|image|format/i.test(r.error) ? "photo" : "erreur" });
}
