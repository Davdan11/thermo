/* Accès du volet A : sans session valide, les pages /gestion renvoient vers la connexion, les Server Actions ne font
   rien, les routes /gestion/api répondent 401 ; les pages publiques à jeton ne sont jamais indexées. */
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

const pa = vi.hoisted(() => ({ sendAgreement: vi.fn(), saveCompliance: vi.fn(), endPartnership: vi.fn(), sendCitation: vi.fn(), publishVersion: vi.fn(), savePartnerSettings: vi.fn() }));
vi.mock("@/lib/gestion/partenaires/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/partenaires/service")>()), ...pa }));
const tr = vi.hoisted(() => ({ issueFieldLink: vi.fn(), declareCompletion: vi.fn(), reviewPhoto: vi.fn() }));
vi.mock("@/lib/gestion/terrain/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/terrain/service")>()), ...tr }));
const sv = vi.hoisted(() => ({ classifyTicket: vi.fn(), assignTicket: vi.fn(), resolveTicket: vi.fn(), sendServiceLink: vi.fn(), createTicket: vi.fn() }));
vi.mock("@/lib/gestion/sav/service", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/sav/service")>()), ...sv }));

import * as actions from "@/app/gestion/(prive)/partenaires-actions";
import PartenairesPage from "@/app/gestion/(prive)/partenaires/page";
import PartnerPage from "@/app/gestion/(prive)/partenaires/[id]/page";
import PartnerSettingsPage from "@/app/gestion/(prive)/partenaires/reglages/page";
import EntentePage from "@/app/gestion/(prive)/entente/page";
import VersionPage from "@/app/gestion/(prive)/entente/[id]/page";
import SavPage from "@/app/gestion/(prive)/sav/page";
import NewTicketPage from "@/app/gestion/(prive)/sav/nouveau/page";
import TicketPage from "@/app/gestion/(prive)/sav/[id]/page";
import PhotosPage from "@/app/gestion/(prive)/photos/page";
import { GET as docGet } from "@/app/gestion/api/partenaires/document/[id]/route";
import { GET as fileGet } from "@/app/gestion/api/partenaires/fichier/[id]/route";
import { POST as complianceUpload } from "@/app/gestion/api/partenaires/conformite/route";
import { GET as fieldPhotoGet } from "@/app/gestion/api/terrain/photo/[id]/route";
import { POST as savPhotosPost } from "@/app/gestion/api/sav/photos/route";
import { metadata as ententeMeta } from "@/app/entente/layout";
import { metadata as chantierMeta } from "@/app/chantier/layout";
import { metadata as serviceMeta } from "@/app/service/layout";
import { proxy } from "@/proxy";
import { createSessionToken } from "../../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../../auth/secret";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const sp = <T,>(v: T) => Promise.resolve(v);

const pages: Array<[string, () => Promise<unknown>]> = [
  ["partenaires", () => PartenairesPage()],
  ["fiche partenaire", () => PartnerPage({ params: sp({ id: "i_inconnu0001" }), searchParams: sp({}) })],
  ["réglages", () => PartnerSettingsPage()],
  ["entente", () => EntentePage()],
  ["version", () => VersionPage({ params: sp({ id: "a_inconnu0001" }) })],
  ["service", () => SavPage()],
  ["nouveau billet", () => NewTicketPage({ searchParams: sp({}) })],
  ["billet", () => TicketPage({ params: sp({ id: "b_inconnu0001" }), searchParams: sp({}) })],
  ["photos", () => PhotosPage({ searchParams: sp({}) })],
];

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-volet-a-acces-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
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
  it.each(pages)("la page %s renvoie vers la connexion", async (_, render) => {
    expect(await rejected(render())).toContain("/gestion/connexion");
  });

  it("chaque Server Action renvoie vers la connexion sans rien écrire ni envoyer", async () => {
    const fd = new FormData();
    fd.set("reason", "raison assez longue");
    fd.set("confirm", "1");
    const calls: Array<Promise<unknown>> = [
      actions.sendAgreementAction("i_install0001"),
      actions.sendAgreementToAllAction(),
      actions.complianceAction("i_install0001", "rbq", undefined, fd),
      actions.tierAction("i_install0001", undefined, fd),
      actions.endPartnershipAction("i_install0001", undefined, fd),
      actions.citationSendAction({ id: "i_install0001", ref: "6.2", note: "" }),
      actions.publishVersionAction("a_version0001", undefined, fd),
      actions.partnerSettingsAction(undefined, fd),
      actions.fieldLinkAction("j_job0000001"),
      actions.declareCompletionAction("j_job0000001", undefined, fd),
      actions.reviewPhotoAction("f_photo00001", "signalee"),
      actions.classifyTicketAction("b_ticket0001", undefined, fd),
      actions.assignTicketAction("b_ticket0001"),
      actions.resolveTicketAction("b_ticket0001", undefined, fd),
      actions.sendServiceLinkAction("j_job0000001"),
      actions.createTicketAction(undefined, fd),
    ];
    for (const c of calls) expect(await rejected(c)).toContain("/gestion/connexion");
    for (const fn of [...Object.values(pa), ...Object.values(tr), ...Object.values(sv)]) expect(fn).not.toHaveBeenCalled();
  });

  it("les routes /gestion/api du volet A répondent 401", async () => {
    const p = <T,>(v: T) => ({ params: Promise.resolve(v) });
    expect((await docGet(new Request("http://localhost:3001/x"), p({ id: "s_sig0000001" }))).status).toBe(401);
    expect((await fileGet(new Request("http://localhost:3001/x"), p({ id: "d_doc0000001" }))).status).toBe(401);
    expect((await fieldPhotoGet(new Request("http://localhost:3001/x"), p({ id: "f_photo00001" }))).status).toBe(401);
    expect((await complianceUpload(new NextRequest("http://localhost:3001/gestion/api/partenaires/conformite", { method: "POST" }))).status).toBe(401);
    expect((await savPhotosPost(new NextRequest("http://localhost:3001/gestion/api/sav/photos", { method: "POST" }))).status).toBe(401);
  });

  it("le proxy redirige aussi", () => {
    for (const path of ["/gestion/partenaires", "/gestion/entente", "/gestion/sav", "/gestion/photos"]) {
      const res = proxy(new NextRequest(`http://localhost:3001${path}`));
      expect(res.status).toBe(307);
    }
  });
});

describe("avec une session valide", () => {
  it("les pages se construisent sans données ; un identifiant inconnu donne 404", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    for (const [name, render] of pages) {
      if (["fiche partenaire", "version", "billet"].includes(name)) {
        expect(await rejected(render())).toContain("NEXT_HTTP_ERROR_FALLBACK;404");
        continue;
      }
      await expect(render()).resolves.toBeTruthy();
    }
  });

  it("les actions valident leurs entrées avant d'écrire", async () => {
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    expect(await actions.sendAgreementAction("../../etc")).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.citationSendAction({ id: "i_install0001", ref: "6.2; rm", note: "" })).toEqual({ ok: false, error: "Demande invalide." });
    expect(await actions.reviewPhotoAction("f_photo00001", "supprimee")).toEqual({ ok: false, error: "Demande invalide." });
    expect(pa.sendAgreement).not.toHaveBeenCalled();
    expect(pa.sendCitation).not.toHaveBeenCalled();
    expect(tr.reviewPhoto).not.toHaveBeenCalled();
  });
});

describe("pages publiques à jeton", () => {
  it("entente, chantier et « Un problème ? » : jamais indexées, sans référent", () => {
    for (const m of [ententeMeta, chantierMeta, serviceMeta]) {
      expect(m.robots).toMatchObject({ index: false, follow: false });
      expect(m.referrer).toBe("no-referrer");
    }
  });
});
