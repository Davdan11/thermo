/* ==================================================================
   Lecture de la liste LogisVert en vigueur (fichier quotidien ENERGY STAR).

   Vérifie ce qui peut casser en silence : décimales à virgule, fins de
   ligne CRLF, champs entre guillemets, colonnes manquantes, recul de date
   quand le fichier du jour n'est pas encore publié, garde-fous, et
   l'interprétation des colonnes de montant (contrôle : AHRI 217036498).
   ================================================================== */
import { describe, expect, it } from "vitest";
import { createHash } from "node:crypto";
import {
  ES_BASE_URL,
  ES_COLUMNS,
  MAX_PLAUSIBLE_AMOUNT,
  TAUX,
  anomaliesEs,
  buildEsEntries,
  candidateDays,
  contentFingerprint,
  esFileName,
  fetchLatestEsFile,
  isoFromYmd,
  montantSelonRegle,
  readEnergyStarCsv,
  ymdFromFileName,
  ymdMontreal,
} from "../../../../scripts/lib/logisvert-energystar.mjs";

const sha256 = (s: string) => createHash("sha256").update(s).digest("hex");
const entete = ES_COLUMNS.join(";");

/* Lignes réelles du fichier proprietaire-habitation-existante-20260917.csv.gz. */
const CTRL = "3998705;217036498;1G12ED2BE**;US12CB2BE**;12000,0;9600,0;GE Appliances;Yes;;2026-09-17;1152;VRAI;2112";
const NON_CLIMAT_FROID = "2534072;10051633;MCY-MAP0367HS-UL;;36000,0;29400,0;TOSHIBA CARRIER;No;;2026-09-17;1470;FAUX;1470";
const GUILLEMETS = '2461869;210324769;4HP17L48P-**A;"EA(C;U)1P48B+TDR+TXV";46500,0;30200,0;Ducane;No;80G1UH090BE16;2026-09-17;1510;FAUX;1510';
const csv = (...lignes: string[]) => [entete, ...lignes, ""].join("\r\n");

describe("lecture du fichier quotidien", () => {
  it("lit les décimales à virgule, les fins de ligne CRLF et les champs entre guillemets", () => {
    const rows = readEnergyStarCsv(csv(CTRL, NON_CLIMAT_FROID, GUILLEMETS));
    expect(rows).toHaveLength(3);
    expect(rows[0].ahri_reference_number).toBe("217036498");
    expect(rows[0].heating_capacity_at_17_f_btu_h).toBe("9600,0");
    expect(rows[2].indoor_unit_model_number).toBe("EA(C;U)1P48B+TDR+TXV");
    expect(rows[2].furnace_model_number).toBe("80G1UH090BE16");
  });

  it("accepte un BOM et ignore la dernière ligne vide", () => {
    expect(readEnergyStarCsv(`﻿${csv(CTRL)}`)).toHaveLength(1);
  });

  it("refuse une colonne absente, une ligne mal découpée ou une valeur inattendue", () => {
    expect(() => readEnergyStarCsv([entete.replace(";TTG_Ext5", ""), CTRL].join("\r\n"))).toThrow(/TTG_Ext5/);
    expect(() => readEnergyStarCsv(csv(`${CTRL};extra`))).toThrow(/champs au lieu de/);
    expect(() => readEnergyStarCsv(csv(CTRL.replace(";1152;", ";mille;")))).toThrow(/n'est pas un nombre/);
    expect(() => readEnergyStarCsv(csv(CTRL.replace(";Yes;", ";Peut-être;")))).toThrow(/cold_climate/);
    expect(() => readEnergyStarCsv(csv(CTRL.replace(";VRAI;", ";PEUT-ÊTRE;")))).toThrow(/program_fecc_admissible/);
  });
});

describe("interprétation des montants", () => {
  const entries = buildEsEntries(readEnergyStarCsv(csv(CTRL, NON_CLIMAT_FROID)));

  it("AHRI 217036498 : subvention de 1 152 $, bonification Multilogements de 960 $", () => {
    const e = entries.get("217036498");
    // TTG_AF_EffAlone = « Subvention » : 120 $ par 1 000 BTU/h à −8 °C (climat froid), 9 600 BTU/h → 1 152 $.
    expect(e.a).toBe(1152);
    expect(e.h17).toBe(9600);
    expect(e.hn).toBe(12000);
    expect(e.cc).toBe(true);
    expect(e.hr).toBe(true);
    // TTG_Ext5 (2 112 $) = 220 $ par 1 000 BTU/h : la bonification Multilogements vaut la différence.
    expect(e.bml).toBe(960);
    expect(e.b).toBe("GE Appliances");
    expect(e.m).toBe("1G12ED2BE**");
  });

  it("sans bonification, aucune valeur inventée", () => {
    const e = entries.get("10051633");
    expect(e.a).toBe(1470);
    expect(e.cc).toBe(false);
    expect(e.bml).toBeUndefined();
  });

  it("la règle officielle : 50 $ par 1 000 BTU/h, 120 $ en climat froid", () => {
    expect(TAUX).toEqual({ energyStar: 50, climatFroid: 120, multilogements: 220 });
    expect(montantSelonRegle(9600, true)).toBe(1152);
    expect(montantSelonRegle(29400, false)).toBe(1470);
  });

  it("un même AHRI en double garde le montant le plus élevé", () => {
    const doublon = buildEsEntries(readEnergyStarCsv(csv(CTRL, CTRL.replace(";1152;", ";1200;").replace("3998705", "3998706"))));
    expect(doublon.get("217036498").a).toBe(1200);
  });
});

describe("garde-fous", () => {
  const rows = readEnergyStarCsv(csv(CTRL, NON_CLIMAT_FROID));

  it("un fichier normal ne déclenche aucune anomalie", () => {
    expect(anomaliesEs(rows, { minRows: 2 })).toEqual([]);
  });

  it("refuse un fichier trop court", () => {
    expect(anomaliesEs(rows).join()).toMatch(/seulement 2 lignes/);
  });

  it("refuse un montant invraisemblable (puissance lue comme montant)", () => {
    const suspect = readEnergyStarCsv(csv(CTRL.replace(";1152;", ";29400;")));
    expect(anomaliesEs(suspect, { minRows: 1 }).join()).toMatch(new RegExp(`hors de 1 à ${MAX_PLAUSIBLE_AMOUNT}`));
  });

  it("refuse un TTG_Ext5 plus petit que la subvention", () => {
    const suspect = readEnergyStarCsv(csv(CTRL.replace(";2112", ";900")));
    expect(anomaliesEs(suspect, { minRows: 1 }).join()).toMatch(/TTG_Ext5 < TTG_AF_EffAlone/);
  });

  it("refuse un fichier qui ne suit plus la règle de calcul (taux changés)", () => {
    const suspect = readEnergyStarCsv(csv(CTRL.replace(";1152;", ";1500;").replace(";2112", ";2500")));
    expect(anomaliesEs(suspect, { minRows: 1 }).join()).toMatch(/s'écartent de la règle 50 \$ \/ 120 \$/);
  });
});

describe("fichier du jour", () => {
  it("nomme et date le fichier comme l'outil officiel", () => {
    expect(esFileName("20260917")).toBe("proprietaire-habitation-existante-20260917.csv.gz");
    expect(ymdFromFileName("proprietaire-habitation-existante-20260917.csv.gz")).toBe("20260917");
    expect(ymdFromFileName("proprio-maison-fr-17-07-2025.csv.gz")).toBeNull();
    expect(isoFromYmd("20260917")).toBe("2026-09-17");
    expect(ymdMontreal(new Date("2026-09-18T02:30:00Z"))).toBe("20260917"); // 22 h 30 à Montréal
    expect(candidateDays(new Date("2026-09-17T16:00:00Z"), 2)).toEqual(["20260917", "20260916", "20260915"]);
  });

  it("recule jour par jour tant que le fichier n'est pas publié (404)", async () => {
    const demandes: string[] = [];
    const fetchImpl = (async (url: string) => {
      demandes.push(url);
      const dispo = url.endsWith("20260915.csv.gz");
      return { status: dispo ? 200 : 404, ok: dispo, arrayBuffer: async () => new TextEncoder().encode("ok").buffer };
    }) as unknown as typeof fetch;
    const r = await fetchLatestEsFile({ fetchImpl, today: new Date("2026-09-17T16:00:00Z"), maxDaysBack: 7 });
    expect(r.file).toBe("proprietaire-habitation-existante-20260915.csv.gz");
    expect(r.url).toBe(`${ES_BASE_URL}proprietaire-habitation-existante-20260915.csv.gz`);
    expect(r.ymd).toBe("20260915");
    expect(demandes).toHaveLength(3);
  });

  it("s'arrête après 7 jours sans fichier, et refuse de reculer sur une panne du serveur", async () => {
    const absent = (async () => ({ status: 404, ok: false, arrayBuffer: async () => new ArrayBuffer(0) })) as unknown as typeof fetch;
    await expect(fetchLatestEsFile({ fetchImpl: absent, today: new Date("2026-09-17T16:00:00Z") })).rejects.toThrow(/introuvable sur 8 jours/);
    const panne = (async () => ({ status: 503, ok: false, arrayBuffer: async () => new ArrayBuffer(0) })) as unknown as typeof fetch;
    await expect(fetchLatestEsFile({ fetchImpl: panne, today: new Date("2026-09-17T16:00:00Z") })).rejects.toThrow(/a répondu 503/);
  });

  it("l'empreinte du contenu ignore la date du jour et l'ordre des lignes", () => {
    const jour1 = readEnergyStarCsv(csv(CTRL, NON_CLIMAT_FROID));
    const jour2 = readEnergyStarCsv(csv(NON_CLIMAT_FROID.replace("2026-09-17", "2026-09-18"), CTRL.replace("2026-09-17", "2026-09-18")));
    expect(contentFingerprint(jour2, sha256)).toBe(contentFingerprint(jour1, sha256));
    const change = readEnergyStarCsv(csv(CTRL.replace(";1152;", ";1160;"), NON_CLIMAT_FROID));
    expect(contentFingerprint(change, sha256)).not.toBe(contentFingerprint(jour1, sha256));
  });
});
