/* ==================================================================
   Conformité : mention « Garantie légale de bon fonctionnement : 6 ans »
   près d'un prix de thermopompe neuve (configuration unique :
   src/lib/garantie-legale/config.ts). Texte à faire valider par un avocat.

   Composant partagé, sans « use client » ni code serveur : il se rend
   dans les pages serveur comme dans les composants client (héros,
   comparateur, ThermoMatch, document /devis).
   - Rendu à partir de la date : la mention est dans le HTML, sans script.
   - Rendu avant la date (page statique ou en cache) : la mention est dans
     le HTML avec l'attribut « en attente », masquée par globals.css
     jusqu'à ce que le script en ligne du layout marque <html>, dès la
     date et avant le premier affichage. Aucune place réservée avant la
     date, aucun décalage de mise en page quand elle apparaît.
   - Contrat déjà conclu (soumission acceptée) : sa date tranche.
   Le style (taille, couleur, marge) vient de chaque page.
   ================================================================== */
import Link from "next/link";
import type { CSSProperties } from "react";
import { ATTR_EN_ATTENTE, estEnVigueur, estVise, lireConfig, texteMention, type CibleGarantie } from "@/lib/garantie-legale/config";

type Props = {
  /** Produit du catalogue ({ systemType, zones }) ou catégorie(s) de thermopompe d'une grille de prix. */
  cible: CibleGarantie;
  /** Date du contrat (acceptation d'une soumission) : la mention n'apparaît que s'il est conclu à compter de la date. */
  concluLe?: string | number | null;
  as?: "p" | "span" | "div";
  className?: string;
  style?: CSSProperties;
  lienClassName?: string;
  lienStyle?: CSSProperties;
};

export function MentionGarantieLegale({ cible, concluLe, as = "p", className, style, lienClassName, lienStyle }: Props) {
  const config = lireConfig();
  if (!estVise(cible, config)) return null;
  let enAttente = false;
  if (concluLe != null) {
    if (!estEnVigueur(config, typeof concluLe === "number" ? concluLe : Date.parse(concluLe))) return null;
  } else {
    enAttente = !estEnVigueur(config);
  }
  const Tag = as;
  const attente = enAttente ? { [ATTR_EN_ATTENTE]: "" } : {};
  return (
    // La date peut séparer le rendu serveur de l'hydratation : l'attribut « en attente » du HTML est alors conservé,
    // et la règle de globals.css décide de l'affichage.
    <Tag className={className} style={style} {...attente} suppressHydrationWarning>
      <Link href={config.page} className={lienClassName ?? "underline decoration-1 underline-offset-2"} style={lienStyle}>
        {texteMention(config)}
      </Link>
    </Tag>
  );
}
