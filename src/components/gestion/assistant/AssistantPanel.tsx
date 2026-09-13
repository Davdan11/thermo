"use client";

/* ==================================================================
   Chantier A — panneau « Demande à Claude », partout dans /gestion.
   - Ouverture : ⌘J / Ctrl+J, bouton flottant, bouton « Résumer » de
     la fiche (événement « gestion:assistant »).
   - Téléphone (390 px) d'abord : feuille du bas ; bureau : tiroir à
     droite. Réponses animées (réduites si demandé).
   - Avis permanent : les données consultées sont envoyées à Anthropic.
   - Brouillons : modifiables, copiés, ouverts dans l'outil habituel
     (courriel, Textos) ; le propriétaire envoie lui-même.
   L'historique ne vit que dans cet onglet (rien n'est gardé ailleurs).
   ================================================================== */

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Check, Copy, ExternalLink, FileUser, RotateCcw, ShieldCheck, Sparkles, TriangleAlert, X } from "lucide-react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { draftLinkAction } from "@/app/gestion/(prive)/assistant/actions";
import type { AskResult, MonthStatus, PanelStatus } from "@/lib/gestion/assistant/service";
import type { Draft } from "@/lib/gestion/assistant/tools";
import { Sheet } from "../kit/Sheet";
import { cx, dollars, num } from "../kit/format";
import { Answer } from "./Answer";
import { ASSISTANT_EVENT, type OpenAssistantDetail } from "./events";
import "./assistant.css";

interface Turn {
  id: string;
  role: "user" | "assistant";
  text: string;
  error?: boolean;
  drafts?: Draft[];
  tools?: string[];
  unverified?: boolean;
  fiche?: boolean;
}

const CLIENT_PATH = /^\/gestion\/clients\/(c_[0-9a-f]{12})/;
const THINKING = ["Je consulte le CRM…", "Je lis les fiches…", "Je fais les calculs…", "Je rédige la réponse…"];
const EASE = [0.22, 1, 0.36, 1] as const;

const cents2 = (c: number) => `${(c / 100).toLocaleString("fr-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} $`;

function monthLine(m: MonthStatus | null): string {
  if (!m) return "";
  const parts = [`${m.questions} question${m.questions > 1 ? "s" : ""} ce mois-ci`, `${num(m.tokens)} jetons`];
  if (m.spentCents !== null) parts.push(m.budgetCents !== null ? `${cents2(m.spentCents)} sur ${dollars(m.budgetCents)}` : cents2(m.spentCents));
  else if (!m.pricesSet) parts.push("tarifs non saisis");
  return parts.join(" · ");
}

function typing(t: EventTarget | null): boolean {
  const el = t as HTMLElement | null;
  return Boolean(el && (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName)));
}

/* ---------------- Brouillon ---------------- */

function DraftCard({ d }: { d: Draft }) {
  const router = useRouter();
  const [text, setText] = useState(d.texte);
  const [objet, setObjet] = useState(d.objet);
  const [note, setNote] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const courriel = d.canal === "courriel";
  const canOpen = courriel ? d.hasEmail : Boolean(d.conversationId) || d.hasPhone;

  const copy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      return true;
    } catch {
      return false;
    }
  };

  const openTool = async () => {
    setBusy(true);
    const r = await draftLinkAction({ clientId: d.clientId, canal: d.canal, objet, texte: text });
    setBusy(false);
    if (!r.ok) return setNote({ ok: false, text: r.error });
    if (r.href.startsWith("/")) {
      const ok = await copy(text);
      setNote({ ok: true, text: ok ? "Texte copié : collez-le dans la réponse, puis envoyez." : "Copiez le texte, puis collez-le dans la réponse." });
      router.push(r.href);
    } else {
      window.location.href = r.href;
    }
  };

  return (
    <div className="as-draft">
      <div className="as-draft__head">
        <span className="as-draft__kind">{courriel ? "Brouillon de courriel" : "Brouillon de texto"}</span>
        <Link href={`/gestion/clients/${d.clientId}`} className="as-link" prefetch={false}>
          {d.name}
        </Link>
      </div>
      {courriel ? <input className="as-draft__subject" value={objet} onChange={(e) => setObjet(e.target.value)} aria-label="Objet du courriel" maxLength={140} /> : null}
      <textarea className="as-draft__text" value={text} onChange={(e) => setText(e.target.value)} rows={courriel ? 7 : 4} aria-label="Texte du brouillon" maxLength={2000} />
      {!courriel ? <span className="as-draft__count">{text.length} caractères</span> : null}
      <div className="as-draft__actions">
        <button type="button" className="k-btn" onClick={async () => setNote((await copy(courriel ? `${objet}\n\n${text}` : text)) ? { ok: true, text: "Texte copié." } : { ok: false, text: "Copie impossible : sélectionnez le texte." })}>
          <Copy size={15} aria-hidden /> Copier
        </button>
        {canOpen ? (
          <button type="button" className="k-btn k-btn--ink" onClick={openTool} disabled={busy}>
            <ExternalLink size={15} aria-hidden /> {courriel ? "Ouvrir dans le courriel" : d.conversationId ? "Ouvrir la conversation" : "Ouvrir dans Messages"}
          </button>
        ) : null}
      </div>
      {note ? (
        <p className={cx("as-draft__note", note.ok ? "is-ok" : "is-bad")} role="status">
          {note.text}
        </p>
      ) : (
        <p className="as-draft__note">Rien n’est envoyé par l’assistant : vous relisez, puis vous envoyez vous-même.</p>
      )}
    </div>
  );
}

/* ---------------- Panneau ---------------- */

export function AssistantPanel({ status }: { status: PanelStatus | null }) {
  const pathname = usePathname() ?? "";
  const reduced = useReduced();
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [month, setMonth] = useState<MonthStatus | null>(status?.month ?? null);
  const [useFiche, setUseFiche] = useState(true);
  const [tick, setTick] = useState(0);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const busy = useRef(false);
  const pageClient = CLIENT_PATH.exec(pathname)?.[1];
  const off = status?.mode === "cle-absente";
  const simulated = status?.mode === "simule";

  const send = useCallback(
    async (question: string, clientId?: string) => {
      const q = question.trim();
      if (!q || busy.current || off) return;
      busy.current = true;
      // Historique : seulement les échanges réussis (question suivie de sa réponse).
      const history: Array<{ role: "user" | "assistant"; content: string }> = [];
      for (let i = 0; i < turns.length - 1; i++) {
        if (turns[i].role === "user" && turns[i + 1].role === "assistant" && !turns[i + 1].error) history.push({ role: "user", content: turns[i].text }, { role: "assistant", content: turns[i + 1].text });
      }
      const now = Date.now();
      setTurns((ts) => [...ts, { id: `u${now}`, role: "user", text: q, fiche: Boolean(clientId) }]);
      setInput("");
      setPending(true);
      const fail = (text: string): Turn => ({ id: `e${now}`, role: "assistant", text, error: true });
      let turn: Turn;
      try {
        const res = await fetch("/gestion/api/assistant", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ question: q, history: history.slice(-10), ...(clientId ? { clientId } : {}) }),
        });
        if (res.status === 401) turn = fail("Votre session a expiré : reconnectez-vous.");
        else {
          const r = (await res.json()) as AskResult;
          if (r.ok) {
            turn = { id: `a${now}`, role: "assistant", text: r.answer, drafts: r.drafts, tools: r.tools, unverified: r.unverified };
            setMonth(r.month);
          } else {
            turn = fail(r.message);
            if (r.month) setMonth(r.month);
          }
        }
      } catch {
        turn = fail("Connexion impossible. Vérifiez le réseau, puis réessayez.");
      }
      setTurns((ts) => [...ts, turn]);
      setPending(false);
      busy.current = false;
    },
    [turns, off],
  );

  const sendRef = useRef(send);
  useEffect(() => {
    sendRef.current = send;
  }, [send]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "?" && e.shiftKey && !typing(e.target) && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setOpen(true);
      }
    };
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent<OpenAssistantDetail>).detail ?? {};
      setOpen(true);
      if (d.clientId) setUseFiche(true);
      if (d.question) {
        if (d.send) void sendRef.current(d.question, d.clientId);
        else setInput(d.question);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(ASSISTANT_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(ASSISTANT_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!pending) return;
    const t = window.setInterval(() => setTick((x) => x + 1), 1700);
    return () => window.clearInterval(t);
  }, [pending]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduced ? "auto" : "smooth" });
  }, [turns, pending, reduced]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 80);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  const submit = () => void send(input, useFiche && pageClient ? pageClient : undefined);
  const suggestions = [
    "Qu’est-ce que je devrais faire aujourd’hui ?",
    pageClient ? "Résume cette fiche." : "Quelles soumissions dois-je relancer ?",
    "Pourquoi mes ventes ont baissé ce mois-ci ?",
    "Qu’est-ce qui rapporte le plus en publicité ?",
  ];
  const appear = reduced ? {} : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: EASE } };

  return (
    <>
      <button type="button" className={cx("as-fab", pathname.startsWith("/gestion/textos/") && "as-fab--hide-m")} onClick={() => setOpen(true)} aria-label="Demander à Claude (Ctrl+J)">
        <Sparkles size={19} aria-hidden />
        <span className="as-fab__label">Demander à Claude</span>
        <kbd className="as-fab__kbd">Ctrl J</kbd>
      </button>

      <Sheet open={open} onOpenChange={setOpen} title="Demande à Claude" description="Les données consultées sont envoyées à Anthropic pour répondre." className="as-sheet">
        <div className="as-wrap">
          <div className="as-log" ref={logRef} aria-live="polite">
            {simulated ? (
              <p className="as-banner">
                <ShieldCheck size={15} aria-hidden /> Mode simulé (hors production) : rien n’est envoyé à Anthropic.
              </p>
            ) : null}
            {off ? (
              <p className="as-banner as-banner--warn">
                <TriangleAlert size={15} aria-hidden /> L’assistant n’est pas branché : ajoutez ANTHROPIC_API_KEY dans shared/.env.
              </p>
            ) : null}

            {!turns.length ? (
              <motion.div className="as-hello" {...appear}>
                <span className="as-hello__mark" aria-hidden>
                  <Sparkles size={22} />
                </span>
                <p className="as-hello__title">
                  Posez une question <em>sur vos affaires</em>
                </p>
                <p className="as-hello__sub">Claude lit vos clients, tâches, soumissions et chiffres, en lecture seule. Il ne modifie et n’envoie jamais rien.</p>
                <div className="as-chips">
                  {suggestions.map((s, i) => (
                    <motion.button
                      key={s}
                      type="button"
                      className="as-chip"
                      disabled={off}
                      onClick={() => void send(s, useFiche && pageClient ? pageClient : undefined)}
                      {...(reduced ? {} : { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, delay: 0.08 + i * 0.05, ease: EASE } })}
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : null}

            <AnimatePresence initial={false}>
              {turns.map((t) => (
                <motion.div key={t.id} className={cx("as-turn", `as-turn--${t.role}`, t.error && "is-error")} {...appear}>
                  {t.role === "user" ? (
                    <p className="as-bubble">
                      {t.fiche ? (
                        <span className="as-bubble__tag">
                          <FileUser size={12} aria-hidden /> Fiche ouverte
                        </span>
                      ) : null}
                      {t.text}
                    </p>
                  ) : t.error ? (
                    <p className="as-error">
                      <TriangleAlert size={16} aria-hidden /> {t.text}
                    </p>
                  ) : (
                    <div className="as-answer">
                      <Answer text={t.text} />
                      {t.unverified ? (
                        <p className="as-warn">
                          <TriangleAlert size={14} aria-hidden /> Un montant n’a pas été retrouvé tel quel dans les données consultées : vérifiez-le avant de vous y fier.
                        </p>
                      ) : null}
                      {t.drafts?.map((d) => <DraftCard key={d.id} d={d} />)}
                      {t.tools?.length ? <p className="as-tools">A consulté : {t.tools.join(", ")}</p> : null}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {pending ? (
              <div className="as-turn as-turn--assistant">
                <div className="as-thinking" role="status">
                  <span className="as-dots" aria-hidden>
                    <i />
                    <i />
                    <i />
                  </span>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span key={tick % THINKING.length} initial={reduced ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -4 }} transition={{ duration: 0.25 }}>
                      {THINKING[tick % THINKING.length]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            ) : null}
          </div>

          <form
            className="as-compose"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            {pageClient ? (
              <div className="as-context">
                {useFiche ? (
                  <button type="button" className="as-context__chip" onClick={() => setUseFiche(false)} aria-label="Ne plus joindre cette fiche aux questions">
                    <FileUser size={13} aria-hidden /> Cette fiche est jointe <X size={13} aria-hidden />
                  </button>
                ) : (
                  <button type="button" className="as-context__chip is-off" onClick={() => setUseFiche(true)}>
                    <FileUser size={13} aria-hidden /> Joindre cette fiche
                  </button>
                )}
              </div>
            ) : null}
            <div className="as-compose__row">
              <textarea
                ref={inputRef}
                className="as-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                    e.preventDefault();
                    submit();
                  }
                }}
                rows={1}
                maxLength={1000}
                placeholder={off ? "Assistant non branché" : "Ex. : Prépare une relance pour la soumission S-2026-0005"}
                disabled={off}
                aria-label="Votre question"
              />
              <button type="submit" className="as-send" disabled={off || pending || !input.trim()} aria-label="Envoyer la question">
                <ArrowUp size={19} aria-hidden />
              </button>
            </div>
            <div className="as-foot">
              <span>{monthLine(month)}</span>
              <span className="as-foot__links">
                {turns.length ? (
                  <button type="button" className="as-foot__btn" onClick={() => setTurns([])} disabled={pending}>
                    <RotateCcw size={12} aria-hidden /> Nouvelle conversation
                  </button>
                ) : null}
                <Link href="/gestion/assistant" className="as-foot__btn" onClick={() => setOpen(false)} prefetch={false}>
                  <Check size={12} aria-hidden /> Journal et tarifs
                </Link>
              </span>
            </div>
          </form>
        </div>
      </Sheet>
    </>
  );
}
