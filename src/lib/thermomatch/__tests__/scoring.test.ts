import { describe, expect, it } from "vitest";
import { DEFAULT_WEIGHTS, fitScore, scoreCandidate, weightsFor, capacityWindow } from "../scoring";
import type { Candidate } from "../types";

export function makeCandidate(over: Partial<Candidate> = {}): Candidate {
  return {
    id: over.id ?? "test-12k",
    brand: "Testbrand",
    series: "Série T",
    outdoorModel: "T12",
    systemKind: "ductless",
    nominalBtu: 12_000,
    h5Btu: 12_500,
    h5Certified: true,
    h17Btu: 13_000,
    cop5: 2.1,
    seer2: 22,
    hspf2: 10.5,
    coldClimate: true,
    logisVertDollars: 1_200,
    tier: "mid",
    imageUrl: null,
    alsoSoldAs: [],
    signature: "sig-" + (over.id ?? "test-12k"),
    multiZoneCapable: false,
    ...over,
  };
}

describe("fitScore", () => {
  it("est maximal entre 95 % et 120 % de la charge", () => {
    expect(fitScore(1.0, false)).toBe(1);
    expect(fitScore(1.2, false)).toBe(1);
    expect(fitScore(0.95, false)).toBe(1);
  });

  it("pénalise le surdimensionnement : une 18 000 pour une charge de 12 000 (150 %) perd des points", () => {
    expect(fitScore(1.5, false)).toBeLessThan(0.6);
    expect(fitScore(1.5, false)).toBeGreaterThan(0);
  });

  it("pénalise le sous-dimensionnement plus fort sans chauffage d'appoint", () => {
    expect(fitScore(0.7, false)).toBeLessThan(fitScore(0.7, true));
  });

  it("est monotone : plus on s'éloigne de la charge, plus le score baisse", () => {
    expect(fitScore(1.3, false)).toBeGreaterThan(fitScore(1.4, false));
    expect(fitScore(1.4, false)).toBeGreaterThan(fitScore(1.6, false));
    expect(fitScore(0.9, false)).toBeGreaterThan(fitScore(0.8, false));
  });
});

describe("weightsFor", () => {
  it("les poids totalisent toujours 100", () => {
    for (const p of [[], ["economies"], ["grand-froid", "prix"], ["qualite", "silence", "economies"]] as const) {
      const w = weightsFor([...p]);
      const total = Object.values(w).reduce((a, b) => a + b, 0);
      expect(Math.round(total * 1000) / 1000).toBe(100);
    }
  });

  it("« grand froid » augmente le poids du critère froid", () => {
    expect(weightsFor(["grand-froid"]).cold).toBeGreaterThan(DEFAULT_WEIGHTS.cold);
  });
});

describe("scoreCandidate", () => {
  const ctx = {
    loadBtuH: 12_000,
    backupHeatAvailable: false,
    budget: "unknown" as const,
    priorities: [] as [],
    weights: weightsFor([]),
    maxSubsidyDollars: 2_000,
  };

  it("pour 800 pi² (12 000 BTU), une 12 000 certifiée bat une 18 000 identique par ailleurs", () => {
    const twelve = scoreCandidate(makeCandidate({ id: "a", h5Btu: 12_500, nominalBtu: 12_000 }), ctx);
    const eighteen = scoreCandidate(makeCandidate({ id: "b", h5Btu: 18_500, nominalBtu: 18_000 }), ctx);
    expect(twelve.score).toBeGreaterThan(eighteen.score);
  });

  it("une capacité estimée (non certifiée) coûte des points de qualité de données", () => {
    const certified = scoreCandidate(makeCandidate({ id: "a" }), ctx);
    const estimated = scoreCandidate(makeCandidate({ id: "b", h5Certified: false }), ctx);
    expect(estimated.breakdown.dataQuality).toBeLessThan(certified.breakdown.dataQuality);
  });

  it("le total est la somme des contributions", () => {
    const s = scoreCandidate(makeCandidate(), ctx);
    const sum = Object.values(s.breakdown).reduce((a, b) => a + b, 0);
    expect(Math.abs(sum - s.score)).toBeLessThan(0.11);
    expect(s.score).toBeLessThanOrEqual(100);
  });

  it("un petit budget favorise une marque « valeur » sur une marque premium", () => {
    const low = { ...ctx, budget: "low" as const };
    const value = scoreCandidate(makeCandidate({ id: "v", tier: "value" }), low);
    const premium = scoreCandidate(makeCandidate({ id: "p", tier: "premium" }), low);
    expect(value.score).toBeGreaterThan(premium.score);
  });
});

describe("capacityWindow", () => {
  it("tolère plus petit quand une fournaise reste en appoint", () => {
    expect(capacityWindow(true).minRatio).toBeLessThan(capacityWindow(false).minRatio);
  });
});
