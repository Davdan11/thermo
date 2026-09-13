import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { settingsChecks } from "@/lib/soumissions/checklist";
import { formatShort } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { listQuotes, type ToolRow } from "@/lib/soumissions/service";
import { readSettings } from "@/lib/soumissions/store";
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
  await requireAdmin();
  const { statut = "", supprime } = await searchParams;
  const [rows, settings] = await Promise.all([listQuotes(), readSettings()]);
  const open = settingsChecks(settings).filter((i) => !i.ok && i.severity === "bloquant");
  const unpriced = settings.extras.filter((x) => x.unitPriceCents <= 0).length;
  const tab = TABS.find((t) => t.key === statut) ?? TABS[0];
  const shown = rows.filter(tab.test);
  const accepted = rows.filter((r) => r.status === "acceptee");

  return (
    <>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Créateur de soumissions</p>
          <h1 className="g-h1">Soumissions</h1>
        </div>
        <Link href="/gestion/soumissions/nouvelle" className="g-btn g-btn--primary">
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

      <Reveal delay={0.06}>
        <div className="g-stats" role="list" aria-label="Soumissions par statut">
          <div className="g-stat" role="listitem"><span className="g-stat__n">{rows.filter((r) => r.status === "brouillon").length}</span><span className="g-stat__l">Brouillons</span></div>
          <div className="g-stat" role="listitem"><span className="g-stat__n">{rows.filter((r) => r.status === "envoyee").length}</span><span className="g-stat__l">Envoyées, pas ouvertes</span></div>
          <div className="g-stat g-stat--hot" role="listitem"><span className="g-stat__n">{rows.filter((r) => r.status === "ouverte").length}</span><span className="g-stat__l">Ouvertes, à relancer</span></div>
          <div className="g-stat" role="listitem"><span className="g-stat__n">{accepted.length}</span><span className="g-stat__l">Acceptées · {money(accepted.reduce((s, r) => s + r.totalCents, 0))}</span></div>
        </div>
      </Reveal>

      <nav className="sq-tabs" aria-label="Filtrer">
        {TABS.map((t) => (
          <Link key={t.key} href={t.key ? `/gestion/soumissions?statut=${t.key}` : "/gestion/soumissions"} aria-current={t === tab ? "page" : undefined}>
            {t.label} <b>{rows.filter(t.test).length}</b>
          </Link>
        ))}
      </nav>

      {shown.length ? (
        <ul className="sq-rows">
          {shown.map((r, i) => (
            <Reveal as="li" key={r.id} delay={Math.min(i, 8) * 0.03}>
              <Link href={`/gestion/soumissions/${r.id}`} className="sq-row">
                <span style={{ minWidth: 0 }}>
                  <span className="sq-row__num">{r.number} · v{r.v}{r.kind === "avenant" ? " (avenant)" : ""}</span>
                  <span className="sq-row__who" style={{ display: "block" }}>{r.client}{r.city ? ` · ${r.city}` : ""}</span>
                  <span className="sq-row__meta" style={{ display: "block" }}>{[r.machine, tracking(r)].filter(Boolean).join(" · ")}</span>
                  {r.hasDraft ? <span className="sq-row__meta" style={{ display: "block", color: "var(--g-orange-2)" }}>Nouvelle version en brouillon</span> : null}
                  {r.pipedriveError ? <span className="sq-row__meta" style={{ display: "block", color: "var(--g-bad)" }}>Pipedrive : dernière synchronisation en erreur</span> : null}
                </span>
                <span className="sq-row__end">
                  <QuoteStatus status={r.status} />
                  <span className="sq-row__total">{money(r.totalCents)}</span>
                  {r.questions ? <span className="g-count">{r.questions} question{r.questions > 1 ? "s" : ""}</span> : null}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      ) : (
        <div className="sq-card sq-empty-state">
          <p>{rows.length ? "Aucune soumission dans ce filtre." : "Aucune soumission pour l’instant."}</p>
          <Link href="/gestion/soumissions/nouvelle" className="g-btn g-btn--primary"><Plus size={18} aria-hidden /> Créer la première</Link>
        </div>
      )}
    </>
  );
}
