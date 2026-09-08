import { describe, expect, it } from "vitest";
import { buildCandidates, dedupeRebadges, runThermoMatch, type MatchRequest, type SourceModel, type SourcePairing } from "../index";
import { makeCandidate } from "./scoring.test";

const req: MatchRequest = {
  heatedAreaFt2: 800,
  homeType: "detached",
  floors: 1,
  systemKind: "ductless",
  zones: 1,
  backupHeatAvailable: false,
  priorities: [],
  budget: "unknown",
};

/** Un petit catalogue synthétique : 9k, 12k, 18k, 24k murales de quatre marques, plus une centrale. */
function pool() {
  return [
    makeCandidate({ id: "alpha-9", brand: "Alpha", tier: "premium", nominalBtu: 9_000, h5Btu: 9_500, logisVertDollars: 800 }),
    makeCandidate({ id: "alpha-12", brand: "Alpha", tier: "premium", nominalBtu: 12_000, h5Btu: 12_800, logisVertDollars: 1_300 }),
    makeCandidate({ id: "beta-12", brand: "Beta", tier: "value", nominalBtu: 12_000, h5Btu: 11_400, hspf2: 9.2, logisVertDollars: 900 }),
    makeCandidate({ id: "gamma-12", brand: "Gamma", tier: "mid", nominalBtu: 12_000, h5Btu: 12_200, logisVertDollars: 1_100 }),
    makeCandidate({ id: "alpha-18", brand: "Alpha", tier: "premium", nominalBtu: 18_000, h5Btu: 18_600, logisVertDollars: 1_900 }),
    makeCandidate({ id: "delta-18", brand: "Delta", tier: "mid", nominalBtu: 18_000, h5Btu: 17_000, logisVertDollars: 1_500 }),
    makeCandidate({ id: "beta-24", brand: "Beta", tier: "value", nominalBtu: 24_000, h5Btu: 23_000, logisVertDollars: 2_400 }),
    makeCandidate({ id: "central-36", brand: "Alpha", tier: "premium", systemKind: "central", nominalBtu: 36_000, h5Btu: 34_000, logisVertDollars: 3_000 }),
  ];
}

describe("runThermoMatch — 800 pi² murale", () => {
  const out = runThermoMatch(req, pool());

  it("estime 12 000 BTU/h et recommande des machines de calibre 12 000, pas 18 000", () => {
    expect(out.load.loadBtuH).toBe(12_000);
    expect(out.results).toHaveLength(3);
    for (const r of out.results) expect(r.candidate.nominalBtu).toBe(12_000);
  });

  it("les trois recommandations sont de marques différentes et techniquement distinctes", () => {
    const brands = new Set(out.results.map((r) => r.candidate.brand));
    const sigs = new Set(out.results.map((r) => r.candidate.signature));
    expect(brands.size).toBe(3);
    expect(sigs.size).toBe(3);
  });

  it("les rangs sont 1, 2, 3 et le #1 porte « Meilleur choix »", () => {
    expect(out.results.map((r) => r.rank)).toEqual([1, 2, 3]);
    expect(out.results[0].badge).toBe("Meilleur choix");
  });

  it("n'inclut jamais une centrale quand le client veut une murale", () => {
    expect(out.results.every((r) => r.candidate.systemKind === "ductless")).toBe(true);
  });

  it("chaque résultat explique la capacité avec un chiffre réel", () => {
    for (const r of out.results) {
      expect(r.reasons.some((t) => t.includes("-15 °C") && /\d BTU\/h/.test(t))).toBe(true);
    }
  });

  it("émet l'avertissement CSA F280", () => {
    expect(out.warnings.some((w) => w.includes("CSA F280"))).toBe(true);
  });

  it("est déterministe", () => {
    expect(JSON.stringify(runThermoMatch(req, pool()))).toBe(JSON.stringify(out));
  });
});

describe("runThermoMatch — cas limites", () => {
  it("2 250 pi² avec fournaise et conduits → seulement des centrales", () => {
    const out = runThermoMatch({ ...req, heatedAreaFt2: 2250, systemKind: "central", backupHeatAvailable: true }, pool());
    expect(out.results.length).toBeGreaterThan(0);
    expect(out.results.every((r) => r.candidate.systemKind === "central")).toBe(true);
  });

  it("retourne une liste vide plutôt qu'une machine inadaptée", () => {
    const tiny = [makeCandidate({ id: "x", nominalBtu: 9_000, h5Btu: 6_000 })];
    const out = runThermoMatch({ ...req, heatedAreaFt2: 2500 }, tiny);
    expect(out.results).toEqual([]);
  });

  it("le code postal n'existe pas dans la requête : deux villes différentes donnent la même réponse", () => {
    // Le moteur ne reçoit aucune localisation : c'est structurel, pas accidentel.
    const a = runThermoMatch(req, pool());
    const b = runThermoMatch({ ...req }, pool());
    expect(a.results.map((r) => r.candidate.id)).toEqual(b.results.map((r) => r.candidate.id));
  });
});

describe("buildCandidates + dedupeRebadges", () => {
  const pairings: Record<string, SourcePairing[]> = {
    "37MPRAQ18AA3": [
      { ahri: "1", indoorModel: "40MPHAQ18", logisVertDollars: 1_400, heatingBtu17F: 15_000, heatingBtu5F: 18_000, nominalBtu: 18_000, coldClimate: true, seer2: 21.5, hspf2: 11.3, cop5: 2.0 },
      { ahri: "2", indoorModel: "40MPHBQ18", logisVertDollars: 1_200, heatingBtu17F: 14_000, heatingBtu5F: 12_000, nominalBtu: 18_000, coldClimate: true, seer2: 20, hspf2: 10.8, cop5: 1.9 },
    ],
    "NOSTAR12": [
      { ahri: "3", logisVertDollars: 600, heatingBtu17F: 10_000, nominalBtu: 12_000, coldClimate: false },
    ],
  };
  const models: SourceModel[] = [
    { id: "bryant-18", brandName: "BRYANT", name: "45M 18000 BTU", modelNumber: "37MPRAQ18AA3", systemType: "wall-single", nominalCapacityBtu: 18_000 },
    { id: "carrier-18", brandName: "CARRIER", name: "45M 18000 BTU", modelNumber: "37MPRAQ18AA3", systemType: "wall-single", nominalCapacityBtu: 18_000 },
    { id: "nostar-12", brandName: "Zephyr", name: "Ultra 12000", modelNumber: "NOSTAR12", systemType: "wall-single", nominalCapacityBtu: 12_000 },
    { id: "unknown-type", brandName: "Zephyr", name: "?", modelNumber: "NOSTAR12", systemType: "other", nominalCapacityBtu: 12_000 },
  ];

  it("fusionne Bryant et Carrier en une seule machine et le dit", () => {
    const out = buildCandidates(models, { loadBtuH: 18_000, pairingsFor: (m) => pairings[m] ?? [] });
    const rebadged = out.filter((c) => c.outdoorModel === "37MPRAQ18AA3");
    expect(rebadged).toHaveLength(1);
    expect(rebadged[0].brand).toBe("CARRIER");
    expect(rebadged[0].alsoSoldAs).toEqual(["BRYANT"]);
  });

  it("choisit l'appariement dont la capacité à -15 °C colle à la charge", () => {
    const out = buildCandidates(models, { loadBtuH: 12_000, pairingsFor: (m) => pairings[m] ?? [] });
    const c = out.find((x) => x.outdoorModel === "37MPRAQ18AA3")!;
    expect(c.h5Btu).toBe(12_000);
    expect(c.indoorModel).toBe("40MPHBQ18");
  });

  it("estime h5 depuis h17 quand ENERGY STAR ne publie rien, et le marque comme estimé", () => {
    const out = buildCandidates(models, { loadBtuH: 12_000, pairingsFor: (m) => pairings[m] ?? [] });
    const c = out.find((x) => x.id === "nostar-12")!;
    expect(c.h5Certified).toBe(false);
    expect(c.h5Btu).toBe(8_500);
  });

  it("ignore les modèles dont le type de système est inconnu", () => {
    const out = buildCandidates(models, { loadBtuH: 12_000, pairingsFor: (m) => pairings[m] ?? [] });
    expect(out.find((x) => x.id === "unknown-type")).toBeUndefined();
  });

  it("dedupeRebadges garde une machine par empreinte", () => {
    const a = makeCandidate({ id: "a", brand: "Keeprite", signature: "S" });
    const b = makeCandidate({ id: "b", brand: "Carrier", signature: "S" });
    const c = makeCandidate({ id: "c", brand: "Carrier", signature: "S" });
    const out = dedupeRebadges([a, b, c]);
    expect(out).toHaveLength(1);
    expect(out[0].brand).toBe("Carrier");
    expect(out[0].alsoSoldAs).toEqual(["Keeprite"]);
  });
});

describe("selectTop — écart de score", () => {
  it("n'impose pas une alternative haut de gamme nettement moins bonne", async () => {
    const { selectTop, MAX_SCORE_GAP } = await import("../select");
    const mk = (id: string, brand: string, tier: "premium" | "mid" | "value", score: number) => ({
      candidate: makeCandidate({ id, brand, tier, signature: "sig-" + id }),
      score,
      breakdown: { fit: 0, cold: 0, efficiency: 0, subsidy: 0, budget: 0, dataQuality: 0 },
      fitRatio: 1,
    });
    const pool = [mk("a", "A", "value", 88), mk("b", "B", "mid", 81), mk("c", "C", "mid", 80), mk("d", "D", "premium", 88 - MAX_SCORE_GAP - 5)];
    const out = selectTop(pool, 3);
    expect(out.map((r) => r.candidate.id)).toEqual(["a", "b", "c"]);
    expect(out.map((r) => r.rank)).toEqual([1, 2, 3]);
    expect(out[1].score).toBeGreaterThanOrEqual(out[2].score);
  });

  it("propose l'alternative haut de gamme quand elle est proche du #1", async () => {
    const { selectTop } = await import("../select");
    const mk = (id: string, brand: string, tier: "premium" | "mid" | "value", score: number) => ({
      candidate: makeCandidate({ id, brand, tier, signature: "sig-" + id }),
      score,
      breakdown: { fit: 0, cold: 0, efficiency: 0, subsidy: 0, budget: 0, dataQuality: 0 },
      fitRatio: 1,
    });
    const pool = [mk("a", "A", "value", 88), mk("b", "B", "mid", 87), mk("d", "D", "premium", 80)];
    const out = selectTop(pool, 3);
    expect(out.map((r) => r.candidate.id)).toEqual(["a", "b", "d"]);
    expect(out[2].badge).toBe("Haut de gamme");
  });
});
