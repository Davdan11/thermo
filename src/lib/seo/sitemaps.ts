/* Découpage des sitemaps — partagé entre sitemap.ts, sitemap-index.xml et robots.ts */

import { getIndexableModels } from "@/lib/seo/programmatic";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";

export const PRODUCTS_PER_SITEMAP = 2000;

/**
 * Date de la dernière mise à jour des données officielles (liste LogisVert d'Hydro-Québec).
 * C'est la seule date de modification connue des pages bâties sur le catalogue : on ne publie
 * jamais la date du build, que Google finit par ignorer quand elle change à chaque déploiement.
 */
export const DATA_DATE = ((logisVertMetadata as { updatedAt?: string }).updatedAt ?? "2026-09-01").slice(0, 10);

/** Date AAAA-MM-JJ d'un champ de front matter (gray-matter peut renvoyer un objet Date). */
export function isoDay(value: unknown): string | undefined {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? undefined : value.toISOString().slice(0, 10);
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  return undefined;
}

export function productSitemapCount(): number {
  return Math.max(1, Math.ceil(getIndexableModels().length / PRODUCTS_PER_SITEMAP));
}

export function sitemapIds(): string[] {
  // « villes-quebec » : Google refusait de lire « villes » (URL neuve = nouvelle évaluation) ; « classements » est lu correctement.
  const ids = ["pages", "guides", "marques", "villes-quebec", "classements"];
  for (let i = 0; i < productSitemapCount(); i++) ids.push(`produits-${i}`);
  return ids;
}

/** Dernière modification réelle d'un sitemap : données officielles, ou guide le plus récent pour « guides ». */
export async function sitemapLastmod(id: string): Promise<string> {
  if (id !== "guides") return DATA_DATE;
  const { getAllGuides } = await import("@/lib/markdown");
  const latest = getAllGuides().reduce((acc, g) => {
    const d = isoDay(g.updatedAt) ?? isoDay(g.publishedAt) ?? "";
    return d > acc ? d : acc;
  }, DATA_DATE);
  return latest;
}
