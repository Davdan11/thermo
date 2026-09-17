/* ==================================================================
   Graine stable pour les choix déterministes (robot Facebook :
   src/lib/social/selection.ts). Mêmes données et même date → même choix.
   ================================================================== */

/** FNV-1a 32 bits. */
export function hashSeed(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}
