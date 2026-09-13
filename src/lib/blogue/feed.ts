/* ==================================================================
   Sorties publiques du blogue, en fonctions pures (testables) :
   - isPublic : la seule porte vers le site public ;
   - flux RSS 2.0 ;
   - données structurées BlogPosting et BreadcrumbList ;
   - entrées du plan du site « blogue ».
   ================================================================== */

import { articlePath, CATEGORY_LABELS, PALMARES_PATH, type BlogArticle } from "./types";

/** Un article n'est servi publiquement que s'il est publié et daté. */
export const isPublic = (a: Pick<BlogArticle, "status" | "publishedAt">): boolean => a.status === "publie" && typeof a.publishedAt === "string" && a.publishedAt.length > 0;

/** Articles publics, du plus récent au plus ancien. */
export function publicArticles<T extends Pick<BlogArticle, "status" | "publishedAt">>(list: T[]): T[] {
  return list.filter(isPublic).sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

/** Date de dernière modification réelle (publication ou modification du contenu après publication). */
export const lastModified = (a: Pick<BlogArticle, "publishedAt" | "modifiedAt">): string => (a.modifiedAt && a.publishedAt && a.modifiedAt > a.publishedAt ? a.modifiedAt : (a.publishedAt ?? ""));

const xml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export interface FeedOptions {
  siteUrl: string;
  siteName: string;
  now?: Date;
  limit?: number;
}

export function buildRss(articles: BlogArticle[], opts: FeedOptions): string {
  const list = publicArticles(articles).slice(0, opts.limit ?? 50);
  const base = opts.siteUrl.replace(/\/$/, "");
  const last = list[0] ? new Date(lastModified(list[0])) : (opts.now ?? new Date());
  const items = list.map((a) => {
    const url = `${base}${articlePath(a.slug)}`;
    return [
      "    <item>",
      `      <title>${xml(a.title)}</title>`,
      `      <link>${xml(url)}</link>`,
      `      <guid isPermaLink="true">${xml(url)}</guid>`,
      `      <description>${xml(a.description)}</description>`,
      `      <category>${xml(CATEGORY_LABELS[a.category])}</category>`,
      `      <dc:creator>${xml(a.author)}</dc:creator>`,
      `      <pubDate>${new Date(a.publishedAt as string).toUTCString()}</pubDate>`,
      "    </item>",
    ].join("\n");
  });
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">`,
    "  <channel>",
    `    <title>${xml(`Le blogue de ${opts.siteName}`)}</title>`,
    `    <link>${xml(`${base}/blogue`)}</link>`,
    `    <atom:link href="${xml(`${base}/blogue/rss.xml`)}" rel="self" type="application/rss+xml" />`,
    `    <description>${xml("Des articles appuyés sur les données du site : froid par municipalité, fiches certifiées, montants LogisVert officiels.")}</description>`,
    "    <language>fr-CA</language>",
    `    <lastBuildDate>${last.toUTCString()}</lastBuildDate>`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}

/* ---------------- Données structurées ---------------- */

export interface SchemaOptions {
  siteUrl: string;
  siteName: string;
  logo: string;
  /** Adresse absolue de l'image (couverture), si l'article en a une. */
  image?: string | null;
  wordCount?: number;
}

export function blogPostingSchema(a: BlogArticle, opts: SchemaOptions) {
  const base = opts.siteUrl.replace(/\/$/, "");
  const url = `${base}${articlePath(a.slug)}`;
  const org = a.author.trim() === "" || /équipe|equipe/i.test(a.author);
  const citations = a.references.filter((r) => r.url).map((r) => ({ "@type": "CreativeWork", name: r.label, url: r.url!.startsWith("http") ? r.url : `${base}${r.url}` }));
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.description,
    inLanguage: "fr-CA",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: a.publishedAt,
    dateModified: lastModified(a),
    articleSection: CATEGORY_LABELS[a.category],
    ...(opts.image ? { image: [opts.image] } : {}),
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    author: org ? { "@type": "Organization", name: a.author, url: base } : { "@type": "Person", name: a.author },
    publisher: { "@type": "Organization", name: opts.siteName, url: base, logo: { "@type": "ImageObject", url: opts.logo } },
    isPartOf: { "@type": "Blog", name: `Le blogue de ${opts.siteName}`, url: `${base}/blogue` },
    ...(citations.length ? { citation: citations } : {}),
  };
}

export function blogBreadcrumbSchema(a: Pick<BlogArticle, "title" | "slug">, siteUrl: string) {
  const base = siteUrl.replace(/\/$/, "");
  const items = [
    { name: "Accueil", url: `${base}/` },
    { name: "Blogue", url: `${base}/blogue` },
    { name: a.title, url: `${base}${articlePath(a.slug)}` },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}

/* ---------------- Plan du site ---------------- */

export interface SitemapRow {
  url: string;
  lastModified?: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
}

const day = (iso: string | undefined) => (iso && /^\d{4}-\d{2}-\d{2}/.test(iso) ? iso.slice(0, 10) : undefined);

/** /blogue, le palmarès du froid et chaque article publié (jamais un brouillon). */
export function blogSitemapRows(articles: BlogArticle[], siteUrl: string, palmaresDate?: string): SitemapRow[] {
  const base = siteUrl.replace(/\/$/, "");
  const list = publicArticles(articles);
  const latest = list.map((a) => day(lastModified(a))).filter((d): d is string => !!d).sort().pop();
  return [
    { url: `${base}/blogue`, ...(latest ? { lastModified: latest } : {}), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}${PALMARES_PATH}`, ...(day(palmaresDate) ? { lastModified: day(palmaresDate) } : {}), changeFrequency: "monthly", priority: 0.7 },
    ...list.map((a) => ({ url: `${base}${articlePath(a.slug)}`, ...(day(lastModified(a)) ? { lastModified: day(lastModified(a)) } : {}), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}

/** lastmod du sitemap « blogue » : l'article le plus récent, sinon la date de repli. */
export function blogSitemapLastmod(articles: BlogArticle[], fallback: string): string {
  const d = publicArticles(articles)
    .map((a) => day(lastModified(a)))
    .filter((x): x is string => !!x)
    .sort()
    .pop();
  return d && d > fallback ? d : fallback;
}
