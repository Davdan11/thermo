import { describe, expect, it } from "vitest";
import { FROST, FROST_BG, contrastRatio } from "../frost-palette";

/** WCAG 2.x, niveau AA : texte courant 4,5:1 (nos étiquettes font 10 à 13 px), grand texte 3:1. */
const AA_TEXT = 4.5;

describe("palette « Carte des froids » : contraste WCAG AA", () => {
  it("rapport de contraste : valeurs de référence", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 1);
    expect(contrastRatio("#777777", "#FFFFFF")).toBeCloseTo(4.48, 1);
    // Encre translucide fondue sur son fond : noir à 50 % sur blanc = #808080.
    expect(contrastRatio("rgba(0,0,0,0.5)", "#FFFFFF")).toBeCloseTo(contrastRatio("#808080", "#FFFFFF"), 1);
  });

  it("chaque encre de texte tient 4,5:1 sur chaque fond clair de la suite", () => {
    for (const ink of ["navy", "body", "mute", "faint", "steel"] as const) {
      for (const [bg, color] of Object.entries(FROST_BG)) {
        expect(contrastRatio(FROST[ink], color), `${ink} sur ${bg}`).toBeGreaterThanOrEqual(AA_TEXT);
      }
    }
  });

  it("l'intro du héros est nettement au-dessus du minimum (encre « body »)", () => {
    expect(contrastRatio(FROST.body, FROST_BG.glacier)).toBeGreaterThanOrEqual(7);
  });

  it("textes clairs de la bande marine (appel ThermoMatch)", () => {
    expect(contrastRatio("rgba(255,255,255,0.74)", FROST.navy)).toBeGreaterThanOrEqual(AA_TEXT);
    expect(contrastRatio("rgba(255,255,255,0.72)", FROST.navy)).toBeGreaterThanOrEqual(AA_TEXT);
    expect(contrastRatio(FROST.frost, FROST.navy)).toBeGreaterThanOrEqual(AA_TEXT);
  });
});
