/* Fichier de clé IndexNow : /<INDEXNOW_KEY>.txt est réécrit ici (next.config.ts, réécriture « fallback » :
   les fichiers de public/ et les pages passent avant). Répond la clé en texte brut seulement si elle
   correspond à INDEXNOW_KEY ; sinon 404. La clé est publique par nature, mais jamais dans le dépôt. */

import { indexNowKey } from "@/lib/seo/indexnow";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ cle: string }> }) {
  const { cle } = await params;
  const key = indexNowKey();
  if (!key || cle !== key) {
    return new Response("Introuvable", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
  }
  return new Response(key, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
