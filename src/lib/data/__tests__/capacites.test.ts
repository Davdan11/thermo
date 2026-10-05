import { describe, expect, it } from "vitest";
import { capacitesDeLaFiche, capacitesFiche, CONDITIONS, energyStarCapacites, mesure, referenceDe } from "@/lib/data/capacites";
import { registry } from "@/lib/data/registry";
import { getProductDetail } from "@/lib/data/queries/product-detail";
import { getSeoModel } from "@/lib/seo/programmatic";

/* Capacités d'une fiche : chaque valeur dit sa condition ; un pourcentage dit son numérateur et son
   dénominateur, et ne compare jamais une capacité maximale au calibre commercial. */

const ES = { h47: 13500, h17: 9500, h5: 13500, c: 10600 };

describe("capacités d'une fiche", () => {
  it("le maintien divise la capacité maximale à −15 °C par la capacité cotée à 8,3 °C du même appariement", () => {
    const c = capacitesFiche({ calibreBtu: 12000, ahri: "1", h17: 9500, h5: 13500, energyStar: ES });
    expect(c.maintien?.pct).toBe(100);
    expect(c.maintien?.numerateur.cle).toBe("h5");
    expect(c.maintien?.denominateur.cle).toBe("h47");
    // Espaces normalisées : le groupement des milliers dépend de l'ICU du serveur.
    expect(c.maintien?.calcul.replace(/\s/g, " ")).toBe("13 500 BTU/h (capacité maximale à −15 °C) ÷ 13 500 BTU/h (capacité cotée à 8,3 °C) = 100 %");
  });

  it("sans capacité cotée à 8,3 °C, aucun pourcentage : jamais contre le calibre commercial", () => {
    const c = capacitesFiche({ calibreBtu: 12000, ahri: "2", h17: 9500, h5: 13500, energyStar: null });
    expect(c.maintien).toBeNull();
    expect(c.mesures.map((m) => m.cle)).toEqual(["h17", "h5"]);
    expect(c.remarques.join(" ")).toMatch(/aucun pourcentage de maintien/);
  });

  it("une capacité maximale plus haute que la capacité cotée à −8,3 °C est expliquée, pas comparée", () => {
    const c = capacitesFiche({ calibreBtu: 12000, ahri: "1", h17: 9500, h5: 13500, energyStar: ES });
    expect(c.remarques.join(" ")).toMatch(/capacité maximale.*ne se comparent pas en pourcentage/);
    const d = capacitesFiche({ calibreBtu: 12000, ahri: "3", h17: 11000, h5: 9000, energyStar: null });
    expect(d.remarques.join(" ")).not.toMatch(/ne se comparent pas/);
  });

  it("chaque mesure porte sa température en °C et en °F, sa nature et sa source ; le calibre n'est pas une mesure", () => {
    const c = capacitesFiche({ calibreBtu: 12000, ahri: "1", h17: 9500, h5: 13500, energyStar: ES });
    expect(c.mesures.map((m) => [m.cle, m.tempC, m.tempF, m.nature])).toEqual([
      ["h47", 8.3, 47, "cotee"],
      ["h17", -8.3, 17, "cotee"],
      ["h5", -15, 5, "maximale"],
    ]);
    for (const m of c.mesures) {
      expect(m.libelle).toMatch(/°C \(\d+ °F\)/);
      expect(m.source.length).toBeGreaterThan(5);
    }
    expect(c.calibre).toMatchObject({ cle: "calibre", nature: "classe", tempC: null, btu: 12000 });
    expect(c.mesures.some((m) => m.cle === "calibre")).toBe(false);
    expect(CONDITIONS.calibre.definition).toMatch(/pas une mesure/);
  });

  it("la valeur ENERGY STAR du numéro AHRI exact prime (numérateur et dénominateur du même appariement)", () => {
    const c = capacitesFiche({ ahri: "1", h5: 13000, energyStar: ES });
    expect(mesure(c, "h5")?.btu).toBe(13500);
    const d = capacitesFiche({ ahri: "4", h5: 13000, energyStar: null });
    expect(mesure(d, "h5")?.btu).toBe(13000);
    expect(d.maintien).toBeNull();
  });

  it("un profil saisi à la main, sans numéro AHRI, n'est pas repris (condition invérifiable)", () => {
    const c = capacitesDeLaFiche({ model: { nominalCapacityBtu: 18000 }, configuration: { id: "config-daikin-aurora-18k" }, performanceProfile: { dataPoints: [{ outdoorTempC: -15, heatingCapacityBtu: 18000 }] } }, null);
    expect(c.mesures).toEqual([]);
    expect(c.calibre?.btu).toBe(18000);
  });
});

describe("Daikin RXT12AVJU, le cas de l'audit, sur les vraies données", () => {
  it("calibre 12 000 BTU, 13 500 BTU/h cotés à 8,3 °C, 9 500 à −8,3 °C, 13 500 maximum à −15 °C : maintien 100 %", { timeout: 180_000 }, () => {
    const model = registry.modelById.get("daikin-rxt12avju");
    expect(model).toBeTruthy();
    const detail = getProductDetail(model!.slug);
    expect(detail).toBeTruthy();
    const c = capacitesDeLaFiche(detail!, referenceDe(getSeoModel(model!.slug)));
    expect(c.ahri).toBe("215710688");
    expect(energyStarCapacites().entries["215710688"]).toMatchObject({ h47: 13500, h17: 9500, h5: 13500 });
    expect(c.calibre?.btu).toBe(12000);
    expect(mesure(c, "h47")?.btu).toBe(13500);
    expect(mesure(c, "h17")?.btu).toBe(9500);
    expect(mesure(c, "h5")?.btu).toBe(13500);
    expect(c.maintien?.pct).toBe(100);
    // 10 600 BTU/h : « puissance nominale » de la liste LogisVert, égale ici à la capacité de climatisation.
    // Ce n'est pas une capacité de chauffage à 8,3 °C : elle n'est plus affichée comme telle ni prise pour 100 %.
    expect(c.mesures.some((m) => m.btu === 10600)).toBe(false);
    // Avant : 13 500 ÷ 12 000 = 113 % « du nominal ». Le calibre ne sert plus de base.
    expect(c.maintien?.denominateur.cle).toBe("h47");
    expect(c.remarques.join(" ")).toMatch(/capacité maximale/);
  });
});
