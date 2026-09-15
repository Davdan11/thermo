import { describe, expect, it } from "vitest";
import { JOURNAL_VISIBILITE, visibiliteEtat } from "@/lib/seo/visibilite";

describe("visibilité (gestion › référencement)", () => {
  it("les comptes viennent du catalogue et restent cohérents", () => {
    const v = visibiliteEtat();
    expect(v.fiches).toBeGreaterThan(0);
    for (const n of [v.avecNom, v.avecTemperature, v.adressesEnrichies, v.indexables]) {
      expect(n).toBeGreaterThan(0);
      expect(n).toBeLessThanOrEqual(v.fiches);
    }
  });

  it("journal : dates valides, du plus récent au plus ancien", () => {
    const dates = JOURNAL_VISIBILITE.map((e) => e.date);
    for (const d of dates) expect(Number.isNaN(Date.parse(`${d}T12:00:00Z`))).toBe(false);
    expect([...dates].sort().reverse()).toEqual(dates);
    for (const e of JOURNAL_VISIBILITE) expect(e.titre.length && e.detail.length).toBeGreaterThan(0);
  });
});
