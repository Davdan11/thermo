/* ==================================================================
   Chantier V — relevés mensuels de commission des vendeurs
   (propriétaire seulement). Par vendeur : ses ventes signées du mois,
   la commission de l'entreprise sur chacune (réelle si la facture à
   l'installateur est émise), sa part. « Marquer payé » fige le relevé.
   LogisVert n'entre jamais dans la base.
   ================================================================== */
import "@/components/gestion/equipe/equipe.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Receipt } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { lastMonths, MONTH_RE, statementsView } from "@/lib/gestion/equipe/service";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { dollars, plural } from "@/components/gestion/kit/format";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { PayForm } from "@/components/gestion/equipe/TeamForms";

export const metadata: Metadata = { title: "Relevés des vendeurs" };

const monthLabel = (ym: string) => new Date(`${ym}-15T12:00:00Z`).toLocaleDateString("fr-CA", { month: "long", year: "numeric", timeZone: "UTC" });
const day = (iso: string) => new Date(iso).toLocaleDateString("fr-CA", { timeZone: "America/Toronto", day: "numeric", month: "short" });

export default async function RelevesPage({ searchParams }: { searchParams: Promise<{ mois?: string }> }) {
  await requireAdmin();
  const { mois } = await searchParams;
  const months = lastMonths(new Date(), 12);
  const month = mois && MONTH_RE.test(mois) && mois <= months[0] ? mois : months[0];
  const rows = await statementsView(month);
  const toPay = rows.filter((r) => r.status === "a-payer");
  const paid = rows.filter((r) => r.status === "payee");

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/equipe" className="k-link">
            <ChevronLeft size={15} aria-hidden /> Équipe
          </Link>
          <h1 className="k-h1" style={{ marginTop: 8 }}>
            Relevés <em>{monthLabel(month)}</em>
          </h1>
          <p className="k-lead">Part de chaque vendeur sur la commission de l’entreprise, pour les soumissions signées ce mois-là par SES clients. Base : sous-total signé avant taxes, sans l’aide LogisVert.</p>
        </div>
      </Reveal>

      <nav className="k-tabs" aria-label="Mois" style={{ marginBottom: 16, overflowX: "auto" }}>
        {months.map((m) => (
          <Link key={m} href={`/gestion/equipe/releves?mois=${m}`} aria-current={m === month ? "page" : undefined}>
            {monthLabel(m)}
          </Link>
        ))}
      </nav>

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="À payer" value={dollars(toPay.reduce((n, r) => n + r.totalCents, 0))} sub={plural(toPay.length, "relevé", "relevés")} tone={toPay.length ? "orange" : "paper"} />
        <KpiTile label="Payé" value={dollars(paid.reduce((n, r) => n + r.totalCents, 0))} sub={plural(paid.length, "relevé", "relevés")} />
        <KpiTile label="Ventes signées" value={rows.reduce((n, r) => n + r.lines.length, 0)} />
      </div>

      {rows.length ? (
        <div className="cr-stack">
          {rows.map((r) => (
            <Card
              key={r.userId}
              title={r.name}
              sub={`${r.percent} % de la commission de l’entreprise`}
              action={r.status === "payee" ? <Chip tone="ok">Payé</Chip> : r.status === "a-payer" ? <Chip tone="orange">À payer</Chip> : <Chip tone="muted">Aucune vente</Chip>}
            >
              <div className="eq-statement">
                <p className="k-money" style={{ fontSize: 24, margin: 0 }}>
                  {dollars(r.totalCents)}
                </p>
                {r.lines.length ? (
                  <ul className="eq-lines">
                    {r.lines.map((l) => (
                      <li key={l.quoteId}>
                        <span>
                          {l.quoteNumber} · {l.who} · signée le {day(l.acceptedAt)} · base {dollars(l.baseCents)} · entreprise {dollars(l.companyCents)} ({l.source === "facture" ? "facturée" : `${l.companyPercent} %`})
                        </span>
                        <span>{dollars(l.vendorCents)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {r.paid ? (
                  <p className="g-hint" style={{ margin: 0 }}>
                    Payé le {day(r.paid.paidAt)} par {r.paid.paidBy.split("@")[0]}
                    {r.paid.reference ? ` · ${r.paid.reference}` : ""}. Relevé figé.
                  </p>
                ) : r.status === "a-payer" ? (
                  <PayForm month={month} userId={r.userId} />
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState icon={<Receipt size={20} />} title="Aucun vendeur" body="Les relevés apparaîtront ici dès que vos vendeurs signeront leurs premières ventes." />
      )}
    </>
  );
}
