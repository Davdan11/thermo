/* ==================================================================
   Opérations du créateur de soumissions : lectures, écritures sous
   verrou, puis envois (courriel, texto, Pipedrive), jamais sous verrou,
   et enfin la trace de leur résultat.
   AUCUNE vérification d'accès ici : chaque page, Server Action et
   gestionnaire de route de l'outil passe d'abord par
   @/lib/gestion/auth/dal ; les routes du client (/devis/[jeton]) sont
   autorisées par leur jeton seulement.
   ================================================================== */

import { randomBytes } from "node:crypto";
// Conformité C1 : avis de jumelage (trousse 3.1), proposition à l'installateur (parcours A), « aller de l'avant ».
import { onJumelage, proposeToInstaller, type ContratChannels } from "@/lib/contrats/service";
import { acceptanceFromContract, revokeContractAcceptance, type ContractAcceptanceInput } from "./quote"; // Conformité C1 : contrat signé = acceptation
import { buildNotice } from "@/lib/contrats/rendu";
import { readPlatformIdentity } from "@/lib/plateforme/identite";
import { readTrousse } from "@/lib/plateforme/trousse";
import { CONTRACTOR_GROUP } from "./checklist";
import { TAXES } from "./config";
import { todayIn } from "./dates";
import { acceptedClientEmail, ownerEventEmail, quoteSentEmail, quoteSms } from "./emails";
import { sendBlockers, type CheckItem } from "./checklist";
import { resolveMachine } from "./catalog";
import { loadContractor } from "./contractors";
import { rememberQuote } from "./memory-store"; // Chantier D : mémoire des derniers choix
import { money } from "./money";
import { emailOwners, emailTo, smsTo } from "./notify";
import { readPhotoFile } from "./photos";
import { syncEvent, syncSent, type SyncOutcome } from "./pipedrive-sync";
import {
  acceptVersion,
  addQuestion,
  buildDocument,
  canRespond,
  clone,
  createQuote,
  currentVersion,
  draftOf,
  duplicateQuote,
  effectiveStatus,
  freezeForSend,
  latestSent,
  NO_DIRECT_ACCEPT,
  QuoteError,
  QUOTE_ID_RE,
  recordView,
  refuseVersion,
  requestJumelage,
  reviseQuote,
  updateDraft,
} from "./quote";
import { appendView, mutateSettings, mutateSoumissions, readSettings, readSoumissions, readViews, type ViewEntry } from "./store";
import { TEMPLATE_ID_RE, TEMPLATE_LIMIT, templateContentOf, templateSummary } from "./templates";
import { findByToken } from "./tokens";
import { computeTotals, defaultSelection, logisvertModeFor, withLogisvertMode, type TaxRates } from "./totals";
import type { ChannelStatus, EffectiveStatus, PhotoMeta, PipedriveLogEntry, Quote, QuoteContent, QuoteDocument, QuoteTemplate, QuoteVersion, Settings, SoumissionsData } from "./types";
import type { PricesInput, QuoteInput, SettingsInput, TemplateInput } from "./validate";

export const CURRENT_RATES: TaxRates = { tpsPer100k: TAXES.tps.ratePer100k, tvqPer100k: TAXES.tvq.ratePer100k };
export const ratesOf = (v: QuoteVersion): TaxRates => v.frozen?.taxes ?? CURRENT_RATES;

const toolLink = (base: string, id: string) => `${base}/gestion/soumissions/${id}`;
export const clientLink = (base: string, token: string) => `${base}/devis/${token}`;
const findQuote = (data: SoumissionsData, id: string) => (QUOTE_ID_RE.test(id) ? data.quotes.find((q) => q.id === id) : undefined);

function logPipedrive(q: Quote, o: SyncOutcome): void {
  q.pipedrive.log.push(o.entry);
  if (q.pipedrive.log.length > 100) q.pipedrive.log.splice(0, q.pipedrive.log.length - 100);
  if (o.personId) q.pipedrive.personId = o.personId;
  if (o.dealId) q.pipedrive.dealId = o.dealId;
}

/* ---------------- Lectures (outil) ---------------- */

export interface ToolRow {
  id: string;
  number: string;
  client: string;
  city: string;
  v: number;
  kind: QuoteVersion["kind"];
  status: EffectiveStatus;
  hasDraft: boolean;
  totalCents: number;
  sentAt: string | null;
  views: QuoteVersion["views"];
  acceptedAt: string | null;
  refusedAt: string | null;
  questions: number;
  machine: string;
  updatedAt: string;
  pipedriveError: boolean;
}

export async function listQuotes(now = new Date()): Promise<ToolRow[]> {
  const data = await readSoumissions();
  const today = todayIn(now);
  return data.quotes
    .map((q) => {
      const cur = currentVersion(q);
      const shown = latestSent(q) ?? cur;
      const c = shown.content;
      const total = shown.acceptance ? shown.acceptance.totalCents : computeTotals(c, defaultSelection(c.lines), ratesOf(shown), today).totalCents;
      const last = q.pipedrive.log[q.pipedrive.log.length - 1];
      return {
        id: q.id,
        number: q.number,
        client: `${c.client.firstName} ${c.client.lastName}`.trim() || c.client.email || "Client à préciser",
        city: (c.site.sameAsBilling ? c.client.city : c.site.city) || c.client.city,
        v: shown.v,
        kind: shown.kind,
        status: effectiveStatus(shown, today),
        hasDraft: Boolean(draftOf(q)) && shown.status !== "brouillon",
        totalCents: total,
        sentAt: shown.sentAt,
        views: shown.views,
        acceptedAt: shown.acceptance?.at ?? null,
        refusedAt: shown.refusal?.at ?? null,
        questions: q.versions.reduce((n, v) => n + v.questions.length, 0),
        machine: c.machine ? `${c.machine.brand} ${c.machine.name}` : "",
        updatedAt: q.versions.reduce((a, v) => (v.updatedAt > a ? v.updatedAt : a), q.createdAt),
        pipedriveError: Boolean(last && !last.ok),
      } satisfies ToolRow;
    })
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function loadQuote(id: string): Promise<{ quote: Quote; settings: Settings; photos: PhotoMeta[]; views: ViewEntry[] } | null> {
  const [data, settings] = await Promise.all([readSoumissions(), readSettings()]);
  const quote = findQuote(data, id);
  if (!quote) return null;
  return { quote, settings, photos: data.photos, views: await readViews(quote.id) };
}

export async function loadPhotoMetas(): Promise<PhotoMeta[]> {
  return (await readSoumissions()).photos;
}

/* ---------------- Écritures (outil) ---------------- */

export type SaveResult = { ok: true; id: string } | { ok: false; error: string };

function scrubPhotos(content: QuoteContent, known: Set<string>): void {
  const keep = (ids: string[]) => [...new Set(ids.filter((id) => known.has(id)))];
  content.placement.outdoor.photos = keep(content.placement.outdoor.photos);
  for (const u of content.placement.indoor) u.photos = keep(u.photos);
}

function claimPhotos(data: SoumissionsData, quoteId: string, content: QuoteContent): void {
  const ids = new Set([...content.placement.outdoor.photos, ...content.placement.indoor.flatMap((u) => u.photos)]);
  for (const p of data.photos) if (ids.has(p.id) && !p.quoteId) p.quoteId = quoteId;
}

export async function saveQuote(id: string | null, input: QuoteInput, by: string, now = new Date()): Promise<SaveResult> {
  let machine: QuoteContent["machine"] = null;
  if (input.content.machine) {
    const r = await resolveMachine(input.content.machine);
    if (!r.ok) return r;
    machine = r.machine;
  }
  // LogisVert : plus de choix de mode ; « client » si le jumelage officiel a un montant, sinon « aucune ». Jamais « cession ».
  const content: QuoteContent = { ...input.content, machine, logisvert: { mode: logisvertModeFor(machine) } };
  const contractorId = input.contractorId ?? null;
  const clientId = input.clientId ?? null;
  try {
    const saved = await mutateSoumissions<SaveResult>((data) => {
      scrubPhotos(content, new Set(data.photos.map((p) => p.id)));
      if (!id) {
        const q = createQuote(data, content, by, now, { internalNotes: input.internalNotes, clientId, contractorId });
        claimPhotos(data, q.id, content);
        return { result: { ok: true, id: q.id }, changed: true };
      }
      const q = findQuote(data, id);
      if (!q) return { result: { ok: false, error: "Soumission introuvable." }, changed: false };
      const draft = draftOf(q);
      if (!draft) return { result: { ok: false, error: "Aucune version en brouillon : créez une nouvelle version pour modifier cette soumission." }, changed: false };
      updateDraft(q, draft, content, now);
      draft.contractorId = contractorId;
      q.clientId = clientId;
      q.internalNotes = input.internalNotes;
      claimPhotos(data, q.id, content);
      return { result: { ok: true, id: q.id }, changed: true };
    });
    // Chantier D : le dernier choix de chaque champ du plan devient la valeur proposée de la prochaine soumission.
    if (saved.ok) await rememberQuote(content, todayIn(now), now);
    return saved;
  } catch (e) {
    if (e instanceof QuoteError) return { ok: false, error: e.message };
    throw e;
  }
}

export async function reviseService(id: string, by: string, now = new Date()): Promise<{ ok: true; v: number } | { ok: false; error: string }> {
  const settings = await readSettings();
  try {
    return await mutateSoumissions<{ ok: true; v: number } | { ok: false; error: string }>((data) => {
      const q = findQuote(data, id);
      if (!q) return { result: { ok: false as const, error: "Soumission introuvable." }, changed: false };
      const from = latestSent(q) ?? currentVersion(q);
      const next = reviseQuote(q, from.v, by, now, settings.defaults.validityDays);
      return { result: { ok: true as const, v: next.v }, changed: true };
    });
  } catch (e) {
    if (e instanceof QuoteError) return { ok: false, error: e.message };
    throw e;
  }
}

/** Copie d'une soumission ; « pour un autre client » : sans coordonnées ni chantier, mêmes machine, plan, prix et entrepreneur. */
export async function duplicateService(id: string, by: string, opts: { forOtherClient?: boolean } = {}, now = new Date()): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const settings = await readSettings();
  return mutateSoumissions<{ ok: true; id: string } | { ok: false; error: string }>((data) => {
    const q = findQuote(data, id);
    if (!q) return { result: { ok: false as const, error: "Soumission introuvable." }, changed: false };
    const copy = duplicateQuote(data, q, currentVersion(q).v, by, now, settings.defaults.validityDays, opts);
    return { result: { ok: true as const, id: copy.id }, changed: true };
  });
}

/** Supprime un brouillon jamais envoyé (la soumission entière si c'est sa seule version). */
export async function deleteDraftService(id: string, by: string, now = new Date()): Promise<{ ok: true; removedQuote: boolean } | { ok: false; error: string }> {
  return mutateSoumissions<{ ok: true; removedQuote: boolean } | { ok: false; error: string }>((data) => {
    const q = findQuote(data, id);
    if (!q) return { result: { ok: false as const, error: "Soumission introuvable." }, changed: false };
    const draft = draftOf(q);
    if (!draft) return { result: { ok: false as const, error: "Aucun brouillon à supprimer." }, changed: false };
    if (q.versions.length === 1) {
      data.quotes = data.quotes.filter((x) => x !== q);
      return { result: { ok: true as const, removedQuote: true }, changed: true };
    }
    q.versions = q.versions.filter((v) => v !== draft);
    q.events.push({ at: now.toISOString(), type: "brouillon-supprime", detail: `Brouillon de la version ${draft.v} supprimé`, by });
    return { result: { ok: true as const, removedQuote: false }, changed: true };
  });
}

/* ---------------- Modèles de soumission ---------------- */

export interface TemplateRow {
  id: string;
  name: string;
  updatedAt: string;
  summary: string;
}

export async function listTemplates(): Promise<TemplateRow[]> {
  const data = await readSoumissions();
  return (data.templates ?? [])
    .map((t) => ({ id: t.id, name: t.name, updatedAt: t.updatedAt, summary: templateSummary(t.content) }))
    .sort((a, b) => a.name.localeCompare(b.name, "fr-CA"));
}

export async function templateById(id: string): Promise<QuoteTemplate | null> {
  if (!TEMPLATE_ID_RE.test(id)) return null;
  return (await readSoumissions()).templates?.find((t) => t.id === id) ?? null;
}

export type TemplateSaveResult = { ok: true; id: string; replaced: boolean } | { ok: false; error: string };

/** « Enregistrer comme modèle » : sans client, chantier, photos ni dates ; un modèle du même nom est remplacé. */
export async function saveTemplateService(input: TemplateInput, by: string, now = new Date()): Promise<TemplateSaveResult> {
  let machine: QuoteContent["machine"] = null;
  if (input.content.machine) {
    const r = await resolveMachine(input.content.machine);
    if (!r.ok) return r;
    machine = r.machine;
  }
  const content = templateContentOf({ ...input.content, machine, logisvert: { mode: logisvertModeFor(machine) } });
  const name = input.name.trim();
  const contractorId = input.contractorId ?? null;
  return mutateSoumissions<TemplateSaveResult>((data) => {
    const list = (data.templates ??= []);
    const at = now.toISOString();
    const same = list.find((t) => t.name.localeCompare(name, "fr-CA", { sensitivity: "base" }) === 0);
    if (same) {
      Object.assign(same, { content, contractorId, updatedAt: at });
      return { result: { ok: true, id: same.id, replaced: true }, changed: true };
    }
    if (list.length >= TEMPLATE_LIMIT) return { result: { ok: false, error: `${TEMPLATE_LIMIT} modèles au plus : supprimez-en un dans les réglages.` }, changed: false };
    const t: QuoteTemplate = { id: `tm_${randomBytes(8).toString("base64url")}`, name, createdAt: at, createdBy: by, updatedAt: at, content, contractorId };
    list.push(t);
    return { result: { ok: true, id: t.id, replaced: false }, changed: true };
  });
}

export async function deleteTemplateService(id: string): Promise<boolean> {
  if (!TEMPLATE_ID_RE.test(id)) return false;
  return mutateSoumissions<boolean>((data) => {
    const before = data.templates?.length ?? 0;
    data.templates = (data.templates ?? []).filter((t) => t.id !== id);
    return { result: data.templates.length < before, changed: data.templates.length < before };
  });
}

export async function linkDealService(id: string, dealId: number | null, by: string, now = new Date()): Promise<boolean> {
  return mutateSoumissions((data) => {
    const q = findQuote(data, id);
    if (!q) return { result: false, changed: false };
    q.pipedrive.dealId = dealId;
    q.events.push({ at: now.toISOString(), type: "pipedrive", detail: dealId ? `Affaire Pipedrive ${dealId} liée à la main` : "Affaire Pipedrive déliée", by });
    return { result: true, changed: true };
  });
}

/* ---------------- Envoi et relance ---------------- */

export type SendResult =
  | { ok: true; email: ChannelStatus; sms: ChannelStatus | null; pipedrive: PipedriveLogEntry; installer?: { email: string; sms: string } | { error: string } }
  | { ok: false; error: string; blockers?: CheckItem[] };

/** Conformité C1 : groupe des textes des réglages ; au parcours de la trousse, le contrat vient de la trousse (3.2), pas d'eux. */
const TEXTS_GROUP = "Textes du contrat";

/**
 * Conformité C1 — « Envoyer » : le client reçoit sa soumission complète avec l'avis de jumelage (3.1), SANS signature
 * possible. Parcours A (installateur choisi) : sa demande d'approbation part EN MÊME TEMPS, si le consentement au
 * transfert du dossier est confirmé (`transferConsent`). Parcours B : aucun installateur ; le client peut aller de l'avant.
 */
export async function sendQuoteService(id: string, by: string, baseUrl: string, opts: { sms: boolean; transferConsent?: string | null; contratChannels?: ContratChannels }, now = new Date()): Promise<SendResult> {
  const settings = await readSettings();
  const today = todayIn(now);
  // Entrepreneur du brouillon : état (licence, assurance, identité) et identité complète, lus hors verrou.
  const pre = findQuote(await readSoumissions(), id);
  const wanted = (pre ? draftOf(pre)?.contractorId : null) ?? null;
  const contractor = await loadContractor(wanted, now);
  // Conformité C1 : trousse importée, identité de la plateforme complète, aucun champ entre crochets vide.
  const [trousse, platform] = await Promise.all([readTrousse(), readPlatformIdentity()]);
  const built = buildNotice(trousse, platform);
  const phase = await mutateSoumissions<{ ok: false; error: string; blockers?: CheckItem[] } | { ok: true; quote: Quote; version: QuoteVersion }>((data) => {
    const q = findQuote(data, id);
    if (!q) return { result: { ok: false, error: "Soumission introuvable." }, changed: false };
    const v = draftOf(q);
    if (!v) return { result: { ok: false, error: "Aucune version en brouillon à envoyer. Pour renvoyer le lien, utilisez « Relancer le client »." }, changed: false };
    if ((v.contractorId ?? null) !== wanted) return { result: { ok: false, error: "La soumission vient d’être modifiée : réessayez l’envoi." }, changed: false };
    // Ancien brouillon « cession » : le mode est recalculé (l'aide n'est jamais déduite du total dû).
    v.content = withLogisvertMode(v.content);
    const blockers = [
      ...sendBlockers(v.content, settings, today, CURRENT_RATES, { id: wanted, status: contractor?.status ?? null }).filter((b) => b.group !== TEXTS_GROUP && (wanted !== null || b.group !== CONTRACTOR_GROUP)),
      ...built.problems.map((label, i): CheckItem => ({ id: `trousse-${i}`, group: "Trousse contractuelle", label, ok: false, severity: "bloquant", href: "/gestion/reglages/identite" })),
    ];
    if (blockers.length) {
      const first = blockers.slice(0, 3).map((b) => (b.hint ? `${b.label} (${b.hint.replace(/\.$/, "")})` : b.label));
      return { result: { ok: false, error: `Envoi bloqué : ${first.join(" ; ")}${blockers.length > 3 ? ` ; et ${blockers.length - 3} autre${blockers.length - 3 > 1 ? "s" : ""}` : ""}.`, blockers }, changed: false };
    }
    // Instantané : l'identité de l'entrepreneur est copiée dans la version ; un changement ultérieur ne la touche plus.
    // Conformité C1 : avis de jumelage figé ; le document n'est jamais acceptable tel quel.
    freezeForSend(q, v, settings, data.photos, now, contractor?.identity ?? null, built.notice);
    q.events.push({ at: now.toISOString(), type: "envoi", detail: `Version ${v.v} envoyée au client`, by });
    return { result: { ok: true, quote: clone(q), version: clone(v) }, changed: true };
  });
  if (!phase.ok) return phase;
  const { quote, version } = phase;
  const doc = buildDocument(quote, version, null, []);
  const totals = computeTotals(doc.content, defaultSelection(doc.content.lines), doc.taxes, today);
  const link = clientLink(baseUrl, version.token);
  const [email, sms, pd] = await Promise.all([
    emailTo(doc.content.client.email, quoteSentEmail({ doc, totals, link, reminder: false }), "soumission : envoi"),
    opts.sms ? smsTo(doc.content.client.phone, quoteSms(doc, link, false)) : Promise.resolve(null),
    syncSent({ doc, totals, link, personId: quote.pipedrive.personId, dealId: quote.pipedrive.dealId, stages: settings.pipedriveStages }),
  ]);
  await mutateSoumissions((data) => {
    const q = findQuote(data, id);
    const v = q?.versions.find((x) => x.id === version.id);
    if (!q || !v) return { result: null, changed: false };
    v.sends.push({ at: now.toISOString(), by, kind: "envoi", email, sms });
    logPipedrive(q, pd);
    return { result: null, changed: true };
  });
  // Conformité C1, parcours A : la demande d'approbation part en même temps vers l'installateur choisi.
  if (wanted) {
    const r = await proposeToInstaller({ quoteId: id, installerId: wanted, by, consentNote: opts.transferConsent ?? null }, { now, baseUrl, ...(opts.contratChannels ? { channels: opts.contratChannels } : {}) });
    return { ok: true, email, sms, pipedrive: pd.entry, installer: r.ok ? { email: r.email, sms: r.sms } : { error: r.error } };
  }
  return { ok: true, email, sms, pipedrive: pd.entry };
}

const MIN_BETWEEN_SENDS_MS = 10 * 60 * 1000;

export async function remindService(id: string, by: string, baseUrl: string, opts: { sms: boolean }, now = new Date()): Promise<SendResult> {
  const [data, settings] = await Promise.all([readSoumissions(), readSettings()]);
  const today = todayIn(now);
  const q = findQuote(data, id);
  if (!q) return { ok: false, error: "Soumission introuvable." };
  const v = latestSent(q);
  if (!v || !canRespond(v, today)) return { ok: false, error: "Rien à relancer : la dernière version est expirée, remplacée, acceptée ou refusée. Créez une nouvelle version au besoin." };
  const last = v.sends[v.sends.length - 1];
  if (last && now.getTime() - Date.parse(last.at) < MIN_BETWEEN_SENDS_MS) return { ok: false, error: "Le lien vient d’être envoyé : attendez quelques minutes avant de relancer." };
  const doc = buildDocument(q, v, null, []);
  const totals = computeTotals(doc.content, defaultSelection(doc.content.lines), doc.taxes, today);
  const link = clientLink(baseUrl, v.token);
  const [email, sms, pd] = await Promise.all([
    emailTo(doc.content.client.email, quoteSentEmail({ doc, totals, link, reminder: true }), "soumission : relance"),
    opts.sms ? smsTo(doc.content.client.phone, quoteSms(doc, link, true)) : Promise.resolve(null),
    syncSent({ doc, totals, link, personId: q.pipedrive.personId, dealId: q.pipedrive.dealId, stages: settings.pipedriveStages, reminder: true }),
  ]);
  await mutateSoumissions((d) => {
    const qq = findQuote(d, id);
    const vv = qq?.versions.find((x) => x.id === v.id);
    if (!qq || !vv) return { result: null, changed: false };
    vv.sends.push({ at: now.toISOString(), by, kind: "relance", email, sms });
    qq.events.push({ at: now.toISOString(), type: "relance", detail: `Relance de la version ${vv.v}`, by });
    logPipedrive(qq, pd);
    return { result: null, changed: true };
  });
  return { ok: true, email, sms, pipedrive: pd.entry };
}

/* ---------------- Côté client (/devis/[jeton]) ---------------- */

export type ClientView =
  | { state: "invalide" }
  | {
      state: "ok";
      status: EffectiveStatus;
      doc: QuoteDocument;
      contentHash: string;
      canRespond: boolean;
      asOf: string;
      selection: string[];
      acceptance: { at: string; typedName: string; snapshotHash: string; contentHash: string; totalCents: number } | null;
      refusal: { at: string } | null;
      questions: number;
      replacedBy: { v: number; token: string } | null;
      /** Conformité C1 : parcours de la trousse et « Je veux aller de l'avant ». */
      quoteId: string;
      versionId: string;
      jumelage: { at: string; selection: string[] } | null;
    };

/** Lecture seule : aucun changement d'état, aucune écriture (les consultations passent par recordClientView, en POST). */
export async function getClientView(token: string, now = new Date()): Promise<ClientView> {
  const data = await readSoumissions();
  const f = findByToken(data, token);
  if (!f || f.version.status === "brouillon") return { state: "invalide" };
  const { quote: q, version: v } = f;
  const today = todayIn(now);
  const doc = buildDocument(q, v, null, []);
  const a = v.acceptance;
  let replacedBy: { v: number; token: string } | null = null;
  if (v.status === "remplacee" && v.replacedBy) {
    const nv = q.versions.find((x) => x.v === v.replacedBy && x.status !== "brouillon");
    if (nv) replacedBy = { v: nv.v, token: nv.token };
  }
  return {
    state: "ok",
    status: effectiveStatus(v, today),
    doc,
    contentHash: a ? a.contentHash : (v.contentHash ?? ""),
    canRespond: canRespond(v, today),
    asOf: a ? todayIn(new Date(a.at)) : today,
    selection: a ? a.snapshot.selection : defaultSelection(doc.content.lines),
    acceptance: a ? { at: a.at, typedName: a.typedName, snapshotHash: a.snapshotHash, contentHash: a.contentHash, totalCents: a.totalCents } : null,
    refusal: v.refusal ? { at: v.refusal.at } : null,
    questions: v.questions.length,
    replacedBy,
    quoteId: q.id,
    versionId: v.id,
    jumelage: v.jumelage ? { at: v.jumelage.at, selection: v.jumelage.selection } : null,
  };
}

/** Consultation d'une version (POST envoyé par la page une fois affichée dans un vrai navigateur). */
export async function recordClientView(token: string, userAgent: string, baseUrl: string, now = new Date()): Promise<{ recorded: boolean; first: boolean }> {
  const r = await mutateSoumissions<null | { first: boolean; quote: Quote; version: QuoteVersion }>((data) => {
    const f = findByToken(data, token);
    if (!f || f.version.status === "brouillon") return { result: null, changed: false };
    const { first } = recordView(f.version, now);
    if (first) f.quote.events.push({ at: now.toISOString(), type: "ouverture", detail: `Version ${f.version.v} ouverte par le client` });
    return { result: { first, quote: clone(f.quote), version: clone(f.version) }, changed: true };
  });
  if (!r) return { recorded: false, first: false };
  await appendView({ at: now.toISOString(), quoteId: r.quote.id, number: r.quote.number, v: r.version.v, versionId: r.version.id, ua: userAgent.slice(0, 160) }).catch((e) => console.error("[soumissions] vue non journalisée :", e));
  if (r.first) {
    const settings = await readSettings();
    const doc = buildDocument(r.quote, r.version, null, []);
    const rows: Array<[string, string]> = [["Version", String(r.version.v)], ["Envoyée le", r.version.sentAt ?? ""]];
    const [, pd] = await Promise.all([
      emailOwners(ownerEventEmail({ event: "ouverte", doc, toolLink: toolLink(baseUrl, r.quote.id), rows }), "soumission : ouverte"),
      syncEvent({ event: "ouverture", doc, dealId: r.quote.pipedrive.dealId, stages: settings.pipedriveStages, rows: [["Ouverte le", now.toISOString()]] }),
    ]);
    await recordPipedrive(r.quote.id, pd);
  }
  return { recorded: true, first: r.first };
}

async function recordPipedrive(quoteId: string, o: SyncOutcome, event?: { type: string; detail: string; at: string }): Promise<void> {
  await mutateSoumissions((data) => {
    const q = findQuote(data, quoteId);
    if (!q) return { result: null, changed: false };
    logPipedrive(q, o);
    if (event) q.events.push(event);
    return { result: null, changed: true };
  });
}

/* Conformité C1 : « jumelage » = « Je veux aller de l'avant » (case 3.1 obligatoire). « accepter » est toujours refusé :
   le client signe le contrat final de l'installateur, après son approbation. */
export type RespondAction = "accepter" | "refuser" | "question" | "jumelage";

export interface RespondInput {
  selection: string[];
  typedName: string;
  termsAccepted: boolean;
  reason: string;
  message: string;
  postedTotalCents: number | null;
  postedHash: string | null;
  ip: string;
  userAgent: string;
  /** Conformité C1 : case 3.1 cochée. */
  jumelageChecked?: boolean;
}

export type RespondResult = { ok: true; state: "acceptee" | "refusee" | "question" | "jumelage" } | { ok: false; code: string; message: string };

/** Conformité C1 — un contrat signé compte comme l'acceptation de la soumission : statut, événement et Pipedrive.
    Les courriels sont déjà partis avec les trois copies du contrat. Idempotent. */
export async function recordContractAcceptance(quoteId: string, versionId: string, input: ContractAcceptanceInput, baseUrl: string): Promise<boolean> {
  const r = await mutateSoumissions<{ quote: Quote; version: QuoteVersion } | null>((data) => {
    const q = data.quotes.find((x) => x.id === quoteId);
    const v = q?.versions.find((x) => x.id === versionId);
    if (!q || !v) return { result: null, changed: false };
    return acceptanceFromContract(q, v, input) ? { result: { quote: clone(q), version: clone(v) }, changed: true } : { result: null, changed: false };
  });
  if (!r) return false;
  const { quote: q, version: v } = r;
  const a = v.acceptance!;
  const settings = await readSettings();
  const doc = buildDocument(q, v, null, []);
  const rows: Array<[string, string]> = [
    ["Contrat signé", input.contractNumber],
    ["Total signé", money(a.totalCents)],
    ["Nom tapé (signature)", a.typedName],
    ["Empreinte SHA-256", a.snapshotHash],
  ];
  const pd = await syncEvent({ event: "acceptation", doc, dealId: q.pipedrive.dealId, stages: settings.pipedriveStages, rows, link: clientLink(baseUrl, v.token), acceptedTotalCents: a.totalCents });
  await recordPipedrive(q.id, pd);
  return true;
}

/** Conformité C1 : retire l'acceptation produite par un contrat annulé (changement d'installateur). Idempotent. */
export async function revokeContractAcceptanceFor(quoteId: string, versionId: string, contractNumber: string, now = new Date()): Promise<boolean> {
  return mutateSoumissions<boolean>((data) => {
    const q = data.quotes.find((x) => x.id === quoteId);
    const v = q?.versions.find((x) => x.id === versionId);
    if (!q || !v) return { result: false, changed: false };
    const done = revokeContractAcceptance(q, v, contractNumber, now.toISOString());
    return { result: done, changed: done };
  });
}

export async function respondToQuote(token: string, action: RespondAction, input: RespondInput, baseUrl: string, now = new Date()): Promise<RespondResult> {
  const r = await mutateSoumissions<{ ok: false; code: string; message: string } | { ok: true; quote: Quote; version: QuoteVersion }>((data) => {
    const f = findByToken(data, token);
    if (!f) return { result: { ok: false, code: "invalide", message: "Ce lien n’est pas valide." }, changed: false };
    const { quote: q, version: v } = f;
    try {
      if (action === "accepter") {
        // Conformité C1 (trousse 1.5, 8.4) : aucune acceptation par le client avant l'approbation d'un installateur identifié.
        return { result: { ok: false, code: "jumelage", message: NO_DIRECT_ACCEPT }, changed: false };
      } else if (action === "jumelage") {
        const j = requestJumelage(q, v, { selection: input.selection, checked: Boolean(input.jumelageChecked), ip: input.ip, userAgent: input.userAgent, postedTotalCents: input.postedTotalCents, postedHash: input.postedHash, now });
        q.events.push({ at: j.at, type: "jumelage", detail: `Version ${v.v} : le client va de l’avant (demande de jumelage, ${money(j.totalCents)}) ; ce n’est pas une acceptation` });
      } else if (action === "refuser") {
        refuseVersion(v, input.reason, input.ip, input.userAgent, now);
        q.events.push({ at: now.toISOString(), type: "refus", detail: `Version ${v.v} refusée${input.reason.trim() ? ` : ${input.reason.trim().slice(0, 200)}` : ""}` });
      } else {
        addQuestion(v, input.message, input.ip, input.userAgent, now);
        q.events.push({ at: now.toISOString(), type: "question", detail: `Question sur la version ${v.v}` });
      }
      return { result: { ok: true, quote: clone(q), version: clone(v) }, changed: true };
    } catch (e) {
      if (e instanceof QuoteError) return { result: { ok: false, code: e.code, message: e.message }, changed: false };
      throw e;
    }
  });
  if (!r.ok) return r;
  const { quote: q, version: v } = r;
  // Conformité C1 : demande de jumelage enregistrée ; consentement, avis au propriétaire, offre automatique si réglée.
  if (action === "jumelage") {
    await onJumelage(q.id, v.id, { now, baseUrl }).catch((e) => console.error("[soumissions] suite du jumelage :", e));
    return { ok: true, state: "jumelage" };
  }
  const settings = await readSettings();
  const doc = buildDocument(q, v, null, []);
  const link = clientLink(baseUrl, v.token);
  const tool = toolLink(baseUrl, q.id);
  const at = new Date().toISOString();

  if (action === "accepter" && v.acceptance) {
    const a = v.acceptance;
    const rows: Array<[string, string]> = [
      ["Total accepté", money(a.totalCents)],
      ["Options choisies", a.selectedOptions.map((o) => o.label).join(", ") || "Aucune"],
      ["Nom tapé (signature)", a.typedName],
      ["Empreinte SHA-256", a.snapshotHash],
    ];
    const [client, , pd] = await Promise.all([
      emailTo(doc.content.client.email, acceptedClientEmail({ acceptance: a, link }), "soumission : confirmation d’acceptation"),
      emailOwners(ownerEventEmail({ event: "acceptee", doc, toolLink: tool, rows }), "soumission : acceptée"),
      syncEvent({ event: "acceptation", doc, dealId: q.pipedrive.dealId, stages: settings.pipedriveStages, rows, link, acceptedTotalCents: a.totalCents }),
    ]);
    await recordPipedrive(q.id, pd, { at, type: "confirmation", detail: `Confirmation au client : ${client === "envoye" ? "envoyée" : client}` });
    return { ok: true, state: "acceptee" };
  }
  if (action === "refuser") {
    const rows: Array<[string, string]> = [["Raison", input.reason.trim() || "Aucune raison donnée"]];
    const [, pd] = await Promise.all([
      emailOwners(ownerEventEmail({ event: "refusee", doc, toolLink: tool, rows }), "soumission : refusée"),
      syncEvent({ event: "refus", doc, dealId: q.pipedrive.dealId, stages: settings.pipedriveStages, rows }),
    ]);
    await recordPipedrive(q.id, pd);
    return { ok: true, state: "refusee" };
  }
  const message = input.message.trim().slice(0, 2000);
  const [, pd] = await Promise.all([
    emailOwners(ownerEventEmail({ event: "question", doc, toolLink: tool, rows: [], message }), "soumission : question"),
    syncEvent({ event: "question", doc, dealId: q.pipedrive.dealId, stages: settings.pipedriveStages, rows: [["Question", message]] }),
  ]);
  await recordPipedrive(q.id, pd);
  return { ok: true, state: "question" };
}

/** Photo d'une version envoyée (client) : seulement si le document de cette version la contient. Lecture seule. */
export async function clientPhoto(token: string, photoId: string): Promise<{ meta: PhotoMeta; data: Buffer } | null> {
  const data = await readSoumissions();
  const f = findByToken(data, token);
  if (!f || f.version.status === "brouillon") return null;
  const doc = buildDocument(f.quote, f.version, null, []);
  const ref = doc.photos[photoId];
  const meta = data.photos.find((p) => p.id === photoId);
  if (!ref || !meta || meta.sha256 !== ref.sha256) return null;
  const buf = await readPhotoFile(meta);
  return buf ? { meta, data: buf } : null;
}

export async function adminPhoto(photoId: string): Promise<{ meta: PhotoMeta; data: Buffer } | null> {
  const meta = (await readSoumissions()).photos.find((p) => p.id === photoId);
  if (!meta) return null;
  const buf = await readPhotoFile(meta);
  return buf ? { meta, data: buf } : null;
}

/* ---------------- Réglages et liste de prix ---------------- */

export async function saveSettingsService(input: SettingsInput, by: string, now = new Date()): Promise<{ ok: true } | { ok: false; error: string }> {
  const photos = await loadPhotoMetas();
  if (input.company.logoId && !photos.some((p) => p.id === input.company.logoId)) return { ok: false, error: "Logo introuvable : téléversez-le de nouveau." };
  await mutateSettings((s) => {
    s.company = { ...input.company };
    s.texts = { ...input.texts };
    s.defaults = { ...input.defaults, deposit: { ...input.defaults.deposit }, site: { ...input.defaults.site }, schedule: { ...input.defaults.schedule } };
    // Chantier D : inclusions standard (un ancien formulaire sans ce bloc garde la valeur enregistrée).
    if (input.standard) s.standard = { ...input.standard };
    // Listes des choix en un clic (ajoutées, retirées, réordonnées dans les réglages).
    s.choices = input.choices;
    s.templates = { ...input.templates };
    s.pipedriveStages = { ...input.pipedriveStages };
    s.updatedAt = now.toISOString();
    s.updatedBy = by;
    return { result: null, changed: true };
  });
  return { ok: true };
}

export async function savePricesService(input: PricesInput, by: string, now = new Date()): Promise<{ ok: true }> {
  await mutateSettings((s) => {
    s.packages = input.packages;
    s.extras = input.extras;
    s.labour = input.labour;
    s.discounts = input.discounts;
    s.updatedAt = now.toISOString();
    s.updatedBy = by;
    return { result: null, changed: true };
  });
  return { ok: true };
}
