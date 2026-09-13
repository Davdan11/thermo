"use client";

/* Question de la semaine : écrite par le propriétaire, anonymisée. Le filtre Loi 25 bloque courriels, numéros,
   codes postaux et adresses ; l'avertissement rappelle de ne jamais écrire de nom. */
import { useActionState, useMemo, useState } from "react";
import { ShieldAlert, TriangleAlert } from "lucide-react";
import { saveQuestionAction, type PresenceResult } from "@/app/gestion/(prive)/presence/actions";
import { LOI25_WARNING, privacyMessage, privacyProblems } from "@/lib/presence/loi25";
import { unknownNumbers } from "@/lib/presence/numbers";

export function QuestionEditor({ id, question, answer, disabled }: { id: string; question: string; answer: string; disabled: boolean }) {
  const [q, setQ] = useState(question);
  const [a, setA] = useState(answer);
  const [state, action, pending] = useActionState<PresenceResult, FormData>(saveQuestionAction, undefined);
  const blocked = useMemo(() => privacyMessage(privacyProblems(`${q}\n${a}`)), [q, a]);
  const numbers = useMemo(() => unknownNumbers(`${q}\n${a}`, { values: {}, texts: [] }), [q, a]);

  return (
    <form action={action} className="pr-editor">
      <input type="hidden" name="id" value={id} />
      <div className="pr-loi25">
        <ShieldAlert size={18} aria-hidden />
        <p>{LOI25_WARNING}</p>
      </div>
      <label className="g-field">
        <span className="g-label">La question, reformulée</span>
        <textarea name="question" className="g-textarea" rows={3} maxLength={400} value={q} onChange={(e) => setQ(e.target.value)} disabled={disabled} placeholder="Ex. : Faut-il déneiger l’unité extérieure l’hiver ?" />
      </label>
      <label className="g-field">
        <span className="g-label">Votre réponse</span>
        <textarea name="answer" className="g-textarea" rows={7} maxLength={1400} value={a} onChange={(e) => setA(e.target.value)} disabled={disabled} />
      </label>
      {blocked ? (
        <div className="pr-warn pr-warn--bad" role="alert">
          <TriangleAlert size={16} aria-hidden />
          <p>{blocked}</p>
        </div>
      ) : null}
      {!blocked && numbers.length ? (
        <div className="pr-warn" role="status">
          <TriangleAlert size={16} aria-hidden />
          <p>
            Nombres sans source du site : <b>{[...new Set(numbers.map((n) => n.raw))].join(", ")}</b>. Assurez-vous qu’ils sont exacts.
          </p>
        </div>
      ) : null}
      <div className="pr-actions__row">
        <button type="submit" className="k-btn k-btn--primary" disabled={disabled || pending || !!blocked || (q === question && a === answer)}>
          {pending ? "Enregistrement…" : "Enregistrer"}
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
