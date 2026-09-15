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
   ================================================================== */
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { clampDescription, fitTitle } from "./index";
import { fmtInt, fmtTemp, referenceHdd } from "./cities-data";
import { aNom, deNom } from "./cities-text";
import {
  PERIOD_LABELS,
  aggregate,
  displayName,
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

/* ---------------- Formats ---------------- */

const fr1 = (n: number) => n.toLocaleString("fr-CA", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
export const fmtPct = (n: number) => `${fr1(n)} %`;
export const fmtKm = (n: number) => `${n.toLocaleString("fr-CA", { maximumFractionDigits: 1 })} km`;
const fmtGap = (n: number) => `${fr1(Math.abs(n))} °C`;
const signPct = (n: number) => `${n >= 0 ? "+" : "−"}${Math.abs(n)} %`;
const ordinal = (n: number) => (n === 1 ? "1re" : `${n}e`);
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
export function neighbourTable(m: Municipality, limit = 5): NeighbourRow[] {
  return [neighbourRow(m, null, true), ...neighboursOf(m, limit).map(({ m: n, km }) => neighbourRow(n, km, false))];
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
  return {
    eyebrow: getRegion(m.region)?.name ?? "Québec",
    title: groupTitle(group),
    text: `${a.count} municipalités, ${fmtInt(a.population)} habitants en 2021 : leurs stations, leurs logements et celles qui n'ont pas de page propre.`,
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
  periods: { eyebrow: string; title: string; intro: string; bars: Array<{ label: string; value: number; display: string; old: boolean }>; footnote: string } | null;
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
  const qAgg = quebecAggregate();
  const ref = referenceHdd();
  const hdd = s.hdd18;
  const vsMtl = hdd !== null && ref ? Math.round(((hdd - ref) / ref) * 100) : null;
  const d20 = s.daysBelowMinus20;
  const janMin = s.janMinC;
  const rankIn = (value: (x: Municipality) => number | null | undefined) => {
    const list = members.filter((x) => has(value(x))).sort((a, b) => (value(b) as number) - (value(a) as number));
    const i = list.findIndex((x) => x.code === m.code);
    return i >= 0 ? { rank: i + 1, of: list.length } : null;
  };
  const popRank = rankIn((x) => x.census?.population2021);
  const oldRank = rankIn((x) => x.census?.builtTo1980Pct);
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

  /* ---- Capacité ---- */
  const sizingRows: Row[] = [
    { label: "Capacité à retenir", value: "Celle certifiée à -15 °C", note: certSentence },
    { label: "Chauffage d'appoint", value: appoint.value, note: appoint.note },
    { label: "Subvention LogisVert", value: `Jusqu'à ${fmtInt(facts.maxLogisVert)} $`, note: "Montant officiel d'Hydro-Québec selon l'appariement exact." },
  ];

  /* ---- Logements ---- */
  const housingRows: Row[] = [
    {
      label: "Logements occupés",
      value: fmtInt(dw),
      note: `${fmtInt(pop)} habitants${group && popRank ? ` ; ${ordinal(popRank.rank)} municipalité la plus peuplée ${ofGroup(group)} sur ${popRank.of}` : ""}.`,
    },
  ];
  if (pct !== null) {
    housingRows.push({
      label: "Construits en 1980 ou avant",
      value: fmtPct(pct),
      note: `${versus(group, gAgg?.builtTo1980Pct ?? null, qAgg.builtTo1980Pct)}${group && oldRank ? ` ; ${ordinal(oldRank.rank)} part la plus élevée sur ${oldRank.of}` : ""}. Isolation d'origine à vérifier : la charge se mesure sur place.`,
      gauge: has(gAgg?.builtTo1980Pct) && group ? { a: pct, b: gAgg!.builtTo1980Pct as number, aLabel: name, bLabel: group.kind === "MRC" ? "MRC" : "Territoire" } : undefined,
    });
  } else {
    housingRows.push({ label: "Période de construction", value: "Non publiée", note: "Statistique Canada ne publie pas cette répartition pour la municipalité." });
  }
  if (sd !== null) {
    housingRows.push({ label: "Maisons individuelles non attenantes", value: fmtPct(sd), note: `${versus(group, gAgg?.singleDetachedPct ?? null, qAgg.singleDetachedPct)} (données intégrales).` });
  }
  if (own !== null) {
    housingRows.push({ label: "Ménages propriétaires", value: fmtPct(own), note: `${versus(group, gAgg?.ownerPct ?? null, qAgg.ownerPct)}.` });
  }

  /* ---- Période de construction ---- */
  const per = c.periods ?? [];
  const periods =
    per.length === PERIOD_LABELS.length && per.every(has)
      ? {
          eyebrow: "Recensement 2021",
          title: "Quand les logements ont été construits",
          intro: `${fmtInt(c.periodTotal ?? 0)} logements occupés ${deNom(name)}, par période de construction.`,
          bars: per.map((v, i) => ({ label: PERIOD_LABELS[i], value: v as number, display: fmtInt(v as number), old: i < 2 })),
          footnote: "Données-échantillon (25 %) arrondies par Statistique Canada : le total peut différer de quelques unités du nombre de logements occupés.",
        }
      : null;
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
        topPeriod ? ` ; la période la plus représentée est « ${topPeriod.label} » (${topPeriod.display} logements)` : ""
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
    housing: { eyebrow: "Recensement 2021", title: "Les logements", rows: housingRows },
    periods,
    neighbours: { title: "Municipalités voisines", intro: "Les plus proches qui ont leur page : leur froid et leurs logements, côte à côte.", rows: neighbourTable(m, 5) },
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
    p.periods ? `${p.periods.eyebrow} ${p.periods.title} ${p.periods.intro} ${p.periods.bars.map((b) => `${b.label} ${b.display}`).join(" ")} ${p.periods.footnote}` : "",
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
