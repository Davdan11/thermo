/* ==================================================================
   Modèle du CRM (pur, sans disque) : sources → clients réunis →
   étape, tâches, valeur. service.ts lit les magasins et appelle ici ;
   les tests aussi.
   ================================================================== */

import { effectiveStatus, latestSent } from "@/lib/soumissions/quote";
import { resolvePostalOffline } from "../geo";
import { groupTouchpoints, resolveAlias } from "./group";
import { genericKeys } from "./identity";
import { quoteAmount, versionTotals } from "./money";
import { jobTouchpoints, journalTouchpoints, manualTouchpoints, quoteTouchpoints, relanceTouchpoints } from "./sources";
import { inferStage, type StageInfo } from "./stage";
import { applyTaskState, autoTasks, byUrgency, manualTask, type Task } from "./tasks";
import { partnerAutoTasks } from "../partenaires/crm-tasks";
import { reseauAutoTasks } from "../reseau/tasks"; // Chantier R
import { textoTouchpoints } from "./textos-adapter";
import { radarContext } from "../radar/radar";
import { localYmd } from "./time";
import { DEFAULT_CRM_SETTINGS, type ClientBundle, type CrmClientRecord, type CrmSettings, type SourceData, type Touchpoint } from "./types";

const uniq = <T,>(xs: T[]) => [...new Set(xs)];
const maxIso = (xs: Array<string | null | undefined>) => xs.filter((x): x is string => Boolean(x)).sort().pop() ?? "";

/** Plusieurs enregistrements pour un même client (fusion) : notes, étapes et étiquettes réunies. */
export function mergeRecords(recs: CrmClientRecord[], id: string): CrmClientRecord | null {
  if (!recs.length) return null;
  const sorted = [...recs].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  const base = sorted.find((r) => r.id === id) ?? sorted[0];
  if (sorted.length === 1) return { ...base, id };
  const latest = <T extends { at: string }>(xs: Array<T | undefined>) => xs.filter((x): x is T => Boolean(x)).sort((a, b) => a.at.localeCompare(b.at)).pop();
  return {
    ...base,
    id,
    keys: uniq(sorted.flatMap((r) => r.keys)),
    stageOverride: latest(sorted.map((r) => r.stageOverride)),
    lost: latest(sorted.map((r) => r.lost)),
    stageLog: sorted.flatMap((r) => r.stageLog).sort((a, b) => a.at.localeCompare(b.at)),
    notes: sorted.flatMap((r) => r.notes).sort((a, b) => a.at.localeCompare(b.at)),
    tags: uniq(sorted.flatMap((r) => r.tags)),
    valueCents: base.valueCents ?? sorted.find((r) => r.valueCents !== undefined)?.valueCents,
    createdAt: sorted[0].createdAt,
    updatedAt: maxIso(sorted.map((r) => r.updatedAt)),
  };
}

const WEIGHT: Record<Touchpoint["source"], number> = { soumission: 3, job: 3, manuel: 3, journal: 1, relance: 0, texto: 0 };
const bestOf = (tps: Touchpoint[], pick: (t: Touchpoint) => string | undefined) =>
  [...tps].filter((t) => pick(t)).sort((a, b) => WEIGHT[b.source] - WEIGHT[a.source] || b.at.localeCompare(a.at))[0];

export function buildBundles(src: SourceData): ClientBundle[] {
  const generic = genericKeys(src.generic);
  const touchpoints = [
    ...journalTouchpoints(src.journal, src.outcomes),
    ...quoteTouchpoints(src.quotes),
    ...jobTouchpoints(src.jobs),
    ...relanceTouchpoints(src.relances),
    ...textoTouchpoints(src.textos),
    ...manualTouchpoints(src.crm.manualContacts),
  ];
  const journal = new Map(src.journal.map((e) => [e.id, e]));
  const quotes = new Map(src.quotes.map((q) => [q.id, q]));
  const jobs = new Map(src.jobs.map((j) => [j.id, j]));
  const relances = new Map(src.relances.map((m) => [m.id, m]));
  const textos = new Map(src.textos.map((c) => [c.id, c]));
  const manual = new Map(src.crm.manualContacts.map((m) => [m.id, m]));

  return groupTouchpoints(touchpoints, src.crm, generic).map((g) => {
    const of = <T,>(source: Touchpoint["source"], map: Map<string, T>) => g.touchpoints.filter((t) => t.source === source).map((t) => map.get(t.ref)).filter((x): x is T => Boolean(x));
    const named = bestOf(g.touchpoints, (t) => t.firstName || t.lastName);
    const withCity = bestOf(g.touchpoints, (t) => t.city);
    const withPostal = bestOf(g.touchpoints, (t) => t.postalCode);
    const withAddress = bestOf(g.touchpoints, (t) => t.address);
    const postal = withPostal?.postalCode ?? "";
    const city = withCity?.city ?? (postal ? resolvePostalOffline(postal)?.city.replace(/\s*\(.*\)$/, "") : undefined) ?? "";
    const record = mergeRecords(g.records, g.id);
    const b: ClientBundle = {
      id: g.id,
      aliases: g.aliases,
      keys: g.keys,
      rawKeys: g.rawKeys,
      phones: g.rawKeys.filter((k) => k.startsWith("p:")).map((k) => k.slice(2)),
      emails: g.rawKeys.filter((k) => k.startsWith("e:")).map((k) => k.slice(2)),
      firstName: named?.firstName ?? "",
      lastName: named?.lastName ?? "",
      city,
      postalCode: postal,
      address: withAddress?.address ?? "",
      touchpoints: g.touchpoints,
      journal: of("journal", journal),
      quotes: of("soumission", quotes),
      jobs: of("job", jobs),
      relances: of("relance", relances),
      textos: of("texto", textos),
      manual: of("manuel", manual),
      record,
      firstAt: g.firstAt,
      lastAt: "",
      firstChannel: g.touchpoints.find((t) => !t.attachOnly && t.channel)?.channel ?? null,
      dealIds: uniq(g.touchpoints.map((t) => t.dealId).filter((d): d is number => typeof d === "number")),
      split: g.split,
    };
    b.lastAt = maxIso([
      ...g.touchpoints.map((t) => t.at),
      ...b.quotes.flatMap((q) => q.versions.flatMap((v) => [v.updatedAt, v.views.lastAt, v.acceptance?.at, v.refusal?.at, ...v.questions.map((x) => x.at), ...v.sends.map((s) => s.at)])),
      ...b.jobs.map((j) => j.updatedAt),
      ...b.textos.map((c) => c.lastAt),
      ...(record?.notes ?? []).map((n) => n.at),
    ]);
    return b;
  });
}

/** Nom affiché : prénom et nom, sinon « Sans nom ». */
export function displayName(b: Pick<ClientBundle, "firstName" | "lastName">): string {
  return `${b.firstName} ${b.lastName}`.trim() || "Sans nom";
}

/** Valeur d'un client : montant accepté, sinon la plus grosse soumission en attente, sinon l'estimation notée. */
export function valueOf(b: ClientBundle, today: string): number | null {
  const accepted = b.quotes.flatMap((q) => q.versions.filter((v) => v.acceptance)).sort((x, y) => y.acceptance!.at.localeCompare(x.acceptance!.at))[0];
  if (accepted) return accepted.acceptance!.totalCents;
  const open = b.quotes
    .map(latestSent)
    .filter((v): v is NonNullable<typeof v> => Boolean(v))
    .filter((v) => ["envoyee", "ouverte"].includes(effectiveStatus(v, today)))
    .map((v) => quoteAmount(v, today));
  if (open.length) return Math.max(...open);
  return b.record?.valueCents ?? null;
}

/** Aide LogisVert attendue par le client (information seulement), 0 si aucune. */
export function logisvertOf(b: ClientBundle, today: string): number {
  const v = b.quotes.map(latestSent).find((x) => x && (x.acceptance || ["envoyee", "ouverte"].includes(effectiveStatus(x, today))));
  if (!v) return 0;
  return v.acceptance ? v.acceptance.snapshot?.totals?.logisvertCents ?? 0 : versionTotals(v, today).logisvertCents;
}

export interface ClientComputed {
  b: ClientBundle;
  stage: StageInfo;
  tasks: Task[];
  valueCents: number | null;
}

export interface CrmIndex {
  clients: ClientComputed[];
  /** Par identifiant, anciens identifiants compris. */
  byId: Map<string, ClientComputed>;
  byQuote: Map<string, string>;
  byJob: Map<string, string>;
  byConversation: Map<string, string>;
  /** Toutes les tâches ouvertes, par urgence (générales comprises). */
  tasks: Task[];
  settings: CrmSettings;
  now: Date;
  src: SourceData;
}

export function computeIndex(bundles: ClientBundle[], src: SourceData, now: Date): CrmIndex {
  const settings = { ...DEFAULT_CRM_SETTINGS, ...src.crm.settings };
  const today = localYmd(now);
  const byId = new Map<string, ClientComputed>();
  const radar = radarContext(src.crm); // Volet C : réglages du radar et consentements de relance de saison.
  const clients: ClientComputed[] = bundles.map((b) => {
    const stage = inferStage(b, now);
    const c: ClientComputed = { b, stage, tasks: applyTaskState(autoTasks(b, stage, settings, now, radar), src.crm.taskState), valueCents: valueOf(b, today) };
    byId.set(b.id, c);
    for (const a of b.aliases) if (!byId.has(a)) byId.set(a, c);
    return c;
  });
  const general: Task[] = [];
  for (const t of src.crm.tasks) {
    if (t.doneAt) continue;
    const c = t.clientId ? byId.get(resolveAlias(src.crm.aliases, t.clientId)) : undefined;
    const who = c ? [c.b.firstName || "Sans nom", c.b.city].filter(Boolean).join(" · ") : undefined;
    const mt = manualTask(t, c?.b.id ?? null, who);
    if (c) c.tasks.push(mt);
    else general.push(mt);
  }
  for (const c of clients) c.tasks.sort(byUrgency);
  const byQuote = new Map<string, string>();
  const byJob = new Map<string, string>();
  const byConversation = new Map<string, string>();
  for (const c of clients) {
    for (const q of c.b.quotes) byQuote.set(q.id, c.b.id);
    for (const j of c.b.jobs) byJob.set(j.id, c.b.id);
    for (const t of c.b.textos) byConversation.set(t.id, c.b.id);
  }
  // Volet A : tâches des partenaires (entente, conformité) et des billets de service, module séparé.
  for (const t of applyTaskState(partnerAutoTasks(src.partenaires, now), src.crm.taskState)) {
    const c = t.jobId ? byId.get(byJob.get(t.jobId) ?? "") : undefined;
    if (c) {
      c.tasks.push({ ...t, clientId: c.b.id });
      c.tasks.sort(byUrgency);
    } else general.push(t);
  }
  // Chantier R : licences RBQ (fichier ouvert), zones à recruter, stock sous le seuil : tâches générales.
  for (const t of applyTaskState(reseauAutoTasks(src.reseau, now), src.crm.taskState)) general.push(t);
  return { clients, byId, byQuote, byJob, byConversation, tasks: [...clients.flatMap((c) => c.tasks), ...general].sort(byUrgency), settings, now, src };
}

export const buildIndex = (src: SourceData, now: Date): CrmIndex => computeIndex(buildBundles(src), src, now);
