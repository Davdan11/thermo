"use client";

/* Réglages des textos : accusé de réception (activé ou non, texte), compteur de textos en direct et aperçu
   tel que le client le verra. Envoi par onSubmit + transition : rien n'est vidé si la validation échoue. */
import { startTransition, useActionState, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RotateCcw, Save } from "lucide-react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { AUTO_REPLY_MAX, DEFAULT_AUTO_REPLY } from "@/lib/textos/messages";
import { smsSegments } from "@/lib/textos/segments";

export type SettingsState = { ok: boolean; message: string; at: number } | undefined;

const EASE = [0.22, 1, 0.36, 1] as const;

export function Meter({ text }: { text: string }) {
  const seg = smsSegments(text);
  return (
    <div className="t-meter" aria-live="polite">
      <span className="t-meter__segs" aria-hidden>
        {Array.from({ length: Math.max(1, Math.min(seg.segments, 8)) }, (_, i) => (
          <span key={i} className={`t-meter__seg${seg.segments <= 1 ? " t-meter__seg--1" : ""}`} />
        ))}
      </span>
      <span>
        {text.length} caractères · <strong>{seg.segments} texto{seg.segments > 1 ? "s" : ""}</strong> ({seg.encoding}, {seg.perSegment} car. par texto)
      </span>
      {seg.offenders.length ? <span>Caractères qui imposent 70 car. par texto : {seg.offenders.slice(0, 8).join(" ")}</span> : null}
    </div>
  );
}

export function TextosSettingsForm({
  action,
  initial,
  siteNumber,
  updated,
}: {
  action: (prev: SettingsState, fd: FormData) => Promise<SettingsState>;
  initial: { autoReply: boolean; autoReplyText: string };
  siteNumber: string;
  updated?: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [on, setOn] = useState(initial.autoReply);
  const [text, setText] = useState(initial.autoReplyText);
  const reduced = useReduced();
  const shown = text.trim();

  return (
    <div className="t-settings">
      <form
        className="g-card g-card__pad g-form"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          startTransition(() => formAction(fd));
        }}
      >
        <div className="g-card__head" style={{ marginBottom: 0 }}>
          <h2 className="g-h2">Accusé de réception</h2>
          {updated ? <span className="g-count">Modifié {updated}</span> : null}
        </div>
        <label className="g-check">
          <input type="checkbox" name="autoReply" checked={on} onChange={(e) => setOn(e.target.checked)} />
          Répondre automatiquement aux nouveaux textos
        </label>
        <p className="g-hint" style={{ margin: "-8px 0 0" }}>
          Au premier texto d’un numéro, puis au plus une fois par 12 heures, et pas si vous lui avez écrit dans les 12 dernières heures. Jamais à un
          numéro désabonné, jamais en réponse à ARRÊT, STOP ou AIDE.
        </p>
        <div className="g-field">
          <label className="g-label" htmlFor="autoReplyText">
            Texte envoyé
          </label>
          <textarea id="autoReplyText" name="autoReplyText" className="g-textarea" rows={7} maxLength={AUTO_REPLY_MAX} value={text} onChange={(e) => setText(e.target.value)} />
          <Meter text={shown} />
        </div>
        <div className="g-actions">
          <button type="submit" className="g-btn g-btn--primary" disabled={pending}>
            <Save size={16} aria-hidden /> {pending ? "Enregistrement…" : "Enregistrer"}
          </button>
          <button type="button" className="g-btn g-btn--quiet" onClick={() => setText(DEFAULT_AUTO_REPLY)} disabled={text === DEFAULT_AUTO_REPLY}>
            <RotateCcw size={15} aria-hidden /> Texte proposé
          </button>
        </div>
        <AnimatePresence initial={false}>
          {state && !pending ? (
            <motion.p
              key={state.at}
              role="status"
              className={`g-alert${state.ok ? " g-alert--ok" : ""}`}
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {state.message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </form>

      <aside aria-label="Aperçu chez le client">
        <div className="t-phone">
          <div className="t-phone__screen">
            <span className="t-phone__who">{siteNumber}</span>
            <span className="t-phone__bubble t-phone__bubble--mine">Bonjour, avez-vous des thermopompes murales en stock ?</span>
            <AnimatePresence mode="wait" initial={false}>
              {on && shown ? (
                <motion.span
                  key="on"
                  className="t-phone__bubble"
                  initial={reduced ? false : { opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  style={{ transformOrigin: "0% 100%" }}
                >
                  {shown}
                </motion.span>
              ) : (
                <motion.span key="off" className="t-phone__off" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Aucune réponse automatique
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </aside>
    </div>
  );
}
