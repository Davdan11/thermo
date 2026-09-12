/* ==================================================================
   Sections v2 « prix et subventions » : palettes et typographie.
   Module neutre (ni client ni serveur) : importable partout.
   Chaque page continue la direction artistique de son héros
   (src/components/heroes-v2/prix/*).
   ================================================================== */

export { MONO, DISPLAY, SERIF } from "@/components/heroes-v2/prix/fonts";

/** /prix — « Le reçu » */
export const RECU = { paper: "#FAF8F3", sheet: "#FFFEFB", ink: "#1B1B1B", mute: "rgba(27,27,27,0.64)", rule: "rgba(27,27,27,0.16)", faint: "rgba(27,27,27,0.06)" } as const;

/** /prix/[slug] — « L’étiquette » */
export const TAG = { kraft: "#E7D8BF", brown: "#2A1E14", mute: "rgba(42,30,20,0.72)", string: "#D9541E", rust: "#A8401A", card: "#FBF5EA", line: "rgba(42,30,20,0.22)", brass: "#B98A4B" } as const;

/** /subventions — « Le chèque » */
export const CHEQUE = { emerald: "#0B3D2E", deep: "#08301F", mint: "#BFE8D2", cream: "#F4EFE3", paper: "#F8F2E2", stub: "#EFE6CF", ink: "#0E3527", stamp: "#1C6B4A", mute: "rgba(14,53,39,0.7)", line: "rgba(14,53,39,0.2)" } as const;

/** /subventions/logisvert — « Baromètre » */
export const BARO = { bg: "#EAF5EE", forest: "#0F3D2B", green: "#1A8F4E", mute: "rgba(15,61,43,0.72)", line: "rgba(15,61,43,0.14)", panel: "#F6FBF8" } as const;

/** /calculateur-economies — « Le compteur » */
export const METER = { sun: "#F4C542", ink: "#151515", face: "#FBFAF4", white: "#FFFFFF", red: "#B8412A", mute: "rgba(21,21,21,0.66)", line: "rgba(21,21,21,0.14)" } as const;

/** Apostrophe courbe et espace insécable avant « : ; ? ! » (version serveur de `typo`). */
export function typo(s: string): string {
  return s
    .replace(/'/g, "’")
    .replace(/ ([:;?!])/g, " $1")
    .replace(/([^\s ])([?!;])(?=\s|$)/g, "$1 $2");
}

export const fr = (n: number) => Math.round(n).toLocaleString("fr-CA");

/** Encre de tampon inégale : bruit fractal en masque (même recette que le chèque du héros). */
export const STAMP_MASK =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.3' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.4 2.1'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

/** Code-barres décoratif, déterministe (identique au serveur et au client). */
export function barcode(seed: string, n = 46): number[] {
  let h = 2166136261;
  const bars: number[] = [];
  for (let i = 0; i < n; i++) {
    h ^= seed.charCodeAt(i % Math.max(1, seed.length)) + i;
    h = Math.imul(h, 16777619) >>> 0;
    bars.push(1 + (h % 3));
  }
  return bars;
}

/* ---------- Guillochis (déterministes : identiques au serveur et au client) ---------- */
export function guillocheWave(y: number, amp: number, len: number, phase: number, w: number): string {
  let d = `M0 ${y}`;
  for (let x = 8; x <= w; x += 8) d += `L${x} ${(y + amp * Math.sin((x / len) * Math.PI * 2 + phase)).toFixed(1)}`;
  return d;
}
export function guillocheRosette(cx: number, cy: number, R: number, amp: number, k: number, phase: number): string {
  const p: string[] = [];
  for (let i = 0; i <= 240; i++) {
    const t = (i / 240) * Math.PI * 2;
    const r = R + amp * Math.sin(k * t + phase);
    p.push(`${(cx + r * Math.cos(t)).toFixed(1)} ${(cy + r * Math.sin(t)).toFixed(1)}`);
  }
  return `M${p.join("L")}Z`;
}
