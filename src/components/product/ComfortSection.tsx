import type { SystemConfiguration } from "@/lib/data/types";
import { NoiseScale } from "@/components/sections-v2/produit/charts";
import { Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   ComfortSection — noise levels with accessible explanation
   Présentation : feuille « Acoustique » — une règle graduée en dB(A)
   où se posent la plage intérieure et le repère extérieur.
   ------------------------------------------------------------------ */

interface ComfortSectionProps {
  configuration: SystemConfiguration;
}

const fr = (n: number) => n.toLocaleString("fr-CA");

export function ComfortSection({ configuration }: ComfortSectionProps) {
  const { noiseIndoorMinDbA, noiseIndoorMaxDbA, noiseOutdoorDbA } = configuration;

  const hasIndoor = noiseIndoorMinDbA != null;
  const hasOutdoor = noiseOutdoorDbA != null;

  if (!hasIndoor && !hasOutdoor) return null;

  const figure = "sv2f-mono block text-[22px] sm:text-[26px]";

  return (
    <section id="confort" aria-labelledby="confort-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead id="confort-title" kicker="Acoustique" title="Confort et niveau sonore" />

      <div className="mt-9 px-1">
        <NoiseScale inMin={noiseIndoorMinDbA ?? null} inMax={noiseIndoorMaxDbA ?? null} out={noiseOutdoorDbA ?? null} />
      </div>

      <dl className={`m-0 mt-6 grid grid-cols-1 ${hasIndoor && hasOutdoor ? "sm:grid-cols-2" : ""}`} style={{ borderTop: `1px solid ${INK}` }}>
        {hasIndoor && (
          <Reveal className="py-5 pl-3 pr-6" style={{ borderBottom: `1px solid ${LINE}` }}>
            <dt className="sv2f-mono text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
              Unité intérieure
            </dt>
            <dd className="m-0 mt-2">
              {noiseIndoorMinDbA != null && noiseIndoorMaxDbA != null ? (
                <span className={figure} style={{ color: INK, fontWeight: 500, letterSpacing: "-0.04em" }}>
                  {fr(noiseIndoorMinDbA)} à {fr(noiseIndoorMaxDbA)} dB(A)
                </span>
              ) : noiseIndoorMinDbA != null ? (
                <span className={figure} style={{ color: INK, fontWeight: 500, letterSpacing: "-0.04em" }}>
                  à partir de {fr(noiseIndoorMinDbA)} dB(A)
                </span>
              ) : null}
              <span className="mt-2 block max-w-[440px] text-[13.5px] leading-[1.55]" style={{ color: MUTE }}>
                Le niveau varie selon la vitesse de ventilation sélectionnée.
                {noiseIndoorMinDbA != null && noiseIndoorMinDbA <= 25 && " À la vitesse minimale, le niveau est comparable au bruit ambiant d'une pièce calme."}
              </span>
            </dd>
          </Reveal>
        )}

        {hasOutdoor && (
          <Reveal delay={0.1} className={`py-5 pl-3 pr-6 ${hasIndoor ? "sm:border-l sm:pl-6" : ""}`} style={{ borderBottom: `1px solid ${LINE}`, borderColor: LINE }}>
            <dt className="sv2f-mono text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
              Unité extérieure
            </dt>
            <dd className="m-0 mt-2">
              <span className={figure} style={{ color: INK, fontWeight: 500, letterSpacing: "-0.04em" }}>
                {fr(noiseOutdoorDbA!)} dB(A)
              </span>
              <span className="mt-2 block max-w-[440px] text-[13.5px] leading-[1.55]" style={{ color: MUTE }}>
                Mesuré dans des conditions standard. Le bruit perçu peut varier selon l&apos;emplacement et l&apos;environnement.
              </span>
            </dd>
          </Reveal>
        )}
      </dl>
    </section>
  );
}
