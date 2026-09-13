/* ==================================================================
   Chantier T — fiche client : appels masqués (résultat, durée),
   enregistrements avec transcription et résumé, consentement aux
   textos (LCAP). Composant serveur, chargé par la fiche comme les
   cartes des autres volets. Aucun numéro affiché ici.
   ================================================================== */

import { PhoneCall } from "lucide-react";
import { clientTelephonieView } from "@/lib/telephonie/view";
import { Card } from "../kit/Card";
import { Chip } from "../kit/Chip";
import { MaskedCallButton } from "./CallButton";
import { ConsentForm } from "./client-bits";
import { RecordingItem } from "./RecordingItem";
import "./telephonie.css";

export async function ClientTelephonieCard({ clientId }: { clientId: string }) {
  const v = await clientTelephonieView(clientId);
  if (!v) return null;
  const c = v.consent;
  return (
    <Card
      title="Appels et textos"
      sub="Appels masqués, transcriptions, consentement aux campagnes"
      action={
        v.canCall ? (
          <MaskedCallButton target={{ kind: "client", id: v.clientId }} className="k-btn">
            <PhoneCall size={15} aria-hidden /> Appeler
          </MaskedCallButton>
        ) : null
      }
    >
      <div style={{ display: "grid", gap: 14 }}>
        <div className="tp-consent">
          <div className="tp-consent__line">
            <Chip tone={c.ok ? "ok" : c.optedOut ? "bad" : "muted"} dot>
              {c.ok ? "Textos de campagne permis" : "Pas de campagne"}
            </Chip>
            <span>
              {c.label}
              {c.ok && c.expires ? ` · jusqu’au ${c.expires}` : ""}
              {!c.ok && c.expires ? ` · expiré le ${c.expires}` : ""}
            </span>
          </div>
          {v.express?.active ? (
            <p className="g-hint" style={{ margin: 0 }}>
              Consentement exprès noté le {v.express.when} : « {v.express.note} ».
            </p>
          ) : v.express?.withdrawn ? (
            <p className="g-hint" style={{ margin: 0 }}>
              Consentement exprès retiré le {v.express.withdrawn}.
            </p>
          ) : null}
          {c.optedOut ? null : <ConsentForm clientId={v.clientId} firstName={v.firstName} active={Boolean(v.express?.active)} />}
        </div>

        {v.calls.length ? (
          <ul className="tp-rows" aria-label="Appels masqués">
            {v.calls.map((x, i) => (
              <li key={x.id} className="tp-row" style={{ ["--i" as string]: i }}>
                <strong>{x.title}</strong>
                <Chip tone={x.tone === "ok" ? "ok" : x.tone === "bad" ? "bad" : x.tone === "warn" ? "warn" : x.tone === "live" ? "orange" : "muted"}>{x.final ? "Terminé" : "En cours"}</Chip>
                <small>
                  {x.when}
                  {x.record ? " · enregistré" : ""}
                </small>
              </li>
            ))}
          </ul>
        ) : null}

        {v.recordings.length ? (
          <ul className="tp-recs" aria-label="Enregistrements">
            {v.recordings.map((r, i) => (
              <RecordingItem key={r.id} r={r} i={i} showWho={false} />
            ))}
          </ul>
        ) : null}

        {!v.calls.length && !v.recordings.length ? (
          <p className="g-hint" style={{ margin: 0 }}>
            Aucun appel masqué ni enregistrement pour ce client.
          </p>
        ) : null}
      </div>
    </Card>
  );
}
