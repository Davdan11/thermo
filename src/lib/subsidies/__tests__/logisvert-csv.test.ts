import { describe, expect, it } from "vitest";
import { buildHqEntries, parseCsv, readLogisVertCsv, toNumber } from "../../../../scripts/lib/logisvert-csv.mjs";

describe("parseCsv (RFC 4180)", () => {
  it("découpe des champs simples", () => {
    expect(parseCsv("a,b,c\n1,2,3\n")).toEqual([["a", "b", "c"], ["1", "2", "3"]]);
  });

  it("garde les virgules d'un champ entre guillemets", () => {
    expect(parseCsv('x,"Montréal, QC",y')).toEqual([["x", "Montréal, QC", "y"]]);
  });

  it("garde le séparateur « ; » d'un champ entre guillemets", () => {
    expect(parseCsv('a;"EA(C;U)1P24A+TDR+TXV";b', { delimiter: ";" })).toEqual([["a", "EA(C;U)1P24A+TDR+TXV", "b"]]);
  });

  it("lit un guillemet doublé comme un guillemet", () => {
    expect(parseCsv('"il dit ""oui""",2')).toEqual([['il dit "oui"', "2"]]);
    expect(parseCsv('"""",""')).toEqual([['"', ""]]);
  });

  it("garde tabulations et sauts de ligne d'un champ entre guillemets", () => {
    expect(parseCsv('"MAXI AIR CENTRAL\t";"\tIDC37A44";x', { delimiter: ";" })).toEqual([["MAXI AIR CENTRAL\t", "\tIDC37A44", "x"]]);
    expect(parseCsv('"deux\r\nlignes",b\r\nc,d')).toEqual([["deux\r\nlignes", "b"], ["c", "d"]]);
  });

  it("conserve les champs vides", () => {
    expect(parseCsv("a,,c\n,b,\n,,")).toEqual([["a", "", "c"], ["", "b", ""], ["", "", ""]]);
    expect(parseCsv('"",x')).toEqual([["", "x"]]);
  });

  it("accepte CRLF, LF et CR, ignore le BOM et les lignes vides", () => {
    expect(parseCsv("﻿a,b\r\n1,2\r\n\r\n3,4\r5,6\n")).toEqual([["a", "b"], ["1", "2"], ["3", "4"], ["5", "6"]]);
    expect(parseCsv("a,b")).toEqual([["a", "b"]]);
    expect(parseCsv("")).toEqual([]);
  });

  it("garde un guillemet au milieu d'un champ non entre guillemets", () => {
    expect(parseCsv('12" DUCT,b')).toEqual([['12" DUCT', "b"]]);
  });

  it("refuse une structure ambiguë", () => {
    expect(() => parseCsv('a,"non fermé\nb,c')).toThrow(/jamais refermé/);
    expect(() => parseCsv('"abc"x,d')).toThrow(/après un guillemet fermant/);
  });
});

/* Lignes réelles de proprio-maison-fr-17-07-2025.csv.gz qui étaient mal découpées. */
const HQ_CSV = [
  "﻿ahri;marque;modele_exterieur;modele_interieur;fournaise;puissance_nominale;puissance_moins_8;aide_financiere_a;aide_financiere_b;haut_rendement",
  '213270491;AIREASE;4SHP18LX136P;"EA(C;U)1P24A+TDR+TXV";A80US2V070A12;23000;16000;800;;',
  '206799639;"MAXI AIR CENTRAL\t";"CLASS24CC\t";AHAN3615;;22000;16000;1920;;OUI',
  '214841713;HISENSE;AUWR-36U3SA2;"\tDC37A44-210L";;30000;23000;2760;;OUI',
  "210857309;1HVAC;ACIQ-12ZPL-HP230B;SCC-1218-HH-M;;12000;9500;1526,04;;OUI",
  "",
].join("\r\n");

describe("readLogisVertCsv", () => {
  it("lit les lignes à guillemets sans décaler les colonnes et nettoie les textes", () => {
    const rows = readLogisVertCsv(HQ_CSV);
    expect(rows).toHaveLength(4);
    expect(rows[0]).toMatchObject({ ahri: "213270491", marque: "AIREASE", modele_interieur: "EA(C;U)1P24A+TDR+TXV", fournaise: "A80US2V070A12", puissance_nominale: "23000", puissance_moins_8: "16000", aide_financiere_a: "800", haut_rendement: "" });
    expect(rows[1]).toMatchObject({ marque: "MAXI AIR CENTRAL", modele_exterieur: "CLASS24CC", modele_interieur: "AHAN3615" });
    expect(rows[2].modele_interieur).toBe("DC37A44-210L");
    for (const row of rows) for (const v of Object.values(row)) expect(v).not.toMatch(/["\t\r\n]/);
  });

  it("refuse une ligne au nombre de champs incorrect ou une colonne numérique décalée", () => {
    const header = HQ_CSV.split("\r\n")[0];
    expect(() => readLogisVertCsv(`${header}\r\n1;A;B;C;D;1;2;3;;OUI;extra`)).toThrow(/11 champs au lieu de 10/);
    expect(() => readLogisVertCsv(`${header}\r\n1;A;B;C;D;1;2;TXV;;OUI`)).toThrow(/n'est pas un nombre/);
    expect(() => readLogisVertCsv("ahri;marque\r\n1;A")).toThrow(/colonne « modele_exterieur » absente/);
  });
});

describe("buildHqEntries", () => {
  it("donne le montant officiel, pas une puissance", () => {
    const entries = buildHqEntries(readLogisVertCsv(HQ_CSV));
    expect(entries.get("213270491")).toEqual({ ahri: "213270491", b: "AIREASE", m: "4SHP18LX136P", im: "EA(C;U)1P24A+TDR+TXV", f: "A80US2V070A12", hn: 23000, h17: 16000, a: 800, ab: 0, hr: false });
    expect(entries.get("206799639")).toMatchObject({ b: "MAXI AIR CENTRAL", m: "CLASS24CC", a: 1920, hn: 22000, h17: 16000, hr: true });
    expect(entries.get("210857309")?.a).toBe(1526.04);
  });

  it("ignore les lignes sans montant et garde le plus élevé en cas d'AHRI en double", () => {
    const base = { marque: "X", modele_exterieur: "M", modele_interieur: "", fournaise: "", puissance_nominale: "1", puissance_moins_8: "1", aide_financiere_b: "", haut_rendement: "" };
    const entries = buildHqEntries([
      { ...base, ahri: "1", aide_financiere_a: "500" },
      { ...base, ahri: "1", aide_financiere_a: "900" },
      { ...base, ahri: "1", aide_financiere_a: "700" },
      { ...base, ahri: "2", aide_financiere_a: "" },
      { ...base, ahri: "", aide_financiere_a: "100" },
    ]);
    expect([...entries.keys()]).toEqual(["1"]);
    expect(entries.get("1")?.a).toBe(900);
  });

  it("lit les nombres à virgule décimale", () => {
    expect(toNumber("1526,04")).toBe(1526.04);
    expect(toNumber("7560")).toBe(7560);
    expect(toNumber("")).toBe(0);
  });
});
