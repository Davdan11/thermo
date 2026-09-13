/* État vide : jamais un tableau blanc. Arcs concentriques (ceux de la couverture du document de soumission), titre, action. */
import { cx } from "./format";

export function EmptyState({ title, body, action, icon, tone = "paper", compact = false }: { title: string; body?: React.ReactNode; action?: React.ReactNode; icon?: React.ReactNode; tone?: "paper" | "cream" | "ink"; compact?: boolean }) {
  return (
    <div className={cx("k-empty", `k-empty--${tone}`, compact && "k-empty--compact")}>
      <svg className="k-empty__arcs" viewBox="0 0 120 120" aria-hidden>
        <circle cx="60" cy="60" r="56" />
        <circle cx="60" cy="60" r="42" />
        <circle cx="60" cy="60" r="28" />
      </svg>
      {icon ? <span className="k-empty__icon" aria-hidden>{icon}</span> : null}
      <p className="k-empty__title">{title}</p>
      {body ? <p className="k-empty__body">{body}</p> : null}
      {action ? <div className="k-empty__action">{action}</div> : null}
    </div>
  );
}
