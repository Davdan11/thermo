/* Sélection du format, du sujet et de la mise en page : déterministe, pas deux fois le même format de suite,
   aucune clé (modèle, série, ville, paire) ni accroche reprise sur 365 jours ; un format épuisé cède sa place. */
import { beforeAll, describe, expect, it } from "vitest";
import { zonedToUtc } from "@/lib/presence/time";
import { joursEntre, saisonDu, usageDe } from "../calendrier";
import { genererPublication, traceDe } from "../generer";
import { candidatsLibres, choisirSujet, clesRecentes, empreinte, FENETRE_JOURS, formatsPossibles, ordreDesFormats, varianteSuivante, type Trace } from "../selection";
import type { Genre, PublicationSociale } from "../types";
import { catalogueFictif, reglagesFictifs } from "./fixtures";

const plusJours = (jour: string, n: number) => new Date(Date.parse(`${jour}T12:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10);

/** Simule `jours` jours : une story chaque jour, une publication tous les deux jours. */
async function simuler(debut: string, jours: number, cat = catalogueFictif()) {
  const historique: Trace[] = [];
  const pubs: PublicationSociale[] = [];
  const idsPris = new Set<string>();
  for (let i = 0; i < jours; i++) {
    const jour = plusJours(debut, i);
    const cases: Array<[Genre, string]> = [["story", "09:00"], ...(i % 2 === 0 ? ([["publication", "10:00"]] as Array<[Genre, string]>) : [])];
    for (const [genre, heure] of cases) {
      const p = await genererPublication({ genre, prevueLe: zonedToUtc(jour, heure), maintenant: new Date(`${debut}T12:00:00Z`), historique, catalogue: cat, reglages: reglagesFictifs(), ia: null, idsPris });
      if (!p) continue;
      pubs.push(p);
      historique.push(traceDe(p));
      idsPris.add(p.id);
    }
  }
  return pubs;
}

describe("saisons", () => {
  it("l'été met la climatisation en avant, le reste de l'année le chauffage", () => {
    expect(usageDe(saisonDu("2026-07-15"))).toBe("climatisation");
    expect(usageDe(saisonDu("2026-09-17"))).toBe("chauffage");
    expect(usageDe(saisonDu("2027-01-10"))).toBe("chauffage");
    expect(saisonDu("2026-12-01")).toBe("hiver");
  });

  it("pas de grand froid l'été ni de duel en story", () => {
    expect(formatsPossibles("climatisation", "publication")).not.toContain("grand-froid");
    expect(formatsPossibles("chauffage", "publication")).toContain("grand-froid");
    expect(formatsPossibles("chauffage", "story")).not.toContain("duel");
  });
});

describe("ordre des formats et mises en page", () => {
  it("le dernier format du même genre ne passe jamais en premier", () => {
    const h: Trace[] = [{ jour: "2026-09-16", genre: "publication", format: "thermomatch", cles: [], statut: "publiee" }];
    const ordre = ordreDesFormats(h, "2026-09-17", "publication", "chauffage");
    expect(ordre[0]).not.toBe("thermomatch");
    expect(ordre[ordre.length - 1]).toBe("thermomatch");
  });

  it("une publication refusée ne compte pas", () => {
    const h: Trace[] = [{ jour: "2026-09-16", genre: "publication", format: "duel", cles: ["modele:x"], statut: "refusee" }];
    expect(ordreDesFormats(h, "2026-09-17", "publication", "chauffage")[0]).toBe("thermopompe-semaine");
    expect(clesRecentes(h, "2026-09-17").size).toBe(0);
  });

  it("la mise en page tourne pour un même format", () => {
    const h: Trace[] = [{ jour: "2026-09-16", genre: "story", format: "chiffre", cles: [], statut: "approuvee", variante: 2 }];
    expect(varianteSuivante(h, "chiffre", "2026-09-17", 3)).toBe(0);
    expect(varianteSuivante(h, "duel", "2026-09-17", 2)).toBe(0);
    expect(varianteSuivante([{ ...h[0], variante: 0 }], "chiffre", "2026-09-17", 3)).toBe(1);
  });
});

describe("simulation sur 60 jours (catalogue fictif)", () => {
  let pubs: PublicationSociale[] = [];
  beforeAll(async () => {
    pubs = await simuler("2026-09-17", 60);
  });

  it("jamais deux fois le même format de suite pour un même genre", () => {
    for (const genre of ["publication", "story"] as const) {
      const suite = pubs.filter((x) => x.genre === genre);
      expect(suite.length).toBeGreaterThan(genre === "story" ? 50 : 25);
      for (let i = 1; i < suite.length; i++) expect(suite[i].format, `${genre} ${suite[i].prevueLe}`).not.toBe(suite[i - 1].format);
    }
  });

  it("aucune clé, aucune accroche et aucun texte de visuel repris (publications et stories confondues)", () => {
    const cles = new Map<string, string>();
    const accroches = new Set<string>();
    const visuels = new Set<string>();
    for (const p of pubs) {
      for (const k of p.faits.cles) {
        expect(cles.has(k), `${k} : ${cles.get(k)} puis ${p.id}`).toBe(false);
        cles.set(k, p.id);
      }
      expect(accroches.has(empreinte(p.accroche)), p.accroche).toBe(false);
      accroches.add(empreinte(p.accroche));
      expect(visuels.has(empreinte(p.texteVisuel)), p.texteVisuel).toBe(false);
      visuels.add(empreinte(p.texteVisuel));
    }
  });

  it("déterministe : mêmes données, même historique, mêmes choix", async () => {
    const encore = await simuler("2026-09-17", 60);
    expect(encore.map((x) => `${x.id}|${x.faits.sujetId}|${x.variante}|${x.accroche}`)).toEqual(pubs.map((x) => `${x.id}|${x.faits.sujetId}|${x.variante}|${x.accroche}`));
  });

  it("l'été, pas de grand froid", async () => {
    const ete = await simuler("2027-06-05", 30);
    expect(ete.some((x) => x.format === "grand-froid")).toBe(false);
    expect(ete.every((x) => x.faits.usage === "climatisation")).toBe(true);
  });
});

describe("bassin épuisé : le format cède sa place, jamais de répétition", () => {
  it("un seul modèle : il passe une fois, puis la vedette ne revient pas de l'année", async () => {
    const cat = { ...catalogueFictif(1), villes: catalogueFictif().villes.slice(0, 2) };
    const pubs = await simuler("2026-10-01", 20, cat);
    expect(pubs.filter((p) => p.format === "thermopompe-semaine").length).toBeLessThanOrEqual(1);
    const vus = new Set<string>();
    for (const p of pubs) {
      expect(vus.has(p.faits.sujetId)).toBe(false);
      vus.add(p.faits.sujetId);
    }
  });
});

describe("choix du sujet", () => {
  const candidats = ["a", "b", "c"].map((id) => ({ id, cles: [`modele:${id}`] }));
  const trace = (jour: string, id: string): Trace => ({ jour, genre: "publication", format: "thermopompe-semaine", cles: [`modele:${id}`], statut: "publiee" });

  it("écarte les sujets vus depuis moins de 365 jours", () => {
    const h = [trace("2026-01-01", "a"), trace("2026-09-01", "b")];
    expect(FENETRE_JOURS).toBe(365);
    expect(choisirSujet({ candidats, clesDe: (c) => c.cles, historique: h, jour: "2026-09-17", graine: "x" })?.id).toBe("c");
  });

  it("tout est pris : aucun sujet plutôt qu'une répétition", () => {
    const h = [trace("2026-02-01", "a"), trace("2026-09-05", "b"), trace("2026-09-10", "c")];
    expect(candidatsLibres({ candidats, clesDe: (c) => c.cles, historique: h, jour: "2026-09-17", graine: "x" })).toEqual([]);
  });

  it("un sujet vu il y a 365 jours ou plus redevient libre", () => {
    const h = [trace("2025-09-17", "a"), trace("2026-09-05", "b"), trace("2026-09-10", "c")];
    expect(joursEntre("2025-09-17", "2026-09-17")).toBe(365);
    expect(choisirSujet({ candidats, clesDe: (c) => c.cles, historique: h, jour: "2026-09-17", graine: "x" })?.id).toBe("a");
  });
});
