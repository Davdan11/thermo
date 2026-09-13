/* Code de connexion par texto : un vendeur le reçoit à SON cellulaire, jamais à celui du propriétaire ; le propriétaire
   le reçoit toujours par ALERT_SMS_TO. Envois simulés (fonction d'envoi fournie par le test). */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { confirmEnrollment, finalizeEnrollment, requestSmsCode, startEnrollment, twoFactorStatus, type SmsTarget } from "../deux-etapes";
import { totp } from "../totp";
import { mutateTeam } from "../../equipe/store";
import type { Member } from "../../equipe/types";

const env = process.env;
let dir: string;
const OWNER = "proprio@exemple.ca";
const SELLER = "vendeur@exemple.ca";
const NOPHONE = "adjointe@exemple.ca";
const T0 = new Date("2026-09-13T15:00:00Z");

async function enable(email: string): Promise<void> {
  const { secret } = await startEnrollment(email, T0);
  const r = await confirmEnrollment(email, totp(secret, T0.getTime()), T0);
  if (!r.ok) throw new Error(r.error);
  expect((await finalizeEnrollment(email, T0)).ok).toBe(true);
}

async function addMember(email: string, role: string, phone?: string): Promise<void> {
  await mutateTeam((d) => {
    d.members.push({ id: `u_${role}${d.members.length}`, email, name: role, role, status: "actif", phone, available: true, territory: { cities: [], postal: [] } } as unknown as Member);
    return { result: null, changed: true };
  });
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-2fa-membre-"));
  process.env = {
    ...env,
    GESTION_DATA_DIR: dir,
    ADMIN_EMAILS: OWNER,
    NODE_ENV: "test",
    ALERT_SMS_TO: "514 555-0134",
    TWILIO_ACCOUNT_SID: "AC-factice",
    TWILIO_AUTH_TOKEN: "jeton-factice",
    TWILIO_PHONE_NUMBER: "+15145550100",
  };
  for (const k of ["GESTION_2FA_DESACTIVEE", "TEXTOS_ENVOIS_DEV"]) delete process.env[k];
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("code par texto : au bon cellulaire", () => {
  it("vendeur : à son numéro ; propriétaire : à ALERT_SMS_TO", async () => {
    await addMember(SELLER, "vendeur", "+15145550177");
    await enable(SELLER);
    await enable(OWNER);
    const to: string[] = [];
    const send = vi.fn(async (_body: string, t: SmsTarget) => (to.push(t.e164), "simule"));

    expect(await requestSmsCode(SELLER, T0, send)).toMatchObject({ ok: true, masked: "••• ••• ••77" });
    expect((await twoFactorStatus(SELLER)).smsMasked).toBe("••• ••• ••77");
    expect(await requestSmsCode(OWNER, T0, send)).toMatchObject({ ok: true, masked: "••• ••• ••34" });
    expect(to).toEqual(["+15145550177", "+15145550134"]);
  });

  it("membre sans cellulaire : aucun code, jamais de repli sur le propriétaire", async () => {
    await addMember(NOPHONE, "adjoint");
    await enable(NOPHONE);
    const send = vi.fn(async () => "simule");
    expect(await requestSmsCode(NOPHONE, T0, send)).toMatchObject({ ok: false });
    expect(send).not.toHaveBeenCalled();
    expect((await twoFactorStatus(NOPHONE)).smsAvailable).toBe(false);
  });
});
