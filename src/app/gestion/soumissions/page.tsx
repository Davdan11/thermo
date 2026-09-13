import type { Metadata } from "next";
import Link from "next/link";
import { CircleDollarSign, Eye, FileText, Plus, Send } from "lucide-react";
import { requireUser } from "@/lib/gestion/auth/dal";
import { quotesFor } from "@/lib/gestion/equipe/garde"; // Chantier V : un vendeur ne voit que ses soumissions
import { settingsChecks } from "@/lib/soumissions/checklist";
import { formatShort } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { listQuotes, type ToolRow } from "@/lib/soumissions/service";
import { readSettings } from "@/lib/soumissions/store";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { dollars } from "@/components/gestion/kit/format";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { QuoteStatus } from "@/components/gestion/soumissions/ui";

export const metadata: Metadata = { title: "Soumissions" };
export const dynamic = "force-dynamic";

const TABS: Array<{ key: string; label: string; test: (r: ToolRow) => boolean }> = [
  { key: "", label: "Toutes", test: () => true },
  { key: "brouillon", label: "Brouillons", test: (r) => r.status === "brouillon" || r.hasDraft },
  { key: "attente", label: "En attente", test: (r) => r.status === "envoyee" || r.status === "ouverte" },
  { key: "acceptee", label: "Acceptées", test: (r) => r.status === "acceptee" },
  { key: "fermee", label: "Refusées, expirées", test: (r) => r.status === "refusee" || r.status === "expiree" || r.status === "remplacee" },
];

function tracking(r: ToolRow): string {
  if (r.acceptedAt) return `Acceptée le ${formatShort(r.acceptedAt)}`;
  if (r.refusedAt) return `Refusée le ${formatShort(r.refusedAt)}`;
  if (!r.sentAt) return "Pas encore envoyée";
  const opened = r.views.count ? `ouverte ${r.views.count} fois (dernière : ${formatShort(r.views.lastAt)})` : "pas encore ouverte";
  return `Envoyée le ${formatShort(r.sentAt)} · ${opened}`;
}

export default async function SoumissionsPage({ searchParams }: { searchParams: Promise<{ statut?: string; supprime?: string }> }) {
  const session = await requireUser(); // Chantier V
  const owner = session.role === "proprietaire";
  const { statut = "", supprime } = await searchParams;
  const [all, settings] = await Promise.all([listQuotes(), readSettings()]);
  const rows = await quotesFor(session, all);
  const open = owner ? settingsChecks(settings).filter((i) => !i.ok && i.severity === "bloquant") : [];
  const unpriced = owner ? settings.extras.filter((x) => x.unitPriceCents <= 0).length : 0;
  const tab = TABS.find((t) => t.key === statut) ?? TABS[0];
  const shown = rows.filter(tab.test);
  const accepted = rows.filter((r) => r.status === "acceptee");
  const opened = rows.filter((r) => r.status === "ouverte");
  const sentOnly = rows.filter((r) => r.status === "envoyee");

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Créateur de soumissions</p>
          <h1 className="k-h1">Soumissions</h1>
          <p className="k-lead">Montants taxes comprises. Une soumission ouverte sans réponse devient une tâche « Relancer » après quelques jours.</p>
        </div>
        <Link href="/gestion/soumissions/nouvelle" className="k-btn k-btn--primary k-btn--lg">
          <Plus size={18} aria-hidden /> Nouvelle soumission
        </Link>
      </Reveal>

      {supprime ? <p className="g-alert g-alert--ok">Brouillon supprimé.</p> : null}

      {open.length || unpriced ? (
        <Reveal delay={0.04}>
          <div className="sq-note" style={{ marginBottom: 16 }}>
            {open.length ? (
              <p style={{ margin: 0 }}>
                <strong>Envoi bloqué</strong> : {open.length} élément{open.length > 1 ? "s" : ""} des réglages à compléter ({open.slice(0, 4).map((i) => i.label).join(", ")}{open.length > 4 ? "…" : ""}). <Link href="/gestion/soumissions/reglages">Compléter les réglages</Link>
              </p>
            ) : null}
            {unpriced ? (
              <p style={{ margin: open.length ? "6px 0 0" : 0 }}>
                {unpriced} extra{unpriced > 1 ? "s" : ""} sans prix : <Link href="/gestion/soumissions/prix">saisir vos prix</Link>.
              </p>
            ) : null}
          </div>
        </Reveal>
      ) : null}

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Brouillons" icon={<FileText size={16} />} value={rows.filter((r) => r.status === "brouillon").length} href="/gestion/soumissions?statut=brouillon" />
        <KpiTile label="Envoyées, pas ouvertes" icon={<Send size={16} />} value={sentOnly.length} sub={sentOnly.length ? dollars(sentOnly.reduce((s, r) => s + r.totalCents, 0)) : undefined} href="/gestion/soumissions?statut=attente" />
        <KpiTile label="Ouvertes, à relancer" icon={<Eye size={16} />} value={opened.length} tone={opened.length ? "ink" : "paper"} sub={opened.length ? dollars(opened.reduce((s, r) => s + r.totalCents, 0)) : undefined} href="/gestion/soumissions?statut=attente" />
        <KpiTile label="Acceptées" icon={<CircleDollarSign size={16} />} value={dollars(accepted.reduce((s, r) => s + r.totalCents, 0))} sub={`${accepted.length} soumission${accepted.length > 1 ? "s" : ""}`} href="/gestion/soumissions?statut=acceptee" />
      </div>

      <nav className="k-tabs" aria-label="Filtrer" style={{ marginBottom: 16 }}>
        {TABS.map((t) => (
          <Link key={t.key} href={t.key ? `/gestion/soumissions?statut=${t.key}` : "/gestion/soumissions"} aria-current={t === tab ? "page" : undefined}>
            {t.label} <b>{rows.filter(t.test).length}</b>
          </Link>
        ))}
      </nav>

      <DataTable
        label="Soumissions"
        columns={[
          { key: "who", label: "Soumission", width: "minmax(0, 2fr)" },
          { key: "status", label: "Statut", width: "120px" },
          { key: "track", label: "Suivi", width: "minmax(0, 2fr)" },
          { key: "total", label: "Total", width: "130px", align: "end" },
        ]}
        rows={shown.map((r) => ({
          key: r.id,
          href: `/gestion/soumissions/${r.id}`,
          tone: r.status === "ouverte" ? "hot" : r.status === "refusee" || r.status === "expiree" || r.status === "remplacee" ? "muted" : undefined,
          cells: {
            who: (
              <span className="cr-who__text">
                <span className="cr-who__name">{r.client}</span>
                <span className="cr-who__sub">
                  {r.number} · v{r.v}
                  {r.kind === "avenant" ? " (avenant)" : ""}
                  {r.city ? ` · ${r.city}` : ""}
                </span>
              </span>
            ),
            status: <QuoteStatus status={r.status} />,
            track: (
              <span className="cr-who__text">
                <span className="cr-who__sub" style={{ whiteSpace: "normal" }}>{[r.machine, tracking(r)].filter(Boolean).join(" · ")}</span>
                {r.hasDraft ? <span className="cr-who__sub" style={{ color: "var(--g-orange-2)" }}>Nouvelle version en brouillon</span> : null}
                {r.questions ? <span className="cr-who__sub" style={{ color: "var(--g-warn)" }}>{r.questions} question{r.questions > 1 ? "s" : ""} du client</span> : null}
                {r.pipedriveError ? <span className="cr-who__sub" style={{ color: "var(--g-bad)" }}>Pipedrive : dernière synchronisation en erreur</span> : null}
              </span>
            ),
            total: <span className="k-money">{money(r.totalCents)}</span>,
          },
        }))}
        empty={
          <EmptyState
            icon={<FileText size={20} />}
            title={rows.length ? "Aucune soumission dans ce filtre" : "Aucune soumission pour l’instant"}
            action={
              <Link href="/gestion/soumissions/nouvelle" className="k-btn k-btn--primary">
                <Plus size={16} aria-hidden /> {rows.length ? "Nouvelle soumission" : "Créer la première"}
              </Link>
            }
          />
        }
      />
    </>
  );
}
