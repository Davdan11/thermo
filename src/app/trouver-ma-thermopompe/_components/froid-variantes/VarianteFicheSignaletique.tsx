"use client";

/* ==================================================================
   Variante C — « La plaque signalétique ». Parti pris : une plaque
   vissée en travers de la carte.

   Un aplat légèrement teinté qui va d'un bord à l'autre de la carte,
   à angles vifs, tenu par un filet en haut et un filet en bas : ni
   panneau arrondi flottant, ni ombre. Dedans, la grammaire d'un
   tableau de spécifications : étiquette à chasse fixe à gauche, valeur
   alignée à droite, filets d'un cheveu entre les lignes. La première
   ligne est la température, et sa valeur est le plus gros caractère de
   la plaque.

   Les trois cas de la carte en production sont gardés mot pour mot :
   une valeur qui n'existe pas n'est jamais remplacée par une autre.
   ================================================================== */

import { froidDe } from "../thermometre";
import { minTempMention } from "@/lib/thermomatch/min-temp-source";
import { R } from "../palette";
import { chiffre, fr, maintienPct, MOINS_15, MONO, UNITE, type FroidProps } from "./donnees";

/** Aplat de la plaque : le crème de la marque, assombri juste assez pour se détacher du blanc de la carte. */
const PLAQUE = "#F1EDE5";
/** Filet intérieur de la plaque (un cheveu, plus sombre que sur blanc pour rester visible sur l'aplat). */
const FILET = "rgba(12,24,33,0.14)";

function Ligne({ etiquette, children, filet = true }: { etiquette: string; children: React.ReactNode; filet?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4" style={{ padding: "9px 0", borderBottom: filet ? `1px solid ${FILET}` : "none" }}>
      <span className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", color: R.faint, whiteSpace: "nowrap" }}>
        {etiquette}
      </span>
      <span className="tabular-nums text-right text-[13px] font-semibold" style={{ color: R.ink }}>
        {children}
      </span>
    </div>
  );
}

export function VarianteFicheSignaletique({ minTemp, minTempSource, coldClimate, h5, h5Certified = true, retention, className }: FroidProps) {
  const froid = froidDe({ minTemp, coldClimate, h5 });

  return (
    <div
      data-froid={froid}
      data-variante="plaque"
      /* Pleine largeur de la carte : la plaque traverse, elle ne flotte pas dedans. */
      className={`-mx-6 mt-5 px-6 sm:-mx-7 sm:px-7 ${className ?? ""}`}
      style={{ background: PLAQUE, borderTop: `1px solid ${R.ink}`, borderBottom: `1px solid ${R.ink}`, paddingTop: 16, paddingBottom: 16 }}
    >
      {/* Ligne vedette : l'étiquette tient la marge gauche, la valeur tombe à droite. */}
      <div className="flex items-baseline justify-between gap-3" style={{ paddingBottom: 12, borderBottom: `1px solid ${FILET}` }}>
        <span className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", color: R.faint, whiteSpace: "nowrap" }}>
          {froid === "publiee" ? "Chauffe jusqu’à" : "Grand froid"}
        </span>

        {froid === "publiee" && minTemp != null && (
          <span
            className="tabular-nums"
            style={{ fontSize: "clamp(50px, 12.5vw, 64px)", fontWeight: 600, letterSpacing: "-0.058em", lineHeight: 0.8, color: R.ink, whiteSpace: "nowrap" }}
          >
            {chiffre(minTemp)}
            <span style={UNITE}>{"°C"}</span>
          </span>
        )}
        {froid === "certifiee" && (
          <span style={{ fontSize: "clamp(25px, 6vw, 31px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, color: R.ink, textAlign: "right" }}>
            Certifiée
            <br />
            grand froid
          </span>
        )}
        {(froid === "mesuree" || froid === "aucune") && (
          <span style={{ fontSize: "clamp(21px, 5.2vw, 26px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.1, color: R.ink, textAlign: "right" }}>
            Non publiée
          </span>
        )}
      </div>

      {/* La ligne « chauffe encore à −15 °C » ne sert que si la chaleur livrée à −15 °C n'est pas publiée. */}
      {froid === "certifiee" && h5 == null && <Ligne etiquette="Chauffe encore à">{MOINS_15}</Ligne>}
      {h5 != null && (
        <Ligne etiquette={`Chaleur à ${MOINS_15}`}>
          {fr(h5)} BTU/h{h5Certified ? "" : " (estimé)"}
        </Ligne>
      )}
      {retention != null && (
        <Ligne etiquette="Maintien de puissance" filet={false}>
          {maintienPct(retention)} %
        </Ligne>
      )}

      {/* Pied de plaque : d'où vient la température, en toutes lettres et une seule fois. */}
      <div className="grid grid-cols-[58px_1fr] gap-3" style={{ borderTop: `1px solid ${FILET}`, paddingTop: 10, marginTop: 2 }}>
        <span className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", color: R.faint, lineHeight: 1.5 }}>
          Source
        </span>
        <p className="text-[12px] leading-snug" style={{ color: R.dim, margin: 0 }}>
          {froid === "publiee"
            ? minTempMention(minTempSource)
            : froid === "certifiee"
              ? `Certification ENERGY STAR climat froid. ${MOINS_15} est son point de mesure, pas la limite de la machine : le fabricant ne publie pas sa température minimale.`
              : "Aucune. Le fabricant ne publie pas jusqu’à quel froid cette machine chauffe, et elle n’a pas la certification ENERGY STAR climat froid. Nous l’écrivons plutôt que d’avancer un chiffre."}
        </p>
      </div>
    </div>
  );
}
