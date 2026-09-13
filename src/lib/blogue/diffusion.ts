/* ==================================================================
   Annonce des adresses publiées aux moteurs de recherche.

   POINT D'EXTENSION INDEXNOW (documenté, sans dépendance) :
   le module IndexNow est construit à part (chantier SEO technique).
   Quand il sera fusionné, ajoutez-le à ANNOUNCERS, par exemple :

     import { submitIndexNow } from "@/lib/seo/indexnow";
     export const ANNOUNCERS: UrlAnnouncer[] = [
       { name: "IndexNow", announce: (urls) => submitIndexNow(urls) },
     ];

   Rien d'autre à changer : chaque publication, modification ou retrait
   d'un article appelle announceUrls() avec ses adresses absolues.
   Garde-fous : aucun appel hors production (NODE_ENV=production), une
   erreur d'un annonceur n'empêche jamais la publication.
   ================================================================== */

export interface UrlAnnouncer {
  name: string;
  announce: (urls: string[]) => Promise<void>;
}

/** Annonceurs branchés. Vide tant que le module IndexNow n'est pas fusionné. */
export const ANNOUNCERS: UrlAnnouncer[] = [];

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
