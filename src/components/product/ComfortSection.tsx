import type { SystemConfiguration } from "@/lib/data/types";

/* ------------------------------------------------------------------
   ComfortSection — noise levels with accessible explanation
   ------------------------------------------------------------------ */

interface ComfortSectionProps {
  configuration: SystemConfiguration;
}

export function ComfortSection({ configuration }: ComfortSectionProps) {
  const { noiseIndoorMinDbA, noiseIndoorMaxDbA, noiseOutdoorDbA } = configuration;

  const hasIndoor = noiseIndoorMinDbA != null;
  const hasOutdoor = noiseOutdoorDbA != null;

  if (!hasIndoor && !hasOutdoor) return null;

  return (
    <section id="confort" aria-labelledby="confort-title">
      <h2 id="confort-title" className="text-xl font-bold text-foreground mb-4">
        Confort et niveau sonore
      </h2>

      <dl className="space-y-4">
        {hasIndoor && (
          <div>
            <dt className="text-sm font-medium text-foreground">Unité intérieure</dt>
            <dd className="text-sm text-muted mt-0.5">
              {noiseIndoorMinDbA != null && noiseIndoorMaxDbA != null ? (
                <span className="text-foreground font-medium">
                  {noiseIndoorMinDbA} à {noiseIndoorMaxDbA} dB(A)
                </span>
              ) : noiseIndoorMinDbA != null ? (
                <span className="text-foreground font-medium">
                  à partir de {noiseIndoorMinDbA} dB(A)
                </span>
              ) : null}
              <span className="block mt-1 text-xs text-muted">
                Le niveau varie selon la vitesse de ventilation sélectionnée.
                {noiseIndoorMinDbA != null && noiseIndoorMinDbA <= 25 && (
                  " À la vitesse minimale, le niveau est comparable au bruit ambiant d'une pièce calme."
                )}
              </span>
            </dd>
          </div>
        )}

        {hasOutdoor && (
          <div>
            <dt className="text-sm font-medium text-foreground">Unité extérieure</dt>
            <dd className="text-sm text-muted mt-0.5">
              <span className="text-foreground font-medium">{noiseOutdoorDbA} dB(A)</span>
              <span className="block mt-1 text-xs text-muted">
                Mesuré dans des conditions standard. Le bruit perçu peut varier selon l&apos;emplacement et l&apos;environnement.
              </span>
            </dd>
          </div>
        )}
      </dl>
    </section>
  );
}
