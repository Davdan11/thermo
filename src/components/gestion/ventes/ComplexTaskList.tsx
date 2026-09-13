"use client";

/* ==================================================================
   Tâches à étapes : carte par tâche, liste de contrôle cochable
   (optimiste : la case et la barre de progression bougent aussitôt,
   reviennent si le serveur refuse), étape ajoutée d'un geste,
   Terminer / Rouvrir, Supprimer (confirmation).
   ================================================================== */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useOptimistic, useState, useTransition } from "react";
import { Check, Plus, RotateCcw, Trash2 } from "lucide-react";
import { addStepAction, deleteComplexTaskAction, setComplexDoneAction, toggleStepAction, type VentesResult } from "@/app/gestion/(prive)/ventes-actions";
import type { ComplexTaskDTO } from "@/lib/gestion/crm/taches-complexes";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { EASE } from "../charts/palette";

type Patch = { type: "step"; taskId: string; stepId: string; done: boolean } | { type: "done"; taskId: string; done: boolean } | { type: "remove"; taskId: string };

function reduce(tasks: ComplexTaskDTO[], p: Patch): ComplexTaskDTO[] {
  if (p.type === "remove") return tasks.filter((t) => t.id !== p.taskId);
  return tasks.map((t) => {
    if (t.id !== p.taskId) return t;
    if (p.type === "done") return { ...t, done: p.done, due: p.done ? null : t.due };
    const steps = t.steps.map((s) => (s.id === p.stepId ? { ...s, done: p.done, due: p.done ? null : s.due } : s));
    return { ...t, steps, progress: { done: steps.filter((s) => s.done).length, total: steps.length } };
  });
}

function AddStep({ taskId, onError }: { taskId: string; onError: (e: string) => void }) {
  const [label, setLabel] = useState("");
  const [pending, start] = useTransition();
  return (
    <form
      className="vt-addstep"
      onSubmit={(e) => {
        e.preventDefault();
        const v = label.trim();
        if (!v) return;
        start(async () => {
          const r = await addStepAction(taskId, v);
          if (r && !r.ok) onError(r.error);
          else setLabel("");
        });
      }}
    >
      <input className="g-input" value={label} onChange={(e) => setLabel(e.target.value)} maxLength={200} placeholder="Ajouter une étape" aria-label="Nouvelle étape" />
      <button type="submit" className="k-btn k-btn--icon" disabled={pending || !label.trim()} aria-label="Ajouter l’étape">
        <Plus size={17} aria-hidden />
      </button>
    </form>
  );
}

function CxCard({ t, showClient, showJob, run, onError }: { t: ComplexTaskDTO; showClient: boolean; showJob: boolean; run: (p: Patch, fn: () => Promise<VentesResult>) => void; onError: (e: string) => void }) {
  const [confirm, setConfirm] = useState(false);
  const cls = t.done ? " is-done" : t.due?.overdue ? " is-over" : "";
  return (
    <article className={`vt-cxcard${cls}`} aria-label={t.title}>
      <div className="vt-cxcard__top">
        <h3 className="vt-cxcard__title">{t.title}</h3>
        {t.done ? <span className="vt-cxcard__due">Terminée{t.doneWhen ? ` · ${t.doneWhen}` : ""}</span> : t.due ? <span className="vt-cxcard__due">{t.due.label}</span> : null}
        {(showClient && t.client) || (showJob && t.job) || t.template || t.notes ? (
          <p className="vt-cxcard__meta">
            {showClient && t.client ? <Link href={`/gestion/clients/${t.client.id}`}>{t.client.who}</Link> : null}
            {showJob && t.job ? <Link href={`/gestion/jobs/${t.job.id}`}>Job n° {t.job.number}</Link> : null}
            {t.template ? <span>Modèle : {t.template}</span> : null}
            {t.notes ? <span>{t.notes}</span> : null}
          </p>
        ) : null}
      </div>
      {t.progress.total ? (
        <div className="vt-progress" aria-label={`${t.progress.done} étape${t.progress.done > 1 ? "s" : ""} faite${t.progress.done > 1 ? "s" : ""} sur ${t.progress.total}`}>
          <span className="vt-progress__track" aria-hidden>
            <i style={{ ["--p" as string]: String(t.progress.done / t.progress.total) }} />
          </span>
          <span>
            {t.progress.done} / {t.progress.total}
          </span>
        </div>
      ) : null}
      {t.steps.length ? (
        <ul className="vt-steps">
          {t.steps.map((s) => (
            <li key={s.id} className={`vt-step${s.done ? " is-done" : ""}`}>
              <label>
                <input type="checkbox" checked={s.done} disabled={t.done} onChange={(e) => run({ type: "step", taskId: t.id, stepId: s.id, done: e.target.checked }, () => toggleStepAction(t.id, s.id, e.target.checked))} />
                <span className="vt-step__text">
                  <span className="vt-step__label">{s.label}</span>
                  {s.due ? <small className={s.due.overdue ? "is-over" : undefined}>{s.due.label}</small> : s.doneWhen ? <small>Fait · {s.doneWhen}</small> : null}
                </span>
              </label>
            </li>
          ))}
        </ul>
      ) : null}
      {!t.done ? <AddStep taskId={t.id} onError={onError} /> : null}
      <div className="vt-cxcard__actions">
        {confirm ? (
          <>
            <button type="button" className="k-btn k-btn--ghost" onClick={() => setConfirm(false)}>
              Garder
            </button>
            <button type="button" className="k-btn" onClick={() => run({ type: "remove", taskId: t.id }, () => deleteComplexTaskAction(t.id))}>
              <Trash2 size={15} aria-hidden /> Supprimer pour de bon
            </button>
          </>
        ) : (
          <button type="button" className="k-btn k-btn--ghost" onClick={() => setConfirm(true)}>
            <Trash2 size={15} aria-hidden /> Supprimer
          </button>
        )}
        <button type="button" className={`k-btn is-push${t.done ? "" : " k-btn--ok"}`} onClick={() => run({ type: "done", taskId: t.id, done: !t.done }, () => setComplexDoneAction(t.id, !t.done))}>
          {t.done ? (
            <>
              <RotateCcw size={15} aria-hidden /> Rouvrir
            </>
          ) : (
            <>
              <Check size={16} aria-hidden /> Terminer
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export function ComplexTaskList({ tasks, showClient = true, showJob = true, empty }: { tasks: ComplexTaskDTO[]; showClient?: boolean; showJob?: boolean; empty?: React.ReactNode }) {
  const reduced = useReduced();
  const [items, apply] = useOptimistic(tasks, reduce);
  const [error, setError] = useState<string | null>(null);
  const [, start] = useTransition();
  const run = (p: Patch, fn: () => Promise<VentesResult>) =>
    start(async () => {
      setError(null);
      apply(p);
      const r = await fn();
      if (r && !r.ok) setError(r.error);
    });

  if (!items.length) return <>{empty ?? null}</>;
  return (
    <>
      {error ? (
        <p className="cr-msg is-bad" role="alert" style={{ marginBottom: 8 }}>
          {error}
        </p>
      ) : null}
      <ul className="vt-cx">
        <AnimatePresence initial={false}>
          {items.map((t) => (
            <motion.li
              key={t.id}
              layout={reduced ? false : "position"}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0, transition: { duration: 0.1 } } : { opacity: 0, x: 48, transition: { duration: 0.28, ease: EASE } }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <CxCard t={t} showClient={showClient} showJob={showJob} run={run} onError={setError} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
}
