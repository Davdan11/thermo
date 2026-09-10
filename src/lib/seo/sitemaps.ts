/* Découpage des sitemaps — partagé entre sitemap.ts et robots.ts */

import { getIndexableModels } from "@/lib/seo/programmatic";

export const PRODUCTS_PER_SITEMAP = 2000;

export function productSitemapCount(): number {
  return Math.max(1, Math.ceil(getIndexableModels().length / PRODUCTS_PER_SITEMAP));
}

export function sitemapIds(): string[] {
  // « villes-quebec » : Google refusait de lire « villes » (URL neuve = nouvelle évaluation) ; « classements » est lu correctement.
  const ids = ["pages", "guides", "marques", "villes-quebec", "classements"];
  for (let i = 0; i < productSitemapCount(); i++) ids.push(`produits-${i}`);
  return ids;
}
