/* ==================================================================
   Chantier A — Rentabilité réelle : types et constantes (aucune
   dépendance au disque).

   Dépenses publicitaires saisies par canal et par mois. La source est
   gardée (« manuel » aujourd'hui, « api » plus tard) : le cerveau
   publicitaire pourra alimenter les mêmes lignes sans changer la page.
   ================================================================== */

import type { ChannelId } from "@/lib/attribution/core";

/** Canaux où l'on dépense, et les canaux d'arrivée (attribution) qu'ils couvrent. */
export const SPEND_CHANNELS = [
  { id: "google-ads", label: "Google Ads", channels: ["google-ads"] },
  { id: "meta", label: "Meta (Facebook, Instagram)", channels: ["facebook-instagram"] },
  { id: "microsoft", label: "Microsoft Ads (Bing)", channels: ["bing"] },
  { id: "autre", label: "Autres campagnes (utm)", channels: ["campagne"] },
] as const satisfies ReadonlyArray<{ id: string; label: string; channels: readonly ChannelId[] }>;

export type SpendChannelId = (typeof SPEND_CHANNELS)[number]["id"];
export const SPEND_CHANNEL_IDS = SPEND_CHANNELS.map((c) => c.id) as SpendChannelId[];
export const isSpendChannel = (v: unknown): v is SpendChannelId => typeof v === "string" && (SPEND_CHANNEL_IDS as string[]).includes(v);
export const spendChannelLabel = (id: SpendChannelId): string => SPEND_CHANNELS.find((c) => c.id === id)?.label ?? id;

/** « AAAA-MM ». */
export const MONTH_RE = /^\d{4}-(0[1-9]|1[0-2])$/;

export type SpendSource = "manuel" | "api";

export interface SpendEntry {
  channel: SpendChannelId;
  month: string;
  /** Montant dépensé ce mois-là sur ce canal (cents). */
  cents: number;
  source: SpendSource;
  updatedAt: string;
  updatedBy: string;
  note?: string;
}

export interface RentabiliteData {
  version: 1;
  spends: SpendEntry[];
}

/** Sous ces seuils, un ratio est affiché « données insuffisantes » (jamais extrapolé). */
export const SEUILS = { demandes: 5, ventes: 2 } as const;

export type RentaPeriodId = "mois" | "mois-precedent" | "3-mois" | "12-mois";
export const RENTA_PERIODS: ReadonlyArray<{ id: RentaPeriodId; label: string }> = [
  { id: "mois", label: "Ce mois-ci" },
  { id: "mois-precedent", label: "Mois dernier" },
  { id: "3-mois", label: "3 mois" },
  { id: "12-mois", label: "12 mois" },
];

export function parseRentaPeriod(v: unknown): RentaPeriodId {
  const s = Array.isArray(v) ? v[0] : v;
  return RENTA_PERIODS.some((p) => p.id === s) ? (s as RentaPeriodId) : "3-mois";
}
