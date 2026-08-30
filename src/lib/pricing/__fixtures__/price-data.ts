/* ==================================================================
   TEST FIXTURES — Price observations for unit tests ONLY

   ⚠️ ALL DATA IS FICTIONAL. Never import in production code.
   ================================================================== */

import type { PriceObservation } from "../../data/types";

const PH = "placeholder" as const;
const NOW = "2026-06-15";
const OLD = "2025-06-15"; // >6 months ago

/**
 * Simulates price observations for the Alpha Glacier 18K wall unit.
 */
export const ALPHA_GLACIER_18K_PRICES: PriceObservation[] = [
  {
    id: "price-alpha-18k-equip-1",
    configurationId: "config-alpha-glacier-18k",
    modelId: "model-alpha-glacier-18k",
    type: "equipment",
    amountCents: 280_000, // $2,800
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-alpha-dev",
    observedAt: NOW,
  },
  {
    id: "price-alpha-18k-equip-2",
    configurationId: "config-alpha-glacier-18k",
    modelId: "model-alpha-glacier-18k",
    type: "equipment",
    amountCents: 310_000, // $3,100
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-alpha-dev",
    observedAt: NOW,
  },
  {
    id: "price-alpha-18k-equip-3",
    configurationId: "config-alpha-glacier-18k",
    modelId: "model-alpha-glacier-18k",
    type: "equipment",
    amountCents: 295_000, // $2,950
    currency: "CAD",
    taxesIncluded: false,
    region: "quebec-city",
    confidence: PH,
    sourceId: "src-alpha-dev",
    observedAt: NOW,
  },
  {
    id: "price-alpha-18k-installed-1",
    configurationId: "config-alpha-glacier-18k",
    modelId: "model-alpha-glacier-18k",
    type: "installed",
    amountCents: 550_000, // $5,500
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-alpha-dev",
    observedAt: NOW,
  },
  {
    id: "price-alpha-18k-installed-2",
    configurationId: "config-alpha-glacier-18k",
    modelId: "model-alpha-glacier-18k",
    type: "installed",
    amountCents: 620_000, // $6,200
    currency: "CAD",
    taxesIncluded: false,
    region: "quebec-city",
    confidence: PH,
    sourceId: "src-alpha-dev",
    observedAt: NOW,
  },
];

/**
 * Old observations (>6 months) for testing stale data warnings.
 */
export const STALE_PRICES: PriceObservation[] = [
  {
    id: "price-stale-1",
    modelId: "model-alpha-glacier-9k",
    type: "equipment",
    amountCents: 150_000,
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-alpha-dev",
    observedAt: OLD,
  },
  {
    id: "price-stale-2",
    modelId: "model-alpha-glacier-9k",
    type: "equipment",
    amountCents: 160_000,
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-alpha-dev",
    observedAt: OLD,
  },
  {
    id: "price-stale-3",
    modelId: "model-alpha-glacier-9k",
    type: "equipment",
    amountCents: 155_000,
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-alpha-dev",
    observedAt: OLD,
  },
];

/**
 * Central system prices for Beta Boréal 36K.
 */
export const BETA_BOREAL_36K_PRICES: PriceObservation[] = [
  {
    id: "price-beta-36k-equip-1",
    configurationId: "config-beta-boreal-36k",
    modelId: "model-beta-boreal-36k",
    type: "equipment",
    amountCents: 550_000,
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-beta-dev",
    observedAt: NOW,
  },
  {
    id: "price-beta-36k-equip-2",
    configurationId: "config-beta-boreal-36k",
    modelId: "model-beta-boreal-36k",
    type: "equipment",
    amountCents: 600_000,
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-beta-dev",
    observedAt: NOW,
  },
  {
    id: "price-beta-36k-equip-3",
    configurationId: "config-beta-boreal-36k",
    modelId: "model-beta-boreal-36k",
    type: "equipment",
    amountCents: 580_000,
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-beta-dev",
    observedAt: NOW,
  },
  {
    id: "price-beta-36k-installed-1",
    configurationId: "config-beta-boreal-36k",
    modelId: "model-beta-boreal-36k",
    type: "installed",
    amountCents: 1_050_000,
    currency: "CAD",
    taxesIncluded: false,
    region: "montreal",
    confidence: PH,
    sourceId: "src-beta-dev",
    observedAt: NOW,
  },
];
