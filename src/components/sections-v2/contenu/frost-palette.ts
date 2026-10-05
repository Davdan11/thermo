/* ==================================================================
   Palette « Carte des froids » (/thermopompe, pages villes et MRC)

   Encres et fonds partagés par le héros (heroes-v2/contenu/Frost.tsx)
   et les sections (FrostSections, FrostMunicipal, tableau de modèles).
   Chaque encre de texte doit tenir le contraste WCAG AA sur chaque fond
   où elle est posée : 4,5:1 pour le texte courant (toutes nos petites
   étiquettes en font partie), 3:1 pour le grand texte. Vérifié par
   __tests__/frost-palette.test.ts avec contrastRatio() ci-dessous.
   Les encres translucides sont mesurées une fois fondues sur le fond.
   ================================================================== */

export const FROST = {
  /** Encre principale (titres, chiffres). */
  navy: "#0B2540",
  /** Texte courant du héros : intro, sur le dégradé glacier (environ 8:1). */
  body: "rgba(11,37,64,0.84)",
  /** Texte secondaire : notes, chapeaux (environ 6,5:1 sur glacier). */
  mute: "rgba(11,37,64,0.76)",
  /** Étiquettes, sources, fil d'Ariane : le plus pâle permis, 4,8:1 sur glacier. */
  faint: "rgba(11,37,64,0.66)",
  /** Liens et surtitres. */
  steel: "#1F5F8B",
  /** Givre : filets et barres, jamais du texte sur fond clair. */
  frost: "#9CC3DA",
  line: "rgba(11,37,64,0.14)",
} as const;

/** Fonds clairs de la suite (du plus foncé au blanc). */
export const FROST_BG = {
  glacier: "#E4EFF5",
  ice: "#EEF5F9",
  mist: "#EDF4F8",
  white: "#FFFFFF",
} as const;

type Rgb = [number, number, number];

/** « #RRGGBB » ou « rgba(r,g,b,a) » : couleur et opacité. */
function parse(color: string): { rgb: Rgb; alpha: number } {
  const hex = /^#([0-9a-f]{6})$/i.exec(color);
  if (hex) return { rgb: [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16)) as Rgb, alpha: 1 };
  const m = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i.exec(color);
  if (!m) throw new Error(`Couleur illisible : ${color}`);
  return { rgb: [Number(m[1]), Number(m[2]), Number(m[3])], alpha: m[4] === undefined ? 1 : Number(m[4]) };
}

/** Luminance relative WCAG 2.x. */
function luminance([r, g, b]: Rgb): number {
  const c = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
}

/** Rapport de contraste WCAG entre une encre (éventuellement translucide, fondue sur le fond) et un fond opaque. */
export function contrastRatio(ink: string, background: string): number {
  const bg = parse(background).rgb;
  const { rgb, alpha } = parse(ink);
  const mixed = rgb.map((v, i) => v * alpha + bg[i] * (1 - alpha)) as Rgb;
  const [hi, lo] = [luminance(mixed), luminance(bg)].sort((a, b) => b - a);
  return (hi + 0.05) / (lo + 0.05);
}
