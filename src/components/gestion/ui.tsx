/* Petits éléments partagés (serveur) de l'outil de gestion. */
import { JOB_STATUS_LABELS, type JobStatus } from "@/lib/gestion/types";

export function Mark({ sub = "Gestion" }: { sub?: string }) {
  return (
    <div className="g-panel__mark">
      <span className="g-brand__dot" aria-hidden />
      <span>Thermopompes À Vendre</span>
      <span style={{ color: "var(--g-faint)", fontWeight: 450 }}>· {sub}</span>
    </div>
  );
}

export function StatusPill({ status }: { status: JobStatus }) {
  return <span className={`g-pill g-pill--${status}`}>{JOB_STATUS_LABELS[status]}</span>;
}

export function BrandLogo({ name, logo, className }: { name: string; logo: string | null; className?: string }) {
  if (!logo) return <span className="g-brand-chip__mono">{name}</span>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={logo} alt={name} className={className} loading="lazy" decoding="async" />;
}
