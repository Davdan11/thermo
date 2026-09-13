/* /gestion/statistiques et l'État du site : session obligatoire (page, proxy) ; fichiers de
   démonstration ignorés en production ; lecture de l'état de la surveillance. */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
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

import StatistiquesPage from "@/app/gestion/(prive)/statistiques/page";
import { proxy } from "@/proxy";
import { createSessionToken } from "../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../auth/secret";
import { buildSiteHealth } from "../surveillance";

const env = process.env;
let dir: string;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const render = () => StatistiquesPage({ searchParams: Promise.resolve({ periode: "7" }) });

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-stats-acces-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), SURVEILLANCE_DIR: dir, ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  jar.value = undefined;
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

describe("accès à /gestion/statistiques", () => {
  it("sans session, avec un cookie falsifié ou d'une adresse retirée : renvoi vers la connexion", async () => {
    expect(digest(await render().then(() => null, (e: unknown) => e))).toContain("/gestion/connexion");
    jar.value = createSessionToken("proprio@exemple.ca", Buffer.alloc(32, 7)).token;
    expect(digest(await render().then(() => null, (e: unknown) => e))).toContain("/gestion/connexion");
    jar.value = createSessionToken("ancien@exemple.ca", await getSessionSecret()).token;
    expect(digest(await render().then(() => null, (e: unknown) => e))).toContain("/gestion/connexion");
  });

  it("avec une session valide : la page se construit", async () => {
    await writeFile(path.join(dir, "surveillance-etat.json"), "{}");
    jar.value = createSessionToken("proprio@exemple.ca", await getSessionSecret()).token;
    const el = await render();
    expect(el).toBeTruthy();
  });

  it("le proxy renvoie aussi vers la connexion", () => {
    const res = proxy(new NextRequest("http://localhost:3001/gestion/statistiques?periode=90"));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe("http://localhost:3001/gestion/connexion");
  });
});

describe("État du site (lecture)", () => {
  const now = new Date("2026-09-13T12:00:00Z");
  const state = (over: Record<string, unknown> = {}) =>
    JSON.stringify({
      dernier: {
        at: new Date(now.getTime() - 3 * 60_000).toISOString(),
        ok: true,
        checks: [
          { id: "public-accueil", label: "Accueil (site public)", groupe: "public", niveau: "critique", ok: true, detail: "200", ms: 210 },
          { id: "robots-nuit", label: "Robot de nuit", groupe: "robots", niveau: "avertissement", ok: false, detail: "Blogue : génération en échec" },
        ],
        infos: { sslExpire: "2026-12-09T13:39:35Z", sslJours: 87, disqueLibrePct: 63.8, pm2Statut: "online", pm2Redemarrages: 35, version: "20260912-220126" },
      },
      ...over,
    });
  const log = [
    { t: new Date(now.getTime() - 26 * 3_600_000).toISOString(), ok: true },
    { t: new Date(now.getTime() - 2 * 3_600_000).toISOString(), ok: false, ko: ["public-accueil"], ev: [{ type: "panne", id: "public-accueil", label: "Accueil (site public)", niveau: "critique" }] },
    { t: new Date(now.getTime() - 110 * 60_000).toISOString(), ok: true, ev: [{ type: "retabli", id: "public-accueil", label: "Accueil (site public)", niveau: "critique" }] },
    { t: new Date(now.getTime() - 5 * 60_000).toISOString(), ok: true },
  ]
    .map((l) => JSON.stringify(l))
    .join("\n");

  it("dernier passage, avertissements, incidents (plus récent d'abord), disponibilité", () => {
    const h = buildSiteHealth(state(), log, { now, production: true });
    expect(h).toMatchObject({ installed: true, ok: true, stale: false, failing: 0, warnings: 1, lastAgo: "il y a 3 min" });
    expect(h.infos).toMatchObject({ sslDays: 87, disk: 63.8, pm2: "online", restarts: 35, version: "20260912-220126" });
    expect(h.incidents.map((i) => i.type)).toEqual(["retabli", "panne"]);
    expect(h.uptime24h).toBeCloseTo(2 / 3, 5);
    expect(h.uptime14d).toBeCloseTo(3 / 4, 5);
    expect(h.strip).toHaveLength(24);
    expect(h.strip.filter((c) => c.state === "ko")).toHaveLength(1);
  });

  it("surveillance muette (> 15 min), non installée, démonstration ignorée en production", () => {
    const old = JSON.parse(state());
    old.dernier.at = new Date(now.getTime() - 40 * 60_000).toISOString();
    expect(buildSiteHealth(JSON.stringify(old), null, { now, production: true }).stale).toBe(true);
    expect(buildSiteHealth(null, null, { now }).installed).toBe(false);
    expect(buildSiteHealth(state({ demo: true }), null, { now, production: true }).installed).toBe(false);
    expect(buildSiteHealth(state({ demo: true }), null, { now, production: false })).toMatchObject({ installed: true, demo: true });
  });
});
