import { describe, expect, it } from "vitest";
import { optionId, typeProjetOptionId, PIPEDRIVE_OPTIONS } from "../pipedrive";
import { getTerritoryFromPostalCode } from "../territory";

describe("options Pipedrive", () => {
  it("retrouve une option par libellé sans tenir compte des accents ni de la casse", () => {
    expect(optionId("REGION", "Montréal")).toBe(68);
    expect(optionId("REGION", "montreal")).toBe(68);
    expect(optionId("SOURCE", "seo")).toBe(57);
    expect(optionId("SOURCE", "soumission-page")).toBeUndefined();
    expect(optionId("SOURCE", undefined)).toBeUndefined();
  });

  it("chaque territoire du code postal a une option Région", () => {
    for (const pc of ["H2X1Y4", "H7A1B2", "J4B1C3", "J7E2K5", "J6E1A1", "J1H2B3", "G1R4S9", "K1A0B1"]) {
      expect(optionId("REGION", getTerritoryFromPostalCode(pc))).toBeDefined();
    }
  });

  it("déduit le type de projet des réponses libres du site", () => {
    const T = PIPEDRIVE_OPTIONS.TYPE_PROJET;
    expect(typeProjetOptionId("murale")).toBe(T["Murale 1 tête"]);
    expect(typeProjetOptionId("Thermopompe murale")).toBe(T["Murale 1 tête"]);
    expect(typeProjetOptionId("multizone")).toBe(T["Multizone 2+ têtes"]);
    expect(typeProjetOptionId("Murale multizone")).toBe(T["Multizone 2+ têtes"]);
    expect(typeProjetOptionId("centrale")).toBe(T["Centrale"]);
    expect(typeProjetOptionId("Thermopompe centrale")).toBe(T["Centrale"]);
    expect(typeProjetOptionId("Échangeur d'air")).toBe(T["Échangeur d'air"]);
    expect(typeProjetOptionId("ne-sais-pas")).toBeUndefined();
    expect(typeProjetOptionId("Type de thermopompe")).toBeUndefined();
    expect(typeProjetOptionId(undefined)).toBeUndefined();
  });
});

describe("champ Site web", () => {
  it("ce site a son option et son préfixe", async () => {
    const { THIS_SITE, PIPEDRIVE_FIELDS } = await import("../pipedrive");
    expect(THIS_SITE.option).toBe(PIPEDRIVE_OPTIONS.SITE["thermopompesavendre.ca"]);
    expect(THIS_SITE.prefix).toBe("[TAV]");
    expect(PIPEDRIVE_FIELDS.SITE).toMatch(/^[0-9a-f]{40}$/);
  });
});
