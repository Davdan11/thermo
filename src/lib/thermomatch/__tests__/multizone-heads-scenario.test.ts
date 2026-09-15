import { describe, expect, it } from "vitest";
import { recommendFromAnswers } from "@/lib/thermomatch/recommend";
import { multizoneHeads } from "@/lib/data/multizone-heads";

/* Une multizone n'est jamais proposée pour plus de têtes que son fabricant n'en accepte.
   Maison de l'audit sans conduits, cloisonnée, un seul emplacement dehors : 3 têtes. */

const MAISON_3_TETES = {
  postalCode: "H2X 1Y4",
  propertyType: "maison",
  area: "1500-2000",
  floors: "3",
  constructionPeriod: "2001_2015",
  insulation: "good",
  windowShare: "standard",
  basement: "unheated",
  currentSystem: "electrique",
  zonesWanted: "par-etage",
  layout: "cloisonne",
  placements: ["mur-haut", "un-seul-exterieur"],
  electricalPanel: "200-plus",
  priority: "grand-froid",
  budget: "10000-15000",
  financing: "non",
};

describe("ThermoMatch : têtes d'une multizone", () => {
  it("aucune recommandation n'accepte moins de têtes que le plan n'en demande", () => {
    const out = recommendFromAnswers(MAISON_3_TETES);
    const decision = out.summaryContext.architecture;
    expect(decision?.kind).toBe("multi-zone");
    expect(decision?.heads).toBe(3);
    expect(out.results.length).toBeGreaterThan(0);

    const trop_petites = out.results
      .map((r) => ({ modele: r.product.outdoorModel, brand: r.product.brand, heads: multizoneHeads(r.product.brand, r.product.outdoorModel) }))
      .filter((x) => x.heads && (x.heads.maxIndoorUnits < 3 || (x.heads.minIndoorUnits ?? 1) > 3))
      .map((x) => `${x.brand} ${x.modele} (${x.heads?.maxIndoorUnits} têtes)`);
    expect(trop_petites).toEqual([]);

    // La CU-2Z18ABUC n'accepte que deux têtes : elle sortait pourtant en tête avant ce garde-fou.
    expect(out.results.map((r) => r.product.outdoorModel)).not.toContain("CU-2Z18ABUC");
    // Le nombre de têtes publié suit la recommandation ; sinon la carte dit qu'il n'est pas publié.
    for (const r of out.results) {
      const max = r.product.maxIndoorUnits;
      if (max != null) expect(max).toBeGreaterThanOrEqual(3);
    }
  }, 60_000);
});
