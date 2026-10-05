import { describe, expect, it } from "vitest";
import { explainTieBreak, isTie } from "../ties";
import { selectTop } from "../select";
import type { ScoreBreakdown, ScoredCandidate } from "../types";
import { makeCandidate } from "./scoring.test";

/* Deux recommandations voisines à moins d'un point (ou au même score arrondi) sont « ex æquo » :
   on le dit, et on dit ce qui les départage. */

const zero: ScoreBreakdown = { fit: 30, cold: 10, efficiency: 15, subsidy: 8, budget: 7, dataQuality: 5 };
const scored = (id: string, brand: string, over: Partial<ScoreBreakdown>, extra: Partial<ScoredCandidate> = {}): ScoredCandidate => {
  const breakdown = { ...zero, ...over };
  const score = Math.round(Object.values(breakdown).reduce((a, b) => a + b, 0) * 10) / 10;
  return { candidate: makeCandidate({ id, brand, signature: `sig-${id}` }), score, breakdown, fitRatio: 1, ...extra };
};

describe("Égalités de score", () => {
  it("chacune son avantage, et l'écart sous la précision de l'estimation", () => {
    const midea = scored("midea", "Midea", { cold: 11.8, efficiency: 15.1 });
    const moovair = scored("moovair", "Moovair", { budget: 8.7 });
    expect(midea.score).toBe(76.9);
    expect(moovair.score).toBe(76.7);
    expect(isTie(midea, moovair)).toBe(true);
    expect(explainTieBreak(midea, moovair)).toBe(
      "Ex æquo à 77/100. Midea prend 1,8 point au grand froid, Moovair 1,7 point au budget ; l'écart de 0,2 point est sous la précision de l'estimation.",
    );
  });

  it("scores arrondis différents mais moins d'un point d'écart : « presque ex æquo »", () => {
    const a = scored("a", "Alpha", { fit: 30.5 });
    const b = scored("b", "Beta", { fit: 29.6 });
    expect(a.score - b.score).toBeLessThan(1);
    expect(Math.round(a.score)).not.toBe(Math.round(b.score));
    expect(explainTieBreak(a, b)).toMatch(/^Presque ex æquo : 76 et 75 sur 100\. Alpha prend 0,9 point à l'adéquation à la charge ; l'écart de 0,9 point/);
  });

  it("score identique : le départage réel du classement, dit en clair", () => {
    const a = scored("a", "Alpha", {}, { fitRatio: 1.04 });
    const b = scored("b", "Beta", {}, { fitRatio: 1.3 });
    expect(explainTieBreak(a, b)).toBe("Ex æquo à 75/100. Départage : Alpha colle de plus près à la charge visée (104 % contre 130 % à −15 °C).");
    const c = { ...scored("c", "Gamma", {}), candidate: makeCandidate({ id: "c", brand: "Gamma", logisVertDollars: 1_500 }) };
    const d = { ...scored("d", "Delta", {}), candidate: makeCandidate({ id: "d", brand: "Delta", logisVertDollars: 1_200 }) };
    const $ = (n: number) => `${n.toLocaleString("fr-CA")} $`;
    expect(explainTieBreak(c, d)).toBe(`Ex æquo à 75/100. Départage : Gamma a la plus grosse subvention LogisVert (${$(1500)} contre ${$(1200)}).`);
  });

  it("selectTop signale l'égalité sur les deux voisines, pas sur une troisième nettement derrière", () => {
    const a = scored("a", "Alpha", { cold: 10.4 });
    const b = scored("b", "Beta", {});
    const c = scored("c", "Gamma", { fit: 25 });
    const out = selectTop([a, b, c], 3);
    expect(out.map((r) => r.candidate.id)).toEqual(["a", "b", "c"]);
    expect(out[0].tie?.withRank).toBe(2);
    expect(out[1].tie?.withRank).toBe(1);
    expect(out[0].tie?.decidedBy).toBe(out[1].tie?.decidedBy);
    expect(out[2].tie).toBeUndefined();
  });
});
