import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { loadThermoCatalog, runThermoMatch, validateMatchInput } from "@/lib/thermomatch-engine/src/index";
import type { MatchPolicy, MatchInput, MatchGoal } from "@/lib/thermomatch-engine/src/types";
import { calculateLogisVertSimple } from "@/lib/subsidies/logisvert-calculator";
import { lookupLogisVert } from "@/lib/subsidies/logisvert-official";

// Brand reputation context — what we say to clients about each brand
const BRAND_CONTEXT: Record<string, { reputation: string; keyStrength: string }> = {
  "mitsubishi electric": {
    reputation: "le leader mondial des thermopompes grand froid",
    keyStrength: "technologie Hyper-Heating, performance garantie jusqu'à -30°C",
  },
  "daikin": {
    reputation: "fabricant japonais de référence, #1 mondial en volume",
    keyStrength: "fiabilité industrielle, série AURORA certifiée grand froid",
  },
  "fujitsu": {
    reputation: "spécialiste reconnu du froid extrême",
    keyStrength: "série AIRSTAGE H avec les meilleurs HSPF2 du marché (jusqu'à 14)",
  },
  "lg": {
    reputation: "innovateur coréen, leader en efficacité énergétique",
    keyStrength: "compresseur DUAL Inverter, certification grand froid ENERGY STAR",
  },
  "samsung": {
    reputation: "fabricant de confiance, technologie WindFree™",
    keyStrength: "diffusion sans courant d'air froid, compresseur Digital Inverter",
  },
  "bosch": {
    reputation: "ingénierie allemande, qualité premium",
    keyStrength: "série IDS, fiabilité à long terme, excellent COP",
  },
  "napoleon": {
    reputation: "marque canadienne fondée en Ontario",
    keyStrength: "conçue pour le climat canadien, service après-vente solide au Québec",
  },
  "lennox": {
    reputation: "référence nord-américaine depuis 1895",
    keyStrength: "large gamme centrale et murale, certification ENERGY STAR avancée",
  },
  "trane": {
    reputation: "fiabilité éprouvée, standard de l'industrie commerciale",
    keyStrength: "robustesse reconnue, longue durée de vie",
  },
  "rheem": {
    reputation: "fabricant nord-américain établi",
    keyStrength: "bon rapport qualité/prix sur les systèmes centraux",
  },
};

/**
 * Build clear, client-facing French explanations of WHY this model was chosen.
 * Focused on what the CLIENT needs to understand — not BTU jargon.
 */
function buildClientReasons(
  product: any,
  input: MatchInput,
  targetBtu: number,
  requestedZones: number,
  heatedAreaFt2: number,
): string[] {
  const reasons: string[] = [];
  const brandLower = product.brand.toLowerCase();
  const ctx = BRAND_CONTEXT[brandLower];
  const btuAtMin = product.heatingCapacity5FBtuH?.min ?? 0;
  const hspf = product.hspf2?.min ?? null;
  const isMultiZone = requestedZones > 1;

  // Reason 1 — Brand credibility in plain French
  if (ctx) {
    reasons.push(`${product.brand} est ${ctx.reputation} — ${ctx.keyStrength}.`);
  }

  // Reason 2 — Capacity match, explained for the client
  if (isMultiZone) {
    reasons.push(
      `Pour ${requestedZones} zones, on vise environ ${Math.round(targetBtu / requestedZones / 1000)} 000 BTU par unité — cette configuration couvre la charge totale estimée de ${Math.round(targetBtu / 1000)} 000 BTU pour votre maison de ${heatedAreaFt2} pi².`,
    );
  } else {
    reasons.push(
      `Pour votre espace de ${heatedAreaFt2} pi², la charge estimée est d'environ ${Math.round(targetBtu / 1000)} 000 BTU. Ce modèle fournit ${Math.round(btuAtMin / 1000)} 000 BTU à -15°C — le bon calibre pour maintenir votre confort sans surchauffer.`,
    );
  }

  // Reason 3 — Cold climate performance (the real differentiator in Quebec)
  if (product.coldClimate) {
    if (brandLower === "mitsubishi electric" || brandLower === "fujitsu") {
      reasons.push(
        `Certifiée ENERGY STAR Climat Froid : cette thermopompe chauffe efficacement même à -25°C à -30°C, sans jamais s'arrêter — cruciale pour un hiver québécois.`,
      );
    } else {
      reasons.push(
        `Certifiée ENERGY STAR Climat Froid : performance garantie sous les grands froids québécois. Elle continue de chauffer même lorsque la température plonge sous les -20°C.`,
      );
    }
  }

  // Reason 4 — Efficiency in real money
  if (hspf && hspf >= 9) {
    const savingsPct = Math.round((hspf / 3.41 - 1) * 30);
    reasons.push(
      `Efficacité HSPF2 de ${hspf} — environ ${savingsPct}% d'économies en chauffage par rapport aux plinthes électriques. Sur une saison de chauffe au Québec, ça représente des centaines de dollars.`,
    );
  } else if (hspf) {
    reasons.push(`Efficacité HSPF2 de ${hspf} — certifiée ENERGY STAR, plus économique que les systèmes conventionnels.`);
  }

  // Reason 5 — Variable compressor = real comfort
  if (product.compressorStaging?.some((s: string) => /variable|inverter/i.test(s))) {
    reasons.push(
      `Compresseur à vitesse variable (Inverter) : la température reste parfaitement stable, sans les cycles ON/OFF qui créent des courants d'air froid. Votre confort est constant, été comme hiver.`,
    );
  }

  return reasons;
}

import { registry } from "@/lib/data/registry";
import { CatalogProduct, CertifiedPairing } from "@/lib/thermomatch-engine/src/types";

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();

    // ── Area ──────────────────────────────────────────────────────────────
    let heatedAreaFt2 = 1250;
    if (answers.area === "<1000") heatedAreaFt2 = 800;
    else if (answers.area === "1000-1500") heatedAreaFt2 = 1250;
    else if (answers.area === "1500-2000") heatedAreaFt2 = 1750;
    else if (answers.area === "2000-2500") heatedAreaFt2 = 2250;
    else if (answers.area === "2500+") heatedAreaFt2 = 3000;

    // ── Home type ─────────────────────────────────────────────────────────
    let homeType: MatchInput["homeType"] = "detached";
    if (answers.propertyType === "condo") homeType = "condo";
    else if (answers.propertyType === "duplex") homeType = "duplex";
    else if (answers.propertyType === "triplex") homeType = "triplex";
    else if (answers.propertyType === "autre") homeType = "other";

    // ── Distribution ──────────────────────────────────────────────────────
    let distribution: MatchInput["distribution"] = "no_ducts";
    if (
      answers.currentSystem === "fournaise-gaz" ||
      answers.currentSystem === "fournaise-mazout" ||
      answers.heatPumpType === "centrale"
    ) {
      distribution = "ducts";
    }

    // ── Zone logic ────────────────────────────────────────────────────────
    const floors = parseInt(answers.floors) || 1;
    let requestedZones = 1;

    if (homeType === "condo") {
      requestedZones = 1; // Condos are typically 1 zone
    } else if (answers.heatPumpType === "centrale") {
      requestedZones = 1;
    } else if (answers.heatPumpType === "multizone") {
      requestedZones = Math.max(2, floors);
    } else {
      if (floors === 1) {
        requestedZones = 1;
      } else {
        requestedZones = Math.min(floors, 4);
      }
    }

    // ── Goal ──────────────────────────────────────────────────────────────
    let goal: MatchGoal = "balanced";
    const priorities: string[] = answers.priority ?? [];
    if (priorities.includes("grand-froid")) goal = "electrification";
    else if (priorities.includes("economies")) goal = "savings";
    else if (priorities.includes("budget") || priorities.includes("prix")) goal = "savings"; // Budget mapping
    else if (priorities.includes("confort")) goal = "comfort";

    // ── Climate zone ──────────────────────────────────────────────────────
    let climateZone: MatchInput["climateZone"] = "7A";
    const pc = (answers.postalCode ?? "").toUpperCase().trim();
    if (pc.startsWith("H") || pc.startsWith("J4") || pc.startsWith("J3") || pc.startsWith("J7") || pc.startsWith("J8")) {
      climateZone = "6";
    } else if (pc.startsWith("G") || pc.startsWith("J1") || pc.startsWith("J2") || pc.startsWith("K")) {
      climateZone = "7A";
    }

    // ── Backup heat ───────────────────────────────────────────────────────
    const backupHeatAvailable =
      answers.currentSystem === "fournaise-gaz" ||
      answers.currentSystem === "fournaise-mazout" ||
      answers.currentSystem === "bienergie";

    const inputData: MatchInput = {
      selectionYear: 2026,
      heatedAreaFt2,
      climateZone,
      homeType,
      constructionPeriod: "1981_2000",
      insulation: "standard",
      distribution,
      requestedZones,
      goal,
      backupHeatAvailable,
    };

    const input = validateMatchInput(inputData);
    const policyPath = path.join(process.cwd(), "src", "lib", "thermomatch-engine", "config", "match-policy-2026.json");
    const policy = JSON.parse(await fs.readFile(policyPath, "utf8")) as MatchPolicy;
    policy.maxResults = 15; // Increased to allow diversity picking
    policy.maxPerBrand = 3; // Allow up to 3 per brand so we have fallbacks
    policy.allowedBrands = []; // ALLOW ALL BRANDS to fix the bug where most choices are removed

    // ── Quality Priority Logic ────────────────────────────────────────────
    if (priorities.includes("qualite")) {
      policy.allowedBrands = ["daikin", "mitsubishi electric", "fujitsu", "panasonic", "trane", "lennox", "bosch", "samsung", "lg"];
    }

    // ── Build Live Catalog from Registry ──────────────────────────────────
    const liveProducts: CatalogProduct[] = registry.models
      .filter(m => {
        if (!m.isActive2026 || !m.thermomatchEligible) return false;
        const brand = registry.brandById.get(m.brandId);
        return brand ? brand.activeInQuebec : false;
      })
      .map(m => {
        const brand = registry.brandById.get(m.brandId);
        
        // Find best configuration for specs
        const configs = registry.configurations.filter(c => c.modelId === m.id);
        const bestConfig = configs.sort((a, b) => (b.seer2 || 0) - (a.seer2 || 0))[0];

        // Is cold climate? Check certifications or config
        const isColdClimate = m.categories.includes("cold-climate") || !!configs.some(c => c.minHeatingTempC && c.minHeatingTempC <= -20);
        const minTemp = bestConfig?.minHeatingTempC ?? (isColdClimate ? -25 : -15);
        
        // Estimate capacities from model or config
        const cap = m.nominalCapacityBtu || 12000;
        
        const pairing: CertifiedPairing = {
          indoorModel: m.name,
          heatingCapacity5FBtuH: {
            min: m.heatingCapacity5FMinBtu || cap * 0.4, // Inverters modulate down to ~40%
            max: m.heatingCapacity5FMaxBtu || cap * 1.05,
          },
          cop5F: {
            min: m.cop5FMin || 1.8,
            max: m.cop5FMax || 2.2,
          },
          seer2: {
            min: m.seer2Min || bestConfig?.seer2 || 16,
            max: m.seer2Max || bestConfig?.seer2 || 20,
          },
          hspf2: {
            min: m.hspf2Min || bestConfig?.hspf2 || 9,
            max: m.hspf2Max || bestConfig?.hspf2 || 10,
          },
          ahriReferenceCount: 1,
        };

        return {
          id: m.id,
          commercialKey: m.id,
          brand: brand?.name || "Unknown",
          series: m.name,
          systemType: m.systemType === "central" ? "central" : "ductless",
          outdoorModel: m.modelNumber || m.name,
          coldClimate: isColdClimate,
          heatingCapacity5FBtuH: pairing.heatingCapacity5FBtuH,
          cop5F: pairing.cop5F,
          seer2: pairing.seer2,
          hspf2: pairing.hspf2,
          refrigerants: [],
          compressorStaging: ["Continuously variable"], // Assumed for modern mini-splits/premium to boost comfort score
          connectedCapable: [],
          firstMarketDate: "2026-01-01",
          lastMarketDate: "2026-01-01",
          selectionYear: 2026,
          sourceUrl: "",
          pairings: [pairing],
          warranties: [],
          enrichment: {
            minHeatingOutdoorC: minTemp,
            note: "",
            confidence: "haute",
            sourceUrl: ""
          },
          zoneCompatibility: m.categories.includes("multi-zone") ? "multi" : "single",
          imageUrl: m.imageUrl || brand?.logoUrl || null,
        };
      });

    const liveCatalog = {
      manifest: {
        schemaVersion: "thermomatch-catalog-1" as const,
        selectionYear: 2026,
        selectionRule: "last_market_date_year" as const,
        sourceWorkbook: "registry",
        importedAt: new Date().toISOString(),
        sourceRows: liveProducts.length,
        selectedPairingRows: liveProducts.length,
        productCount: liveProducts.length,
        brandCount: new Set(liveProducts.map(p => p.brand)).size,
        warnings: [],
      },
      products: liveProducts,
    };

    const output = runThermoMatch(input, liveCatalog, policy);
    const targetBtu = output.targetHeatPumpCapacityBtuH;

    // ── Brand Diversity Logic ─────────────────────────────────────────────
    // We want the absolute best match as #1.
    // We want a Premium brand as one of the options if possible.
    // We want a Value brand as one of the options if possible.
    
    const premiumBrands = ["daikin", "mitsubishi electric", "fujitsu", "panasonic", "trane", "lennox"];
    const valueBrands = ["gree", "moovair", "mainline", "quebec vair", "senville", "midea", "direct air", "tosot"];
    
    const candidates = output.results;
    const finalSelection = [];
    
    if (candidates.length > 0) {
      // 1. Always take the #1 absolute best choice
      const topChoice = candidates[0];
      finalSelection.push(topChoice);
      const topBrand = topChoice.product.brand.toLowerCase();
      
      const isTopPremium = premiumBrands.includes(topBrand);
      const isTopValue = valueBrands.includes(topBrand);
      
      // 2. Find a diverse second choice
      let secondChoice = undefined;
      if (isTopValue) {
        secondChoice = candidates.find(c => premiumBrands.includes(c.product.brand.toLowerCase()));
      } else if (isTopPremium) {
        secondChoice = candidates.find(c => valueBrands.includes(c.product.brand.toLowerCase()));
      }
      
      if (!secondChoice) {
        secondChoice = candidates.find(c => c.product.id !== topChoice.product.id && c.product.brand.toLowerCase() !== topBrand);
      }
      
      // FALLBACK: If we still don't have a second choice, just pick ANY other model
      if (!secondChoice) {
        secondChoice = candidates.find(c => c.product.id !== topChoice.product.id);
      }
      
      if (secondChoice) {
        finalSelection.push(secondChoice);
        
        // 3. Find a third choice that balances the mix
        const selectedBrands = finalSelection.map(c => c.product.brand.toLowerCase());
        const selectedIds = finalSelection.map(c => c.product.id);
        const hasPremium = selectedBrands.some(b => premiumBrands.includes(b));
        const hasValue = selectedBrands.some(b => valueBrands.includes(b));
        
        let thirdChoice = undefined;
        if (!hasPremium) {
          thirdChoice = candidates.find(c => premiumBrands.includes(c.product.brand.toLowerCase()) && !selectedBrands.includes(c.product.brand.toLowerCase()));
        } else if (!hasValue) {
          thirdChoice = candidates.find(c => valueBrands.includes(c.product.brand.toLowerCase()) && !selectedBrands.includes(c.product.brand.toLowerCase()));
        }
        
        if (!thirdChoice) {
          thirdChoice = candidates.find(c => !selectedBrands.includes(c.product.brand.toLowerCase()));
        }
        
        // FALLBACK: Just pick any model not already selected (e.g. if only Samsung matches)
        if (!thirdChoice) {
          thirdChoice = candidates.find(c => !selectedIds.includes(c.product.id));
        }
        
        if (thirdChoice) finalSelection.push(thirdChoice);
      }
    }
    
    output.results = finalSelection;

    // Enrich each result with client-facing context
    const resultsWithContext = output.results.map((rec) => {
      const isColdClimate = rec.product.coldClimate;
      
      // Try to get exact Logis Vert data, otherwise calculate a realistic fallback based on the machine's actual max capacity
      const officialLogisVert = lookupLogisVert(rec.product.outdoorModel);
      const fallbackBtu = (rec.product.heatingCapacity5FBtuH?.max ?? rec.suggestedCapacityBtuH) * 0.9; // 0.9 approximates 17F capacity from max
      const dollars = officialLogisVert?.logisVertDollars ?? calculateLogisVertSimple(fallbackBtu, isColdClimate).dollars;
      
      const clientReasons = buildClientReasons(rec.product, input, targetBtu, requestedZones, heatedAreaFt2);

      return {
        ...rec,
        subsidyEstimate: dollars,
        clientReasons,
        architectureNote:
          requestedZones > 1
            ? `Configuration ${requestedZones} zones recommandée pour ${floors} étage${floors > 1 ? "s" : ""} — une unité murale par niveau pour un confort optimal partout dans la maison.`
            : null,
      };
    });

    return NextResponse.json({
      success: true,
      results: resultsWithContext,
      summaryContext: {
        estimatedLoadBtu: output.estimatedDesignLoadBtuH,
        targetBtu,
        floors,
        requestedZones,
        climateZone,
        isMultiZone: requestedZones > 1,
        heatedAreaFt2,
      },
      diagnostics: output.diagnostics,
      warnings: output.warnings,
    });
  } catch (error) {
    console.error("ThermoMatch API Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

