import { describe, expect, it } from "vitest";
import { estimateLoad } from "../sizing";
import type { MatchRequest } from "../types";

const base: MatchRequest = {
  heatedAreaFt2: 800,
  homeType: "detached",
  floors: 1,
  systemKind: "ductless",
  zones: 1,
  backupHeatAvailable: false,
  priorities: [],
  budget: "unknown",
};

describe("estimateLoad — charge uniforme Québec", () => {
  it("800 pi² plain-pied standard → 12 000 BTU/h", () => {
    expect(estimateLoad(base).loadBtuH).toBe(12_000);
  });

  it("1 250 pi² → 19 000, 1 750 → 26 500, 2 250 → 34 000 (arrondi à 500)", () => {
    expect(estimateLoad({ ...base, heatedAreaFt2: 1250 }).loadBtuH).toBe(19_000);
    expect(estimateLoad({ ...base, heatedAreaFt2: 1750 }).loadBtuH).toBe(26_500);
    expect(estimateLoad({ ...base, heatedAreaFt2: 2250 }).loadBtuH).toBe(34_000);
  });

  it("un condo de 800 pi² demande nettement moins qu'une maison", () => {
    const condo = estimateLoad({ ...base, homeType: "condo" }).loadBtuH;
    expect(condo).toBeLessThan(12_000);
    expect(condo).toBeGreaterThanOrEqual(7_000);
  });

  it("une maison d'avant 1960 mal isolée demande plus, une maison neuve bien isolée moins", () => {
    const old = estimateLoad({ ...base, constructionPeriod: "pre_1960", insulation: "poor" }).loadBtuH;
    const recent = estimateLoad({ ...base, constructionPeriod: "2016_plus", insulation: "high_performance" }).loadBtuH;
    expect(old).toBeGreaterThan(12_000);
    expect(recent).toBeLessThan(12_000);
    expect(old).toBeGreaterThan(recent * 1.5);
  });

  it("deux maisons identiques donnent exactement la même charge (déterminisme)", () => {
    expect(estimateLoad(base)).toEqual(estimateLoad({ ...base }));
  });

  it("la fourchette d'incertitude se resserre quand le client répond aux questions détaillées", () => {
    const vague = estimateLoad(base).uncertaintyPct;
    const precise = estimateLoad({ ...base, constructionPeriod: "1981_2000", insulation: "standard", windowShare: "standard", basement: "none" }).uncertaintyPct;
    expect(precise).toBeLessThan(vague);
  });

  it("refuse une superficie absurde", () => {
    expect(() => estimateLoad({ ...base, heatedAreaFt2: 50 })).toThrow();
    expect(() => estimateLoad({ ...base, heatedAreaFt2: 50_000 })).toThrow();
  });
});
