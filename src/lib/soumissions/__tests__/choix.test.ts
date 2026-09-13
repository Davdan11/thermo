/* Choix en un clic : pastille ou « Autre… » (texte libre), anciennes clés affichées avec leur libellé, listes des
   réglages ajoutées, retirées, réordonnées et nettoyées ; le sens des choix (pompe, support, circuit) reste reconnu. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { quoteChecks } from "../checklist";
import {
  choiceState,
  choiceText,
  circuitToInstall,
  circuitUnknown,
  DEFAULT_CHOICES,
  indoorKind,
  isPumpDrain,
  LEGACY_LABELS,
  mountingKind,
  normalizeChoices,
  numChoiceState,
  parseChoiceNumber,
  routeOutside,
} from "../choices";
import { defaultSettings } from "../defaults";
import { describeUnit } from "../present";
import { saveSettingsService } from "../service";
import { readSettings } from "../store";
import { parseQuoteInput, parseSettingsInput } from "../validate";
import { fullSettings, pick, RATES, readyContent, TODAY } from "./fixtures";

describe("pastille ou « Autre… »", () => {
  const drain = DEFAULT_CHOICES.drain;
  it("une valeur de la liste active sa pastille (accents et majuscules ignorés) ; une autre valeur active « Autre »", () => {
    expect(choiceState("Pompe de condensat", drain)).toEqual({ picked: "Pompe de condensat", other: false, text: "Pompe de condensat" });
    expect(choiceState("  pompe DE condensat ", drain).picked).toBe("Pompe de condensat");
    expect(choiceState("Gravite vers l’exterieur", drain).picked).toBe("Gravité vers l’extérieur");
    expect(choiceState("Drain dans le puisard du sous-sol", drain)).toEqual({ picked: null, other: true, text: "Drain dans le puisard du sous-sol" });
    expect(choiceState("", drain)).toEqual({ picked: null, other: false, text: "" });
  });

  it("ancienne clé : libellé d'origine, pastille si la liste le contient, sinon « Autre » avec ce libellé", () => {
    expect(choiceState("support-mural", DEFAULT_CHOICES.mounting, LEGACY_LABELS.mounting)).toEqual({ picked: null, other: true, text: "Support mural" });
    expect(choiceState("support-mural", ["Support mural", "Toit plat"], LEGACY_LABELS.mounting).picked).toBe("Support mural");
    expect(choiceText("drain", "pompe")).toBe("Pompe à condensat (pompe à drain)");
    expect(choiceText("drain", "Pompe de condensat")).toBe("Pompe de condensat");
    expect(choiceText("mounting", "")).toBe("");
  });

  it("nombres : pastille ou « Autre » ; saisie « 7,5 » acceptée", () => {
    expect(numChoiceState(25, [15, 25, 35, 50])).toEqual({ picked: 25, other: false });
    expect(numChoiceState(42, [15, 25, 35, 50])).toEqual({ picked: null, other: true });
    expect(numChoiceState(null, [15])).toEqual({ picked: null, other: false });
    expect(parseChoiceNumber("7,5")).toBe(7.5);
    expect(parseChoiceNumber("abc")).toBeNull();
  });

  it("le texte « Autre » est enregistré tel quel (borné) ; un texte trop long est refusé", () => {
    const c = readyContent();
    c.placement.outdoor.mounting = "Sur un muret de béton existant";
    c.placement.indoor[0].drain = "Drain dans le puisard du sous-sol";
    c.site.propertyType = "Maison mobile";
    const ok = parseQuoteInput({ content: { ...c, machine: null }, internalNotes: "" });
    expect(ok.ok).toBe(true);
    if (ok.ok) expect(ok.data.content.placement.outdoor.mounting).toBe("Sur un muret de béton existant");
    c.placement.indoor[0].drain = "x".repeat(121);
    expect(parseQuoteInput({ content: { ...c, machine: null }, internalNotes: "" }).ok).toBe(false);
  });
});

describe("sens des choix : anciennes clés et libellés des listes", () => {
  it("support, type d'unité, drain, circuit, parcours", () => {
    expect(["support-mural", "Mural, sur support"].map(mountingKind)).toEqual(["support-mural", "support-mural"]);
    expect(["Au sol, sur base", "socle-sol"].map(mountingKind)).toEqual(["socle-sol", "socle-sol"]);
    expect(mountingKind("Au sol, sur support surélevé")).toBe("support-sol");
    expect(mountingKind("Toit plat")).toBe("toit");
    expect(mountingKind("Sur un muret")).toBe("support-mural");
    expect(indoorKind("Console au plancher")).toBe("console");
    expect(indoorKind("cassette")).toBe("cassette");
    expect([isPumpDrain("pompe"), isPumpDrain("Pompe de condensat"), isPumpDrain("Gravité vers l’extérieur")]).toEqual([true, true, false]);
    expect([circuitToInstall("a-installer"), circuitToInstall("Circuit dédié à installer"), circuitToInstall("Circuit dédié existant")]).toEqual([true, true, false]);
    expect([circuitUnknown("inconnu"), circuitUnknown("À vérifier"), circuitUnknown("Circuit dédié existant")]).toEqual([true, true, false]);
    expect([routeOutside("exterieur"), routeOutside("À l’extérieur, le long du mur"), routeOutside("À l’intérieur")]).toEqual([true, true, false]);
  });

  it("la liste de vérification reconnaît la pompe et le circuit à vérifier écrits en mots", () => {
    const c = readyContent();
    c.placement.indoor[0].drain = "Pompe de condensat";
    c.placement.electrical.circuit = "À vérifier";
    const ids = quoteChecks(c, fullSettings(), TODAY, RATES, pick()).filter((i) => !i.ok).map((i) => i.id);
    expect(ids).toEqual(expect.arrayContaining([`pompe-${c.placement.indoor[0].id}`, "electricien"]));
  });

  it("le texte du document garde les libellés : anciennes clés et choix écrits", () => {
    const c = readyContent();
    const u = c.placement.indoor[0];
    expect(describeUnit("Unité 1", c.placement, u)).toContain("drain : par gravité");
    u.drain = "Pompe de condensat";
    u.lineRoute = "Dans l’entretoit";
    expect(describeUnit("Unité 1", c.placement, u)).toContain("drain : pompe de condensat");
    expect(describeUnit("Unité 1", c.placement, u)).toContain("dans l’entretoit");
  });
});

describe("listes modifiables dans les réglages", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-choix-"));
    process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("valeurs de départ ; liste absente : valeurs de départ ; liste vidée : reste vide", () => {
    expect(defaultSettings().choices.panelCapacity).toEqual(["100 A", "125 A", "150 A", "200 A", "Inconnue"]);
    expect(defaultSettings().choices.lineLength).toEqual(["15", "25", "35", "50"]);
    expect(DEFAULT_CHOICES.wallMaterial).toEqual(["Brique", "Vinyle", "Bois", "Béton", "Pierre", "Fibrociment"]);
    const n = normalizeChoices({ room: [], drain: ["Pompe de condensat"] });
    expect(n.room).toEqual([]);
    expect(n.drain).toEqual(["Pompe de condensat"]);
    expect(n.mounting).toEqual(DEFAULT_CHOICES.mounting);
  });

  it("ajouter, retirer, réordonner : enregistré ; doublons, vides et non-nombres retirés", async () => {
    const s = defaultSettings();
    const raw = {
      company: s.company,
      texts: s.texts,
      defaults: { ...s.defaults, site: { access: "Stationnement dans l’entrée", presence: "Un adulte" }, schedule: { duration: "Une journée", arrival: "Entre 8 h et 9 h", windowText: "" } },
      choices: { ...s.choices, drain: ["Pompe de condensat", "Gravité vers l’extérieur", "gravité vers l’extérieur", " "], lineLength: ["25", "abc", "15", "7,5"], room: [], access: [...s.choices.access, "Clé chez le voisin"] },
      templates: s.templates,
      pipedriveStages: s.pipedriveStages,
    };
    const p = parseSettingsInput(raw);
    expect(p.ok).toBe(true);
    if (!p.ok) return;
    await saveSettingsService(p.data, "proprio@exemple.ca");
    const saved = await readSettings();
    expect(saved.choices.drain).toEqual(["Pompe de condensat", "Gravité vers l’extérieur"]);
    expect(saved.choices.lineLength).toEqual(["25", "15", "7,5"]);
    expect(saved.choices.room).toEqual([]);
    expect(saved.choices.access.at(-1)).toBe("Clé chez le voisin");
    expect(saved.choices.mounting).toEqual(DEFAULT_CHOICES.mounting);
    expect(saved.defaults.site).toEqual({ access: "Stationnement dans l’entrée", presence: "Un adulte" });
    expect(saved.defaults.schedule.duration).toBe("Une journée");
  });
});
