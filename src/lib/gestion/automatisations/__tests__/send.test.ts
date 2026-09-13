/* Garde-fous des envois : AUCUN envoi à un désabonné (texto ARRÊT/STOP, désabonnement des suivis, désabonnement des
   relances et avis), adresse postale exigée pour les courriels aux clients, et rien de réel hors production. */
import { rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async () => true) }));
vi.mock("@/lib/crm/email", () => mail);

import { emailHash } from "@/lib/relances/core";
import { createConversation, mutateTextos, readTextos } from "@/lib/textos/store";
import { sendClientMail, sendClientSms, sendOwnerSms } from "../send";
import { suppressionHash } from "../store";
import { tempDir, testEnv } from "../../commissions/__tests__/fixtures";

const M = { subject: "Sujet", html: "<p>x</p>", text: "x" };
const TWILIO = { TWILIO_ACCOUNT_SID: "ACtest", TWILIO_AUTH_TOKEN: "jeton-de-test", TWILIO_PHONE_NUMBER: "+15145550100" };

describe("envois aux clients", () => {
  const env = process.env;
  let dir: string;
  let fetchMock: ReturnType<typeof vi.fn>;
  beforeEach(async () => {
    dir = await tempDir();
    // Envois « réels » permis (TEXTOS_ENVOIS_DEV=1) : seul fetch, simulé, verrait partir un texto.
    process.env = testEnv(dir, { ...TWILIO, TEXTOS_ENVOIS_DEV: "1" });
    vi.clearAllMocks();
    fetchMock = vi.fn(async () => new Response(JSON.stringify({ sid: "SMtest", status: "queued" }), { status: 201 }));
    vi.stubGlobal("fetch", fetchMock);
  });
  afterEach(async () => {
    process.env = env;
    vi.unstubAllGlobals();
    await rm(dir, { recursive: true, force: true });
  });

  it("texto : numéro désabonné par ARRÊT/STOP → rien n’est envoyé", async () => {
    await mutateTextos((d) => {
      const c = createConversation("+15145550123", new Date().toISOString());
      c.optedOut = true;
      d.conversations["+15145550123"] = c;
      return { result: undefined, changed: true };
    });
    expect(await sendClientSms("514 555-0123", "Bonjour", { suppressed: new Set(), label: "sondage" })).toBe("desabonne");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("texto : désabonné des suivis → rien n’est envoyé", async () => {
    const suppressed = new Set([suppressionHash("p:+15145550124")]);
    expect(await sendClientSms("(514) 555-0124", "Bonjour", { suppressed, label: "sondage" })).toBe("desabonne");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("courriel : désabonné des relances et avis, ou des suivis → rien n’est envoyé", async () => {
    await writeFile(path.join(dir, "relances.json"), JSON.stringify({ version: 1, messages: [], suppressed: [emailHash("marie@exemple.ca")] }));
    expect(await sendClientMail("Marie@Exemple.ca", M, { suppressed: new Set(), label: "sondage" })).toBe("desabonne");
    expect(await sendClientMail("luc@exemple.ca", M, { suppressed: new Set([suppressionHash("e:luc@exemple.ca")]), label: "sondage" })).toBe("desabonne");
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
  });

  it("abonné : le courriel et le texto partent, le texto est noté dans la conversation", async () => {
    expect(await sendClientMail("julie@exemple.ca", M, { suppressed: new Set(), label: "sondage" })).toBe("envoye");
    expect(mail.sendClientEmail).toHaveBeenCalledTimes(1);
    expect(await sendClientSms("514 555-0125", "Bonjour", { suppressed: new Set(), label: "sondage" })).toBe("envoye");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(String(fetchMock.mock.calls[0][0])).toContain("api.twilio.com");
    const conv = (await readTextos()).conversations["+15145550125"];
    expect(conv.messages.at(-1)).toMatchObject({ dir: "out", body: "Bonjour", by: "automatisation:sondage" });
  });

  it("sans adresse postale : aucun courriel client (LCAP)", async () => {
    delete process.env.BUSINESS_MAILING_ADDRESS;
    expect(await sendClientMail("julie@exemple.ca", M, { suppressed: new Set(), label: "sondage" })).toBe("sans-adresse-postale");
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
  });

  it("hors production sans TEXTOS_ENVOIS_DEV : tout est simulé", async () => {
    delete process.env.TEXTOS_ENVOIS_DEV;
    expect(await sendClientSms("514 555-0126", "Bonjour", { suppressed: new Set(), label: "sondage" })).toBe("simule");
    expect(await sendClientMail("julie@exemple.ca", M, { suppressed: new Set(), label: "sondage" })).toBe("simule");
    expect(await sendOwnerSms("Résumé", "résumé")).toBe("non-configure"); // ALERT_SMS_TO absent
    expect(fetchMock).not.toHaveBeenCalled();
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
  });
});
