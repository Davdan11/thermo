/* ==================================================================
   ThermoScan — Types
   All data shapes for the label-scanning pipeline.
   ================================================================== */

export type Confidence = "confirmed" | "probable" | "uncertain" | "not-detected" | "contradictory";
export type FieldSource = "label" | "database" | "inferred" | "estimated" | "client";
export type UnitType = "indoor" | "outdoor" | "combined" | "unknown";
export type ComparisonVerdict = "better" | "worse" | "similar" | "unknown";

export interface ConfidentField<T> {
  value: T | null;
  confidence: Confidence;
  source: FieldSource;
  raw?: string;
  note?: string;
}

export interface LabelScanData {
  brand: ConfidentField<string>;
  modelNumber: ConfidentField<string>;
  serialNumber: ConfidentField<string>;
  unitType: ConfidentField<UnitType>;
  nominalBtu: ConfidentField<number>;
  voltage: ConfidentField<string>;
  refrigerant: ConfidentField<string>;
  manufactureYear: ConfidentField<number>;
  unclassifiedLines: string[];
}

export interface CatalogMatch {
  source: "catalog-2026" | "legacy-catalog" | "registry" | "external-not-available";
  productId: string;
  brand: string;
  outdoorModel: string;
  indoorModel?: string;
  systemType: "ductless" | "central" | "unknown";
  coldClimate: boolean;
  nominalBtu?: number;
  hspf2?: { min: number; max: number };
  seer2?: { min: number; max: number };
  heatingCapacity5F?: { min: number; max: number };
  refrigerant?: string;
  matchScore: number;
  matchedOn: ("modelNumber" | "brand" | "btu" | "refrigerant")[];
}

export interface RawLabelSpecs {
  coolingCapacityW:   number | null;
  heatingCapacityW:   number | null;
  coolingBtuH:        number | null;
  heatingBtuH:        number | null;
  powerInputCoolingW: number | null;
  powerInputHeatingW: number | null;
  currentAmp:         number | null;
  voltage:            string | null;
  refrigerant:        string | null;
  refrigerantChargeG: number | null;
  weightKg:           string | null;
}

export interface WarrantyEntry {
  brand: string;
  seriesScope: string;
  partsYears: number | null;
  compressorYears: number | null;
  laborYears: number | null;
  coverage: string;
  registrationNote: string;
  limitations: string;
  sourceUrl: string;
}

export interface ScanResult {
  sessionId: string;
  analyzedAt: string;
  ocrRaw: string;
  fields: LabelScanData;
  normalizedModelNumber: string | null;
  catalogMatches: CatalogMatch[];
  bestMatch: CatalogMatch | null;
  confidence: Confidence;
  statusMessage: string;
  processingMs: number;
  warnings: string[];
  errors: string[];
  rawLabelSpecs?: RawLabelSpecs;
  brandWarranties?: WarrantyEntry[];
}


export interface ComparisonDimension {
  key: string;
  label: string;
  currentValue: string | null;
  recommendedValue: string | null;
  verdict: ComparisonVerdict;
  explanation: string;
  isDataConfirmed: boolean;
  currentSource: FieldSource | null;
  recommendedSource: FieldSource | null;
}

export interface ComparisonReport {
  summary: string;
  dimensions: ComparisonDimension[];
  currentDeviceAgeYears: number | null;
  currentDeviceMayQualifyForSubsidy: boolean;
  recommendedIsColdClimate: boolean;
  recommendedSubsidyDollars: number;
}

export interface SearchRequest {
  brand?: string;
  modelNumber: string;
  normalizedModelNumber?: string;
  btu?: number;
  unitType?: UnitType;
}

export interface SearchResponse {
  success: boolean;
  matches: CatalogMatch[];
  bestMatch: CatalogMatch | null;
  confidence: Confidence;
  error?: string;
}

export interface ManualDeviceEntry {
  brand: string;
  modelNumber: string;
  unitType: UnitType;
  approximateYear?: number;
  nominalBtu?: number;
}
