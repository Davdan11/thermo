import data from "../data/fixtures/seo/seo-db.json";

export interface SeoPageData {
  rank: number;
  phase: string;
  cluster: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  pageType: string;
  intent: string;
  funnel: string;
  urlSlug: string;
  seoTitle: string;
  h1: string;
  contentSpec: string;
  primaryCta: string;
  schemaType: string;
  internalLinkHub: string;
}

const pages = data as SeoPageData[];

export function getSeoPagesByPrefix(prefix: string): SeoPageData[] {
  return pages.filter(p => p.urlSlug.startsWith(prefix) && p.urlSlug !== prefix);
}

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return pages.find(p => p.urlSlug === slug);
}
