/* ==================================================================
   Règles des soumissions (pures, côté serveur) :
   numérotation, versions, envoi (document figé), statut calculé
   (expirée), consultation, acceptation avec instantané et empreinte,
   refus, question.

   Immuabilité :
   - une version n'est modifiable qu'en brouillon ;
   - à l'envoi, l'entreprise, les textes, les taux et les empreintes des
     photos sont copiés dans la version (frozen) : changer les réglages
     ne touche plus ce document ;
   - l'acceptation fige un instantané complet (document, choix du
     client, totaux, nom tapé, IP, navigateur) et son empreinte
     SHA-256 ; toute modification ultérieure passe par une nouvelle
     version (révision, ou avenant après acceptation).
   ================================================================== */

import { randomBytes } from "node:crypto";
import { LINKS, TAXES } from "./config";
import { addDays, todayIn } from "./dates";
import { hashOf } from "./hash";
import { emptyClient, emptySite } from "./defaults";
import { newToken } from "./tokens";
import { cleanSelection, computeTotals, withLogisvertMode } from "./totals";
import type {
  Acceptance,
  AcceptedSnapshot,
  CompanyIdentity,
  ContractorIdentity,
  EffectiveStatus,
  EstimationNotice,
  JumelageRequest,
  PhotoMeta,
  PhotoRef,
  Quote,
  QuoteContent,
  QuoteDocument,
  QuoteVersion,
  Settings,
  SoumissionsData,
  VersionKind,
} from "./types";

export const QUOTE_ID_RE = /^q_[A-Za-z0-9_-]{8,16}$/;
export const newQuoteId = () => `q_${randomBytes(8).toString("base64url")}`;
const newVersionId = () => `v_${randomBytes(8).toString("base64url")}`;

export type QuoteErrorCode =
  | "introuvable"
  | "non-modifiable"
  | "brouillon-existant"
  | "expiree"
  | "remplacee"
  | "acceptee"
  | "refusee"
  | "brouillon"
  | "conditions"
  | "nom"
  | "total-change"
  | "document-change"
  | "integrite"
  | "message"
  // Conformité C1 : aucune acceptation directe (contrat final au nom de l'installateur) ; case 3.1 non cochée.
  | "jumelage"
  | "case";

export class QuoteError extends Error {
  constructor(public code: QuoteErrorCode, message: string) {
    super(message);
    this.name = "QuoteError";
  }
}

export const clone = <T>(v: T): T => JSON.parse(JSON.stringify(v)) as T;

/** Prochain numéro de l'année (S-2026-0001). Modifie `counters`. */
export function nextNumber(counters: Record<string, number>, now: Date): string {
  const year = todayIn(now).slice(0, 4);
  const n = (counters[year] ?? 0) + 1;
  counters[year] = n;
  return `S-${year}-${String(n).padStart(4, "0")}`;
}

export function currentVersion(q: Quote): QuoteVersion {
  return q.versions.reduce((a, b) => (b.v > a.v ? b : a));
}

export function versionNumber(q: Quote, v: number): QuoteVersion | undefined {
  return q.versions.find((x) => x.v === v);
}

export function draftOf(q: Quote): QuoteVersion | undefined {
  return q.versions.find((x) => x.status === "brouillon");
}

/** Dernière version envoyée (hors brouillon). */
export function latestSent(q: Quote): QuoteVersion | undefined {
  return q.versions.filter((x) => x.status !== "brouillon").sort((a, b) => b.v - a.v)[0];
}

/** « Expirée » se calcule : date de validité dépassée pour une version encore en attente de réponse. */
export function effectiveStatus(v: QuoteVersion, today: string): EffectiveStatus {
  // Conformité C1 : une fois le client allé de l'avant, la suite passe par le contrat de l'installateur : plus d'expiration.
  if ((v.status === "envoyee" || v.status === "ouverte") && v.content.validUntil < today && !v.jumelage) return "expiree";
  return v.status;
}

export function canRespond(v: QuoteVersion, today: string): boolean {
  if (v.jumelage) return false; // Conformité C1 : réponse déjà donnée (« Je veux aller de l'avant »)
  const s = effectiveStatus(v, today);
  return s === "envoyee" || s === "ouverte";
}

function makeVersion(o: { v: number; kind: VersionKind; basedOn: number | null; content: QuoteContent; by: string; now: Date; contractorId?: string | null }): QuoteVersion {
  const at = o.now.toISOString();
  return {
    id: newVersionId(),
    v: o.v,
    token: newToken(),
    kind: o.kind,
    basedOn: o.basedOn,
    createdAt: at,
    createdBy: o.by,
    updatedAt: at,
    status: "brouillon",
    content: clone(o.content),
    frozen: null,
    contentHash: null,
    sentAt: null,
    sends: [],
    views: { count: 0, firstAt: null, lastAt: null },
    acceptance: null,
    refusal: null,
    questions: [],
    replacedAt: null,
    replacedBy: null,
    contractorId: o.contractorId ?? null,
  };
}

export interface CreateOptions {
  internalNotes?: string;
  duplicatedFrom?: string | null;
  /** Précision du journal pour une copie (« pour un autre client »). */
  copyDetail?: string;
  seed?: boolean;
  /** Fiche client du CRM (c_…). */
  clientId?: string | null;
  /** Installateur partenaire qui réalise les travaux (i_…). */
  contractorId?: string | null;
}

export function createQuote(data: SoumissionsData, content: QuoteContent, by: string, now: Date, opts: CreateOptions = {}): Quote {
  const q: Quote = {
    id: newQuoteId(),
    number: nextNumber(data.counters, now),
    createdAt: now.toISOString(),
    createdBy: by,
    duplicatedFrom: opts.duplicatedFrom ?? null,
    clientId: opts.clientId ?? null,
    internalNotes: opts.internalNotes ?? "",
    versions: [makeVersion({ v: 1, kind: "initiale", basedOn: null, content, by, now, contractorId: opts.contractorId ?? null })],
    pipedrive: { personId: null, dealId: null, log: [] },
    events: [{ at: now.toISOString(), type: "creation", detail: opts.duplicatedFrom ? `Copie de ${opts.duplicatedFrom}${opts.copyDetail ? ` ${opts.copyDetail}` : ""}` : "Soumission créée", by }],
    ...(opts.seed ? { seed: true } : {}),
  };
  data.quotes.push(q);
  return q;
}

/** Remplace le contenu d'un brouillon. Toute version envoyée est intouchable. */
export function updateDraft(q: Quote, v: QuoteVersion, content: QuoteContent, now: Date): void {
  if (v.status !== "brouillon") throw new QuoteError("non-modifiable", "Cette version a été envoyée : créez une nouvelle version pour la modifier.");
  v.content = clone(content);
  v.updatedAt = now.toISOString();
}

/** Nouvelle version (brouillon) à partir d'une version existante : révision, ou avenant si elle est acceptée. */
export function reviseQuote(q: Quote, fromV: number, by: string, now: Date, validityDays: number): QuoteVersion {
  if (draftOf(q)) throw new QuoteError("brouillon-existant", "Une version est déjà en brouillon : modifiez-la ou envoyez-la d’abord.");
  const from = versionNumber(q, fromV);
  if (!from) throw new QuoteError("introuvable", "Version introuvable.");
  const kind: VersionKind = from.status === "acceptee" ? "avenant" : "revision";
  const content = clone(from.content);
  const minValid = addDays(todayIn(now), Math.max(1, validityDays || 30));
  if (content.validUntil < minValid) content.validUntil = minValid;
  const next = makeVersion({ v: Math.max(...q.versions.map((x) => x.v)) + 1, kind, basedOn: from.v, content, by, now, contractorId: from.contractorId ?? null });
  q.versions.push(next);
  q.events.push({ at: now.toISOString(), type: kind, detail: `Version ${next.v} (${kind === "avenant" ? "avenant" : "révision"} de la version ${from.v})`, by });
  return next;
}

/**
 * Copie vers une nouvelle soumission (nouveau numéro) : sans photos ni lien Pipedrive, même entrepreneur.
 * « Pour un autre client » : coordonnées, chantier et mot d'introduction vidés, fiche client déliée ; machine, plan,
 * prix, inclus, exclus, hypothèses et déroulement gardés.
 */
export function duplicateQuote(data: SoumissionsData, q: Quote, fromV: number, by: string, now: Date, validityDays: number, opts: { forOtherClient?: boolean } = {}): Quote {
  const from = versionNumber(q, fromV) ?? currentVersion(q);
  const content = clone(from.content);
  content.placement.outdoor.photos = [];
  for (const u of content.placement.indoor) u.photos = [];
  content.validUntil = addDays(todayIn(now), Math.max(1, validityDays || 30));
  if (opts.forOtherClient) {
    content.client = emptyClient();
    content.site = { ...emptySite(), access: content.site.access, presence: content.site.presence };
    content.schedule = { ...content.schedule, mode: "", date: "", windowStart: "", windowEnd: "" };
    content.projectSummary = "";
  }
  return createQuote(data, content, by, now, {
    duplicatedFrom: q.number,
    copyDetail: opts.forOtherClient ? "pour un autre client" : undefined,
    internalNotes: "",
    clientId: opts.forOtherClient ? null : (q.clientId ?? null),
    contractorId: from.contractorId ?? null,
  });
}

export function photoIdsOf(content: QuoteContent, company?: CompanyIdentity | null): string[] {
  const ids = [...content.placement.outdoor.photos, ...content.placement.indoor.flatMap((u) => u.photos)];
  if (company?.logoId) ids.push(company.logoId);
  return [...new Set(ids)];
}

function photoRefs(ids: string[], photos: PhotoMeta[]): Record<string, PhotoRef> {
  const out: Record<string, PhotoRef> = {};
  for (const id of ids) {
    const p = photos.find((x) => x.id === id);
    if (p) out[id] = { sha256: p.sha256, width: p.width, height: p.height };
  }
  return out;
}

/**
 * Document présenté au client. Version acceptée : l'instantané, tel quel. Envoyée : le document figé (avec l'identité
 * de l'entrepreneur copiée à l'envoi, si la version en a une). Brouillon : les réglages actuels et l'identité actuelle
 * de l'entrepreneur choisi (`contractor`, aperçu), mode LogisVert recalculé.
 * Une version envoyée avant le modèle « entrepreneur » n'a pas de clé `contractor` : son empreinte ne change pas.
 */
export function buildDocument(q: Quote, v: QuoteVersion, settings: Settings | null, photos: PhotoMeta[], now = new Date(), contractor?: ContractorIdentity | null): QuoteDocument {
  if (v.acceptance) return v.acceptance.snapshot.document;
  const frozen = v.frozen;
  if (!frozen && !settings) throw new QuoteError("introuvable", "Réglages requis pour l’aperçu d’un brouillon.");
  const company = clone(frozen ? frozen.company : settings!.company);
  const doc: QuoteDocument = {
    number: q.number,
    version: v.v,
    kind: v.kind,
    basedOn: v.basedOn,
    issuedAt: frozen ? frozen.issuedAt : now.toISOString(),
    validUntil: v.content.validUntil,
    company,
    texts: clone(frozen ? frozen.texts : settings!.texts),
    taxes: frozen ? { ...frozen.taxes } : { tpsPer100k: TAXES.tps.ratePer100k, tvqPer100k: TAXES.tvq.ratePer100k },
    links: { logisvert: LINKS.logisvert, opcGaranties: LINKS.opcGaranties, opcAnnulation: LINKS.opcAnnulation, opcDistance: LINKS.opcDistance },
    photos: frozen ? { ...frozen.photos } : photoRefs(photoIdsOf(v.content, company), photos),
    content: frozen ? clone(v.content) : withLogisvertMode(clone(v.content)),
  };
  if (frozen) {
    if (frozen.contractor) doc.contractor = clone(frozen.contractor);
    // Conformité C1 : parcours de la trousse (clés absentes des anciennes soumissions : empreintes inchangées).
    if (frozen.parcours) doc.parcours = frozen.parcours;
    if (frozen.notice) doc.notice = clone(frozen.notice);
  } else {
    doc.contractor = contractor ? clone(contractor) : null;
  }
  return doc;
}

/**
 * Envoi : fige le document (entreprise qui présente, textes, taux, photos et INSTANTANÉ de l'identité de l'entrepreneur
 * choisi) et remplace les versions précédentes encore en attente. Les vérifications (sendBlockers) sont faites par
 * l'appelant. Un changement ultérieur de la fiche du partenaire ne touche plus ce document.
 */
export function freezeForSend(q: Quote, v: QuoteVersion, settings: Settings, photos: PhotoMeta[], now: Date, contractor?: ContractorIdentity | null, notice?: EstimationNotice | null): void {
  if (v.status !== "brouillon") throw new QuoteError("non-modifiable", "Cette version a déjà été envoyée.");
  const at = now.toISOString();
  v.frozen = {
    issuedAt: at,
    company: clone(settings.company),
    texts: clone(settings.texts),
    taxes: { tpsPer100k: TAXES.tps.ratePer100k, tvqPer100k: TAXES.tvq.ratePer100k },
    photos: photoRefs(photoIdsOf(v.content, settings.company), photos),
    ...(contractor ? { contractor: clone(contractor) } : {}),
    // Conformité C1 : avis de jumelage figé ; le document n'est jamais acceptable tel quel.
    ...(notice ? { parcours: "trousse" as const, notice: clone(notice) } : {}),
  };
  v.status = "envoyee";
  v.sentAt = at;
  v.updatedAt = at;
  v.contentHash = hashOf(buildDocument(q, v, null, photos, now));
  for (const other of q.versions) {
    if (other !== v && (other.status === "envoyee" || other.status === "ouverte")) {
      other.status = "remplacee";
      other.replacedAt = at;
      other.replacedBy = v.v;
    }
  }
}

/** Consultation : compteur, première et dernière vue ; « envoyée » devient « ouverte ». */
export function recordView(v: QuoteVersion, now: Date): { first: boolean } {
  const at = now.toISOString();
  const first = v.views.count === 0;
  v.views = { count: v.views.count + 1, firstAt: v.views.firstAt ?? at, lastAt: at };
  if (v.status === "envoyee") v.status = "ouverte";
  return { first };
}

function respondError(v: QuoteVersion, today: string): QuoteError {
  const s = effectiveStatus(v, today);
  const map: Record<string, [QuoteErrorCode, string]> = {
    expiree: ["expiree", "Cette soumission est expirée : elle ne peut plus être acceptée."],
    remplacee: ["remplacee", "Cette soumission a été remplacée par une version plus récente."],
    acceptee: ["acceptee", "Cette soumission a déjà été acceptée."],
    refusee: ["refusee", "Cette soumission a été refusée."],
    brouillon: ["brouillon", "Cette soumission n’a pas encore été envoyée."],
  };
  const [code, msg] = map[s] ?? ["introuvable", "Soumission introuvable."];
  return new QuoteError(code, msg);
}

export function normalizeName(name: string): string {
  return name.normalize("NFC").replace(/\s+/g, " ").trim().slice(0, 120);
}

export interface AcceptInput {
  selection: string[];
  typedName: string;
  termsAccepted: boolean;
  ip: string;
  userAgent: string;
  /** Total affiché au client au moment de cliquer : doit correspondre au total recalculé. */
  postedTotalCents?: number | null;
  /** Empreinte du document affiché : doit correspondre au document envoyé. */
  postedHash?: string | null;
  now: Date;
}

/** Conformité C1 : message du refus d'acceptation directe (le contrat final vient de l'installateur, après son approbation). */
export const NO_DIRECT_ACCEPT = "La signature se fait sur le contrat final de votre entrepreneur licencié, dès son approbation. Utilisez « Je veux aller de l’avant ».";

export function acceptVersion(q: Quote, v: QuoteVersion, input: AcceptInput): Acceptance {
  const today = todayIn(input.now);
  if (v.frozen?.parcours) throw new QuoteError("jumelage", NO_DIRECT_ACCEPT); // Conformité C1
  if (!canRespond(v, today)) throw respondError(v, today);
  if (!input.termsAccepted) throw new QuoteError("conditions", "Cochez « J’ai lu et j’accepte les conditions » pour accepter.");
  const typedName = normalizeName(input.typedName);
  if (!/^\S+(\s+\S+)+$/.test(typedName) || !/\p{L}.*\p{L}/u.test(typedName)) throw new QuoteError("nom", "Tapez votre prénom et votre nom au complet : ils tiennent lieu de signature.");
  const doc = buildDocument(q, v, null, [], input.now);
  const contentHash = hashOf(doc);
  if (v.contentHash && contentHash !== v.contentHash) throw new QuoteError("integrite", "Le document ne correspond plus à celui qui a été envoyé. Communiquez avec nous.");
  if (input.postedHash && input.postedHash !== contentHash) throw new QuoteError("document-change", "La soumission a changé depuis l’ouverture de la page. Rechargez-la avant d’accepter.");
  const selection = cleanSelection(doc.content.lines, input.selection);
  const totals = computeTotals(doc.content, selection, doc.taxes, today);
  if (input.postedTotalCents !== undefined && input.postedTotalCents !== null && input.postedTotalCents !== totals.totalCents) {
    throw new QuoteError("total-change", "Le total a changé depuis l’ouverture de la page (un rabais a peut-être expiré). Rechargez la page avant d’accepter.");
  }
  const at = input.now.toISOString();
  const ip = String(input.ip || "inconnue").slice(0, 64);
  const userAgent = String(input.userAgent || "").slice(0, 400);
  const snapshot: AcceptedSnapshot = { document: doc, selection, totals, acceptedAt: at, typedName, termsAccepted: true, ip, userAgent };
  const byId = new Map(totals.lines.map((l) => [l.id, l]));
  const acceptance: Acceptance = {
    at,
    version: v.v,
    versionId: v.id,
    quoteNumber: q.number,
    typedName,
    termsAccepted: true,
    selectedOptionIds: selection,
    selectedOptions: doc.content.lines.filter((l) => selection.includes(l.id)).map((l) => ({ id: l.id, label: l.label, netCents: byId.get(l.id)?.netCents ?? 0 })),
    totalCents: totals.totalCents,
    clientPaysCents: totals.clientPaysCents,
    ip,
    userAgent,
    contentHash,
    snapshotHash: hashOf(snapshot),
    snapshot,
  };
  v.acceptance = acceptance;
  v.status = "acceptee";
  v.updatedAt = at;
  return acceptance;
}

export interface JumelageInput {
  selection: string[];
  /** Case obligatoire 3.1 cochée. */
  checked: boolean;
  ip: string;
  userAgent: string;
  postedTotalCents?: number | null;
  postedHash?: string | null;
  now: Date;
}

/**
 * Conformité C1 — « Je veux aller de l'avant » : demande de jumelage et consentement à transmettre le dossier au
 * partenaire. Preuve : texte de la case, version, options, total, empreintes, horodatage, IP. JAMAIS une acceptation.
 */
export function requestJumelage(q: Quote, v: QuoteVersion, input: JumelageInput): JumelageRequest {
  const today = todayIn(input.now);
  if (!v.frozen?.parcours || !v.frozen.notice) throw new QuoteError("introuvable", "Cette soumission ne permet pas cette réponse : appelez-nous.");
  if (!canRespond(v, today)) throw respondError(v, today);
  if (!input.checked) throw new QuoteError("case", "Cochez la case avant d’aller de l’avant.");
  const doc = buildDocument(q, v, null, [], input.now);
  const contentHash = hashOf(doc);
  if (v.contentHash && contentHash !== v.contentHash) throw new QuoteError("integrite", "Le document ne correspond plus à celui qui a été envoyé. Communiquez avec nous.");
  if (input.postedHash && input.postedHash !== contentHash) throw new QuoteError("document-change", "La soumission a changé depuis l’ouverture de la page. Rechargez-la.");
  const selection = cleanSelection(doc.content.lines, input.selection);
  const totals = computeTotals(doc.content, selection, doc.taxes, today);
  if (input.postedTotalCents !== undefined && input.postedTotalCents !== null && input.postedTotalCents !== totals.totalCents) throw new QuoteError("total-change", "Le total a changé depuis l’ouverture de la page. Rechargez-la.");
  const at = input.now.toISOString();
  const request: JumelageRequest = {
    at,
    v: v.v,
    selection,
    totalCents: totals.totalCents,
    checkbox: v.frozen.notice.checkbox,
    noticeSha256: hashOf(v.frozen.notice),
    contentHash,
    ip: String(input.ip || "inconnue").slice(0, 64),
    userAgent: String(input.userAgent || "").slice(0, 400),
  };
  v.jumelage = request;
  v.updatedAt = at;
  return request;
}

/** L'instantané et le document n'ont pas été modifiés depuis l'acceptation. */
export function verifyAcceptance(a: Acceptance): boolean {
  return hashOf(a.snapshot) === a.snapshotHash && hashOf(a.snapshot.document) === a.contentHash;
}

export function refuseVersion(v: QuoteVersion, reason: string, ip: string, userAgent: string, now: Date): void {
  const today = todayIn(now);
  if (!canRespond(v, today)) throw respondError(v, today);
  v.refusal = { at: now.toISOString(), reason: reason.trim().slice(0, 1000), ip: ip.slice(0, 64), userAgent: userAgent.slice(0, 400) };
  v.status = "refusee";
  v.updatedAt = now.toISOString();
}

export function addQuestion(v: QuoteVersion, message: string, ip: string, userAgent: string, now: Date): void {
  if (v.status === "brouillon") throw respondError(v, todayIn(now));
  const text = message.trim().slice(0, 2000);
  if (text.length < 3) throw new QuoteError("message", "Écrivez votre question.");
  if (v.questions.length >= 30) throw new QuoteError("message", "Trop de questions sur cette soumission : appelez-nous.");
  v.questions.push({ at: now.toISOString(), message: text, ip: ip.slice(0, 64), userAgent: userAgent.slice(0, 400) });
}
