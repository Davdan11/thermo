/* ==================================================================
   /blogue/images/<fichier>.webp — images téléversées pour les articles
   (dossier des données, hors dépôt). Nom aléatoire vérifié, lecture
   seule, cache long (le contenu d'un nom ne change jamais).
   ================================================================== */

import { readUploadedImage } from "@/lib/blogue/images";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const buf = await readUploadedImage(file);
  if (!buf) return new Response("Image introuvable.", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
  return new Response(new Uint8Array(buf), {
    headers: { "Content-Type": "image/webp", "Content-Length": String(buf.length), "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
