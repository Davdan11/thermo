"use client";

/* Chantier S — nouveaux codes de secours (les anciens cessent de fonctionner). Accès sensible : code récent exigé. */
import { useActionState } from "react";
import { RefreshCw } from "lucide-react";
import { BackupCodesList } from "./BackupCodesList";

type State = { ok: true; codes: string[] } | { ok: false; error: string } | undefined;

export function RegenerateCodes({ action }: { action: (prev: State) => Promise<State> }) {
  const [state, run, pending] = useActionState<State, FormData>(action, undefined);
  if (state?.ok) {
    return (
      <div>
        <p className="cr-msg is-ok" role="status">
          Nouveaux codes créés : les anciens ne fonctionnent plus. Notez-les maintenant, ils ne seront plus affichés.
        </p>
        <BackupCodesList codes={state.codes} />
      </div>
    );
  }
  return (
    <form action={run}>
      <button type="submit" className="k-btn k-btn--ghost" disabled={pending}>
        <RefreshCw size={15} aria-hidden /> {pending ? "Création…" : "Créer 10 nouveaux codes"}
      </button>
      {state?.ok === false ? (
        <p className="cr-msg is-bad" role="alert">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
