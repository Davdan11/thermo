import type { SourceReference } from "@/lib/data/types";

/* ------------------------------------------------------------------
   BrandSourcesSection — sources linked to a brand
   ------------------------------------------------------------------ */

interface BrandSourcesSectionProps {
  sources: SourceReference[];
  brandName: string;
}

export function BrandSourcesSection({ sources, brandName }: BrandSourcesSectionProps) {
  if (sources.length === 0) return null;

  const cleanName = brandName.replace(" [DEV]", "");

  return (
    <section id="sources" aria-labelledby="sources-title">
      <h2 id="sources-title" className="text-lg font-bold text-foreground mb-3">
        Sources
      </h2>
      <p className="text-xs text-muted mb-3">
        Sources consultées pour les données de {cleanName} dans ce catalogue.
      </p>
      <ul className="space-y-2">
        {sources.map((source) => (
          <li
            key={source.id}
            className="p-3 bg-surface rounded-lg border border-border text-sm"
          >
            <p className="font-medium text-foreground">{source.title}</p>
            {source.organization && (
              <p className="text-xs text-muted mt-0.5">{source.organization}</p>
            )}
            <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted">
              {source.consultedAt && (
                <span>
                  Consulté : {new Date(source.consultedAt).toLocaleDateString("fr-CA")}
                </span>
              )}
              {source.confidence && source.confidence !== "placeholder" && (
                <span>Confiance : {source.confidence}</span>
              )}
            </div>
            {source.url && (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand hover:text-brand-hover transition-colors mt-1 inline-block"
              >
                Consulter la source →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
