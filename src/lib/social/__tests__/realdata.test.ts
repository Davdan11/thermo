/* Un an de file sur les VRAIES données du site (une story par jour à 9 h, une publication tous les deux jours à 10 h,
   à partir du 17 septembre 2026) : zéro sujet repris, zéro accroche identique, un texte de visuel différent chaque fois,
   chaque texte et chaque visuel sans nombre hors des faits, chaque sujet tiré d'une page publique réelle.
   Rapporte aussi le nombre de sujets distincts disponibles par format (durée de vie des bassins). */
import { existsSync } from "node:fs";
import path from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";
import { isCityPageIndexable } from "@/lib/seo/cities-quality";
import { getBrandStats } from "@/lib/seo/programmatic";
import { zonedToUtc } from "@/lib/presence/time";
import { catalogueSocial, type CatalogueSocial } from "../catalogue";
import { genererPublication, traceDe } from "../generer";
import { nombresInconnus, verifierTexte } from "../redaction";
import { empreinte, type Trace } from "../selection";
import { reglagesParDefaut } from "../store";
import { sujetsDu } from "../sujets";
import { FORMATS, type Genre, type ModeleFaits, type PublicationSociale } from "../types";
import { maquette, toutLeTexte } from "../visuels/maquettes";

const plusJours = (jour: string, n: number) => new Date(Date.parse(`${jour}T12:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10);
const existe = (publicPath: string) => existsSync(path.join(process.cwd(), "public", ...publicPath.split("/").filter(Boolean)));

function verifierModele(m: ModeleFaits) {
  const r = registry.modelBySlug.get(m.slug);
  expect(r?.id, m.slug).toBe(m.id);
  expect(r?.status).toBe("published");
  expect(registry.brandById.get(r!.brandId)?.activeInQuebec).toBe(true);
  expect(m.logisVert).toBeGreaterThan(0);
  if (m.photo) {
    expect(m.photo).not.toMatch(/representatives|^https?:/);
    expect(existe(m.photo), m.photo).toBe(true);
  }
}

describe("un an de file sur les données réelles", () => {
  const DEBUT = "2026-09-17";
  let cat: CatalogueSocial;
  const pubs: PublicationSociale[] = [];
  const vides: string[] = [];

  beforeAll(async () => {
    cat = catalogueSocial();
    const historique: Trace[] = [];
    const idsPris = new Set<string>();
    const reglages = reglagesParDefaut();
    for (let i = 0; i < 365; i++) {
      const jour = plusJours(DEBUT, i);
      const cases: Array<[Genre, string]> = [["story", "09:00"], ...(i % 2 === 0 ? ([["publication", "10:00"]] as Array<[Genre, string]>) : [])];
      for (const [genre, heure] of cases) {
        const p = await genererPublication({ genre, prevueLe: zonedToUtc(jour, heure), maintenant: new Date(`${DEBUT}T12:00:00Z`), historique, catalogue: cat, reglages, ia: null, idsPris });
        if (!p) {
          vides.push(`${jour} ${genre}`);
          continue;
        }
        pubs.push(p);
        historique.push(traceDe(p));
        idsPris.add(p.id);
      }
    }
  }, 600_000);

  it("bassins : sujets distincts disponibles par format (hiver et été), et répartition sur l'année", () => {
    const bassins = FORMATS.map((f) => ({
      format: f,
      chauffage: sujetsDu(f, cat, "chauffage", "2026-10-01").length,
      climatisation: sujetsDu(f, cat, "climatisation", "2027-07-01").length,
      publies: pubs.filter((p) => p.format === f).length,
    }));
    console.log(`\nBassins (sujets distincts) et publications sur 365 jours :\n${bassins.map((b) => `  ${b.format.padEnd(20)} hiver ${String(b.chauffage).padStart(5)}  été ${String(b.climatisation).padStart(5)}  utilisés ${b.publies}`).join("\n")}\n  cases sans sujet neuf : ${vides.length}`);
    expect(pubs.length + vides.length).toBe(365 + 183);
    expect(vides).toEqual([]);
    for (const b of bassins) expect(b.publies, b.format).toBeGreaterThan(0);
  });

  it("zéro sujet repris : aucune clé (sujet, modèle, série, ville, paire) deux fois dans l'année", () => {
    const vues = new Map<string, string>();
    for (const p of pubs)
      for (const k of p.faits.cles) {
        expect(vues.get(k), `${k} repris par ${p.id}`).toBeUndefined();
        vues.set(k, p.id);
      }
  });

  it("zéro accroche identique et un texte de visuel différent pour chaque élément", () => {
    const accroches = new Map<string, string>();
    const visuels = new Map<string, string>();
    for (const p of pubs) {
      const a = empreinte(p.accroche);
      expect(accroches.get(a), `« ${p.accroche} » (${p.id})`).toBeUndefined();
      accroches.set(a, p.id);
      const v = empreinte(p.texteVisuel);
      expect(visuels.get(v), `visuel « ${p.texteVisuel} » (${p.id})`).toBeUndefined();
      visuels.set(v, p.id);
    }
    // Mises en page : aucune n'est répétée deux fois de suite pour un même format.
    for (const f of FORMATS) {
      const suite = pubs.filter((p) => p.format === f).sort((a, b) => a.prevueLe.localeCompare(b.prevueLe));
      for (let i = 1; i < suite.length; i++) if (suite.length > 1) expect(suite[i].variante, `${f} ${suite[i].id}`).not.toBe(suite[i - 1].variante);
    }
  });

  it("chaque texte passe le garde-fou, chaque visuel n'affiche que des faits, chaque sujet vient d'une page réelle", () => {
    for (const p of pubs) {
      const corps = p.texte.slice(0, p.texte.lastIndexOf("\n\n"));
      expect(verifierTexte(corps, p.faits), `${p.id} ${p.faits.sujet}`).toEqual([]);
      expect(p.texte).not.toMatch(/prix|coût/i);
      expect(p.lien).toContain(`utm_content=${p.id}`);
      expect(nombresInconnus(toutLeTexte(maquette(p.faits, p.variante)), p.faits), `${p.id} visuel`).toEqual([]);
      const f = p.faits;
      if (f.format === "thermopompe-semaine" || f.format === "nouveautes") verifierModele(f.modele);
      if (f.format === "nouveautes") expect(f.marcheLe <= p.prevueLe.slice(0, 10)).toBe(true);
      if (f.format === "duel") {
        verifierModele(f.a);
        verifierModele(f.b);
        expect(f.a.calibreBtu).toBe(f.b.calibreBtu);
        expect(f.a.typeLibelle).toBe(f.b.typeLibelle);
        expect(f.a.marqueSlug).not.toBe(f.b.marqueSlug);
      }
      if (f.format === "grand-froid" && f.angle.type === "ville") expect(isCityPageIndexable(f.angle.ville.slug)).toBe(true);
      if (f.format === "thermomatch") expect(isCityPageIndexable(f.ville.slug)).toBe(true);
      if (f.format === "subventions" && f.angle.type === "marque") {
        const b = getBrandStats(f.angle.marque.slug);
        expect(b?.maxLogisVert).toBe(f.angle.max);
      }
      if (f.format === "chiffre" && f.angle.type === "classement") verifierModele(f.angle.classement.modele);
    }
  });
});
