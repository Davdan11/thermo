/* ==================================================================
   Résumé d'un job pour l'installateur, AVANT qu'il accepte.
   Confidentialité : ce type ne contient jamais le nom, le téléphone,
   le courriel, l'adresse ni le code postal du client. Ville, région,
   distance, équipement, date souhaitée et notes seulement.
   ================================================================== */

import { SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import { regionName } from "./regions";
import type { Job } from "./types";

export interface OfferSummary {
  jobNumber: number;
  city: string;
  region: string;
  distanceKm: number | null;
  brand: string | null;
  model: string | null;
  systemType: string | null;
  capacity: string | null;
  desiredDate: string | null;
  desiredWindow: string | null;
  notes: string | null;
}

const TZ = "America/Toronto";

/** « 2026-10-20 » → « mardi 20 octobre 2026 ». */
export function formatDay(day: string): string {
  const d = new Date(`${day}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return day;
  return new Intl.DateTimeFormat("fr-CA", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
}

/** Date et heure de Montréal : « 14 septembre à 18 h 30 ». */
export function formatDateTime(iso: string): string {
  const d = new Date(iso);
  const day = new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "long", timeZone: TZ }).format(d);
  const time = new Intl.DateTimeFormat("fr-CA", { hour: "numeric", minute: "2-digit", timeZone: TZ }).format(d);
  return `${day} à ${time}`;
}

/** Date courte : « 14 sept. ». */
export function formatShortDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "short", timeZone: TZ }).format(new Date(iso));
}

export function buildOfferSummary(job: Job, distanceKm: number | null, brandLabel: (id: string) => string): OfferSummary {
  const clean = (v: string | null | undefined) => (v && v.trim() ? v.trim() : null);
  return {
    jobNumber: job.number,
    city: clean(job.client.city) ?? clean(job.geo?.city) ?? "Ville à confirmer",
    region: regionName(job.region),
    distanceKm,
    brand: job.brand ? brandLabel(job.brand) : null,
    model: clean(job.modelLabel),
    systemType: job.systemType ? SYSTEM_TYPE_LABELS[job.systemType] : null,
    capacity: clean(job.capacity),
    desiredDate: job.desiredDate ? formatDay(job.desiredDate) : null,
    desiredWindow: clean(job.desiredWindow),
    notes: clean(job.installerNotes),
  };
}

/** Distance affichée : sous 5 km, les positions (centre de la ville ou de la RTA) ne permettent pas mieux. */
export function kmText(km: number): string {
  return km < 5 ? "moins de 5 km" : `${km} km`;
}

/** Lignes libellé / valeur du résumé (courriel, page /job, texte). */
export function summaryRows(s: OfferSummary): Array<[string, string | null]> {
  return [
    ["Ville", s.city],
    ["Région", s.region],
    ["Distance de votre base", s.distanceKm !== null ? kmText(s.distanceKm) : null],
    ["Marque", s.brand],
    ["Modèle", s.model],
    ["Type de système", s.systemType],
    ["Capacité", s.capacity],
    ["Date souhaitée", [s.desiredDate, s.desiredWindow].filter(Boolean).join(" · ") || null],
    ["Notes", s.notes],
  ];
}

/** « Daikin murale simple zone à Laval ». */
export function summaryHeadline(s: OfferSummary): string {
  const what = [s.brand, s.systemType?.toLowerCase()].filter(Boolean).join(" ");
  return what ? `${what} à ${s.city}` : `Installation à ${s.city}`;
}
