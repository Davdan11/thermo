/* ==================================================================
   Annonce des adresses publiées aux moteurs de recherche.

   Annonceur branché : IndexNow (src/lib/seo/indexnow.ts), avec la clé INDEXNOW_KEY.

   Rien d'autre à changer : chaque publication, modification ou retrait
   d'un article appelle announceUrls() avec ses adresses absolues.
   Garde-fous : aucun appel hors production (NODE_ENV=production), une
   erreur d'un annonceur n'empêche jamais la publication.
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { indexNowKey, submitIndexNow } from "@/lib/seo/indexnow";

export interface UrlAnnouncer {
  name: string;
  announce: (urls: string[]) => Promise<void>;
}

/** Annonceurs branchés : IndexNow (Bing et autres), avec la clé INDEXNOW_KEY du serveur. Une erreur n'empêche jamais la publication. */
export const ANNOUNCERS: UrlAnnouncer[] = [
  {
    name: "IndexNow",
    announce: async (urls) => {
      const key = indexNowKey();
      if (!key) throw new Error("INDEXNOW_KEY absente : annonce non envoyée.");
      const r = await submitIndexNow(urls, { key, siteUrl: SITE_URL });
      if (r.simulated) return;
      const refused = r.batches.filter((b) => !b.ok);
      if (refused.length) throw new Error(`IndexNow a refusé ${refused.length} lot(s) : ${refused.map((b) => b.note).join(", ")}`);
    },
  },
];

export interface AnnounceResult {
  sent: string[];
  skipped?: string;
  errors: Array<{ name: string; error: string }>;
}

export async function announceUrls(urls: string[], opts: { env?: Record<string, string | undefined>; announcers?: UrlAnnouncer[] } = {}): Promise<AnnounceResult> {
  const env = opts.env ?? process.env;
  const list = opts.announcers ?? ANNOUNCERS;
  const clean = [...new Set(urls.filter((u) => /^https?:\/\//.test(u)))];
  if (env.NODE_ENV !== "production") return { sent: [], skipped: "Hors production : aucune annonce envoyée.", errors: [] };
  if (list.length === 0) return { sent: [], skipped: "Aucun annonceur branché (IndexNow : voir src/lib/blogue/diffusion.ts).", errors: [] };
  if (clean.length === 0) return { sent: [], skipped: "Aucune adresse à annoncer.", errors: [] };
  const errors: AnnounceResult["errors"] = [];
  const sent: string[] = [];
  for (const a of list) {
    try {
      await a.announce(clean);
      sent.push(a.name);
    } catch (err) {
      errors.push({ name: a.name, error: err instanceof Error ? err.message : String(err) });
    }
  }
  return { sent, errors };
}
