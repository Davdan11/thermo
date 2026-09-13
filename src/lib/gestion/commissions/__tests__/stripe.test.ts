/* Stripe : signature du webhook (valide, invalide, rejouée), webhook qui marque la facture payée (montant vérifié,
   idempotent), session de paiement par fetch simulé (aucun appel réel, aucune clé dans le code). */
import { createHmac } from "node:crypto";
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/paiements/stripe/route";
import { issueInvoiceForJob } from "../service";
import { readCommissions } from "../store";
import { createCheckoutSession, paidFromEvent, verifyStripeSignature } from "../stripe";
import { BY, fakeChannels, tempDir, testEnv, writeStores } from "./fixtures";

const SECRET = "secret-de-test-du-webhook";
const sign = (payload: string, t: number, secret = SECRET) => `t=${t},v1=${createHmac("sha256", secret).update(`${t}.${payload}`).digest("hex")}`;

describe("signature du webhook", () => {
  const payload = JSON.stringify({ id: "evt_1", type: "checkout.session.completed" });
  const t = 1_790_000_000;
  it("valide", () => {
    expect(verifyStripeSignature(payload, sign(payload, t), SECRET, t + 10)).toBe(true);
    expect(verifyStripeSignature(payload, `t=${t},v1=${"0".repeat(64)},${sign(payload, t).split(",")[1]}`, SECRET, t)).toBe(true);
  });
  it("invalide : autre secret, corps modifié, en-tête absent ou mal formé", () => {
    expect(verifyStripeSignature(payload, sign(payload, t, "autre-secret"), SECRET, t)).toBe(false);
    expect(verifyStripeSignature(`${payload} `, sign(payload, t), SECRET, t)).toBe(false);
    expect(verifyStripeSignature(payload, null, SECRET, t)).toBe(false);
    expect(verifyStripeSignature(payload, "v1=abc", SECRET, t)).toBe(false);
  });
  it("rejouée plus de 5 minutes plus tard : refusée", () => {
    expect(verifyStripeSignature(payload, sign(payload, t), SECRET, t + 301)).toBe(false);
  });
});

describe("webhook /api/paiements/stripe", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await tempDir();
    process.env = testEnv(dir, { STRIPE_WEBHOOK_SECRET: SECRET });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
    await writeStores(dir, {});
  });
  afterEach(async () => {
    process.env = env;
    vi.unstubAllGlobals();
    await rm(dir, { recursive: true, force: true });
  });

  async function invoice() {
    const r = await issueInvoiceForJob("j_testjob0001", BY, { channels: fakeChannels().ch, send: false });
    if (!r.ok) throw new Error(r.message);
    return r.invoice;
  }
  const event = (id: string, amount: number, type = "checkout.session.completed") =>
    JSON.stringify({ id: "evt_test", type, data: { object: { object: "checkout.session", id: "cs_test_1", client_reference_id: id, payment_status: "paid", amount_total: amount, currency: "cad", payment_intent: "pi_test_1" } } });
  const req = (body: string, signature: string | null) => new Request("http://localhost:3001/api/paiements/stripe", { method: "POST", body, headers: signature ? { "stripe-signature": signature } : {} });
  const now = () => Math.floor(Date.now() / 1000);

  it("signature valide : la facture est marquée payée (carte), une seule fois", async () => {
    const inv = await invoice();
    const body = event(inv.id, inv.totalCents);
    const res = await POST(req(body, sign(body, now())));
    expect(res.status).toBe(200);
    const saved = (await readCommissions()).invoices[0];
    expect(saved.status).toBe("payee");
    expect(saved.payment).toMatchObject({ method: "carte", by: "stripe", reference: "pi_test_1" });
    const again = await POST(req(body, sign(body, now())));
    expect(await again.json()).toMatchObject({ ok: true, detail: "déjà payée" });
  });

  it("signature invalide : 400, rien ne change", async () => {
    const inv = await invoice();
    const body = event(inv.id, inv.totalCents);
    const res = await POST(req(body, sign(body, now(), "mauvais-secret")));
    expect(res.status).toBe(400);
    expect((await readCommissions()).invoices[0].status).toBe("emise");
    expect((await POST(req(body, null))).status).toBe(400);
  });

  it("montant différent : pas payée, noté « à vérifier »", async () => {
    const inv = await invoice();
    const body = event(inv.id, inv.totalCents - 1);
    await POST(req(body, sign(body, now())));
    const saved = (await readCommissions()).invoices[0];
    expect(saved.status).toBe("emise");
    expect(saved.events.at(-1)?.action).toBe("paiement Stripe à vérifier");
  });

  it("sans STRIPE_WEBHOOK_SECRET : tout est refusé", async () => {
    delete process.env.STRIPE_WEBHOOK_SECRET;
    const inv = await invoice();
    const body = event(inv.id, inv.totalCents);
    expect((await POST(req(body, sign(body, now())))).status).toBe(503);
  });

  it("prélèvement bancaire : payé seulement à la confirmation (async_payment_succeeded)", () => {
    const pending = JSON.parse(event("f_testinv0001", 100));
    pending.data.object.payment_status = "unpaid";
    expect(paidFromEvent(pending)).toBeNull();
    expect(paidFromEvent(JSON.parse(event("f_testinv0001", 100, "checkout.session.async_payment_succeeded")))?.method).toBe("prelevement");
  });

  it("session de paiement : inactive sans clé ; avec une clé, un seul appel HTTP simulé au bon montant", async () => {
    const inv = await invoice();
    expect(await createCheckoutSession(inv, { successUrl: "https://exemple.ca/ok", cancelUrl: "https://exemple.ca/non" })).toMatchObject({ ok: false });
    process.env.STRIPE_SECRET_KEY = "cle-de-test-fictive";
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "cs_test_2", url: "https://checkout.stripe.test/cs_test_2" }), { status: 200 }));
    const r = await createCheckoutSession(inv, { successUrl: "https://exemple.ca/ok", cancelUrl: "https://exemple.ca/non" }, fetchMock as unknown as typeof fetch);
    expect(r).toEqual({ ok: true, id: "cs_test_2", url: "https://checkout.stripe.test/cs_test_2" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://api.stripe.com/v1/checkout/sessions");
    const form = new URLSearchParams(String(init.body));
    expect(form.get("line_items[0][price_data][unit_amount]")).toBe(String(inv.totalCents));
    expect(form.get("line_items[0][price_data][currency]")).toBe("cad");
    expect(form.get("client_reference_id")).toBe(inv.id);
    expect(form.get("payment_method_types[1]")).toBe("acss_debit");
  });
});
