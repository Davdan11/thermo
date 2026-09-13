/* ==================================================================
   Palmarès du froid : calculs purs (données en entrée, tableau en
   sortie). L'adaptateur réel est dans palmares-site.ts.

   Pour chaque municipalité qui a des données complètes (station météo
   admissible avec ses nuits de janvier, température de conception) :
   - rang selon les nuits de janvier (moyenne des minimums quotidiens de
     janvier, normales de la station), puis la température de
     conception ; même valeur = même rang (ex aequo) ;
   - nombre de modèles du catalogue dont le froid minimal publié par le
     fabricant est égal ou inférieur à sa température de conception
     (« chauffent encore à ce froid, selon le fabricant »), et, parmi
     eux, ceux qui gardent toute leur puissance nominale au point
     certifié de −15 °C.
   Aucune estimation : une donnée absente exclut la municipalité (ou le
   modèle) du calcul, et le total des exclus est publié.
   ================================================================== */

export interface PalmaresMuniInput {
  code: string;
  name: string;
  /** Page du site (/thermopompe/…), null si la municipalité n'en a pas. */
  href: string | null;
  region: string | null;
  lat: number | null;
  lon: number | null;
  population: number | null;
  design: { t: number; generic: boolean; fsa: string | null } | null;
  station: {
    name: string;
    id: string;
    period: string;
    km: number | null;
    janMinC: number | null;
    janMeanC: number | null;
    daysBelowMinus20: number | null;
    url: string;
  } | null;
}

export interface PalmaresModelInput {
  minTempC: number | null;
  /** Garde au moins 100 % de sa puissance nominale à −15 °C (fiche certifiée). */
  holdsFullAt15: boolean;
}

export interface PalmaresRow {
  code: string;
  name: string;
  href: string | null;
  region: string;
  lat: number | null;
  lon: number | null;
  population: number | null;
  designT: number;
  designGeneric: boolean;
  fsa: string | null;
  janMinC: number;
  janMeanC: number | null;
  /** Jours sous −20 °C par année, arrondi à l'unité (null si la station ne le publie pas). */
  daysBelow20: number | null;
  stationName: string;
  stationId: string;
  period: string;
  stationKm: number | null;
  stationUrl: string;
  rank: number;
  tied: boolean;
  modelsHeat: number;
  modelsHeatFull: number;
}

export interface PalmaresRegion {
  name: string;
  rank: number;
  count: number;
  /** Moyenne des nuits de janvier de ses municipalités, arrondie au dixième. */
  meanJanMinC: number;
  coldest: { name: string; code: string; janMinC: number };
  mildest: { name: string; code: string; janMinC: number };
  coldestDesignT: number;
}

export interface PalmaresStep {
  t: number;
  municipalities: number;
  modelsHeat: number;
  modelsHeatFull: number;
}

export interface Palmares {
  rows: PalmaresRow[];
  regions: PalmaresRegion[];
  /** Températures de conception présentes, de la plus froide à la plus douce. */
  steps: PalmaresStep[];
  totals: {
    municipalities: number;
    /** Municipalités écartées faute de données (station, nuits de janvier ou température de conception). */
    excluded: number;
    stations: number;
    models: number;
    modelsWithMinTemp: number;
    modelsHoldFull: number;
    genericDesign: number;
    /** Valeurs générales de la table (municipalités sans zone propre). */
    genericValues: number[];
  };
}

/** Arrondi au dixième (−14,25 → −14,2 ; même règle que Math.round). */
export const round1 = (n: number): number => Math.round(n * 10) / 10;

/** Modèles dont le froid minimal publié est égal ou inférieur à t. */
export function modelsHeatingAt(t: number, models: PalmaresModelInput[]): { heat: number; full: number } {
  let heat = 0;
  let full = 0;
  for (const m of models) {
    if (m.minTempC === null || !Number.isFinite(m.minTempC) || m.minTempC > t) continue;
    heat++;
    if (m.holdsFullAt15) full++;
  }
  return { heat, full };
}

const byName = new Intl.Collator("fr-CA", { sensitivity: "base" });

export function buildPalmares(munis: PalmaresMuniInput[], models: PalmaresModelInput[]): Palmares {
  const cache = new Map<number, { heat: number; full: number }>();
  const heatAt = (t: number) => {
    let v = cache.get(t);
    if (!v) {
      v = modelsHeatingAt(t, models);
      cache.set(t, v);
    }
    return v;
  };

  let excluded = 0;
  const rows: PalmaresRow[] = [];
  for (const m of munis) {
    const s = m.station;
    if (!s || !m.design || s.janMinC === null || !Number.isFinite(s.janMinC) || !Number.isFinite(m.design.t)) {
      excluded++;
      continue;
    }
    const h = heatAt(m.design.t);
    rows.push({
      code: m.code,
      name: m.name,
      href: m.href,
      region: m.region ?? "Québec",
      lat: m.lat,
      lon: m.lon,
      population: m.population,
      designT: m.design.t,
      designGeneric: m.design.generic,
      fsa: m.design.fsa,
      janMinC: s.janMinC,
      janMeanC: s.janMeanC,
      daysBelow20: s.daysBelowMinus20 !== null && Number.isFinite(s.daysBelowMinus20) ? Math.round(s.daysBelowMinus20) : null,
      stationName: s.name,
      stationId: s.id,
      period: s.period,
      stationKm: s.km,
      stationUrl: s.url,
      rank: 0,
      tied: false,
      modelsHeat: h.heat,
      modelsHeatFull: h.full,
    });
  }

  rows.sort((a, b) => a.janMinC - b.janMinC || a.designT - b.designT || (b.daysBelow20 ?? -1) - (a.daysBelow20 ?? -1) || byName.compare(a.name, b.name));
  const same = (a: PalmaresRow, b: PalmaresRow) => a.janMinC === b.janMinC && a.designT === b.designT;
  rows.forEach((r, i) => {
    r.rank = i > 0 && same(r, rows[i - 1]) ? rows[i - 1].rank : i + 1;
  });
  rows.forEach((r, i) => {
    r.tied = (i > 0 && rows[i - 1].rank === r.rank) || (i < rows.length - 1 && rows[i + 1].rank === r.rank);
  });

  const byRegion = new Map<string, PalmaresRow[]>();
  for (const r of rows) {
    const list = byRegion.get(r.region) ?? [];
    list.push(r);
    byRegion.set(r.region, list);
  }
  const regions: PalmaresRegion[] = [...byRegion.entries()].map(([name, list]) => {
    const coldest = list[0];
    const mildest = list[list.length - 1];
    return {
      name,
      rank: 0,
      count: list.length,
      meanJanMinC: round1(list.reduce((a, r) => a + r.janMinC, 0) / list.length),
      coldest: { name: coldest.name, code: coldest.code, janMinC: coldest.janMinC },
      mildest: { name: mildest.name, code: mildest.code, janMinC: mildest.janMinC },
      coldestDesignT: Math.min(...list.map((r) => r.designT)),
    };
  });
  regions.sort((a, b) => a.meanJanMinC - b.meanJanMinC || byName.compare(a.name, b.name));
  regions.forEach((g, i) => {
    g.rank = i > 0 && regions[i - 1].meanJanMinC === g.meanJanMinC ? regions[i - 1].rank : i + 1;
  });

  const stepMap = new Map<number, number>();
  for (const r of rows) stepMap.set(r.designT, (stepMap.get(r.designT) ?? 0) + 1);
  const steps: PalmaresStep[] = [...stepMap.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([t, count]) => ({ t, municipalities: count, modelsHeat: heatAt(t).heat, modelsHeatFull: heatAt(t).full }));

  const generic = rows.filter((r) => r.designGeneric);
  return {
    rows,
    regions,
    steps,
    totals: {
      municipalities: rows.length,
      excluded,
      stations: new Set(rows.map((r) => r.stationId)).size,
      models: models.length,
      modelsWithMinTemp: models.filter((m) => m.minTempC !== null && Number.isFinite(m.minTempC)).length,
      modelsHoldFull: models.filter((m) => m.holdsFullAt15).length,
      genericDesign: generic.length,
      genericValues: [...new Set(generic.map((r) => r.designT))].sort((a, b) => a - b),
    },
  };
}

/** Édition affichée sur la page publique et ses visuels (les articles de saison prennent l'année de leur préparation). */
export const PALMARES_EDITION = 2026;

/** Rangée d'une municipalité (ancre #m-<code> de la page). */
export const palmaresAnchor = (code: string) => `m-${code}`;
