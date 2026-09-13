import { mkdtemp, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  emptyPlatformIdentity,
  fillPlaceholders,
  isPlatformIdentityComplete,
  placeholdersIn,
  platformFile,
  platformIssues,
  platformValues,
  readPlatformIdentity,
  savePlatformIdentity,
  type PlatformIdentity,
} from "../identite";
import { childrenOf, parseTrousse, readTrousse, saveTrousse, sectionById, sectionText } from "../trousse";

const COMPLETE: PlatformIdentity = {
  ...emptyPlatformIdentity(),
  legalName: "Entreprise Exemple inc.",
  legalForm: "Société par actions",
  neq: "1234567890",
  address: "1, rue Exemple, Laval (Québec) H0H 0H0",
  tps: "123456789 RT0001",
  tvq: "1234567890 TQ0001",
  phone: "514 555-0100",
  emailLegal: "juridique@exemple.ca",
  emailService: "service@exemple.ca",
  emailPrivacy: "vieprivee@exemple.ca",
  privacyOfficer: { name: "Alex Exemple", title: "Président", email: "vieprivee@exemple.ca", phone: "" },
  representative: { name: "Alex Exemple", title: "Président" },
};

describe("identité de la plateforme", () => {
  it("vide : tous les champs obligatoires sont signalés, TPS et TVQ restent facultatives", () => {
    const issues = platformIssues(emptyPlatformIdentity());
    const fields = issues.map((i) => i.field);
    expect(fields).toContain("legalName");
    expect(fields).toContain("privacyOfficer.name");
    expect(fields).not.toContain("tps");
    expect(issues.every((i) => i.problem === "manquant")).toBe(true);
  });

  it("complète : aucun problème ; formats vérifiés (NEQ, TPS, courriels)", () => {
    expect(isPlatformIdentityComplete(COMPLETE)).toBe(true);
    const bad = platformIssues({ ...COMPLETE, neq: "12345", tps: "12345 RT01", emailLegal: "pas-un-courriel" });
    expect(bad.map((i) => `${i.field}:${i.problem}`).sort()).toEqual(["emailLegal:format", "neq:format", "tps:format"]);
  });

  it("jetons : remplis avec l'identité, les autres listés comme manquants", () => {
    const text = "Offert par [RAISON SOCIALE DE LA PLATEFORME], NEQ [NEQ]. Installateur : [RAISON SOCIALE DE L’INSTALLATEUR]. Responsable : [RESPONSABLE PRP ET COORDONNÉES].";
    expect(placeholdersIn(text)).toEqual(["RAISON SOCIALE DE LA PLATEFORME", "NEQ", "RAISON SOCIALE DE L’INSTALLATEUR", "RESPONSABLE PRP ET COORDONNÉES"]);
    const r = fillPlaceholders(text, platformValues(COMPLETE));
    expect(r.text).toContain("Entreprise Exemple inc.");
    expect(r.text).toContain("NEQ 1234567890");
    expect(r.text).toContain("Alex Exemple, Président, vieprivee@exemple.ca");
    expect(r.missing).toEqual(["RAISON SOCIALE DE L’INSTALLATEUR"]);
  });

  it("identité vide : aucune valeur inventée, tout reste à remplir", () => {
    const r = fillPlaceholders("[RAISON SOCIALE] [COORDONNÉES]", platformValues(emptyPlatformIdentity()));
    expect(r.missing).toEqual(["RAISON SOCIALE", "COORDONNÉES"]);
  });
});

const SAMPLE = [
  "TROUSSE CONTRACTUELLE",
  "VERSION DE TRAVAIL 1.0",
  "13 septembre 2026",
  "## Avis important",
  "Texte d'avis.",
  "## 2  Entente maître",
  "### Entre les parties",
  "[RAISON SOCIALE DE LA PLATEFORME], NEQ [NEQ]",
  "### 2.1  Définitions",
  "Définition A.",
  "Définition B.",
  "## Annexe A  Fiche de projet",
  "### Formule",
  "Commission = 10 % du prix net.",
  "## 3  Textes clients",
  "### 3.2  Contrat à distance",
  "#### Identification",
  "Entrepreneur-vendeur",
  "#### Paiement",
  "Le Client paie l'Entrepreneur.",
  "#### Paiement",
  "Doublon volontaire.",
].join("\n");

describe("trousse : découpage par sections", () => {
  it("identifiants par numéro, par annexe ou par parent et titre ; doublons distingués", () => {
    const t = parseTrousse(SAMPLE);
    expect(t.version).toBe("1.0");
    expect(t.sourceDate).toBe("13 septembre 2026");
    expect(t.preamble).toEqual(["TROUSSE CONTRACTUELLE", "VERSION DE TRAVAIL 1.0", "13 septembre 2026"]);
    const ids = t.sections.map((s) => s.id);
    expect(ids).toEqual(["avis-important", "2", "2/entre-les-parties", "2.1", "Annexe A", "Annexe A/formule", "3", "3.2", "3.2/identification", "3.2/paiement", "3.2/paiement~2"]);
    const full = { ...t, importedAt: null, importedBy: null };
    expect(sectionById(full, "2.1")?.paragraphs).toEqual(["Définition A.", "Définition B."]);
    expect(childrenOf(full, "3.2").map((s) => s.title)).toEqual(["Identification", "Paiement", "Paiement"]);
    expect(sectionText(full, "Annexe A")).toContain("Commission = 10 % du prix net.");
    expect(t.sha256).toMatch(/^[0-9a-f]{64}$/);
  });
});

describe("magasins plateforme.json et trousse.json", () => {
  const prev = process.env.GESTION_DATA_DIR;
  beforeEach(async () => {
    process.env.GESTION_DATA_DIR = await mkdtemp(path.join(tmpdir(), "thermo-plateforme-"));
  });
  afterEach(() => {
    if (prev === undefined) delete process.env.GESTION_DATA_DIR;
    else process.env.GESTION_DATA_DIR = prev;
  });

  it("identité : enregistrée, relue, fusion partielle, auteur et date notés", async () => {
    expect(await readPlatformIdentity()).toEqual(emptyPlatformIdentity());
    await savePlatformIdentity({ legalName: "Entreprise Exemple inc.", privacyOfficer: { name: "Alex Exemple" } }, "proprio@exemple.ca", new Date("2026-09-13T12:00:00Z"));
    const again = await savePlatformIdentity({ neq: "1234567890", privacyOfficer: { title: "Président" } }, "proprio@exemple.ca");
    expect(again.legalName).toBe("Entreprise Exemple inc.");
    expect(again.privacyOfficer).toMatchObject({ name: "Alex Exemple", title: "Président" });
    expect((await readPlatformIdentity()).neq).toBe("1234567890");
    expect(again.updatedBy).toBe("proprio@exemple.ca");
    expect(await stat(platformFile())).toBeTruthy();
  });

  it("trousse : importée puis relue à l'identique, avec empreinte, auteur et date", async () => {
    const parsed = parseTrousse(SAMPLE);
    await saveTrousse(parsed, "import", new Date("2026-09-13T12:00:00Z"));
    const back = await readTrousse();
    expect(back.sections).toEqual(parsed.sections);
    expect(back.sha256).toBe(parsed.sha256);
    expect(back.importedBy).toBe("import");
    expect(back.importedAt).toBe("2026-09-13T12:00:00.000Z");
  });
});
