/* Données réelles du site : 60 jours en automne et en hiver, 40 jours l'été. Chaque légende passe le garde-fou,
   chaque sujet vient d'une page publique réelle (fiche, ville indexée, marque LogisVert), chaque photo existe. */
import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";
import { isCityPageIndexable } from "@/lib/seo/cities-quality";
import { getBrandStats } from "@/lib/seo/programmatic";
import { zonedToUtc } from "@/lib/presence/time";
import { catalogueSocial } from "../catalogue";
import { choisir } from "../generer";
import { composerTexte, gabarit, verifierTexte } from "../redaction";
import type { Trace } from "../selection";
import type { Faits, ModeleFaits } from "../types";

const plusJours = (jour: string, n: number) => new Date(Date.parse(`${jour}T12:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10);
const existe = (publicPath: string) => existsSync(path.join(process.cwd(), "public", ...publicPath.split("/").filter(Boolean)));

function verifierModele(m: ModeleFaits) {
  const r = registry.modelBySlug.get(m.slug);
  expect(r?.id, m.slug).toBe(m.id);
  expect(r?.status).toBe("published");
  expect(registry.brandById.get(r!.brandId)?.activeInQuebec).toBe(true);
  expect(m.logisVert).toBeGreaterThan(0);
  expect(m.nomCommercial).not.toMatch(/^[A-Z0-9 ./-]{1,11}$/);
  if (m.photo) {
    expect(m.photo).not.toMatch(/representatives|^https?:/);
    expect(existe(m.photo), m.photo).toBe(true);
  }
}

describe("données réelles du site", () => {
  it("60 jours par saison : garde-fou, pages réelles, photos présentes", { timeout: 240_000 }, () => {
    const cat = catalogueSocial();
    expect(cat.modeles.length).toBeGreaterThan(300);
    expect(cat.villes.length).toBeGreaterThan(20);
    let verifiees = 0;
    for (const [debut, jours] of [["2026-09-17", 60], ["2027-01-04", 60], ["2027-06-10", 40]] as const) {
      const historique: Trace[] = [];
      for (let i = 0; i < jours; i++) {
        const jour = plusJours(debut, i);
        for (const genre of ["story", "publication"] as const) {
          const f: Faits | null = choisir({ genre, prevueLe: zonedToUtc(jour, genre === "story" ? "09:00" : "11:00"), historique, catalogue: cat });
          expect(f, `${genre} ${jour}`).not.toBeNull();
          if (!f) continue;
          historique.push({ jour, genre, format: f.format, cles: f.cles, statut: "approuvee" });
          for (const v of [0, 1]) expect(verifierTexte(gabarit(f, v), f), `${jour} ${f.format} ${f.sujet}`).toEqual([]);
          const { texte } = composerTexte(gabarit(f), f, `fb-${jour.replace(/-/g, "")}-${f.format}-pub`);
          expect(texte).not.toMatch(/prix|coût/i);
          if (f.format === "thermopompe-semaine") verifierModele(f.modele);
          if (f.format === "duel") {
            verifierModele(f.a);
            verifierModele(f.b);
            expect(f.a.calibreBtu).toBe(f.b.calibreBtu);
            expect(f.a.typeLibelle).toBe(f.b.typeLibelle);
            expect(f.a.marqueSlug).not.toBe(f.b.marqueSlug);
          }
          if (f.format === "grand-froid") {
            expect(isCityPageIndexable(f.ville.slug)).toBe(true);
            expect(f.tiennent).toBeLessThanOrEqual(f.connues);
          }
          if (f.format === "subventions") {
            const b = getBrandStats(f.marque.slug);
            expect([b?.minLogisVert, b?.maxLogisVert]).toEqual([f.min, f.max]);
          }
          verifiees++;
        }
      }
    }
    expect(verifiees).toBe(320);
  });
});
