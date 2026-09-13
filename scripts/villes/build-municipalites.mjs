#!/usr/bin/env node
/* ==================================================================
   Construit src/lib/seo/municipalites-data.json à partir des sources
   officielles téléchargées (jamais versionnées) :

     node scripts/villes/build-municipalites.mjs --sources <dossier>
     (ou MUNICIPALITES_SOURCES=<dossier> node scripts/villes/build-municipalites.mjs)

   puis, pour la vérification d'unicité qui décide des pages :

     npx tsx scripts/villes/check-unicite.ts

   Contenu attendu du dossier <sources> :
     MUN.csv, MRC_CM_Arg.csv                  Répertoire des municipalités (MAMH)
     toponymes_officiels.csv                  Commission de toponymie du Québec
     recensement-2021-sdr-qc.bin              zip du Profil du recensement 2021 (98-401-X2021020)
     normales/1991_2020_..._station_inventory.csv et normales/1991-2020_..._QC_Data.csv (ECCC)
     normales-1981-2010/*.csv                 facultatif : normales 1981-2010 (repli, ECCC)

   Méthode et définitions : src/lib/seo/municipalites-data.md.
   ================================================================== */
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";
import {
  CENSUS_IDS,
  PERIOD_IDS,
  PERIOD_LABELS,
  sharePct,
  REGULAR_DESIGNATIONS,
  TOPONYM_TYPES,
  assignSlugs,
  builtTo1980Pct,
  censusProfileUrl,
  censusValue,
  chooseStation,
  cp1252Decoder,
  deForm,
  eligibility,
  haversineKm,
  normals1991FromRows,
  openZipEntryStream,
  parseCodedName,
  parseCsvLine,
  parseMrcField,
  readCsvText,
  round1,
  slugify,
  stationQualifies,
} from "./municipalites-lib.mjs";
import { load1981Stations } from "./normales-1981.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

const SOURCES = arg("sources") ?? process.env.MUNICIPALITES_SOURCES;
if (!SOURCES || !existsSync(SOURCES)) {
  console.error("Dossier des sources introuvable : --sources <dossier> ou MUNICIPALITES_SOURCES=<dossier>");
  process.exit(1);
}
const OUT = resolve(ROOT, arg("out") ?? "src/lib/seo/municipalites-data.json");
const CURATED_JSON = resolve(ROOT, "src/lib/seo/cities-data.json");

const readCsv = (p) => readCsvText(readFileSync(p, "utf8"));
const fileDay = (p) => statSync(p).mtime.toISOString().slice(0, 10);

/** Regroupements « hors MRC » qui sont des agglomérations (libellé affiché). */
const AGGLOMERATIONS = new Map([
  ["66", "agglomération de Montréal"],
  ["58", "agglomération de Longueuil"],
  ["23", "agglomération de Québec"],
  ["90", "agglomération de La Tuque"],
  ["01", "agglomération des Îles-de-la-Madeleine"],
]);

/* ---------------- 1. Répertoire des municipalités ---------------- */
const MUN_PATH = join(SOURCES, "MUN.csv");
const mun = readCsv(MUN_PATH);
const mrcRows = readCsv(join(SOURCES, "MRC_CM_Arg.csv"));
const mrcByCode = new Map(mrcRows.filter((r) => /^AR\d+$/.test(r.mrccod)).map((r) => [r.mrccod.slice(2), r]));

/* ---------------- 2. Toponymes officiels ---------------- */
const TOPO_PATH = join(SOURCES, "toponymes_officiels.csv");
const topoTypes = new Set(TOPONYM_TYPES.values());
const topoByCode = new Map();
{
  const lines = readFileSync(TOPO_PATH, "utf8").replace(/^﻿/, "").split(/\r?\n/);
  const head = parseCsvLine(lines[0]);
  const ix = (k) => head.indexOf(k);
  const [iName, iType, iLat, iLon, iCode] = [ix("Toponyme"), ix("Type_entite"), ix("Latitude"), ix("Longitude"), ix("Code_geographique")];
  for (const l of lines.slice(1)) {
    if (!l) continue;
    const r = parseCsvLine(l);
    if (!topoTypes.has(r[iType])) continue;
    const list = topoByCode.get(r[iCode]) ?? [];
    list.push({ name: r[iName], type: r[iType], lat: Number(r[iLat]), lon: Number(r[iLon]), id: r[0] });
    topoByCode.set(r[iCode], list);
  }
}

/* ---------------- 3. Normales climatiques ---------------- */
const curated = JSON.parse(readFileSync(CURATED_JSON, "utf8"));
const curatedStationIds = new Set(Object.values(curated).map((c) => c.climate?.stationId).filter(Boolean));

const INV_PATH = join(SOURCES, "normales", "1991_2020_Canadian_Climate_Normals_QC_station_inventory.csv");
const NORM_PATH = join(SOURCES, "normales", "1991-2020_Canadian_Climate_Normals_QC_Data.csv");
const inventory = readCsv(INV_PATH);
const normRows = readCsv(NORM_PATH);
const normByLoc = new Map();
for (const r of normRows) {
  const list = normByLoc.get(r.LOCATION_NAME) ?? [];
  list.push(r);
  normByLoc.set(r.LOCATION_NAME, list);
}
const norm = (s) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");
const stations1991 = [];
const stationsRejected = [];
{
  const byComposite = new Map();
  for (const s of inventory) {
    const list = byComposite.get(s.COMPOSITE_STATION_NAME) ?? [];
    list.push(s);
    byComposite.set(s.COMPOSITE_STATION_NAME, list);
  }
  for (const [composite, members] of byComposite) {
    const rows = normByLoc.get(composite);
    if (!rows) {
      stationsRejected.push({ name: composite, reason: "aucune ligne de normales" });
      continue;
    }
    const n = normals1991FromRows(rows);
    if (!stationQualifies(n)) {
      stationsRejected.push({ name: composite, reason: n.hdd18 === null ? "pas de total annuel de degrés-jours" : "pas de moyenne de janvier" });
      continue;
    }
    // Membre représentatif : celui des 53 villes vérifiées, sinon le nom identique au composite, sinon le premier.
    const rep = members.find((m) => curatedStationIds.has(m.CLIMATE_ID)) ?? members.find((m) => norm(m.STATION_NAME) === norm(composite)) ?? members[0];
    stations1991.push({
      key: rep.CLIMATE_ID,
      id: rep.CLIMATE_ID,
      name: composite,
      memberName: rep.STATION_NAME,
      lat: Number(rep.LATITUDE),
      lon: Number(rep.LONGITUDE),
      elevationM: rep["ELEVATION(m)"] ? Number(rep["ELEVATION(m)"]) : null,
      period: "1991-2020",
      hdd18: n.hdd18,
      janMeanC: n.janMeanC,
      janMinC: n.janMinC,
      extremeMinC: n.extremeMinC,
      extremeMinYear: n.extremeMinYear,
      annualMeanC: n.annualMeanC,
      daysBelowMinus20: n.daysBelowMinus20,
      qualityCode: n.codes.hdd18,
      url: `https://climat.meteo.gc.ca/climate_normals/results_1991_2020_f.html?searchType=stnProv&lstProvince=QC&climate_id=${rep.CLIMATE_ID}&dispBack=0`,
    });
  }
}
const DIR_1981 = join(SOURCES, "normales-1981-2010");
const stations1981 = existsSync(DIR_1981) ? load1981Stations(DIR_1981) : [];

/* ---------------- 4. Recensement 2021 (flux, jamais chargé en entier) ---------------- */
const CENSUS_ZIP = join(SOURCES, "recensement-2021-sdr-qc.bin");
const EXPECTED = new Map([
  [CENSUS_IDS.population, "Population, 2021"],
  [CENSUS_IDS.dwellings, "Logements privés occupés par des résidents habituels"],
  [CENSUS_IDS.typeTotal, "Total - Logements privés occupés par type de construction résidentielle - Données intégrales (100 %)"],
  [CENSUS_IDS.singleDetached, "Maison individuelle non attenante"],
  [CENSUS_IDS.tenureTotal, "Total - Ménages privés selon le mode d'occupation - Données-échantillon (25 %)"],
  [CENSUS_IDS.owners, "Propriétaire"],
  [CENSUS_IDS.periodTotal, "Total - Logements privés occupés selon la période de construction - Données-échantillon (25 %)"],
  ...PERIOD_IDS.map((id, i) => [id, PERIOD_LABELS[i]]),
]);
async function readCensus() {
  const out = new Map();
  const input = openZipEntryStream(CENSUS_ZIP, "98-401-X2021020_Francais_CSV_data.csv").pipe(cp1252Decoder());
  const rl = createInterface({ input, crlfDelay: Infinity });
  const pre = /,"\d{5}",(1|5|41|42|1414|1415|144[0-8]),"/;
  let lines = 0;
  for await (const line of rl) {
    lines++;
    if (!pre.test(line)) continue;
    const r = parseCsvLine(line);
    const id = Number(r[8]);
    const label = r[9].trim();
    if (EXPECTED.get(id) !== label) throw new Error(`Caractéristique ${id} inattendue : « ${label} »`);
    if (r[3] !== "Subdivision de recensement") continue;
    const csd = r[2];
    const e = out.get(csd) ?? { csd, name: r[4], quality: r[7], values: {}, symbols: {} };
    e.values[id] = censusValue(r[11], r[12]);
    e.symbols[id] = r[12].trim();
    out.set(csd, e);
  }
  return { byCsd: out, lines };
}

const census = await readCensus();

/* ---------------- 5. Villes historiques (cities.ts / cities-data.json) ---------------- */
// Code géographique de chaque ville vérifiée, lu dans l'URL de son profil du recensement.
const curatedByCode = new Map();
for (const [slug, d] of Object.entries(curated)) {
  const m = /2021A000524(\d{5})/.exec(d.census?.sourceUrl ?? "");
  if (!m) continue;
  const list = curatedByCode.get(m[1]) ?? [];
  list.push(slug);
  curatedByCode.set(m[1], list);
}

// Ville fusionnée après le recensement de 2021 (ex. Amos, nouveau code 88057) : son ancien code SDR
// n'existe plus au répertoire ; on la relie par le nom inscrit dans sa source de recensement.
{
  const munCodes = new Set(mun.map((r) => r.mcode));
  for (const [code, slugs] of [...curatedByCode]) {
    if (munCodes.has(code)) continue;
    for (const slug of slugs) {
      const label = curated[slug]?.sources?.find((x) => /SDR/.test(x.label))?.label ?? "";
      const nm = /, ([^,]+) \(SDR \d{7}\)/.exec(label)?.[1];
      const hit = nm ? mun.find((r) => r.munnom === nm && REGULAR_DESIGNATIONS.has(r.mcodedesi)) : null;
      if (hit) curatedByCode.set(hit.mcode, [...(curatedByCode.get(hit.mcode) ?? []), slug]);
    }
    curatedByCode.delete(code);
  }
}

/* ---------------- 6. Assemblage ---------------- */
const regions = new Map();
const groups = new Map();
const municipalities = [];
const excluded = [];
const fixedSlugs = new Map();
const curatedSecondary = [];

for (const r of mun) {
  const code = r.mcode;
  const dcode = r.mcodedesi;
  const region = parseCodedName(r.regadm);
  if (region && !regions.has(region.code)) regions.set(region.code, { code: region.code, name: region.name, slug: slugify(region.name) });
  const mrc = parseMrcField(r.mrc);
  const divrec = parseCodedName(r.divrec);
  let groupKey = null;
  if (mrc) {
    groupKey = `MRC-${mrc.code}`;
    if (!groups.has(groupKey)) {
      const row = mrcByCode.get(mrc.code);
      const name = (row?.mrcnom ?? mrc.name).replace(/--/g, "–").trim();
      groups.set(groupKey, { key: groupKey, kind: "MRC", code: mrc.code, name, label: `MRC ${deForm(name)}`, region: region?.code ?? null, members: [] });
    }
  } else if (divrec) {
    groupKey = `DR-${divrec.code}`;
    if (!groups.has(groupKey)) {
      const aggl = AGGLOMERATIONS.get(divrec.code);
      groups.set(groupKey, { key: groupKey, kind: aggl ? "agglomeration" : "hors-mrc", code: divrec.code, name: divrec.name, label: aggl ?? divrec.name, region: region?.code ?? null, members: [] });
    }
  }
  const csd = `24${code}`;
  const c = census.byCsd.get(csd) ?? null;
  const pop = c ? c.values[CENSUS_IDS.population] ?? null : null;

  if (!REGULAR_DESIGNATIONS.has(dcode)) {
    excluded.push({ code, name: r.munnom.replace(/--/g, "–"), designation: r.mdes.trim(), dcode, region: region?.code ?? null, group: groupKey, population2021: pop });
    continue;
  }

  const topo = (topoByCode.get(code) ?? []).filter((t) => t.type === TOPONYM_TYPES.get(dcode));
  const t = topo.length === 1 ? topo[0] : topo.find((x) => slugify(x.name) === slugify(r.munnom)) ?? null;
  const name = t?.name ?? r.munnom.replace(/--/g, "–");
  const lat = t ? t.lat : null;
  const lon = t ? t.lon : null;

  let cs = null;
  if (c) {
    const v = c.values;
    const total = v[CENSUS_IDS.periodTotal] ?? null;
    const b61 = v[CENSUS_IDS.before1961] ?? null;
    const b80 = v[CENSUS_IDS.from1961to1980] ?? null;
    cs = {
      csd,
      population2021: pop,
      dwellings2021: v[CENSUS_IDS.dwellings] ?? null,
      periodTotal: total,
      builtTo1980: b61 !== null && b80 !== null ? b61 + b80 : null,
      builtTo1980Pct: builtTo1980Pct(total, b61, b80),
      periods: PERIOD_IDS.map((id) => v[id] ?? null),
      typeTotal: v[CENSUS_IDS.typeTotal] ?? null,
      singleDetached: v[CENSUS_IDS.singleDetached] ?? null,
      singleDetachedPct: sharePct(v[CENSUS_IDS.singleDetached] ?? null, v[CENSUS_IDS.typeTotal] ?? null),
      tenureTotal: v[CENSUS_IDS.tenureTotal] ?? null,
      owners: v[CENSUS_IDS.owners] ?? null,
      ownerPct: sharePct(v[CENSUS_IDS.owners] ?? null, v[CENSUS_IDS.tenureTotal] ?? null),
      quality: c.quality,
      url: censusProfileUrl(csd),
    };
  }

  const pick = lat !== null && lon !== null ? chooseStation(lat, lon, stations1991, stations1981) : null;
  let st = pick?.station ? { key: pick.station.key, id: pick.station.id, km: round1(pick.km), fallback: pick.fallback } : null;
  let ruleStation;
  // Ville historique : on garde la station vérifiée de cities-data.json (même station que sa page),
  // et on note celle que la règle aurait choisie (comparaison dans les tests et dans municipalites-data.md).
  const cur = curatedByCode.get(code)?.map((s) => curated[s]).find((d) => d?.climate?.stationId);
  if (cur && lat !== null) {
    const list = cur.climate.normalsPeriod === "1981-2010" ? stations1981 : stations1991;
    const cs = list.find((s) => s.id === cur.climate.stationId);
    if (cs) {
      ruleStation = st ? { key: st.key, km: st.km } : null;
      st = { key: cs.key, id: cs.id, km: round1(haversineKm(lat, lon, cs.lat, cs.lon)), fallback: cs.period === "1981-2010", source: "cities-data" };
    }
  }
  const verdict = eligibility({ designationCode: dcode, lat, lon, population: cs?.population2021 ?? null, dwellings: cs?.dwellings2021 ?? null, stationId: st && st.km <= 50 ? st.id : null });

  const curatedSlugs = curatedByCode.get(code) ?? [];
  if (curatedSlugs.length) {
    const primary = curatedSlugs.length === 1 ? curatedSlugs[0] : curatedSlugs.find((s) => s === slugify(name).replace(/-d-/g, "-d")) ?? curatedSlugs.find((s) => s === slugify(name)) ?? curatedSlugs[0];
    fixedSlugs.set(code, primary);
    for (const s of curatedSlugs) if (s !== primary) curatedSecondary.push({ slug: s, code });
  }

  municipalities.push({
    code,
    slug: null,
    name,
    mamhName: r.munnom !== name ? r.munnom : undefined,
    designation: REGULAR_DESIGNATIONS.get(dcode),
    dcode,
    region: region?.code ?? null,
    group: groupKey,
    lat,
    lon,
    postal: r.mcodpos || null,
    areaKm2: r.msuperf ? Number(r.msuperf) : null,
    census: cs,
    station: st,
    nearest1991Km: pick && !pick.station && pick.nearest1991Km !== null ? round1(pick.nearest1991Km) : undefined,
    ruleStation,
    eligible: verdict.eligible,
    reason: verdict.reason,
    curated: fixedSlugs.get(code) ?? undefined,
    // Provisoire : check-unicite.ts retire ensuite les pages trop proches de leurs voisines.
    page: verdict.eligible || fixedSlugs.has(code),
  });
  if (groupKey) groups.get(groupKey).members.push(code);
}

// Slugs
const reserved = new Set([...Object.keys(curated), "mrc"]);
const slugs = assignSlugs(
  municipalities.map((m) => ({ code: m.code, name: m.name, mrcName: m.group ? groups.get(m.group).name : null, designation: m.designation })),
  fixedSlugs,
  reserved,
);
for (const m of municipalities) m.slug = slugs.get(m.code);

/* ---------------- 7. Voisins (première passe ; check-unicite.ts les recalcule) ---------------- */
const NEIGHBOURS = 6;
const eligibleList = municipalities.filter((m) => m.eligible);
for (const m of municipalities) {
  if (m.lat === null) continue;
  m.neighbours = eligibleList
    .filter((o) => o.code !== m.code)
    .map((o) => [o.code, round1(haversineKm(m.lat, m.lon, o.lat, o.lon))])
    .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
    .slice(0, NEIGHBOURS);
}

/* ---------------- 8. Pôles MRC ---------------- */
const byCode = new Map(municipalities.map((m) => [m.code, m]));
const hubs = [];
for (const g of groups.values()) {
  const members = g.members.map((c) => byCode.get(c));
  const withData = members.filter((m) => m.eligible);
  const located = members.filter((m) => m.lat !== null);
  g.centroid = located.length
    ? [Math.round((located.reduce((a, m) => a + m.lat, 0) / located.length) * 1e4) / 1e4, Math.round((located.reduce((a, m) => a + m.lon, 0) / located.length) * 1e4) / 1e4]
    : null;
  if (g.kind === "hors-mrc") g.hub = { ok: false, reason: "hors MRC et hors agglomération" };
  else if (members.length < 2) g.hub = { ok: false, reason: "une seule municipalité" };
  else if (withData.length === 0) g.hub = { ok: false, reason: "aucune municipalité avec données complètes" };
  else g.hub = { ok: true, reason: null };
  if (g.hub.ok) hubs.push(g);
}
const hubSlugs = assignSlugs(
  hubs.map((g) => ({ code: g.key, name: g.kind === "agglomeration" ? g.label : g.name, mrcName: null })),
  new Map(),
  new Set(),
);
for (const g of hubs) g.slug = hubSlugs.get(g.key);
for (const g of hubs) {
  g.nearHubs = hubs
    .filter((o) => o.key !== g.key && o.centroid && g.centroid)
    .map((o) => [o.slug, round1(haversineKm(g.centroid[0], g.centroid[1], o.centroid[0], o.centroid[1]))])
    .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
    .slice(0, 5);
}

/* ---------------- 9. Écriture ---------------- */
const usedStationKeys = new Set(municipalities.map((m) => m.station?.key).filter(Boolean));
const stations = {};
for (const s of [...stations1991, ...stations1981]) if (usedStationKeys.has(s.key)) stations[s.key] = s;

const count = (f) => municipalities.filter(f).length;
const meta = {
  // Date de construction à l'heure du Québec (lastmod des sitemaps).
  generatedAt: new Date().toLocaleDateString("sv-SE", { timeZone: "America/Toronto" }),
  generator: "scripts/villes/build-municipalites.mjs",
  rules: { maxStationKm: 50, regularDesignations: [...REGULAR_DESIGNATIONS.values()], neighbours: NEIGHBOURS },
  sources: {
    mamh: { file: "MUN.csv, MRC_CM_Arg.csv", downloaded: fileDay(MUN_PATH), licence: "CC-BY 4.0", url: "https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec" },
    toponymie: { file: "toponymes_officiels.csv", downloaded: fileDay(TOPO_PATH), licence: "CC-BY 4.0", url: "https://www.donneesquebec.ca/recherche/dataset/toponymes-officiels" },
    census: { file: "98-401-X2021020", released: "2023-02-08", licence: "Licence du gouvernement ouvert – Canada", url: "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=F", linesRead: census.lines },
    normals: { file: "Normales climatiques canadiennes 1991-2020 (QC)", licence: "Licence du gouvernement ouvert – Canada", url: "https://climat.meteo.gc.ca/climate_normals/", stationsQualified: stations1991.length, stationsRejected, fallback1981: stations1981.length },
  },
  counts: {
    total: mun.length,
    regular: municipalities.length,
    excludedByDesignation: excluded.length,
    eligible: count((m) => m.eligible),
    ineligible: {
      recensement: count((m) => m.reason === "recensement"),
      station: count((m) => m.reason === "station"),
      coordonnees: count((m) => m.reason === "coordonnees"),
    },
    fallback1981: count((m) => m.station?.fallback),
    hubs: hubs.length,
  },
  curatedSecondary,
};

const clean = (o) => JSON.parse(JSON.stringify(o));
const data = {
  meta,
  regions: [...regions.values()].sort((a, b) => a.code.localeCompare(b.code)),
  groups: [...groups.values()].map((g) => clean({ key: g.key, kind: g.kind, code: g.code, name: g.name, label: g.label, region: g.region, slug: g.slug ?? null, hub: g.hub, centroid: g.centroid, nearHubs: g.nearHubs, members: g.members })),
  stations,
  municipalities: municipalities.map(clean),
  excluded,
};
writeFileSync(OUT, `${JSON.stringify(data, null, 1)}\n`);

console.log(JSON.stringify(meta.counts, null, 2));
console.log(`Stations 1991-2020 retenues : ${stations1991.length} ; rejetées : ${stationsRejected.length} ; 1981-2010 chargées : ${stations1981.length}`);
console.log(`Lignes du recensement lues : ${census.lines} ; SDR : ${census.byCsd.size}`);
console.log(`Écrit : ${OUT}`);
