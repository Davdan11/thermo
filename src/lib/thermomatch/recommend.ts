/* ==================================================================
   Questionnaire → recommandations ThermoMatch (côté serveur).

   Partagé entre POST /api/thermomatch/recommend (parcours normal) et la
   page /trouver-ma-thermopompe/resultats (lien partageable) : même
   calcul, mêmes données officielles, aucun état.
   ================================================================== */
import { registry } from "@/lib/data/registry";
import { seriesDisplayName } from "@/lib/data/series-label";
import { getLogisVertVariants } from "@/lib/subsidies/logisvert-official";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { buildCandidates, runThermoMatch, type SourceModel, type SourcePairing } from "@/lib/thermomatch";
import { answersToRequest, type QuestionnaireAnswers } from "@/lib/thermomatch/answers";
import { installedPriceRange } from "@/lib/prices/grille-installee";
import { minHeatingTempFromBrochures } from "@/lib/thermomatch/min-temp-brochures";
import { estimateHeatingSavings } from "@/lib/thermomatch/savings";

let eligibleModels: SourceModel[] | null = null;

function getEligibleModels(): SourceModel[] {
  if (eligibleModels) return eligibleModels;
  const seriesById = new Map(registry.series.map((s) => [s.id, s]));
  eligibleModels = registry.models
    .filter((m) => {
      if (!m.isActive2026 || !m.thermomatchEligible) return false;
      if (m.status !== "published" && m.status !== "verified") return false;
      const brand = registry.brandById.get(m.brandId);
      return brand ? brand.activeInQuebec : false;
    })
    .map((m) => ({
      id: m.id,
      brandName: registry.brandById.get(m.brandId)?.name ?? "Inconnue",
      // Nom de série affiché sous la fiche : la vraie série, sinon le numéro de modèle (jamais une série inventée).
      name: seriesDisplayName(seriesById.get(m.seriesId)?.name, seriesById.get(m.seriesId)?.slug) ?? m.modelNumber,
      modelNumber: m.modelNumber,
      systemType: m.systemType,
      nominalCapacityBtu: m.nominalCapacityBtu ?? null,
      imageUrl: m.imageUrl ?? null,
    }));
  return eligibleModels;
}

let minTempByModel: Map<string, number> | null = null;

/** Température extérieure minimale de chauffage publiée par le fabricant (disponible pour quelques modèles seulement). */
function minHeatingTempFor(modelId: string): number | null {
  if (!minTempByModel) {
    minTempByModel = new Map();
    for (const c of registry.configurations) {
      const v = (c as { minHeatingTempC?: number | null }).minHeatingTempC;
      if (typeof v !== "number") continue;
      const prev = minTempByModel.get(c.modelId);
      if (prev === undefined || v < prev) minTempByModel.set(c.modelId, v);
    }
  }
  const known = minTempByModel.get(modelId);
  if (known !== undefined) return known;
  // Sinon : température imprimée dans la brochure du fabricant (citation vérifiée, voir src/lib/data/min-heating-temps.json).
  const m = registry.modelById.get(modelId);
  if (!m) return null;
  return minHeatingTempFromBrochures({ outdoorModel: m.modelNumber, brand: registry.brandById.get(m.brandId)?.name ?? null });
}

function pairingsFor(outdoorModel: string): SourcePairing[] {
  return getLogisVertVariants(outdoorModel).map((e) => ({
    ahri: e.ahri,
    indoorModel: e.indoorModel,
    logisVertDollars: e.logisVertDollars,
    heatingBtu17F: e.heatingBtu17F,
    heatingBtu5F: e.heatingBtu5F,
    nominalBtu: e.nominalBtu,
    coldClimate: e.coldClimate,
    seer2: e.seer2,
    hspf2: e.hspf2,
    cop5: e.cop5,
  }));
}

export type Recommendation = ReturnType<typeof recommendFromAnswers>;

export function recommendFromAnswers(answers: QuestionnaireAnswers) {
  const { req, floors } = answersToRequest(answers);

  // Pré-calcul de la charge pour choisir le bon appariement de chaque machine.
  const preview = runThermoMatch(req, []);
  const candidates = buildCandidates(getEligibleModels(), { loadBtuH: preview.load.loadBtuH, pairingsFor });

  const logisVertUpdatedAt = (logisVertMetadata as { updatedAt?: string }).updatedAt;
  const output = runThermoMatch(req, candidates, { logisVertUpdatedAt });

  const region = resolvePostalCode(String(answers.postalCode ?? "").toUpperCase().replace(/\s+/g, ""));

  const results = output.results.map((r) => {
    const c = r.candidate;
    return {
      rank: r.rank,
      badge: r.badge,
      score: r.score,
      breakdown: r.breakdown,
      fitRatio: r.fitRatio,
      product: {
        id: c.id,
        brand: c.brand,
        series: c.series,
        outdoorModel: c.outdoorModel,
        indoorModel: c.indoorModel ?? null,
        ahri: c.ahri ?? null,
        systemType: c.systemKind,
        coldClimate: c.coldClimate,
        nominalBtu: c.nominalBtu,
        heatingCapacity5FBtuH: { min: c.h5Btu, max: c.h5Btu },
        h5Certified: c.h5Certified,
        heatingCapacity17FBtuH: c.h17Btu,
        minOperatingTempC: minHeatingTempFor(c.id),
        tier: c.tier,
        alsoSoldAs: c.alsoSoldAs,
        imageUrl: c.imageUrl ?? null,
        warranties: [],
      },
      selectedPairing: {
        indoorModel: c.indoorModel ?? null,
        seer2: c.seer2 !== undefined ? { min: c.seer2, max: c.seer2 } : undefined,
        hspf2: c.hspf2 !== undefined ? { min: c.hspf2, max: c.hspf2 } : undefined,
        cop5F: c.cop5 !== undefined ? { min: c.cop5, max: c.cop5 } : undefined,
      },
      subsidyEstimate: c.logisVertDollars,
      subsidyIsOfficial: true,
      // Fourchette installée du marché québécois (grille de la page /prix) pour ce type, ce calibre et cette gamme, avant subvention.
      priceRange: (() => {
        const range = installedPriceRange({
          systemType: registry.modelById.get(c.id)?.systemType ?? (c.systemKind === "central" ? "central-ducted" : "wall-single"),
          nominalBtu: c.nominalBtu,
          zones: req.zones,
          brandTier: c.tier,
        });
        return range ? { min: range.min, max: range.max, basis: range.basis, sources: range.sources, tierLabel: range.tierLabel, matchLabel: range.matchLabel } : null;
      })(),
      reasons: r.reasons,
      clientReasons: r.reasons,
      warnings: r.warnings,
      architectureNote:
        req.zones > 1
          ? `Configuration ${req.zones} zones suggérée pour ${floors} étage${floors > 1 ? "s" : ""} : une unité intérieure par niveau. La répartition exacte est confirmée lors de la visite.`
          : null,
    };
  });

  return {
    results,
    summaryContext: {
      estimatedLoadBtu: output.load.loadBtuH,
      targetBtu: output.load.loadBtuH,
      uncertaintyPct: output.load.uncertaintyPct,
      loadFactors: output.load.factors,
      floors,
      requestedZones: req.zones,
      isMultiZone: req.zones > 1,
      heatedAreaFt2: req.heatedAreaFt2,
      systemKind: req.systemKind,
      region: region?.region ?? null,
      climateZone: region?.region ?? null,
      logisVertUpdatedAt: logisVertUpdatedAt ?? null,
      // Économies de chauffage estimées : maisons aux plinthes seulement (voir savings.ts).
      savings: estimateHeatingSavings({ postalCode: answers.postalCode, currentSystem: answers.currentSystem, loadBtuH: output.load.loadBtuH }),
      notices: output.warnings,
      weights: output.weights,
      candidatesEvaluated: output.diagnostics.afterSystemKind,
      candidatesRetained: output.diagnostics.afterCapacityWindow,
    },
    weights: output.weights,
    diagnostics: output.diagnostics,
    warnings: output.warnings,
  };
}
