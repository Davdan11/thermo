import { describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";

/* Adresse publique d'une fiche : marque + nom commercial + capacité + numéro
   (« /produit/haier-tempo-9000-btu-1q09te1be »), pour que l'adresse porte ce que les gens cherchent.
   L'adresse d'origine (numéro seul) et toute adresse qui finit par le numéro d'une fiche de la marque
   (le nom peut changer quand un document est trouvé) retrouvent la même fiche ; la page redirige (308). */

const actifs = registry.models.filter((m) => m.status === "published" && registry.brandById.get(m.brandId)?.activeInQuebec);

describe("Adresses des fiches", () => {
  it("une adresse par fiche, en minuscules, qui finit par l'adresse d'origine sans la marque", () => {
    const vues = new Map<string, string>();
    const problemes: string[] = [];
    for (const m of registry.models) {
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(m.slug)) problemes.push(`${m.slug} : caractères interdits`);
      const autre = vues.get(m.slug);
      if (autre) problemes.push(`${m.slug} : aussi ${autre}`);
      vues.set(m.slug, m.id);
      if (m.legacySlug) {
        const brand = registry.brandById.get(m.brandId)!;
        const tail = m.legacySlug.startsWith(`${brand.slug}-`) ? m.legacySlug.slice(brand.slug.length + 1) : m.legacySlug;
        if (!m.slug.endsWith(`-${tail}`)) problemes.push(`${m.slug} ne finit pas par ${tail}`);
      }
    }
    expect(problemes).toEqual([]);
  });

  it("le nom commercial et la capacité sont dans l'adresse (Haier Tempo 9 000 BTU)", () => {
    const m = registry.modelBySlug.get("haier-1q09te1be");
    expect(m?.slug).toBe("haier-tempo-9000-btu-1q09te1be");
  });

  it("ancienne adresse, adresse intermédiaire et adresse publique : la même fiche", () => {
    let nommees = 0;
    for (const m of actifs) {
      expect(registry.modelBySlug.get(m.slug), m.slug).toBe(m);
      if (!m.legacySlug) continue;
      nommees++;
      expect(registry.modelBySlug.get(m.legacySlug), m.legacySlug).toBe(m);
      const brand = registry.brandById.get(m.brandId)!;
      const tail = m.legacySlug.startsWith(`${brand.slug}-`) ? m.legacySlug.slice(brand.slug.length + 1) : m.legacySlug;
      // Une adresse publiée avant qu'un nom soit trouvé (marque + capacité + numéro) mène encore à la fiche.
      expect(registry.modelBySlug.get(`${brand.slug}-12000-btu-${tail}`), `${brand.slug}-12000-btu-${tail}`).toBe(m);
    }
    expect(nommees).toBeGreaterThan(actifs.length * 0.9);
    expect(registry.modelBySlug.get("adresse-qui-n-existe-pas")).toBeUndefined();
  }, 60_000);
});
