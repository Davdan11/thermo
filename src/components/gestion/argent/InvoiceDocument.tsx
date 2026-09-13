/* ==================================================================
   Facture de commission : document imprimable, même direction que la
   soumission (/devis). Composant serveur, utilisé par la page de
   l'installateur (/facture/<jeton>) et par l'outil (aperçu).
   Tout vient de la facture figée à l'émission ; rien n'est recalculé.
   ================================================================== */

import { CreditCard, Landmark } from "lucide-react";
import { BRAND } from "@/lib/crm/templates/layout";
import { formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { localYmd } from "@/lib/gestion/crm/time";
import { invoiceState } from "@/lib/gestion/commissions/calc";
import { PAYMENT_METHOD_LABELS, type CommissionInvoice } from "@/lib/gestion/commissions/types";
import { PrintButton } from "./ClientBits";
import { pctFr } from "./labels";

export interface InvoiceFlash {
  tone: "ok" | "bad" | "info";
  title: string;
  text: string;
}

const day = (iso: string) => formatDay(localYmd(iso));

export function InvoiceDocument({ inv, mode, payAction, flash, now }: { inv: CommissionInvoice; mode: "installateur" | "outil"; payAction: string | null; flash?: InvoiceFlash | null; now: string }) {
  const state = invoiceState(inv, new Date(now));
  const co = inv.company;
  const seller = co.legalName || co.tradeName || BRAND.name;
  const place = [co.address, [co.city, co.postalCode].filter(Boolean).join(" ")].filter(Boolean).join(", ");
  const ids = [co.neq ? `NEQ ${co.neq}` : "", co.rbq ? `RBQ ${co.rbq}` : "", inv.taxes.tpsNumber ? `TPS ${inv.taxes.tpsNumber}` : "", inv.taxes.tvqNumber ? `TVQ ${inv.taxes.tvqNumber}` : ""].filter(Boolean);
  const open = state === "a-recevoir" || state === "en-retard";

  return (
    <article className="fa-doc" aria-labelledby="fa-title">
      <div className="fa-tools">
        <PrintButton />
      </div>
      <header className="fa-head">
        <svg className="fa-head__arcs" viewBox="0 0 340 340" aria-hidden>
          <circle cx="170" cy="170" r="166" />
          <circle cx="170" cy="170" r="122" />
          <circle cx="170" cy="170" r="78" />
        </svg>
        <div className="fa-brand">
          <strong>{seller}</strong>
          {place ? <span>{place}</span> : null}
          <span>{[co.phone || BRAND.phone, co.email || BRAND.email].filter(Boolean).join(" · ")}</span>
          {ids.length ? <span>{ids.join(" · ")}</span> : null}
        </div>
        <div className="fa-head__main">
          <p className="fa-eyebrow">Facture de commission</p>
          <h1 id="fa-title" className="fa-number">
            {inv.number}
          </h1>
          <dl className="fa-meta">
            <div>
              <dt>Émise le</dt>
              <dd>{day(inv.issuedAt)}</dd>
            </div>
            <div>
              <dt>Échéance</dt>
              <dd>{day(inv.dueAt)}</dd>
            </div>
            <div>
              <dt>Job</dt>
              <dd>n° {inv.jobNumber}</dd>
            </div>
          </dl>
        </div>
      </header>

      {state === "payee" ? (
        <div className="fa-stamp" role="img" aria-label={`Payée le ${inv.payment ? formatDay(inv.payment.date) : ""}`}>
          Payée
          <small>{inv.payment ? `le ${formatDay(inv.payment.date)}` : null}</small>
        </div>
      ) : state === "annulee" ? (
        <div className="fa-stamp fa-stamp--void" role="img" aria-label="Annulée">
          Annulée
        </div>
      ) : state === "en-retard" ? (
        <div className="fa-stamp fa-stamp--late" role="img" aria-label="En retard">
          En retard
        </div>
      ) : null}

      <div className="fa-body">
        {flash ? (
          <div className={`fa-flash fa-flash--${flash.tone}`} role={flash.tone === "bad" ? "alert" : "status"}>
            <strong>{flash.title}</strong>
            {flash.text}
          </div>
        ) : null}

        <section className="fa-parties">
          <div>
            <h2 className="fa-h2">Facturé à</h2>
            <p>
              <strong>{inv.installer.company}</strong>
            </p>
            {inv.installer.contactName ? <p className="fa-soft">{inv.installer.contactName}</p> : null}
            {inv.installer.rbq ? <p className="fa-soft">RBQ {inv.installer.rbq}</p> : null}
          </div>
          <div>
            <h2 className="fa-h2">Objet</h2>
            <p>
              Commission sur le job n° {inv.jobNumber}
              {inv.jobLabel ? ` (${inv.jobLabel})` : ""}, installation terminée le {day(inv.completedAt)}.
            </p>
            <p className="fa-soft">
              Soumission {inv.quoteNumber} acceptée par le client le {day(inv.acceptedAt)}.
            </p>
          </div>
        </section>

        <table className="fa-lines">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Montant</th>
            </tr>
          </thead>
          <tbody>
            <tr className="is-base">
              <td>
                Vente avant taxes
                <small>Sous-total de la soumission {inv.quoteNumber} après rabais, avant TPS et TVQ</small>
              </td>
              <td>{money(inv.baseCents)}</td>
            </tr>
            <tr>
              <td>
                Commission ({pctFr(inv.percent)})
                <small>Selon l’entente de partenariat</small>
              </td>
              <td>{money(inv.commissionCents)}</td>
            </tr>
            {inv.tpsCents ? (
              <tr>
                <td>
                  TPS (5 %)<small>N° {inv.taxes.tpsNumber}</small>
                </td>
                <td>{money(inv.tpsCents)}</td>
              </tr>
            ) : null}
            {inv.tvqCents ? (
              <tr>
                <td>
                  TVQ (9,975 %)<small>N° {inv.taxes.tvqNumber}</small>
                </td>
                <td>{money(inv.tvqCents)}</td>
              </tr>
            ) : null}
          </tbody>
        </table>

        <div className="fa-total">
          <span>{state === "payee" ? "Total payé" : "Total à payer"}</span>
          <strong>{money(inv.totalCents)}</strong>
        </div>
        <p className="fa-note">
          L’aide LogisVert, versée au client par Hydro-Québec, n’entre jamais dans le calcul.
          {!inv.tpsCents && !inv.tvqCents ? " Aucune taxe : l’entreprise n’avait pas de numéros de TPS et de TVQ inscrits à l’émission." : ""}
        </p>

        {state === "payee" && inv.payment ? (
          <div className="fa-pay__box">
            <p>
              <strong>Payée le {formatDay(inv.payment.date)}</strong> · {PAYMENT_METHOD_LABELS[inv.payment.method]}
              {inv.payment.reference ? ` · réf. ${inv.payment.reference}` : ""}
            </p>
            <p className="fa-soft">Merci !</p>
          </div>
        ) : state === "annulee" ? (
          <div className="fa-pay__box">
            <p>
              <strong>Facture annulée</strong>
              {inv.voided?.reason ? ` : ${inv.voided.reason}` : ""}. Aucun paiement n’est dû.
            </p>
          </div>
        ) : open ? (
          <section className="fa-pay" aria-label="Payer">
            <div className="fa-pay__box">
              <p>
                <Landmark size={16} aria-hidden /> <strong>Virement Interac</strong>
              </p>
              {inv.interac.email ? (
                <>
                  <p>
                    À <code>{inv.interac.email}</code>
                  </p>
                  <p>
                    Message du virement : <code>{inv.number}</code>
                  </p>
                </>
              ) : (
                <p>
                  Écrivez-nous à {BRAND.email} ou appelez le {BRAND.phone} pour recevoir l’adresse du virement. Indiquez <code>{inv.number}</code> dans le message.
                </p>
              )}
              {inv.interac.note ? <p className="fa-soft">{inv.interac.note}</p> : null}
            </div>
            {mode === "installateur" && payAction ? (
              <div className="fa-pay__box">
                <p>
                  <CreditCard size={16} aria-hidden /> <strong>Carte ou prélèvement bancaire</strong>
                </p>
                <p className="fa-soft">Paiement en ligne sécurisé.</p>
                <form method="post" action={payAction}>
                  <button type="submit" className="fa-pay__btn">
                    Payer {money(inv.totalCents)}
                  </button>
                </form>
                <span className="fa-pay__secure">Traité par Stripe : nous ne voyons jamais vos numéros.</span>
              </div>
            ) : null}
          </section>
        ) : null}
      </div>

      <footer className="fa-foot">
        {seller}
        {place ? ` · ${place}` : ""}
        {ids.length ? ` · ${ids.join(" · ")}` : ""}
        <br />
        Facture émise électroniquement ; conservez-la avec vos pièces comptables.
      </footer>
    </article>
  );
}
