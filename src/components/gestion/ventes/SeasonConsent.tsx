/* Relance de saison (fiche client, serveur) : consentement du client à être relancé la saison suivante. Avec un
   consentement enregistré, la relance automatique d'un client perdu est permise (moteur du volet B) ; sans, la relance
   reste une tâche manuelle. */
import { seasonConsentView } from "@/lib/gestion/ventes/service";
import { Card } from "../kit/Card";
import { SeasonConsentForm } from "./SeasonConsentForm";
import "./ventes.css";

export async function SeasonConsentCard({ clientId }: { clientId: string }) {
  const v = await seasonConsentView(clientId);
  if (!v) return null;
  return (
    <Card title="Relance de saison" sub={v.lost ? (v.season ? `Client perdu · ${v.season}` : "Client perdu : à relancer la saison suivante") : "Pour relancer ce client la saison prochaine"}>
      <SeasonConsentForm clientId={v.clientId} firstName={v.firstName} active={v.active} withdrawn={v.withdrawn} />
    </Card>
  );
}
