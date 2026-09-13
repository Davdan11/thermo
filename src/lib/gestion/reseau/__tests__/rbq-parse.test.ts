/* Chantier R — analyseur du fichier des licences actives de la RBQ : colonnes, statuts, encodage, guillemets,
   morceaux, archive ZIP. Données entièrement fictives (numéros 0000-…, entreprises « Fictive »). */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { deflateRawSync } from "node:zlib";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { collectRbq, detectDelimiter, normalizeLicence, pickDecoder, subcategoryCode } from "../rbq/csv";
import { statusKind } from "../rbq/verify";
import { isZipMagic, listZipEntries, openZipEntry, pickCsvEntry } from "../rbq/zip";

const HEADER = "Numero de licence,Statut de la licence,Type de licence,Categorie,Sous-categories,Nom de l'intervenant,Courriel,Numero de telephone,Municipalite";
const csv = (rows: string[], header = HEADER) => [header, ...rows].join("\r\n") + "\r\n";
const utf8 = (s: string) => new TextEncoder().encode(s);
const want = (...n: string[]) => new Set(n.map(normalizeLicence));

const ROWS = [
  `0000-0000-01,Active,Entrepreneur,Spécialisé,"99.1 Sous-catégorie fictive A",Entreprise Fictive A,a@exemple.ca,5550000000,Ville Fictive`,
  `0000-0000-01,Active,Entrepreneur,Spécialisé,"99.2 Sous-catégorie fictive B",Entreprise Fictive A,a@exemple.ca,5550000000,Ville Fictive`,
  `0000-0000-02,Active,Entrepreneur,Général,99.3 Sous-catégorie fictive C,Entreprise Fictive B,,,Autre Ville`,
];

describe("colonnes et contenu", () => {
  it("garde les licences recherchées, fusionne les sous-catégories, ne conserve ni courriel ni téléphone", async () => {
    const r = await collectRbq([utf8(csv(ROWS))], want("0000-0000-01"));
    expect(r.ok).toBe(true);
    expect(r.rows).toBe(3);
    expect(r.licences).toBe(2);
    expect(r.delimiter).toBe(",");
    const a = r.found.get("0000000001")!;
    expect(a.status).toBe("Active");
    expect(a.subcategories).toEqual(["99.1 Sous-catégorie fictive A", "99.2 Sous-catégorie fictive B"]);
    expect(a.name).toBe("Entreprise Fictive A");
    expect(JSON.stringify(a)).not.toMatch(/exemple\.ca|5550000000/);
    expect(r.found.has("0000000002")).toBe(false);
  });

  it("colonne du statut absente : fichier refusé, aucune licence retenue", async () => {
    const header = "Numero de licence,Type de licence,Municipalite";
    const r = await collectRbq([utf8(csv(["0000-0000-01,Entrepreneur,Ville Fictive"], header))], want("0000-0000-01"));
    expect(r.ok).toBe(false);
    expect(r.error).toBe("colonnes-manquantes");
    expect(r.missingColumns).toEqual(["Statut de la licence"]);
    expect(r.found.size).toBe(0);
  });

  it("colonne du numéro absente : refusé aussi", async () => {
    const r = await collectRbq([utf8(csv(["Active,Ville"], "Statut de la licence,Municipalite"))], want("0000-0000-01"));
    expect(r.ok).toBe(false);
    expect(r.missingColumns).toContain("Numero de licence");
  });

  it("fichier vide : refusé", async () => {
    const r = await collectRbq([], want("0000-0000-01"));
    expect(r).toMatchObject({ ok: false, error: "vide", licences: 0 });
  });

  it("en-têtes accentués ou non, dans n'importe quel ordre", async () => {
    const r = await collectRbq([utf8(csv(["Ville Fictive,Suspendue,0000-0000-05"], "Municipalité,Statut de la licence,Numéro de licence"))], want("0000000005"));
    expect(r.ok).toBe(true);
    expect(r.found.get("0000000005")).toMatchObject({ status: "Suspendue", municipality: "Ville Fictive" });
  });
});

describe("statuts", () => {
  it.each([
    ["Active", "active"],
    ["ACTIVE", "active"],
    ["Actif", "active"],
    ["Suspendue", "suspendue"],
    ["Licence suspendue temporairement", "suspendue"],
    ["Annulée", "annulee"],
    ["Révoquée", "annulee"],
    ["Inactive", "autre"],
    ["", "autre"],
    ["Statut inconnu", "autre"],
  ])("« %s » → %s", (raw, kind) => {
    expect(statusKind(raw)).toBe(kind);
  });
});

describe("encodage et format", () => {
  it("Windows-1252 et point-virgule : accents lus correctement", async () => {
    const text = "Numéro de licence;Statut de la licence;Municipalité\r\n0000-0000-03;Active;Montréal\r\n";
    const bytes = Buffer.from(text, "latin1");
    expect(pickDecoder(bytes).encoding).toBe("windows-1252");
    const r = await collectRbq([bytes], want("0000-0000-03"));
    expect(r).toMatchObject({ ok: true, encoding: "windows-1252", delimiter: ";" });
    expect(r.found.get("0000000003")?.municipality).toBe("Montréal");
  });

  it("UTF-8 avec BOM : l'en-tête est reconnu", async () => {
    const r = await collectRbq([utf8("﻿" + csv(ROWS))], want("0000-0000-02"));
    expect(r.ok).toBe(true);
    expect(r.encoding).toBe("utf-8");
    expect(r.found.get("0000000002")?.name).toBe("Entreprise Fictive B");
  });

  it("tabulation devinée", () => {
    expect(detectDelimiter("a\tb\tc")).toBe("\t");
    expect(detectDelimiter('"a;b",c,d')).toBe(",");
  });

  it("guillemets doublés et retour de ligne dans un champ", async () => {
    const rows = [`0000-0000-04,Active,,,,"Nom ""fictif""\nsur deux lignes",,,Ville`];
    const r = await collectRbq([utf8(csv(rows))], want("0000-0000-04"));
    expect(r.found.get("0000000004")?.name).toBe('Nom "fictif"\nsur deux lignes');
    expect(r.rows).toBe(1);
  });

  it("morceaux de 7 octets (caractères coupés, guillemets coupés) : même résultat", async () => {
    const bytes = utf8(csv([...ROWS, `0000-0000-04,Active,,,,"Nom ""fictif""",,,Montréal`]));
    const chunks: Uint8Array[] = [];
    for (let i = 0; i < bytes.length; i += 7) chunks.push(bytes.slice(i, i + 7));
    const whole = await collectRbq([bytes], want("0000-0000-01", "0000-0000-04"));
    const split = await collectRbq(chunks, want("0000-0000-01", "0000-0000-04"));
    expect(split.rows).toBe(whole.rows);
    expect([...split.found.entries()]).toEqual([...whole.found.entries()]);
    expect(split.found.get("0000000004")).toMatchObject({ name: 'Nom "fictif"', municipality: "Montréal" });
  });

  it("numéros et codes normalisés", () => {
    expect(normalizeLicence("0000-0000-01")).toBe("0000000001");
    expect(normalizeLicence(" 0000 0000 01 ")).toBe("0000000001");
    expect(subcategoryCode("99.10 Sous-catégorie fictive")).toBe("99.10");
    expect(subcategoryCode("Sans code")).toBeNull();
  });
});

/* ---------------- ZIP ---------------- */

function zipOf(name: string, data: Buffer): Buffer {
  const comp = deflateRawSync(data);
  const nameBuf = Buffer.from(name, "utf8");
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0);
  local.writeUInt16LE(20, 4);
  local.writeUInt16LE(0x800, 6);
  local.writeUInt16LE(8, 8);
  local.writeUInt32LE(comp.length, 18);
  local.writeUInt32LE(data.length, 22);
  local.writeUInt16LE(nameBuf.length, 26);
  const cen = Buffer.alloc(46);
  cen.writeUInt32LE(0x02014b50, 0);
  cen.writeUInt16LE(20, 4);
  cen.writeUInt16LE(20, 6);
  cen.writeUInt16LE(0x800, 8);
  cen.writeUInt16LE(8, 10);
  cen.writeUInt32LE(comp.length, 20);
  cen.writeUInt32LE(data.length, 24);
  cen.writeUInt16LE(nameBuf.length, 28);
  cen.writeUInt32LE(0, 42);
  const cd = Buffer.concat([cen, nameBuf]);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(1, 8);
  eocd.writeUInt16LE(1, 10);
  eocd.writeUInt32LE(cd.length, 12);
  eocd.writeUInt32LE(local.length + nameBuf.length + comp.length, 16);
  return Buffer.concat([local, nameBuf, comp, cd, eocd]);
}

describe("archive ZIP", () => {
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-rbq-zip-"));
  });
  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it("lit l'entrée CSV compressée en flux", async () => {
    const file = path.join(dir, "licences.zip");
    await writeFile(file, zipOf("extraction.csv", Buffer.from(csv(ROWS), "utf8")));
    const entries = await listZipEntries(file);
    expect(entries.map((e) => e.name)).toEqual(["extraction.csv"]);
    const entry = pickCsvEntry(entries)!;
    const r = await collectRbq(openZipEntry(file, entry), want("0000-0000-02"));
    expect(r.ok).toBe(true);
    expect(r.licences).toBe(2);
    expect(r.found.get("0000000002")?.name).toBe("Entreprise Fictive B");
  });

  it("reconnaît la signature ZIP et refuse un fichier qui n'en est pas un", async () => {
    expect(isZipMagic(zipOf("a.csv", Buffer.from("x")))).toBe(true);
    expect(isZipMagic(Buffer.from("Numero"))).toBe(false);
    const file = path.join(dir, "faux.zip");
    await writeFile(file, Buffer.alloc(100, 1));
    await expect(listZipEntries(file)).rejects.toThrow(/ZIP illisible/);
  });
});
