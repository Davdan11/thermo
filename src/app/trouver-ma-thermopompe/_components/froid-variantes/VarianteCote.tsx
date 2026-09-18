"use client";

/* ==================================================================
   Variante A — « La cote ». Parti pris : la typographie, et rien d'autre.

   Aucun filet, aucun encadré, aucune couleur : une étiquette minuscule
   en capitales espacées, puis le nombre, plus gros que le nom de la
   marque, posé sur la marge gauche de la carte. C'est le plus grand
   caractère de la carte qui fait la hiérarchie, pas une boîte colorée.
   De l'air au-dessus et au-dessous tient la zone à part sans la border.

   Règles de fond inchangées (ThermoMatchResults.tsx) : température
   publiée → le chiffre ; certifiée ENERGY STAR climat froid sans
   température → « Certifiée grand froid », jamais un chiffre de
   limite ; rien de publié → écrit tel quel.
   ================================================================== */

import { froidDe } from "../thermometre";
import { minTempMention } from "@/lib/thermomatch/min-temp-source";
import { R } from "../palette";
import { chiffre, fr, maintienPct, MOINS_15, MONO, UNITE, type FroidProps } from "./donnees";

export function VarianteCote({ minTemp, minTempSource, coldClimate, h5, h5Certified = true, retention, className }: FroidProps) {
  const froid = froidDe({ minTemp, coldClimate, h5 });

  return (
    <div data-froid={froid} data-variante="cote" className={className} style={{ paddingTop: 26, paddingBottom: 12 }}>
      <p className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", color: R.faint, margin: 0 }}>
        {froid === "publiee" ? "Chauffe jusqu’à" : "Par grand froid"}
      </p>

      {froid === "publiee" && minTemp != null && (
        <p
          className="tabular-nums"
          style={{ fontSize: "clamp(76px, 20vw, 104px)", fontWeight: 600, letterSpacing: "-0.065em", lineHeight: 0.8, color: R.ink, margin: "18px 0 0", whiteSpace: "nowrap" }}
        >
          {chiffre(minTemp)}
          <span style={UNITE}>{"°C"}</span>
        </p>
      )}

      {froid === "certifiee" && (
        <>
          <p style={{ fontSize: "clamp(40px, 10vw, 52px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 0.88, color: R.ink, margin: "18px 0 0" }}>
            Certifiée
            <br />
            grand froid
          </p>
          <p className="text-[15px] font-semibold" style={{ color: R.ink, margin: "16px 0 0" }}>
            Chauffe encore à {MOINS_15}
          </p>
        </>
      )}

      {(froid === "mesuree" || froid === "aucune") && (
        <p style={{ fontSize: "clamp(30px, 7.6vw, 40px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.95, color: R.ink, margin: "18px 0 0" }}>
          Température minimale non publiée
        </p>
      )}

      <p className="text-[12px] leading-snug" style={{ color: R.dim, margin: "18px 0 0", maxWidth: "30em" }}>
        {froid === "publiee"
          ? minTempMention(minTempSource)
          : froid === "certifiee"
            ? `Certification ENERGY STAR climat froid : ${MOINS_15} est son point de mesure, pas sa limite. Température minimale non publiée par le fabricant.`
            : "Le fabricant ne publie pas jusqu’à quel froid cette machine chauffe, et elle n’a pas la certification ENERGY STAR climat froid. Nous l’écrivons plutôt que d’avancer un chiffre."}
      </p>

      {(h5 != null || retention != null) && (
        <p className="tabular-nums" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.02em", color: R.dim, margin: "12px 0 0", lineHeight: 1.7 }}>
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
