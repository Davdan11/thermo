/* Chantier A — monté par la coquille de /gestion : lit l'état de l'assistant (mode, usage du mois) sur le serveur et
   rend le panneau. Aucune donnée client ici : seulement des compteurs. */
import { panelStatus } from "@/lib/gestion/assistant/service";
import { AssistantPanel } from "./AssistantPanel";

export async function AssistantMount() {
  const status = await panelStatus().catch((e) => {
    console.error("[assistant] état :", e);
    return null;
  });
  return <AssistantPanel status={status} />;
}
