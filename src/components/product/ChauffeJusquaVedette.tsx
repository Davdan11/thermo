/* ==================================================================
   « Chauffe jusqu'à −XX °C » — l'information vedette d'une vignette de
   modèle (catalogue, pages de marque), sur fond clair.

   Ce que les acheteurs cherchent au Québec est « jusqu'à quel froid ça
   chauffe », pas une puissance à une température donnée. Le chiffre est
   donc le plus gros texte de la vignette, juste sous le nom du modèle,
   en orange, d'un seul bloc (espace insécable + nowrap).

   Trois cas, et jamais de quatrième :
   - température publiée par le fabricant (résolue au serveur :
     configurations du catalogue, puis relevés des documents) → le chiffre ;
   - inconnue mais certifiée ENERGY STAR climat froid → « Certifiée grand
     froid · chauffe encore à −15 °C » (−15 °C est le point de mesure de
     la certification, jamais une limite) ;
   - rien de publié → « Température minimale non publiée », écrit tel quel.

   Aucune valeur par défaut : le champ `model.minimumOperatingTemperatureC`
   n'est renseigné par aucune source, et l'ancien repli « −25 °C / −15 °C »
   affichait un chiffre que personne n'avait publié.
   ================================================================== */

const INK = "#0A1419";
const ORANGE = "#C23F12";
const MUTE = "rgba(10,20,25,0.58)";

/** « −30 » : vrai signe moins, une décimale seulement si la valeur en a une. */
const chiffre = (t: number) => `${t < 0 ? "−" : t > 0 ? "+" : ""}${Math.abs(t).toLocaleString("fr-CA", { maximumFractionDigits: 1 })}`;

export interface ChauffeJusquaVedetteProps {
  /** Température minimale de chauffage publiée (°C) ; null : non publiée. */
  minTempC: number | null;
  /** Certification ENERGY STAR climat froid. */
  coldClimate: boolean;
  /** Taille du chiffre ; « compact » pour une vignette étroite. */
  taille?: "normal" | "compact";
  className?: string;
}

export function ChauffeJusquaVedette({ minTempC, coldClimate, taille = "normal", className }: ChauffeJusquaVedetteProps) {
  const grand = taille === "compact" ? "clamp(30px, 8vw, 38px)" : "clamp(34px, 9vw, 44px)";

  if (minTempC != null) {
    return (
      <div data-chauffe="publiee" className={className}>
        <p className="m-0 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: MUTE }}>
          Chauffe jusqu’à
        </p>
        <p
          className="m-0 tabular-nums"
          style={{ fontSize: grand, fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 0.95, color: ORANGE, whiteSpace: "nowrap", marginTop: 2 }}
        >
          {chiffre(minTempC)}
          <span style={{ fontSize: "0.42em", fontWeight: 500, letterSpacing: "-0.01em" }}>{" °C"}</span>
        </p>
        <p className="m-0 text-[11.5px] leading-snug" style={{ color: MUTE, marginTop: 4 }}>
          Température publiée par le fabricant
        </p>
      </div>
    );
  }

  if (coldClimate) {
    return (
      <div data-chauffe="certifiee" className={className}>
        <p className="m-0 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: MUTE }}>
          Par grand froid
        </p>
        <p className="m-0" style={{ fontSize: taille === "compact" ? 22 : 25, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, color: ORANGE, marginTop: 3 }}>
          Certifiée grand froid
        </p>
        <p className="m-0 text-[13px] font-semibold" style={{ color: INK, marginTop: 5 }}>
          Chauffe encore à <span style={{ whiteSpace: "nowrap" }}>{"−15 °C"}</span>
        </p>
        <p className="m-0 text-[11.5px] leading-snug" style={{ color: MUTE, marginTop: 3 }}>
          Température minimale non publiée par le fabricant
        </p>
      </div>
    );
  }

  return (
    <div data-chauffe="inconnue" className={className}>
      <p className="m-0 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: MUTE }}>
        Par grand froid
      </p>
      <p className="m-0" style={{ fontSize: taille === "compact" ? 19 : 21, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, color: INK, marginTop: 3 }}>
        Température minimale non publiée
      </p>
      <p className="m-0 text-[11.5px] leading-snug" style={{ color: MUTE, marginTop: 4 }}>
        Le fabricant ne publie pas jusqu’à quel froid ce modèle chauffe.
      </p>
    </div>
  );
}
