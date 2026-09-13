"use client";

/* ==================================================================
   Chantier S — une clé de « Clés et connexions ».
   La valeur n'est jamais réaffichée : l'état se limite à « définie »
   ou « manquante ». Champ masqué, jamais pré-rempli, vidé après
   l'enregistrement. Pour BACKUP_ENCRYPTION_KEY : générateur dans le
   navigateur (la clé ne vient jamais du serveur), à copier AVANT
   d'enregistrer.
   ================================================================== */

import { useActionState, useEffect, useRef, useState } from "react";
import { Check, Copy, Eye, EyeOff, RefreshCw, Trash2 } from "lucide-react";
import { Chip } from "@/components/gestion/kit/Chip";

export type KeyState = { ok: true; message: string } | { ok: false; error: string } | undefined;

export interface KeyRowData {
  name: string;
  label: string;
  hint: string;
  defined: boolean;
  pendingRestart: boolean;
  applies: "reload" | "build";
}

function Generator({ onPick }: { onPick: (v: string) => void }) {
  const [value, setValue] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const make = () => {
    const b = new Uint8Array(32);
    crypto.getRandomValues(b);
    const hex = Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
    setValue(hex);
    setCopied(false);
    onPick(hex);
  };
  const copy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      /* rien */
    }
  };
  return (
    <div className="se-gen">
      <button type="button" className="k-btn k-btn--ghost" onClick={make}>
        <RefreshCw size={15} aria-hidden /> Générer une clé dans ce navigateur
      </button>
      {value ? (
        <div className="se-gen__out">
          <p className="se-gen__warn">Copiez cette clé dans votre gestionnaire de mots de passe AVANT d’enregistrer : sans elle, les sauvegardes sont illisibles. Elle ne sera plus jamais affichée.</p>
          <div className="se-secret__box">
            <code>{value}</code>
            <button type="button" className="k-btn k-btn--ghost k-btn--icon" onClick={copy} aria-label="Copier la clé générée">
              {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function KeyRow({ k, action, index = 0 }: { k: KeyRowData; action: (prev: KeyState, fd: FormData) => Promise<KeyState>; index?: number }) {
  const [state, submit, pending] = useActionState<KeyState, FormData>(action, undefined);
  const [show, setShow] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state?.ok) form.current?.reset();
  }, [state]);

  return (
    <article className="se-key" style={{ animationDelay: `${Math.min(index, 10) * 40}ms` }} aria-labelledby={`k-${k.name}`}>
      <header className="se-key__head">
        <div style={{ minWidth: 0 }}>
          <h3 className="se-key__label" id={`k-${k.name}`}>
            {k.label}
          </h3>
          <p className="se-key__name">{k.name}</p>
        </div>
        <div className="se-key__chips">
          {k.defined ? (
            <Chip tone="ok" dot>
              Définie
            </Chip>
          ) : (
            <Chip tone="muted">Manquante</Chip>
          )}
          {k.pendingRestart ? <Chip tone="warn">{k.applies === "build" ? "Au prochain déploiement" : "Redémarrage en attente"}</Chip> : null}
        </div>
      </header>
      <form ref={form} action={submit} className="se-key__form" autoComplete="off">
        <input type="hidden" name="variable" value={k.name} />
        <input type="hidden" name="intent" value="enregistrer" />
        <div className="se-key__field">
          <input
            ref={input}
            name="valeur"
            type={show ? "text" : "password"}
            className="g-input se-key__input"
            placeholder={k.defined ? "Nouvelle valeur (remplace l’actuelle)" : k.hint}
            aria-label={`${k.label} (${k.hint})`}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            required
            maxLength={600}
          />
          <button type="button" className="se-key__eye" onClick={() => setShow((s) => !s)} aria-label={show ? "Masquer la saisie" : "Afficher la saisie"}>
            {show ? <EyeOff size={16} aria-hidden /> : <Eye size={16} aria-hidden />}
          </button>
        </div>
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Enregistrement…" : "Enregistrer"}
        </button>
      </form>
      <p className="g-hint se-key__hint">Format : {k.hint}.</p>
      {k.name === "BACKUP_ENCRYPTION_KEY" ? (
        <Generator
          onPick={(v) => {
            if (input.current) input.current.value = v;
          }}
        />
      ) : null}
      {k.defined ? (
        <details className="se-key__remove">
          <summary>
            <Trash2 size={14} aria-hidden /> Retirer cette clé
          </summary>
          <form action={submit}>
            <input type="hidden" name="variable" value={k.name} />
            <input type="hidden" name="intent" value="retirer" />
            <p className="g-hint">La fonction qui l’utilise s’arrêtera après le redémarrage.</p>
            <button type="submit" className="k-btn se-btn-danger" disabled={pending}>
              Retirer
            </button>
          </form>
        </details>
      ) : null}
      {state ? (
        <p className={`cr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
          {state.ok ? state.message : state.error}
        </p>
      ) : null}
    </article>
  );
}
