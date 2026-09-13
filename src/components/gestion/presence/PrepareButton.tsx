"use client";

/* « Préparer les 30 prochains jours » : remplit la file selon la grille, sans rien écraser. */
import { useState, useTransition } from "react";
import { CalendarPlus } from "lucide-react";
import { prepareAction, type PresenceResult } from "@/app/gestion/(prive)/presence/actions";

export function PrepareButton() {
  const [pending, start] = useTransition();
  const [res, setRes] = useState<PresenceResult>();
  return (
    <div className="pr-prepare">
      <button type="button" className="k-btn k-btn--primary k-btn--lg" disabled={pending} aria-busy={pending || undefined} onClick={() => start(async () => setRes(await prepareAction()))}>
        <CalendarPlus size={17} aria-hidden />
        {pending ? "Préparation…" : "Préparer les 30 prochains jours"}
      </button>
      {res ? (
        <p className={`pr-msg ${res.ok ? "is-ok" : "is-bad"}`} role={res.ok ? "status" : "alert"}>
          {res.ok ? res.message : res.error}
        </p>
      ) : null}
    </div>
  );
}
