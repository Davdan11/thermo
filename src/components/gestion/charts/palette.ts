/* Couleurs des graphiques, vérifiées avec le validateur de palettes (scripts/validate_palette.js de la compétence dataviz) :
   - canaux : 8 teintes catégorielles dans un ordre FIXE (la couleur suit le canal, jamais son rang), « Autres » en neutre ;
     tous les contrôles passent sur fond clair ; l'ambre est sous 3:1 → légende avec valeurs toujours affichée ;
   - étapes du pipeline : rampe ordinale d'une seule teinte (l'orange du site), clair → foncé à mesure que le client avance ;
     « Terminée » en encre, « Perdue » en neutre. */
import type { Stage } from "@/lib/gestion/crm/types";

export const CHANNEL_COLORS: Record<string, string> = {
  "google-naturel": "#2f8f5b",
  "google-ads": "#e54b17",
  "fiche-google": "#3a78b5",
  facebook: "#c98a0b",
  ia: "#7a4f9a",
  direct: "#0f9ba1",
  telephone: "#5b5fc7",
  texto: "#c9567a",
  autres: "#b8b0a2",
};

export const STAGE_COLORS: Record<Stage, string> = {
  nouvelle: "#fe825f",
  contacte: "#f45929",
  "soumission-envoyee": "#d64109",
  ouverte: "#b23506",
  acceptee: "#8f2804",
  planifiee: "#6e1d02",
  terminee: "#0c1821",
  perdue: "#b8b0a2",
};

/** Entonnoir (envoyées → ouvertes → acceptées) : trois pas de la rampe ordinale. */
export const FUNNEL_COLORS = ["#fe825f", "#d64109", "#8f2804"];

export const EASE = [0.22, 1, 0.36, 1] as const;
