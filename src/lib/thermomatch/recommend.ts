/* ==================================================================
   Questionnaire → recommandations ThermoMatch (côté serveur).

   Partagé entre POST /api/thermomatch/recommend (parcours normal) et la
   page /trouver-ma-thermopompe/resultats (lien partageable) : même
   calcul, mêmes données officielles, aucun état.

   Ordre : charge → architecture (architecture.ts : comment la chaleur
   sera distribuée) → machines de cette classe seulement, calibrées pour
   la charge qu'elles chauffent → classement.
   ================================================================== */
import { registry } from "@/lib/data/registry";
import { seriesDisplayName } from "@/lib/data/series-label";
import { getLogisVertVariants } from "@/lib/subsidies/logisvert-official";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { REGION_GENERALE, resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { buildCandidates, estimateLoad, pairingClassOf, runThermoMatch, type SourceModel, type SourcePairing } from "@/lib/thermomatch";
import { H5_FROM_H17_RATIO } from "@/lib/thermomatch/candidates";
import { answersToRequest, architectureInputOf, type QuestionnaireAnswers } from "@/lib/thermomatch/answers";
import { backupNoteFor, decideArchitecture, type ArchitectureDecision } from "@/lib/thermomatch/architecture";
import { ORDRE_DE_GRANDEUR_LABEL, architecturePriceRange, envelopeRange, type PriceRange } from "@/lib/prices/grille-installee";
// Température minimale de chauffage : résolveur unique (catalogue, puis relevés des documents du fabricant).
import { minHeatingTempForModel } from "@/lib/thermomatch/min-temp";
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
    systemType: e.systemType,
  }));
}

/* Capacités à −15 °C des appariements multizone admissibles : la multizone n'est retenue que si l'une couvre la charge. */
let multiZoneH5s: number[] | null = null;

function getMultiZoneH5s(): number[] {
  if (multiZoneH5s) return multiZoneH5s;
  const out: number[] = [];
  for (const m of getEligibleModels()) {
    for (const p of pairingsFor(m.modelNumber)) {
      if (pairingClassOf(p, m.systemType) !== "multi") continue;
      const h5 = p.heatingBtu5F ?? p.heatingBtu17F * H5_FROM_H17_RATIO;
      if (h5 > 0) out.push(h5);
    }
  }
  multiZoneH5s = out;
  return out;
}

/** Au moins un appariement multizone couvre la charge à −15 °C (95 % ou plus) sans sortir de la fenêtre de calibre (180 %). */
function multiZoneFits(loadBtuH: number): boolean {
  return getMultiZoneH5s().some((h5) => h5 >= 0.95 * loadBtuH && h5 <= 1.8 * loadBtuH);
}

const priceOut = (p: PriceRange | null) =>
  p ? { min: p.min, max: p.max, basis: p.basis, sources: p.sources, tierLabel: p.tierLabel, matchLabel: p.matchLabel, note: p.note ?? null } : null;

/** La décision telle que l'écran et le courriel la lisent : données seulement, fourchette indicative comprise. */
function architectureOut(d: ArchitectureDecision, price: PriceRange | null, pricePerCard: boolean) {
  const { alternative, ...rest } = d;
  return {
    ...rest,
    price: priceOut(price),
    pricePerCard,
    priceLabel: ORDRE_DE_GRANDEUR_LABEL,
    alternative: alternative
      ? { note: alternative.note, decision: { ...alternative.decision, price: priceOut(architecturePriceRange(alternative.decision)), pricePerCard: false, priceLabel: ORDRE_DE_GRANDEUR_LABEL, alternative: null } }
      : null,
  };
}

export type Recommendation = ReturnType<typeof recommendFromAnswers>;
export type ArchitectureView = Recommendation["summaryContext"]["architecture"];

export function recommendFromAnswers(answers: QuestionnaireAnswers) {
  const { req: baseReq, floors } = answersToRequest(answers);
  const load = estimateLoad(baseReq);

  const region = resolvePostalCode(String(answers.postalCode ?? "").toUpperCase().replace(/\s+/g, ""));
  // Froid de référence de la région (température de conception de la table des codes postaux) : seulement pour une
  // région reconnue, jamais pour le repli général. Il ne change ni la charge à −15 °C ni le classement ; il sert à
  // estimer la relève des jours les plus froids.
  const designTempC = region && region.region !== REGION_GENERALE ? region.designTempC : null;

  // 1. L'architecture d'abord : comment la chaleur sera distribuée, et pour quelle charge chaque machine est calibrée.
  const decision = decideArchitecture({ ...architectureInputOf(answers, baseReq), designTempC, region: designTempC != null ? region?.region : null, multiZoneFits }, load);

  // 2. Les machines de cette classe seulement.
  const req = {
    ...baseReq,
    systemKind: decision.pairingClass === "central" ? ("central" as const) : ("ductless" as const),
    zones: decision.heads,
    pairingClass: decision.pairingClass,
    sizingLoadBtuH: decision.sizingLoadBtuH,
    sizingLabel: decision.sizingLabel,
    heads: decision.heads,
    independentUnits: decision.kind === "multi-single",
    backupHeatAvailable: decision.backup === "fournaise" || decision.backup === "chaudiere",
    backupLabel: decision.backup === "chaudiere" ? "chaudière" : "fournaise",
  };
  const candidates = buildCandidates(getEligibleModels(), { loadBtuH: decision.sizingLoadBtuH, pairingsFor, pairingClass: decision.pairingClass });

  const logisVertUpdatedAt = (logisVertMetadata as { updatedAt?: string }).updatedAt;
  const output = runThermoMatch(req, candidates, { logisVertUpdatedAt });

  // 3. Fourchette indicative : une par architecture, affichée une fois ; par carte seulement si les calibres la font varier.
  const cardPrices = output.results.map((r) => architecturePriceRange(decision, { nominalBtu: r.candidate.nominalBtu }));
  const pricePerCard = new Set(cardPrices.map((p) => (p ? `${p.min}-${p.max}` : "—"))).size > 1;
  const blockPrice = pricePerCard ? envelopeRange(cardPrices) : (cardPrices[0] ?? architecturePriceRange(decision));

  // Ce que la thermopompe chauffe : toute la maison, sauf une murale pour l'espace principal.
  const coveredLoad = decision.kind === "single-zone" ? decision.sizingLoadBtuH : load.loadBtuH;
  const partial = decision.kind === "single-zone" && decision.levels > 1;
  const units = decision.kind === "multi-single" ? decision.heads : 1;

  const results = output.results.map((r, i) => {
    const c = r.candidate;
    const minTemp = minHeatingTempForModel(c.id);
    return {
      rank: r.rank,
      badge: r.badge,
      score: r.score,
      breakdown: r.breakdown,
      fitRatio: r.fitRatio,
      /** Égalité avec la voisine : pastille « Ex æquo » et départage en clair. */
      tie: r.tie ?? null,
      /** Type d'installation affiché sur la carte : « Centrale gainable », « Multizone, 3 têtes », « Murale × 3 ». */
      installLabel: decision.label,
      /** Part de la charge couverte à −15 °C (murales indépendantes : × N unités). */
      coverage: {
        ratio: Math.round(((c.h5Btu * units) / coveredLoad) * 100) / 100,
        label: partial ? "Espace principal couvert à −15 °C" : "Votre maison couverte à −15 °C",
      },
      /** Relève nécessaire à la température de calcul de la région. */
      backupNote: backupNoteFor(decision, c.h5Btu, minTemp?.valueC ?? null),
      product: {
        id: c.id,
        brand: c.brand,
        series: c.series,
        outdoorModel: c.outdoorModel,
        indoorModel: c.indoorModel ?? null,
        ahri: c.ahri ?? null,
        systemType: c.systemKind,
        installKind: decision.kind,
        coldClimate: c.coldClimate,
        nominalBtu: c.nominalBtu,
        heatingCapacity5FBtuH: { min: c.h5Btu, max: c.h5Btu },
        h5Certified: c.h5Certified,
        heatingCapacity17FBtuH: c.h17Btu,
        minOperatingTempC: minTemp?.valueC ?? null,
        /** « officiel » ou « secondaire » (fiche du fabricant reproduite par un distributeur) ; null si inconnue. */
        minOperatingTempSource: minTemp?.sourceType ?? null,
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
      // Ordre de grandeur installé (grille de la page /prix) : seulement quand il varie d'une carte à l'autre ;
      // sinon il est affiché une fois, dans le bloc de l'architecture (summaryContext.architecture.price).
      priceRange: pricePerCard ? priceOut(cardPrices[i]) : null,
      reasons: r.reasons,
      clientReasons: r.reasons,
      warnings: r.warnings,
    };
  });

  return {
    results,
    summaryContext: {
      estimatedLoadBtu: load.loadBtuH,
      targetBtu: decision.sizingLoadBtuH,
      uncertaintyPct: load.uncertaintyPct,
      loadFactors: load.factors,
      floors,
      requestedZones: decision.heads,
      isMultiZone: decision.heads > 1,
      heatedAreaFt2: req.heatedAreaFt2,
      systemKind: req.systemKind,
      region: region?.region ?? null,
      climateZone: region?.region ?? null,
      // Repère « jours les plus froids » du thermomètre et relève de l'architecture.
      designTempC,
      /** Comment la chaleur sera distribuée (architecture.ts), avec l'ordre de grandeur installé, affiché une fois. */
      architecture: architectureOut(decision, blockPrice, pricePerCard),
      logisVertUpdatedAt: logisVertUpdatedAt ?? null,
      // Économies de chauffage estimées : maisons aux plinthes seulement (voir savings.ts), sur la part que la thermopompe chauffe.
      savings: estimateHeatingSavings({ postalCode: answers.postalCode, currentSystem: answers.currentSystem, loadBtuH: coveredLoad }),
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
