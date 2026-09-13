/* ==================================================================
   Refonte R2 — « Pourquoi on perd » : analyse des pertes, par étape
   (la plus haute atteinte avant la perte) et par raison, sur une
   période, et résumé mensuel. Pur, sur l'index reçu (un vendeur :
   ses dossiers seulement).

   Deux lectures de chaque perte :
     raison structurée  choisie à la main (prix, délai, installateur,
                        concurrent, projet reporté, autre) ; absente :
                        « non précisée » (anciennes pertes, pertes
                        automatiques) ;
     motif automatique  ce que disent les faits (soumission refusée,
                        sans réponse, expirée, contrat refusé ou
                        annulé, job annulé, avant toute soumission).
   Montant perdu : la dernière soumission envoyée (taxes comprises,
   jamais l'aide LogisVert), sinon l'estimation notée ; inconnu : 0.
   Seules les pertes en cours comptent : un client revenu (réactivé)
   n'est plus perdu.
   ================================================================== */

import { latestSent } from "@/lib/soumissions/quote";
import type { ClientComputed, CrmIndex } from "./model";
import { quoteAmount } from "./money";
import { JOURNEY_STEPS, LOSS_CAUSE_LABELS, LOSS_CAUSES, LOSS_MOTIF_LABELS, LOSS_MOTIFS, parcoursSettingsOf, stepLabel, type JourneyStep, type LossCause, type LossMotif } from "./parcours";
import { dateLong, localYmd } from "./time";

export const LOSS_PERIODS = [
  { id: "30", label: "30 jours", days: 30 },
  { id: "90", label: "90 jours", days: 90 },
  { id: "365", label: "12 mois", days: 365 },
  { id: "tout", label: "Tout", days: null },
] as const;
export type LossPeriodId = (typeof LOSS_PERIODS)[number]["id"];
export const parseLossPeriod = (v: unknown): LossPeriodId => (LOSS_PERIODS.some((p) => p.id === v) ? (v as LossPeriodId) : "90");

export interface LossRow {
  id: string;
  name: string;
  city: string;
  at: string;
  when: string;
  reached: JourneyStep;
  reachedLabel: string;
  cause: LossCause | null;
  causeLabel: string;
  motif: LossMotif;
  motifLabel: string;
  reason: string;
  cents: number;
}

export interface LossView {
  period: { id: LossPeriodId; label: string };
  periods: ReadonlyArray<{ id: LossPeriodId; label: string }>;
  total: number;
  cents: number;
  byStep: Array<{ step: JourneyStep; label: string; n: number; cents: number }>;
  byCause: Array<{ id: LossCause | "non-precisee"; label: string; n: number }>;
  byMotif: Array<{ id: LossMotif; label: string; n: number }>;
  /** Étape × motif : où et pourquoi. */
  matrix: { motifs: Array<{ id: LossMotif; label: string }>; rows: Array<{ step: JourneyStep; label: string; counts: number[]; n: number }> };
  monthly: Array<{ month: string; label: string; n: number; cents: number; topStep: string | null; topReason: string | null }>;
  recent: LossRow[];
  worst: { step: string; n: number } | null;
  topReason: { label: string; n: number } | null;
}

const monthFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", month: "short", year: "numeric" });

function lostCents(c: ClientComputed, today: string): number {
  const amounts = c.b.quotes.map((q) => latestSent(q)).filter((v): v is NonNullable<typeof v> => Boolean(v)).map((v) => quoteAmount(v, today));
  return amounts.length ? Math.max(...amounts) : (c.b.record?.valueCents ?? 0);
}

const top = <K,>(m: Map<K, number>): [K, number] | null => [...m.entries()].sort((a, b) => b[1] - a[1])[0] ?? null;
const bump = <K,>(m: Map<K, number>, k: K, by = 1) => m.set(k, (m.get(k) ?? 0) + by);

export function lossRows(index: Pick<CrmIndex, "clients" | "now" | "src">): LossRow[] {
  const ps = parcoursSettingsOf(index.src.crm);
  const today = localYmd(index.now);
  return index.clients
    .filter((c) => c.journey?.state === "perdu" && c.journey.lost)
    .map((c) => {
      const l = c.journey!.lost!;
      return {
        id: c.b.id,
        name: c.b.firstName ? `${c.b.firstName}${c.b.lastName ? ` ${c.b.lastName.charAt(0)}.` : ""}` : "Sans nom",
        city: c.b.city,
        at: l.at,
        when: dateLong(l.at),
        reached: l.reached,
        reachedLabel: stepLabel(l.reached, ps),
        cause: l.cause,
        causeLabel: l.cause ? LOSS_CAUSE_LABELS[l.cause] : "Non précisée",
        motif: l.motif,
        motifLabel: LOSS_MOTIF_LABELS[l.motif],
        reason: [l.reason, l.detail].filter(Boolean).join(" : ").slice(0, 200),
        cents: lostCents(c, today),
      };
    })
    .sort((a, b) => b.at.localeCompare(a.at));
}

export function buildLossView(index: Pick<CrmIndex, "clients" | "now" | "src">, periodId: LossPeriodId): LossView {
  const ps = parcoursSettingsOf(index.src.crm);
  const def = LOSS_PERIODS.find((p) => p.id === periodId) ?? LOSS_PERIODS[1];
  const all = lossRows(index);
  const from = def.days === null ? "" : new Date(index.now.getTime() - def.days * 86_400_000).toISOString();
  const rows = all.filter((r) => r.at >= from);

  const steps = new Map<JourneyStep, { n: number; cents: number }>();
  const causes = new Map<LossCause | "non-precisee", number>();
  const motifs = new Map<LossMotif, number>();
  const cell = new Map<string, number>();
  const reasons = new Map<string, number>();
  for (const r of rows) {
    const s = steps.get(r.reached) ?? { n: 0, cents: 0 };
    s.n++;
    s.cents += r.cents;
    steps.set(r.reached, s);
    bump(causes, r.cause ?? "non-precisee");
    bump(motifs, r.motif);
    bump(cell, `${r.reached}|${r.motif}`);
    bump(reasons, r.cause ? r.causeLabel : r.motifLabel);
  }
  const usedMotifs = LOSS_MOTIFS.filter((m) => motifs.has(m));
  const byStep = JOURNEY_STEPS.filter((s) => steps.has(s)).map((s) => ({ step: s, label: stepLabel(s, ps), ...steps.get(s)! }));
  const worst = [...byStep].sort((a, b) => b.n - a.n)[0];
  const tr = top(reasons);

  // Résumé mensuel : les 12 derniers mois (toutes périodes), même si un mois est vide.
  const months: string[] = [];
  const [y, m] = localYmd(index.now).split("-").map(Number);
  for (let i = 11; i >= 0; i--) {
    const t = y * 12 + (m - 1) - i;
    months.push(`${Math.floor(t / 12)}-${String((t % 12) + 1).padStart(2, "0")}`);
  }
  const monthly = months.map((month) => {
    const list = all.filter((r) => localYmd(r.at).slice(0, 7) === month);
    const st = new Map<string, number>();
    const rs = new Map<string, number>();
    for (const r of list) {
      bump(st, r.reachedLabel);
      bump(rs, r.cause ? r.causeLabel : r.motifLabel);
    }
    return { month, label: monthFmt.format(new Date(`${month}-15T12:00:00Z`)), n: list.length, cents: list.reduce((s, r) => s + r.cents, 0), topStep: top(st)?.[0] ?? null, topReason: top(rs)?.[0] ?? null };
  });

  return {
    period: { id: def.id, label: def.label },
    periods: LOSS_PERIODS.map((p) => ({ id: p.id, label: p.label })),
    total: rows.length,
    cents: rows.reduce((s, r) => s + r.cents, 0),
    byStep,
    byCause: [...LOSS_CAUSES, "non-precisee" as const].filter((k) => causes.has(k)).map((k) => ({ id: k, label: k === "non-precisee" ? "Non précisée" : LOSS_CAUSE_LABELS[k], n: causes.get(k)! })),
    byMotif: usedMotifs.map((k) => ({ id: k, label: LOSS_MOTIF_LABELS[k], n: motifs.get(k)! })),
    matrix: { motifs: usedMotifs.map((k) => ({ id: k, label: LOSS_MOTIF_LABELS[k] })), rows: byStep.map((s) => ({ step: s.step, label: s.label, n: s.n, counts: usedMotifs.map((mo) => cell.get(`${s.step}|${mo}`) ?? 0) })) },
    monthly,
    recent: rows.slice(0, 40),
    worst: worst ? { step: worst.label, n: worst.n } : null,
    topReason: tr ? { label: tr[0], n: tr[1] } : null,
  };
}
