/* ==================================================================
   POST /api/paiements/stripe — webhook Stripe (paiement des factures
   de commission). Signature vérifiée avec STRIPE_WEBHOOK_SECRET
   (HMAC-SHA256 du corps brut, horodatage à ±5 minutes) ; sans cette
   variable, tout appel est refusé (aussi en développement : ce point
   marque des factures payées).
   Événements utiles : checkout.session.completed (carte payée) et
   checkout.session.async_payment_succeeded (prélèvement bancaire).
   Montant et devise revérifiés ; idempotent (une facture payée le
   reste, un événement rejoué ne change rien).
   ================================================================== */

import { markPaidFromStripe } from "@/lib/gestion/commissions/service";
import { paidFromEvent, verifyStripeSignature, type StripeEvent } from "@/lib/gestion/commissions/stripe";

export const dynamic = "force-dynamic";

const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!secret) return json({ error: "Webhook Stripe non configuré." }, 503);
  const payload = await req.text();
  if (payload.length > 512 * 1024) return json({ error: "Trop volumineux." }, 413);
  if (!verifyStripeSignature(payload, req.headers.get("stripe-signature"), secret)) return json({ error: "Signature invalide." }, 400);
  let evt: StripeEvent;
  try {
    evt = JSON.parse(payload) as StripeEvent;
  } catch {
    return json({ error: "Corps illisible." }, 400);
  }
  const paid = paidFromEvent(evt);
  if (!paid) return json({ received: true, ignore: String(evt?.type ?? "") });
  const r = await markPaidFromStripe(paid);
  console.log(`[stripe] ${evt.type} : ${r.detail}`);
  return json({ received: true, ok: r.ok, detail: r.detail });
}
