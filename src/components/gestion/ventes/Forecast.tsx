/* ==================================================================
   Prévision du pipeline (serveur) : panneau de la page Pipeline et
   tuiles de l'accueil (bloc 04). Valeur pondérée par la probabilité
   de signer, étape par étape ; la source de chaque probabilité est
   dite (réglée, observée sur N dossiers, à définir). L'aide LogisVert
   n'entre jamais dans ces montants.
   ================================================================== */

import Link from "next/link";
import { BadgeCheck, TrendingUp } from "lucide-react";
import type { Forecast, ForecastRow } from "@/lib/gestion/ventes/prevision";
import { forecastView } from "@/lib/gestion/ventes/service";
import { Card } from "../kit/Card";
import { dollars, pct, plural } from "../kit/format";
import { KpiTile } from "../kit/KpiTile";
import "./ventes.css";

function Source({ r, minSample }: { r: ForecastRow; minSample: number }) {
  if (r.source === "reglee") return <span className="vt-src vt-src--reglee">Réglée : {pct(r.probability ?? 0)}</span>;
  if (r.source === "observee") return <span className="vt-src vt-src--observee">Observée : {pct(r.probability ?? 0)} sur {r.observed.resolved} dossiers</span>;
  return (
    <span className="vt-src vt-src--a-definir" title={`${r.observed.resolved} dossier${r.observed.resolved > 1 ? "s" : ""} réglé${r.observed.resolved > 1 ? "s" : ""} sur ${minSample} requis`}>
      À définir
    </span>
  );
}

export function ForecastBody({ f }: { f: Forecast }) {
  const max = Math.max(1, ...f.rows.map((r) => r.cents));
  const known = f.rows.some((r) => r.probability !== null);
  return (
    <div className="vt-fc">
      <div className="vt-fc__hero">
        <div className="vt-fc__value">
          <span>Prévision pondérée</span>
          <strong>{known ? dollars(f.weightedCents) : "—"}</strong>
        </div>
        <div className="vt-fc__side">
          <span>En jeu, pondéré</span>
          <strong>{dollars(f.coveredCents)}</strong>
        </div>
        <div className="vt-fc__side">
          <span>Déjà signé, à installer</span>
          <strong>
            {dollars(f.signed.cents)} <small style={{ fontSize: 13, fontWeight: 560, color: "var(--g-muted)" }}>({f.signed.n})</small>
          </strong>
        </div>
      </div>
      <ul className="vt-fc__rows">
        {f.rows.map((r) => (
          <li key={r.stage} className="vt-fc__row">
            <span className="vt-fc__label">
              {r.label}
              <small>{plural(r.n, "client", "clients")}</small>
              <Source r={r} minSample={f.minSample} />
            </span>
            <span className="vt-fc__amt">
              <b>{r.weightedCents === null ? "—" : dollars(r.weightedCents)}</b>
              sur {dollars(r.cents)}
            </span>
            <span className="vt-fc__bar" aria-hidden>
              <span className="is-gross" style={{ ["--w" as string]: `${(r.cents / max) * 100}%` }} />
              {r.weightedCents !== null ? <span className="is-weighted" style={{ ["--w" as string]: `${(r.weightedCents / max) * 100}%` }} /> : null}
            </span>
          </li>
        ))}
      </ul>
      {f.missing.length ? (
        <p className="vt-fc__note">
          Probabilité à définir pour {f.missing.length > 1 ? "ces étapes" : "cette étape"} : il faut au moins {f.minSample} dossiers réglés (signés ou perdus) pour calculer un taux observé, sinon réglez-la vous-même. Ces étapes ne sont pas comptées.
        </p>
      ) : null}
      {f.unvalued ? <p className="vt-fc__note">{plural(f.unvalued, "client sans montant n’est pas compté", "clients sans montant ne sont pas comptés")} (ni soumission ni estimation notée).</p> : null}
      <p className="vt-fc__note">Montants taxes comprises. L’aide LogisVert, versée au client par Hydro-Québec, n’entre jamais dans la prévision.</p>
    </div>
  );
}

/** Panneau de la page Pipeline. */
export async function ForecastPanel() {
  const f = await forecastView();
  return (
    <Card
      id="prevision"
      title="Prévision"
      sub="Montant en jeu à chaque étape, pondéré par la probabilité de signer."
      action={
        <Link href="/gestion/reglages#prevision" className="k-btn k-btn--ghost">
          Probabilités
        </Link>
      }
      className="vt-fc-card"
    >
      <ForecastBody f={f} />
    </Card>
  );
}

/** Tuiles de l'accueil (bloc 04). */
export async function ForecastTiles() {
  const f = await forecastView();
  const known = f.rows.some((r) => r.probability !== null);
  return (
    <div className="cr-grid2" style={{ marginTop: 16 }}>
      <KpiTile
        label="Prévision pondérée"
        icon={<TrendingUp size={16} />}
        value={known ? dollars(f.weightedCents) : "—"}
        sub={known ? `sur ${dollars(f.coveredCents)} en jeu${f.missing.length ? ` · ${plural(f.missing.length, "étape à définir", "étapes à définir")}` : ""}` : "Probabilités à définir dans Réglages"}
        href="/gestion/pipeline#prevision"
      />
      <KpiTile label="Déjà signé, à installer" icon={<BadgeCheck size={16} />} value={dollars(f.signed.cents)} sub={f.signed.n ? `${plural(f.signed.n, "client accepté ou planifié", "clients acceptés ou planifiés")}, taxes comprises` : "Aucun pour l’instant"} href="/gestion/agenda" />
    </div>
  );
}
