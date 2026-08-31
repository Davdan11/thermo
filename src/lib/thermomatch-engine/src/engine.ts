import type {
  CatalogProduct,
  CertifiedPairing,
  ClimateZone,
  MatchInput,
  MatchOutput,
  MatchPolicy,
  MatchRecommendation,
  NumberRange,
  ScoreBreakdown,
  SystemType,
  ThermoCatalog,
} from "./types";

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const round = (value: number, decimals = 0) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};
const normalize = (value: string) => value.trim().toLocaleLowerCase("fr-CA");
const midpoint = (range?: NumberRange) => range ? (range.min + range.max) / 2 : undefined;

export function estimateDesignHeatLoadBtuH(input: MatchInput): number {
  if (input.designHeatLoadBtuH !== undefined) {
    if (!Number.isFinite(input.designHeatLoadBtuH) || input.designHeatLoadBtuH < 5_000 || input.designHeatLoadBtuH > 300_000) {
      throw new Error("designHeatLoadBtuH doit être compris entre 5 000 et 300 000 BTU/h.");
    }
    return Math.round(input.designHeatLoadBtuH / 1_000) * 1_000;
  }

  const climateFactor: Record<ClimateZone, number> = { "6": 25, "7A": 31, "7B": 37, "8": 44 };
  const constructionFactor = {
    pre_1960: 1.25,
    "1960_1980": 1.12,
    "1981_2000": 1,
    "2001_2015": 0.88,
    "2016_plus": 0.75,
  }[input.constructionPeriod];
  const insulationFactor = { poor: 1.18, standard: 1, good: 0.86, high_performance: 0.72 }[input.insulation];
  const exposureFactor = {
    detached: 1,
    semi_detached: 0.9,
    townhouse: 0.8,
    condo: 0.68,
    duplex: 0.9,
    triplex: 0.82,
    other: 1,
  }[input.homeType];

  return Math.round(
    input.heatedAreaFt2 * climateFactor[input.climateZone] * constructionFactor * insulationFactor * exposureFactor / 1_000,
  ) * 1_000;
}

function validateInput(input: MatchInput, catalog: ThermoCatalog) {
  if (input.selectionYear !== catalog.manifest.selectionYear) {
    throw new Error(`Le catalogue chargé est ${catalog.manifest.selectionYear}, pas ${input.selectionYear}.`);
  }
  if (!Number.isFinite(input.heatedAreaFt2) || input.heatedAreaFt2 < 300 || input.heatedAreaFt2 > 12_000) {
    throw new Error("heatedAreaFt2 doit être compris entre 300 et 12 000 pi².");
  }
  if (!Number.isInteger(input.requestedZones) || input.requestedZones < 1 || input.requestedZones > 9) {
    throw new Error("requestedZones doit être un entier entre 1 et 9.");
  }
}

function compatibleSystems(input: MatchInput): SystemType[] {
  if (input.distribution === "ducts") return ["central"];
  if (input.distribution === "no_ducts") return ["ductless"];
  return ["central", "ductless"];
}

function targetCoverage(input: MatchInput): number {
  if (input.goal === "electrification" && !input.backupHeatAvailable) return 1;
  if (input.goal === "savings") return input.backupHeatAvailable ? 0.75 : 0.9;
  return input.backupHeatAvailable ? 0.85 : 0.95;
}

function requiresStrictColdClimate(input: MatchInput): boolean {
  return input.climateZone === "8" || input.climateZone === "7B" ||
    (input.goal === "electrification" && !input.backupHeatAvailable);
}

function closestPairing(product: CatalogProduct, target: number): CertifiedPairing | undefined {
  return product.pairings
    .filter((pairing) => pairing.heatingCapacity5FBtuH)
    .sort((a, b) => {
      const aCapacity = midpoint(a.heatingCapacity5FBtuH) ?? 0;
      const bCapacity = midpoint(b.heatingCapacity5FBtuH) ?? 0;
      return Math.abs(aCapacity - target) - Math.abs(bCapacity - target);
    })[0];
}

function scoreProduct(product: CatalogProduct, input: MatchInput, target: number): MatchRecommendation {
  const capacity = product.heatingCapacity5FBtuH!;
  const closestCapacity = clamp(target, capacity.min, capacity.max);
  const capacityError = Math.abs(closestCapacity - target) / Math.max(target, 1);
  const capacityScore = round(clamp(40 - capacityError * 55, 0, 40), 1);

  const cop = midpoint(product.cop5F);
  const hspf = midpoint(product.hspf2);
  const seer = midpoint(product.seer2);
  const coldClimateScore = round(clamp((product.coldClimate ? 12 : 0) + (cop ? (cop - 1.4) * 7 : 2), 0, 20), 1);
  const efficiencyScore = round(clamp(
    (hspf ? (hspf - 6.5) * 2.3 : 3) + (cop ? (cop - 1.5) * 5 : 2) + (seer ? (seer - 14) * 0.22 : 2),
    0,
    25,
  ), 1);

  let goalScore = 6;
  if (input.goal === "savings") goalScore = clamp((hspf ?? 7) - 2, 0, 10);
  if (input.goal === "comfort") goalScore = product.compressorStaging.some((value) => /variable/i.test(value)) ? 10 : 6;
  if (input.goal === "electrification") goalScore = product.coldClimate ? 10 : 3;
  if (input.goal === "balanced") goalScore = (product.coldClimate ? 5 : 2) + (cop && cop >= 2 ? 5 : 3);
  goalScore = round(goalScore, 1);

  const sourceQuality = product.enrichment?.confidence.toLocaleLowerCase("fr-CA") === "haute" ? 5 : 4;
  const total = round(capacityScore + coldClimateScore + efficiencyScore + goalScore + sourceQuality, 1);
  const selectedPairing = closestPairing(product, target);

  const reasons = [
    `Capacité à 5 °F compatible : ${Math.round(capacity.min).toLocaleString("fr-CA")} à ${Math.round(capacity.max).toLocaleString("fr-CA")} BTU/h pour une cible de ${target.toLocaleString("fr-CA")} BTU/h.`,
    product.coldClimate ? "Configuration ENERGY STAR indiquée climat froid." : "Configuration certifiée dans le catalogue source.",
  ];
  if (hspf !== undefined && cop !== undefined) reasons.push(`HSPF2 moyen ${round(hspf, 1)} et COP à 5 °F moyen ${round(cop, 2)}.`);

  const warnings: string[] = [];
  if (input.requestedZones > 1 && product.systemType === "ductless" && product.enrichment?.maxZones === undefined) {
    warnings.push("Le nombre maximal de zones n’est pas certifié dans ce fichier Excel; valider la combinaison exacte avec le fabricant.");
  }
  if (product.enrichment?.minHeatingOutdoorC === undefined) {
    warnings.push("Température minimale d’opération absente du fichier; consulter le manuel du modèle exact.");
  }
  if (!product.warranties.length) warnings.push("Garantie non reliée automatiquement à ce modèle.");

  const breakdown: ScoreBreakdown = {
    capacity: capacityScore,
    coldClimate: coldClimateScore,
    efficiency: efficiencyScore,
    goal: goalScore,
    sourceQuality,
    total,
  };
  const { pairings: _pairings, ...productSummary } = product;

  return {
    rank: 0,
    score: total,
    product: productSummary,
    selectedPairing,
    suggestedCapacityBtuH: closestCapacity,
    breakdown,
    reasons,
    warnings,
  };
}

function diversifyByBrand(candidates: MatchRecommendation[], maxResults: number, maxPerBrand: number): MatchRecommendation[] {
  const selected: MatchRecommendation[] = [];
  const counts = new Map<string, number>();
  for (const candidate of candidates) {
    const brand = normalize(candidate.product.brand);
    if ((counts.get(brand) ?? 0) >= maxPerBrand) continue;
    selected.push(candidate);
    counts.set(brand, (counts.get(brand) ?? 0) + 1);
    if (selected.length === maxResults) break;
  }
  return selected.map((candidate, index) => ({ ...candidate, rank: index + 1 }));
}

export function runThermoMatch(input: MatchInput, catalog: ThermoCatalog, policy: MatchPolicy = {}): MatchOutput {
  validateInput(input, catalog);
  const load = estimateDesignHeatLoadBtuH(input);
  const target = Math.round(load * targetCoverage(input) / 1_000) * 1_000;
  const systems = compatibleSystems(input);
  const allowedBrands = new Set((policy.allowedBrands ?? []).map(normalize));
  const allowedKeys = new Set(policy.allowedCommercialKeys ?? []);
  const excludedBrands = new Set((policy.excludedBrands ?? []).map(normalize));
  const excludedKeys = new Set(policy.excludedCommercialKeys ?? []);
  const strictColdClimate = requiresStrictColdClimate(input);

  const diagnostics = {
    totalProducts: catalog.products.length,
    correctYear: 0,
    correctSystem: 0,
    allowedBrand: 0,
    coldClimateCompatible: 0,
    capacityCompatible: 0,
  };

  const candidates: MatchRecommendation[] = [];
  for (const product of catalog.products) {
    if (product.selectionYear !== input.selectionYear) continue;
    diagnostics.correctYear += 1;
    if (!systems.includes(product.systemType)) continue;
    diagnostics.correctSystem += 1;
    const brand = normalize(product.brand);
    if (excludedBrands.has(brand) || excludedKeys.has(product.commercialKey)) continue;
    if (allowedBrands.size > 0 && !allowedBrands.has(brand)) continue;
    if (allowedKeys.size > 0 && !allowedKeys.has(product.commercialKey)) continue;
    diagnostics.allowedBrand += 1;
    if (strictColdClimate && !product.coldClimate) continue;
    if (product.enrichment?.minHeatingOutdoorC !== undefined) {
      const designTemperature = { "6": -23, "7A": -27, "7B": -30, "8": -35 }[input.climateZone];
      if (product.enrichment.minHeatingOutdoorC > designTemperature && !input.backupHeatAvailable) continue;
    }
    diagnostics.coldClimateCompatible += 1;
    const capacity = product.heatingCapacity5FBtuH;
    if (!capacity || capacity.max < target * 0.62 || capacity.min > target * 1.55) continue;
    diagnostics.capacityCompatible += 1;
    candidates.push(scoreProduct(product, input, target));
  }

  candidates.sort((a, b) => b.score - a.score || a.product.commercialKey.localeCompare(b.product.commercialKey));
  const maxResults = Math.floor(clamp(policy.maxResults ?? 3, 1, 10));
  const maxPerBrand = Math.floor(clamp(policy.maxPerBrand ?? 1, 1, maxResults));
  const results = diversifyByBrand(candidates, maxResults, maxPerBrand);
  const warnings = [
    "Le moteur compare uniquement les lignes 2026 importées du classeur; il ne crée jamais de modèles.",
    "La charge calculée est une présélection. La capacité finale doit être confirmée par un calcul CSA F280.",
  ];
  if (input.designHeatLoadBtuH === undefined) warnings.push("La charge a été estimée faute d’un calcul de perte de chaleur fourni.");
  if (!results.length) warnings.push("Aucun produit ne respecte tous les filtres; le moteur ne force pas de faux résultat.");

  return {
    engineVersion: "thermomatch-engine-1",
    catalogYear: catalog.manifest.selectionYear,
    estimatedDesignLoadBtuH: load,
    targetHeatPumpCapacityBtuH: target,
    results,
    diagnostics,
    warnings,
  };
}
