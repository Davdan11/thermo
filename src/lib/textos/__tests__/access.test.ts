/* Contrôle d'accès de /gestion/textos : sans session valide, les pages et les Server Actions renvoient vers la
   connexion sans rien lire ni écrire ; la route des pièces jointes répond 401 ; le proxy couvre la section. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({ get: (name: string) => (name === "tav_gestion" && jar.value ? { name, value: jar.value } : undefined), set: vi.fn() }),
  headers: async () => new Headers({ host: "localhost:3001" }),
}));
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("@/lib/crm/email", () => ({ sendInternalMessage: vi.fn(async () => true), sendClientEmail: vi.fn(async () => true) }));

const svc = vi.hoisted(() => ({
  sendReply: vi.fn(async () => ({ ok: true as const, status: "queued" as const })),
  markRead: vi.fn(async () => true),
  markUnread: vi.fn(async () => true),
  setArchived: vi.fn(async () => true),
  saveSettings: vi.fn(async () => ({ ok: true as const, settings: { autoReply: true, autoReplyText: "x" } })),
}));
vi.mock("@/lib/textos/service", async (orig) => ({ ...(await orig<typeof import("@/lib/textos/service")>()), ...svc }));

import * as actions from "@/app/gestion/(prive)/textos/actions";
import TextosPage from "@/app/gestion/(prive)/textos/page";
import ConversationPage from "@/app/gestion/(prive)/textos/[id]/page";
import ReglagesPage from "@/app/gestion/(prive)/textos/reglages/page";
import { GET as mediaGET } from "@/app/gestion/api/textos/media/route";
import { proxy } from "@/proxy";
import { createSessionToken } from "@/lib/gestion/auth/session-token";
import { getSessionSecret, resetSecretCache } from "@/lib/gestion/auth/secret";
import { tempDir, testEnv } from "./helpers";

const env = process.env;
let dir: string;
const ID = "c_abcdefgh123";
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const fails = (p: Promise<unknown>) => p.then(() => null, (e: unknown) => e);

beforeEach(async () => {
  dir = await tempDir();
  process.env = testEnv(dir);
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  jar.value = undefined;
  vi.clearAllMocks();
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

const fd = (o: Record<string, string>) => {
  const f = new FormData();
  for (const [k, v] of Object.entries(o)) f.set(k, v);
  return f;
};

describe("sans session", () => {
  it("les pages renvoient vers la connexion", async () => {
    for (const render of [
      () => TextosPage({ searchParams: Promise.resolve({}) }),
      () => ConversationPage({ params: Promise.resolve({ id: ID }) }),
      () => ReglagesPage(),
    ]) {
      expect(digest(await fails(render()))).toContain("/gestion/connexion");
    }
  });

  it("les Server Actions renvoient vers la connexion sans rien envoyer ni modifier", async () => {
    const calls = [
      () => actions.sendTextoAction(ID, undefined, fd({ body: "Bonjour" })),
      () => actions.markReadAction(ID),
      () => actions.markUnreadAction(ID),
      () => actions.archiveAction(ID, true),
      () => actions.saveTextosSettingsAction(undefined, fd({ autoReply: "on", autoReplyText: "Piraté" })),
    ];
    for (const call of calls) expect(digest(await fails(call()))).toContain("/gestion/connexion");
    for (const fn of Object.values(svc)) expect(fn).not.toHaveBeenCalled();
  });

  it("cookie falsifié ou adresse retirée de ADMIN_EMAILS : même refus", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", Buffer.alloc(32, 7)).token;
    expect(digest(await fails(actions.sendTextoAction(ID, undefined, fd({ body: "x" }))))).toContain("/gestion/connexion");
    jar.value = createSessionToken("ancien@exemple.ca", await getSessionSecret()).token;
    expect(digest(await fails(TextosPage({ searchParams: Promise.resolve({}) })))).toContain("/gestion/connexion");
    expect(svc.sendReply).not.toHaveBeenCalled();
  });

  it("pièces jointes : 401 ; le proxy protège /gestion/textos", async () => {
    const res = await mediaGET(new Request(`http://localhost:3001/gestion/api/textos/media?c=${ID}&m=m_abcdefgh1234&i=0`));
    expect(res.status).toBe(401);
    const r = proxy(new NextRequest("http://localhost:3001/gestion/textos"));
    expect(r.headers.get("location")).toBe("http://localhost:3001/gestion/connexion");
    expect(proxy(new NextRequest("http://localhost:3001/gestion/api/textos/media")).status).toBe(401);
  });
});

describe("avec une session valide", () => {
  beforeEach(async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
  });

  it("les pages s'affichent ; conversation inconnue : 404", async () => {
    expect(await TextosPage({ searchParams: Promise.resolve({ vue: "archives" }) })).toBeTruthy();
    expect(await ReglagesPage()).toBeTruthy();
    expect(digest(await fails(ConversationPage({ params: Promise.resolve({ id: ID }) })))).toContain("404");
    expect(digest(await fails(ConversationPage({ params: Promise.resolve({ id: "../../etc" }) })))).toContain("404");
  });

  it("répondre : envoi au nom de la personne connectée ; identifiant invalide refusé", async () => {
    const r = await actions.sendTextoAction(ID, undefined, fd({ body: "Bonjour" }));
    expect(svc.sendReply).toHaveBeenCalledWith(ID, "Bonjour", "proprio@exemple.ca");
    expect(r).toMatchObject({ ok: true, message: "Envoyé · En file" });
    expect(await actions.sendTextoAction("../x", undefined, fd({ body: "x" }))).toMatchObject({ ok: false });
    expect(svc.sendReply).toHaveBeenCalledTimes(1);
  });

  it("archiver renvoie à la boîte ; réglages enregistrés avec l'adresse de la personne", async () => {
    expect(digest(await fails(actions.archiveAction(ID, true)))).toContain("/gestion/textos");
    expect(svc.setArchived).toHaveBeenCalledWith(ID, true);
    await actions.saveTextosSettingsAction(undefined, fd({ autoReplyText: "Merci" }));
    expect(svc.saveSettings).toHaveBeenCalledWith({ autoReply: false, autoReplyText: "Merci" }, "proprio@exemple.ca");
  });

  it("pièce jointe inconnue : 404 (aucun appel à Twilio)", async () => {
    const f = vi.fn();
    vi.stubGlobal("fetch", f);
    const res = await mediaGET(new Request(`http://localhost:3001/gestion/api/textos/media?c=${ID}&m=m_abcdefgh1234&i=0`));
    expect(res.status).toBe(404);
    expect(f).not.toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
});
