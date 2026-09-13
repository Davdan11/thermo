/* ==================================================================
   Tests — outils de l'assistant (fonctions pures sur les vraies données)
   Chaque chiffre renvoyé doit être celui du registre / de la liste
   LogisVert, et chaque adresse doit être une page existante.
   ================================================================== */

import { describe, expect, it } from "vitest";
import { RANKINGS, getSeoModel } from "@/lib/seo/programmatic";
import { getCity } from "@/lib/seo/cities";
import { TOOL_DEFS, findModels, isKnownHref, resolveBrand, resolveType, runTool } from "../tools";

interface M {
  name: string;
  url: string;
  type: string;
  nominal_btu: number;
  btu_at_minus15c?: number;
  hspf2?: number;
  cold_climate?: boolean;
  logisvert_dollars?: number;
  rank?: number;
}
const slugOf = (url: string) => url.replace("/produit/", "");
const fr = (n: number) => n.toLocaleString("fr-CA");

describe("search_models", () => {
  const out = runTool("search_models", { type: "murale", min_btu: 9000, max_btu: 18000, cold_climate_only: true, sort: "froid", limit: 50 });
  const models = out.data.models as M[];

  it("respecte le type, la capacité, le climat froid et plafonne à 6 résultats", () => {
    expect(models.length).toBeGreaterThan(0);
    expect(models.length).toBeLessThanOrEqual(6);
    for (const m of models) {
      expect(m.type).toBe("Murale simple zone");
      expect(m.nominal_btu).toBeGreaterThanOrEqual(9000);
      expect(m.nominal_btu).toBeLessThanOrEqual(18000);
      expect(m.cold_climate).toBe(true);
    }
  });

  it("renvoie les chiffres exacts des données, avec une fiche existante", () => {
    for (const m of models) {
      const s = getSeoModel(slugOf(m.url));
      expect(s).not.toBeNull();
      expect(isKnownHref(m.url)).toBe(true);
      expect(m.nominal_btu).toBe(s!.nominalBtu);
      expect(m.btu_at_minus15c ?? null).toBe(s!.h5Btu);
      expect(m.hspf2 ?? null).toBe(s!.hspf2);
      expect(m.logisvert_dollars ?? 0).toBe(s!.logisVertDollars);
    }
  });

  it("trie par capacité à -15 °C décroissante", () => {
    const caps = models.map((m) => m.btu_at_minus15c ?? 0);
    expect(caps).toEqual([...caps].sort((a, b) => b - a));
  });

  it("construit les fiches à partir des données, pas du texte", () => {
    expect(out.cards.map((c) => c.url)).toEqual(models.map((m) => m.url));
    for (const [i, c] of out.cards.entries()) {
      expect(c.figures[0].value).toBe(`${fr(models[i].btu_at_minus15c!)} BTU/h`);
    }
  });

  it("filtre par marque (nom partiel accepté)", () => {
    const daikin = runTool("search_models", { brand: "daikin", limit: 3 }).data.models as M[];
    expect(daikin.length).toBe(3);
    for (const m of daikin) expect(m.name.startsWith("Daikin")).toBe(true);
    expect(resolveBrand("Mitsubishi")?.slug).toBe("mitsubishi-electric");
  });

  it("signale une marque absente au lieu d'inventer", () => {
    const r = runTool("search_models", { brand: "Marque Imaginaire" });
    expect(r.data.found).toBe(false);
    expect(r.cards).toEqual([]);
  });

  it("comprend les types en mots simples", () => {
    expect(resolveType("mini-split")).toBe("murale");
    expect(resolveType("avec conduits")).toBe("centrale");
    expect(resolveType("Centrale")).toBe("centrale");
    expect(resolveType("n'importe quoi")).toBeUndefined();
  });
});

describe("get_model", () => {
  const sample = (runTool("search_models", { brand: "Fujitsu", limit: 1 }).data.models as M[])[0];
  const seo = getSeoModel(slugOf(sample.url))!;

  it("trouve un modèle par slug", () => {
    const r = runTool("get_model", { query: seo.slug });
    expect((r.data.model as M).url).toBe(sample.url);
  });

  it("trouve un modèle par numéro d'unité extérieure", () => {
    const hits = findModels(seo.outdoorModel);
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0].outdoorModel.toLowerCase()).toBe(seo.outdoorModel.toLowerCase());
  });

  it("dit qu'il ne trouve pas un modèle inexistant", () => {
    const r = runTool("get_model", { query: "ZZZ-999-INEXISTANT" });
    expect(r.data.found).toBe(false);
    expect(r.cards).toEqual([]);
  });
});

describe("get_ranking", () => {
  it("renvoie le classement et l'adresse du palmarès", () => {
    const r = runTool("get_ranking", { criterion: "grand-froid", limit: 3 });
    expect(r.data.page_url).toBe("/meilleures-thermopompes/grand-froid");
    expect(isKnownHref(r.data.page_url as string)).toBe(true);
    const models = r.data.models as M[];
    expect(models.map((m) => m.rank)).toEqual([1, 2, 3]);
    for (const m of models) expect(isKnownHref(m.url)).toBe(true);
  });

  it("liste les critères quand le critère est inconnu", () => {
    const r = runTool("get_ranking", { criterion: "le-plus-beau" });
    expect(r.data.found).toBe(false);
    expect(r.data.criteria_available).toEqual(RANKINGS.map((x) => x.slug));
  });
});

describe("logisvert_for", () => {
  it("donne les montants officiels d'une marque et d'un type", () => {
    const r = runTool("logisvert_for", { brand: "Daikin", type: "murale" }).data as Record<string, unknown>;
    expect(r.found).toBe(true);
    const min = r.min_dollars as number;
    const med = r.median_dollars as number;
    const max = r.max_dollars as number;
    expect(min).toBeLessThanOrEqual(med);
    expect(med).toBeLessThanOrEqual(max);
    const highest = r.highest_models as Array<{ url: string; logisvert_dollars: number }>;
    expect(highest[0].logisvert_dollars).toBe(max);
    for (const h of highest) expect(h.logisvert_dollars).toBe(getSeoModel(slugOf(h.url))!.logisVertDollars);
    for (const c of r.by_nominal_capacity as Array<{ min_dollars: number; max_dollars: number; nominal_btu: number }>) {
      expect(c.min_dollars).toBeGreaterThanOrEqual(min);
      expect(c.max_dollars).toBeLessThanOrEqual(max);
    }
    expect(typeof r.list_date).toBe("string");
    expect(isKnownHref(r.brand_page as string)).toBe(true);
  });

  it("donne le montant d'un modèle précis tel qu'il figure dans les données", () => {
    const sample = (runTool("search_models", { brand: "Daikin", sort: "subvention", limit: 1 }).data.models as M[])[0];
    const r = runTool("logisvert_for", { model: slugOf(sample.url) }).data;
    expect(r.logisvert_dollars).toBe(getSeoModel(slugOf(sample.url))!.logisVertDollars);
  });

  it("ne donne aucun montant pour une marque inconnue", () => {
    const r = runTool("logisvert_for", { brand: "Marque Imaginaire" }).data;
    expect(r.found).toBe(false);
    expect(r.min_dollars).toBeUndefined();
  });
});

describe("city_climate", () => {
  it("donne la température de conception de Lévis et sa page", () => {
    const r = runTool("city_climate", { city: "Lévis" }).data;
    expect(r.found).toBe(true);
    expect(r.design_temp_c).toBe(getCity("levis")!.designTempC);
    expect(r.page_url).toBe("/thermopompe/levis");
    expect(isKnownHref(r.page_url as string)).toBe(true);
  });

  it("comprend les abréviations « St- »", () => {
    expect(runTool("city_climate", { city: "St-Jérôme" }).data.city).toBe("Saint-Jérôme");
  });

  it("dit qu'une ville n'est pas couverte", () => {
    expect(runTool("city_climate", { city: "Paris" }).data.found).toBe(false);
  });
});

describe("glossary", () => {
  it("renvoie la définition du site et son ancre", () => {
    const r = runTool("glossary", { term: "HSPF2" }).data;
    const e = (r.entries as Array<{ term: string; definition: string; url: string }>)[0];
    expect(e.term.startsWith("HSPF2")).toBe(true);
    expect(e.definition.length).toBeGreaterThan(40);
    expect(isKnownHref(e.url)).toBe(true);
  });

  it("dit qu'un terme est absent", () => {
    expect(runTool("glossary", { term: "xyzzy" }).data.found).toBe(false);
  });
});

describe("runTool", () => {
  it("refuse un outil inconnu", () => {
    expect(runTool("delete_everything", {}).data.error).toBeTruthy();
  });

  it("tolère des entrées invalides sans planter", () => {
    for (const def of TOOL_DEFS) {
      expect(() => runTool(def.name, null)).not.toThrow();
      expect(() => runTool(def.name, { limit: "beaucoup", min_btu: {}, brand: 42 })).not.toThrow();
    }
  });

  it("garde des résultats courts", () => {
    const calls: Array<[string, Record<string, unknown>]> = [
      ["search_models", { limit: 6 }],
      ["get_ranking", { criterion: "efficacite-hspf2", limit: 6 }],
      ["logisvert_for", { brand: "Mitsubishi Electric" }],
      ["city_climate", { city: "Montréal" }],
      ["glossary", { term: "COP" }],
    ];
    for (const [name, input] of calls) expect(JSON.stringify(runTool(name, input).data).length).toBeLessThan(6000);
  });
});

describe("isKnownHref", () => {
  it("accepte les pages du site et refuse le reste", () => {
    for (const ok of ["/trouver-ma-thermopompe", "/soumission", "/rendez-vous", "/subventions", "tel:4389003224", "/glossaire#cop"]) expect(isKnownHref(ok)).toBe(true);
    for (const ko of ["/produit/nexiste-pas", "https://exemple.com", "//exemple.com", "/glossaire#inexistant", "/thermopompe/paris", "javascript:alert(1)"]) expect(isKnownHref(ko)).toBe(false);
  });
});
