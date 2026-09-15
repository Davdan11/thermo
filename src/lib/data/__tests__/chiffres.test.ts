import { beforeAll, describe, expect, it } from "vitest";
import { aCapacite15, chiffre, chiffres, estClimatFroid, jeton, resolveChiffres, type ChiffreCle } from "@/lib/data/chiffres";
import { getActiveBrandCount, getEligibleModelCount } from "@/lib/data/queries/stats";
import { getPublishedBrandsSummary } from "@/lib/data/queries/brand-detail";
import { getAvailableFilters } from "@/lib/data/queries/catalogue";
import { getCanonicalModels, getSeoModels } from "@/lib/seo/programmatic";
import { visibiliteEtat } from "@/lib/seo/visibilite";
import { getLogisVertStats } from "@/lib/subsidies/logisvert-official";
import { getLogisVertListInfo } from "@/lib/subsidies/logisvert-meta";
import { resolveFacts } from "@/lib/seo/landing-facts";
import { getAllGuides, getGuideBySlug } from "@/lib/markdown";

/* Deux chiffres différents pour la même notion ne doivent plus exister : chaque fonction qui compte
   une notion déjà définie dans src/lib/data/chiffres.ts doit donner le même nombre. */

beforeAll(() => {
  chiffres();
}, 180_000);

describe("ce que comptent nos chiffres", () => {
  it("fiches : même nombre partout (ThermoMatch, catalogue, marques, visibilité, pages programmatiques)", () => {
    const n = chiffre("fiches");
    expect(n).toBeGreaterThan(1000);
    expect(getEligibleModelCount()).toBe(n);
    expect(visibiliteEtat().fiches).toBe(n);
    expect(getSeoModels().length).toBe(n);
    expect(getPublishedBrandsSummary().reduce((s, b) => s + b.modelCount, 0)).toBe(n);
    expect(getAvailableFilters().types.reduce((s, t) => s + t.count, 0)).toBe(n);
  });

  it("fiches par type : mêmes nombres que les filtres du catalogue", () => {
    const types = new Map(getAvailableFilters().types.map((t) => [t.value, t.count]));
    expect(chiffre("fiches-murales")).toBe(types.get("wall-single") ?? 0);
    expect(chiffre("fiches-multizones")).toBe(types.get("multi-zone") ?? 0);
    expect(chiffre("fiches-centrales")).toBe(types.get("central-ducted") ?? 0);
  });

  it("climat froid : la mention des fiches, même nombre que le résumé des marques", () => {
    expect(getPublishedBrandsSummary().reduce((s, b) => s + b.coldClimateCount, 0)).toBe(chiffre("fiches-climat-froid"));
  });

  it("machines distinctes : même nombre que les pages programmatiques et leurs jetons", () => {
    expect(chiffre("machines")).toBe(getCanonicalModels().length);
    const digits = (s: string) => Number(s.replace(/\D/g, ""));
    expect(digits(resolveFacts("{{cat:machines}}"))).toBe(chiffre("machines"));
    expect(digits(resolveFacts("{{cat:eligible}}"))).toBe(chiffre("fiches"));
    expect(digits(resolveFacts("{{cat:brands}}"))).toBe(chiffre("marques"));
    expect(digits(resolveFacts("{{chiffre:fiches-climat-froid}}"))).toBe(chiffre("fiches-climat-froid"));
  });

  it("capacité à −15 °C : comptée comme sur la fiche (appariement de référence, valeur ENERGY STAR du numéro AHRI exact)", () => {
    expect(chiffre("machines-capacite-15")).toBe(getCanonicalModels().filter((m) => aCapacite15(m.id)).length);
    // La liste LogisVert seule en publie moins : ENERGY STAR en ajoute pour le même numéro AHRI.
    expect(chiffre("machines-capacite-15")).toBeGreaterThanOrEqual(getCanonicalModels().filter((m) => m.h5Btu !== null).length);
  });

  it("climat froid : la même règle sur une fiche et dans les compteurs", () => {
    expect(chiffre("machines-climat-froid")).toBe(getCanonicalModels().filter((m) => estClimatFroid(m.id)).length);
  });

  it("combinaisons certifiées et marques : une seule source chacune", () => {
    expect(chiffre("combinaisons")).toBe(getLogisVertStats().count);
    expect(chiffre("combinaisons")).toBe(getLogisVertListInfo().count);
    expect(chiffre("marques")).toBe(getActiveBrandCount());
    expect(chiffre("marques")).toBe(getPublishedBrandsSummary().length);
  });

  it("les ensembles s'emboîtent", () => {
    const c = (k: ChiffreCle) => chiffre(k);
    expect(c("fiches")).toBeGreaterThanOrEqual(c("machines"));
    expect(c("fiches")).toBeGreaterThanOrEqual(c("fiches-climat-froid"));
    expect(c("fiches")).toBeGreaterThanOrEqual(c("fiches-capacite-15"));
    expect(c("machines")).toBeGreaterThanOrEqual(c("machines-climat-froid"));
    expect(c("machines")).toBeGreaterThanOrEqual(c("machines-capacite-15"));
    expect(c("machines-capacite-15")).toBeGreaterThanOrEqual(c("machines-maintien-90"));
    expect(c("machines-maintien-90")).toBeGreaterThanOrEqual(c("machines-maintien-100"));
    expect(c("combinaisons")).toBeGreaterThan(c("fiches"));
  });

  it("chaque chiffre a un libellé, une définition, une source et une date", () => {
    for (const c of Object.values(chiffres())) {
      expect(c.valeur, c.cle).toBeGreaterThan(0);
      expect(c.libelle.length, c.cle).toBeGreaterThan(3);
      expect(c.definition.length, c.cle).toBeGreaterThan(20);
      expect(c.source.length, c.cle).toBeGreaterThan(5);
      expect(c.date, c.cle).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
    // Deux notions, deux libellés : jamais le même libellé pour deux nombres.
    const libelles = Object.values(chiffres()).map((c) => c.libelle);
    expect(new Set(libelles).size).toBe(libelles.length);
  });
});

describe("jetons {{chiffre:…}}", () => {
  it("donnent les valeurs du module ; un jeton inconnu lève une erreur", () => {
    expect(Number(resolveChiffres("{{chiffre:machines}}").replace(/\D/g, ""))).toBe(chiffre("machines"));
    expect(jeton("chiffre:fiches-murales:gree")).toMatch(/^\d/);
    expect(jeton("chiffre:machines-hspf2-sup:wall-single:12")).toMatch(/^\d/);
    expect(jeton("chiffre:machines-lv:wall-single:12000")).toMatch(/^\d/);
    expect(jeton("chiffre:date-verification")).toMatch(/\d{4}$/);
    expect(() => resolveChiffres("{{chiffre:inconnu}}")).toThrow(/Jeton sans donnée/);
  });

  it("les guides n'ont plus de jeton sans donnée ni de compteur écrit à la main", { timeout: 180_000 }, async () => {
    for (const g of getAllGuides()) {
      const guide = await getGuideBySlug(g.slug);
      expect(guide, g.slug).not.toBeNull();
      expect(guide!.contentHtml, g.slug).not.toMatch(/\{\{/);
      for (const f of guide!.faq ?? []) expect(f.a, g.slug).not.toMatch(/\{\{/);
    }
  });
});
