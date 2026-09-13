"use client";

/* ==================================================================
   Pipeline en colonnes.
   - Bureau : glisser-déposer HTML5 natif, déplacement optimiste
     (useOptimistic) puis Server Action ; menu « Déplacer » sur chaque
     carte (clavier).
   - Téléphone : colonnes qui défilent avec aimantation, barre de
     puces d'étapes, feuille « Changer d'étape ».
   Déposer dans « Perdue » demande une raison.
   ================================================================== */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useOptimistic, useRef, useState, useTransition } from "react";
import { setStageAction } from "@/app/gestion/(prive)/crm-actions";
import type { BoardCard, BoardView } from "@/lib/gestion/crm/service";
import { STAGE_LABELS, STAGES, type Stage } from "@/lib/gestion/crm/types";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { EASE, STAGE_COLORS } from "../charts/palette";
import { dollars, plural } from "../kit/format";
import { Sheet } from "../kit/Sheet";

type Columns = BoardView["columns"];

function applyMove(cols: Columns, move: { id: string; to: Stage }): Columns {
  const card = cols.flatMap((c) => c.cards).find((c) => c.id === move.id);
  if (!card) return cols;
  return cols.map((c) => {
    const without = c.cards.filter((x) => x.id !== move.id);
    const had = without.length !== c.cards.length;
    if (c.stage === move.to) return { ...c, n: c.n + (had ? 0 : 1), cards: [{ ...card, days: 0, manual: true }, ...without] };
    return had ? { ...c, n: c.n - 1, cards: without } : c;
  });
}

function Card({ card, stage, onMove, dragging, onDrag }: { card: BoardCard; stage: Stage; onMove: () => void; dragging: boolean; onDrag: (id: string | null) => void }) {
  return (
    <article
      className={`cr-card${dragging ? " is-drag" : ""}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", card.id);
        e.dataTransfer.effectAllowed = "move";
        onDrag(card.id);
      }}
      onDragEnd={() => onDrag(null)}
    >
      <div className="cr-card__top">
        <div style={{ minWidth: 0 }}>
          <Link href={`/gestion/clients/${card.id}`} className="cr-card__name" draggable={false}>
            {card.name}
          </Link>
          {card.city ? <span className="cr-card__city">{card.city}</span> : null}
        </div>
        {card.valueCents ? <span className="cr-card__money">{dollars(card.valueCents)}</span> : null}
      </div>
      <div className="cr-card__meta">
        <span>{card.days === 0 ? "Arrivé aujourd’hui" : `${plural(card.days, "jour", "jours")} dans l’étape`}</span>
        {card.reactivated ? <span className="k-chip k-chip--orange">Réactivé</span> : null}
      </div>
      {card.channel ? <span className="cr-card__city">{card.channel}</span> : null}
      {card.next ? (
        <div className={`cr-card__next${card.next.overdue ? " is-over" : ""}`}>
          <b>{card.next.title}</b>
          <span>{card.next.due}</span>
        </div>
      ) : null}
      <button type="button" className="cr-card__move" onClick={onMove} aria-label={`Déplacer ${card.name} (étape : ${STAGE_LABELS[stage]})`}>
        Déplacer…
      </button>
    </article>
  );
}

export function PipelineBoard({ columns, focus, pipedriveEnabled }: { columns: Columns; focus: Stage | null; pipedriveEnabled: boolean }) {
  const reduced = useReduced();
  const [cols, move] = useOptimistic(columns, applyMove);
  const [pending, start] = useTransition();
  const [drag, setDrag] = useState<string | null>(null);
  const [over, setOver] = useState<Stage | null>(null);
  const [sheet, setSheet] = useState<{ id: string; name: string; from: Stage } | null>(null);
  const [lostFor, setLostFor] = useState<{ id: string; name: string } | null>(null);
  const [reason, setReason] = useState("");
  const [error, setError] = useState<string | null>(null);
  const board = useRef<HTMLDivElement>(null);

  const scrollTo = (stage: Stage) => document.getElementById(`col-${stage}`)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", inline: "start", block: "nearest" });
  useEffect(() => {
    if (focus) document.getElementById(`col-${focus}`)?.scrollIntoView({ inline: "start", block: "nearest" });
  }, [focus]);

  const commit = (id: string, to: Stage, why = "") =>
    start(async () => {
      setError(null);
      move({ id, to });
      const r = await setStageAction(id, to, why);
      if (r && !r.ok) setError(r.error);
    });
  const request = (id: string, name: string, to: Stage, from: Stage) => {
    if (to === from) return;
    if (to === "perdue") {
      setReason("");
      setLostFor({ id, name });
    } else commit(id, to);
  };

  return (
    <>
      <nav className="cr-stagechips" aria-label="Aller à une étape">
        {cols.map((c) => (
          <button key={c.stage} type="button" onClick={() => scrollTo(c.stage)} aria-current={focus === c.stage ? "true" : undefined}>
            <i style={{ background: STAGE_COLORS[c.stage] }} aria-hidden />
            {c.label} <b>{c.n}</b>
          </button>
        ))}
      </nav>
      {error ? (
        <p className="cr-msg is-bad" role="alert" style={{ marginBottom: 10 }}>
          {error}
        </p>
      ) : null}
      <div className="cr-board" ref={board} aria-busy={pending}>
        {cols.map((c) => (
          <section
            key={c.stage}
            id={`col-${c.stage}`}
            className={`cr-col${over === c.stage && drag ? " is-over" : ""}`}
            aria-label={`${c.label} : ${plural(c.n, "client", "clients")}`}
            onDragOver={(e) => {
              if (!drag) return;
              e.preventDefault();
              e.dataTransfer.dropEffect = "move";
              if (over !== c.stage) setOver(c.stage);
            }}
            onDragLeave={(e) => {
              if (!(e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)) setOver(null);
            }}
            onDrop={(e) => {
              e.preventDefault();
              const id = e.dataTransfer.getData("text/plain");
              setOver(null);
              setDrag(null);
              const from = cols.find((x) => x.cards.some((k) => k.id === id));
              const card = from?.cards.find((k) => k.id === id);
              if (card && from) request(id, card.name, c.stage, from.stage);
            }}
          >
            <header className="cr-col__head">
              <h2 className="cr-col__title">
                <i style={{ background: STAGE_COLORS[c.stage] }} aria-hidden />
                {c.label}
                <span className="cr-col__n">{c.n}</span>
              </h2>
              <span className="cr-col__sum">{c.cents ? dollars(c.cents) : "—"}</span>
            </header>
            <ul className="cr-col__list">
              <AnimatePresence initial={false}>
                {c.cards.map((card) => (
                  <motion.li key={card.id} layout={reduced ? false : "position"} initial={reduced ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, transition: { duration: 0.15 } }} transition={{ duration: 0.3, ease: EASE }}>
                    <Card card={card} stage={c.stage} dragging={drag === card.id} onDrag={setDrag} onMove={() => setSheet({ id: card.id, name: card.name, from: c.stage })} />
                  </motion.li>
                ))}
              </AnimatePresence>
              {!c.cards.length ? <li className="cr-col__more">Aucun client.</li> : null}
            </ul>
            {c.hidden ? <p className="cr-col__more">{plural(c.hidden, "client plus ancien", "clients plus anciens")} (plus de 90 jours) : voir la liste des clients.</p> : null}
          </section>
        ))}
      </div>

      <Sheet open={Boolean(sheet)} onOpenChange={(o) => !o && setSheet(null)} title={sheet ? `Déplacer ${sheet.name}` : "Déplacer"} description={pipedriveEnabled ? "L’affaire Pipedrive suit si une étape y est associée." : undefined}>
        <div className="cr-movelist">
          {STAGES.map((s) => (
            <button
              key={s}
              type="button"
              aria-current={sheet?.from === s ? "true" : undefined}
              onClick={() => {
                if (!sheet) return;
                const { id, name, from } = sheet;
                setSheet(null);
                request(id, name, s, from);
              }}
            >
              <i style={{ background: STAGE_COLORS[s] }} aria-hidden />
              {STAGE_LABELS[s]}
            </button>
          ))}
        </div>
      </Sheet>

      <Sheet open={Boolean(lostFor)} onOpenChange={(o) => !o && setLostFor(null)} title={lostFor ? `${lostFor.name} : perdu` : "Perdu"} description="Il sera réactivé automatiquement à sa prochaine demande.">
        <form
          className="cr-note-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (!lostFor || !reason.trim()) return;
            commit(lostFor.id, "perdue", reason);
            setLostFor(null);
          }}
        >
          <label className="g-field" style={{ margin: 0 }}>
            <span className="g-label">Raison de la perte</span>
            <input className="g-input" value={reason} onChange={(e) => setReason(e.target.value)} required maxLength={200} autoFocus placeholder="Ex. : a choisi un concurrent" />
          </label>
          <div>
            <button type="submit" className="k-btn k-btn--ink" disabled={!reason.trim()}>
              Marquer perdu
            </button>
          </div>
        </form>
      </Sheet>
    </>
  );
}
