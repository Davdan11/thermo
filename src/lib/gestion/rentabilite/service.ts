/* ==================================================================
   Chantier A — Rentabilité : lecture des magasins (serveur seulement).
   AUCUNE vérification d'accès ici : pages et Server Actions de
   /gestion passent d'abord par requireAdmin().
   ================================================================== */

import type { CommissionsData } from "../commissions/types";
import { readCommissions } from "../commissions/store";
import type { CrmIndex } from "../crm/model";
import { loadCrmIndex } from "../crm/service";
import { acquisitionFor, buildRentabilite, monthLabel, periodMonths, type Acquisition, type RentaInput, type RentaView } from "./calc";
import { readRentabilite } from "./store";
import { spendChannelLabel, SPEND_CHANNELS, type RentaPeriodId, type SpendEntry, type SpendSource } from "./types";

export function rentaInput(index: CrmIndex, commissions: Pick<CommissionsData, "invoices" | "settings">, spends: SpendEntry[], now: Date): RentaInput {
  return {
    clients: index.clients.map((c) => ({ id: c.b.id, firstChannel: c.b.firstChannel, firstAt: c.b.firstAt, journal: c.b.journal, quotes: c.b.quotes })),
    journal: index.src.journal,
    spends,
    percent: commissions.settings.percent,
    invoices: commissions.invoices.map((i) => ({ quoteId: i.quoteId, commissionCents: i.commissionCents, status: i.status })),
    now,
  };
}

export interface SpendRowDTO {
  key: string;
  channel: SpendEntry["channel"];
  channelLabel: string;
  month: string;
  monthLabel: string;
  cents: number;
  source: SpendSource;
  note?: string;
}

export interface RentabilitePageData {
  view: RentaView;
  spends: SpendRowDTO[];
  channels: Array<{ id: SpendEntry["channel"]; label: string }>;
}

export async function rentabilitePage(period: RentaPeriodId, now = new Date()): Promise<RentabilitePageData> {
  const [index, comm, data] = await Promise.all([loadCrmIndex(), readCommissions(), readRentabilite()]);
  const view = buildRentabilite(rentaInput(index, comm, data.spends, now), periodMonths(period, now));
  const spends = [...data.spends]
    .sort((a, b) => b.month.localeCompare(a.month) || a.channel.localeCompare(b.channel))
    .slice(0, 60)
    .map((e) => ({ key: `${e.channel}|${e.month}`, channel: e.channel, channelLabel: spendChannelLabel(e.channel), month: e.month, monthLabel: monthLabel(e.month), cents: e.cents, source: e.source, ...(e.note ? { note: e.note } : {}) }));
  return { view, spends, channels: SPEND_CHANNELS.map((c) => ({ id: c.id, label: c.label })) };
}

/** Coût d'acquisition du client (fiche) ; null si le client n'existe pas. */
export async function acquisitionForClient(clientId: string, now = new Date()): Promise<Acquisition | null> {
  const [index, comm, data] = await Promise.all([loadCrmIndex(), readCommissions(), readRentabilite()]);
  const c = index.byId.get(clientId);
  if (!c) return null;
  return acquisitionFor(c.b.id, rentaInput(index, comm, data.spends, now));
}
