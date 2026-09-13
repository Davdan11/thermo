/* Chantier R — accès : sans session, les pages Carte, Recrutement, Accueil et Inventaire renvoient vers la connexion
   et les Server Actions n'écrivent rien ; la route planifiée exige son secret (refus en production s'il manque). */
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

const rsv = vi.hoisted(() => ({ overrideRbq: vi.fn(), clearRbqOverride: vi.fn(), saveReseauSettings: vi.fn(), saveLegal: vi.fn(), saveAvailability: vi.fn() }));
vi.mock("@/lib/gestion/reseau/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/reseau/service")>()), ...rsv }));
const iv = vi.hoisted(() => ({ createItem: vi.fn(), updateItem: vi.fn(), adjustQuantity: vi.fn(), setArchived: vi.fn(), setRelease: vi.fn(), syncStockExits: vi.fn(async () => ({ created: 0 })), createOrder: vi.fn(), setOrderStatus: vi.fn(), receiveOrder: vi.fn() }));
vi.mock("@/lib/gestion/inventaire/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/inventaire/service")>()), ...iv }));

import * as actions from "@/app/gestion/(prive)/reseau-actions";
import CartePage from "@/app/gestion/(prive)/carte/page";
import RecrutementPage from "@/app/gestion/(prive)/recrutement/page";
import AccueilPage from "@/app/gestion/(prive)/recrutement/accueil/[id]/page";
import InventairePage from "@/app/gestion/(prive)/inventaire/page";
import ItemPage from "@/app/gestion/(prive)/inventaire/[id]/page";
import OrderPage from "@/app/gestion/(prive)/inventaire/commandes/[id]/page";
import { GET as tickGet, POST as tickPost } from "@/app/api/reseau/tick/route";
import { proxy } from "@/proxy";
import { createSessionToken } from "../../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../../auth/secret";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const sp = <T,>(v: T) => Promise.resolve(v);

const pages: Array<[string, () => Promise<unknown>]> = [
  ["carte", () => CartePage({ searchParams: sp({}) })],
  ["recrutement", () => RecrutementPage()],
  ["accueil", () => AccueilPage({ params: sp({ id: "i_inconnu0001" }) })],
  ["inventaire", () => InventairePage()],
  ["article", () => ItemPage({ params: sp({ id: "k_inconnu0001" }) })],
  ["bon de commande", () => OrderPage({ params: sp({ id: "bc_inconnu0001" }) })],
];

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-reseau-acces-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  delete process.env.RESEAU_CRON_SECRET;
  delete process.env.RBQ_VERIFICATION_ACTIVE;
  resetSecretCache();
  jar.value = undefined;
  vi.clearAllMocks();
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  vi.restoreAllMocks();
  await rm(dir, { recursive: true, force: true });
});

describe("sans session", () => {
  it.each(pages)("la page %s renvoie vers la connexion", async (_, render) => {
    expect(await rejected(render())).toContain("/gestion/connexion");
  });

  it("chaque Server Action renvoie vers la connexion sans rien écrire", async () => {
    const fd = new FormData();
    fd.set("note", "vérifiée au registre");
    fd.set("confirm", "1");
    fd.set("kind", "exterieur");
    fd.set("label", "Unité");
    fd.set("delta", "1");
    fd.set("reason", "entree");
    fd.set("supplier", "Fournisseur Fictif");
    const calls: Array<Promise<unknown>> = [
      actions.rbqOverrideAction("i_install0001", undefined, fd),
      actions.rbqClearOverrideAction("i_install0001"),
      actions.reseauSettingsAction(undefined, fd),
      actions.legalAction("i_install0001", undefined, fd),
      actions.availabilityAction("i_install0001", undefined, fd),
      actions.itemCreateAction(undefined, fd),
      actions.itemUpdateAction("k_item000001", undefined, fd),
      actions.adjustAction("k_item000001", undefined, fd),
      actions.archiveAction("k_item000001", true),
      actions.releaseAction("k_item000001", "job:j_job0000001", true),
      actions.syncExitsAction(),
      actions.orderCreateAction(undefined, fd),
      actions.orderStatusAction("bc_order00001", "envoye"),
      actions.orderReceiveAction("bc_order00001"),
    ];
    for (const c of calls) expect(await rejected(c)).toContain("/gestion/connexion");
    for (const fn of [...Object.values(rsv), ...Object.values(iv)]) expect(fn).not.toHaveBeenCalled();
  });

  it("le proxy redirige aussi", () => {
    for (const p of ["/gestion/carte", "/gestion/recrutement", "/gestion/inventaire"]) expect(proxy(new NextRequest(`http://localhost:3001${p}`)).status).toBe(307);
  });
});

describe("avec une session valide", () => {
  it("les pages se construisent sans données ; un identifiant inconnu donne 404", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    for (const [name, render] of pages) {
      if (["accueil", "article", "bon de commande"].includes(name)) {
        expect(await rejected(render())).toContain("NEXT_HTTP_ERROR_FALLBACK;404");
        continue;
      }
      await expect(render()).resolves.toBeTruthy();
    }
  });

  it("les actions valident leurs entrées avant d'écrire", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    const fd = new FormData();
    fd.set("note", "ok");
    expect(await actions.rbqOverrideAction("../../etc", undefined, fd)).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.rbqOverrideAction("i_install0001", undefined, fd)).toMatchObject({ ok: false });
    expect(await actions.archiveAction("k_item000001", "oui")).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.releaseAction("k_item000001", "job:../x", true)).toEqual({ ok: false, error: "Demande invalide." });
    const bad = new FormData();
    bad.set("subcategories", "15.10; rm -rf");
    bad.set("recruitMinDemands", "2");
    bad.set("recruitDays", "90");
    expect(await actions.reseauSettingsAction(undefined, bad)).toMatchObject({ ok: false });
    const order = new FormData();
    order.set("supplier", "Fournisseur Fictif");
    order.append("itemId", "k_item000001");
    order.append("qty", "-3");
    expect(await actions.orderCreateAction(undefined, order)).toMatchObject({ ok: false });
    const item = new FormData();
    item.set("kind", "exterieur");
    item.set("label", "Unité");
    item.set("unitCost", "gratuit");
    expect(await actions.itemCreateAction(undefined, item)).toMatchObject({ ok: false, error: "Coût invalide (ex. 1234,56)." });
    for (const fn of [...Object.values(rsv), ...Object.values(iv)]) expect(fn).not.toHaveBeenCalled();
  });
});

describe("route planifiée /api/reseau/tick", () => {
  const req = (auth?: string, q = "taches=stock") => new Request(`http://127.0.0.1:3003/api/reseau/tick?${q}`, { method: "POST", headers: auth ? { authorization: auth } : {} });
  const SECRET = "secret-de-test-assez-long-123456";

  it("production sans RESEAU_CRON_SECRET : refus (503), rien ne tourne", async () => {
    process.env = { ...process.env, NODE_ENV: "production" };
    const res = await tickPost(req());
    expect(res.status).toBe(503);
    expect(iv.syncStockExits).not.toHaveBeenCalled();
  });

  it("mauvais secret ou aucun : 401", async () => {
    process.env = { ...process.env, NODE_ENV: "production", RESEAU_CRON_SECRET: SECRET };
    expect((await tickPost(req())).status).toBe(401);
    expect((await tickPost(req("Bearer mauvais-secret-mauvais-secret"))).status).toBe(401);
    expect(iv.syncStockExits).not.toHaveBeenCalled();
  });

  it("bon secret : bilan chiffré ; RBQ désactivée par défaut, aucun téléchargement", async () => {
    process.env = { ...process.env, NODE_ENV: "production", RESEAU_CRON_SECRET: SECRET };
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const res = await tickPost(req(`Bearer ${SECRET}`, "taches=rbq,stock"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toMatchObject({ ok: true, stock: { sorties: 0 }, rbq: { statut: "desactive" } });
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("tâche inconnue : 400 ; GET : 405", async () => {
    expect((await tickPost(req(undefined, "taches=autre"))).status).toBe(400);
    expect(tickGet().status).toBe(405);
  });
});
