import { describe, expect, it } from "vitest";
import { projectRowLabel } from "../resume";
import { STEPS } from "@/app/trouver-ma-thermopompe/_components/steps";

/* /soumission — le récapitulatif « Votre projet » montre des libellés, jamais les identifiants
   du questionnaire ; les libellés viennent des étapes de ThermoMatch (steps.ts). */

const optionsOf = (id: string) => {
  const opts = STEPS.find((s) => s.id === id)?.options;
  return Array.isArray(opts) ? opts : [];
};

describe("Récapitulatif de la soumission : libellés humains", () => {
  it("type de bâtiment, superficie et type de projet en toutes lettres", () => {
    expect(projectRowLabel("typeBatiment", "maison")).toBe("Maison unifamiliale");
    expect(projectRowLabel("superficie", "1500-2000")).toBe("1 500 à 2 000 pi²");
    expect(projectRowLabel("superficie", "<1000")).toBe("Moins de 1 000 pi²");
    expect(projectRowLabel("typeThermopompe", "ne-sais-pas")).toBe("Je ne sais pas");
    expect(projectRowLabel("typeThermopompe", "centrale")).toBe("Centrale");
    expect(projectRowLabel("typeThermopompe", "multizone")).toBe("Multizone");
  });

  it("chaque option des étapes reprises donne le libellé du questionnaire, jamais l'identifiant", () => {
    for (const [row, step] of [["typeBatiment", "propertyType"], ["superficie", "area"]] as const) {
      const options = optionsOf(step);
      expect(options.length).toBeGreaterThan(0);
      for (const o of options) expect(projectRowLabel(row, o.value)).toBe(o.label);
    }
  });

  it("une valeur tapée par le visiteur, ou vide, reste telle quelle", () => {
    expect(projectRowLabel("typeBatiment", "Jumelé")).toBe("Jumelé");
    expect(projectRowLabel("superficie", "1 800 pi²")).toBe("1 800 pi²");
    expect(projectRowLabel("ville", "maison")).toBe("maison");
    expect(projectRowLabel("echeancier", "")).toBe("");
  });
});
