"use client";

/* Réglages du radar et des probabilités de la prévision. Une probabilité laissée vide prend le taux observé (au moins
   MIN_SAMPLE dossiers réglés), sinon l'étape reste « à définir » et n'est pas comptée. */
import { useActionState } from "react";
import { saveSalesSettingsAction, type VentesResult } from "@/app/gestion/(prive)/ventes-actions";
import { FORECAST_STAGES, type SalesSettings } from "@/lib/gestion/crm/extensions";
import { STAGE_LABELS } from "@/lib/gestion/crm/types";

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const pctOf = (x: number) => Math.round(x * 1000) / 10;

function SeasonField({ label, prefix, value }: { label: string; prefix: string; value: string }) {
  const [m, d] = value.split("-").map(Number);
  return (
    <div className="cr-setting">
      <div className="cr-setting__row">
        <span className="cr-setting__label">{label}</span>
        <span className="vt-season">
          <input name={`${prefix}Day`} type="number" min={1} max={31} defaultValue={d} className="g-input" aria-label={`${label} : jour`} required />
          <select name={`${prefix}Month`} defaultValue={String(m)} className="g-select g-input" aria-label={`${label} : mois`}>
            {MONTHS.map((name, i) => (
              <option key={name} value={String(i + 1)}>
                {name}
              </option>
            ))}
          </select>
        </span>
      </div>
    </div>
  );
}

export function SalesSettingsForm({ settings, observed, minSample }: { settings: SalesSettings; observed: Record<string, { resolved: number; won: number; rate: number | null }>; minSample: number }) {
  const [state, action, pending] = useActionState<VentesResult, FormData>(saveSalesSettingsAction, undefined);
  return (
    <form action={action} className="cr-form">
      <div>
        <div className="cr-setting">
          <div className="cr-setting__row">
            <label className="cr-setting__label" htmlFor="s-hotViews">
              Client chaud : soumission ouverte au moins
            </label>
            <span className="cr-number">
              <input id="s-hotViews" name="hotViews" type="number" min={2} max={50} defaultValue={settings.hotViews} required />
              <span>fois</span>
            </span>
          </div>
          <p className="cr-setting__hint">Le client passe en tête de la liste À faire, avec « Appeler ». Chaque nouvelle journée de consultation le refait remonter.</p>
        </div>
        <div className="cr-setting">
          <div className="cr-setting__row">
            <label className="cr-setting__label" htmlFor="s-hotWindowDays">
              … et consultée pour la dernière fois il y a au plus
            </label>
            <span className="cr-number">
              <input id="s-hotWindowDays" name="hotWindowDays" type="number" min={1} max={90} defaultValue={settings.hotWindowDays} required />
              <span>jours</span>
            </span>
          </div>
          <p className="cr-setting__hint">Au-delà, la relance habituelle d’une soumission ouverte prend le relais.</p>
        </div>
        <SeasonField label="Début de la saison de climatisation" prefix="cooling" value={settings.coolingStart} />
        <SeasonField label="Début de la saison de chauffage" prefix="heating" value={settings.heatingStart} />
        <p className="cr-setting__hint" style={{ marginTop: 8 }}>
          Un client perdu revient dans À faire au début de la saison qui suit sa perte. Avec un consentement enregistré dans sa fiche, la relance automatique est permise ; sinon, c’est une tâche manuelle, sans aucun envoi. Une demande restée sans réponse au-delà du délai de rappel est signalée pour une alerte texto au propriétaire (envoyée par les automatisations).
        </p>
      </div>

      <div id="prevision" className="k-card k-card--cream k-card--pad" style={{ display: "grid", gap: 12 }}>
        <div>
          <p className="cr-setting__label" style={{ margin: 0 }}>
            Prévision : probabilité de signer, par étape
          </p>
          <p className="cr-setting__hint">
            Laissée vide, la prévision prend le taux observé dans vos dossiers dès qu’au moins {minSample} dossiers réglés (signés ou perdus) sont passés par l’étape ; sinon l’étape reste « à définir » et n’est pas comptée. Aucune probabilité n’est inventée.
          </p>
        </div>
        <div className="vt-probs">
          {FORECAST_STAGES.map((s) => {
            const o = observed[s];
            const set = settings.stageProbabilities[s];
            return (
              <label key={s} className="vt-prob">
                <span className="vt-prob__head">
                  {STAGE_LABELS[s]}
                  <span className="cr-number">
                    <input name={`p_${s}`} type="number" min={0} max={100} step={0.5} defaultValue={typeof set === "number" ? pctOf(set) : ""} placeholder={o?.rate !== null && o?.rate !== undefined ? String(pctOf(o.rate)) : "—"} aria-label={`Probabilité, ${STAGE_LABELS[s]}`} />
                    <span>%</span>
                  </span>
                </span>
                <p>
                  {o?.rate !== null && o?.rate !== undefined
                    ? `Observé : ${pctOf(o.rate)} % (${o.won} signés sur ${o.resolved} dossiers réglés).`
                    : `Pas encore assez de dossiers pour un taux observé (${o?.resolved ?? 0} sur ${minSample}).`}
                </p>
              </label>
            );
          })}
        </div>
      </div>

      {state ? (
        <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
          {state.ok ? state.message : state.error}
        </p>
      ) : null}
      <div>
        <button type="submit" className="k-btn k-btn--primary k-btn--lg" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer le radar et la prévision"}
        </button>
      </div>
    </form>
  );
}
