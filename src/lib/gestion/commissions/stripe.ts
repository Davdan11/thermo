/* ==================================================================
   Paiement des factures de commission par Stripe (carte de crédit,
   prélèvement bancaire canadien « acss_debit »), SANS bibliothèque :
   appels HTTP directs (fetch) et vérification de la signature du
   webhook avec node:crypto.

   INACTIF tant que STRIPE_SECRET_KEY n'est pas définie : le bouton
   « Payer » n'apparaît pas et la route de paiement refuse. Le webhook
   (/api/paiements/stripe) exige STRIPE_WEBHOOK_SECRET (clé « whsec_ »
   donnée par Stripe à la création du point de terminaison) ; sans
   elle, tout appel est refusé. Aucune clé dans le code.
   ================================================================== */

import { createHmac, timingSafeEqual } from "node:crypto";
import type { CommissionInvoice } from "./types";

const API = "https://api.stripe.com/v1";

export const stripeConfigured = (): boolean => Boolean(process.env.STRIPE_SECRET_KEY?.trim());

export type CheckoutResult = { ok: true; id: string; url: string } | { ok: false; error: string };

function checkoutForm(inv: CommissionInvoice, o: { successUrl: string; cancelUrl: string }, methods: string[]): URLSearchParams {
  const f = new URLSearchParams();
  f.set("mode", "payment");
  f.set("locale", "fr-CA");
  f.set("client_reference_id", inv.id);
  f.set("metadata[invoiceId]", inv.id);
  f.set("metadata[number]", inv.number);
  f.set("payment_intent_data[metadata][invoiceId]", inv.id);
  f.set("payment_intent_data[description]", `Facture de commission ${inv.number}`);
  f.set("line_items[0][quantity]", "1");
  f.set("line_items[0][price_data][currency]", "cad");
  f.set("line_items[0][price_data][unit_amount]", String(inv.totalCents));
  f.set("line_items[0][price_data][product_data][name]", `Facture de commission ${inv.number} (job n° ${inv.jobNumber})`);
  methods.forEach((m, i) => f.set(`payment_method_types[${i}]`, m));
  if (methods.includes("acss_debit")) {
    f.set("payment_method_options[acss_debit][mandate_options][payment_schedule]", "sporadic");
    f.set("payment_method_options[acss_debit][mandate_options][transaction_type]", "business");
    f.set("payment_method_options[acss_debit][verification_method]", "automatic");
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inv.installer.email)) f.set("customer_email", inv.installer.email);
  f.set("success_url", o.successUrl);
  f.set("cancel_url", o.cancelUrl);
  return f;
}

/**
 * Session de paiement Stripe Checkout pour une facture. Carte et prélèvement bancaire canadien ;
 * si le compte n'a pas le prélèvement activé, nouvel essai avec la carte seulement.
 */
export async function createCheckoutSession(inv: CommissionInvoice, o: { successUrl: string; cancelUrl: string; now?: Date }, fetchImpl: typeof fetch = fetch): Promise<CheckoutResult> {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return { ok: false, error: "Paiement en ligne non configuré." };
  if (inv.status !== "emise" || inv.totalCents <= 0) return { ok: false, error: "Cette facture n’est pas payable en ligne." };
  const hour = Math.floor((o.now ?? new Date()).getTime() / 3_600_000);
  const attempt = async (methods: string[]) => {
    const res = await fetchImpl(`${API}/checkout/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/x-www-form-urlencoded",
        // Un double clic ne crée pas deux sessions (la même clé pendant une heure).
        "Idempotency-Key": `tav-${inv.id}-${inv.totalCents}-${methods.join("+")}-${hour}`,
      },
      body: checkoutForm(inv, o, methods).toString(),
      signal: AbortSignal.timeout(15_000),
    });
    const json = (await res.json().catch(() => ({}))) as { id?: string; url?: string; error?: { message?: string; param?: string } };
    return { res, json };
  };
  try {
    let { res, json } = await attempt(["card", "acss_debit"]);
    if (!res.ok && /acss|payment_method_types/i.test(`${json.error?.param ?? ""} ${json.error?.message ?? ""}`)) ({ res, json } = await attempt(["card"]));
    if (!res.ok || !json.id || !json.url) {
      console.error("[stripe] session refusée :", res.status, (json.error?.message ?? "").slice(0, 200));
      return { ok: false, error: "Stripe a refusé la création du paiement. Réessayez ou payez par virement Interac." };
    }
    return { ok: true, id: json.id, url: json.url };
  } catch (e) {
    console.error("[stripe] injoignable :", e);
    return { ok: false, error: "Stripe est injoignable. Réessayez dans quelques minutes." };
  }
}

/**
 * Signature d'un webhook Stripe (en-tête Stripe-Signature : « t=…,v1=…[,v1=…] ») :
 * HMAC-SHA256 de « <t>.<corps brut> » avec le secret du point de terminaison, comparé en temps constant ;
 * horodatage à ±5 minutes (rejeu refusé).
 */
export function verifyStripeSignature(payload: string, header: string | null | undefined, secret: string, nowSec = Math.floor(Date.now() / 1000), toleranceSec = 300): boolean {
  if (!header || !secret) return false;
  let t: number | null = null;
  const sigs: string[] = [];
  for (const part of header.split(",")) {
    const [k, v] = part.split("=", 2).map((x) => x?.trim());
    if (k === "t" && v && /^\d+$/.test(v)) t = Number(v);
    else if (k === "v1" && v && /^[0-9a-f]{64}$/i.test(v)) sigs.push(v.toLowerCase());
  }
  if (t === null || !sigs.length || Math.abs(nowSec - t) > toleranceSec) return false;
  const expected = Buffer.from(createHmac("sha256", secret).update(`${t}.${payload}`, "utf8").digest("hex"), "utf8");
  return sigs.some((s) => {
    const given = Buffer.from(s, "utf8");
    return given.length === expected.length && timingSafeEqual(given, expected);
  });
}

/** Ce qu'il faut d'un événement Stripe (le reste est ignoré). */
export interface StripeEvent {
  id: string;
  type: string;
  data: { object: Record<string, unknown> };
}

export interface StripePaid {
  invoiceId: string;
  sessionId: string;
  paymentIntent: string | null;
  amountCents: number;
  currency: string;
  /** Carte : payé tout de suite ; prélèvement : confirmé plus tard (async_payment_succeeded). */
  method: "carte" | "prelevement";
}

/** Paiement confirmé dans un événement Stripe, ou null (autre événement, paiement pas encore reçu). */
export function paidFromEvent(evt: StripeEvent): StripePaid | null {
  const s = evt.data?.object ?? {};
  if (s.object !== "checkout.session") return null;
  const invoiceId = typeof s.client_reference_id === "string" ? s.client_reference_id : typeof (s.metadata as Record<string, unknown> | undefined)?.invoiceId === "string" ? String((s.metadata as Record<string, unknown>).invoiceId) : "";
  if (!invoiceId) return null;
  const base = {
    invoiceId,
    sessionId: String(s.id ?? ""),
    paymentIntent: typeof s.payment_intent === "string" ? s.payment_intent : null,
    amountCents: typeof s.amount_total === "number" ? s.amount_total : -1,
    currency: String(s.currency ?? "").toLowerCase(),
  };
  if (evt.type === "checkout.session.completed" && s.payment_status === "paid") return { ...base, method: "carte" };
  if (evt.type === "checkout.session.async_payment_succeeded") return { ...base, method: "prelevement" };
  return null;
}
