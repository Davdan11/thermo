/* ==================================================================
   Refonte R2 — note de priorité d'un dossier. Pure, sans disque.

     note = montant en jeu × probabilité de l'étape × urgence
            (en dollars pondérés, arrondie au dollar)

   Montant en jeu : la valeur du client (valueOf, model.ts : montant
     signé, sinon la plus grosse soumission en attente, sinon
     l'estimation notée ; taxes comprises, JAMAIS l'aide LogisVert).
     Payé, Suivi et Perdu : 0 (rien n'est plus en jeu).
   Probabilité : selon la correspondance des réglages des étapes
     (parcours.ts, DEFAULT_PROBABILITY) avec la prévision existante
     (volet C) : probabilité réglée, sinon taux observé (au moins
     MIN_SAMPLE dossiers réglés), sinon « à définir ». « Signé » : 100 %
     (même règle que « Déjà signé » de la prévision).
   Montant ou probabilité inconnu : note « à définir » (null), jamais
   inventée ; l'urgence reste calculée et sert à l'ordre.

     urgence = 1 + délai + ouvertures + saison + blocage
       délai      0,5 × min(temps dans l'étape ÷ délai d'alerte, 2)
                  (0 à 1 ; 0,5 dès que le délai est atteint)
       ouvertures 0,5 × min(ouvertures ÷ seuil « client chaud », 1)
                  si la dernière ouverture date d'au plus N jours
                  (réglages du radar), étapes Soumission envoyée à
                  Contrat prêt à signer
       saison     0,25 pendant les 45 jours qui suivent le début
                  d'une saison (dates du radar), avant l'installation
       blocage    1 si le dossier est bloqué (parcours.ts, blockersOf)
     Froid annoncé : aucune prévision de température n'existe dans
     les données ; rien n'est ajouté (aucun chiffre inventé).

   Ordre : notes positives (de la plus haute à la plus basse), puis
   notes à définir (par urgence), puis notes nulles (par urgence) ;
   à égalité, le plus ancien dans son étape d'abord.

   Portée (chantier V) : calculée sur l'index reçu. Un index restreint
   à un vendeur ne contient que ses clients : ses taux observés ne
   viennent que de ses dossiers (les probabilités RÉGLÉES par le
   propriétaire s'appliquent à tous).
   ================================================================== */

import { latestSent } from "@/lib/soumissions/quote";
import { observedRates, type ObservedRate } from "../ventes/prevision";
import type { ForecastStage, SalesSettings } from "./extensions";
import type { ClientComputed, CrmIndex } from "./model";
import { deadlineOf, parcoursSettingsOf, probabilityKeyFor, STEP_RANK, stepDelay, type Actor, type Journey, type JourneyState, type ParcoursSettings, type ProbabilityKey } from "./parcours";
import type { Task } from "./tasks";
import { addDaysYmd, localYmd } from "./time";
import type { CrmSettings } from "./types";

export const PRIORITY_WEIGHTS = { delay: 0.5, delayCap: 2, views: 0.5, season: 0.25, seasonWindowDays: 45, blocked: 1 } as const;

export type PrioritySource = "reglee" | "observee" | "signe" | "a-definir";

export interface PriorityFactor {
  id: "delai" | "ouvertures" | "saison" | "blocage";
  label: string;
  value: number;
}

export interface Priority {
  clientId: string;
  state: JourneyState;
  amountCents: number | null;
  probability: number | null;
  probabilitySource: PrioritySource;
  /** Étape de la prévision (ou « signe », « aucune ») d'où vient la probabilité. */
  probabilityFrom: ProbabilityKey;
  urgency: number;
  factors: PriorityFactor[];
  /** Dollars pondérés × urgence ; null : à définir (montant ou probabilité inconnu). */
  score: number | null;
  /** « 7 500 » ou « À définir ». */
  label: string;
  since: string;
}

export interface PriorityContext {
  now: Date;
  ps: ParcoursSettings;
  crm: CrmSettings;
  sales: Pick<SalesSettings, "stageProbabilities" | "hotViews" | "hotWindowDays" | "coolingStart" | "heatingStart">;
  observed: Record<ForecastStage, ObservedRate>;
}

const round2 = (x: number) => Math.round(x * 100) / 100;
const nf0 = new Intl.NumberFormat("fr-CA", { maximumFractionDigits: 0 });
const DAY = 86_400_000;

export function probabilityOf(state: JourneyState, ctx: Pick<PriorityContext, "ps" | "sales" | "observed">): { p: number | null; source: PrioritySource; key: ProbabilityKey } {
  if (state === "perdu") return { p: null, source: "a-definir", key: "aucune" };
  const key = probabilityKeyFor(state, ctx.ps);
  if (key === "signe") return { p: 1, source: "signe", key };
  if (key === "aucune") return { p: null, source: "a-definir", key };
  const set = ctx.sales.stageProbabilities[key];
  if (typeof set === "number") return { p: set, source: "reglee", key };
  const o = ctx.observed[key]?.rate ?? null;
  return o !== null ? { p: o, source: "observee", key } : { p: null, source: "a-definir", key };
}

export function amountAtStake(c: Pick<ClientComputed, "valueCents">, state: JourneyState): number | null {
  if (state === "perdu" || state === "paye" || state === "suivi") return 0;
  return c.valueCents;
}

/** Aujourd'hui tombe dans les N jours qui suivent le début d'une saison (climatisation ou chauffage). */
export function inSeasonStart(today: string, sales: Pick<SalesSettings, "coolingStart" | "heatingStart">, days = PRIORITY_WEIGHTS.seasonWindowDays): boolean {
  const y = Number(today.slice(0, 4));
  for (const yy of [y - 1, y]) {
    for (const md of [sales.coolingStart, sales.heatingStart]) {
      const start = `${yy}-${md}`;
      if (today >= start && today < addDaysYmd(start, days)) return true;
    }
  }
  return false;
}

export function urgencyOf(c: Pick<ClientComputed, "b">, j: Journey, ctx: PriorityContext): { urgency: number; factors: PriorityFactor[] } {
  const W = PRIORITY_WEIGHTS;
  const factors: PriorityFactor[] = [];
  if (j.state !== "perdu") {
    const d = stepDelay(j.state, ctx.ps, ctx.crm);
    if (d) {
      const start = Date.parse(j.since);
      const span = deadlineOf(j.since, d).getTime() - start;
      if (span > 0) {
        const f = Math.max(0, ctx.now.getTime() - start) / span;
        const v = round2(W.delay * Math.min(f, W.delayCap));
        if (v > 0) factors.push({ id: "delai", label: f >= 1 ? `Délai de l’étape dépassé (${Math.round(f * 100)} %)` : `${Math.round(f * 100)} % du délai de l’étape écoulé`, value: v });
      }
    }
    const r = STEP_RANK[j.state];
    if (r >= STEP_RANK["soumission-envoyee"] && r <= STEP_RANK["contrat-pret"]) {
      let n = 0;
      for (const q of c.b.quotes) {
        const v = latestSent(q);
        if (v?.views.lastAt && ctx.now.getTime() - Date.parse(v.views.lastAt) <= ctx.sales.hotWindowDays * DAY) n = Math.max(n, v.views.count);
      }
      if (n > 0) factors.push({ id: "ouvertures", label: `Soumission ouverte ${n} fois (dernière ouverture il y a ${ctx.sales.hotWindowDays} jours au plus)`, value: round2(W.views * Math.min(n / Math.max(1, ctx.sales.hotViews), 1)) });
    }
    if (r <= STEP_RANK.planifie && inSeasonStart(localYmd(ctx.now), ctx.sales)) factors.push({ id: "saison", label: `Début de saison (${W.seasonWindowDays} premiers jours)`, value: W.season });
    if (j.blockers.length) factors.push({ id: "blocage", label: `Bloqué : ${j.blockers[0]}`, value: W.blocked });
  }
  return { urgency: round2(1 + factors.reduce((s, x) => s + x.value, 0)), factors };
}

export function priorityFor(c: ClientComputed, ctx: PriorityContext): Priority | null {
  const j = c.journey;
  if (!j) return null;
  const amountCents = amountAtStake(c, j.state);
  const prob = probabilityOf(j.state, ctx);
  const { urgency, factors } = urgencyOf(c, j, ctx);
  const score = amountCents === null || prob.p === null ? (amountCents === 0 ? 0 : null) : Math.round((amountCents / 100) * prob.p * urgency);
  return { clientId: c.b.id, state: j.state, amountCents, probability: prob.p, probabilitySource: prob.source, probabilityFrom: prob.key, urgency, factors, score, label: score === null ? "À définir" : nf0.format(score), since: j.since };
}

export function priorityContext(index: Pick<CrmIndex, "clients" | "settings" | "now" | "src">): PriorityContext {
  return { now: index.now, ps: parcoursSettingsOf(index.src.crm), crm: index.settings, sales: index.src.crm.salesSettings, observed: observedRates(index.clients) };
}

const cache = new WeakMap<CrmIndex, Map<string, Priority>>();

/** Notes de tous les clients de l'index (calculées une fois par index). */
export function priorityIndex(index: CrmIndex): Map<string, Priority> {
  const hit = cache.get(index);
  if (hit) return hit;
  const ctx = priorityContext(index);
  const out = new Map<string, Priority>();
  for (const c of index.clients) {
    const p = priorityFor(c, ctx);
    if (p) out.set(c.b.id, p);
  }
  cache.set(index, out);
  return out;
}

/**
 * Interface pour « Aujourd'hui » (R1) : note de priorité d'un client, anciens identifiants compris.
 * null : client absent de l'index (hors de la portée d'un vendeur, ou inconnu).
 */
export function priorityOf(index: CrmIndex, clientId: string): Priority | null {
  const c = index.byId.get(clientId);
  return c ? (priorityIndex(index).get(c.b.id) ?? null) : null;
}

const klass = (p: Pick<Priority, "score"> | null | undefined) => (!p ? 1 : p.score === null ? 1 : p.score > 0 ? 0 : 2);

/** Plus prioritaire d'abord. */
export function comparePriority(a: Priority | null | undefined, b: Priority | null | undefined): number {
  const ka = klass(a);
  const kb = klass(b);
  if (ka !== kb) return ka - kb;
  if (ka === 0 && a!.score !== b!.score) return b!.score! - a!.score!;
  const ua = a?.urgency ?? 1;
  const ub = b?.urgency ?? 1;
  if (ua !== ub) return ub - ua;
  return (a?.since ?? "").localeCompare(b?.since ?? "");
}

/** Clients triés par priorité (le pipeline). */
export function rankClients(index: CrmIndex): ClientComputed[] {
  const pr = priorityIndex(index);
  return [...index.clients].sort((a, b) => comparePriority(pr.get(a.b.id), pr.get(b.b.id)) || a.b.id.localeCompare(b.b.id));
}

/** Les N dossiers les plus prioritaires, facultativement pour une seule personne (« Aujourd'hui » : actor « proprietaire »). */
export function topPriorities(index: CrmIndex, n: number, opts: { actor?: Actor } = {}): Array<{ client: ClientComputed; priority: Priority }> {
  const pr = priorityIndex(index);
  return rankClients(index)
    .filter((c) => c.journey && c.journey.state !== "perdu" && (!opts.actor || c.journey.actor === opts.actor))
    .slice(0, Math.max(0, n))
    .map((c) => ({ client: c, priority: pr.get(c.b.id)! }))
    .filter((x) => Boolean(x.priority));
}

/**
 * Tri de la page À faire (dans chaque groupe : en retard, aujourd'hui, à venir) : le client chaud (priorité du radar)
 * d'abord comme avant, puis la note du client, puis l'échéance. Une tâche générale compte comme « à définir ».
 */
export function sortTasksByPriority(tasks: Task[], index: CrmIndex): Task[] {
  const pr = priorityIndex(index);
  const of = (t: Task) => (t.clientId ? pr.get(index.byId.get(t.clientId)?.b.id ?? t.clientId) : undefined);
  return [...tasks].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0) || comparePriority(of(a), of(b)) || a.dueAt.localeCompare(b.dueAt) || a.key.localeCompare(b.key));
}
