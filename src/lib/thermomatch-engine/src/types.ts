export type ClimateZone = "6" | "7A" | "7B" | "8";
export type SystemType = "central" | "ductless";
export type MatchGoal = "savings" | "comfort" | "electrification" | "balanced";

export interface NumberRange {
  min: number;
  max: number;
}

export interface WarrantyPolicy {
  scope: string;
  marketScope: string;
  partsYears?: number;
  compressorYears?: number;
  labourYears?: number;
  coverage: string;
  registrationConditions: string;
  limitations: string;
  confidence: string;
  sourceUrl: string;
  verifiedOn: string;
}

export interface Enrichment {
  minHeatingOutdoorC?: number;
  remoteMaxSetpointC?: number;
  factoryChargeOz?: number;
  refrigerant?: string;
  maxZones?: number;
  note: string;
  confidence: string;
  sourceUrl: string;
}

export interface CertifiedPairing {
  indoorModel: string;
  heatingCapacity5FBtuH?: NumberRange;
  cop5F?: NumberRange;
  seer2?: NumberRange;
  hspf2?: NumberRange;
  ahriReferenceCount: number;
}

export interface CatalogProduct {
  id: string;
  commercialKey: string;
  brand: string;
  series: string;
  systemType: SystemType;
  outdoorModel: string;
  coldClimate: boolean;
  heatingCapacity5FBtuH?: NumberRange;
  cop5F?: NumberRange;
  seer2?: NumberRange;
  hspf2?: NumberRange;
  refrigerants: string[];
  compressorStaging: string[];
  connectedCapable: string[];
  firstMarketDate: string;
  lastMarketDate: string;
  selectionYear: number;
  sourceUrl: string;
  pairings: CertifiedPairing[];
  warranties: WarrantyPolicy[];
  enrichment?: Enrichment;
  zoneCompatibility: "single" | "multi" | "unknown";
  imageUrl?: string | null;
}

export interface CatalogManifest {
  schemaVersion: "thermomatch-catalog-1";
  selectionYear: number;
  selectionRule: "last_market_date_year";
  sourceWorkbook: string;
  importedAt: string;
  sourceRows: number;
  selectedPairingRows: number;
  productCount: number;
  brandCount: number;
  warnings: string[];
}

export interface ThermoCatalog {
  manifest: CatalogManifest;
  products: CatalogProduct[];
}

export interface MatchInput {
  selectionYear: number;
  heatedAreaFt2: number;
  climateZone: ClimateZone;
  designHeatLoadBtuH?: number;
  homeType: "detached" | "semi_detached" | "townhouse" | "condo" | "duplex" | "triplex" | "other";
  constructionPeriod: "pre_1960" | "1960_1980" | "1981_2000" | "2001_2015" | "2016_plus";
  insulation: "poor" | "standard" | "good" | "high_performance";
  distribution: "ducts" | "no_ducts" | "partial";
  requestedZones: number;
  goal: MatchGoal;
  backupHeatAvailable: boolean;
}

export interface MatchPolicy {
  allowedBrands?: string[];
  allowedCommercialKeys?: string[];
  excludedBrands?: string[];
  excludedCommercialKeys?: string[];
  maxResults?: number;
  maxPerBrand?: number;
}

export interface ScoreBreakdown {
  capacity: number;
  coldClimate: number;
  efficiency: number;
  goal: number;
  sourceQuality: number;
  total: number;
}

export interface MatchRecommendation {
  rank: number;
  score: number;
  product: Omit<CatalogProduct, "pairings">;
  selectedPairing?: CertifiedPairing;
  suggestedCapacityBtuH: number;
  breakdown: ScoreBreakdown;
  reasons: string[];
  warnings: string[];
}

export interface FilterDiagnostics {
  totalProducts: number;
  correctYear: number;
  correctSystem: number;
  allowedBrand: number;
  coldClimateCompatible: number;
  capacityCompatible: number;
}

export interface MatchOutput {
  engineVersion: "thermomatch-engine-1";
  catalogYear: number;
  estimatedDesignLoadBtuH: number;
  targetHeatPumpCapacityBtuH: number;
  results: MatchRecommendation[];
  diagnostics: FilterDiagnostics;
  warnings: string[];
}
