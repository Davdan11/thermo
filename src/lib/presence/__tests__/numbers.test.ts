/* Lecture des nombres et contrôle « aucun chiffre sans source » (utilisés par le blogue et le robot Facebook). */
import { describe, expect, it } from "vitest";
import { extractNumbers, unknownNumbers } from "../numbers";

describe("lecture des nombres", () => {
  it("lit les nombres écrits à la québécoise", () => {
    expect(extractNumbers("12 000 BTU/h, 8,2 et −26 °C, 1 250 $, COP de 3.0").map((n) => n.value)).toEqual([12000, 8.2, -26, 1250, 3]);
  });

  it("ignore les chiffres collés à des lettres et lit deux années séparées", () => {
    expect(extractNumbers("HSPF2 SEER2 4A6V0X24A1 MUZ-FX12NLHZ")).toEqual([]);
    expect(extractNumbers("normales 1991-2020").map((n) => n.value)).toEqual([1991, 2020]);
    expect(extractNumbers("Val-d'Or").length).toBe(0);
  });

  it("signale un nombre absent de la source", () => {
    const source = { values: { chaleur: 13400 }, texts: [] };
    expect(unknownNumbers("Elle donne 13 400 BTU/h", source)).toEqual([]);
    expect(unknownNumbers("Elle donne 99 000 BTU/h", source).map((n) => n.value)).toEqual([99000]);
  });

  it("ne compte pas les liens ni les mots-clics", () => {
    const source = { values: {}, texts: [] };
    expect(unknownNumbers("https://thermopompesavendre.ca/produit/x?utm_content=p-20260914-modele #Top10", source)).toEqual([]);
  });
});
