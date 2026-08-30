/* ==================================================================
   Performance — measured data points at specific temperatures
   ================================================================== */

import type { DataConfidence } from "./enums";

/**
 * A single performance measurement at a given outdoor temperature.
 *
 * IMPORTANT: Do not fabricate data points. Only record values
 * from verified sources (spec sheets, AHRI, test reports).
 */
export interface PerformanceDataPoint {
  /** Outdoor temperature in °C */
  outdoorTempC: number;
  /** Heating capacity available at this temperature, in BTU/h */
  heatingCapacityBtu: number;
  /** Coefficient of Performance at this temperature */
  cop?: number | null;
  /** Percentage of nominal capacity retained */
  capacityRetentionPct?: number | null;
  /** Test standard used (e.g. "AHRI 210/240", "CSA C656") */
  testStandard?: string | null;
  sourceId?: string | null;
  confidence: DataConfidence;
  verifiedAt?: string | null;
}

/**
 * Collection of performance data for a specific configuration.
 */
export interface PerformanceProfile {
  configurationId: string;
  /** Nominal heating capacity at standard conditions (BTU/h) */
  nominalHeatingBtu?: number | null;
  /** Standard rating temperature for nominal (typically 8.3°C / 47°F) */
  nominalRatingTempC?: number | null;
  dataPoints: PerformanceDataPoint[];
}
