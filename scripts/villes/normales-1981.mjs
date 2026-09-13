/* ==================================================================
   Repli : normales climatiques 1981-2010 d'ECCC (un CSV par station,
   https://dd.weather.gc.ca/today/climate/observations/normals/csv/1981-2010/QC/,
   fichiers climate_normals_QC_<ID>_1981-2010.csv, encodage latin1).
   Utilisées seulement quand aucune station 1991-2020 qualifiée n'est à
   50 km ou moins de la municipalité.

   Lignes lues (mêmes définitions que cities-data.md) :
     section « Temperature »                    Daily Average (°C), Daily Minimum (°C),
                                                 Extreme Minimum (°C) + ligne « Date (yyyy/dd) » suivante
     section « Days with Minimum Temperature »  « < -20 °C », colonne Year
     section « Degree Days »                    « Below 18 °C », colonne Year
   ================================================================== */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parseCsvLine } from "./municipalites-lib.mjs";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const num = (v) => {
  const t = String(v ?? "").trim();
  if (t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
};

/** « 45°16'00.000" N » → 45.2667 ; W et S négatifs. */
export function dmsToDecimal(s) {
  const m = /(-?\d+)\D+(\d+)'([\d.]+)"*\s*([NSEW])/.exec(String(s).replace(/""/g, '"'));
  if (!m) return null;
  const v = Number(m[1]) + Number(m[2]) / 60 + Number(m[3]) / 3600;
  return Math.round((m[4] === "S" || m[4] === "W" ? -v : v) * 1e4) / 1e4;
}

/** Charge les stations 1981-2010 qualifiées d'un dossier de CSV ECCC. */
export function load1981Stations(dir) {
  const out = [];
  for (const f of readdirSync(dir).filter((x) => /\.csv$/i.test(x)).sort()) {
    const s = parse1981Csv(readFileSync(join(dir, f), "latin1"));
    if (s) out.push(s);
  }
  return out;
}

/** Une station 1981-2010, ou null si elle ne publie pas le total des degrés-jours et la moyenne de janvier. */
export function parse1981Csv(text) {
  const lines = text.split(/\r?\n/);
  let meta = null;
  let section = "";
  const rows = new Map();
  let extreme = null;
  let extremeDates = null;
  for (let i = 0; i < lines.length; i++) {
    const r = parseCsvLine(lines[i]);
    if (r[0] === "STATION_NAME") {
      const v = parseCsvLine(lines[i + 1] ?? "");
      meta = { name: v[0].trim().replace(/^[*]/, ""), lat: dmsToDecimal(v[2]), lon: dmsToDecimal(v[3]), elevation: num(String(v[4]).replace(/\s*m$/, "")), id: v[5].trim() };
      continue;
    }
    if (r.length === 1 && r[0] && !/^\s*$/.test(r[0])) {
      section = r[0].trim();
      continue;
    }
    if (r.length < 14) continue;
    const label = r[0].trim();
    const cells = Object.fromEntries(MONTHS.map((m, k) => [m, r[k + 1]]));
    cells.Year = r[13];
    cells.Code = r[14] ?? "";
    if (section === "Temperature" && label === "Extreme Minimum (°C)") {
      extreme = cells;
      const next = parseCsvLine(lines[i + 1] ?? "");
      if (next[0]?.startsWith("Date")) extremeDates = Object.fromEntries(MONTHS.map((m, k) => [m, next[k + 1]]));
      continue;
    }
    rows.set(`${section}|${label}`, cells);
  }
  if (!meta || meta.lat === null || meta.lon === null) return null;
  const avg = rows.get("Temperature|Daily Average (°C)");
  const min = rows.get("Temperature|Daily Minimum (°C)");
  const hdd = rows.get("Degree Days|Below 18 °C");
  const d20 = rows.get("Days with Minimum Temperature|< -20 °C");
  let ext = { value: null, year: null };
  if (extreme) {
    let best = null;
    MONTHS.forEach((m, k) => {
      const v = num(extreme[m]);
      if (v === null) return;
      const y = Number(/^(\d{4})/.exec(String(extremeDates?.[m] ?? ""))?.[1] ?? NaN);
      const key = Number.isFinite(y) ? y * 100 + k : Infinity;
      if (best === null || v < best.v || (v === best.v && key < best.key)) best = { v, key, y: Number.isFinite(y) ? y : null };
    });
    if (best) ext = { value: best.v, year: best.y };
  }
  const s = {
    key: `${meta.id}@1981-2010`,
    id: meta.id,
    name: meta.name,
    memberName: meta.name,
    lat: meta.lat,
    lon: meta.lon,
    elevationM: meta.elevation,
    period: "1981-2010",
    hdd18: num(hdd?.Year),
    janMeanC: num(avg?.Jan),
    janMinC: num(min?.Jan),
    extremeMinC: ext.value,
    extremeMinYear: ext.year,
    annualMeanC: num(avg?.Year),
    daysBelowMinus20: num(d20?.Year),
    qualityCode: hdd?.Code?.trim() || null,
    url: `https://climat.meteo.gc.ca/climate_normals/results_1981_2010_f.html?searchType=stnProv&lstProvince=QC&climate_id=${meta.id}&dispBack=0`,
  };
  return s.hdd18 !== null && s.janMeanC !== null ? s : null;
}
