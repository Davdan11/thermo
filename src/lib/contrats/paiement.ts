/* ==================================================================
   Conformité C1 — paiement du client à l'INSTALLATEUR (bénéficiaire
   nommé au contrat). Modes et échéancier propres à chaque installateur
   (sa fiche). Règle du contrat conclu à distance : tout versement
   demandé AVANT l'exécution des travaux (à la signature, avant le
   début) se paie par carte de crédit seulement ; sinon, blocage.
   Fonctions pures.
   ================================================================== */

import { percentOf } from "@/lib/soumissions/money";
import {
  BEFORE_WORK,
  INSTALLMENT_WHEN,
  INSTALLMENT_WHEN_LABELS,
  PAYMENT_MODES,
  PAYMENT_MODE_LABELS,
  type Installment,
  type InstallmentWhen,
  type PaymentMode,
  type PaymentProfile,
} from "./types";

export const emptyPaymentProfile = (): PaymentProfile => ({ methods: [], schedule: [], notes: "", updatedAt: null, updatedBy: null });

const isMode = (v: unknown): v is PaymentMode => typeof v === "string" && (PAYMENT_MODES as readonly string[]).includes(v);
const isWhen = (v: unknown): v is InstallmentWhen => typeof v === "string" && (INSTALLMENT_WHEN as readonly string[]).includes(v);
const pct = (v: unknown) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? Math.round(Math.min(100, Math.max(0, n)) * 100) / 100 : 0;
};

export function normalizePaymentProfile(v: unknown): PaymentProfile {
  const d = v && typeof v === "object" && !Array.isArray(v) ? (v as Partial<PaymentProfile>) : {};
  const schedule: Installment[] = [];
  for (const [i, raw] of (Array.isArray(d.schedule) ? d.schedule : []).slice(0, 6).entries()) {
    if (!raw || typeof raw !== "object") continue;
    const x = raw as Partial<Installment>;
    if (!isWhen(x.when)) continue;
    schedule.push({
      id: typeof x.id === "string" && /^[a-z0-9_-]{1,20}$/i.test(x.id) ? x.id : `v${i + 1}`,
      label: typeof x.label === "string" && x.label.trim() ? x.label.trim().slice(0, 80) : INSTALLMENT_WHEN_LABELS[x.when],
      when: x.when,
      percent: pct(x.percent),
      methods: [...new Set((Array.isArray(x.methods) ? x.methods : []).filter(isMode))],
    });
  }
  return {
    methods: [...new Set((Array.isArray(d.methods) ? d.methods : []).filter(isMode))],
    schedule,
    notes: typeof d.notes === "string" ? d.notes.trim().slice(0, 600) : "",
    updatedAt: typeof d.updatedAt === "string" ? d.updatedAt : null,
    updatedBy: typeof d.updatedBy === "string" ? d.updatedBy : null,
  };
}

export const isBeforeWork = (i: Pick<Installment, "when">) => BEFORE_WORK.includes(i.when);

/** Problèmes bloquants de l'échéancier (libellés clairs). */
export function paymentProblems(p: PaymentProfile | null | undefined): string[] {
  if (!p || (!p.methods.length && !p.schedule.length)) return ["Modes de paiement et échéancier de l’installateur à saisir (fiche du partenaire, section « Paiement du client »)"];
  const out: string[] = [];
  if (!p.methods.length) out.push("Modes de paiement de l’installateur à saisir");
  if (!p.schedule.length) out.push("Échéancier de paiement de l’installateur à saisir");
  const total = Math.round(p.schedule.reduce((s, i) => s + i.percent, 0) * 100) / 100;
  if (p.schedule.length && total !== 100) out.push(`Échéancier : les versements totalisent ${String(total).replace(".", ",")} % au lieu de 100 %`);
  for (const i of p.schedule) {
    if (!i.methods.length) out.push(`Versement « ${i.label} » : mode de paiement à choisir`);
    const notOffered = i.methods.filter((m) => !p.methods.includes(m));
    if (notOffered.length) out.push(`Versement « ${i.label} » : ${notOffered.map((m) => PAYMENT_MODE_LABELS[m]).join(", ")} absent des modes offerts`);
    if (isBeforeWork(i) && i.percent > 0 && (i.methods.length !== 1 || i.methods[0] !== "carte")) {
      out.push(`Acompte avant les travaux (« ${i.label} ») : carte de crédit seulement, aucun autre mode`);
    }
  }
  return out;
}

export interface InstallmentAmount {
  id: string;
  label: string;
  when: InstallmentWhen;
  whenLabel: string;
  percent: number;
  methods: string[];
  cents: number;
  beforeWork: boolean;
}

/** Montants de chaque versement ; le dernier reçoit l'arrondi, la somme égale toujours le total. */
export function installmentAmounts(schedule: readonly Installment[], totalCents: number): InstallmentAmount[] {
  let left = Math.max(0, Math.round(totalCents));
  return schedule.map((i, idx) => {
    const cents = idx === schedule.length - 1 ? left : Math.min(left, percentOf(totalCents, i.percent));
    left -= cents;
    return { id: i.id, label: i.label, when: i.when, whenLabel: INSTALLMENT_WHEN_LABELS[i.when], percent: i.percent, methods: i.methods.map((m) => PAYMENT_MODE_LABELS[m]), cents, beforeWork: isBeforeWork(i) };
  });
}

/** Lecture du formulaire de la fiche (champs répétés v1…v4). */
export function paymentProfileFromForm(fd: FormData): PaymentProfile {
  const methods = fd.getAll("methods").map(String);
  const schedule: unknown[] = [];
  for (let i = 1; i <= 4; i++) {
    const when = String(fd.get(`v${i}_when`) ?? "");
    const percent = String(fd.get(`v${i}_percent`) ?? "").trim();
    if (!when || !percent) continue;
    schedule.push({ id: `v${i}`, label: String(fd.get(`v${i}_label`) ?? ""), when, percent, methods: fd.getAll(`v${i}_methods`).map(String) });
  }
  return normalizePaymentProfile({ methods, schedule, notes: String(fd.get("notes") ?? "") });
}
