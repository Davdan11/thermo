/* ==================================================================
   Radar à occasions : points d'entrée du moteur d'automatisations
   (volet B). Lecture seule, rien n'est envoyé ici.

     radarAlerts(now)         demandes sans réponse au-delà du délai de
                              rappel → alertes à envoyer au propriétaire
                              (texto) ; clé stable pour ne l'envoyer
                              qu'une fois
     seasonalRelaunches(now)  clients perdus dont la saison de relance
                              est en cours ET qui ont un consentement
                              enregistré (sans consentement : tâche
                              manuelle seulement, jamais d'envoi)

   Aucune vérification d'accès ici (appelé par le serveur) : les pages
   et actions de /gestion passent par requireAdmin().
   ================================================================== */

import { freshIndex } from "../crm/service";
import { radarAlertsFrom, seasonalRelaunchesFrom, type RadarAlert, type SeasonalRelaunch } from "./radar";

export type { RadarAlert, SeasonalRelaunch };

export async function radarAlerts(now = new Date()): Promise<RadarAlert[]> {
  return radarAlertsFrom(await freshIndex(now), now);
}

export async function seasonalRelaunches(now = new Date()): Promise<SeasonalRelaunch[]> {
  return seasonalRelaunchesFrom(await freshIndex(now), now);
}
