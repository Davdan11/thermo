"use client";

/* ==================================================================
   Éditeur de l'entente (brouillon) : titre, préambule, articles et
   paragraphes numérotés (6.2…), ajout, retrait, déplacement. Les
   paragraphes encore marqués « [À rédiger par l'avocat] » sont
   surlignés : la validation « texte final » les refuse.
   Aucun texte juridique n'est proposé ici : le texte vient de l'avocat.
   ================================================================== */

import { useMemo, useState, useTransition } from "react";
import { ArrowDown, ArrowUp, Plus, Trash2 } from "lucide-react";
import type { PaResult } from "@/app/gestion/(prive)/partenaires-actions";

const PH = /\[\s*À\s+rédiger\s+par\s+l['’]avocat\s*\]/i;
const PLACEHOLDER = "[À rédiger par l’avocat]";

interface Article {
  title: string;
  paragraphs: string[];
}

export function ClauseEditor({ versionId, initial, save, validate }: { versionId: string; initial: { title: string; preamble: string; articles: Article[] }; save: (id: string, input: unknown) => Promise<PaResult>; validate: (id: string) => Promise<PaResult> }) {
  const [title, setTitle] = useState(initial.title);
  const [preamble, setPreamble] = useState(initial.preamble);
  const [articles, setArticles] = useState<Article[]>(initial.articles);
  const [dirty, setDirty] = useState(false);
  const [result, setResult] = useState<PaResult>(undefined);
  const [isPending, start] = useTransition();

  const todo = useMemo(() => articles.flatMap((a, i) => a.paragraphs.map((p, j) => (PH.test(p) ? `${i + 1}.${j + 1}` : null)).filter(Boolean)), [articles]);
  const touch = <T,>(fn: (x: T) => void) => (x: T) => {
    fn(x);
    setDirty(true);
  };
  const setArt = (i: number, next: Article) => setArticles((xs) => xs.map((a, k) => (k === i ? next : a)));
  const move = (i: number, d: -1 | 1) =>
    setArticles((xs) => {
      const j = i + d;
      if (j < 0 || j >= xs.length) return xs;
      const copy = [...xs];
      [copy[i], copy[j]] = [copy[j], copy[i]];
      return copy;
    });

  const doSave = () =>
    start(async () => {
      const r = await save(versionId, { title, preamble, articles });
      setResult(r);
      if (r?.ok) setDirty(false);
    });
  const doValidate = () =>
    start(async () => {
      if (dirty) {
        const r = await save(versionId, { title, preamble, articles });
        if (!r?.ok) return setResult(r);
        setDirty(false);
      }
      setResult(await validate(versionId));
    });

  return (
    <div className="pa-editor">
      <div className="pa-editor__bar">
        <span className={`k-chip ${todo.length ? "k-chip--warn" : "k-chip--ok"} k-chip--dot`}>{todo.length ? `${todo.length} paragraphe${todo.length > 1 ? "s" : ""} à rédiger par l’avocat` : "Aucun paragraphe à rédiger"}</span>
        <div className="g-actions">
          <button type="button" className="k-btn" onClick={doSave} disabled={isPending || !dirty}>
            {isPending ? "…" : dirty ? "Enregistrer le brouillon" : "Brouillon enregistré"}
          </button>
          <button type="button" className="k-btn k-btn--ink" onClick={doValidate} disabled={isPending || todo.length > 0} title={todo.length ? "Remplacez d’abord chaque « [À rédiger par l’avocat] »" : undefined}>
            Marquer « texte final validé »
          </button>
        </div>
      </div>
      {result ? (
        <p className={`g-alert ${result.ok ? "g-alert--ok" : ""}`} role="status">
          {result.ok ? result.message : result.error}
        </p>
      ) : null}

      <div className="g-field">
        <label className="g-label" htmlFor="ag-title">
          Titre
        </label>
        <input id="ag-title" className="g-input" value={title} maxLength={160} onChange={(e) => touch(setTitle)(e.target.value)} />
      </div>
      <div className="g-field">
        <label className="g-label" htmlFor="ag-pre">
          Préambule <small>(facultatif)</small>
        </label>
        <textarea id="ag-pre" className="g-textarea" value={preamble} maxLength={4000} onChange={(e) => touch(setPreamble)(e.target.value)} />
      </div>

      <ol className="pa-articles">
        {articles.map((a, i) => (
          <li key={i} className="pa-article">
            <div className="pa-article__head">
              <span className="pa-article__n">Article {i + 1}</span>
              <input className="g-input" value={a.title} aria-label={`Titre de l’article ${i + 1}`} maxLength={160} onChange={(e) => touch(() => setArt(i, { ...a, title: e.target.value }))(null)} />
              <div className="pa-article__tools">
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" aria-label="Monter" onClick={touch(() => move(i, -1))} disabled={i === 0}>
                  <ArrowUp size={15} />
                </button>
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" aria-label="Descendre" onClick={touch(() => move(i, 1))} disabled={i === articles.length - 1}>
                  <ArrowDown size={15} />
                </button>
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" aria-label="Retirer l’article" onClick={touch(() => window.confirm(`Retirer l’article ${i + 1} ?`) && setArticles((xs) => xs.filter((_, k) => k !== i)))}>
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
            {a.paragraphs.map((p, j) => (
              <div key={j} className={`pa-para${PH.test(p) ? " is-todo" : ""}`}>
                <span className="pa-para__ref">
                  {i + 1}.{j + 1}
                </span>
                <textarea className="g-textarea" value={p} maxLength={4000} aria-label={`Paragraphe ${i + 1}.${j + 1}`} onChange={(e) => touch(() => setArt(i, { ...a, paragraphs: a.paragraphs.map((x, k) => (k === j ? e.target.value : x)) }))(null)} />
                {a.paragraphs.length > 1 ? (
                  <button type="button" className="k-btn k-btn--ghost k-btn--icon" aria-label={`Retirer le paragraphe ${i + 1}.${j + 1}`} onClick={touch(() => setArt(i, { ...a, paragraphs: a.paragraphs.filter((_, k) => k !== j) }))}>
                    <Trash2 size={14} />
                  </button>
                ) : null}
              </div>
            ))}
            <button type="button" className="k-link" onClick={touch(() => setArt(i, { ...a, paragraphs: [...a.paragraphs, PLACEHOLDER] }))}>
              <Plus size={14} aria-hidden /> Paragraphe {i + 1}.{a.paragraphs.length + 1}
            </button>
          </li>
        ))}
      </ol>
      <button type="button" className="k-btn" onClick={touch(() => setArticles((xs) => [...xs, { title: "Nouvel article", paragraphs: [PLACEHOLDER] }]))}>
        <Plus size={15} aria-hidden /> Ajouter un article
      </button>
    </div>
  );
}
