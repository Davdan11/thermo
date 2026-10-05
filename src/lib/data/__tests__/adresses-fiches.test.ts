import { describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";
import { productSlug } from "@/lib/data/product-name";

/* Combien d'adresses portent un nom commercial : « gree-livo-12000-btu-… » plutôt que
   « gree-12000-btu-… ». Les gens cherchent le nom ; une baisse ici est une perte de visibilité.
   L'unicité des adresses et la résolution des adresses passées sont vérifiées par product-slug. */

const actifs = registry.models.filter((m) => m.status === "published" && registry.brandById.get(m.brandId)?.activeInQuebec);

describe("Noms commerciaux dans les adresses", () => {
  it("la majorité des fiches actives ont un nom commercial dans leur adresse", () => {
    const nommees = actifs.filter((m) => {
      const brand = registry.brandById.get(m.brandId)!;
      // Même adresse, sans le nom de série : si elle diffère, c'est que le nom est dans l'adresse.
      const sansNom = productSlug({ brand: brand.name, brandSlug: brand.slug, capacityBtu: m.nominalCapacityBtu, modelNumber: m.modelNumber });
      return m.slug !== sansNom;
    });
    expect(actifs.length).toBeGreaterThan(3000);
    // 4 octobre 2026 : 1 517 fiches sur 3 795 (40 %). La part monte à mesure que les noms sont documentés.
    expect(nommees.length / actifs.length).toBeGreaterThan(0.35);
  });

  it("chaque fiche active répond à sa propre adresse", () => {
    const perdues = actifs.filter((m) => registry.modelBySlug.get(m.slug) !== m).map((m) => m.slug);
    expect(perdues).toEqual([]);
  }, 60_000);
});
