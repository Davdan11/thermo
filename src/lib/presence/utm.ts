/* ==================================================================
   Liens suivis des publications :
   utm_source=facebook|instagram, utm_medium=social,
   utm_campaign=<série>, utm_content=<identifiant de la publication>.
   Sans dépendance serveur.
   ================================================================== */

import type { Network, SeriesId } from "./types";

/** Même règle que SITE_URL (src/lib/seo) sans importer le module SEO côté client. */
export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermopompesavendre.ca").replace(/\/$/, "");
}

/** Adresse complète d'une page du site avec ses paramètres UTM (l'ancre, s'il y en a une, reste à la fin). */
export function trackedUrl(path: string, network: Network, series: SeriesId, postId: string, base = siteUrl()): string {
  const u = new URL(path.startsWith("/") ? path : `/${path}`, `${base}/`);
  u.searchParams.set("utm_source", network);
  u.searchParams.set("utm_medium", "social");
  u.searchParams.set("utm_campaign", series);
  u.searchParams.set("utm_content", postId);
  return u.toString();
}

/** Adresse lisible, sans protocole ni paramètres : « thermopompesavendre.ca/produit/… ». */
export function displayUrl(path: string, base = siteUrl()): string {
  const u = new URL(path.startsWith("/") ? path : `/${path}`, `${base}/`);
  return `${u.host}${u.pathname === "/" ? "" : u.pathname}`;
}
