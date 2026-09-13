/* ==================================================================
   Géographie de l'outil de gestion : position d'un code postal,
   distance à vol d'oiseau et région administrative devinée.

   Hors ligne d'abord : la RTA (3 premiers caractères) est cherchée
   dans les villes du site (src/lib/seo/cities.ts, coordonnées du
   centre-ville ci-dessous), puis dans la table des RTA
   (src/lib/data/geography/fsa-geo.ts). Nominatim n'est interrogé que
   si la RTA n'est pas connue exactement et que l'appelant l'autorise.
   Les positions sont enregistrées avec le job et l'installateur : le
   classement se calcule ensuite sans réseau.
   ================================================================== */

import { getCities, type CityProfile } from "@/lib/seo/cities";
import { cleanPostalCode, fsaMatchLength, lookupFsa, resolveViaNominatim } from "@/lib/data/geography/fsa-geo";
import { regionFromLabel, type RegionCode } from "./regions";
import { distanceKm } from "./distance";

/** Centre approximatif des 55 villes des pages locales (degrés décimaux). */
export const CITY_COORDS: Record<string, { lat: number; lon: number }> = {
  montreal: { lat: 45.5019, lon: -73.5674 },
  laval: { lat: 45.6066, lon: -73.7124 },
  longueuil: { lat: 45.5312, lon: -73.5181 },
  brossard: { lat: 45.4509, lon: -73.4659 },
  "saint-hubert": { lat: 45.496, lon: -73.419 },
  boucherville: { lat: 45.5911, lon: -73.4364 },
  quebec: { lat: 46.8139, lon: -71.208 },
  levis: { lat: 46.77, lon: -71.19 },
  gatineau: { lat: 45.4765, lon: -75.7013 },
  sherbrooke: { lat: 45.4042, lon: -71.8929 },
  magog: { lat: 45.2667, lon: -72.15 },
  "trois-rivieres": { lat: 46.3432, lon: -72.5421 },
  shawinigan: { lat: 46.5667, lon: -72.75 },
  saguenay: { lat: 48.428, lon: -71.068 },
  jonquiere: { lat: 48.4167, lon: -71.25 },
  alma: { lat: 48.55, lon: -71.65 },
  roberval: { lat: 48.5167, lon: -72.2333 },
  "saint-felicien": { lat: 48.65, lon: -72.45 },
  rimouski: { lat: 48.449, lon: -68.523 },
  "riviere-du-loup": { lat: 47.8333, lon: -69.5333 },
  matane: { lat: 48.85, lon: -67.5333 },
  gaspe: { lat: 48.8333, lon: -64.4833 },
  "rouyn-noranda": { lat: 48.2394, lon: -79.0206 },
  "val-dor": { lat: 48.0975, lon: -77.7828 },
  amos: { lat: 48.5667, lon: -78.1167 },
  "la-sarre": { lat: 48.8, lon: -79.2 },
  "sept-iles": { lat: 50.2167, lon: -66.3833 },
  "baie-comeau": { lat: 49.2167, lon: -68.15 },
  drummondville: { lat: 45.8833, lon: -72.4833 },
  victoriaville: { lat: 46.05, lon: -71.9667 },
  granby: { lat: 45.4, lon: -72.7333 },
  "saint-hyacinthe": { lat: 45.6333, lon: -72.95 },
  "saint-jean-sur-richelieu": { lat: 45.3071, lon: -73.2625 },
  "sorel-tracy": { lat: 46.0333, lon: -73.1167 },
  chateauguay: { lat: 45.3833, lon: -73.75 },
  "salaberry-de-valleyfield": { lat: 45.25, lon: -74.1333 },
  "vaudreuil-dorion": { lat: 45.4, lon: -74.0333 },
  repentigny: { lat: 45.7422, lon: -73.45 },
  terrebonne: { lat: 45.7, lon: -73.6333 },
  mascouche: { lat: 45.75, lon: -73.6 },
  joliette: { lat: 46.0167, lon: -73.45 },
  blainville: { lat: 45.6667, lon: -73.8833 },
  boisbriand: { lat: 45.6167, lon: -73.8333 },
  "saint-eustache": { lat: 45.5667, lon: -73.9 },
  mirabel: { lat: 45.65, lon: -74.0833 },
  "saint-jerome": { lat: 45.7833, lon: -74.0 },
  "mont-laurier": { lat: 46.55, lon: -75.5 },
  "saint-augustin": { lat: 46.7406, lon: -71.4586 },
  "baie-saint-paul": { lat: 47.4417, lon: -70.4989 },
  "saint-georges": { lat: 46.1167, lon: -70.6667 },
  "thetford-mines": { lat: 46.1, lon: -71.3 },
  montmagny: { lat: 46.9833, lon: -70.55 },
  chibougamau: { lat: 49.9167, lon: -74.3667 },
};

/* Préfixes connus avec certitude : toutes les RTA H7 sont à Laval. */
const PREFIX_HINTS: Record<string, { lat: number; lon: number; city: string; region: RegionCode }> = {
  H7: { lat: 45.6066, lon: -73.7124, city: "Laval", region: "13" },
};

export interface SiteCity {
  slug: string;
  name: string;
  region: RegionCode | null;
  fsa: string[];
  lat: number;
  lon: number;
}

let citiesCache: SiteCity[] | null = null;

/** Les villes du site avec leurs coordonnées et leur région officielle. */
export function siteCities(): SiteCity[] {
  if (citiesCache) return citiesCache;
  citiesCache = getCities()
    .filter((c: CityProfile) => CITY_COORDS[c.slug])
    .map((c) => ({ slug: c.slug, name: c.name, region: regionFromLabel(c.region), fsa: c.fsa, ...CITY_COORDS[c.slug] }));
  return citiesCache;
}

export { distanceKm };

export function nearestCity(point: { lat: number; lon: number }): { city: SiteCity; km: number } | null {
  let best: { city: SiteCity; km: number } | null = null;
  for (const city of siteCities()) {
    const km = distanceKm(point, city);
    if (!best || km < best.km) best = { city, km };
  }
  return best;
}

/** Villes du site à moins de `radiusKm` d'un point, de la plus proche à la plus loin. */
export function citiesWithin(point: { lat: number; lon: number }, radiusKm: number): Array<{ slug: string; name: string; km: number }> {
  return siteCities()
    .map((c) => ({ slug: c.slug, name: c.name, km: distanceKm(point, c) }))
    .filter((c) => c.km <= radiusKm)
    .sort((a, b) => a.km - b.km);
}

export const POSTAL_RE = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]\d[ABCEGHJ-NPRSTV-Z]\d$/;

/** « h2x1y4 » → « H2X 1Y4 » ; null si ce n'est pas un code postal canadien complet. */
export function formatPostalCode(value: string): string | null {
  const c = cleanPostalCode(value);
  return POSTAL_RE.test(c) ? `${c.slice(0, 3)} ${c.slice(3)}` : null;
}

export type GeoPrecision = "ville" | "rta" | "geocodeur" | "approx";

export interface ResolvedPostal {
  postalCode: string;
  city: string;
  lat: number;
  lon: number;
  /** ville : RTA d'une ville du site ; rta : RTA exacte de la table ; geocodeur : Nominatim ; approx : préfixe seulement. */
  precision: GeoPrecision;
  region: RegionCode | null;
  /** Comment la région a été devinée. */
  regionSource: "rta" | "ville-proche" | "aucune";
}

/** Région devinée : RTA d'une ville du site, sinon ville du site la plus proche. */
export function guessRegion(postalCode: string, point: { lat: number; lon: number } | null): { region: RegionCode | null; source: ResolvedPostal["regionSource"] } {
  const fsa = cleanPostalCode(postalCode).slice(0, 3);
  const byFsa = siteCities().find((c) => c.fsa.includes(fsa));
  if (byFsa?.region) return { region: byFsa.region, source: "rta" };
  const hint = PREFIX_HINTS[fsa.slice(0, 2)];
  if (hint) return { region: hint.region, source: "rta" };
  if (point) {
    const near = nearestCity(point);
    if (near?.city.region) return { region: near.city.region, source: "ville-proche" };
  }
  return { region: null, source: "aucune" };
}

/** Résolution sans réseau. null si le code est invalide ou totalement inconnu. */
export function resolvePostalOffline(value: string): ResolvedPostal | null {
  const postalCode = formatPostalCode(value);
  if (!postalCode) return null;
  const fsa = postalCode.slice(0, 3);
  const city = siteCities().find((c) => c.fsa.includes(fsa));
  let point: Omit<ResolvedPostal, "postalCode" | "region" | "regionSource"> | null = null;
  if (city) point = { city: city.name, lat: city.lat, lon: city.lon, precision: "ville" };
  else if (fsaMatchLength(postalCode) === 3) {
    const row = lookupFsa(postalCode)!;
    point = { city: row.municipality, lat: row.lat, lon: row.lon, precision: "rta" };
  } else if (PREFIX_HINTS[fsa.slice(0, 2)]) {
    const h = PREFIX_HINTS[fsa.slice(0, 2)];
    point = { city: h.city, lat: h.lat, lon: h.lon, precision: "approx" };
  } else {
    const row = lookupFsa(postalCode);
    if (row) point = { city: row.municipality, lat: row.lat, lon: row.lon, precision: "approx" };
  }
  if (!point) return null;
  const guess = guessRegion(postalCode, point);
  return { postalCode, ...point, region: guess.region, regionSource: guess.source };
}

/**
 * Résolution complète : hors ligne si la RTA est connue exactement ; sinon Nominatim (si `online`),
 * et en dernier recours le préfixe approximatif.
 */
export async function resolvePostal(value: string, opts: { online?: boolean } = {}): Promise<ResolvedPostal | null> {
  const offline = resolvePostalOffline(value);
  if (offline && offline.precision !== "approx") return offline;
  const postalCode = formatPostalCode(value);
  if (!postalCode || !opts.online) return offline;
  const geo = await resolveViaNominatim(postalCode);
  if (!geo) return offline;
  const point = { lat: geo.lat, lon: geo.lon };
  const guess = guessRegion(postalCode, point);
  return { postalCode, city: geo.municipality, ...point, precision: "geocodeur", region: guess.region, regionSource: guess.source };
}
