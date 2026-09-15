import { describe, expect, it } from "vitest";
import { STEPS, pruneHidden, visibleSteps, type Answers, type StepOption } from "../steps";

/* Le parcours « architecture d'abord » : de 14 à 17 questions selon les réponses.
   Une étape ne dépend que des étapes placées avant elle : changer une réponse ne change
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
  placements: ["mur-haut"],
  electricalPanel: "200-plus",
  priority: ["economies"],
  budget: "ne-sais-pas",
  financing: "non",
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

const ids = (a: Answers) => visibleSteps(a).map((s) => s.id);
const optionsOf = (options: StepOption[] | ((a: Answers) => StepOption[]) | undefined, a: Answers) => (typeof options === "function" ? options(a) : (options ?? []));

describe("visibleSteps", () => {
  it("de 14 à 17 étapes, sur toutes les combinaisons", () => {
    for (const a of combos()) {
      const n = visibleSteps(a).length;
      expect(n, JSON.stringify(a)).toBeGreaterThanOrEqual(14);
      expect(n, JSON.stringify(a)).toBeLessThanOrEqual(17);
    }
  });

  it("changer une réponse ne change jamais la visibilité des étapes précédentes", () => {
    for (const a of combos()) {
      const vis = visibleSteps(a);
      vis.forEach((s, i) => {
        const before = vis.slice(0, i + 1).map((x) => x.id);
        for (const o of optionsOf(s.options, a)) {
          const changed = { ...a, [s.id]: s.type === "multi" ? [o.value] : o.value };
          expect(ids(changed).slice(0, i + 1)).toEqual(before);
        }
      });
    }
  });

  it("le type de thermopompe n'est plus demandé : le moteur décide", () => {
    expect(STEPS.map((s) => s.id)).not.toContain("heatPumpType");
    expect(STEPS.map((s) => s.id)).toEqual([
      "postalCode", "propertyType", "area", "floors", "constructionPeriod", "insulation", "windowShare", "basement",
      "currentSystem", "ducts", "zonesWanted", "layout", "placements", "electricalPanel", "priority", "budget", "financing",
    ]);
  });

  it("condo : ni sous-sol ni conduits ; fournaise avec conduits complets : ni espaces ni emplacements", () => {
    const condo = ids({ ...BASE, propertyType: "condo", currentSystem: "electrique" });
    expect(condo).not.toContain("basement");
    expect(condo).not.toContain("ducts");
    expect(condo).toContain("zonesWanted");
    const fournaise = ids({ ...BASE, propertyType: "maison", currentSystem: "fournaise-gaz", ducts: "complets" });
    expect(fournaise).toContain("ducts");
    for (const id of ["zonesWanted", "layout", "placements"]) expect(fournaise).not.toContain(id);
    // Fournaise, conduits inconnus : la centrale est probable, on ne demande pas les espaces.
    expect(ids({ ...BASE, propertyType: "maison", currentSystem: "fournaise-gaz", ducts: "ne-sais-pas" })).not.toContain("zonesWanted");
    // Plinthes : pas de conduits à réutiliser, on ne les demande pas.
    expect(ids({ ...BASE, propertyType: "maison", currentSystem: "electrique" })).not.toContain("ducts");
    // Pièce par pièce : la disposition ne change rien, on ne la demande pas.
    expect(ids({ ...BASE, propertyType: "maison", currentSystem: "electrique", zonesWanted: "pieces" })).not.toContain("layout");
  });

  it("une réponse restée d'une étape masquée ne compte pas", () => {
    // Des conduits complets déclarés, puis des plinthes : la question des conduits disparaît, celle des espaces revient.
    expect(ids({ ...BASE, propertyType: "maison", currentSystem: "electrique", ducts: "complets" })).toContain("zonesWanted");
  });
});

describe("pruneHidden", () => {
  it("retire les réponses des étapes masquées, garde les clés des anciens liens", () => {
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

describe("sous-titre du code postal", () => {
  it("le froid de la région sert à la relève, pas au calcul à −15 °C", () => {
    const s = STEPS[0].subtitle ?? "";
    expect(s).toContain("froid de référence");
    expect(s).toContain("il ne change pas le calcul à −15 °C");
    expect(s).toContain("estimer la relève nécessaire les jours les plus froids");
    expect(s).not.toContain("ne change pas la machine");
  });
});
