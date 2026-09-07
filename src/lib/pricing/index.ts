/* ==================================================================
   Pricing — Public API
   ================================================================== */

export { calculateEstimate } from "./engine";
export { formatCents, formatRange, roundToNearest50 } from "./format";
export { getPriceObservations, getPriceObservationsByCategory } from "./queries";
export { postalCodeToRegion } from "./regions";
export type { PriceQueryResult } from "./queries";
export { METHOD_VERSION, TAX_RATES, GENERALLY_INCLUDED, GENERALLY_EXCLUDED, VARIABLE_FACTORS } from "./factors";

export type {
  EstimatorInput,
  EstimatorResult,
  AdjustmentFactor,
  PriceBreakdown,
  ConfidenceLevel,
  ProjectType,
  AccessComplexity,
  QuebecRegion,
} from "./types";
export {
  PROJECT_TYPE_LABELS,
  CONFIDENCE_LABELS,
  ACCESS_COMPLEXITY_LABELS,
  REGION_LABELS,
} from "./types";
