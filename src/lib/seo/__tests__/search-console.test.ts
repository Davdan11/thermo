/* ==================================================================
   Search Console : assertion JWT RS256 (clé RSA tirée à chaque
   exécution, jamais dans le dépôt), identifiants du compte de service,
   jeton gardé en mémoire, cache de 6 heures et garde de 10 minutes,
   états « non connecté », « hors production », « sans accès », mots-clés
   sans égard aux accents. Toutes les réponses de Google sont simulées ;
   le fetch global est piégé.
   ================================================================== */
import { generateKeyPairSync, verify } from "node:crypto";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { accessToken, GOOGLE_TOKEN_URL, resetTokenCache, searchConsoleAccount, serviceAccountEmail, signAssertion } from "@/lib/google/service-account";
import { addDays, aggregateKeywords, comparePages, GSC_SCOPE, gscPeriods, keywordRegex, searchConsoleOverview } from "../search-console";
import { DEFAULT_KEYWORDS, normalizeKeyword, readSearchConsoleCache, readTrackedKeywords, sanitizeKeywords, saveTrackedKeywords } from "../search-console-store";

const { privateKey, publicKey } = generateKeyPairSync("rsa", { modulusLength: 2048, privateKeyEncoding: { type: "pkcs8", format: "pem" }, publicKeyEncoding: { type: "spki", format: "pem" } });
const EMAIL = "lecteur@projet-essai.iam.gserviceaccount.com";
const SITE = "https://thermopompesavendre.ca";
const NOW = new Date("2026-09-13T16:00:00Z");
const escaped = privateKey.replace(/\n/g, "\\n");
const PROD = { NODE_ENV: "production", GOOGLE_SERVICE_ACCOUNT_EMAIL: EMAIL, GOOGLE_SERVICE_ACCOUNT_KEY: escaped } as unknown as NodeJS.ProcessEnv;
const b64json = (s: string) => JSON.parse(Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8"));
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

/* Requêtes simulées : totaux différents selon la période, requêtes et pages. */
const POOL = [
  { q: "thermopompe à vendre", clicks: 4, impressions: 80, position: 8.5 },
  { q: "thermopompe montreal", clicks: 1, impressions: 30, position: 14 },
  { q: "Thermopompe Montréal", clicks: 1, impressions: 10, position: 10 },
  { q: "logisvert", clicks: 2, impressions: 20, position: 6 },
  { q: "thermopompe montréal prix", clicks: 1, impressions: 5, position: 20 },
];
function googleFetch(o: { status?: number; message?: string; sites?: Array<{ siteUrl: string; permissionLevel: string }> } = {}) {
  const p = gscPeriods(NOW);
  return vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    const url = String(input);
    if (url === GOOGLE_TOKEN_URL) return json({ access_token: "jeton-essai", expires_in: 3600 });
    if (o.status) return json({ error: { message: o.message ?? "The caller does not have permission" } }, o.status);
    if (url.endsWith("/sites")) return json({ siteEntry: o.sites ?? [{ siteUrl: "sc-domain:thermopompesavendre.ca", permissionLevel: "siteRestrictedUser" }] });
    if (url.endsWith("/sitemaps")) return json({ sitemap: [{ path: `${SITE}/sitemap-index.xml`, lastSubmitted: "2026-09-01T12:00:00Z", lastDownloaded: "2026-09-12T08:00:00Z", isPending: false, isSitemapsIndex: true, warnings: "0", errors: "1", contents: [{ type: "web", submitted: "5103" }] }] });
    if (url.includes("/searchAnalytics/query")) {
      const b = JSON.parse(String(init?.body)) as { startDate: string; dimensions?: string[]; dimensionFilterGroups?: Array<{ filters: Array<{ expression: string }> }> };
      const prev = b.startDate === p.d28.prevStart || b.startDate === p.m3.prevStart;
      if (!b.dimensions) return json({ rows: [prev ? { clicks: 5, impressions: 200, ctr: 0.025, position: 22 } : { clicks: 9, impressions: 300, ctr: 0.03, position: 18.4 }] });
      if (b.dimensions[0] === "date") return json({ rows: [{ keys: ["2026-09-09"], clicks: 1, impressions: 10 }, { keys: ["2026-09-08"], clicks: 2, impressions: 12 }] });
      if (b.dimensions[0] === "page") return json({ rows: prev ? [{ keys: [`${SITE}/prix`], clicks: 3, impressions: 50, position: 12 }] : [{ keys: [`${SITE}/`], clicks: 5, impressions: 90, position: 9 }, { keys: [`${SITE}/prix`], clicks: 1, impressions: 40, position: 15 }] });
      let rows = POOL.map((r) => ({ keys: [r.q], clicks: r.clicks, impressions: r.impressions, ctr: r.clicks / r.impressions, position: r.position }));
      const rx = b.dimensionFilterGroups?.[0]?.filters?.[0]?.expression;
      if (rx) {
        const re = new RegExp(rx.replace(/^\(\?i\)/, ""), "i");
        rows = rows.filter((r) => re.test(r.keys[0]));
        if (prev) rows = rows.slice(0, 1).map((r) => ({ ...r, position: 11 }));
      }
      return json({ rows });
    }
    return json({}, 404);
  });
}

let dir: string;
let cacheFile: string;
let globalFetch: ReturnType<typeof vi.spyOn>;
beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-gsc-"));
  cacheFile = path.join(dir, "gestion-search-console.json");
  resetTokenCache();
  globalFetch = vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("réseau interdit en test"));
});
afterEach(async () => {
  vi.restoreAllMocks();
  await rm(dir, { recursive: true, force: true });
});

describe("compte de service et JWT", () => {
  it("assertion RS256 signée, réclamations exactes, sans « sub » (aucune délégation)", () => {
    const jwt = signAssertion({ clientEmail: EMAIL, privateKey }, GSC_SCOPE, 1_790_000_000);
    const [h, c, s] = jwt.split(".");
    expect(b64json(h)).toEqual({ alg: "RS256", typ: "JWT" });
    expect(b64json(c)).toEqual({ iss: EMAIL, scope: "https://www.googleapis.com/auth/webmasters.readonly", aud: "https://oauth2.googleapis.com/token", iat: 1_790_000_000, exp: 1_790_003_600 });
    const sig = Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64");
    expect(verify("RSA-SHA256", Buffer.from(`${h}.${c}`), publicKey, sig)).toBe(true);
    expect(verify("RSA-SHA256", Buffer.from(`${h}.${c}x`), publicKey, sig)).toBe(false);
  });

  it("identifiants : GSC_SERVICE_ACCOUNT_JSON (texte ou base64), paire GSC_*, sinon le compte de l'agenda", () => {
    const file = JSON.stringify({ type: "service_account", client_email: EMAIL, private_key: privateKey });
    expect(searchConsoleAccount({ GSC_SERVICE_ACCOUNT_JSON: file } as unknown as NodeJS.ProcessEnv)).toMatchObject({ clientEmail: EMAIL, source: "GSC_SERVICE_ACCOUNT_JSON" });
    expect(searchConsoleAccount({ GSC_SERVICE_ACCOUNT_JSON: Buffer.from(file).toString("base64") } as unknown as NodeJS.ProcessEnv)?.privateKey).toBe(privateKey.trim());
    expect(searchConsoleAccount({ GSC_SERVICE_ACCOUNT_EMAIL: EMAIL, GSC_SERVICE_ACCOUNT_KEY: escaped } as unknown as NodeJS.ProcessEnv)?.source).toBe("GSC_SERVICE_ACCOUNT_EMAIL");
    const calendar = searchConsoleAccount(PROD);
    expect(calendar).toMatchObject({ clientEmail: EMAIL, source: "GOOGLE_SERVICE_ACCOUNT_EMAIL" });
    expect(calendar?.privateKey).toContain("\n");
    expect(searchConsoleAccount({ GOOGLE_SERVICE_ACCOUNT_EMAIL: EMAIL } as unknown as NodeJS.ProcessEnv)).toBeNull();
    expect(serviceAccountEmail({ GOOGLE_SERVICE_ACCOUNT_EMAIL: EMAIL } as unknown as NodeJS.ProcessEnv)).toBe(EMAIL);
    expect(serviceAccountEmail({} as unknown as NodeJS.ProcessEnv)).toBeNull();
  });

  it("jeton : refusé hors production sans aucune requête ; en production, demandé une fois puis gardé jusqu'à l'expiration", async () => {
    const account = searchConsoleAccount(PROD)!;
    const f = googleFetch();
    await expect(accessToken(account, GSC_SCOPE, { fetchImpl: f, env: { NODE_ENV: "test" } as unknown as NodeJS.ProcessEnv })).rejects.toThrow(/hors production/);
    expect(f).not.toHaveBeenCalled();
    let t = NOW.getTime();
    const now = () => t;
    expect(await accessToken(account, GSC_SCOPE, { fetchImpl: f, env: PROD, now })).toBe("jeton-essai");
    expect(await accessToken(account, GSC_SCOPE, { fetchImpl: f, env: PROD, now })).toBe("jeton-essai");
    expect(f).toHaveBeenCalledTimes(1);
    const body = new URLSearchParams(String(f.mock.calls[0][1]?.body));
    expect(body.get("grant_type")).toBe("urn:ietf:params:oauth:grant-type:jwt-bearer");
    expect(body.get("assertion")!.split(".")).toHaveLength(3);
    t += 3_600_000;
    await accessToken(account, GSC_SCOPE, { fetchImpl: f, env: PROD, now });
    expect(f).toHaveBeenCalledTimes(2);
    expect(globalFetch).not.toHaveBeenCalled();
  });
});

describe("vue de la page (Google simulé)", () => {
  const overview = (o: { env?: NodeJS.ProcessEnv; now?: Date; force?: boolean; keywords?: readonly string[]; fetchImpl?: typeof fetch }) =>
    searchConsoleOverview({ siteUrl: SITE, keywords: o.keywords ?? DEFAULT_KEYWORDS, env: o.env ?? PROD, now: o.now ?? NOW, force: o.force, fetchImpl: o.fetchImpl, cacheFile });

  it("non connecté : aucune requête ; l'adresse du compte de service est donnée si elle est connue", async () => {
    const f = googleFetch();
    expect(await overview({ env: {} as unknown as NodeJS.ProcessEnv, fetchImpl: f })).toEqual({ status: "non-configure", email: null });
    expect(await overview({ env: { GOOGLE_SERVICE_ACCOUNT_EMAIL: EMAIL } as unknown as NodeJS.ProcessEnv, fetchImpl: f })).toEqual({ status: "non-configure", email: EMAIL });
    expect(f).not.toHaveBeenCalled();
  });

  it("hors production : aucune requête vers Google", async () => {
    const f = googleFetch();
    const s = await overview({ env: { ...PROD, NODE_ENV: "development" }, fetchImpl: f });
    expect(s).toMatchObject({ status: "hors-production", email: EMAIL });
    expect(f).not.toHaveBeenCalled();
    expect(globalFetch).not.toHaveBeenCalled();
  });

  it("connecté : totaux et tendance, requêtes, pages qui montent ou baissent, mots-clés, plans du site ; cache écrit", async () => {
    const f = googleFetch();
    const s = await overview({ fetchImpl: f });
    expect(s.status).toBe("ok");
    if (s.status !== "ok") return;
    const d = s.data;
    expect(d.siteUrl).toBe("sc-domain:thermopompesavendre.ca");
    expect(d.d28.current).toEqual({ clicks: 9, impressions: 300, ctr: 0.03, position: 18.4 });
    expect(d.d28.previous.clicks).toBe(5);
    expect(d.m3.current.clicks).toBe(9);
    expect(d.daily.map((x) => x.date)).toEqual(["2026-09-08", "2026-09-09"]);
    expect(d.d28.queries[0]).toMatchObject({ query: "thermopompe à vendre", clicks: 4 });
    expect(d.rising[0]).toMatchObject({ page: `${SITE}/`, deltaClicks: 5 });
    expect(d.falling[0]).toMatchObject({ page: `${SITE}/prix`, deltaClicks: -2 });
    const mtl = d.keywords.find((k) => k.keyword === "thermopompe montréal")!;
    expect(mtl.current).toMatchObject({ clicks: 2, impressions: 40 });
    expect(mtl.current!.position).toBeCloseTo((14 * 30 + 10 * 10) / 40, 5);
    expect(mtl.variants.sort()).toEqual(["Thermopompe Montréal", "thermopompe montreal"].sort());
    expect(d.keywords.find((k) => k.keyword === "LogisVert")!.current!.clicks).toBe(2);
    expect(d.keywords.find((k) => k.keyword === "thermopompe laval")!.current).toBeNull();
    expect(d.sitemaps[0]).toMatchObject({ isSitemapsIndex: true, submitted: 5103, errors: 1 });
    // 1 jeton + 1 liste des propriétés + 14 requêtes d'analyse + 1 plans du site.
    expect(f).toHaveBeenCalledTimes(17);
    for (const c of f.mock.calls.slice(1)) expect((c[1]?.headers as Record<string, string>).Authorization).toBe("Bearer jeton-essai");
    expect((await readSearchConsoleCache(cacheFile))?.fetchedAt).toBe(NOW.toISOString());
    expect(globalFetch).not.toHaveBeenCalled();
  });

  it("cache : rien de relu avant 6 h ; « Actualiser » pas avant 10 min ; autre liste de mots-clés = nouvelle lecture", async () => {
    const f = googleFetch();
    await overview({ fetchImpl: f });
    const n = f.mock.calls.length;
    expect((await overview({ fetchImpl: f, now: new Date(NOW.getTime() + 5 * 3_600_000) })).status).toBe("ok");
    expect(f.mock.calls.length).toBe(n);
    await overview({ fetchImpl: f, force: true, now: new Date(NOW.getTime() + 9 * 60_000) });
    expect(f.mock.calls.length).toBe(n);
    await overview({ fetchImpl: f, force: true, now: new Date(NOW.getTime() + 11 * 60_000) });
    expect(f.mock.calls.length).toBeGreaterThan(n);
    const m = f.mock.calls.length;
    await overview({ fetchImpl: f, now: new Date(NOW.getTime() + 12 * 60_000), keywords: ["thermopompe"] });
    expect(f.mock.calls.length).toBeGreaterThan(m);
    const k = f.mock.calls.length;
    await overview({ fetchImpl: f, now: new Date(NOW.getTime() + 7 * 3_600_000), keywords: ["thermopompe"] });
    expect(f.mock.calls.length).toBeGreaterThan(k);
  });

  it("GSC_SITE_URL : propriété imposée, la liste des propriétés n'est pas lue", async () => {
    const f = googleFetch();
    const s = await overview({ env: { ...PROD, GSC_SITE_URL: "https://thermopompesavendre.ca/" }, fetchImpl: f });
    expect(s.status === "ok" && s.data.siteUrl).toBe("https://thermopompesavendre.ca/");
    expect(f.mock.calls.some((c) => String(c[0]).endsWith("/sites"))).toBe(false);
    expect(f.mock.calls.some((c) => String(c[0]).includes(encodeURIComponent("https://thermopompesavendre.ca/")))).toBe(true);
  });

  it("sans accès (403) ou propriété absente : état clair avec l'adresse à ajouter, jamais la clé", async () => {
    const s = await overview({ fetchImpl: googleFetch({ status: 403 }) });
    expect(s).toMatchObject({ status: "sans-acces", email: EMAIL });
    expect(JSON.stringify(s)).not.toContain("PRIVATE KEY");
    const none = await overview({ fetchImpl: googleFetch({ sites: [{ siteUrl: "sc-domain:ailleurs.example", permissionLevel: "siteOwner" }] }) });
    expect(none).toMatchObject({ status: "sans-acces", email: EMAIL });
    const api = await overview({ fetchImpl: googleFetch({ status: 403, message: "Google Search Console API has not been used in project 123 before or it is disabled." }) });
    expect(api.status).toBe("api-desactivee");
  });

  it("erreur après une lecture réussie : les dernières données restent, avec un avertissement", async () => {
    await overview({ fetchImpl: googleFetch() });
    const s = await overview({ fetchImpl: googleFetch({ status: 500, message: "Backend Error" }), now: new Date(NOW.getTime() + 7 * 3_600_000) });
    expect(s).toMatchObject({ status: "ok", fromCache: true, warning: "Backend Error" });
  });
});

describe("mots-clés, périodes, pages", () => {
  it("expression RE2 : requête entière, sans égard aux accents, à la casse ni aux traits d'union", () => {
    const rx = keywordRegex(["thermopompe montréal", "LogisVert", "prix (installé)"]);
    expect(rx.startsWith("(?i)^(?:")).toBe(true);
    const re = new RegExp(rx.replace(/^\(\?i\)/, ""), "i");
    for (const ok of ["thermopompe montreal", "Thermopompe Montréal", "thermopompe-montréal", "LOGISVERT", "prix (installé)"]) expect(re.test(ok), ok).toBe(true);
    for (const ko of ["thermopompe montréal prix", "logis vert x", "prix installé"]) expect(re.test(ko), ko).toBe(false);
  });

  it("liste réglable : nettoyée (doublons d'accents, vides), 40 au plus ; vide = liste par défaut", async () => {
    expect(sanitizeKeywords("thermopompe\n\nThermopompe\n  prix   thermopompe \nprix thermopompe")).toEqual(["thermopompe", "prix thermopompe"]);
    expect(sanitizeKeywords(Array.from({ length: 60 }, (_, i) => `mot ${i}`))).toHaveLength(40);
    expect(normalizeKeyword("Thermopompe-Lévis")).toBe("thermopompe levis");
    const file = path.join(dir, "gestion-referencement.json");
    expect(await readTrackedKeywords(file)).toEqual([...DEFAULT_KEYWORDS]);
    expect(DEFAULT_KEYWORDS).toEqual(expect.arrayContaining(["thermopompe à vendre", "thermopompes à vendre", "thermopompe", "thermopompe montréal", "thermopompe québec", "installation thermopompe", "prix thermopompe", "subvention thermopompe", "LogisVert"]));
    await saveTrackedKeywords("thermopompe laval\nLogisVert", NOW, file);
    expect(await readTrackedKeywords(file)).toEqual(["thermopompe laval", "LogisVert"]);
    await saveTrackedKeywords("", NOW, file);
    expect(await readTrackedKeywords(file)).toEqual([...DEFAULT_KEYWORDS]);
  });

  it("périodes : fin 3 jours avant (heure du Pacifique), 28 jours et 90 jours, période précédente de même durée", () => {
    const p = gscPeriods(NOW);
    expect(p.d28).toEqual({ start: "2026-08-14", end: "2026-09-10", prevStart: "2026-07-17", prevEnd: "2026-08-13" });
    expect(p.m3).toEqual({ start: "2026-06-13", end: "2026-09-10", prevStart: "2026-03-15", prevEnd: "2026-06-12" });
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28");
  });

  it("regroupement des variantes et comparaison des pages", () => {
    const k = aggregateKeywords(["prix thermopompe"], [{ keys: ["prix thermopompe"], clicks: 1, impressions: 10, position: 5 }, { keys: ["Prix Thermopompe"], clicks: 0, impressions: 30, position: 9 }], []);
    expect(k[0].current).toMatchObject({ clicks: 1, impressions: 40, position: 8 });
    expect(k[0].previous).toBeNull();
    const m = comparePages([{ keys: ["/a"], clicks: 0, impressions: 30 }, { keys: ["/b"], clicks: 2, impressions: 5 }], [{ keys: ["/a"], clicks: 0, impressions: 10 }, { keys: ["/c"], clicks: 4, impressions: 9 }]);
    expect(m.rising.map((r) => r.page)).toEqual(["/b", "/a"]);
    expect(m.falling.map((r) => r.page)).toEqual(["/c"]);
  });
});
