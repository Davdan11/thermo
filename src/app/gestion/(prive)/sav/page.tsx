/* /gestion/sav — billets de service : à classer, en retard, à confirmer, fermés. */
import type { Metadata } from "next";
import { AlarmClock, Inbox, Plus, Wrench } from "lucide-react";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { longDate, relative } from "@/lib/gestion/partenaires/format";
import { isLate } from "@/lib/gestion/sav/rules";
import { loadTickets } from "@/lib/gestion/sav/service";
import { CAUSE_LABELS, TICKET_STATUS_LABELS } from "@/lib/gestion/sav/types";
import { Chip, type ChipTone } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Service après-vente" };

const STATUS_TONE: Record<string, ChipTone> = { nouveau: "orange", assigne: "blue", planifie: "blue", resolu: "warn", ferme: "muted" };

export default async function SavPage() {
  await requireAdmin();
  const now = new Date();
  const { tickets, jobs, installers } = await loadTickets();
  const open = tickets.filter((t) => t.status !== "ferme");
  const rows = [...open, ...tickets.filter((t) => t.status === "ferme")];

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Ventes</p>
          <h1 className="k-h1">
            Service <em>après-vente</em>
          </h1>
          <p className="k-lead">Chaque appel de service, du signalement à la satisfaction du client. Seule la cause « main-d’œuvre » compte contre l’installateur d’origine.</p>
        </div>
        <Link href="/gestion/sav/nouveau" className="k-btn k-btn--primary k-btn--lg">
          <Plus size={18} aria-hidden /> Nouveau billet
        </Link>
      </Reveal>

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Ouverts" icon={<Wrench size={16} />} value={open.length} tone="ink" />
        <KpiTile label="À classer" icon={<Inbox size={16} />} value={open.filter((t) => !t.cause).length} sub="cause à choisir" />
        <KpiTile label="En retard" icon={<AlarmClock size={16} />} value={open.filter((t) => isLate(t, now)).length} tone={open.some((t) => isLate(t, now)) ? "orange" : "paper"} sub="prise en charge dépassée" />
        <KpiTile label="À confirmer" value={open.filter((t) => t.status === "resolu").length} sub="satisfaction du client" />
      </div>

      {rows.length ? (
        <DataTable
          label="Billets de service"
          columns={[
            { key: "n", label: "Billet", width: "0.9fr" },
            { key: "c", label: "Client", width: "1.4fr" },
            { key: "k", label: "Cause", width: "1.2fr" },
            { key: "s", label: "Statut", width: "1fr" },
            { key: "i", label: "Installateur", width: "1.2fr" },
            { key: "d", label: "Échéance", width: "1fr", align: "end" },
          ]}
          rows={rows.map((t) => {
            const j = t.jobId ? jobs[t.jobId] : null;
            const late = isLate(t, now);
            return {
              key: t.id,
              href: `/gestion/sav/${t.id}`,
              tone: t.status === "ferme" ? "muted" : late ? "hot" : undefined,
              cells: {
                n: (
                  <span>
                    <b>n° {t.number}</b>
                    <br />
                    <small className="g-hint">{longDate(t.createdAt)}{t.source === "client" ? " · par le client" : ""}</small>
                  </span>
                ),
                c: j ? `${j.client} · ${j.city} · job n° ${j.number}` : "Sans job",
                k: t.cause ? <Chip tone={t.cause === "main-oeuvre" ? "bad" : t.cause === "appareil" ? "blue" : "muted"}>{CAUSE_LABELS[t.cause]}</Chip> : <Chip tone="orange" dot>À classer</Chip>,
                s: <Chip tone={STATUS_TONE[t.status]} dot>{TICKET_STATUS_LABELS[t.status]}</Chip>,
                i: t.installerId ? installers[t.installerId] ?? "—" : "—",
                d: t.status === "ferme" ? "—" : <span style={late ? { color: "var(--g-bad)", fontWeight: 650 } : undefined}>{relative(t.visitAt ?? t.dueAt, now)}</span>,
              },
            };
          })}
        />
      ) : (
        <EmptyState icon={<Wrench size={20} />} title="Aucun appel de service" body="Les clients signalent un problème depuis leur lien « Un problème ? » ; vous pouvez aussi créer un billet." />
      )}
    </>
  );
}
