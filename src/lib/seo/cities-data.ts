/* ==================================================================
   Données locales par ville (normales climatiques ECCC, recensement 2021)

   Source : src/lib/seo/cities-data.json, constitué à partir de sources
   officielles citées (voir cities-data.md). Un champ absent vaut null :
   la page n'affiche alors pas la donnée, elle ne l'estime jamais.
   ================================================================== */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export interface CityClimate {
  /** Degrés-jours de chauffage sous 18 °C, total annuel. */
  hdd18: number | null;
  /** Température quotidienne moyenne de janvier (°C). */
  janMeanC: number | null;
  /** Température quotidienne minimale moyenne de janvier (°C). */
  janMinC: number | null;
  /** Minimum extrême enregistré (°C). */
  extremeMinC: number | null;
  extremeMinYear?: number | null;
  annualMeanC: number | null;
  /** Jours par an avec un minimum ≤ -20 °C, si publié. */
  daysBelowMinus20: number | null;
  station: string | null;
  stationId?: string | null;
  normalsPeriod: string | null;
  sourceUrl: string | null;
}

export interface CityCensus {
  population2021: number | null;
  dwellings2021: number | null;
  builtBefore1981Pct: number | null;
  sourceUrl: string | null;
}

export interface CityData {
  climate: Partial<CityClimate> | null;
  census: Partial<CityCensus> | null;
  sources?: Array<{ label: string; url: string }>;
}

let cache: Record<string, CityData> | null = null;

function load(): Record<string, CityData> {
  if (cache) return cache;
  const file = join(process.cwd(), "src/lib/seo/cities-data.json");
  cache = existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as Record<string, CityData>) : {};
  return cache;
}

export function getCityData(slug: string): CityData | null {
  return load()[slug] ?? null;
}

/** Degrés-jours de la ville de référence (Montréal), pour situer une ville. */
export function referenceHdd(): number | null {
  return load()["montreal"]?.climate?.hdd18 ?? null;
}

export function fmtInt(n: number | null | undefined): string {
  return n === null || n === undefined ? "—" : Math.round(n).toLocaleString("fr-CA");
}

export function fmtTemp(n: number | null | undefined): string {
  if (n === null || n === undefined) return "—";
  const r = Math.round(n * 10) / 10;
  return `${r.toLocaleString("fr-CA", { minimumFractionDigits: Number.isInteger(r) ? 0 : 1, maximumFractionDigits: 1 })} °C`;
}
