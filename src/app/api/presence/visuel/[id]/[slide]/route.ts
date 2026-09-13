/* ==================================================================
   GET /api/presence/visuel/<id>/<diapositive|story>?f=…&r=…&e=…&s=…
   Visuels des publications (PNG 1080 × 1350 ou 1080 × 1920).
   Publique : Meta télécharge les images depuis cette adresse. Mais
   signée : HMAC-SHA256 (src/lib/presence/signing.ts) sur l'identifiant,
   la diapositive, le format, la version et l'expiration. Sans signature
   valide et non expirée, rien n'est rendu.
   Jamais indexée (X-Robots-Tag) ; mise en cache (le contenu d'une
   version donnée ne change pas).
   ================================================================== */

import { readPresence } from "@/lib/presence/store";
import { parseSlot, verifyVisual, visualKey, type VisualParams } from "@/lib/presence/signing";
import { renderSlidePng, slideFor } from "@/lib/presence/render";
import { POST_ID_RE } from "@/lib/presence/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex, nofollow, noimageindex, noarchive" };

function refuse(status: number, message: string): Response {
  return new Response(message, { status, headers: { ...NOINDEX, "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string; slide: string }> }) {
  const { id, slide } = await params;
  const q = new URL(request.url).searchParams;
  const slot = parseSlot(slide);
  const format = q.get("f");
  const rev = Number(q.get("r"));
  const exp = Number(q.get("e"));
  if (!POST_ID_RE.test(id) || slot === null || (format !== "carrousel" && format !== "story") || !Number.isInteger(rev) || !Number.isInteger(exp)) return refuse(400, "Adresse invalide.");
  if ((slot === "story") !== (format === "story")) return refuse(400, "Adresse invalide.");

  const p: VisualParams = { id, slot, format, rev, exp };
  const check = verifyVisual(p, q.get("s"), await visualKey());
  if (check === "invalide") return refuse(403, "Signature invalide.");
  if (check === "expire") return refuse(410, "Adresse expirée.");

  const post = (await readPresence()).posts.find((x) => x.id === id);
  if (!post || post.rev !== rev || !slideFor(post, slot)) return refuse(404, "Visuel introuvable ou remplacé.");

  try {
    const png = await renderSlidePng(post, slot);
    return new Response(new Uint8Array(png), {
      headers: {
        ...NOINDEX,
        "Content-Type": "image/png",
        "Content-Length": String(png.length),
        "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable",
      },
    });
  } catch (err) {
    console.error("[presence] rendu du visuel impossible :", err instanceof Error ? err.message : err);
    return refuse(500, "Rendu impossible.");
  }
}
