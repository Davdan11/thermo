/* ==================================================================
   POST /api/thermomatch/recommend

   Questionnaire → ThermoMatch v2 (src/lib/thermomatch)

   - Charge estimée uniforme pour tout le Québec (le code postal sert
     à situer le client, pas à choisir la machine).
   - Capacités certifiées à -15 °C et montants LogisVert : base officielle
     Hydro-Québec (src/lib/subsidies/logisvert-official-amounts.json).
   - Déterministe, sans IA, sans politique de marque : toutes les marques
     du catalogue actives au Québec sont candidates.
   ================================================================== */

import { NextResponse } from "next/server";
import { registry } from "@/lib/data/registry";
import { seriesDisplayName } from "@/lib/data/series-label";
import { getLogisVertVariants } from "@/lib/subsidies/logisvert-official";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { buildCandidates, runThermoMatch, type SourceModel, type SourcePairing } from "@/lib/thermomatch";
import { answersToRequest, type QuestionnaireAnswers } from "@/lib/thermomatch/answers";

/* ------------------------------------------------------------------
   Modèles admissibles (calculés une fois par processus)
   ------------------------------------------------------------------ */

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
  }));
}

/* ------------------------------------------------------------------
   Handler
   ------------------------------------------------------------------ */

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as { answers?: QuestionnaireAnswers } | null;
    if (!body || typeof body.answers !== "object" || body.answers === null) {
      return NextResponse.json({ success: false, error: "Le questionnaire est manquant." }, { status: 400 });
    }
    const answers = body.answers;
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
        reasons: r.reasons,
        clientReasons: r.reasons,
        warnings: r.warnings,
        architectureNote:
          req.zones > 1
            ? `Configuration ${req.zones} zones suggérée pour ${floors} étage${floors > 1 ? "s" : ""} : une unité intérieure par niveau. La répartition exacte est confirmée lors de la visite.`
            : null,
      };
    });

    return NextResponse.json({
      success: true,
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
        notices: output.warnings,
        weights: output.weights,
        candidatesEvaluated: output.diagnostics.afterSystemKind,
        candidatesRetained: output.diagnostics.afterCapacityWindow,
      },
      weights: output.weights,
      diagnostics: output.diagnostics,
      warnings: output.warnings,
    });
  } catch (error) {
    console.error("ThermoMatch API Error:", error);
    const message = error instanceof Error ? error.message : "Erreur interne";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
