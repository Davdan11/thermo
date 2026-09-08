import { describe, expect, it } from "vitest";
import { answersToRequest } from "../answers";
import { estimateLoad } from "../sizing";

const base = {
  postalCode: "H2X1A1",
  propertyType: "maison",
  area: "<1000",
  floors: "1",
  currentSystem: "electrique",
  heatPumpType: "murale",
  priority: ["economies"],
  budget: "3000-5000",
  financing: "non",
};

describe("answersToRequest", () => {
  it("traduit les options du questionnaire en requête typée", () => {
    const { req } = answersToRequest(base);
    expect(req.heatedAreaFt2).toBe(800);
    expect(req.homeType).toBe("detached");
    expect(req.systemKind).toBe("ductless");
    expect(req.zones).toBe(1);
    expect(req.backupHeatAvailable).toBe(false);
    expect(req.priorities).toEqual(["economies"]);
    expect(req.budget).toBe("mid");
  });

  it("ne transmet aucune localisation au moteur", () => {
    const a = answersToRequest({ ...base, postalCode: "H2X1A1" }).req;
    const b = answersToRequest({ ...base, postalCode: "J9X1A1" }).req;
    expect(a).toEqual(b);
  });

  it("une fournaise au gaz implique une centrale avec chauffage d'appoint", () => {
    const { req } = answersToRequest({ ...base, currentSystem: "fournaise-gaz", heatPumpType: "centrale", budget: "10000-15000" });
    expect(req.systemKind).toBe("central");
    expect(req.backupHeatAvailable).toBe(true);
    expect(req.budget).toBe("high");
  });

  it("les questions sur la maison changent la charge, et « je ne sais pas » retombe sur le défaut", () => {
    const vague = estimateLoad(answersToRequest(base).req).loadBtuH;
    const unknown = estimateLoad(answersToRequest({ ...base, constructionPeriod: "ne-sais-pas", insulation: "ne-sais-pas" }).req).loadBtuH;
    const old = estimateLoad(answersToRequest({ ...base, constructionPeriod: "pre_1960", insulation: "poor", windowShare: "high", basement: "heated" }).req).loadBtuH;
    const recent = estimateLoad(answersToRequest({ ...base, constructionPeriod: "2016_plus", insulation: "high_performance", windowShare: "low", basement: "none" }).req).loadBtuH;
    expect(unknown).toBe(vague);
    expect(old).toBeGreaterThan(vague);
    expect(recent).toBeLessThan(vague);
  });

  it("un condo demande une seule zone même en multizone", () => {
    const { req } = answersToRequest({ ...base, propertyType: "condo", heatPumpType: "multizone", floors: "2" });
    expect(req.zones).toBe(1);
  });

  it("ignore les priorités et budgets inconnus au lieu de planter", () => {
    const { req } = answersToRequest({ ...base, priority: ["hack"], budget: "beaucoup" });
    expect(req.priorities).toEqual([]);
    expect(req.budget).toBe("unknown");
  });
});
