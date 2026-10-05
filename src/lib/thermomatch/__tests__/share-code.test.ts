import { describe, expect, it } from "vitest";
import { decodeShareCode, encodeShareCode } from "../share-code";
import { answersToRequest, architectureInputOf, type QuestionnaireAnswers } from "../answers";
import { decideArchitecture } from "../architecture";
import { estimateLoad } from "../sizing";

/* Lien partagé : les nouvelles réponses voyagent, le code reste court, les anciens liens restent lisibles. */

const NOUVEAU: QuestionnaireAnswers = {
  postalCode: "H2X 1Y4",
  propertyType: "maison",
  area: "1500-2000",
  floors: "3",
  constructionPeriod: "1981_2000",
  insulation: "standard",
  windowShare: "standard",
  basement: "heated_excluded",
  currentSystem: "electrique",
  zonesWanted: "par-etage",
  layout: "mixte",
  placements: ["mur-haut", "un-seul-exterieur"],
  electricalPanel: "100-moins",
  priority: ["economies"],
  budget: "10000-15000",
  financing: "non",
};

const decision = (a: QuestionnaireAnswers) => {
  const { req } = answersToRequest(a);
  return decideArchitecture(architectureInputOf(a, req), estimateLoad(req));
};

describe("code de partage", () => {
  it("les réponses d'architecture font l'aller-retour", () => {
    expect(decodeShareCode(encodeShareCode(NOUVEAU))).toEqual(NOUVEAU);
  });

  it("le pire cas reste sous la limite du code", () => {
    const pire: QuestionnaireAnswers = {
      ...NOUVEAU,
      currentSystem: "fournaise-mazout",
      constructionPeriod: "ne-sais-pas",
      insulation: "high_performance",
      ducts: "ne-sais-pas",
      zonesWanted: "ne-sais-pas",
      layout: "cloisonne",
      placements: ["mur-haut", "plancher", "plafond", "un-seul-exterieur", "ne-sais-pas"],
      electricalPanel: "ne-sais-pas",
      priority: ["economies", "grand-froid", "silence", "prix", "qualite"],
      budget: "ne-sais-pas",
      financing: "peut-etre",
      heatPumpType: "ne-sais-pas",
    };
    const code = encodeShareCode(pire);
    expect(code.length).toBeLessThan(1200);
    expect(decodeShareCode(code)).toEqual(pire);
  });

  it("un ancien lien (type de thermopompe choisi, ni conduits ni espaces) reste lisible : règle L", () => {
    const ancien = { postalCode: "H2X1A1", propertyType: "maison", area: "1500-2000", floors: "2", currentSystem: "electrique", heatPumpType: "multizone", priority: ["economies"], budget: "5000-7000", financing: "non" };
    const code = Buffer.from(JSON.stringify(ancien)).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    const a = decodeShareCode(code);
    expect(a).toEqual(ancien);
    expect(decision(a!)).toMatchObject({ rule: "L", kind: "multi-zone", heads: 2 });
    expect(decision(NOUVEAU)).toMatchObject({ rule: "A4", kind: "multi-zone", heads: 3 });
  });
});
