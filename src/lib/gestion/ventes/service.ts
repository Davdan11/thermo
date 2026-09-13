/* ==================================================================
   Service du volet C : ThermoMatch → soumission, prévision du
   pipeline, tâches à étapes et modèles, réglages des ventes,
   consentement à la relance de saison.

   AUCUNE vérification d'accès ici : chaque page et chaque Server
   Action de /gestion passe d'abord par requireAdmin(). Seuls des
   objets d'affichage partent vers le navigateur (prénom, ville,
   libellés, montants ; jamais de numéro ni de courriel).
   ================================================================== */

import { randomBytes } from "node:crypto";
import { registry } from "@/lib/data/registry";
import { resolveMachine } from "@/lib/soumissions/catalog";
import type { MachineInfo } from "@/lib/soumissions/types";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import { decodeShareCode } from "@/lib/thermomatch/share-code";
import { brandLabel } from "../catalog";
import { COMPLEX_ID_RE, normalizeSalesSettings, STEP_ID_RE, TEMPLATE_ID_RE, type ComplexTask, type SalesSettings, type TaskTemplate, type TemplateStep } from "../crm/extensions";
import { resolveAlias } from "../crm/group";
import type { ClientComputed, CrmIndex } from "../crm/model";
import { freshIndex, loadCrmIndex, type CrmResult } from "../crm/service";
import { mutateCrm } from "../crm/store";
import { complexTaskDTO, dueOfYmd, instantiateTemplate, sortComplex, STARTER_TEMPLATES, type ComplexTaskDTO } from "../crm/taches-complexes";
import { dateLong } from "../crm/time";
import { CLIENT_ID_RE } from "../crm/types";
import { isThermoMatchLead, relaunchSeason, SEASON_LABELS, thermoMatchQuoteHref } from "../radar/radar";
import { buildForecast, observedRates, type Forecast, type ObservedRate } from "./prevision";
import { machineFromChoice, thermoMatchChoices, type ThermoMatchDeps } from "./thermomatch";

/** Identifiant d'une ligne du journal des demandes (UUID). */
export const JOURNAL_ID_RE = /^[A-Za-z0-9-]{6,64}$/;
const newId = (prefix: "x" | "e" | "p") => `${prefix}_${randomBytes(8).toString("base64url")}`;
const whoOf = (c: ClientComputed) => [c.b.firstName || "Sans nom", c.b.city].filter(Boolean).join(" · ");

/* ---------------- ThermoMatch → soumission ---------------- */

const thermoDeps: ThermoMatchDeps = {
  recompute: (code) => {
    const answers = decodeShareCode(code);
    if (!answers) return null;
    try {
      return recommendFromAnswers(answers)
        .results.slice(0, 3)
        .map((r) => ({ modelId: r.product.id, brand: r.product.brand, series: r.product.series ?? "", outdoorModel: r.product.outdoorModel ?? "", ahri: r.product.ahri ?? null }));
    } catch {
      return null;
    }
  },
  model: (id) => {
    const m = registry.modelById.get(id);
    return m ? { slug: m.slug, label: `${brandLabel(m.brandId)} ${m.name}`.trim() } : null;
  },
};

export interface ThermoMatchPanel {
  clientId: string;
  entries: Array<{
    id: string;
    when: string;
    source: string;
    quoteAfter: boolean;
    choices: Array<{ rank: number; label: string; href: string | null; note: string | null }>;
  }>;
}

const clientOfEntry = (index: CrmIndex, entryId: string) => index.clients.find((c) => c.b.touchpoints.some((t) => t.key === `j:${entryId}`)) ?? null;

/** Demandes ThermoMatch d'un client (les trois plus récentes) et leurs choix, chacun avec son lien « Créer la soumission ». */
export async function thermoMatchForClient(clientId: string): Promise<ThermoMatchPanel | null> {
  if (!CLIENT_ID_RE.test(clientId)) return null;
  const index = await loadCrmIndex();
  const c = index.byId.get(clientId);
  if (!c) return null;
  const entries = c.b.journal
    .filter(isThermoMatchLead)
    .sort((x, y) => y.at.localeCompare(x.at))
    .slice(0, 3)
    .map((e) => ({
      id: e.id,
      when: dateLong(e.at),
      source: e.kind === "thermomatch" ? "Choix ThermoMatch reçus par courriel" : "Demande de soumission avec le modèle choisi dans ThermoMatch",
      quoteAfter: c.b.quotes.some((q) => q.createdAt >= e.at),
      choices: thermoMatchChoices(e, thermoDeps).map((ch) => ({
        rank: ch.rank,
        label: ch.label,
        href: ch.slug ? thermoMatchQuoteHref(c.b.id, e.id, ch.rank) : null,
        note: ch.slug ? null : ch.changed ? "Recommandation changée depuis l’envoi" : "Modèle absent du catalogue",
      })),
    }));
  return entries.length ? { clientId: c.b.id, entries } : null;
}

export interface ThermoMatchPrefill {
  clientId: string | null;
  label: string;
  rank: number;
  machine: MachineInfo | null;
  notes: string[];
  others: Array<{ rank: number; label: string; href: string }>;
}

/** Machine choisie dans ThermoMatch pour la nouvelle soumission (?thermomatch=<demande>&choix=<1-3>). null : demande introuvable. */
export async function thermoMatchQuotePrefill(entryId: string, choiceRaw?: string): Promise<ThermoMatchPrefill | null> {
  if (!JOURNAL_ID_RE.test(entryId)) return null;
  const index = await loadCrmIndex();
  const e = index.src.journal.find((x) => x.id === entryId && isThermoMatchLead(x));
  if (!e) return null;
  const choices = thermoMatchChoices(e, thermoDeps);
  if (!choices.length) return null;
  const rank = Math.min(choices.length, Math.max(1, Number.parseInt(choiceRaw ?? "1", 10) || 1));
  const choice = choices[rank - 1];
  const pre = await machineFromChoice(choice, resolveMachine);
  const clientId = clientOfEntry(index, e.id)?.b.id ?? null;
  return {
    clientId,
    label: choice.label,
    rank,
    machine: pre.machine,
    notes: pre.notes,
    others: clientId ? choices.filter((x) => x.rank !== rank && x.slug).map((x) => ({ rank: x.rank, label: x.label, href: thermoMatchQuoteHref(clientId, e.id, x.rank) })) : [],
  };
}

/* ---------------- Prévision ---------------- */

export async function forecastView(): Promise<Forecast> {
  const index = await loadCrmIndex();
  return buildForecast(index.clients, index.src.crm.salesSettings);
}

/* ---------------- Réglages des ventes ---------------- */

export interface SalesSettingsView {
  settings: SalesSettings;
  observed: Record<string, ObservedRate>;
  templates: TaskTemplate[];
}

export async function salesSettingsView(): Promise<SalesSettingsView> {
  const index = await loadCrmIndex();
  return { settings: index.src.crm.salesSettings, observed: observedRates(index.clients), templates: index.src.crm.taskTemplates };
}

export async function saveSalesSettings(input: Omit<SalesSettings, "updatedAt" | "updatedBy">, by: string, now = new Date()): Promise<CrmResult> {
  await mutateCrm((d) => {
    d.salesSettings = normalizeSalesSettings({ ...input, updatedAt: now.toISOString(), updatedBy: by });
    return { result: undefined, changed: true };
  });
  return { ok: true };
}

/* ---------------- Modèles de tâches ---------------- */

export async function saveTemplate(input: { id: string | null; name: string; description: string; dueInDays: number | null; steps: TemplateStep[] }, by: string, now = new Date()): Promise<CrmResult> {
  const name = input.name.trim().slice(0, 80);
  if (!name) return { ok: false, error: "Donnez un nom au modèle." };
  const steps = input.steps.map((s) => ({ label: s.label.trim().slice(0, 200), offsetDays: s.offsetDays })).filter((s) => s.label).slice(0, 40);
  if (!steps.length) return { ok: false, error: "Ajoutez au moins une étape." };
  if (input.id && !TEMPLATE_ID_RE.test(input.id)) return { ok: false, error: "Modèle introuvable." };
  const at = now.toISOString();
  const ok = await mutateCrm((d) => {
    if (input.id) {
      const t = d.taskTemplates.find((x) => x.id === input.id);
      if (!t) return { result: false, changed: false };
      Object.assign(t, { name, description: input.description.trim().slice(0, 300), dueInDays: input.dueInDays, steps, updatedAt: at, updatedBy: by });
    } else {
      d.taskTemplates.push({ id: newId("p"), name, description: input.description.trim().slice(0, 300), dueInDays: input.dueInDays, steps, createdAt: at, updatedAt: at, updatedBy: by });
    }
    return { result: true, changed: true };
  });
  return ok ? { ok: true } : { ok: false, error: "Modèle introuvable." };
}

export async function deleteTemplate(id: string): Promise<CrmResult> {
  if (!TEMPLATE_ID_RE.test(id)) return { ok: false, error: "Modèle introuvable." };
  const ok = await mutateCrm((d) => {
    const before = d.taskTemplates.length;
    d.taskTemplates = d.taskTemplates.filter((t) => t.id !== id);
    return { result: d.taskTemplates.length < before, changed: d.taskTemplates.length < before };
  });
  return ok ? { ok: true } : { ok: false, error: "Modèle introuvable." };
}

/** Ajoute les modèles de départ absents (même nom). */
export async function addStarterTemplates(by: string, now = new Date()): Promise<CrmResult> {
  const at = now.toISOString();
  await mutateCrm((d) => {
    const names = new Set(d.taskTemplates.map((t) => t.name.toLowerCase()));
    let changed = false;
    for (const s of STARTER_TEMPLATES) {
      if (names.has(s.name.toLowerCase())) continue;
      d.taskTemplates.push({ id: newId("p"), ...s, steps: s.steps.map((x) => ({ ...x })), createdAt: at, updatedAt: at, updatedBy: by });
      changed = true;
    }
    return { result: undefined, changed };
  });
  return { ok: true };
}

/* ---------------- Tâches à étapes ---------------- */

export interface ComplexTasksView {
  tasks: ComplexTaskDTO[];
  /** Terminées depuis moins de 30 jours, non montrées. */
  hiddenDone: number;
  templates: Array<{ id: string; name: string; steps: number }>;
}

export async function complexTasksView(filter: { clientId?: string; jobId?: string }): Promise<ComplexTasksView> {
  const index = await loadCrmIndex();
  const crm = index.src.crm;
  const now = index.now;
  const canonical = (id: string | null) => (id ? (index.byId.get(resolveAlias(crm.aliases, id))?.b.id ?? null) : null);
  const target = filter.clientId ? canonical(filter.clientId) : null;
  const recent = new Date(now.getTime() - 30 * 86_400_000).toISOString();
  const scoped = crm.complexTasks.filter((t) => (filter.clientId ? target !== null && canonical(t.clientId) === target : true) && (filter.jobId ? t.jobId === filter.jobId : true));
  // Page À faire (sans filtre) : tâches ouvertes seulement. Fiche client ou job : aussi les terminées depuis 30 jours.
  const scopedView = filter.clientId || filter.jobId;
  const shown = scoped.filter((t) => !t.doneAt || (scopedView && t.doneAt >= recent)).sort(sortComplex);
  const jobs = new Map(index.src.jobs.map((j) => [j.id, j.number]));
  const templates = new Map(crm.taskTemplates.map((t) => [t.id, t.name]));
  return {
    tasks: shown.map((t) =>
      complexTaskDTO(t, {
        now,
        client: (id) => {
          const c = index.byId.get(resolveAlias(crm.aliases, id));
          return c ? { id: c.b.id, who: whoOf(c) } : null;
        },
        job: (id) => (jobs.has(id) ? { id, number: jobs.get(id)! } : null),
        templateName: (id) => templates.get(id) ?? null,
      }),
    ),
    hiddenDone: scoped.filter((t) => t.doneAt && !shown.includes(t)).length,
    templates: crm.taskTemplates.map((t) => ({ id: t.id, name: t.name, steps: t.steps.length })),
  };
}

export async function createComplexTask(
  input: { title: string; clientId: string | null; jobId: string | null; templateId: string | null; dueYmd: string | null; steps: string[]; notes: string },
  by: string,
  now = new Date(),
): Promise<CrmResult> {
  const index = await freshIndex(now);
  let clientId: string | null = null;
  if (input.clientId) {
    const c = index.byId.get(input.clientId);
    if (!c) return { ok: false, error: "Client introuvable." };
    clientId = c.b.id;
  }
  if (input.jobId) {
    if (!index.src.jobs.some((j) => j.id === input.jobId)) return { ok: false, error: "Job introuvable." };
    clientId ??= index.byJob.get(input.jobId) ?? null;
  }
  const at = now.toISOString();
  const r = await mutateCrm<CrmResult>((d) => {
    const tpl = input.templateId ? d.taskTemplates.find((t) => t.id === input.templateId) : undefined;
    if (input.templateId && !tpl) return { result: { ok: false, error: "Modèle introuvable." }, changed: false };
    const base = tpl ? instantiateTemplate(tpl, now, () => newId("e")) : { title: "", dueAt: null, steps: [] };
    const title = (input.title.trim() || base.title).slice(0, 160);
    if (!title) return { result: { ok: false, error: "Donnez un titre à la tâche, ou choisissez un modèle." }, changed: false };
    const extra = input.steps.map((s) => s.trim().slice(0, 200)).filter(Boolean).map((label) => ({ id: newId("e"), label, dueAt: null }));
    const task: ComplexTask = {
      id: newId("x"),
      title,
      clientId,
      jobId: input.jobId,
      templateId: tpl?.id ?? null,
      dueAt: input.dueYmd ? dueOfYmd(input.dueYmd) : base.dueAt,
      notes: input.notes.trim().slice(0, 2000),
      steps: [...base.steps, ...extra].slice(0, 60),
      createdAt: at,
      createdBy: by,
      updatedAt: at,
    };
    d.complexTasks.push(task);
    return { result: { ok: true, id: task.id }, changed: true };
  });
  return r;
}

async function mutateTask(id: string, fn: (t: ComplexTask) => boolean | string): Promise<CrmResult> {
  if (!COMPLEX_ID_RE.test(id)) return { ok: false, error: "Tâche introuvable." };
  return mutateCrm<CrmResult>((d) => {
    const t = d.complexTasks.find((x) => x.id === id);
    if (!t) return { result: { ok: false, error: "Tâche introuvable." }, changed: false };
    const out = fn(t);
    if (typeof out === "string") return { result: { ok: false, error: out }, changed: false };
    return { result: { ok: true }, changed: out };
  });
}

export async function toggleStep(taskId: string, stepId: string, done: boolean, by: string, now = new Date()): Promise<CrmResult> {
  if (!STEP_ID_RE.test(stepId)) return { ok: false, error: "Étape introuvable." };
  return mutateTask(taskId, (t) => {
    const s = t.steps.find((x) => x.id === stepId);
    if (!s) return "Étape introuvable.";
    if (Boolean(s.doneAt) === done) return false;
    if (done) Object.assign(s, { doneAt: now.toISOString(), doneBy: by });
    else {
      delete s.doneAt;
      delete s.doneBy;
    }
    t.updatedAt = now.toISOString();
    return true;
  });
}

export async function addStep(taskId: string, label: string, now = new Date()): Promise<CrmResult> {
  const clean = label.trim().slice(0, 200);
  if (!clean) return { ok: false, error: "L’étape est vide." };
  return mutateTask(taskId, (t) => {
    if (t.steps.length >= 60) return "60 étapes au plus.";
    t.steps.push({ id: newId("e"), label: clean, dueAt: null });
    t.updatedAt = now.toISOString();
    return true;
  });
}

export async function setComplexDone(taskId: string, done: boolean, by: string, now = new Date()): Promise<CrmResult> {
  return mutateTask(taskId, (t) => {
    if (Boolean(t.doneAt) === done) return false;
    if (done) Object.assign(t, { doneAt: now.toISOString(), doneBy: by });
    else {
      delete t.doneAt;
      delete t.doneBy;
    }
    t.updatedAt = now.toISOString();
    return true;
  });
}

export async function deleteComplexTask(taskId: string): Promise<CrmResult> {
  if (!COMPLEX_ID_RE.test(taskId)) return { ok: false, error: "Tâche introuvable." };
  const ok = await mutateCrm((d) => {
    const before = d.complexTasks.length;
    d.complexTasks = d.complexTasks.filter((t) => t.id !== taskId);
    return { result: d.complexTasks.length < before, changed: d.complexTasks.length < before };
  });
  return ok ? { ok: true } : { ok: false, error: "Tâche introuvable." };
}

/* ---------------- Consentement à la relance de saison ---------------- */

export interface SeasonConsentView {
  clientId: string;
  firstName: string;
  active: { when: string; note: string } | null;
  withdrawn: string | null;
  lost: boolean;
  /** Saison de relance en cours (client perdu). */
  season: string | null;
}

export async function seasonConsentView(clientId: string): Promise<SeasonConsentView | null> {
  if (!CLIENT_ID_RE.test(clientId)) return null;
  const index = await loadCrmIndex();
  const c = index.byId.get(clientId);
  if (!c) return null;
  const consents = index.src.crm.seasonConsents;
  const rec = [c.b.id, ...c.b.aliases].map((id) => consents[id]).find(Boolean) ?? null;
  const season = relaunchSeason(c.stage, index.now, index.src.crm.salesSettings);
  return {
    clientId: c.b.id,
    firstName: c.b.firstName,
    active: rec && !rec.withdrawnAt ? { when: dateLong(rec.at), note: rec.note } : null,
    withdrawn: rec?.withdrawnAt ? dateLong(rec.withdrawnAt) : null,
    lost: c.stage.stage === "perdue",
    season: season ? `saison de ${SEASON_LABELS[season.kind]} (depuis le ${dateLong(`${season.start}T16:00:00Z`)})` : null,
  };
}

export async function setSeasonConsent(clientId: string, on: boolean, note: string, by: string, now = new Date()): Promise<CrmResult> {
  if (!CLIENT_ID_RE.test(clientId)) return { ok: false, error: "Client introuvable." };
  const c = (await freshIndex(now)).byId.get(clientId);
  if (!c) return { ok: false, error: "Client introuvable." };
  const at = now.toISOString();
  const clean = note.trim().slice(0, 300);
  if (on && !clean) return { ok: false, error: "Notez comment le client a donné son accord (ex. : « au téléphone, le 12 septembre »)." };
  await mutateCrm((d) => {
    for (const a of c.b.aliases) delete d.seasonConsents[a];
    if (on) d.seasonConsents[c.b.id] = { at, by, note: clean };
    else if (d.seasonConsents[c.b.id]) d.seasonConsents[c.b.id] = { ...d.seasonConsents[c.b.id], withdrawnAt: at, withdrawnBy: by };
    return { result: undefined, changed: true };
  });
  return { ok: true };
}
