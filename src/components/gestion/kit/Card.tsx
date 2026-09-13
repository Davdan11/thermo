/* Carte du kit : surface papier, titre en police d'affichage, action à droite. Composant serveur. */
import { cx } from "./format";

export function Card({
  title,
  sub,
  action,
  children,
  className,
  tone = "paper",
  id,
  pad = true,
}: {
  title?: React.ReactNode;
  sub?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  tone?: "paper" | "ink" | "cream" | "orange";
  id?: string;
  pad?: boolean;
}) {
  return (
    <section id={id} className={cx("k-card", `k-card--${tone}`, pad && "k-card--pad", className)}>
      {title || action ? (
        <header className="k-card__head">
          <div style={{ minWidth: 0 }}>
            {title ? <h3 className="k-card__title">{title}</h3> : null}
            {sub ? <p className="k-card__sub">{sub}</p> : null}
          </div>
          {action ? <div className="k-card__action">{action}</div> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}

/** En-tête de section numéroté, comme les chapitres du document de soumission : « 01 · À faire aujourd'hui ». */
export function SectionHeader({ n, eyebrow, title, accent, lead, action, id }: { n?: string; eyebrow?: string; title: React.ReactNode; accent?: string; lead?: React.ReactNode; action?: React.ReactNode; id?: string }) {
  return (
    <div className="k-section" id={id}>
      <div style={{ minWidth: 0 }}>
        {n || eyebrow ? (
          <p className="k-eyebrow">
            {n ? <span className="k-eyebrow__n">{n}</span> : null}
            {eyebrow}
          </p>
        ) : null}
        <h2 className="k-h2">
          {title}
          {accent ? <em> {accent}</em> : null}
        </h2>
        {lead ? <p className="k-lead">{lead}</p> : null}
      </div>
      {action ? <div className="k-section__action">{action}</div> : null}
    </div>
  );
}
