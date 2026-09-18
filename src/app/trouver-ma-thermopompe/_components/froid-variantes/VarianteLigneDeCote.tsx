"use client";

/* ==================================================================
   Variante B — « La ligne de cote ».

   La température est cotée comme sur un plan : une ligne de cote entre
   0 °C et la température publiée, avec ses deux embouts, des
   graduations fines au degré (majeures aux cinq degrés) et la valeur
   annotée au-dessus de son repère. Aucun dégradé, aucun remplissage,
   aucune pastille : un trait, des graduations, une cote.

   Ce que le dessin dit, et qu'une barre de progression ne disait pas :
   - température publiée : la cote est fermée aux deux bouts ; au-delà,
     l'échelle continue en pointillé, sans prétendre que la machine y va ;
   - certifiée ENERGY STAR climat froid : la cote est fermée à 0 °C,
     ouverte de l'autre côté (trait qui se perd en pointillé) — la
     limite n'est pas publiée, la ligne ne s'arrête donc sur rien ;
   - rien de publié : l'échelle seule, en pointillé, sans repère.
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

/** Embout de cote : le petit trait oblique des dessins techniques. */
function Embout({ x, color }: { x: string; color: string }) {
  return (
    <span aria-hidden="true" className="absolute" style={{ left: x, top: 0, height: 14, width: 1, background: color, transform: "translateX(-0.5px)" }} />
  );
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
    <div data-froid={froid} className={className}>
      <p className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.2em", color: R.faint, margin: 0 }}>
        {froid === "publiee" ? "Chauffe jusqu’à" : "Par grand froid"}
      </p>

      {/* Annotation : au-dessus de son repère quand il y a une valeur à coter, à la marge sinon. */}
      {froid === "publiee" && minTemp != null ? (
        <div className="relative" style={{ height: 78, marginTop: 14 }}>
          <div
            className="absolute bottom-0"
            style={{
              left: pct > 62 ? undefined : pos(minTemp),
              right: pct > 62 ? `${100 - pct}%` : undefined,
              transform: pct > 62 ? "translateX(2px)" : "translateX(-2px)",
              textAlign: pct > 62 ? "right" : "left",
              whiteSpace: "nowrap",
            }}
          >
            <p className="tabular-nums" style={{ fontSize: "clamp(58px, 15vw, 74px)", fontWeight: 600, letterSpacing: "-0.06em", lineHeight: 0.8, color: R.ink, margin: 0 }}>
              {chiffre(minTemp)}
              <span style={UNITE}>{"°C"}</span>
            </p>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 14 }}>
          {froid === "certifiee" ? (
            <p style={{ fontSize: "clamp(28px, 6.8vw, 35px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95, color: R.ink, margin: 0 }}>
              Certifiée
              <br />
              grand froid
            </p>
          ) : (
            <p style={{ fontSize: "clamp(24px, 5.8vw, 30px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, color: R.ink, margin: 0 }}>
              Température minimale non publiée
            </p>
          )}
        </div>
      )}

      {/* La ligne de cote elle-même. */}
      <div className="relative" style={{ height: 15, marginTop: froid === "publiee" ? 10 : 18 }}>
        {/* L'échelle entière, en pointillé : elle existe même là où la machine ne va pas. */}
        <span
          aria-hidden="true"
          className="absolute"
          style={{ left: 0, right: 0, top: 7, height: 1, backgroundImage: `repeating-linear-gradient(90deg, ${R.line} 0 2px, transparent 2px 5px)` }}
        />
        {/* La cote : trait plein de 0 °C jusqu'à la valeur. */}
        {cote != null && (
          <motion.span
            aria-hidden="true"
            className="absolute"
            style={{ left: 0, width: `${pct}%`, top: 7, height: 1, background: R.ink, transformOrigin: "left" }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={play || reduce ? { scaleX: 1 } : undefined}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          />
        )}
        {/* Fondu de la cote au-delà de −15 °C : la certification mesure, elle ne borne pas. */}
        {froid === "certifiee" && (
          <motion.span
            aria-hidden="true"
            className="absolute"
            style={{
              left: `${pct}%`,
              width: `${Math.min(26, 100 - pct)}%`,
              top: 7,
              height: 1,
              backgroundImage: `repeating-linear-gradient(90deg, ${R.ink} 0 3px, transparent 3px 7px)`,
              maskImage: "linear-gradient(90deg, #000, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, #000, transparent)",
            }}
            initial={reduce ? false : { opacity: 0 }}
            animate={play || reduce ? { opacity: 1 } : undefined}
            transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
          />
        )}
        {/* Embouts : 0 °C toujours, l'autre bout seulement s'il est connu (orange quand c'est la limite publiée). */}
        {cote != null && <Embout x="0%" color={R.ink} />}
        {cote != null && <Embout x={`${pct}%`} color={froid === "publiee" ? R.orange : R.ink} />}
        {froid === "publiee" && cote != null && (
          <span aria-hidden="true" className="absolute" style={{ left: `${pct}%`, top: 3, width: 9, height: 9, background: R.orange, transform: "translateX(-100%)", clipPath: "polygon(100% 0, 100% 100%, 0 50%)" }} />
        )}
        {/* Graduations : au degré, majeures aux cinq degrés. */}
        {graduations.map((t) => (
          <span
            key={t}
            aria-hidden="true"
            className="absolute"
            style={{ left: pos(t), top: 8, width: 1, height: t % 5 === 0 ? 8 : 4, background: t % 5 === 0 ? R.dim : R.line, transform: "translateX(-0.5px)" }}
          />
        ))}
      </div>

      {/* Repères chiffrés de l'échelle. */}
      <div className="relative" style={{ height: 14, marginTop: 2 }}>
        {[0, CERTIF, bas].map((t, i) => (
          <span
            key={t}
            className="absolute tabular-nums"
            style={{
              left: i === 2 ? undefined : pos(t),
              right: i === 2 ? 0 : undefined,
              transform: i === 0 ? "none" : i === 1 ? "translateX(-50%)" : "none",
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

      <p className="text-[12px] leading-snug" style={{ color: R.dim, margin: "22px 0 0", maxWidth: "30em" }}>
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
