"use client";

/* Création rapide d'une tâche à étapes (fiche client, job, page À faire) : un modèle (facultatif), un titre, une
   échéance, des étapes (une par ligne). Le formulaire n'est pas vidé si la validation échoue ; il l'est après un succès. */
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { createComplexTaskAction, type VentesResult } from "@/app/gestion/(prive)/ventes-actions";

export function ComplexTaskForm({ clientId = null, jobId = null, templates, autoFocus = false }: { clientId?: string | null; jobId?: string | null; templates: Array<{ id: string; name: string; steps: number }>; autoFocus?: boolean }) {
  const [tpl, setTpl] = useState("");
  const [state, action, pending] = useActionState<VentesResult, FormData>(async (prev, fd) => {
    const r = await createComplexTaskAction(prev, fd);
    if (r?.ok) setTpl("");
    return r;
  }, undefined);
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state?.ok) ref.current?.reset();
  }, [state]);
  const chosen = templates.find((t) => t.id === tpl);
  return (
    <form ref={ref} action={action} className="vt-cxform">
      {clientId ? <input type="hidden" name="clientId" value={clientId} /> : null}
      {jobId ? <input type="hidden" name="jobId" value={jobId} /> : null}
      <div className="vt-cxform__row">
        <label className="g-field" style={{ margin: 0 }}>
          <span className="g-label">Modèle</span>
          <select name="templateId" className="g-select g-input" value={tpl} onChange={(e) => setTpl(e.target.value)}>
            <option value="">Sans modèle</option>
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.steps} étape{t.steps > 1 ? "s" : ""})
              </option>
            ))}
          </select>
        </label>
        <label className="g-field" style={{ margin: 0 }}>
          <span className="g-label">Titre {chosen ? <small>(facultatif : « {chosen.name} »)</small> : null}</span>
          <input name="title" className="g-input" maxLength={160} required={!chosen} placeholder={chosen ? chosen.name : "Ex. : installation chez Julie"} autoFocus={autoFocus} />
        </label>
      </div>
      <div className="vt-cxform__row">
        <label className="g-field" style={{ margin: 0 }}>
          <span className="g-label">
            Échéance <small>(facultatif)</small>
          </span>
          <input type="date" name="due" className="g-input" />
        </label>
        <label className="g-field" style={{ margin: 0 }}>
          <span className="g-label">
            {chosen ? "Étapes en plus" : "Étapes"} <small>(une par ligne)</small>
          </span>
          <textarea name="steps" className="g-input" rows={3} placeholder={"Commander l’équipement\nConfirmer la date avec le client"} />
        </label>
      </div>
      <div className="vt-cxform__foot">
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Création…" : "Créer la tâche à étapes"}
        </button>
        {!templates.length ? (
          <span className="g-hint" style={{ margin: 0 }}>
            Créez des modèles dans <Link href="/gestion/reglages#modeles">Réglages</Link>.
          </span>
        ) : null}
      </div>
      {state ? (
        <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
          {state.ok ? state.message : state.error}
        </p>
      ) : null}
    </form>
  );
}
