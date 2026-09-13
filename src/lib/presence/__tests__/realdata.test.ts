/* Données réelles du site (catalogue, liste LogisVert, normales, glossaire) : 60 jours préparés en automne et en hiver,
   aucun nombre hors source dans les légendes Facebook et Instagram ni sur les visuels ; LogisVert versé au client. */
import { describe, expect, it } from "vitest";
import { composeCaption } from "../captions";
import { getSiteCatalog } from "../catalog-site";
import { slidesText, unknownNumbers } from "../numbers";
import { planDays } from "../planner";
import { emptyData } from "./fixtures";

describe("données réelles du site", () => {
  it("chaque nombre généré existe dans sa source (60 jours, deux saisons)", { timeout: 240_000 }, () => {
    const cat = getSiteCatalog();
    expect(cat.models.length).toBeGreaterThan(500);
    expect(cat.cities.length).toBeGreaterThan(100);
    expect(cat.terms.length).toBeGreaterThan(10);
    let checked = 0;
    for (const start of ["2026-09-13T12:00:00Z", "2027-01-03T12:00:00Z"]) {
      const { created } = planDays(emptyData(), cat, new Date(start), 60);
      for (const p of created.filter((x) => x.series !== "question")) {
        const all = [composeCaption(p, "facebook"), composeCaption(p, "instagram"), slidesText([...p.slides, p.story]), p.footnote].join("\n");
        expect(unknownNumbers(all, p.source), `${p.id} : ${p.source.subject}`).toEqual([]);
        // Tout montant LogisVert cité rappelle qu'il est versé au client (le froid cite la liste sans montant).
        if (Object.keys(p.source.values).some((k) => /logisVertDollars$/i.test(k))) expect(p.text, p.id).toMatch(/au client par Hydro-Québec/);
        expect(p.source.page.startsWith("/")).toBe(true);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(80);
  });

  it("en hiver, le froid de la semaine choisit parmi les villes les plus froides", { timeout: 240_000 }, () => {
    const cat = getSiteCatalog();
    const cutoff = cat.cities.map((c) => c.design.t).sort((a, b) => a - b)[24];
    const { created } = planDays(emptyData(), cat, new Date("2027-01-03T12:00:00Z"), 28);
    const froid = created.filter((p) => p.series === "froid");
    expect(froid.length).toBe(4);
    for (const p of froid) expect(p.source.values.temperatureConceptionC as number).toBeLessThanOrEqual(cutoff);
  });
});
