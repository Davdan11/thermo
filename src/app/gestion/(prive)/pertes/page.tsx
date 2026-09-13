/* « Pourquoi on perd » (refonte R2) : pertes par étape atteinte et par raison (structurée ou automatique), sur une
   période, et résumé des 12 derniers mois. Un vendeur ne voit que ses dossiers (chantier V). */
import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/gestion/auth/dal";
import { loadCrmIndex } from "@/lib/gestion/crm/service";
import { buildLossView, parseLossPeriod } from "@/lib/gestion/crm/pertes";
import { scopedIndex } from "@/lib/gestion/equipe/scope";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { dollars, plural } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import "@/components/gestion/crm/parcours.css";

export const metadata: Metadata = { title: "Pourquoi on perd" };

function Bars({ rows, tone }: { rows: Array<{ key: string; label: string; n: number; sub?: string }>; tone: string }) {
  const max = Math.max(1, ...rows.map((r) => r.n));
  return (
    <ul className="pl-bars">
      {rows.map((r, i) => (
        <li key={r.key} className="pl-bar">
          <span>
            {r.label}
            {r.sub ? <small> · {r.sub}</small> : null}
          </span>
          <b>{r.n}</b>
          <span className="pl-bar__track" aria-hidden>
            <span style={{ ["--w" as string]: `${(r.n / max) * 100}%`, ["--tone" as string]: tone, ["--i" as string]: i }} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function PertesPage({ searchParams }: { searchParams: Promise<{ periode?: string }> }) {
  const session = await requireUser(); // Chantier V : un vendeur ne voit que ses pertes
  const { periode } = await searchParams;
  const index = session.role === "vendeur" ? await scopedIndex(session) : await loadCrmIndex();
  const v = buildLossView(index, parseLossPeriod(periode));
  const hot = Math.max(0, ...v.matrix.rows.flatMap((r) => r.counts));
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Analyse</p>
          <h1 className="k-h1">
            Pourquoi on <em>perd</em>
          </h1>
          <p className="k-lead">
            Chaque perte a deux lectures : la raison notée en marquant le client perdu (prix, délai, installateur, concurrent, projet reporté, autre) et le motif que disent les faits (soumission refusée, sans réponse, expirée, contrat refusé ou annulé). L’étape est la plus haute atteinte avant la perte.
          </p>
        </div>
      </Reveal>

      <nav className="k-tabs" aria-label="Période">
        {v.periods.map((p) => (
          <Link key={p.id} href={p.id === "90" ? "/gestion/pertes" : `/gestion/pertes?periode=${p.id}`} aria-current={p.id === v.period.id ? "page" : undefined} scroll={false} prefetch={false}>
            {p.label}
          </Link>
        ))}
      </nav>

      <div className="pl-kpis" style={{ marginTop: 14 }}>
        <KpiTile label={`Pertes · ${v.period.label}`} value={String(v.total)} sub={v.total ? "clients perdus, encore perdus aujourd’hui" : "Aucune perte sur la période"} />
        <KpiTile label="Montant des soumissions perdues" value={dollars(v.cents)} sub="Taxes comprises, sans l’aide LogisVert" />
        <KpiTile label="Étape qui perd le plus" value={v.worst ? v.worst.step : "—"} sub={v.worst ? plural(v.worst.n, "perte", "pertes") : "—"} />
        <KpiTile label="Raison n° 1" value={v.topReason ? v.topReason.label : "—"} sub={v.topReason ? plural(v.topReason.n, "perte", "pertes") : "—"} />
      </div>

      {v.total ? (
        <>
          <div className="pl-grid">
            <Card title="Par étape atteinte" sub="La plus haute étape du parcours avant la perte.">
              <Bars rows={v.byStep.map((s) => ({ key: s.step, label: s.label, n: s.n, sub: s.cents ? dollars(s.cents) : undefined }))} tone="#d64109" />
            </Card>
            <Card title="Par raison notée" sub="Choisie en marquant le client perdu ; « non précisée » pour les anciennes pertes et les pertes automatiques.">
              <Bars rows={v.byCause.map((c) => ({ key: c.id, label: c.label, n: c.n }))} tone="#0c1821" />
            </Card>
          </div>
          <SectionHeader n="01" title="Où et" accent="pourquoi" lead="Étape atteinte × motif automatique. La case la plus chargée est en rouge." />
          <Card>
            <div className="pl-table-wrap">
              <table className="pl-table">
                <thead>
                  <tr>
                    <th scope="col">Étape</th>
                    {v.matrix.motifs.map((m) => (
                      <th key={m.id} scope="col">
                        {m.label}
                      </th>
                    ))}
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {v.matrix.rows.map((r) => (
                    <tr key={r.step}>
                      <th scope="row">{r.label}</th>
                      {r.counts.map((n, i) => (
                        <td key={v.matrix.motifs[i].id} className={n && n === hot ? "is-hot" : undefined}>
                          {n || "·"}
                        </td>
                      ))}
                      <td>
                        <b>{r.n}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <SectionHeader n="02" title="Pertes" accent="récentes" />
          <ul className="pl-recent">
            {v.recent.map((r) => (
              <li key={r.id}>
                <span>
                  <Link href={`/gestion/clients/${r.id}`}>{r.name}</Link>
                  {r.city ? ` · ${r.city}` : ""} · {r.when}
                  {r.cents ? ` · ${dollars(r.cents)}` : ""}
                </span>
                <small>
                  Étape {r.reachedLabel} · {r.causeLabel} · {r.motifLabel}
                  {r.reason ? ` · « ${r.reason} »` : ""}
                </small>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <EmptyState title="Aucune perte sur la période" body="Les clients marqués perdus (ou perdus automatiquement : soumission refusée, job annulé, contrat refusé) apparaissent ici." />
      )}

      <SectionHeader n="03" title="Résumé" accent="mensuel" lead="Les 12 derniers mois : combien, où et pourquoi." />
      <Card>
        <div className="pl-table-wrap">
          <table className="pl-table">
            <thead>
              <tr>
                <th scope="col">Mois</th>
                <th scope="col">Pertes</th>
                <th scope="col">Montant</th>
                <th scope="col">Étape qui perd le plus</th>
                <th scope="col">Raison principale</th>
              </tr>
            </thead>
            <tbody>
              {[...v.monthly].reverse().map((m) => (
                <tr key={m.month}>
                  <th scope="row">{m.label}</th>
                  <td>{m.n}</td>
                  <td>{m.cents ? dollars(m.cents) : "—"}</td>
                  <td>{m.topStep ?? "—"}</td>
                  <td>{m.topReason ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
