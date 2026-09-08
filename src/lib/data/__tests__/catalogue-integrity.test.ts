/* ==================================================================
   Intégrité du catalogue — garanties structurelles sur les données réelles
   Une fiche = une unité extérieure ; aucun nom en double ; rien d'inventé.
   ================================================================== */

import { describe, it, expect } from "vitest";
import { registry } from "../registry";
import { isGenericSeries } from "../series-label";

const norm = (v: string) => v.toLowerCase().replace(/[^a-z0-9]/g, "");
const published = registry.models.filter((m) => m.status === "published");

describe("catalogue — unicité", () => {
  it("chaque numéro d'unité extérieure n'apparaît qu'une fois par marque", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const m of registry.models) {
      const key = `${m.brandId}|${norm(m.modelNumber)}`;
      if (seen.has(key)) dupes.push(`${m.slug} ≈ ${seen.get(key)}`);
      seen.set(key, m.slug);
    }
    expect(dupes, dupes.slice(0, 10).join("\n")).toEqual([]);
  }, 60_000);

  it("deux fiches publiées d'une même marque n'ont jamais le même nom affiché", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const m of published) {
      const key = `${m.brandId}|${m.name.trim().toLowerCase()}|${m.systemType}`;
      if (seen.has(key)) dupes.push(`${m.slug} = ${seen.get(key)} (« ${m.name} »)`);
      seen.set(key, m.slug);
    }
    expect(dupes, dupes.slice(0, 10).join("\n")).toEqual([]);
  }, 60_000);

  it("les identifiants et slugs de modèles sont uniques globalement", () => {
    const ids = new Set(registry.models.map((m) => m.id));
    const slugs = new Set(registry.models.map((m) => m.slug));
    expect(ids.size).toBe(registry.models.length);
    expect(slugs.size).toBe(registry.models.length);
  }, 60_000);
});

describe("catalogue — propreté des données", () => {
  it("aucun numéro de modèle ne contient d'astérisque ni de caractère corrompu", () => {
    const bad = registry.models.filter((m) => /\*/.test(m.modelNumber) || /[^\x20-\x7E]/.test(m.modelNumber));
    expect(bad.map((m) => m.slug)).toEqual([]);
  }, 60_000);

  it("chaque fiche publiée a une capacité plausible et une série existante", () => {
    const seriesIds = new Set(registry.series.map((s) => s.id));
    const bad = published.filter(
      (m) => !seriesIds.has(m.seriesId) || m.nominalCapacityBtu == null || m.nominalCapacityBtu < 6000 || m.nominalCapacityBtu > 60000,
    );
    expect(bad.map((m) => m.slug)).toEqual([]);
  }, 60_000);

  it("chaque fiche publiée a au moins une configuration (jumelage de référence)", () => {
    const withCfg = new Set(registry.configurations.map((c) => c.modelId));
    const missing = published.filter((m) => !withCfg.has(m.id));
    expect(missing.map((m) => m.slug)).toEqual([]);
  }, 60_000);

  it("une série non identifiée n'est jamais affichée comme une vraie série", () => {
    const generic = registry.series.filter((s) => isGenericSeries(s.name, s.slug));
    expect(generic.length).toBeGreaterThan(0);
    for (const s of generic) expect(s.status).not.toBe("published");
  }, 60_000);

  it("le nom d'une fiche auto contient son numéro de modèle", () => {
    const auto = published.filter((m) => m.certifiedPairings != null);
    expect(auto.length).toBeGreaterThan(1000);
    const bad = auto.filter((m) => !m.name.includes(m.modelNumber));
    expect(bad.map((m) => m.slug)).toEqual([]);
  }, 60_000);
});
