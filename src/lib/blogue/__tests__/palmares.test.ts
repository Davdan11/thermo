/* Calculs du palmarès du froid : données réelles d'un échantillon (valeurs relues à la source), arrondis, ex aequo,
   cas sans données. */
import { describe, expect, it } from "vitest";
import { buildPalmares, modelsHeatingAt, round1, type PalmaresModelInput } from "../palmares";
import { palmaresCsv } from "../palmares-csv";
import { fixtureMunis } from "./fixtures";

const models: PalmaresModelInput[] = [
  { minTempC: -30, holdsFullAt15: true },
  { minTempC: -30, holdsFullAt15: false },
  { minTempC: -25, holdsFullAt15: true },
  { minTempC: -15, holdsFullAt15: true },
  { minTempC: null, holdsFullAt15: true },
];

describe("palmarès : calculs", () => {
  it("arrondi au dixième, comme Math.round", () => {
    expect(round1(-14.25)).toBe(-14.2);
    expect(round1(-14.35)).toBe(-14.3);
    expect(round1(-17.649)).toBe(-17.6);
    expect(round1(-9.96)).toBe(-10);
  });

  it("modèles qui chauffent encore : froid minimal publié égal ou plus bas ; sans donnée, pas compté", () => {
    expect(modelsHeatingAt(-32, models)).toEqual({ heat: 0, full: 0 });
    expect(modelsHeatingAt(-30, models)).toEqual({ heat: 2, full: 1 });
    expect(modelsHeatingAt(-25, models)).toEqual({ heat: 3, full: 2 });
    expect(modelsHeatingAt(-15, models)).toEqual({ heat: 4, full: 3 });
  });

  it("rang par nuits de janvier, ex aequo pour la même station, moyenne régionale arrondie", () => {
    const p = buildPalmares(fixtureMunis(), models);
    expect(p.rows.map((r) => [r.name, r.rank, r.tied])).toEqual([
      ["Lac-Frimas", 1, true],
      ["Val-Givre", 1, true],
      ["Saint-Bise", 3, false],
      ["Pointe-Verglas", 4, false],
      ["Havre-Tiède", 5, false],
      ["Cap-Doux", 6, false],
    ]);
    const laurentie = p.regions.find((g) => g.name === "Laurentie")!;
    // (−17,65 + −16,9) / 2 = −17,275 → −17,3
    expect(laurentie.meanJanMinC).toBe(-17.3);
    expect(laurentie.coldest).toEqual({ name: "Saint-Bise", code: "90003", janMinC: -17.65 });
    expect(p.regions.map((g) => [g.name, g.rank])).toEqual([
      ["Nordie", 1],
      ["Laurentie", 2],
      ["Sudie", 3],
    ]);
    // Jours sous −20 °C arrondis à l'unité ; absents : null.
    expect(p.rows.find((r) => r.code === "90003")!.daysBelow20).toBe(32);
    expect(p.rows.find((r) => r.code === "90006")!.daysBelow20).toBeNull();
    expect(p.rows.find((r) => r.code === "90001")!.modelsHeat).toBe(0);
    expect(p.rows.find((r) => r.code === "90003")!.modelsHeat).toBe(3);
  });

  it("cas sans données : station absente, nuits de janvier ou température de conception inconnues → exclues et comptées", () => {
    const p = buildPalmares(fixtureMunis(), models);
    expect(p.totals.municipalities).toBe(6);
    expect(p.totals.excluded).toBe(3);
    expect(p.rows.map((r) => r.code)).not.toContain("90007");
    expect(p.totals.genericDesign).toBe(1);
    expect(p.totals.genericValues).toEqual([-26]);
    expect(p.steps.map((s) => [s.t, s.municipalities, s.modelsHeat])).toEqual([
      [-32, 2, 0],
      [-26, 1, 2],
      [-25, 1, 3],
      [-24, 1, 3],
      [-23, 1, 3],
    ]);
    expect(p.totals.modelsWithMinTemp).toBe(4);
    const empty = buildPalmares([], []);
    expect(empty.rows).toEqual([]);
    expect(empty.regions).toEqual([]);
    expect(empty.steps).toEqual([]);
    expect(empty.totals.municipalities).toBe(0);
  });

  it("export CSV : une rangée par municipalité classée, en-tête, BOM", () => {
    const csv = palmaresCsv(buildPalmares(fixtureMunis(), models), "https://exemple.ca");
    // (trim() retirerait aussi le BOM : on coupe seulement la fin de ligne finale.)
    expect(csv.startsWith("﻿rang,ex_aequo,municipalite")).toBe(true);
    const lines = csv.replace(/\r\n$/, "").split("\r\n");
    expect(lines).toHaveLength(7);
    expect(lines[1]).toContain("Lac-Frimas");
    expect(lines[1]).toContain("https://exemple.ca/thermopompe/lac-frimas");
  });
});

describe("palmarès : données réelles (échantillon relu à la source)", () => {
  it("chaque valeur d’un échantillon vient de sa station, de la table et du catalogue", { timeout: 240_000 }, async () => {
    const [{ getPalmares }, { getMunicipalityByCode, getStation, getMunicipalites }, { designTempFor }, { getSiteCatalog }, { capacitesDuModele }, { registry }] = await Promise.all([
      import("../palmares-site"),
      import("@/lib/seo/municipalites"),
      import("@/lib/seo/municipal-content"),
      import("@/lib/presence/catalog-site"),
      import("@/lib/data/chiffres"),
      import("@/lib/data/registry"),
    ]);
    // « Garde toute sa capacité à −15 °C » : capacité maximale à −15 °C ÷ capacité cotée à 8,3 °C
    // (ENERGY STAR, même numéro AHRI), jamais contre la puissance nominale de la liste LogisVert.
    const gardeTout = (slug: string) => {
      const id = registry.modelBySlug.get(slug)?.id;
      return (id ? (capacitesDuModele(id)?.maintien?.pct ?? 0) : 0) >= 100;
    };
    const p = getPalmares();
    const cat = getSiteCatalog();
    expect(p.totals.municipalities).toBeGreaterThan(900);
    expect(p.totals.municipalities + p.totals.excluded).toBe(getMunicipalites().length);
    expect(p.totals.models).toBe(cat.models.length);
    const sample = [p.rows[0], p.rows[Math.floor(p.rows.length / 3)], p.rows[Math.floor((2 * p.rows.length) / 3)], p.rows[p.rows.length - 1]];
    for (const r of sample) {
      const m = getMunicipalityByCode(r.code)!;
      const s = getStation(m.station!.key)!;
      expect(r.janMinC, r.name).toBe(s.janMinC);
      expect(r.stationId).toBe(s.id);
      expect(r.designT).toBe(designTempFor(m.postal)!.t);
      expect(r.daysBelow20).toBe(s.daysBelowMinus20 === null ? null : Math.round(s.daysBelowMinus20));
      expect(r.modelsHeat).toBe(cat.models.filter((x) => x.minTempC !== null && x.minTempC <= r.designT).length);
      expect(r.modelsHeatFull).toBe(cat.models.filter((x) => x.minTempC !== null && x.minTempC <= r.designT && gardeTout(x.slug)).length);
    }
    for (let i = 1; i < p.rows.length; i++) {
      expect(p.rows[i].janMinC).toBeGreaterThanOrEqual(p.rows[i - 1].janMinC);
      if (p.rows[i].janMinC === p.rows[i - 1].janMinC && p.rows[i].designT === p.rows[i - 1].designT) expect(p.rows[i].rank).toBe(p.rows[i - 1].rank);
    }
    const g = p.regions[0];
    const list = p.rows.filter((r) => r.region === g.name);
    expect(g.count).toBe(list.length);
    expect(g.meanJanMinC).toBe(Math.round((list.reduce((a, r) => a + r.janMinC, 0) / list.length) * 10) / 10);
  });
});
