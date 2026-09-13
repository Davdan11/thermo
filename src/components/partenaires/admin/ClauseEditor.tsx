"use client";

/* ==================================================================
   Éditeur de l'entente (brouillon) : titre, préambule, articles et
   paragraphes numérotés (6.2…), ajout, retrait, déplacement. Les
   paragraphes encore marqués « [À rédiger par l'avocat] » sont
   surlignés : la validation « texte final » les refuse.
   Aucun texte juridique n'est proposé ici : le texte vient de l'avocat.
   Conformité C3 : version tirée de la trousse, numéros de l'avocat
   (« 2.24 ») conservés et modifiables ; ses alinéas ne sont pas
   renumérotés. Parties et annexes restent telles quelles (aperçu).
   ================================================================== */

import { useMemo, useState, useTransition } from "react";
import { ArrowDown, ArrowUp, Plus, Trash2 } from "lucide-react";
import type { PaResult } from "@/app/gestion/(prive)/partenaires-actions";

const PH = /\[\s*À\s+rédiger\s+par\s+l['’]avocat\s*\]/i;
const PLACEHOLDER = "[À rédiger par l’avocat]";

interface Article {
  title: string;
  paragraphs: string[];
  number?: string;
}

export function ClauseEditor({ versionId, initial, save, validate, numbered = false }: { versionId: string; initial: { title: string; preamble: string; articles: Article[] }; save: (id: string, input: unknown) => Promise<PaResult>; validate: (id: string) => Promise<PaResult>; numbered?: boolean }) {
  const [title, setTitle] = useState(initial.title);
  const [preamble, setPreamble] = useState(initial.preamble);
  const [articles, setArticles] = useState<Article[]>(initial.articles);
  const [dirty, setDirty] = useState(false);
  const [result, setResult] = useState<PaResult>(undefined);
  const [isPending, start] = useTransition();

  const label = (a: Article, i: number) => (numbered ? a.number || "?" : String(i + 1));
  const ref = (a: Article, i: number, j: number) => (numbered ? `${label(a, i)}, al. ${j + 1}` : `${i + 1}.${j + 1}`);
  const todo = useMemo(() => articles.flatMap((a, i) => a.paragraphs.map((p, j) => (PH.test(p) ? ref(a, i, j) : null)).filter(Boolean)), [articles]); // eslint-disable-line react-hooks/exhaustive-deps
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

  const payload = () => ({ title, preamble, articles: articles.map((a) => ({ ...(numbered ? { number: (a.number ?? "").trim() } : {}), title: a.title, paragraphs: a.paragraphs })) });
  const doSave = () =>
    start(async () => {
      const r = await save(versionId, payload());
      setResult(r);
      if (r?.ok) setDirty(false);
    });
  const doValidate = () =>
    start(async () => {
      if (dirty) {
        const r = await save(versionId, payload());
        if (!r?.ok) return setResult(r);
        setDirty(false);
      }
      setResult(await validate(versionId));
    });

  return (
    <div className="pa-editor">
      <div className="pa-editor__bar">
        <span className={`k-chip ${todo.length ? "k-chip--warn" : "k-chip--ok"} k-chip--dot`}>{todo.length ? `${todo.length} paragraphe${todo.length > 1 ? "s" : ""} à rédiger par l’avocat` : numbered ? `${articles.length} articles, numéros de l’avocat` : "Aucun paragraphe à rédiger"}</span>
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
        <textarea id="ag-pre" className="g-textarea" value={preamble} maxLength={6000} onChange={(e) => touch(setPreamble)(e.target.value)} />
      </div>

      <ol className="pa-articles">
        {articles.map((a, i) => (
          <li key={i} className="pa-article">
            <div className="pa-article__head">
              {numbered ? (
                <input className="g-input pa-article__num" value={a.number ?? ""} aria-label={`Numéro de l’article ${i + 1}`} maxLength={8} placeholder="2.30" onChange={(e) => touch(() => setArt(i, { ...a, number: e.target.value }))(null)} />
              ) : (
                <span className="pa-article__n">Article {i + 1}</span>
              )}
              <input className="g-input" value={a.title} aria-label={`Titre de l’article ${label(a, i)}`} maxLength={160} onChange={(e) => touch(() => setArt(i, { ...a, title: e.target.value }))(null)} />
              <div className="pa-article__tools">
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" aria-label="Monter" onClick={touch(() => move(i, -1))} disabled={i === 0}>
                  <ArrowUp size={15} />
                </button>
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" aria-label="Descendre" onClick={touch(() => move(i, 1))} disabled={i === articles.length - 1}>
                  <ArrowDown size={15} />
                </button>
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" aria-label="Retirer l’article" onClick={touch(() => window.confirm(`Retirer l’article ${label(a, i)} ?${numbered ? " Les renvois vers ce numéro seront signalés à la validation." : ""}`) && setArticles((xs) => xs.filter((_, k) => k !== i)))}>
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
            {a.paragraphs.map((p, j) => (
              <div key={j} className={`pa-para${PH.test(p) ? " is-todo" : ""}`}>
                <span className="pa-para__ref">{numbered ? `al. ${j + 1}` : `${i + 1}.${j + 1}`}</span>
                <textarea className="g-textarea" value={p} maxLength={6000} aria-label={`Paragraphe ${ref(a, i, j)}`} onChange={(e) => touch(() => setArt(i, { ...a, paragraphs: a.paragraphs.map((x, k) => (k === j ? e.target.value : x)) }))(null)} />
                {a.paragraphs.length > 1 ? (
                  <button type="button" className="k-btn k-btn--ghost k-btn--icon" aria-label={`Retirer le paragraphe ${ref(a, i, j)}`} onClick={touch(() => setArt(i, { ...a, paragraphs: a.paragraphs.filter((_, k) => k !== j) }))}>
                    <Trash2 size={14} />
                  </button>
                ) : null}
              </div>
            ))}
            <button type="button" className="k-link" onClick={touch(() => setArt(i, { ...a, paragraphs: [...a.paragraphs, PLACEHOLDER] }))}>
              <Plus size={14} aria-hidden /> {numbered ? `Alinéa ${a.paragraphs.length + 1}` : `Paragraphe ${i + 1}.${a.paragraphs.length + 1}`}
            </button>
          </li>
        ))}
      </ol>
      <button type="button" className="k-btn" onClick={touch(() => setArticles((xs) => [...xs, { title: "Nouvel article", paragraphs: [PLACEHOLDER], ...(numbered ? { number: "" } : {}) }]))}>
        <Plus size={15} aria-hidden /> Ajouter un article
      </button>
    </div>
  );
}
