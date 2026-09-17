"use client";

/* Réglages de la file Facebook : interrupteur, rythme, jours d'avance, approbation (date de départ, obligatoire). */
import { useActionState, useState } from "react";
import { saveSettingsAction, type PresenceResult } from "@/app/gestion/(prive)/presence/actions";
import type { ReglagesSociaux } from "@/lib/social/types";

export function SettingsForm({ reglages, interrupteur, reel, depart }: { reglages: ReglagesSociaux; interrupteur: boolean; reel: boolean; /** Date de départ AAAA-MM-JJ (heure de Montréal), ou vide. */ depart: string }) {
  const [state, action, pending] = useActionState<PresenceResult, FormData>(saveSettingsAction, undefined);
  const [on, setOn] = useState(interrupteur);

  return (
    <form action={action} className="pr-settings">
      <label className={`pr-master${on ? " is-on" : ""}`}>
        <span className="pr-switch">
          <input type="checkbox" name="interrupteur" checked={on} onChange={(e) => setOn(e.target.checked)} role="switch" aria-checked={on} />
          <i aria-hidden />
        </span>
        <span className="pr-master__txt">
          <b>Publication automatique</b>
          <span>
            {on
              ? reel
                ? "Allumée : les éléments approuvés partent à leur heure sur la page Facebook."
                : "Allumée, mais le site reste en mode essai (connexion Facebook incomplète, ou hors du serveur de production)."
              : "Éteinte (par défaut) : rien ne part vers Facebook, même avec « Publier maintenant ». Le studio montre ce qui serait envoyé."}
          </span>
        </span>
      </label>

      <fieldset className="pr-fieldset">
        <legend>Rythme (heure de Montréal)</legend>
        <div className="pr-rythme">
          <label className="pr-check">
            <input type="checkbox" name="pub_actif" defaultChecked={reglages.publication.actif} />
            <span>Publications (1080 × 1350)</span>
          </label>
          <label className="g-field">
            <span className="g-label">Une tous les</span>
            <span className="cr-number">
              <input name="pub_jours" type="number" min={1} max={14} defaultValue={reglages.publication.tousLesJours} required />
              <span>jours</span>
            </span>
          </label>
          <label className="g-field">
            <span className="g-label">À</span>
            <input className="g-input pr-time" type="time" name="pub_heure" step={300} defaultValue={reglages.publication.heure} required />
          </label>
        </div>
        <div className="pr-rythme">
          <label className="pr-check">
            <input type="checkbox" name="story_actif" defaultChecked={reglages.story.actif} />
            <span>Stories (1080 × 1920)</span>
          </label>
          <label className="g-field">
            <span className="g-label">Une tous les</span>
            <span className="cr-number">
              <input name="story_jours" type="number" min={1} max={14} defaultValue={reglages.story.tousLesJours} required />
              <span>jours</span>
            </span>
          </label>
          <label className="g-field">
            <span className="g-label">À</span>
            <input className="g-input pr-time" type="time" name="story_heure" step={300} defaultValue={reglages.story.heure} required />
          </label>
        </div>
        <label className="g-field">
          <span className="g-label">File préparée à l’avance</span>
          <span className="cr-number">
            <input name="jours_avance" type="number" min={1} max={14} defaultValue={reglages.joursAvance} required />
            <span>jours</span>
          </span>
        </label>
      </fieldset>

      <fieldset className="pr-fieldset">
        <legend>Approbation</legend>
        <p className="g-hint">Pendant les 7 jours qui suivent la première mise en ligne, chaque élément attend votre approbation. Ensuite, un élément en attente est approuvé d’office à son heure ; vous pouvez toujours le refuser ou le modifier avant.</p>
        <label className="g-field">
          <span className="g-label">Date de départ (première mise en ligne)</span>
          <input className="g-input" type="date" name="depart" defaultValue={depart} />
          <span className="g-hint">Vide : la date sera notée à la première publication réelle.</span>
        </label>
        <label className="pr-check">
          <input type="checkbox" name="obligatoire" defaultChecked={reglages.approbation.toujoursObligatoire} />
          <span>Garder l’approbation obligatoire (aucune approbation d’office, même après 7 jours)</span>
        </label>
      </fieldset>

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
