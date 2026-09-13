/* Adresses du plan du site pour IndexNow, lues dans le code (mêmes fonctions que /sitemap/[id].xml),
   sans aucune requête vers le site : chaque segment de sitemapIds(), dans l'ordre, sans doublon. */

import sitemap from "@/app/sitemap";
import { sitemapIds } from "@/lib/seo/sitemaps";
import type { SitemapEntry } from "./indexnow";

export async function collectSitemapEntries(): Promise<SitemapEntry[]> {
  const out = new Map<string, SitemapEntry>();
  for (const id of sitemapIds()) {
    for (const e of await sitemap({ id: Promise.resolve(id) })) {
      const lm = e.lastModified instanceof Date ? e.lastModified.toISOString() : e.lastModified;
      out.set(e.url, lm ? { url: e.url, lastmod: String(lm).slice(0, 10) } : { url: e.url });
    }
  }
  return [...out.values()];
}
