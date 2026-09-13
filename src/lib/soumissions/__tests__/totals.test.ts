/* Totaux : arrondi au cent, rabais avant taxes, options, modes LogisVert, acompte. */
import { describe, expect, it } from "vitest";
import { divRound, lineAmount, parseMoney, percentOf, taxOf } from "../money";
import { cleanSelection, computeTotals, defaultSelection } from "../totals";
import { line, machine, RATES, readyContent, TODAY } from "./fixtures";

describe("arrondis", () => {
  it("demi-cent arrondi vers le haut, calcul entier exact", () => {
    expect(divRound(5, 10)).toBe(1);
    expect(divRound(4, 10)).toBe(0);
    expect(lineAmount(12.5, 1999)).toBe(24988); // 249,875 $ → 249,88 $
    expect(lineAmount(0.1 * 3, 1000)).toBe(300);
    expect(percentOf(33_333, 12.5)).toBe(4167);
  });

  it("TPS 5 % et TVQ 9,975 % au cent près", () => {
    expect(taxOf(100_000, RATES.tpsPer100k)).toBe(5_000);
    expect(taxOf(100_000, RATES.tvqPer100k)).toBe(9_975);
    expect(taxOf(1, RATES.tvqPer100k)).toBe(0);
    expect(taxOf(5, RATES.tvqPer100k)).toBe(0); // 0,49875 ¢
    expect(taxOf(6, RATES.tvqPer100k)).toBe(1); // 0,5985 ¢
    expect(taxOf(123_457, RATES.tvqPer100k)).toBe(12_315); // 12 314,83 ¢
  });

  it("saisie des montants", () => {
    expect(parseMoney("1 234,56")).toBe(123_456);
    expect(parseMoney("1234.5")).toBe(123_450);
    expect(parseMoney("12,345")).toBeNull();
    expect(parseMoney("abc")).toBeNull();
  });
});

describe("computeTotals", () => {
  it("rabais de ligne, puis rabais de soumission, AVANT les taxes", () => {
    const c = readyContent();
    c.logisvert = { mode: "aucune" };
    c.deposit = { kind: "aucun", value: 0 };
    c.lines = [
      line("l_a", { unitPriceCents: 400_000, discount: { id: "d_l", reason: "Modèle d’exposition", kind: "pourcentage", value: 10, expiresOn: null } }),
      line("l_b", { unit: "pied", quantity: 10, unitPriceCents: 2_500 }),
    ];
    c.discounts = [{ id: "d_q", reason: "Rabais de fin de saison", kind: "montant", value: 20_000, expiresOn: null }];
    const t = computeTotals(c, [], RATES, TODAY);
    expect(t.grossCents).toBe(425_000);
    expect(t.lineDiscountsCents).toBe(40_000);
    expect(t.subtotalCents).toBe(385_000);
    expect(t.quoteDiscountsCents).toBe(20_000);
    expect(t.taxableCents).toBe(365_000);
    expect(t.tpsCents).toBe(18_250);
    expect(t.tvqCents).toBe(36_409); // 36 408,75
    expect(t.totalCents).toBe(365_000 + 18_250 + 36_409);
    expect(t.discountsCents).toBe(60_000);
  });

  it("un rabais expiré ne s'applique plus (le jour d'expiration inclus)", () => {
    const c = readyContent();
    c.lines = [line("l_a", { unitPriceCents: 100_000 })];
    c.discounts = [{ id: "d_1", reason: "Promo", kind: "montant", value: 10_000, expiresOn: TODAY }];
    expect(computeTotals(c, [], RATES, TODAY).quoteDiscountsCents).toBe(10_000);
    const later = computeTotals(c, [], RATES, "2026-09-13");
    expect(later.quoteDiscountsCents).toBe(0);
    expect(later.quoteDiscounts[0]).toMatchObject({ expired: true, amountCents: 0 });
  });

  it("les rabais ne dépassent jamais la base", () => {
    const c = readyContent();
    c.logisvert = { mode: "aucune" };
    c.lines = [line("l_a", { unitPriceCents: 10_000 })];
    c.discounts = [
      { id: "d_1", reason: "A", kind: "montant", value: 8_000, expiresOn: null },
      { id: "d_2", reason: "B", kind: "montant", value: 8_000, expiresOn: null },
    ];
    const t = computeTotals(c, [], RATES, TODAY);
    expect(t.quoteDiscountsCents).toBe(10_000);
    expect(t.totalCents).toBe(0);
  });

  it("options : seules les lignes facultatives cochées comptent ; les obligatoires toujours", () => {
    const c = readyContent();
    c.lines = [line("l_req", { unitPriceCents: 100_000 }), line("l_o1", { optional: true, selectedByDefault: true, unitPriceCents: 10_000 }), line("l_o2", { optional: true, unitPriceCents: 5_000 })];
    expect(defaultSelection(c.lines)).toEqual(["l_o1"]);
    expect(cleanSelection(c.lines, ["l_req", "l_o2", "l_o2", "inconnu"])).toEqual(["l_o2"]);
    expect(computeTotals(c, [], RATES, TODAY).grossCents).toBe(100_000);
    expect(computeTotals(c, ["l_o1", "l_o2"], RATES, TODAY).grossCents).toBe(115_000);
    // Un identifiant de ligne obligatoire dans la sélection ne change rien.
    expect(computeTotals(c, ["l_req"], RATES, TODAY).grossCents).toBe(100_000);
  });

  it("LogisVert « cession » : déduit de ce que le client paie ; acompte calculé sur ce montant", () => {
    const c = readyContent();
    c.lines = [line("l_a", { unitPriceCents: 400_000 })];
    c.deposit = { kind: "pourcentage", value: 20 };
    const t = computeTotals(c, [], RATES, TODAY);
    expect(t.totalCents).toBe(459_900);
    expect(t.logisvertMode).toBe("cession");
    expect(t.logisvertCents).toBe(150_000);
    expect(t.clientPaysCents).toBe(309_900);
    expect(t.netAfterAidCents).toBe(309_900);
    expect(t.depositCents).toBe(61_980);
    expect(t.balanceCents).toBe(309_900 - 61_980);
  });

  it("LogisVert « client » : le client paie le total ; l'aide est montrée à part", () => {
    const c = readyContent();
    c.lines = [line("l_a", { unitPriceCents: 400_000 })];
    c.logisvert = { mode: "client" };
    c.deposit = { kind: "montant", value: 50_000 };
    const t = computeTotals(c, [], RATES, TODAY);
    expect(t.clientPaysCents).toBe(459_900);
    expect(t.netAfterAidCents).toBe(309_900);
    expect(t.depositCents).toBe(50_000);
  });

  it("jumelage hors liste ou mode « aucune » : aucune aide", () => {
    const c = readyContent();
    c.lines = [line("l_a", { unitPriceCents: 400_000 })];
    c.machine = machine({ offList: true, pairing: null, offListIndoor: "INT-X" });
    expect(computeTotals(c, [], RATES, TODAY)).toMatchObject({ logisvertCents: 0, logisvertMode: "aucune", clientPaysCents: 459_900 });
    c.machine = machine();
    c.logisvert = { mode: "aucune" };
    expect(computeTotals(c, [], RATES, TODAY).logisvertCents).toBe(0);
  });
});
