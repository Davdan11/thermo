"use client";

/* Outils de la fiche client : changer d'étape (raison obligatoire pour « perdue »), fusionner avec un autre client,
   séparer une partie de la fiche (numéro partagé par deux personnes). */
import { useState, useTransition } from "react";
import { Merge, MoveRight, Split } from "lucide-react";
import { mergeClientsAction, searchClientsAction, setStageAction, splitClientAction } from "@/app/gestion/(prive)/crm-actions";
import type { SearchResult } from "@/lib/gestion/crm/service";
import { STAGE_LABELS, STAGES, type Stage } from "@/lib/gestion/crm/types";
import { STAGE_COLORS } from "../charts/palette";
import { StageChip } from "../kit/Chip";
import { Sheet } from "../kit/Sheet";

export function StageChanger({ clientId, current, pipedriveEnabled, trigger }: { clientId: string; current: Stage; pipedriveEnabled: boolean; trigger?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState<Stage | null>(null);
  const [reason, setReason] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const submit = (stage: Stage, why = "") =>
    start(async () => {
      setError(null);
      const r = await setStageAction(clientId, stage, why);
      if (r && !r.ok) setError(r.error);
      else {
        setOpen(false);
        setPick(null);
        setReason("");
      }
    });
  return (
    <Sheet
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setPick(null);
      }}
      title="Changer d’étape"
      description={pipedriveEnabled ? "L’affaire Pipedrive suit si une étape y est associée dans Réglages." : "L’étape tient jusqu’à ce qu’un nouvel événement fasse avancer le client."}
      trigger={
        trigger ?? (
          <button type="button" className="k-btn">
            <MoveRight size={16} aria-hidden /> Changer d’étape
          </button>
        )
      }
    >
      {pick === "perdue" ? (
        <form
          className="cr-note-form"
          onSubmit={(e) => {
            e.preventDefault();
            submit("perdue", reason);
          }}
        >
          <label className="g-field" style={{ margin: 0 }}>
            <span className="g-label">Pourquoi ce client est-il perdu ?</span>
            <input className="g-input" value={reason} onChange={(e) => setReason(e.target.value)} required maxLength={200} autoFocus placeholder="Ex. : a choisi un concurrent, projet reporté, trop cher" />
          </label>
          <div className="cr-note-form__row">
            <button type="button" className="k-btn k-btn--ghost" onClick={() => setPick(null)}>
              Retour
            </button>
            <button type="submit" className="k-btn k-btn--ink" disabled={pending || !reason.trim()}>
              {pending ? "…" : "Marquer perdu"}
            </button>
          </div>
          <p className="g-hint" style={{ margin: 0 }}>
            Il sera réactivé automatiquement à sa prochaine demande (appel, texto, formulaire).
          </p>
        </form>
      ) : (
        <div className="cr-movelist">
          {STAGES.map((s) => (
            <button key={s} type="button" aria-current={s === current ? "true" : undefined} disabled={pending} onClick={() => (s === "perdue" ? setPick("perdue") : s !== current && submit(s))}>
              <i style={{ background: STAGE_COLORS[s] }} aria-hidden />
              {STAGE_LABELS[s]}
              {s === current ? <small style={{ marginLeft: "auto", color: "var(--g-muted)" }}>actuelle</small> : null}
            </button>
          ))}
        </div>
      )}
      {error ? (
        <p className="cr-msg is-bad" role="alert" style={{ marginTop: 10 }}>
          {error}
        </p>
      ) : null}
    </Sheet>
  );
}

export function MergeSheet({ clientId, name }: { clientId: string; name: string }) {
  const [q, setQ] = useState("");
  const [list, setList] = useState<SearchResult[]>([]);
  const [chosen, setChosen] = useState<SearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const search = (v: string) => {
    setQ(v);
    if (v.trim().length < 2) return;
    start(async () => setList((await searchClientsAction(v)).filter((r) => r.id !== clientId)));
  };
  return (
    <Sheet
      title="Fusionner deux fiches"
      description={`La plus ancienne garde son identifiant ; notes, tâches et historique sont réunis. « ${name} » et l’autre fiche deviennent un seul client.`}
      trigger={
        <button type="button" className="k-btn k-btn--ghost">
          <Merge size={16} aria-hidden /> Fusionner
        </button>
      }
    >
      <div className="sh-cmd">
        <label className="sh-cmd__field">
          <input className="sh-cmd__input" type="search" placeholder="Chercher l’autre fiche" value={q} onChange={(e) => search(e.target.value)} autoFocus />
        </label>
        {chosen ? (
          <div className="cr-note-form">
            <p style={{ margin: 0 }}>
              Fusionner avec <strong>{chosen.name}</strong>
              {chosen.city ? ` (${chosen.city})` : ""} ?
            </p>
            <div className="cr-note-form__row">
              <button type="button" className="k-btn k-btn--ghost" onClick={() => setChosen(null)}>
                Annuler
              </button>
              <button
                type="button"
                className="k-btn k-btn--ink"
                disabled={pending}
                onClick={() =>
                  start(async () => {
                    const r = await mergeClientsAction(clientId, chosen.id);
                    if (r && !r.ok) setError(r.error);
                  })
                }
              >
                {pending ? "Fusion…" : "Fusionner"}
              </button>
            </div>
          </div>
        ) : (
          <ul className="sh-cmd__list">
            {(q.trim().length >= 2 ? list : []).map((r) => (
              <li key={r.id}>
                <button type="button" className="sh-cmd__item" style={{ width: "100%", border: 0, background: "none", font: "inherit", textAlign: "left", cursor: "pointer" }} onClick={() => setChosen(r)}>
                  <StageChip stage={r.stage} size="sm" />
                  <span>
                    <span className="sh-cmd__name">{r.name}</span>
                    <span className="sh-cmd__meta">{r.city}</span>
                  </span>
                  {r.last4 ? <span className="sh-cmd__meta">••{r.last4}</span> : null}
                </button>
              </li>
            ))}
          </ul>
        )}
        {error ? <p className="cr-msg is-bad">{error}</p> : null}
      </div>
    </Sheet>
  );
}

export function SplitSheet({ clientId, identities, pieces }: { clientId: string; identities: Array<{ selector: string; label: string; kind: "phone" | "email" }>; pieces: Array<{ selector: string; label: string; when: string }> }) {
  const [chosen, setChosen] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const toggle = (s: string) => setChosen((c) => (c.includes(s) ? c.filter((x) => x !== s) : [...c, s]));
  return (
    <Sheet
      title="Séparer une partie de la fiche"
      description="Pour deux personnes qui partagent un numéro : cochez ce qui appartient à l’autre personne. Elle aura sa propre fiche."
      trigger={
        <button type="button" className="k-btn k-btn--ghost">
          <Split size={16} aria-hidden /> Séparer
        </button>
      }
    >
      <div className="cr-note-form">
        {identities.length > 1 ? (
          <>
            <p className="g-label" style={{ margin: 0 }}>
              Coordonnées de l’autre personne
            </p>
            <div className="cr-checks">
              {identities.map((i) => (
                <label key={i.selector} className="cr-check">
                  <input type="checkbox" checked={chosen.includes(i.selector)} onChange={() => toggle(i.selector)} />
                  {i.label}
                </label>
              ))}
            </div>
          </>
        ) : null}
        <p className="g-label" style={{ margin: "6px 0 0" }}>
          Ou ses demandes, soumissions et jobs
        </p>
        <div className="cr-checks">
          {pieces.map((p) => (
            <label key={p.selector} className="cr-check">
              <input type="checkbox" checked={chosen.includes(p.selector)} onChange={() => toggle(p.selector)} />
              <span>
                {p.label} <small style={{ color: "var(--g-faint)" }}>· {p.when}</small>
              </span>
            </label>
          ))}
        </div>
        {error ? <p className="cr-msg is-bad">{error}</p> : null}
        <div>
          <button
            type="button"
            className="k-btn k-btn--ink"
            disabled={pending || !chosen.length}
            onClick={() =>
              start(async () => {
                const r = await splitClientAction(clientId, chosen);
                if (r && !r.ok) setError(r.error);
              })
            }
          >
            {pending ? "Séparation…" : "Créer la nouvelle fiche"}
          </button>
        </div>
      </div>
    </Sheet>
  );
}
