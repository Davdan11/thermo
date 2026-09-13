/* Chantier P — /gestion « Plans d'entretien » et « Créneaux » : sans session, pages et Server Actions renvoient vers
   la connexion sans rien écrire ni envoyer ; avec une session, zod refuse une saisie invalide et les pages se
   construisent même sans aucune donnée. */
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
  savePlan: vi.fn(async () => ({ ok: true, id: "p_testplan001" })),
  savePortalSettings: vi.fn(),
  enrollByOwner: vi.fn(),
  cancelMembership: vi.fn(),
  addSlots: vi.fn(),
  removeSlot: vi.fn(),
  sendAvailabilityLink: vi.fn(),
  sendPortalLink: vi.fn(),
}));
vi.mock("@/lib/gestion/portail/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/portail/service")>()), ...svc }));
const tk = vi.hoisted(() => ({ runPortalTick: vi.fn() }));
vi.mock("@/lib/gestion/portail/tick", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/portail/tick")>()), ...tk }));

import * as actions from "@/app/gestion/(prive)/portail-actions";
import EntretienPage from "@/app/gestion/(prive)/entretien/page";
import CreneauxPage from "@/app/gestion/(prive)/creneaux/page";
import { createSessionToken } from "../../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../../auth/secret";
import { tempDir, testEnv } from "../../commissions/__tests__/fixtures";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));

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

const planForm = (price: string, percent: string) => {
  const fd = new FormData();
  fd.set("name", "Entretien annuel");
  fd.set("price", price);
  fd.set("percent", percent);
  fd.set("includes", "Nettoyage des filtres\nVérification du drain");
  fd.set("active", "on");
  return fd;
};

describe("sans session", () => {
  it("les pages renvoient vers la connexion", async () => {
    expect(await rejected(EntretienPage())).toContain("/gestion/connexion");
    expect(await rejected(CreneauxPage({ searchParams: Promise.resolve({}) }))).toContain("/gestion/connexion");
  });

  it("chaque Server Action renvoie vers la connexion sans rien écrire ni envoyer", async () => {
    const fd = planForm("249", "15");
    fd.set("installerId", "i_testinst001");
    fd.set("day", "2026-09-25");
    fd.set("start", "08:00");
    fd.set("end", "12:00");
    fd.set("jobId", "j_testjob0001");
    fd.set("planId", "p_testplan001");
    fd.set("note", "au téléphone");
    fd.set("reason", "test");
    const calls: Array<Promise<unknown>> = [
      actions.savePlanAction(undefined, undefined, fd),
      actions.saveConditionsAction(undefined, fd),
      actions.savePortalSettingsAction(undefined, fd),
      actions.enrollAction(undefined, fd),
      actions.cancelMembershipAction("m_testmemb001", undefined, fd),
      actions.addSlotsAction(undefined, fd),
      actions.removeSlotAction("s_testslot001"),
      actions.sendAvailabilityLinkAction("i_testinst001"),
      actions.sendPortalLinkAction("j_testjob0001"),
      actions.runPortalTickAction(),
    ];
    for (const c of calls) expect(await rejected(c)).toContain("/gestion/connexion");
    for (const fn of [...Object.values(svc), ...Object.values(tk)]) expect(fn).not.toHaveBeenCalled();
  });
});

describe("avec une session", () => {
  beforeEach(async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
  });

  it("zod refuse un prix ou un pourcentage invalide ; un prix vide reste « à fixer » (jamais inventé)", async () => {
    expect(await actions.savePlanAction(undefined, undefined, planForm("abc", "15"))).toMatchObject({ ok: false });
    expect(await actions.savePlanAction(undefined, undefined, planForm("249", "150"))).toMatchObject({ ok: false });
    expect(svc.savePlan).not.toHaveBeenCalled();
    expect(await actions.savePlanAction(undefined, undefined, planForm("249,50", "12,5"))).toMatchObject({ ok: true });
    expect(svc.savePlan).toHaveBeenLastCalledWith({ name: "Entretien annuel", priceCents: 24950, includes: ["Nettoyage des filtres", "Vérification du drain"], commissionPercent: 12.5, active: true }, "proprio@exemple.ca", undefined);
    const empty = planForm("", "");
    empty.delete("active");
    await actions.savePlanAction(undefined, undefined, empty);
    expect(svc.savePlan).toHaveBeenLastCalledWith(expect.objectContaining({ priceCents: null, commissionPercent: null, active: false }), "proprio@exemple.ca", undefined);
    expect(await actions.removeSlotAction("../../gestion.json")).toMatchObject({ ok: false });
    expect(svc.removeSlot).not.toHaveBeenCalled();
  });

  it("les pages se construisent sans aucune donnée", async () => {
    await expect(EntretienPage()).resolves.toBeTruthy();
    await expect(CreneauxPage({ searchParams: Promise.resolve({ installateur: "i_inconnu0001" }) })).resolves.toBeTruthy();
  });
});
