/* ThermoMatch → soumission : la machine choisie est reprise telle que le catalogue et la liste officielle LogisVert la
   donnent ; aucun champ inventé si une donnée manque ; l'estimation de ThermoMatch n'est jamais reprise. */
import { describe, expect, it, vi } from "vitest";
import { emptyContent, newIndoor } from "@/lib/soumissions/defaults";
import { fullSettings } from "@/lib/soumissions/__tests__/fixtures";
import type { MachineInfo, PairingInfo } from "@/lib/soumissions/types";
import { entry } from "../../crm/__tests__/fixtures";
import { applyMachinePrefill, machineFromChoice, thermoMatchChoices, type ResolveMachine, type ThermoMatchDeps } from "../thermomatch";

const PAIR: PairingInfo = { ahri: "210000001", indoorDescription: "INT-ALPHA-12", logisVertCents: 123_400, h5Btu: 11_000, h17Btu: 12_500, nominalBtu: 12_000, coolingBtu: 12_000, seer2: 21.5, hspf2: 10.2, cop5: 1.9, coldClimate: true };

function machine(pairing: PairingInfo | null): MachineInfo {
  return { modelSlug: "slug-m-alpha", brandId: "alpha", brand: "Alpha", name: "Série A 12", outdoorModel: "AOU-12", systemType: "wall-single", systemTypeLabel: "Murale", imageUrl: null, refrigerant: "R-32", noiseOutdoorDbA: null, noiseIndoorMinDbA: null, noiseIndoorMaxDbA: null, pairing, offList: false, offListIndoor: "", catalogWarranties: [], showCatalogWarranties: false, warrantyText: "", explanation: "", listDate: "2026-09-01" };
}

/** Catalogue simulé : AOU-12 a le jumelage officiel 210000001 ; les autres n'en ont pas. */
const resolve = vi.fn<ResolveMachine>(async (c) => {
  if (c.modelSlug !== "slug-m-alpha" && c.modelSlug !== "slug-m-beta") return { ok: false, error: "Modèle introuvable dans le catalogue." };
  if (c.ahri && c.ahri !== PAIR.ahri) return { ok: false, error: `Le jumelage AHRI ${c.ahri} n’est pas dans la liste officielle pour ce modèle.` };
  return { ok: true, machine: machine(c.ahri ? PAIR : null) };
});

const deps: ThermoMatchDeps = {
  recompute: () => [
    { modelId: "m-alpha", brand: "Alpha", series: "Série A", outdoorModel: "AOU-12", ahri: "210000001" },
    { modelId: "m-beta", brand: "Bêta", series: "Série B", outdoorModel: "BOU-18", ahri: null },
    { modelId: "m-gone", brand: "Gamma", series: "", outdoorModel: "GOU-24", ahri: "210000003" },
  ],
  model: (id) => (id === "m-gone" ? null : { slug: `slug-${id}`, label: `Libellé ${id}` }),
};

const tmLead = (choices: string[]) => entry("thermomatch", new Date("2026-09-15T14:00:00Z"), { firstName: "Marc", email: "marc@exemple.ca", phone: "450 555-0177", choices, code: "eyJwb3N0YWxDb2RlIjoiSDdOIn0" });
const SENT = ["1. Alpha Série A (AOU-12)", "2. Bêta Série B (BOU-18)", "3. Gamma (GOU-24)"];

describe("choix ThermoMatch", () => {
  it("les trois recommandations, vérifiées contre ce qui a été envoyé au client", () => {
    expect(thermoMatchChoices(tmLead(SENT), deps)).toEqual([
      { rank: 1, label: "Alpha Série A (AOU-12)", slug: "slug-m-alpha", ahri: "210000001", changed: false },
      { rank: 2, label: "Bêta Série B (BOU-18)", slug: "slug-m-beta", ahri: null, changed: false },
      { rank: 3, label: "Gamma (GOU-24)", slug: null, ahri: null, changed: false },
    ]);
  });

  it("catalogue changé depuis l'envoi : rien n'est pré-rempli pour ce choix", () => {
    const [c1] = thermoMatchChoices(tmLead(["1. Alpha Série A (AOU-99)"]), deps);
    expect(c1).toMatchObject({ slug: null, ahri: null, changed: true });
  });

  it("sans libellé consigné, rien ne prouve ce que le client a vu : aucun pré-remplissage", () => {
    const choices = thermoMatchChoices(tmLead([]), deps);
    expect(choices).toHaveLength(3);
    expect(choices.every((c) => c.slug === null && c.ahri === null)).toBe(true);
  });

  it("demande de soumission avec le modèle choisi dans ThermoMatch : le modèle, sans AHRI", () => {
    const e = entry("soumission", new Date("2026-09-15T14:00:00Z"), { firstName: "Julie", modeleSelectionne: "Alpha — m-alpha" });
    expect(thermoMatchChoices(e, deps)).toEqual([{ rank: 1, label: "Libellé m-alpha", slug: "slug-m-alpha", ahri: null, changed: false }]);
    expect(thermoMatchChoices(entry("soumission", new Date(), { modeleSelectionne: "Mitsubishi" }), deps)).toEqual([]);
    expect(thermoMatchChoices(entry("contact", new Date(), { message: "Alpha — m-alpha" }), deps)).toEqual([]);
  });
});

describe("machine et soumission pré-remplie", () => {
  it("jumelage officiel : marque, modèles, AHRI, capacités, efficacités et montant LogisVert de la liste officielle", async () => {
    const [c1] = thermoMatchChoices(tmLead(SENT), deps);
    const pre = await machineFromChoice(c1, resolve);
    expect(pre.notes).toEqual([]);
    expect(pre.machine?.pairing).toEqual(PAIR);
    const base = emptyContent(fullSettings(), "2026-09-16");
    const c = applyMachinePrefill(base, pre.machine!);
    expect(c.machine).toBe(pre.machine);
    expect(c.logisvert).toEqual({ mode: "client" });
    expect(c.machine?.pairing?.logisVertCents).toBe(123_400);
    expect(c.placement.indoor[0].model).toBe("INT-ALPHA-12");
    // Rien d'autre n'est deviné : capacité de l'unité, prix, date restent vides.
    expect(c.placement.indoor[0].capacityBtu).toBeNull();
    expect(c.lines).toEqual(base.lines);
    expect(c.schedule).toEqual(base.schedule);
    expect(c.machine?.explanation).toBe("");
  });

  it("AHRI inconnu ou retiré de la liste : jumelage laissé vide, aucune aide LogisVert, note au propriétaire", async () => {
    const [, c2] = thermoMatchChoices(tmLead(SENT), deps);
    const pre = await machineFromChoice(c2, resolve);
    expect(pre.machine?.pairing).toBeNull();
    expect(pre.notes[0]).toMatch(/Jumelage AHRI non précisé/);
    const c = applyMachinePrefill(emptyContent(fullSettings(), "2026-09-16"), pre.machine!);
    expect(c.logisvert).toEqual({ mode: "aucune" });
    expect(c.placement.indoor[0].model).toBe("");

    resolve.mockClear();
    const retired = await machineFromChoice({ rank: 1, label: "x", slug: "slug-m-alpha", ahri: "299999999", changed: false }, resolve);
    expect(resolve.mock.calls.map(([x]) => x.ahri)).toEqual(["299999999", null]);
    expect(retired.machine?.pairing).toBeNull();
    expect(retired.notes[0]).toMatch(/n’est plus dans la liste officielle/);
  });

  it("modèle absent du catalogue : aucune machine, le catalogue n'est même pas consulté", async () => {
    resolve.mockClear();
    const [, , c3] = thermoMatchChoices(tmLead(SENT), deps);
    const pre = await machineFromChoice(c3, resolve);
    expect(pre.machine).toBeNull();
    expect(resolve).not.toHaveBeenCalled();
  });

  it("plusieurs unités intérieures dans la description, ou déjà saisies : rien n'est posé dans le plan", () => {
    const multi = applyMachinePrefill(emptyContent(fullSettings(), "2026-09-16"), machine({ ...PAIR, indoorDescription: "INT-09 + INT-12" }));
    expect(multi.placement.indoor[0].model).toBe("");
    const two = emptyContent(fullSettings(), "2026-09-16");
    two.placement.indoor = [newIndoor(1), newIndoor(2)];
    expect(applyMachinePrefill(two, machine(PAIR)).placement.indoor.map((u) => u.model)).toEqual(["", ""]);
  });
});
