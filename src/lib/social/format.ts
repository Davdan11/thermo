/* ==================================================================
   Mise en forme propre au robot Facebook (le reste vient de
   src/lib/presence/format.ts : milliers insécables, vrai signe moins).
   ================================================================== */

import { fmtDec, NBSP } from "@/lib/presence/format";

/**
 * Montant officiel LogisVert tel que publié : jamais arrondi (« 5 507,76 $ » reste « 5 507,76 $ »),
 * sans décimales quand il n'en a pas (« 1 296 $ »).
 */
export function fmtMontant(n: number): string {
  return `${fmtDec(n, 2)}${NBSP}$`;
}
