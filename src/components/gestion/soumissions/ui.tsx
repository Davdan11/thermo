/* Petits éléments (serveur) du créateur de soumissions. */
import Link from "next/link";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import type { CheckItem } from "@/lib/soumissions/checklist";
import { STATUS_LABELS, type EffectiveStatus } from "@/lib/soumissions/types";

export function QuoteStatus({ status }: { status: EffectiveStatus }) {
  return <span className={`sq-pill sq-pill--${status}`}>{STATUS_LABELS[status]}</span>;
}

/** Liste de vérification groupée ; `onlyOpen` n'affiche que ce qui reste à faire. */
export function Checklist({ items, onlyOpen = false }: { items: CheckItem[]; onlyOpen?: boolean }) {
  const shown = onlyOpen ? items.filter((i) => !i.ok) : items;
  const groups = [...new Set(shown.map((i) => i.group))];
  if (!shown.length) return <p className="g-hint">Tout est en ordre.</p>;
  return (
    <div>
      {groups.map((g) => (
        <div key={g}>
          <p className="sq-group">{g}</p>
          <ul className="sq-checks">
            {shown
              .filter((i) => i.group === g)
              .map((i) => (
                <li key={i.id}>
                  {i.ok ? <CheckCircle2 size={18} className="is-ok" aria-label="Fait" /> : i.severity === "bloquant" ? <XCircle size={18} className="is-bad" aria-label="Bloquant" /> : <AlertTriangle size={18} className="is-warn" aria-label="À vérifier" />}
                  <span>
                    {i.href && !i.ok ? (i.href.startsWith("http") ? <a href={i.href} target="_blank" rel="noreferrer">{i.label}</a> : <Link href={i.href}>{i.label}</Link>) : i.label}
                    {!i.ok && i.hint ? <small>{i.hint}</small> : null}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
