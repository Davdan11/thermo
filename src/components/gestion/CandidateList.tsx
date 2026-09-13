"use client";

/* Liste classée des installateurs pour un job : raisons en clair, points détaillés, « Envoyer » par ligne
   ou envoi groupé à la sélection. Les « presque » (un ou deux critères manquants) sont à part, en retrait. */
import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Send } from "lucide-react";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { SubmitButton } from "./SubmitButton";

export interface CandidateDTO {
  id: string;
  company: string;
  contactName: string;
  city: string;
  score: number;
  points: { marque: number; distance: number; charge: number; historique: number };
  reasons: string[];
  failures: string[];
  active: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function Row({ c, index, variant, onToggle, proposed = false }: { c: CandidateDTO; index: number; variant: "ranked" | "offered" | "near"; onToggle: (id: string, on: boolean) => void; proposed?: boolean }) {
  const reduced = useReduced();
  const muted = variant !== "ranked";
  const body = (
    <>
      <span className={`g-score ${muted ? "g-score--muted" : ""}`} style={{ ["--p" as string]: Math.min(100, c.score) }} aria-label={`${c.score} points sur 100`}>
        {c.score}
      </span>
      <div style={{ minWidth: 0 }}>
        <div className="g-cand__head">
          <div style={{ minWidth: 0 }}>
            <div className="g-cand__name">
              {variant === "ranked" && index === 0 ? <span className="g-pill g-pill--nouveau" style={{ marginRight: 8, height: 22 }}>1er choix</span> : null}
              {proposed ? <span className="g-pill g-pill--planifie" style={{ marginRight: 8, height: 22 }}>Entrepreneur de la soumission</span> : null}
              {c.company}
            </div>
            <div className="g-cand__sub">{c.contactName} · {c.city}</div>
          </div>
          {variant === "offered" ? (
            <span className="g-pill g-pill--offert">Offre envoyée</span>
          ) : (
            <div className="g-cand__act">
              <label className="g-cand__pickwrap">
                <input type="checkbox" name="installerIds" value={c.id} className="g-cand__pick" defaultChecked={proposed} onChange={(e) => onToggle(c.id, e.target.checked)} />
                Choisir
              </label>
              <SubmitButton name="only" value={c.id} className={`g-btn ${muted ? "g-btn--ghost" : "g-btn--primary"}`} pendingLabel="Envoi…">
                <Send size={15} aria-hidden /> {muted ? "Envoyer quand même" : "Envoyer"}
              </SubmitButton>
            </div>
          )}
        </div>
        <div className="g-tags g-cand__reasons">
          {c.failures.map((f) => <span key={f} className="g-tag g-tag--bad">{f}</span>)}
          {c.reasons.map((r) => <span key={r} className="g-tag">{r}</span>)}
        </div>
        <div className="g-cand__points">
          marque {c.points.marque} · distance {c.points.distance} · charge {c.points.charge} · historique {c.points.historique}
        </div>
      </div>
    </>
  );
  const cls = `g-cand ${variant === "ranked" && index === 0 ? "g-cand--top" : ""} ${muted ? "g-cand--muted" : ""}`;
  if (reduced) return <li className={cls}>{body}</li>;
  return (
    <motion.li className={cls} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.05, ease: EASE }}>
      {body}
    </motion.li>
  );
}

/* `proposedId` : l'entrepreneur choisi dans la soumission acceptée, coché d'office (le propriétaire peut le décocher). */
export function CandidateList({ action, ranked, offered, nearMisses, declinedNote, proposedId = null }: { action: (fd: FormData) => Promise<void>; ranked: CandidateDTO[]; offered: CandidateDTO[]; nearMisses: CandidateDTO[]; declinedNote: boolean; proposedId?: string | null }) {
  const proposable = proposedId && [...ranked, ...nearMisses].some((c) => c.id === proposedId) ? proposedId : null;
  const nearProposed = Boolean(proposable && nearMisses.some((c) => c.id === proposable));
  const [picked, setPicked] = useState<Set<string>>(() => new Set(proposable ? [proposable] : []));
  const toggle = (id: string, on: boolean) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });

  return (
    <form action={action}>
      {declinedNote ? <p className="g-alert g-alert--info" style={{ marginBottom: 12 }}>Un installateur a refusé : voici les prochains candidats.</p> : null}
      {offered.length ? (
        <ul className="g-cands" style={{ marginBottom: 10 }}>
          {offered.map((c, i) => <Row key={c.id} c={c} index={i} variant="offered" onToggle={toggle} />)}
        </ul>
      ) : null}
      {ranked.length ? (
        <ul className="g-cands">
          {ranked.map((c, i) => <Row key={c.id} c={c} index={i} variant="ranked" onToggle={toggle} proposed={c.id === proposable} />)}
        </ul>
      ) : (
        <EmptyState compact title="Aucun installateur admissible." body="Regardez les « presque » ci-dessous ou ajoutez un installateur." />
      )}

      {nearMisses.length ? (
        <details className="g-details" style={{ marginTop: 14 }} open={nearProposed || undefined}>
          <summary><ChevronRight size={16} aria-hidden /> Presque admissibles ({nearMisses.length})</summary>
          <p className="g-hint" style={{ margin: "0 0 10px" }}>Il leur manque un ou deux critères (en rouge). Vous pouvez leur envoyer l’offre en connaissance de cause.</p>
          <ul className="g-cands">
            {nearMisses.map((c, i) => <Row key={c.id} c={c} index={i} variant="near" onToggle={toggle} proposed={c.id === proposable} />)}
          </ul>
        </details>
      ) : null}

      {ranked.length || nearMisses.length ? (
        <div className="g-sendbar">
          <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
            Réponse attendue en
            <select name="hours" defaultValue="48" aria-label="Délai de réponse">
              <option value="24">24 h</option>
              <option value="48">48 h</option>
              <option value="72">72 h</option>
            </select>
          </label>
          <SubmitButton className="g-btn g-btn--primary" disabled={picked.size === 0} pendingLabel="Envoi…">
            <Send size={15} aria-hidden /> {picked.size > 1 ? `Envoyer aux ${picked.size}` : "Envoyer à la sélection"}
          </SubmitButton>
        </div>
      ) : null}
    </form>
  );
}
