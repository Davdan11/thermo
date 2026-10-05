import { describe, expect, it } from "vitest";
import { AREAS, visitAreasLabel } from "../booking";

/* Zone de service : conseil à distance partout au Québec ; visite sur place seulement
   dans les secteurs desservis, tirés de AREAS (jamais une liste recopiée). */

describe("Secteurs de visite sur place", () => {
  it("nomme chaque secteur où la visite est offerte, et aucun autre", () => {
    const label = visitAreasLabel();
    for (const a of AREAS) {
      if (a.visit) expect(label).toContain(a.label);
      else expect(label).not.toContain(a.label);
    }
  });

  it("se lit en français : virgules, puis « et » avant le dernier", () => {
    const names = AREAS.filter((a) => a.visit).map((a) => a.label);
    if (names.length > 1) expect(visitAreasLabel()).toBe(`${names.slice(0, -1).join(", ")} et ${names.at(-1)}`);
  });
});
