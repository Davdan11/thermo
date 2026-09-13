/* Jobs : tous les jobs, filtrés par statut. La liste montre le client (nom, ville), l'équipement, l'installateur et
   la date ; jamais le téléphone ni le courriel (ils sont dans la fiche du job et la fiche client). */
import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, Plus, Send, Wrench } from "lucide-react";
import { requireUser } from "@/lib/gestion/auth/dal";
import { STAFF } from "@/lib/gestion/equipe/garde"; // Chantier V : propriétaire et adjoints
import { brandLabel } from "@/lib/gestion/catalog";
import { localYmd } from "@/lib/gestion/crm/time";
import { pendingOffers } from "@/lib/gestion/offers";
import { loadDashboard } from "@/lib/gestion/service";
import { formatShortDate } from "@/lib/gestion/summary";
import type { Job } from "@/lib/gestion/types";
import { SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { StatusPill } from "@/components/gestion/ui";

export const metadata: Metadata = { title: "Jobs" };

const TABS: Array<{ key: string; label: string; test: (j: Job) => boolean }> = [
  { key: "", label: "En cours", test: (j) => j.status !== "termine" && j.status !== "annule" },
  { key: "offrir", label: "À offrir", test: (j) => j.status === "nouveau" },
  { key: "attente", label: "En attente", test: (j) => j.status === "offert" },
  { key: "attribues", label: "Attribués", test: (j) => j.status === "attribue" },
  { key: "planifies", label: "Planifiés", test: (j) => j.status === "planifie" },
  { key: "fermes", label: "Terminés, annulés", test: (j) => j.status === "termine" || j.status === "annule" },
];

const day = (ymd: string | null) => (ymd ? formatShortDate(`${ymd}T12:00:00Z`) : null);

export default async function JobsPage({ searchParams }: { searchParams: Promise<{ statut?: string }> }) {
  await requireUser({ roles: STAFF }); // Chantier V
  const { statut = "" } = await searchParams;
  const now = new Date();
  const d = await loadDashboard(now);
  const tab = TABS.find((t) => t.key === statut) ?? TABS[0];
  const company = (id: string | null) => d.installers.find((i) => i.id === id)?.company ?? null;
  const today = localYmd(now);
  const shown = d.jobs.filter(tab.test).sort((a, b) => (a.scheduledFor ?? "9999").localeCompare(b.scheduledFor ?? "9999") || b.number - a.number);
  const count = (key: string) => d.jobs.filter(TABS.find((t) => t.key === key)!.test).length;
  const todayJobs = d.jobs.filter((j) => j.scheduledFor === today && (j.status === "planifie" || j.status === "attribue")).length;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Ventes</p>
          <h1 className="k-h1">Jobs</h1>
          <p className="k-lead">Les installations envoyées aux installateurs, de l’offre à la fin des travaux.</p>
        </div>
        <Link href="/gestion/jobs/nouveau" className="k-btn k-btn--primary k-btn--lg">
          <Plus size={18} aria-hidden /> Nouveau job
        </Link>
      </Reveal>

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="À offrir" icon={<Wrench size={16} />} value={count("offrir")} tone={count("offrir") ? "ink" : "paper"} href="/gestion/jobs?statut=offrir" sub="Aucun installateur contacté" />
        <KpiTile label="Offres en attente" icon={<Send size={16} />} value={d.pendingOffers} href="/gestion/jobs?statut=attente" sub={`${count("attente")} job${count("attente") > 1 ? "s" : ""} offert${count("attente") > 1 ? "s" : ""}`} />
        <KpiTile label="Attribués sans date" icon={<Clock size={16} />} value={d.jobs.filter((j) => j.status === "attribue" && !j.scheduledFor).length} href="/gestion/jobs?statut=attribues" sub="À planifier" />
        <KpiTile label="Installations aujourd’hui" icon={<CalendarDays size={16} />} value={todayJobs} tone={todayJobs ? "orange" : "paper"} href="/gestion/jobs?statut=planifies" sub={`${count("planifies")} planifiée${count("planifies") > 1 ? "s" : ""} en tout`} />
      </div>

      <nav className="k-tabs" aria-label="Filtrer par statut" style={{ marginBottom: 16 }}>
        {TABS.map((t) => (
          <Link key={t.key} href={t.key ? `/gestion/jobs?statut=${t.key}` : "/gestion/jobs"} aria-current={t === tab ? "page" : undefined}>
            {t.label} <b>{count(t.key)}</b>
          </Link>
        ))}
      </nav>

      <DataTable
        label="Jobs"
        columns={[
          { key: "job", label: "Job", width: "minmax(0, 2fr)" },
          { key: "status", label: "Statut", width: "130px" },
          { key: "what", label: "Équipement", width: "minmax(0, 1.4fr)" },
          { key: "installer", label: "Installateur", width: "minmax(0, 1.2fr)" },
          { key: "when", label: "Date", width: "110px", align: "end" },
        ]}
        rows={shown.map((j) => {
          const pending = pendingOffers(j, now).length;
          return {
            key: j.id,
            href: `/gestion/jobs/${j.id}`,
            tone: j.scheduledFor === today ? "hot" : j.status === "annule" ? "muted" : undefined,
            cells: {
              job: (
                <span className="cr-who">
                  <span className="g-jobrow__num" style={{ width: 38, height: 38, borderRadius: 11, fontSize: 14 }}>
                    {j.number}
                  </span>
                  <span className="cr-who__text">
                    <span className="cr-who__name">{`${j.client.firstName} ${j.client.lastName}`.trim() || "Client à préciser"}</span>
                    <span className="cr-who__sub">{j.client.city || j.geo?.city || j.client.postalCode}</span>
                  </span>
                </span>
              ),
              status: <StatusPill status={j.status} />,
              what: [j.brand ? brandLabel(j.brand) : null, j.systemType ? SYSTEM_TYPE_LABELS[j.systemType] : null].filter(Boolean).join(" · ") || null,
              installer: company(j.assignedInstallerId) ?? (j.status === "offert" ? `${pending} offre${pending > 1 ? "s" : ""} en attente` : null),
              when: day(j.scheduledFor) ?? (j.desiredDate ? `souhaité ${day(j.desiredDate)}` : j.desiredWindow || null),
            },
          };
        })}
        empty={
          <EmptyState
            icon={<Wrench size={20} />}
            title={d.jobs.length ? "Aucun job dans ce filtre" : "Aucun job pour l’instant"}
            body={d.jobs.length ? "Choisissez un autre statut." : "Créez un job depuis une soumission acceptée ou une fiche client : il sera offert aux installateurs proches."}
            action={
              <Link href="/gestion/jobs/nouveau" className="k-btn k-btn--primary">
                <Plus size={16} aria-hidden /> Nouveau job
              </Link>
            }
          />
        }
      />
    </>
  );
}
