"use client";

/* ==================================================================
   Pipeline du parcours (refonte R2) : 12 étapes et « Perdu ».
   - Deux vues : colonnes par étape, ou par « qui doit agir »
     (Propriétaire, Client, Installateur).
   - Filtres dans le navigateur (recherche, vendeur, région, montant) :
     instantanés, même avec des centaines de dossiers ; 40 cartes par
     colonne, puis « Afficher plus ».
   - Chaque carte : progression des 12 étapes, temps dans l'étape,
     qui doit agir, prochaine action, montant, note de priorité.
   - Étape manuelle (celle qui existait) : glisser une carte (bureau)
     ou « Déplacer… » (clavier, téléphone), seulement vers les étapes
     qui correspondent à une étape d'origine. « Perdu » demande une
     raison structurée.
   ================================================================== */

import Link from "next/link";
import { useEffect, useMemo, useOptimistic, useState, useTransition } from "react";
import { setStageAction } from "@/app/gestion/(prive)/crm-actions";
import type { JourneyCard, PipelineParcoursView } from "@/lib/gestion/crm/pipeline-parcours";
import { ACTOR_LABELS, ACTORS, JOURNEY_STATES, LEGACY_OF, LOSS_CAUSE_LABELS, LOSS_CAUSES, MOVABLE, STEP_TOTAL, stepNumber, type Actor, type JourneyState, type LossCause } from "@/lib/gestion/crm/parcours-base";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { dollars, plural } from "../kit/format";
import { Sheet } from "../kit/Sheet";
import "./parcours.css";

export type PipelineMode = "etapes" | "qui";

const PAGE = 40;
const AMOUNTS = [
  { id: "", label: "Tous", min: 0 },
  { id: "1000", label: "1 000 $ et plus", min: 100_000 },
  { id: "5000", label: "5 000 $ et plus", min: 500_000 },
  { id: "10000", label: "10 000 $ et plus", min: 1_000_000 },
  { id: "20000", label: "20 000 $ et plus", min: 2_000_000 },
] as const;

/** Rampe ordinale des étapes (orange vers encre), gris pour « Perdu ». */
const TONE: Record<JourneyState, string> = {
  demande: "#fe825f",
  contacte: "#f97045",
  "soumission-envoyee": "#f45929",
  ouverte: "#e54b17",
  "va-de-l-avant": "#d64109",
  "installateur-trouve": "#c23a08",
  "contrat-pret": "#b23506",
  signe: "#8f2804",
  planifie: "#6e1d02",
  installe: "#3a2a1f",
  paye: "#1f2a30",
  suivi: "#0c1821",
  perdu: "#b8b0a2",
};
const ACTOR_TONE: Record<Actor, string> = { proprietaire: "#c2410c", client: "#1d4ed8", installateur: "#15803d" };

const fold = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

function Progress({ n, lost, tone }: { n: number; lost: boolean; tone: string }) {
  return (
    <div className={`pc-prog${lost ? " is-lost" : ""}`} role="img" aria-label={lost ? "Dossier perdu" : `Étape ${n} sur ${STEP_TOTAL}`} style={{ ["--tone" as string]: tone }}>
      {Array.from({ length: STEP_TOTAL }, (_, i) => (
        <i key={i} className={lost ? "" : i < n - 1 ? "is-done" : i === n - 1 ? "is-now" : ""} />
      ))}
    </div>
  );
}

function Card({ c, label, i, draggable, dragging, onDrag, onMove }: { c: JourneyCard; label: string; i: number; draggable: boolean; dragging: boolean; onDrag: (id: string | null) => void; onMove: () => void }) {
  const showNext = c.next && c.next.title !== c.actorWhy;
  return (
    <article
      className={`pc-card${c.blockers.length ? " is-blocked" : ""}${dragging ? " is-drag" : ""}`}
      style={{ ["--i" as string]: i }}
      draggable={draggable}
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", c.id);
        e.dataTransfer.effectAllowed = "move";
        onDrag(c.id);
      }}
      onDragEnd={() => onDrag(null)}
    >
      <div className="pc-card__top">
        <div style={{ minWidth: 0 }}>
          <Link href={`/gestion/clients/${c.id}`} className="pc-card__name" draggable={false}>
            {c.name}
          </Link>
          <span className="pc-card__city">{[c.city, c.regionName && c.regionName !== c.city ? c.regionName : null].filter(Boolean).join(" · ") || "Ville inconnue"}</span>
        </div>
        {c.valueCents ? <span className="pc-card__money">{dollars(c.valueCents)}</span> : null}
      </div>
      <Progress n={c.n} lost={c.state === "perdu"} tone={TONE[c.state]} />
      <div className="pc-card__meta">
        <span className="pc-card__step">
          {c.n ? `${c.n}/${STEP_TOTAL} · ` : ""}
          {label}
        </span>
        <span className={c.late ? "is-late" : ""}>
          {c.late ? "Délai dépassé · " : ""}
          {c.inStep}
        </span>
      </div>
      {c.actor ? (
        <p className={`pc-who pc-who--${c.actor}`}>
          <i aria-hidden />
          <span>
            <b>{ACTOR_LABELS[c.actor]}</b> · {c.actorWhy}
          </span>
        </p>
      ) : (
        <p className="pc-who pc-who--none">{c.lost ?? c.actorWhy}</p>
      )}
      {showNext && c.next ? (
        <Link className={`pc-card__next${c.next.overdue ? " is-over" : ""}`} href={c.next.href} draggable={false}>
          <b>{c.next.title}</b>
          {c.next.due ? <span>{c.next.due}</span> : null}
        </Link>
      ) : null}
      <div className="pc-card__foot">
        <span className={`pc-score${c.score === null ? " is-unknown" : ""}`} title={c.score === null ? "Note à définir : montant ou probabilité de l’étape inconnu" : `Montant en jeu × probabilité de l’étape × urgence (${c.urgency.toLocaleString("fr-CA")})`}>
          Priorité {c.scoreLabel}
        </span>
        {c.blockers.length ? (
          <span className="pc-chip pc-chip--bad" title={c.blockers.join(" · ")}>
            Bloqué
          </span>
        ) : null}
        {c.reactivated ? <span className="pc-chip">Réactivé</span> : null}
        {c.manual ? <span className="pc-chip">Étape choisie</span> : null}
        <button type="button" className="pc-card__move" onClick={onMove} aria-label={`Déplacer ${c.name} (étape : ${label})`}>
          Déplacer…
        </button>
      </div>
    </article>
  );
}

interface Column {
  id: string;
  label: string;
  cards: JourneyCard[];
  hidden: number;
  movable: boolean;
  tone: string;
  actor?: Actor;
  state?: JourneyState;
}

export function PipelineBoard({ view, vendors, focus, initialMode, pipedriveEnabled }: { view: PipelineParcoursView; vendors: Array<{ id: string; name: string }>; focus: JourneyState | null; initialMode: PipelineMode; pipedriveEnabled: boolean }) {
  const reduced = useReduced();
  const [mode, setMode] = useState<PipelineMode>(initialMode);
  const [q, setQ] = useState("");
  const [vendor, setVendor] = useState("");
  const [region, setRegion] = useState("");
  const [amount, setAmount] = useState("");
  const [limits, setLimits] = useState<Record<string, number>>({});
  const [cards, move] = useOptimistic(view.cards, (cs: JourneyCard[], m: { id: string; to: JourneyState }) =>
    cs.map((c) => (c.id === m.id ? { ...c, state: m.to, n: stepNumber(m.to), manual: true, late: false, inStep: "à l’instant" } : c)),
  );
  const [pending, start] = useTransition();
  const [drag, setDrag] = useState<string | null>(null);
  const [over, setOver] = useState<string | null>(null);
  const [sheet, setSheet] = useState<{ id: string; name: string; from: JourneyState } | null>(null);
  const [lostFor, setLostFor] = useState<{ id: string; name: string } | null>(null);
  const [cause, setCause] = useState<LossCause | "">("");
  const [detail, setDetail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const scrollTo = (id: string) => document.getElementById(`col-${id}`)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", inline: "start", block: "nearest" });
  useEffect(() => {
    if (focus) document.getElementById(`col-${focus}`)?.scrollIntoView({ inline: "start", block: "nearest" });
  }, [focus]);
  const pickMode = (m: PipelineMode) => {
    setMode(m);
    try {
      const u = new URL(window.location.href);
      if (m === "qui") u.searchParams.set("vue", "qui");
      else u.searchParams.delete("vue");
      window.history.replaceState(null, "", u);
    } catch {
      /* adresse inchangée */
    }
  };

  const min = AMOUNTS.find((a) => a.id === amount)?.min ?? 0;
  const needle = fold(q.trim());
  const filtered = useMemo(
    () =>
      cards.filter(
        (c) =>
          (!vendor || (vendor === "aucun" ? !c.vendorId : c.vendorId === vendor)) &&
          (!region || c.region === region) &&
          (!min || (c.valueCents ?? 0) >= min) &&
          (!needle || fold(`${c.name} ${c.city}`).includes(needle)),
      ),
    [cards, vendor, region, min, needle],
  );

  const columns: Column[] = useMemo(() => {
    if (mode === "etapes") {
      return JOURNEY_STATES.map((s) => {
        const meta = view.states.find((x) => x.state === s);
        return { id: s, state: s, label: view.labels[s], cards: filtered.filter((c) => c.state === s), hidden: meta?.hidden ?? 0, movable: MOVABLE.includes(s), tone: TONE[s] };
      });
    }
    return ACTORS.map((a) => ({ id: a, actor: a, label: ACTOR_LABELS[a], cards: filtered.filter((c) => c.actor === a), hidden: 0, movable: false, tone: ACTOR_TONE[a] }));
  }, [mode, filtered, view.states, view.labels]);

  const shownCents = filtered.filter((c) => c.state !== "perdu").reduce((s, c) => s + (c.valueCents ?? 0), 0);

  const commit = (id: string, to: JourneyState, why = "", lossCause?: LossCause) =>
    start(async () => {
      setError(null);
      move({ id, to });
      const r = await setStageAction(id, LEGACY_OF[to], why, lossCause);
      if (r && !r.ok) setError(r.error);
    });
  const request = (id: string, name: string, to: JourneyState, from: JourneyState) => {
    if (to === from || !MOVABLE.includes(to)) return;
    if (to === "perdu") {
      setCause("");
      setDetail("");
      setLostFor({ id, name });
    } else commit(id, to);
  };

  return (
    <>
      <div className="pc-bar">
        <div className="pc-seg" role="tablist" aria-label="Vue du pipeline">
          <button type="button" role="tab" aria-selected={mode === "etapes"} onClick={() => pickMode("etapes")}>
            Par étape
          </button>
          <button type="button" role="tab" aria-selected={mode === "qui"} onClick={() => pickMode("qui")}>
            Qui doit agir
          </button>
        </div>
        <div className="pc-filters">
          <label className="pc-filter pc-filter--wide">
            <span>Rechercher</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Prénom, ville" maxLength={60} />
          </label>
          {vendors.length ? (
            <label className="pc-filter">
              <span>Vendeur</span>
              <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
                <option value="">Tous</option>
                <option value="aucun">Non attribués</option>
                {vendors.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
          <label className="pc-filter">
            <span>Région</span>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="">Toutes</option>
              {view.regions.map((r) => (
                <option key={r.code} value={r.code}>
                  {r.name}
                </option>
              ))}
            </select>
          </label>
          <label className="pc-filter">
            <span>Montant</span>
            <select value={amount} onChange={(e) => setAmount(e.target.value)}>
              {AMOUNTS.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="pc-count" aria-live="polite">
          {plural(filtered.length, "dossier", "dossiers")} · {dollars(shownCents)} en cours
        </p>
      </div>

      <nav className="cr-stagechips" aria-label={mode === "etapes" ? "Aller à une étape" : "Aller à une personne"}>
        {columns.map((c) => (
          <button key={c.id} type="button" onClick={() => scrollTo(c.id)} aria-current={focus === c.id ? "true" : undefined}>
            <i style={{ background: c.tone }} aria-hidden />
            {c.label} <b>{c.cards.length}</b>
          </button>
        ))}
      </nav>
      {error ? (
        <p className="cr-msg is-bad" role="alert" style={{ marginBottom: 10 }}>
          {error}
        </p>
      ) : null}

      <div className="cr-board" aria-busy={pending}>
        {columns.map((col) => {
          const limit = limits[col.id] ?? PAGE;
          const cents = col.cards.filter((c) => c.state !== "perdu").reduce((s, c) => s + (c.valueCents ?? 0), 0);
          const droppable = mode === "etapes" && col.movable;
          return (
            <section
              key={col.id}
              id={`col-${col.id}`}
              className={`cr-col${col.actor ? ` pc-col--${col.actor}` : ""}${over === col.id && drag && droppable ? " is-over" : ""}`}
              aria-label={`${col.label} : ${plural(col.cards.length, "dossier", "dossiers")}`}
              onDragOver={(e) => {
                if (!drag || !droppable) return;
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                if (over !== col.id) setOver(col.id);
              }}
              onDragLeave={(e) => {
                if (!(e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)) setOver(null);
              }}
              onDrop={(e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData("text/plain");
                setOver(null);
                setDrag(null);
                const card = cards.find((k) => k.id === id);
                if (card && col.state) request(id, card.name, col.state, card.state);
              }}
            >
              <header className="cr-col__head">
                <h2 className="cr-col__title">
                  <i style={{ background: col.tone }} aria-hidden />
                  {col.state && col.state !== "perdu" ? <span style={{ color: "var(--g-muted)", fontWeight: 600 }}>{stepNumber(col.state)}</span> : null}
                  {col.label}
                  <span className="cr-col__n">{col.cards.length}</span>
                </h2>
                <span className="cr-col__sum">{cents ? dollars(cents) : "—"}</span>
              </header>
              <ul className="cr-col__list">
                {col.cards.slice(0, limit).map((c, i) => (
                  <li key={c.id}>
                    <Card c={c} label={view.labels[c.state]} i={i} draggable={mode === "etapes"} dragging={drag === c.id} onDrag={setDrag} onMove={() => setSheet({ id: c.id, name: c.name, from: c.state })} />
                  </li>
                ))}
                {!col.cards.length ? <li className="cr-col__more">Aucun dossier.</li> : null}
              </ul>
              {col.cards.length > limit ? (
                <button type="button" className="pc-more" onClick={() => setLimits((l) => ({ ...l, [col.id]: limit + PAGE }))}>
                  Afficher {Math.min(PAGE, col.cards.length - limit)} de plus ({col.cards.length - limit} restants)
                </button>
              ) : null}
              {col.hidden ? <p className="cr-col__more">{plural(col.hidden, "dossier plus ancien", "dossiers plus anciens")} (plus de 90 jours) : voir la liste des clients.</p> : null}
            </section>
          );
        })}
      </div>
      {mode === "qui" && view.idle ? <p className="pc-legend">{plural(view.idle, "dossier en suivi sans action attendue n’est pas montré", "dossiers en suivi sans action attendue ne sont pas montrés")} ; les dossiers perdus non plus.</p> : null}

      <Sheet open={Boolean(sheet)} onOpenChange={(o) => !o && setSheet(null)} title={sheet ? `Déplacer ${sheet.name}` : "Déplacer"} description={`Les étapes 5 à 7, 11 et 12 se calculent d’elles-mêmes (contrat, paiement, suivi).${pipedriveEnabled ? " L’affaire Pipedrive suit si une étape y est associée." : ""}`}>
        <div className="cr-movelist">
          {MOVABLE.map((s) => (
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
              <i style={{ background: TONE[s] }} aria-hidden />
              {s !== "perdu" ? `${stepNumber(s)}. ` : ""}
              {view.labels[s]}
            </button>
          ))}
        </div>
      </Sheet>

      <Sheet open={Boolean(lostFor)} onOpenChange={(o) => !o && setLostFor(null)} title={lostFor ? `${lostFor.name} : perdu` : "Perdu"} description="Il sera réactivé automatiquement à sa prochaine demande.">
        <form
          className="cr-note-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (!lostFor || !cause) return;
            commit(lostFor.id, "perdu", detail.trim() || LOSS_CAUSE_LABELS[cause], cause);
            setLostFor(null);
          }}
        >
          <fieldset className="pc-causes">
            <legend className="g-label" style={{ gridColumn: "1 / -1", marginBottom: 4 }}>
              Pourquoi ?
            </legend>
            {LOSS_CAUSES.map((k) => (
              <label key={k}>
                <input type="radio" name="cause" value={k} checked={cause === k} onChange={() => setCause(k)} required />
                {LOSS_CAUSE_LABELS[k]}
              </label>
            ))}
          </fieldset>
          <label className="g-field" style={{ margin: 0 }}>
            <span className="g-label">Précision (facultatif)</span>
            <input className="g-input" value={detail} onChange={(e) => setDetail(e.target.value)} maxLength={200} placeholder="Ex. : a choisi un concurrent moins cher" />
          </label>
          <div>
            <button type="submit" className="k-btn k-btn--ink" disabled={!cause}>
              Marquer perdu
            </button>
          </div>
        </form>
      </Sheet>
    </>
  );
}
