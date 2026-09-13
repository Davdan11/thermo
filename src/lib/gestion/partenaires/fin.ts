/* ==================================================================
   Conformité C3 — fin du partenariat (fonctions pures).

     - Sans motif : préavis de 30 jours (décision du propriétaire).
       Le partenariat prend fin à la date calculée ; entre-temps, les
       nouvelles offres sont suspendues (la suspension n'interrompt pas
       les projets déjà acceptés).
     - Pour motif, défaut remédiable : avis décrivant le défaut, délai
       de correction de 10 jours ; ensuite le propriétaire confirme la
       fin, ou annule si le défaut est corrigé.
     - Pour motif, immédiate : dans les cas que l'entente énumère.
   L'avis est réputé reçu le jour ouvrable de l'envoi s'il part avant
   17 h, sinon le jour ouvrable suivant.

   Non-contournement : rappel en information seulement (24 mois après
   la plus tardive de l'introduction du client et de la fin du
   projet). Aucune automatisation punitive.

   Les numéros d'articles servent seulement à retrouver le texte dans
   la version signée ou en vigueur (données) ; aucun texte ici.
   ================================================================== */

import { addDaysYmd, isBusinessDay, localYmd, zoned, zonedToUtc } from "../crm/time";
import type { Job } from "../types";
import type { PartnerRecord, Termination, TerminationMode } from "./types";

/** Décision du propriétaire : résiliation sans motif sur préavis de 30 jours. */
export const NOTICE_DAYS = 30;
/** Délai de correction d'un défaut remédiable. */
export const CURE_DAYS = 10;
/** Décision du propriétaire : non-contournement pendant 24 mois. */
export const NON_CIRCUMVENTION_MONTHS = 24;
/** Heure limite de l'avis réputé reçu le jour même. */
export const NOTICE_CUTOFF_HOUR = 17;

/** Articles de l'entente maître (numérotation de l'avocat) consultés dans la version signée ou en vigueur. */
export const ARTICLES = { termination: "2.24", nonCircumvention: "2.12", notices: "2.26", privacy: "2.18" } as const;
export const PRIVACY_ANNEX = "D";

export const TERMINATION_MODE_LABELS: Record<TerminationMode, string> = {
  "sans-motif": "Sans motif, préavis de 30 jours",
  "motif-defaut": "Pour motif : défaut non corrigé en 10 jours",
  "motif-immediat": "Pour motif : fin immédiate",
};

/** Jour (Montréal) où l'avis est réputé reçu. */
export function noticeReceivedOn(now: Date): string {
  const z = zoned(now);
  if (isBusinessDay(z.ymd) && z.hour < NOTICE_CUTOFF_HOUR) return z.ymd;
  let d = addDaysYmd(z.ymd, 1);
  while (!isBusinessDay(d)) d = addDaysYmd(d, 1);
  return d;
}

/** Date où la fin prend effet : réception + 30 jours (sans motif), + 10 jours (défaut), le jour même (immédiate). */
export function terminationDates(mode: TerminationMode, now: Date): { receivedOn: string; effectiveOn: string } {
  const receivedOn = noticeReceivedOn(now);
  if (mode === "motif-immediat") return { receivedOn, effectiveOn: localYmd(now) };
  return { receivedOn, effectiveOn: addDaysYmd(receivedOn, mode === "sans-motif" ? NOTICE_DAYS : CURE_DAYS) };
}

export type TerminationPhase = "preavis" | "correction" | "a-confirmer" | "terminee" | "annulee";

export const TERMINATION_PHASE_LABELS: Record<TerminationPhase, string> = {
  preavis: "Préavis en cours",
  correction: "Délai de correction en cours",
  "a-confirmer": "Délai de correction écoulé : à confirmer",
  terminee: "Partenariat terminé",
  annulee: "Avis annulé",
};

export function terminationPhase(record: Pick<PartnerRecord, "termination" | "ended"> | null | undefined, now: Date): TerminationPhase | null {
  const t = record?.termination;
  if (!t) return null;
  if (t.cancelledAt) return "annulee";
  if (record?.ended || t.mode === "motif-immediat") return "terminee";
  if (localYmd(now) >= t.effectiveOn) return t.mode === "sans-motif" ? "terminee" : "a-confirmer";
  return t.mode === "sans-motif" ? "preavis" : "correction";
}

/** Fin effective : décidée (ended), ou préavis sans motif arrivé à terme (même avant que la fiche soit mise à jour). */
export function endedOf(record: Pick<PartnerRecord, "termination" | "ended"> | null | undefined, now: Date): { at: string; by: string; reason: string } | null {
  if (record?.ended) return record.ended;
  const t = record?.termination;
  if (t && !t.cancelledAt && t.mode === "sans-motif" && localYmd(now) >= t.effectiveOn) return { at: zonedToUtc(t.effectiveOn, 0).toISOString(), by: t.by, reason: t.reason };
  return null;
}

/** Préavis ou délai de correction en cours : nouvelles offres suspendues. */
export const suspendedByNotice = (record: Pick<PartnerRecord, "termination" | "ended"> | null | undefined, now: Date): Termination | null => {
  const ph = terminationPhase(record, now);
  return ph === "preavis" || ph === "correction" || ph === "a-confirmer" ? record!.termination! : null;
};

/* ---------------- Non-contournement (information) ---------------- */

export function addMonthsYmd(ymd: string, months: number): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const total = y * 12 + (m - 1) + months;
  const ny = Math.floor(total / 12);
  const nm = (total % 12) + 1;
  const last = new Date(Date.UTC(ny, nm, 0)).getUTCDate();
  return `${ny}-${String(nm).padStart(2, "0")}-${String(Math.min(d, last)).padStart(2, "0")}`;
}

export interface NonCircumvention {
  /** Clients introduits (projets acceptés par ce partenaire). */
  clients: number;
  /** Projets en cours : la période court encore 24 mois après leur fin. */
  ongoing: number;
  /** Dernier jour de la période pour les projets terminés (AAAA-MM-JJ), si connu. */
  until: string | null;
}

/** Période de non-contournement : pour chaque projet accepté, 24 mois après la plus tardive de l'introduction et de la fin. */
export function nonCircumvention(jobs: Job[], installerId: string): NonCircumvention {
  let until: string | null = null;
  let ongoing = 0;
  let clients = 0;
  for (const j of jobs) {
    const accepted = j.offers.find((o) => o.installerId === installerId && o.response === "accepte");
    if (!accepted && j.assignedInstallerId !== installerId) continue;
    clients++;
    const intro = localYmd(accepted?.respondedAt ?? j.createdAt);
    if (j.status !== "termine" || !j.completedAt) {
      if (j.assignedInstallerId === installerId && j.status !== "annule") ongoing++;
      if (j.status === "annule" || j.assignedInstallerId !== installerId) {
        const end = addMonthsYmd(intro, NON_CIRCUMVENTION_MONTHS);
        if (!until || end > until) until = end;
      }
      continue;
    }
    const base = [intro, localYmd(j.completedAt)].sort().at(-1)!;
    const end = addMonthsYmd(base, NON_CIRCUMVENTION_MONTHS);
    if (!until || end > until) until = end;
  }
  return { clients, ongoing, until };
}
