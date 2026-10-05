import { describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";
import { modelNumberSlug, productSlug } from "@/lib/data/product-name";

/* Adresse des fiches : ce que les gens cherchent (marque, nom commercial, capacité), puis le numéro.
   Les adresses passées (marque + numéro, ou nom d'avant) mènent toujours à la fiche. */

describe("adresse d'une fiche", () => {
  it("marque, nom commercial, capacité, puis le numéro", () => {
    expect(productSlug({ brand: "Haier", brandSlug: "haier", seriesName: "Tempo", capacityBtu: 9000, modelNumber: "1Q09TE1BE" })).toBe("haier-tempo-9000-btu-1q09te1be");
  });

  it("sans nom commercial connu : marque, capacité et numéro ; sans capacité : marque et numéro", () => {
    expect(productSlug({ brand: "Gree", brandSlug: "gree", capacityBtu: 12000, modelNumber: "GWH12AGC-D3NNA1A/O" })).toBe("gree-12000-btu-gwh12agc-d3nna1a-o");
    expect(productSlug({ brand: "Gree", brandSlug: "gree", modelNumber: "GWH12AGC" })).toBe("gree-gwh12agc");
  });

  it("jamais un simple code de série ni la marque répétée", () => {
    expect(productSlug({ brand: "Moovair", brandSlug: "moovair", seriesName: "DM", capacityBtu: 18000, modelNumber: "DM18HP" })).toBe("moovair-18000-btu-dm18hp");
    expect(productSlug({ brand: "Daikin", brandSlug: "daikin", seriesName: "Daikin Aurora", capacityBtu: 12000, modelNumber: "RXT12AVJU" })).toBe("daikin-aurora-12000-btu-rxt12avju");
  });

  it("toutes les fiches : adresse unique, qui finit par le numéro", () => {
    expect(new Set(registry.models.map((m) => m.slug)).size).toBe(registry.models.length);
    expect(registry.models.filter((m) => !m.slug.endsWith(modelNumberSlug(m.modelNumber))).map((m) => m.slug)).toEqual([]);
  });

  it("le nom commercial documenté est dans l'adresse", () => {
    const m = registry.models.find((x) => x.id === "bryant-280anv024000");
    expect(m?.slug).toBe("bryant-evolution-extreme-24000-btu-280anv024000");
  });
});

describe("adresses passées", () => {
  it("l'identifiant (ancienne adresse marque + numéro) mène à la fiche", () => {
    const wrong = registry.models.filter((m) => registry.modelBySlug.get(m.id) !== m).map((m) => m.id);
    expect(wrong).toEqual([]);
    expect(registry.modelBySlug.get("daikin-rxt12avju")?.slug).toBe("daikin-aurora-12000-btu-rxt12avju");
    expect(registry.modelBySlug.get("daikin-atmosphera-12k")?.slug).toBe("daikin-atmosphera-12000-btu-ftxm12wvju");
  });

  it("une adresse d'avant un nom commercial mène à la fiche", () => {
    expect(registry.modelBySlug.get("haier-9000-btu-1q09te1be")?.slug).toBe("haier-tempo-9000-btu-1q09te1be");
    expect(registry.modelBySlug.get("bryant-evolution-24000-btu-280anv024000")?.slug).toBe("bryant-evolution-extreme-24000-btu-280anv024000");
  });

  it("adresse inconnue ou d'une autre marque : aucune fiche", () => {
    for (const s of ["nexiste-pas", "test", "daikin-x", "carrier-9000-btu-1q09te1be"]) expect(registry.modelBySlug.get(s)).toBeUndefined();
  });

  it("l'index ne liste que les adresses actuelles", () => {
    expect([...registry.modelBySlug.keys()].length).toBe(registry.models.length);
  });
});
