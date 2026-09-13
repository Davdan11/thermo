/* ==================================================================
   Conformité C2 — règles du programme de recommandation (trousse 7),
   pures et vérifiables. Montant fixe, conditions vérifiables : ni
   hasard ni tirage.

   Recommandant : 18 ans ou plus et résident du Canada (déclaré), déjà
   client, ni partenaire installateur ni employé ou personne de
   l'administration.
   Recommandé : nouveau prospect (aucune demande dans les 12 mois qui
   précèdent l'utilisation du lien), lien utilisé AVANT sa première
   demande (la demande qui porte le code est la première de la fenêtre),
   pas du même ménage que le recommandant (auto-parrainage interdit).
   Récompense : installation finie et payée par le client, délai
   d'annulation écoulé, aucun remboursement ; versée en 30 jours
   au maximum, comptés de la dernière de ces conditions. Une seule recommandation par nouveau client (le
   premier code valide l'emporte) ; plafond annuel par recommandant.
   ================================================================== */

import type { ReferralProgram } from "@/lib/gestion/automatisations/types";

export const NEW_PROSPECT_MONTHS = 12;
export const PAYOUT_DAYS = 30;
const DAY = 86_400_000;

export function addMonthsIso(iso: string, months: number): Date {
  const d = new Date(iso);
  d.setUTCMonth(d.getUTCMonth() + months);
  return d;
}

/** Jour de Montréal (AAAA-MM-JJ) d'un instant. */
export const montrealDay = (d: Date) => new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);

export interface ProgramState {
  offered: boolean;
  /** Réglages manquants (programme non offert). */
  missing: string[];
}

/** Programme offert : montant, forme, plafond, date de lancement passée, délai d'annulation. Sans montant : non offert. */
export function programState(p: ReferralProgram | undefined | null, now = new Date()): ProgramState {
  const missing: string[] = [];
  if (!p?.rewardCents || p.rewardCents <= 0) missing.push("montant de la récompense");
  if (!p?.form.trim()) missing.push("forme de la récompense");
  if (!p?.annualCap) missing.push("plafond annuel");
  if (!p?.launchDate) missing.push("date de lancement");
  if (!p?.cancellationDays) missing.push("délai d’annulation du contrat");
  if (p?.launchDate && p.launchDate > montrealDay(now)) missing.push(`lancement le ${p.launchDate}`);
  return { offered: missing.length === 0, missing };
}

/* ---------------- Admissibilité ---------------- */

export interface ReferrerFacts {
  /** Déclaration : 18 ans ou plus. */
  adult: boolean;
  /** Déclaration : réside au Canada. */
  canada: boolean;
  /** Client (job) ou compte : vrai par construction pour un lien remis après une installation. */
  client: boolean;
  /** Partenaire installateur (courriel ou téléphone d'un installateur). */
  partner: boolean;
  /** Employé, dirigeant ou personne de l'administration (membre de l'équipe). */
  staff: boolean;
}

export interface ReferredFacts {
  /** Moment de la demande qui porte le code (utilisation du lien). */
  codeUsedAt: string;
  /** Toutes les demandes connues de la personne (dates ISO), celle du code comprise. */
  demands: string[];
  /** Même courriel, téléphone ou adresse que le recommandant. */
  sameHousehold: boolean;
}

export interface Eligibility {
  eligible: boolean;
  reasons: string[];
}

export function referralEligibility(referrer: ReferrerFacts, referred: ReferredFacts): Eligibility {
  const reasons: string[] = [];
  if (!referrer.adult || !referrer.canada) reasons.push("Recommandant : déclaration « 18 ans ou plus, résident du Canada » manquante");
  if (!referrer.client) reasons.push("Recommandant : ni client ni titulaire d’un compte");
  if (referrer.partner) reasons.push("Recommandant : partenaire installateur (non admissible)");
  if (referrer.staff) reasons.push("Recommandant : employé ou personne de l’administration (non admissible)");
  if (referred.sameHousehold) reasons.push("Auto-parrainage ou même ménage");
  const used = Date.parse(referred.codeUsedAt);
  const windowStart = addMonthsIso(referred.codeUsedAt, -NEW_PROSPECT_MONTHS).getTime();
  const earlier = referred.demands.map((d) => Date.parse(d)).filter((t) => t < used);
  if (earlier.some((t) => t >= windowStart)) reasons.push("Recommandé : déjà inscrit dans les 12 mois précédents (lien utilisé après sa première demande)");
  return { eligible: reasons.length === 0, reasons };
}

/* ---------------- Récompense ---------------- */

export interface InstallFacts {
  /** Contrat client (acceptation de la soumission), s'il est connu. */
  contractAt: string | null;
  /** Fin de l'installation. */
  completedAt: string | null;
  /** Paiement du client confirmé (par le propriétaire). */
  paidAt: string | null;
  /** Remboursement ou annulation du contrat. */
  refundedAt: string | null;
}

export type RewardStatus = "en-attente" | "a-verser" | "refusee";

export interface RewardDecision {
  status: RewardStatus;
  reasons: string[];
  rewardCents: number | null;
  /** Toutes les conditions réunies le… */
  conditionsMetAt: string | null;
  /** À verser au plus tard le… (30 jours). */
  dueBy: string | null;
}

/** Récompenses déjà accordées au recommandant (à verser ou versées), pour le plafond annuel. */
export interface Awarded {
  at: string;
  cents: number;
}

export function rewardDecision(program: ReferralProgram, install: InstallFacts, awarded: Awarded[], now = new Date()): RewardDecision {
  const none = { rewardCents: null, conditionsMetAt: null, dueBy: null };
  if (install.refundedAt) return { status: "refusee", reasons: ["Contrat annulé ou remboursé"], ...none };
  const waiting: string[] = [];
  if (!install.completedAt) waiting.push("installation pas encore terminée");
  if (!install.paidAt) waiting.push("paiement du client à confirmer");
  if (!program.cancellationDays) waiting.push("délai d’annulation non réglé");
  if (waiting.length || !install.completedAt || !install.paidAt || !program.cancellationDays) return { status: "en-attente", reasons: waiting, ...none };
  const cancelEnd = new Date(Date.parse(install.contractAt ?? install.completedAt) + program.cancellationDays * DAY);
  const metAt = new Date(Math.max(Date.parse(install.completedAt), Date.parse(install.paidAt), cancelEnd.getTime()));
  if (metAt.getTime() > now.getTime()) return { status: "en-attente", reasons: [`délai d’annulation jusqu’au ${montrealDay(cancelEnd)}`], ...none };
  const cents = program.rewardCents ?? 0;
  if (cents <= 0) return { status: "en-attente", reasons: ["montant de la récompense non réglé"], ...none };
  const year = montrealDay(metAt).slice(0, 4);
  const sameYear = awarded.filter((a) => montrealDay(new Date(a.at)).slice(0, 4) === year);
  const cap = program.annualCap;
  if (cap?.kind === "nombre" && sameYear.length >= cap.value) return { status: "refusee", reasons: [`Plafond annuel atteint (${cap.value} par année)`], ...none };
  if (cap?.kind === "montant" && sameYear.reduce((s, a) => s + a.cents, 0) + cents > cap.value) return { status: "refusee", reasons: ["Plafond annuel atteint (montant)"], ...none };
  // Montant FIXE : même résultat pour les mêmes faits (aucun hasard).
  return { status: "a-verser", reasons: [], rewardCents: cents, conditionsMetAt: metAt.toISOString(), dueBy: new Date(metAt.getTime() + PAYOUT_DAYS * DAY).toISOString() };
}

/* ---------------- Une seule recommandation par nouveau client ---------------- */

export interface CodeUse {
  code: string;
  at: string;
  personKeys: string[];
}

/** Le premier code valide enregistré l'emporte : une personne n'a qu'une recommandation. */
export function firstValidUse(uses: CodeUse[], valid: (u: CodeUse) => boolean): Map<string, CodeUse> {
  const byPerson = new Map<string, CodeUse>();
  const taken = new Set<string>();
  for (const u of [...uses].sort((a, b) => a.at.localeCompare(b.at))) {
    if (!valid(u) || u.personKeys.some((k) => taken.has(k))) continue;
    for (const k of u.personKeys) taken.add(k);
    byPerson.set(u.personKeys[0], u);
  }
  return byPerson;
}
