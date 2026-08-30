/* ==================================================================
   Data Types — Public API
   
   Single re-export point for all data types.
   Import from "@/lib/data/types" everywhere.
   ================================================================== */

/* ---- Enums & reference values ---- */
export * from "./enums";

/* ---- Core entities ---- */
export type { Brand } from "./brand";
export type { ProductSeries, ProductModel, OutdoorUnit, IndoorUnit, SystemConfiguration } from "./product";
export type { PerformanceDataPoint, PerformanceProfile } from "./performance";
export type { Certification } from "./certification";
export type { Warranty } from "./warranty";
export type { PriceObservation } from "./price";
export type { SourceReference, SourceLink } from "./source";
export type { EditorialContent } from "./editorial";

/* ---- Subsidy / Incentive ---- */
export type { IncentiveProgram, EligibilityRule, EligibilityCondition, SubsidyEstimate } from "./subsidy";

/* ---- Scoring ---- */
export type { ThermoScoreMethodology, ThermoScoreCriterion, ThermoScoreResult, ThermoScoreSubScore } from "./thermoscore";

/* ==================================================================
   Aggregate type — a complete brand dataset
   Used by fixtures and the data registry.
   ================================================================== */

import type { Brand } from "./brand";
import type { ProductSeries, ProductModel, OutdoorUnit, IndoorUnit, SystemConfiguration } from "./product";
import type { PerformanceProfile } from "./performance";
import type { Certification } from "./certification";
import type { Warranty } from "./warranty";
import type { PriceObservation } from "./price";
import type { SourceReference } from "./source";
import type { EditorialContent } from "./editorial";

/**
 * A complete dataset for a single brand.
 * This is the shape of a fixture file.
 */
export interface BrandDataset {
  brand: Brand;
  series: ProductSeries[];
  models: ProductModel[];
  outdoorUnits: OutdoorUnit[];
  indoorUnits: IndoorUnit[];
  configurations: SystemConfiguration[];
  performanceProfiles: PerformanceProfile[];
  certifications: Certification[];
  warranties: Warranty[];
  priceObservations: PriceObservation[];
  sources: SourceReference[];
  editorial: EditorialContent[];
}
