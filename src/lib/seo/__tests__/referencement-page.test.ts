/* ==================================================================
   Page Référencement (/gestion/referencement) : réservée au propriétaire
   (requireAdmin), absente du menu des adjoints et des vendeurs (chantier V),
   état « non connecté » avec l'adresse du compte de service et les étapes.
   Aucun appel réseau : fetch global piégé, NODE_ENV=test.
   ================================================================== */
import { generateKeyPairSync } from "node:crypto";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({ get: (n: string) => (n === "tav_gestion" && jar.value ? { name: n, value: jar.value } : undefined), set: vi.fn() }),
  headers: async () => new Headers({ host: "localhost:3001", "x-forwarded-for": "198.51.100.7" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));
vi.mock("next/link", () => ({
  default: (props: { href: string; children: ReactNode; prefetch?: unknown; scroll?: unknown }) => {
    const { href, children, ...rest } = props;
    delete rest.prefetch;
    delete rest.scroll;
    return createElement("a", { href, ...rest }, children);
  },
}));

import ReferencementPage from "@/app/gestion/(prive)/referencement/page";
import { refreshSearchConsoleAction, saveKeywordsAction } from "@/app/gestion/(prive)/referencement/actions";
import { resetSecretCache } from "@/lib/gestion/auth/secret";
import { navHrefsFor, roleCan, SECTION_ROLES } from "@/lib/gestion/equipe/roles";
import { readTrackedKeywords } from "@/lib/seo/search-console-store";
import { A, ADJ, cookieFor, OWNER, seedTeam, testEnv } from "@/lib/gestion/equipe/__tests__/helpers";

const HREF = "/gestion/referencement";
const REFUSED = "/gestion?acces=refuse";
const EMAIL = "lecteur@projet-essai.iam.gserviceaccount.com";
const env = process.env;
let dir: string;
let globalFetch: ReturnType<typeof vi.spyOn>;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const as = async (email: string) => {
  jar.value = await cookieFor(email);
};
const render = async (sp: Record<string, string> = {}) => renderToString((await ReferencementPage({ searchParams: Promise.resolve(sp) })) as React.ReactElement);

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-referencement-"));
  process.env = testEnv(dir);
  for (const k of Object.keys(process.env)) if (/^(GSC_|GOOGLE_SERVICE_ACCOUNT_|INDEXNOW_)/.test(k)) delete process.env[k];
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  jar.value = undefined;
  globalFetch = vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("réseau interdit en test"));
  vi.spyOn(console, "log").mockImplementation(() => undefined);
  await seedTeam();
});
afterEach(async () => {
  process.env = env;
  vi.restoreAllMocks();
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

describe("réservée au propriétaire", () => {
  it("adjointe et vendeur : refusés (page et actions)", async () => {
    for (const who of [ADJ.email, A.email]) {
      await as(who);
      expect(await rejected(ReferencementPage({ searchParams: Promise.resolve({}) })), who).toContain(REFUSED);
      const fd = new FormData();
      fd.set("keywords", "piratage");
      expect(await rejected(saveKeywordsAction(fd)), who).toContain(REFUSED);
      expect(await rejected(refreshSearchConsoleAction()), who).toContain(REFUSED);
    }
    expect(await readTrackedKeywords()).not.toContain("piratage");
  });

  it("sans session : renvoi à la connexion", async () => {
    expect(await rejected(ReferencementPage({ searchParams: Promise.resolve({}) }))).toContain("/gestion/connexion");
  });

  it("chantier V : absente des sections des autres rôles et de leur menu", () => {
    expect(SECTION_ROLES[HREF]).toBeUndefined();
    expect(roleCan("adjoint", HREF)).toBe(false);
    expect(roleCan("vendeur", HREF)).toBe(false);
    expect(navHrefsFor("adjoint")).not.toContain(HREF);
    expect(navHrefsFor("vendeur")).not.toContain(HREF);
    expect(navHrefsFor("proprietaire")).toBeNull();
  });
});

describe("état non connecté", () => {
  it("sans compte de service : étapes complètes, liste de mots-clés par défaut, IndexNow sans clé", async () => {
    await as(OWNER);
    const html = await render();
    expect(html).toContain("Search Console non connectée");
    for (const step of ["IAM et administration", "Google Search Console API", "Utilisateurs et autorisations", "Ajouter un utilisateur", "Restreint", "GSC_SERVICE_ACCOUNT_JSON", "GSC_SITE_URL", "pm2 reload thermo --update-env"]) expect(html, step).toContain(step);
    expect(html).toContain("iam.gserviceaccount.com");
    expect(html).toContain("thermopompe à vendre");
    expect(html).toContain("LogisVert");
    expect(html).toContain("INDEXNOW_KEY");
    expect(html).toContain("Clé manquante");
    expect(html).toContain("indexnow-cron.sh");
    expect(globalFetch).not.toHaveBeenCalled();
  });

  it("compte de l'agenda déjà en place : son adresse est affichée, à ajouter comme utilisateur ; aucune requête hors production", async () => {
    const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048, privateKeyEncoding: { type: "pkcs8", format: "pem" }, publicKeyEncoding: { type: "spki", format: "pem" } });
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = EMAIL;
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY = privateKey.replace(/\n/g, "\\n");
    await as(OWNER);
    const html = await render();
    expect(html).toContain("Hors production : aucune requête vers Google");
    expect(html).toContain(EMAIL);
    expect(html).toContain("Rien à créer");
    expect(html).not.toContain("PRIVATE KEY");
    expect(globalFetch).not.toHaveBeenCalled();
  });

  it("le propriétaire règle la liste des mots-clés", async () => {
    await as(OWNER);
    const fd = new FormData();
    fd.set("keywords", "thermopompe laval\nthermopompe Laval\nprix thermopompe");
    await saveKeywordsAction(fd);
    expect(await readTrackedKeywords()).toEqual(["thermopompe laval", "prix thermopompe"]);
    expect(await render()).toContain("thermopompe laval");
  });
});
