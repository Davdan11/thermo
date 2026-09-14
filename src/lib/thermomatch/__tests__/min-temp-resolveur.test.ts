import { describe, expect, it, vi } from "vitest";

/* Résolveur unique de la température minimale de chauffage (resolveMinHeatingTemp).
   - Le catalogue (configuration du registre) passe d'abord, comme source officielle.
   - Sinon la ligne de min-heating-temps.json : officielle, ou secondaire (fiche du fabricant reproduite
     par un distributeur) ; une source officielle prime toujours sur une secondaire.
   - Inconnue : null, jamais de valeur déduite.
   La table réelle ne contient encore aucune source secondaire : trois lignes fictives lui sont ajoutées
   pour ce fichier seulement (le test de la table réelle, min-temp-brochures.test.ts, n'en voit rien). */

const LIGNES_FICTIVES = vi.hoisted(() => [
  // Seule source pour ce numéro : secondaire.
  {
    outdoorModel: "ZZTESTSEC24A",
    brand: "Marque Test",
    minHeatingTempC: -27,
    sourceFile: "https://distributeur.example/fiche-zztestsec24a",
    quote: "Heating operating range -27°C ~ 24°C",
    confidence: "modele",
    note: "Ligne fictive de test : distributeur qui reproduit la fiche du fabricant.",
    sourceType: "secondaire",
  },
  // Secondaire en désaccord avec la brochure officielle Fujitsu (−30 °C) : l'officielle doit gagner.
  {
    outdoorModel: "AOUH09KTAP1",
    brand: "Fujitsu",
    minHeatingTempC: -25,
    sourceFile: "https://detaillant.example/aouh09ktap1",
    quote: "Heating down to -25°C",
    confidence: "modele",
    note: "Ligne fictive de test.",
    sourceType: "secondaire",
  },
  // Deux secondaires en désaccord : on ne tranche pas.
  { outdoorModel: "ZZTESTDIS18B", brand: "Marque Test", minHeatingTempC: -25, sourceFile: "https://a.example/x", quote: "-25°C", confidence: "modele", note: "Fictive.", sourceType: "secondaire" },
  { outdoorModel: "ZZTESTDIS18B", brand: "Marque Test", minHeatingTempC: -28, sourceFile: "https://b.example/x", quote: "-28°C", confidence: "modele", note: "Fictive.", sourceType: "secondaire" },
]);

vi.mock("@/lib/data/min-heating-temps.json", async (importOriginal) => {
  const actual = await importOriginal<{ default: unknown[] }>();
  return { default: [...actual.default, ...LIGNES_FICTIVES] };
});

import { resolveMinHeatingTemp } from "../min-temp-brochures";
import { formatMinTemp, minTempMention, minTempSourceHref } from "../min-temp-source";

describe("resolveMinHeatingTemp — catalogue d'abord", () => {
  it("la valeur du catalogue passe avant la table, comme source officielle", () => {
    const r = resolveMinHeatingTemp({ catalogC: -22, outdoorModel: "AOUH15KTAP1", brand: "Fujitsu" });
    expect(r).toEqual({ valueC: -22, sourceType: "officiel", origin: "catalogue", sourceFile: null, page: null, quote: null, confidence: null });
  });

  it("une valeur de catalogue absente ou non finie laisse la place à la table", () => {
    expect(resolveMinHeatingTemp({ catalogC: null, outdoorModel: "AOUH15KTAP1", brand: "Fujitsu" })?.valueC).toBe(-30);
    expect(resolveMinHeatingTemp({ catalogC: Number.NaN, outdoorModel: "AOUH15KTAP1", brand: "Fujitsu" })?.origin).toBe("document");
  });
});

describe("resolveMinHeatingTemp — table des relevés", () => {
  it("source officielle locale (Fujitsu AOUH15KTAP1 : PDF du dépôt, p. 23, −30 °C)", () => {
    const r = resolveMinHeatingTemp({ outdoorModel: "AOUH15KTAP1", brand: "Fujitsu" });
    expect(r?.valueC).toBe(-30);
    expect(r?.sourceType).toBe("officiel");
    expect(r?.origin).toBe("document");
    expect(r?.sourceFile).toMatch(/^public\/.+\.pdf$/);
    expect(r?.page).toBe(23);
    expect(r?.quote).toContain("-22 to 75");
  });

  it("source officielle web visant la série (Conforto MHSZ124DA : −30 °C, confidence « serie »)", () => {
    const r = resolveMinHeatingTemp({ outdoorModel: "MHSZ124DA", brand: "Conforto" });
    expect(r?.valueC).toBe(-30);
    expect(r?.sourceType).toBe("officiel");
    expect(r?.confidence).toBe("serie");
    expect(r?.sourceFile).toMatch(/^https:\/\/confortohvac\.com\//);
  });

  it("source secondaire seule : retenue et marquée « secondaire »", () => {
    const r = resolveMinHeatingTemp({ outdoorModel: "ZZTESTSEC24A", brand: "Marque Test" });
    expect(r).toMatchObject({ valueC: -27, sourceType: "secondaire", origin: "document", confidence: "modele" });
  });

  it("une source officielle prime sur une secondaire en désaccord", () => {
    const r = resolveMinHeatingTemp({ outdoorModel: "AOUH09KTAP1", brand: "Fujitsu" });
    expect(r?.valueC).toBe(-30);
    expect(r?.sourceType).toBe("officiel");
  });

  it("deux sources secondaires en désaccord : null (on ne tranche pas)", () => {
    expect(resolveMinHeatingTemp({ outdoorModel: "ZZTESTDIS18B", brand: "Marque Test" })).toBeNull();
  });

  it("inconnue : null, jamais de valeur déduite", () => {
    expect(resolveMinHeatingTemp({ outdoorModel: "ZZZ-NOT-A-MODEL", brand: "Fujitsu" })).toBeNull();
    expect(resolveMinHeatingTemp({ outdoorModel: null })).toBeNull();
    expect(resolveMinHeatingTemp({})).toBeNull();
  });
});

describe("mentions et mise en forme", () => {
  it("mention selon la nature de la source (absente = officielle)", () => {
    expect(minTempMention("officiel")).toBe("Température minimale publiée par le fabricant");
    expect(minTempMention(null)).toBe("Température minimale publiée par le fabricant");
    expect(minTempMention("secondaire")).toBe("Selon la fiche technique du fabricant, reproduite par un distributeur");
  });

  it("« −30 °C » : vrai signe moins et espace insécable", () => {
    expect(formatMinTemp(-30)).toBe("−30 °C");
    expect(formatMinTemp(-25.5)).toBe("−25,5 °C");
  });

  it("adresse de la source : PDF servi depuis /public, https tel quel, sinon rien", () => {
    expect(minTempSourceHref("public/documents/brochures/fujitsu/airstage-h-series.pdf")).toBe("/documents/brochures/fujitsu/airstage-h-series.pdf");
    expect(minTempSourceHref("https://confortohvac.com/fr-ca/x/")).toBe("https://confortohvac.com/fr-ca/x/");
    expect(minTempSourceHref("docs/interne.pdf")).toBeNull();
    expect(minTempSourceHref(null)).toBeNull();
  });
});
