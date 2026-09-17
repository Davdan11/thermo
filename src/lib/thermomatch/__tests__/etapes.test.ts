import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

/* Compteur d'écrans atteints : un seul fichier JSON à côté des autres données de gestion.
   Rien sur le visiteur, rien d'inconnu, et l'entonnoir se lit dans l'ordre du parcours. */

const dir = mkdtempSync(path.join(tmpdir(), "tm-etapes-"));
beforeAll(() => {
  process.env.GESTION_DATA_DIR = dir;
});
afterAll(() => {
  delete process.env.GESTION_DATA_DIR;
  rmSync(dir, { recursive: true, force: true });
});

describe("compteur d'écrans ThermoMatch", () => {
  it("compte les écrans connus, ignore le reste, et rend l'entonnoir dans l'ordre", async () => {
    const { compterEtape, lireEtapes } = await import("../etapes-store");
    const { SCREEN_IDS, ETAPE_RESULTATS } = await import("../etapes");

    const now = new Date("2026-09-17T15:00:00Z");
    // Trois visiteurs commencent, deux vont jusqu'au bout des questions, un seul voit ses recommandations.
    for (let i = 0; i < 3; i++) await compterEtape("lieu", now);
    for (let i = 0; i < 2; i++) await compterEtape("maison", now);
    await compterEtape("enveloppe", now);
    await compterEtape(ETAPE_RESULTATS, now);
    // Une valeur inventée n'entre jamais dans le fichier.
    await compterEtape("<script>", now);
    await compterEtape("panneau-electrique", now);

    const r = await lireEtapes(30, now);
    expect(r.etapes.map((e) => e.ecran)).toEqual([...SCREEN_IDS, ETAPE_RESULTATS]);
    expect(r.total).toBe(3);
    expect(r.termines).toBe(1);
    expect(r.etapes.find((e) => e.ecran === "lieu")).toMatchObject({ n: 3, abandons: 1 });
    expect(r.etapes.find((e) => e.ecran === "maison")).toMatchObject({ n: 2, abandons: 1 });
    // Un écran jamais atteint est rendu à zéro : le trou se voit.
    expect(r.etapes.find((e) => e.ecran === "attentes")?.n).toBe(0);
    expect(r.etapes.find((e) => e.ecran === "lieu")?.part).toBe(1);
  });

  it("ne garde que la période demandée", async () => {
    const { compterEtape, lireEtapes } = await import("../etapes-store");
    const vieux = new Date("2026-08-01T15:00:00Z");
    await compterEtape("lieu", vieux);
    const r = await lireEtapes(7, new Date("2026-09-17T15:00:00Z"));
    expect(r.total).toBe(3);
  });
});
