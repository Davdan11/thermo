/* Conformité des partenaires : licence RBQ et assurance responsabilité, état selon la date d'expiration (Montréal).
   Fonctions pures. Un document est valide jusqu'à la fin de son dernier jour.
   Conformité C3 : assurance automobile, montants minimaux, avenant d'assuré additionnel, qualifications
   environnementales (halocarbures) et sous-catégories RBQ détenues (annexe B de l'entente maître). */

import { addDaysYmd, localYmd } from "../crm/time";
import type { ComplianceDoc, ComplianceKind, HalocarbonCert, PartnerRecord, PartnerSettings } from "./types";

export type DocState = "manquante" | "expiree" | "bientot" | "valide";

export const COMPLIANCE_LABELS: Record<ComplianceKind, string> = { rbq: "Licence RBQ", assurance: "Assurance responsabilité", automobile: "Assurance automobile" };

export const DOC_STATE_LABELS: Record<DocState, string> = {
  manquante: "Date à saisir",
  expiree: "Expirée",
  bientot: "Expire bientôt",
  valide: "Valide",
};

export function docState(doc: Pick<ComplianceDoc, "expiresOn">, now: Date, alertDays: number): DocState {
  if (!doc.expiresOn || !/^\d{4}-\d{2}-\d{2}$/.test(doc.expiresOn)) return "manquante";
  const today = localYmd(now);
  if (doc.expiresOn < today) return "expiree";
  if (doc.expiresOn <= addDaysYmd(today, alertDays)) return "bientot";
  return "valide";
}

/** « 12 mars 2027 » */
export function ymdLong(ymd: string): string {
  const d = new Date(`${ymd}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return ymd;
  return new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
}

/* ---------------- Conformité C3 ---------------- */

/** « 2 000 000 $ » */
export const money = (n: number): string => `${new Intl.NumberFormat("fr-CA", { maximumFractionDigits: 0 }).format(n).replace(/ | /g, " ")} $`;

/** Sous-catégorie RBQ : « 15.9 », « 15.10 », « 16 », « 1.1.1 ». */
export const SUBCATEGORY_RE = /^\d{1,2}(\.\d{1,2}){0,2}$/;

const subSort = (a: string, b: string) => {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) if ((pa[i] ?? -1) !== (pb[i] ?? -1)) return (pa[i] ?? -1) - (pb[i] ?? -1);
  return 0;
};

/** « 15.10, 15.9 ; 16 » → ["15.9", "15.10", "16"] (numéros seulement, sans doublon, en ordre). */
export function parseSubcategories(text: string | string[]): string[] {
  const parts = (Array.isArray(text) ? text : text.split(/[,;\s]+/)).map((s) => /^\d{1,2}(?:\.\d{1,2}){0,2}/.exec(String(s).trim())?.[0] ?? "").filter((s) => SUBCATEGORY_RE.test(s));
  return [...new Set(parts)].sort(subSort);
}

/**
 * Sous-catégories détenues : celles du registre de la RBQ (chantier R) quand la dernière vérification trouve la
 * licence active, sinon celles saisies par le propriétaire. Rien n'est inventé.
 */
export function heldSubcategories(record: Pick<PartnerRecord, "compliance" | "rbqVerification"> | null | undefined): { list: string[]; source: "registre" | "saisie" | null; checkedAt?: string } {
  const v = record?.rbqVerification;
  if (v && v.outcome === "active" && v.subcategories.length) {
    const list = parseSubcategories(v.subcategories);
    if (list.length) return { list, source: "registre", checkedAt: v.checkedAt };
  }
  const manual = parseSubcategories(record?.compliance.rbq.subcategories ?? []);
  return manual.length ? { list: manual, source: "saisie" } : { list: [], source: null };
}

/** Une attestation environnementale compte si elle a un numéro et n'est pas expirée. */
export function halocarbonState(c: Pick<HalocarbonCert, "number" | "expiresOn">, now: Date, alertDays: number): DocState {
  if (!c.number.trim()) return "manquante";
  if (!c.expiresOn) return "valide";
  return docState(c, now, alertDays);
}

export const validHalocarbons = (record: Pick<PartnerRecord, "halocarbons"> | null | undefined, now: Date): HalocarbonCert[] =>
  (record?.halocarbons ?? []).filter((c) => {
    const s = halocarbonState(c, now, 0);
    return s === "valide" || s === "bientot";
  });

export type AmountState = "manquant" | "insuffisant" | "suffisant";

export function amountState(amount: number | null | undefined, min: number): AmountState {
  if (typeof amount !== "number" || !Number.isFinite(amount)) return "manquant";
  return amount < min ? "insuffisant" : "suffisant";
}

/** Un document saisi (au moins un numéro, une date ou un montant). */
export const docEntered = (d: ComplianceDoc | undefined | null): boolean => Boolean(d && (d.number.trim() || d.expiresOn || typeof d.amount === "number" || d.fileId));

/**
 * Conformité C3 — état complet d'un partenaire, pour la fiche, le créateur de soumissions (chantier C1) et les
 * blocages. `c3Active` : l'entente maître est en vigueur, ses exigences s'appliquent aussi aux documents absents.
 */
export interface ComplianceSnapshot {
  rbq: { number: string; state: DocState; subcategories: string[]; subcategoriesSource: "registre" | "saisie" | null };
  liability: { state: DocState; amount: number | null; amountState: AmountState; min: number };
  endorsement: { required: boolean; confirmed: boolean; hasDocument: boolean; date: string | null; ok: boolean };
  auto: { required: boolean; entered: boolean; state: DocState; amount: number | null; amountState: AmountState; min: number };
  halocarbons: { required: boolean; valid: number; total: number; ok: boolean };
}

export function complianceSnapshot(record: PartnerRecord | null | undefined, settings: Pick<PartnerSettings, "alertDays" | "requirements">, now: Date, fallbackRbq = ""): ComplianceSnapshot {
  const req = settings.requirements;
  const c = record?.compliance;
  const held = heldSubcategories(record);
  const auto = c?.automobile;
  const ai = record?.additionalInsured ?? null;
  const valid = validHalocarbons(record, now).length;
  return {
    rbq: { number: (c?.rbq.number || fallbackRbq).trim(), state: docState(c?.rbq ?? { expiresOn: null }, now, settings.alertDays), subcategories: held.list, subcategoriesSource: held.source },
    liability: { state: docState(c?.assurance ?? { expiresOn: null }, now, settings.alertDays), amount: c?.assurance.amount ?? null, amountState: amountState(c?.assurance.amount, req.minLiability), min: req.minLiability },
    endorsement: { required: req.requireEndorsement, confirmed: Boolean(ai?.confirmed), hasDocument: Boolean(ai?.fileId), date: ai?.date ?? null, ok: Boolean(ai?.confirmed && ai.fileId) },
    auto: { required: req.requireAuto, entered: docEntered(auto), state: docState(auto ?? { expiresOn: null }, now, settings.alertDays), amount: auto?.amount ?? null, amountState: amountState(auto?.amount, req.minAuto), min: req.minAuto },
    halocarbons: { required: req.requireHalocarbon, valid, total: record?.halocarbons?.length ?? 0, ok: valid > 0 },
  };
}
