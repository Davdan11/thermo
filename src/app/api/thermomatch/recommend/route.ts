import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { loadThermoCatalog, runThermoMatch, validateMatchInput } from "@/lib/thermomatch-engine/src/index";
import type { MatchPolicy, MatchInput, MatchGoal } from "@/lib/thermomatch-engine/src/types";
import { calculateLogisVertSimple } from "@/lib/subsidies/logisvert-calculator";

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

    // ── Zone logic — intelligent architecture, not just a number ──────────
    // KEY RULE: Never propose a single wall unit for a multi-floor home.
    // 2+ floors without ducts = multi-zone (one head per floor).
    const floors = parseInt(answers.floors) || 1;
    let requestedZones = 1;

    if (answers.heatPumpType === "centrale") {
      requestedZones = 1; // Central = 1 outdoor unit distributes everywhere
    } else if (answers.heatPumpType === "multizone") {
      requestedZones = Math.max(2, floors);
    } else {
      // "murale" or default — apply the architecture rule
      if (floors === 1) {
        requestedZones = 1;
      } else {
        // 2 or 3 floors: one indoor unit per floor is the correct design
        requestedZones = Math.min(floors, 4);
      }
    }

    // ── Goal ──────────────────────────────────────────────────────────────
    let goal: MatchGoal = "balanced";
    const priorities: string[] = answers.priority ?? [];
    if (priorities.includes("grand-froid")) goal = "electrification";
    else if (priorities.includes("economies")) goal = "savings";
    else if (priorities.includes("confort")) goal = "comfort";

    // ── Climate zone — derived from postal code ───────────────────────────
    let climateZone: MatchInput["climateZone"] = "7A"; // Default: Quebec City, Laurentides, most of Quebec
    const pc = (answers.postalCode ?? "").toUpperCase().trim();
    if (pc.startsWith("H") || pc.startsWith("J4") || pc.startsWith("J3") || pc.startsWith("J7") || pc.startsWith("J8")) {
      climateZone = "6"; // Greater Montreal area (milder winters)
    } else if (pc.startsWith("G") || pc.startsWith("J1") || pc.startsWith("J2") || pc.startsWith("K")) {
      climateZone = "7A"; // Quebec City / Eastern Townships
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
    const catalogPath = path.join(process.cwd(), "src", "lib", "thermomatch-engine", "data", "catalog-2026.json");
    const policyPath = path.join(process.cwd(), "src", "lib", "thermomatch-engine", "config", "match-policy-2026.json");

    const catalog = await loadThermoCatalog(catalogPath);
    const policy = JSON.parse(await fs.readFile(policyPath, "utf8")) as MatchPolicy;
    policy.maxResults = 3;
    policy.maxPerBrand = 1;

    const output = runThermoMatch(input, catalog, policy);
    const targetBtu = output.targetHeatPumpCapacityBtuH;

    // Enrich each result with client-facing context
    const resultsWithContext = output.results.map((rec) => {
      const isColdClimate = rec.product.coldClimate;
      const btu = rec.suggestedCapacityBtuH;
      const { dollars } = calculateLogisVertSimple(btu, isColdClimate);
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
