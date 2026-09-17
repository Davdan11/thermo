/* File des publications : période d'approbation de 7 jours, passages de statut, magasin JSON sous verrou. */
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { zonedToUtc } from "@/lib/presence/time";
import { genererPublication, traceDe } from "../generer";
import { ajouterPublications, changerStatut, enPeriodeApprobation, lireSocial, modifierTexte, normaliserSocial, peutPasser, statutInitial, traces } from "../store";
import type { PublicationSociale } from "../types";
import { catalogueFictif } from "./fixtures";

describe("période d'approbation", () => {
  const debut = "2026-09-17T15:00:00.000Z";
  it("tout attend l'approbation pendant 7 jours, puis passe approuvé d'office", () => {
    expect(statutInitial(null, new Date(debut))).toBe("en_attente");
    expect(statutInitial(debut, new Date("2026-09-24T14:59:00.000Z"))).toBe("en_attente");
    expect(statutInitial(debut, new Date("2026-09-24T15:00:00.000Z"))).toBe("approuvee");
    expect(enPeriodeApprobation(debut, new Date("2026-10-30T00:00:00.000Z"))).toBe(false);
  });

  it("le propriétaire peut toujours arrêter une publication approuvée ; une publiée ne change plus", () => {
    expect(peutPasser("approuvee", "refusee")).toBe(true);
    expect(peutPasser("approuvee", "en_attente")).toBe(true);
    expect(peutPasser("en_attente", "publiee")).toBe(false);
    expect(peutPasser("publiee", "refusee")).toBe(false);
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

  it("enregistre, note le démarrage, refuse un doublon et trace chaque changement de statut", async () => {
    const cat = catalogueFictif();
    const maintenant = new Date("2026-09-17T12:00:00.000Z");
    const pubs: PublicationSociale[] = [];
    const historique = traces(await lireSocial());
    for (const [genre, jour] of [["publication", "2026-09-17"], ["story", "2026-09-17"], ["publication", "2026-09-18"]] as const) {
      const p = await genererPublication({ genre, prevueLe: zonedToUtc(jour, "11:00"), maintenant, historique, catalogue: cat, demarreLe: null });
      expect(p).not.toBeNull();
      pubs.push(p!);
      historique.push(traceDe(p!));
    }
    expect(pubs.every((p) => p.statut === "en_attente" && p.historique[0].par === "robot")).toBe(true);
    expect(await ajouterPublications(pubs, maintenant)).toEqual({ ajoutees: pubs.map((p) => p.id), ignorees: [] });
    expect((await ajouterPublications([pubs[0]], maintenant)).ignorees).toEqual([pubs[0].id]);

    const data = await lireSocial();
    expect(data.demarreLe).toBe(maintenant.toISOString());
    expect(data.publications.map((p) => p.id).sort()).toEqual(pubs.map((p) => p.id).sort());
    expect(traces(data).every((t) => t.cles.length > 0)).toBe(true);

    expect(await changerStatut(pubs[0].id, "approuvee", "proprietaire@exemple.ca")).toEqual({ ok: true });
    expect(await changerStatut(pubs[0].id, "en_attente", "proprietaire@exemple.ca", "À revoir")).toEqual({ ok: true });
    expect((await changerStatut(pubs[1].id, "publiee", "robot")).ok).toBe(false);
    const p0 = (await lireSocial()).publications.find((p) => p.id === pubs[0].id)!;
    expect(p0.historique.map((h) => h.statut)).toEqual(["en_attente", "approuvee", "en_attente"]);
    expect(p0.historique[2].note).toBe("À revoir");

    // Modifier le texte : permis avant l'envoi, à condition de garder le lien suivi.
    expect((await modifierTexte(pubs[1].id, "Texte sans lien", "proprietaire@exemple.ca")).ok).toBe(false);
    expect(await modifierTexte(pubs[1].id, `Nouveau texte.\n\n${pubs[1].lien}`, "proprietaire@exemple.ca")).toEqual({ ok: true });
    const p1 = (await lireSocial()).publications.find((p) => p.id === pubs[1].id)!;
    expect(p1.modifiee).toBe(true);
    expect(p1.historique.at(-1)?.note).toBe("Texte modifié");

    const brut = JSON.parse(await readFile(process.env.SOCIAL_FILE!, "utf8"));
    expect(brut.version).toBe(1);
  });

  it("ignore les entrées invalides à la lecture", () => {
    const d = normaliserSocial({ version: 1, demarreLe: null, publications: [{ id: "n'importe quoi" } as unknown as PublicationSociale] });
    expect(d.publications).toEqual([]);
  });
});
