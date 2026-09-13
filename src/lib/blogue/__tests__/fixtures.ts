/* Faits fictifs pour les tests du blogue (marques, municipalités et stations inventées : aucune donnée réelle). */
import { normalizeBlogue } from "../store";
import { buildPalmares, type PalmaresMuniInput } from "../palmares";
import type { BlogFacts, FactModel } from "../facts";
import { DEFAULT_AUTHOR, type BlogArticle, type BlogueData } from "../types";

export function fixtureFactModels(): FactModel[] {
  const specs: Array<[string, "murale" | "centrale", number, number | null, number, number | null]> = [
    // marque, type, puissance, chaleur à −15 °C, LogisVert, froid minimal
    ["Nordik", "murale", 9000, 9000, 1200, -30],
    ["Nordik", "murale", 12000, 11800, 1500, -25],
    ["Boreal", "murale", 12000, 13400, 1650, -30],
    ["Boreal", "murale", 12000, 9600, 1400, -15],
    ["Laurentis", "murale", 18000, 16200, 2100, null],
    ["Laurentis", "murale", 9000, 7200, 1100, -26],
    ["Frimas", "murale", 18000, 18000, 2300, -30],
    ["Frimas", "murale", 12000, null, 0, null],
    ["Frimas", "murale", 9000, 8100, 1300, -23],
    ["Nordik", "centrale", 24000, 22000, 3800, -21],
    ["Boreal", "centrale", 24000, 24500, 4200, -30],
    ["Laurentis", "centrale", 36000, 30000, 5100, null],
  ];
  return specs.map(([brand, kind, nominal, h5, lv, min], i) => ({
    slug: `${brand.toLowerCase()}-essai-${i}`,
    brand,
    seriesName: `Série Essai ${String.fromCharCode(65 + i)}`,
    name: `Série Essai ${String.fromCharCode(65 + i)} XR${100 + i}`,
    kind,
    nominalBtu: nominal,
    h5Btu: h5,
    cop5: h5 === null ? null : Math.round((1.8 + (i % 5) * 0.11) * 100) / 100,
    logisVertDollars: lv,
    minTempC: min,
    coldClimate: i % 2 === 0,
  }));
}

const st = (name: string, id: string, janMinC: number | null, d20: number | null, period = "1991-2020") => ({ name, id, period, km: 4.2, janMinC, janMeanC: janMinC === null ? null : Math.round((janMinC + 5.1) * 10) / 10, daysBelowMinus20: d20, url: "https://climat.meteo.gc.ca/" });

export function fixtureMunis(): PalmaresMuniInput[] {
  return [
    { code: "90001", name: "Val-Givre", href: "/thermopompe/val-givre", region: "Nordie", lat: 48.1, lon: -78.0, population: 20000, design: { t: -32, generic: false, fsa: "J9X" }, station: st("VAL-GIVRE A", "7090001", -23.4, 52.4) },
    { code: "90002", name: "Lac-Frimas", href: "/thermopompe/lac-frimas", region: "Nordie", lat: 48.4, lon: -78.6, population: 3000, design: { t: -32, generic: false, fsa: "J9Z" }, station: st("VAL-GIVRE A", "7090001", -23.4, 52.4) },
    { code: "90003", name: "Saint-Bise", href: "/thermopompe/saint-bise", region: "Laurentie", lat: 46.8, lon: -71.2, population: 50000, design: { t: -25, generic: false, fsa: "G1A" }, station: st("SAINT-BISE", "7090003", -17.65, 31.5) },
    { code: "90004", name: "Pointe-Verglas", href: null, region: "Laurentie", lat: 46.6, lon: -71.8, population: 800, design: { t: -26, generic: true, fsa: "G0A" }, station: st("POINTE-VERGLAS", "7090004", -16.9, 26.2) },
    { code: "90005", name: "Cap-Doux", href: "/thermopompe/cap-doux", region: "Sudie", lat: 45.3, lon: -73.6, population: 90000, design: { t: -23, generic: false, fsa: "J4A" }, station: st("CAP-DOUX", "7090005", -12.3, 9.5, "1981-2010") },
    { code: "90006", name: "Havre-Tiède", href: "/thermopompe/havre-tiede", region: "Sudie", lat: 45.5, lon: -73.2, population: 12000, design: { t: -24, generic: false, fsa: "J3A" }, station: st("HAVRE-TIEDE", "7090006", -13.25, null) },
    // Sans données : station absente, nuits de janvier inconnues, température de conception inconnue.
    { code: "90007", name: "Anse-Muette", href: null, region: "Sudie", lat: 45.9, lon: -72.0, population: 400, design: { t: -25, generic: false, fsa: "J0B" }, station: null },
    { code: "90008", name: "Mont-Sourd", href: null, region: "Laurentie", lat: 47.0, lon: -70.5, population: 600, design: { t: -26, generic: false, fsa: "G0B" }, station: st("MONT-SOURD", "7090008", null, null) },
    { code: "90009", name: "Rive-Close", href: null, region: "Laurentie", lat: 47.1, lon: -70.2, population: 700, design: null, station: st("RIVE-CLOSE", "7090009", -15.1, 20.1) },
  ];
}

export function fixtureFacts(): BlogFacts {
  const models = fixtureFactModels();
  return {
    date: "2026-09-13",
    year: 2026,
    listDate: "17 juillet 2025",
    listCheckedDate: "1 septembre 2026",
    models,
    prices: [
      { kind: "murale", btu: 12000, tier: "toutes", min: 3250, max: 5100, sources: 7 },
      { kind: "multizone", zones: 2, tier: "toutes", min: 4500, max: 8500, sources: 1 },
      { kind: "multizone", zones: 3, tier: "toutes", min: 7500, max: 10500, sources: 1 },
      { kind: "centrale", btu: 24000, tier: "toutes", min: 8500, max: 11500, sources: 6 },
    ],
    pricesConsultedAt: "2026-09-10",
    palmares: buildPalmares(
      fixtureMunis(),
      models.map((m) => ({ minTempC: m.minTempC, holdsFullAt15: m.h5Btu !== null && m.h5Btu >= m.nominalBtu })),
    ),
    palmaresDate: "2026-09-01",
  };
}

let n = 0;
export function fixtureArticle(over: Partial<BlogArticle> = {}): BlogArticle {
  n++;
  return {
    id: `a-essai${String(n).padStart(4, "0")}`,
    slug: `article-essai-${n}`,
    // Aucun chiffre dans le titre : il serait contrôlé comme un nombre sans source.
    title: `Article d’essai ${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[n % 26]}`,
    description: "Un chapeau d’essai assez long pour passer le contrôle de longueur minimale.",
    body: Array.from({ length: 30 }, () => "Une phrase simple, sans chiffre, pour remplir le corps de l’article.").join(" "),
    category: "choisir",
    author: DEFAULT_AUTHOR,
    cover: null,
    status: "brouillon",
    template: "libre",
    references: [{ label: "Source d’essai", url: "https://exemple.ca/source" }],
    source: { values: {}, labels: {}, texts: [] },
    figures: [],
    mentions: [],
    createdAt: "2026-09-13T12:00:00.000Z",
    updatedAt: "2026-09-13T12:00:00.000Z",
    presencePostIds: [],
    ...over,
  };
}

export const emptyBlogue = (): BlogueData => normalizeBlogue({});
