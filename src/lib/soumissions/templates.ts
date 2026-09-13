/* ==================================================================
   Modèles de soumission (pur, navigateur et serveur).

   « Enregistrer comme modèle » garde ce qui se répète d'un chantier à
   l'autre (machine, plan type, lignes de prix, inclus, exclus,
   hypothèses, déroulement, acompte, remarques) et retire tout ce qui
   est propre à un client : coordonnées, adresse et détails du
   chantier, photos, dates, mot d'introduction.
   « Partir d'un modèle » pose ce contenu dans la soumission en cours
   sans toucher au client, au chantier ni à la date de validité.
   ================================================================== */

import { emptyClient, emptySite } from "./defaults";
import type { QuoteContent } from "./types";

export const TEMPLATE_ID_RE = /^tm_[A-Za-z0-9_-]{8,16}$/;
export const TEMPLATE_LIMIT = 50;

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v)) as T;

/** Contenu d'un modèle : sans client, sans chantier, sans photos ni dates. */
export function templateContentOf(content: QuoteContent): QuoteContent {
  const c = clone(content);
  c.client = emptyClient();
  c.site = { ...emptySite(), access: c.site.access, presence: c.site.presence };
  c.placement.outdoor.photos = [];
  for (const u of c.placement.indoor) u.photos = [];
  c.schedule = { ...c.schedule, mode: "", date: "", windowStart: "", windowEnd: "" };
  c.projectSummary = "";
  c.validUntil = "";
  return c;
}

/** Soumission en cours + modèle : le client, le chantier, la validité et les dates déjà saisies restent. */
export function applyTemplate(current: QuoteContent, template: QuoteContent): QuoteContent {
  const t = clone(template);
  const cur = clone(current);
  return {
    ...t,
    client: cur.client,
    site: { ...cur.site, access: cur.site.access || t.site.access, presence: cur.site.presence || t.site.presence },
    schedule: { ...t.schedule, mode: cur.schedule.mode, date: cur.schedule.date, windowStart: cur.schedule.windowStart, windowEnd: cur.schedule.windowEnd },
    placement: {
      ...t.placement,
      outdoor: { ...t.placement.outdoor, photos: [] },
      indoor: t.placement.indoor.map((u) => ({ ...u, photos: [] })),
    },
    validUntil: cur.validUntil,
    projectSummary: cur.projectSummary,
  };
}

/** Résumé d'un modèle pour la liste : machine, nombre d'unités, de lignes. */
export function templateSummary(content: QuoteContent): string {
  const m = content.machine ? `${content.machine.brand} ${content.machine.name}` : "Sans machine";
  const n = content.placement.indoor.length;
  return `${m} · ${n} unité${n > 1 ? "s" : ""} intérieure${n > 1 ? "s" : ""} · ${content.lines.length} ligne${content.lines.length > 1 ? "s" : ""} de prix`;
}
