/* ==================================================================
   Chantier D — mémoire du créateur (pur : navigateur et serveur).
   Le dernier choix de chaque champ du plan devient la valeur
   proposée de la prochaine soumission : support, dégagement, neige,
   étage, mur, hauteur, longueur de ligne, parcours, finition,
   percements, matériau, drain, électricité, couleur du cache-ligne,
   déroulement (écart de dates en jours, durée, arrivée).
   Jamais mémorisé : ce qui est propre à un client ou à une maison
   (coordonnées, adresse, type de propriété, pièce, emplacement de
   l'unité extérieure, photos, prix) ni la pompe de condensat (un
   extra payant n'est jamais proposé d'office).
   Une valeur n'est reprise que dans un champ VIDE : rien d'écrit
   par le propriétaire n'est remplacé.
   ================================================================== */

import { isPumpDrain } from "./choices";
import { addDays, isDay } from "./dates";
import type { ElectricianState, IndoorPlacement, LengthUnit, QuoteContent } from "./types";

export interface QuoteMemory {
  version: 1;
  updatedAt: string | null;
  lengthUnit: LengthUnit | null;
  outdoor: { mounting: string; clearance: string; snow: string };
  indoor: { type: string; floor: number | null; wall: string; height: string; lineLength: number | null; lineRoute: string; lineFinish: string; penetrations: number | null; wallMaterial: string; drain: string };
  electrical: { circuit: string; breaker: string; disconnect: string; electrician: ElectricianState | "" };
  coverColor: string;
  /** Écarts en jours depuis la date de la soumission (jamais une date fixe reprise telle quelle). */
  schedule: { mode: "date" | "fenetre" | ""; dateOffset: number | null; startOffset: number | null; endOffset: number | null; duration: string; arrival: string };
}

export function emptyMemory(): QuoteMemory {
  return {
    version: 1,
    updatedAt: null,
    lengthUnit: null,
    outdoor: { mounting: "", clearance: "", snow: "" },
    indoor: { type: "", floor: null, wall: "", height: "", lineLength: null, lineRoute: "", lineFinish: "", penetrations: null, wallMaterial: "", drain: "" },
    electrical: { circuit: "", breaker: "", disconnect: "", electrician: "" },
    coverColor: "",
    schedule: { mode: "", dateOffset: null, startOffset: null, endOffset: null, duration: "", arrival: "" },
  };
}

const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const num = (v: unknown, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) && v >= min && v <= max ? v : null);
const obj = (v: unknown): Record<string, unknown> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : {});
const ELECTRICIAN = ["requis-inclus", "requis-non-inclus", "non-requis", "a-confirmer"];

/** Fichier lu sur le disque : champs inconnus ignorés, valeurs bornées. */
export function normalizeMemory(raw: unknown): QuoteMemory {
  const r = obj(raw);
  const o = obj(r.outdoor);
  const i = obj(r.indoor);
  const e = obj(r.electrical);
  const s = obj(r.schedule);
  return {
    version: 1,
    updatedAt: typeof r.updatedAt === "string" ? r.updatedAt : null,
    lengthUnit: r.lengthUnit === "pi" || r.lengthUnit === "m" ? r.lengthUnit : null,
    outdoor: { mounting: str(o.mounting, 120), clearance: str(o.clearance, 400), snow: str(o.snow, 400) },
    indoor: {
      type: str(i.type, 120),
      floor: num(i.floor, 0, 10),
      wall: str(i.wall, 160),
      height: str(i.height, 120),
      lineLength: num(i.lineLength, 0, 1000),
      lineRoute: str(i.lineRoute, 120),
      lineFinish: str(i.lineFinish, 120),
      penetrations: num(i.penetrations, 0, 20),
      wallMaterial: str(i.wallMaterial, 120),
      drain: isPumpDrain(str(i.drain)) ? "" : str(i.drain, 120),
    },
    electrical: { circuit: str(e.circuit, 120), breaker: str(e.breaker, 40), disconnect: str(e.disconnect, 120), electrician: ELECTRICIAN.includes(String(e.electrician)) ? (e.electrician as ElectricianState) : "" },
    coverColor: str(r.coverColor, 80),
    schedule: {
      mode: s.mode === "date" || s.mode === "fenetre" ? s.mode : "",
      dateOffset: num(s.dateOffset, 0, 365),
      startOffset: num(s.startOffset, 0, 365),
      endOffset: num(s.endOffset, 0, 365),
      duration: str(s.duration, 120),
      arrival: str(s.arrival, 120),
    },
  };
}

const dayDiff = (from: string, to: string) => Math.round((Date.parse(`${to}T12:00:00Z`) - Date.parse(`${from}T12:00:00Z`)) / 86_400_000);
/** La nouvelle valeur remplace l'ancienne seulement si elle est remplie. */
const pickS = (next: string, prev: string) => (next.trim() ? next.trim() : prev);
const pickN = (next: number | null, prev: number | null) => (next !== null ? next : prev);

/** Dernier choix de chaque champ, à partir d'une soumission enregistrée. */
export function rememberContent(prev: QuoteMemory, c: QuoteContent, today: string, at: string): QuoteMemory {
  const m = structuredClone(prev);
  const p = c.placement;
  m.updatedAt = at;
  m.lengthUnit = p.lengthUnit;
  m.outdoor = { mounting: pickS(p.outdoor.mounting, m.outdoor.mounting), clearance: pickS(p.outdoor.clearance, m.outdoor.clearance), snow: pickS(p.outdoor.snow, m.outdoor.snow) };
  for (const u of p.indoor) {
    m.indoor = {
      type: pickS(u.type, m.indoor.type),
      floor: pickN(u.floor, m.indoor.floor),
      wall: pickS(u.wall, m.indoor.wall),
      height: pickS(u.height, m.indoor.height),
      lineLength: pickN(u.lineLength, m.indoor.lineLength),
      lineRoute: pickS(u.lineRoute, m.indoor.lineRoute),
      lineFinish: pickS(u.lineFinish, m.indoor.lineFinish),
      penetrations: pickN(u.penetrations, m.indoor.penetrations),
      wallMaterial: pickS(u.wallMaterial, m.indoor.wallMaterial),
      drain: isPumpDrain(u.drain) ? m.indoor.drain : pickS(u.drain, m.indoor.drain),
    };
  }
  const e = p.electrical;
  m.electrical = { circuit: pickS(e.circuit, m.electrical.circuit), breaker: pickS(e.breaker, m.electrical.breaker), disconnect: pickS(e.disconnect, m.electrical.disconnect), electrician: e.electrician || m.electrical.electrician };
  m.coverColor = pickS(p.coverColor ?? "", m.coverColor);
  const s = c.schedule;
  const off = (d: string) => (isDay(d) && d >= today ? dayDiff(today, d) : null);
  if (s.mode === "date" && off(s.date) !== null) m.schedule = { ...m.schedule, mode: "date", dateOffset: off(s.date), startOffset: null, endOffset: null };
  else if (s.mode === "fenetre" && off(s.windowStart) !== null && off(s.windowEnd) !== null) m.schedule = { ...m.schedule, mode: "fenetre", dateOffset: null, startOffset: off(s.windowStart), endOffset: off(s.windowEnd) };
  m.schedule.duration = pickS(s.duration, m.schedule.duration);
  m.schedule.arrival = pickS(s.arrival, m.schedule.arrival);
  return m;
}

/** Valeurs proposées d'une nouvelle tête (jamais la pièce). */
export function headDefaults(m: QuoteMemory | null | undefined): Partial<IndoorPlacement> {
  if (!m) return {};
  const i = m.indoor;
  const out: Partial<IndoorPlacement> = {};
  if (i.type) out.type = i.type;
  if (i.floor !== null) out.floor = i.floor;
  if (i.wall) out.wall = i.wall;
  if (i.height) out.height = i.height;
  if (i.lineLength !== null) out.lineLength = i.lineLength;
  if (i.lineRoute) out.lineRoute = i.lineRoute;
  if (i.lineFinish) out.lineFinish = i.lineFinish;
  if (i.penetrations !== null) out.penetrations = i.penetrations;
  if (i.wallMaterial) out.wallMaterial = i.wallMaterial;
  if (i.drain && !isPumpDrain(i.drain)) out.drain = i.drain;
  return out;
}

/** Remplit les champs VIDES d'une soumission avec les derniers choix (nouvelle soumission). */
export function applyMemory(content: QuoteContent, m: QuoteMemory | null | undefined, today: string): QuoteContent {
  if (!m || !m.updatedAt) return content;
  const c = structuredClone(content);
  const p = c.placement;
  const fill = <K extends string>(target: Record<K, string>, key: K, v: string) => {
    if (!target[key].trim() && v) target[key] = v;
  };
  fill(p.outdoor, "mounting", m.outdoor.mounting);
  fill(p.outdoor, "clearance", m.outdoor.clearance);
  fill(p.outdoor, "snow", m.outdoor.snow);
  const h = headDefaults(m);
  p.indoor = p.indoor.map((u) => {
    const next = { ...u };
    for (const [k, v] of Object.entries(h) as Array<[keyof IndoorPlacement, unknown]>) {
      const cur = next[k];
      if (cur === null || cur === "") (next as Record<string, unknown>)[k] = v;
    }
    return next;
  });
  fill(p.electrical, "circuit", m.electrical.circuit);
  fill(p.electrical, "breaker", m.electrical.breaker);
  fill(p.electrical, "disconnect", m.electrical.disconnect);
  if (!p.electrical.electrician && m.electrical.electrician) p.electrical.electrician = m.electrical.electrician;
  if (!p.coverColor && m.coverColor) p.coverColor = m.coverColor;
  const s = c.schedule;
  if (!s.mode && m.schedule.mode === "date" && m.schedule.dateOffset !== null && m.schedule.dateOffset >= 1) {
    s.mode = "date";
    s.date = addDays(today, m.schedule.dateOffset);
  } else if (!s.mode && m.schedule.mode === "fenetre" && m.schedule.startOffset !== null && m.schedule.endOffset !== null && m.schedule.endOffset >= m.schedule.startOffset && m.schedule.startOffset >= 1) {
    s.mode = "fenetre";
    s.windowStart = addDays(today, m.schedule.startOffset);
    s.windowEnd = addDays(today, m.schedule.endOffset);
  }
  if (!s.duration.trim() && m.schedule.duration) s.duration = m.schedule.duration;
  if (!s.arrival.trim() && m.schedule.arrival) s.arrival = m.schedule.arrival;
  return c;
}
