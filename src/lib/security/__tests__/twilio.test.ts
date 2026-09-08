import { createHmac } from "node:crypto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { verifyTwilioRequest, xml } from "../twilio";
import { SITE_URL } from "@/lib/seo";

const TOKEN = "test-auth-token-1234";
const PATH = "/api/phone/ivr/welcome";

function sign(params: Record<string, string>, token = TOKEN, url = `${SITE_URL}${PATH}`) {
  const keys = Object.keys(params).sort();
  const data = url + keys.map((k) => k + params[k]).join("");
  return createHmac("sha1", token).update(data).digest("base64");
}

function makeRequest(params: Record<string, string>, signature?: string) {
  return new Request(`http://localhost:3000${PATH}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", ...(signature ? { "x-twilio-signature": signature } : {}) },
    body: new URLSearchParams(params).toString(),
  });
}

describe("verifyTwilioRequest", () => {
  const env = process.env;
  beforeEach(() => { process.env = { ...env, TWILIO_AUTH_TOKEN: TOKEN }; });
  afterEach(() => { process.env = env; vi.restoreAllMocks(); });

  it("accepte une requête correctement signée", async () => {
    const params = { From: "+15145551234", CallSid: "CA123", Digits: "1" };
    const check = await verifyTwilioRequest(makeRequest(params, sign(params)));
    expect(check.ok).toBe(true);
    expect(check.params.get("From")).toBe("+15145551234");
  });

  it("refuse une signature calculée avec un autre jeton", async () => {
    const params = { From: "+15145551234" };
    const check = await verifyTwilioRequest(makeRequest(params, sign(params, "wrong")));
    expect(check.ok).toBe(false);
    expect(check.reason).toBe("signature invalide");
  });

  it("refuse une requête dont les paramètres ont été modifiés après signature", async () => {
    const signature = sign({ From: "+15145551234", Digits: "1" });
    const check = await verifyTwilioRequest(makeRequest({ From: "+15145551234", Digits: "2" }, signature));
    expect(check.ok).toBe(false);
  });

  it("refuse une requête sans signature", async () => {
    const check = await verifyTwilioRequest(makeRequest({ From: "+15145551234" }));
    expect(check.ok).toBe(false);
    expect(check.reason).toBe("signature absente");
  });

  it("refuse tout en production si le jeton est absent", async () => {
    process.env = { ...env, NODE_ENV: "production", TWILIO_AUTH_TOKEN: "" };
    const params = { From: "+15145551234" };
    const check = await verifyTwilioRequest(makeRequest(params, sign(params)));
    expect(check.ok).toBe(false);
    expect(check.reason).toMatch(/TWILIO_AUTH_TOKEN/);
  });
});

describe("xml", () => {
  it("échappe les caractères réservés du XML", () => {
    expect(xml(`Ventes & <SAV> "ok" l'été`)).toBe("Ventes &amp; &lt;SAV&gt; &quot;ok&quot; l&apos;été");
  });
});
