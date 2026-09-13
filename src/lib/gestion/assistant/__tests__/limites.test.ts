/* Chantier A — clé absente, plafond mensuel (calculé des jetons et des tarifs saisis), tarifs manquants, fréquence,
   une question à la fois, usage compté même quand un appel échoue. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CRM_ASSISTANT_LIMITS } from "../config";
import { budgetState, costCents, emptyUsage } from "../cost";
import { askCrmAssistant, panelStatus, resetAssistantLimits } from "../service";
import { readAssistant, recordQuestion, savePrices } from "../store";
import { fixtureContext, NOW, PROD, reply, scriptedFetch, text, toolUse } from "./helpers";

const env = process.env;
let dir: string;
const PRICES = { input: 5, output: 25, cacheWrite: 6.25, cacheRead: 0.5 };
const ask = (deps: Parameters<typeof askCrmAssistant>[1], question = "Qu’est-ce que je devrais faire aujourd’hui ?") => askCrmAssistant({ email: "proprio@exemple.ca", question }, { now: NOW, ...deps });
const usedMonth = (inputTokens: number) =>
  recordQuestion("2026-09", { at: NOW.toISOString(), by: "proprio@exemple.ca", question: "q", tools: [], usage: { ...emptyUsage(), requests: 1, inputTokens }, costCents: null, outcome: "ok", mode: "api", answerChars: 10, drafts: 0 });

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-assistant-limites-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
  resetAssistantLimits();
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("coût", () => {
  it("calculé des jetons et des tarifs saisis ; sans tarifs, rien n'est inventé", () => {
    const u = { requests: 2, inputTokens: 1_000_000, outputTokens: 100_000, cacheReadTokens: 200_000, cacheWriteTokens: 40_000 };
    expect(costCents(u, PRICES)).toBeCloseTo((5 + 2.5 + 0.1 + 0.25) * 100, 6);
    expect(costCents(u, null)).toBeNull();
    expect(budgetState(u, null, null)).toMatchObject({ block: null, spentCents: null });
    expect(budgetState(u, null, 5000)).toMatchObject({ block: "tarifs-manquants" });
    expect(budgetState(u, PRICES, 785)).toMatchObject({ block: "plafond" });
    expect(budgetState(u, PRICES, 2000).block).toBeNull();
    expect(budgetState(u, PRICES, 2000).share).toBeCloseTo(785 / 2000, 6);
  });
});

describe("gardes", () => {
  it("clé absente en production : message clair, aucun appel", async () => {
    const f = scriptedFetch([reply([text("x")], "end_turn")]);
    const r = await ask({ env: { NODE_ENV: "production" }, fetchImpl: f.fetch, context: fixtureContext().ctx });
    expect(r).toMatchObject({ ok: false, code: "cle-absente" });
    if (!r.ok) expect(r.message).toContain("ANTHROPIC_API_KEY");
    expect(f.spy).not.toHaveBeenCalled();
    expect((await panelStatus({ NODE_ENV: "production" }, NOW)).mode).toBe("cle-absente");
  });

  it("plafond mensuel atteint : refus avant tout appel, montant affiché", async () => {
    await savePrices(PRICES, "proprio@exemple.ca");
    await usedMonth(1_000_000); // 5 $ au tarif saisi
    const f = scriptedFetch([reply([text("x")], "end_turn")]);
    const r = await ask({ env: { ...PROD, ANTHROPIC_MONTHLY_BUDGET_CENTS: "500" }, fetchImpl: f.fetch, context: fixtureContext().ctx });
    expect(r).toMatchObject({ ok: false, code: "plafond" });
    if (!r.ok) expect(r.message).toMatch(/Plafond mensuel atteint/);
    expect(f.spy).not.toHaveBeenCalled();
    // Sous le plafond, la question passe.
    const ok = await ask({ env: { ...PROD, ANTHROPIC_MONTHLY_BUDGET_CENTS: "501" }, fetchImpl: f.fetch, context: fixtureContext().ctx });
    expect(ok.ok).toBe(true);
    // Le mois suivant repart de zéro.
    const next = await ask({ env: { ...PROD, ANTHROPIC_MONTHLY_BUDGET_CENTS: "500" }, fetchImpl: f.fetch, context: fixtureContext().ctx, now: new Date("2026-10-02T15:00:00Z") });
    expect(next.ok).toBe(true);
  });

  it("plafond fixé sans tarifs : refus (la dépense ne peut pas être vérifiée)", async () => {
    const f = scriptedFetch([reply([text("x")], "end_turn")]);
    const r = await ask({ env: { ...PROD, ANTHROPIC_MONTHLY_BUDGET_CENTS: "5000" }, fetchImpl: f.fetch, context: fixtureContext().ctx });
    expect(r).toMatchObject({ ok: false, code: "tarifs-manquants" });
    expect(f.spy).not.toHaveBeenCalled();
    // Sans plafond ni tarifs : on répond et on n'affiche que les jetons.
    const free = await ask({ env: PROD, fetchImpl: f.fetch, context: fixtureContext().ctx });
    expect(free.ok).toBe(true);
    if (free.ok) {
      expect(free.usage.costCents).toBeNull();
      expect(free.usage.tokens).toBe(1200);
      expect(free.month).toMatchObject({ questions: 1, spentCents: null, pricesSet: false });
    }
  });

  it("usage cumulé au mois, coût calculé avec les tarifs saisis", async () => {
    await savePrices(PRICES, "proprio@exemple.ca");
    const f = scriptedFetch([reply([toolUse("t1", "taches_du_jour", {})]), reply([text("Rien d’urgent.")], "end_turn")]);
    const r = await ask({ env: PROD, fetchImpl: f.fetch, context: fixtureContext().ctx });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.usage.tokens).toBe(2400);
    expect(r.usage.costCents).toBeCloseTo((2000 * 5 + 400 * 25) / 1_000_000 * 100, 6);
    const d = await readAssistant();
    expect(d.months["2026-09"]).toMatchObject({ questions: 1, requests: 2, inputTokens: 2000, outputTokens: 400 });
  });

  it("limite de fréquence par administrateur", async () => {
    const { ctx } = fixtureContext();
    for (let i = 0; i < CRM_ASSISTANT_LIMITS.perMinute; i++) expect((await ask({ context: ctx })).ok).toBe(true);
    const r = await ask({ context: ctx });
    expect(r).toMatchObject({ ok: false, code: "frequence" });
    // Un autre administrateur n'est pas touché.
    expect((await askCrmAssistant({ email: "autre@exemple.ca", question: "Bonjour" }, { now: NOW, context: ctx })).ok).toBe(true);
  });

  it("une question à la fois", async () => {
    const { ctx } = fixtureContext();
    let release!: () => void;
    const gate = new Promise<void>((res) => (release = res));
    const slow = vi.fn(async () => {
      await gate;
      return new Response(JSON.stringify(reply([text("Fini.")], "end_turn")), { status: 200 });
    });
    const first = ask({ env: PROD, fetchImpl: slow as unknown as typeof fetch, context: ctx });
    await vi.waitFor(() => expect(slow).toHaveBeenCalled());
    expect(await ask({ env: PROD, fetchImpl: slow as unknown as typeof fetch, context: ctx })).toMatchObject({ ok: false, code: "en-cours" });
    release();
    expect((await first).ok).toBe(true);
  });

  it("erreur de l'API : message clair, et les jetons déjà consommés restent comptés", async () => {
    await savePrices(PRICES, "proprio@exemple.ca");
    const f = scriptedFetch([reply([toolUse("t1", "pipeline", {})]), { status: 529, body: '{"type":"error"}' }]);
    const r = await ask({ env: PROD, fetchImpl: f.fetch, context: fixtureContext().ctx });
    expect(r).toMatchObject({ ok: false, code: "erreur" });
    if (!r.ok) expect(r.message).toMatch(/surchargé/);
    const d = await readAssistant();
    expect(d.journal.at(-1)).toMatchObject({ outcome: "erreur", error: "surcharge" });
    expect(d.months["2026-09"].inputTokens).toBe(1000);
    const bad = scriptedFetch([{ status: 401 }]);
    const r2 = await ask({ env: PROD, fetchImpl: bad.fetch, context: fixtureContext().ctx });
    if (!r2.ok) expect(r2.message).toMatch(/clé ANTHROPIC_API_KEY a été refusée/);
  });
});
