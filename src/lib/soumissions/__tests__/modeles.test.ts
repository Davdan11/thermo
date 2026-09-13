/* Ne plus tout réécrire : modèles de soumission (sans client, sans chantier, sans photos ni dates), valeurs par
   défaut des champs qui changent rarement, et « Dupliquer pour un autre client ». Dossier temporaire, données fictives. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { emptyContent } from "../defaults";
import { createQuote } from "../quote";
import { deleteTemplateService, duplicateService, listTemplates, saveTemplateService, templateById } from "../service";
import { mutateSettings, mutateSoumissions, readSoumissions } from "../store";
import { applyTemplate, templateContentOf } from "../templates";
import { parseTemplateInput } from "../validate";
import { fullSettings, INSTALLER_ID, NOW, readyContent, TODAY } from "./fixtures";

const env = process.env;
let dir: string;
const BY = "proprio@exemple.ca";

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-modeles-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

function withPhotosAndDates() {
  const c = readyContent();
  c.placement.outdoor.photos = ["p_abcdefgh12"];
  c.placement.indoor[0].photos = ["p_abcdefgh13"];
  c.projectSummary = "Remplacement du climatiseur du salon au 10 rue Fictive.";
  c.site = { ...c.site, sameAsBilling: false, address: "10 rue Fictive", city: "Laval", postalCode: "H7A 1A1", yearBuilt: "1987", constraints: "Télétravail", access: "Accès par la ruelle", presence: "Un adulte" };
  return c;
}

describe("contenu d'un modèle", () => {
  it("sans client, chantier, photos, dates ni mot d'introduction ; machine, plan, prix, listes et déroulement gardés", () => {
    const t = templateContentOf(withPhotosAndDates());
    expect(Object.values(t.client).every((v) => v === "")).toBe(true);
    expect(t.site).toMatchObject({ sameAsBilling: true, address: "", city: "", yearBuilt: "", constraints: "", access: "Accès par la ruelle", presence: "Un adulte" });
    expect(t.placement.outdoor.photos).toEqual([]);
    expect(t.placement.indoor[0].photos).toEqual([]);
    expect(t.placement.indoor[0].room).toBe("Salon");
    expect(t.schedule).toMatchObject({ mode: "", date: "", duration: "Une journée", arrival: "Entre 8 h et 9 h" });
    expect(t.projectSummary).toBe("");
    expect(t.lines.map((l) => l.label)).toEqual(["Installation murale complète", "Support au sol"]);
    expect(t.machine?.name).toBe("Série Test 12");
  });

  it("« Partir d'un modèle » garde le client, le chantier, les dates et la validité en cours", () => {
    const cur = emptyContent(fullSettings(), TODAY);
    cur.client.firstName = "Robin";
    cur.site.city = "Terrebonne";
    cur.schedule = { ...cur.schedule, mode: "date", date: "2026-10-20" };
    const out = applyTemplate(cur, templateContentOf(readyContent()));
    expect(out.client.firstName).toBe("Robin");
    expect(out.site.city).toBe("Terrebonne");
    expect(out.schedule).toMatchObject({ mode: "date", date: "2026-10-20", duration: "Une journée" });
    expect(out.validUntil).toBe(cur.validUntil);
    expect(out.lines).toHaveLength(2);
    expect(out.machine?.outdoorModel).toBe("EXT-12");
  });
});

describe("modèles dans le magasin des soumissions", () => {
  it("enregistrer, lister, reprendre ; même nom : mis à jour ; supprimer", async () => {
    const input = parseTemplateInput({ name: "Murale standard", content: { ...withPhotosAndDates(), machine: null }, contractorId: INSTALLER_ID });
    expect(input.ok).toBe(true);
    if (!input.ok) return;
    const r = await saveTemplateService(input.data, BY, NOW);
    expect(r).toMatchObject({ ok: true, replaced: false });
    const [row] = await listTemplates();
    expect(row).toMatchObject({ name: "Murale standard", summary: "Sans machine · 1 unité intérieure · 2 lignes de prix" });
    const t = await templateById(row.id);
    expect(t?.contractorId).toBe(INSTALLER_ID);
    expect(t?.content.client.email).toBe("");
    expect(t?.content.placement.outdoor.photos).toEqual([]);
    expect(JSON.stringify(t)).not.toContain("camille@exemple.ca");

    const again = parseTemplateInput({ name: "murale STANDARD", content: { ...readyContent(), machine: null, lines: [] } });
    if (!again.ok) throw new Error(again.error);
    expect(await saveTemplateService(again.data, BY, NOW)).toMatchObject({ ok: true, replaced: true, id: row.id });
    expect(await listTemplates()).toHaveLength(1);
    expect((await templateById(row.id))?.content.lines).toEqual([]);

    expect(parseTemplateInput({ name: " ", content: { ...readyContent(), machine: null } }).ok).toBe(false);
    expect(await deleteTemplateService(row.id)).toBe(true);
    expect(await listTemplates()).toEqual([]);
    expect(await templateById("../x")).toBeNull();
  });
});

describe("dupliquer", () => {
  async function original(): Promise<string> {
    await mutateSettings((s) => {
      Object.assign(s, fullSettings());
      return { result: null, changed: true };
    });
    return mutateSoumissions((d) => ({ result: createQuote(d, withPhotosAndDates(), BY, NOW, { clientId: "c_0123456789ab", contractorId: INSTALLER_ID }).id, changed: true }));
  }

  it("pour un autre client : coordonnées et chantier vidés, fiche déliée ; machine, plan, prix et entrepreneur repris", async () => {
    const id = await original();
    const r = await duplicateService(id, BY, { forOtherClient: true }, NOW);
    expect(r.ok).toBe(true);
    const data = await readSoumissions();
    const copy = data.quotes.find((q) => q.id !== id)!;
    const c = copy.versions[0].content;
    expect(copy.number).toBe("S-2026-0002");
    expect(copy.clientId).toBeNull();
    expect(copy.versions[0].contractorId).toBe(INSTALLER_ID);
    expect(Object.values(c.client).every((v) => v === "")).toBe(true);
    expect(c.site).toMatchObject({ sameAsBilling: true, address: "", yearBuilt: "" });
    expect(c.placement.outdoor.photos).toEqual([]);
    expect(c.projectSummary).toBe("");
    expect(c.lines).toHaveLength(2);
    expect(c.machine?.name).toBe("Série Test 12");
    expect(copy.events[0].detail).toContain("pour un autre client");
  });

  it("copie simple : même client et même fiche, sans photos", async () => {
    const id = await original();
    await duplicateService(id, BY, {}, NOW);
    const copy = (await readSoumissions()).quotes.find((q) => q.id !== id)!;
    expect(copy.clientId).toBe("c_0123456789ab");
    expect(copy.versions[0].content.client.email).toBe("camille@exemple.ca");
    expect(copy.versions[0].content.placement.indoor[0].photos).toEqual([]);
  });
});

describe("valeurs par défaut des champs qui changent rarement", () => {
  it("accès, présence et déroulement repris dans chaque nouvelle soumission", () => {
    const s = fullSettings();
    s.defaults.site = { access: "Stationnement dans l’entrée", presence: "Un adulte" };
    s.defaults.schedule = { duration: "Une journée", arrival: "Entre 8 h et 9 h", windowText: "Date confirmée à la réception de l’équipement" };
    const c = emptyContent(s, TODAY);
    expect(c.site).toMatchObject({ access: "Stationnement dans l’entrée", presence: "Un adulte" });
    expect(c.schedule).toMatchObject({ duration: "Une journée", arrival: "Entre 8 h et 9 h", windowText: "Date confirmée à la réception de l’équipement", mode: "" });
    expect(c.inclusions.map((i) => i.label)).toEqual(s.templates.inclusions);
  });
});
