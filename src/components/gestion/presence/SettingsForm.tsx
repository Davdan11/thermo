"use client";

/* Réglages du studio : interrupteur général, rotation, séries (active, heure, story, automatique). */
import { useActionState, useState } from "react";
import { saveSettingsAction, type PresenceResult } from "@/app/gestion/(prive)/presence/actions";
import type { PresenceSettings, SeriesId } from "@/lib/presence/types";

export interface SeriesRow {
  id: SeriesId;
  label: string;
  dayLabel: string;
  available: boolean;
  autoAllowed: boolean;
  /** Automatique possible maintenant (gabarit validé), sinon la raison. */
  auto: { ok: true } | { ok: false; reason: string };
}

export function SettingsForm({ settings, rows, real }: { settings: PresenceSettings; rows: SeriesRow[]; real: boolean }) {
  const [state, action, pending] = useActionState<PresenceResult, FormData>(saveSettingsAction, undefined);
  const [on, setOn] = useState(settings.autoPublish);

  return (
    <form action={action} className="pr-settings">
      <label className={`pr-master${on ? " is-on" : ""}`}>
        <span className="pr-switch">
          <input type="checkbox" name="autoPublish" checked={on} onChange={(e) => setOn(e.target.checked)} role="switch" aria-checked={on} />
          <i aria-hidden />
        </span>
        <span className="pr-master__txt">
          <b>Publication automatique</b>
          <span>
            {on
              ? real
                ? "Activée : les publications approuvées partent à leur heure sur Facebook et Instagram."
                : "Activée, mais le site reste en mode essai tant que la connexion Meta n’est pas complète (ou hors du serveur de production)."
              : "Éteinte (par défaut) : rien ne part vers Meta, même avec « Publier maintenant ». Le studio montre ce qui serait envoyé."}
          </span>
        </span>
      </label>

      <label className="g-field pr-rotation">
        <span className="g-label">Rotation : pas le même modèle, la même ville ou le même terme avant</span>
        <span className="cr-number">
          <input name="rotationWeeks" type="number" min={1} max={52} defaultValue={settings.rotationWeeks} required />
          <span>semaines</span>
        </span>
      </label>

      <div className="pr-series" role="table" aria-label="Séries">
        <div className="pr-series__head" role="row">
          <span role="columnheader">Série</span>
          <span role="columnheader">Active</span>
          <span role="columnheader">Heure</span>
          <span role="columnheader">Story</span>
          <span role="columnheader">Automatique</span>
        </div>
        {rows.map((r) => {
          const s = settings.series[r.id];
          const autoDisabled = !r.autoAllowed || !r.available || (!r.auto.ok && !s.auto);
          return (
            <div key={r.id} className={`pr-series__row${r.available ? "" : " is-off"}`} role="row">
              <span role="cell" className="pr-series__name">
                <i className={`pr-dot pr-dot--${r.id}`} aria-hidden />
                <span>
                  <b>{r.label}</b>
                  <small>{r.available ? r.dayLabel : "Réservée à la phase 2 (outil terrain)"}</small>
                </span>
              </span>
              <span role="cell" data-label="Active">
                <input type="checkbox" name={`${r.id}_enabled`} defaultChecked={s.enabled} disabled={!r.available} aria-label={`${r.label} : active`} />
              </span>
              <span role="cell" data-label="Heure">
                <input type="time" className="g-input pr-time" name={`${r.id}_time`} defaultValue={s.time} step={300} disabled={!r.available} aria-label={`${r.label} : heure`} />
              </span>
              <span role="cell" data-label="Story">
                <input type="checkbox" name={`${r.id}_story`} defaultChecked={s.story} disabled={!r.available} aria-label={`${r.label} : story Instagram`} />
              </span>
              <span role="cell" data-label="Automatique" title={!r.auto.ok ? r.auto.reason : undefined}>
                <input type="checkbox" name={`${r.id}_auto`} defaultChecked={s.auto} disabled={autoDisabled} aria-label={`${r.label} : publication sans approbation`} />
                {r.id === "question" ? <small>Toujours manuelle</small> : !r.auto.ok && r.available ? <small>Après une approbation</small> : null}
              </span>
            </div>
          );
        })}
      </div>

      <label className="pr-check">
        <input type="checkbox" name="applyTimes" />
        <span>Déplacer aussi les publications déjà prévues à la nouvelle heure de leur série</span>
      </label>

      <div className="pr-actions__row">
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer les réglages"}
        </button>
      </div>
      {state ? (
        <p className={`pr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
          {state.ok ? state.message : state.error}
        </p>
      ) : null}
    </form>
  );
}
