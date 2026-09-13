/* Accès du volet B : pages et Server Actions de /gestion refusées sans session (rien n'est écrit ni envoyé), export
   CSV refusé, route du moteur protégée par son secret (refus en production sans secret), liens à jeton limités à leur
   document ; avec une session, les pages se construisent même sans aucune donnée. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

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
  markInvoicePaid: vi.fn(),
  voidInvoice: vi.fn(),
  resendInvoice: vi.fn(),
  issueInvoiceForJob: vi.fn(),
  setJobQuoteLink: vi.fn(),
  saveCommissionSettings: vi.fn(),
}));
vi.mock("@/lib/gestion/commissions/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/commissions/service")>()), ...svc }));
const eng = vi.hoisted(() => ({ runTick: vi.fn(async () => ({ at: "2026-09-11T12:30:00.000Z", ms: 1, done: 0, failed: 0, ignored: 0, waiting: {}, deferred: 0, lines: [] })) }));
vi.mock("@/lib/gestion/automatisations/engine", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/automatisations/engine")>()), ...eng }));
const st = vi.hoisted(() => ({ mutateAutomations: vi.fn(), mutateAfterSale: vi.fn() }));
vi.mock("@/lib/gestion/automatisations/store", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/automatisations/store")>()), ...st }));

import * as actions from "@/app/gestion/(prive)/argent-actions";
import PaiementsPage from "@/app/gestion/(prive)/paiements/page";
import InvoicePage from "@/app/gestion/(prive)/paiements/[id]/page";
import AutomatisationsPage from "@/app/gestion/(prive)/automatisations/page";
import { GET as exportCsv } from "@/app/gestion/api/paiements/export/route";
import { POST as tick, GET as tickGet } from "@/app/api/automatisations/tick/route";
import FacturePage from "@/app/facture/[token]/page";
import SuiviPage from "@/app/suivi/[token]/page";
import { proxy } from "@/proxy";
import { NextRequest } from "next/server";
import { createSessionToken } from "../../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../../auth/secret";
import { tempDir, testEnv } from "../../commissions/__tests__/fixtures";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const sp = <T,>(v: T) => Promise.resolve(v);
const SECRET = "un-secret-de-test-assez-long-0123";

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

describe("sans session", () => {
  it("les pages renvoient vers la connexion", async () => {
    expect(await rejected(PaiementsPage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    expect(await rejected(InvoicePage({ params: sp({ id: "f_0123456789a" }) }))).toContain("/gestion/connexion");
    expect(await rejected(AutomatisationsPage())).toContain("/gestion/connexion");
  });

  it("chaque Server Action renvoie vers la connexion sans rien écrire ni envoyer", async () => {
    const fd = new FormData();
    fd.set("date", "2026-09-12");
    fd.set("method", "interac");
    fd.set("reason", "test");
    const calls: Array<Promise<unknown>> = [
      actions.markPaidAction("f_0123456789a", undefined, fd),
      actions.voidInvoiceAction("f_0123456789a", undefined, fd),
      actions.resendInvoiceAction("f_0123456789a"),
      actions.issueInvoiceAction("j_0123456789a"),
      actions.linkQuoteAction(undefined, fd),
      actions.saveCommissionSettingsAction(undefined, fd),
      actions.toggleAutomationAction("sondage", false),
      actions.saveAutomationSettingsAction(undefined, fd),
      actions.runTickNowAction(),
      actions.setLogisvertStatusAction("j_0123456789a", "recue"),
    ];
    for (const c of calls) expect(await rejected(c)).toContain("/gestion/connexion");
    for (const fn of [...Object.values(svc), ...Object.values(st), eng.runTick]) expect(fn).not.toHaveBeenCalled();
  });

  it("export CSV : 401 ; le proxy redirige les pages", async () => {
    expect((await exportCsv(new Request("http://localhost:3001/gestion/api/paiements/export"))).status).toBe(401);
    for (const p of ["/gestion/paiements", "/gestion/automatisations"]) {
      const res = proxy(new NextRequest(`http://localhost:3001${p}`));
      expect(res.headers.get("location")).toBe("http://localhost:3001/gestion/connexion");
    }
  });
});

describe("avec une session", () => {
  it("les pages se construisent sans aucune donnée", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    await expect(PaiementsPage({ searchParams: sp({ etat: "en-retard" }) })).resolves.toBeTruthy();
    await expect(AutomatisationsPage()).resolves.toBeTruthy();
    expect(await rejected(InvoicePage({ params: sp({ id: "f_0123456789a" }) }))).toContain("NEXT_HTTP_ERROR_FALLBACK;404");
  });

  it("une action valide passe par le service", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    svc.resendInvoice.mockResolvedValue({ ok: true, email: "simule" });
    expect(await actions.resendInvoiceAction("f_0123456789a")).toMatchObject({ ok: true });
    expect(await actions.resendInvoiceAction("pas-un-id")).toMatchObject({ ok: false });
    expect(svc.resendInvoice).toHaveBeenCalledTimes(1);
  });
});

describe("route du moteur /api/automatisations/tick", () => {
  const post = (auth?: string) => tick(new Request("http://127.0.0.1:3003/api/automatisations/tick", { method: "POST", headers: auth ? { authorization: auth } : {} }));

  it("production sans secret : refus (503), rien ne tourne", async () => {
    process.env = { ...process.env, NODE_ENV: "production" };
    expect((await post()).status).toBe(503);
    expect(eng.runTick).not.toHaveBeenCalled();
  });
  it("mauvais secret ou absent : 401", async () => {
    process.env = { ...process.env, NODE_ENV: "production", AUTOMATISATIONS_CRON_SECRET: SECRET };
    expect((await post("Bearer mauvais")).status).toBe(401);
    expect((await post()).status).toBe(401);
    expect(eng.runTick).not.toHaveBeenCalled();
  });
  it("bon secret : un passage, bilan sans renseignement personnel ; GET refusé", async () => {
    process.env = { ...process.env, NODE_ENV: "production", AUTOMATISATIONS_CRON_SECRET: SECRET };
    const res = await post(`Bearer ${SECRET}`);
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true, fait: 0 });
    expect(eng.runTick).toHaveBeenCalledTimes(1);
    expect(tickGet().status).toBe(405);
  });
});

describe("liens à jeton", () => {
  it("un jeton inconnu ne montre rien (facture, dossier du client)", async () => {
    const token = "A".repeat(43);
    const f = JSON.stringify(await FacturePage({ params: sp({ token }), searchParams: sp({}) }));
    expect(f).toContain("Ce lien n’est pas valide");
    const s = JSON.stringify(await SuiviPage({ params: sp({ token }), searchParams: sp({}) }));
    expect(s).toContain("Ce lien n’est pas valide");
  });
});
