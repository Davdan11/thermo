/* ==================================================================
   Service du CRM : lecture des magasins (mémorisée tant que les
   fichiers ne changent pas), objets d'affichage (DTO) pour les pages,
   écritures dans crm.json.

   AUCUNE vérification d'accès ici : chaque page et chaque Server
   Action de /gestion passe d'abord par requireAdmin()
   (src/lib/gestion/auth/dal.ts).

   Confidentialité : seuls des DTO d'affichage partent vers le
   navigateur. Courriels et numéros n'apparaissent que dans la fiche du
   client (clientPage) ; ailleurs, prénom, ville, montants, étapes.

   Pas de « use cache » : les données sont personnelles et ne doivent
   jamais être partagées d'une requête à l'autre par le cache de Next.
   cache() de React ne vit que le temps d'un rendu ; la mémoïsation en
   mémoire ne garde que les données lues, recalculées dès qu'un fichier
   source change (date de modification et taille).
   ================================================================== */

import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";
import { CHANNEL_LABELS } from "@/lib/attribution/core";
import { journalDir } from "@/lib/crm/lead-journal";
import { readRelances, relancesFile } from "@/lib/relances/store";
import type { JobInitial } from "@/components/gestion/JobForm";
import { SYSTEM_TYPES } from "@/lib/data/types/enums";
import { isDay } from "@/lib/soumissions/dates";
import { effectiveStatus, latestSent, QUOTE_ID_RE } from "@/lib/soumissions/quote";
import { resolvePostalOffline } from "../geo";
import { readSettings, readSoumissions, settingsFile, soumissionsFile } from "@/lib/soumissions/store";
import { STATUS_LABELS as QUOTE_STATUS_LABELS, type EffectiveStatus } from "@/lib/soumissions/types";
import { readTextos, textosFile } from "@/lib/textos/store";
import { adminEmails } from "../auth/admins";
import { createLimiter } from "../rate-limit";
import { aggregateStats, readJournalEntries, readJournalOutcomes, toRecords, type PeriodId, type StatsView } from "../statistiques";
import { gestionFile, readGestion } from "../store";
import { JOB_STATUS_LABELS, type JobStatus } from "../types";
import { buildHome, taskDTO, type HomeView, type TaskDTO } from "./dashboard";
import { keySelector, splitId, touchSelector } from "./group";
import { formatPhone, last4 } from "./identity";
import { buildBundles, computeIndex, displayName, logisvertOf, type ClientComputed, type CrmIndex } from "./model";
import { quoteAmount } from "./money";
import { KIND_LABELS } from "./sources";
import { crmFile, mutateCrm, newCrmId, normalizeSettings, readCrm } from "./store";
import { bucketTasks, dueToday } from "./tasks";
// Volet A : tâches des partenaires et des billets de service.
import { readPartnerTaskInput } from "../partenaires/crm-tasks";
import { partenairesFile } from "../partenaires/store";
import { savFile } from "../sav/store";
import { missingTextoRecords } from "./textos-adapter";
import { buildTimeline, type TimelineItem } from "./timeline";
import { ago, dateLong, daysBetweenYmd, localYmd, stamp } from "./time";
import { AUTO_TASK_RE, CLIENT_ID_RE, PIPELINE_STAGES, STAGE_LABELS, STAGES, TASK_ID_RE, type ClientBundle, type CrmClientRecord, type CrmData, type CrmSettings, type SourceData, type Stage } from "./types";

const demoAllowed = () => process.env.NODE_ENV !== "production";
const uniq = <T,>(xs: T[]) => [...new Set(xs)];

/* ---------------- Lecture et mémoïsation ---------------- */

async function stamp1(file: string): Promise<string> {
  try {
    const s = await fs.stat(file);
    return `${s.mtimeMs}:${s.size}`;
  } catch {
    return "-";
  }
}

async function signature(): Promise<string> {
  const dir = journalDir();
  let files: string[] = [];
  try {
    files = (await fs.readdir(dir)).filter((f) => f.endsWith(".jsonl")).sort();
  } catch {
    /* dossier absent */
  }
  // Volet A : partenaires.json et sav.json ajoutés (leurs tâches automatiques).
  const parts = await Promise.all([...files.map((f) => stamp1(path.join(dir, f))), stamp1(soumissionsFile()), stamp1(gestionFile()), stamp1(relancesFile()), stamp1(textosFile()), stamp1(crmFile()), stamp1(settingsFile()), stamp1(partenairesFile()), stamp1(savFile())]);
  return [dir, soumissionsFile(), process.env.NODE_ENV, ...files, ...parts].join("|");
}

/** Lit tous les magasins. Hors production seulement : fichiers et enregistrements de démonstration. */
export async function loadSources(): Promise<SourceData> {
  const demo = demoAllowed();
  const [journal, outcomes, soum, gestion, relances, textos, crm, settings, partenaires] = await Promise.all([
    readJournalEntries(journalDir(), { includeDemo: demo }),
    readJournalOutcomes(journalDir(), { includeDemo: demo }),
    readSoumissions(),
    readGestion(),
    readRelances().catch(() => ({ version: 1 as const, messages: [], suppressed: [] })),
    readTextos(),
    readCrm(),
    readSettings(),
    readPartnerTaskInput().catch(() => undefined), // volet A
  ]);
  const jobs = demo || !gestion.seed ? gestion.jobs : [];
  return {
    journal,
    outcomes,
    quotes: soum.quotes.filter((q) => demo || !q.seed),
    jobs,
    installers: Object.fromEntries((demo || !gestion.seed ? gestion.installers : []).map((i) => [i.id, i.company])),
    relances: relances.messages,
    textos: demo || !textos.seed ? Object.values(textos.conversations) : [],
    crm: demo || !crm.seed ? crm : { ...crm, clients: {}, tasks: [], manualContacts: [], taskState: {}, splits: [], merges: [], aliases: {} },
    generic: [settings.company.phone, settings.company.email, process.env.TWILIO_PHONE_NUMBER, process.env.TWILIO_FORWARD_VENTES, process.env.TWILIO_FORWARD_SAV, process.env.NOTIFICATION_EMAIL, ...adminEmails()].filter((x): x is string => Boolean(x)),
    ...(partenaires && (demo || !gestion.seed) ? { partenaires } : {}), // volet A
  };
}

let memo: { sig: string; src: SourceData; bundles: ClientBundle[] } | null = null;

async function bundlesNow(): Promise<{ src: SourceData; bundles: ClientBundle[] }> {
  const sig = await signature();
  if (memo && memo.sig === sig) return memo;
  const src = await loadSources();
  memo = { sig, src, bundles: buildBundles(src) };
  return memo;
}

/** Index sans cache de rendu (après une écriture, dans une Server Action). */
export async function freshIndex(now = new Date()): Promise<CrmIndex> {
  const { src, bundles } = await bundlesNow();
  return computeIndex(bundles, src, now);
}

/** Index du CRM, calculé une fois par rendu. */
export const loadCrmIndex = cache(async (): Promise<CrmIndex> => freshIndex(new Date()));

export function resetCrmMemo(): void {
  memo = null;
}

/* ---------------- Recherche ---------------- */

/** Recherche globale : 30 requêtes par minute et par session. */
export const searchLimiter = createLimiter({ limit: 30, windowMs: 60_000 });

const fold = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export function matchesClient(c: ClientComputed, q: string): boolean {
  const s = fold(q.trim());
  if (!s) return true;
  const digits = s.replace(/\D/g, "");
  if (digits.length >= 3 && digits.length === s.replace(/[\s().+-]/g, "").length && c.b.phones.some((p) => p.includes(digits))) return true;
  if (s.includes("@") ? c.b.emails.some((e) => e.includes(s)) : c.b.emails.some((e) => e.split("@")[0].includes(s))) return true;
  if (fold(`${c.b.firstName} ${c.b.lastName}`).includes(s) || fold(`${c.b.lastName} ${c.b.firstName}`).includes(s)) return true;
  if (c.b.city && fold(c.b.city).startsWith(s)) return true;
  return c.b.quotes.some((q) => q.number.toLowerCase().includes(s));
}

export interface SearchResult {
  id: string;
  name: string;
  city: string;
  stage: Stage;
  stageLabel: string;
  last4: string;
}

export async function searchClients(q: string): Promise<SearchResult[]> {
  const s = q.trim().slice(0, 80);
  if (s.length < 2) return [];
  const index = await loadCrmIndex();
  return index.clients
    .filter((c) => matchesClient(c, s))
    .sort((a, b) => b.b.lastAt.localeCompare(a.b.lastAt))
    .slice(0, 8)
    .map((c) => ({ id: c.b.id, name: displayName(c.b), city: c.b.city, stage: c.stage.stage, stageLabel: STAGE_LABELS[c.stage.stage], last4: last4(c.b.phones[0]) }));
}

/* ---------------- Accueil et statistiques ---------------- */

/** Demandes (journal) + conversations textos sans ligne au journal : même calcul sur l'accueil et dans Statistiques. */
export async function loadDemandStats(period: PeriodId, now = new Date()): Promise<StatsView> {
  const { src } = await bundlesNow();
  return aggregateStats([...toRecords(src.journal), ...missingTextoRecords(src.textos, src.journal)], { period, now });
}

export async function homeView(period: PeriodId): Promise<HomeView> {
  const index = await loadCrmIndex();
  const stats = await loadDemandStats(period, index.now);
  return buildHome(index, stats, period, index.now);
}

/** Pastilles de la navigation : tâches dues aujourd'hui, conversations non lues. */
export async function navBadges(): Promise<{ tasks: number; overdue: number; textos: number }> {
  const index = await loadCrmIndex();
  const due = dueToday(index.tasks, index.now);
  return {
    tasks: due.length,
    overdue: bucketTasks(due, index.now).overdue.length,
    textos: index.src.textos.filter((c) => !c.archived && c.unread > 0).length,
  };
}

/* ---------------- Liste des clients ---------------- */

export interface ClientRow {
  id: string;
  name: string;
  initials: string;
  city: string;
  stage: Stage;
  stageLabel: string;
  channel: string | null;
  last: string;
  lastAt: string;
  valueCents: number | null;
  tasks: number;
  overdue: boolean;
  reactivated: boolean;
  sources: string[];
}

const initialsOf = (b: Pick<ClientBundle, "firstName" | "lastName">) => `${b.firstName.charAt(0)}${b.lastName.charAt(0)}`.toUpperCase() || "·";

function sourcesOf(b: ClientBundle): string[] {
  const s: string[] = [];
  if (b.journal.length) s.push(b.journal.length > 1 ? `${b.journal.length} demandes` : "1 demande");
  if (b.quotes.length) s.push(b.quotes.length > 1 ? `${b.quotes.length} soumissions` : "1 soumission");
  if (b.jobs.length) s.push(b.jobs.length > 1 ? `${b.jobs.length} jobs` : "1 job");
  if (b.textos.length) s.push("textos");
  if (!s.length && b.manual.length) s.push("saisi à la main");
  return s;
}

export function clientRow(c: ClientComputed, now: Date): ClientRow {
  return {
    id: c.b.id,
    name: displayName(c.b),
    initials: initialsOf(c.b),
    city: c.b.city,
    stage: c.stage.stage,
    stageLabel: STAGE_LABELS[c.stage.stage],
    channel: c.b.firstChannel ? CHANNEL_LABELS[c.b.firstChannel] : null,
    last: ago(c.b.lastAt || c.b.firstAt, now),
    lastAt: c.b.lastAt || c.b.firstAt,
    valueCents: c.valueCents,
    tasks: c.tasks.length,
    overdue: c.tasks.some((t) => Date.parse(t.dueAt) <= now.getTime()),
    reactivated: Boolean(c.stage.reactivatedAt),
    sources: sourcesOf(c.b),
  };
}

export async function clientsList(filter: { q?: string; etape?: string }): Promise<{ rows: ClientRow[]; counts: Record<string, number>; total: number }> {
  const index = await loadCrmIndex();
  const counts: Record<string, number> = Object.fromEntries(STAGES.map((s) => [s, 0]));
  for (const c of index.clients) counts[c.stage.stage]++;
  const rows = index.clients
    .filter((c) => (!filter.etape || c.stage.stage === filter.etape) && (!filter.q || matchesClient(c, filter.q)))
    .sort((a, b) => (b.b.lastAt || b.b.firstAt).localeCompare(a.b.lastAt || a.b.firstAt))
    .map((c) => clientRow(c, index.now));
  return { rows, counts, total: index.clients.length };
}

/* ---------------- Fiche client ---------------- */

export interface ClientPageDTO {
  id: string;
  name: string;
  firstName: string;
  initials: string;
  city: string;
  address: string;
  postalCode: string;
  phones: Array<{ e164: string; display: string }>;
  emails: string[];
  stage: Stage;
  stageLabel: string;
  since: string;
  daysInStage: number;
  manual: boolean;
  reactivated: string | null;
  lost: { reason: string; detail?: string; at: string } | null;
  history: Array<{ key: string; when: string; stage: Stage; label: string; auto: boolean; by?: string; reason?: string; reactivated?: boolean }>;
  valueCents: number | null;
  logisvertCents: number;
  channel: string | null;
  firstSeen: string;
  lastSeen: string;
  tasks: TaskDTO[];
  notes: Array<{ id: string; when: string; by: string; text: string; kind: "note" | "appel" }>;
  timeline: Array<TimelineItem & { when: string }>;
  quotes: Array<{ id: string; number: string; status: EffectiveStatus; statusLabel: string; totalCents: number; sent: string | null; views: number; canCreateJob: boolean }>;
  jobs: Array<{ id: string; number: number; status: JobStatus; statusLabel: string; when: string | null; installer: string | null }>;
  conversations: Array<{ id: string; unread: number; last: string }>;
  dealIds: number[];
  tags: string[];
  identities: Array<{ selector: string; label: string; kind: "phone" | "email" }>;
  pieces: Array<{ selector: string; label: string; when: string }>;
  split: boolean;
  pipedriveEnabled: boolean;
}

export async function clientPage(id: string): Promise<{ client: ClientPageDTO } | { redirect: string } | null> {
  if (!CLIENT_ID_RE.test(id)) return null;
  const index = await loadCrmIndex();
  const c = index.byId.get(id);
  if (!c) return null;
  if (c.b.id !== id) return { redirect: c.b.id };
  const { b, stage } = c;
  const now = index.now;
  const today = localYmd(now);
  const ids = new Set([b.id, ...b.aliases]);
  const tasksDone = [
    ...index.src.crm.tasks.filter((t) => t.doneAt && t.clientId && ids.has(t.clientId)).map((t) => ({ at: t.doneAt!, title: t.title })),
    ...Object.values(index.src.crm.taskState).filter((s) => s.doneAt && s.clientId && ids.has(s.clientId)).map((s) => ({ at: s.doneAt!, title: s.title ?? "Tâche" })),
  ];
  const timeline = buildTimeline(b, { now, installers: index.src.installers, tasksDone }).map((i) => ({ ...i, when: stamp(i.at, now) }));
  const pieceLabel = (t: ClientBundle["touchpoints"][number]) => {
    if (t.source === "journal") return KIND_LABELS[b.journal.find((e) => e.id === t.ref)?.kind ?? ""] ?? "Demande";
    if (t.source === "soumission") return `Soumission ${b.quotes.find((q) => q.id === t.ref)?.number ?? ""}`.trim();
    if (t.source === "job") return `Job n° ${b.jobs.find((j) => j.id === t.ref)?.number ?? ""}`.trim();
    if (t.source === "texto") return "Conversation texto";
    if (t.source === "manuel") return "Fiche saisie à la main";
    return "Courriel automatique";
  };
  const map = index.settings.pipedriveStageMap;
  return {
    client: {
      id: b.id,
      name: displayName(b),
      firstName: b.firstName,
      initials: initialsOf(b),
      city: b.city,
      address: b.address,
      postalCode: b.postalCode,
      phones: b.phones.map((p) => ({ e164: p, display: formatPhone(p) })),
      emails: b.emails,
      stage: stage.stage,
      stageLabel: STAGE_LABELS[stage.stage],
      since: dateLong(stage.since),
      daysInStage: Math.max(0, daysBetweenYmd(localYmd(stage.since), today)),
      manual: stage.manual,
      reactivated: stage.reactivatedAt ? dateLong(stage.reactivatedAt) : null,
      lost: stage.lost ? { reason: stage.lost.reason, detail: stage.lost.detail, at: dateLong(stage.lost.at) } : null,
      history: stage.history.map((h, i) => ({ key: `${i}:${h.at}`, when: stamp(h.at, now), stage: h.stage, label: h.label ?? STAGE_LABELS[h.stage], auto: h.auto, by: h.by, reason: h.reason, reactivated: h.reactivated })),
      valueCents: c.valueCents,
      logisvertCents: logisvertOf(b, today),
      channel: b.firstChannel ? CHANNEL_LABELS[b.firstChannel] : null,
      firstSeen: dateLong(b.firstAt),
      lastSeen: ago(b.lastAt || b.firstAt, now),
      tasks: c.tasks.map((t) => taskDTO(t, index, now)),
      notes: [...(b.record?.notes ?? [])].reverse().map((n) => ({ id: n.id, when: stamp(n.at, now), by: n.by, text: n.text, kind: n.kind })),
      timeline,
      quotes: b.quotes.map((q) => {
        const v = latestSent(q) ?? q.versions[q.versions.length - 1];
        const st = latestSent(q) ? effectiveStatus(v, today) : "brouillon";
        return { id: q.id, number: q.number, status: st, statusLabel: QUOTE_STATUS_LABELS[st], totalCents: quoteAmount(v, today), sent: v.sentAt ? dateLong(v.sentAt) : null, views: v.views.count, canCreateJob: Boolean(v.acceptance) };
      }),
      jobs: b.jobs.map((j) => ({ id: j.id, number: j.number, status: j.status, statusLabel: JOB_STATUS_LABELS[j.status], when: j.scheduledFor ? dateLong(`${j.scheduledFor}T12:00:00Z`) : null, installer: j.assignedInstallerId ? (index.src.installers[j.assignedInstallerId] ?? null) : null })),
      conversations: b.textos.map((t) => ({ id: t.id, unread: t.unread, last: ago(t.lastAt, now) })),
      dealIds: b.dealIds,
      tags: b.record?.tags ?? [],
      identities: b.rawKeys
        .filter((k) => k.startsWith("p:") || k.startsWith("e:"))
        .map((k) => ({ selector: keySelector(k), label: k.startsWith("p:") ? formatPhone(k.slice(2)) : k.slice(2), kind: k.startsWith("p:") ? ("phone" as const) : ("email" as const) })),
      pieces: b.touchpoints.map((t) => ({ selector: touchSelector(t.key), label: pieceLabel(t), when: dateLong(t.at) })),
      split: b.split,
      pipedriveEnabled: Object.values(map).some((v) => typeof v === "number"),
    },
  };
}

/* ---------------- Pipeline ---------------- */

export interface BoardCard {
  id: string;
  name: string;
  city: string;
  valueCents: number | null;
  days: number;
  next: { title: string; due: string; overdue: boolean } | null;
  channel: string | null;
  reactivated: boolean;
  manual: boolean;
}

export interface BoardView {
  columns: Array<{ stage: Stage; label: string; n: number; cents: number; hidden: number; cards: BoardCard[] }>;
  pipedriveEnabled: boolean;
}

const CLOSED_WINDOW_DAYS = 90;

export async function boardView(): Promise<BoardView> {
  const index = await loadCrmIndex();
  const now = index.now;
  const today = localYmd(now);
  const columns = STAGES.map((stage) => {
    const all = index.clients.filter((c) => c.stage.stage === stage);
    const closed = stage === "terminee" || stage === "perdue";
    const shown = closed ? all.filter((c) => daysBetweenYmd(localYmd(c.stage.since), today) <= CLOSED_WINDOW_DAYS) : all;
    const cards = shown
      .sort((a, b) => a.stage.since.localeCompare(b.stage.since))
      .map((c) => {
        const next = c.tasks[0];
        const d = next ? taskDTO(next, index, now) : null;
        return {
          id: c.b.id,
          name: c.b.firstName ? `${c.b.firstName}${c.b.lastName ? ` ${c.b.lastName.charAt(0)}.` : ""}` : "Sans nom",
          city: c.b.city,
          valueCents: c.valueCents,
          days: Math.max(0, daysBetweenYmd(localYmd(c.stage.since), today)),
          next: d ? { title: d.title, due: d.due, overdue: d.overdue } : null,
          channel: c.b.firstChannel ? CHANNEL_LABELS[c.b.firstChannel] : null,
          reactivated: Boolean(c.stage.reactivatedAt),
          manual: c.stage.manual,
        };
      });
    return { stage, label: STAGE_LABELS[stage], n: all.length, cents: all.reduce((s, c) => s + (c.valueCents ?? 0), 0), hidden: all.length - shown.length, cards };
  });
  return { columns, pipedriveEnabled: Object.values(index.settings.pipedriveStageMap).some((v) => typeof v === "number") };
}

/* ---------------- Tâches ---------------- */

export async function tasksView(): Promise<{ overdue: TaskDTO[]; today: TaskDTO[]; upcoming: TaskDTO[]; total: number }> {
  const index = await loadCrmIndex();
  const b = bucketTasks(index.tasks, index.now);
  const dto = (ts: typeof index.tasks) => ts.map((t) => taskDTO(t, index, index.now));
  return { overdue: dto(b.overdue), today: dto(b.today), upcoming: dto(b.upcoming), total: index.tasks.length };
}

/* ---------------- Pré-remplissage et liens ---------------- */

export interface ClientPrefill {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

/** Valeurs initiales d'un formulaire (job, soumission) : rendues au serveur, dans le formulaire du propriétaire. */
export async function clientPrefill(id: string): Promise<ClientPrefill | null> {
  if (!CLIENT_ID_RE.test(id)) return null;
  const c = (await loadCrmIndex()).byId.get(id);
  if (!c) return null;
  const b = c.b;
  return { id: b.id, firstName: b.firstName, lastName: b.lastName, phone: b.phones[0] ? formatPhone(b.phones[0]) : "", email: b.emails[0] ?? "", address: b.address, city: b.city, postalCode: b.postalCode };
}

/** Valeurs initiales du formulaire de job : depuis un client, ou depuis une soumission acceptée (client, adresse des
    travaux, machine, date prévue). Rendues au serveur ; rien n'est enregistré avant que le propriétaire valide. */
export async function jobPrefill(opts: { clientId?: string; quoteId?: string }): Promise<{ initial: JobInitial; from: string } | null> {
  const base = (p: Omit<ClientPrefill, "id">): JobInitial => {
    const geo = p.postalCode ? resolvePostalOffline(p.postalCode) : null;
    return { id: "", firstName: p.firstName, lastName: p.lastName, phone: p.phone, email: p.email, address: p.address, city: p.city, postalCode: p.postalCode, region: geo?.region ?? "", regionGuess: geo?.region ?? null, brand: "", systemType: "", model: null, capacity: "", desiredDate: "", desiredWindow: "", installerNotes: "", internalNotes: "", resolvedCity: geo?.city ?? null };
  };
  if (opts.quoteId) {
    if (!QUOTE_ID_RE.test(opts.quoteId)) return null;
    const q = (await readSoumissions()).quotes.find((x) => x.id === opts.quoteId);
    if (!q) return null;
    const v = q.versions.find((x) => x.acceptance) ?? latestSent(q) ?? q.versions[q.versions.length - 1];
    const c = v.content;
    const site = c.site && !c.site.sameAsBilling ? c.site : null;
    const initial = base({ firstName: c.client.firstName, lastName: c.client.lastName, phone: c.client.phone, email: c.client.email, address: site?.address || c.client.address, city: site?.city || c.client.city, postalCode: site?.postalCode || c.client.postalCode });
    const m = c.machine;
    if (m) {
      initial.brand = m.brandId;
      initial.systemType = (SYSTEM_TYPES as readonly string[]).includes(m.systemType) ? m.systemType : "";
      initial.model = m.modelSlug ? { slug: m.modelSlug, label: `${m.brand} ${m.name}`.trim() } : null;
      const btu = m.pairing?.nominalBtu ?? null;
      initial.capacity = btu ? `${btu.toLocaleString("fr-CA")} BTU` : "";
    }
    const s = c.schedule;
    if (s.mode === "date" && isDay(s.date)) initial.desiredDate = s.date;
    else if (s.mode === "fenetre") {
      if (isDay(s.windowStart)) initial.desiredDate = s.windowStart;
      initial.desiredWindow = [s.windowStart && s.windowEnd ? `du ${s.windowStart} au ${s.windowEnd}` : "", s.windowText].filter(Boolean).join(" · ").slice(0, 200);
    }
    const total = v.acceptance ? v.acceptance.totalCents : null;
    initial.internalNotes = `Soumission ${q.number}${v.acceptance ? ` acceptée le ${dateLong(v.acceptance.at)}` : ""}${total !== null ? ` (${(total / 100).toLocaleString("fr-CA", { style: "currency", currency: "CAD" })} taxes comprises)` : ""}.`;
    return { initial, from: `la soumission ${q.number}` };
  }
  if (opts.clientId) {
    const p = await clientPrefill(opts.clientId);
    if (!p) return null;
    return { initial: base(p), from: `${p.firstName || "ce client"}`.trim() };
  }
  return null;
}

export async function clientIdForQuote(quoteId: string): Promise<string | null> {
  return (await loadCrmIndex()).byQuote.get(quoteId) ?? null;
}

export async function clientIdForJob(jobId: string): Promise<string | null> {
  return (await loadCrmIndex()).byJob.get(jobId) ?? null;
}

/* ---------------- Écritures ---------------- */

export type CrmResult = { ok: true; id?: string } | { ok: false; error: string };

/** Enregistrement du client dans crm.json (créé au besoin), anciens enregistrements du même client réunis. */
function ensureRecord(data: CrmData, c: ClientComputed, at: string): CrmClientRecord {
  let r = data.clients[c.b.id];
  if (!r) {
    r = { id: c.b.id, keys: [...c.b.keys], stageLog: [], tags: [], notes: [], createdAt: at, updatedAt: at };
    data.clients[c.b.id] = r;
  }
  for (const old of c.b.aliases) {
    const o = data.clients[old];
    if (!o || o === r) continue;
    r.notes = [...r.notes, ...o.notes].sort((a, b) => a.at.localeCompare(b.at));
    r.stageLog = [...r.stageLog, ...o.stageLog].sort((a, b) => a.at.localeCompare(b.at));
    r.tags = uniq([...r.tags, ...o.tags]);
    r.keys = uniq([...r.keys, ...o.keys]);
    if (o.stageOverride && (!r.stageOverride || o.stageOverride.at > r.stageOverride.at)) r.stageOverride = o.stageOverride;
    if (o.lost && (!r.lost || o.lost.at > r.lost.at)) r.lost = o.lost;
    if (o.createdAt < r.createdAt) r.createdAt = o.createdAt;
    r.valueCents ??= o.valueCents;
    delete data.clients[old];
    data.aliases[old] = r.id;
  }
  for (const t of data.tasks) if (t.clientId && c.b.aliases.includes(t.clientId)) t.clientId = r.id;
  r.keys = uniq([...r.keys, ...c.b.keys]);
  r.updatedAt = at;
  return r;
}

async function clientOrNull(id: string): Promise<ClientComputed | null> {
  if (!CLIENT_ID_RE.test(id)) return null;
  return (await freshIndex()).byId.get(id) ?? null;
}

export async function addNote(clientId: string, text: string, kind: "note" | "appel", by: string, now = new Date()): Promise<CrmResult> {
  const c = await clientOrNull(clientId);
  if (!c) return { ok: false, error: "Client introuvable." };
  const clean = text.trim().slice(0, 4000);
  if (!clean) return { ok: false, error: "La note est vide." };
  await mutateCrm((d) => {
    const r = ensureRecord(d, c, now.toISOString());
    r.notes.push({ id: newCrmId("n"), at: now.toISOString(), by, text: clean, kind });
    return { result: undefined, changed: true };
  });
  return { ok: true };
}

/** Étape choisie à la main. Renvoie ce qu'il faut pousser à Pipedrive (si une étape est associée) : l'appelant le fait dans after(). */
export async function setStage(clientId: string, stage: Stage, reason: string, by: string, now = new Date()): Promise<CrmResult & { pipedrive?: { dealId: number; stageId: number; at: string; clientId: string } }> {
  const c = await clientOrNull(clientId);
  if (!c) return { ok: false, error: "Client introuvable." };
  if (stage === "perdue" && !reason.trim()) return { ok: false, error: "Indiquez la raison de la perte." };
  const at = now.toISOString();
  const settings = await mutateCrm((d) => {
    const r = ensureRecord(d, c, at);
    r.stageLog.push({ at, by, from: c.stage.stage, to: stage, ...(reason.trim() ? { reason: reason.trim().slice(0, 200) } : {}) });
    r.stageOverride = { stage, at, by };
    if (stage === "perdue") r.lost = { reason: reason.trim().slice(0, 200), at };
    return { result: d.settings, changed: true };
  });
  const stageId = settings.pipedriveStageMap[stage];
  const dealId = c.b.dealIds.at(-1);
  return { ok: true, id: c.b.id, ...(typeof stageId === "number" && dealId ? { pipedrive: { dealId, stageId, at, clientId: c.b.id } } : {}) };
}

/** Consigne le résultat Pipedrive dans l'historique de l'étape. */
export async function notePipedriveResult(clientId: string, at: string, result: { ok: boolean; detail: string }): Promise<void> {
  await mutateCrm((d) => {
    const entry = d.clients[clientId]?.stageLog.find((s) => s.at === at);
    if (!entry) return { result: undefined, changed: false };
    entry.pipedrive = result;
    return { result: undefined, changed: true };
  });
}

export async function addTask(input: { clientId: string | null; title: string; dueAt: Date }, by: string, now = new Date()): Promise<CrmResult> {
  const title = input.title.trim().slice(0, 160);
  if (!title) return { ok: false, error: "Donnez un titre à la tâche." };
  let c: ClientComputed | null = null;
  if (input.clientId) {
    c = await clientOrNull(input.clientId);
    if (!c) return { ok: false, error: "Client introuvable." };
  }
  const at = now.toISOString();
  await mutateCrm((d) => {
    if (c) ensureRecord(d, c, at);
    d.tasks.push({ id: newCrmId("t"), clientId: c?.b.id ?? null, title, dueAt: input.dueAt.toISOString(), by, createdAt: at });
    return { result: undefined, changed: true };
  });
  return { ok: true };
}

function pruneTaskState(d: CrmData, now: Date) {
  const limit = new Date(now.getTime() - 400 * 86_400_000).toISOString();
  for (const [k, s] of Object.entries(d.taskState)) if ((s.doneAt ?? s.snoozedUntil ?? "") < limit) delete d.taskState[k];
  d.tasks = d.tasks.filter((t) => !t.doneAt || t.doneAt >= limit);
}

export async function completeTask(key: string, by: string, now = new Date()): Promise<CrmResult> {
  const at = now.toISOString();
  if (TASK_ID_RE.test(key)) {
    const ok = await mutateCrm((d) => {
      const t = d.tasks.find((x) => x.id === key);
      if (!t || t.doneAt) return { result: false, changed: false };
      t.doneAt = at;
      pruneTaskState(d, now);
      return { result: true, changed: true };
    });
    return ok ? { ok: true } : { ok: false, error: "Tâche introuvable." };
  }
  if (!AUTO_TASK_RE.test(key)) return { ok: false, error: "Tâche introuvable." };
  const task = (await freshIndex(now)).tasks.find((t) => t.key === key);
  if (!task) return { ok: false, error: "Cette tâche n’est plus à faire." };
  await mutateCrm((d) => {
    d.taskState[key] = { ...d.taskState[key], doneAt: at, ...(task.clientId ? { clientId: task.clientId } : {}), title: task.title.slice(0, 160) };
    void by;
    pruneTaskState(d, now);
    return { result: undefined, changed: true };
  });
  return { ok: true };
}

export async function snoozeTask(key: string, until: Date, now = new Date()): Promise<CrmResult> {
  if (until <= now) return { ok: false, error: "Choisissez un moment à venir." };
  const iso = until.toISOString();
  if (TASK_ID_RE.test(key)) {
    const ok = await mutateCrm((d) => {
      const t = d.tasks.find((x) => x.id === key);
      if (!t || t.doneAt) return { result: false, changed: false };
      t.snoozedUntil = iso;
      return { result: true, changed: true };
    });
    return ok ? { ok: true } : { ok: false, error: "Tâche introuvable." };
  }
  if (!AUTO_TASK_RE.test(key)) return { ok: false, error: "Tâche introuvable." };
  const task = (await freshIndex(now)).tasks.find((t) => t.key === key);
  if (!task) return { ok: false, error: "Cette tâche n’est plus à faire." };
  await mutateCrm((d) => {
    d.taskState[key] = { ...d.taskState[key], snoozedUntil: iso };
    return { result: undefined, changed: true };
  });
  return { ok: true };
}

export async function createManualContact(input: { firstName: string; lastName: string; phone: string; email: string; city: string }, by: string, now = new Date()): Promise<CrmResult> {
  const id = newCrmId("m");
  await mutateCrm((d) => {
    d.manualContacts.push({ id, ...input, createdAt: now.toISOString(), createdBy: by });
    return { result: undefined, changed: true };
  });
  const index = await freshIndex(now);
  const c = index.clients.find((x) => x.b.manual.some((m) => m.id === id));
  return c ? { ok: true, id: c.b.id } : { ok: false, error: "Fiche enregistrée, mais introuvable." };
}

/** Fusionne deux clients : le plus ancien garde son identifiant, l'autre devient un alias ; notes et tâches réunies. */
export async function mergeClients(a: string, b: string, by: string, now = new Date()): Promise<CrmResult> {
  const index = await freshIndex(now);
  const ca = CLIENT_ID_RE.test(a) ? index.byId.get(a) : undefined;
  const cb = CLIENT_ID_RE.test(b) ? index.byId.get(b) : undefined;
  if (!ca || !cb) return { ok: false, error: "Client introuvable." };
  if (ca === cb) return { ok: false, error: "C’est déjà le même client." };
  const [win, lose] = ca.b.firstAt <= cb.b.firstAt ? [ca, cb] : [cb, ca];
  const at = now.toISOString();
  await mutateCrm((d) => {
    const r = ensureRecord(d, win, at);
    const o = ensureRecord(d, lose, at);
    r.notes = [...r.notes, ...o.notes].sort((x, y) => x.at.localeCompare(y.at));
    r.stageLog = [...r.stageLog, ...o.stageLog].sort((x, y) => x.at.localeCompare(y.at));
    r.tags = uniq([...r.tags, ...o.tags]);
    r.keys = uniq([...r.keys, ...o.keys]);
    if (o.stageOverride && (!r.stageOverride || o.stageOverride.at > r.stageOverride.at)) r.stageOverride = o.stageOverride;
    if (o.lost && (!r.lost || o.lost.at > r.lost.at)) r.lost = o.lost;
    r.notes.push({ id: newCrmId("n"), at, by, text: `Fiche fusionnée avec ${displayName(lose.b)}.`, kind: "note" });
    delete d.clients[o.id];
    d.aliases[o.id] = r.id;
    for (const x of lose.b.aliases) d.aliases[x] = r.id;
    for (const t of d.tasks) if (t.clientId === o.id) t.clientId = r.id;
    for (const s of Object.values(d.taskState)) if (s.clientId === o.id) s.clientId = r.id;
    d.merges.push([o.id, r.id]);
    return { result: undefined, changed: true };
  });
  return { ok: true, id: win.b.id };
}

/** Sépare une partie d'un client (numéro partagé par deux personnes) : nouvelle fiche, stable. */
export async function splitClient(clientId: string, selectors: string[], by: string, now = new Date()): Promise<CrmResult> {
  const c = await clientOrNull(clientId);
  if (!c) return { ok: false, error: "Client introuvable." };
  const allowed = new Set([...c.b.rawKeys.map(keySelector), ...c.b.touchpoints.map((t) => touchSelector(t.key))]);
  const chosen = uniq(selectors.filter((s) => allowed.has(s)));
  if (!chosen.length) return { ok: false, error: "Choisissez ce qui appartient à l’autre personne." };
  const pieces = c.b.touchpoints.filter((t) => !chosen.includes(touchSelector(t.key)) && !c.b.rawKeys.some((k) => chosen.includes(keySelector(k)) && (t.phone === k.slice(2) || t.email === k.slice(2))));
  if (!pieces.length) return { ok: false, error: "Il doit rester quelque chose dans cette fiche." };
  const at = now.toISOString();
  await mutateCrm((d) => {
    const r = ensureRecord(d, c, at);
    const hashes = new Set(chosen.filter((s) => s.startsWith("k:")).map((s) => s.slice(2)));
    r.keys = r.keys.filter((k) => !hashes.has(k));
    r.notes.push({ id: newCrmId("n"), at, by, text: "Une partie de la fiche a été séparée dans une nouvelle fiche.", kind: "note" });
    d.splits.push(chosen);
    return { result: undefined, changed: true };
  });
  return { ok: true, id: splitId(chosen) };
}

export async function setTags(clientId: string, tags: string[], now = new Date()): Promise<CrmResult> {
  const c = await clientOrNull(clientId);
  if (!c) return { ok: false, error: "Client introuvable." };
  const clean = uniq(tags.map((t) => t.trim().slice(0, 30)).filter(Boolean)).slice(0, 12);
  await mutateCrm((d) => {
    ensureRecord(d, c, now.toISOString()).tags = clean;
    return { result: undefined, changed: true };
  });
  return { ok: true };
}

export async function readCrmSettings(): Promise<CrmSettings> {
  return (await readCrm()).settings;
}

export async function saveCrmSettings(input: Partial<CrmSettings>, by: string, now = new Date()): Promise<CrmResult> {
  await mutateCrm((d) => {
    d.settings = normalizeSettings({ ...d.settings, ...input, updatedAt: now.toISOString(), updatedBy: by });
    return { result: undefined, changed: true };
  });
  return { ok: true };
}

/** Numéro à composer, demandé au moment du clic sur « Appeler » (jamais envoyé avec la page). */
export async function dialHref(clientId: string): Promise<string | null> {
  const c = await clientOrNull(clientId);
  const p = c?.b.phones[0];
  return p ? `tel:${p}` : null;
}

export { PIPELINE_STAGES };
