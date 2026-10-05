/* File des publications : période d'approbation de 7 jours, passages de statut, magasin JSON sous verrou. */
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { zonedToUtc } from "@/lib/presence/time";
import { genererPublication, traceDe } from "../generer";
import { ajouterPublications, approbationRequise, changerStatut, lireSocial, modifierTexte, normaliserReglages, normaliserSocial, peutPasser, reglagesParDefaut, statutInitial, traces } from "../store";
import type { PublicationSociale } from "../types";
import { catalogueFictif } from "./fixtures";

describe("période d'approbation", () => {
  const avec = (depart: string | null, toujoursObligatoire = false) => normaliserReglages({ approbation: { depart, toujoursObligatoire } });
  const debut = "2026-09-17T15:00:00.000Z";

  it("avant toute mise en ligne, puis pendant 7 jours : chaque élément attend l'approbation ; ensuite, approbation d'office", () => {
    expect(statutInitial(avec(null), new Date(debut))).toBe("en_attente");
    expect(statutInitial(avec(debut), new Date("2026-09-24T14:59:00.000Z"))).toBe("en_attente");
    expect(statutInitial(avec(debut), new Date("2026-09-24T15:00:00.000Z"))).toBe("approuvee");
    expect(approbationRequise(avec(debut), new Date("2026-10-30T00:00:00.000Z"))).toBe(false);
  });

  it("« garder l'approbation obligatoire » l'emporte, même après 7 jours", () => {
    expect(approbationRequise(avec(debut, true), new Date("2027-01-01T00:00:00.000Z"))).toBe(true);
  });

  it("rythme par défaut : une publication tous les 2 jours à 10 h, une story chaque jour à 9 h", () => {
    const r = reglagesParDefaut();
    expect(r.publication).toEqual({ actif: true, tousLesJours: 2, heure: "10:00" });
    expect(r.story).toEqual({ actif: true, tousLesJours: 1, heure: "09:00" });
    expect(normaliserReglages({ publication: { actif: true, tousLesJours: 99, heure: "25:00" } }).publication).toEqual({ actif: true, tousLesJours: 14, heure: "10:00" });
  });

  it("le propriétaire peut toujours arrêter un élément approuvé ; un élément publié ne change plus", () => {
    expect(peutPasser("approuvee", "refusee")).toBe(true);
    expect(peutPasser("approuvee", "en_attente")).toBe(true);
    expect(peutPasser("en_attente", "publiee")).toBe(false);
    expect(peutPasser("publiee", "refusee")).toBe(false);
    expect(peutPasser("echec", "approuvee")).toBe(true);
  });
});

describe("magasin", () => {
  let dir = "";
  const ancien = process.env.SOCIAL_FILE;
  beforeAll(async () => {
    dir = await mkdtemp(path.join(os.tmpdir(), "social-"));
    process.env.SOCIAL_FILE = path.join(dir, "social-facebook.json");
  });
  afterAll(async () => {
    if (ancien === undefined) delete process.env.SOCIAL_FILE;
    else process.env.SOCIAL_FILE = ancien;
    await rm(dir, { recursive: true, force: true });
  });

  it("enregistre, refuse un doublon (même identifiant ou même case), trace chaque changement", async () => {
    const cat = catalogueFictif();
    const maintenant = new Date("2026-09-17T12:00:00.000Z");
    const pubs: PublicationSociale[] = [];
    const data0 = await lireSocial();
    const historique = traces(data0);
    for (const [genre, jour] of [["publication", "2026-09-17"], ["story", "2026-09-17"], ["publication", "2026-09-19"]] as const) {
      const p = await genererPublication({ genre, prevueLe: zonedToUtc(jour, genre === "story" ? "09:00" : "10:00"), maintenant, historique, catalogue: cat, reglages: data0.reglages, ia: null });
      expect(p).not.toBeNull();
      pubs.push(p!);
      historique.push(traceDe(p!));
    }
    expect(pubs.every((p) => p.statut === "en_attente" && p.historique[0].par === "robot" && p.envoi.tentatives === 0)).toBe(true);
    expect(await ajouterPublications(pubs)).toEqual({ ajoutees: pubs.map((p) => p.id), ignorees: [] });
    expect((await ajouterPublications([pubs[0]])).ignorees).toEqual([pubs[0].id]);
    expect((await ajouterPublications([{ ...pubs[0], id: `${pubs[0].id}-2` }])).ignorees).toEqual([`${pubs[0].id}-2`]);

    const data = await lireSocial();
    expect(data.publications.map((p) => p.id).sort()).toEqual(pubs.map((p) => p.id).sort());
    expect(traces(data).every((t) => t.cles.length > 0 && !!t.accroche && !!t.texteVisuel)).toBe(true);

    expect(await changerStatut(pubs[0].id, "approuvee", "proprietaire@exemple.ca")).toEqual({ ok: true });
    expect(await changerStatut(pubs[0].id, "en_attente", "proprietaire@exemple.ca", "À revoir")).toEqual({ ok: true });
    expect((await changerStatut(pubs[1].id, "publiee", "robot")).ok).toBe(false);
    const p0 = (await lireSocial()).publications.find((p) => p.id === pubs[0].id)!;
    expect(p0.historique.map((h) => h.statut)).toEqual(["en_attente", "approuvee", "en_attente"]);
    expect(p0.historique[2].note).toBe("À revoir");

    // Légende : modifiable avant l'envoi, à condition de garder le lien suivi.
    expect((await modifierTexte(pubs[1].id, "Texte sans lien", "proprietaire@exemple.ca")).ok).toBe(false);
    expect(await modifierTexte(pubs[1].id, `Nouvelle accroche pour la story. Suite.\n\n${pubs[1].lien}`, "proprietaire@exemple.ca")).toEqual({ ok: true });
    const p1 = (await lireSocial()).publications.find((p) => p.id === pubs[1].id)!;
    expect(p1.modifiee).toBe(true);
    expect(p1.accroche).toBe("Nouvelle accroche pour la story. Suite.");
    expect(p1.historique.at(-1)?.note).toBe("Texte modifié");

    const brut = JSON.parse(await readFile(process.env.SOCIAL_FILE!, "utf8"));
    expect(brut.version).toBe(2);
    expect(brut.journal.length).toBeGreaterThan(0);
  });

  it("ignore les entrées invalides à la lecture", () => {
    const d = normaliserSocial({ publications: [{ id: "n'importe quoi" } as unknown as PublicationSociale] });
    expect(d.publications).toEqual([]);
    expect(d.reglages.approbation.depart).toBeNull();
  });
});
