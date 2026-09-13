/* Accès du volet C : sans session, l'agenda renvoie vers la connexion et les Server Actions ne font rien ; le proxy
   redirige ; avec une session, l'agenda se construit même sans données et les actions valident leurs entrées.
   Puis le service de bout en bout (dossier temporaire) : modèles, tâches à étapes, consentement, ThermoMatch. */
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => (name === "tav_gestion" && jar.value ? { name, value: jar.value } : undefined),
    set: vi.fn(),
  }),
  headers: async () => new Headers({ host: "localhost:3001" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));

import * as actions from "@/app/gestion/(prive)/ventes-actions";
import AgendaPage from "@/app/gestion/(prive)/agenda/page";
import { proxy } from "@/proxy";
import { createSessionToken } from "../../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../../auth/secret";
import { freshIndex, resetCrmMemo } from "../../crm/service";
import { readCrm } from "../../crm/store";
import * as ventes from "../service";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const sp = <T,>(v: T) => Promise.resolve(v);
const NOW = new Date("2026-09-16T15:00:00Z");

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-crm-c-acces-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), TEXTOS_DATA_DIR: dir, RELANCES_FILE: path.join(dir, "relances.json"), ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  resetCrmMemo();
  jar.value = undefined;
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  resetCrmMemo();
  await rm(dir, { recursive: true, force: true });
});

async function journal(lines: Array<Record<string, unknown>>) {
  await mkdir(path.join(dir, "leads"), { recursive: true });
  await writeFile(path.join(dir, "leads", "2026-09.jsonl"), lines.map((l) => JSON.stringify(l)).join("\n") + "\n");
}

describe("sans session", () => {
  it("l'agenda renvoie vers la connexion ; chaque action aussi, sans rien écrire", async () => {
    expect(await rejected(AgendaPage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    const fd = new FormData();
    fd.set("title", "x");
    fd.set("name", "x");
    const calls: Array<Promise<unknown>> = [
      actions.createComplexTaskAction(undefined, fd),
      actions.toggleStepAction("x_abcdefgh123", "e_abcdefgh123", true),
      actions.addStepAction("x_abcdefgh123", "x"),
      actions.setComplexDoneAction("x_abcdefgh123", true),
      actions.deleteComplexTaskAction("x_abcdefgh123"),
      actions.saveTemplateAction(undefined, fd),
      actions.deleteTemplateAction("p_abcdefgh123"),
      actions.addStarterTemplatesAction(),
      actions.saveSalesSettingsAction(undefined, fd),
      actions.setSeasonConsentAction("c_0123456789ab", true, "au téléphone"),
    ];
    for (const c of calls) expect(await rejected(c)).toContain("/gestion/connexion");
    const d = await readCrm();
    expect([d.complexTasks.length, d.taskTemplates.length, Object.keys(d.seasonConsents).length]).toEqual([0, 0, 0]);
  });

  it("le proxy redirige aussi", () => {
    const res = proxy(new NextRequest("http://localhost:3001/gestion/agenda?vue=mois"));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe("http://localhost:3001/gestion/connexion");
  });
});

describe("avec une session valide", () => {
  it("l'agenda se construit sans données ; les actions valident leurs entrées avant d'écrire", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    await expect(AgendaPage({ searchParams: sp({ vue: "semaine", date: "2026-09-16" }) })).resolves.toBeTruthy();
    expect(await actions.toggleStepAction("../../etc", "e_abcdefgh123", true)).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.setSeasonConsentAction("c_x", true, "")).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.deleteTemplateAction("p_../x")).toEqual({ ok: false, error: "Demande invalide." });
    const bad = new FormData();
    bad.set("hotViews", "1");
    expect(await actions.saveSalesSettingsAction(undefined, bad)).toMatchObject({ ok: false });
    const probs = new FormData();
    for (const [k, v] of Object.entries({ hotViews: "3", hotWindowDays: "7", coolingMonth: "4", coolingDay: "1", heatingMonth: "9", heatingDay: "1", p_nouvelle: "", p_ouverte: "45" })) probs.set(k, v);
    expect(await actions.saveSalesSettingsAction(undefined, probs)).toEqual({ ok: true, message: "Réglages enregistrés." });
    expect((await readCrm()).salesSettings).toMatchObject({ hotViews: 3, coolingStart: "04-01", heatingStart: "09-01", stageProbabilities: { ouverte: 0.45 } });
  });
});

describe("service (dossier temporaire)", () => {
  it("modèles de départ, tâche à étapes depuis un modèle rattachée à un client, cocher, terminer, supprimer", async () => {
    await journal([{ id: "a1", at: "2026-09-10T14:00:00.000Z", kind: "soumission", lead: { firstName: "Julie", email: "julie@exemple.ca", phone: "514 555-0142" } }]);
    const [c] = (await freshIndex(NOW)).clients;
    await ventes.addStarterTemplates("proprio@exemple.ca", NOW);
    await ventes.addStarterTemplates("proprio@exemple.ca", NOW);
    const tpls = (await readCrm()).taskTemplates;
    expect(tpls.map((t) => t.name)).toEqual(["Nouvelle installation", "Soumission commerciale"]);
    expect(await ventes.createComplexTask({ title: "", clientId: null, jobId: null, templateId: null, dueYmd: null, steps: [], notes: "" }, "p", NOW)).toMatchObject({ ok: false });
    expect(await ventes.createComplexTask({ title: "x", clientId: "c_ffffffffffff", jobId: null, templateId: null, dueYmd: null, steps: [], notes: "" }, "p", NOW)).toEqual({ ok: false, error: "Client introuvable." });
    const r = await ventes.createComplexTask({ title: "", clientId: c.b.id, jobId: null, templateId: tpls[0].id, dueYmd: "2026-09-30", steps: ["Photo du panneau"], notes: "" }, "proprio@exemple.ca", NOW);
    expect(r.ok).toBe(true);
    const t = (await readCrm()).complexTasks[0];
    expect(t).toMatchObject({ title: "Nouvelle installation", clientId: c.b.id, templateId: tpls[0].id, dueAt: "2026-09-30T21:00:00.000Z" });
    expect(t.steps.map((s) => s.label)).toEqual([...tpls[0].steps.map((s) => s.label), "Photo du panneau"]);
    expect(await ventes.toggleStep(t.id, t.steps[0].id, true, "proprio@exemple.ca", NOW)).toEqual({ ok: true });
    resetCrmMemo();
    const view = await ventes.complexTasksView({ clientId: c.b.id });
    expect(view.tasks[0]).toMatchObject({ title: "Nouvelle installation", progress: { done: 1, total: tpls[0].steps.length + 1 }, client: { id: c.b.id, who: "Julie" } });
    expect(JSON.stringify(view)).not.toMatch(/@|\d{3}[ .-]?\d{3}[ .-]?\d{4}/);
    expect(await ventes.setComplexDone(t.id, true, "proprio@exemple.ca", NOW)).toEqual({ ok: true });
    resetCrmMemo();
    expect((await ventes.complexTasksView({})).tasks).toEqual([]);
    expect(await ventes.deleteComplexTask(t.id)).toEqual({ ok: true });
    expect((await readCrm()).complexTasks).toEqual([]);
  });

  it("consentement à la relance de saison : la façon est obligatoire ; retiré, il reste consigné", async () => {
    await journal([{ id: "b1", at: "2026-09-10T14:00:00.000Z", kind: "contact", lead: { firstName: "Marc", phone: "450 555-0177" } }]);
    const [c] = (await freshIndex(NOW)).clients;
    expect(await ventes.setSeasonConsent(c.b.id, true, "  ", "p", NOW)).toMatchObject({ ok: false });
    expect(await ventes.setSeasonConsent(c.b.id, true, "au téléphone", "proprio@exemple.ca", NOW)).toEqual({ ok: true });
    expect((await readCrm()).seasonConsents[c.b.id]).toMatchObject({ note: "au téléphone", by: "proprio@exemple.ca" });
    await ventes.setSeasonConsent(c.b.id, false, "", "proprio@exemple.ca", NOW);
    expect((await readCrm()).seasonConsents[c.b.id].withdrawnAt).toBe(NOW.toISOString());
  });

  it("ThermoMatch : identifiant inconnu ou invalide, rien ; demande sans modèle reconnu, aucune machine inventée", async () => {
    await journal([{ id: "c1-0000-uuid", at: "2026-09-10T14:00:00.000Z", kind: "soumission", lead: { firstName: "Léa", phone: "819 555-0123", modeleSelectionne: "Marque — modele-qui-nexiste-pas" } }]);
    expect(await ventes.thermoMatchQuotePrefill("../../etc")).toBeNull();
    expect(await ventes.thermoMatchQuotePrefill("inconnu-0000")).toBeNull();
    const p = await ventes.thermoMatchQuotePrefill("c1-0000-uuid");
    expect(p).toMatchObject({ machine: null, rank: 1, notes: [expect.stringMatching(/choisissez la machine à la main/)] });
    expect(p?.clientId).toMatch(/^c_[0-9a-f]{12}$/);
  });
});
