/* ==================================================================
   IndexNow : lots conformes au protocole (10 000 adresses au plus),
   premier passage complet, passages suivants différentiels (lastmod ou
   « sans-date »), lot refusé renvoyé au passage suivant, clé lue dans
   l'environnement et jamais journalisée, fichier de clé servi par la
   réécriture, et AUCUN appel réseau hors production.
   Fetch toujours simulé ; le fetch global est piégé. Clé de test tirée
   au hasard à chaque exécution (aucune clé dans le dépôt).
   ================================================================== */
import { randomBytes } from "node:crypto";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getPathMatch } from "next/dist/shared/lib/router/utils/path-match";
import { batches, fingerprint, INDEXNOW_ENDPOINT, INDEXNOW_MAX_URLS, indexNowKey, indexNowSummary, readIndexNowState, runIndexNow, submitIndexNow, type SitemapEntry } from "../indexnow";

const SITE = "https://thermopompesavendre.ca";
const KEY = randomBytes(16).toString("hex");
const PROD = { NODE_ENV: "production", INDEXNOW_KEY: KEY } as unknown as NodeJS.ProcessEnv;
const plan = (n: number, lastmod: string | undefined = "2026-09-01"): SitemapEntry[] =>
  Array.from({ length: n }, (_, i) => (lastmod ? { url: `${SITE}/produit/m-${i}`, lastmod } : { url: `${SITE}/produit/m-${i}` }));
const status = (...codes: number[]) => {
  let i = 0;
  return vi.fn(async (_url: string | URL | Request, _init?: RequestInit) => new Response(null, { status: codes[Math.min(i++, codes.length - 1)] }));
};
const bodies = (f: ReturnType<typeof status>) => f.mock.calls.map((c) => JSON.parse(String(c[1]?.body)) as { host: string; key: string; keyLocation: string; urlList: string[] });
const noSleep = async () => undefined;

let dir: string;
let file: string;
let globalFetch: ReturnType<typeof vi.spyOn>;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-indexnow-"));
  file = path.join(dir, "gestion-indexnow.json");
  // Filet : un vrai appel réseau ferait échouer le test.
  globalFetch = vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("réseau interdit en test"));
});
afterEach(async () => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  await rm(dir, { recursive: true, force: true });
});

describe("clé et lots", () => {
  it("clé lue dans l'environnement, au format du protocole (8 à 128 : lettres, chiffres, « - »)", () => {
    expect(indexNowKey({ INDEXNOW_KEY: KEY } as unknown as NodeJS.ProcessEnv)).toBe(KEY);
    expect(indexNowKey({ INDEXNOW_KEY: ` ${KEY} ` } as unknown as NodeJS.ProcessEnv)).toBe(KEY);
    expect(indexNowKey({ INDEXNOW_KEY: "a-b-c-1-2" } as unknown as NodeJS.ProcessEnv)).toBe("a-b-c-1-2");
    for (const bad of ["", "court", "avec espace 123", "souligné_12345", "é".repeat(10), "a".repeat(129)]) expect(indexNowKey({ INDEXNOW_KEY: bad } as unknown as NodeJS.ProcessEnv), bad).toBeNull();
    expect(indexNowKey({} as unknown as NodeJS.ProcessEnv)).toBeNull();
  });

  it("lots de 10 000 adresses au plus", () => {
    expect(INDEXNOW_MAX_URLS).toBe(10_000);
    expect(batches(Array.from({ length: 25_001 }, (_, i) => i)).map((b) => b.length)).toEqual([10_000, 10_000, 5_001]);
    expect(batches([])).toEqual([]);
    expect(batches([1, 2, 3], 50_000).map((b) => b.length)).toEqual([3]);
  });

  it("empreinte : lastmod, sinon « sans-date »", () => {
    expect(fingerprint({ url: "x", lastmod: "2026-09-01T10:00:00Z" })).toBe("2026-09-01");
    expect(fingerprint({ url: "x" })).toBe("sans-date");
  });
});

describe("envoi (fetch simulé, production)", () => {
  it("premier passage : tout le plan du site, lots conformes (host, key, keyLocation, urlList)", async () => {
    const f = status(200, 202);
    const { run, exitCode, lines } = await runIndexNow({ entries: plan(12_345), siteUrl: SITE, env: PROD, fetchImpl: f, file, sleep: noSleep });
    expect(exitCode).toBe(0);
    expect(run.mode).toBe("complet");
    expect(f).toHaveBeenCalledTimes(2);
    for (const c of f.mock.calls) {
      expect(c[0]).toBe(INDEXNOW_ENDPOINT);
      expect(c[1]?.method).toBe("POST");
      expect((c[1]?.headers as Record<string, string>)["Content-Type"]).toBe("application/json; charset=utf-8");
    }
    const [b1, b2] = bodies(f);
    expect(b1).toMatchObject({ host: "thermopompesavendre.ca", key: KEY, keyLocation: `${SITE}/${KEY}.txt` });
    expect(b1.urlList).toHaveLength(10_000);
    expect(b2.urlList).toHaveLength(2_345);
    expect(new Set([...b1.urlList, ...b2.urlList]).size).toBe(12_345);
    expect(run).toMatchObject({ inPlan: 12_345, sent: 12_345, accepted: 12_345, simulated: false });
    const state = await readIndexNowState(file);
    expect(Object.keys(state!.urls)).toHaveLength(12_345);
    expect(state!.lastSuccessAt).toBe(run.at);
    // Journal clair, sans la clé.
    expect(lines.join("\n")).not.toContain(KEY);
    expect(lines.join("\n")).toMatch(/lot 2\/2 : HTTP 202/);
    expect(globalFetch).not.toHaveBeenCalled();
  });

  it("passages suivants : seulement les adresses ajoutées, modifiées (lastmod) ou retirées", async () => {
    const first = status(200);
    await runIndexNow({ entries: plan(50), siteUrl: SITE, env: PROD, fetchImpl: first, file, sleep: noSleep });

    const same = status(200);
    const r2 = await runIndexNow({ entries: plan(50), siteUrl: SITE, env: PROD, fetchImpl: same, file, sleep: noSleep });
    expect(r2.run.mode).toBe("aucun-changement");
    expect(same).not.toHaveBeenCalled();

    const next = plan(50);
    next[3].lastmod = next[7].lastmod = next[9].lastmod = "2026-09-12"; // 3 modifiées
    next.splice(20, 1); // m-20 retirée
    next.push({ url: `${SITE}/guides/nouveau` }, { url: `${SITE}/produit/nouveau`, lastmod: "2026-09-12" }); // 2 ajoutées
    const diff = status(200);
    const r3 = await runIndexNow({ entries: next, siteUrl: SITE, env: PROD, fetchImpl: diff, file, sleep: noSleep });
    expect(r3.run).toMatchObject({ mode: "differentiel", added: 2, changed: 3, removed: 1, sent: 6, accepted: 6 });
    expect(diff).toHaveBeenCalledTimes(1);
    expect(bodies(diff)[0].urlList.sort()).toEqual(
      [`${SITE}/produit/m-3`, `${SITE}/produit/m-7`, `${SITE}/produit/m-9`, `${SITE}/produit/m-20`, `${SITE}/guides/nouveau`, `${SITE}/produit/nouveau`].sort(),
    );
    const state = await readIndexNowState(file);
    expect(state!.urls[`${SITE}/produit/m-20`]).toBeUndefined();
    expect(state!.urls[`${SITE}/produit/m-3`]).toBe("2026-09-12");
    expect(state!.urls[`${SITE}/guides/nouveau`]).toBe("sans-date");
    expect(Object.keys(state!.urls)).toHaveLength(51);

    // Une page sans lastmod n'est pas renvoyée tant que rien ne change.
    const again = status(200);
    expect((await runIndexNow({ entries: next, siteUrl: SITE, env: PROD, fetchImpl: again, file, sleep: noSleep })).run.mode).toBe("aucun-changement");
    expect(again).not.toHaveBeenCalled();
  });

  it("lot refusé (429) : noté comme non envoyé, repart au passage suivant ; code de sortie 2", async () => {
    const f = status(200, 429);
    const r = await runIndexNow({ entries: plan(12_000), siteUrl: SITE, env: PROD, fetchImpl: f, file, sleep: noSleep });
    expect(r.exitCode).toBe(2);
    expect(r.run.accepted).toBe(10_000);
    expect(Object.keys((await readIndexNowState(file))!.urls)).toHaveLength(10_000);
    const g = status(200);
    const r2 = await runIndexNow({ entries: plan(12_000), siteUrl: SITE, env: PROD, fetchImpl: g, file, sleep: noSleep });
    expect(r2.run).toMatchObject({ mode: "differentiel", added: 2_000, sent: 2_000 });
    expect(bodies(g)[0].urlList).toHaveLength(2_000);
  });

  it("clé refusée (403) : les lots suivants ne partent pas", async () => {
    const f = status(403);
    const r = await runIndexNow({ entries: plan(25_000), siteUrl: SITE, env: PROD, fetchImpl: f, file, sleep: noSleep });
    expect(f).toHaveBeenCalledTimes(1);
    expect(r.run.batches.map((b) => b.status)).toEqual([403, null, null]);
    expect(r.exitCode).toBe(2);
    expect(Object.keys((await readIndexNowState(file))!.urls)).toHaveLength(0);
  });

  it("adresses hors du domaine ignorées (sinon 422), doublons retirés", async () => {
    const f = status(200);
    await runIndexNow({ entries: [...plan(3), { url: "https://ailleurs.example/x" }, { url: `${SITE}/produit/m-0`, lastmod: "2026-09-01" }], siteUrl: SITE, env: PROD, fetchImpl: f, file, sleep: noSleep });
    expect(bodies(f)[0].urlList).toEqual([`${SITE}/produit/m-0`, `${SITE}/produit/m-1`, `${SITE}/produit/m-2`]);
  });

  it("sans clé : rien n'est envoyé, code 1", async () => {
    const f = status(200);
    const r = await runIndexNow({ entries: plan(5), siteUrl: SITE, env: { NODE_ENV: "production" } as unknown as NodeJS.ProcessEnv, fetchImpl: f, file, sleep: noSleep });
    expect(r.exitCode).toBe(1);
    expect(r.run.mode).toBe("sans-cle");
    expect(f).not.toHaveBeenCalled();
  });

  it("--dry-run : n'envoie rien, n'écrit rien", async () => {
    const f = status(200);
    const r = await runIndexNow({ entries: plan(5), siteUrl: SITE, env: PROD, fetchImpl: f, file, sleep: noSleep, dryRun: true });
    expect(r.lines.join("\n")).toMatch(/Essai/);
    expect(f).not.toHaveBeenCalled();
    expect(await readIndexNowState(file)).toBeNull();
  });
});

describe("aucun appel réseau hors production", () => {
  for (const NODE_ENV of ["test", "development", undefined]) {
    it(`NODE_ENV=${NODE_ENV ?? "(absent)"} : envoi simulé, rien n'est noté comme envoyé`, async () => {
      const f = status(200);
      const env = { INDEXNOW_KEY: KEY, ...(NODE_ENV ? { NODE_ENV } : {}) } as unknown as NodeJS.ProcessEnv;
      const r = await runIndexNow({ entries: plan(20), siteUrl: SITE, env, fetchImpl: f, file, sleep: noSleep });
      expect(r.run.mode).toBe("simule");
      expect(r.run.simulated).toBe(true);
      expect(f).not.toHaveBeenCalled();
      expect(globalFetch).not.toHaveBeenCalled();
      expect(Object.keys((await readIndexNowState(file))!.urls)).toHaveLength(0);
      // Sans fetch injecté non plus.
      const s = await submitIndexNow(["https://thermopompesavendre.ca/"], { key: KEY, siteUrl: SITE, env });
      expect(s.simulated).toBe(true);
      expect(globalFetch).not.toHaveBeenCalled();
      // Le premier vrai passage en production reste complet.
      const p = status(200);
      expect((await runIndexNow({ entries: plan(20), siteUrl: SITE, env: PROD, fetchImpl: p, file, sleep: noSleep })).run.mode).toBe("complet");
    });
  }

  it("résumé pour la page Référencement", async () => {
    await runIndexNow({ entries: plan(8), siteUrl: SITE, env: PROD, fetchImpl: status(200), file, sleep: noSleep });
    const s = await indexNowSummary(PROD, file);
    expect(s).toMatchObject({ keyConfigured: true, tracked: 8 });
    expect(s.lastRun?.accepted).toBe(8);
    expect((await indexNowSummary({} as unknown as NodeJS.ProcessEnv, path.join(dir, "absent.json"))).keyConfigured).toBe(false);
  });
});

describe("fichier de clé à la racine (/<clé>.txt)", () => {
  it("la route répond la clé seulement si elle correspond à INDEXNOW_KEY", async () => {
    const { GET } = await import("@/app/api/indexnow/cle/[cle]/route");
    const call = (cle: string) => GET(new Request(`${SITE}/${cle}.txt`), { params: Promise.resolve({ cle }) });
    vi.stubEnv("INDEXNOW_KEY", KEY);
    const ok = await call(KEY);
    expect(ok.status).toBe(200);
    expect(await ok.text()).toBe(KEY);
    expect(ok.headers.get("content-type")).toMatch(/^text\/plain/);
    expect((await call("abcdef0123456789")).status).toBe(404);
    vi.stubEnv("INDEXNOW_KEY", "");
    expect((await call(KEY)).status).toBe(404);
  });

  it("réécriture « fallback » de next.config.ts : /<clé>.txt seulement (8 à 128 caractères permis)", async () => {
    const { default: config } = await import("../../../../next.config");
    const rewrites = (await config.rewrites!()) as { beforeFiles: unknown[]; afterFiles: unknown[]; fallback: Array<{ source: string; destination: string }> };
    expect(rewrites.beforeFiles).toEqual([]);
    expect(rewrites.afterFiles).toEqual([]);
    const rule = rewrites.fallback.find((r) => r.destination === "/api/indexnow/cle/:cle")!;
    const match = getPathMatch(rule.source, { removeUnnamedParams: true, strict: true });
    expect(match(`/${KEY}.txt`)).toEqual({ cle: KEY });
    expect(match("/a1b2-c3d4.txt")).toEqual({ cle: "a1b2-c3d4" });
    for (const other of ["/llms.txt", "/robots.txt", `/dossier/${KEY}.txt`, `/${KEY}.xml`, "/souligne_123456789.txt", `/${KEY}`]) expect(match(other), other).toBe(false);
  });
});

describe("plan du site réel", () => {
  it("toutes les adresses du plan (même domaine, sans doublon) ; premier passage en lots conformes", async () => {
    const { collectSitemapEntries } = await import("../indexnow-sitemap");
    const entries = await collectSitemapEntries();
    expect(entries.length).toBeGreaterThan(4_000);
    expect(new Set(entries.map((e) => e.url)).size).toBe(entries.length);
    for (const e of entries) {
      expect(e.url.startsWith(`${SITE}/`) || e.url === SITE).toBe(true);
      if (e.lastmod) expect(e.lastmod).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
    const f = status(200);
    const r = await runIndexNow({ entries, siteUrl: SITE, env: PROD, fetchImpl: f, file, sleep: noSleep });
    expect(r.run.accepted).toBe(entries.length);
    for (const b of bodies(f)) expect(b.urlList.length).toBeLessThanOrEqual(10_000);
    expect(bodies(f).reduce((s, b) => s + b.urlList.length, 0)).toBe(entries.length);
  }, 60_000);
});
