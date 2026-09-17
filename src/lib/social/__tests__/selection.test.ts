/* Sélection du format et du sujet : déterministe, pas deux fois le même format de suite, pas le même modèle ni la même ville sur 60 jours. */
import { describe, expect, it } from "vitest";
import { zonedToUtc } from "@/lib/presence/time";
import { joursEntre, saisonDu, usageDe } from "../calendrier";
import { choisir } from "../generer";
import { choisirSujet, clesRecentes, FENETRE_JOURS, formatsPossibles, ordreDesFormats, type Trace } from "../selection";
import type { Faits, Genre } from "../types";
import { catalogueFictif } from "./fixtures";

const plusJours = (jour: string, n: number) => new Date(Date.parse(`${jour}T12:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10);

/** Simule `jours` jours : une publication par jour et une story par jour, comme le ferait la tâche planifiée. */
function simuler(debut: string, jours: number, cat = catalogueFictif()) {
  const historique: Trace[] = [];
  const faits: Array<{ jour: string; genre: Genre; f: Faits }> = [];
  for (let i = 0; i < jours; i++) {
    const jour = plusJours(debut, i);
    for (const [genre, heure] of [["story", "09:00"], ["publication", "11:00"]] as const) {
      const f = choisir({ genre, prevueLe: zonedToUtc(jour, heure), historique, catalogue: cat });
      if (!f) continue;
      faits.push({ jour, genre, f });
      historique.push({ jour, genre, format: f.format, cles: f.cles, statut: "approuvee" });
    }
  }
  return { historique, faits };
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

describe("ordre des formats", () => {
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
});

describe("simulation sur 120 jours", () => {
  const { faits } = simuler("2026-09-17", 120);

  it("jamais deux fois le même format de suite pour un même genre", () => {
    for (const genre of ["publication", "story"] as const) {
      const suite = faits.filter((x) => x.genre === genre);
      expect(suite.length).toBe(120);
      for (let i = 1; i < suite.length; i++) expect(suite[i].f.format, `${genre} ${suite[i].jour}`).not.toBe(suite[i - 1].f.format);
    }
  });

  it("tous les formats passent, dans les deux genres", () => {
    expect(new Set(faits.filter((x) => x.genre === "publication").map((x) => x.f.format)).size).toBe(6);
    expect(new Set(faits.filter((x) => x.genre === "story").map((x) => x.f.format)).size).toBe(5);
  });

  it("pas le même modèle, la même série ni la même ville sur 60 jours (publications et stories confondues)", () => {
    const vus = new Map<string, string>();
    for (const x of faits) {
      for (const k of x.f.cles.filter((c) => /^(modele|serie|ville):/.test(c))) {
        const avant = vus.get(k);
        if (avant) expect(joursEntre(avant, x.jour), `${k} le ${avant} puis le ${x.jour}`).toBeGreaterThanOrEqual(FENETRE_JOURS);
        vus.set(k, x.jour);
      }
    }
  });

  it("déterministe : mêmes données, même historique, mêmes choix", () => {
    const encore = simuler("2026-09-17", 120).faits;
    expect(encore.map((x) => `${x.jour}|${x.genre}|${x.f.cles.join(",")}`)).toEqual(faits.map((x) => `${x.jour}|${x.genre}|${x.f.cles.join(",")}`));
  });

  it("l'été, pas de grand froid", () => {
    const ete = simuler("2027-06-05", 40).faits;
    expect(ete.some((x) => x.f.format === "grand-froid")).toBe(false);
    expect(ete.every((x) => x.f.usage === "climatisation")).toBe(true);
  });
});

describe("choix du sujet", () => {
  const candidats = ["a", "b", "c"].map((id) => ({ id, cles: [`modele:${id}`] }));
  const trace = (jour: string, id: string): Trace => ({ jour, genre: "publication", format: "thermopompe-semaine", cles: [`modele:${id}`], statut: "publiee" });

  it("écarte les sujets vus depuis moins de 60 jours", () => {
    const h = [trace("2026-08-01", "a"), trace("2026-09-01", "b")];
    expect(choisirSujet({ candidats, clesDe: (c) => c.cles, historique: h, jour: "2026-09-17", graine: "x" })?.id).toBe("c");
  });

  it("modèles tous pris : aucun sujet plutôt qu'une répétition ; compteurs : le moins récent revient", () => {
    const h = [trace("2026-09-01", "a"), trace("2026-09-05", "b"), trace("2026-09-10", "c")];
    expect(choisirSujet({ candidats, clesDe: (c) => c.cles, historique: h, jour: "2026-09-17", graine: "x" })).toBeNull();
    expect(choisirSujet({ candidats, clesDe: (c) => c.cles, historique: h, jour: "2026-09-17", graine: "x", repliSiToutPris: true })?.id).toBe("a");
  });

  it("un sujet vu il y a 60 jours ou plus redevient libre", () => {
    const h = [trace("2026-07-19", "a"), trace("2026-09-05", "b"), trace("2026-09-10", "c")];
    expect(choisirSujet({ candidats, clesDe: (c) => c.cles, historique: h, jour: "2026-09-17", graine: "x" })?.id).toBe("a");
  });
});
