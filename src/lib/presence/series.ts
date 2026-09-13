/* ==================================================================
   Séries du plan « La machine à présence » et réglages par défaut.
   Grille : lun modèle, mar question, mer froid, jeu LogisVert,
   ven comparatif (chantier quand l'outil terrain sera branché),
   sam glossaire, dim rien.
   ================================================================== */

import type { PresenceData, PresenceSettings, SeriesId, SeriesSettings } from "./types";
import { SERIES } from "./types";

export interface SeriesInfo {
  id: SeriesId;
  label: string;
  short: string;
  /** Jour de la grille (0 = dimanche), null si hors grille. */
  day: number | null;
  dayLabel: string;
  description: string;
  sourceLabel: string;
  /** La série peut passer en publication automatique après une première approbation. */
  autoAllowed: boolean;
  /** Série branchée (chantier : réservée à la phase 2). */
  available: boolean;
  defaultTime: string;
  defaultStory: boolean;
}

export const SERIES_INFO: Record<SeriesId, SeriesInfo> = {
  modele: {
    id: "modele",
    label: "Le modèle de la semaine",
    short: "Modèle",
    day: 1,
    dayLabel: "Lundi",
    description: "Une machine du catalogue, avec photo : chaleur certifiée à −15 °C, efficacité, froid minimal et aide LogisVert officielle.",
    sourceLabel: "Catalogue et liste officielle LogisVert",
    autoAllowed: true,
    available: true,
    defaultTime: "11:30",
    defaultStory: false,
  },
  question: {
    id: "question",
    label: "Question de la semaine",
    short: "Question",
    day: 2,
    dayLabel: "Mardi",
    description: "Une vraie question reçue, écrite par vous et anonymisée (Loi 25). Toujours approuvée à la main.",
    sourceLabel: "Texte saisi par le propriétaire",
    autoAllowed: false,
    available: true,
    defaultTime: "12:00",
    defaultStory: false,
  },
  froid: {
    id: "froid",
    label: "Le froid de la semaine",
    short: "Froid",
    day: 3,
    dayLabel: "Mercredi",
    description: "Une ville qui a sa page, sa température de conception et ses normales de janvier. En hiver, les plus froides d'abord.",
    sourceLabel: "Normales climatiques (Environnement Canada) et table régionale du site",
    autoAllowed: true,
    available: true,
    defaultTime: "11:30",
    defaultStory: true,
  },
  logisvert: {
    id: "logisvert",
    label: "Combien vous revient LogisVert",
    short: "LogisVert",
    day: 4,
    dayLabel: "Jeudi",
    description: "Le montant officiel pour un jumelage précis, toujours versé au client par Hydro-Québec.",
    sourceLabel: "Liste officielle LogisVert (Hydro-Québec)",
    autoAllowed: true,
    available: true,
    defaultTime: "12:00",
    defaultStory: false,
  },
  comparatif: {
    id: "comparatif",
    label: "Comparatif",
    short: "Comparatif",
    day: 5,
    dayLabel: "Vendredi",
    description: "Deux modèles comparables (même type, puissance voisine, marques différentes), côte à côte.",
    sourceLabel: "Catalogue et liste officielle LogisVert",
    autoAllowed: true,
    available: true,
    defaultTime: "11:30",
    defaultStory: false,
  },
  glossaire: {
    id: "glossaire",
    label: "Le mot de la semaine",
    short: "Glossaire",
    day: 6,
    dayLabel: "Samedi",
    description: "Un terme du glossaire du site, expliqué simplement.",
    sourceLabel: "Glossaire du site",
    autoAllowed: true,
    available: true,
    defaultTime: "10:00",
    defaultStory: true,
  },
  chantier: {
    id: "chantier",
    label: "Chantier de la semaine",
    short: "Chantier",
    day: 5,
    dayLabel: "Vendredi",
    description: "Réservé : vraies photos de fin de chantier, avec le consentement du client (outil terrain, phase 2).",
    sourceLabel: "Outil terrain (phase 2)",
    autoAllowed: false,
    available: false,
    defaultTime: "11:30",
    defaultStory: false,
  },
  blogue: {
    id: "blogue",
    label: "Nouvel article du blogue",
    short: "Blogue",
    day: null,
    dayLabel: "À la publication",
    description: "Créée à la publication d’un article du blogue : titre, chapeau et lien vers l’article. Les chiffres viennent de la source de l’article.",
    sourceLabel: "Article du blogue et ses sources",
    autoAllowed: true,
    available: true,
    defaultTime: "12:30",
    defaultStory: false,
  },
};

export const TIME_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;
export const ROTATION_MIN = 1;
export const ROTATION_MAX = 52;
export const ROTATION_DEFAULT = 8;

export function defaultSettings(): PresenceSettings {
  const series = {} as Record<SeriesId, SeriesSettings>;
  for (const id of SERIES) {
    const info = SERIES_INFO[id];
    series[id] = { enabled: info.available, auto: false, time: info.defaultTime, story: info.defaultStory };
  }
  return { autoPublish: false, rotationWeeks: ROTATION_DEFAULT, series };
}

/** Réglages lus sur disque : valeurs invalides remplacées, règles imposées (question jamais automatique, chantier fermé). */
export function normalizeSettings(raw: Partial<PresenceSettings> | undefined | null): PresenceSettings {
  const def = defaultSettings();
  const out: PresenceSettings = {
    autoPublish: raw?.autoPublish === true,
    rotationWeeks: clampInt(raw?.rotationWeeks, ROTATION_MIN, ROTATION_MAX, ROTATION_DEFAULT),
    series: def.series,
    ...(raw?.updatedAt ? { updatedAt: String(raw.updatedAt) } : {}),
    ...(raw?.updatedBy ? { updatedBy: String(raw.updatedBy) } : {}),
  };
  for (const id of SERIES) {
    const r = raw?.series?.[id];
    const info = SERIES_INFO[id];
    out.series[id] = {
      enabled: info.available ? (typeof r?.enabled === "boolean" ? r.enabled : true) : false,
      auto: info.autoAllowed && info.available ? r?.auto === true : false,
      time: typeof r?.time === "string" && TIME_RE.test(r.time) ? r.time : info.defaultTime,
      story: typeof r?.story === "boolean" ? r.story : info.defaultStory,
    };
  }
  return out;
}

function clampInt(v: unknown, min: number, max: number, fallback: number): number {
  const n = typeof v === "number" ? v : Number.parseInt(String(v ?? ""), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, Math.round(n)));
}

/** Série de la grille pour un jour de semaine (0 = dimanche). */
export function seriesForWeekday(weekday: number, settings: PresenceSettings): SeriesId | null {
  switch (weekday) {
    case 1:
      return "modele";
    case 2:
      return "question";
    case 3:
      return "froid";
    case 4:
      return "logisvert";
    case 5:
      // Point d'extension de la phase 2 : quand l'outil terrain fournira des photos consenties, le vendredi devient « chantier ».
      return SERIES_INFO.chantier.available && settings.series.chantier.enabled ? "chantier" : "comparatif";
    case 6:
      return "glossaire";
    default:
      return null;
  }
}

export type AutoCheck = { ok: true } | { ok: false; reason: string };

/** « Une seule validation du gabarit » : automatique seulement après avoir approuvé une publication de la série. */
export function canEnableAuto(series: SeriesId, approvals: PresenceData["approvals"]): AutoCheck {
  const info = SERIES_INFO[series];
  if (series === "question") return { ok: false, reason: "La question de la semaine est toujours approuvée à la main." };
  if (!info.available) return { ok: false, reason: "Cette série n’est pas encore branchée." };
  if (!info.autoAllowed) return { ok: false, reason: "Cette série reste en approbation manuelle." };
  if (!approvals[series]) return { ok: false, reason: `Approuvez d’abord au moins une publication « ${info.label} » : c’est la validation du gabarit.` };
  return { ok: true };
}
