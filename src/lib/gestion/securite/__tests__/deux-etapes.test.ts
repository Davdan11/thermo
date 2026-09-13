/* Chantier S — 2e étape : activation guidée, codes de secours à usage unique, limite de tentatives,
   code par texto (simulé), récupération (désactivation serveur, interrupteur d'urgence). */
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  cancelEnrollment,
  confirmEnrollment,
  consumeBackupCode,
  disableTwoFactor,
  finalizeEnrollment,
  generateBackupCodes,
  isTwoFactorEnabled,
  maskedOwnerPhone,
  MAX_FAILURES,
  regenerateBackupCodes,
  requestSmsCode,
  startEnrollment,
  twoFactorStatus,
  verifySecondFactor,
} from "../deux-etapes";
import { securityFile } from "../store";
import { totp } from "../totp";

const env = process.env;
let dir: string;
const EMAIL = "proprio@exemple.ca";
const T0 = new Date("2026-09-13T15:00:00Z");
const at = (ms: number) => new Date(T0.getTime() + ms);

/** Active la 2e étape comme le ferait le propriétaire ; renvoie la clé et les codes de secours. */
async function enable(now = T0): Promise<{ secret: string; codes: string[] }> {
  const { secret } = await startEnrollment(EMAIL, now);
  const r = await confirmEnrollment(EMAIL, totp(secret, now.getTime()), now);
  if (!r.ok) throw new Error(r.error);
  expect((await finalizeEnrollment(EMAIL, now)).ok).toBe(true);
  return { secret, codes: r.codes };
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-2fa-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, ADMIN_EMAILS: EMAIL, NODE_ENV: "test" };
  for (const k of ["ALERT_SMS_TO", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "GESTION_2FA_DESACTIVEE", "TEXTOS_ENVOIS_DEV"]) delete process.env[k];
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("activation guidée", () => {
  it("rien n'est exigé avant « Activer » ; un mauvais code ne l'active pas ; abandon sans effet", async () => {
    const { secret } = await startEnrollment(EMAIL, T0);
    expect(await isTwoFactorEnabled(EMAIL)).toBe(false);
    expect(await confirmEnrollment(EMAIL, "000000", T0)).toMatchObject({ ok: false });
    const ok = await confirmEnrollment(EMAIL, totp(secret, T0.getTime()), T0);
    expect(ok.ok).toBe(true);
    // Codes montrés, mais la 2e étape n'est pas encore obligatoire.
    expect(await isTwoFactorEnabled(EMAIL)).toBe(false);
    await cancelEnrollment(EMAIL);
    expect(await finalizeEnrollment(EMAIL, T0)).toMatchObject({ ok: false });
    expect(await isTwoFactorEnabled(EMAIL)).toBe(false);
  });

  it("l'activation expire après 30 minutes", async () => {
    const { secret } = await startEnrollment(EMAIL, T0);
    const late = at(31 * 60_000);
    expect(await confirmEnrollment(EMAIL, totp(secret, late.getTime()), late)).toMatchObject({ ok: false, error: expect.stringContaining("expiré") });
  });

  it("activée : 10 codes de secours, seule leur empreinte est gardée", async () => {
    const { codes } = await enable();
    expect(codes).toHaveLength(10);
    for (const c of codes) expect(c).toMatch(/^[2-9A-HJ-NP-Z]{4}-[2-9A-HJ-NP-Z]{4}$/);
    const raw = await readFile(securityFile(), "utf8");
    for (const c of codes) {
      expect(raw).not.toContain(c);
      expect(raw).not.toContain(c.replace("-", ""));
    }
    const st = await twoFactorStatus(EMAIL);
    expect(st).toMatchObject({ enabled: true, backupRemaining: 10, smsAvailable: false });
  });
});

describe("codes de secours", () => {
  it("à usage unique (fonction pure)", () => {
    const { plain, record } = generateBackupCodes(T0);
    expect(consumeBackupCode(record, plain[3].toLowerCase().replace("-", " "))).toBe(true);
    expect(consumeBackupCode(record, plain[3])).toBe(false);
    expect(consumeBackupCode(record, "AAAA-AAAA")).toBe(false);
    expect(record.codes.filter((c) => c.usedAt)).toHaveLength(1);
  });

  it("une connexion par code de secours, puis le même code est refusé ; régénérer invalide les anciens", async () => {
    const { codes } = await enable();
    expect(await verifySecondFactor(EMAIL, "secours", codes[0], at(1000))).toMatchObject({ ok: true, method: "secours", backupLeft: 9 });
    expect(await verifySecondFactor(EMAIL, "secours", codes[0], at(2000))).toMatchObject({ ok: false });
    const fresh = await regenerateBackupCodes(EMAIL, at(3000));
    expect(fresh).toHaveLength(10);
    expect(await verifySecondFactor(EMAIL, "secours", codes[1], at(4000))).toMatchObject({ ok: false });
    expect(await verifySecondFactor(EMAIL, "secours", fresh![0], at(5000))).toMatchObject({ ok: true });
  });
});

describe("code de l'application", () => {
  it("accepté une fois par période (rejeu refusé)", async () => {
    const { secret } = await enable();
    const t = at(90_000);
    expect(await verifySecondFactor(EMAIL, "totp", totp(secret, t.getTime()), t)).toMatchObject({ ok: true, method: "totp" });
    expect(await verifySecondFactor(EMAIL, "totp", totp(secret, t.getTime()), t)).toMatchObject({ ok: false });
  });
});

describe("limite de tentatives", () => {
  it(`${MAX_FAILURES} échecs en 15 minutes bloquent même un bon code ; débloqué ensuite`, async () => {
    const { secret, codes } = await enable();
    for (let i = 0; i < MAX_FAILURES; i++) {
      const r = await verifySecondFactor(EMAIL, "totp", "000000", at(60_000 + i * 1000));
      expect(r.ok).toBe(false);
    }
    const t = at(70_000);
    const blocked = await verifySecondFactor(EMAIL, "totp", totp(secret, t.getTime()), t);
    expect(blocked).toMatchObject({ ok: false, locked: true });
    expect(await verifySecondFactor(EMAIL, "secours", codes[0], t)).toMatchObject({ ok: false, locked: true });
    // Le blocage survit à un redémarrage : il est dans le fichier.
    expect(JSON.parse(await readFile(securityFile(), "utf8")).users[EMAIL].failures).toHaveLength(MAX_FAILURES);
    const later = at(60_000 + 16 * 60_000);
    expect(await verifySecondFactor(EMAIL, "totp", totp(secret, later.getTime()), later)).toMatchObject({ ok: true });
  });
});

describe("code par texto (secours)", () => {
  const configure = () => {
    process.env.ALERT_SMS_TO = "514 555-0134";
    process.env.TWILIO_ACCOUNT_SID = "AC-factice";
    process.env.TWILIO_AUTH_TOKEN = "jeton-factice";
    process.env.TWILIO_PHONE_NUMBER = "+15145550100";
  };

  it("indisponible sans ALERT_SMS_TO", async () => {
    await enable();
    const send = vi.fn();
    expect(await requestSmsCode(EMAIL, at(1000), send)).toMatchObject({ ok: false });
    expect(send).not.toHaveBeenCalled();
  });

  it("numéro jamais affiché en entier ; code valable une fois, 10 minutes ; 3 envois par heure", async () => {
    configure();
    await enable();
    expect(maskedOwnerPhone()).toBe("••• ••• ••34");
    const bodies: string[] = [];
    const send = vi.fn(async (b: string) => (bodies.push(b), "simule"));
    const r = await requestSmsCode(EMAIL, at(1000), send);
    expect(r).toEqual({ ok: true, masked: "••• ••• ••34", simulated: true });
    const code = /(\d{6})/.exec(bodies[0])![1];
    expect(await readFile(securityFile(), "utf8")).not.toContain(code);
    expect(await verifySecondFactor(EMAIL, "texto", code, at(2000))).toMatchObject({ ok: true, method: "texto" });
    expect(await verifySecondFactor(EMAIL, "texto", code, at(3000))).toMatchObject({ ok: false });

    await requestSmsCode(EMAIL, at(4000), send);
    const code2 = /(\d{6})/.exec(bodies[1])![1];
    expect(await verifySecondFactor(EMAIL, "texto", code2, at(4000 + 11 * 60_000))).toMatchObject({ ok: false });

    expect(await requestSmsCode(EMAIL, at(5000), send)).toMatchObject({ ok: true });
    expect(await requestSmsCode(EMAIL, at(6000), send)).toMatchObject({ ok: false, error: expect.stringContaining("Trois") });
  });
});

describe("récupération", () => {
  it("désactivation depuis le serveur : plus rien n'est exigé", async () => {
    await enable();
    expect(await isTwoFactorEnabled(EMAIL)).toBe(true);
    expect(await disableTwoFactor(EMAIL)).toBe(true);
    expect(await isTwoFactorEnabled(EMAIL)).toBe(false);
    expect(await disableTwoFactor(EMAIL)).toBe(false);
  });

  it("interrupteur d'urgence GESTION_2FA_DESACTIVEE=1 : 2e étape suspendue sans rien effacer", async () => {
    await enable();
    process.env.GESTION_2FA_DESACTIVEE = "1";
    expect(await isTwoFactorEnabled(EMAIL)).toBe(false);
    expect((await twoFactorStatus(EMAIL)).suspended).toBe(true);
    delete process.env.GESTION_2FA_DESACTIVEE;
    expect(await isTwoFactorEnabled(EMAIL)).toBe(true);
  });
});
