/* ==================================================================
   Radar à occasions (volet C). Règles de tâches automatiques de plus,
   appelées depuis autoTasks (crm/tasks.ts) ; mêmes principes :
   calculées à chaque lecture, jamais stockées, clé
   auto:<règle>:<référence> (une nouvelle activité en recrée une).

     client-chaud                  soumission ouverte au moins hotViews
                                   fois, consultée il y a au plus
                                   hotWindowDays jours, sans réponse
                                   → passe en tête de liste
     thermomatch-sans-soumission   ThermoMatch reçu (ou demande portant
                                   le modèle choisi dans ThermoMatch)
                                   sans soumission créée depuis
                                   → « Créer la soumission »
     relance-saison                client perdu, la saison suivante a
                                   commencé : avec un consentement
                                   enregistré, relance automatique
                                   permise (moteur du volet B) ; sinon
                                   tâche manuelle seulement

   Alertes (radarAlertsFrom) : demande sans réponse au-delà du délai de
   rappel (callbackHours ouvrables) → alerte au propriétaire. Ce module
   n'envoie RIEN : le moteur d'automatisations (volet B) appelle
   radarAlerts() et seasonalRelaunches() (radar/service.ts), envoie,
   et retient les clés déjà traitées.
   ================================================================== */

import type { JournalEntry } from "@/lib/crm/lead-journal";
import { effectiveStatus, latestSent } from "@/lib/soumissions/quote";
import { activeConsent, DEFAULT_SALES_SETTINGS, type SalesSettings, type SeasonConsent } from "../crm/extensions";
import type { CrmIndex } from "../crm/model";
import { isDemand, KIND_LABELS } from "../crm/sources";
import type { StageInfo } from "../crm/stage";
import type { Task, TaskFamily } from "../crm/tasks";
import { addBusinessHours, dayShort, localYmd, stamp, zonedToUtc } from "../crm/time";
import type { ClientBundle, CrmData, CrmSettings } from "../crm/types";

export type RadarRule = "client-chaud" | "thermomatch-sans-soumission" | "relance-saison";

export interface RadarContext {
  sales: SalesSettings;
  consents: Record<string, SeasonConsent>;
}

export const radarContext = (crm: Partial<Pick<CrmData, "salesSettings" | "seasonConsents">>): RadarContext => ({
  sales: crm.salesSettings ?? DEFAULT_SALES_SETTINGS,
  consents: crm.seasonConsents ?? {},
});

/** Un client chaud passe devant toutes les autres tâches (même échéance ou plus ancienne). */
export const HOT_PRIORITY = 10;

const DAY = 86_400_000;

function task(rule: RadarRule, ref: string, clientId: string, family: TaskFamily, fields: Pick<Task, "title" | "detail" | "dueAt" | "href"> & Partial<Pick<Task, "quoteId" | "priority">>): Task {
  return { key: `auto:${rule}:${ref}`, rule, family, clientId, manual: false, snoozed: false, ...fields };
}

/* ---------------- ThermoMatch ---------------- */

/** « Marque — <id du modèle> » : le modèle choisi dans ThermoMatch, porté par la demande de soumission. */
export const THERMOMATCH_SELECTION_RE = /^.{1,80}\s[—–-]\s[A-Za-z0-9_.:-]{2,120}$/;

/** Demande issue de ThermoMatch : les choix reçus par courriel (code de partage), ou une demande de soumission avec le modèle choisi. */
export function isThermoMatchLead(e: JournalEntry): boolean {
  if (!isDemand(e)) return false;
  if (e.kind === "thermomatch") return true;
  const sel = (e.lead ?? {}).modeleSelectionne;
  return e.kind === "soumission" && typeof sel === "string" && THERMOMATCH_SELECTION_RE.test(sel.trim());
}

/** Nouvelle soumission pré-remplie avec le client et la machine choisie dans ThermoMatch. */
export function thermoMatchQuoteHref(clientId: string, entryId: string, choice = 1): string {
  return `/gestion/soumissions/nouvelle?client=${clientId}&thermomatch=${encodeURIComponent(entryId)}${choice > 1 ? `&choix=${choice}` : ""}`;
}

/* ---------------- Saisons ---------------- */

export interface Season {
  kind: "climatisation" | "chauffage";
  /** Premier jour de la saison (AAAA-MM-JJ). */
  start: string;
  /** Premier jour de la saison d'après (exclu). */
  end: string;
}

export const SEASON_LABELS: Record<Season["kind"], string> = { climatisation: "climatisation", chauffage: "chauffage" };

/** Saison qui suit une date : du premier début de saison après cette date jusqu'au début suivant. */
export function nextSeason(afterYmd: string, sales: Pick<SalesSettings, "coolingStart" | "heatingStart">): Season | null {
  const y = Number(afterYmd.slice(0, 4));
  if (!Number.isFinite(y)) return null;
  const seen = new Set<string>();
  const starts = [y, y + 1, y + 2]
    .flatMap((yy) => [
      { ymd: `${yy}-${sales.coolingStart}`, kind: "climatisation" as const },
      { ymd: `${yy}-${sales.heatingStart}`, kind: "chauffage" as const },
    ])
    .sort((a, b) => a.ymd.localeCompare(b.ymd))
    .filter((s) => (seen.has(s.ymd) ? false : (seen.add(s.ymd), true)));
  const i = starts.findIndex((s) => s.ymd > afterYmd);
  if (i < 0 || i + 1 >= starts.length) return null;
  return { kind: starts[i].kind, start: starts[i].ymd, end: starts[i + 1].ymd };
}

/** Saison de relance d'un client perdu, si elle est en cours aujourd'hui. */
export function relaunchSeason(stage: StageInfo, now: Date, sales: SalesSettings): Season | null {
  if (stage.stage !== "perdue" || !stage.lost) return null;
  const s = nextSeason(localYmd(stage.lost.at), sales);
  const today = localYmd(now);
  return s && today >= s.start && today < s.end ? s : null;
}

/* ---------------- Règles ---------------- */

export function radarTasks(b: ClientBundle, stage: StageInfo, settings: CrmSettings, now: Date, ctx?: RadarContext): Task[] {
  const sales = ctx?.sales ?? DEFAULT_SALES_SETTINGS;
  const out: Task[] = [];
  const who = b.firstName || "ce client";
  const today = localYmd(now);
  const clientHref = `/gestion/clients/${b.id}`;

  if (stage.stage !== "perdue") {
    // Client chaud : il rouvre sa soumission, c'est le moment d'appeler.
    for (const q of b.quotes) {
      const v = latestSent(q);
      if (!v?.views.lastAt || effectiveStatus(v, today) !== "ouverte") continue;
      if (v.views.count < sales.hotViews || now.getTime() - Date.parse(v.views.lastAt) > sales.hotWindowDays * DAY) continue;
      out.push(
        task("client-chaud", `${q.id}:v${v.v}:${localYmd(v.views.lastAt)}`, b.id, "ouvertes", {
          title: `Client chaud : appeler ${who}`,
          detail: `Soumission ${q.number} ouverte ${v.views.count} fois, sans réponse`,
          dueAt: v.views.lastAt,
          href: clientHref,
          quoteId: q.id,
          priority: HOT_PRIORITY,
        }),
      );
    }

    // ThermoMatch sans soumission : la machine est déjà choisie, la soumission se prépare en un clic.
    const tm = b.journal.filter(isThermoMatchLead).sort((x, y) => y.at.localeCompare(x.at))[0];
    if (tm && !b.quotes.some((q) => q.createdAt >= tm.at)) {
      out.push(
        task("thermomatch-sans-soumission", tm.id, b.id, "suivis", {
          title: `Préparer la soumission de ${who}`,
          detail: tm.kind === "thermomatch" ? "A reçu ses choix ThermoMatch · aucune soumission" : "Demande de soumission avec le modèle choisi dans ThermoMatch",
          dueAt: addBusinessHours(new Date(tm.at), settings.callbackHours).toISOString(),
          href: thermoMatchQuoteHref(b.id, tm.id),
        }),
      );
    }
  }

  // Client perdu : la saison suivante a commencé.
  const season = relaunchSeason(stage, now, sales);
  if (season && stage.lost) {
    const consent = activeConsent(ctx?.consents ?? {}, [b.id, ...b.aliases]);
    const lostOn = dayShort(localYmd(stage.lost.at), now);
    out.push(
      task("relance-saison", `${b.id}:${season.start}`, b.id, "suivis", {
        title: consent ? `Relance de saison : ${who}` : `Relancer ${who} à la main (saison de ${SEASON_LABELS[season.kind]})`,
        detail: consent
          ? `Perdu le ${lostOn} · consentement noté le ${dayShort(localYmd(consent.at), now)} : relance automatique permise`
          : `Perdu le ${lostOn} · aucun consentement enregistré : aucun envoi automatique`,
        dueAt: zonedToUtc(season.start, 9).toISOString(),
        href: clientHref,
      }),
    );
  }
  return out;
}

/* ---------------- Alertes au propriétaire (envoyées par le volet B) ---------------- */

export interface RadarAlert {
  /** Stable : le moteur d'envoi ne l'envoie qu'une fois. */
  key: string;
  kind: "demande-sans-reponse";
  clientId: string;
  /** Prénom et ville seulement (jamais de numéro ni de courriel). */
  firstName: string;
  city: string;
  demand: string;
  receivedAt: string;
  /** Échéance du rappel dépassée (ou fin du report choisi par le propriétaire). */
  deadline: string;
  href: string;
  text: string;
}

const CALLBACK_RULES = new Set(["rappel-nouveau", "rappel-appel"]);

/** Demandes sans réponse au-delà du délai de rappel : alertes dues maintenant, les plus anciennes d'abord. */
export function radarAlertsFrom(index: CrmIndex, now: Date): RadarAlert[] {
  const out: RadarAlert[] = [];
  for (const t of index.tasks) {
    if (!t.clientId || !CALLBACK_RULES.has(t.rule)) continue;
    const c = index.byId.get(t.clientId);
    if (!c) continue;
    const entryId = t.key.split(":")[2];
    const e = c.b.journal.find((x) => x.id === entryId);
    const receivedAt = e?.at ?? t.dueAt;
    // Rappel d'une demande : l'échéance est déjà « reçue + délai ». Appel manqué : tâche immédiate, même délai pour l'alerte.
    const base = t.rule === "rappel-nouveau" && !t.snoozed ? t.dueAt : addBusinessHours(new Date(receivedAt), index.settings.callbackHours).toISOString();
    const deadline = t.snoozed && t.dueAt > base ? t.dueAt : base;
    if (Date.parse(deadline) > now.getTime()) continue;
    const demand = KIND_LABELS[e?.kind ?? ""] ?? "Demande";
    const firstName = c.b.firstName;
    const city = c.b.city;
    out.push({
      key: `radar:sans-reponse:${t.key}`,
      kind: "demande-sans-reponse",
      clientId: c.b.id,
      firstName,
      city,
      demand,
      receivedAt,
      deadline,
      href: `/gestion/clients/${c.b.id}`,
      text: `Demande sans réponse : ${firstName || "un client"}${city ? ` (${city})` : ""}, ${demand.toLowerCase()} reçue le ${stamp(receivedAt, now)}. Délai de rappel dépassé.`,
    });
  }
  return out.sort((a, b) => a.deadline.localeCompare(b.deadline));
}

/* ---------------- Relances de saison permises (envoyées par le volet B) ---------------- */

export interface SeasonalRelaunch {
  key: string;
  clientId: string;
  firstName: string;
  season: Season;
  consent: { at: string; note: string };
  /** Canaux possibles (le moteur d'envoi revérifie les désabonnements au moment d'envoyer). */
  channels: { sms: boolean; email: boolean };
  href: string;
}

/** Clients perdus dont la saison de relance est en cours ET qui ont un consentement enregistré. Sans consentement : rien ici (tâche manuelle seulement). */
export function seasonalRelaunchesFrom(index: CrmIndex, now: Date): SeasonalRelaunch[] {
  const ctx = radarContext(index.src.crm);
  const out: SeasonalRelaunch[] = [];
  for (const c of index.clients) {
    const season = relaunchSeason(c.stage, now, ctx.sales);
    if (!season) continue;
    const consent = activeConsent(ctx.consents, [c.b.id, ...c.b.aliases]);
    if (!consent) continue;
    const key = `auto:relance-saison:${c.b.id}:${season.start}`;
    if (index.src.crm.taskState[key]?.doneAt) continue;
    out.push({
      key,
      clientId: c.b.id,
      firstName: c.b.firstName,
      season,
      consent: { at: consent.at, note: consent.note },
      channels: { sms: c.b.phones.length > 0 && !c.b.textos.some((t) => t.optedOut), email: c.b.emails.length > 0 },
      href: `/gestion/clients/${c.b.id}`,
    });
  }
  return out;
}
