import { describe, expect, it } from "vitest";
import { hypothesesOf } from "../hypotheses";
import { recommendFromAnswers } from "../recommend";
import type { QuestionnaireAnswers } from "../answers";

/* Le parcours essentiel ne pose plus les emplacements ni le panneau électrique : ils viennent après le
   résultat. Tant qu'ils manquent, la fiche doit dire l'hypothèse prise, et le moteur doit garder le
   point à vérifier. La recommandation, elle, ne doit pas bouger : c'est ce qui justifie le report. */

/** Une maison répondue au complet, sauf l'affinage. */
const COURT: QuestionnaireAnswers = {
  postalCode: "H2X 1Y4",
  propertyType: "maison",
  area: "1500-2000",
  floors: "2",
  basement: "unheated",
  constructionPeriod: "1981_2000",
  insulation: "standard",
  windowShare: "standard",
  currentSystem: "electrique",
  zonesWanted: "par-etage",
  priority: ["economies"],
  budget: "6000-10000",
};

const ids = (a: QuestionnaireAnswers) => hypothesesOf(a).map((h) => h.id);
const top3 = (a: QuestionnaireAnswers) => recommendFromAnswers(a).results.map((r) => r.product.id);

describe("hypothesesOf", () => {
  it("parcours court : l'emplacement et le panneau sont dits comme des hypothèses", () => {
    expect(ids(COURT)).toEqual(["placements", "electricalPanel"]);
    const panneau = hypothesesOf(COURT).find((h) => h.id === "electricalPanel")!;
    expect(panneau.text).toContain("200 A");
    expect(panneau.text).toContain("À vérifier");
    expect(panneau.faisabilite).toBe(true);
  });

  it("une réponse « Je ne sais pas » compte comme une réponse manquante, avec sa valeur par défaut", () => {
    const flou = { ...COURT, constructionPeriod: "ne-sais-pas", insulation: "ne-sais-pas", windowShare: "ne-sais-pas", basement: "ne-sais-pas" };
    expect(ids(flou)).toEqual(["constructionPeriod", "insulation", "windowShare", "basement", "placements", "electricalPanel"]);
    // Chaque phrase nomme la valeur par défaut réellement appliquée (sizing.ts) et ce qu'une autre réponse changerait.
    for (const h of hypothesesOf(flou)) expect(h.text.length, h.id).toBeGreaterThan(40);
    expect(hypothesesOf(flou).find((h) => h.id === "constructionPeriod")!.text).toContain("1981 à 2000");
  });

  it("tout répondu : plus aucune hypothèse", () => {
    const complet = { ...COURT, placements: ["mur-haut"], electricalPanel: "200-plus" };
    expect(ids(complet)).toEqual([]);
  });
});

describe("le report des questions de faisabilité ne dégrade pas la recommandation", () => {
  it("même maison, avec ou sans les réponses d'affinage : les mêmes trois machines", () => {
    const avecPanneau = { ...COURT, electricalPanel: "200-plus" };
    const avecTout = { ...COURT, electricalPanel: "200-plus", placements: ["mur-haut"] };
    expect(top3(avecPanneau)).toEqual(top3(COURT));
    expect(top3(avecTout)).toEqual(top3(COURT));
  });

  it("« un seul endroit possible dehors » change bien la configuration : c'est pour ça qu'on la propose en affinage", () => {
    const unSeul = { ...COURT, placements: ["un-seul-exterieur"] };
    expect(recommendFromAnswers(COURT).summaryContext.architecture.kind).toBe("multi-single");
    expect(recommendFromAnswers(unSeul).summaryContext.architecture.kind).toBe("multi-zone");
  });

  it("sans réponse sur le panneau, le point à vérifier reste sur la fiche : rien n'est supposé en silence", () => {
    const textes = recommendFromAnswers(COURT).summaryContext.architecture.checks.map((c) => c.text);
    expect(textes.some((t) => t.includes("Intensité du panneau à vérifier"))).toBe(true);
    // Répondre « 200 A » lève le point.
    const avec200 = recommendFromAnswers({ ...COURT, electricalPanel: "200-plus" }).summaryContext.architecture.checks.map((c) => c.text);
    expect(avec200.some((t) => t.includes("Intensité du panneau à vérifier"))).toBe(false);
  });

  it("les hypothèses voyagent avec le résultat (lien partagé compris)", () => {
    expect(recommendFromAnswers(COURT).summaryContext.hypotheses.map((h) => h.id)).toEqual(["placements", "electricalPanel"]);
  });
});
