/* ==================================================================
   Gabarit de la page « municipalité » (/thermopompe/[slug])

   Un seul gabarit, écrit une fois : le texte change parce que les
   données changent (normales de la station, recensement, distances,
   voisines, MRC, classement adapté au froid local). Aucun texte n'est
   varié artificiellement, aucune prose n'est générée par ville. Les
   explications générales restent courtes et chaque valeur n'est dite
   qu'une fois : la page porte surtout ce qui est propre à la municipalité.

   buildMunicipalPage() est pur (données en entrée, textes en sortie) :
   la page le rend tel quel, et scripts/villes/check-unicite.ts s'en sert
   pour mesurer la ressemblance entre pages voisines (pageVisibleText).

   Les repères locaux (housingRows, periodsBlock, neighbourStationRow,
   neighbourSummary, neighbourTerritories, densityOf) servent aussi au
   gabarit des 53 villes historiques : mêmes données, mêmes phrases, des
   chiffres différents. Ce sont eux qui distinguent deux pages voisines
   qui partagent la même station de normales.
   ================================================================== */
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { clampDescription, fitTitle } from "./index";
import { fmtInt, fmtTemp, referenceHdd } from "./cities-data";
import { aNom, deNom } from "./cities-text";
import {
  PERIOD_LABELS,
  aggregate,
  displayName,
  getDataset,
  getGroup,
  getRegion,
  getStation,
  groupMembers,
  groupTitle,
  hubHref,
  inGroup,
  neighboursOf,
  ofGroup,
  quebecAggregate,
  type Aggregate,
  type Municipality,
  type MuniGroup,
  type MuniStation,
} from "./municipalites";

export type Gauge = { t: number } | { a: number; b: number; aLabel: string; bLabel: string };
export type Row = { label: string; value: string; note?: string; gauge?: Gauge };
export type ColdTier = "tres-froid" | "froid" | "modere";
export type RankingSlug = "grand-froid" | "efficacite-hspf2";

/** Chiffres du catalogue (liste LogisVert d'Hydro-Québec, certifications) communs à toutes les pages. */
export interface CatalogueFacts {
  coldCount: number;
  holdsFullCount: number;
  maxLogisVert: number;
}

export const RANKING_BY_TIER: Record<ColdTier, RankingSlug> = { "tres-froid": "grand-froid", froid: "grand-froid", modere: "efficacite-hspf2" };
export const RANKING_LIMIT = 3;
/** Voisines montrées dans le tableau comparatif : assez pour situer la municipalité sans noyer la page. */
export const NEIGHBOUR_LIMIT = 6;

/* ---------------- Formats ---------------- */

const fr1 = (n: number) => n.toLocaleString("fr-CA", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
export const fmtPct = (n: number) => `${fr1(n)} %`;
export const fmtKm = (n: number) => `${n.toLocaleString("fr-CA", { maximumFractionDigits: 1 })} km`;
const fmtGap = (n: number) => `${fr1(Math.abs(n))} °C`;
const signPct = (n: number) => `${n >= 0 ? "+" : "−"}${Math.abs(n)} %`;
const ordinal = (n: number) => (n === 1 ? "1re" : `${n.toLocaleString("fr-CA")}e`);
const has = (n: number | null | undefined): n is number => n !== null && n !== undefined;

/* ---------------- Règles ---------------- */

export interface DesignTemp {
  t: number;
  zone: string;
  /** Vrai si la table n'a pas de zone propre pour ce code postal (valeur générale du Québec). */
  generic: boolean;
  fsa: string | null;
}

/** Température de conception de la table régionale du site, pour le code postal de l'hôtel de ville (MAMH). */
export function designTempFor(postal: string | null): DesignTemp | null {
  if (!postal) return null;
  const z = resolvePostalCode(postal);
  if (!z) return null;
  return { t: z.designTempC, zone: z.region, generic: z.region === "Québec (Général)", fsa: postal.slice(0, 3).toUpperCase() };
}

/**
 * Palier de froid, décidé sur les normales de la station (jamais sur une estimation) :
 * très froid si les nuits de janvier descendent à -20 °C ou moins en moyenne, ou 40 jours et plus sous -20 °C ;
 * froid à partir de -15 °C ou 20 jours sous -20 °C ; modéré sinon.
 */
export function coldTier(s: Pick<MuniStation, "janMinC" | "janMeanC" | "daysBelowMinus20">): ColdTier {
  const d20 = s.daysBelowMinus20;
  if (s.janMinC === null && d20 === null) {
    if (s.janMeanC !== null && s.janMeanC <= -15) return "tres-froid";
    if (s.janMeanC !== null && s.janMeanC <= -10) return "froid";
    return "modere";
  }
  if ((s.janMinC !== null && s.janMinC <= -20) || (d20 !== null && d20 >= 40)) return "tres-froid";
  if ((s.janMinC !== null && s.janMinC <= -15) || (d20 !== null && d20 >= 20)) return "froid";
  return "modere";
}

/** Nom de station lisible dans une phrase : « station LAUZON ». */
export const stationLabel = (s: MuniStation) => `station ${s.name}`;

/** Comparaison « x % dans la MRC …, y % au Québec » (seulement les valeurs publiées). */
function versus(g: MuniGroup | null, gv: number | null, qv: number | null): string {
  const parts: string[] = [];
  if (g && has(gv)) parts.push(`${fmtPct(gv)} ${inGroup(g)}`);
  if (has(qv)) parts.push(`${fmtPct(qv)} au Québec`);
  return parts.join(", ");
}

/** Complément d'une part publiée (100 − x), arrondi comme elle. */
const rest = (n: number) => Math.round((100 - n) * 10) / 10;
/** Superficie : une décimale sous 100 km², sinon au km² près. */
const fmtArea = (n: number) => `${n.toLocaleString("fr-CA", { maximumFractionDigits: n < 100 ? 1 : 0 })} km²`;

/* ---------------- Repères locaux partagés par les deux gabarits ---------------- */

/**
 * Densité de population : habitants du recensement de 2021 ÷ superficie du répertoire des
 * municipalités (km²). Null si l'une des deux valeurs manque.
 */
export function densityOf(m: Municipality): number | null {
  const pop = m.census?.population2021;
  const a = m.areaKm2;
  return has(pop) && has(a) && a > 0 ? Math.round((pop / a) * 10) / 10 : null;
}

/**
 * Rangs d'une municipalité au Québec (population, densité), parmi celles dont la valeur est publiée.
 * Recalculés quand le jeu change (développement, tests) : le classement est une lecture des données,
 * jamais une liste écrite à la main.
 */
type QRank = { map: Map<string, number>; of: number };
let qRanksMemo: { key: unknown; pop: Map<string, number>; dens: Map<string, number>; popOf: number; densOf: number; old: QRank; sd: QRank; own: QRank } | null = null;

function quebecRanks() {
  const data = getDataset();
  if (qRanksMemo && qRanksMemo.key === data) return qRanksMemo;
  const rank = (value: (m: Municipality) => number | null) => {
    const list = data.municipalities.map((m) => ({ code: m.code, v: value(m) })).filter((x): x is { code: string; v: number } => has(x.v));
    list.sort((a, b) => b.v - a.v || a.code.localeCompare(b.code));
    return { map: new Map(list.map((x, i) => [x.code, i + 1])), of: list.length };
  };
  const pop = rank((m) => m.census?.population2021 ?? null);
  const dens = rank((m) => densityOf(m));
  const old = rank((m) => m.census?.builtTo1980Pct ?? null);
  const sd = rank((m) => m.census?.singleDetachedPct ?? null);
  const own = rank((m) => m.census?.ownerPct ?? null);
  qRanksMemo = { key: data, pop: pop.map, dens: dens.map, popOf: pop.of, densOf: dens.of, old, sd, own };
  return qRanksMemo;
}

/**
 * Les logements du recensement de 2021, lus pour le chauffage : âge du parc, type de construction,
 * mode d'occupation, densité. Mêmes phrases sur les deux gabarits, parce que ce sont les mêmes
 * données ; ce qui change d'une page à l'autre, ce sont les chiffres.
 */
export function housingRows(m: Municipality): Row[] {
  const c = m.census;
  if (!c || c.population2021 === null || c.dwellings2021 === null) return [];
  const name = m.name;
  // Laval, Montréal, Gatineau… sont à elles seules leur territoire : s'y comparer n'apprendrait rien
  // (« 1re sur 1 », « 100 % des logements »). Le rang et la comparaison restent alors ceux du Québec.
  const g0 = getGroup(m.group);
  const members = g0 ? groupMembers(g0) : [];
  const group = members.length > 1 ? g0 : null;
  const gAgg = group ? aggregate(members) : null;
  const qAgg = quebecAggregate();
  const pop = c.population2021;
  const dw = c.dwellings2021;
  const pct = c.builtTo1980Pct;
  const sd = c.singleDetachedPct ?? null;
  const own = c.ownerPct ?? null;
  const dens = densityOf(m);
  const rankIn = (value: (x: Municipality) => number | null | undefined) => {
    const list = members.filter((x) => has(value(x))).sort((a, b) => (value(b) as number) - (value(a) as number));
    const i = list.findIndex((x) => x.code === m.code);
    return i >= 0 ? { rank: i + 1, of: list.length } : null;
  };
  const popRank = rankIn((x) => x.census?.population2021);
  const oldRank = rankIn((x) => x.census?.builtTo1980Pct);
  const qr = quebecRanks();
  const qPop = qr.pop.get(m.code) ?? null;
  const qDens = qr.dens.get(m.code) ?? null;
  const shareOfGroup = group && gAgg && gAgg.dwellings > 0 ? Math.round((dw / gAgg.dwellings) * 1000) / 10 : null;
  const rows: Row[] = [
    {
      label: "Logements occupés",
      value: fmtInt(dw),
      note: `${fmtInt(pop)} habitants${group && popRank ? ` ; ${ordinal(popRank.rank)} municipalité la plus peuplée ${ofGroup(group)} sur ${popRank.of}` : ""}${
        shareOfGroup !== null && group ? `, soit ${fmtPct(shareOfGroup)} des logements ${ofGroup(group)}` : ""
      }${qPop ? ` ; ${ordinal(qPop)} du Québec sur les ${fmtInt(qr.popOf)} municipalités dont la population de 2021 est publiée` : ""}.`,
    },
  ];
  if (pct !== null) {
    rows.push({
      label: "Construits en 1980 ou avant",
      value: fmtPct(pct),
      note: `${has(c.builtTo1980) ? `${fmtInt(c.builtTo1980)} logements, contre ` : ""}${versus(group, gAgg?.builtTo1980Pct ?? null, qAgg.builtTo1980Pct)}${group && oldRank ? ` ; ${ordinal(oldRank.rank)} part la plus élevée sur ${oldRank.of}` : ""}. Isolation d'origine à vérifier : la charge se mesure sur place.`,
      gauge: has(gAgg?.builtTo1980Pct) && group ? { a: pct, b: gAgg!.builtTo1980Pct as number, aLabel: name, bLabel: group.kind === "MRC" ? "MRC" : "Territoire" } : undefined,
    });
  } else {
    rows.push({ label: "Période de construction", value: "Non publiée", note: "Statistique Canada ne publie pas cette répartition pour la municipalité." });
  }
  if (sd !== null) {
    rows.push({
      label: "Maisons individuelles non attenantes",
      value: fmtPct(sd),
      // Là où tout le parc est en maisons individuelles, il n'y a pas de « reste » à décrire.
      note: `${has(c.singleDetached) ? `${fmtInt(c.singleDetached)} logements, contre ` : ""}${versus(group, gAgg?.singleDetachedPct ?? null, qAgg.singleDetachedPct)} (données intégrales). ${
        rest(sd) > 0
          ? `Les ${fmtPct(rest(sd))} restants, soit ${has(c.singleDetached) && has(c.typeTotal) ? `${fmtInt((c.typeTotal as number) - (c.singleDetached as number))} logements` : "les autres"}, sont attenants ou en immeuble : mur mitoyen, balcon ou toit partagé, d'où une pose de l'unité extérieure à négocier et, souvent, une murale ou une multizone plutôt qu'une centrale.`
          : "Aucun logement attenant ni en immeuble : la pose de l'unité extérieure se règle sur le terrain, sans mur mitoyen ni balcon partagé."
      }`,
    });
  }
  if (own !== null) {
    rows.push({
      label: "Ménages propriétaires",
      value: fmtPct(own),
      note: `${has(c.owners) ? `${fmtInt(c.owners)} ménages, contre ` : ""}${versus(group, gAgg?.ownerPct ?? null, qAgg.ownerPct)}. ${
        rest(own) > 0
          ? `Les ${fmtPct(rest(own))} de ménages locataires dépendent du propriétaire de l'immeuble pour un changement de chauffage.`
          : "Aucun ménage locataire : le remplacement du chauffage se décide chez soi."
      }`,
    });
  }
  // Où la municipalité se situe au Québec sur les trois parts qui décident du type d'installation.
  const qOld = qr.old.map.get(m.code) ?? null;
  const qSd = qr.sd.map.get(m.code) ?? null;
  const qOwn = qr.own.map.get(m.code) ?? null;
  if (qOld || qSd || qOwn) {
    const parts = [
      qOld ? `${ordinal(qOld)} pour la part de logements de 1980 ou avant, sur ${fmtInt(qr.old.of)}` : null,
      qSd ? `${ordinal(qSd)} pour celle des maisons individuelles, sur ${fmtInt(qr.sd.of)}` : null,
      qOwn ? `${ordinal(qOwn)} pour celle des ménages propriétaires, sur ${fmtInt(qr.own.of)}` : null,
    ].filter((x): x is string => !!x);
    rows.push({
      label: "Dans l'ensemble du Québec",
      value: qOld ? `${ordinal(qOld)} parc le plus ancien` : qSd ? `${ordinal(qSd)} pour les maisons individuelles` : `${ordinal(qOwn as number)} pour les ménages propriétaires`,
      note: `${parts.join(" ; ")}. Rangs calculés sur les municipalités dont Statistique Canada publie la part, de la plus élevée à la plus basse.`,
    });
  }
  if (dens !== null && has(m.areaKm2)) {
    rows.push({
      label: "Densité",
      value: `${fmtInt(dens)} habitants au km²`,
      note: `Sur ${fmtArea(m.areaKm2)} de territoire (répertoire des municipalités du Québec)${qDens ? `, ${ordinal(qDens)} densité du Québec sur ${fmtInt(qr.densOf)}` : ""}. Plus le tissu est serré, plus la pose compose avec le voisinage : dégagement autour de l'unité extérieure, distance aux fenêtres d'à côté, bruit à la limite du terrain.`,
    });
  }
  return rows;
}

/** Barres de la période de construction (données-échantillon 25 %), ou null si la série n'est pas publiée. */
export function periodsBlock(m: Municipality): MunicipalPage["periods"] {
  const c = m.census;
  const per = c?.periods ?? [];
  if (!c || per.length !== PERIOD_LABELS.length || !per.every(has)) return null;
  const total = per.reduce((a, v) => a + (v as number), 0);
  const share = (v: number) => (total > 0 ? Math.round((v / total) * 1000) / 10 : null);
  // Les deux bouts de la série : le bâti d'avant 1961, et celui élevé depuis 2011 sous un code du
  // bâtiment plus exigeant. Deux nombres publiés, pas une interprétation.
  const oldest = per[0] as number;
  const recent = (per[6] as number) + (per[7] as number);
  const sOld = share(oldest);
  const sNew = share(recent);
  return {
    eyebrow: "Recensement 2021",
    title: "Quand les logements ont été construits",
    intro: `${fmtInt(c.periodTotal ?? 0)} logements occupés ${deNom(m.name)}, par période de construction. ${fmtInt(oldest)} datent de 1960 ou avant${sOld !== null ? ` (${fmtPct(sOld)})` : ""} et ${fmtInt(recent)} ont été bâtis depuis 2011${sNew !== null ? ` (${fmtPct(sNew)})` : ""} : entre les deux, l'isolation d'origine et l'étanchéité n'ont pas les mêmes exigences, et la charge de chauffage non plus.`,
    bars: per.map((v, i) => {
      const s = share(v as number);
      return { label: PERIOD_LABELS[i], value: v as number, display: fmtInt(v as number), share: s !== null ? fmtPct(s) : undefined, old: i < 2 };
    }),
    footnote: "Données-échantillon (25 %) arrondies par Statistique Canada : le total peut différer de quelques unités du nombre de logements occupés.",
  };
}

/**
 * Voisine la plus proche qui relève d'une autre station : l'écart de degrés-jours entre deux relevés
 * voisins, mesuré, dit une fois pour toutes ce que vaut une transposition d'une municipalité à l'autre.
 */
export function neighbourStationRow(m: Municipality): Row | null {
  const here = getStation(m.station?.key);
  if (!here || here.hdd18 === null) return null;
  const found = neighboursOf(m, 8).find(({ m: n }) => {
    const s = getStation(n.station?.key);
    return !!s && s.key !== here.key && s.hdd18 !== null;
  });
  if (!found) return null;
  const s = getStation(found.m.station?.key) as MuniStation;
  const gap = Math.round((s.hdd18 as number) - here.hdd18);
  return {
    label: "Voisine rattachée à une autre station",
    value: `${displayName(found.m)}, à ${fmtKm(found.km)}`,
    note: `Sa ${stationLabel(s)} totalise ${fmtInt(s.hdd18 as number)} degrés-jours, ${gap === 0 ? `autant que les ${fmtInt(here.hdd18)} d'ici` : `soit ${gap > 0 ? "+" : "−"}${fmtInt(Math.abs(gap))} par rapport aux ${fmtInt(here.hdd18)} d'ici`}. Un calcul de charge ne se transpose pas d'une municipalité à l'autre sans regarder de quelle station vient le chiffre.`,
  };
}

/** Territoires (MRC, agglomérations) dont relèvent les voisines les plus proches, sauf le sien. */
export function neighbourTerritories(m: Municipality, limit = 6): string[] {
  const own = m.group;
  const seen = new Map<string, string>();
  for (const { m: n } of neighboursOf(m, limit)) {
    if (!n.group || n.group === own || seen.has(n.group)) continue;
    const g = getGroup(n.group);
    if (g) seen.set(n.group, groupTitle(g));
  }
  return [...seen.values()];
}

/* ---------------- Voisines (tableau comparatif) ---------------- */

export const NEIGHBOUR_COLUMNS = [
  { key: "km", label: "Distance" },
  { key: "hdd", label: "Degrés-jours" },
  { key: "jan", label: "Nuits de janvier" },
  { key: "pct", label: "Logements de 1980 ou avant" },
  { key: "sd", label: "Maisons individuelles" },
  { key: "pop", label: "Habitants" },
] as const;

export interface NeighbourRow {
  key: string;
  href: string | null;
  name: string;
  self: boolean;
  t: number;
  cells: Record<(typeof NEIGHBOUR_COLUMNS)[number]["key"], string>;
}

function neighbourRow(n: Municipality, km: number | null, self: boolean): NeighbourRow {
  const s = getStation(n.station?.key);
  const c = n.census;
  return {
    key: n.code,
    href: self ? null : `/thermopompe/${n.slug}`,
    name: displayName(n),
    self,
    t: designTempFor(n.postal)?.t ?? -25,
    cells: {
      km: self ? "—" : has(km) ? fmtKm(km) : "—",
      hdd: has(s?.hdd18) ? fmtInt(s!.hdd18) : "—",
      jan: has(s?.janMinC) ? fmtTemp(s!.janMinC) : "—",
      pct: has(c?.builtTo1980Pct) ? fmtPct(c!.builtTo1980Pct as number) : "—",
      sd: has(c?.singleDetachedPct) ? fmtPct(c!.singleDetachedPct as number) : "—",
      pop: has(c?.population2021) ? fmtInt(c!.population2021) : "—",
    },
  };
}

/** Tableau « municipalité + voisines avec page » (aussi utilisé par les pages des 53 villes historiques). */
export function neighbourTable(m: Municipality, limit = NEIGHBOUR_LIMIT): NeighbourRow[] {
  return [neighbourRow(m, null, true), ...neighboursOf(m, limit).map(({ m: n, km }) => neighbourRow(n, km, false))];
}

/**
 * Ce que le tableau des voisines montre, en une phrase : l'étendue des distances, des degrés-jours et
 * de l'âge du parc autour de la municipalité. Lecture des mêmes valeurs, rien d'ajouté.
 */
export function neighbourSummary(m: Municipality, limit = NEIGHBOUR_LIMIT): string {
  const ns = neighboursOf(m, limit);
  if (!ns.length) return "Les plus proches qui ont leur page : leur froid et leurs logements, côte à côte.";
  // Unité sur la seule borne haute : « de 4,5 à 9,4 km », jamais « de 4,5 km à 9,4 km ».
  const range = (xs: number[], bare: (n: number) => string, unit: (n: number) => string) =>
    xs.length ? (Math.min(...xs) === Math.max(...xs) ? unit(xs[0]) : `${bare(Math.min(...xs))} à ${unit(Math.max(...xs))}`) : null;
  const num = (n: number) => n.toLocaleString("fr-CA", { maximumFractionDigits: 1 });
  const same = (xs: number[]) => xs.length > 0 && Math.min(...xs) === Math.max(...xs);
  const kmList = ns.map((n) => n.km);
  const hddList = ns.map((n) => getStation(n.m.station?.key)?.hdd18).filter(has);
  const oldList = ns.map((n) => n.m.census?.builtTo1980Pct).filter(has);
  const kms = range(kmList, num, fmtKm);
  const hdds = range(hddList, fmtInt, fmtInt);
  const olds = range(oldList, fr1, fmtPct);
  const parts = [`${ns.length > 1 ? `Les ${ns.length} plus proches qui ont leur page sont de ${kms}` : `La plus proche qui a sa page est à ${kms}`}`];
  const many = ns.length > 1;
  if (hdds) parts.push(same(hddList) ? `${many ? "elles partagent les mêmes" : "elle compte"} ${hdds} degrés-jours` : `leurs degrés-jours vont de ${hdds}`);
  if (olds) parts.push(same(oldList) ? `${many ? "et la même part" : "et une part"} de logements de 1980 ou avant, ${olds}` : `leur part de logements de 1980 ou avant, de ${olds}`);
  return `${parts.join(" ; ")}. Le froid et les logements, côte à côte.`;
}

/* ---------------- Bandeau MRC ---------------- */

export interface PlaceBlock {
  eyebrow: string;
  title: string;
  text: string;
  href: string | null;
  linkLabel: string;
}

export function placeBlock(m: Municipality, agg?: Aggregate): PlaceBlock | null {
  const group = getGroup(m.group);
  if (!group) return null;
  const a = agg ?? aggregate(groupMembers(group));
  // Les voisines immédiates débordent souvent du territoire : le dire situe la municipalité mieux qu'une carte.
  const others = neighbourTerritories(m);
  const around = others.length ? ` Les voisines les plus proches ${deNom(m.name)} relèvent ${others.length > 1 ? "d'autres territoires" : "d'un autre territoire"} : ${others.join(", ")}.` : "";
  return {
    eyebrow: getRegion(m.region)?.name ?? "Québec",
    title: groupTitle(group),
    text: `${
      a.count > 1
        ? `${a.count} municipalités, ${fmtInt(a.population)} habitants en 2021 : leurs stations, leurs logements et celles qui n'ont pas de page propre.`
        : `${displayName(m)} forme à elle seule ce territoire : ${fmtInt(a.population)} habitants en 2021, une seule station de référence.`
    }${around}`,
    href: hubHref(group),
    linkLabel: `Toutes les municipalités ${ofGroup(group)}`,
  };
}

/* ---------------- Page ---------------- */

export interface MunicipalPage {
  m: Municipality;
  name: string;
  station: MuniStation;
  group: MuniGroup | null;
  regionName: string;
  tier: ColdTier;
  design: DesignTemp;
  title: string;
  description: string;
  path: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  hero: { region: string; intro: string; answer: string; stats: Array<{ label: string; value: string }>; source: string };
  climate: { eyebrow: string; title: string; rows: Row[] };
  sizing: { eyebrow: string; title: string; rows: Row[] };
  housing: { eyebrow: string; title: string; rows: Row[] };
  periods: { eyebrow: string; title: string; intro: string; bars: Array<{ label: string; value: number; display: string; share?: string; old: boolean }>; footnote: string } | null;
  neighbours: { title: string; intro: string; rows: NeighbourRow[] };
  ranking: { slug: RankingSlug; title: string; intro: string };
  cta: { title: string; text: string };
  place: PlaceBlock | null;
  faq: Array<{ question: string; answer: string }>;
  sources: Array<{ label: string; url: string }>;
  attribution: string;
}

export function buildMunicipalPage(m: Municipality, facts: CatalogueFacts): MunicipalPage | null {
  if (!m.eligible || !m.station || !m.census || m.census.population2021 === null || m.census.dwellings2021 === null) return null;
  const s = getStation(m.station.key);
  const design = designTempFor(m.postal);
  if (!s || !design) return null;
  const name = m.name;
  const shown = displayName(m);
  const group = getGroup(m.group);
  const regionName = getRegion(m.region)?.name ?? "Québec";
  const tier = coldTier(s);
  const km = fmtKm(m.station.km);
  const st = stationLabel(s);
  const c = m.census;
  const pop = c.population2021 as number;
  const dw = c.dwellings2021 as number;
  const pct = c.builtTo1980Pct;
  const sd = c.singleDetachedPct ?? null;
  const own = c.ownerPct ?? null;
  const members = group ? groupMembers(group) : [];
  const gAgg = group ? aggregate(members) : null;
  const ref = referenceHdd();
  const hdd = s.hdd18;
  const vsMtl = hdd !== null && ref ? Math.round(((hdd - ref) / ref) * 100) : null;
  const d20 = s.daysBelowMinus20;
  const janMin = s.janMinC;
  const path = `/thermopompe/${m.slug}`;
  const hub = hubHref(group);

  /* ---- Point de certification (-15 °C) ---- */
  const gap = janMin !== null ? Math.round((janMin + 15) * 10) / 10 : null;
  const certSentence =
    gap === null
      ? "Comparez les machines sur leur capacité certifiée à -15 °C."
      : gap <= 0
        ? `Les nuits de janvier sont ${fmtGap(gap)} plus froides que -15 °C : visez une machine qui garde toute sa capacité nominale à -15 °C (${fmtInt(facts.holdsFullCount)} modèles de la liste LogisVert).`
        : `Les nuits de janvier restent ${fmtGap(gap)} au-dessus de -15 °C : une machine dimensionnée sur sa capacité certifiée à -15 °C garde une marge la plupart des nuits.`;
  // Le temps de marche de l'appoint dépend de la maison, du dimensionnement et du modèle : aucune durée promise.
  const appoint = {
    "tres-froid": { value: "À prévoir", note: "Sous -25 °C, la capacité des thermopompes baisse, plus ou moins selon le modèle : plinthes ou fournaise en relève, dont le temps de marche dépend de la maison et du dimensionnement." },
    froid: { value: "Utile lors des pointes", note: "Les plinthes existantes prennent le relais lors des nuits les plus froides ; combien d'heures, cela dépend de la maison, du dimensionnement et du modèle." },
    modere: { value: "Surtout lors des pointes", note: "Le relais des plinthes reste limité si la machine est bien dimensionnée pour la maison ; une machine trop petite les fait tourner bien plus souvent." },
  }[tier];

  /* ---- Héros ---- */
  const answer = [
    janMin !== null
      ? `${aNom(name, true)}, les nuits de janvier descendent en moyenne à ${fmtTemp(janMin)}${d20 !== null ? `, et ${fmtInt(d20)} jours par an passent sous -20 °C` : ""} (${st}, à ${km}).`
      : `${aNom(name, true)}, janvier affiche une moyenne de ${fmtTemp(s.janMeanC)} (${st}, à ${km}).`,
    `Retenez la capacité certifiée à -15 °C${tier === "tres-froid" ? " et prévoyez un appoint" : ""}.`,
    pct !== null ? `${fmtPct(pct)} des ${fmtInt(dw)} logements occupés datent de 1980 ou avant.` : `${fmtInt(dw)} logements occupés en 2021.`,
  ].join(" ");

  const stats: Array<{ label: string; value: string }> = [{ label: "Habitants (2021)", value: fmtInt(pop) }];
  if (hdd !== null) stats.push({ label: "Degrés-jours de chauffage", value: fmtInt(hdd) });
  stats.push(d20 !== null ? { label: "Jours sous -20 °C", value: fmtInt(d20) } : { label: "Nuits de janvier", value: fmtTemp(janMin) });
  stats.push(pct !== null ? { label: "Logements de 1980 ou avant", value: fmtPct(pct) } : { label: "Logements occupés", value: fmtInt(dw) });

  /* ---- Normales de la station ---- */
  const climateRows: Row[] = [];
  if (hdd !== null) {
    climateRows.push({
      label: "Degrés-jours de chauffage",
      value: `${fmtInt(hdd)} par an`,
      note: vsMtl !== null && ref ? `${signPct(vsMtl)} par rapport à Montréal (${fmtInt(ref)}).` : undefined,
      gauge: vsMtl !== null && ref ? { a: hdd, b: ref, aLabel: name, bLabel: "Montréal" } : undefined,
    });
  }
  if (s.janMeanC !== null) {
    climateRows.push({
      label: "Janvier",
      value: `${fmtTemp(s.janMeanC)} en moyenne${janMin !== null ? `, ${fmtTemp(janMin)} la nuit` : ""}`,
      note: gap !== null ? `Nuits ${gap <= 0 ? `${fmtGap(gap)} sous le` : `${fmtGap(gap)} au-dessus du`} point de certification de -15 °C.` : undefined,
      gauge: { t: s.janMeanC },
    });
  }
  if (d20 !== null) climateRows.push({ label: "Jours sous -20 °C", value: `${fmtInt(d20)} par an` });
  if (s.extremeMinC !== null) {
    climateRows.push({ label: "Record de froid", value: `${fmtTemp(s.extremeMinC)}${s.extremeMinYear ? ` (${s.extremeMinYear})` : ""}`, gauge: { t: s.extremeMinC } });
  }
  climateRows.push({
    label: "Température de conception",
    value: `${design.t} °C`,
    note: `Table régionale du site, code postal ${design.fsa} : valeur ${design.generic ? "générale" : `de la zone « ${design.zone} »`}, pas une mesure locale.`,
    gauge: { t: design.t },
  });
  climateRows.push({
    label: "Station de référence",
    value: km,
    note: `${st} (ID ${s.id}${s.elevationM !== null ? `, ${fmtInt(s.elevationM)} m` : ""}), la plus proche qui publie des normales complètes${m.station.fallback ? " ; aucune station 1991-2020 complète à 50 km ou moins" : ""}.`,
  });
  const otherStation = neighbourStationRow(m);
  if (otherStation) climateRows.push(otherStation);

  /* ---- Capacité ---- */
  const sizingRows: Row[] = [
    { label: "Capacité à retenir", value: "Celle certifiée à -15 °C", note: certSentence },
    { label: "Chauffage d'appoint", value: appoint.value, note: appoint.note },
    { label: "Subvention LogisVert", value: `Jusqu'à ${fmtInt(facts.maxLogisVert)} $`, note: "Montant officiel d'Hydro-Québec selon l'appariement exact." },
  ];

  /* ---- Logements (mêmes repères que sur une page de ville historique) ---- */
  const housing = housingRows(m);

  /* ---- Période de construction ---- */
  const periods = periodsBlock(m);
  const topPeriod = periods ? periods.bars.reduce((a, b) => (b.value > a.value ? b : a)) : null;

  /* ---- Questions ---- */
  const faq: Array<{ question: string; answer: string }> = [
    {
      question: `Quel froid faut-il prévoir ${aNom(name)}?`,
      answer: `Selon la ${st}, à ${km} ${deNom(name)} : ${janMin !== null ? `${fmtTemp(janMin)} les nuits de janvier` : `${fmtTemp(s.janMeanC)} en janvier`}${d20 !== null ? ` et ${fmtInt(d20)} jours sous -20 °C par an` : ""}.`,
    },
  ];
  if (pct !== null) {
    faq.push({
      question: `Les maisons ${deNom(name)} sont-elles anciennes?`,
      answer: `${fmtPct(pct)} des logements occupés ont été construits en 1980 ou avant${has(gAgg?.builtTo1980Pct) && group ? `, contre ${fmtPct(gAgg!.builtTo1980Pct as number)} ${inGroup(group)}` : ""}${
        topPeriod ? ` ; la période la plus représentée est « ${topPeriod.label} » (${fmtInt(topPeriod.value)} logements)` : ""
      }. Recensement de 2021.`,
    });
  }
  if (sd !== null) {
    faq.push({
      question: "Quel type de logement domine?",
      answer: `${fmtPct(sd)} des logements occupés sont des maisons individuelles non attenantes${own !== null ? ` et ${fmtPct(own)} des ménages sont propriétaires` : ""}, d'après le recensement de 2021${
        has(gAgg?.singleDetachedPct) && group ? ` (${fmtPct(gAgg!.singleDetachedPct as number)} de maisons individuelles ${inGroup(group)})` : ""
      }.`,
    });
  }

  /* ---- Sources ---- */
  const sources = [
    { label: `Normales climatiques canadiennes ${s.period}, station ${s.name} (${s.id}), Environnement et Changement climatique Canada, Licence du gouvernement ouvert – Canada`, url: s.url },
    { label: `Profil du recensement 2021, ${m.mamhName ?? name} (SDR ${c.csd}), Statistique Canada, Licence du gouvernement ouvert – Canada`, url: c.url },
    { label: "Répertoire des municipalités du Québec, MAMH, CC-BY 4.0", url: "https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec" },
    { label: "Toponymes officiels, Commission de toponymie du Québec, CC-BY 4.0", url: "https://www.donneesquebec.ca/recherche/dataset/toponymes-officiels" },
  ];
  const attribution = "Compilation : Thermopompes À Vendre. Valeurs publiées non modifiées ; distances, parts et rangs calculés.";

  /* ---- Métadonnées ---- */
  // « Thermopompe aux Cèdres », jamais « à Les Cèdres » (aNom).
  const aShown = aNom(shown);
  const title = fitTitle(`Installation de thermopompe ${aShown} : climat local`, `Installation de thermopompe ${aShown}`, `Thermopompe ${aShown} : installation`, `Thermopompe ${aShown}`, ...(shown !== name ? [`Thermopompe ${aNom(name)} (${regionName})`] : []));
  const jan = janMin !== null ? `nuits de janvier à ${fmtTemp(janMin)}` : `janvier à ${fmtTemp(s.janMeanC)}`;
  const descCandidates = [
    `Installation de thermopompe ${aShown} : ${jan}${d20 !== null ? `, ${fmtInt(d20)} jours sous -20 °C` : ""} (station ${s.name})${pct !== null ? `, ${fmtPct(pct)} de logements de 1980 ou avant` : ""}. LogisVert.`,
    `Thermopompe ${aShown} : ${jan}${d20 !== null ? `, ${fmtInt(d20)} jours sous -20 °C` : ""}${pct !== null ? `, ${fmtPct(pct)} de logements de 1980 ou avant` : ""}. Modèles climat froid et LogisVert.`,
    `Thermopompe ${aShown} : ${jan}${hdd !== null ? `, ${fmtInt(hdd)} degrés-jours` : ""}. Modèles certifiés climat froid et subvention LogisVert d'Hydro-Québec.`,
    `Thermopompe ${aShown} : ${jan}. Modèles certifiés climat froid et subvention LogisVert d'Hydro-Québec, données locales.`,
  ].map((d) => d.replace(/\s+/g, " ").trim());
  const description = descCandidates.find((d) => d.length >= 110 && d.length <= 158) ?? descCandidates.find((d) => d.length <= 158) ?? clampDescription(descCandidates[0]);

  return {
    m,
    name,
    station: s,
    group,
    regionName,
    tier,
    design,
    title,
    description,
    path,
    breadcrumbs: [{ label: "Thermopompe par ville", href: "/thermopompe" }, ...(group && hub ? [{ label: groupTitle(group), href: hub }] : []), { label: name, href: path }],
    hero: {
      region: group ? `${regionName} · ${groupTitle(group)}` : regionName,
      intro: `Installation d'une thermopompe ${aNom(name)} : le froid mesuré à la ${st}, à ${km}, et l'âge des ${fmtInt(dw)} logements du recensement de 2021.`,
      answer,
      stats,
      source: `Normales ${s.period} d'Environnement et Changement climatique Canada, ${st}. Température de conception : table régionale du site (${design.fsa}).`,
    },
    climate: { eyebrow: `Normales ${s.period}`, title: "Le froid à couvrir", rows: climateRows },
    sizing: { eyebrow: "Ce que ça change", title: "Quelle capacité viser", rows: sizingRows },
    housing: { eyebrow: "Recensement 2021", title: "Les logements", rows: housing },
    periods,
    neighbours: { title: "Municipalités voisines", intro: neighbourSummary(m, NEIGHBOUR_LIMIT), rows: neighbourTable(m, NEIGHBOUR_LIMIT) },
    ranking: {
      slug: RANKING_BY_TIER[tier],
      title: tier === "modere" ? "Les plus efficaces sur une saison" : "Les machines qui tiennent ce froid",
      intro: tier === "modere" ? "Classement par HSPF2 certifié (liste LogisVert)." : "Classement par COP certifié à -15 °C, puis capacité maintenue à -15 °C (liste LogisVert).",
    },
    cta: { title: "Votre maison, ce climat", text: `ThermoMatch applique les normales de la ${st} à votre maison et retient trois machines ; la soumission vient d'un installateur licencié RBQ.` },
    place: placeBlock(m, gAgg ?? undefined),
    faq,
    sources,
    attribution,
  };
}

/* ------------------------------------------------------------------
   Texte visible (vérification d'unicité)
   ------------------------------------------------------------------ */

/** Libellés fixes des composants (héros, tableaux, appel, sources) : présents sur toutes les pages. */
const FIXED_CHROME = [
  "Thermopompe à",
  "En bref",
  "Moyenne de janvier",
  "Nuits de janvier, en moyenne",
  "Température de conception",
  `Municipalité ${NEIGHBOUR_COLUMNS.map((c) => c.label).join(" ")}`,
  "Modèle Marque Type Nominal À -15 °C HSPF2 SEER2 LogisVert",
  "Voir le classement complet",
  "Lancer ThermoMatch Demander une soumission",
  "Questions fréquentes",
  "Sources",
].join(" ");

/** Tout le texte visible de la page, dans l'ordre (le classement est fourni par l'appelant). */
export function pageVisibleText(p: MunicipalPage, rankingText: string): string {
  const rows = (rs: Row[]) => rs.map((r) => `${r.label} ${r.value} ${r.note ?? ""}`).join(" ");
  return [
    FIXED_CHROME,
    p.hero.region,
    p.name,
    p.hero.intro,
    p.hero.answer,
    p.hero.stats.map((x) => `${x.label} ${x.value}`).join(" "),
    p.hero.source,
    p.climate.eyebrow,
    p.climate.title,
    rows(p.climate.rows),
    p.sizing.eyebrow,
    p.sizing.title,
    rows(p.sizing.rows),
    p.housing.eyebrow,
    p.housing.title,
    rows(p.housing.rows),
    p.periods ? `${p.periods.eyebrow} ${p.periods.title} ${p.periods.intro} ${p.periods.bars.map((b) => `${b.label} ${b.display} ${b.share ?? ""}`).join(" ")} ${p.periods.footnote}` : "",
    p.neighbours.title,
    p.neighbours.intro,
    p.neighbours.rows.map((r) => `${r.name} ${Object.values(r.cells).join(" ")}`).join(" "),
    p.ranking.title,
    p.ranking.intro,
    rankingText,
    p.cta.title,
    p.cta.text,
    p.place ? `${p.place.eyebrow} ${p.place.title} ${p.place.text} ${p.place.linkLabel}` : "",
    p.faq.map((f) => `${f.question} ${f.answer}`).join(" "),
    p.sources.map((x) => x.label).join(" "),
    p.attribution,
  ].join(" ");
}

/** Ensemble des séquences de n mots (minuscules, ponctuation retirée). */
export function shingleSet(text: string, n = 5): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[’']/g, " ")
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + n <= words.length; i++) out.add(words.slice(i, i + n).join(" "));
  return out;
}

/** Indice de Jaccard : |A ∩ B| / |A ∪ B|. */
export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  let inter = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const x of small) if (big.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}
