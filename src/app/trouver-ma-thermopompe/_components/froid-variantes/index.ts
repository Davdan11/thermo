/* ==================================================================
   Trois dessins possibles de la zone « froid » des cartes ThermoMatch,
   proposés au propriétaire (le panneau crème arrondi actuel fait « IA »).
   Aucun n'est branché : la carte en production (ThermoMatchResults.tsx,
   composant GrandFroid) n'a pas changé. Aperçu : /dev/cartes-froid.

   Pour brancher la variante choisie : remplacer l'appel à <GrandFroid />
   par la variante, avec les mêmes champs (`card.minTemp`,
   `card.minTempSource`, `card.coldClimate`, `card.h5`, `card.h5Certified`,
   `card.retention`) et `play={inView}`. Les étiquettes à chasse fixe
   demandent la variable `--font-tech-mono` sur un parent (techMono.variable,
   comme /produit et /methode) ; sans elle, elles retombent sur la chasse
   fixe du système.
   ================================================================== */

export { VarianteCote } from "./VarianteCote";
export { VarianteLigneDeCote } from "./VarianteLigneDeCote";
export { VarianteFicheSignaletique } from "./VarianteFicheSignaletique";
export type { FroidProps } from "./donnees";
