import { describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";
import { TITLE_MAX, fitTitle } from "@/lib/seo";
import { commercialSeriesName, productNames, productTitleCandidates } from "../product-name";

describe("Nom commercial de la série", () => {
  it("écarte la série non identifiée et les séries qui décrivent l'appareil", () => {
    expect(commercialSeriesName("Série non identifiée", "gree-serie-non-identifiee")).toBeNull();
    expect(commercialSeriesName("25 SEER2 115V Mini splits", "gree-25-seer2-115v-mini-splits")).toBeNull();
    expect(commercialSeriesName("17 Multi-Speed Heat Pump", "trane-17")).toBeNull();
    expect(commercialSeriesName("360 air discharge cassette unit", "gree-360")).toBeNull();
  });
  it("garde le nom commercial, nettoyé", () => {
    expect(commercialSeriesName("Charmo", "gree-charmo")).toBe("Charmo");
    expect(commercialSeriesName("WindFree - Max heat (RAC)", "samsung-windfree-max-heat-rac")).toBe("WindFree Max heat");
    expect(commercialSeriesName("Airstage H-Series", "fujitsu-airstage-h-series")).toBe("Airstage H-Series");
  });
});

describe("Nom d'une fiche produit", () => {
  it("marque + série + capacité, le numéro à part", () => {
    const n = productNames({ brand: "Gree", seriesName: "Charmo", seriesSlug: "gree-charmo", capacityBtu: 12000, modelNumber: "GWH12AGC" });
    expect(n.short).toBe("Charmo 12 000 BTU");
    expect(n.full).toBe("Gree Charmo 12 000 BTU");
    expect(n.withNumber).toBe("Gree Charmo 12 000 BTU (GWH12AGC)");
  });
  it("sans série ni capacité : le numéro, jamais répété", () => {
    const n = productNames({ brand: "Gree", seriesName: "Série non identifiée", seriesSlug: "gree-serie-non-identifiee", capacityBtu: null, modelNumber: "GWH12AGC" });
    expect(n.short).toBe("GWH12AGC");
    expect(n.withNumber).toBe("Gree GWH12AGC");
  });
  it("chaque titre candidat contient le numéro de modèle", () => {
    const p = { brand: "Mitsubishi Electric", seriesName: "M-Series", seriesSlug: "mitsubishi-electric-m-series", capacityBtu: 9000, modelNumber: "MUFZ-KJ09NAHZ" };
    for (const t of productTitleCandidates(p)) expect(t).toContain("MUFZ-KJ09NAHZ");
    expect(fitTitle(...productTitleCandidates(p))).toBe("Mitsubishi M-Series 9 000 BTU – MUFZ-KJ09NAHZ");
  });
});

describe("Titres des fiches du catalogue", () => {
  it("un titre par fiche, avec le numéro, dans la longueur visée", () => {
    const vus = new Map<string, string>();
    const doublons: string[] = [];
    let tropLongs = 0;
    let avecCapacite = 0;
    const actifs = registry.models.filter((m) => m.status === "published" && registry.brandById.get(m.brandId)?.activeInQuebec);
    const seriesById = new Map(registry.series.map((s) => [s.id, s]));
    for (const m of actifs) {
      const s = seriesById.get(m.seriesId);
      const t = fitTitle(...productTitleCandidates({ brand: registry.brandById.get(m.brandId)!.name, seriesName: s?.name, seriesSlug: s?.slug, capacityBtu: m.nominalCapacityBtu, modelNumber: m.modelNumber }));
      expect(t, m.slug).toContain(m.modelNumber);
      if ([...t].length > TITLE_MAX) tropLongs++;
      if (t.includes("BTU")) avecCapacite++;
      const autre = vus.get(t);
      if (autre) doublons.push(`${t} : ${autre} et ${m.slug}`);
      else vus.set(t, m.slug);
    }
    expect(doublons).toEqual([]);
    // Seuls des numéros de modèle très longs dépassent (le titre retombe alors sur « marque + numéro »).
    expect(tropLongs).toBeLessThan(actifs.length * 0.02);
    // La plupart des titres portent désormais la capacité.
    expect(avecCapacite).toBeGreaterThan(actifs.length * 0.6);
  }, 60_000);
});
