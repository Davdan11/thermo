import type { SourceReference } from "@/lib/data/types";
import { ExternalArrow, Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   SourcesSection — public sources without internal notes
   Présentation : feuille « Références », numérotées [1], [2]…
   ------------------------------------------------------------------ */

interface SourcesSectionProps {
  sources: SourceReference[];
}

const CONFIDENCE_LABELS: Record<string, string> = {
  verified: "Vérifié",
  manufacturer_claim: "Déclaration du fabricant",
  estimated: "Estimation",
  placeholder: "À vérifier",
  needs_review: "À vérifier",
  deprecated: "Obsolète",
};

export function SourcesSection({ sources }: SourcesSectionProps) {
  if (sources.length === 0) return null;

  return (
    <section id="sources" aria-labelledby="sources-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead id="sources-title" kicker="Références" title="Sources et vérification" lead="Les informations affichées sur cette fiche proviennent des sources suivantes." />
      <ol className="m-0 mt-7 list-none p-0" style={{ borderTop: `1px solid ${INK}` }}>
        {sources.map((src, i) => (
          <Reveal as="li" key={src.id} delay={0.06 * i} y={8} className="sv2f-tr grid grid-cols-[40px_minmax(0,1fr)] gap-3 py-4 pl-3 pr-2" style={{ borderBottom: `1px solid ${LINE}` }}>
            <span aria-hidden="true" className="sv2f-mono pt-0.5 text-[12px]" style={{ color: LABEL }}>
              [{i + 1}]
            </span>
            <div className="min-w-0">
              <p className="m-0 text-[15px] font-semibold leading-snug" style={{ color: INK, overflowWrap: "anywhere" }}>
                {src.title}
              </p>
              {src.organization && (
                <p className="m-0 mt-0.5 text-[13px]" style={{ color: MUTE }}>
                  {src.organization}
                </p>
              )}
              <div className="sv2f-mono mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px]" style={{ color: LABEL }}>
                <span>
                  Consulté le{" "}
                  {new Date(src.consultedAt).toLocaleDateString("fr-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span aria-hidden="true">·</span>
                <span className="px-1.5 py-0.5" style={{ border: `1px solid ${LINE}`, color: INK }}>
                  {CONFIDENCE_LABELS[src.confidence] ?? src.confidence}
                </span>
              </div>
              {src.url && (
                <a href={src.url} target="_blank" rel="noopener noreferrer" className="sv2f-lnk mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: INK }}>
                  <span className="sv2f-lnk-t">Voir la source</span>
                  <ExternalArrow />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
