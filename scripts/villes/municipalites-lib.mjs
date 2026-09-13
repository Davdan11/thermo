/* ==================================================================
   Fonctions pures de la chaîne de données des municipalités
   (scripts/villes/build-municipalites.mjs). Aucune dépendance externe :
   lecture CSV, lecture d'une entrée de zip, slugs, distances, règles
   d'admissibilité. Testées par src/lib/seo/__tests__/municipalites-build.test.ts.
   ================================================================== */
import { closeSync, createReadStream, fstatSync, openSync, readSync } from "node:fs";
import { Transform } from "node:stream";
import { createInflateRaw } from "node:zlib";

/** Désignations MAMH d'une municipalité locale « ordinaire » (code → libellé affiché). */
export const REGULAR_DESIGNATIONS = new Map([
  ["01", "Canton"],
  ["02", "Cantons unis"],
  ["04", "Paroisse"],
  ["05", "Municipalité"],
  ["06", "Village"],
  ["10", "Ville"],
]);

/** Type d'entité de la Commission de toponymie qui correspond à chaque désignation ordinaire. */
export const TOPONYM_TYPES = new Map([
  ["01", "Municipalité de canton"],
  ["02", "Municipalité de cantons unis"],
  ["04", "Municipalité de paroisse"],
  ["05", "Municipalité"],
  ["06", "Municipalité de village"],
  ["10", "Ville"],
]);

/** Rayon maximal entre la municipalité et sa station de normales climatiques. */
export const MAX_STATION_KM = 50;

/** Symboles du Profil du recensement 2021 qui signifient « pas de valeur publiée ». */
export const CENSUS_NULL_SYMBOLS = new Set(["x", "F", "..", "..."]);

/** Caractéristiques du Profil du recensement 2021 (ID_CARACTÉRISTIQUE, fichier 98-401-X2021020). */
export const CENSUS_IDS = {
  population: 1, // « Population, 2021 »
  dwellings: 5, // « Logements privés occupés par des résidents habituels »
  typeTotal: 41, // « Total - Logements privés occupés par type de construction résidentielle - Données intégrales (100 %) »
  singleDetached: 42, // « Maison individuelle non attenante »
  tenureTotal: 1414, // « Total - Ménages privés selon le mode d'occupation - Données-échantillon (25 %) »
  owners: 1415, // « Propriétaire »
  periodTotal: 1440, // « Total - Logements privés occupés selon la période de construction - Données-échantillon (25 %) »
  before1961: 1441, // « 1960 ou avant »
  from1961to1980: 1442, // « 1961 à 1980 »
};

/** Tranches de la période de construction (ID 1441 à 1448), dans l'ordre du profil. */
export const PERIOD_IDS = [1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448];
export const PERIOD_LABELS = ["1960 ou avant", "1961 à 1980", "1981 à 1990", "1991 à 2000", "2001 à 2005", "2006 à 2010", "2011 à 2015", "2016 à 2021"];

/** Part en %, arrondie à 0,1 ; null si une valeur manque ou si le total est nul. */
export function sharePct(part, total) {
  if (part === null || part === undefined || total === null || total === undefined || total <= 0) return null;
  return Math.round((part / total) * 1000) / 10;
}

/* ---------------- CSV ---------------- */

/** Découpe une ligne CSV (guillemets doubles, "" = guillemet littéral). */
export function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (quoted) {
      if (c === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else quoted = false;
      } else cur += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      out.push(cur);
      cur = "";
    } else cur += c;
  }
  out.push(cur);
  return out;
}

/** Texte CSV complet → tableau d'objets (en-tête en première ligne, BOM retiré). */
export function readCsvText(text) {
  const lines = text.replace(/^﻿/, "").split(/\r?\n/).filter((l) => l.length > 0);
  const head = parseCsvLine(lines[0]);
  return lines.slice(1).map((l) => {
    const r = parseCsvLine(l);
    const o = {};
    head.forEach((k, i) => (o[k] = r[i] ?? ""));
    return o;
  });
}

/* ---------------- Zip (une entrée, sans dépendance) ---------------- */

/**
 * Flux décompressé d'une entrée d'un zip (méthodes 0 et 8, sans zip64). Sert à lire le CSV de
 * 650 Mo du recensement directement dans l'archive, en flux, sans jamais le charger en mémoire.
 */
export function openZipEntryStream(zipPath, entryName) {
  const fd = openSync(zipPath, "r");
  try {
    const size = fstatSync(fd).size;
    const tailLen = Math.min(size, 65557);
    const tail = Buffer.alloc(tailLen);
    readSync(fd, tail, 0, tailLen, size - tailLen);
    let eocd = -1;
    for (let i = tailLen - 22; i >= 0; i--) {
      if (tail.readUInt32LE(i) === 0x06054b50) {
        eocd = i;
        break;
      }
    }
    if (eocd < 0) throw new Error(`Archive zip illisible : ${zipPath}`);
    const cdSize = tail.readUInt32LE(eocd + 12);
    const cdOffset = tail.readUInt32LE(eocd + 16);
    const cd = Buffer.alloc(cdSize);
    readSync(fd, cd, 0, cdSize, cdOffset);
    let p = 0;
    while (p + 46 <= cdSize && cd.readUInt32LE(p) === 0x02014b50) {
      const method = cd.readUInt16LE(p + 10);
      const compSize = cd.readUInt32LE(p + 20);
      const nameLen = cd.readUInt16LE(p + 28);
      const extraLen = cd.readUInt16LE(p + 30);
      const commentLen = cd.readUInt16LE(p + 32);
      const localOffset = cd.readUInt32LE(p + 42);
      const name = cd.toString("latin1", p + 46, p + 46 + nameLen);
      if (name === entryName) {
        if (compSize === 0xffffffff || localOffset === 0xffffffff) throw new Error("Zip64 non pris en charge");
        const lh = Buffer.alloc(30);
        readSync(fd, lh, 0, 30, localOffset);
        const start = localOffset + 30 + lh.readUInt16LE(26) + lh.readUInt16LE(28);
        const raw = createReadStream(zipPath, { start, end: start + compSize - 1 });
        if (method === 0) return raw;
        if (method === 8) return raw.pipe(createInflateRaw());
        throw new Error(`Méthode de compression ${method} non prise en charge`);
      }
      p += 46 + nameLen + extraLen + commentLen;
    }
    throw new Error(`Entrée ${entryName} absente de ${zipPath}`);
  } finally {
    closeSync(fd);
  }
}

/** Décodage windows-1252 (encodage des CSV de Statistique Canada) ; un octet = un caractère. */
export function cp1252Decoder() {
  const dec = new TextDecoder("windows-1252");
  return new Transform({
    transform(chunk, _enc, cb) {
      cb(null, dec.decode(chunk, { stream: true }));
    },
  });
}

/* ---------------- Texte ---------------- */

/** Slug ASCII en kebab-case : accents retirés, œ → oe, apostrophes et tirets doubles → un tiret. */
export function slugify(s) {
  return String(s)
    .replace(/œ/g, "oe")
    .replace(/Œ/g, "Oe")
    .replace(/æ/g, "ae")
    .replace(/Æ/g, "Ae")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** « Estrie (05) » → { name: "Estrie", code: "05" } ; « -- » devient un tiret demi-cadratin. */
export function parseCodedName(s) {
  const m = /^(.*?)\s*\(([0-9A-Z]+)\)\s*$/.exec(String(s ?? "").trim());
  if (!m) return null;
  return { name: m[1].replace(/--/g, "–").trim(), code: m[2] };
}

/** « MRC Brome-Missisquoi (460) » → { name: "Brome-Missisquoi", code: "460" }. */
export function parseMrcField(s) {
  const p = parseCodedName(s);
  if (!p) return null;
  return { name: p.name.replace(/^MRC\s+/, ""), code: p.code };
}

const VOWEL = /^[AEIOUYÉÈÊÎÔÂÀaeiouyéèêîôâà]/;

/** « Le Granit » → « du Granit », « Les Etchemins » → « des Etchemins », « Acton » → « d'Acton ». */
export function deForm(name) {
  if (/^Les\s/.test(name)) return `des ${name.slice(4)}`;
  if (/^Le\s/.test(name)) return `du ${name.slice(3)}`;
  if (/^(La\s|L['’])/.test(name)) return `de ${name}`;
  if (VOWEL.test(name)) return `d’${name}`;
  return `de ${name}`;
}

/* ---------------- Recensement ---------------- */

/** Valeur publiée, ou null si la cellule est vide ou porte un symbole de suppression (x, F, .., ...). */
export function censusValue(raw, symbol) {
  const sym = String(symbol ?? "").trim();
  if (CENSUS_NULL_SYMBOLS.has(sym)) return null;
  const t = String(raw ?? "").trim();
  if (t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

/**
 * Part des logements construits en 1980 ou avant, exactement comme cities-data.md :
 * (« 1960 ou avant » + « 1961 à 1980 ») ÷ total selon la période de construction, en %, arrondi à 0,1.
 * Null si une des trois valeurs manque ou si le total est nul.
 */
export function builtTo1980Pct(total, before1961, from1961to1980) {
  if (total === null || before1961 === null || from1961to1980 === null || total <= 0) return null;
  return Math.round(((before1961 + from1961to1980) / total) * 1000) / 10;
}

export function censusProfileUrl(csd) {
  return `https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?Lang=F&DGUIDlist=2021A0005${csd}&GENDERlist=1&STATISTIClist=1&HEADERlist=0`;
}

/* ---------------- Géographie ---------------- */

/** Distance orthodromique (haversine, rayon terrestre moyen 6 371 km), en km. */
export function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad;
  const dLon = (lon2 - lon1) * rad;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
}

export const round1 = (n) => Math.round(n * 10) / 10;

/* ---------------- Normales climatiques ---------------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const num = (v) => {
  const t = String(v ?? "").trim();
  if (t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
};

/**
 * Normales 1991-2020 d'une station composite (lignes du CSV provincial d'ECCC pour un même
 * LOCATION_NAME), selon les définitions de cities-data.md. Le minimum extrême vient de la ligne
 * « Long-Term » (toute la période de relevés), sinon de la ligne « Normal ».
 */
export function normals1991FromRows(rows) {
  const pick = (period, element) => rows.find((r) => r.PERIOD_OF_RECORD === period && r.NORMALS_ELEMENT === element) ?? null;
  const avg = pick("Normal", "Daily Average (°C)");
  const min = pick("Normal", "Daily Minimum (°C)");
  const hdd = pick("Normal", "Degree Days Below 18 °C");
  const d20 = pick("Normal", "Days with Minimum Temperature < -20 °C");
  let ext = pick("Long-Term", "Extreme Minimum (°C)");
  let extDate = pick("Long-Term", "Extreme Minimum (°C) Date (yyyy/mm/dd)");
  if (!ext) {
    ext = pick("Normal", "Extreme Minimum (°C)");
    extDate = pick("Normal", "Extreme Minimum (°C) Date (yyyy/mm/dd)");
  }
  const extreme = extremeFromMonths(ext, extDate);
  return {
    hdd18: num(hdd?.Year),
    janMeanC: num(avg?.Jan),
    janMinC: num(min?.Jan),
    annualMeanC: num(avg?.Year),
    daysBelowMinus20: num(d20?.Year),
    extremeMinC: extreme.value,
    extremeMinYear: extreme.year,
    codes: { hdd18: hdd?.Code?.trim() || null, janMeanC: avg?.Code?.trim() || null },
  };
}

/** Minimum des douze mois et année de sa date ; à égalité, la date la plus ancienne (premier record). */
export function extremeFromMonths(valueRow, dateRow) {
  if (!valueRow) return { value: null, year: null };
  let best = null;
  for (const m of MONTHS) {
    const v = num(valueRow[m]);
    if (v === null) continue;
    const d = String(dateRow?.[m] ?? "").trim();
    if (best === null || v < best.v || (v === best.v && d && (!best.d || d < best.d))) best = { v, d };
  }
  if (!best) return { value: null, year: null };
  const y = /^(\d{4})/.exec(best.d);
  return { value: best.v, year: y ? Number(y[1]) : null };
}

/** Une station convient si elle publie le total annuel des degrés-jours et la moyenne de janvier. */
export function stationQualifies(n) {
  return n.hdd18 !== null && n.janMeanC !== null;
}

/** Station qualifiée la plus proche d'un point, ou null. */
export function nearestStation(lat, lon, stations) {
  let best = null;
  for (const s of stations) {
    const km = haversineKm(lat, lon, s.lat, s.lon);
    if (best === null || km < best.km || (km === best.km && s.id < best.station.id)) best = { station: s, km };
  }
  return best;
}

/**
 * Station retenue : la station 1991-2020 qualifiée la plus proche si elle est à 50 km ou moins ;
 * sinon, en repli, la station 1981-2010 qualifiée la plus proche à 50 km ou moins ; sinon aucune.
 */
export function chooseStation(lat, lon, stations1991, stations1981 = []) {
  const a = nearestStation(lat, lon, stations1991);
  if (a && a.km <= MAX_STATION_KM) return { ...a, fallback: false };
  const b = nearestStation(lat, lon, stations1981);
  if (b && b.km <= MAX_STATION_KM) return { ...b, fallback: true, nearest1991Km: a ? a.km : null };
  return { station: null, km: null, fallback: false, nearest1991Km: a ? a.km : null, nearest1981Km: b ? b.km : null };
}

/* ---------------- Admissibilité ---------------- */

/**
 * Règle « pas de donnée, pas de page » : désignation ordinaire, coordonnées officielles,
 * population et logements occupés du recensement 2021, station de normales à 50 km ou moins.
 */
export function eligibility({ designationCode, lat, lon, population, dwellings, stationId }) {
  if (!REGULAR_DESIGNATIONS.has(designationCode)) return { eligible: false, reason: "designation" };
  if (lat === null || lon === null || lat === undefined || lon === undefined) return { eligible: false, reason: "coordonnees" };
  if (population === null || population === undefined || population <= 0 || dwellings === null || dwellings === undefined || dwellings <= 0) {
    return { eligible: false, reason: "recensement" };
  }
  if (!stationId) return { eligible: false, reason: "station" };
  return { eligible: true, reason: null };
}

/* ---------------- Slugs ---------------- */

/**
 * Slugs uniques et déterministes.
 * - Une municipalité reliée à une ville historique (cities.ts) garde le slug historique.
 * - Sinon slug du nom, s'il est unique et libre.
 * - Homonymes (ou slug déjà pris) : on ajoute la MRC si elle les départage, sinon la désignation
 *   (ex. Bedford ville / Bedford canton, même MRC), sinon les deux, sinon le code géographique.
 * @param {Array<{code:string,name:string,mrcName:string|null,designation?:string}>} items
 * @param {Map<string,string>} fixed code → slug historique
 * @param {Set<string>} reserved slugs interdits (historiques, segments de route)
 */
export function assignSlugs(items, fixed, reserved) {
  const out = new Map();
  const free = items.filter((it) => !fixed.has(it.code)).sort((a, b) => a.code.localeCompare(b.code));
  const byBase = new Map();
  for (const it of free) {
    const b = slugify(it.name);
    const list = byBase.get(b) ?? [];
    list.push(it);
    byBase.set(b, list);
  }
  const taken = new Set(reserved);
  for (const [code, slug] of fixed) {
    out.set(code, slug);
    taken.add(slug);
  }
  const unique = (list, key) => new Set(list.map(key)).size === list.length;
  for (const [b, list] of [...byBase].sort((x, y) => x[0].localeCompare(y[0]))) {
    if (list.length === 1 && !taken.has(b)) {
      out.set(list[0].code, b);
      taken.add(b);
      continue;
    }
    const mrc = (it) => (it.mrcName ? slugify(it.mrcName) : "");
    const des = (it) => (it.designation ? slugify(it.designation) : "");
    let make;
    if (list.every((it) => mrc(it)) && unique(list, mrc)) make = (it) => `${b}-${mrc(it)}`;
    else if (list.every((it) => des(it)) && unique(list, des)) make = (it) => `${b}-${des(it)}`;
    else if (list.every((it) => mrc(it) && des(it)) && unique(list, (it) => mrc(it) + des(it))) make = (it) => `${b}-${des(it)}-${mrc(it)}`;
    else make = (it) => `${b}-${it.code}`;
    for (const it of list) {
      let sl = make(it);
      if (taken.has(sl)) sl = `${b}-${it.code}`;
      out.set(it.code, sl);
      taken.add(sl);
    }
  }
  return out;
}
