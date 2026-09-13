/* ==================================================================
   Conformité C2 — forme des textes envoyés aux formulaires publics
   (GET /api/consentements/textes). Importable côté navigateur : aucune
   dépendance. Les textes eux-mêmes viennent de la trousse, au serveur.
   ================================================================== */

export interface PublicConsentReady {
  ready: true;
  /** Version affichée : renvoyée avec le formulaire, preuve du texte exact. */
  version: string;
  sender: string;
  /** 5.1 : avis sous le formulaire. */
  communications: string;
  /** 5.2 : case facultative, jusqu'à deux rappels. */
  rappels: string;
  /** 5.3 : case facultative distincte (après l'installation). */
  promotions: string;
  /** 3.1 : avis de jumelage et libellé de la case obligatoire. */
  jumelage: { notice: string[]; box: string };
}

export type PublicConsentTexts = PublicConsentReady | { ready: false };

/** Ce que chaque formulaire renvoie au serveur (champ « consentements »). */
export interface ConsentAnswers {
  version: string;
  rappels: boolean;
  promotions: boolean;
  jumelage?: boolean;
}
