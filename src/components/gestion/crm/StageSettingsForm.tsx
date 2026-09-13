"use client";

/* Réglages des étapes du parcours (refonte R2) : nom affiché, délai d'alerte, escalade par texto et probabilité de la
   prévision, étape par étape ; escalade et heures silencieuses. Les étapes elles-mêmes restent calculées. */
import { useActionState } from "react";
import { saveParcoursSettingsAction, type ParcoursResult } from "@/app/gestion/(prive)/parcours-actions";
import type { StageSettingsView } from "@/lib/gestion/crm/parcours-service";
import "./parcours.css";

const pctOf = (p: number) => `${Math.round(p * 1000) / 10} %`;
const SOURCE: Record<string, string> = { reglee: "réglée", observee: "observée", signe: "contrat signé", "a-definir": "à définir" };
const hoursLabel = (h: number, business: boolean) => `${Math.round(h * 10) / 10} h${business ? " ouvrables" : ""}`;

export function StageSettingsForm({ view }: { view: StageSettingsView }) {
  const [state, action, pending] = useActionState<ParcoursResult, FormData>(saveParcoursSettingsAction, undefined);
  const s = view.settings;
  return (
    <form action={action} className="cr-form">
      <div className="ps-rows">
        {view.rows.map((r, i) => {
          const now = view.optionValues[r.probability];
          return (
            <div key={r.step} className="ps-row" style={{ ["--i" as string]: i }}>
              <div className="ps-row__head">
                <span className="ps-row__n" aria-hidden>
                  {i + 1}
                </span>
                <div style={{ minWidth: 0 }}>
                  <p className="cr-setting__label" style={{ margin: 0 }}>
                    {r.label || r.defaultLabel}
                  </p>
                  <p className="ps-row__hint">{r.hint}</p>
                </div>
              </div>
              <div className="ps-row__fields">
                <label className="pc-filter pc-filter--wide">
                  <span>Nom affiché</span>
                  <input name={`label_${r.step}`} defaultValue={r.label} placeholder={r.defaultLabel} maxLength={40} />
                </label>
                <label className="pc-filter">
                  <span>Délai d’alerte (h)</span>
                  <input
                    name={`delay_${r.step}`}
                    inputMode="decimal"
                    defaultValue={r.alertSet === null ? "0" : typeof r.alertSet === "number" ? String(r.alertSet) : ""}
                    placeholder={r.defaultDelay ? `${r.defaultDelay.hours} (défaut)` : "aucun"}
                    title={r.defaultDelay ? `Défaut : ${hoursLabel(r.defaultDelay.hours, r.defaultDelay.business)}, ${r.defaultDelay.from}` : "Aucun délai par défaut"}
                    aria-describedby={`delay-${r.step}`}
                  />
                </label>
                <label className="pc-filter">
                  <span>Texto</span>
                  <span className="ps-check">
                    <input type="checkbox" name={`sms_${r.step}`} defaultChecked={r.sms} /> Escalade
                  </span>
                </label>
                <label className="pc-filter pc-filter--wide">
                  <span>Probabilité (prévision)</span>
                  <select name={`prob_${r.step}`} defaultValue={r.probability}>
                    {view.probabilityOptions.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                        {o.id === r.probabilityDefault ? " (défaut)" : ""}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <p className="ps-row__hint" id={`delay-${r.step}`}>
                {r.delay ? `Alerte après ${hoursLabel(r.delay.hours, r.delay.business)}${r.delay.source === "defaut" ? ` (défaut : ${r.delay.from})` : ""}.` : "Aucune alerte de délai."} Probabilité en vigueur : {now && now.p !== null ? `${pctOf(now.p)} (${SOURCE[now.source] ?? now.source})` : "à définir, la note de priorité reste « à définir »"}.
              </p>
            </div>
          );
        })}
        <div className="ps-row">
          <div className="ps-row__fields">
            <label className="pc-filter pc-filter--wide">
              <span>Nom affiché de « Perdu »</span>
              <input name="label_perdu" defaultValue={view.lostLabel} placeholder="Perdu" maxLength={40} />
            </label>
            <label className="pc-filter">
              <span>Escalade après (h)</span>
              <input name="escalateAfterHours" type="number" min={0} max={72} defaultValue={s.escalateAfterHours} required />
            </label>
            <label className="pc-filter">
              <span>Silence de (h)</span>
              <input name="quietStart" type="number" min={0} max={23} defaultValue={s.quietStart} required />
            </label>
            <label className="pc-filter">
              <span>à (h)</span>
              <input name="quietEnd" type="number" min={0} max={23} defaultValue={s.quietEnd} required />
            </label>
          </div>
          <p className="ps-row__hint">
            Quand le délai d’une étape est dépassé, une tâche apparaît dans À faire. Si elle est encore ouverte après l’escalade, un texto part au propriétaire (ALERT_SMS_TO), un seul par dossier et par étape, jamais pendant les heures silencieuses (il part à la fin). Délai vide : délai par défaut ; 0 : aucune alerte. Une probabilité « à définir » n’est jamais inventée.
          </p>
        </div>
      </div>
      {state ? (
        <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
          {state.ok ? state.message : state.error}
        </p>
      ) : null}
      <div>
        <button type="submit" className="k-btn k-btn--primary k-btn--lg" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer les étapes"}
        </button>
      </div>
    </form>
  );
}
