import type { EditorialContent } from "@/lib/data/types";

/* ------------------------------------------------------------------
   ProsConsSection — editorial strengths and considerations
   ------------------------------------------------------------------ */

interface ProsConsSectionProps {
  editorial: EditorialContent;
}

export function ProsConsSection({ editorial }: ProsConsSectionProps) {
  const hasPros = editorial.pros && editorial.pros.length > 0;
  const hasCons = editorial.cons && editorial.cons.length > 0;

  if (!hasPros && !hasCons) return null;

  return (
    <section id="points" aria-labelledby="points-title">
      <h2 id="points-title" className="text-xl font-bold text-foreground mb-4">
        Points forts et points à considérer
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {hasPros && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Points forts</h3>
            <ul className="space-y-2">
              {editorial.pros!.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-success shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <polyline points="3.5 8 6.5 11 12.5 5" />
                  </svg>
                  <span className="text-foreground">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {hasCons && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Points à considérer</h3>
            <ul className="space-y-2">
              {editorial.cons!.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-warning shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="8" cy="8" r="5" />
                    <line x1="8" y1="5.5" x2="8" y2="8.5" />
                    <circle cx="8" cy="10.5" r="0.5" fill="currentColor" />
                  </svg>
                  <span className="text-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
