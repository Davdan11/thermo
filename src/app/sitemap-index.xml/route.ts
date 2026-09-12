/* ==================================================================
   /sitemap-index.xml — index des sitemaps segmentés (src/app/sitemap.ts).
   Next.js réserve /sitemap.xml aux sitemaps générés par sitemap.ts ; l'index
   vit donc à /sitemap-index.xml et est déclaré en premier dans robots.txt,
   ce qui simplifie la soumission dans la Search Console.
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { sitemapIds, sitemapLastmod } from "@/lib/seo/sitemaps";

export const dynamic = "force-static";

export async function GET() {
  // lastmod = dernière modification réelle du contenu listé (données officielles ou guide le plus récent),
  // pas la date du build.
  const rows = await Promise.all(
    sitemapIds().map(async (id) => `  <sitemap><loc>${SITE_URL}/sitemap/${id}.xml</loc><lastmod>${await sitemapLastmod(id)}</lastmod></sitemap>`),
  );
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    rows.join("\n") +
    `\n</sitemapindex>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
