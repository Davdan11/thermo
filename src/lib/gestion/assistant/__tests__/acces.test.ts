/* Chantier A — accès protégé : sans session valide, la route de l'assistant répond 401 sans rien lire ni envoyer, les
   pages Assistant IA et Rentabilité renvoient vers la connexion, les Server Actions ne font rien ; avec une session,
   tout se construit même sans données, et les entrées sont validées (zod) avant d'agir. */
import { mkdtemp, rm } from "node:fs/promises";
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

const svc = vi.hoisted(() => ({ askCrmAssistant: vi.fn(), savePrices: vi.fn(), setSpend: vi.fn(async () => ({ ok: true })), removeSpend: vi.fn(), draftHref: vi.fn() }));
vi.mock("@/lib/gestion/assistant/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/assistant/service")>()), askCrmAssistant: svc.askCrmAssistant }));
vi.mock("@/lib/gestion/assistant/store", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/assistant/store")>()), savePrices: svc.savePrices }));
vi.mock("@/lib/gestion/assistant/drafts", () => ({ draftHref: svc.draftHref }));
vi.mock("@/lib/gestion/rentabilite/store", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/rentabilite/store")>()), setSpend: svc.setSpend, removeSpend: svc.removeSpend }));

import { POST } from "@/app/gestion/api/assistant/route";
import AssistantPage from "@/app/gestion/(prive)/assistant/page";
import RentabilitePage from "@/app/gestion/(prive)/rentabilite/page";
import { draftLinkAction, savePricesAction } from "@/app/gestion/(prive)/assistant/actions";
import { removeSpendAction, saveSpendAction } from "@/app/gestion/(prive)/rentabilite/actions";
import { proxy } from "@/proxy";
import { createSessionToken } from "../../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../../auth/secret";
import { resetCrmMemo } from "../../crm/service";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const sp = <T,>(v: T) => Promise.resolve(v);
const post = (body: unknown, headers: Record<string, string> = {}) => POST(new Request("http://localhost:3001/gestion/api/assistant", { method: "POST", headers: { "content-type": "application/json", ...headers }, body: typeof body === "string" ? body : JSON.stringify(body) }));
const login = async () => {
  jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
};
const fd = (o: Record<string, string>) => {
  const f = new FormData();
  for (const [k, v] of Object.entries(o)) f.set(k, v);
  return f;
};

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-assistant-acces-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), TEXTOS_DATA_DIR: dir, RELANCES_FILE: path.join(dir, "relances.json"), ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  resetCrmMemo();
  jar.value = undefined;
  vi.clearAllMocks();
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

describe("sans session", () => {
  it("la route de l'assistant répond 401 sans rien appeler", async () => {
    const res = await post({ question: "Qu’est-ce que je devrais faire aujourd’hui ?" });
    expect(res.status).toBe(401);
    expect(svc.askCrmAssistant).not.toHaveBeenCalled();
  });

  it("un cookie falsifié ou d'une adresse retirée ne passe pas", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", Buffer.alloc(32, 7)).token;
    expect((await post({ question: "x" })).status).toBe(401);
    jar.value = createSessionToken("ancien@exemple.ca", await getSessionSecret()).token;
    expect((await post({ question: "x" })).status).toBe(401);
    expect(await rejected(AssistantPage())).toContain("/gestion/connexion");
    expect(svc.askCrmAssistant).not.toHaveBeenCalled();
  });

  it("les pages renvoient vers la connexion", async () => {
    expect(await rejected(AssistantPage())).toContain("/gestion/connexion");
    expect(await rejected(RentabilitePage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
  });

  it("les Server Actions renvoient vers la connexion sans rien écrire", async () => {
    const calls: Array<Promise<unknown>> = [
      savePricesAction(undefined, fd({ input: "5", output: "25", cacheWrite: "6,25", cacheRead: "0,5" })),
      draftLinkAction({ clientId: "c_0123456789ab", canal: "courriel", objet: "x", texte: "x" }),
      saveSpendAction(undefined, fd({ channel: "google-ads", month: "2026-09", amount: "100", note: "" })),
      removeSpendAction("google-ads", "2026-09"),
    ];
    for (const c of calls) expect(await rejected(c)).toContain("/gestion/connexion");
    expect(svc.savePrices).not.toHaveBeenCalled();
    expect(svc.setSpend).not.toHaveBeenCalled();
    expect(svc.removeSpend).not.toHaveBeenCalled();
    expect(svc.draftHref).not.toHaveBeenCalled();
  });

  it("le proxy bloque aussi (401 pour l'API, redirection pour les pages)", () => {
    const api = proxy(new NextRequest("http://localhost:3001/gestion/api/assistant", { method: "POST" }));
    expect(api.status).toBe(401);
    for (const p of ["/gestion/assistant", "/gestion/rentabilite"]) {
      const res = proxy(new NextRequest(`http://localhost:3001${p}`));
      expect(res.status).toBe(307);
      expect(res.headers.get("location")).toBe("http://localhost:3001/gestion/connexion");
    }
  });
});

describe("avec une session valide", () => {
  it("les pages se construisent sans aucune donnée", async () => {
    await login();
    await expect(AssistantPage()).resolves.toBeTruthy();
    await expect(RentabilitePage({ searchParams: sp({ periode: "12-mois" }) })).resolves.toBeTruthy();
  });

  it("la route valide la question et l'origine avant d'appeler l'assistant", async () => {
    await login();
    svc.askCrmAssistant.mockResolvedValue({ ok: true, answer: "Bonjour.", drafts: [], tools: [], unverified: false, mode: "simule", usage: { tokens: 0, costCents: null }, month: { month: "2026-09", questions: 1, tokens: 0, spentCents: null, budgetCents: null, share: null, pricesSet: false } });
    expect((await post("pas du json")).status).toBe(400);
    expect((await post({ question: "" })).status).toBe(400);
    expect((await post({ question: "x".repeat(1001) })).status).toBe(400);
    expect((await post({ question: "Résume", clientId: "../../etc" })).status).toBe(400);
    expect((await post({ question: "Bonjour" }, { "sec-fetch-site": "cross-site" })).status).toBe(403);
    expect(svc.askCrmAssistant).not.toHaveBeenCalled();
    const res = await post({ question: "Bonjour", clientId: "c_0123456789ab" }, { "sec-fetch-site": "same-origin" });
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true, answer: "Bonjour." });
    expect(svc.askCrmAssistant).toHaveBeenCalledWith({ email: "proprio@exemple.ca", question: "Bonjour", history: undefined, clientId: "c_0123456789ab" });
  });

  it("les actions valident leurs entrées (zod) avant d'écrire", async () => {
    await login();
    expect(await saveSpendAction(undefined, fd({ channel: "tiktok", month: "2026-09", amount: "100", note: "" }))).toMatchObject({ ok: false });
    expect(await saveSpendAction(undefined, fd({ channel: "google-ads", month: "2026-9", amount: "100", note: "" }))).toMatchObject({ ok: false });
    expect(await saveSpendAction(undefined, fd({ channel: "google-ads", month: "2099-01", amount: "100", note: "" }))).toMatchObject({ ok: false });
    expect(await saveSpendAction(undefined, fd({ channel: "google-ads", month: "2026-08", amount: "abc", note: "" }))).toMatchObject({ ok: false });
    expect(svc.setSpend).not.toHaveBeenCalled();
    expect(await saveSpendAction(undefined, fd({ channel: "google-ads", month: "2026-08", amount: "1 250,50", note: "Campagne murales" }))).toMatchObject({ ok: true });
    expect(svc.setSpend).toHaveBeenCalledWith({ channel: "google-ads", month: "2026-08", cents: 125_050, source: "manuel", by: "proprio@exemple.ca", note: "Campagne murales" });

    expect(await savePricesAction(undefined, fd({ input: "5", output: "", cacheWrite: "", cacheRead: "" }))).toMatchObject({ ok: false });
    expect(await savePricesAction(undefined, fd({ input: "cinq", output: "25", cacheWrite: "6", cacheRead: "1" }))).toMatchObject({ ok: false });
    expect(svc.savePrices).not.toHaveBeenCalled();
    expect(await savePricesAction(undefined, fd({ input: "5", output: "25", cacheWrite: "6,25", cacheRead: "0,5" }))).toMatchObject({ ok: true });
    expect(svc.savePrices).toHaveBeenCalledWith({ input: 5, output: 25, cacheWrite: 6.25, cacheRead: 0.5 }, "proprio@exemple.ca");

    expect(await draftLinkAction({ clientId: "c_x", canal: "courriel", texte: "x" })).toEqual({ ok: false, error: "Demande invalide." });
    expect(await draftLinkAction({ clientId: "c_0123456789ab", canal: "fax", texte: "x" })).toEqual({ ok: false, error: "Demande invalide." });
    expect(svc.draftHref).not.toHaveBeenCalled();
    await removeSpendAction("google-ads", "../../x");
    expect(svc.removeSpend).not.toHaveBeenCalled();
  });
});
