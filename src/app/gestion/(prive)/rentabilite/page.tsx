/* ==================================================================
   Chantier A — Rentabilité réelle : dépenses publicitaires saisies,
   demandes, soumissions, ventes signées et commissions réelles, par
   canal et par période. Chiffres réels seulement : sous les seuils,
   « données insuffisantes » ; sans dépense saisie, rien n'est deviné.
   Commission = pourcentage du volet B sur le sous-total avant taxes ;
   l'aide LogisVert n'est jamais un revenu.
   ================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { monthOf, type Metric, type RentaRow } from "@/lib/gestion/rentabilite/calc";
import { rentabilitePage } from "@/lib/gestion/rentabilite/service";
import { parseRentaPeriod, RENTA_PERIODS } from "@/lib/gestion/rentabilite/types";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { dollars, plural } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { SeriesBars } from "@/components/gestion/StatsCharts";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { OpenAssistantButton } from "@/components/gestion/assistant/SummarizeButton";
import { SpendForm } from "@/components/gestion/rentabilite/SpendForm";
import { removeSpendAction } from "./actions";
import "@/components/gestion/rentabilite/rentabilite.css";

export const metadata: Metadata = { title: "Rentabilité" };

const times = (x: number) => `${x.toLocaleString("fr-CA", { maximumFractionDigits: 1 })} ×`;

function metricValue(m: Metric, kind: "money" | "roi"): string | null {
  if (m.status !== "ok" || m.value === null) return null;
  return kind === "money" ? dollars(m.value) : times(m.value);
}

function MetricCell({ m, kind, basis }: { m: Metric; kind: "money" | "roi"; basis: string }) {
  if (m.status === "non-payant") return <span className="rt-dim">—</span>;
  if (m.status === "sans-depense") return <span className="rt-dim">Dépense non saisie</span>;
  if (m.status === "insuffisant") return <span className="rt-insuf" title={basis}>Données insuffisantes</span>;
  return <strong className="rt-num">{metricValue(m, kind)}</strong>;
}

function cells(r: RentaRow, seuils: { demandes: number; ventes: number }) {
  return {
    canal: (
      <span className="rt-canal">
        <strong>{r.label}</strong>
        {r.paid && r.spendSources.includes("api") ? <Chip tone="blue">API</Chip> : null}
      </span>
    ),
    spend: r.paid ? r.spendCents === null ? <span className="rt-dim">Non saisie</span> : <span className="k-money">{dollars(r.spendCents)}</span> : <span className="rt-dim">Non payant</span>,
    demandes: r.demandes,
    soumissions: r.soumissions,
    ventes: r.ventes,
    commission: (
      <span className="k-money" title={r.invoicedCents ? `${dollars(r.invoicedCents)} déjà facturés` : undefined}>
        {dollars(r.commissionCents)}
        {r.incomplete ? <small className="rt-dim"> · {r.incomplete} sans montant</small> : null}
      </span>
    ),
    cpd: <MetricCell m={r.costPerDemand} kind="money" basis={`Moins de ${seuils.demandes} demandes sur la période`} />,
    cpv: <MetricCell m={r.costPerSale} kind="money" basis={`Moins de ${seuils.ventes} ventes sur la période`} />,
    roi: <MetricCell m={r.roi} kind="roi" basis={`Moins de ${seuils.ventes} ventes sur la période`} />,
  };
}

export default async function RentabilitePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireAdmin();
  const period = parseRentaPeriod((await searchParams).periode);
  const now = new Date();
  const { view, spends, channels } = await rentabilitePage(period, now);
  const p = view.paid;
  const roi = metricValue(p.roi, "roi");
  const cpv = metricValue(p.costPerSale, "money");

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Analyse</p>
          <h1 className="k-h1">
            Rentabilité <em>réelle</em>
          </h1>
          <p className="k-lead">
            Ce que la publicité coûte et ce qu’elle rapporte vraiment en commissions, {view.label}. Chiffres réels seulement : sous {view.seuils.demandes} demandes ou {view.seuils.ventes} ventes, un ratio reste « données insuffisantes ».
          </p>
        </div>
        <nav className="k-tabs" aria-label="Période">
          {RENTA_PERIODS.map((x) => (
            <Link key={x.id} href={x.id === "3-mois" ? "/gestion/rentabilite" : `/gestion/rentabilite?periode=${x.id}`} aria-current={x.id === period ? "page" : undefined} scroll={false} prefetch={false}>
              {x.label}
            </Link>
          ))}
        </nav>
      </Reveal>

      <div className="cr-grid3">
        <KpiTile label="Dépenses publicitaires" value={p.spendCents === null ? "Non saisies" : dollars(p.spendCents)} sub={`${plural(p.spendMonths, "mois saisi", "mois saisis")} sur ${view.months}`} tone="ink" />
        <KpiTile label="Commissions venues de la pub" value={dollars(p.commissionCents)} sub={`${plural(p.ventes, "vente signée", "ventes signées")} · ${dollars(p.invoicedCents)} facturés`} />
        <KpiTile label="Rendement" value={roi ?? (p.roi.status === "sans-depense" ? "—" : "Données insuffisantes")} sub={roi ? "commission ÷ dépense" : p.roi.status === "sans-depense" ? "Aucune dépense saisie" : `Moins de ${view.seuils.ventes} ventes`} tone="orange" />
        <KpiTile label="Coût par vente" value={cpv ?? (p.costPerSale.status === "sans-depense" ? "—" : "Données insuffisantes")} sub={cpv ? `${plural(p.ventes, "vente", "ventes")} venues de la pub` : "Rien n’est extrapolé"} />
      </div>

      <SectionHeader n="01" title="Par canal" accent={view.label} lead="Demandes : canal de chaque demande. Soumissions et ventes : canal de la première demande du client. Commission : facture émise si elle existe, sinon commission prévue." />
      <Reveal delay={0.05}>
        <Card pad={false}>
          <DataTable
            label="Rentabilité par canal"
            columns={[
              { key: "canal", label: "Canal", width: "1.6fr" },
              { key: "spend", label: "Dépenses", width: "110px", align: "end" },
              { key: "demandes", label: "Demandes", width: "90px", align: "end" },
              { key: "soumissions", label: "Soumissions", width: "100px", align: "end" },
              { key: "ventes", label: "Ventes", width: "80px", align: "end" },
              { key: "commission", label: "Commissions", width: "120px", align: "end" },
              { key: "cpd", label: "Coût / demande", width: "130px", align: "end" },
              { key: "cpv", label: "Coût / vente", width: "130px", align: "end" },
              { key: "roi", label: "Rendement", width: "130px", align: "end" },
            ]}
            rows={[{ key: p.key, tone: "hot" as const, cells: cells(p, view.seuils) }, ...view.rows.map((r) => ({ key: r.key, tone: r.paid ? undefined : ("muted" as const), cells: cells(r, view.seuils) }))]}
          />
        </Card>
        <p className="cr-info" style={{ marginTop: 12 }}>
          <span aria-hidden>ⓘ</span>
          <span>
            Commission = <strong>{view.percent} %</strong> du sous-total accepté après rabais et avant taxes. L’aide LogisVert est versée au client par Hydro-Québec : elle n’est jamais comptée. Tous canaux : {plural(view.total.ventes, "vente signée", "ventes signées")}, <strong>{dollars(view.total.commissionCents)}</strong> de commissions.
          </span>
        </p>
      </Reveal>

      <SectionHeader n="02" title="Mois par mois" accent="12 derniers mois" />
      {view.chartReady ? (
        <Reveal className="cr-grid2" delay={0.05}>
          <Card title="Dépenses publicitaires" sub="Mois sans saisie : zéro affiché, jamais deviné.">
            <SeriesBars points={view.monthly.map((m) => ({ key: m.month, label: m.label, value: m.spendCents, note: m.hasSpend ? undefined : "non saisie" }))} format="money" label="Dépenses publicitaires par mois" accentLast />
          </Card>
          <Card title="Commissions venues de la pub" sub="Ventes signées dont la première demande venait d’un canal payant.">
            <SeriesBars points={view.monthly.map((m) => ({ key: m.month, label: m.label, value: m.paidCommissionCents }))} format="money" label="Commissions venues de la publicité par mois" accentLast />
          </Card>
        </Reveal>
      ) : (
        <Reveal delay={0.05}>
          <EmptyState title="Données insuffisantes" body="Il faut au moins deux mois avec une dépense saisie ou une vente signée pour tracer une tendance." tone="cream" />
        </Reveal>
      )}

      <SectionHeader n="03" title="Dépenses saisies" lead="Un montant par canal et par mois ; le même mois remplace la valeur précédente. Plus tard, le cerveau publicitaire pourra les remplir tout seul par l’API (source « API »)." action={<OpenAssistantButton question="Qu’est-ce qui rapporte le plus en publicité ?" label="Analyser avec Claude" />} />
      <Reveal className="cr-grid2" delay={0.05}>
        <Card title="Ajouter une dépense">
          <SpendForm channels={channels} defaultMonth={monthOf(now)} />
        </Card>
        <Card title="Historique" sub={spends.length ? plural(spends.length, "saisie", "saisies") : undefined} pad={false}>
          <DataTable
            label="Dépenses saisies"
            columns={[
              { key: "month", label: "Mois", width: "1fr" },
              { key: "channel", label: "Canal", width: "1.3fr" },
              { key: "amount", label: "Montant", width: "100px", align: "end" },
              { key: "action", label: "", width: "96px", align: "end" },
            ]}
            rows={spends.map((s) => ({
              key: s.key,
              cells: {
                month: s.monthLabel,
                channel: (
                  <span>
                    {s.channelLabel}
                    {s.note ? <small className="rt-dim"> · {s.note}</small> : null}
                    {s.source === "api" ? (
                      <>
                        {" "}
                        <Chip tone="blue">API</Chip>
                      </>
                    ) : null}
                  </span>
                ),
                amount: <span className="k-money">{dollars(s.cents)}</span>,
                action: (
                  <form action={removeSpendAction.bind(null, s.channel, s.month)}>
                    <SubmitButton className="k-btn k-btn--ghost" pendingLabel="…">
                      Retirer
                    </SubmitButton>
                  </form>
                ),
              },
            }))}
            empty={<EmptyState compact title="Aucune dépense saisie" body="Sans dépense, coûts et rendement restent incalculables." />}
          />
        </Card>
      </Reveal>
    </>
  );
}
