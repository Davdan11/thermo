/* Chantier D — créateur « clique et c'est fait » : plan tiré du jumelage (une tête, multizone), noms clairs, lignes
   d'office selon le type et la capacité, AUCUN prix inventé, installation standard (50 pi, cache-ligne et sa couleur,
   base ou support, drain par gravité et pompe en extra, électricité jusqu'au panneau), détails facultatifs jamais
   bloquants, mémoire des derniers choix, rétrocompatibilité. Données fictives. */
import { describe, expect, it } from "vitest";
import { sendBlockers } from "../checklist";
import { DEFAULT_CHOICES, normalizeChoices } from "../choices";
import { DEFAULT_PRESENCE, defaultSettings, emptyContent, newIndoor, normalizeSettings, SEED_INCLUSIONS } from "../defaults";
import { applyMemory, emptyMemory, headDefaults, rememberContent } from "../memory";
import { compatibleHeads, headName, isAutoLabel, isMultiZone, pairingForHeads, pairingShape, planFromMachine, relabel, zonesFromModel } from "../plan";
import { applyCoverColor, autoKey, DEFAULT_STANDARD, includedLineLength, matchingPackages, mergeInclusions, newQuoteDefaults, normalizeStandard, standardItems, STANDARD_TEXT, syncPlanLines } from "../standard";
import type { CatalogItem, PairingInfo, PricePackage, QuoteContent, Settings } from "../types";
import { parseQuoteInput, parseSettingsInput } from "../validate";
import { fullSettings, machine, NO_CONTRACTOR, pick, RATES, readyContent, TODAY } from "./fixtures";

const pairing = (over: Partial<PairingInfo> = {}): PairingInfo => ({ ahri: "900000001", indoorDescription: "INT-12", logisVertCents: 100_000, h5Btu: 9_000, h17Btu: 11_000, nominalBtu: 12_000, coolingBtu: 12_000, seer2: 20, hspf2: 9.5, cop5: 1.8, coldClimate: true, ...over });
const pkg = (over: Partial<PricePackage>): PricePackage => ({ id: "f_x", label: "Forfait", description: "", systemType: "tous", capacityMinBtu: null, capacityMaxBtu: null, priceCents: 0, includedLineLength: null, inclusions: [], ...over });
const item = (over: Partial<CatalogItem>): CatalogItem => ({ id: "x_x", kind: "extra", name: "Extra", description: "", unit: "unite", unitPriceCents: 0, defaultQuantity: 1, optional: false, role: null, ...over });

function priceList(s: Settings = fullSettings()): Settings {
  s.packages = [
    pkg({ id: "f_mur9", label: "Murale 9 000 à 15 000 BTU", systemType: "wall-single", capacityMinBtu: 9_000, capacityMaxBtu: 15_000, priceCents: 350_000 }),
    pkg({ id: "f_mur18", label: "Murale 18 000 à 24 000 BTU", systemType: "wall-single", capacityMinBtu: 15_001, capacityMaxBtu: 24_000, priceCents: 420_000 }),
    pkg({ id: "f_central", label: "Centrale", systemType: "central-ducted", priceCents: 900_000 }),
  ];
  s.extras = [item({ id: "x_ligne", name: "Pied de ligne supplémentaire", unit: "pied", unitPriceCents: 1_500, role: "ligne-supplementaire" }), item({ id: "x_pompe", name: "Pompe de condensat", unitPriceCents: 22_500, role: "pompe-drain" })];
  return s;
}

describe("plan construit à partir de la machine", () => {
  it("jumelage simple : une tête, type, modèle et capacité certifiée du jumelage, nom clair", () => {
    const m = machine({ pairing: pairing() });
    const heads = planFromMachine([newIndoor(1)], m, { included: 50 });
    expect(heads).toHaveLength(1);
    expect(heads[0]).toMatchObject({ type: "Murale", model: "INT-12", capacityBtu: 12_000, label: "Tête 1" });
    // La pièce choisie entre dans le nom.
    expect(relabel([{ ...heads[0], room: "Salon" }])[0].label).toBe("Tête 1 · Salon");
  });

  it("multizone « tête + tête + tête » : une tête par modèle officiel, sans capacité inventée", () => {
    const m = machine({ name: "Multi-Zone 3MXS24", outdoorModel: "3MXS24WMVJU", pairing: pairing({ indoorDescription: "FDMQ09WVJU*+FDMQ09WVJU*+CDMQ07WVJU*", nominalBtu: 24_000 }) });
    const first = { ...newIndoor(1), room: "Salon", wall: "Mur extérieur" };
    const heads = planFromMachine([first], m, { included: 50 });
    expect(heads.map((h) => h.model)).toEqual(["FDMQ09WVJU", "FDMQ09WVJU", "CDMQ07WVJU"]);
    expect(heads.map((h) => h.capacityBtu)).toEqual([null, null, null]);
    expect(heads[0]).toMatchObject({ room: "Salon", wall: "Mur extérieur", label: "Tête 1 · Salon" });
    expect(heads.map((h) => h.label)).toEqual(["Tête 1 · Salon", "Tête 2", "Tête 3"]);
  });

  it("multizone de classe : nombre de têtes choisi, têtes compatibles d'après les jumelages officiels, jumelage retrouvé", () => {
    const list = [
      pairing({ ahri: "1", indoorDescription: "Appareils sans conduits", nominalBtu: 24_000 }),
      pairing({ ahri: "2", indoorDescription: "Appareils avec conduits", nominalBtu: 24_000 }),
      pairing({ ahri: "3", indoorDescription: "Combinaison d'appareils avec ou sans conduits", nominalBtu: 24_000 }),
      pairing({ ahri: "4", indoorDescription: "FDMQ09WVJU*+CDMQ07WVJU*", nominalBtu: 24_000 }),
    ];
    const m = machine({ name: "Multi-Zone 3MXS24", outdoorModel: "3MXS24WMVJU", pairing: list[0] });
    expect(isMultiZone(m, list)).toBe(true);
    expect(zonesFromModel("3MXS24WMVJU")).toBe(3);
    expect(zonesFromModel("MXZ-8C48NA")).toBe(8);
    expect(pairingShape(list[0], m.systemType)).toEqual({ kind: "classe", cls: "sans-conduits" });
    const heads = planFromMachine([newIndoor(1)], m, { included: 50, heads: 3, headDefaults: { wall: "Mur extérieur" } });
    expect(heads).toHaveLength(3);
    expect(heads.every((h) => h.type === "Murale" && h.model === "" && h.capacityBtu === null)).toBe(true);
    expect(compatibleHeads(list, m.systemType)).toEqual(["FDMQ09WVJU", "CDMQ07WVJU"]);
    // Liste exacte de têtes (ordre libre) → ce jumelage ; toutes gainables → classe « avec conduits » ; mélange → combinaison.
    expect(pairingForHeads(list, [{ model: "CDMQ07WVJU", type: "Murale" }, { model: "FDMQ09WVJU*", type: "Murale" }], m.systemType)?.ahri).toBe("4");
    expect(pairingForHeads(list, [{ model: "", type: "Gainable (conduits)" }, { model: "", type: "Gainable (conduits)" }], m.systemType)?.ahri).toBe("2");
    expect(pairingForHeads(list, [{ model: "", type: "Gainable (conduits)" }, { model: "", type: "Murale" }], m.systemType)?.ahri).toBe("3");
  });

  it("système central : un appareil central, jamais une tête murale", () => {
    const m = machine({ systemType: "central-ducted", pairing: pairing({ indoorDescription: "CR33-50/60*+TDR+TXV", nominalBtu: 35_200 }) });
    const heads = planFromMachine([newIndoor(1)], m, { included: null });
    expect(heads).toHaveLength(1);
    expect(heads[0]).toMatchObject({ type: "Appareil central (fournaise ou serpentin)", model: "CR33-50/60*+TDR+TXV", capacityBtu: 35_200 });
  });

  it("noms clairs : « Unité 1 » ou un nom illisible (« R ») devient « Tête n · pièce » ; un nom écrit est gardé", () => {
    expect(isAutoLabel("R")).toBe(true);
    expect(isAutoLabel("Unité 2")).toBe(true);
    expect(headName({ label: "R", room: "Salon" }, 0)).toBe("Tête 1 · Salon");
    expect(headName({ label: "Unité 3", room: "" }, 2)).toBe("Tête 3");
    expect(headName({ label: "Chambre des maîtres", room: "Chambre" }, 0)).toBe("Chambre des maîtres");
    expect(newIndoor(1).label).toBe("Tête 1");
  });
});

describe("lignes ajoutées d'office, jamais de prix inventé", () => {
  it("le forfait qui correspond au type et à la capacité s'ajoute, avec SON prix", () => {
    const s = priceList();
    const c = readyContent(s);
    c.lines = [];
    c.machine = machine({ pairing: pairing({ nominalBtu: 12_000 }) });
    expect(matchingPackages(s, c.machine).map((p) => p.id)).toEqual(["f_mur9"]);
    const r = syncPlanLines(c, s, { forfait: true });
    expect(r.lines).toHaveLength(1);
    expect(r.lines[0]).toMatchObject({ kind: "forfait", catalogRef: "f_mur9", unitPriceCents: 350_000, label: "Murale 9 000 à 15 000 BTU" });
    c.machine = machine({ pairing: pairing({ nominalBtu: 18_000 }) });
    expect(syncPlanLines(c, s, { forfait: true }).lines[0].catalogRef).toBe("f_mur18");
    c.machine = machine({ systemType: "central-ducted", pairing: pairing({ nominalBtu: 36_000 }) });
    expect(syncPlanLines(c, s, { forfait: true }).lines[0].catalogRef).toBe("f_central");
    // Machine changée : l'ancien forfait est remplacé, pas doublé.
    const again = syncPlanLines({ ...c, lines: r.lines }, s, { forfait: true }).lines;
    expect(again.filter((l) => l.kind === "forfait").map((l) => l.catalogRef)).toEqual(["f_central"]);
  });

  it("forfait absent ou sans prix : AUCUNE ligne, un avis « ajoutez-le à votre liste de prix »", () => {
    const s = priceList();
    s.packages = [];
    const c = { ...readyContent(s), lines: [] };
    const none = syncPlanLines(c, s, { forfait: true });
    expect(none.lines).toEqual([]);
    expect(none.notices.map((n) => n.text).join(" ")).toMatch(/ajoutez-le à votre liste de prix/i);
    s.packages = [pkg({ id: "f_zero", label: "Murale", systemType: "wall-single", priceCents: 0 })];
    const zero = syncPlanLines(c, s, { forfait: true });
    expect(zero.lines).toEqual([]);
    expect(zero.notices[0]).toMatchObject({ key: "forfait", href: "/gestion/soumissions/prix" });
  });

  it("le propriétaire retire une ligne d'office : elle ne revient pas", () => {
    const s = priceList();
    const c = { ...readyContent(s), lines: [] };
    const r = syncPlanLines(c, s, { forfait: true, dismissed: new Set([autoKey("forfait")]) });
    expect(r.lines).toEqual([]);
  });
});

describe("installation standard", () => {
  it("50 pi inclus par tête ; au-delà, le pied de ligne supplémentaire seulement si son prix existe", () => {
    const s = priceList();
    expect(includedLineLength(s, "pi")).toBe(50);
    expect(includedLineLength(s, "m")).toBe(15.2);
    // Un forfait avec sa propre longueur passe avant ; un réglage du propriétaire aussi.
    expect(includedLineLength(s, "pi", { includedLineLength: 25 })).toBe(25);
    const c = readyContent(s);
    c.lines = [];
    Object.assign(c.placement.indoor[0], { lineLength: 65, lineIncluded: 50 });
    const priced = syncPlanLines(c, s, { units: true });
    expect(priced.lines).toHaveLength(1);
    expect(priced.lines[0]).toMatchObject({ catalogRef: "x_ligne", quantity: 15, unitPriceCents: 1_500, unitRef: c.placement.indoor[0].id });
    s.extras = s.extras.filter((x) => x.role !== "ligne-supplementaire");
    const missing = syncPlanLines(c, s, { units: true });
    expect(missing.lines).toEqual([]);
    expect(missing.notices[0].text).toMatch(/Pied de ligne supplémentaire : ajoutez-le à votre liste de prix/);
    s.extras.push(item({ id: "x_ligne0", name: "Pied de ligne", unit: "pied", unitPriceCents: 0, role: "ligne-supplementaire" }));
    expect(syncPlanLines(c, s, { units: true }).lines).toEqual([]);
    Object.assign(c.placement.indoor[0], { lineLength: 40 });
    expect(syncPlanLines({ ...c, lines: priced.lines }, priceList(), { units: true }).lines).toEqual([]);
  });

  it("drain par gravité inclus ; la pompe de condensat est un extra ajouté quand elle est cochée, retiré sinon", () => {
    const s = priceList();
    const c = readyContent(s);
    c.lines = [];
    c.placement.indoor[0].drain = "Pompe de condensat";
    const on = syncPlanLines(c, s, { units: true });
    expect(on.lines).toHaveLength(1);
    expect(on.lines[0]).toMatchObject({ catalogRef: "x_pompe", unitPriceCents: 22_500, quantity: 1 });
    c.placement.indoor[0].drain = "Gravité vers l’extérieur";
    expect(syncPlanLines({ ...c, lines: on.lines }, s, { units: true }).lines).toEqual([]);
    c.placement.indoor[0].drain = "Pompe de condensat";
    s.extras = s.extras.filter((x) => x.role !== "pompe-drain");
    const missing = syncPlanLines(c, s, { units: true });
    expect(missing.lines).toEqual([]);
    expect(missing.notices[0].text).toMatch(/pompe de condensat\. Ajoutez-la à votre liste de prix/);
    expect(standardItems(DEFAULT_STANDARD, "pi").map((i) => i.label)).toContain(STANDARD_TEXT.drain);
  });

  it("cache-ligne inclus : seule la couleur se choisit (pastilles modifiables, brique comprise)", () => {
    expect(DEFAULT_CHOICES.coverColor).toEqual(["Blanc", "Ivoire", "Beige", "Brun", "Brique", "Noir", "Gris"]);
    const s = fullSettings();
    const c = newQuoteDefaults(emptyContent(s, TODAY), s, DEFAULT_PRESENCE);
    expect(c.placement.indoor[0].lineFinish).toBe("Cache-ligne");
    const colored = applyCoverColor(c, "Brique");
    expect(colored.placement.coverColor).toBe("Brique");
    expect(colored.inclusions.find((i) => i.label === STANDARD_TEXT.cover)?.detail).toBe("Couleur : Brique");
    // Réglable : une liste enregistrée sans cette clé reprend les teintes de départ.
    expect(normalizeChoices({ room: ["Salon"] }).coverColor).toEqual(DEFAULT_CHOICES.coverColor);
  });

  it("base au sol OU support mural inclus : aucune ligne de support exigée, les deux choix en un clic", () => {
    const s = priceList();
    const c = readyContent(s);
    c.placement.outdoor.mounting = "Au sol, sur base";
    expect(standardItems(DEFAULT_STANDARD, "pi").map((i) => i.label)).toContain(STANDARD_TEXT.mounting);
    expect(DEFAULT_CHOICES.mounting).toEqual(expect.arrayContaining(["Au sol, sur base", "Mural, sur support"]));
    // Lignes d'office à partir de rien : le forfait seulement, jamais de ligne de base ou de support.
    const r = syncPlanLines({ ...c, lines: [] }, s, { forfait: true, units: true });
    expect(r.lines.map((l) => l.catalogRef)).toEqual(["f_mur9"]);
    expect(r.notices).toEqual([]);
    expect(sendBlockers(c, s, TODAY, RATES, pick()).map((b) => b.id)).not.toContain("exterieur");
  });

  it("raccordement électrique jusqu'au panneau inclus, sans limite de distance ; l'ancien libellé n'est pas doublé", () => {
    const items = standardItems(DEFAULT_STANDARD, "pi");
    const elec = items.find((i) => i.label === STANDARD_TEXT.electrical);
    expect(elec).toBeDefined();
    expect(`${elec?.label} ${elec?.detail}`).not.toMatch(/\d\s*(pi|pieds|m)\b/);
    const merged = mergeInclusions(DEFAULT_STANDARD, SEED_INCLUSIONS, "pi").map((i) => i.label);
    expect(merged.filter((l) => /^raccordement électrique/i.test(l))).toEqual([STANDARD_TEXT.electrical]);
    expect(merged.filter((l) => /^drain/i.test(l))).toEqual([STANDARD_TEXT.drain]);
    expect(merged).toContain("Mise en service");
  });

  it("nouvelle soumission : inclusions standard, 50 pi par tête, texte de présence par défaut", () => {
    const s = fullSettings();
    const c = newQuoteDefaults(emptyContent(s, TODAY), s, DEFAULT_PRESENCE);
    expect(c.inclusions[0].label).toBe("Ligne frigorifique jusqu’à 50 pi par tête intérieure");
    expect(c.placement.indoor[0]).toMatchObject({ lineIncluded: 50, drain: "Gravité vers l’extérieur" });
    expect(c.site.presence).toBe(DEFAULT_PRESENCE);
    s.defaults.site = { access: "", presence: "Le client ou un adulte désigné", constraints: "Chien à l’intérieur" };
    const own = newQuoteDefaults(emptyContent(s, TODAY), s, DEFAULT_PRESENCE);
    expect(own.site).toMatchObject({ presence: "Le client ou un adulte désigné", constraints: "Chien à l’intérieur" });
    // Désactivée : la liste des réglages telle quelle.
    s.standard = { ...DEFAULT_STANDARD, enabled: false };
    expect(newQuoteDefaults(emptyContent(s, TODAY), s, DEFAULT_PRESENCE).inclusions.map((i) => i.label)).toEqual(s.templates.inclusions);
  });
});

describe("détails facultatifs et mémoire", () => {
  it("accès, contraintes et présence vides : jamais bloquants pour l'envoi", () => {
    const s = fullSettings();
    const c = readyContent(s);
    c.site = { ...c.site, access: "", constraints: "", presence: "" };
    const ids = sendBlockers(c, s, TODAY, RATES, pick()).map((b) => b.id);
    expect(ids).toEqual([]);
  });

  it("le dernier choix de chaque champ devient la valeur proposée (jamais la pièce, l'emplacement ni la pompe)", () => {
    const s = fullSettings();
    const done = readyContent(s);
    Object.assign(done.placement.indoor[0], { wall: "Mur extérieur", height: "Près du plafond", lineLength: 25, penetrations: 1, floor: 1, lineRoute: "À l’extérieur, le long du mur", drain: "Pompe de condensat" });
    done.placement.outdoor.mounting = "Mural, sur support";
    done.placement.coverColor = "Blanc";
    done.schedule = { ...done.schedule, mode: "date", date: "2026-09-26", duration: "Une journée" };
    const mem = rememberContent(emptyMemory(), done, TODAY, "2026-09-12T15:00:00.000Z");
    const next = applyMemory(emptyContent(s, TODAY), mem, TODAY);
    expect(next.placement.outdoor.mounting).toBe("Mural, sur support");
    expect(next.placement.outdoor.location).toBe("");
    expect(next.placement.indoor[0]).toMatchObject({ wall: "Mur extérieur", height: "Près du plafond", lineLength: 25, penetrations: 1, floor: 1, room: "", drain: "" });
    expect(next.placement.coverColor).toBe("Blanc");
    // Écart de 14 jours repris à partir d'aujourd'hui, jamais la date d'origine.
    expect(next.schedule).toMatchObject({ mode: "date", date: "2026-09-26", duration: "Une journée" });
    expect(applyMemory(emptyContent(s, "2026-10-01"), mem, "2026-10-01").schedule.date).toBe("2026-10-15");
    // Un champ déjà rempli n'est jamais remplacé.
    const typed = emptyContent(s, TODAY);
    typed.placement.indoor[0].wall = "Mur intérieur";
    expect(applyMemory(typed, mem, TODAY).placement.indoor[0].wall).toBe("Mur intérieur");
    expect(headDefaults(mem)).not.toHaveProperty("room");
    // Le choix suivant remplace le précédent.
    done.placement.indoor[0].wall = "Au-dessus de la fenêtre";
    expect(rememberContent(mem, done, TODAY, "2026-09-13T15:00:00.000Z").indoor.wall).toBe("Au-dessus de la fenêtre");
  });
});

describe("rétrocompatibilité", () => {
  it("anciens réglages, anciens brouillons et anciennes soumissions se lisent et s'enregistrent sans migration", () => {
    const old = defaultSettings() as Partial<Settings>;
    delete old.standard;
    const s = normalizeSettings(old);
    expect(s.standard).toEqual(DEFAULT_STANDARD);
    expect(normalizeStandard({ lineIncludedFt: "abc" })).toEqual(DEFAULT_STANDARD);
    // Ancien brouillon : pas de couleur de cache-ligne, anciennes clés, nom « Unité 1 ».
    const c: QuoteContent = readyContent();
    c.placement.indoor[0].label = "Unité 1";
    delete (c.placement as { coverColor?: string }).coverColor;
    const payload = { content: { ...c, machine: { modelSlug: "exemple-modele", ahri: null, offList: true, offListIndoor: "INT-12", showCatalogWarranties: false, warrantyText: "", explanation: "" } }, internalNotes: "", contractorId: null };
    expect(parseQuoteInput(payload).ok).toBe(true);
    expect(headName(c.placement.indoor[0], 0)).toBe("Tête 1 · Salon");
    // Ancien formulaire de réglages : sans « standard » ni « contraintes ».
    const form = { company: s.company, texts: s.texts, defaults: { ...s.defaults, site: { access: "", presence: "" } }, choices: s.choices, templates: s.templates, pipedriveStages: s.pipedriveStages };
    const parsed = parseSettingsInput(form);
    expect(parsed.ok && parsed.data.standard).toBeUndefined();
    // Envoi toujours bloqué pour les mêmes raisons (rien d'ajouté aux conditions bloquantes).
    expect(sendBlockers(readyContent(), fullSettings(), TODAY, RATES, NO_CONTRACTOR).map((b) => b.id)).toEqual(["entrepreneur"]);
  });
});

describe("trouver la machine dans le catalogue", () => {
  it("cherche par marque, capacité et numéro AHRI ; badges officiels", async () => {
    const { searchMachines } = await import("../machines");
    const byText = searchMachines("daikin 12000");
    expect(byText.hits.length).toBeGreaterThan(0);
    expect(byText.hits.every((h) => h.brand.toLowerCase().includes("daikin") && h.capacityBtu !== null && h.capacityBtu >= 10_200 && h.capacityBtu <= 13_800)).toBe(true);
    const multi = searchMachines("3MXS24");
    expect(multi.hits[0]?.kind).toBe("multizone");
    const lv = searchMachines("", { kind: "murale", cap: "12k", lv: true, cc: true });
    expect(lv.total).toBeGreaterThan(0);
    expect(lv.hits.every((h) => h.maxLogisVertCents > 0 && h.coldClimate && h.kind === "murale")).toBe(true);
    expect(searchMachines("").hits).toEqual([]);
  }, 120_000);
});
