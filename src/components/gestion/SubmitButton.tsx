"use client";

import { useFormStatus } from "react-dom";

/** Bouton d'envoi qui se désactive pendant l'envoi du formulaire parent. */
export function SubmitButton({ children, pendingLabel, className, name, value, disabled, title }: { children: React.ReactNode; pendingLabel?: string; className?: string; name?: string; value?: string; disabled?: boolean; title?: string }) {
  const { pending, data } = useFormStatus();
  const mine = pending && (!name || data?.get(name) === value);
  return (
    <button type="submit" className={className} name={name} value={value} disabled={pending || disabled} aria-busy={mine || undefined} title={title}>
      {mine && pendingLabel ? pendingLabel : children}
    </button>
  );
}
