/* ==================================================================
   Carte « Publicité » de la fiche client (serveur) : consentement et
   identifiants de clic joints à chaque demande, ventes renvoyées à
   Google et à Meta. Rien si le client n'a ni l'un ni l'autre.
   Identifiants tronqués (six derniers caractères) : jamais en entier.
   ================================================================== */

import Link from "next/link";
import { adsForClient } from "@/lib/ads/service";
import { Card } from "../kit/Card";
import { Chip } from "../kit/Chip";
import { dollars } from "../kit/format";
import "./publicite.css";

export async function AdsClientPanel({ clientId }: { clientId: string }) {
  const v = await adsForClient(clientId).catch((e) => {
    console.error("[publicite] fiche client :", e);
    return null;
  });
  if (!v) return null;
  return (
    <Card title="Publicité" sub="Consentement à la mesure publicitaire, clic d’origine et ventes renvoyées." action={<Link href="/gestion/publicite" className="k-btn">Publicité</Link>}>
      {v.demands.length ? (
        <ul className="pb-demand">
          {v.demands.map((d) => (
            <li key={d.key}>
              <strong>
                {d.kind} · {d.when}
              </strong>
              {d.channel}
              <br />
              Consentement : {d.consent}
              {d.ids.length ? (
                <>
                  <br />
                  Clic : <span className="pb-code">{d.ids.join(" · ")}</span>
                  {d.clickWhen ? ` (le ${d.clickWhen})` : ""}
                </>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {v.sales.length ? (
        <ul className="pb-sends">
          {v.sales.map((s) => (
            <li key={s.key}>
              <span>
                {s.name} · {s.quoteNumber} · {s.when}
                <br />
                <small>Meta : {s.meta}</small>
              </span>
              <span style={{ textAlign: "right" }}>
                <span className="k-money">{dollars(s.valueCents)}</span>
                <br />
                <Chip tone={s.google.ok ? "ok" : "muted"} title={s.google.label}>
                  {s.google.ok ? "Google : dans le flux" : "Google : non renvoyée"}
                </Chip>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
