/* Réponses des clients (/suivi/<jeton>) : note du sondage (mauvaise note → alerte au propriétaire et tâche « rappeler
   le client », une fois), statut LogisVert, désabonnement des suivis, route de réponse (origine, un clic RFC 8058). */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const alerts = vi.hoisted(() => ({ calls: [] as unknown[] }));
vi.mock("next/server", async (orig) => ({ ...(await orig<typeof import("next/server")>()), after: (fn: () => unknown) => void fn() }));
vi.mock("@/lib/gestion/automatisations/followup", async (orig) => {
  const real = await orig<typeof import("@/lib/gestion/automatisations/followup")>();
  return { ...real, alertOwner: vi.fn(async (a: unknown) => void alerts.calls.push(a)) };
});

import { POST as respond } from "@/app/suivi/[token]/repondre/route";
import * as followup from "../followup";
import { contactKeys, ensureDossier, readAfterSale, readAutomations, suppressionHash } from "../store";
import { fakeChannels, tempDir, testEnv, writeStores } from "../../commissions/__tests__/fixtures";

// alertOwner réel (le module est simulé pour la route) : chargé à part.
const realFollowup = await vi.importActual<typeof import("../followup")>("../followup");

describe("réponses du client", () => {
  const env = process.env;
  let dir: string;
  let token: string;
  beforeEach(async () => {
    dir = await tempDir();
    process.env = testEnv(dir);
    alerts.calls.length = 0;
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
    await writeStores(dir, {});
    token = (await ensureDossier("j_testjob0001")).token;
  });
  afterEach(async () => {
    process.env = env;
    vi.unstubAllGlobals();
    await rm(dir, { recursive: true, force: true });
  });

  it("le dossier ne montre que prénom, ville, dates et appareil ; un autre jeton ne voit rien", async () => {
    const v = await followup.getSuiviView(token);
    expect(v).toMatchObject({ firstName: "Camille", city: "Laval", jobNumber: 7, installedOn: "2026-09-10" });
    expect(JSON.stringify(v)).not.toMatch(/@|514/);
    expect(await followup.getSuiviView("B".repeat(43))).toBeNull();
  });

  it("mauvaise note : une alerte ; même note répétée : aucune de plus ; bonne note : aucune", async () => {
    expect(await followup.answerSurvey(token, 2, "Trop de bruit")).toMatchObject({ ok: true, alert: { kind: "note", rating: 2, message: "Trop de bruit" } });
    expect(await followup.answerSurvey(token, 2, "Trop de bruit")).toMatchObject({ ok: true, alert: null });
    expect(await followup.answerSurvey(token, 5, "")).toMatchObject({ ok: true, alert: null });
    expect((await readAfterSale()).dossiers.j_testjob0001.survey).toMatchObject({ rating: 5, comment: "Trop de bruit" });
    expect(await followup.answerSurvey(token, 9, "")).toEqual({ ok: false });
  });

  it("alerte réelle : tâche « rappeler le client » et courriel au propriétaire, notés au journal", async () => {
    const tasks: Array<{ title: string }> = [];
    const f = fakeChannels();
    await realFollowup.alertOwner({ kind: "note", jobId: "j_testjob0001", rating: 2, message: "Trop de bruit" }, { channels: f.ch, crm: { addTask: async (t) => void tasks.push(t), clientIdForJob: async () => null } });
    expect(tasks[0].title).toBe("Rappeler Camille : note de 2/5 (job n° 7)");
    expect(f.count("ownerMail")).toBe(1);
    const log = Object.values((await readAutomations()).log);
    expect(log[0]).toMatchObject({ automation: "alerte-proprietaire", status: "fait" });
  });

  it("LogisVert : « besoin d’aide » alerte ; « reçue » est noté", async () => {
    expect(await followup.answerLogisvert(token, "besoin-aide")).toMatchObject({ alert: { kind: "logisvert-aide" } });
    expect(await followup.answerLogisvert(token, "recue")).toMatchObject({ ok: true, alert: null });
    expect((await readAfterSale()).dossiers.j_testjob0001.logisvert?.status).toBe("recue");
    expect(await followup.answerLogisvert(token, "n-importe-quoi")).toEqual({ ok: false });
  });

  it("désabonnement : le téléphone et le courriel du job sont retirés des suivis", async () => {
    expect(await followup.unsubscribeSuivi(token)).toBe(true);
    const suppressed = (await readAfterSale()).suppressed;
    for (const k of contactKeys({ phone: "514 555-0199", email: "camille@exemple.ca" })) expect(suppressed).toContain(suppressionHash(k));
  });

  it("route : origine inconnue refusée ; formulaire valide → retour à la page ; alerte après la réponse", async () => {
    const url = `http://localhost:3001/suivi/${token}/repondre`;
    const noOrigin = await respond(new Request(url, { method: "POST", body: "action=sondage&note=1" }) as never, { params: Promise.resolve({ token }) });
    expect(noOrigin.status).toBe(403);
    const ok = await respond(new Request(url, { method: "POST", body: "action=sondage&note=1&commentaire=Rien%20ne%20marche", headers: { origin: "http://localhost:3001", host: "localhost:3001", "content-type": "application/x-www-form-urlencoded" } }) as never, { params: Promise.resolve({ token }) });
    expect(ok.status).toBe(303);
    expect(ok.headers.get("location")).toContain(`/suivi/${token}?ok=sondage&note=1`);
    expect(alerts.calls).toHaveLength(1);
    const bad = await respond(new Request(url, { method: "POST", body: "action=sondage&note=7", headers: { origin: "http://localhost:3001", host: "localhost:3001" } }) as never, { params: Promise.resolve({ token }) });
    expect(bad.status).toBe(400);
  });

  it("désabonnement en un clic des messageries (RFC 8058), sans en-tête Origin", async () => {
    const res = await respond(new Request(`http://localhost:3001/suivi/${token}/repondre?action=desabonnement`, { method: "POST", body: "List-Unsubscribe=One-Click" }) as never, { params: Promise.resolve({ token }) });
    expect(res.status).toBe(200);
    expect((await readAfterSale()).suppressed.length).toBe(2);
  });
});
