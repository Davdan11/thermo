"use client";

/* ==================================================================
   Modèles de tâches (Réglages) : liste, modification sur place,
   nouveau modèle, suppression (confirmation), modèles de départ.
   Étapes : libellé, échéance facultative (N jours après la création
   de la tâche), ordre modifiable.
   ================================================================== */

import { useActionState, useEffect, useState, useTransition } from "react";
import { ArrowDown, ArrowUp, Pencil, Plus, Sparkles, Trash2, X } from "lucide-react";
import { addStarterTemplatesAction, deleteTemplateAction, saveTemplateAction, type VentesResult } from "@/app/gestion/(prive)/ventes-actions";
import type { TaskTemplate, TemplateStep } from "@/lib/gestion/crm/extensions";

type Draft = { key: number; label: string; offset: string };
let seq = 0;
const toDrafts = (steps: TemplateStep[]): Draft[] => steps.map((s) => ({ key: ++seq, label: s.label, offset: s.offsetDays === null ? "" : String(s.offsetDays) }));

function TemplateForm({ t, onDone }: { t: TaskTemplate | null; onDone: () => void }) {
  const [state, action, pending] = useActionState<VentesResult, FormData>(saveTemplateAction, undefined);
  const [steps, setSteps] = useState<Draft[]>(() => (t ? toDrafts(t.steps) : [{ key: ++seq, label: "", offset: "" }]));
  useEffect(() => {
    if (state?.ok) onDone();
  }, [state, onDone]);
  const json = JSON.stringify(steps.filter((s) => s.label.trim()).map((s) => ({ label: s.label.trim(), offsetDays: s.offset === "" ? null : Math.max(0, Math.min(365, Math.round(Number(s.offset)) || 0)) })));
  const move = (i: number, d: -1 | 1) =>
    setSteps((xs) => {
      const j = i + d;
      if (j < 0 || j >= xs.length) return xs;
      const out = [...xs];
      [out[i], out[j]] = [out[j], out[i]];
      return out;
    });
  return (
    <form action={action} className="cr-form" style={{ gap: 12 }}>
      {t ? <input type="hidden" name="id" value={t.id} /> : null}
      <input type="hidden" name="steps" value={json} />
      <div className="cr-form__row">
        <label className="g-field" style={{ margin: 0 }}>
          <span className="g-label">Nom du modèle</span>
          <input name="name" className="g-input" required maxLength={80} defaultValue={t?.name ?? ""} placeholder="Nouvelle installation" />
        </label>
        <label className="g-field" style={{ margin: 0 }}>
          <span className="g-label">
            Échéance de la tâche <small>(jours après sa création, facultatif)</small>
          </span>
          <input name="dueInDays" className="g-input" type="number" min={0} max={365} defaultValue={t?.dueInDays ?? ""} />
        </label>
      </div>
      <label className="g-field" style={{ margin: 0 }}>
        <span className="g-label">Description</span>
        <input name="description" className="g-input" maxLength={300} defaultValue={t?.description ?? ""} />
      </label>
      <div>
        <p className="g-label" style={{ marginBottom: 6 }}>
          Étapes
        </p>
        <ol className="vt-tpl__steps">
          {steps.map((s, i) => (
            <li key={s.key} className="vt-tpl__step">
              <input
                className="g-input"
                value={s.label}
                maxLength={200}
                placeholder={`Étape ${i + 1}`}
                aria-label={`Étape ${i + 1}`}
                onChange={(e) => setSteps((xs) => xs.map((x) => (x.key === s.key ? { ...x, label: e.target.value } : x)))}
              />
              <span className="vt-tpl__offset">
                <input
                  className="g-input"
                  type="number"
                  min={0}
                  max={365}
                  value={s.offset}
                  aria-label={`Échéance de l’étape ${i + 1}, en jours`}
                  onChange={(e) => setSteps((xs) => xs.map((x) => (x.key === s.key ? { ...x, offset: e.target.value } : x)))}
                />
                j
              </span>
              <span className="vt-tpl__btns">
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" disabled={i === 0} onClick={() => move(i, -1)} aria-label="Monter">
                  <ArrowUp size={15} aria-hidden />
                </button>
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" disabled={i === steps.length - 1} onClick={() => move(i, 1)} aria-label="Descendre">
                  <ArrowDown size={15} aria-hidden />
                </button>
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" disabled={steps.length === 1} onClick={() => setSteps((xs) => xs.filter((x) => x.key !== s.key))} aria-label="Retirer l’étape">
                  <X size={15} aria-hidden />
                </button>
              </span>
            </li>
          ))}
        </ol>
        <p className="g-hint" style={{ margin: "6px 0 0" }}>
          Échéance d’une étape : nombre de jours après la création de la tâche (vide : sans échéance).
        </p>
        <button type="button" className="k-btn k-btn--ghost" style={{ marginTop: 6 }} disabled={steps.length >= 40} onClick={() => setSteps((xs) => [...xs, { key: ++seq, label: "", offset: "" }])}>
          <Plus size={15} aria-hidden /> Ajouter une étape
        </button>
      </div>
      {state && !state.ok ? (
        <p className="cr-msg is-bad" role="alert">
          {state.error}
        </p>
      ) : null}
      <div className="g-actions">
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer le modèle"}
        </button>
        <button type="button" className="k-btn k-btn--ghost" onClick={onDone}>
          Annuler
        </button>
      </div>
    </form>
  );
}

function TemplateItem({ t, onError }: { t: TaskTemplate; onError: (e: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [pending, start] = useTransition();
  if (editing) {
    return (
      <li className="vt-tpl">
        <TemplateForm t={t} onDone={() => setEditing(false)} />
      </li>
    );
  }
  return (
    <li className="vt-tpl">
      <div className="vt-tpl__head">
        <strong>{t.name}</strong>
        <small>
          {t.steps.length} étape{t.steps.length > 1 ? "s" : ""}
          {t.dueInDays !== null ? ` · échéance ${t.dueInDays} j après la création` : ""}
        </small>
        <span className="vt-tpl__btns">
          <button type="button" className="k-btn k-btn--ghost" onClick={() => setEditing(true)}>
            <Pencil size={15} aria-hidden /> Modifier
          </button>
          {confirm ? (
            <button
              type="button"
              className="k-btn"
              disabled={pending}
              onClick={() =>
                start(async () => {
                  const r = await deleteTemplateAction(t.id);
                  if (r && !r.ok) onError(r.error);
                })
              }
            >
              <Trash2 size={15} aria-hidden /> Supprimer pour de bon
            </button>
          ) : (
            <button type="button" className="k-btn k-btn--ghost" onClick={() => setConfirm(true)} aria-label={`Supprimer le modèle ${t.name}`}>
              <Trash2 size={15} aria-hidden />
            </button>
          )}
        </span>
      </div>
      {t.description ? (
        <p className="g-hint" style={{ margin: 0 }}>
          {t.description}
        </p>
      ) : null}
      <ol className="vt-tpl__view">
        {t.steps.map((s, i) => (
          <li key={i}>
            {s.label}
            {s.offsetDays !== null ? <small> · J+{s.offsetDays}</small> : null}
          </li>
        ))}
      </ol>
    </li>
  );
}

export function TemplatesEditor({ templates }: { templates: TaskTemplate[] }) {
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const starterMissing = !templates.some((t) => t.name.toLowerCase() === "nouvelle installation") || !templates.some((t) => t.name.toLowerCase() === "soumission commerciale");
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {error ? (
        <p className="cr-msg is-bad" role="alert">
          {error}
        </p>
      ) : null}
      {templates.length ? (
        <ul className="vt-tpls">
          {templates.map((t) => (
            <TemplateItem key={t.id} t={t} onError={setError} />
          ))}
        </ul>
      ) : (
        <p className="g-hint" style={{ margin: 0 }}>
          Aucun modèle pour l’instant.
        </p>
      )}
      {creating ? (
        <div className="vt-tpl">
          <TemplateForm t={null} onDone={() => setCreating(false)} />
        </div>
      ) : (
        <div className="g-actions">
          <button type="button" className="k-btn k-btn--ink" onClick={() => setCreating(true)}>
            <Plus size={15} aria-hidden /> Nouveau modèle
          </button>
          {starterMissing ? (
            <button
              type="button"
              className="k-btn"
              disabled={pending}
              onClick={() =>
                start(async () => {
                  const r = await addStarterTemplatesAction();
                  if (r && !r.ok) setError(r.error);
                })
              }
            >
              <Sparkles size={15} aria-hidden /> Ajouter les modèles de départ
            </button>
          ) : null}
        </div>
      )}
      {starterMissing && !creating ? (
        <p className="g-hint" style={{ margin: 0 }}>
          Modèles de départ : « Nouvelle installation » et « Soumission commerciale », sans délai imposé ; modifiez-les à votre façon.
        </p>
      ) : null}
    </div>
  );
}
