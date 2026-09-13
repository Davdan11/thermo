/* ==================================================================
   Chantier A — Rentabilité réelle : calculs purs (aucun disque).

   Par canal et par période (mois civils, heure de Montréal) :
   - dépenses      : saisies par le propriétaire (ou l'API, plus tard) ;
   - demandes      : demandes du journal, canal de CHAQUE demande ;
   - soumissions   : première date d'envoi dans la période ;
   - ventes        : première acceptation dans la période ;
     soumissions et ventes sont rattachées au canal de la PREMIÈRE
     demande du client (comme l'accueil du CRM) ;
   - commissions   : facture émise (non annulée) si elle existe, sinon
     commission prévue = pourcentage du volet B appliqué au sous-total
     accepté après rabais et AVANT taxes. L'aide LogisVert est
     appliquée après les taxes : elle n'y entre jamais ;
   - coût par demande, coût par vente, rendement (commission ÷ dépense).
   Sous les seuils (SEUILS), un ratio est « données insuffisantes ».
   Rien n'est extrapolé : un mois sans dépense saisie n'est pas deviné.
   ================================================================== */

import { CHANNEL_LABELS, type ChannelId } from "@/lib/attribution/core";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import { firstAcceptance, plannedCommission } from "@/lib/ads/sales";
import type { Quote } from "@/lib/soumissions/types";
import { channelOfEntry, isDemand } from "../crm/sources";
import { localYmd } from "../crm/time";
import { SEUILS, SPEND_CHANNELS, type RentaPeriodId, type SpendChannelId, type SpendEntry, type SpendSource } from "./types";

export interface RentaClient {
  id: string;
  firstChannel: ChannelId | null;
  firstAt: string;
  journal: JournalEntry[];
  quotes: Quote[];
}

export interface RentaInvoice {
  quoteId: string;
  commissionCents: number;
  status: string;
}

export interface RentaInput {
  clients: RentaClient[];
  journal: JournalEntry[];
  spends: SpendEntry[];
  /** Pourcentage du volet B (réglages des paiements). */
  percent: number;
  invoices: RentaInvoice[];
  now: Date;
}

/* ---------------- Mois ---------------- */

export const monthOf = (d: Date | string): string => localYmd(d).slice(0, 7);

export function addMonths(month: string, n: number): string {
  const d = new Date(`${month}-15T12:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + n);
  return d.toISOString().slice(0, 7);
}

export function monthsBetween(from: string, to: string): string[] {
  const out: string[] = [];
  for (let m = from; m <= to && out.length < 240; m = addMonths(m, 1)) out.push(m);
  return out;
}

const longMonth = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", month: "long", year: "numeric" });
const shortMonth = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", month: "short" });
export const monthLabel = (m: string): string => longMonth.format(new Date(`${m}-15T12:00:00Z`));
export const monthShort = (m: string): string => shortMonth.format(new Date(`${m}-15T12:00:00Z`));

export function periodMonths(id: RentaPeriodId, now: Date): { from: string; to: string } {
  const cur = monthOf(now);
  switch (id) {
    case "mois":
      return { from: cur, to: cur };
    case "mois-precedent": {
      const p = addMonths(cur, -1);
      return { from: p, to: p };
    }
    case "3-mois":
      return { from: addMonths(cur, -2), to: cur };
    case "12-mois":
      return { from: addMonths(cur, -11), to: cur };
  }
}

export function rangeLabel(r: { from: string; to: string }): string {
  return r.from === r.to ? monthLabel(r.from) : `${monthLabel(r.from)} à ${monthLabel(r.to)}`;
}

/* ---------------- Canaux ---------------- */

const SPEND_OF = new Map<ChannelId, SpendChannelId>(SPEND_CHANNELS.flatMap((s) => s.channels.map((c) => [c as ChannelId, s.id as SpendChannelId] as const)));

/** Canal de dépense qui couvre un canal d'arrivée (null : canal non payant). */
export const spendChannelOf = (ch: ChannelId | null | undefined): SpendChannelId | null => (ch ? (SPEND_OF.get(ch) ?? null) : null);

/** Clé de ligne : canal de dépense, sinon canal d'arrivée, sinon « saisi » (sans demande en ligne). */
export const channelKey = (ch: ChannelId | null | undefined): string => spendChannelOf(ch) ?? ch ?? "saisi";

export function channelKeyLabel(key: string): string {
  const s = SPEND_CHANNELS.find((c) => c.id === key);
  if (s) return s.label;
  if (key === "saisi") return "Sans demande en ligne";
  return CHANNEL_LABELS[key as ChannelId] ?? key;
}

const isPaidKey = (key: string) => SPEND_CHANNELS.some((c) => c.id === key);

/* ---------------- Ventes et commissions ---------------- */

export interface Sale {
  clientId: string;
  quoteId: string;
  quoteNumber: string;
  at: string;
  month: string;
  channel: ChannelId | null;
  key: string;
  /** null : acceptation sans totaux lisibles (jamais deviné). */
  commissionCents: number | null;
  invoiced: boolean;
}

/** Ventes signées (première acceptation de chaque soumission) et leur commission réelle. */
export function salesOf(input: Pick<RentaInput, "clients" | "invoices" | "percent" | "now">): Sale[] {
  const byQuote = new Map<string, RentaInvoice>();
  for (const i of input.invoices) if (i.status !== "annulee" && !byQuote.has(i.quoteId)) byQuote.set(i.quoteId, i);
  const out: Sale[] = [];
  for (const c of input.clients) {
    for (const q of c.quotes) {
      const a = firstAcceptance(q);
      if (!a || Date.parse(a.at) > input.now.getTime()) continue;
      const inv = byQuote.get(q.id);
      const planned = a.snapshot?.totals && Number.isFinite(a.snapshot.totals.taxableCents) ? plannedCommission(a, input.percent) : null;
      out.push({
        clientId: c.id,
        quoteId: q.id,
        quoteNumber: q.number,
        at: a.at,
        month: monthOf(a.at),
        channel: c.firstChannel,
        key: channelKey(c.firstChannel),
        commissionCents: inv ? Math.max(0, Math.round(inv.commissionCents)) : planned,
        invoiced: Boolean(inv),
      });
    }
  }
  return out.sort((x, y) => y.at.localeCompare(x.at));
}

const firstSent = (q: Quote): string | null =>
  q.versions
    .map((v) => v.sentAt)
    .filter((x): x is string => Boolean(x))
    .sort()[0] ?? null;

/* ---------------- Vue par canal ---------------- */

export type MetricStatus = "ok" | "insuffisant" | "sans-depense" | "non-payant";

export interface Metric {
  /** Valeur calculée (cents pour un coût, multiple pour le rendement) ; null si incalculable. */
  value: number | null;
  status: MetricStatus;
}

export interface RentaRow {
  key: string;
  label: string;
  paid: boolean;
  /** null : aucune dépense saisie sur la période (ou canal non payant). */
  spendCents: number | null;
  /** Mois de la période avec une dépense saisie. */
  spendMonths: number;
  spendSources: SpendSource[];
  demandes: number;
  soumissions: number;
  ventes: number;
  commissionCents: number;
  /** Part des commissions déjà facturées (le reste est prévu). */
  invoicedCents: number;
  /** Ventes dont la commission n'a pas pu être calculée. */
  incomplete: number;
  costPerDemand: Metric;
  costPerSale: Metric;
  roi: Metric;
}

export interface RentaMonth {
  month: string;
  label: string;
  spendCents: number;
  hasSpend: boolean;
  commissionCents: number;
  /** Commissions des ventes venues d'un canal payant. */
  paidCommissionCents: number;
  ventes: number;
  demandes: number;
}

export interface RentaView {
  from: string;
  to: string;
  label: string;
  months: number;
  rows: RentaRow[];
  /** Tous les canaux payants réunis. */
  paid: RentaRow;
  total: { demandes: number; soumissions: number; ventes: number; commissionCents: number; invoicedCents: number };
  monthly: RentaMonth[];
  /** Au moins deux mois avec des données réelles : les graphiques peuvent s'afficher. */
  chartReady: boolean;
  seuils: typeof SEUILS;
  percent: number;
}

function ratio(num: number | null, den: number, min: number): Metric {
  if (num === null) return { value: null, status: "sans-depense" };
  if (den <= 0) return { value: null, status: "insuffisant" };
  return { value: num / den, status: den >= min ? "ok" : "insuffisant" };
}

function metrics(paid: boolean, spend: number | null, demandes: number, ventes: number, commission: number): Pick<RentaRow, "costPerDemand" | "costPerSale" | "roi"> {
  if (!paid) {
    const none: Metric = { value: null, status: "non-payant" };
    return { costPerDemand: none, costPerSale: none, roi: none };
  }
  const roi: Metric = spend === null || spend === 0 ? { value: null, status: "sans-depense" } : { value: commission / spend, status: ventes >= SEUILS.ventes ? "ok" : "insuffisant" };
  return { costPerDemand: ratio(spend, demandes, SEUILS.demandes), costPerSale: ratio(spend, ventes, SEUILS.ventes), roi };
}

interface Acc {
  demandes: number;
  soumissions: number;
  ventes: number;
  commissionCents: number;
  invoicedCents: number;
  incomplete: number;
}
const zero = (): Acc => ({ demandes: 0, soumissions: 0, ventes: 0, commissionCents: 0, invoicedCents: 0, incomplete: 0 });

export function buildRentabilite(input: RentaInput, range: { from: string; to: string }): RentaView {
  const nowMs = input.now.getTime();
  const inRange = (m: string) => m >= range.from && m <= range.to;
  const accs = new Map<string, Acc>();
  const acc = (key: string) => {
    let a = accs.get(key);
    if (!a) accs.set(key, (a = zero()));
    return a;
  };
  for (const s of SPEND_CHANNELS) acc(s.id);

  for (const e of input.journal) {
    if (!isDemand(e) || Date.parse(e.at) > nowMs || !inRange(monthOf(e.at))) continue;
    acc(channelKey(channelOfEntry(e))).demandes++;
  }
  for (const c of input.clients) {
    for (const q of c.quotes) {
      const s = firstSent(q);
      if (s && Date.parse(s) <= nowMs && inRange(monthOf(s))) acc(channelKey(c.firstChannel)).soumissions++;
    }
  }
  const sales = salesOf(input);
  for (const s of sales) {
    if (!inRange(s.month)) continue;
    const a = acc(s.key);
    a.ventes++;
    a.commissionCents += s.commissionCents ?? 0;
    if (s.invoiced) a.invoicedCents += s.commissionCents ?? 0;
    if (s.commissionCents === null) a.incomplete++;
  }

  const spendIn = (key: string) => {
    const entries = input.spends.filter((e) => e.channel === key && inRange(e.month));
    return { cents: entries.length ? entries.reduce((s, e) => s + e.cents, 0) : null, months: new Set(entries.map((e) => e.month)).size, sources: [...new Set(entries.map((e) => e.source))] };
  };

  const row = (key: string, a: Acc): RentaRow => {
    const paid = isPaidKey(key);
    const sp = paid ? spendIn(key) : { cents: null, months: 0, sources: [] as SpendSource[] };
    return { key, label: channelKeyLabel(key), paid, spendCents: sp.cents, spendMonths: sp.months, spendSources: sp.sources, ...a, ...metrics(paid, sp.cents, a.demandes, a.ventes, a.commissionCents) };
  };

  const paidRows = SPEND_CHANNELS.map((s) => row(s.id, acc(s.id)));
  const others = [...accs.entries()]
    .filter(([k, a]) => !isPaidKey(k) && (a.demandes || a.soumissions || a.ventes))
    .map(([k, a]) => row(k, a))
    .sort((x, y) => y.ventes - x.ventes || y.demandes - x.demandes || x.label.localeCompare(y.label, "fr-CA"));
  const rows = [...paidRows, ...others];

  const sum = (xs: RentaRow[], f: (r: RentaRow) => number) => xs.reduce((s, r) => s + f(r), 0);
  const paidSpend = paidRows.some((r) => r.spendCents !== null) ? sum(paidRows, (r) => r.spendCents ?? 0) : null;
  const paidAcc: Acc = {
    demandes: sum(paidRows, (r) => r.demandes),
    soumissions: sum(paidRows, (r) => r.soumissions),
    ventes: sum(paidRows, (r) => r.ventes),
    commissionCents: sum(paidRows, (r) => r.commissionCents),
    invoicedCents: sum(paidRows, (r) => r.invoicedCents),
    incomplete: sum(paidRows, (r) => r.incomplete),
  };
  const paid: RentaRow = {
    key: "publicite",
    label: "Publicité (tous les canaux payants)",
    paid: true,
    spendCents: paidSpend,
    spendMonths: new Set(input.spends.filter((e) => inRange(e.month)).map((e) => e.month)).size,
    spendSources: [...new Set(paidRows.flatMap((r) => r.spendSources))],
    ...paidAcc,
    ...metrics(true, paidSpend, paidAcc.demandes, paidAcc.ventes, paidAcc.commissionCents),
  };

  const monthly: RentaMonth[] = monthsBetween(addMonths(range.to, -11), range.to).map((m) => {
    const sp = input.spends.filter((e) => e.month === m);
    const ms = sales.filter((s) => s.month === m);
    return {
      month: m,
      label: monthShort(m),
      spendCents: sp.reduce((s, e) => s + e.cents, 0),
      hasSpend: sp.length > 0,
      commissionCents: ms.reduce((s, x) => s + (x.commissionCents ?? 0), 0),
      paidCommissionCents: ms.filter((x) => isPaidKey(x.key)).reduce((s, x) => s + (x.commissionCents ?? 0), 0),
      ventes: ms.length,
      demandes: input.journal.filter((e) => isDemand(e) && Date.parse(e.at) <= nowMs && monthOf(e.at) === m).length,
    };
  });

  return {
    from: range.from,
    to: range.to,
    label: rangeLabel(range),
    months: monthsBetween(range.from, range.to).length,
    rows,
    paid,
    total: { demandes: sum(rows, (r) => r.demandes), soumissions: sum(rows, (r) => r.soumissions), ventes: sum(rows, (r) => r.ventes), commissionCents: sum(rows, (r) => r.commissionCents), invoicedCents: sum(rows, (r) => r.invoicedCents) },
    monthly,
    chartReady: monthly.filter((m) => m.hasSpend || m.commissionCents > 0).length >= 2,
    seuils: SEUILS,
    percent: input.percent,
  };
}

/* ---------------- Coût d'acquisition d'un client ---------------- */

export type Acquisition =
  | {
      status: "calculable";
      channel: string;
      month: string;
      monthLabel: string;
      spendCents: number;
      /** Nouveaux clients arrivés par ce canal ce mois-là (celui-ci compris). */
      newClients: number;
      cacCents: number;
      /** Moins de SEUILS.demandes nouveaux clients : estimation fragile. */
      fragile: boolean;
      /** Commissions de ce client (ventes signées), null s'il n'a rien signé. */
      commissionCents: number | null;
      roi: number | null;
    }
  | { status: "non-calculable"; reason: string; channel?: string };

/** Mois d'acquisition : première demande reçue par le canal d'arrivée du client (sinon son premier contact). */
export function acquisitionMonth(c: RentaClient): string {
  const first = c.journal
    .filter((e) => isDemand(e) && channelOfEntry(e) === c.firstChannel)
    .map((e) => e.at)
    .sort()[0];
  return monthOf(first ?? c.firstAt);
}

/** Coût d'acquisition = dépense du canal le mois d'arrivée ÷ nouveaux clients de ce canal ce mois-là. */
export function acquisitionFor(clientId: string, input: RentaInput): Acquisition | null {
  const c = input.clients.find((x) => x.id === clientId);
  if (!c) return null;
  const ch = c.firstChannel;
  if (!ch) return { status: "non-calculable", reason: "Client saisi à la main ou sans demande en ligne : on ne sait pas ce qui l’a amené." };
  const label = CHANNEL_LABELS[ch] ?? ch;
  if (ch === "inconnu" || ch === "non-transmis") return { status: "non-calculable", reason: "Canal d’arrivée inconnu (demande d’avant le suivi ou non transmise).", channel: label };
  const key = spendChannelOf(ch);
  if (!key) return { status: "non-calculable", reason: `Arrivé par ${label} : canal sans dépense publicitaire.`, channel: label };
  const month = acquisitionMonth(c);
  const entries = input.spends.filter((e) => e.channel === key && e.month === month);
  if (!entries.length) return { status: "non-calculable", reason: `Aucune dépense ${channelKeyLabel(key)} saisie pour ${monthLabel(month)}.`, channel: label };
  const spendCents = entries.reduce((s, e) => s + e.cents, 0);
  const newClients = Math.max(1, input.clients.filter((x) => spendChannelOf(x.firstChannel) === key && acquisitionMonth(x) === month).length);
  const cacCents = Math.round(spendCents / newClients);
  const mine = salesOf({ ...input, clients: [c] });
  const commissionCents = mine.length ? mine.reduce((s, x) => s + (x.commissionCents ?? 0), 0) : null;
  return {
    status: "calculable",
    channel: label,
    month,
    monthLabel: monthLabel(month),
    spendCents,
    newClients,
    cacCents,
    fragile: newClients < SEUILS.demandes,
    commissionCents,
    roi: commissionCents !== null && cacCents > 0 ? commissionCents / cacCents : null,
  };
}
