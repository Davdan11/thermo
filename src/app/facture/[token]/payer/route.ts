/* ==================================================================
   POST /facture/[jeton]/payer — paiement en ligne d'une facture de
   commission (Stripe Checkout : carte ou prélèvement bancaire).
   Formulaire HTML ordinaire : origine vérifiée, débit limité, puis
   redirection (303) vers la page de paiement de Stripe. Sans
   STRIPE_SECRET_KEY : retour à la facture (« indisponible »).
   ================================================================== */
import { NextResponse, type NextRequest } from "next/server";
import { isSameOrigin } from "@/lib/gestion/origin";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";
import { invoiceByToken, recordCheckoutSession } from "@/lib/gestion/commissions/service";
import { createCheckoutSession, stripeConfigured } from "@/lib/gestion/commissions/stripe";

export const dynamic = "force-dynamic";

const limiter = createLimiter({ limit: 10, windowMs: 10 * 60 * 1000 });
const text = (body: string, status: number) => new NextResponse(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export async function POST(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isSameOrigin(req)) return text("Requête refusée : origine inconnue.", 403);
  if (!limiter.hit(ipFromHeaders(req.headers))) return text("Trop de requêtes. Réessayez dans quelques minutes.", 429);
  const base = baseUrlFromHeaders(req.headers);
  const back = (r: string) => NextResponse.redirect(new URL(`/facture/${encodeURIComponent(token)}?r=${r}`, base), 303);
  const inv = await invoiceByToken(token);
  if (!inv) return text("Lien invalide.", 404);
  if (inv.status !== "emise") return back(inv.status === "payee" ? "deja" : "annulee");
  if (!stripeConfigured()) return back("indisponible");
  const s = await createCheckoutSession(inv, { successUrl: `${base}/facture/${encodeURIComponent(token)}?r=merci`, cancelUrl: `${base}/facture/${encodeURIComponent(token)}?r=annule` });
  if (!s.ok) return back("erreur");
  await recordCheckoutSession(inv.id, s.id);
  return NextResponse.redirect(s.url, 303);
}
