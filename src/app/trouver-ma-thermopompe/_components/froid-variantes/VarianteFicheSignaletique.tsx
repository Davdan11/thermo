"use client";

/* ==================================================================
   Variante C — « La fiche signalétique ».

   Ce que le fabricant visse sur la machine : des lignes, pas une boîte.
   Étiquette à gauche, valeur alignée à droite, filets d'un cheveu entre
   les lignes, aucun fond, aucun coin arrondi. La première ligne est la
   température, et sa valeur est le plus gros caractère de la carte ;
   les autres lignes descendent en taille, comme sur une plaque
   signalétique ou un tableau de spécifications.

   Les trois cas de la carte en production sont gardés mot pour mot :
   une valeur qui n'existe pas n'est jamais remplacée par une autre.
   ================================================================== */

import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { froidDe } from "../thermometre";
import { minTempMention } from "@/lib/thermomatch/min-temp-source";
import { R } from "../palette";
import { chiffre, fr, maintienPct, MOINS_15, MONO, UNITE, type FroidProps } from "./donnees";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Ligne({ etiquette, children, filet = true }: { etiquette: string; children: React.ReactNode; filet?: boolean }) {
  return (
    <div
      className="flex items-baseline justify-between gap-4"
      style={{ padding: "9px 0", borderBottom: filet ? `1px solid ${R.hair}` : "none" }}
    >
      <span className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", color: R.faint, whiteSpace: "nowrap" }}>
        {etiquette}
      </span>
      <span className="tabular-nums text-right text-[13px] font-semibold" style={{ color: R.ink }}>
        {children}
      </span>
    </div>
  );
}

export function VarianteFicheSignaletique({ minTemp, minTempSource, coldClimate, h5, h5Certified = true, retention, play = true, className }: FroidProps) {
  const reduce = useReduced();
  const froid = froidDe({ minTemp, coldClimate, h5 });

  return (
    <div data-froid={froid} className={className}>
      {/* Filet de tête, avec l'amorce orange de la marque : la seule couleur du bloc. */}
      <div className="flex" style={{ height: 2 }}>
        <motion.span
          aria-hidden="true"
          style={{ width: 44, background: R.orange, transformOrigin: "left" }}
          initial={reduce ? false : { scaleX: 0 }}
          animate={play || reduce ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.5, ease: EASE }}
        />
        <motion.span
          aria-hidden="true"
          className="flex-1"
          style={{ height: 1, marginTop: 1, background: R.ink, transformOrigin: "left" }}
          initial={reduce ? false : { scaleX: 0 }}
          animate={play || reduce ? { scaleX: 1 } : undefined}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        />
      </div>

      {/* Ligne vedette : l'étiquette tient la marge gauche, la valeur tombe à droite. */}
      <div
        className="flex items-baseline justify-between gap-3"
        style={{ padding: "26px 0 14px", borderBottom: `1px solid ${R.line}` }}
      >
        <span className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", color: R.faint, whiteSpace: "nowrap" }}>
          {froid === "publiee" ? "Chauffe jusqu’à" : "Grand froid"}
        </span>

        {froid === "publiee" && minTemp != null && (
          <span
            className="tabular-nums"
            style={{ fontSize: "clamp(48px, 12vw, 60px)", fontWeight: 600, letterSpacing: "-0.055em", lineHeight: 0.82, color: R.ink, whiteSpace: "nowrap" }}
          >
            {chiffre(minTemp)}
            <span style={UNITE}>{"°C"}</span>
          </span>
        )}
        {froid === "certifiee" && (
          <span style={{ fontSize: "clamp(24px, 5.8vw, 30px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, color: R.ink, textAlign: "right" }}>
            Certifiée
            <br />
            grand froid
          </span>
        )}
        {(froid === "mesuree" || froid === "aucune") && (
          <span style={{ fontSize: "clamp(20px, 5vw, 25px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.1, color: R.ink, textAlign: "right" }}>
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
      {retention != null && <Ligne etiquette="Maintien de puissance" filet={false}>{maintienPct(retention)} %</Ligne>}

      {/* Pied de plaque : d'où vient la température, en toutes lettres et une seule fois. */}
      <div className="grid grid-cols-[62px_1fr] gap-3" style={{ borderTop: `1px solid ${R.line}`, paddingTop: 10, marginTop: 2 }}>
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
