/* ==================================================================
   Index /thermopompe : région → MRC (ou agglomération) → municipalité.
   Données compactes (slug, nom) passées au composant client FrostAtlas :
   jamais le jeu complet.
   ================================================================== */
import { getCity } from "./cities";
import { displayName, getDataset, getMunicipalityByCode, getRegions, groupTitle, hubHref, type Municipality } from "./municipalites";

export type AtlasRegion = {
  slug: string;
  name: string;
  pages: number;
  groups: Array<{ key: string; label: string; href: string | null; munis: Array<[string, string]> }>;
  others: string[];
};

const byName = (a: string, b: string) => a.localeCompare(b, "fr-CA");

export function atlasRegions(): AtlasRegion[] {
  const data = getDataset();
  const secondary = data.meta.curatedSecondary ?? [];
  const out: AtlasRegion[] = [];
  for (const r of [...getRegions()].sort((a, b) => byName(a.name, b.name))) {
    const groups: AtlasRegion["groups"] = [];
    const others: string[] = [];
    for (const g of data.groups.filter((x) => x.region === r.code)) {
      const members = g.members.map((c) => getMunicipalityByCode(c)).filter((m): m is Municipality => !!m);
      const munis: Array<[string, string]> = members.filter((m) => m.page).map((m) => [m.slug, displayName(m)]);
      for (const s of secondary) {
        if (!g.members.includes(s.code)) continue;
        const c = getCity(s.slug);
        if (c) munis.push([c.slug, c.name]);
      }
      munis.sort((a, b) => byName(a[1], b[1]));
      const href = hubHref(g);
      if (!href) others.push(...members.filter((m) => !m.page).map((m) => m.name));
      if (munis.length === 0 && !href) continue;
      groups.push({ key: g.key, label: groupTitle(g), href, munis });
    }
    groups.sort((a, b) => byName(a.label, b.label));
    const pages = groups.reduce((a, g) => a + g.munis.length, 0);
    if (groups.length === 0 && others.length === 0) continue;
    out.push({ slug: r.slug, name: r.name, pages, groups, others: others.sort(byName) });
  }
  return out;
}
