/* Chantier T — accès : sans session, les pages de /gestion/telephonie renvoient vers la connexion et les Server Actions
   ne font rien (aucun appel, aucun texto) ; l'audio répond 401 ; le proxy couvre la section ; le robot exige son secret
   en production ; les pages publiques refusent un jeton invalide sans rien révéler. */
import { rm } from "node:fs/promises";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({ get: (name: string) => (name === "tav_gestion" && jar.value ? { name, value: jar.value } : undefined), set: vi.fn() }),
  headers: async () => new Headers({ host: "localhost:3001", "x-forwarded-for": "203.0.113.9" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));

const lib = vi.hoisted(() => ({ startMaskedCall: vi.fn(), sendCampaignTest: vi.fn(), launchCampaign: vi.fn() }));
vi.mock("@/lib/telephonie/masked-call", async (orig) => ({ ...(await orig<typeof import("@/lib/telephonie/masked-call")>()), startMaskedCall: lib.startMaskedCall }));
vi.mock("@/lib/telephonie/campaigns", async (orig) => ({ ...(await orig<typeof import("@/lib/telephonie/campaigns")>()), sendCampaignTest: lib.sendCampaignTest, launchCampaign: lib.launchCampaign }));

import * as actions from "@/app/gestion/(prive)/telephonie/actions";
import TelephoniePage from "@/app/gestion/(prive)/telephonie/page";
import ReglagesPage from "@/app/gestion/(prive)/telephonie/reglages/page";
import CampagnesPage from "@/app/gestion/(prive)/telephonie/campagnes/page";
import AppelPage from "@/app/appel/[jeton]/page";
import RappelPage from "@/app/rappel/[jeton]/page";
import { launchFromLinkAction } from "@/app/appel/[jeton]/actions";
import { GET as audioGET } from "@/app/gestion/api/telephonie/audio/[id]/route";
import { POST as tickPOST, telephonieTickAuth } from "@/app/api/telephonie/tick/route";
import { proxy } from "@/proxy";
import { createSessionToken } from "@/lib/gestion/auth/session-token";
import { getSessionSecret, resetSecretCache } from "@/lib/gestion/auth/secret";
import { resetCrmMemo } from "@/lib/gestion/crm/service";
import { tempDir } from "@/lib/textos/__tests__/helpers";
import { telEnv } from "./helpers";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const fd = (o: Record<string, string>) => {
  const f = new FormData();
  for (const [k, v] of Object.entries(o)) f.set(k, v);
  return f;
};

beforeEach(async () => {
  dir = await tempDir();
  process.env = telEnv(dir);
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
  it("les pages renvoient vers la connexion", async () => {
    for (const render of [() => TelephoniePage(), () => ReglagesPage(), () => CampagnesPage()]) expect(await rejected(render())).toContain("/gestion/connexion");
  });

  it("les Server Actions renvoient vers la connexion sans appeler ni texter", async () => {
    const calls: Array<Promise<unknown>> = [
      actions.startMaskedCallAction({ kind: "client", id: "c_0123456789ab" }),
      actions.maskedCallStatusAction("a_0123456789a"),
      actions.saveSpeedSettingsAction(undefined, fd({ enabled: "on" })),
      actions.saveCallSettingsAction(undefined, fd({ record: "on" })),
      actions.setExpressConsentAction(undefined, fd({ clientId: "c_0123456789ab", on: "1", note: "x" })),
      actions.testCampaignAction("k_0123456789a"),
      actions.launchCampaignAction("k_0123456789a", undefined, fd({ count: "1", confirm: "oui" })),
    ];
    for (const c of calls) expect(await rejected(c)).toContain("/gestion/connexion");
    for (const fn of Object.values(lib)) expect(fn).not.toHaveBeenCalled();
  });

  it("l'écoute d'un enregistrement répond 401 ; le proxy couvre la section", async () => {
    expect((await audioGET(new Request("http://localhost/gestion/api/telephonie/audio/r_0123456789a"), { params: Promise.resolve({ id: "r_0123456789a" }) })).status).toBe(401);
    const res = proxy(new NextRequest("http://localhost:3001/gestion/telephonie/campagnes"));
    expect(res.status).toBe(307);
  });
});

describe("avec une session", () => {
  beforeEach(async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
  });

  it("les pages se construisent sans aucune donnée", async () => {
    for (const render of [() => TelephoniePage(), () => ReglagesPage(), () => CampagnesPage()]) await expect(render()).resolves.toBeTruthy();
  });

  it("les actions valident leurs entrées avant d'agir", async () => {
    expect(await actions.startMaskedCallAction({ kind: "client", id: "../../x" })).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.startMaskedCallAction({ kind: "numero", id: "+15145550142" })).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.launchCampaignAction("k_0123456789a", undefined, fd({ count: "3" }))).toMatchObject({ ok: false });
    expect(lib.startMaskedCall).not.toHaveBeenCalled();
    expect(lib.launchCampaign).not.toHaveBeenCalled();
  });

  it("limite de fréquence des appels masqués", async () => {
    lib.startMaskedCall.mockResolvedValue({ ok: false, error: "x" });
    const results = [];
    for (let i = 0; i < 10; i++) results.push(await actions.startMaskedCallAction({ kind: "client", id: "c_0123456789ab" }));
    expect(lib.startMaskedCall.mock.calls.length).toBeLessThanOrEqual(8);
    expect(results.at(-1)).toMatchObject({ ok: false, error: expect.stringMatching(/Trop d’appels/) });
  });
});

describe("pages publiques et robot", () => {
  it("un jeton invalide : message, rien de personnel, aucun appel", async () => {
    const html = renderToStaticMarkup((await AppelPage({ params: Promise.resolve({ jeton: "l_Ab3dE5gH7jK.mf1a2b3.Xy9Zw8Vu7Ts6Rq5Po4Nm3L" }) })) as React.ReactElement);
    expect(html).toContain("Lien invalide");
    expect(html).not.toContain("5550199");
    const rappel = renderToStaticMarkup((await RappelPage({ params: Promise.resolve({ jeton: "pas-un-jeton" }) })) as React.ReactElement);
    expect(rappel).toContain("Lien invalide");
    expect(await launchFromLinkAction("pas-un-jeton")).toEqual({ ok: false, error: "Lien invalide." });
    expect(lib.startMaskedCall).not.toHaveBeenCalled();
  });

  it("le robot exige son secret en production", async () => {
    const req = (auth?: string) => new Request("http://127.0.0.1:3003/api/telephonie/tick", { method: "POST", headers: auth ? { authorization: auth } : {} });
    expect(telephonieTickAuth(req(), { NODE_ENV: "production" })).toBe("absent");
    const secret = "s".repeat(32);
    expect(telephonieTickAuth(req("Bearer mauvais"), { NODE_ENV: "production", AUTOMATISATIONS_CRON_SECRET: secret })).toBe("refuse");
    expect(telephonieTickAuth(req(`Bearer ${secret}`), { NODE_ENV: "production", AUTOMATISATIONS_CRON_SECRET: secret })).toBe("ok");
    expect(telephonieTickAuth(req(`Bearer ${secret}`), { NODE_ENV: "production", TELEPHONIE_CRON_SECRET: "t".repeat(32), AUTOMATISATIONS_CRON_SECRET: secret })).toBe("refuse");
    process.env.TELEPHONIE_CRON_SECRET = secret;
    expect((await tickPOST(req("Bearer mauvais"))).status).toBe(401);
  });
});
