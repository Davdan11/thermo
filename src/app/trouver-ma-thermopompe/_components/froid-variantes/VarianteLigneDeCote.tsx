"use client";

/* ==================================================================
   Variante B — « La ligne de cote ». Parti pris : un dessin technique.

   La température est cotée comme sur un plan : deux lignes d'attache
   verticales, une ligne de cote fléchée entre 0 °C et la température
   publiée, la valeur écrite au-dessus de cette ligne, une règle
   graduée au degré dessous et ses repères chiffrés. Aucun dégradé,
   aucun remplissage, aucune pastille : uniquement du trait.

   Ce que le dessin dit, et qu'une barre de progression ne disait pas :
   - température publiée : la cote est fléchée aux deux bouts, fermée ;
   - certifiée ENERGY STAR climat froid : elle part de 0 °C et s'ouvre
     en tirets après le point de mesure (−15 °C) — la limite n'est pas
     publiée, la cote ne se ferme donc sur rien ;
   - rien de publié : la règle seule, en pointillé, sans cote.
   ================================================================== */

import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { froidDe } from "../thermometre";
import { minTempMention } from "@/lib/thermomatch/min-temp-source";
import { R } from "../palette";
import { basDeLechelle, chiffre, fr, maintienPct, MOINS_15, MONO, UNITE, type FroidProps } from "./donnees";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
/** Point de mesure de la certification ENERGY STAR climat froid. */
const CERTIF = -15;
/** Hauteur du dessin : ligne de cote en haut, règle graduée en bas. */
const COTE_Y = 0;
const REGLE_Y = 26;

/** Flèche de cote (pointe vers l'extérieur, comme sur un plan). */
function Fleche({ x, sens, color }: { x: string; sens: "gauche" | "droite"; color: string }) {
  return (
    <span
      aria-hidden="true"
      className="absolute"
      style={{
        left: x,
        top: COTE_Y - 4,
        width: 8,
        height: 8,
        background: color,
        transform: sens === "gauche" ? "translateX(0)" : "translateX(-100%)",
        clipPath: sens === "gauche" ? "polygon(0 50%, 100% 0, 100% 100%)" : "polygon(100% 50%, 0 0, 0 100%)",
      }}
    />
  );
}

/** Ligne d'attache : le trait vertical fin qui descend de la cote jusqu'à la règle. */
function Attache({ x, color }: { x: string; color: string }) {
  return <span aria-hidden="true" className="absolute" style={{ left: x, top: COTE_Y - 5, height: REGLE_Y + 11, width: 1, background: color, transform: "translateX(-0.5px)" }} />;
}

export function VarianteLigneDeCote({ minTemp, minTempSource, coldClimate, h5, h5Certified = true, retention, play = true, className }: FroidProps) {
  const reduce = useReduced();
  const froid = froidDe({ minTemp, coldClimate, h5 });
  const bas = basDeLechelle(minTemp);
  // 0 °C à gauche, le plus froid à droite : le même sens que la jauge et le thermomètre du haut.
  const pos = (t: number) => `${(Math.min(0, Math.max(bas, t)) / bas) * 100}%`;
  const cote = froid === "publiee" && minTemp != null ? minTemp : froid === "certifiee" ? CERTIF : null;
  const pct = cote != null ? (cote / bas) * 100 : 0;
  const graduations = Array.from({ length: -bas + 1 }, (_, k) => -k);

  return (
    <div data-froid={froid} data-variante="ligne-de-cote" className={className} style={{ paddingTop: 20, paddingBottom: 6 }}>
      <p className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", color: R.faint, margin: 0 }}>
        {froid === "publiee" ? "Chauffe jusqu’à" : "Par grand froid"}
      </p>

      {/* La valeur cotée : au-dessus de sa ligne de cote, comme l'annotation d'un plan. */}
      {froid === "publiee" && minTemp != null ? (
        <div className="relative" style={{ height: 66, marginTop: 12 }}>
          <p
            className="absolute bottom-0 tabular-nums"
            style={{ left: `${pct / 2}%`, transform: "translateX(-50%)", fontSize: "clamp(50px, 12.5vw, 62px)", fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 0.82, color: R.ink, margin: 0, whiteSpace: "nowrap" }}
          >
            {chiffre(minTemp)}
            <span style={UNITE}>{"°C"}</span>
          </p>
        </div>
      ) : (
        <div style={{ marginTop: 12 }}>
          {froid === "certifiee" ? (
            <p style={{ fontSize: "clamp(30px, 7.4vw, 38px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.92, color: R.ink, margin: 0 }}>
              Certifiée
              <br />
              grand froid
            </p>
          ) : (
            <p style={{ fontSize: "clamp(25px, 6.2vw, 32px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, color: R.ink, margin: 0 }}>
              Température minimale non publiée
            </p>
          )}
        </div>
      )}

      {/* Le dessin : ligne de cote fléchée, lignes d'attache, règle graduée. */}
      <div className="relative" style={{ height: REGLE_Y + 10, marginTop: froid === "publiee" ? 8 : 18 }}>
        {/* Ligne de cote. */}
        {cote != null && (
          <>
            <motion.span
              aria-hidden="true"
              className="absolute"
              style={{ left: 0, width: `${pct}%`, top: COTE_Y, height: 1, background: R.ink, transformOrigin: "left" }}
              initial={reduce ? false : { scaleX: 0 }}
              animate={play || reduce ? { scaleX: 1 } : undefined}
              transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            />
            <Attache x="0%" color={R.ink} />
            <Fleche x="0%" sens="gauche" color={R.ink} />
            {froid === "publiee" && (
              <>
                <Attache x={`${pct}%`} color={R.orange} />
                <Fleche x={`${pct}%`} sens="droite" color={R.orange} />
              </>
            )}
          </>
        )}
        {/* Cote ouverte : au-delà du point de mesure, la limite n'est pas publiée. */}
        {froid === "certifiee" && (
          <motion.span
            aria-hidden="true"
            className="absolute"
            style={{
              left: `${pct}%`,
              width: `${Math.min(30, 100 - pct)}%`,
              top: COTE_Y,
              height: 1,
              backgroundImage: `repeating-linear-gradient(90deg, ${R.ink} 0 4px, transparent 4px 8px)`,
              maskImage: "linear-gradient(90deg, #000, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, #000, transparent)",
            }}
            initial={reduce ? false : { opacity: 0 }}
            animate={play || reduce ? { opacity: 1 } : undefined}
            transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
          />
        )}

        {/* Règle graduée : au degré, majeures aux cinq degrés. */}
        <span
          aria-hidden="true"
          className="absolute"
          style={{
            left: 0,
            right: 0,
            top: REGLE_Y,
            height: 1,
            background: cote != null ? R.line : "transparent",
            backgroundImage: cote != null ? undefined : `repeating-linear-gradient(90deg, ${R.line} 0 2px, transparent 2px 5px)`,
          }}
        />
        {graduations.map((t) => (
          <span
            key={t}
            aria-hidden="true"
            className="absolute"
            style={{ left: pos(t), top: REGLE_Y + 1, width: 1, height: t % 5 === 0 ? 7 : 3, background: t % 5 === 0 ? R.dim : R.line, transform: "translateX(-0.5px)" }}
          />
        ))}
      </div>

      {/* Repères chiffrés de la règle. */}
      <div className="relative" style={{ height: 14, marginTop: 2 }}>
        {[0, CERTIF, bas].map((t, i) => (
          <span
            key={t}
            className="absolute tabular-nums"
            style={{
              left: i === 2 ? undefined : pos(t),
              right: i === 2 ? 0 : undefined,
              transform: i === 1 ? "translateX(-50%)" : "none",
              fontFamily: MONO,
              fontSize: 10,
              color: R.dim,
              whiteSpace: "nowrap",
            }}
          >
            {t === 0 ? "0 °C" : `${chiffre(t)} °C`}
          </span>
        ))}
      </div>

      <p className="text-[12px] leading-snug" style={{ color: R.dim, margin: "20px 0 0", maxWidth: "30em" }}>
        {froid === "publiee" ? (
          minTempMention(minTempSource)
        ) : froid === "certifiee" ? (
          <>
            Cote ouverte : la certification ENERGY STAR climat froid mesure la machine à {MOINS_15}, elle ne dit pas où elle
            s’arrête. Température minimale non publiée par le fabricant.
          </>
        ) : (
          "Le fabricant ne publie pas jusqu’à quel froid cette machine chauffe, et elle n’a pas la certification ENERGY STAR climat froid. Nous l’écrivons plutôt que d’avancer un chiffre."
        )}
      </p>

      {(h5 != null || retention != null) && (
        <p className="tabular-nums" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.02em", color: R.dim, margin: "10px 0 0", lineHeight: 1.7 }}>
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
