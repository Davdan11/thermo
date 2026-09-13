/* ==================================================================
   Paiements des partenaires : factures de commission à recevoir, en
   retard, reçues ; jobs terminés à facturer ; installateurs dont les
   offres sont en pause ; réglages et export comptable.
   ================================================================== */
import "@/components/gestion/argent/argent.css";
import type { Metadata } from "next";
import Link from "next/link";
import { BadgeDollarSign, CalendarCheck, CircleAlert, Clock, Download } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { paymentsView } from "@/lib/gestion/commissions/service";
import { INVOICE_STATE_LABELS, type InvoiceState } from "@/lib/gestion/commissions/types";
import { formatDay } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { localYmd } from "@/lib/gestion/crm/time";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable, type Column, type Row } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { dollars, pct, plural } from "@/components/gestion/kit/format";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { CommissionSettingsForm, IssueButton, LinkQuoteForm } from "@/components/gestion/argent/PaymentForms";
import { pctFr, STATE_TONE, whenLabel } from "@/components/gestion/argent/labels";

export const metadata: Metadata = { title: "Paiements" };

const FILTERS: Array<{ id: InvoiceState | null; label: string }> = [
  { id: null, label: "Toutes" },
  { id: "a-recevoir", label: "À recevoir" },
  { id: "en-retard", label: "En retard" },
  { id: "payee", label: "Payées" },
  { id: "annulee", label: "Annulées" },
];
const isState = (v: unknown): v is InvoiceState => typeof v === "string" && ["a-recevoir", "en-retard", "payee", "annulee"].includes(v);
const day = (iso: string) => formatDay(localYmd(iso));

export default async function PaiementsPage({ searchParams }: { searchParams: Promise<{ etat?: string }> }) {
  await requireAdmin();
  const now = new Date();
  const sp = await searchParams;
  const v = await paymentsView(now);
  const filter = isState(sp.etat) ? sp.etat : null;
  const rows = filter ? v.rows.filter((r) => r.state === filter) : v.rows;
  const count = (s: InvoiceState | null) => (s ? v.rows.filter((r) => r.state === s).length : v.rows.length);
  const year = localYmd(now).slice(0, 4);

  const columns: Column[] = [
    { key: "num", label: "Facture", width: "1.3fr" },
    { key: "who", label: "Installateur", width: "1.1fr" },
    { key: "issued", label: "Émise", width: "130px", hideOnMobile: true },
    { key: "due", label: "Échéance ou paiement", width: "1fr" },
    { key: "total", label: "Total", width: "120px", align: "end" },
    { key: "state", label: "État", width: "130px", align: "end" },
  ];
  const table: Row[] = rows.map((r) => ({
    key: r.id,
    href: `/gestion/paiements/${r.id}`,
    tone: r.state === "en-retard" ? "hot" : r.state === "annulee" ? "muted" : undefined,
    cells: {
      num: (
        <span>
          <strong>{r.number}</strong>
          <small className="g-hint" style={{ display: "block", margin: 0 }}>
            Job n° {r.jobNumber}
            {r.jobLabel ? ` · ${r.jobLabel}` : ""}
          </small>
        </span>
      ),
      who: r.company,
      issued: day(r.issuedAt),
      due: r.paidOn ? `Payée le ${formatDay(r.paidOn)}${r.method ? ` · ${r.method}` : ""}` : r.state === "annulee" ? "—" : `${day(r.dueAt)}${r.daysOverdue ? ` · ${plural(r.daysOverdue, "jour", "jours")} de retard` : ""}`,
      total: <span className="k-money">{money(r.totalCents)}</span>,
      state: (
        <Chip tone={STATE_TONE[r.state]} dot>
          {INVOICE_STATE_LABELS[r.state]}
        </Chip>
      ),
    },
  }));

  const instColumns: Column[] = [
    { key: "who", label: "Installateur", width: "1.5fr" },
    { key: "open", label: "À recevoir", width: "1fr", align: "end" },
    { key: "late", label: "En retard", width: "1fr", align: "end" },
    { key: "delay", label: "Délai moyen", width: "1fr", align: "end" },
    { key: "ontime", label: "Payées à temps", width: "1fr", align: "end" },
    { key: "state", label: "Offres", width: "150px", align: "end" },
  ];
  const instRows: Row[] = v.installers.map((i) => ({
    key: i.id,
    href: `/gestion/partenaires/${i.id}?onglet=paiements`,
    tone: i.paused ? "hot" : undefined,
    cells: {
      who: <strong>{i.company}</strong>,
      open: dollars(i.outstandingCents),
      late: i.overdueCents ? <span style={{ color: "var(--g-bad)", fontWeight: 650 }}>{dollars(i.overdueCents)}</span> : "—",
      delay: i.avgDaysToPay !== null ? `${String(i.avgDaysToPay).replace(".", ",")} j` : "—",
      ontime: i.onTimeRate !== null ? pct(i.onTimeRate) : "—",
      state: i.paused ? <Chip tone="bad">En pause</Chip> : <Chip tone="ok">Actives</Chip>,
    },
  }));

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Argent</p>
          <h1 className="k-h1">
            Paiements <em>des partenaires</em>
          </h1>
          <p className="k-lead">
            Commission de {pctFr(v.settings.percent)} du sous-total avant taxes de chaque vente installée, facturée le lendemain de la fin du chantier. L’aide LogisVert, versée au client, n’y entre jamais.
          </p>
        </div>
      </Reveal>

      <div className="ar-kpis">
        <KpiTile label="À recevoir" value={dollars(v.kpis.receivableCents)} sub={plural(v.kpis.receivableCount, "facture ouverte", "factures ouvertes")} icon={<BadgeDollarSign size={16} />} href="/gestion/paiements?etat=a-recevoir" />
        <KpiTile label="En retard" value={dollars(v.kpis.overdueCents)} sub={v.kpis.overdueCount ? plural(v.kpis.overdueCount, "facture", "factures") : "Aucun retard"} tone={v.kpis.overdueCount ? "orange" : "paper"} icon={<Clock size={16} />} href="/gestion/paiements?etat=en-retard" />
        <KpiTile label="Reçus ce mois-ci" value={dollars(v.kpis.receivedMonthCents)} sub={plural(v.kpis.receivedMonthCount, "paiement", "paiements")} icon={<CalendarCheck size={16} />} href="/gestion/paiements?etat=payee" />
        <KpiTile label={`Reçus en ${year}`} value={dollars(v.kpis.receivedYearCents)} tone="ink" sub={v.stripe ? "Carte et prélèvement actifs (Stripe)" : "Virement Interac"} />
      </div>

      {v.paused.length ? (
        <section className="ar-paused" role="status">
          <h2>
            <CircleAlert size={17} aria-hidden /> Offres de jobs en pause
          </h2>
          <ul>
            {v.paused.map((p) => (
              <li key={p.installerId}>
                <strong>{p.company}</strong> : {p.reason}.
              </li>
            ))}
          </ul>
          <p className="g-hint" style={{ margin: "8px 0 0" }}>
            Ces installateurs n’apparaissent plus parmi les candidats des jobs. La pause se lève d’elle-même dès que la facture est marquée payée.
          </p>
        </section>
      ) : null}

      <SectionHeader n="01" title="À facturer" lead="Jobs terminés sans facture de commission." />
      {v.toInvoice.length ? (
        <ul className="ar-rows">
          {v.toInvoice.map((t) => (
            <li key={t.jobId} className="ar-row">
              <div>
                <Link href={`/gestion/jobs/${t.jobId}`} className="k-link">
                  <strong>Job n° {t.jobNumber}</strong>
                </Link>
                <small>
                  {t.who}
                  {t.installer ? ` · ${t.installer}` : ""} · terminé le {day(t.completedAt)}
                </small>
              </div>
              <div style={{ display: "grid", gap: 4, justifyItems: "start" }}>
                {t.problem ? (
                  <p className="ar-row__problem">{t.problem}</p>
                ) : t.auto ? (
                  <Chip tone="blue">Émission automatique {whenLabel(t.dueAt, now)}</Chip>
                ) : (
                  <Chip tone="muted">Terminé avant la mise en marche : à émettre à la main</Chip>
                )}
                {t.quote ? (
                  <small className="g-hint" style={{ margin: 0 }}>
                    Soumission {t.quote.number}
                    {t.quote.via === "choisie" ? " (choisie par vous)" : ""}
                  </small>
                ) : null}
              </div>
              <div className="ar-row__actions">
                {!t.installer ? (
                  <Link href={`/gestion/jobs/${t.jobId}`} className="k-btn">
                    Attribuer l’installateur
                  </Link>
                ) : t.quote ? (
                  <>
                    <IssueButton jobId={t.jobId} />
                    <details>
                      <summary className="g-hint" style={{ cursor: "pointer", margin: 0 }}>
                        Changer la soumission
                      </summary>
                      <LinkQuoteForm jobId={t.jobId} quotes={v.acceptedQuotes} current={t.quote.via === "choisie" ? t.quote.id : null} />
                    </details>
                  </>
                ) : (
                  <LinkQuoteForm jobId={t.jobId} quotes={v.acceptedQuotes} />
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ marginBottom: 28 }}>
          <EmptyState compact title="Rien à facturer" body="Chaque job terminé reçoit sa facture le lendemain, 8 h, sans rien faire." />
        </div>
      )}

      <SectionHeader
        n="02"
        title="Factures"
        action={
          <a href={`/gestion/api/paiements/export?annee=${year}`} className="k-btn">
            <Download size={15} aria-hidden /> Export {year}
          </a>
        }
      />
      <nav className="k-tabs" aria-label="État des factures" style={{ marginBottom: 14 }}>
        {FILTERS.map((f) => (
          <Link key={f.label} href={f.id ? `/gestion/paiements?etat=${f.id}` : "/gestion/paiements"} aria-current={f.id === filter ? "page" : undefined} scroll={false} prefetch={false}>
            {f.label}
            <b>{count(f.id)}</b>
          </Link>
        ))}
      </nav>
      <DataTable columns={columns} rows={table} label="Factures de commission" empty={<EmptyState compact title={filter ? "Aucune facture dans cet état" : "Aucune facture pour l’instant"} body="Les factures apparaissent ici le lendemain de chaque fin de chantier." />} />

      <div style={{ height: 28 }} />
      <SectionHeader n="03" title="Par installateur" lead="Délai moyen de paiement et régularité : aussi dans la fiche de performance." />
      <DataTable columns={instColumns} rows={instRows} label="Paiements par installateur" empty={<EmptyState compact title="Aucun installateur facturé" />} />

      <div style={{ height: 28 }} />
      <SectionHeader n="04" title="Réglages et export" />
      <div className="cr-stack">
        <Card title="Réglages des factures" sub={v.settings.updatedAt ? `Modifiés le ${day(v.settings.updatedAt)}${v.settings.updatedBy ? ` par ${v.settings.updatedBy}` : ""}. S’appliquent aux prochaines factures.` : "S’appliquent aux prochaines factures ; une facture émise ne change plus."}>
          <CommissionSettingsForm settings={v.settings} />
        </Card>
        <Card title="Export comptable" sub="CSV : point-virgule et virgule décimale ; s’ouvre tel quel dans Excel.">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {(v.years.length ? v.years : [year]).map((y) => (
              <a key={y} href={`/gestion/api/paiements/export?annee=${y}`} className="k-btn">
                <Download size={15} aria-hidden /> {y}
              </a>
            ))}
            <a href="/gestion/api/paiements/export" className="k-btn k-btn--ghost">
              Toutes les années
            </a>
          </div>
        </Card>
      </div>
    </>
  );
}
