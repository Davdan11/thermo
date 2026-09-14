import type { ResolvedMinHeatingTemp } from "@/lib/thermomatch/min-temp-source";
import { minTempMention, minTempSourceHref } from "@/lib/thermomatch/min-temp-source";
import { GrowBar, Reveal } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE, ORANGE } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   ChauffeJusqua — « Chauffe jusqu'à −XX °C », en tête des feuilles de
   la fiche : l'argument de vente n° 1 au Québec.
   - Température connue (catalogue ou document du fabricant) : le
     chiffre en très grand, la mention de sa source en petit (publiée
     par le fabricant, ou fiche reproduite par un distributeur), la
     citation et le lien vers le document.
   - Inconnue mais certifiée ENERGY STAR climat froid : « Certifiée
     grand froid · chauffe encore à −15 °C », comme sur les cartes
     ThermoMatch ; jamais « jusqu'à −15 °C » (−15 °C est le point de
     mesure de la certification, pas une limite).
   - Sinon : rien (aucune valeur inventée, la fiche reste comme avant).
   Présentation : bandeau de la famille « fiche d'ingénierie » — filet
   d'encre, libellé en chasse fixe, jauge 0 → −40 °C qui se trace à
   l'entrée dans l'écran (Reveal et GrowBar : « réduire les animations »
   respecté, aucun filtre CSS). Chiffre en texte statique : le HTML
   serveur porte la valeur finale.
   ------------------------------------------------------------------ */

/** Point de mesure de la certification ENERGY STAR climat froid (5 °F). */
const CERTIF_C = -15;
/** Fondu sous −15 °C quand seule la certification est connue (°C d'échelle). */
const QUEUE_C = 6;

interface ChauffeJusquaProps {
  minTemp: ResolvedMinHeatingTemp | null;
  coldClimate: boolean;
}

/** « −30 » : vrai signe moins, une décimale seulement si la valeur en a une. */
const chiffre = (t: number) => `${t < 0 ? "−" : ""}${Math.abs(t).toLocaleString("fr-CA", { maximumFractionDigits: 1 })}`;

export function ChauffeJusqua({ minTemp, coldClimate }: ChauffeJusquaProps) {
  if (!minTemp && !coldClimate) return null;

  const t = minTemp?.valueC ?? null;
  // Échelle de 0 °C à −40 °C, prolongée par pas de 10 °C si la machine chauffe plus froid.
  const bas = Math.min(-40, Math.floor(((t ?? 0) - 1) / 10) * 10);
  const ticks = Array.from({ length: -bas / 10 + 1 }, (_, k) => -10 * k);
  const pct = ((t ?? CERTIF_C - QUEUE_C) / bas) * 100;
  // Certifiée seulement : barre d'encre jusqu'à −15 °C, puis un fondu (la limite n'est pas publiée).
  const certifFill = `linear-gradient(90deg, ${INK} 0%, ${INK} ${(CERTIF_C / (CERTIF_C - QUEUE_C)) * 100}%, rgba(18,20,23,0) 100%)`;
  const href = minTemp ? minTempSourceHref(minTemp.sourceFile) : null;
  const external = !!href && href.startsWith("https://");

  return (
    <section id="grand-froid" aria-labelledby="grand-froid-titre" style={{ scrollMarginTop: 110 }}>
      <div className="grid grid-cols-1 gap-7 py-6 sm:py-7 md:grid-cols-[minmax(0,auto)_minmax(0,1fr)] md:items-end md:gap-12" style={{ borderTop: `2px solid ${INK}`, borderBottom: `1px solid ${LINE}` }}>
        <div className="min-w-0">
          <Reveal as="p" y={0} className="sv2f-mono m-0 flex items-center gap-3 text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: LABEL }}>
            <span aria-hidden="true" className="block h-[9px] w-[9px]" style={{ background: ORANGE }} />
            Par grand froid
          </Reveal>

          {t !== null && minTemp ? (
            <>
              <Reveal y={18} delay={0.08}>
                <h2 id="grand-froid-titre" className="m-0 mt-3" style={{ fontWeight: 600, color: INK }}>
                  <span className="block text-[19px] sm:text-[22px]" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                    Chauffe jusqu’à
                  </span>{" "}
                  <span className="block tabular-nums" style={{ fontSize: "clamp(64px, 9vw, 112px)", lineHeight: 0.9, letterSpacing: "-0.055em", marginTop: 6 }}>
                    {chiffre(t)}
                    <span style={{ fontSize: "0.4em", fontWeight: 500, letterSpacing: "-0.01em" }}>{" °C"}</span>
                  </span>
                </h2>
              </Reveal>
              <Reveal as="p" y={0} delay={0.2} className="m-0 mt-3 max-w-[440px] text-[13px] leading-[1.5]" style={{ color: MUTE }}>
                {minTempMention(minTemp.sourceType)}
                {minTemp.confidence === "serie" ? " · valeur publiée pour l’ensemble de la série" : ""}
              </Reveal>
            </>
          ) : (
            <>
              <Reveal y={18} delay={0.08}>
                <h2 id="grand-froid-titre" className="m-0 mt-3" style={{ fontWeight: 600, color: INK, fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 0.98, letterSpacing: "-0.045em" }}>
                  Certifiée grand froid
                </h2>
              </Reveal>
              <Reveal as="p" y={0} delay={0.16} className="m-0 mt-3 text-[17px] font-semibold" style={{ color: INK, letterSpacing: "-0.015em" }}>
                Chauffe encore à −15 °C
              </Reveal>
              <Reveal as="p" y={0} delay={0.22} className="m-0 mt-1.5 max-w-[440px] text-[13px] leading-[1.5]" style={{ color: MUTE }}>
                Certification ENERGY STAR climat froid : chauffage mesuré à −15 °C. Température minimale de fonctionnement : sur la fiche du fabricant.
              </Reveal>
            </>
          )}
        </div>

        <div className="min-w-0">
          {/* Jauge (décor : la valeur est dans le titre). */}
          <div aria-hidden="true">
            <GrowBar pct={pct} color={t !== null ? ORANGE : certifFill} height={6} track={LINE} delay={0.25} />
            <div className="relative mt-2 h-4">
              {ticks.map((v, i) => (
                <span
                  key={v}
                  className="sv2f-mono absolute top-0 whitespace-nowrap text-[10.5px]"
                  style={{ left: `${(v / bas) * 100}%`, transform: i === 0 ? "none" : i === ticks.length - 1 ? "translateX(-100%)" : "translateX(-50%)", color: LABEL }}
                >
                  {v === 0 ? "0 °C" : chiffre(v)}
                </span>
              ))}
            </div>
          </div>

          {minTemp && (
            <Reveal as="p" y={0} delay={0.3} className="m-0 mt-5 text-[12.5px] leading-[1.55]" style={{ color: MUTE }}>
              {minTemp.origin === "document" && minTemp.quote ? (
                <>
                  Relevé : « {minTemp.quote} »{minTemp.page ? `, p. ${minTemp.page}` : ""}.
                  {href && (
                    <>
                      {" "}
                      <a
                        href={href}
                        className="sv2f-lnk font-semibold"
                        style={{ color: INK, textDecoration: "underline", textUnderlineOffset: 3, textDecorationThickness: 1 }}
                        {...(external ? { target: "_blank", rel: minTemp.sourceType === "secondaire" ? "noopener noreferrer nofollow" : "noopener noreferrer" } : { target: "_blank", rel: "noopener" })}
                      >
                        {minTemp.sourceType === "secondaire" ? "Voir la fiche reproduite" : "Voir le document du fabricant"}
                        <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
                      </a>
                    </>
                  )}
                </>
              ) : (
                "Valeur de la fiche technique du catalogue."
              )}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
