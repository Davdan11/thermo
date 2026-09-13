"use client";

/* ==================================================================
   Panneau de l'assistant — chargé au premier clic (import dynamique).

   Réponses en flux, fiches citées construites par le serveur à partir
   des données (jamais du texte du modèle), appel persistant à ThermoMatch.
   Accessibilité : dialogue modal, focus piégé, Échap pour fermer,
   journal aria-live (occupé pendant le flux), cibles de 44 px.
   Sur mobile : feuille pleine hauteur.
   ================================================================== */

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { ASSISTANT_LIMITS } from "@/lib/assistant/limits";
import { askAssistant, type AssistantCard, type ChatMessage } from "./client";
import { RichText } from "./rich-text";
import { isAssistantHiddenOn } from "./routes";
import "./assistant-panel.css";

const EASE = [0.22, 1, 0.36, 1] as const;
const MAX_CHARS = ASSISTANT_LIMITS.maxQuestionChars;

const STARTERS = [
  "Quelle thermopompe pour un bungalow de 1 200 pi² à Lévis ?",
  "C’est quoi le HSPF2 ?",
  "Combien de subvention pour une Daikin murale ?",
];

const TOOL_LABELS: Record<string, string> = {
  search_models: "Je parcours le catalogue",
  get_model: "Je lis la fiche",
  get_ranking: "Je consulte les classements",
  logisvert_for: "Je vérifie la liste LogisVert",
  city_climate: "Je regarde le climat local",
  glossary: "J’ouvre le glossaire",
};

interface UiMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
  status: "streaming" | "done" | "error";
  tool?: string;
  cards?: AssistantCard[];
}

/* Conversation gardée en mémoire tant que la page est ouverte (fermer puis rouvrir la retrouve). Jamais stockée ailleurs. */
let savedMessages: UiMessage[] = [];
let nextId = 1;

const INTERRUPTED = "Connexion interrompue. Réessayez ou appelez-nous au 438-900-3224.";

/** Historique envoyé au serveur : paires question/réponse complètes seulement (tours alternés). */
function buildHistory(messages: UiMessage[]): ChatMessage[] {
  const out: ChatMessage[] = [];
  messages.forEach((m, i) => {
    const reply = messages[i + 1];
    if (m.role === "user" && reply?.role === "assistant" && reply.status === "done" && reply.content.trim()) {
      out.push({ role: "user", content: m.content }, { role: "assistant", content: reply.content });
    }
  });
  return out;
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AssistantPanel({ onClose }: { onClose: () => void }) {
  const reduced = useReduced();
  const [isMobile] = useState(() => typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches);
  const [messages, setMessages] = useState<UiMessage[]>(() => savedMessages);
  const [input, setInput] = useState("");
  const [closing, setClosing] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const pendingRef = useRef("");
  const rafRef = useRef(0);
  const stickRef = useRef(true);
  const titleId = useId();
  const inputId = useId();

  const streaming = messages.some((m) => m.status === "streaming");
  const userTurns = messages.filter((m) => m.role === "user").length;
  const limitReached = !streaming && userTurns >= ASSISTANT_LIMITS.maxUserTurns;

  useEffect(() => {
    savedMessages = messages;
  }, [messages]);

  const requestClose = useCallback(() => setClosing(true), []);

  // Focus initial, Échap, défilement de la page bloqué sous la feuille mobile, arrêt du flux à la fermeture.
  useEffect(() => {
    const frame = requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setClosing(true);
      }
    };
    document.addEventListener("keydown", onKey);
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    if (isMobile) html.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("keydown", onKey);
      html.style.overflow = previousOverflow;
      abortRef.current?.abort();
      savedMessages = savedMessages.map((m) =>
        m.status === "streaming" ? { ...m, status: m.content ? "done" : "error", content: m.content || INTERRUPTED, tool: undefined } : m,
      );
    };
  }, [isMobile]);

  // Suit le bas du journal pendant le flux, sauf si la personne remonte pour relire.
  useEffect(() => {
    const el = logRef.current;
    if (el && stickRef.current) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const onLogScroll = () => {
    const el = logRef.current;
    if (el) stickRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
  };

  // Focus piégé dans le dialogue.
  const onPanelKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusables = [...panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')];
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  /* Sur mobile, la feuille couvre la page : elle se ferme quand on suit un lien. Les parcours sans assistant la ferment aussi. */
  const onLink = useCallback(
    (href: string) => {
      if (isMobile || isAssistantHiddenOn(href)) requestClose();
    },
    [isMobile, requestClose],
  );

  const send = useCallback(
    async (text: string) => {
      const question = text.trim().slice(0, MAX_CHARS);
      if (!question || streaming || limitReached) return;
      const history = [...buildHistory(messages), { role: "user" as const, content: question }];
      const botId = nextId + 1;
      setMessages((prev) => [
        ...prev,
        { id: nextId, role: "user", content: question, status: "done" },
        { id: botId, role: "assistant", content: "", status: "streaming" },
      ]);
      nextId += 2;
      setInput("");
      stickRef.current = true;

      const ctrl = new AbortController();
      abortRef.current = ctrl;
      const update = (fn: (m: UiMessage) => UiMessage) => setMessages((prev) => prev.map((m) => (m.id === botId ? fn(m) : m)));
      const flush = () => {
        rafRef.current = 0;
        const chunk = pendingRef.current;
        if (!chunk) return;
        pendingRef.current = "";
        update((m) => ({ ...m, content: m.content + chunk, tool: undefined }));
      };

      try {
        await askAssistant(
          history,
          (e) => {
            switch (e.t) {
              case "text":
                pendingRef.current += e.v;
                if (!rafRef.current) rafRef.current = requestAnimationFrame(flush);
                break;
              case "tool":
                update((m) => ({ ...m, tool: e.v }));
                break;
              case "final":
                pendingRef.current = "";
                cancelAnimationFrame(rafRef.current);
                rafRef.current = 0;
                update((m) => ({ ...m, content: e.v }));
                break;
              case "cards":
                update((m) => ({ ...m, cards: e.v }));
                break;
              case "error":
                pendingRef.current = "";
                update((m) => ({ ...m, content: e.v, status: "error", tool: undefined }));
                break;
              case "done":
                flush();
                update((m) => (m.status === "streaming" ? { ...m, status: "done", tool: undefined } : m));
                break;
            }
          },
          ctrl.signal,
        );
      } catch {
        if (ctrl.signal.aborted) return;
        update((m) => ({ ...m, content: INTERRUPTED, status: "error", tool: undefined }));
      } finally {
        if (abortRef.current === ctrl) abortRef.current = null;
      }
      if (!ctrl.signal.aborted) {
        update((m) => (m.status === "streaming" ? { ...m, status: m.content ? "done" : "error", content: m.content || INTERRUPTED, tool: undefined } : m));
      }
    },
    [messages, streaming, limitReached],
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setInput("");
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const panelMotion = reduced
    ? { hidden: { opacity: 0 }, shown: { opacity: 1 } }
    : isMobile
      ? { hidden: { y: "100%" }, shown: { y: 0 } }
      : { hidden: { opacity: 0, y: 28, scale: 0.96 }, shown: { opacity: 1, y: 0, scale: 1 } };
  const panelTransition = reduced
    ? { duration: 0.15 }
    : closing
      ? { duration: 0.28, ease: EASE }
      : { type: "spring" as const, stiffness: 420, damping: 38, mass: 0.9 };

  return (
    <div className="tav-ast-root">
      <motion.div
        className="tav-ast-scrim"
        aria-hidden="true"
        onClick={requestClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: closing ? 0 : 1 }}
        transition={{ duration: reduced ? 0.1 : 0.35, ease: EASE }}
      />
      <motion.section
        ref={panelRef}
        id="tav-assistant"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="tav-ast-panel"
        onKeyDown={onPanelKeyDown}
        initial={panelMotion.hidden}
        animate={closing ? panelMotion.hidden : panelMotion.shown}
        transition={panelTransition}
        onAnimationComplete={() => {
          if (closing) onClose();
        }}
      >
        <header className="tav-ast-head">
          <div>
            <p className="tav-ast-kicker">
              <span className="tav-ast-dot" aria-hidden="true" />
              Assistant Thermopompes À Vendre
            </p>
            <h2 id={titleId} className="tav-ast-title">
              Une question ?
            </h2>
          </div>
          <div className="tav-ast-head-actions">
            {messages.length > 0 ? (
              <button type="button" className="tav-ast-reset" onClick={reset}>
                Recommencer
              </button>
            ) : null}
            <button type="button" className="tav-ast-close" onClick={requestClose} aria-label="Fermer l’assistant">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </header>

        <p className="tav-ast-notice">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="2.5" y="6" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          Ne partagez pas de renseignements personnels.
        </p>

        <div
          ref={logRef}
          className="tav-ast-log"
          role="log"
          aria-live="polite"
          aria-relevant="additions text"
          aria-busy={streaming}
          onScroll={onLogScroll}
        >
          {messages.length === 0 ? (
            <div className="tav-ast-intro">
              <motion.p
                className="tav-ast-intro-title"
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
              >
                Posez votre question en mots simples.
              </motion.p>
              <motion.p
                className="tav-ast-intro-sub"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              >
                Modèles, subventions LogisVert, termes techniques : les réponses viennent des données du site.
              </motion.p>
              <ul className="tav-ast-chips" aria-label="Exemples de questions">
                {STARTERS.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.07 }}
                  >
                    <button type="button" className="tav-ast-chip" onClick={() => void send(s)}>
                      <span>{s}</span>
                      <Arrow className="tav-ast-chip-arrow" />
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          ) : (
            messages.map((m) => <MessageView key={m.id} m={m} reduced={reduced} onLink={onLink} />)
          )}
        </div>

        <footer className="tav-ast-foot">
          <Link href="/trouver-ma-thermopompe" className="tav-ast-cta" onClick={() => onLink("/trouver-ma-thermopompe")}>
            <span className="tav-ast-cta-text">
              <strong>ThermoMatch</strong>
              <span>La bonne thermopompe pour votre maison, en 13 questions</span>
            </span>
            <Arrow className="tav-ast-cta-arrow" />
          </Link>

          {limitReached ? (
            <div className="tav-ast-limit">
              <p>Cette conversation a atteint sa limite de questions.</p>
              <button type="button" onClick={reset}>
                Nouvelle conversation
              </button>
            </div>
          ) : (
            <form className="tav-ast-form" onSubmit={onSubmit}>
              <label htmlFor={inputId} className="sr-only">
                Votre question
              </label>
              <input
                ref={inputRef}
                id={inputId}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={MAX_CHARS}
                placeholder="Ex. : c’est quoi le SEER2 ?"
                autoComplete="off"
                enterKeyHint="send"
              />
              <button type="submit" className="tav-ast-send" disabled={!input.trim() || streaming} aria-label="Envoyer la question">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 14.5v-11M4.5 8L9 3.5 13.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
          {input.length > MAX_CHARS - 100 ? (
            <p className="tav-ast-count" aria-live="polite">
              {input.length} / {MAX_CHARS}
            </p>
          ) : null}
          <p className="tav-ast-fine">
            Réponses automatiques tirées des données du site, à confirmer sur la fiche. Une question sur votre projet ?{" "}
            <a href="tel:4389003224">438-900-3224</a>
          </p>
        </footer>
      </motion.section>
    </div>
  );
}

function MessageView({ m, reduced, onLink }: { m: UiMessage; reduced: boolean; onLink: (href: string) => void }) {
  if (m.role === "user") {
    return (
      <motion.div
        className="tav-ast-user"
        initial={reduced ? false : { opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <span className="sr-only">Vous : </span>
        {m.content}
      </motion.div>
    );
  }
  const isStreaming = m.status === "streaming";
  const statusLine = (
    <p className="tav-ast-status">
      {TOOL_LABELS[m.tool ?? ""] ?? "Je cherche dans nos données"}
      <span className="tav-ast-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </p>
  );
  return (
    <motion.div
      className={`tav-ast-bot${m.status === "error" ? " is-error" : ""}`}
      initial={reduced ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <span className="sr-only">Assistant : </span>
      {isStreaming && !m.content ? (
        statusLine
      ) : (
        <RichText text={m.content} streaming={isStreaming} onLink={onLink} tail={isStreaming ? <span className="tav-ast-caret" aria-hidden="true" /> : null} />
      )}
      {isStreaming && m.content && m.tool ? statusLine : null}
      <AnimatePresence>
        {m.cards?.length ? (
          <motion.ul
            key="cards"
            className="tav-ast-cards"
            aria-label="Fiches citées"
            initial="hidden"
            animate="shown"
            variants={{ hidden: {}, shown: { transition: { staggerChildren: reduced ? 0 : 0.07, delayChildren: reduced ? 0 : 0.08 } } }}
          >
            {m.cards.map((c) => (
              <motion.li
                key={c.slug}
                variants={reduced ? { hidden: { opacity: 1 }, shown: { opacity: 1 } } : { hidden: { opacity: 0, y: 12 }, shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } } }}
              >
                <Link href={c.url} className="tav-ast-card" onClick={() => onLink(c.url)}>
                  <span className="tav-ast-card-img">
                    {c.imageUrl ? (
                      <Image src={c.imageUrl} alt="" width={64} height={52} sizes="64px" />
                    ) : (
                      <span className="tav-ast-card-noimg" aria-hidden="true">
                        {c.name.split(" ")[0]}
                      </span>
                    )}
                  </span>
                  <span className="tav-ast-card-body">
                    <span className="tav-ast-card-name">{c.name}</span>
                    <span className="tav-ast-card-figs">
                      {c.figures.map((f) => (
                        <span key={f.label}>
                          <em>{f.label}</em> {f.value}
                        </span>
                      ))}
                    </span>
                  </span>
                  <Arrow className="tav-ast-card-go" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
