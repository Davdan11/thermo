/* ==================================================================
   Refonte R2 — alertes de délais par étape, ESCALADE par texto au
   propriétaire (canal d'alerte existant : ALERT_SMS_TO, sendOwnerSms,
   garde-fous de dev). Ce module n'envoie RIEN : le moteur
   d'automatisations (automatisations/engine.ts, « alerte-etape »)
   appelle stageAlertsFrom(), envoie et retient la clé.

   Ordre :
     1. le délai de l'étape est dépassé → tâche CRM (parcours.ts,
        delayTask, ou une tâche existante qui couvre déjà ce retard) ;
     2. la tâche est encore ouverte escalateAfterHours plus tard (1 h
        par défaut : le « en retard » de la page À faire), ou à la fin
        de son report → texto, hors des heures silencieuses.
   Tâche faite : aucun texto. Un seul avis par dossier et par étape
   (clé alerte-etape:<client>:<étape>:<cycle>, le cycle ne change qu'à
   une réactivation). Messages sobres : prénom, ville, étape, durée.
   ================================================================== */

import type { CrmIndex } from "./model";
import { ALERT_TEXT, COVERING_RULES, deadlineOf, delayTaskKey, elapsedFr, outsideQuietHours, parcoursSettingsOf, smsFor, stepDelay, type JourneyStep } from "./parcours";
import { localYmd } from "./time";

export interface StageAlert {
  key: string;
  clientId: string;
  step: JourneyStep;
  /** Moment du texto (délai + escalade, report compris, hors heures silencieuses). */
  dueAt: string;
  /** « Julie (Laval) : client prêt depuis 6 h, aucun installateur ». */
  text: string;
  href: string;
}

/** Au plus N textos d'alerte par passage du moteur (pas de pourriel au démarrage) ; les autres attendent le passage suivant. */
export const MAX_STAGE_ALERTS_PER_TICK = 3;
/** Au-delà de N heures après son moment, une alerte est notée « manquée », jamais envoyée en retard. */
export const STAGE_ALERT_EXPIRES_HOURS = 12;

const HOUR = 3_600_000;

export const stageAlertKey = (clientId: string, step: JourneyStep, reactivatedAt: string | null): string => `alerte-etape:${clientId}:${step}:${reactivatedAt ? localYmd(reactivatedAt) : "0"}`;

export function stageAlertsFrom(index: Pick<CrmIndex, "clients" | "settings" | "src">, now: Date): StageAlert[] {
  const ps = parcoursSettingsOf(index.src.crm);
  const out: StageAlert[] = [];
  for (const c of index.clients) {
    const j = c.journey;
    if (!j || j.state === "perdu") continue;
    const step = j.state;
    if (!smsFor(step, ps)) continue;
    const d = stepDelay(step, ps, index.settings);
    if (!d) continue;
    let base = deadlineOf(j.since, d);
    if (base.getTime() <= now.getTime()) {
      const cover = COVERING_RULES[step] ?? [];
      const own = delayTaskKey(c.b.id, step, j.since);
      const watch = c.tasks.find((t) => t.key === own || cover.includes(t.rule));
      if (!watch) continue; // tâche faite : le propriétaire s'en occupe
      if (watch.snoozed && Date.parse(watch.dueAt) > base.getTime()) base = new Date(watch.dueAt);
    }
    const due = outsideQuietHours(new Date(base.getTime() + ps.escalateAfterHours * HOUR), ps);
    const who = `${c.b.firstName || "Client"}${c.b.city ? ` (${c.b.city})` : ""}`;
    out.push({ key: stageAlertKey(c.b.id, step, c.stage.reactivatedAt), clientId: c.b.id, step, dueAt: due.toISOString(), text: `${who} : ${ALERT_TEXT[step](elapsedFr(j.since, now))}`, href: `/gestion/clients/${c.b.id}` });
  }
  return out.sort((a, b) => a.dueAt.localeCompare(b.dueAt) || a.key.localeCompare(b.key));
}

/** Texto au propriétaire. */
export const stageAlertSms = (a: Pick<StageAlert, "text" | "href">, base: string): string => `TAV · ${a.text}. ${base.replace(/\/$/, "")}${a.href}`;

/**
 * Sélection d'un passage : les alertes déjà dépassées de plus de STAGE_ALERT_EXPIRES_HOURS (notées manquées), au plus
 * MAX_STAGE_ALERTS_PER_TICK alertes dues, et la prochaine à venir (affichée dans Automatisations).
 */
export function selectStageAlerts(alerts: readonly StageAlert[], handled: (key: string) => boolean, now: Date): StageAlert[] {
  const fresh = alerts.filter((a) => !handled(a.key));
  const t = now.getTime();
  const exp = STAGE_ALERT_EXPIRES_HOURS * HOUR;
  const expired = fresh.filter((a) => Date.parse(a.dueAt) + exp < t);
  const due = fresh.filter((a) => Date.parse(a.dueAt) <= t && Date.parse(a.dueAt) + exp >= t).slice(0, MAX_STAGE_ALERTS_PER_TICK);
  const next = fresh.filter((a) => Date.parse(a.dueAt) > t).slice(0, 1);
  return [...expired, ...due, ...next];
}
