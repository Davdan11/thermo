/* ==================================================================
   Réglages du volet C (serveur), sous les délais du CRM :
     Radar à occasions  seuil du « client chaud », début des saisons
     Prévision          probabilité de signer par étape : taux observé
                        proposé quand il y a assez de dossiers, sinon
                        à remplir ; jamais inventée
     Modèles de tâches  « Nouvelle installation », « Soumission
                        commerciale »… créés et modifiés ici
   ================================================================== */

import { salesSettingsView } from "@/lib/gestion/ventes/service";
import { MIN_SAMPLE } from "@/lib/gestion/ventes/prevision";
import { Card, SectionHeader } from "../kit/Card";
import { SalesSettingsForm } from "./SalesSettingsForm";
import { TemplatesEditor } from "./TemplatesEditor";
import "./ventes.css";

export async function VentesReglages() {
  const v = await salesSettingsView();
  const observed = Object.fromEntries(Object.entries(v.observed).map(([k, o]) => [k, { resolved: o.resolved, won: o.won, rate: o.rate }]));
  return (
    <>
      <SectionHeader id="radar" eyebrow="Ventes" title="Radar" accent="et prévision" lead="Ce qui fait remonter un client en tête de liste, et comment la valeur du pipeline est pondérée." />
      <Card>
        <SalesSettingsForm settings={v.settings} observed={observed} minSample={MIN_SAMPLE} />
      </Card>
      <SectionHeader id="modeles" eyebrow="Tâches à étapes" title="Modèles de tâches" lead="Une liste d’étapes réutilisable : choisissez-la en créant une tâche, depuis une fiche client, un job ou la page À faire." />
      <Card>
        <TemplatesEditor templates={v.templates} />
      </Card>
    </>
  );
}
