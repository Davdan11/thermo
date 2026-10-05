import { describe, expect, it } from "vitest";
import { SCREENS, STEPS, affinageSteps, essentielComplete, pruneHidden, visibleScreens, visibleSteps, type Answers, type StepOption } from "../steps";
import { SCREEN_IDS } from "@/lib/thermomatch/etapes";

/* Le parcours en deux temps :
   - l'essentiel, cinq ou six écrans, seulement ce qui change la recommandation ;
   - l'affinage, après le résultat : emplacements, panneau, financement.
   Une question ne dépend que des questions placées avant elle : changer une réponse ne change
   jamais ce qui a déjà été demandé. */

const BASE: Answers = {
  postalCode: "H2X 1Y4",
  area: "1500-2000",
  floors: "3",
  constructionPeriod: "1981_2000",
  insulation: "standard",
  windowShare: "standard",
  basement: "unheated",
  layout: "mixte",
  priority: ["economies"],
  budget: "ne-sais-pas",
};

function combos(): Answers[] {
  const out: Answers[] = [];
  for (const propertyType of ["maison", "condo", "duplex", "triplex"])
    for (const currentSystem of ["electrique", "thermopompe", "fournaise-gaz", "fournaise-mazout", "chaudiere", "autre"])
      for (const ducts of ["complets", "partiels", "aucun", "ne-sais-pas", undefined])
        for (const zonesWanted of ["principal", "par-etage", "pieces", "ne-sais-pas", undefined])
          out.push({ ...BASE, propertyType, currentSystem, ducts, zonesWanted });
  return out;
}

const screenIds = (a: Answers) => visibleScreens(a, "essentiel").map((s) => s.id);
const stepIds = (a: Answers) => visibleSteps(a).map((s) => s.id);
const optionsOf = (options: StepOption[] | ((a: Answers) => StepOption[]) | undefined, a: Answers) => (typeof options === "function" ? options(a) : (options ?? []));

describe("le parcours essentiel", () => {
  it("tient en cinq ou six écrans, sur toutes les combinaisons", () => {
    for (const a of combos()) {
      const n = visibleScreens(a, "essentiel").length;
      expect(n, JSON.stringify(a)).toBeGreaterThanOrEqual(5);
      expect(n, JSON.stringify(a)).toBeLessThanOrEqual(6);
    }
  });

  it("ne pose jamais plus de quatorze questions avant le résultat, contre dix-sept avant", () => {
    for (const a of combos()) {
      const n = visibleSteps(a).filter((s) => s.phase === "essentiel").length;
      expect(n, JSON.stringify(a)).toBeLessThanOrEqual(14);
    }
  });

  it("l'ordre des écrans est celui du compteur d'étapes", () => {
    expect(SCREENS.filter((s) => s.phase === "essentiel").map((s) => s.id)).toEqual([...SCREEN_IDS]);
  });

  it("garde les questions qui changent le résultat, dans cet ordre", () => {
    const essentiel = STEPS.filter((s) => s.phase === "essentiel").map((s) => s.id);
    expect(essentiel).toEqual([
      "postalCode", "propertyType", "area", "floors", "basement", "constructionPeriod", "insulation", "windowShare",
      "currentSystem", "ducts", "zonesWanted", "layout", "priority", "budget",
    ]);
  });

  it("repousse après le résultat ce qui ne sert qu'à la faisabilité et au devis", () => {
    // Mesuré : le panneau et le financement ne changent la recommandation dans aucune maison simulée ;
    // les emplacements, dans 15 % (un seul endroit possible dehors impose une multizone).
    expect(STEPS.filter((s) => s.phase === "affinage").map((s) => s.id)).toEqual(["placements", "electricalPanel", "financing"]);
    for (const s of STEPS.filter((x) => x.phase === "affinage")) expect(s.optional, s.id).toBe(true);
  });

  it("le type de thermopompe n'est plus demandé : le moteur décide", () => {
    expect(STEPS.map((s) => s.id)).not.toContain("heatPumpType");
  });

  it("changer une réponse ne change jamais les écrans déjà passés", () => {
    for (const a of combos()) {
      const screens = visibleScreens(a, "essentiel");
      screens.forEach((sc, i) => {
        const before = screens.slice(0, i + 1).map((x) => x.id);
        for (const step of sc.steps) {
          for (const o of optionsOf(step.options, a)) {
            const changed = { ...a, [step.id]: step.type === "multi" ? [o.value] : o.value };
            expect(screenIds(changed).slice(0, i + 1)).toEqual(before);
          }
        }
      });
    }
  });

  it("condo : ni sous-sol ni conduits ; fournaise avec conduits complets : ni espaces ni emplacements", () => {
    const condo = stepIds({ ...BASE, propertyType: "condo", currentSystem: "electrique" });
    expect(condo).not.toContain("basement");
    expect(condo).not.toContain("ducts");
    expect(condo).toContain("zonesWanted");

    const fournaise = { ...BASE, propertyType: "maison", currentSystem: "fournaise-gaz", ducts: "complets" };
    expect(stepIds(fournaise)).toContain("ducts");
    for (const id of ["zonesWanted", "layout", "placements"]) expect(stepIds(fournaise)).not.toContain(id);
    // L'écran « espaces » disparaît : le parcours tombe à cinq écrans.
    expect(screenIds(fournaise)).not.toContain("espaces");

    // Fournaise, conduits inconnus : la centrale est probable, on ne demande pas les espaces.
    expect(stepIds({ ...BASE, propertyType: "maison", currentSystem: "fournaise-gaz", ducts: "ne-sais-pas" })).not.toContain("zonesWanted");
    // Plinthes : pas de conduits à réutiliser, on ne les demande pas.
    expect(stepIds({ ...BASE, propertyType: "maison", currentSystem: "electrique" })).not.toContain("ducts");
  });

  it("la disposition des pièces n'est demandée que quand le client dit « Conseillez-moi »", () => {
    const base = { ...BASE, propertyType: "maison", currentSystem: "electrique" };
    expect(stepIds({ ...base, zonesWanted: "ne-sais-pas" })).toContain("layout");
    for (const z of ["principal", "par-etage", "pieces"]) expect(stepIds({ ...base, zonesWanted: z }), z).not.toContain("layout");
  });

  it("les conduits ne sont demandés qu'une fois le système actuel connu", () => {
    expect(stepIds({ ...BASE, propertyType: "maison", currentSystem: undefined })).not.toContain("ducts");
  });

  it("une réponse restée d'une question masquée ne compte pas", () => {
    // Des conduits complets déclarés, puis des plinthes : la question des conduits disparaît, celle des espaces revient.
    expect(stepIds({ ...BASE, propertyType: "maison", currentSystem: "electrique", ducts: "complets" })).toContain("zonesWanted");
  });
});

describe("essentielComplete", () => {
  const maison: Answers = { ...BASE, propertyType: "maison", currentSystem: "electrique", zonesWanted: "principal" };
  it("est vrai sans aucune réponse d'affinage : le résultat n'attend pas le panneau électrique", () => {
    expect(essentielComplete(maison)).toBe(true);
    expect(affinageSteps(maison).map((s) => s.id)).toEqual(["placements", "electricalPanel", "financing"]);
  });
  it("est faux tant qu'une question essentielle visible n'a pas de réponse", () => {
    const sansBudget = { ...maison, budget: undefined };
    expect(essentielComplete(sansBudget)).toBe(false);
  });
});

describe("pruneHidden", () => {
  it("retire les réponses des questions masquées, garde les clés des anciens liens", () => {
    const a = pruneHidden<Answers>({ ...BASE, propertyType: "condo", currentSystem: "electrique", ducts: "complets", zonesWanted: "par-etage", heatPumpType: "centrale" });
    expect(a.ducts).toBeUndefined();
    expect(a.basement).toBeUndefined();
    expect(a.zonesWanted).toBe("par-etage");
    expect(a.heatPumpType).toBe("centrale");
  });
});

describe("tranches de budget selon l'architecture pressentie", () => {
  const budget = STEPS.find((s) => s.id === "budget")!;
  const values = (a: Answers) => optionsOf(budget.options, a).map((o) => o.value);
  it("une murale : les tranches d'une murale ; une centrale ou plusieurs têtes : les tranches d'un projet complet", () => {
    expect(values({ ...BASE, propertyType: "maison", currentSystem: "electrique", zonesWanted: "principal" })).toContain("<3000");
    expect(values({ ...BASE, propertyType: "maison", currentSystem: "fournaise-gaz" })).toContain("<6000");
    expect(values({ ...BASE, propertyType: "maison", currentSystem: "electrique", zonesWanted: "par-etage" })).toContain("<6000");
    // Ancienne session : le type choisi à l'époque.
    expect(values({ ...BASE, propertyType: "maison", currentSystem: "electrique", heatPumpType: "centrale" })).toContain("<6000");
  });
});

describe("sous-titre du premier écran", () => {
  it("le froid de la région sert à la relève, pas au calcul à −15 °C", () => {
    const s = SCREENS[0].subtitle ?? "";
    expect(s).toContain("froid de référence");
    expect(s).toContain("il ne change pas le calcul à −15 °C");
    expect(s).toContain("estimer la relève nécessaire les jours les plus froids");
    expect(s).not.toContain("ne change pas la machine");
  });
});
