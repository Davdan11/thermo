/* Filtre Loi 25 (textes saisis à la main : articles du blogue). Numéros et adresses fictifs. */
import { describe, expect, it } from "vitest";
import { privacyMessage, privacyProblems } from "../loi25";

describe("filtre Loi 25", () => {
  it.each([
    ["Écrivez-moi à jean.tremblay@exemple.ca", "courriel"],
    ["Mon numéro : (514) 555-0199", "telephone"],
    ["Rappelez au 514-555-0199 svp", "telephone"],
    ["5145550199", "telephone"],
    ["+1 438 555 0100", "telephone"],
    ["1-800-555-0100", "telephone"],
    ["le 555-0199 le soir", "telephone"],
    ["J’habite au G1R 4P5", "code-postal"],
    ["h2x1y4", "code-postal"],
    ["C’est au 123, rue Principale", "adresse"],
    ["1450 boulevard des Érables", "adresse"],
  ])("bloque « %s » (%s)", (text, kind) => {
    const found = privacyProblems(text);
    expect(found.map((f) => f.kind)).toContain(kind);
    expect(privacyMessage(found)).toMatch(/^Bloqué \(Loi 25\)/);
  });

  it.each(["Une thermopompe de 12 000 BTU/h", "Il fait −26 °C la nuit", "L’aide est de 1 250 $", "Normales 1991-2020", "HSPF2 de 8,2 et SEER2 de 17,5", "Modèle 4A6V0X24A1", "Nous avons 3 enfants et une maison de 1985"])("laisse passer « %s »", (text) => {
    expect(privacyProblems(text)).toEqual([]);
    expect(privacyMessage([])).toBeNull();
  });
});
