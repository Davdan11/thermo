import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandLabel } from "@/lib/gestion/catalog";
import { pendingOffers } from "@/lib/gestion/offers";
import { loadDashboard } from "@/lib/gestion/service";
import { formatShortDate } from "@/lib/gestion/summary";
import { JOB_STATUS_LABELS, type Job, type JobStatus } from "@/lib/gestion/types";
import { SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";
import { StatusPill } from "@/components/gestion/ui";

export const metadata: Metadata = { title: "Tableau de bord" };

const GROUPS: Array<{ status: JobStatus; title: string; empty: string }> = [
  { status: "nouveau", title: "À offrir", empty: "Aucun job en attente d’un installateur." },
  { status: "offert", title: "En attente de réponse", empty: "Aucune offre en attente." },
  { status: "attribue", title: "Attribués", empty: "Aucun job attribué à planifier." },
  { status: "planifie", title: "Planifiés", empty: "Aucune installation planifiée." },
];

function JobRow({ job, now, installer }: { job: Job; now: Date; installer?: string }) {
  const pending = pendingOffers(job, now).length;
  const what = [job.brand ? brandLabel(job.brand) : null, job.systemType ? SYSTEM_TYPE_LABELS[job.systemType] : null, job.desiredDate ? formatShortDate(`${job.desiredDate}T12:00:00Z`) : job.desiredWindow || null].filter(Boolean).join(" · ");
  const side = job.status === "offert" ? `${pending} offre${pending > 1 ? "s" : ""} en attente` : installer ?? null;
  return (
    <Link href={`/gestion/jobs/${job.id}`} className="g-jobrow">
      <span className="g-jobrow__num" aria-label={`Job numéro ${job.number}`}>{job.number}</span>
      <span style={{ minWidth: 0 }}>
        <span className="g-jobrow__title" style={{ display: "block" }}>
          {`${job.client.firstName} ${job.client.lastName}`.trim()} · {job.client.city || job.geo?.city || job.client.postalCode}
        </span>
        <span className="g-jobrow__meta" style={{ display: "block" }}>{what || "Équipement à préciser"}</span>
      </span>
      <span className="g-jobrow__end">
        <StatusPill status={job.status} />
        {side ? <span className="g-count">{side}</span> : null}
      </span>
    </Link>
  );
}

export default async function DashboardPage() {
  await requireAdmin();
  const now = new Date();
  const d = await loadDashboard(now);
  const byStatus = (s: JobStatus) => d.jobs.filter((j) => j.status === s);
  const company = (id: string | null) => d.installers.find((i) => i.id === id)?.company;
  const closed = d.jobs.filter((j) => j.status === "termine" || j.status === "annule");
  const today = new Intl.DateTimeFormat("fr-CA", { weekday: "long", day: "numeric", month: "long", timeZone: "America/Toronto" }).format(now);
  const active = d.installers.filter((i) => i.active).length;

  return (
    <>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">{today}</p>
          <h1 className="g-h1">Tableau de bord</h1>
        </div>
        <Link href="/gestion/jobs/nouveau" className="g-btn g-btn--primary">
          <Plus size={18} aria-hidden /> Nouveau job
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="g-stats" role="list" aria-label="Jobs par statut">
          <a href="#offert" className="g-stat g-stat--hot" role="listitem">
            <span className="g-stat__n">{d.pendingOffers}</span>
            <span className="g-stat__l">Offres en attente</span>
          </a>
          {(["nouveau", "offert", "attribue", "planifie", "termine", "annule"] as JobStatus[]).map((s) => (
            <a key={s} href={`#${s}`} className="g-stat" role="listitem">
              <span className="g-stat__n">{byStatus(s).length}</span>
              <span className="g-stat__l">{JOB_STATUS_LABELS[s]}</span>
            </a>
          ))}
        </div>
      </Reveal>

      <div className="g-grid g-grid--job" style={{ marginTop: 8 }}>
        <div>
          {GROUPS.map((g, gi) => {
            const jobs = byStatus(g.status);
            return (
              <Reveal as="section" key={g.status} className="g-section" delay={0.08 + gi * 0.04}>
                <div className="g-section__head" id={g.status}>
                  <h2 className="g-h2">{g.title}</h2>
                  <span className="g-count">{jobs.length}</span>
                </div>
                {jobs.length ? (
                  <StaggerList className="g-joblist">{jobs.map((j) => <JobRow key={j.id} job={j} now={now} installer={company(j.assignedInstallerId)} />)}</StaggerList>
                ) : (
                  <p className="g-empty">{g.empty}</p>
                )}
              </Reveal>
            );
          })}
          <section className="g-section" id="termine">
            <details className="g-details" id="annule">
              <summary>
                <ChevronRight size={16} aria-hidden /> Terminés et annulés ({closed.length})
              </summary>
              {closed.length ? (
                <ul className="g-joblist" style={{ marginTop: 8 }}>
                  {closed.map((j) => (
                    <li key={j.id}><JobRow job={j} now={now} installer={company(j.assignedInstallerId)} /></li>
                  ))}
                </ul>
              ) : (
                <p className="g-empty">Rien pour l’instant.</p>
              )}
            </details>
          </section>
        </div>

        <aside className="g-sticky" style={{ display: "grid", gap: 12, marginTop: 32 }}>
          <Reveal delay={0.12}>
            <Link href="/gestion/installateurs" className="g-inst">
              <span className="g-eyebrow" style={{ margin: 0 }}>Réseau</span>
              <span className="g-h2">{d.installers.length} installateur{d.installers.length > 1 ? "s" : ""}</span>
              <span className="g-count">{active} actif{active > 1 ? "s" : ""} · {d.installers.length - active} en pause</span>
            </Link>
          </Reveal>
          <Reveal delay={0.16}>
            <Link href="/gestion/candidatures" className="g-inst">
              <span className="g-eyebrow" style={{ margin: 0 }}>Candidatures</span>
              <span className="g-h2">{d.newCandidatures} nouvelle{d.newCandidatures > 1 ? "s" : ""}</span>
              <span className="g-count">Reçues par la page Partenaires</span>
            </Link>
          </Reveal>
        </aside>
      </div>
    </>
  );
}
