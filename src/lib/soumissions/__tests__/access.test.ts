/* Contrôle d'accès du créateur de soumissions : Server Actions et routes de l'outil exigent la session de /gestion ;
   les routes du client exigent la même origine et un jeton valide ; un GET ne change jamais rien. */
import { mkdtemp, readFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined, set: vi.fn() }));
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => (name === "tav_gestion" && jar.value ? { name, value: jar.value } : undefined),
    set: jar.set,
  }),
  headers: async () => new Headers({ host: "localhost:3001", "x-forwarded-for": "198.51.100.9" }),
}));
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("@/lib/crm/email", () => ({ sendClientEmail: vi.fn(async () => true) }));
vi.mock("@/lib/gestion/sms", () => ({ sendSms: vi.fn(async () => "non-configure"), smsConfigured: () => false }));

const svc = vi.hoisted(() => ({
  saveQuote: vi.fn(),
  sendQuoteService: vi.fn(),
  remindService: vi.fn(),
  reviseService: vi.fn(),
  duplicateService: vi.fn(),
  deleteDraftService: vi.fn(),
  linkDealService: vi.fn(),
  saveSettingsService: vi.fn(),
  savePricesService: vi.fn(),
}));
vi.mock("@/lib/soumissions/service", async (orig) => ({ ...(await orig<typeof import("@/lib/soumissions/service")>()), ...svc }));

import * as actions from "@/app/gestion/soumissions/actions";
import { POST as uploadPOST } from "@/app/gestion/soumissions/photo/route";
import { GET as adminPhotoGET } from "@/app/gestion/soumissions/photo/[photoId]/route";
import { GET as respondGET, POST as respondPOST } from "@/app/devis/[token]/repondre/route";
import { GET as vueGET, POST as vuePOST } from "@/app/devis/[token]/vue/route";
import { GET as clientPhotoGET } from "@/app/devis/[token]/photo/[photoId]/route";
import DevisPage from "@/app/devis/[token]/page";
import { proxy } from "@/proxy";
import { createSessionToken } from "@/lib/gestion/auth/session-token";
import { getSessionSecret, resetSecretCache } from "@/lib/gestion/auth/secret";
import { createQuote, freezeForSend } from "../quote";
import { mutateSoumissions, soumissionsFile, viewsFile } from "../store";
import { fullSettings, NOW, readyContent } from "./fixtures";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const ORIGIN = "http://localhost:3001";
const params = <T,>(p: T) => ({ params: Promise.resolve(p) });

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-soum-acces-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  delete process.env.PIPEDRIVE_API_TOKEN;
  resetSecretCache();
  jar.value = undefined;
  vi.clearAllMocks();
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

async function sentToken(): Promise<string> {
  return mutateSoumissions((d) => {
    const q = createQuote(d, readyContent(), "proprio@exemple.ca", NOW);
    freezeForSend(q, q.versions[0], fullSettings(), [], NOW);
    return { result: q.versions[0].token, changed: true };
  });
}

describe("Server Actions sans session", () => {
  it("renvoient vers la connexion et ne touchent à rien", async () => {
    const fd = new FormData();
    fd.set("sms", "oui");
    fd.set("dealId", "12");
    const id = "q_aaaaaaaa11";
    const calls: Array<() => Promise<unknown>> = [
      () => actions.saveQuoteAction(null, { content: {}, internalNotes: "" }),
      () => actions.saveQuoteAction(id, { content: {}, internalNotes: "" }),
      () => actions.machineAction("daikin-2mx18axvju"),
      () => actions.sendQuoteAction(id, fd),
      () => actions.remindAction(id, fd),
      () => actions.reviseAction(id),
      () => actions.duplicateAction(id),
      () => actions.deleteDraftAction(id),
      () => actions.linkDealAction(id, fd),
      () => actions.saveSettingsAction({}),
      () => actions.savePricesAction({}),
    ];
    for (const call of calls) {
      const err = await call().then(() => null, (e: unknown) => e);
      expect(digest(err)).toContain("/gestion/connexion");
    }
    for (const fn of Object.values(svc)) expect(fn).not.toHaveBeenCalled();
  });

  it("cookie falsifié ou d'une adresse retirée : même refus", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", Buffer.alloc(32, 7)).token;
    expect(digest(await actions.reviseAction("q_aaaaaaaa11").then(() => null, (e) => e))).toContain("/gestion/connexion");
    jar.value = createSessionToken("ancien@exemple.ca", await getSessionSecret()).token;
    expect(digest(await actions.reviseAction("q_aaaaaaaa11").then(() => null, (e) => e))).toContain("/gestion/connexion");
    expect(svc.reviseService).not.toHaveBeenCalled();
  });

  it("avec une session valide, l'action s'exécute (données validées)", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    const r = await actions.saveQuoteAction(null, { content: {}, internalNotes: "" });
    expect(r.ok).toBe(false); // refusé par la validation, pas par l'accès
    svc.reviseService.mockResolvedValue({ ok: true, v: 2 });
    const err = await actions.reviseAction("q_aaaaaaaa11").then(() => null, (e) => e);
    expect(svc.reviseService).toHaveBeenCalledWith("q_aaaaaaaa11", "proprio@exemple.ca");
    expect(digest(err)).toContain("/gestion/soumissions/q_aaaaaaaa11/modifier?version=2");
  });
});

describe("routes de l'outil", () => {
  it("photos : 401 sans session", async () => {
    const fd = new FormData();
    fd.set("file", new Blob([new Uint8Array([0xff, 0xd8, 0xff, 0xe0])]), "a.jpg");
    const up = await uploadPOST(new NextRequest(`${ORIGIN}/gestion/soumissions/photo`, { method: "POST", body: fd, headers: { origin: ORIGIN, host: "localhost:3001" } }));
    expect(up.status).toBe(401);
    expect((await adminPhotoGET(new NextRequest(`${ORIGIN}/gestion/soumissions/photo/p_aaaaaaaa11`), params({ photoId: "p_aaaaaaaa11" }))).status).toBe(401);
  });

  it("le proxy protège /gestion/soumissions", () => {
    const res = proxy(new NextRequest(`${ORIGIN}/gestion/soumissions/nouvelle`));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("/gestion/connexion");
  });
});

describe("routes du client", () => {
  it("un GET ne répond jamais et ne change rien", async () => {
    expect(respondGET().status).toBe(405);
    expect(vueGET().status).toBe(405);
  });

  it("origine étrangère : 403 ; jeton invalide : 404", async () => {
    const token = await sentToken();
    const post = (url: string, origin: string, body?: FormData) => new NextRequest(url, { method: "POST", body, headers: { origin, host: "localhost:3001", "x-forwarded-for": "203.0.113.4" } });
    const fd = new FormData();
    fd.set("decision", "accepter");
    expect((await respondPOST(post(`${ORIGIN}/devis/${token}/repondre`, "https://pirate.example", fd), params({ token }))).status).toBe(403);
    expect((await vuePOST(post(`${ORIGIN}/devis/${token}/vue`, "https://pirate.example"), params({ token }))).status).toBe(403);
    expect((await respondPOST(post(`${ORIGIN}/devis/abc/repondre`, ORIGIN, fd), params({ token: "abc" }))).status).toBe(404);
    const unknown = "A".repeat(43);
    expect((await vuePOST(post(`${ORIGIN}/devis/${unknown}/vue`, ORIGIN), params({ token: unknown }))).status).toBe(404);
    expect((await clientPhotoGET(new NextRequest(`${ORIGIN}/devis/${token}/photo/p_aaaaaaaa11`), params({ token, photoId: "p_aaaaaaaa11" }))).status).toBe(404);
    await expect(stat(viewsFile())).rejects.toThrow();
  });

  it("afficher /devis/[jeton] (GET de la page) n'écrit rien", async () => {
    const token = await sentToken();
    const before = await readFile(soumissionsFile(), "utf8");
    const mtime = (await stat(soumissionsFile())).mtimeMs;
    const el = await DevisPage({ params: Promise.resolve({ token }), searchParams: Promise.resolve({}) });
    expect(el).toBeTruthy();
    await DevisPage({ params: Promise.resolve({ token: "x".repeat(43) }), searchParams: Promise.resolve({}) });
    expect(await readFile(soumissionsFile(), "utf8")).toBe(before);
    expect((await stat(soumissionsFile())).mtimeMs).toBe(mtime);
    await expect(stat(viewsFile())).rejects.toThrow();
  });

  it("acceptation par le formulaire : IP et navigateur notés, retour 303 vers la soumission", async () => {
    const token = await sentToken();
    const fd = new FormData();
    fd.set("decision", "accepter");
    fd.set("conditions", "oui");
    fd.set("nom", "Camille Exemple");
    fd.append("options", "l_opt");
    const res = await respondPOST(new NextRequest(`${ORIGIN}/devis/${token}/repondre`, { method: "POST", body: fd, headers: { origin: ORIGIN, host: "localhost:3001", "x-forwarded-for": "203.0.113.4", "user-agent": "Test/2.0" } }), params({ token }));
    expect(res.status).toBe(303);
    expect(res.headers.get("location")).toContain(`/devis/${token}?r=acceptee`);
    const saved = JSON.parse(await readFile(soumissionsFile(), "utf8"));
    expect(saved.quotes[0].versions[0].acceptance).toMatchObject({ ip: "203.0.113.4", userAgent: "Test/2.0", typedName: "Camille Exemple", selectedOptionIds: ["l_opt"] });
  });
});
