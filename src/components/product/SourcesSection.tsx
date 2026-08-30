import type { SourceReference } from "@/lib/data/types";

/* ------------------------------------------------------------------
   SourcesSection — public sources without internal notes
   ------------------------------------------------------------------ */

interface SourcesSectionProps {
  sources: SourceReference[];
}

const CONFIDENCE_LABELS: Record<string, string> = {
  verified: "Vérifié",
  manufacturer_claim: "Déclaration du fabricant",
  placeholder: "À vérifier",
};

export function SourcesSection({ sources }: SourcesSectionProps) {
  if (sources.length === 0) return null;

  return (
    <section id="sources" aria-labelledby="sources-title">
      <h2 id="sources-title" className="text-xl font-bold text-foreground mb-2">
        Sources et vérification
      </h2>
      <p className="text-sm text-muted mb-4">
        Les informations affichées sur cette fiche proviennent des sources suivantes.
      </p>
      <ul className="space-y-3">
        {sources.map((src) => (
          <li key={src.id} className="text-sm">
            <p className="font-medium text-foreground">{src.title}</p>
            {src.organization && (
              <p className="text-muted text-xs mt-0.5">{src.organization}</p>
            )}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-muted">
              <span>
                Consulté le {new Date(src.consultedAt).toLocaleDateString("fr-CA", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>{CONFIDENCE_LABELS[src.confidence] ?? src.confidence}</span>
            </div>
            {src.url && (
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand hover:underline mt-1 inline-block"
              >
                Voir la source
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
