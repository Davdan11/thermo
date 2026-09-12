import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import entries from "@/lib/data/min-heating-temps.json";
import {
  minHeatingTempEntryFromBrochures,
  minHeatingTempFromBrochures,
  normalizeBrand,
  normalizeModelNumber,
} from "./min-temp-brochures";

describe("normalizeModelNumber", () => {
  it("met en majuscules et retire espaces, tirets, barres et parenthèses", () => {
    expect(normalizeModelNumber(" ochx-h09a-o ")).toBe("OCHXH09AO");
    expect(normalizeModelNumber("WLWHD(18)ND3MO")).toBe("WLWHD18ND3MO");
    expect(normalizeModelNumber("SENA/09HF/OQ")).toBe("SENA09HFOQ");
  });

  it("garde les jokers et ignore l'accessoire après « + »", () => {
    expect(normalizeModelNumber("4HP17L42P-**A")).toBe("4HP17L42P**A");
    expect(normalizeModelNumber("D5CUHAH18AAK+TIC2025-0016")).toBe("D5CUHAH18AAK");
  });

  it("renvoie une chaîne vide pour null ou undefined", () => {
    expect(normalizeModelNumber(null)).toBe("");
    expect(normalizeModelNumber(undefined)).toBe("");
  });
});

describe("normalizeBrand", () => {
  it("ignore casse, accents et ponctuation", () => {
    expect(normalizeBrand("Mitsubishi Electric")).toBe("mitsubishielectric");
    expect(normalizeBrand("QuébecVair")).toBe("quebecvair");
  });
});

describe("minHeatingTempFromBrochures", () => {
  it("trouve une valeur exacte (Fujitsu Orion XLTH+, −22 °F → −30 °C)", () => {
    expect(minHeatingTempFromBrochures({ outdoorModel: "AOUH09KTAP1", brand: "Fujitsu" })).toBe(-30);
  });

  it("tolère la casse, les espaces et les tirets", () => {
    expect(minHeatingTempFromBrochures({ outdoorModel: "aouh 09-ktap1" })).toBe(-30);
    expect(minHeatingTempFromBrochures({ outdoorModel: "ochx h09a o", brand: "ouellet" })).toBe(-25);
  });

  it("gère un joker du registre (« MSHEA09C2AN* ») et un joker de brochure (« DH7VSA2410A* »)", () => {
    expect(minHeatingTempFromBrochures({ outdoorModel: "MSHEA09C2AN*", brand: "Moovair" })).toBe(-25);
    expect(minHeatingTempFromBrochures({ outdoorModel: "DH7VSA2410A", brand: "Daikin" })).toBe(-23);
  });

  it("distingue les modèles d'une même brochure qui n'ont pas la même limite", () => {
    expect(minHeatingTempFromBrochures({ outdoorModel: "MSHMA12C2AN1", brand: "Moovair" })).toBe(-30);
    expect(minHeatingTempFromBrochures({ outdoorModel: "MSHEA12C2AN1", brand: "Moovair" })).toBe(-25);
    expect(minHeatingTempFromBrochures({ outdoorModel: "AOUH30KUAS1", brand: "Fujitsu" })).toBe(-21);
    expect(minHeatingTempFromBrochures({ outdoorModel: "AOUH30KUAH1", brand: "Fujitsu" })).toBe(-26);
  });

  it("convertit les °F imprimés (Lennox EL21KLV : −15 °F → −26 °C)", () => {
    expect(minHeatingTempFromBrochures({ outdoorModel: "EL21KLV-036-230A", brand: "Lennox" })).toBe(-26);
  });

  it("accepte un numéro long identique vendu sous une autre marque", () => {
    expect(minHeatingTempFromBrochures({ outdoorModel: "HH824E2S11", brand: "Coleman" })).toBe(-25);
  });

  it("renvoie null quand rien n'est imprimé ou que l'entrée est vide", () => {
    expect(minHeatingTempFromBrochures({ outdoorModel: "ZZZ-NOT-A-MODEL" })).toBeNull();
    expect(minHeatingTempFromBrochures({ outdoorModel: "" })).toBeNull();
    expect(minHeatingTempFromBrochures({ outdoorModel: null, brand: "Fujitsu" })).toBeNull();
    expect(minHeatingTempFromBrochures({})).toBeNull();
  });

  it("ne donne pas de valeur à un modèle proche mais non listé", () => {
    // Ouellet OFLX1 : seules les unités H36A-O et H60A-O figurent dans la fiche.
    expect(minHeatingTempFromBrochures({ outdoorModel: "OFLX1-H24A-O", brand: "Ouellet" })).toBeNull();
    expect(minHeatingTempFromBrochures({ outdoorModel: "OFLX1-H36A-O", brand: "Ouellet" })).toBe(-30);
  });

  it("expose la source et la citation", () => {
    const e = minHeatingTempEntryFromBrochures({ outdoorModel: "PUMY-P36NKMU4", brand: "Mitsubishi Electric" });
    expect(e?.minHeatingTempC).toBe(-25);
    expect(e?.quote).toContain("-13 to 70°F");
    expect(e?.sourceFile).toMatch(/\.pdf$/);
  });
});

describe("min-heating-temps.json", () => {
  it("chaque ligne est complète, plausible et pointe vers un PDF présent", () => {
    expect(entries.length).toBeGreaterThan(0);
    for (const e of entries) {
      expect(e.outdoorModel.length).toBeGreaterThan(3);
      expect(e.brand.length).toBeGreaterThan(0);
      expect(Number.isInteger(e.minHeatingTempC)).toBe(true);
      expect(e.minHeatingTempC).toBeGreaterThanOrEqual(-40);
      expect(e.minHeatingTempC).toBeLessThanOrEqual(0);
      expect(e.quote.length).toBeGreaterThan(0);
      expect(e.quote.length).toBeLessThanOrEqual(160);
      expect(existsSync(path.join(process.cwd(), e.sourceFile))).toBe(true);
    }
  });
});
