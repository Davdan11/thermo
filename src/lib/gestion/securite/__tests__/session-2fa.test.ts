/* Chantier S — couche d'accès : une session sans 2e étape est refusée dès que la 2e étape est activée ;
   « Déconnecter partout » ; session fermée ; appareil de confiance. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const jar = vi.hoisted(() => ({ values: new Map<string, string>(), set: vi.fn() }));
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => (jar.values.has(name) ? { name, value: jar.values.get(name)! } : undefined),
    set: (name: string, value: string, opts?: unknown) => {
      jar.set(name, value, opts);
      if (value) jar.values.set(name, value);
      else jar.values.delete(name);
    },
  }),
  headers: async () => new Headers({ host: "localhost:3001", "x-forwarded-for": "198.51.100.9", "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Safari/604.1" }),
}));

import { getAdminSession, requireAdmin, startAdminSession } from "@/lib/gestion/auth/dal";
import { getSessionSecret, resetSecretCache } from "@/lib/gestion/auth/secret";
import { createSessionToken, signSessionPayload, verifySessionToken } from "@/lib/gestion/auth/session-token";
import { confirmEnrollment, finalizeEnrollment, hasRecentSecondFactor, startEnrollment } from "../deux-etapes";
import { markSecondFactorDone } from "../session";
import { checkTrustedDevice, createTrustedDevice, DEVICE_COOKIE, listActiveSessions, revokeAllSessions, revokeSession, saveTrustDays } from "../sessions";
import { totp } from "../totp";

const env = process.env;
let dir: string;
const EMAIL = "proprio@exemple.ca";
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");

async function enable2fa() {
  const now = new Date();
  const { secret } = await startEnrollment(EMAIL, now);
  const r = await confirmEnrollment(EMAIL, totp(secret, now.getTime()), now);
  expect(r.ok).toBe(true);
  await finalizeEnrollment(EMAIL, now);
}

async function login(at = Date.now()) {
  const { token, payload } = createSessionToken(EMAIL, await getSessionSecret(), at);
  jar.values.set("tav_gestion", token);
  return payload;
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-s2fa-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, ADMIN_EMAILS: EMAIL, NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  delete process.env.GESTION_2FA_DESACTIVEE;
  resetSecretCache();
  jar.values.clear();
  jar.set.mockClear();
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

describe("2e étape exigée une fois activée", () => {
  it("avant l'activation : même comportement qu'avant (session valide acceptée)", async () => {
    await login();
    expect(await getAdminSession()).toEqual({ email: EMAIL });
    expect(await requireAdmin()).toEqual({ email: EMAIL });
  });

  it("après l'activation : session sans 2e étape refusée (null pour les routes, redirection vers la 2e étape pour les pages)", async () => {
    await login(Date.now() - 60_000);
    await enable2fa();
    expect(await getAdminSession()).toBeNull();
    const err = await requireAdmin().then(() => null, (e: unknown) => e);
    expect(digest(err)).toContain("/gestion/connexion/deux-etapes");
  });

  it("après un bon code : la session re-signée est acceptée, même identifiant, même expiration", async () => {
    const p = await login();
    await enable2fa();
    expect(await markSecondFactorDone("totp")).toBe(true);
    const token = jar.values.get("tav_gestion")!;
    const again = verifySessionToken(token, await getSessionSecret())!;
    expect(again).toMatchObject({ sid: p.sid, exp: p.exp, mm: "totp" });
    expect(typeof again.mfa).toBe("number");
    expect(await getAdminSession()).toEqual({ email: EMAIL });
    expect(hasRecentSecondFactor(again)).toBe(true);
    expect(hasRecentSecondFactor(again, Date.now() + 11 * 60_000)).toBe(false);
    expect(hasRecentSecondFactor({ ...again, mm: "appareil" })).toBe(false);
  });

  it("une marque « 2e étape » falsifiée (autre clé) ne passe pas", async () => {
    const p = await login();
    await enable2fa();
    jar.values.set("tav_gestion", signSessionPayload({ ...p, mfa: Math.floor(Date.now() / 1000), mm: "totp" }, Buffer.alloc(32, 9)));
    expect(await getAdminSession()).toBeNull();
  });
});

describe("sessions", () => {
  it("inscrite à l'ouverture ; fermée à distance → refusée", async () => {
    await startAdminSession(EMAIL);
    const token = jar.values.get("tav_gestion")!;
    const p = verifySessionToken(token, await getSessionSecret())!;
    const list = await listActiveSessions();
    expect(list).toHaveLength(1);
    expect(list[0]).toMatchObject({ sid: p.sid, device: "iPhone · Safari", ip: "198.51.100.9" });
    expect(await getAdminSession()).toEqual({ email: EMAIL });
    await revokeSession(p.sid);
    expect(await getAdminSession()).toBeNull();
    expect(await listActiveSessions()).toHaveLength(0);
  });

  it("« Déconnecter partout » refuse tous les jetons émis avant, même inconnus du registre", async () => {
    await login(Date.now() - 5_000);
    expect(await getAdminSession()).not.toBeNull();
    await revokeAllSessions();
    expect(await getAdminSession()).toBeNull();
  });
});

describe("appareil de confiance", () => {
  it("dispense du code à la connexion suivante ; retiré par « Déconnecter partout » ; durée réglable (0 = jamais)", async () => {
    await enable2fa();
    const dev = await createTrustedDevice(EMAIL, { ua: "Windows Chrome/120" });
    expect(dev?.maxAge).toBe(30 * 86_400);
    jar.values.set(DEVICE_COOKIE, dev!.token);
    await startAdminSession(EMAIL);
    expect(await getAdminSession()).toEqual({ email: EMAIL });
    const p = verifySessionToken(jar.values.get("tav_gestion")!, await getSessionSecret())!;
    expect(p.mm).toBe("appareil");
    // L'appareil ne suffit pas pour un accès sensible.
    expect(hasRecentSecondFactor(p)).toBe(false);

    expect(await checkTrustedDevice(dev!.token, "autre@exemple.ca")).toBe(false);
    await revokeAllSessions();
    expect(await checkTrustedDevice(dev!.token, EMAIL)).toBe(false);

    await saveTrustDays(0, EMAIL);
    expect(await createTrustedDevice(EMAIL, {})).toBeNull();
  });
});
