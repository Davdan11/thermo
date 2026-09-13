/* Une facture de commission dans l'outil : le document tel que l'installateur le voit, puis « Marquer payée »,
   le lien de l'installateur, les envois, l'historique et l'annulation (la facture reste conservée). */
import "@/components/gestion/argent/argent.css";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { publicBaseUrl } from "@/lib/gestion/request";
import { invoiceLink, loadInvoice } from "@/lib/gestion/commissions/service";
import { invoiceState } from "@/lib/gestion/commissions/calc";
import { INVOICE_STATE_LABELS } from "@/lib/gestion/commissions/types";
import { OUTCOME_LABELS } from "@/lib/gestion/automatisations/types";
import { formatDateTime } from "@/lib/soumissions/dates";
import { localYmd } from "@/lib/gestion/crm/time";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { InvoiceDocument } from "@/components/gestion/argent/InvoiceDocument";
import { CopyField } from "@/components/gestion/argent/ClientBits";
import { MarkPaidForm, ResendButton, VoidForm } from "@/components/gestion/argent/PaymentForms";
import { STATE_TONE } from "@/components/gestion/argent/labels";

export const metadata: Metadata = { title: "Facture de commission" };

const SEND_LABELS = { emission: "Facture envoyée", "relance-7": "Relance (7 jours)", "relance-14": "Relance (14 jours)", renvoi: "Facture renvoyée", recu: "Reçu envoyé" } as const;

export default async function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const inv = await loadInvoice(id);
  if (!inv) notFound();
  const now = new Date();
  const state = invoiceState(inv, now);
  const link = invoiceLink(await publicBaseUrl(), inv.token);
  const history = [
    ...inv.events.map((e) => ({ at: e.at, title: e.action, detail: [e.detail, e.by && e.by !== "automatisation" ? e.by.split("@")[0] : ""].filter(Boolean).join(" · ") })),
    ...inv.sends.map((s) => ({ at: s.at, title: SEND_LABELS[s.kind], detail: `courriel ${OUTCOME_LABELS[s.email]}` })),
  ].sort((a, b) => b.at.localeCompare(a.at));

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/paiements" className="k-link" style={{ display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 10 }}>
            <ChevronLeft size={16} aria-hidden /> Paiements
          </Link>
          <p className="k-eyebrow">Facture de commission</p>
          <h1 className="k-h1">
            {inv.number} <em>{inv.installer.company}</em>
          </h1>
          <p className="k-lead" style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <Chip tone={STATE_TONE[state]} dot>
              {INVOICE_STATE_LABELS[state]}
            </Chip>
            Job n° {inv.jobNumber} · soumission {inv.quoteNumber}
          </p>
        </div>
      </Reveal>

      <div className="ar-invoice">
        <InvoiceDocument inv={inv} mode="outil" payAction={null} now={now.toISOString()} />
        <aside className="ar-invoice__side cr-stack">
          {inv.status === "emise" ? (
            <Card title="Paiement reçu ?" sub="Les offres de jobs reprennent dès l’enregistrement si l’installateur était en pause.">
              <MarkPaidForm id={inv.id} today={localYmd(now)} />
            </Card>
          ) : null}
          <Card title="Lien de l’installateur" sub="Sa facture en ligne, imprimable (et le paiement par carte quand Stripe est configuré).">
            <CopyField value={link} />
            {inv.status !== "annulee" ? (
              <div style={{ marginTop: 12 }}>
                <ResendButton id={inv.id} />
              </div>
            ) : null}
          </Card>
          <Card title="Liens">
            <ul className="ar-events">
              <li>
                <Link href={`/gestion/jobs/${inv.jobId}`} className="k-link">
                  Job n° {inv.jobNumber}
                </Link>
              </li>
              <li>
                <Link href={`/gestion/soumissions/${inv.quoteId}`} className="k-link">
                  Soumission {inv.quoteNumber}
                </Link>
              </li>
              <li>
                <Link href={`/gestion/partenaires/${inv.installerId}?onglet=paiements`} className="k-link">
                  {inv.installer.company}
                </Link>
              </li>
            </ul>
          </Card>
          <Card title="Historique">
            <ol className="ar-events">
              {history.map((h, i) => (
                <li key={`${h.at}-${i}`}>
                  <strong>{h.title}</strong>
                  <small>
                    {formatDateTime(h.at)}
                    {h.detail ? ` · ${h.detail}` : ""}
                  </small>
                </li>
              ))}
            </ol>
          </Card>
          {inv.status === "emise" ? (
            <Card>
              <VoidForm id={inv.id} />
            </Card>
          ) : null}
        </aside>
      </div>
    </>
  );
}
