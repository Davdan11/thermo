/* ==================================================================
   L'argent : ce qui est accepté, ce qui est en jeu, le taux
   d'acceptation, le panier moyen.

   Revenu = total TAXES COMPRISES (acceptance.totalCents), avec la base
   avant taxes en dessous. L'aide LogisVert est TOUJOURS versée au
   client par Hydro-Québec : jamais comptée comme revenu, jamais
   soustraite. logisvertMode et clientPaysCents sont ignorés, y compris
   sur d'anciennes soumissions en mode « cession ». L'aide n'est
   montrée qu'à titre d'information.
   ================================================================== */

import { CHANNEL_LABELS, type ChannelId } from "@/lib/attribution/core";
import { PERIODS, type PeriodId } from "@/lib/gestion/statistiques";
import { TAXES } from "@/lib/soumissions/config";
import { effectiveStatus, latestSent } from "@/lib/soumissions/quote";
import { computeTotals, defaultSelection } from "@/lib/soumissions/totals";
import type { Quote, QuoteVersion } from "@/lib/soumissions/types";
import { addDaysYmd, localYmd } from "./time";

const CURRENT_RATES = { tpsPer100k: TAXES.tps.ratePer100k, tvqPer100k: TAXES.tvq.ratePer100k };
const ratesOf = (v: QuoteVersion) => v.frozen?.taxes ?? CURRENT_RATES;

/** Totaux d'une version telle que présentée (options cochées d'office), aux taux de son envoi. */
export function versionTotals(v: QuoteVersion, today: string) {
  return computeTotals(v.content, defaultSelection(v.content.lines), ratesOf(v), today);
}

/** Montant d'une soumission : accepté (taxes comprises) sinon présenté. */
export function quoteAmount(v: QuoteVersion, today: string): number {
  return v.acceptance ? v.acceptance.totalCents : versionTotals(v, today).totalCents;
}

export interface MoneyView {
  accepted: { n: number; totalCents: number; taxableCents: number };
  atStake: { envoyee: { n: number; cents: number }; ouverte: { n: number; cents: number }; totalCents: number };
  rate: { accepted: number; refused: number; expired: number; pending: number; value: number | null };
  medianDays: number | null;
  averageCents: number | null;
  /** Information seulement : versée au client par Hydro-Québec. */
  logisvert: { cents: number; n: number };
  monthly: Array<{ key: string; label: string; cents: number; n: number }>;
  funnel: { sent: number; opened: number; accepted: number };
  byChannel: Array<{ id: string; label: string; cents: number; n: number }>;
}

const monthLabel = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", month: "short" });
const monthLabelYear = new Intl.DateTimeFormat("fr-CA", { timeZone: "UTC", month: "short", year: "2-digit" });

export function periodRange(period: PeriodId, now: Date): { from: string; to: string } {
  const def = PERIODS.find((p) => p.id === period) ?? PERIODS[1];
  const to = localYmd(now);
  return { from: def.days ? addDaysYmd(to, -(def.days - 1)) : "0000-01-01", to };
}

function median(xs: number[]): number | null {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

export function buildMoney(quotes: Quote[], opts: { period: PeriodId; now: Date; channelOfQuote?: (quoteId: string) => ChannelId | null }): MoneyView {
  const { from, to } = periodRange(opts.period, opts.now);
  const today = to;
  const inRange = (iso: string | null | undefined) => {
    if (!iso) return false;
    const d = localYmd(iso);
    return d >= from && d <= to;
  };

  const accepted: Array<{ q: Quote; v: QuoteVersion }> = [];
  for (const q of quotes) for (const v of q.versions) if (v.acceptance && inRange(v.acceptance.at)) accepted.push({ q, v });

  const acceptedTotal = accepted.reduce((s, { v }) => s + v.acceptance!.totalCents, 0);
  const acceptedTaxable = accepted.reduce((s, { v }) => s + (v.acceptance!.snapshot?.totals?.taxableCents ?? versionTotals(v, today).taxableCents), 0);

  const stake = { envoyee: { n: 0, cents: 0 }, ouverte: { n: 0, cents: 0 } };
  let logisvertCents = 0;
  let logisvertN = 0;
  for (const q of quotes) {
    const v = latestSent(q);
    if (!v) continue;
    const st = effectiveStatus(v, today);
    if (st === "envoyee" || st === "ouverte") {
      const t = versionTotals(v, today);
      stake[st].n++;
      stake[st].cents += t.totalCents;
      if (t.logisvertCents > 0) {
        logisvertCents += t.logisvertCents;
        logisvertN++;
      }
    }
  }
  for (const { v } of accepted) {
    const aid = v.acceptance!.snapshot?.totals?.logisvertCents ?? 0;
    if (aid > 0) {
      logisvertCents += aid;
      logisvertN++;
    }
  }

  // Taux et entonnoir : soumissions envoyées dans la période (dernière version envoyée).
  const rate = { accepted: 0, refused: 0, expired: 0, pending: 0 };
  const funnel = { sent: 0, opened: 0, accepted: 0 };
  for (const q of quotes) {
    const v = latestSent(q);
    if (!v || !inRange(v.sentAt)) continue;
    funnel.sent++;
    if (v.views.count > 0 || v.acceptance || v.refusal) funnel.opened++;
    if (v.acceptance) funnel.accepted++;
    const st = effectiveStatus(v, today);
    if (v.acceptance) rate.accepted++;
    else if (v.refusal) rate.refused++;
    else if (st === "expiree") rate.expired++;
    else if (st === "envoyee" || st === "ouverte") rate.pending++;
  }
  const decided = rate.accepted + rate.refused + rate.expired;

  const delays = accepted.filter(({ v }) => v.sentAt).map(({ v }) => (Date.parse(v.acceptance!.at) - Date.parse(v.sentAt!)) / 86_400_000);
  const med = median(delays);

  // Douze derniers mois, montants acceptés (taxes comprises).
  const monthKeys: string[] = [];
  const d = new Date(`${today.slice(0, 7)}-01T12:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() - 11);
  for (let i = 0; i < 12; i++) {
    monthKeys.push(d.toISOString().slice(0, 7));
    d.setUTCMonth(d.getUTCMonth() + 1);
  }
  const monthly = monthKeys.map((key) => ({ key, label: (key.slice(0, 4) === today.slice(0, 4) ? monthLabel : monthLabelYear).format(new Date(`${key}-01T12:00:00Z`)), cents: 0, n: 0 }));
  const mIndex = new Map(monthKeys.map((k, i) => [k, i]));
  for (const q of quotes)
    for (const v of q.versions) {
      if (!v.acceptance) continue;
      const i = mIndex.get(localYmd(v.acceptance.at).slice(0, 7));
      if (i === undefined) continue;
      monthly[i].cents += v.acceptance.totalCents;
      monthly[i].n++;
    }

  // Canaux qui rapportent : canal de la première demande du client.
  const ch = new Map<string, { cents: number; n: number }>();
  for (const { q, v } of accepted) {
    const id = opts.channelOfQuote?.(q.id) ?? "saisi";
    const cur = ch.get(id) ?? { cents: 0, n: 0 };
    cur.cents += v.acceptance!.totalCents;
    cur.n++;
    ch.set(id, cur);
  }
  const byChannel = [...ch.entries()]
    .map(([id, x]) => ({ id, label: id === "saisi" ? "Sans demande en ligne" : CHANNEL_LABELS[id as ChannelId] ?? id, ...x }))
    .sort((a, b) => b.cents - a.cents || a.label.localeCompare(b.label, "fr-CA"));

  return {
    accepted: { n: accepted.length, totalCents: acceptedTotal, taxableCents: acceptedTaxable },
    atStake: { ...stake, totalCents: stake.envoyee.cents + stake.ouverte.cents },
    rate: { ...rate, value: decided ? rate.accepted / decided : null },
    medianDays: med === null ? null : Math.round(med * 10) / 10,
    averageCents: accepted.length ? Math.round(acceptedTotal / accepted.length) : null,
    logisvert: { cents: logisvertCents, n: logisvertN },
    monthly,
    funnel,
    byChannel,
  };
}
