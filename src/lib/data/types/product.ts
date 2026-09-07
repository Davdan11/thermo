/* ==================================================================
   Product — Series, Model, Configuration, Indoor/Outdoor Units
   ================================================================== */

import type {
  SystemType,
  SystemCategory,
  PublicationStatus,
  Refrigerant,
  Voltage,
  Phase,
} from "./enums";
import type { SourceLink } from "./source";

/* ------------------------------------------------------------------
   Product Series — a commercial family (e.g. "Daikin FIT")
   ------------------------------------------------------------------ */

export interface ProductSeries {
  id: string;
  slug: string;
  name: string;
  brandId: string;
  systemType: SystemType;
  categories: SystemCategory[];
  description?: string | null;
  /** URL to official manufacturer product image */
  imageUrl?: string | null;
  /** URL to official brochure PDF */
  brochureUrl?: string | null;
  status: PublicationStatus;
  sources?: SourceLink[];
  createdAt: string;
  updatedAt: string;
  verifiedAt?: string | null;
}

/* ------------------------------------------------------------------
   Product Model — a consumer-facing model within a series
   ------------------------------------------------------------------ */

export interface ProductModel {
  id: string;
  slug: string;
  /** Consumer-facing name (e.g. "Oterra" or "FIT") */
  name: string;
  seriesId: string;
  brandId: string;
  /** Primary marketing or series number if applicable */
  modelNumber: string;
  /** Lowercased, stripped of spaces/dashes for search */
  normalizedModelNumber: string;
  
  /** Indicates if this commercial range is actively sold in 2026 */
  isActive2026: boolean;
  /** Indicates if this range is eligible to be recommended by ThermoMatch */
  thermomatchEligible: boolean;

  /* ---- Capacity Range (BTU/h) ---- */
  coolingCapacityMinBtu?: number | null;
  coolingCapacityMaxBtu?: number | null;
  heatingCapacity5FMinBtu?: number | null;
  heatingCapacity5FMaxBtu?: number | null;
  
  /* ---- Efficiency Range ---- */
  seer2Min?: number | null;
  seer2Max?: number | null;
  hspf2Min?: number | null;
  hspf2Max?: number | null;
  cop5FMin?: number | null;
  cop5FMax?: number | null;

  /* ---- Additional features ---- */
  minimumOperatingTemperatureC?: number | null;
  strengths?: string[];
  limitations?: string[];

  /** Nominal capacity in BTU/h — fallback or typical figure if range is not applicable */
  nominalCapacityBtu?: number | null;
  /** Number of indoor zones supported */
  zones?: number | null;
  systemType: SystemType;
  categories: SystemCategory[];
  status: PublicationStatus;
  launchYear?: number | null;
  discontinuedYear?: number | null;
  /** If discontinued, which model replaces it */
  replacedByModelId?: string | null;
  /** URL to official manufacturer product image */
  imageUrl?: string | null;
  /** URL to official brochure PDF */
  brochureUrl?: string | null;
  sources?: SourceLink[];
  createdAt: string;
  updatedAt: string;
  verifiedAt?: string | null;
}

/* ------------------------------------------------------------------
   Outdoor Unit
   ------------------------------------------------------------------ */

export interface OutdoorUnit {
  id: string;
  modelNumber: string;
  brandId: string;
  /** Dimensions in mm */
  widthMm?: number | null;
  heightMm?: number | null;
  depthMm?: number | null;
  /** Weight in kg */
  weightKg?: number | null;
  /** Noise level in dB(A) */
  noiseLevelDbA?: number | null;
  refrigerant?: Refrigerant | null;
  refrigerantChargeKg?: number | null;
  sources?: SourceLink[];
}

/* ------------------------------------------------------------------
   Indoor Unit
   ------------------------------------------------------------------ */

export interface IndoorUnit {
  id: string;
  modelNumber: string;
  brandId: string;
  type: SystemType;
  widthMm?: number | null;
  heightMm?: number | null;
  depthMm?: number | null;
  weightKg?: number | null;
  /** Noise range in dB(A) */
  noiseMinDbA?: number | null;
  noiseMaxDbA?: number | null;
  /** Airflow in CFM (Cubic Feet per Minute) */
  airflowCfmMin?: number | null;
  airflowCfmMax?: number | null;
  sources?: SourceLink[];
}

/* ------------------------------------------------------------------
   System Configuration — exact indoor+outdoor combination
   ------------------------------------------------------------------ */

export interface SystemConfiguration {
  id: string;
  slug: string;
  modelId: string;
  outdoorUnitId: string;
  indoorUnitId?: string | null;

  /* ---- Capacity (BTU/h) ---- */
  coolingCapacityMinBtu?: number | null;
  coolingCapacityMaxBtu?: number | null;
  heatingCapacityMinBtu?: number | null;
  heatingCapacityMaxBtu?: number | null;

  /* ---- Efficiency ---- */
  seer2?: number | null;
  eer2?: number | null;
  hspf2?: number | null;
  cop?: number | null;

  /* ---- Temperature operating range (°C) ---- */
  minHeatingTempC?: number | null;
  maxCoolingTempC?: number | null;

  /* ---- Electrical ---- */
  voltage?: Voltage | null;
  phase?: Phase | null;
  frequencyHz?: 50 | 60 | null;
  minCircuitAmps?: number | null;
  maxFuseAmps?: number | null;
  ratedWatts?: number | null;

  /* ---- Comfort ---- */
  /** Indoor noise range dB(A) */
  noiseIndoorMinDbA?: number | null;
  noiseIndoorMaxDbA?: number | null;
  noiseOutdoorDbA?: number | null;
  fanSpeeds?: number | null;
  /** Airflow in CFM (Cubic Feet per Minute) */
  airflowCfmMin?: number | null;
  airflowCfmMax?: number | null;
  hasDehumidification?: boolean | null;
  hasWifi?: boolean | null;
  hasSmartControl?: boolean | null;
  filtration?: string | null;
  modes?: string[] | null;

  /* ---- Installation ---- */
  maxLineLengthM?: number | null;
  maxElevationDiffM?: number | null;
  lineDiameterMm?: string | null;
  drainageType?: string | null;
  installationNotes?: string | null;

  /* ---- Coverage estimate ---- */
  /** Approximate coverage in sq ft — clearly an ESTIMATE */
  estimatedCoverageSqFtMin?: number | null;
  estimatedCoverageSqFtMax?: number | null;

  sources?: SourceLink[];
  createdAt: string;
  updatedAt: string;
  verifiedAt?: string | null;
}
