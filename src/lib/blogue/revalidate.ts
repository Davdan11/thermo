/* ==================================================================
   Revalidation à la demande (ISR) : après une publication, une
   modification ou un retrait, les pages publiques concernées sont
   régénérées à la visite suivante. Aucun rebuild.
   ================================================================== */

import { revalidatePath } from "next/cache";
import { articlePath } from "./types";

/** Pages touchées par un article : la liste, l'article, le flux RSS, le plan du site du blogue et son index. */
export function articlePaths(slug: string): string[] {
  return ["/blogue", articlePath(slug), "/blogue/rss.xml", "/sitemap/blogue.xml", "/sitemap-index.xml"];
}

export type Revalidator = (path: string) => void;

export function revalidateArticle(slug: string, fn: Revalidator = (p) => revalidatePath(p)): string[] {
  const done: string[] = [];
  for (const p of articlePaths(slug)) {
    try {
      fn(p);
      done.push(p);
    } catch (err) {
      // Hors d'un serveur Next (script, test) : rien à invalider.
      console.warn(`[blogue] revalidation impossible (${p}) :`, err instanceof Error ? err.message : err);
    }
  }
  return done;
}
