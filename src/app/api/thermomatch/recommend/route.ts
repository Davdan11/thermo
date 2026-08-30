import { NextResponse } from "next/server";
import { getThermoMatchCandidates, type ThermoMatchFilters } from "@/lib/data/queries/thermomatch";
import type { SystemType } from "@/lib/data/types/enums";
import { calculateLogisVertSimple } from "@/lib/subsidies/logisvert-calculator";

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();

    // 1. Convert answers to ThermoMatchFilters
    const filters: ThermoMatchFilters = {};

    if (answers.heatPumpType) {
      if (answers.heatPumpType === "murale") filters.systemType = "wall-single";
      else if (answers.heatPumpType === "centrale") filters.systemType = "central-ducted";
      else if (answers.heatPumpType === "multizone") filters.systemType = "multi-zone";
    }

    if (answers.area) {
      // Very rough conversion of area to BTU
      // <1000 = ~9k-12k, 1000-1500 = ~12k-18k, 1500-2000 = ~18k-24k, etc.
      if (answers.area === "<1000") filters.minCapacityBtu = 9000;
      else if (answers.area === "1000-1500") filters.minCapacityBtu = 12000;
      else if (answers.area === "1500-2000") filters.minCapacityBtu = 18000;
      else if (answers.area === "2000-2500") filters.minCapacityBtu = 24000;
      else if (answers.area === "2500+") filters.minCapacityBtu = 30000;
    }

    // Capture priorities for scoring
    const priorities = answers.priority || [];

    // 2. Fetch candidates
    const candidates = getThermoMatchCandidates(filters);

    // 3. Score and Sort Candidates
    // A simple scoring algorithm based on user priorities.
    const scored = candidates.map(c => {
      let score = 0;
      const btu = c.model.nominalCapacityBtu || 12000;
      const seer = c.configuration?.seer2 ?? 15;
      const hspf = c.configuration?.hspf2 ?? 8;
      
      // Calculate LogisVert to boost score for "economies" or "prix"
      const { dollars } = calculateLogisVertSimple(btu, c.model.categories.includes("cold-climate"));

      if (priorities.includes("economies")) {
        score += seer * 2; // high seer gives higher score
        score += hspf * 2;
        if (dollars > 0) score += 50; // extra points if eligible for subsidy
      }

      if (priorities.includes("grand-froid")) {
        score += hspf * 3;
        if (c.model.categories.includes("cold-climate")) score += 100;
        if (c.configuration.minHeatingTempC && c.configuration.minHeatingTempC <= -25) {
          score += 50;
        }
      }

      if (priorities.includes("qualite")) {
        // Boost premium brands arbitrarily for demonstration
        const brand = c.brandName.toLowerCase();
        if (brand.includes("daikin") || brand.includes("mitsubishi") || brand.includes("fujitsu")) {
          score += 100;
        }
        score += seer; // higher end models usually have better seer
      }

      if (priorities.includes("prix")) {
        // Boost non-premium brands, or high subsidy
        const brand = c.brandName.toLowerCase();
        if (!brand.includes("daikin") && !brand.includes("mitsubishi")) {
          score += 50;
        }
        if (dollars > 0) score += 50; // subsidy lowers net price
      }
      
      if (priorities.includes("silence")) {
        const db = c.configuration?.noiseIndoorMinDbA ?? 40;
        // lower dB is better
        score += Math.max(0, 100 - db * 2);
      }

      // Add a small random factor to avoid identical scores always ordering the same way
      score += Math.random() * 5;

      return {
        ...c,
        score,
        subsidyEstimate: dollars
      };
    });

    // Sort descending by score
    scored.sort((a, b) => b.score - a.score);

    // Grouping by Good, Better, Best (or simply top 3)
    // We'll take the top 3 unique models (avoiding 3 configs of the same exact model)
    const top3 = [];
    const seenModels = new Set();
    
    for (const item of scored) {
      if (!seenModels.has(item.model.id)) {
        seenModels.add(item.model.id);
        top3.push(item);
      }
      if (top3.length === 3) break;
    }

    return NextResponse.json({ success: true, results: top3 });
  } catch (error) {
    console.error("ThermoMatch API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
