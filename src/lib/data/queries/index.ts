/* ==================================================================
   Queries — Public API
   ================================================================== */

export { getBrands, getBrandBySlug, getBrandById, getSeriesByBrand } from "./brands";

export {
  getModelBySlug,
  getModelById,
  getModelsByBrand,
  getModelsBySeries,
  searchByModelNumber,
  filterModels,
  getConfigurationsForModel,
  getConfigurationBySlug,
  getPerformanceProfile,
  getCertificationsForConfig,
  getWarrantiesForModel,
  getPriceObservationsForModel,
  getEditorialForModel,
  getSourceById,
  getModelsNeedingReview,
} from "./products";
export type { ModelFilters } from "./products";

export { getThermoMatchCandidates } from "./thermomatch";
export type { ThermoMatchFilters, ThermoMatchCandidate } from "./thermomatch";

export { getCatalogueModels, getAvailableFilters, SORT_OPTIONS } from "./catalogue";
export type { CatalogueParams, CatalogueSort, CatalogueProduct, AvailableFilters } from "./catalogue";

export { getProductDetail } from "./product-detail";
export type { ProductDetail } from "./product-detail";

export { getComparisonData, MAX_COMPARE } from "./comparator";
export type { ComparisonData } from "./comparator";

export { getBrandDetail, getPublishedBrandsSummary } from "./brand-detail";
export type { BrandDetail, BrandSummary, SeriesSummary } from "./brand-detail";
