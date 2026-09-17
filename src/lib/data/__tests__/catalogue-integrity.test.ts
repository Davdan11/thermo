/* ==================================================================
   Intégrité du catalogue — garanties structurelles sur les données réelles
   Une fiche = une unité extérieure ; aucun nom en double ; rien d'inventé.
   ================================================================== */

import { describe, it, expect } from "vitest";
import { registry } from "../registry";
import { isGenericSeries } from "../series-label";
import { getLogisVertVariants } from "../../subsidies/logisvert-official";
import { isMultiPairing } from "@/lib/thermomatch/candidates";
import { readFileSync } from "node:fs";
import { join } from "node:path";

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

  it("une unité certifiée avec des combinaisons multizones est une multizone (jamais « murale simple zone » ni centrale)", () => {
    // Ancienne liste : unité intérieure décrite (« Appareils sans conduits »…) ; liste ENERGY STAR : unité intérieure vide sur une « M ».
    const bad = published.filter((m) => m.systemType !== "multi-zone" && getLogisVertVariants(m.modelNumber).some((e) => isMultiPairing(e)));
    expect(bad.map((m) => `${m.slug} (${m.systemType})`).slice(0, 20)).toEqual([]);
  }, 60_000);

  it("centrale ou murale : le type suit ENERGY STAR (Split System = sur conduits), pas le code « C »/« M » d'Hydro-Québec", () => {
    const es = JSON.parse(readFileSync(join(process.cwd(), "src/lib/data/energystar-types.json"), "utf8")) as { types: Record<string, string> };
    const ductless = new Set(["wall-single", "floor-console", "cassette", "ceiling", "multi-zone"]);
    const bad: string[] = [];
    for (const m of published) {
      if (m.systemType === "multi-zone") continue;
      let ducted = 0;
      let mini = 0;
      for (const e of getLogisVertVariants(m.modelNumber)) {
        const t = es.types[e.ahri];
        if (t === "M") mini++;
        else if (t === "S" || t === "P") ducted++;
      }
      // Seulement quand ENERGY STAR type au moins 3 combinaisons et tranche nettement.
      if (ducted + mini < 3 || ducted === mini) continue;
      const attendu = ducted > mini ? "centrale" : "sans conduits";
      const affiche = ductless.has(m.systemType) ? "sans conduits" : "centrale";
      if (attendu !== affiche) bad.push(`${m.modelNumber} (${m.systemType}, ENERGY STAR ${ducted} sur conduits / ${mini} mini-split)`);
    }
    expect(bad.slice(0, 20)).toEqual([]);

    const type = (n: string) => registry.models.find((m) => m.modelNumber === n)?.systemType;
    // Centrales sur leur propre cabinet ou serpentin, que le code « M » d'Hydro-Québec faisait passer pour des murales.
    for (const n of ["280ANV0240A", "284ANV0240B", "ASZS604210A", "4A6V0036A1", "BOVA-60HDN1-M15G", "280ANV024000", "25VNA860A030+TSTAT", "288BNV0600A+TSTAT", "DZ20VC0481B", "AOE30U-48HFN1-MR0", "HP36R"]) expect(type(n), n).toBe("central-ducted");
    // Mini-splits qui acceptent aussi un cabinet ou un serpentin : restent des mini-splits.
    for (const n of ["37MAHAQ18AA3", "38MARBQ18AA3", "SUZ-AA18NLHZ", "DLCSRBH18AAK"]) expect(type(n), n).toBe("wall-single");
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
