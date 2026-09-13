/* ==================================================================
   Gabarit de la page « MRC » (/thermopompe/mrc/[slug]) : la liste
   réelle des municipalités de la MRC (ou de l'agglomération), leurs
   chiffres, les stations utilisées et les agrégats. Les municipalités
   sans page propre y sont nommées avec leurs données publiées.
   Pur : données en entrée, textes en sortie.
   ================================================================== */
import { clampDescription, fitTitle } from "./index";
import { fmtInt, fmtTemp } from "./cities-data";
import {
  aggregate,
  displayName,
  getGroup,
  getHub,
  getHubs,
  getRegion,
  getStation,
  groupMembers,
  groupTitle,
  hubHref,
  inGroup,
  ofGroup,
  quebecAggregate,
  type MuniGroup,
  type Municipality,
} from "./municipalites";
import { designTempFor, fmtKm, fmtPct, type Row } from "./municipal-content";

export const MEMBER_COLUMNS = [
  { key: "designation", label: "Désignation", align: "left" as const },
  { key: "pop", label: "Habitants" },
  { key: "dw", label: "Logements" },
  { key: "pct", label: "1980 ou avant" },
  { key: "sd", label: "Maisons individuelles" },
  { key: "station", label: "Station", align: "left" as const },
  { key: "km", label: "Distance" },
  { key: "hdd", label: "Degrés-jours" },
];

export interface HubMemberRow {
  key: string;
  href: string | null;
  name: string;
  t: number;
  tag?: string;
  cells: Record<string, string>;
}

const has = (n: number | null | undefined): n is number => n !== null && n !== undefined;

/** Pourquoi une municipalité n'a pas sa page (affiché à côté de son nom). */
export function noPageReason(m: Municipality): string | undefined {
  if (m.page) return undefined;
  if (m.uniqueness?.verdict === "trop-proche") return "chiffres ici, sans page propre";
  if (m.reason === "station") return "aucune station à 50 km";
  if (m.reason === "recensement") return "pas de profil 2021";
  if (m.reason === "coordonnees") return "sans coordonnées";
  return "sans page propre";
}

function memberRow(m: Municipality): HubMemberRow {
  const s = m.station && m.station.km <= 50 ? getStation(m.station.key) : null;
  const c = m.census;
  return {
    key: m.code,
    href: m.page ? `/thermopompe/${m.slug}` : null,
    name: displayName(m),
    t: designTempFor(m.postal)?.t ?? -25,
    tag: noPageReason(m),
    cells: {
      designation: m.designation,
      pop: has(c?.population2021) ? fmtInt(c!.population2021) : "—",
      dw: has(c?.dwellings2021) ? fmtInt(c!.dwellings2021) : "—",
      pct: has(c?.builtTo1980Pct) ? fmtPct(c!.builtTo1980Pct as number) : "—",
      sd: has(c?.singleDetachedPct) ? fmtPct(c!.singleDetachedPct as number) : "—",
      station: s ? s.name : "—",
      km: s && m.station ? fmtKm(m.station.km) : "—",
      hdd: has(s?.hdd18) ? fmtInt(s!.hdd18) : "—",
    },
  };
}

/** « la MRC de Bellechasse », « l'agglomération de Montréal » : nom de la page dans « Thermopompe à … ». */
export function heroName(g: MuniGroup): string {
  return g.kind === "agglomeration" ? `l'${g.label}` : `la ${g.label}`;
}

export interface HubPage {
  g: MuniGroup;
  title: string;
  description: string;
  path: string;
  regionName: string;
  regionSlug: string | null;
  breadcrumbs: Array<{ label: string; href: string }>;
  hero: {
    region: string;
    city: string;
    intro: string;
    answer: string;
    stats: Array<{ label: string; value: string }>;
    designTempC: number;
    janMeanC: number | null;
    janMinC: number | null;
    extremeMinC: number | null;
    extremeMinYear: number | null;
    source: string;
  };
  aggRows: Row[];
  stationRows: Row[];
  members: HubMemberRow[];
  pages: Array<{ name: string; url: string }>;
  nearHubs: Array<{ href: string; label: string; hint: string; t: number }>;
  region: { title: string; text: string; href: string | null; linkLabel: string };
  faq: Array<{ question: string; answer: string }>;
  sources: Array<{ label: string; url: string }>;
  attribution: string;
}

export function buildHubPage(slug: string): HubPage | null {
  const g = getHub(slug);
  if (!g) return null;
  const members = groupMembers(g);
  const agg = aggregate(members);
  const q = quebecAggregate();
  const region = getRegion(g.region);
  const regionName = region?.name ?? "Québec";
  const title0 = groupTitle(g);
  const name = heroName(g);
  const path = `/thermopompe/mrc/${slug}`;
  const withData = members.filter((m) => m.eligible && m.station);
  if (withData.length === 0) return null;

  // Station la plus utilisée dans la MRC : c'est elle que montre le thermomètre du héros.
  const main = agg.stations[0];
  const ms = main.station;
  const temps = withData.map((m) => designTempFor(m.postal)?.t).filter(has);
  const counts = new Map<number, number>();
  for (const t of temps) counts.set(t, (counts.get(t) ?? 0) + 1);
  const designTempC = [...counts].sort((a, b) => b[1] - a[1] || a[0] - b[0])[0]?.[0];
  if (designTempC === undefined) return null;

  const byHdd = withData
    .map((m) => ({ m, s: getStation(m.station!.key)! }))
    .filter((x) => has(x.s?.hdd18))
    .sort((a, b) => (b.s.hdd18 as number) - (a.s.hdd18 as number));
  const byOld = members.filter((m) => has(m.census?.builtTo1980Pct)).sort((a, b) => (b.census!.builtTo1980Pct as number) - (a.census!.builtTo1980Pct as number));
  const noPage = members.filter((m) => !m.page);
  const reasons = {
    close: noPage.filter((m) => m.uniqueness?.verdict === "trop-proche").length,
    station: noPage.filter((m) => m.reason === "station").length,
    census: noPage.filter((m) => m.reason === "recensement").length,
  };

  const stats = [
    { label: "Municipalités", value: String(agg.count) },
    { label: "Habitants (2021)", value: fmtInt(agg.population) },
    agg.builtTo1980Pct !== null ? { label: "Logements de 1980 ou avant", value: fmtPct(agg.builtTo1980Pct) } : { label: "Logements occupés", value: fmtInt(agg.dwellings) },
    { label: "Stations de référence", value: String(agg.stations.length) },
  ];

  const aggRows: Row[] = [
    { label: "Habitants", value: fmtInt(agg.population), note: `Somme des ${agg.withCensus} municipalités dont le recensement de 2021 publie la population.` },
    { label: "Logements occupés", value: fmtInt(agg.dwellings), note: "Somme des logements privés occupés publiés." },
  ];
  if (agg.builtTo1980Pct !== null) {
    aggRows.push({
      label: "Construits en 1980 ou avant",
      value: fmtPct(agg.builtTo1980Pct),
      note: `${q.builtTo1980Pct !== null ? `${fmtPct(q.builtTo1980Pct)} au Québec. ` : ""}${byOld.length > 1 ? `De ${fmtPct(byOld[byOld.length - 1].census!.builtTo1980Pct as number)} (${byOld[byOld.length - 1].name}) à ${fmtPct(byOld[0].census!.builtTo1980Pct as number)} (${byOld[0].name}).` : ""}`,
      gauge: q.builtTo1980Pct !== null ? { a: agg.builtTo1980Pct, b: q.builtTo1980Pct, aLabel: g.kind === "MRC" ? "MRC" : "Agglomération", bLabel: "Québec" } : undefined,
    });
  }
  if (agg.singleDetachedPct !== null) aggRows.push({ label: "Maisons individuelles non attenantes", value: fmtPct(agg.singleDetachedPct), note: q.singleDetachedPct !== null ? `${fmtPct(q.singleDetachedPct)} au Québec.` : undefined });
  if (agg.hddRange) {
    aggRows.push({
      label: "Degrés-jours de chauffage",
      value: agg.hddRange[0] === agg.hddRange[1] ? fmtInt(agg.hddRange[0]) : `${fmtInt(agg.hddRange[0])} à ${fmtInt(agg.hddRange[1])}`,
      note: byHdd.length > 1 ? `Le plus élevé : ${byHdd[0].m.name} (station ${byHdd[0].s.name}) ; le plus bas : ${byHdd[byHdd.length - 1].m.name}.` : undefined,
    });
  }
  if (agg.janMinRange) {
    aggRows.push({
      label: "Nuits de janvier",
      value: agg.janMinRange[0] === agg.janMinRange[1] ? fmtTemp(agg.janMinRange[0]) : `${fmtTemp(agg.janMinRange[0])} à ${fmtTemp(agg.janMinRange[1])}`,
      note: "Moyenne des minimums quotidiens de janvier aux stations de référence.",
    });
  }

  const stationRows: Row[] = agg.stations.map((x) => ({
    label: `Station ${x.station.name}`,
    value: `${x.municipalities} municipalité${x.municipalities > 1 ? "s" : ""}`,
    note: `${x.minKm === x.maxKm ? `À ${fmtKm(x.minKm)}` : `De ${fmtKm(x.minKm)} à ${fmtKm(x.maxKm)}`} ; normales ${x.station.period}${has(x.station.hdd18) ? `, ${fmtInt(x.station.hdd18)} degrés-jours` : ""}${has(x.station.janMinC) ? `, ${fmtTemp(x.station.janMinC)} les nuits de janvier` : ""}.`,
  }));

  const near = (g.nearHubs ?? [])
    .map(([s, km]) => ({ h: getHub(s), km }))
    .filter((x): x is { h: MuniGroup; km: number } => !!x.h)
    .map(({ h, km }) => {
      const hm = groupMembers(h);
      const t = hm.map((m) => designTempFor(m.postal)?.t).filter(has)[0] ?? -25;
      return { href: hubHref(h)!, label: groupTitle(h), hint: `${fmtKm(km)} · ${hm.length} municipalités`, t };
    });
  const sameRegion = getHubs().filter((h) => h.region === g.region && h.key !== g.key);

  const faq = [
    ...(byHdd.length > 1
      ? [
          {
            question: `Où l'hiver est-il le plus exigeant ${inGroup(g)}?`,
            answer: `${byHdd[0].m.name} a le plus de degrés-jours de chauffage (${fmtInt(byHdd[0].s.hdd18 as number)}, station ${byHdd[0].s.name}) ; ${byHdd[byHdd.length - 1].m.name} en a le moins (${fmtInt(byHdd[byHdd.length - 1].s.hdd18 as number)}, station ${byHdd[byHdd.length - 1].s.name}).`,
          },
        ]
      : []),
    ...(agg.builtTo1980Pct !== null && byOld.length > 1
      ? [
          {
            question: `Les logements ${ofGroup(g)} sont-ils anciens?`,
            answer: `${fmtPct(agg.builtTo1980Pct)} des logements occupés ont été construits en 1980 ou avant${q.builtTo1980Pct !== null ? `, contre ${fmtPct(q.builtTo1980Pct)} au Québec` : ""}. La part la plus élevée est à ${byOld[0].name} (${fmtPct(byOld[0].census!.builtTo1980Pct as number)}).`,
          },
        ]
      : []),
    {
      question: "Pourquoi certaines municipalités n'ont-elles pas leur propre page?",
      answer: `Une page exige des données propres : le recensement de 2021 et une station météo à 50 km ou moins. ${[
        reasons.station ? `${reasons.station} n'ont pas de station assez proche` : "",
        reasons.census ? `${reasons.census} n'ont pas de profil du recensement de 2021 (fusion plus récente)` : "",
        reasons.close ? `${reasons.close} auraient une page presque identique à celle d'une voisine : leurs chiffres sont dans le tableau ci-dessus` : "",
      ]
        .filter(Boolean)
        .join(" ; ") || "Ici, toutes les municipalités ont la leur"}.`,
    },
  ];

  const titles = [`Thermopompe dans ${name} : ${agg.count} municipalités`, `Thermopompe dans ${name}`, `Thermopompe : ${title0}`, title0];
  const descs = [
    `${title0} : ${agg.count} municipalités, ${fmtInt(agg.population)} habitants${agg.builtTo1980Pct !== null ? `, ${fmtPct(agg.builtTo1980Pct)} de logements de 1980 ou avant` : ""}${
      agg.hddRange ? `, ${fmtInt(agg.hddRange[0])} à ${fmtInt(agg.hddRange[1])} degrés-jours` : ""
    }. Thermopompes et LogisVert.`,
    `${title0} : ${agg.count} municipalités, ${fmtInt(agg.population)} habitants${agg.hddRange ? `, ${fmtInt(agg.hddRange[0])} à ${fmtInt(agg.hddRange[1])} degrés-jours` : ""}. Climat, logements et thermopompes.`,
    `${title0} : ${agg.count} municipalités, leurs stations météo, leurs logements et les thermopompes adaptées à leur hiver.`,
  ].map((d) => d.replace(/\s+/g, " ").trim());

  return {
    g,
    title: fitTitle(...titles),
    description: descs.find((d) => d.length >= 110 && d.length <= 158) ?? descs.find((d) => d.length <= 158) ?? clampDescription(descs[0]),
    path,
    regionName,
    regionSlug: region?.slug ?? null,
    breadcrumbs: [
      { label: "Thermopompe par ville", href: "/thermopompe" },
      { label: title0, href: path },
    ],
    hero: {
      region: regionName,
      city: name,
      intro: `Les ${agg.count} municipalités ${ofGroup(g)}, leurs stations météo et leurs logements, pour choisir et faire installer une thermopompe adaptée à leur hiver.`,
      answer: `${fmtInt(agg.population)} habitants au recensement de 2021${agg.builtTo1980Pct !== null ? `, dont ${fmtPct(agg.builtTo1980Pct)} des logements construits en 1980 ou avant` : ""}. ${
        agg.hddRange ? `Selon la station de référence, l'hiver va de ${fmtInt(agg.hddRange[0])} à ${fmtInt(agg.hddRange[1])} degrés-jours de chauffage.` : ""
      } ${agg.withPage} municipalités ont leur page ; les autres sont listées plus bas avec leurs chiffres.`.replace(/\s+/g, " ").trim(),
      stats,
      designTempC,
      janMeanC: ms.janMeanC,
      janMinC: ms.janMinC,
      extremeMinC: ms.extremeMinC,
      extremeMinYear: ms.extremeMinYear,
      source: `Normales ${ms.period} d'Environnement et Changement climatique Canada, station ${ms.name}, retenue pour ${main.municipalities} des ${agg.count} municipalités. Température de conception : valeur la plus fréquente de la table régionale du site pour leurs codes postaux.`,
    },
    aggRows,
    stationRows,
    members: members.map(memberRow),
    pages: members.filter((m) => m.page).map((m) => ({ name: `Thermopompe à ${displayName(m)}`, url: `/thermopompe/${m.slug}` })),
    nearHubs: near,
    region: {
      title: regionName,
      text: `${sameRegion.length ? `Autres MRC et agglomérations de la région : ${sameRegion.map((h) => groupTitle(h)).join(", ")}.` : "Seule MRC de la région avec une page."}`,
      href: region ? `/thermopompe#region-${region.slug}` : null,
      linkLabel: `Toutes les municipalités de ${regionName}`,
    },
    faq,
    sources: [
      { label: "Répertoire des municipalités du Québec, MAMH, CC-BY 4.0", url: "https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec" },
      { label: "Toponymes officiels, Commission de toponymie du Québec, CC-BY 4.0", url: "https://www.donneesquebec.ca/recherche/dataset/toponymes-officiels" },
      { label: "Profil du recensement, Recensement de la population de 2021, Statistique Canada, Licence du gouvernement ouvert – Canada", url: "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=F" },
      ...agg.stations.map((x) => ({ label: `Normales climatiques canadiennes ${x.station.period}, station ${x.station.name} (${x.station.id}), Environnement et Changement climatique Canada, Licence du gouvernement ouvert – Canada`, url: x.station.url })),
    ],
    attribution: "Compilation : Thermopompes À Vendre. Valeurs publiées non modifiées ; sommes, parts, distances et rangs calculés.",
  };
}

/** Page d'un groupe, par sa clé (pour les liens depuis une municipalité). */
export function hubOf(m: Municipality): MuniGroup | null {
  const g = getGroup(m.group);
  return g && g.hub.ok ? g : null;
}
