/* ==================================================================
   Chantier A — carte « Coût d'acquisition » de la fiche client (serveur).
   Dépense du canal d'arrivée le mois d'arrivée ÷ nouveaux clients de ce
   canal ce mois-là. Sinon « non calculable », avec la raison. Rien
   n'est estimé quand la dépense n'a pas été saisie.
   ================================================================== */

import Link from "next/link";
import { acquisitionForClient } from "@/lib/gestion/rentabilite/service";
import { Card } from "../kit/Card";
import { Chip } from "../kit/Chip";
import { dollars } from "../kit/format";
import "./rentabilite.css";

export async function AcquisitionCard({ clientId }: { clientId: string }) {
  const a = await acquisitionForClient(clientId).catch((e) => {
    console.error("[rentabilite] fiche client :", e);
    return null;
  });
  if (!a) return null;
  return (
    <Card
      title="Coût d’acquisition"
      sub="Ce que la publicité a coûté pour amener ce client."
      action={
        <Link href="/gestion/rentabilite" className="k-btn">
          Rentabilité
        </Link>
      }
    >
      {a.status === "calculable" ? (
        <div className="rt-cac">
          <p className="rt-cac__value">{dollars(a.cacCents)}</p>
          <p className="rt-cac__how">
            {dollars(a.spendCents)} dépensés sur {a.channel} en {a.monthLabel}, ÷ {a.newClients} nouveau{a.newClients > 1 ? "x" : ""} client{a.newClients > 1 ? "s" : ""} de ce canal ce mois-là.
          </p>
          <div className="rt-cac__chips">
            {a.fragile ? (
              <Chip tone="warn" dot title="Moins de 5 nouveaux clients ce mois-là">
                Estimation fragile
              </Chip>
            ) : null}
            {a.commissionCents !== null ? (
              <Chip tone={a.roi !== null && a.roi >= 1 ? "ok" : "muted"}>
                Commissions : {dollars(a.commissionCents)}
                {a.roi !== null ? ` (${a.roi.toLocaleString("fr-CA", { maximumFractionDigits: 1 })} × le coût)` : ""}
              </Chip>
            ) : (
              <Chip tone="muted">Aucune vente signée pour l’instant</Chip>
            )}
          </div>
        </div>
      ) : (
        <div className="rt-cac">
          <p className="rt-cac__value rt-cac__value--none">Non calculable</p>
          <p className="rt-cac__how">{a.reason}</p>
        </div>
      )}
    </Card>
  );
}
