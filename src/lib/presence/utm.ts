/* ==================================================================
   Adresse du site, sans dépendance serveur (liens suivis du robot
   Facebook : src/lib/social/utm.ts ; annonces du blogue).
   ================================================================== */

/** Même règle que SITE_URL (src/lib/seo) sans importer le module SEO côté client. */
export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermopompesavendre.ca").replace(/\/$/, "");
}

/** Adresse lisible, sans protocole ni paramètres : « thermopompesavendre.ca/produit/… ». */
export function displayUrl(path: string, base = siteUrl()): string {
  const u = new URL(path.startsWith("/") ? path : `/${path}`, `${base}/`);
  return `${u.host}${u.pathname === "/" ? "" : u.pathname}`;
}
