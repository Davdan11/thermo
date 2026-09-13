/* Publication et passage planifié : aucun appel réseau hors production ou interrupteur éteint ; idempotence ;
   nouveaux essais espacés ; échec lisible ; verrou ; retard de plus de 36 h. fetch est toujours simulé. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { resetSecretCache } from "@/lib/gestion/auth/secret";
import { newPost } from "../planner";
import { publishPost, tick } from "../publisher";
import { mutatePresence, readPresence } from "../store";
import { buildModele } from "../templates";
import { isShowcaseModel } from "../catalog";
import { emptyData, fixtureCatalog } from "./fixtures";

const saved = process.env;
let dir: string;
const TOKEN = "EAAjetonfictifpourlestests1234567890";
const PROD = { NODE_ENV: "production", META_PAGE_ID: "111", META_PAGE_TOKEN: TOKEN, META_IG_USER_ID: "222" };
const NOW = new Date("2026-09-14T15:31:00Z");

function okGraph() {
  let n = 0;
  return vi.fn(async (url: string, init: RequestInit) => {
    const u = new URL(url);
    const p = u.pathname.replace(/^\/v24\.0\//, "");
    const body = new URLSearchParams(String(init.body ?? ""));
    let json: unknown = { id: `x${++n}` };
    if (p === "111/feed") json = { id: "111_42" };
    if (init.method === "GET") json = { status_code: "FINISHED" };
    if (p === "222/media_publish") json = { id: body.get("creation_id") === "x5" ? "ig_1" : `ig_${n}` };
    return new Response(JSON.stringify(json), { status: 200 });
  });
}

async function seed(opts: { autoPublish: boolean; status?: "planifiee" | "a_approuver"; scheduledAt?: string } = { autoPublish: true }) {
  const cat = fixtureCatalog();
  const m = cat.models.filter(isShowcaseModel)[0];
  const data = emptyData();
  const post = newPost("modele", "2026-09-14", buildModele(m, 0, NOW.toISOString()), data, new Date("2026-09-13T12:00:00Z"), 0);
  post.status = opts.status ?? "planifiee";
  if (opts.scheduledAt) post.scheduledAt = opts.scheduledAt;
  await mutatePresence((d) => {
    d.settings.autoPublish = opts.autoPublish;
    d.posts.push(post);
    return { result: null, changed: true };
  });
  return post.id;
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-presence-pub-"));
  process.env = { ...saved, GESTION_DATA_DIR: dir, PRESENCE_SIGNING_SECRET: "s".repeat(40), NEXT_PUBLIC_SITE_URL: "https://exemple.ca" };
  delete process.env.PRESENCE_FILE;
  resetSecretCache();
});
afterEach(async () => {
  process.env = saved;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

describe("aucun appel réseau sans les trois conditions", () => {
  it("serveur de test (NODE_ENV≠production), même avec jetons et interrupteur : mode essai", async () => {
    const id = await seed({ autoPublish: true });
    const fetchSpy = vi.fn();
    const r = await publishPost(id, { trigger: "manuel", fetch: fetchSpy, now: () => NOW, env: { ...PROD, NODE_ENV: "test" } });
    expect(r.kind).toBe("essai");
    expect(fetchSpy).not.toHaveBeenCalled();
    const p = (await readPresence()).posts[0];
    expect(p.status).toBe("planifiee");
    expect(p.publish.dryRun?.requests.length).toBeGreaterThan(3);
    expect(JSON.stringify(p.publish.dryRun)).not.toContain(TOKEN);
  });

  it("production, interrupteur éteint : mode essai, aucun appel", async () => {
    const id = await seed({ autoPublish: false });
    const fetchSpy = vi.fn();
    const r = await publishPost(id, { trigger: "manuel", fetch: fetchSpy, now: () => NOW, env: PROD });
    expect(r.kind).toBe("essai");
    if (r.kind === "essai") expect(r.reasons.join(" ")).toMatch(/Interrupteur/);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("production, interrupteur activé, jetons absents : mode essai, aucun appel", async () => {
    const id = await seed({ autoPublish: true });
    const fetchSpy = vi.fn();
    const r = await publishPost(id, { trigger: "manuel", fetch: fetchSpy, now: () => NOW, env: { NODE_ENV: "production" } });
    expect(r.kind).toBe("essai");
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("le passage planifié en mode essai ne simule qu’une fois par version", async () => {
    await seed({ autoPublish: false });
    const fetchSpy = vi.fn();
    const a = await tick({ fetch: fetchSpy, now: () => NOW, env: PROD });
    const b = await tick({ fetch: fetchSpy, now: () => NOW, env: PROD });
    expect(a.results.map((r) => r.outcome.kind)).toEqual(["essai"]);
    expect(b.results).toEqual([]);
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});

describe("publication réelle (fetch simulé)", () => {
  it("publie une seule fois : identifiants enregistrés, un second passage ne renvoie rien", async () => {
    const id = await seed({ autoPublish: true });
    const fetchImpl = okGraph();
    const r = await publishPost(id, { trigger: "tick", fetch: fetchImpl, now: () => NOW, env: PROD, sleep: async () => undefined, pollIntervalMs: 1 });
    expect(r.kind).toBe("publiee");
    const p = (await readPresence()).posts[0];
    expect(p.status).toBe("publiee");
    expect(p.publish.facebook?.postId).toBe("111_42");
    expect(p.publish.instagram?.mediaId).toBeTruthy();
    expect(p.publish.lockId).toBeUndefined();
    const calls = fetchImpl.mock.calls.length;
    const again = await publishPost(id, { trigger: "manuel", fetch: fetchImpl, now: () => NOW, env: PROD });
    expect(again.kind).toBe("ignoree");
    expect(fetchImpl.mock.calls.length).toBe(calls);
    // Les images envoyées à Meta sont des adresses publiques signées.
    const firstUrl = new URLSearchParams(String(fetchImpl.mock.calls[0][1].body)).get("url")!;
    expect(firstUrl).toMatch(/^https:\/\/exemple\.ca\/api\/presence\/visuel\/p-20260914-modele\/0\?f=carrousel&r=1&e=\d+&s=[\w-]{43}$/);
  });

  it("erreur permanente (jeton) : « échec » avec un message clair, sans jeton", async () => {
    const id = await seed({ autoPublish: true });
    const fetchImpl = vi.fn(async () => new Response(JSON.stringify({ error: { code: 190, message: `bad ${TOKEN}` } }), { status: 400 }));
    const r = await publishPost(id, { trigger: "tick", fetch: fetchImpl, now: () => NOW, env: PROD });
    expect(r.kind).toBe("echec");
    const p = (await readPresence()).posts[0];
    expect(p.status).toBe("echec");
    expect(p.publish.lastError).toMatch(/Jeton Meta expiré/);
    expect(JSON.stringify(await readPresence())).not.toContain(TOKEN);
  });

  it("erreur temporaire : nouvel essai 5 min plus tard, pas avant ; reprise sans doublon", async () => {
    const id = await seed({ autoPublish: true });
    let feedCalls = 0;
    let fail = true;
    const fetchImpl = vi.fn(async (url: string, init: RequestInit) => {
      const p = new URL(url).pathname.replace(/^\/v24\.0\//, "");
      if (p === "111/feed") {
        feedCalls++;
        if (fail) return new Response(JSON.stringify({ error: { code: 2, message: "Service temporarily unavailable" } }), { status: 400 });
        return new Response(JSON.stringify({ id: "111_43" }), { status: 200 });
      }
      if (init.method === "GET") return new Response(JSON.stringify({ status_code: "FINISHED" }), { status: 200 });
      return new Response(JSON.stringify({ id: `id${Math.random().toString(36).slice(2, 8)}` }), { status: 200 });
    });
    const deps = { fetch: fetchImpl, env: PROD, sleep: async () => undefined, retryDelays: [], pollIntervalMs: 1 };
    const r1 = await publishPost(id, { ...deps, trigger: "tick", now: () => NOW });
    expect(r1.kind).toBe("reessai");
    if (r1.kind === "reessai") expect(Date.parse(r1.nextAttemptAt) - NOW.getTime()).toBe(5 * 60_000);
    const photosBefore = (await readPresence()).posts[0].publish.facebook?.photoIds;
    expect(photosBefore).toHaveLength(5);

    const early = await tick({ ...deps, now: () => new Date(NOW.getTime() + 60_000) });
    expect(early.results).toEqual([]);

    fail = false;
    const later = await tick({ ...deps, now: () => new Date(NOW.getTime() + 6 * 60_000) });
    expect(later.results[0].outcome.kind).toBe("publiee");
    const p = (await readPresence()).posts[0];
    expect(p.publish.facebook?.photoIds).toEqual(photosBefore); // photos non renvoyées
    expect(feedCalls).toBe(2);
    expect(p.publish.attempts).toBe(2);
  });

  it("verrou : un passage en cours bloque le second, sans appel", async () => {
    const id = await seed({ autoPublish: true });
    await mutatePresence((d) => {
      d.posts[0].publish.lockId = "autre";
      d.posts[0].publish.lockUntil = new Date(NOW.getTime() + 60_000).toISOString();
      return { result: null, changed: true };
    });
    const fetchSpy = vi.fn();
    const r = await publishPost(id, { trigger: "manuel", fetch: fetchSpy, now: () => NOW, env: PROD });
    expect(r.kind).toBe("ignoree");
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("jamais une publication non approuvée, ni une publication en retard de plus de 36 h", async () => {
    await seed({ autoPublish: true, status: "a_approuver" });
    const fetchSpy = vi.fn();
    expect((await tick({ fetch: fetchSpy, now: () => NOW, env: PROD })).results).toEqual([]);
    await mutatePresence((d) => {
      d.posts[0].status = "planifiee";
      d.posts[0].scheduledAt = "2026-09-12T15:30:00.000Z";
      return { result: null, changed: true };
    });
    const r = await tick({ fetch: fetchSpy, now: () => NOW, env: PROD });
    expect(r.results).toEqual([]);
    expect(r.late).toEqual(["p-20260914-modele"]);
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
