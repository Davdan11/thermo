/* ==================================================================
   Conformité C1 — opérations du parcours (lectures, écritures sous
   verrou, puis envois, jamais sous verrou).

   AUCUNE vérification d'accès ici : les pages et actions de /gestion
   passent d'abord par requireUser / requireAdmin ; les pages de
   l'installateur (/approbation/[jeton]) et du client (/devis/[jeton])
   sont autorisées par leur jeton seulement. Seules les empreintes des
   jetons de l'installateur sont gardées.

   Règle non négociable : le client ne signe JAMAIS avant qu'un
   installateur identifié ait approuvé le contrat (clientStage).
   ================================================================== */

import { SYSTEM_TYPES, type SystemType } from "@/lib/data/types/enums";
import { estEnVigueur, estVise, lireConfig, texteMention } from "@/lib/garantie-legale/config";
import { hashToken, newToken, TOKEN_RE as LINK_TOKEN_RE } from "@/lib/gestion/auth/magic-link";
import { brandLabel } from "@/lib/gestion/catalog";
import { paymentBlocker } from "@/lib/gestion/commissions/blocker";
import { readCommissions } from "@/lib/gestion/commissions/store";
import { resolvePostalOffline } from "@/lib/gestion/geo";
import { matchInstallers, type Candidate } from "@/lib/gestion/matching";
import { partnerBlockers } from "@/lib/gestion/partenaires/blockers";
import { docState } from "@/lib/gestion/partenaires/compliance";
import { partnerMatchInfo } from "@/lib/gestion/partenaires/network";
import { sendEmailSafe, sendOwnerSafe, sendSmsSafe, type Rendered } from "@/lib/gestion/partenaires/send";
import { readPartenaires } from "@/lib/gestion/partenaires/store";
import type { PartenairesData } from "@/lib/gestion/partenaires/types";
import { readPortal } from "@/lib/gestion/portail/store";
import { readReseau } from "@/lib/gestion/reseau/store";
import { SITE_BASE_URL } from "@/lib/gestion/request";
import { mutateGestion, readGestion } from "@/lib/gestion/store";
import type { GestionData, Installer, Job } from "@/lib/gestion/types";
import { readPlatformIdentity, type PlatformIdentity } from "@/lib/plateforme/identite";
import { readTrousse, type TrousseData } from "@/lib/plateforme/trousse";
import { TAXES } from "@/lib/soumissions/config";
import { contractorIdentityOf } from "@/lib/soumissions/contractors";
import { todayIn } from "@/lib/soumissions/dates";
import { hashOf, sha256Hex } from "@/lib/soumissions/hash";
import { latestSent, QUOTE_ID_RE } from "@/lib/soumissions/quote";
import { readSoumissions } from "@/lib/soumissions/store";
import { findByToken } from "@/lib/soumissions/tokens";
import { cleanSelection, defaultSelection } from "@/lib/soumissions/totals";
import type { ClientInfo, Quote, QuoteVersion, SoumissionsData } from "@/lib/soumissions/types";
import { availabilityFor, offerable, periodOf, sortByAvailability, type InstallerAvailability, type Period } from "./disponibilites";
import { avenantMessage, cancellationMessage, copyMessage, ownerMessage, proposalMessage, readyToSignMessage } from "./emails";
import { moneyFr } from "./format";
import { normalizePaymentProfile } from "./paiement";
import { cleanCodes, defaultRbqRules, knownSubcategories, normalizeRules, worksOf } from "./rbq";
import {
  activeContract,
  applyDateChoice,
  approvalBlockers,
  approvalInputError,
  avenantAmounts,
  avenantProblems,
  clientStage,
  contractNetBaseCents,
  contractTotalCents,
  normalizeTyped,
  renderSigned,
  signatureSnapshot,
  typedNameOk,
  verifyContract,
  type AvenantDraft,
  type ClientStage,
} from "./regles";
import { buildContract, clientName, contractChanges, contractPlainText, contractSha256, contractTotals, renderContractBody, renderContractHtml, whenFr, type ProofView } from "./rendu";
import { ensureDossier, logDossier, mutateContrats, newAvenantId, newContractId, newProposalId, readContrats } from "./store";
import { shortWho } from "./crm-tasks";
import {
  type Avenant,
  type ContractDoc,
  type ContractInstaller,
  type ContratsData,
  type ContratsSettings,
  type DateChoice,
  type Dossier,
  type Outcome,
  type PaymentProfile,
  type Proposal,
  type RbqRule,
  type SendLog,
  type SentContract,
} from "./types";

export type Result<T extends object = object> = ({ ok: true } & T) | { ok: false; error: string; code?: string };
const fail = (error: string, code?: string): { ok: false; error: string; code?: string } => ({ ok: false, error, ...(code ? { code } : {}) });

/* ---------------- Envois (injectables pour les essais) ---------------- */

export interface ContratChannels {
  email(to: string, m: Rendered, label: string): Promise<Outcome>;
  sms(to: string, body: string, label: string): Promise<Outcome>;
  owner(m: Rendered, label: string): Promise<Outcome>;
}

/** Garde-fous du volet A : hors production, rien ne part (« simulé ») sauf TEXTOS_ENVOIS_DEV=1 ; désabonnés respectés. */
export const realContratChannels: ContratChannels = {
  email: (to, m, label) => sendEmailSafe(to, m, label),
  sms: (to, body) => sendSmsSafe(to, body),
  owner: async (m, label) => {
    const r = await sendOwnerSafe(m, label);
    return !r.length ? "sans-destinataire" : r.includes("envoye") ? "envoye" : r.includes("simule") ? "simule" : r[0];
  },
};

export interface Opts {
  now?: Date;
  channels?: ContratChannels;
  baseUrl?: string;
}

const base = (o: Opts) => (o.baseUrl ?? SITE_BASE_URL).replace(/\/$/, "");
const ch = (o: Opts) => o.channels ?? realContratChannels;
export const clientDocLink = (b: string, token: string) => `${b}/devis/${token}`;
const toolLink = (b: string, quoteId: string) => `${b}/gestion/soumissions/${quoteId}#parcours`;
const CURRENT_TAXES = { tpsPer100k: TAXES.tps.ratePer100k, tvqPer100k: TAXES.tvq.ratePer100k };

/* ---------------- Lectures communes ---------------- */

interface Snap {
  soum: SoumissionsData;
  gestion: GestionData;
  partners: PartenairesData;
  contrats: ContratsData;
  trousse: TrousseData;
  platform: PlatformIdentity;
  invoices: Awaited<ReturnType<typeof readCommissions>>;
}

async function snap(): Promise<Snap> {
  const [soum, gestion, partners, contrats, trousse, platform, invoices] = await Promise.all([readSoumissions(), readGestion(), readPartenaires(), readContrats(), readTrousse(), readPlatformIdentity(), readCommissions()]);
  return { soum, gestion, partners, contrats, trousse, platform, invoices };
}

const rulesOf = (c: Pick<ContratsData, "rbqRules">): RbqRule[] => c.rbqRules ?? defaultRbqRules();
const isSent = (v: QuoteVersion) => v.status !== "brouillon";
const whoOf = (v: QuoteVersion) => shortWho(v.content.client.firstName, v.content.client.lastName);
const cityOf = (v: QuoteVersion) => (v.content.site.sameAsBilling ? v.content.client.city : v.content.site.city) || v.content.client.city;

function installerContract(s: Pick<Snap, "gestion" | "partners" | "contrats">, installerId: string): ContractInstaller | null {
  const inst = s.gestion.installers.find((i) => i.id === installerId);
  if (!inst) return null;
  const rec = s.partners.partners[installerId];
  return { ...contractorIdentityOf(inst, rec), rbqSubcategories: knownSubcategories(rec?.rbqVerification, s.contrats.partnerRbq[installerId]).codes };
}

function legalWarrantyFor(v: QuoteVersion, now: Date): string | null {
  const cfg = lireConfig();
  const m = v.content.machine;
  return m && estVise({ systemType: m.systemType }, cfg) && estEnVigueur(cfg, now) ? texteMention(cfg) : null;
}

/** Version comparée : la dernière autre version envoyée où le client est allé de l'avant, sinon la précédente, sinon elle-même. */
function referenceOf(q: Quote, v: QuoteVersion): QuoteVersion {
  const older = q.versions.filter((x) => x.v < v.v && isSent(x)).sort((a, b) => b.v - a.v);
  return older.find((x) => x.jumelage) ?? (v.jumelage ? v : older[0]) ?? v;
}

function selectionFor(v: QuoteVersion, ref: QuoteVersion): string[] {
  const raw = v.jumelage?.selection ?? ref.jumelage?.selection ?? defaultSelection(v.content.lines);
  return cleanSelection(v.content.lines, raw);
}

interface Built {
  doc: ContractDoc;
  blockers: string[];
  problems: string[];
  installer: Installer;
}

/** Contrat de l'installateur pour une version envoyée, et ce qui bloque son approbation. */
function buildFor(s: Snap, q: Quote, v: QuoteVersion, installerId: string, dateChoice: DateChoice | null, now: Date): Built | null {
  const inst = s.gestion.installers.find((i) => i.id === installerId);
  const installer = installerContract(s, installerId);
  if (!inst || !installer) return null;
  const today = todayIn(now);
  const taxes = v.frozen?.taxes ?? CURRENT_TAXES;
  const project = dateChoice ? applyDateChoice(v.content, dateChoice) : v.content;
  const ref = referenceOf(q, v);
  const selection = selectionFor(v, ref);
  const refSelection = cleanSelection(ref.content.lines, ref.jumelage?.selection ?? defaultSelection(ref.content.lines));
  const changes = contractChanges({ content: ref.content, selection: ref === v ? selection : refSelection }, { content: project, selection }, taxes, today);
  const { doc, problems } = buildContract({
    quoteNumber: q.number,
    versionId: v.id,
    v: v.v,
    trousse: s.trousse,
    platform: s.platform,
    installer,
    client: v.content.client,
    site: { sameAsBilling: v.content.site.sameAsBilling, address: v.content.site.address, city: v.content.site.city, postalCode: v.content.site.postalCode },
    project,
    selection,
    taxes,
    payment: s.contrats.payments[installerId] ?? null,
    legalWarranty: legalWarrantyFor(v, now),
    changes,
    comparedWith: ref.v,
    dateStatus: dateChoice ? (dateChoice.kind === "confirme" ? "confirmee" : "proposee") : "a-confirmer",
  });
  const rec = s.partners.partners[installerId];
  const alert = s.partners.settings.alertDays;
  const blockers = approvalBlockers({
    partnerBlockers: partnerBlockers(inst, { data: s.partners, now }),
    compliance: { rbq: docState(rec?.compliance.rbq ?? { expiresOn: null }, now, alert), assurance: docState(rec?.compliance.assurance ?? { expiresOn: null }, now, alert) },
    identity: contractorIdentityOf(inst, rec),
    known: knownSubcategories(rec?.rbqVerification, s.contrats.partnerRbq[installerId]),
    rules: rulesOf(s.contrats),
    project,
    payment: s.contrats.payments[installerId] ?? null,
    paymentBlock: paymentBlocker(installerId, s.invoices.invoices, s.invoices.settings, now)?.reason ?? null,
    contractProblems: problems,
  });
  return { doc, blockers, problems, installer: inst };
}

const findQuote = (s: Pick<Snap, "soum">, quoteId: string) => (QUOTE_ID_RE.test(quoteId) ? s.soum.quotes.find((q) => q.id === quoteId) : undefined);
const dossierOf = (c: Pick<ContratsData, "dossiers">, quoteId: string) => c.dossiers.find((d) => d.quoteId === quoteId);
/** Version active : la dernière envoyée, si elle n'est pas remplacée. */
const activeVersion = (q: Quote) => {
  const v = latestSent(q);
  return v && v.status !== "remplacee" && v.status !== "refusee" ? v : undefined;
};

function offerOpen(d: Dossier | undefined, versionId: string, jobs: readonly Job[]): boolean {
  if (!d?.offer || d.offer.versionId !== versionId) return false;
  const job = jobs.find((j) => j.id === d.offer!.jobId);
  if (!job || job.status === "annule" || job.status === "termine") return false;
  if (job.assignedInstallerId && d.proposals.some((p) => p.via === "offre" && p.installerId === job.assignedInstallerId && p.versionId === versionId && (p.status === "refusee" || p.status === "changements"))) return false;
  return true;
}

export function stageFor(d: Dossier | undefined, v: QuoteVersion, jobs: readonly Job[]): ClientStage {
  return clientStage(d, v.id, { jumelage: Boolean(v.jumelage), offerOpen: offerOpen(d, v.id, jobs) });
}

async function logSend(quoteId: string, fn: (d: Dossier) => void): Promise<void> {
  await mutateContrats((data) => {
    const d = dossierOf(data, quoteId);
    if (!d) return { result: undefined, changed: false };
    fn(d);
    return { result: undefined, changed: true };
  });
}

/* ---------------- Job de l'installation ---------------- */

function newJobObject(q: Quote, v: QuoteVersion, jobs: readonly Job[], by: string, now: Date, assign: string | null): Job {
  const c = v.content;
  const site = c.site.sameAsBilling ? c.client : { ...c.client, address: c.site.address, city: c.site.city, postalCode: c.site.postalCode };
  const geo = resolvePostalOffline(site.postalCode);
  const m = c.machine;
  const s = c.schedule;
  const at = now.toISOString();
  const job: Job & { quoteId: string } = {
    id: `j_${newToken().slice(0, 11)}`,
    number: jobs.reduce((n, j) => Math.max(n, j.number), 0) + 1,
    createdAt: at,
    updatedAt: at,
    client: { firstName: c.client.firstName, lastName: c.client.lastName, phone: c.client.phone, email: c.client.email, address: site.address, city: site.city || geo?.city || "", postalCode: site.postalCode },
    geo: geo ? { lat: geo.lat, lon: geo.lon, city: geo.city, precision: geo.precision } : null,
    region: geo?.region ?? null,
    regionGuess: geo?.region ?? null,
    brand: m?.brandId ?? null,
    systemType: m && (SYSTEM_TYPES as readonly string[]).includes(m.systemType) ? (m.systemType as SystemType) : null,
    modelSlug: m?.modelSlug ?? null,
    modelLabel: m ? `${m.brand} ${m.name}`.trim() : null,
    capacity: m?.pairing?.nominalBtu ? `${m.pairing.nominalBtu} BTU` : "",
    desiredDate: s.mode === "date" ? s.date : s.mode === "fenetre" ? s.windowStart : null,
    desiredWindow: s.mode === "fenetre" ? whenFr(s) : "",
    installerNotes: "",
    internalNotes: `Soumission ${q.number} · parcours de la trousse (contrat au nom de l’installateur).`,
    status: assign ? "attribue" : "nouveau",
    assignedInstallerId: assign,
    ...(assign ? { proposedInstallerId: assign } : {}),
    scheduledFor: null,
    offers: [],
    audit: [{ at, by, action: "job créé", detail: `depuis la soumission ${q.number}` }],
    quoteId: q.id,
  };
  if (assign) job.audit.push({ at, by, action: "attribué par l’approbation du contrat", detail: "sans offre séparée" });
  return job;
}

/** Job attribué à l'installateur qui approuve : créé, ou repris (changement d'installateur). Renvoie son identifiant. */
async function ensureAssignedJob(q: Quote, v: QuoteVersion, jobId: string | null, installerId: string, by: string, now: Date): Promise<string> {
  return mutateGestion((g) => {
    const existing = jobId ? g.jobs.find((j) => j.id === jobId && j.status !== "annule" && j.status !== "termine") : undefined;
    const at = now.toISOString();
    if (existing) {
      if (existing.assignedInstallerId !== installerId) {
        existing.assignedInstallerId = installerId;
        existing.proposedInstallerId = installerId;
        existing.status = "attribue";
        existing.scheduledFor = null;
        existing.updatedAt = at;
        existing.audit.push({ at, by, action: "attribué par l’approbation du contrat", detail: "sans offre séparée" });
      }
      return { result: existing.id, changed: true };
    }
    const job = newJobObject(q, v, g.jobs, by, now, installerId);
    g.jobs.push(job);
    return { result: job.id, changed: true };
  });
}

/** Retire l'installateur du job (refus du client, changement d'installateur, refus après une offre acceptée). */
async function unassignJob(jobId: string | null, by: string, why: string, now: Date): Promise<void> {
  if (!jobId) return;
  await mutateGestion((g) => {
    const j = g.jobs.find((x) => x.id === jobId);
    if (!j || !j.assignedInstallerId || j.status === "termine" || j.status === "annule") return { result: undefined, changed: false };
    const at = now.toISOString();
    j.assignedInstallerId = null;
    j.status = "nouveau";
    j.scheduledFor = null;
    delete j.scheduledTime;
    delete j.scheduledWindow;
    delete j.slotId;
    j.updatedAt = at;
    j.audit.push({ at, by, action: "installateur retiré", detail: why });
    return { result: undefined, changed: true };
  });
}

/* ---------------- Parcours A et B : proposition directe ---------------- */

/**
 * Proposition à UN installateur (parcours A à l'envoi, ou « choisir » dans Trouver un installateur) :
 * lien personnel à jeton, texto et courriel. Consentement au transfert exigé (case 3.1 du client, ou noté par le propriétaire).
 */
export async function proposeToInstaller(input: { quoteId: string; installerId: string; by: string; consentNote?: string | null }, o: Opts = {}): Promise<Result<{ proposalId: string; email: Outcome; sms: Outcome; link: string }>> {
  const now = o.now ?? new Date();
  const s = await snap();
  const q = findQuote(s, input.quoteId);
  if (!q) return fail("Soumission introuvable.");
  const v = activeVersion(q);
  if (!v || !v.frozen?.parcours) return fail("Envoyez d’abord la soumission au client (parcours de la trousse).");
  const inst = s.gestion.installers.find((i) => i.id === input.installerId);
  if (!inst) return fail("Installateur introuvable.");
  if (s.partners.partners[inst.id]?.ended) return fail(`Le partenariat avec ${inst.company} est terminé.`);
  const pause = paymentBlocker(inst.id, s.invoices.invoices, s.invoices.settings, now);
  if (pause) return fail(`${inst.company} : offres en pause, ${pause.reason}.`);
  const d0 = dossierOf(s.contrats, q.id);
  if (activeContract(d0)?.status === "signe") return fail("Le contrat est déjà signé : utilisez « Changer d’installateur ».");
  const note = (input.consentNote ?? "").trim();
  if (!d0?.consent && !v.jumelage && note.length < 3) return fail("Consentement au transfert du dossier à l’installateur : le client doit aller de l’avant (case 3.1), ou notez comment il a consenti (formulaire, téléphone).", "consentement");
  const token = newToken();
  const at = now.toISOString();
  const proposalId = await mutateContrats<string>((data) => {
    const d = ensureDossier(data, q, input.by, now);
    if (!d.consent) d.consent = v.jumelage ? { source: "client", at: v.jumelage.at, v: v.v } : { source: "proprietaire", at, by: input.by, note: note.slice(0, 300) };
    for (const p of d.proposals) if (p.status === "en-attente" && p.versionId === v.id) p.status = "retiree";
    const p: Proposal = { id: newProposalId(), installerId: inst.id, company: inst.company, via: "direct", jobId: d.jobId, versionId: v.id, v: v.v, tokenHashes: [hashToken(token)], createdAt: at, createdBy: input.by, status: "en-attente", messages: [], approval: null, sends: [], views: { count: 0, firstAt: null, lastAt: null } };
    d.proposals.push(p);
    logDossier(d, { at, by: input.by, type: "proposition", detail: `Proposé à ${inst.company} (version ${v.v})` });
    return { result: p.id, changed: true };
  });
  const link = `${base(o)}/approbation/${token}`;
  const built = buildFor(s, q, v, inst.id, null, now);
  const total = built ? contractTotals(built.doc, built.doc.selection, todayIn(now)).totalCents : 0;
  const msg = proposalMessage({ contactName: inst.contactName, who: whoOf(v), city: cityOf(v), totalCents: total, link, when: whenFr(v.content.schedule) });
  const [email, sms] = await Promise.all([ch(o).email(inst.email, msg.mail, "contrat : demande d’approbation"), ch(o).sms(inst.phone, msg.sms, "contrat : demande d’approbation")]);
  await logSend(q.id, (d) => d.proposals.find((p) => p.id === proposalId)?.sends.push({ at, by: input.by, email, sms }));
  return { ok: true, proposalId, email, sms, link };
}

/* ---------------- « Je veux aller de l'avant » ---------------- */

/** Après la demande de jumelage du client : consentement noté, propriétaire avisé, offre automatique si le réglage est actif. */
export async function onJumelage(quoteId: string, versionId: string, o: Opts = {}): Promise<{ autoOffer: boolean }> {
  const now = o.now ?? new Date();
  const s = await snap();
  const q = findQuote(s, quoteId);
  const v = q?.versions.find((x) => x.id === versionId);
  if (!q || !v?.jumelage) return { autoOffer: false };
  const at = now.toISOString();
  const pending = await mutateContrats<boolean>((data) => {
    const d = ensureDossier(data, q, "client", now);
    d.consent = { source: "client", at: v.jumelage!.at, v: v.v };
    logDossier(d, { at, by: "client", type: "jumelage", detail: `Le client va de l’avant (version ${v.v}, ${moneyFr(v.jumelage!.totalCents)})` });
    return { result: d.proposals.some((p) => p.status === "en-attente" && p.versionId === v.id) || offerOpen(d, v.id, s.gestion.jobs), changed: true };
  });
  const who = whoOf(v);
  await ch(o).owner(ownerMessage({ title: pending ? `${who} va de l’avant (installateur en train de confirmer)` : `${who} va de l’avant : trouver l’installateur`, lead: pending ? "Le client a coché la case 3.1. L’installateur proposé doit encore approuver le contrat." : "Le client a coché la case 3.1 : dossier prêt. Choisissez l’installateur, ou offrez le projet aux installateurs admissibles.", rows: [["Soumission", q.number], ["Total", moneyFr(v.jumelage.totalCents)], ["Ville", cityOf(v)]], link: toolLink(base(o), q.id) }), "contrat : le client va de l’avant");
  if (!pending && s.contrats.settings.autoOffer) {
    const r = await offerToEligible({ quoteId, by: "système", auto: true }, o);
    return { autoOffer: r.ok };
  }
  return { autoOffer: false };
}

/* ---------------- Trouver un installateur ---------------- */

export interface FindRow {
  installerId: string;
  company: string;
  city: string;
  eligible: boolean;
  score: number;
  reasons: string[];
  failures: string[];
  availability: InstallerAvailability;
  /** Ce qui l'empêcherait d'approuver le contrat (identité, sous-catégories RBQ, paiement). */
  approvalIssues: string[];
  pendingOffer: boolean;
}

export interface FindView {
  period: Period | null;
  periodText: string;
  rows: FindRow[];
  nearMisses: FindRow[];
  consent: boolean;
  offerJobId: string | null;
}

function tempJob(q: Quote, v: QuoteVersion, jobs: readonly Job[], d: Dossier | undefined, now: Date): Job {
  const j = newJobObject(q, v, jobs, "système", now, null);
  const live = d?.offer ? jobs.find((x) => x.id === d.offer!.jobId) : undefined;
  return live ? { ...j, id: live.id, number: live.number, offers: live.offers } : j;
}

/** Liste classée des installateurs admissibles (moteur existant : zones, marques, charge, niveaux, blocages), disponibilités d'abord. */
export async function findInstallers(quoteId: string, now = new Date()): Promise<FindView | null> {
  const s = await snap();
  const q = findQuote(s, quoteId);
  const v = q ? activeVersion(q) : undefined;
  if (!q || !v) return null;
  const d = dossierOf(s.contrats, q.id);
  const job = tempJob(q, v, s.gestion.jobs, d, now);
  const blocks = (id: string) => paymentBlocker(id, s.invoices.invoices, s.invoices.settings, now)?.reason ?? null;
  const partner = await partnerMatchInfo(s.gestion.installers, s.gestion.jobs, now);
  const match = matchInstallers(job, s.gestion.installers, s.gestion.jobs, { now, brandLabel, blockers: blocks, partner });
  const [portal, reseau] = await Promise.all([readPortal(), readReseau()]);
  const period = periodOf(v.content.schedule);
  const today = todayIn(now);
  const works = worksOf(v.content);
  const rules = rulesOf(s.contrats);
  const row = (c: Candidate): FindRow => {
    const id = c.installer.id;
    const rec = s.partners.partners[id];
    const known = knownSubcategories(rec?.rbqVerification, s.contrats.partnerRbq[id]);
    const issues = approvalBlockers({ partnerBlockers: [], compliance: { rbq: "valide", assurance: "valide" }, identity: contractorIdentityOf(c.installer, rec), known, rules, project: { machine: v.content.machine, placement: v.content.placement }, payment: s.contrats.payments[id] ?? null, paymentBlock: null, contractProblems: [] });
    void works;
    return {
      installerId: id,
      company: c.installer.company,
      city: c.installer.base?.city ?? "",
      eligible: c.eligible,
      score: c.score,
      reasons: c.reasons,
      failures: c.failures,
      availability: availabilityFor(id, period, { slots: portal.slots, availability: reseau.onboarding[id]?.availability, jobs: s.gestion.jobs, today }),
      approvalIssues: issues,
      pendingOffer: c.pendingOffer,
    };
  };
  const rows = sortByAvailability(match.ranked.map(row), (r) => r.availability.kind);
  return { period, periodText: whenFr(v.content.schedule), rows, nearMisses: match.nearMisses.map(row), consent: Boolean(d?.consent || v.jumelage), offerJobId: d?.offer?.jobId ?? null };
}

/**
 * « Offrir aux installateurs admissibles » : offre ANONYMISÉE par le moteur d'offres existant ; le premier admissible qui
 * accepte obtient la priorité conditionnelle, puis approuve le contrat par le lien de son offre. Seulement aux disponibles
 * (ou aux disponibilités inconnues) quand une période est fixée, et à ceux qui pourraient approuver.
 */
export async function offerToEligible(input: { quoteId: string; by: string; installerIds?: string[] | null; auto?: boolean; consentNote?: string | null }, o: Opts = {}): Promise<Result<{ jobId: string; sent: number; errors: string[]; skipped: string[] }>> {
  const now = o.now ?? new Date();
  const view = await findInstallers(input.quoteId, now);
  if (!view) return fail("Envoyez d’abord la soumission au client.");
  const s = await snap();
  const q = findQuote(s, input.quoteId)!;
  const v = activeVersion(q)!;
  const note = (input.consentNote ?? "").trim();
  if (!view.consent && note.length < 3) return fail("Consentement au transfert du dossier : le client doit aller de l’avant (case 3.1), ou notez comment il a consenti.", "consentement");
  const candidates = view.rows.filter((r) => r.eligible && !r.approvalIssues.length && offerable(r.availability.kind, view.period));
  const skipped = view.rows.filter((r) => !candidates.includes(r)).map((r) => `${r.company} : ${r.approvalIssues[0] ?? r.availability.detail}`);
  const wanted = input.installerIds?.length ? candidates.filter((r) => input.installerIds!.includes(r.installerId)) : candidates.slice(0, s.contrats.settings.autoOfferCount);
  if (!wanted.length) return fail("Aucun installateur admissible et disponible à qui offrir ce projet.");
  const d0 = dossierOf(s.contrats, q.id);
  let jobId = d0?.offer && offerOpen(d0, v.id, s.gestion.jobs) ? d0.offer.jobId : null;
  if (!jobId) {
    jobId = await mutateGestion((g) => {
      const job = newJobObject(q, v, g.jobs, input.by, now, null);
      g.jobs.push(job);
      return { result: job.id, changed: true };
    });
  }
  const { sendOffers } = await import("@/lib/gestion/service");
  const r = await sendOffers(jobId, wanted.map((x) => x.installerId), s.contrats.settings.offerHours, input.by, base(o), now);
  const at = now.toISOString();
  await mutateContrats((data) => {
    const d = ensureDossier(data, q, input.by, now);
    if (!d.consent) d.consent = v.jumelage ? { source: "client", at: v.jumelage.at, v: v.v } : { source: "proprietaire", at, by: input.by, note: note.slice(0, 300) };
    d.offer = { jobId: jobId!, versionId: v.id, at, by: input.by, installerIds: wanted.map((x) => x.installerId), auto: Boolean(input.auto) };
    d.jobId = jobId;
    logDossier(d, { at, by: input.by, type: "offre", detail: `Offre anonymisée à ${r.sent} installateur(s)${input.auto ? " (automatique)" : ""}` });
    return { result: undefined, changed: true };
  });
  return { ok: true, jobId, sent: r.sent, errors: r.errors, skipped };
}

/* ---------------- Page de l'installateur (/approbation/[jeton]) ---------------- */

interface Access {
  dossier: Dossier;
  proposal: Proposal | null;
  installerId: string;
  versionId: string;
  via: "direct" | "offre";
}

function resolveAccess(c: ContratsData, g: GestionData, token: string): Access | null {
  if (typeof token !== "string" || !LINK_TOKEN_RE.test(token)) return null;
  const h = hashToken(token);
  for (const d of c.dossiers) for (const p of d.proposals) if (p.tokenHashes.includes(h)) return { dossier: d, proposal: p, installerId: p.installerId, versionId: p.versionId, via: p.via };
  for (const d of c.dossiers) {
    if (!d.offer) continue;
    const job = g.jobs.find((j) => j.id === d.offer!.jobId);
    const offer = job?.offers.find((x) => x.tokenHash === h);
    if (!job || !offer || offer.response !== "accepte" || job.assignedInstallerId !== offer.installerId) continue;
    const p = [...d.proposals].reverse().find((x) => x.via === "offre" && x.installerId === offer.installerId && x.versionId === d.offer!.versionId) ?? null;
    return { dossier: d, proposal: p, installerId: offer.installerId, versionId: d.offer.versionId, via: "offre" };
  }
  return null;
}

/** Vrai si ce jeton d'offre acceptée mène à un contrat à approuver (lien affiché sur /job/[jeton]). */
export async function approvalForOfferToken(token: string): Promise<boolean> {
  const [c, g] = await Promise.all([readContrats(), readGestion()]);
  return Boolean(resolveAccess(c, g, token));
}

export interface AvenantView {
  id: string;
  number: number;
  status: Avenant["status"];
  reason: string;
  added: string;
  removed: string;
  lines: Avenant["content"]["lines"];
  priceBeforeTaxCents: number;
  tpsCents: number;
  tvqCents: number;
  deltaTotalCents: number;
  newTotalCents: number;
  scheduleEffect: string;
  contentSha256: string;
}

const avenantView = (a: Avenant): AvenantView => ({ id: a.id, number: a.content.number, status: a.status, reason: a.content.reason, added: a.content.added, removed: a.content.removed, lines: a.content.lines, priceBeforeTaxCents: a.content.priceBeforeTaxCents, tpsCents: a.content.tpsCents, tvqCents: a.content.tvqCents, deltaTotalCents: a.content.deltaTotalCents, newTotalCents: a.content.newTotalCents, scheduleEffect: a.content.scheduleEffect, contentSha256: a.contentSha256 });

export type ApprovalView =
  | { state: "invalide" }
  | {
      state: "ok";
      company: string;
      contactName: string;
      quoteNumber: string;
      who: string;
      city: string;
      status: Proposal["status"];
      /** La version proposée a été remplacée par une plus récente. */
      replaced: boolean;
      html: string;
      contentSha256: string;
      totalCents: number;
      blockers: string[];
      when: string;
      dateStatus: ContractDoc["dateStatus"];
      schedule: QuoteVersion["content"]["schedule"];
      approval: { at: string; name: string; title: string; dateChoice: DateChoice } | null;
      contractStatus: SentContract["status"] | null;
      messages: Proposal["messages"];
      avenants: AvenantView[];
    };

export async function approvalView(token: string, now = new Date()): Promise<ApprovalView> {
  const s = await snap();
  const a = resolveAccess(s.contrats, s.gestion, token);
  if (!a) return { state: "invalide" };
  const q = findQuote(s, a.dossier.quoteId);
  const v = q?.versions.find((x) => x.id === a.versionId);
  const inst = s.gestion.installers.find((i) => i.id === a.installerId);
  if (!q || !v || !inst) return { state: "invalide" };
  const approved = a.proposal?.approval ?? null;
  const built = approved ? null : buildFor(s, q, v, a.installerId, null, now);
  const doc = approved?.doc ?? built?.doc;
  if (!doc) return { state: "invalide" };
  const totals = contractTotals(doc, doc.selection, todayIn(now));
  const contract = a.dossier.contracts.filter((c) => c.proposalId === a.proposal?.id).pop() ?? null;
  const avenants = contract && (contract.status === "signe") ? a.dossier.avenants.filter((x) => x.content.contractNumber === contract.doc.number).map(avenantView) : [];
  return {
    state: "ok",
    company: inst.company,
    contactName: inst.contactName,
    quoteNumber: q.number,
    who: whoOf(v),
    city: cityOf(v),
    status: a.proposal?.status ?? "en-attente",
    replaced: v.status === "remplacee",
    html: renderContractBody({ doc, client: doc.client, site: doc.site, selection: doc.selection, totals, signature: null }),
    contentSha256: contractSha256(doc),
    totalCents: totals.totalCents,
    blockers: approved ? [] : (built?.blockers ?? []),
    when: whenFr(doc.project.schedule),
    dateStatus: doc.dateStatus,
    schedule: doc.project.schedule,
    approval: approved ? { at: approved.at, name: approved.name, title: approved.title, dateChoice: approved.dateChoice } : null,
    contractStatus: contract?.status ?? null,
    messages: a.proposal?.messages ?? [],
    avenants,
  };
}

export async function markApprovalOpened(token: string, now = new Date()): Promise<void> {
  const at = now.toISOString();
  await mutateContrats((c) => {
    if (!LINK_TOKEN_RE.test(token)) return { result: undefined, changed: false };
    const h = hashToken(token);
    for (const d of c.dossiers)
      for (const p of d.proposals)
        if (p.tokenHashes.includes(h)) {
          p.views = { count: p.views.count + 1, firstAt: p.views.firstAt ?? at, lastAt: at };
          return { result: undefined, changed: true };
        }
    return { result: undefined, changed: false };
  });
}

export interface ApproveInput {
  name: string;
  title: string;
  authorized: boolean;
  dateChoice: DateChoice | null;
  postedSha256: string;
  ip: string;
  userAgent: string;
}

/**
 * « J'accepte la job et j'approuve le contrat » : blocages, date confirmée ou proposée (obligatoire), preuve (nom, titre,
 * case d'autorisation, horodatage, IP, navigateur, SHA-256 du contenu exact). Job attribué, contrat présenté au client,
 * avis « prêt à signer ».
 */
export async function approveAsInstaller(token: string, input: ApproveInput, o: Opts = {}): Promise<Result<{ contractId: string; blockers?: string[] }>> {
  const now = o.now ?? new Date();
  const s = await snap();
  const a = resolveAccess(s.contrats, s.gestion, token);
  if (!a) return fail(APPROVE_MSG.invalide, "invalide");
  if (a.proposal && a.proposal.status !== "en-attente") return fail(APPROVE_MSG.statut, "statut");
  const q = findQuote(s, a.dossier.quoteId);
  const v = q?.versions.find((x) => x.id === a.versionId);
  if (!q || !v || !(v.status === "envoyee" || v.status === "ouverte")) return fail(APPROVE_MSG.statut, "statut");
  const err = approvalInputError(input, todayIn(now));
  if (err) return fail(APPROVE_MSG[err] ?? err, err);
  const baseBuilt = buildFor(s, q, v, a.installerId, null, now);
  if (!baseBuilt) return fail(APPROVE_MSG.invalide, "invalide");
  if (contractSha256(baseBuilt.doc) !== input.postedSha256) return fail(APPROVE_MSG.change, "change");
  const final = buildFor(s, q, v, a.installerId, input.dateChoice!, now)!;
  if (final.blockers.length) return { ok: false, error: `${APPROVE_MSG.bloque} ${final.blockers.join(" ; ")}`, code: "bloque" };
  const at = now.toISOString();
  const name = normalizeTyped(input.name);
  const contentSha256 = contractSha256(final.doc);
  const r = await mutateContrats<Result<{ contractId: string; dossierJob: string | null }>>((data) => {
    const d = ensureDossier(data, q, `installateur:${a.installerId}`, now);
    let p = a.proposal ? d.proposals.find((x) => x.id === a.proposal!.id) : undefined;
    if (a.proposal && (!p || p.status !== "en-attente")) return { result: fail(APPROVE_MSG.statut, "statut"), changed: false };
    if (!p) {
      p = { id: newProposalId(), installerId: a.installerId, company: final.installer.company, via: "offre", jobId: d.offer?.jobId ?? null, versionId: v.id, v: v.v, tokenHashes: [], createdAt: at, createdBy: `installateur:${a.installerId}`, status: "en-attente", messages: [], approval: null, sends: [], views: { count: 1, firstAt: at, lastAt: at } };
      d.proposals.push(p);
    }
    p.status = "approuvee";
    p.approval = { at, name, title: input.title.trim().slice(0, 80), authorized: true, ip: input.ip.slice(0, 64), userAgent: input.userAgent.slice(0, 400), contentSha256, doc: final.doc, dateChoice: input.dateChoice! };
    for (const other of d.proposals) if (other !== p && other.status === "en-attente" && other.versionId === v.id) other.status = "retiree";
    for (const c of d.contracts) if (c.status === "a-signer") c.status = "remplace";
    const contract: SentContract = { id: newContractId(), proposalId: p.id, installerId: a.installerId, versionId: v.id, doc: final.doc, status: "a-signer", approvedAt: at, notices: [], signature: null, refusal: null, cancellation: null, copies: null };
    d.contracts.push(contract);
    logDossier(d, { at, by: `installateur:${a.installerId}`, type: "approbation", detail: `${final.installer.company} approuve le contrat ${final.doc.number} (${input.dateChoice!.kind === "confirme" ? "date confirmée" : "nouvelle date proposée"}) · ${contentSha256.slice(0, 12)}…` });
    return { result: { ok: true, contractId: contract.id, dossierJob: d.jobId }, changed: true };
  });
  if (!r.ok) return r;
  const jobId = await ensureAssignedJob(q, v, r.dossierJob, a.installerId, `installateur:${a.installerId}`, now);
  await logSend(q.id, (d) => {
    d.jobId = jobId;
  });
  // Le document du client devient le contrat : avis « prêt à signer ».
  const c = v.content.client;
  const msg = readyToSignMessage({ firstName: c.firstName, installer: final.doc.installer.legalName, link: clientDocLink(base(o), v.token), number: final.doc.number, changes: final.doc.changes.length, dateProposed: final.doc.dateStatus === "proposee" });
  const [email, sms] = await Promise.all([ch(o).email(c.email, msg.mail, "contrat : prêt à signer"), ch(o).sms(c.phone, msg.sms, "contrat : prêt à signer")]);
  await ch(o).owner(ownerMessage({ title: `${final.installer.company} approuve le contrat de ${whoOf(v)}`, lead: "Le contrat final, au nom de l’installateur, est présenté au client pour signature.", rows: [["Contrat", final.doc.number], ["Date", `${whenFr(final.doc.project.schedule)} (${final.doc.dateStatus === "proposee" ? "nouvelle date proposée" : "confirmée"})`]], link: toolLink(base(o), q.id) }), "contrat : approuvé");
  await logSend(q.id, (d) => d.contracts.find((x) => x.id === r.contractId)?.notices.push({ at, by: "système", email, sms }));
  return { ok: true, contractId: r.contractId };
}

const APPROVE_MSG: Record<string, string> = {
  invalide: "Ce lien n’est pas valide.",
  statut: "Cette proposition n’attend plus votre réponse.",
  change: "Le contrat a changé depuis l’ouverture de la page : relisez-le, puis approuvez de nouveau.",
  bloque: "Approbation impossible :",
  nom: "Écrivez votre prénom et votre nom au complet.",
  titre: "Indiquez votre titre dans l’entreprise.",
  autorise: "Cochez « Je suis autorisé à signer pour l’entreprise ».",
  date: "Choisissez : confirmer la date ou la période du client, ou proposer une autre date.",
  "date-invalide": "La date proposée est invalide ou déjà passée.",
  message: "Écrivez votre message (au moins quelques mots).",
};

/** « Demander un changement » ou « Refuser » : le propriétaire est avisé (tâche automatique) ; le client ne voit rien. */
export async function declineAsInstaller(token: string, kind: "changements" | "refus", text: string, o: Opts = {}): Promise<Result> {
  const now = o.now ?? new Date();
  const s = await snap();
  const a = resolveAccess(s.contrats, s.gestion, token);
  if (!a) return fail(APPROVE_MSG.invalide, "invalide");
  if (a.proposal && a.proposal.status !== "en-attente") return fail(APPROVE_MSG.statut, "statut");
  const clean = text.trim().slice(0, 2000);
  if (kind === "changements" && clean.length < 5) return fail(APPROVE_MSG.message, "message");
  const q = findQuote(s, a.dossier.quoteId);
  const v = q?.versions.find((x) => x.id === a.versionId);
  const inst = s.gestion.installers.find((i) => i.id === a.installerId);
  if (!q || !v || !inst) return fail(APPROVE_MSG.invalide, "invalide");
  const at = now.toISOString();
  await mutateContrats((data) => {
    const d = ensureDossier(data, q, `installateur:${inst.id}`, now);
    let p = a.proposal ? d.proposals.find((x) => x.id === a.proposal!.id) : undefined;
    if (!p) {
      p = { id: newProposalId(), installerId: inst.id, company: inst.company, via: "offre", jobId: d.offer?.jobId ?? null, versionId: v.id, v: v.v, tokenHashes: [], createdAt: at, createdBy: `installateur:${inst.id}`, status: "en-attente", messages: [], approval: null, sends: [], views: { count: 1, firstAt: at, lastAt: at } };
      d.proposals.push(p);
    }
    p.status = kind === "changements" ? "changements" : "refusee";
    p.messages.push({ at, from: "installateur", kind, text: clean });
    logDossier(d, { at, by: `installateur:${inst.id}`, type: kind === "changements" ? "changements" : "refus-installateur", detail: `${inst.company}${clean ? ` : ${clean.slice(0, 200)}` : ""}` });
    return { result: undefined, changed: true };
  });
  if (a.via === "offre") await unassignJob(a.dossier.offer?.jobId ?? null, `installateur:${inst.id}`, kind === "changements" ? "changements demandés au contrat" : "contrat refusé", now);
  await ch(o).owner(ownerMessage({ title: kind === "changements" ? `${inst.company} demande des changements (${whoOf(v)})` : `${inst.company} refuse le projet de ${whoOf(v)}`, lead: kind === "changements" ? "Modifiez la soumission (nouvelle version), puis renvoyez-la, ou choisissez un autre installateur. Le client ne voit rien tant qu’un installateur n’a pas approuvé." : "Choisissez un autre installateur. Le client voit seulement « Nous finalisons le choix de votre entrepreneur ».", rows: clean ? [["Message", clean.slice(0, 400)]] : [], link: toolLink(base(o), q.id) }), "contrat : réponse de l’installateur");
  return { ok: true };
}

/* ---------------- Côté client (/devis/[jeton]) ---------------- */

export interface ClientContract {
  id: string;
  number: string;
  status: SentContract["status"];
  installer: string;
  doc: ContractDoc;
  html: string;
  contentSha256: string;
  selection: string[];
  totalCents: number;
  signedAt: string | null;
  typedName: string | null;
  verified: boolean | null;
}

export interface ClientParcoursView {
  stage: ClientStage;
  contract: ClientContract | null;
  avenants: AvenantView[];
}

/** Étape et contrat d'une version (lecture seule). Aucun contrat n'est montré avant l'approbation de l'installateur. */
export async function clientParcours(token: string, now = new Date()): Promise<ClientParcoursView | null> {
  const [soum, contrats, gestion] = await Promise.all([readSoumissions(), readContrats(), readGestion()]);
  const f = findByToken(soum, token);
  if (!f || !f.version.frozen?.parcours) return null;
  const d = dossierOf(contrats, f.quote.id);
  const stage = stageFor(d, f.version, gestion.jobs);
  const c = activeContract(d);
  if (!c || c.versionId !== f.version.id || (stage !== "contrat" && stage !== "signe")) return { stage, contract: null, avenants: [] };
  const sig = c.signature;
  const selection = sig?.selection ?? c.doc.selection;
  const totals = sig?.totals ?? contractTotals(c.doc, selection, todayIn(now));
  const html = sig ? renderSigned(c.doc, sig) : renderContractBody({ doc: c.doc, client: c.doc.client, site: c.doc.site, selection, totals, signature: null });
  const approval = d!.proposals.find((p) => p.id === c.proposalId)?.approval?.contentSha256 ?? null;
  return {
    stage,
    contract: { id: c.id, number: c.doc.number, status: c.status, installer: c.doc.installer.legalName, doc: c.doc, html, contentSha256: contractSha256(c.doc), selection, totalCents: totals.totalCents, signedAt: sig?.at ?? null, typedName: sig?.typedName ?? null, verified: sig ? verifyContract(c, approval).ok : null },
    avenants: d!.avenants.filter((a) => a.content.contractNumber === c.doc.number && (a.status === "a-signer" || a.status === "signe")).map(avenantView),
  };
}

export interface SignInput {
  typedName: string;
  /** Index des confirmations cochées. */
  confirmations: number[];
  selection: string[];
  client: ClientInfo;
  site: { sameAsBilling: boolean; address: string; city: string; postalCode: string };
  postedSha256: string;
  postedTotalCents: number | null;
  ip: string;
  userAgent: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const s200 = (v: string) => String(v ?? "").trim().slice(0, 200);

/** Signature du contrat final par le client : un seul geste (confirmations cochées, nom tapé, « J'accepte »). */
export async function signContract(token: string, input: SignInput, o: Opts = {}): Promise<Result<{ contractId: string }>> {
  const now = o.now ?? new Date();
  const [soum, gestion] = await Promise.all([readSoumissions(), readGestion()]);
  const f = findByToken(soum, token);
  if (!f || !f.version.frozen?.parcours) return fail("Ce lien n’est pas valide.", "invalide");
  const typed = normalizeTyped(input.typedName);
  if (!typedNameOk(typed)) return fail("Tapez votre prénom et votre nom au complet.", "nom");
  const client: ClientInfo = { firstName: s200(input.client.firstName), lastName: s200(input.client.lastName), email: s200(input.client.email).toLowerCase(), phone: s200(input.client.phone), address: s200(input.client.address), city: s200(input.client.city), postalCode: s200(input.client.postalCode).toUpperCase() };
  const site = { sameAsBilling: input.site.sameAsBilling, address: s200(input.site.address), city: s200(input.site.city), postalCode: s200(input.site.postalCode).toUpperCase() };
  if (!EMAIL_RE.test(client.email)) return fail("Le courriel est invalide.", "courriel");
  if (!client.address || !client.city || !client.postalCode || (!site.sameAsBilling && (!site.address || !site.city || !site.postalCode))) return fail("L’adresse est incomplète.", "adresse");
  const at = now.toISOString();
  const r = await mutateContrats<Result<{ contract: SentContract; dossier: Dossier }>>((data) => {
    const d = dossierOf(data, f.quote.id);
    const stage = stageFor(d, f.version, gestion.jobs);
    const c = activeContract(d);
    if (stage === "signe") return { result: fail("Ce contrat est déjà signé.", "deja"), changed: false };
    if (stage !== "contrat" || !c || c.versionId !== f.version.id || c.status !== "a-signer") return { result: fail("La signature n’est pas disponible : votre entrepreneur doit d’abord approuver le contrat.", "etape"), changed: false };
    const docHash = contractSha256(c.doc);
    if (input.postedSha256 !== docHash) return { result: fail("Le contrat a changé depuis l’ouverture de la page : relisez-le, puis signez de nouveau.", "change"), changed: false };
    const all = c.doc.confirmations.map((_, i) => i);
    if (!all.length || !all.every((i) => input.confirmations.includes(i))) return { result: fail("Cochez les confirmations avant de signer.", "confirmations"), changed: false };
    const selection = cleanSelection(c.doc.project.lines, input.selection);
    const totals = contractTotals(c.doc, selection, todayIn(now));
    if (input.postedTotalCents !== null && input.postedTotalCents !== totals.totalCents) return { result: fail("Le total a changé : vérifiez vos options, puis signez de nouveau.", "total-change"), changed: false };
    const base0 = { at, typedName: typed, ip: input.ip.slice(0, 64), userAgent: input.userAgent.slice(0, 400), confirmations: [...c.doc.confirmations], client, site, selection, totals, approvedSha256: docHash, trousse: c.doc.trousse };
    const rendered = sha256Hex(renderSigned(c.doc, base0));
    const withRendered = { ...base0, renderedSha256: rendered };
    c.signature = { ...withRendered, snapshotSha256: hashOf(signatureSnapshot(c.doc, withRendered)) };
    c.status = "signe";
    d!.consent ??= { source: "client", at, v: f.version.v };
    logDossier(d!, { at, by: "client", type: "signature", detail: `Contrat ${c.doc.number} signé par « ${typed} » : ${moneyFr(totals.totalCents)} · ${rendered.slice(0, 12)}…` });
    return { result: { ok: true, contract: structuredClone(c), dossier: structuredClone(d!) }, changed: true };
  });
  if (!r.ok) return r;
  // Contrat signé = acceptation de la soumission (commission, argent, pipeline, Pipedrive, publicité, portail).
  try {
    const { recordContractAcceptance } = await import("@/lib/soumissions/service");
    const sig = r.contract.signature!;
    await recordContractAcceptance(f.quote.id, f.version.id, { at: sig.at, typedName: sig.typedName, ip: sig.ip, userAgent: sig.userAgent, selection: sig.selection, totals: sig.totals, contractNumber: r.contract.doc.number }, base(o));
  } catch (e) {
    console.error("[contrats] acceptation de la soumission :", e);
  }
  await afterSignature(f.quote, f.version, r.dossier, r.contract, o, now);
  return { ok: true, contractId: r.contract.id };
}

/** Trois copies conservables (client, installateur, propriétaire), rangées dans la fiche client et dans le job ; portail P. */
async function afterSignature(q: Quote, v: QuoteVersion, d: Dossier, c: SentContract, o: Opts, now: Date): Promise<void> {
  const sig = c.signature!;
  const b = base(o);
  const plain = contractPlainText({ doc: c.doc, client: sig.client, site: sig.site, selection: sig.selection, totals: sig.totals, signature: sig });
  const g = await readGestion();
  const inst = g.installers.find((i) => i.id === c.installerId);
  const clientDoc = `${clientDocLink(b, v.token)}/contrat`;
  const ownerDoc = `${b}/gestion/soumissions/${q.id}/contrat`;
  const who = clientName(sig.client);
  const common = { number: c.doc.number, installer: c.doc.installer.legalName, client: who, plain };
  const [client, installer, owner] = await Promise.all([
    ch(o).email(sig.client.email, copyMessage({ ...common, role: "client", firstName: sig.client.firstName, docLink: clientDoc }), "contrat : copie au client"),
    inst ? ch(o).email(c.doc.installer.email || inst.email, copyMessage({ ...common, role: "installateur", firstName: inst.contactName.split(" ")[0], docLink: clientDoc }), "contrat : copie à l’installateur") : Promise.resolve("sans-destinataire"),
    ch(o).owner(copyMessage({ ...common, role: "proprietaire", docLink: ownerDoc }), "contrat : copie au propriétaire"),
  ]);
  const at = now.toISOString();
  await logSend(q.id, (dd) => {
    const x = dd.contracts.find((y) => y.id === c.id);
    if (x) x.copies = { at, client, installer, owner };
  });
  // Rangée dans le job et dans la fiche client (jamais bloquant).
  if (d.jobId) {
    await mutateGestion((gg) => {
      const j = gg.jobs.find((x) => x.id === d.jobId);
      if (!j) return { result: undefined, changed: false };
      j.audit.push({ at, by: "client", action: "contrat signé", detail: `${c.doc.number} · copie : /gestion/soumissions/${q.id}/contrat` });
      j.updatedAt = at;
      return { result: undefined, changed: true };
    }).catch((e) => console.error("[contrats] journal du job :", e));
  }
  try {
    const crm = await import("@/lib/gestion/crm/service");
    const clientId = (await crm.freshIndex(now)).byQuote.get(q.id);
    if (clientId) await crm.addNote(clientId, `Contrat ${c.doc.number} signé avec ${c.doc.installer.legalName} (${moneyFr(sig.totals.totalCents)}). Copie : /gestion/soumissions/${q.id}/contrat`, "note", "système", now);
  } catch (e) {
    console.error("[contrats] note au CRM impossible :", e);
  }
  // Portail P : le client choisit sa date si l'installateur a publié des créneaux libres.
  try {
    const portal = await readPortal();
    const today = todayIn(now);
    const booked = new Set(g.jobs.map((j) => j.slotId).filter(Boolean));
    if (d.jobId && portal.slots.some((sl) => sl.installerId === c.installerId && !sl.removedAt && sl.day >= today && !booked.has(sl.id))) {
      const { sendPortalLink } = await import("@/lib/gestion/portail/service");
      await sendPortalLink(d.jobId, "système", { now, baseUrl: b });
    }
  } catch (e) {
    console.error("[contrats] lien du portail :", e);
  }
}

/** Le client refuse le contrat, ou demande un autre installateur : le propriétaire est avisé (tâche automatique). */
export async function refuseContract(token: string, kind: "refus" | "autre-installateur", reason: string, ctx: { ip: string; userAgent: string }, o: Opts = {}): Promise<Result> {
  const now = o.now ?? new Date();
  const [soum, gestion] = await Promise.all([readSoumissions(), readGestion()]);
  const f = findByToken(soum, token);
  if (!f) return fail("Ce lien n’est pas valide.", "invalide");
  const at = now.toISOString();
  const r = await mutateContrats<Result<{ jobId: string | null; installerId: string }>>((data) => {
    const d = dossierOf(data, f.quote.id);
    const c = activeContract(d);
    if (!c || c.versionId !== f.version.id || c.status !== "a-signer" || stageFor(d, f.version, gestion.jobs) !== "contrat") return { result: fail("Rien à refuser pour l’instant.", "etape"), changed: false };
    c.status = kind === "refus" ? "refuse" : "autre-installateur";
    c.refusal = { at, reason: reason.trim().slice(0, 1000), ip: ctx.ip.slice(0, 64), userAgent: ctx.userAgent.slice(0, 400), kind };
    logDossier(d!, { at, by: "client", type: kind, detail: `${kind === "refus" ? "Contrat refusé" : "Autre installateur demandé"}${reason.trim() ? ` : ${reason.trim().slice(0, 200)}` : ""}` });
    return { result: { ok: true, jobId: d!.jobId, installerId: c.installerId }, changed: true };
  });
  if (!r.ok) return r;
  await unassignJob(r.jobId, "client", kind === "refus" ? "contrat refusé par le client" : "le client demande un autre installateur", now);
  await ch(o).owner(ownerMessage({ title: kind === "refus" ? `${whoOf(f.version)} refuse le contrat` : `${whoOf(f.version)} demande un autre installateur`, lead: kind === "refus" ? "Le client a refusé le contrat final." : "Choisissez un autre installateur : un nouveau contrat lui sera présenté après approbation.", rows: reason.trim() ? [["Raison", reason.trim().slice(0, 400)]] : [], link: toolLink(base(o), f.quote.id) }), "contrat : réponse du client");
  return { ok: true };
}

/** Document conservable (HTML imprimable) pour le client, par son jeton. */
export async function contractDocumentForToken(token: string): Promise<string | null> {
  const [soum, contrats] = await Promise.all([readSoumissions(), readContrats()]);
  const f = findByToken(soum, token);
  if (!f) return null;
  const d = dossierOf(contrats, f.quote.id);
  const c = [...(d?.contracts ?? [])].reverse().find((x) => x.versionId === f.version.id && x.signature);
  return c ? documentHtml(d!, c) : null;
}

/** Document conservable pour /gestion (dernier contrat, signé ou non). */
export async function contractDocumentForQuote(quoteId: string, contractId?: string | null): Promise<string | null> {
  const d = dossierOf(await readContrats(), quoteId);
  const c = contractId ? d?.contracts.find((x) => x.id === contractId) : d ? activeContract(d) ?? d.contracts.at(-1) : null;
  return d && c ? documentHtml(d, c) : null;
}

function documentHtml(d: Dossier, c: SentContract): string {
  const p = d.proposals.find((x) => x.id === c.proposalId);
  const sig = c.signature;
  const selection = sig?.selection ?? c.doc.selection;
  const totals = sig?.totals ?? contractTotals(c.doc, selection, c.approvedAt.slice(0, 10));
  const check = verifyContract(c, p?.approval?.contentSha256 ?? null);
  const proof: ProofView = {
    approval: p?.approval ? { name: p.approval.name, title: p.approval.title, at: p.approval.at, ip: p.approval.ip, userAgent: p.approval.userAgent, contentSha256: p.approval.contentSha256 } : null,
    signature: sig ? { at: sig.at, typedName: sig.typedName, ip: sig.ip, userAgent: sig.userAgent, approvedSha256: sig.approvedSha256, renderedSha256: sig.renderedSha256, snapshotSha256: sig.snapshotSha256 } : null,
    checks: check.checks,
  };
  return renderContractHtml({ doc: c.doc, client: sig?.client ?? c.doc.client, site: sig?.site ?? c.doc.site, selection, totals, signature: sig ? { at: sig.at, typedName: sig.typedName, confirmations: sig.confirmations } : null, proof, trousse: c.doc.trousse });
}

/* ---------------- Changer d'installateur ---------------- */

/**
 * « Changer d'installateur » : le contrat actif est annulé d'un commun accord (raison conservée ; « désistement » compte
 * dans la performance), le job perd son installateur, le client est averti. Aucune commission pour ce contrat.
 * Le nouveau contrat passe par une nouvelle approbation, puis une nouvelle signature.
 */
export async function changeInstaller(input: { quoteId: string; reason: string; cause: "desistement" | "commun-accord"; by: string }, o: Opts = {}): Promise<Result> {
  const now = o.now ?? new Date();
  const reason = input.reason.trim().slice(0, 600);
  if (reason.length < 3) return fail("Indiquez la raison du changement.");
  const soum = await readSoumissions();
  const q = soum.quotes.find((x) => x.id === input.quoteId);
  if (!q) return fail("Soumission introuvable.");
  const at = now.toISOString();
  const r = await mutateContrats<Result<{ contract: SentContract; jobId: string | null }>>((data) => {
    const d = dossierOf(data, q.id);
    const c = activeContract(d);
    if (!d || !c) return { result: fail("Aucun contrat approuvé ou signé à annuler."), changed: false };
    c.status = "annule";
    c.cancellation = { at, by: input.by, reason, cause: input.cause, clientNotice: null };
    for (const a of d.avenants) if (a.content.contractNumber === c.doc.number && (a.status === "a-approuver" || a.status === "a-signer")) a.status = "annule";
    for (const p of d.proposals) if (p.status === "en-attente") p.status = "retiree";
    logDossier(d, { at, by: input.by, type: "changement-installateur", detail: `Contrat ${c.doc.number} annulé d’un commun accord (${input.cause === "desistement" ? "désistement de l’installateur" : "commun accord"}) : ${reason}` });
    return { result: { ok: true, contract: structuredClone(c), jobId: d.jobId }, changed: true };
  });
  if (!r.ok) return r;
  // L'acceptation produite par ce contrat tombe ; la signature du nouveau contrat en créera une nouvelle.
  try {
    const { revokeContractAcceptanceFor } = await import("@/lib/soumissions/service");
    await revokeContractAcceptanceFor(q.id, r.contract.versionId, r.contract.doc.number, now);
  } catch (e) {
    console.error("[contrats] retrait de l'acceptation :", e);
  }
  await unassignJob(r.jobId, input.by, `changement d’installateur : ${reason}`, now);
  const v = q.versions.find((x) => x.id === r.contract.versionId);
  if (v) {
    const m = cancellationMessage({ firstName: v.content.client.firstName, oldInstaller: r.contract.doc.installer.legalName, reason, link: clientDocLink(base(o), v.token) });
    const [email, sms] = await Promise.all([ch(o).email(v.content.client.email, m.mail, "contrat : changement d’installateur"), ch(o).sms(v.content.client.phone, m.sms, "contrat : changement d’installateur")]);
    await logSend(q.id, (d) => {
      const x = d.contracts.find((y) => y.id === r.contract.id);
      if (x?.cancellation) x.cancellation.clientNotice = { at, by: input.by, email, sms };
    });
  }
  return { ok: true };
}

/* ---------------- Avenants ---------------- */

/** Nouveau jeton d'approbation pour l'installateur d'un contrat (avenant préparé par le propriétaire). */
function addInstallerToken(d: Dossier, c: SentContract): string {
  const token = newToken();
  const p = d.proposals.find((x) => x.id === c.proposalId);
  if (p) {
    p.tokenHashes.push(hashToken(token));
    if (p.tokenHashes.length > 10) p.tokenHashes.splice(0, p.tokenHashes.length - 10);
  }
  return token;
}

/**
 * Avenant : préparé par le propriétaire (à approuver par l'installateur), ou par l'installateur depuis sa page de
 * chantier (approuvé à la création). Le client le signe AVANT l'exécution. Aucun extra sans avenant signé.
 */
export async function createAvenant(input: { quoteId: string; draft: AvenantDraft; by: string; installerApproval?: { name: string; title: string; ip: string; userAgent: string } | null }, o: Opts = {}): Promise<Result<{ avenantId: string }>> {
  const now = o.now ?? new Date();
  const [soum, gestion] = await Promise.all([readSoumissions(), readGestion()]);
  const q = soum.quotes.find((x) => x.id === input.quoteId);
  if (!q) return fail("Soumission introuvable.");
  const at = now.toISOString();
  const r = await mutateContrats<Result<{ avenant: Avenant; token: string | null; contract: SentContract }>>((data) => {
    const d = dossierOf(data, q.id);
    const c = activeContract(d);
    const job = d?.jobId ? gestion.jobs.find((j) => j.id === d.jobId) : undefined;
    const problems = avenantProblems(c, job?.status ?? null, input.draft);
    if (problems.length || !d || !c) return { result: fail(problems.join(" ")), changed: false };
    if (input.installerApproval && !typedNameOk(normalizeTyped(input.installerApproval.name))) return { result: fail("Écrivez votre prénom et votre nom au complet."), changed: false };
    const number = d.avenants.filter((a) => a.content.contractNumber === c.doc.number).length + 1;
    const lines = input.draft.lines.map((l) => ({ label: l.label.trim().slice(0, 160), amountCents: Math.round(l.amountCents) }));
    const content = { number, contractNumber: c.doc.number, reason: input.draft.reason.trim().slice(0, 600), added: input.draft.added.trim().slice(0, 1000), removed: input.draft.removed.trim().slice(0, 1000), lines, scheduleEffect: input.draft.scheduleEffect.trim().slice(0, 300), ...avenantAmounts(lines, c.doc.taxes, contractTotalCents(c, d.avenants)) };
    const contentSha256 = hashOf(content);
    const ia = input.installerApproval;
    const avenant: Avenant = {
      id: newAvenantId(),
      createdAt: at,
      createdBy: input.by,
      content,
      contentSha256,
      status: ia ? "a-signer" : "a-approuver",
      tokenHashes: [],
      installerApproval: ia ? { at, name: normalizeTyped(ia.name), title: ia.title.trim().slice(0, 80), authorized: true, ip: ia.ip.slice(0, 64), userAgent: ia.userAgent.slice(0, 400), contentSha256 } : null,
      clientSignature: null,
      refusal: null,
    };
    d.avenants.push(avenant);
    const token = ia ? null : addInstallerToken(d, c);
    logDossier(d, { at, by: input.by, type: "avenant", detail: `Avenant n° ${number} (${moneyFr(content.deltaTotalCents)}) ${ia ? "approuvé par l’installateur, à signer par le client" : "à approuver par l’installateur"}` });
    return { result: { ok: true, avenant: structuredClone(avenant), token, contract: structuredClone(c) }, changed: true };
  });
  if (!r.ok) return r;
  const inst = gestion.installers.find((i) => i.id === r.contract.installerId);
  const v = q.versions.find((x) => x.id === r.contract.versionId);
  if (r.token && inst) {
    const m = avenantMessage({ to: "installateur", name: inst.contactName, number: r.avenant.content.number, contractNumber: r.contract.doc.number, deltaTotalCents: r.avenant.content.deltaTotalCents, link: `${base(o)}/approbation/${r.token}#avenants` });
    await Promise.all([ch(o).email(inst.email, m.mail, "avenant : à approuver"), ch(o).sms(inst.phone, m.sms, "avenant : à approuver")]);
  } else if (v) await notifyClientAvenant(v, r.contract, r.avenant, o);
  return { ok: true, avenantId: r.avenant.id };
}

async function notifyClientAvenant(v: QuoteVersion, c: SentContract, a: Avenant, o: Opts): Promise<void> {
  const client = c.signature?.client ?? c.doc.client;
  const m = avenantMessage({ to: "client", name: client.firstName, number: a.content.number, contractNumber: c.doc.number, deltaTotalCents: a.content.deltaTotalCents, link: `${clientDocLink(base(o), v.token)}#avenants` });
  await Promise.all([ch(o).email(client.email, m.mail, "avenant : à signer"), ch(o).sms(client.phone, m.sms, "avenant : à signer")]);
}

/** L'installateur approuve (ou refuse) un avenant préparé par le propriétaire, depuis sa page d'approbation. */
export async function answerAvenantAsInstaller(token: string, avenantId: string, input: { approve: boolean; name: string; title: string; authorized: boolean; postedSha256: string; reason: string; ip: string; userAgent: string }, o: Opts = {}): Promise<Result> {
  const now = o.now ?? new Date();
  const [c0, g, soum] = await Promise.all([readContrats(), readGestion(), readSoumissions()]);
  const a = resolveAccess(c0, g, token);
  if (!a) return fail("Ce lien n’est pas valide.", "invalide");
  if (input.approve) {
    const name = normalizeTyped(input.name);
    if (!typedNameOk(name)) return fail("Écrivez votre prénom et votre nom au complet.", "nom");
    if (input.title.trim().length < 2) return fail("Indiquez votre titre dans l’entreprise.", "titre");
    if (!input.authorized) return fail("Cochez « Je suis autorisé à signer pour l’entreprise ».", "autorise");
  }
  const at = now.toISOString();
  const r = await mutateContrats<Result<{ avenant: Avenant; contract: SentContract }>>((data) => {
    const d = dossierOf(data, a.dossier.quoteId);
    const c = activeContract(d);
    const av = d?.avenants.find((x) => x.id === avenantId);
    if (!d || !c || !av || c.installerId !== a.installerId || av.content.contractNumber !== c.doc.number || av.status !== "a-approuver") return { result: fail("Cet avenant n’attend plus votre réponse.", "statut"), changed: false };
    if (input.approve && input.postedSha256 !== av.contentSha256) return { result: fail("L’avenant a changé : relisez-le.", "change"), changed: false };
    if (input.approve) {
      av.installerApproval = { at, name: normalizeTyped(input.name), title: input.title.trim().slice(0, 80), authorized: true, ip: input.ip.slice(0, 64), userAgent: input.userAgent.slice(0, 400), contentSha256: av.contentSha256 };
      av.status = "a-signer";
    } else {
      av.status = "refuse";
      av.refusal = { at, by: `installateur:${a.installerId}`, reason: input.reason.trim().slice(0, 600) };
    }
    logDossier(d, { at, by: `installateur:${a.installerId}`, type: "avenant", detail: `Avenant n° ${av.content.number} ${input.approve ? "approuvé par l’installateur" : "refusé par l’installateur"}` });
    return { result: { ok: true, avenant: structuredClone(av), contract: structuredClone(c) }, changed: true };
  });
  if (!r.ok) return r;
  const q = soum.quotes.find((x) => x.id === a.dossier.quoteId);
  const v = q?.versions.find((x) => x.id === r.contract.versionId);
  if (input.approve && v) await notifyClientAvenant(v, r.contract, r.avenant, o);
  return { ok: true };
}

/** Le client signe (ou refuse) un avenant, avant l'exécution des travaux qu'il vise. */
export async function answerAvenantAsClient(token: string, avenantId: string, input: { approve: boolean; typedName: string; postedSha256: string; reason: string; ip: string; userAgent: string }, o: Opts = {}): Promise<Result> {
  const now = o.now ?? new Date();
  const soum = await readSoumissions();
  const f = findByToken(soum, token);
  if (!f) return fail("Ce lien n’est pas valide.", "invalide");
  const typed = normalizeTyped(input.typedName);
  if (input.approve && !typedNameOk(typed)) return fail("Tapez votre prénom et votre nom au complet.", "nom");
  const at = now.toISOString();
  const r = await mutateContrats<Result<{ number: number }>>((data) => {
    const d = dossierOf(data, f.quote.id);
    const c = activeContract(d);
    const av = d?.avenants.find((x) => x.id === avenantId);
    if (!d || !c || c.status !== "signe" || c.versionId !== f.version.id || !av || av.content.contractNumber !== c.doc.number || av.status !== "a-signer") return { result: fail("Cet avenant n’attend pas votre signature.", "statut"), changed: false };
    if (input.postedSha256 !== av.contentSha256) return { result: fail("L’avenant a changé : relisez-le.", "change"), changed: false };
    if (input.approve) {
      av.clientSignature = { at, typedName: typed, ip: input.ip.slice(0, 64), userAgent: input.userAgent.slice(0, 400), contentSha256: av.contentSha256 };
      av.status = "signe";
    } else {
      av.status = "refuse";
      av.refusal = { at, by: "client", reason: input.reason.trim().slice(0, 600) };
    }
    logDossier(d, { at, by: "client", type: "avenant", detail: `Avenant n° ${av.content.number} ${input.approve ? `signé par « ${typed} »` : "refusé par le client"}` });
    return { result: { ok: true, number: av.content.number }, changed: true };
  });
  if (!r.ok) return r;
  await ch(o).owner(ownerMessage({ title: `Avenant n° ${r.number} ${input.approve ? "signé" : "refusé"} par ${whoOf(f.version)}`, lead: input.approve ? "Les travaux de l’avenant peuvent être exécutés ; il entre dans la base de la commission." : "Aucun travail de l’avenant ne doit être exécuté ni facturé.", rows: [], link: toolLink(base(o), f.quote.id) }), "avenant : réponse du client");
  return { ok: true };
}

/** Avenants signés et contrat du job, pour la page de chantier (création par l'installateur). */
export async function contractForJob(jobId: string): Promise<{ dossier: Dossier; contract: SentContract; quoteId: string } | null> {
  const c = await readContrats();
  const d = c.dossiers.find((x) => x.jobId === jobId);
  const a = activeContract(d);
  return d && a ? { dossier: d, contract: a, quoteId: d.quoteId } : null;
}

/* ---------------- Commission (volet B) ---------------- */

/** Contrat signé du job : base de commission (prix net final avec avenants signés, sans taxes ni LogisVert). Contrat annulé : rien. */
export async function signedContractForJob(jobId: string, installerId: string | null): Promise<{ number: string; quoteId: string; quoteNumber: string; signedAt: string; baseCents: number } | null> {
  const c = await readContrats();
  const d = c.dossiers.find((x) => x.jobId === jobId);
  const a = activeContract(d);
  if (!d || !a || a.status !== "signe" || !a.signature || (installerId && a.installerId !== installerId)) return null;
  return { number: a.doc.number, quoteId: d.quoteId, quoteNumber: d.quoteNumber, signedAt: a.signature.at, baseCents: contractNetBaseCents(a, d.avenants) };
}

/* ---------------- Vue de /gestion ---------------- */

export interface ParcoursStep {
  label: string;
  at: string | null;
  done: boolean;
  detail?: string;
}

export interface ParcoursView {
  quoteId: string;
  version: { v: number; id: string; status: QuoteVersion["status"]; sentAt: string | null; token: string } | null;
  parcours: "trousse" | "ancien" | "brouillon";
  stage: ClientStage | null;
  steps: ParcoursStep[];
  dossier: Dossier | null;
  active: SentContract | null;
  verification: { ok: boolean; checks: Array<{ label: string; ok: boolean }> } | null;
  jumelageAt: string | null;
  settings: ContratsSettings;
}

export async function parcoursView(quoteId: string, now = new Date()): Promise<ParcoursView | null> {
  const [soum, contrats, gestion] = await Promise.all([readSoumissions(), readContrats(), readGestion()]);
  const q = soum.quotes.find((x) => x.id === quoteId);
  if (!q) return null;
  const d = dossierOf(contrats, q.id) ?? null;
  const v = latestSent(q);
  const active = activeContract(d);
  const parcours = !v ? "brouillon" : v.frozen?.parcours ? "trousse" : "ancien";
  const stage = v && parcours === "trousse" ? stageFor(d ?? undefined, v, gestion.jobs) : null;
  const found = d?.proposals.filter((p) => !v || p.versionId === v.id).at(-1);
  const job = d?.jobId ? gestion.jobs.find((j) => j.id === d.jobId) : undefined;
  const approved = active?.approvedAt ?? null;
  const steps: ParcoursStep[] = v
    ? [
        { label: "Envoyée", at: v.sentAt, done: true },
        { label: "Le client va de l’avant", at: v.jumelage?.at ?? null, done: Boolean(v.jumelage) },
        { label: "Installateur trouvé", at: found?.createdAt ?? (job?.assignedInstallerId ? job.updatedAt : null), done: Boolean(found || job?.assignedInstallerId), detail: found ? `${found.company} · ${found.status === "en-attente" ? "en attente de l’installateur" : found.status}` : undefined },
        { label: "Approuvée, envoyée au client", at: approved, done: Boolean(active) },
        { label: "Signée par le client", at: active?.signature?.at ?? null, done: active?.status === "signe" },
      ]
    : [];
  const p = active ? d?.proposals.find((x) => x.id === active.proposalId) : undefined;
  return {
    quoteId,
    version: v ? { v: v.v, id: v.id, status: v.status, sentAt: v.sentAt, token: v.token } : null,
    parcours,
    stage,
    steps,
    dossier: d,
    active,
    verification: active ? verifyContract(active, p?.approval?.contentSha256 ?? null) : null,
    jumelageAt: v?.jumelage?.at ?? null,
    settings: contrats.settings,
  };
}

/* ---------------- Réglages ---------------- */

export async function saveContratsSettings(patch: Partial<Pick<ContratsSettings, "autoOffer" | "autoOfferCount" | "offerHours">>, by: string, now = new Date()): Promise<ContratsSettings> {
  return mutateContrats((c) => {
    c.settings = { ...c.settings, ...patch, updatedAt: now.toISOString(), updatedBy: by };
    return { result: c.settings, changed: true };
  });
}

export async function readRbqRules(): Promise<RbqRule[]> {
  return rulesOf(await readContrats());
}

export async function saveRbqRules(rules: unknown, by: string, now = new Date()): Promise<RbqRule[]> {
  const clean = normalizeRules(rules).map((r) => ({ ...r, updatedAt: now.toISOString(), updatedBy: by }));
  return mutateContrats((c) => {
    c.rbqRules = clean;
    return { result: clean, changed: true };
  });
}

export async function savePaymentProfile(installerId: string, profile: PaymentProfile, by: string, now = new Date()): Promise<PaymentProfile> {
  const p = normalizePaymentProfile({ ...profile, updatedAt: now.toISOString(), updatedBy: by });
  return mutateContrats((c) => {
    c.payments[installerId] = p;
    return { result: p, changed: true };
  });
}

export async function savePartnerRbq(installerId: string, codes: string, note: string, by: string, now = new Date()): Promise<string[]> {
  const list = cleanCodes(codes);
  return mutateContrats((c) => {
    c.partnerRbq[installerId] = { codes: list, note: note.trim().slice(0, 300), updatedAt: now.toISOString(), updatedBy: by };
    return { result: list, changed: true };
  });
}

export async function partnerContractSettings(installerId: string): Promise<{ payment: PaymentProfile | null; rbq: { codes: string[]; note: string; updatedAt: string } | null }> {
  const c = await readContrats();
  const r = c.partnerRbq[installerId];
  return { payment: c.payments[installerId] ?? null, rbq: r ? { codes: r.codes, note: r.note, updatedAt: r.updatedAt } : null };
}

/** Préalables de tout envoi : trousse importée, identité de la plateforme complète, avis 3.1 sans champ entre crochets vide. */
export async function readinessProblems(): Promise<string[]> {
  const [t, p] = await Promise.all([readTrousse(), readPlatformIdentity()]);
  const { buildNotice } = await import("./rendu");
  return buildNotice(t, p).problems;
}

/** Page de chantier (/chantier/[jeton]) : contrat signé du job de ce jeton, pour préparer un avenant. */
export async function fieldContract(token: string): Promise<{ quoteId: string; installerId: string; installerName: string; contractNumber: string; totalCents: number; jobStatus: string; avenants: AvenantView[] } | null> {
  const [{ resolveIn }, { readTerrain }] = await Promise.all([import("@/lib/gestion/terrain/access"), import("@/lib/gestion/terrain/store")]);
  const [g, t, c] = await Promise.all([readGestion(), readTerrain(), readContrats()]);
  const r = resolveIn(g, t, token);
  if (!r.ok) return null;
  const d = c.dossiers.find((x) => x.jobId === r.access.job.id);
  const a = activeContract(d);
  if (!d || !a || a.status !== "signe" || a.installerId !== r.access.installer.id) return null;
  return { quoteId: d.quoteId, installerId: a.installerId, installerName: r.access.installer.company, contractNumber: a.doc.number, totalCents: contractTotalCents(a, d.avenants), jobStatus: r.access.job.status, avenants: d.avenants.filter((x) => x.content.contractNumber === a.doc.number).map(avenantView) };
}

export type { SendLog };
