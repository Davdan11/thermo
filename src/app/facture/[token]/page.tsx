/* ==================================================================
   /facture/[jeton] — la facture de commission vue par l'installateur
   (sans compte). Le jeton ne donne accès qu'à SA facture. GET en
   lecture seule ; « Payer » (Stripe, si configuré) est un formulaire
   POST vers /facture/[jeton]/payer. Imprimable.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { BRAND } from "@/lib/crm/templates/layout";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { invoiceByToken } from "@/lib/gestion/commissions/service";
import { stripeConfigured } from "@/lib/gestion/commissions/stripe";
import { InvoiceDocument, type InvoiceFlash } from "@/components/gestion/argent/InvoiceDocument";

export const metadata: Metadata = { title: "Facture de commission" };
export const dynamic = "force-dynamic";

const limiter = createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 });

const FLASH: Record<string, InvoiceFlash> = {
  merci: { tone: "ok", title: "Merci !", text: " Paiement transmis par Stripe : la facture sera marquée payée dans quelques instants (prélèvement bancaire : quelques jours ouvrables)." },
  annule: { tone: "info", title: "Paiement annulé.", text: " Vous pouvez réessayer ou payer par virement Interac." },
  indisponible: { tone: "info", title: "Paiement en ligne indisponible.", text: " Payez par virement Interac, selon les instructions ci-dessous." },
  erreur: { tone: "bad", title: "Le paiement en ligne n’a pas pu commencer.", text: ` Réessayez dans quelques minutes, payez par virement Interac ou appelez-nous au ${BRAND.phone}.` },
  deja: { tone: "ok", title: "Cette facture est déjà payée.", text: " Merci !" },
  annulee: { tone: "info", title: "Cette facture est annulée.", text: " Aucun paiement n’est dû." },
};

function Invalid({ title, text }: { title: string; text: string }) {
  return (
    <main className="fa-page">
      <div className="fa-invalid">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </main>
  );
}

export default async function FactureInstallateurPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string }> }) {
  const { token } = await params;
  const { r } = await searchParams;
  if (!limiter.hit(ipFromHeaders(await headers()))) return <Invalid title="Trop de visites" text={`Réessayez dans quelques minutes, ou appelez-nous au ${BRAND.phone}.`} />;
  const inv = await invoiceByToken(token);
  if (!inv) return <Invalid title="Ce lien n’est pas valide" text={`Vérifiez qu’il est complet, ou appelez-nous au ${BRAND.phone}.`} />;
  const flash = typeof r === "string" && Object.prototype.hasOwnProperty.call(FLASH, r) ? FLASH[r] : null;
  const pay = stripeConfigured() && inv.status === "emise" ? `/facture/${encodeURIComponent(token)}/payer` : null;
  return (
    <main className="fa-page">
      <InvoiceDocument inv={inv} mode="installateur" payAction={pay} flash={flash} now={new Date().toISOString()} />
    </main>
  );
}
