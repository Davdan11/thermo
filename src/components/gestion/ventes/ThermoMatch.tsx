/* ==================================================================
   ThermoMatch → soumission (serveur).
     ThermoMatchPanel   carte de la fiche client : chaque demande
                        ThermoMatch et ses choix, chacun avec
                        « Créer la soumission avec la machine choisie »
     ThermoMatchNotice  bandeau de la nouvelle soumission pré-remplie :
                        ce qui a été repris, ce qui reste à choisir
   ================================================================== */

import Link from "next/link";
import { FileText } from "lucide-react";
import { formatNumber, money } from "@/lib/soumissions/money";
import { thermoMatchForClient, type ThermoMatchPrefill } from "@/lib/gestion/ventes/service";
import { Card } from "../kit/Card";
import "./ventes.css";

export async function ThermoMatchPanel({ clientId }: { clientId: string }) {
  const p = await thermoMatchForClient(clientId);
  if (!p) return null;
  return (
    <Card title="ThermoMatch" sub="La soumission reprend la machine choisie : modèles, jumelage AHRI et montant LogisVert officiel.">
      <div className="vt-tm">
        {p.entries.map((e) => (
          <div key={e.id} className="vt-tm__entry">
            <p className="vt-tm__meta">
              {e.source} · {e.when}
              {e.quoteAfter ? " · une soumission a déjà été créée depuis" : ""}
            </p>
            <ol className="vt-tm__choices">
              {e.choices.map((ch) => (
                <li key={ch.rank} className="vt-tm__choice">
                  <span className="vt-tm__rank" aria-label={`Choix ${ch.rank}`}>
                    {ch.rank}
                  </span>
                  <span className="vt-tm__label">
                    {ch.label}
                    {ch.note ? <small>{ch.note}</small> : null}
                  </span>
                  {ch.href ? (
                    <Link href={ch.href} className={`k-btn${ch.rank === 1 && !e.quoteAfter ? " k-btn--primary" : ""}`}>
                      <FileText size={15} aria-hidden /> {e.choices.length > 1 ? "Créer la soumission avec ce choix" : "Créer la soumission avec la machine choisie"}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ThermoMatchNotice({ p }: { p: ThermoMatchPrefill }) {
  const m = p.machine;
  const pair = m?.pairing ?? null;
  const facts = m
    ? [
        `Extérieur ${m.outdoorModel}`,
        pair ? `AHRI ${pair.ahri}` : null,
        pair?.indoorDescription ? `Intérieur ${pair.indoorDescription}` : null,
        pair?.h5Btu ? `${formatNumber(pair.h5Btu)} BTU/h à −15 °C` : null,
        pair?.hspf2 ? `HSPF2 ${formatNumber(pair.hspf2, 2)}` : null,
        pair?.seer2 ? `SEER2 ${formatNumber(pair.seer2, 2)}` : null,
        pair ? (pair.logisVertCents ? `LogisVert officiel : ${money(pair.logisVertCents)}` : "Aucune aide LogisVert pour ce jumelage") : null,
      ].filter((x): x is string => Boolean(x))
    : [];
  return (
    <section className="vt-notice" role="status" aria-label="Soumission pré-remplie depuis ThermoMatch">
      <p className="vt-notice__kicker">Pré-remplie depuis ThermoMatch · choix {p.rank}</p>
      <p className="vt-notice__title">{m ? `${m.brand} ${m.name}` : p.label}</p>
      {facts.length ? (
        <ul className="vt-notice__facts">
          {facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      ) : null}
      {p.notes.map((n) => (
        <p key={n} className="vt-notice__warn">
          {n}
        </p>
      ))}
      {p.others.length ? (
        <p style={{ margin: 0, fontSize: 13 }}>
          Autres choix :{" "}
          {p.others.map((o, i) => (
            <span key={o.rank}>
              {i ? " · " : ""}
              <Link href={o.href}>
                {o.rank}. {o.label}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
    </section>
  );
}
