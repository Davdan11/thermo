"use client";

/* ==================================================================
   Variante A — « La cote ».

   Traitement typographique pur, sans panneau ni jauge : un filet de
   tête, une étiquette en capitales espacées à chasse fixe, le nombre
   posé sur la marge gauche de la carte (même grille que le nom du
   modèle), l'unité en petit, un trait orange de la largeur du nombre,
   puis la source. La température reste l'élément le plus visible de la
   carte parce qu'elle est le plus gros caractère, pas parce qu'elle est
   enfermée dans une boîte colorée.

   Règles de fond inchangées (ThermoMatchResults.tsx) : température
   publiée → le chiffre ; certifiée ENERGY STAR climat froid sans
   température → « Certifiée grand froid », jamais un chiffre de
   limite ; rien de publié → écrit tel quel.
   ================================================================== */

import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { froidDe } from "../thermometre";
import { minTempMention } from "@/lib/thermomatch/min-temp-source";
import { R } from "../palette";
import { chiffre, fr, maintienPct, MOINS_15, MONO, UNITE, type FroidProps } from "./donnees";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Filet({ color, play, delay = 0, epaisseur = 1 }: { color: string; play: boolean; delay?: number; epaisseur?: number }) {
  const reduce = useReduced();
  return (
    <motion.span
      aria-hidden="true"
      className="block w-full"
      style={{ height: epaisseur, background: color, transformOrigin: "left" }}
      initial={reduce ? false : { scaleX: 0 }}
      animate={play || reduce ? { scaleX: 1 } : undefined}
      transition={{ duration: 1, ease: EASE, delay }}
    />
  );
}

export function VarianteCote({ minTemp, minTempSource, coldClimate, h5, h5Certified = true, retention, play = true, className }: FroidProps) {
  const froid = froidDe({ minTemp, coldClimate, h5 });

  const etiquette = (
    <p
      className="uppercase"
      style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.2em", color: R.faint, margin: "14px 0 0" }}
    >
      {froid === "publiee" ? "Chauffe jusqu’à" : "Par grand froid"}
    </p>
  );

  return (
    <div data-froid={froid} className={className}>
      <Filet color={R.ink} play={play} />
      {etiquette}

      {froid === "publiee" && minTemp != null && (
        <>
          <p
            className="tabular-nums"
            style={{ fontSize: "clamp(62px, 16vw, 78px)", fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 0.82, color: R.ink, margin: "16px 0 0", whiteSpace: "nowrap" }}
          >
            {chiffre(minTemp)}
            <span style={UNITE}>{"°C"}</span>
          </p>
          <span className="mt-4 block" style={{ width: "2.05em", fontSize: "clamp(62px, 16vw, 78px)" }}>
            <Filet color={R.orange} play={play} delay={0.35} epaisseur={2} />
          </span>
        </>
      )}

      {froid === "certifiee" && (
        <>
          <p style={{ fontSize: "clamp(30px, 7.4vw, 38px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95, color: R.ink, margin: "16px 0 0" }}>
            Certifiée
            <br />
            grand froid
          </p>
          <span className="mt-4 block" style={{ width: 96 }}>
            <Filet color={R.orange} play={play} delay={0.35} epaisseur={2} />
          </span>
          <p className="text-[15px] font-semibold" style={{ color: R.ink, margin: "14px 0 0" }}>
            Chauffe encore à {MOINS_15}
          </p>
        </>
      )}

      {(froid === "mesuree" || froid === "aucune") && (
        <>
          <p style={{ fontSize: "clamp(25px, 6vw, 31px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, color: R.ink, margin: "16px 0 0" }}>
            Température minimale non publiée
          </p>
          <span className="mt-4 block" style={{ width: 96 }}>
            <Filet color={R.line} play={play} delay={0.35} epaisseur={2} />
          </span>
        </>
      )}

      <p className="text-[12px] leading-snug" style={{ color: R.dim, margin: "12px 0 0", maxWidth: "30em" }}>
        {froid === "publiee"
          ? minTempMention(minTempSource)
          : froid === "certifiee"
            ? `Certification ENERGY STAR climat froid : ${MOINS_15} est son point de mesure, pas sa limite. Température minimale non publiée par le fabricant.`
            : "Le fabricant ne publie pas jusqu’à quel froid cette machine chauffe, et elle n’a pas la certification ENERGY STAR climat froid. Nous l’écrivons plutôt que d’avancer un chiffre."}
      </p>

      {(h5 != null || retention != null) && (
        <p
          className="tabular-nums"
          style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.02em", color: R.dim, margin: "14px 0 0", lineHeight: 1.7 }}
        >
          {h5 != null && (
            <>
              {fr(h5)} BTU/h à {MOINS_15}
              {h5Certified ? "" : " (estimé)"}
            </>
          )}
          {h5 != null && retention != null && <span style={{ color: R.line }}> · </span>}
          {retention != null && <>{maintienPct(retention)} % de la puissance nominale</>}
        </p>
      )}
    </div>
  );
}
