/* ==================================================================
   Conformité C2 — magasin des consentements (consentements.json, dans
   le dossier de gestion, droits 600) : la preuve exigée par la trousse
   (5.4) et par la Loi 25.

   Pour chaque formulaire envoyé :
     - texte exact et version : chaque texte est gardé UNE fois, par
       empreinte (texts), et chaque version du formulaire (bundles)
       dit quelle empreinte était affichée pour chaque case ;
     - cases et leur état (jamais cochées d'avance, action du visiteur) ;
     - personne : courriel ou téléphone (et leurs empreintes) ;
     - date, heure, fuseau et adresse IP ;
     - source : formulaire et page ;
     - canaux (courriel, texto) et entité expéditrice.
   Retraits : date, méthode, prise d'effet (immédiate). Un retrait vise
   des empreintes (courriel, téléphone) : il vaut aussi pour les
   consentements plus anciens, jamais pour un consentement redonné après.
   Appels : décision d'enregistrement (entrant, sortant) et version de
   l'avis entendu, numéro en empreinte seulement.

   Conservation (politique 4.10) : preuve gardée tant que le
   consentement sert, puis 3 ans comptés du plus tardif du dernier envoi
   et du retrait ; l'adresse IP ne sert qu'à la preuve et disparaît avec
   elle. Les retraits (empreintes seulement) restent : c'est la liste
   de désabonnement. Décisions d'appel : 12 mois.
   ================================================================== */

import path from "node:path";
import { createHash, randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { emailOf, phoneOf } from "@/lib/gestion/crm/identity";
import type { ConsentBundle, ConsentPurpose } from "./textes";

export type ConsentForm = "soumission" | "thermomatch" | "rendez-vous" | "contact" | "thermoscan";
export type ConsentChannel = "courriel" | "texto";
export type WithdrawalMethod = "lien-un-clic" | "texto-stop" | "gestion" | "courriel" | "telephone";

export const TIME_ZONE = "America/Toronto";
/** Politique 4.10 : durée de conservation d'une preuve, en années, comptée du dernier envoi ou du retrait. */
export const PROOF_YEARS = 3;
/** Décisions d'enregistrement d'appel : 12 mois (politique 4.10, enregistrements). */
export const CALL_DECISION_MONTHS = 12;

export interface ConsentItem {
  purpose: ConsentPurpose;
  section: string;
  textSha: string;
  /** « case » : case à cocher ; « avis » : texte affiché sous le formulaire (5.1). */
  kind: "case" | "avis";
  /** État de la case à l'envoi (un avis est « accepté » par l'envoi du formulaire). */
  checked: boolean;
  /** Toujours faux : aucune case n'est cochée d'avance. */
  defaultChecked: false;
  required: boolean;
  channels: ConsentChannel[];
}

export interface ConsentRecord {
  id: string;
  at: string;
  timeZone: string;
  /** Heure locale lisible, fuseau compris. */
  localTime: string;
  /** Adresse IP, pour la preuve seulement ; retirée à l'échéance de conservation. */
  ip: string | null;
  ipPurgedAt?: string;
  form: ConsentForm;
  /** Page (chemin) ou écran du formulaire. */
  source: string;
  email: string | null;
  phone: string | null;
  /** Empreintes SHA-256 de « e:courriel » et « p:+1… ». */
  keys: string[];
  sender: string;
  version: string;
  trousse: { version: string; sha256: string | null };
  items: ConsentItem[];
  journalId?: string;
  /** Dernier message envoyé grâce à ce consentement (conservation). */
  lastMessageAt?: string;
}

export interface ConsentWithdrawal {
  id: string;
  at: string;
  effectiveAt: string;
  method: WithdrawalMethod;
  purposes: ConsentPurpose[];
  keys: string[];
  by?: string;
}

export type CallDecisionKind = "poursuite" | "refus-touche" | "accepte-touche-1" | "refus" | "sans-reponse";

export interface CallDecision {
  id: string;
  at: string;
  direction: "entrant" | "sortant";
  decision: CallDecisionKind;
  phoneKey: string | null;
  /** Quatre derniers chiffres, pour s'y retrouver sans le numéro. */
  phoneTail: string | null;
  callSid?: string;
  callId?: string;
  noticeSha: string | null;
  trousseVersion: string | null;
}

export interface ConsentStoreData {
  version: 1;
  texts: Record<string, { section: string; text: string; firstSeenAt: string }>;
  bundles: Record<string, { at: string; sender: string; trousse: { version: string; sha256: string | null }; shas: Partial<Record<ConsentPurpose, string>>; notice: string[] }>;
  records: ConsentRecord[];
  withdrawals: ConsentWithdrawal[];
  calls: CallDecision[];
}

export const consentFile = () => path.join(gestionDataDir(), "consentements.json");
export const emptyConsents = (): ConsentStoreData => ({ version: 1, texts: {}, bundles: {}, records: [], withdrawals: [], calls: [] });

const isObj = (v: unknown): v is Record<string, unknown> => Boolean(v) && typeof v === "object" && !Array.isArray(v);
const arr = <T,>(v: unknown, ok: (x: Record<string, unknown>) => boolean): T[] => (Array.isArray(v) ? (v.filter((x) => isObj(x) && ok(x)) as T[]) : []);

export function normalizeConsents(v: unknown): ConsentStoreData {
  const d = isObj(v) ? v : {};
  return {
    version: 1,
    texts: isObj(d.texts) ? (d.texts as ConsentStoreData["texts"]) : {},
    bundles: isObj(d.bundles) ? (d.bundles as ConsentStoreData["bundles"]) : {},
    records: arr<ConsentRecord>(d.records, (x) => typeof x.id === "string" && typeof x.at === "string" && Array.isArray(x.items)),
    withdrawals: arr<ConsentWithdrawal>(d.withdrawals, (x) => typeof x.id === "string" && Array.isArray(x.keys) && Array.isArray(x.purposes)),
    calls: arr<CallDecision>(d.calls, (x) => typeof x.id === "string" && typeof x.at === "string"),
  };
}

export async function readConsents(): Promise<ConsentStoreData> {
  return normalizeConsents(await readJson<unknown>(consentFile(), () => null));
}

export function mutateConsents<T>(fn: (d: ConsentStoreData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<ConsentStoreData, T>(consentFile(), emptyConsents, normalizeConsents, fn);
}

/* ---------------- Aides ---------------- */

export const keyHash = (key: string) => createHash("sha256").update(key).digest("hex");

/** Empreintes d'une personne : « e:courriel » et « p:+1… » (mêmes clés que les désabonnements du volet B). */
export function identityKeys(p: { email?: string | null; phone?: string | null }): string[] {
  const out: string[] = [];
  const e = emailOf(p.email ?? "");
  if (e) out.push(keyHash(`e:${e}`));
  const ph = phoneOf(p.phone ?? "");
  if (ph) out.push(keyHash(`p:${ph}`));
  return out;
}

const newId = (prefix: string) => `${prefix}_${randomBytes(8).toString("base64url")}`;

export function localTime(d: Date): string {
  return new Intl.DateTimeFormat("fr-CA", { timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short", hourCycle: "h23" }).format(d);
}

/** Canaux prévus par chaque case (5.2 et 5.3 : courriel et texto ; 5.1 et 3.1 : communications liées à la demande). */
const CHANNELS: Record<ConsentPurpose, ConsentChannel[]> = { communications: ["courriel", "texto"], rappels: ["courriel", "texto"], promotions: ["courriel", "texto"], jumelage: [] };

/* ---------------- Versions des textes ---------------- */

/** Garde une fois chaque texte et chaque version du formulaire. Idempotent. */
export function registerBundle(b: ConsentBundle, now = new Date()): Promise<void> {
  return mutateConsents((d) => {
    if (d.bundles[b.version]) return { result: undefined, changed: false };
    const at = now.toISOString();
    for (const t of [b.communications, b.rappels, b.promotions, b.jumelage.box, ...b.jumelage.notice]) d.texts[t.sha] ??= { section: t.section, text: t.text, firstSeenAt: at };
    d.bundles[b.version] = {
      at,
      sender: b.sender,
      trousse: b.trousse,
      shas: { communications: b.communications.sha, rappels: b.rappels.sha, promotions: b.promotions.sha, jumelage: b.jumelage.box.sha },
      notice: b.jumelage.notice.map((n) => n.sha),
    };
    return { result: undefined, changed: true };
  });
}

/* ---------------- Preuve d'un formulaire ---------------- */

export interface RecordInput {
  /** Version affichée au visiteur (envoyée par le formulaire). */
  version: string;
  form: ConsentForm;
  source: string;
  email?: string | null;
  phone?: string | null;
  ip?: string | null;
  journalId?: string;
  /** Formulaire de jumelage : la case 3.1 fait partie de la preuve. */
  jumelage?: boolean;
  checks: { rappels: boolean; promotions: boolean; jumelage?: boolean };
}

export type RecordResult = { ok: true; record: ConsentRecord } | { ok: false; reason: "version-inconnue" };

/** Enregistre la preuve. La version doit être connue (formulaire affiché depuis ce serveur). */
export function recordConsent(input: RecordInput, now = new Date()): Promise<RecordResult> {
  return mutateConsents<RecordResult>((d) => {
    const b = d.bundles[input.version];
    if (!b) return { result: { ok: false, reason: "version-inconnue" }, changed: false };
    const email = emailOf(input.email ?? "") ?? null;
    const phone = phoneOf(input.phone ?? "") ?? null;
    const item = (purpose: ConsentPurpose, kind: ConsentItem["kind"], checked: boolean, required: boolean): ConsentItem => ({
      purpose,
      section: purpose === "communications" ? "5.1" : purpose === "rappels" ? "5.2" : purpose === "promotions" ? "5.3" : "3.1",
      textSha: b.shas[purpose] ?? "",
      kind,
      checked,
      defaultChecked: false,
      required,
      channels: CHANNELS[purpose],
    });
    const items: ConsentItem[] = [
      item("communications", "avis", true, false),
      ...(input.jumelage ? [item("jumelage", "case", input.checks.jumelage === true, true)] : []),
      item("rappels", "case", input.checks.rappels, false),
      item("promotions", "case", input.checks.promotions, false),
    ];
    const record: ConsentRecord = {
      id: newId("cs"),
      at: now.toISOString(),
      timeZone: TIME_ZONE,
      localTime: localTime(now),
      ip: input.ip && input.ip !== "inconnue" ? input.ip.slice(0, 64) : null,
      form: input.form,
      source: input.source.slice(0, 200),
      email,
      phone,
      keys: identityKeys({ email, phone }),
      sender: b.sender,
      version: input.version,
      trousse: b.trousse,
      items,
      ...(input.journalId ? { journalId: input.journalId } : {}),
    };
    d.records.push(record);
    return { result: { ok: true, record: structuredClone(record) }, changed: true };
  });
}

/* ---------------- Retrait ---------------- */

export interface WithdrawInput {
  email?: string | null;
  phone?: string | null;
  /** Empreintes déjà calculées (désabonnement par jeton). */
  keys?: string[];
  purposes: ConsentPurpose[];
  method: WithdrawalMethod;
  by?: string;
}

/** Retrait immédiat (prise d'effet = maintenant : bien avant les 10 jours ouvrables permis). */
export function recordWithdrawal(input: WithdrawInput, now = new Date()): Promise<ConsentWithdrawal | null> {
  const keys = [...new Set([...(input.keys ?? []), ...identityKeys(input)])];
  if (!keys.length || !input.purposes.length) return Promise.resolve(null);
  return mutateConsents((d) => {
    const at = now.toISOString();
    const w: ConsentWithdrawal = { id: newId("cr"), at, effectiveAt: at, method: input.method, purposes: [...new Set(input.purposes)], keys, ...(input.by ? { by: input.by.slice(0, 200) } : {}) };
    d.withdrawals.push(w);
    return { result: { ...w }, changed: true };
  });
}

/* ---------------- État d'un consentement ---------------- */

export interface ConsentStatus {
  active: boolean;
  /** Dernier consentement donné pour cette fin (case cochée). */
  since: string | null;
  recordId: string | null;
  /** Dernier retrait en vigueur, s'il y en a un après ce consentement. */
  withdrawnAt: string | null;
}

/** Consentement en vigueur pour une fin : dernière case cochée, sans retrait qui la suit (pur). */
export function consentStatus(d: Pick<ConsentStoreData, "records" | "withdrawals">, who: { email?: string | null; phone?: string | null; keys?: string[] }, purpose: ConsentPurpose, now = new Date()): ConsentStatus {
  const keys = new Set([...(who.keys ?? []), ...identityKeys(who)]);
  if (!keys.size) return { active: false, since: null, recordId: null, withdrawnAt: null };
  const t = now.getTime();
  const given = d.records
    .filter((r) => r.keys.some((k) => keys.has(k)) && r.items.some((i) => i.purpose === purpose && i.checked && i.kind === "case") && Date.parse(r.at) <= t)
    .sort((a, b) => b.at.localeCompare(a.at))[0];
  const lastWithdrawal = d.withdrawals
    .filter((w) => w.purposes.includes(purpose) && w.keys.some((k) => keys.has(k)) && Date.parse(w.effectiveAt) <= t)
    .sort((a, b) => b.effectiveAt.localeCompare(a.effectiveAt))[0];
  if (!given) return { active: false, since: null, recordId: null, withdrawnAt: lastWithdrawal?.effectiveAt ?? null };
  const withdrawn = lastWithdrawal && lastWithdrawal.effectiveAt >= given.at ? lastWithdrawal.effectiveAt : null;
  return { active: !withdrawn, since: given.at, recordId: given.id, withdrawnAt: withdrawn };
}

/** Un retrait pour cette fin est-il en vigueur depuis `since` (désabonnement) ? */
export function withdrawnSince(d: Pick<ConsentStoreData, "withdrawals">, who: { email?: string | null; phone?: string | null; keys?: string[] }, purpose: ConsentPurpose, since: string, now = new Date()): boolean {
  const keys = new Set([...(who.keys ?? []), ...identityKeys(who)]);
  return d.withdrawals.some((w) => w.purposes.includes(purpose) && w.keys.some((k) => keys.has(k)) && w.effectiveAt >= since && Date.parse(w.effectiveAt) <= now.getTime());
}

/** Note l'envoi d'un message grâce à un consentement (conservation de la preuve). */
export function markMessageSent(recordId: string, now = new Date()): Promise<void> {
  return mutateConsents((d) => {
    const r = d.records.find((x) => x.id === recordId);
    if (!r) return { result: undefined, changed: false };
    r.lastMessageAt = now.toISOString();
    return { result: undefined, changed: true };
  });
}

/* ---------------- Appels ---------------- */

export interface CallDecisionInput {
  direction: CallDecision["direction"];
  decision: CallDecisionKind;
  phone?: string | null;
  callSid?: string | null;
  callId?: string;
  noticeSha: string | null;
  trousseVersion: string | null;
}

export function recordCallDecision(input: CallDecisionInput, now = new Date()): Promise<CallDecision> {
  const phone = phoneOf(input.phone ?? "");
  return mutateConsents((d) => {
    const c: CallDecision = {
      id: newId("ca"),
      at: now.toISOString(),
      direction: input.direction,
      decision: input.decision,
      phoneKey: phone ? keyHash(`p:${phone}`) : null,
      phoneTail: phone ? phone.slice(-4) : null,
      ...(input.callSid && /^CA[0-9a-f]{32}$/.test(input.callSid) ? { callSid: input.callSid } : {}),
      ...(input.callId ? { callId: input.callId } : {}),
      noticeSha: input.noticeSha,
      trousseVersion: input.trousseVersion,
    };
    d.calls.push(c);
    return { result: { ...c }, changed: true };
  });
}

/* ---------------- Conservation ---------------- */

const addYears = (iso: string, years: number) => {
  const d = new Date(iso);
  d.setUTCFullYear(d.getUTCFullYear() + years);
  return d;
};
const addMonths = (iso: string, months: number) => {
  const d = new Date(iso);
  d.setUTCMonth(d.getUTCMonth() + months);
  return d;
};

/** Fin de la conservation d'une preuve : 3 ans après le plus tardif du consentement, du dernier message et du retrait. */
export function proofExpiresAt(r: ConsentRecord, withdrawals: ConsentWithdrawal[]): Date {
  const keys = new Set(r.keys);
  const last = [r.at, r.lastMessageAt, ...withdrawals.filter((w) => w.keys.some((k) => keys.has(k))).map((w) => w.effectiveAt)].filter((x): x is string => Boolean(x)).sort().pop()!;
  return addYears(last, PROOF_YEARS);
}

/**
 * Conservation : preuves échues supprimées (l'adresse IP part avec elles) sauf si un consentement
 * encore en vigueur en dépend ; décisions d'appel de plus de 12 mois supprimées. Les retraits restent.
 */
export function purgeConsents(now = new Date(), opts: { dryRun?: boolean } = {}): Promise<{ ipRetirees: number; supprimees: number; appelsSupprimes: number }> {
  return mutateConsents((d) => {
    let supprimees = 0;
    let ipRetirees = 0;
    const kept: ConsentRecord[] = [];
    for (const r of d.records) {
      const expired = proofExpiresAt(r, d.withdrawals).getTime() <= now.getTime();
      const stillUsed = r.items.some((i) => i.kind === "case" && i.checked && (i.purpose === "rappels" || i.purpose === "promotions") && consentStatus(d, { keys: r.keys }, i.purpose, now).recordId === r.id && consentStatus(d, { keys: r.keys }, i.purpose, now).active);
      if (expired && !stillUsed) {
        supprimees++;
        if (r.ip) ipRetirees++;
        continue;
      }
      kept.push(r);
    }
    const limit = now.getTime();
    const calls = d.calls.filter((c) => addMonths(c.at, CALL_DECISION_MONTHS).getTime() > limit);
    const appelsSupprimes = d.calls.length - calls.length;
    const changed = !opts.dryRun && (supprimees > 0 || appelsSupprimes > 0);
    if (changed) {
      d.records = kept;
      d.calls = calls;
    }
    return { result: { ipRetirees, supprimees, appelsSupprimes }, changed };
  });
}
