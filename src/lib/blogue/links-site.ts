/* ==================================================================
   Cibles des liens internes automatiques (serveur) : pages de villes,
   marques actives au Québec, quelques pages du site. Les fiches citées
   viennent des « mentions » de chaque article.
   Noms ambigus écartés : homonymes, mots courants (LINK_STOPLIST),
   très petites municipalités au nom d'un seul mot.
   ================================================================== */

import { registry } from "@/lib/data/registry";
import { getAllBrandStats } from "@/lib/seo/programmatic";
import { getCities } from "@/lib/seo/cities";
import { displayName, getPageMunicipalities, municipalityHref } from "@/lib/seo/municipalites";
import { LINK_STOPLIST, type LinkTarget } from "./links";
import { PALMARES_PATH, type ArticleMention } from "./types";

let cached: LinkTarget[] | null = null;

export function siteLinkTargets(): LinkTarget[] {
  if (cached) return cached;
  const out: LinkTarget[] = [];
  const seen = new Map<string, number>();
  const count = (name: string) => seen.set(name, (seen.get(name) ?? 0) + 1);

  const munis = getPageMunicipalities();
  for (const m of munis) count(displayName(m));
  for (const c of getCities()) {
    if (!LINK_STOPLIST.has(c.name)) out.push({ text: c.name, href: `/thermopompe/${c.slug}`, kind: "ville" });
  }
  const taken = new Set(out.map((t) => t.text));
  for (const m of munis) {
    const name = displayName(m);
    const href = municipalityHref(m);
    if (!href || taken.has(name) || (seen.get(name) ?? 0) > 1 || LINK_STOPLIST.has(name) || name.includes("(")) continue;
    const pop = m.census?.population2021 ?? 0;
    // Un nom d'un seul mot est lié seulement pour une municipalité d'une certaine taille (moins de faux liens).
    if (!/[\s'’-]/.test(name) && pop < 1000) continue;
    taken.add(name);
    out.push({ text: name, href, kind: "ville" });
  }
  for (const b of getAllBrandStats()) {
    if (!registry.brandBySlug.get(b.slug)?.activeInQuebec || LINK_STOPLIST.has(b.name) || b.name.length < 3) continue;
    out.push({ text: b.name, href: `/marques/${b.slug}`, kind: "marque" });
  }
  out.push(
    { text: "ThermoMatch", href: "/trouver-ma-thermopompe", kind: "page" },
    { text: "ThermoScan", href: "/thermoscan", kind: "page" },
    { text: "Palmarès du froid", href: PALMARES_PATH, kind: "page" },
  );
  cached = out;
  return out;
}

/** Cibles d'un article : ses mentions (fiches, municipalités citées) d'abord, puis celles du site. */
export function articleLinkTargets(mentions: ArticleMention[]): LinkTarget[] {
  return [...mentions.map((m) => ({ text: m.text, href: m.href, kind: m.href.startsWith("/produit/") ? ("fiche" as const) : ("page" as const) })), ...siteLinkTargets()];
}
