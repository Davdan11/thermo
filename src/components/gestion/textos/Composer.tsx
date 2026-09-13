"use client";

/* Zone de réponse : envoi par le numéro du site (Twilio), compteur de textos (GSM-7 / UCS-2), état de l'envoi.
   Envoi par onSubmit + transition : le texte n'est vidé qu'après un envoi réussi. Ctrl/Cmd + Entrée envoie. */
import { startTransition, useActionState, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Ban } from "lucide-react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { smsSegments } from "@/lib/textos/segments";

export type SendState = { ok: boolean; message: string; at: number } | undefined;

const MAX = 1000;

export function Composer({ action, blocked }: { action: (prev: SendState, fd: FormData) => Promise<SendState>; blocked?: string }) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [text, setText] = useState("");
  const [seen, setSeen] = useState<SendState>(undefined);
  const form = useRef<HTMLFormElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const reduced = useReduced();

  // Envoi réussi : on vide la zone (ajustement pendant le rendu, sans effet).
  if (state !== seen) {
    setSeen(state);
    if (state?.ok) setText("");
  }

  if (blocked) {
    return (
      <div className="t-compose">
        <p className="t-blocked" role="note">
          <Ban size={16} aria-hidden /> {blocked}
        </p>
      </div>
    );
  }

  const trimmed = text.trim();
  const seg = smsSegments(trimmed);
  const grow = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 180)}px`;
  };

  return (
    <form
      ref={form}
      className="t-compose"
      onSubmit={(e) => {
        e.preventDefault();
        if (!trimmed || pending) return;
        const fd = new FormData(e.currentTarget);
        startTransition(() => formAction(fd));
        requestAnimationFrame(() => input.current && grow(input.current));
      }}
    >
      <div className="t-compose__row">
        <label htmlFor="t-reply" className="g-sr">
          Votre réponse
        </label>
        <textarea
          id="t-reply"
          ref={input}
          name="body"
          className="t-compose__input"
          rows={1}
          maxLength={MAX}
          placeholder="Répondre par texto…"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            grow(e.target);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              form.current?.requestSubmit();
            }
          }}
        />
        <button type="submit" className="t-send" disabled={!trimmed || pending} aria-label={pending ? "Envoi en cours" : "Envoyer le texto"}>
          <ArrowUp size={20} aria-hidden />
        </button>
      </div>
      <div className="t-compose__meta">
        <span>
          {trimmed
            ? `${trimmed.length} car. · ${seg.segments} texto${seg.segments > 1 ? "s" : ""}${seg.encoding === "UCS-2" ? ` (accents : ${seg.perSegment} car. par texto)` : ""}`
            : "Envoyé du numéro du site"}
        </span>
        <AnimatePresence mode="wait" initial={false}>
          {pending ? (
            <motion.span key="p" className="t-compose__state" initial={reduced ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              Envoi…
            </motion.span>
          ) : state ? (
            <motion.span
              key={state.at}
              role="status"
              className={`t-compose__state t-compose__state--${state.ok ? "ok" : "bad"}`}
              initial={reduced ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {state.message}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}
