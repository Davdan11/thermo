/* Sessions signées, clé générée, adresses autorisées et liens de connexion à usage unique. */
import { mkdtemp, readFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createSessionToken, peekSession, SESSION_TTL_SECONDS, verifySessionToken } from "../auth/session-token";
import { getSessionSecret, resetSecretCache } from "../auth/secret";
import { adminEmails, isAdminEmail } from "../auth/admins";
import { consumeMagicLink, createMagicLink, MAGIC_LINK_TTL_MS, peekMagicLink } from "../auth/magic-link";
import { authFile, secretFile } from "../store";

const env = process.env;
let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-auth-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, ADMIN_EMAILS: "Proprio@Exemple.ca, aide@exemple.ca", NODE_ENV: "test" };
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
});
afterEach(async () => {
  process.env = env;
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

describe("jeton de session", () => {
  const secret = Buffer.alloc(32, 7);

  it("signé puis vérifié", () => {
    const { token, payload } = createSessionToken("proprio@exemple.ca", secret);
    expect(verifySessionToken(token, secret)).toEqual(payload);
    expect(payload.exp - payload.iat).toBe(SESSION_TTL_SECONDS);
  });

  it("refusé s'il est modifié, signé avec une autre clé ou expiré", () => {
    const now = Date.now();
    const { token } = createSessionToken("proprio@exemple.ca", secret, now);
    const [v, body, sig] = token.split(".");
    const forged = JSON.parse(Buffer.from(body, "base64url").toString());
    forged.email = "pirate@exemple.ca";
    const tampered = `${v}.${Buffer.from(JSON.stringify(forged)).toString("base64url")}.${sig}`;
    expect(verifySessionToken(tampered, secret)).toBeNull();
    expect(verifySessionToken(token, Buffer.alloc(32, 8))).toBeNull();
    expect(verifySessionToken(token, secret, now + (SESSION_TTL_SECONDS + 1) * 1000)).toBeNull();
    expect(verifySessionToken("n'importe quoi", secret)).toBeNull();
    expect(verifySessionToken(undefined, secret)).toBeNull();
  });

  it("lecture optimiste (proxy) : ne vérifie pas la signature, mais bien l'expiration", () => {
    const now = Date.now();
    const { token } = createSessionToken("proprio@exemple.ca", secret, now);
    const unsigned = token.replace(/\.[^.]+$/, ".abc");
    expect(peekSession(unsigned, now)?.email).toBe("proprio@exemple.ca");
    expect(verifySessionToken(unsigned, secret, now)).toBeNull();
    expect(peekSession(token, now + (SESSION_TTL_SECONDS + 1) * 1000)).toBeNull();
  });
});

describe("clé des sessions", () => {
  it("générée au premier usage (32 octets, droits 600), puis relue", async () => {
    const k1 = await getSessionSecret();
    expect(k1.length).toBe(32);
    resetSecretCache();
    expect((await getSessionSecret()).equals(k1)).toBe(true);
    expect((await readFile(secretFile(), "utf8")).trim()).toBe(k1.toString("base64url"));
    if (process.platform !== "win32") expect((await stat(secretFile())).mode & 0o777).toBe(0o600);
  });

  it("ADMIN_SESSION_SECRET prime s'il est assez long ; ignoré s'il est trop court", async () => {
    process.env.ADMIN_SESSION_SECRET = "x".repeat(40);
    expect((await getSessionSecret()).toString()).toBe("x".repeat(40));
    process.env.ADMIN_SESSION_SECRET = "court";
    expect((await getSessionSecret()).length).toBe(32);
  });
});

describe("adresses autorisées", () => {
  it("ADMIN_EMAILS, sans égard à la casse", () => {
    expect(adminEmails()).toEqual(["proprio@exemple.ca", "aide@exemple.ca"]);
    expect(isAdminEmail("PROPRIO@exemple.ca")).toBe(true);
    expect(isAdminEmail("autre@exemple.ca")).toBe(false);
  });
  it("NOTIFICATION_EMAIL si ADMIN_EMAILS est vide", () => {
    process.env.ADMIN_EMAILS = "";
    process.env.NOTIFICATION_EMAIL = "info@exemple.ca";
    expect(adminEmails()).toEqual(["info@exemple.ca"]);
  });
});

describe("lien de connexion", () => {
  it("à usage unique ; l'afficher (GET) ne le consomme pas", async () => {
    const token = await createMagicLink("proprio@exemple.ca");
    expect(await peekMagicLink(token)).toBe("valide");
    expect(await peekMagicLink(token)).toBe("valide");
    expect(await consumeMagicLink(token)).toEqual({ email: "proprio@exemple.ca" });
    expect(await consumeMagicLink(token)).toEqual({ error: "utilise" });
    expect(await peekMagicLink(token)).toBe("utilise");
  });

  it("expire après 15 minutes", async () => {
    const t0 = new Date();
    const token = await createMagicLink("proprio@exemple.ca", t0);
    expect(await consumeMagicLink(token, new Date(t0.getTime() + MAGIC_LINK_TTL_MS + 1000))).toEqual({ error: "expire" });
    expect(MAGIC_LINK_TTL_MS).toBe(15 * 60 * 1000);
  });

  it("seule l'empreinte du jeton est conservée", async () => {
    const token = await createMagicLink("proprio@exemple.ca");
    const raw = await readFile(authFile(), "utf8");
    expect(raw).not.toContain(token);
    expect(raw).toMatch(/"hash": "[0-9a-f]{64}"/);
  });

  it("refusé si l'adresse n'est plus autorisée, ou si le jeton est mal formé", async () => {
    const token = await createMagicLink("aide@exemple.ca");
    process.env.ADMIN_EMAILS = "proprio@exemple.ca";
    expect(await consumeMagicLink(token)).toEqual({ error: "invalide" });
    expect(await consumeMagicLink("../../etc/passwd")).toEqual({ error: "invalide" });
  });
});
