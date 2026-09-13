/* Contrôle d'accès : sans session valide, les routes /gestion/api répondent 401, les Server Actions
   renvoient vers la connexion sans rien faire, le proxy redirige ; la réponse d'un installateur exige
   la même origine. */
import { mkdtemp, rm } from "node:fs/promises";
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

const svc = vi.hoisted(() => ({
  sendOffers: vi.fn(),
  saveJob: vi.fn(),
  saveInstaller: vi.fn(),
  changeJobStatus: vi.fn(),
  ownerWithdrawOffer: vi.fn(),
  saveInternalNotes: vi.fn(),
  setInstallerActive: vi.fn(),
}));
vi.mock("@/lib/gestion/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/service")>()), ...svc }));
vi.mock("@/lib/gestion/candidatures", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/candidatures")>()), setCandidatureStatus: vi.fn() }));

import { GET as postalGET } from "@/app/gestion/api/postal/route";
import { GET as modelesGET } from "@/app/gestion/api/modeles/route";
import { POST as respondPOST } from "@/app/job/[token]/repondre/route";
import * as actions from "@/app/gestion/(prive)/actions";
import { proxy, config as proxyConfig } from "@/proxy";
import { createSessionToken } from "../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../auth/secret";

const env = process.env;
let dir: string;

async function validCookie(email = "proprio@exemple.ca"): Promise<string> {
  return createSessionToken(email, await getSessionSecret()).token;
}

const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-acces-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
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

describe("routes /gestion/api", () => {
  const req = (p: string) => new NextRequest(`http://localhost:3001${p}`);

  it("401 sans cookie, avec un cookie falsifié, expiré ou d'une adresse retirée", async () => {
    expect((await postalGET(req("/gestion/api/postal?code=H2X1Y4"))).status).toBe(401);
    expect((await modelesGET(req("/gestion/api/modeles?q=rxb"))).status).toBe(401);

    jar.value = createSessionToken("proprio@exemple.ca", Buffer.alloc(32, 1)).token;
    expect((await postalGET(req("/gestion/api/postal?code=H2X1Y4"))).status).toBe(401);

    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret(), Date.now() - 31 * 86_400_000).token;
    expect((await postalGET(req("/gestion/api/postal?code=H2X1Y4"))).status).toBe(401);

    jar.value = await validCookie("ancien@exemple.ca");
    expect((await postalGET(req("/gestion/api/postal?code=H2X1Y4"))).status).toBe(401);
  });

  it("200 avec une session valide", async () => {
    jar.value = await validCookie();
    const res = await postalGET(req("/gestion/api/postal?code=H2X1Y4"));
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toMatchObject({ ok: true, data: { city: "Montréal", region: "06", regionName: "Montréal" } });
  });
});

describe("Server Actions sans session", () => {
  const fd = () => {
    const f = new FormData();
    f.set("installerIds", "i_aaaaaaaa11");
    f.set("action", "annuler");
    f.set("firstName", "X");
    return f;
  };

  it("renvoient vers la connexion et ne touchent à rien", async () => {
    const calls: Array<() => Promise<unknown>> = [
      () => actions.sendOffersAction("j_aaaaaaaa11", fd()),
      () => actions.saveJobAction(undefined, fd()),
      () => actions.saveInstallerAction(undefined, fd()),
      () => actions.statusAction("j_aaaaaaaa11", fd()),
      () => actions.withdrawOfferAction("j_aaaaaaaa11", "o_aaaaaaaa11"),
      () => actions.notesAction("j_aaaaaaaa11", undefined, fd()),
      () => actions.toggleInstallerAction("i_aaaaaaaa11", false),
      () => actions.candidatureStatusAction("c_aaaaaaaa11", "ecartee"),
    ];
    for (const call of calls) {
      const err = await call().then(() => null, (e: unknown) => e);
      expect(digest(err)).toContain("/gestion/connexion");
    }
    for (const fn of Object.values(svc)) expect(fn).not.toHaveBeenCalled();
  });

  it("avec une session valide, l'action s'exécute", async () => {
    jar.value = await validCookie();
    svc.sendOffers.mockResolvedValue({ sent: 1, errors: [] });
    const err = await actions.sendOffersAction("j_aaaaaaaa11", fd()).then(() => null, (e: unknown) => e);
    expect(svc.sendOffers).toHaveBeenCalledWith("j_aaaaaaaa11", ["i_aaaaaaaa11"], Number.NaN, "proprio@exemple.ca", "http://localhost:3001");
    expect(digest(err)).toContain("/gestion/jobs/j_aaaaaaaa11?envoye=1");
  });
});

describe("proxy (vérification optimiste)", () => {
  it("ne couvre que /gestion", () => {
    expect(proxyConfig.matcher).toEqual(["/gestion", "/gestion/:path*"]);
  });

  it("redirige vers la connexion sans cookie ; 401 pour /gestion/api ; laisse passer la connexion", async () => {
    const r1 = proxy(new NextRequest("http://localhost:3001/gestion/jobs/j_aaaaaaaa11"));
    expect(r1.status).toBe(307);
    expect(r1.headers.get("location")).toBe("http://localhost:3001/gestion/connexion");
    expect(proxy(new NextRequest("http://localhost:3001/gestion/api/postal")).status).toBe(401);
    expect(proxy(new NextRequest("http://localhost:3001/gestion/connexion")).headers.get("x-middleware-next")).toBe("1");
    expect(proxy(new NextRequest("http://localhost:3001/gestion/connexion/verifier?jeton=x")).headers.get("x-middleware-next")).toBe("1");
  });

  it("laisse passer un cookie lisible et non expiré (la vraie vérification est dans la page)", async () => {
    const token = await validCookie();
    const res = proxy(new NextRequest("http://localhost:3001/gestion", { headers: { cookie: `tav_gestion=${token}` } }));
    expect(res.headers.get("x-middleware-next")).toBe("1");
  });
});

describe("réponse d'un installateur (POST /job/[jeton]/repondre)", () => {
  const post = (headers: Record<string, string>) =>
    respondPOST(
      new NextRequest("http://localhost:3001/job/abc/repondre", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded", host: "localhost:3001", ...headers },
        body: "decision=accepter",
      }),
      { params: Promise.resolve({ token: "jeton-inconnu-mais-bien-forme-0123456789abcdef" }) },
    );

  it("refusée depuis une autre origine ou sans origine", async () => {
    expect((await post({ origin: "https://pirate.example", "x-forwarded-for": "203.0.113.50" })).status).toBe(403);
    expect((await post({ "x-forwarded-for": "203.0.113.51" })).status).toBe(403);
    expect((await post({ referer: "https://pirate.example/page", "x-forwarded-for": "203.0.113.52" })).status).toBe(403);
  });

  it("même origine : traitée, puis retour vers la page (303)", async () => {
    const res = await post({ origin: "http://localhost:3001", "x-forwarded-for": "203.0.113.53" });
    expect(res.status).toBe(303);
    expect(res.headers.get("location")).toContain("/job/jeton-inconnu-mais-bien-forme-0123456789abcdef?r=invalide");
  });
});
