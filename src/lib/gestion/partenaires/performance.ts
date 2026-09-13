/* ==================================================================
   Fiche de performance d'un partenaire (fonctions pures).

   Mesures :
     - installations : jobs « terminé » qui lui étaient attribués ;
     - appels de service dus à la main-d'œuvre, par 100 installations
       (seule la cause « main-d'œuvre » compte contre lui) ;
     - ponctualité : arrivée ≤ heure prévue (ou heure estimée donnée
       en route) + tolérance réglée ;
     - conformité des photos : chantier fermé avec une photo par étape
       et aucune photo signalée à la vérification ;
     - taux d'acceptation des offres (même calcul que le classement) ;
     - délai de paiement et satisfaction : points d'extension du
       volet B (null tant qu'ils ne sont pas branchés).

   Niveaux automatiques (seuils dans Réglages) :
     Probation : assez d'historique ET un seuil franchi (main-d'œuvre,
                 photos, ponctualité) OU une commission en retard ;
     Or        : assez d'installations ET tous les indicateurs mesurés
                 au-dessus des seuils ;
     Standard  : tous les autres, y compris les nouveaux partenaires.
   Le propriétaire peut imposer un niveau (avec une raison, historisée).

   Effet sur le classement des jobs (matching.ts) : points ajoutés au
   score sur 100, par défaut Or +6, Standard 0, Probation −10. Poids
   modéré : la marque (40), la distance (30) et la charge (20) restent
   déterminantes ; le niveau départage des candidats proches.
   ================================================================== */

import { installerStats } from "../matching";
// Conformité C3 : délais de service (accusé de réception, visite) de l'annexe E.
import { sameBusinessDay, ticketSla } from "../sav/sla";
import type { ServiceTicket } from "../sav/types";
import { PHOTO_STEPS, type FieldRecord } from "../terrain/types";
import type { Job } from "../types";
import type { PaymentStats, SatisfactionStats } from "./extensions";
import { TIER_LABELS, type PartnerRecord, type PartnerSettings, type Tier } from "./types";

export interface Rate {
  n: number;
  of: number;
  rate: number | null;
}

const rate = (n: number, of: number): Rate => ({ n, of, rate: of ? n / of : null });

export interface ServiceMeasures {
  ack: Rate;
  visit: Rate;
  sameDay: Rate;
  /** Accusés de réception hors délai (ou en retard) sur les 90 derniers jours. */
  lateAcks90: number;
}

/** Conformité C3 : mesures des délais de service ; seuls les billets assignés depuis la mise en place des délais comptent. */
export function serviceMeasures(tickets: ServiceTicket[], settings: PartnerSettings, now: Date): ServiceMeasures {
  const since = now.getTime() - 90 * 86_400_000;
  let ackN = 0,
    ackOf = 0,
    visitN = 0,
    visitOf = 0,
    sameN = 0,
    sameOf = 0,
    late90 = 0;
  for (const t of tickets) {
    if (!t.ackDueAt) continue;
    const s = ticketSla(t, settings.sla, now);
    if (!s) continue;
    if (s.ack.at || s.ack.state === "en-retard") {
      ackOf++;
      if (s.ack.state === "respecte") ackN++;
      else if (Date.parse(s.from) >= since) late90++;
    }
    if (s.visit.at || s.visit.state === "en-retard") {
      visitOf++;
      if (s.visit.state === "respecte") visitN++;
    }
    if (s.priority === "normal" && s.ack.at) {
      sameOf++;
      if (sameBusinessDay(s.from, s.ack.at)) sameN++;
    }
  }
  return { ack: rate(ackN, ackOf), visit: rate(visitN, visitOf), sameDay: rate(sameN, sameOf), lateAcks90: late90 };
}

export interface PartnerPerformance {
  installs: number;
  laborCalls: number;
  allCalls: number;
  laborPer100: number | null;
  punctuality: Rate;
  photos: Rate & { flagged: number };
  acceptance: Rate;
  /** Conformité C3 : appels de service assignés (accusé et visite dans les délais, accusé le jour ouvrable même, retards sur 90 jours). */
  service: ServiceMeasures;
  payment: PaymentStats | null;
  satisfaction: SatisfactionStats | null;
  autoTier: Tier;
  tier: Tier;
  reasons: string[];
  override: PartnerRecord["tierOverride"];
}

export interface PerformanceInput {
  jobs: Job[];
  records: Record<string, FieldRecord>;
  tickets: ServiceTicket[];
  partner?: PartnerRecord | null;
  settings: PartnerSettings;
  now: Date;
  payment?: PaymentStats | null;
  satisfaction?: SatisfactionStats | null;
}

const MIN = 60_000;

/** Chantier fermé conforme : une photo par étape requise, aucune photo signalée. */
export function photoCompliant(r: FieldRecord | undefined): boolean {
  if (!r) return false;
  if (r.photos.some((p) => p.review?.status === "signalee")) return false;
  return PHOTO_STEPS.every((s) => r.photos.some((p) => p.step === s.id));
}

export function computePerformance(installerId: string, input: PerformanceInput): PartnerPerformance {
  const { jobs, records, tickets, settings, now } = input;
  const mine = jobs.filter((j) => j.assignedInstallerId === installerId);
  const done = mine.filter((j) => j.status === "termine");
  const installs = done.length;

  const myTickets = tickets.filter((t) => t.installerId === installerId);
  const laborCalls = myTickets.filter((t) => t.cause === "main-oeuvre").length;

  // Ponctualité : chantiers avec une heure d'arrivée et une référence (heure prévue, sinon heure estimée en route).
  let measured = 0;
  let onTime = 0;
  for (const j of mine) {
    const r = records[j.id];
    if (!r?.arrivedAt) continue;
    const ref = r.plannedAt ?? r.enRoute?.etaAt ?? null;
    if (!ref) continue;
    measured++;
    if (Date.parse(r.arrivedAt) <= Date.parse(ref) + settings.punctualityMinutes * MIN) onTime++;
  }

  // Photos : seulement les chantiers fermés depuis l'outil terrain (ou marqués avec completedAt) : les anciens jobs ne comptent pas.
  const closed = done.filter((j) => records[j.id] || j.completedAt);
  const compliant = closed.filter((j) => photoCompliant(records[j.id])).length;
  const flagged = closed.filter((j) => records[j.id]?.photos.some((p) => p.review?.status === "signalee")).length;

  const st = installerStats(installerId, jobs, now);

  const base = {
    installs,
    laborCalls,
    allCalls: myTickets.length,
    laborPer100: installs ? Math.round((laborCalls / installs) * 1000) / 10 : null,
    punctuality: rate(onTime, measured),
    photos: { ...rate(compliant, closed.length), flagged },
    acceptance: rate(st.accepted, st.answered),
    service: serviceMeasures(myTickets, settings, now),
    payment: input.payment ?? null,
    satisfaction: input.satisfaction ?? null,
  };
  const auto = autoTier(base, settings);
  const override = input.partner?.tierOverride ?? null;
  return { ...base, autoTier: auto.tier, tier: override?.tier ?? auto.tier, reasons: auto.reasons, override };
}

type Measures = Pick<PartnerPerformance, "installs" | "laborPer100" | "punctuality" | "photos" | "acceptance" | "payment"> & { service?: ServiceMeasures };

const p100 = (x: number) => `${String(x).replace(".", ",")} par 100 installations`;
const pc = (x: number) => `${Math.round(x * 100)} %`;

export function autoTier(m: Measures, settings: PartnerSettings): { tier: Tier; reasons: string[] } {
  const th = settings.thresholds;
  const probation: string[] = [];
  if (m.installs >= th.probationMinInstalls) {
    // Conformité C3 : annexe E, probation AU-DELÀ du seuil de retours attribuables à l'installation.
    if (m.laborPer100 !== null && m.laborPer100 > th.probationLaborPer100) probation.push(`appels de service main-d’œuvre : ${p100(m.laborPer100)} (au-delà de ${th.probationLaborPer100})`);
    if (m.photos.of >= th.probationMinInstalls && m.photos.rate !== null && m.photos.rate < th.probationPhotoRate) probation.push(`photos conformes : ${pc(m.photos.rate)} (seuil ${pc(th.probationPhotoRate)})`);
    if (m.punctuality.of >= th.probationMinInstalls && m.punctuality.rate !== null && m.punctuality.rate < th.probationPunctuality) probation.push(`ponctualité : ${pc(m.punctuality.rate)} (seuil ${pc(th.probationPunctuality)})`);
  }
  if (m.payment && m.payment.late > 0) probation.push(`${m.payment.late} commission${m.payment.late > 1 ? "s" : ""} en retard`);
  // Conformité C3 : annexe E, réponse au service normal au-delà d'un jour ouvrable, répétée (2 fois ou plus en 90 jours).
  if (m.service && m.service.lateAcks90 >= 2) probation.push(`accusé de réception d’un appel de service hors délai ${m.service.lateAcks90} fois en 90 jours`);
  if (probation.length) return { tier: "probation", reasons: probation };

  if (m.installs < th.orMinInstalls) return { tier: "standard", reasons: [`${m.installs} installation${m.installs > 1 ? "s" : ""} terminée${m.installs > 1 ? "s" : ""} : Or possible dès ${th.orMinInstalls}`] };
  const misses: string[] = [];
  if ((m.laborPer100 ?? 0) > th.orMaxLaborPer100) misses.push(`main-d’œuvre ${p100(m.laborPer100 ?? 0)} (Or : ${th.orMaxLaborPer100} au plus)`);
  if (m.photos.rate === null || m.photos.rate < th.orMinPhotoRate) misses.push(`photos conformes ${m.photos.rate === null ? "non mesurées" : pc(m.photos.rate)} (Or : ${pc(th.orMinPhotoRate)})`);
  if (m.punctuality.of >= 5 && m.punctuality.rate !== null && m.punctuality.rate < th.orMinPunctuality) misses.push(`ponctualité ${pc(m.punctuality.rate)} (Or : ${pc(th.orMinPunctuality)})`);
  if (m.acceptance.of >= 5 && m.acceptance.rate !== null && m.acceptance.rate < th.orMinAcceptance) misses.push(`acceptation ${pc(m.acceptance.rate)} (Or : ${pc(th.orMinAcceptance)})`);
  // Conformité C3 : annexe E, niveau Or = accusé de réception le jour ouvrable même.
  if (m.service && m.service.sameDay.of >= 3 && m.service.sameDay.rate !== null && m.service.sameDay.rate < 1) misses.push(`accusé de réception le jour même ${pc(m.service.sameDay.rate)} (Or : toujours)`);
  if (!misses.length) return { tier: "or", reasons: ["tous les indicateurs mesurés dépassent les seuils du niveau Or"] };
  return { tier: "standard", reasons: misses };
}

/** Pour le classement des jobs : « niveau Or (+6) », rien pour Standard à 0 point. */
export function tierReason(tier: Tier, points: number): string | null {
  if (!points) return null;
  return `niveau ${TIER_LABELS[tier]} (${points > 0 ? "+" : "−"}${Math.abs(points)})`;
}
