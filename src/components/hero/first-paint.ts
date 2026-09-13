import "./first-paint.css";
import type { CSSProperties } from "react";

/* ==================================================================
   Entrées de héros en CSS, lancées au premier rendu (voir first-paint.css).
   Remplace un `initial` / `animate` / `transition` de motion sur les
   éléments du premier écran : même départ, même durée, même délai, même
   courbe, et l'arrivée est l'état naturel de l'élément. Le HTML est le
   même au serveur et au client (aucune lecture de window au rendu).

     <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: EASE, delay: 0.6 }} className="…">
   devient
     <p {...fp({ opacity: 0, y: 16, duration: 1, ease: EASE, delay: 0.6 }, { className: "…" })}>
   ================================================================== */

type Bezier = readonly [number, number, number, number];

/** Courbes nommées de motion (mêmes définitions que motion-utils). */
const NAMED = {
  linear: "linear",
  easeIn: "cubic-bezier(0.42, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.58, 1)",
  easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
} as const;

/** Sans `ease`, motion anime une transition à durée fixe en « easeOut » : même défaut ici.
 *  Un ressort de motion s'écrit en `linear(…)` échantillonné (comme motion le fait lui-même pour WAAPI). */
export type FpEase = Bezier | keyof typeof NAMED | `linear(${string})`;

/** Valeurs de départ, comme l'`initial` de motion (nombres en px et en degrés). */
export type FpFrom = {
  opacity?: number;
  x?: number | string;
  y?: number | string;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: number;
  rotateX?: number;
  skewX?: number;
  clipPath?: string;
  /** Transformation propre à l'élément, gardée à l'arrivée (ex. `skewX(-8deg)`), placée après l'entrée comme chez motion. */
  rest?: string;
  /**
   * Garde une opacité de départ exactement nulle (au lieu de 0,001). Chrome compte alors l'élément dans le LCP à la
   * fin de son entrée, à sa taille finale, et non au premier rendu à sa taille de départ : utile pour un titre qui
   * part réduit (scale) et qu'un élément plus grand, affiché plus tard, dépasserait sinon.
   */
  lcpAtEnd?: boolean;
};

export type FpTransition = { duration: number; delay?: number; ease?: FpEase };
export type FpPart = FpFrom & FpTransition;
type Props = { className?: string; style?: CSSProperties };

const round = (n: number) => Math.round(n * 10000) / 10000;
const px = (v: number | string) => (typeof v === "number" ? `${round(v)}px` : v);
const easing = (e: FpEase = "easeOut") => (typeof e !== "string" ? `cubic-bezier(${e.join(", ")})` : e.startsWith("linear(") ? e : NAMED[e as keyof typeof NAMED]);
// « backwards » : départ tenu pendant le délai ; à la fin, plus aucun effet d'animation (ni calque gardé), l'élément
// retrouve exactement son style naturel, comme le style en ligne que motion laissait.
const timing = (t: FpTransition) => `${round(t.duration)}s ${easing(t.ease)} ${round(t.delay ?? 0)}s backwards`;

/** Départ et arrivée de la transformation, fonctions dans l'ordre de motion (translate, scale, rotate, rotateX, skew). */
function transformOf(f: FpFrom): { from: string; to: string | null } | null {
  const from: string[] = [];
  const to: string[] = [];
  const add = (fn: string, v: string, id: string) => {
    from.push(`${fn}(${v})`);
    to.push(`${fn}(${id})`);
  };
  if (f.x !== undefined) add("translateX", px(f.x), "0px");
  if (f.y !== undefined) add("translateY", px(f.y), "0px");
  if (f.scale !== undefined) add("scale", String(round(f.scale)), "1");
  if (f.scaleX !== undefined) add("scaleX", String(round(f.scaleX)), "1");
  if (f.scaleY !== undefined) add("scaleY", String(round(f.scaleY)), "1");
  if (f.rotate !== undefined) add("rotate", `${round(f.rotate)}deg`, "0deg");
  if (f.rotateX !== undefined) add("rotateX", `${round(f.rotateX)}deg`, "0deg");
  if (f.skewX !== undefined) add("skewX", `${round(f.skewX)}deg`, "0deg");
  if (!from.length) return null;
  if (!f.rest) return { from: from.join(" "), to: null };
  // Avec une transformation propre : arrivée explicite, mêmes fonctions qu'au départ (interpolation valeur par valeur, comme motion).
  from.push(f.rest);
  to.push(f.rest);
  return { from: from.join(" "), to: to.join(" ") };
}

function merge(anims: string[], vars: Record<string, string | number>, props: Props) {
  const style = { ...props.style, ...vars } as Record<string, string | number | undefined>;
  style.animation = anims.join(", ");
  return { className: props.className ? `fp ${props.className}` : "fp", style: style as CSSProperties };
}

/**
 * Entrée CSS d'un élément. Plusieurs parties quand motion avait une transition par propriété
 * (ex. opacité plus courte que le déplacement) : une partie par propriété (opacité, transformation, clip-path).
 * Avec `clipPath`, donner aussi l'arrivée de motion en `style.clipPath` (ex. « inset(0 0% 0 0) »).
 */
export function fp(parts: FpPart | FpPart[], props: Props = {}) {
  const anims: string[] = [];
  const vars: Record<string, string | number> = {};
  for (const p of Array.isArray(parts) ? parts : [parts]) {
    const t = timing(p);
    if (p.opacity !== undefined) {
      vars["--fp-o"] = p.opacity === 0 && !p.lcpAtEnd ? 0.001 : round(p.opacity);
      anims.push(`fp-o ${t}`);
    }
    const tf = transformOf(p);
    if (tf) {
      vars["--fp-t"] = tf.from;
      // Sans transformation propre, l'arrivée est « none » (comme motion à la fin) : aucun contexte d'empilement ne reste.
      if (tf.to) vars.transform = tf.to;
      anims.push(`fp-t ${t}`);
    }
    if (p.clipPath !== undefined) {
      vars["--fp-c"] = p.clipPath;
      anims.push(`fp-c ${t}`);
    }
  }
  return merge(anims, vars, props);
}

/**
 * Ligne de titre qui monte derrière un masque. Remplace le couple
 *   <span style="overflow:hidden; padding…">  <motion.span initial={{ y: "112%" }} …>
 * par le parent SANS overflow (garder ses marges et retraits) et fpLine() sur la ligne.
 * `pad` : retraits intérieurs du parent [haut, droite, bas, gauche] (CSS), qui agrandissaient la zone visible.
 */
export function fpLine(p: FpTransition & { y: string; pad?: readonly [string, string, string, string] }, props: Props = {}) {
  const [pt, pr, pb, pl] = p.pad ?? ["0px", "0px", "0px", "0px"];
  const t = timing(p);
  return merge([`fp-t ${t}`, `fp-c ${t}`], {
    // Le masque du parent, exprimé dans le repère de la ligne : il suit le déplacement.
    clipPath: `inset(calc(-1 * ${pt}) calc(-1 * ${pr}) calc(-1 * ${pb}) calc(-1 * ${pl}))`,
    "--fp-c": `inset(calc(-1 * (${pt} + ${p.y})) calc(-1 * ${pr}) calc(${p.y} - ${pb}) calc(-1 * ${pl}))`,
    "--fp-t": `translateY(${p.y})`,
  }, props);
}
