/* ==================================================================
   Pages d'atterrissage éditoriales (/thermopompes/[slug])
   Source : src/data/seo/thermopompes.json (contenu rédigé, unique)
   ================================================================== */

import raw from "@/data/seo/thermopompes.json";

export interface LandingGrant {
  name: string;
  conditions: string;
  source?: string;
}

export interface LandingPage {
  id: string;
  slug: string;
  cluster: string;
  primaryKeyword: string;
  pageType: string;
  intent: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  indexGate: { hasUniqueContent: boolean; hasRealData: boolean; isApproved: boolean };
  canonicalUrl: string;
  schemaTypes: string[];
  contentBlocks: {
    hero: { subtitle: string };
    intro: string;
    benefits: Array<{ title: string; desc: string }>;
    steps: Array<{ title: string; desc: string }>;
    forWho: string[];
    notForWho: string[];
    grants: LandingGrant[];
    faq: Array<{ q: string; a: string }>;
    relatedLinks: Array<{ label: string; href: string }>;
  };
}

const PAGES = raw as unknown as LandingPage[];

export function getLandingPages(): LandingPage[] {
  return PAGES.filter((p) => p.indexGate?.isApproved !== false);
}

export function getLandingPage(slug: string): LandingPage | null {
  return getLandingPages().find((p) => p.slug === slug) ?? null;
}
