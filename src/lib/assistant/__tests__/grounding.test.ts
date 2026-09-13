import { describe, expect, it } from "vitest";
import { EMPTY_FALLBACK, SAFE_FALLBACK, checkFigures, citedCards, extractNumbers, sanitizeLinks } from "../grounding";

describe("extractNumbers", () => {
  it("lit les nombres à la québécoise et ignore les sigles", () => {
    const values = extractNumbers("12 000 BTU, HSPF2 de 10,5 à -15 °C, réfrigérant R-410A, 1 920 $").map((n) => n.value);
    expect(values).toEqual([12000, 10.5, 15, 1920]);
  });

  it("gère les espaces insécables des nombres formatés", () => {
    expect(extractNumbers("24 000 et 13 600").map((n) => n.value)).toEqual([24000, 13600]);
  });
});

describe("checkFigures", () => {
  const tool = JSON.stringify({ btu_at_minus15c: 24800, hspf2: 12.5, cop_at_minus15c: 2.43, heating_degree_days: 4281.2, design_temp_c: -25 });

  it("accepte les chiffres présents dans un résultat d'outil", () => {
    expect(checkFigures("Elle donne 24 800 BTU/h à -15 °C (HSPF2 12,5). Froid de référence : -25 °C.", [tool]).ok).toBe(true);
  });

  it("refuse un chiffre inventé", () => {
    const r = checkFigures("Comptez environ 3 500 $ pour l'installation.", [tool]);
    expect(r.ok).toBe(false);
    expect(r.ungrounded).toEqual([3500]);
  });

  it("accepte un arrondi à la précision écrite, pas un autre chiffre", () => {
    expect(checkFigures("COP de 2,4 et 4 281 degrés-jours", [tool]).ok).toBe(true);
    expect(checkFigures("COP de 2,5", [tool]).ok).toBe(false);
  });

  it("accepte les chiffres de la question, les petits nombres et le téléphone", () => {
    expect(checkFigures("Pour 1 200 pi², voyez ces 3 modèles ; ThermoMatch pose 13 questions. 438-900-3224", ["bungalow de 1 200 pi²"]).ok).toBe(true);
  });

  it("ignore les adresses des liens (téléphone, fiches)", () => {
    expect(checkFigures("Appelez le [438-900-3224](tel:4389003224) ou voyez [la fiche](/produit/fujitsu-xlth-18k).", []).ok).toBe(true);
  });

  it("les réponses de repli passent la vérification", () => {
    expect(checkFigures(SAFE_FALLBACK, []).ok).toBe(true);
    expect(checkFigures(EMPTY_FALLBACK, []).ok).toBe(true);
  });
});

describe("sanitizeLinks", () => {
  it("garde les liens reconnus et réduit les autres à leur libellé", () => {
    const known = (h: string) => h === "/soumission";
    expect(sanitizeLinks("Voir [la soumission](/soumission) ou [ce site](https://exemple.com).", known)).toBe(
      "Voir [la soumission](/soumission) ou ce site.",
    );
  });
});

describe("citedCards", () => {
  const cards = [
    { slug: "fujitsu-xlth-18k", name: "Fujitsu AIRSTAGE Orion XLTH 18 000 BTU", modelNumber: "AOU18RLXFZH" },
    { slug: "daikin-atmosphera-12k", name: "Daikin Atmosphera 12 000 BTU", modelNumber: "RXK12AXVJU" },
    { slug: "carrier-38mprbq18aa3", name: "Carrier 38MP 38MPRBQ18AA3", modelNumber: "38MPRBQ18AA3" },
  ];

  it("ne garde que les fiches citées, dans l'ordre du texte", () => {
    const text = "La [Daikin Atmosphera 12 000 BTU](/produit/daikin-atmosphera-12k) puis la Fujitsu AIRSTAGE Orion XLTH 18 000 BTU.";
    expect(citedCards(text, cards).map((c) => c.slug)).toEqual(["daikin-atmosphera-12k", "fujitsu-xlth-18k"]);
  });

  it("reconnaît un numéro de modèle et respecte le maximum", () => {
    expect(citedCards("Le 38MPRBQ18AA3 et RXK12AXVJU", cards, 1).map((c) => c.slug)).toEqual(["carrier-38mprbq18aa3"]);
  });

  it("aucune fiche si aucun modèle n'est cité", () => {
    expect(citedCards("Essayez ThermoMatch.", cards)).toEqual([]);
  });
});
