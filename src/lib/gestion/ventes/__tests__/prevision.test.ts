/* Prévision pondérée : probabilité réglée, sinon taux observé (assez de dossiers), sinon « à définir » et non comptée ;
   montants taxes comprises ; l'aide LogisVert n'y entre jamais ; le déjà signé est à part. */
import { describe, expect, it } from "vitest";
import { buildBundles, computeIndex, type ClientComputed } from "../../crm/model";
import { versionTotals } from "../../crm/money";
import type { StageHistoryItem } from "../../crm/stage";
import { STAGE_RANK, type PipelineStage, type Stage } from "../../crm/types";
import { localYmd } from "../../crm/time";
import { daysAgo, NOW, quote, src } from "../../crm/__tests__/fixtures";
import { buildForecast, MIN_SAMPLE, observedRates } from "../prevision";

const ORDER: PipelineStage[] = ["nouvelle", "contacte", "soumission-envoyee", "ouverte", "acceptee", "planifiee", "terminee"];
/** Client fictif : a atteint `reached`, se trouve maintenant à `now`, vaut `cents`. */
function client(now: Stage, reached: PipelineStage, cents: number | null = null): ClientComputed {
  const history: StageHistoryItem[] = ORDER.filter((s) => STAGE_RANK[s] <= STAGE_RANK[reached]).map((s, i) => ({ at: `2026-0${1 + (i % 8)}-01T12:00:00.000Z`, stage: s, auto: true }));
  if (now === "perdue") history.push({ at: "2026-09-01T12:00:00.000Z", stage: "perdue", auto: true });
  return { b: {} as ClientComputed["b"], stage: { stage: now, since: "2026-09-01T12:00:00.000Z", manual: false, reactivatedAt: null, lost: null, history }, tasks: [], valueCents: cents };
}
const many = (n: number, f: () => ClientComputed) => Array.from({ length: n }, f);

describe("taux observés", () => {
  it("parmi les dossiers réglés passés par l'étape ; au moins MIN_SAMPLE dossiers, sinon rien", () => {
    const clients = [...many(10, () => client("terminee", "terminee")), ...many(15, () => client("perdue", "contacte")), ...many(5, () => client("ouverte", "ouverte"))];
    const o = observedRates(clients);
    expect(MIN_SAMPLE).toBe(20);
    expect(o.nouvelle).toMatchObject({ resolved: 25, won: 10, rate: 0.4 });
    expect(o.contacte).toMatchObject({ resolved: 25, won: 10, rate: 0.4 });
    // Seuls les 10 signés sont passés par « envoyée » : pas assez de dossiers, aucun taux.
    expect(o["soumission-envoyee"]).toMatchObject({ resolved: 10, won: 10, rate: null });
  });
});

describe("prévision pondérée", () => {
  const history = [...many(10, () => client("acceptee", "acceptee", 800_000)), ...many(15, () => client("perdue", "contacte"))];

  it("réglée d'abord, puis observée, sinon « à définir » (non comptée) ; déjà signé à part", () => {
    const pipeline = [client("nouvelle", "nouvelle", 500_000), client("contacte", "contacte", 300_000), client("contacte", "contacte"), client("ouverte", "ouverte", 1_000_000)];
    const f = buildForecast([...history, ...pipeline], { stageProbabilities: { contacte: 0.5 } });
    const row = (s: string) => f.rows.find((r) => r.stage === s)!;
    expect(row("nouvelle")).toMatchObject({ n: 1, cents: 500_000, probability: 0.4, source: "observee", weightedCents: 200_000 });
    expect(row("contacte")).toMatchObject({ n: 2, valued: 1, cents: 300_000, probability: 0.5, source: "reglee", weightedCents: 150_000 });
    expect(row("ouverte")).toMatchObject({ n: 1, cents: 1_000_000, probability: null, source: "a-definir", weightedCents: null });
    expect(f.weightedCents).toBe(350_000);
    expect(f.coveredCents).toBe(800_000);
    expect(f.missing).toEqual(["ouverte"]);
    expect(f.unvalued).toBe(1);
    expect(f.signed).toEqual({ n: 10, cents: 8_000_000 });
  });

  it("aucune donnée, aucun réglage : rien d'inventé", () => {
    const f = buildForecast([client("nouvelle", "nouvelle", 500_000)], { stageProbabilities: {} });
    expect(f.rows.every((r) => r.probability === null)).toBe(true);
    expect(f.weightedCents).toBe(0);
  });

  it("LogisVert exclu : la valeur d'une soumission est son total taxes comprises, même en ancien mode « cession »", () => {
    const q = quote({ client: { firstName: "Julie", email: "julie@exemple.ca" }, sentAt: daysAgo(3), viewedAt: daysAgo(1), mode: "cession" });
    const s = src({ quotes: [q] });
    const i = computeIndex(buildBundles(s), s, NOW);
    const t = versionTotals(q.versions[0], localYmd(NOW));
    expect(t.logisvertCents).toBeGreaterThan(0);
    expect(t.clientPaysCents).toBeLessThan(t.totalCents);
    const f = buildForecast(i.clients, { stageProbabilities: { ouverte: 0.5 } });
    const row = f.rows.find((r) => r.stage === "ouverte")!;
    expect(row.cents).toBe(t.totalCents);
    expect(row.cents).not.toBe(t.clientPaysCents);
    expect(row.weightedCents).toBe(Math.round(t.totalCents * 0.5));
    expect(JSON.stringify(f)).not.toContain(String(t.logisvertCents));
  });
});
