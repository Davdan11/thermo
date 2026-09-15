import { describe, expect, it } from "vitest";
import { MULTIZONE_HEADS, multizoneHeads } from "../multizone-heads";
import { isOfficialSource } from "../official-sources";
import { registry } from "../registry";

/* Règles de scripts/fiches/REGLES.md : rien d'inventé, une source par relevé, une citation qui porte le chiffre. */

describe("têtes des multizones", () => {
  it("chaque relevé est complet, sourcé et cité", () => {
    const bad: string[] = [];
    for (const e of MULTIZONE_HEADS) {
      const p: string[] = [];
      if (!Number.isInteger(e.maxIndoorUnits) || e.maxIndoorUnits < 1 || e.maxIndoorUnits > 20) p.push("maximum invalide");
      if (e.minIndoorUnits !== undefined && (!Number.isInteger(e.minIndoorUnits) || e.minIndoorUnits < 1 || e.minIndoorUnits > e.maxIndoorUnits)) p.push("minimum invalide");
      let url: URL | null = null;
      try {
        url = new URL(e.sourceFile);
        if (url.protocol !== "https:") p.push("source pas https");
      } catch {
        p.push("source invalide");
      }
      const quote = String(e.quote ?? "");
      if (!quote || quote.length > 160) p.push("citation absente ou trop longue");
      if (quote.trim().split(/\s+/).length > 15) p.push("citation de plus de 15 mots");
      // Le chiffre doit être dans la citation, sauf si une note explique (maximum écrit en toutes lettres).
      if (!new RegExp(`(^|\\D)${e.maxIndoorUnits}(\\D|$)`).test(quote) && !e.note) p.push("citation sans le maximum");
      if (!["modele", "serie"].includes(e.confidence)) p.push("confidence invalide");
      if (e.confidence === "serie" && !e.note) p.push("« serie » sans note");
      if (url && e.sourceType === "officiel" && !isOfficialSource(url)) p.push(`« officiel » hors de la liste (${url.hostname})`);
      if (e.sourceType === "secondaire" && !e.note) p.push("« secondaire » sans note");
      if (p.length) bad.push(`${e.brand} ${e.outdoorModel} : ${p.join(" ; ")}`);
    }
    expect(bad.slice(0, 15)).toEqual([]);
  });

  it("chaque relevé vise une fiche multizone du catalogue", () => {
    const norm = (s: string) => s.split("+")[0].toUpperCase().replace(/[^A-Z0-9]/g, "");
    const multi = new Set(registry.models.filter((m) => m.systemType === "multi-zone").map((m) => norm(m.modelNumber)));
    const orphelins = MULTIZONE_HEADS.filter((e) => !multi.has(norm(e.outdoorModel))).map((e) => `${e.brand} ${e.outdoorModel}`);
    expect(orphelins.slice(0, 15)).toEqual([]);
  }, 60_000);

  it("la Panasonic CU-2Z18ABUC alimente deux têtes, pas trois", () => {
    const h = multizoneHeads("Panasonic", "CU-2Z18ABUC");
    expect(h?.maxIndoorUnits).toBe(2);
    expect(h?.sourceType).toBe("officiel");
    expect(multizoneHeads("Panasonic", "CU-3Z22ABUC")?.maxIndoorUnits).toBe(3);
  });

  it("un numéro inconnu ne donne rien (jamais deviné d'après « 4Z » ou « 3C »)", () => {
    expect(multizoneHeads("Panasonic", "CU-9Z99ZZZZ")).toBeNull();
  });
});
