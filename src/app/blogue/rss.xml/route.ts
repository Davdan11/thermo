/* ==================================================================
   /blogue/rss.xml — flux RSS 2.0 des articles PUBLIÉS (buildRss).
   ISR : régénéré à chaque publication (revalidatePath), sinon au plus
   toutes les heures.
   ================================================================== */

import { buildRss } from "@/lib/blogue/feed";
import { readBlogue } from "@/lib/blogue/store";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const revalidate = 3600;

export async function GET() {
  const xml = buildRss((await readBlogue()).articles, { siteUrl: SITE_URL, siteName: SITE_NAME });
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=900" } });
}
