import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import entries from "@/lib/data/min-heating-temps.json";
import {
  minHeatingTempEntryFromBrochures,
  minHeatingTempFromBrochures,
  normalizeBrand,
  normalizeModelNumber,
  type MinHeatingTempEntry,
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

  it("relevé web du 2026-09-14 : valeurs publiées pour des modèles que le moteur recommande", () => {
    expect(minHeatingTempFromBrochures({ outdoorModel: "MHSZ124DA", brand: "Conforto" })).toBe(-30);
    expect(minHeatingTempFromBrochures({ outdoorModel: "CU-2Z18ABUC", brand: "Panasonic" })).toBe(-26);
    expect(minHeatingTempFromBrochures({ outdoorModel: "500004496", brand: "Convectair" })).toBe(-30);
    expect(minHeatingTempFromBrochures({ outdoorModel: "SL25XPV-024-230A", brand: "Lennox" })).toBe(-20);
    // Page Fujitsu J-7S incohérente (°F et °C ne concordent pas) : aucune valeur plutôt qu'une valeur douteuse.
    expect(minHeatingTempFromBrochures({ outdoorModel: "AOUK024SSAN7", brand: "Fujitsu" })).toBeNull();
  });

  it("expose la source et la citation", () => {
    const e = minHeatingTempEntryFromBrochures({ outdoorModel: "PUMY-P36NKMU4", brand: "Mitsubishi Electric" });
    expect(e?.minHeatingTempC).toBe(-25);
    expect(e?.quote).toContain("-13 to 70°F");
    expect(e?.sourceFile).toMatch(/\.pdf$/);
  });
});

/** Sources web acceptées : documents et pages officiels des fabricants (ou de leur distributeur officiel), jamais un revendeur. */
const OFFICIAL_HOSTS = [
  "moovair.com",
  "na.panasonic.ca",
  "d36aiwq7h8e0h3.cloudfront.net", // documents Carrier (inRiver)
  "dde2yk4t993pn.cloudfront.net", // documents Midea
  "daikincomfort.com",
  "tech.lennoxintl.com",
  "carrier.com",
  "keeprite.com",
  "confortohvac.com",
  "senville.com",
  "shareddocs.com", // serveur de documents de Carrier (fiches de soumission, product data)
  "cdn.master.ca", // Groupe Master, distributeur officiel (Elios, Moovair, Zephyr)
];

/**
 * Problèmes d'une ligne de la table (liste vide = ligne valide) :
 * - source locale : un PDF présent dans le dépôt, quelle que soit la nature de la source ;
 * - source https « officiel » (ou sans sourceType) : hôte de la liste fermée OFFICIAL_HOSTS ;
 * - source https « secondaire » (distributeur ou détaillant qui reproduit la fiche du fabricant pour ce
 *   numéro exact) : acceptée hors de la liste, mais avec une note non vide et une confidence renseignée.
 */
function problemesDe(e: MinHeatingTempEntry): string[] {
  const p: string[] = [];
  if (!(e.outdoorModel.length > 3)) p.push("numéro trop court");
  if (!(e.brand.length > 0)) p.push("marque vide");
  if (!Number.isInteger(e.minHeatingTempC)) p.push("température non entière");
  if (e.minHeatingTempC < -40 || e.minHeatingTempC > 0) p.push("température hors de [−40, 0] °C");
  if (!(e.quote.length > 0 && e.quote.length <= 160)) p.push("citation vide ou trop longue");
  if (e.sourceType !== undefined && e.sourceType !== "officiel" && e.sourceType !== "secondaire") p.push(`sourceType inconnu : ${String(e.sourceType)}`);
  if (/^https:\/\//.test(e.sourceFile)) {
    const host = new URL(e.sourceFile).hostname;
    if (e.sourceType === "secondaire") {
      if (!e.note?.trim()) p.push("source secondaire sans note");
      if (e.confidence !== "modele" && e.confidence !== "serie") p.push("source secondaire sans confidence");
    } else if (!OFFICIAL_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))) {
      p.push(`hôte hors de la liste officielle : ${host}`);
    }
  } else {
    if (!/\.pdf$/i.test(e.sourceFile)) p.push("source locale qui n'est pas un PDF");
    else if (!existsSync(path.join(process.cwd(), e.sourceFile))) p.push(`PDF absent du dépôt : ${e.sourceFile}`);
  }
  return p;
}

describe("min-heating-temps.json", () => {
  it("chaque ligne est complète, plausible et pointe vers un PDF présent, une source officielle ou une source secondaire justifiée", () => {
    expect(entries.length).toBeGreaterThan(0);
    const problemes = (entries as MinHeatingTempEntry[]).flatMap((e) => problemesDe(e).map((p) => `${e.brand} ${e.outdoorModel} : ${p}`));
    expect(problemes).toEqual([]);
  });

  it("règles des sources : officielle = liste fermée, secondaire = note et confidence, locale = PDF du dépôt", () => {
    const base = { outdoorModel: "ZZTEST24A", brand: "Marque Test", minHeatingTempC: -25, quote: "Heating -25°C" };
    const pdf = (entries as MinHeatingTempEntry[]).find((e) => !/^https:\/\//.test(e.sourceFile))!.sourceFile;
    // Officielle : hôte de la liste, ou refusée.
    expect(problemesDe({ ...base, sourceFile: "https://www.carrier.com/fiche.pdf" })).toEqual([]);
    expect(problemesDe({ ...base, sourceFile: "https://detaillant.example/fiche" })).toEqual(["hôte hors de la liste officielle : detaillant.example"]);
    expect(problemesDe({ ...base, sourceType: "officiel", sourceFile: "https://detaillant.example/fiche" })).toHaveLength(1);
    // Secondaire : hors liste accepté seulement avec une note et une confidence.
    expect(problemesDe({ ...base, sourceType: "secondaire", sourceFile: "https://detaillant.example/fiche", note: "Reproduit la fiche du fabricant.", confidence: "modele" })).toEqual([]);
    expect(problemesDe({ ...base, sourceType: "secondaire", sourceFile: "https://detaillant.example/fiche", confidence: "modele" })).toEqual(["source secondaire sans note"]);
    expect(problemesDe({ ...base, sourceType: "secondaire", sourceFile: "https://detaillant.example/fiche", note: "  ", confidence: "modele" })).toEqual(["source secondaire sans note"]);
    expect(problemesDe({ ...base, sourceType: "secondaire", sourceFile: "https://detaillant.example/fiche", note: "Fiche reproduite." })).toEqual(["source secondaire sans confidence"]);
    // Locale : un PDF présent dans le dépôt, même pour une source secondaire.
    expect(problemesDe({ ...base, sourceFile: pdf })).toEqual([]);
    expect(problemesDe({ ...base, sourceType: "secondaire", sourceFile: "public/documents/absent-zz.pdf", note: "x", confidence: "serie" })).toEqual(["PDF absent du dépôt : public/documents/absent-zz.pdf"]);
  });
});
