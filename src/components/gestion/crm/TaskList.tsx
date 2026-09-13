"use client";

/* ==================================================================
   Liste de tâches (accueil, À faire, fiche client) : une carte par
   tâche, les plus urgentes d'abord, actions d'un seul geste :
     Appeler   le numéro est demandé au serveur au moment du clic
               (jamais envoyé avec la page)
     Texto     la conversation du client
     Relancer  la soumission (bouton « Renvoyer le lien »)
     Reporter  1 h, ce soir 18 h, demain 9 h, lundi 9 h, date
     Fait      disparaît aussitôt (optimiste), revient si le serveur refuse
   ================================================================== */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useOptimistic, useState, useTransition } from "react";
import { ArrowRight, Check, Clock, FileText, MessageSquare, Phone, Wrench } from "lucide-react";
import { completeTaskAction, dialAction, snoozeTaskAction } from "@/app/gestion/(prive)/crm-actions";
import type { TaskDTO } from "@/lib/gestion/crm/dashboard";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { EASE } from "../charts/palette";

const SNOOZES = [
  { id: "1h", label: "Dans une heure" },
  { id: "soir", label: "Ce soir", sub: "18 h" },
  { id: "demain", label: "Demain", sub: "9 h" },
  { id: "lundi", label: "Lundi", sub: "9 h" },
] as const;

function primaryLink(t: TaskDTO): { href: string; label: string; icon: typeof FileText } | null {
  if (t.rule === "relance-ouverte" || t.rule === "envoyee-non-ouverte" || t.rule === "soumission-expire") return { href: `${t.href}#relance`, label: "Relancer", icon: FileText };
  if (t.rule === "question-client") return { href: t.href, label: "Répondre", icon: FileText };
  if (t.rule === "job-sans-reponse" || t.rule === "job-a-planifier") return { href: t.href, label: "Ouvrir le job", icon: Wrench };
  return null;
}

function Snooze({ onPick }: { onPick: (option: string, date?: string, time?: string) => void }) {
  const [date, setDate] = useState("");
  return (
    <details className="cr-snooze">
      <summary className="k-btn k-btn--ghost">
        <Clock size={16} aria-hidden /> Reporter
      </summary>
      <div className="cr-snooze__menu" role="menu">
        {SNOOZES.map((s) => (
          <button key={s.id} type="button" role="menuitem" onClick={() => onPick(s.id)}>
            {s.label}
            {"sub" in s ? <small>{s.sub}</small> : null}
          </button>
        ))}
        <div className="cr-snooze__date">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Reporter à une date" />
          <button type="button" className="k-btn k-btn--ink" disabled={!date} onClick={() => onPick("date", date, "09:00")}>
            OK
          </button>
        </div>
      </div>
    </details>
  );
}

export function TaskCard({ t, showWho = true, onDone, onSnooze, onCall }: { t: TaskDTO; showWho?: boolean; onDone: () => void; onSnooze: (o: string, d?: string, tm?: string) => void; onCall: () => void }) {
  const link = primaryLink(t);
  const Icon = link?.icon;
  return (
    <article className={`cr-task${t.overdue ? " is-over" : ""}`}>
      <div className="cr-task__top">
        <h3 className="cr-task__title">
          <Link href={t.href}>{t.title}</Link>
        </h3>
        <span className="cr-task__due">{t.due}</span>
        <p className="cr-task__meta">
          {showWho && t.clientId ? (
            <Link href={`/gestion/clients/${t.clientId}`} className="cr-task__who">
              {t.who}
            </Link>
          ) : showWho && !t.clientId ? (
            <span className="cr-task__who">{t.who}</span>
          ) : null}
          <span>{t.detail}</span>
          {t.snoozed ? <span>· reportée</span> : null}
        </p>
      </div>
      <div className="cr-task__actions">
        {t.canCall && t.clientId ? (
          <button type="button" className="k-btn k-btn--ink" onClick={onCall}>
            <Phone size={16} aria-hidden /> Appeler
          </button>
        ) : null}
        {t.conversationId ? (
          <Link href={`/gestion/textos/${t.conversationId}`} className="k-btn">
            <MessageSquare size={16} aria-hidden /> Texto
          </Link>
        ) : null}
        {link && Icon ? (
          <Link href={link.href} className="k-btn">
            <Icon size={16} aria-hidden /> {link.label}
          </Link>
        ) : null}
        {!link && !t.conversationId && t.clientId && !showWho ? null : !link && !t.conversationId && t.clientId ? (
          <Link href={`/gestion/clients/${t.clientId}`} className="k-btn k-btn--ghost">
            Fiche <ArrowRight size={15} aria-hidden />
          </Link>
        ) : null}
        <Snooze onPick={onSnooze} />
        <button type="button" className="k-btn k-btn--ok is-push" onClick={onDone}>
          <Check size={16} aria-hidden /> Fait
        </button>
      </div>
    </article>
  );
}

export function TaskList({ tasks, empty, showWho = true }: { tasks: TaskDTO[]; empty?: React.ReactNode; showWho?: boolean }) {
  const reduced = useReduced();
  const [hidden, hide] = useOptimistic<string[], string>([], (s, k) => [...s, k]);
  const [error, setError] = useState<string | null>(null);
  const [, start] = useTransition();
  const visible = tasks.filter((t) => !hidden.includes(t.key));

  const run = (key: string, fn: () => Promise<{ ok: boolean; error?: string } | undefined>) =>
    start(async () => {
      setError(null);
      hide(key);
      const r = await fn();
      if (r && !r.ok) setError(r.error ?? "Action impossible.");
    });
  const call = (clientId: string) =>
    start(async () => {
      const r = await dialAction(clientId);
      if (r.ok) window.location.href = r.href;
      else setError(r.error);
    });

  if (!visible.length) return <>{empty ?? null}</>;
  return (
    <>
      {error ? (
        <p className="cr-msg is-bad" role="alert" style={{ marginBottom: 8 }}>
          {error}
        </p>
      ) : null}
      <ul className="cr-tasks">
        <AnimatePresence initial={false}>
          {visible.map((t) => (
            <motion.li
              key={t.key}
              layout={reduced ? false : "position"}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0, transition: { duration: 0.1 } } : { opacity: 0, x: 48, transition: { duration: 0.28, ease: EASE } }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <TaskCard
                t={t}
                showWho={showWho}
                onDone={() => run(t.key, () => completeTaskAction(t.key))}
                onSnooze={(o, d, tm) => run(t.key, () => snoozeTaskAction(t.key, o, d ?? "", tm ?? ""))}
                onCall={() => t.clientId && call(t.clientId)}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
}
