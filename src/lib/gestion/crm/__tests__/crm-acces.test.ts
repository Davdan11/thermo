/* Accès au CRM : sans session valide, les pages renvoient vers la connexion et les Server Actions ne font rien ;
   le proxy redirige ; avec une session, les pages se construisent même sans aucune donnée. */
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

const svc = vi.hoisted(() => ({
  setStage: vi.fn(),
  addNote: vi.fn(),
  addTask: vi.fn(),
  completeTask: vi.fn(),
  snoozeTask: vi.fn(),
  createManualContact: vi.fn(),
  mergeClients: vi.fn(),
  splitClient: vi.fn(),
  saveCrmSettings: vi.fn(),
  setTags: vi.fn(),
  dialHref: vi.fn(),
  searchClients: vi.fn(),
}));
vi.mock("@/lib/gestion/crm/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/crm/service")>()), ...svc }));
const pd = vi.hoisted(() => ({ moveDealToStage: vi.fn(), salesStages: vi.fn(async () => ({ ok: false as const, error: "Pipedrive non configuré." })) }));
vi.mock("@/lib/soumissions/pipedrive-sync", async (orig) => ({ ...(await orig<typeof import("@/lib/soumissions/pipedrive-sync")>()), ...pd }));

import * as actions from "@/app/gestion/(prive)/crm-actions";
import HomePage from "@/app/gestion/(prive)/page";
import TachesPage from "@/app/gestion/(prive)/taches/page";
import ClientsPage from "@/app/gestion/(prive)/clients/page";
import ClientPage from "@/app/gestion/(prive)/clients/[id]/page";
import NewClientPage from "@/app/gestion/(prive)/clients/nouveau/page";
import PipelinePage from "@/app/gestion/(prive)/pipeline/page";
import ReglagesPage from "@/app/gestion/(prive)/reglages/page";
import { proxy } from "@/proxy";
import { createSessionToken } from "../../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../../auth/secret";
import { resetCrmMemo } from "../service";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const sp = <T,>(v: T) => Promise.resolve(v);

const pages: Array<[string, () => Promise<unknown>]> = [
  ["accueil", () => HomePage({ searchParams: sp({}) })],
  ["tâches", () => TachesPage({ searchParams: sp({}) })],
  ["clients", () => ClientsPage({ searchParams: sp({}) })],
  ["fiche client", () => ClientPage({ params: sp({ id: "c_0123456789ab" }), searchParams: sp({}) })],
  ["nouveau client", () => NewClientPage()],
  ["pipeline", () => PipelinePage({ searchParams: sp({}) })],
  ["réglages", () => ReglagesPage()],
];

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-crm-acces-"));
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
  it.each(pages)("la page %s renvoie vers la connexion", async (_, render) => {
    expect(await rejected(render())).toContain("/gestion/connexion");
  });

  it("un cookie falsifié ou d'une adresse retirée ne passe pas", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", Buffer.alloc(32, 7)).token;
    expect(await rejected(HomePage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    jar.value = createSessionToken("ancien@exemple.ca", await getSessionSecret()).token;
    expect(await rejected(PipelinePage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
  });

  it("chaque Server Action renvoie vers la connexion sans rien écrire ni envoyer", async () => {
    const fd = new FormData();
    fd.set("title", "x");
    fd.set("text", "x");
    const calls: Array<Promise<unknown>> = [
      actions.searchClientsAction("Julie"),
      actions.dialAction("c_0123456789ab"),
      actions.setStageAction("c_0123456789ab", "perdue", "raison"),
      actions.addNoteAction("c_0123456789ab", undefined, fd),
      actions.setTagsAction("c_0123456789ab", ["x"]),
      actions.addTaskAction(undefined, fd),
      actions.completeTaskAction("t_0123456789a"),
      actions.snoozeTaskAction("t_0123456789a", "demain"),
      actions.createClientAction(undefined, fd),
      actions.mergeClientsAction("c_0123456789ab", "c_0123456789ac"),
      actions.splitClientAction("c_0123456789ab", ["k:" + "a".repeat(64)]),
      actions.saveCrmSettingsAction(undefined, fd),
    ];
    for (const c of calls) expect(await rejected(c)).toContain("/gestion/connexion");
    for (const fn of Object.values(svc)) expect(fn).not.toHaveBeenCalled();
    expect(pd.moveDealToStage).not.toHaveBeenCalled();
  });

  it("le proxy redirige aussi", () => {
    for (const p of ["/gestion/pipeline", "/gestion/clients/c_0123456789ab", "/gestion/taches", "/gestion/reglages"]) {
      const res = proxy(new NextRequest(`http://localhost:3001${p}`));
      expect(res.status).toBe(307);
      expect(res.headers.get("location")).toBe("http://localhost:3001/gestion/connexion");
    }
  });
});

describe("avec une session valide", () => {
  it("les pages se construisent, même sans aucune donnée ; une fiche inconnue donne 404", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    for (const [name, render] of pages) {
      if (name === "fiche client") {
        expect(await rejected(render())).toContain("NEXT_HTTP_ERROR_FALLBACK;404");
        continue;
      }
      await expect(render()).resolves.toBeTruthy();
    }
  });

  it("les actions valident leurs entrées avant d'écrire", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    expect(await actions.setStageAction("pas-un-id", "perdue", "x")).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.setStageAction("c_0123456789ab", "inconnue", "")).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.completeTaskAction("../../etc")).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.dialAction("c_x")).toEqual({ ok: false, error: "Demande invalide." });
    expect(svc.setStage).not.toHaveBeenCalled();
    expect(svc.completeTask).not.toHaveBeenCalled();
  });
});
