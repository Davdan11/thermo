/* Signature HMAC des visuels : valide, modifiée, autre clé, expirée ; clé dérivée du secret des sessions. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getSessionSecret, resetSecretCache } from "@/lib/gestion/auth/secret";
import { expiryFor, parseSlot, signedVisualPath, signVisual, verifyVisual, visualKey, type VisualParams } from "../signing";

const env = process.env;
let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-presence-sign-"));
  process.env = { ...env, GESTION_DATA_DIR: dir };
  delete process.env.PRESENCE_SIGNING_SECRET;
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

const NOW = Date.parse("2026-09-13T12:00:00Z");
const base: VisualParams = { id: "p-20260914-modele", slot: 0, format: "carrousel", rev: 1, exp: expiryFor(NOW) };

describe("signature des visuels", () => {
  it("valide, puis refusée si un paramètre change ou si la clé diffère", async () => {
    process.env.PRESENCE_SIGNING_SECRET = "s".repeat(40);
    const key = await visualKey();
    const sig = signVisual(base, key);
    expect(verifyVisual(base, sig, key, NOW)).toBe("ok");
    expect(verifyVisual({ ...base, slot: 1 }, sig, key, NOW)).toBe("invalide");
    expect(verifyVisual({ ...base, rev: 2 }, sig, key, NOW)).toBe("invalide");
    expect(verifyVisual({ ...base, id: "p-20260915-froid" }, sig, key, NOW)).toBe("invalide");
    expect(verifyVisual({ ...base, exp: base.exp + 86400 }, sig, key, NOW)).toBe("invalide");
    expect(verifyVisual(base, sig, Buffer.alloc(32, 1), NOW)).toBe("invalide");
    expect(verifyVisual(base, "n'importe quoi", key, NOW)).toBe("invalide");
    expect(verifyVisual(base, null, key, NOW)).toBe("invalide");
  });

  it("expirée après la date d’expiration (30 jours par défaut, arrondie au jour)", async () => {
    process.env.PRESENCE_SIGNING_SECRET = "s".repeat(40);
    const key = await visualKey();
    const sig = signVisual(base, key);
    expect(base.exp * 1000 - NOW).toBeGreaterThanOrEqual(30 * 86_400_000);
    expect(verifyVisual(base, sig, key, base.exp * 1000 + 1000)).toBe("expire");
  });

  it("sans PRESENCE_SIGNING_SECRET : clé dérivée du secret des sessions, stable, différente de celui-ci", async () => {
    const k1 = await visualKey();
    const k2 = await visualKey();
    expect(k1.equals(k2)).toBe(true);
    expect(k1.equals(await getSessionSecret())).toBe(false);
    process.env.PRESENCE_SIGNING_SECRET = "t".repeat(40);
    expect((await visualKey()).equals(k1)).toBe(false);
  });

  it("adresse complète, relue et vérifiée", async () => {
    process.env.PRESENCE_SIGNING_SECRET = "s".repeat(40);
    const p = await signedVisualPath({ id: "p-20260914-modele", rev: 3 }, "story", { nowMs: NOW });
    const u = new URL(p, "https://exemple.ca");
    expect(u.pathname).toBe("/api/presence/visuel/p-20260914-modele/story");
    const params: VisualParams = { id: "p-20260914-modele", slot: parseSlot("story")!, format: u.searchParams.get("f") as "story", rev: Number(u.searchParams.get("r")), exp: Number(u.searchParams.get("e")) };
    expect(params.format).toBe("story");
    expect(verifyVisual(params, u.searchParams.get("s"), await visualKey(), NOW)).toBe("ok");
    expect(parseSlot("3")).toBe(3);
    expect(parseSlot("../x")).toBeNull();
  });
});
