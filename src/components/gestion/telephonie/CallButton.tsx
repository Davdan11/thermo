"use client";

/* ==================================================================
   Chantier T — « Appeler » : appel masqué (numéro du site), statut en
   direct. Le numéro du client n'est jamais envoyé au navigateur : le
   serveur le retrouve à partir de l'identifiant (client, conversation
   ou demande). Panneau en bas de l'écran (téléphone) ou en bas à droite
   (bureau), rendu dans #g-portal ; en ligne sur la page du lien texto.
   Statut relu toutes les 1,5 s jusqu'à la fin de l'appel (10 min au plus).
   ================================================================== */

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Loader2, Phone, PhoneCall, PhoneOff, X } from "lucide-react";
import { maskedCallStatusAction, startMaskedCallAction } from "@/app/gestion/(prive)/telephonie/actions";
import type { CallView } from "@/lib/telephonie/masked-call";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import "./telephonie.css";

export type CallTarget = { kind: "client" | "conversation" | "lead"; id: string };
type Out = { ok: true; view: CallView } | { ok: false; error: string };

const EASE = [0.22, 1, 0.36, 1] as const;
const POLL_MS = 1500;
const POLL_MAX_MS = 10 * 60_000;

const STEPS: Array<{ phase: CallView["phase"]; label: string }> = [
  { phase: "proprio-sonne", label: "Votre cellulaire" },
  { phase: "proprio-en-ligne", label: "Touche 1" },
  { phase: "client-sonne", label: "Le client" },
  { phase: "en-cours", label: "En ligne" },
];
const RANK: Record<CallView["phase"], number> = { initie: 0, "proprio-sonne": 1, "proprio-en-ligne": 2, "client-sonne": 3, "en-cours": 4, termine: 5 };

function useTicking(active: boolean): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [active]);
  return now;
}

const clock = (ms: number) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

export function CallDock({ view, error, onClose, inline = false }: { view: CallView | null; error: string | null; onClose?: () => void; inline?: boolean }) {
  const reduced = useReduced();
  const talking = Boolean(view && !view.final && view.phase === "en-cours" && view.answeredAt);
  const now = useTicking(talking);
  const tone = error ? "bad" : !view ? "live" : view.final ? view.tone : "live";
  const Icon = error || (view?.final && view.tone !== "ok") ? PhoneOff : view?.final ? Phone : PhoneCall;
  const rank = view ? RANK[view.phase] : 0;
  return (
    <motion.section
      className={`tp-dock${inline ? " tp-dock--inline" : ""} is-${tone}`}
      role="status"
      aria-live="polite"
      initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, y: 24, transition: { duration: 0.22 } }}
      transition={{ duration: 0.42, ease: EASE }}
    >
      <div className="tp-dock__top">
        <span className="tp-dock__icon" aria-hidden>
          <Icon size={21} />
        </span>
        <div style={{ minWidth: 0 }}>
          <p className="tp-dock__title">{error ? "Appel impossible" : (view?.title ?? "Appel en préparation…")}</p>
          <p className="tp-dock__detail">{error ?? view?.detail}</p>
        </div>
        {talking && view?.answeredAt ? (
          <span className="tp-dock__timer" aria-label="Durée de la conversation">
            {clock(now - Date.parse(view.answeredAt))}
          </span>
        ) : onClose && (error || view?.final) ? (
          <button type="button" className="tp-dock__close" onClick={onClose} aria-label="Fermer">
            <X size={18} aria-hidden />
          </button>
        ) : null}
      </div>
      {!error && view && view.result !== "simule" ? (
        <ol className="tp-steps" aria-label="Étapes de l’appel">
          {STEPS.map((s) => {
            const r = RANK[s.phase];
            const done = rank > r || (view.final && view.result === "repondu");
            const current = !view.final && rank === r;
            return (
              <li key={s.phase} className={done || current ? (current ? "is-done is-now" : "is-done") : undefined}>
                {s.label}
              </li>
            );
          })}
        </ol>
      ) : null}
      {!error ? <p className="tp-dock__foot">Le client voit le numéro du site, jamais votre cellulaire.</p> : null}
    </motion.section>
  );
}

/** Appel masqué avec statut en direct. `start` et `poll` : actions de /gestion par défaut, ou celles du lien signé. */
export function useMaskedCall(opts: { start?: (t: CallTarget) => Promise<Out>; poll?: (id: string) => Promise<Out> } = {}) {
  const start = opts.start ?? startMaskedCallAction;
  const poll = opts.poll ?? maskedCallStatusAction;
  const [view, setView] = useState<CallView | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const startedAt = useRef(0);

  const call = useCallback(
    async (target: CallTarget) => {
      if (busy || (view && !view.final)) {
        setOpen(true);
        return;
      }
      setBusy(true);
      setError(null);
      setView(null);
      setOpen(true);
      startedAt.current = Date.now();
      try {
        const r = await start(target);
        if (r.ok) setView(r.view);
        else setError(r.error);
      } catch {
        setError("Le serveur ne répond pas. Réessayez.");
      } finally {
        setBusy(false);
      }
    },
    [busy, view, start],
  );

  useEffect(() => {
    if (!view || view.final) return;
    if (Date.now() - startedAt.current > POLL_MAX_MS) return;
    const t = setTimeout(async () => {
      try {
        const r = await poll(view.id);
        if (r.ok) setView(r.view);
      } catch {
        /* nouvel essai au prochain tour */
      }
    }, POLL_MS);
    return () => clearTimeout(t);
  }, [view, poll]);

  const close = useCallback(() => {
    setOpen(false);
    setError(null);
    if (view?.final) setView(null);
  }, [view]);

  return { call, view, error, busy, open, close, live: Boolean(view && !view.final) };
}

const subscribe = () => () => {};
function usePortalTarget(): HTMLElement | null {
  return useSyncExternalStore(
    subscribe,
    () => document.getElementById("g-portal"),
    () => null,
  );
}

/** Panneau de l'appel, dans la coquille de /gestion (#g-portal). */
export function CallDockPortal({ state }: { state: ReturnType<typeof useMaskedCall> }) {
  const target = usePortalTarget();
  if (!target) return null;
  return createPortal(<AnimatePresence>{state.open ? <CallDock key="dock" view={state.view} error={state.error} onClose={state.close} /> : null}</AnimatePresence>, target);
}

/** Bouton « Appeler » (fiche client, conversation) : appel masqué et panneau en direct. */
export function MaskedCallButton({ target, className, children, title }: { target: CallTarget; className?: string; children?: React.ReactNode; title?: string }) {
  const state = useMaskedCall();
  return (
    <>
      <button type="button" className={`${className ?? "k-btn k-btn--ink"}${state.busy ? " tp-busy" : ""}`} onClick={() => state.call(target)} disabled={state.busy} title={title ?? "Appel masqué : le client voit le numéro du site"} aria-busy={state.busy}>
        {children ?? (
          <>
            {state.busy ? <Loader2 size={16} aria-hidden /> : <Phone size={16} aria-hidden />} Appeler
          </>
        )}
      </button>
      <CallDockPortal state={state} />
    </>
  );
}
