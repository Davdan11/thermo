"use client";

import { useActionState } from "react";
import type { FormState } from "@/app/gestion/(prive)/actions";

export function NotesForm({ action, defaultValue }: { action: (prev: FormState, fd: FormData) => Promise<FormState>; defaultValue: string }) {
  const [state, formAction, pending] = useActionState(action, undefined);
  return (
    <form action={formAction} className="g-form" style={{ gap: 10 }}>
      <label className="g-sr" htmlFor="internalNotes">Notes internes</label>
      <textarea id="internalNotes" name="internalNotes" className="g-textarea" defaultValue={defaultValue} placeholder="Jamais montrées aux installateurs." maxLength={3000} />
      <div className="g-actions" style={{ justifyContent: "space-between" }}>
        <span className="g-hint" role="status">{state?.message ?? ""}</span>
        <button type="submit" className="g-btn g-btn--ghost" disabled={pending}>{pending ? "Enregistrement…" : "Enregistrer"}</button>
      </div>
    </form>
  );
}
