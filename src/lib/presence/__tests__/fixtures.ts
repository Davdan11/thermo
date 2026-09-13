/* Faits fictifs pour les tests (marques, villes et numéros inventés : aucune donnée réelle). */
import type { CityFact, ModelFact, PresenceCatalog, TermFact } from "../catalog";
import { normalizePresence } from "../store";
import type { PresenceData } from "../types";

const BRANDS = ["Nordik", "Boreal", "Laurentis", "Frimas"];
const r2 = (n: number) => Math.round(n * 100) / 100;

export function fixtureModels(count = 16): ModelFact[] {
  return Array.from({ length: count }, (_, i) => {
    const brand = BRANDS[i % BRANDS.length];
    const kind = i < count / 2 ? "murale" : "centrale";
    const nominal = kind === "murale" ? 12000 : 24000;
    return {
      slug: `${brand.toLowerCase()}-xr${100 + i}`,
      brand,
      brandSlug: brand.toLowerCase(),
      name: `Serie ${i} XR${100 + i}`,
      seriesName: `Serie ${String.fromCharCode(65 + i)}`,
      kind,
      systemTypeLabel: kind === "murale" ? "Murale" : "Centrale gainable",
      outdoorModel: `XR${100 + i}OUT`,
      indoorModel: `XR${100 + i}IN`,
      ahri: String(200000000 + i),
      nominalBtu: nominal,
      h5Btu: Math.round((nominal * (0.8 + (i % 5) * 0.05)) / 100) * 100,
      cop5: r2(1.8 + (i % 4) * 0.1),
      seer2: r2(20 + i * 0.5),
      hspf2: r2(9 + (i % 3) * 0.3),
      coldClimate: i % 3 === 0,
      logisVertDollars: 1000 + i * 50,
      imageUrl: i === 3 ? "/images/products/representatives/essai.webp" : `/images/products/official/essai-${i}.webp`,
      minTempC: i % 2 ? -25 : null,
      minTempSource: i % 2 ? { label: "Brochure du fabricant (essai)" } : null,
    } satisfies ModelFact;
  });
}

const CITY_NAMES = ["Val-Givre", "Saint-Frimas", "Lac-Blanc", "Mont-Glace", "Rivière-Neige", "Port-Bise", "Sainte-Aurore", "Cap-Givré", "Anse-Grésil", "Pointe-Verglas", "Havre-Brume", "Fort-Nordet"];

export function fixtureCities(count = 12): CityFact[] {
  return Array.from({ length: count }, (_, i) => {
    const janMin = Math.round((-12.5 - i * 0.7) * 10) / 10;
    return {
      code: `C${100 + i}`,
      slug: CITY_NAMES[i].toLowerCase(),
      name: CITY_NAMES[i],
      href: `/thermopompe/${CITY_NAMES[i].toLowerCase()}`,
      regionName: i % 2 ? "Laurentides" : "Estrie",
      population: 10000 * (count - i),
      design: { t: -23 - i, zone: "Zone d'essai", fsa: `J${i % 10}X`, generic: false },
      station: {
        name: `STATION ${CITY_NAMES[i].toUpperCase()}`,
        id: `70${String(10000 + i)}`,
        period: "1991-2020",
        km: Math.round((5.3 + i) * 10) / 10,
        janMinC: janMin,
        janMeanC: Math.round((janMin + 5.2) * 10) / 10,
        daysBelowMinus20: 10.4 + i,
        hdd18: 4000.5 + i * 100,
        extremeMinC: -35.1 - i,
        extremeMinYear: 1980 + i,
        url: "https://climat.meteo.gc.ca/",
      },
      tier: janMin <= -20 ? "tres-froid" : janMin <= -15 ? "froid" : "modere",
    } satisfies CityFact;
  });
}

export function fixtureTerms(count = 10): TermFact[] {
  return Array.from({ length: count }, (_, i) => ({
    slug: `terme-${i}`,
    term: `Terme ${String.fromCharCode(65 + i)} (Nom long)`,
    short: `Terme ${String.fromCharCode(65 + i)}`,
    definition: `Une définition simple du terme. Une tonne équivaut à 12 000 BTU/h, et certains appareils chauffent sous les −25 °C. Le COP de 3.0 est un exemple.`,
  }));
}

export function fixtureCatalog(): PresenceCatalog {
  return { models: fixtureModels(), cities: fixtureCities(), terms: fixtureTerms(), holdsFullCount: 42, logisVertListDate: "17 juillet 2025" };
}

export function emptyData(): PresenceData {
  return normalizePresence({});
}
