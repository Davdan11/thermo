/* Découpage des sitemaps — partagé entre sitemap.ts et robots.ts */

import { getCanonicalModels } from "@/lib/seo/programmatic";

export const PRODUCTS_PER_SITEMAP = 2000;

export function productSitemapCount(): number {
  return Math.max(1, Math.ceil(getCanonicalModels().length / PRODUCTS_PER_SITEMAP));
}

export function sitemapIds(): string[] {
  // « villes-quebec » et « palmares » : Google refusait de lire « villes » et « classements » (URL neuves = nouvelle évaluation)
  const ids = ["pages", "guides", "marques", "villes-quebec", "palmares"];
  for (let i = 0; i < productSitemapCount(); i++) ids.push(`produits-${i}`);
  return ids;
}
