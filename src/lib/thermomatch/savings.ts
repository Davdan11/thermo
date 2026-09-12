/* ==================================================================
   Économies de chauffage estimées (résultats ThermoMatch).

   Seulement pour une maison chauffée aux plinthes électriques : pour le
   gaz ou le mazout il faudrait un prix de combustible, que le site ne
   publie pas. Aucune estimation si la ville n'a pas de degrés-jours
   officiels (on n'invente pas le climat).

   Méthode des degrés-jours, mêmes hypothèses que les pages
   « Thermopompe à [ville] » :
   - pertes de chaleur (W/K) = charge estimée à −15 °C ÷ (21 °C − (−15 °C))
   - besoins annuels (kWh) = pertes × degrés-jours sous 18 °C × 24 h ÷ 1 000
   - plinthes : 1 kWh d'électricité par kWh de chaleur, tarif D
   - thermopompe : rendement saisonnier de 2,0 à 2,6
   ================================================================== */
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { getCities, type CityProfile } from "@/lib/seo/cities";
import { getCityData } from "@/lib/seo/cities-data";

/** Tarif D d'Hydro-Québec, 2e tranche (celle où tombe le chauffage l'hiver), arrondi : même valeur que les pages villes. */
export const RATE_D_PER_KWH = 0.105;
/** Rendement saisonnier prudent d'une thermopompe au Québec (plinthes = 1). */
export const SEASONAL_COP = { low: 2.0, high: 2.6 } as const;
const INDOOR_C = 21;
const LOAD_OUTDOOR_C = -15;

export interface SavingsEstimate {
  city: string;
  hdd18: number;
  kwh: number;
  baseboardCost: number;
  /** Économie avec le rendement bas (2,0) et haut (2,6). */
  savingLow: number;
  savingHigh: number;
  rate: number;
  copLow: number;
  copHigh: number;
}

function cityForPostal(pc: string): CityProfile | null {
  const cities = getCities();
  const fsa = pc.slice(0, 3);
  const byFsa = cities.find((c) => c.fsa.includes(fsa));
  if (byFsa) return byFsa;
  // Sinon, la ville nommée par la table des codes postaux, ex. « Lac-Saint-Jean (Alma) ».
  const label = resolvePostalCode(pc)?.region ?? "";
  const inParens = label.match(/\(([^)]+)\)/)?.[1] ?? label;
  const name = inParens.trim().toLowerCase();
  if (!name) return null;
  return cities.find((c) => c.name.toLowerCase() === name) ?? null;
}

export function estimateHeatingSavings(input: { postalCode?: unknown; currentSystem?: unknown; loadBtuH: number }): SavingsEstimate | null {
  if (input.currentSystem !== "electrique") return null;
  if (!(input.loadBtuH > 0)) return null;
  const pc = String(input.postalCode ?? "").toUpperCase().replace(/\s+/g, "");
  if (pc.length < 3) return null;
  const city = cityForPostal(pc);
  if (!city) return null;
  const hdd = getCityData(city.slug)?.climate?.hdd18;
  if (typeof hdd !== "number" || hdd <= 0) return null;

  const lossWPerK = input.loadBtuH / 3.412 / (INDOOR_C - LOAD_OUTDOOR_C);
  const kwh = (lossWPerK * hdd * 24) / 1000;
  const baseboardCost = kwh * RATE_D_PER_KWH;
  return {
    city: city.name,
    hdd18: hdd,
    kwh,
    baseboardCost,
    savingLow: baseboardCost - (kwh / SEASONAL_COP.low) * RATE_D_PER_KWH,
    savingHigh: baseboardCost - (kwh / SEASONAL_COP.high) * RATE_D_PER_KWH,
    rate: RATE_D_PER_KWH,
    copLow: SEASONAL_COP.low,
    copHigh: SEASONAL_COP.high,
  };
}
