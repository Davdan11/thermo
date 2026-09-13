"use client";

/* ==================================================================
   Atelier d'un article : éditeur Markdown (barre d'outils, images,
   couverture, sources, chiffres ajoutés), aperçu fidèle à la page
   publique, contrôles en direct (chiffres sans source, passages à
   écrire, Loi 25) et décisions (enregistrer, envoyer à l'approbation,
   approuver et publier, retirer, mettre à jour les chiffres,
   assistant de style, revenir en arrière).
   ================================================================== */

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { Bold, Check, ExternalLink, Heading2, ImagePlus, Link2, List, Plus, RefreshCw, RotateCcw, Send, Sparkles, TriangleAlert, Undo2, X } from "lucide-react";
import {
  improveStyleAction,
  previewArticleAction,
  publishArticleAction,
  refreshArticleAction,
  restorePreviousAction,
  returnToDraftAction,
  saveArticleAction,
  submitArticleAction,
  unpublishArticleAction,
  type ArticleResult,
} from "@/app/gestion/(prive)/presence/articles/actions";
import { privacyMessage, privacyProblems } from "@/lib/presence/loi25";
import { articleUnknownNumbers, TODO_RE, wordCount } from "@/lib/blogue/text";
import { ARTICLE_CATEGORIES, CATEGORY_LABELS, type ArticleCategory, type ArticleMention, type ArticleSource, type ArticleStatus } from "@/lib/blogue/types";

type Ref = { label: string; url: string };
type Fig = { label: string; value: string; url: string };

export interface WorkbenchArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  category: ArticleCategory;
  author: string;
  cover: { path: string; alt: string } | null;
  references: Array<{ label: string; url?: string }>;
  figures: Array<{ label: string; value: string; url?: string }>;
  status: ArticleStatus;
  published: boolean;
  source: ArticleSource;
  mentions: ArticleMention[];
  fromTemplate: boolean;
  hasPrevious: boolean;
}

type Form = { title: string; slug: string; description: string; body: string; category: ArticleCategory; author: string; coverPath: string; coverAlt: string; references: Ref[]; figures: Fig[] };

const toForm = (a: WorkbenchArticle): Form => ({
  title: a.title,
  slug: a.slug,
  description: a.description,
  body: a.body,
  category: a.category,
  author: a.author,
  coverPath: a.cover?.path ?? "",
  coverAlt: a.cover?.alt ?? "",
  references: a.references.map((r) => ({ label: r.label, url: r.url ?? "" })),
  figures: a.figures.map((f) => ({ label: f.label, value: f.value, url: f.url ?? "" })),
});

const payload = (f: Form) => ({
  title: f.title,
  slug: f.slug,
  description: f.description,
  body: f.body,
  category: f.category,
  author: f.author,
  cover: f.coverPath ? { path: f.coverPath, alt: f.coverAlt } : null,
  references: f.references.filter((r) => r.label.trim()).map((r) => ({ label: r.label, ...(r.url.trim() ? { url: r.url.trim() } : {}) })),
  figures: f.figures.filter((x) => x.label.trim() || x.value.trim()).map((x) => ({ label: x.label, value: x.value, ...(x.url.trim() ? { url: x.url.trim() } : {}) })),
});

export function ArticleWorkbench({ article, initialHtml, photos, assistant, publicUrl }: { article: WorkbenchArticle; initialHtml: string; photos: Array<{ path: string; label: string }>; assistant: { enabled: boolean; reason?: string }; publicUrl: string }) {
  const initial = useMemo(() => toForm(article), [article]);
  const [f, setF] = useState<Form>(initial);
  const [html, setHtml] = useState(initialHtml);
  const [links, setLinks] = useState<number | null>(null);
  const [res, setRes] = useState<ArticleResult>();
  const [pending, start] = useTransition();
  const [confirm, setConfirm] = useState<null | "retirer" | "chiffres">(null);
  const [imgPanel, setImgPanel] = useState(false);
  const [uploading, setUploading] = useState(false);
  const area = useRef<HTMLTextAreaElement>(null);
  const dirty = JSON.stringify(f) !== JSON.stringify(initial);
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((cur) => ({ ...cur, [k]: v }));

  // Aperçu : même rendu que la page publique, 700 ms après la dernière frappe.
  useEffect(() => {
    if (f.body === article.body && links === null) return;
    const t = window.setTimeout(async () => {
      const r = await previewArticleAction(article.id, f.body);
      if (r) {
        setHtml(r.html);
        setLinks(r.links);
      }
    }, 700);
    return () => window.clearTimeout(t);
  }, [f.body, article.id, article.body, links]);

  const checks = useMemo(() => {
    const art = {
      title: f.title,
      description: f.description,
      body: f.body,
      source: article.source,
      figures: f.figures.map((x, i) => ({ id: `c${i}`, label: x.label, value: x.value })),
      mentions: article.mentions,
      cover: f.coverPath ? { path: f.coverPath, alt: f.coverAlt } : null,
    };
    const unknown = [...new Set(articleUnknownNumbers(art).map((n) => n.raw))];
    const todo = TODO_RE.test(`${f.title}\n${f.description}\n${f.body}`);
    const privacy = f.category === "question" ? privacyMessage(privacyProblems(`${f.title}\n${f.description}\n${f.body}`)) : null;
    return { unknown, todo, privacy, words: wordCount(f.body), refs: f.references.filter((r) => r.label.trim()).length, descOk: f.description.trim().length >= 40, coverOk: !f.coverPath || !!f.coverAlt.trim() };
  }, [f, article.source, article.mentions]);
  const publishable = !checks.unknown.length && !checks.todo && !checks.privacy && checks.words >= 120 && checks.refs > 0 && checks.descOk && checks.coverOk;

  const run = (fn: () => Promise<ArticleResult>) =>
    start(async () => {
      setRes(await fn());
      setConfirm(null);
    });
  const saveThen = (next?: () => Promise<ArticleResult>) =>
    run(async () => {
      if (dirty) {
        const r = await saveArticleAction(article.id, payload(f));
        if (!r?.ok || !next) return r;
      }
      return next ? next() : { ok: true, message: "Rien à enregistrer." };
    });

  const insert = (before: string, after = "", placeholder = "") => {
    const el = area.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e, value } = el;
    const sel = value.slice(s, e) || placeholder;
    const next = `${value.slice(0, s)}${before}${sel}${after}${value.slice(e)}`;
    set("body", next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(s + before.length, s + before.length + sel.length);
    });
  };
  const atLine = (prefix: string) => {
    const el = area.current;
    if (!el) return;
    const s = el.selectionStart;
    const start0 = el.value.lastIndexOf("\n", s - 1) + 1;
    set("body", `${el.value.slice(0, start0)}${prefix}${el.value.slice(start0)}`);
  };

  const upload = async (file: File, asCover: boolean) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      const r = await fetch("/gestion/api/blogue/image", { method: "POST", body: fd });
      const j = (await r.json()) as { path?: string; error?: string };
      if (!r.ok || !j.path) setRes({ ok: false, error: j.error ?? "Téléversement impossible." });
      else if (asCover) setF((cur) => ({ ...cur, coverPath: j.path as string }));
      else insert(`![Décrivez l’image](${j.path})`);
    } catch {
      setRes({ ok: false, error: "Téléversement impossible." });
    } finally {
      setUploading(false);
    }
  };

  const locked = pending || uploading;

  return (
    <div className="ar-bench">
      <div className="ar-form">
        <div className="k-card k-card--pad">
          <div className="ar-form">
            <label className="g-field">
              <span className="g-label">Titre</span>
              <input className="g-input" value={f.title} onChange={(e) => set("title", e.target.value)} maxLength={160} disabled={locked} />
            </label>
            <label className="g-field">
              <span className="g-label">Chapeau (liste, description de la page, flux RSS)</span>
              <textarea className="g-textarea" rows={3} value={f.description} onChange={(e) => set("description", e.target.value)} maxLength={320} disabled={locked} />
            </label>
            <div className="ar-grid2">
              <label className="g-field">
                <span className="g-label">Adresse : /blogue/…</span>
                <input className="g-input" value={f.slug} onChange={(e) => set("slug", e.target.value.toLowerCase())} disabled={locked || article.published} maxLength={90} />
              </label>
              <label className="g-field">
                <span className="g-label">Rubrique</span>
                <select className="g-input" value={f.category} onChange={(e) => set("category", e.target.value as ArticleCategory)} disabled={locked}>
                  {ARTICLE_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {CATEGORY_LABELS[c]}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="g-field">
              <span className="g-label">Auteur (affiché sur l’article)</span>
              <input className="g-input" value={f.author} onChange={(e) => set("author", e.target.value)} maxLength={80} disabled={locked} />
            </label>
          </div>
        </div>

        <div className="k-card k-card--pad">
          <p className="g-label" style={{ marginBottom: 8 }}>
            Texte (Markdown : ## pour un intertitre, - pour une liste, [texte](/page) pour un lien)
          </p>
          <div className="ar-tools" role="toolbar" aria-label="Mise en forme">
            <button type="button" onClick={() => atLine("## ")} disabled={locked}>
              <Heading2 size={15} aria-hidden /> Intertitre
            </button>
            <button type="button" onClick={() => insert("**", "**", "texte en gras")} disabled={locked}>
              <Bold size={15} aria-hidden /> Gras
            </button>
            <button type="button" onClick={() => atLine("- ")} disabled={locked}>
              <List size={15} aria-hidden /> Liste
            </button>
            <button type="button" onClick={() => insert("[", "](/page-du-site)", "texte du lien")} disabled={locked}>
              <Link2 size={15} aria-hidden /> Lien
            </button>
            <button type="button" onClick={() => setImgPanel((v) => !v)} aria-expanded={imgPanel} disabled={locked}>
              <ImagePlus size={15} aria-hidden /> Image
            </button>
          </div>
          {imgPanel ? (
            <div className="k-card k-card--pad" style={{ borderRadius: 0 }}>
              <p className="g-hint">Cliquez une photo du site pour l’insérer à l’endroit du curseur, ou téléversez la vôtre (JPEG, PNG ou WebP, 8 Mo au plus). Jamais une image générée présentée comme un vrai chantier.</p>
              <div className="ar-photos" style={{ marginTop: 8 }}>
                {photos.map((p) => (
                  <button key={p.path} type="button" title={p.label} onClick={() => insert(`![Décrivez l’image](${p.path})`)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.path} alt={p.label} loading="lazy" />
                  </button>
                ))}
              </div>
              <label className="k-btn" style={{ marginTop: 10 }}>
                {uploading ? "Téléversement…" : "Téléverser une image"}
                <input type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0], false)} />
              </label>
            </div>
          ) : null}
          <textarea ref={area} className="g-textarea ar-body" aria-label="Texte de l’article" value={f.body} onChange={(e) => set("body", e.target.value)} disabled={locked} spellCheck lang="fr-CA" />
          <p className="g-hint">{checks.words} mots</p>
        </div>

        <div className="k-card k-card--pad">
          <p className="g-label">Photo de couverture</p>
          <div className="ar-photos" style={{ marginTop: 8 }}>
            {photos.map((p) => (
              <button key={p.path} type="button" aria-pressed={f.coverPath === p.path} title={p.label} onClick={() => setF((cur) => ({ ...cur, coverPath: cur.coverPath === p.path ? "" : p.path, coverAlt: cur.coverPath === p.path ? "" : cur.coverAlt || p.label }))}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.path} alt={p.label} loading="lazy" />
              </button>
            ))}
          </div>
          <div className="ar-grid2" style={{ marginTop: 10 }}>
            <label className="g-field">
              <span className="g-label">Chemin</span>
              <input className="g-input" value={f.coverPath} onChange={(e) => set("coverPath", e.target.value)} placeholder="Aucune photo" disabled={locked} />
            </label>
            <label className="g-field">
              <span className="g-label">Description de la photo (accessibilité)</span>
              <input className="g-input" value={f.coverAlt} onChange={(e) => set("coverAlt", e.target.value)} maxLength={200} disabled={locked} />
            </label>
          </div>
          <label className="k-btn" style={{ marginTop: 10 }}>
            {uploading ? "Téléversement…" : "Téléverser une photo de couverture"}
            <input type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0], true)} />
          </label>
        </div>

        <div className="k-card k-card--pad">
          <p className="g-label">Sources (en liens au bas de l’article ; au moins une)</p>
          <div className="ar-rows" style={{ marginTop: 8 }}>
            {f.references.map((r, i) => (
              <div key={i} className="ar-rowedit">
                <div className="ar-rowedit__fields ar-rowedit__fields--2">
                  <input className="g-input" aria-label={`Source ${i + 1} : libellé`} placeholder="Libellé de la source" value={r.label} onChange={(e) => set("references", f.references.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)))} disabled={locked} />
                  <input className="g-input" aria-label={`Source ${i + 1} : adresse`} placeholder="https://… ou /page-du-site" value={r.url} onChange={(e) => set("references", f.references.map((x, j) => (j === i ? { ...x, url: e.target.value } : x)))} disabled={locked} />
                </div>
                <button type="button" className="k-btn k-btn--icon" aria-label="Retirer cette source" onClick={() => set("references", f.references.filter((_, j) => j !== i))} disabled={locked}>
                  <X size={15} aria-hidden />
                </button>
              </div>
            ))}
          </div>
          <button type="button" className="k-btn" style={{ marginTop: 8 }} onClick={() => set("references", [...f.references, { label: "", url: "" }])} disabled={locked}>
            <Plus size={15} aria-hidden /> Ajouter une source
          </button>
        </div>

        <div className="k-card k-card--pad">
          <p className="g-label">Chiffres ajoutés à la main (chacun avec sa source)</p>
          <p className="g-hint">Les chiffres des gabarits viennent déjà des données du site. Un chiffre que vous écrivez vous-même doit être déclaré ici, sinon l’article ne peut pas être publié.</p>
          <div className="ar-rows" style={{ marginTop: 8 }}>
            {f.figures.map((x, i) => (
              <div key={i} className="ar-rowedit">
                <div className="ar-rowedit__fields ar-rowedit__fields--3">
                  <input className="g-input" aria-label={`Chiffre ${i + 1} : ce que c’est`} placeholder="Ce que c’est" value={x.label} onChange={(e) => set("figures", f.figures.map((y, j) => (j === i ? { ...y, label: e.target.value } : y)))} disabled={locked} />
                  <input className="g-input" aria-label={`Chiffre ${i + 1} : valeur`} placeholder="Valeur (ex. 30 cm)" value={x.value} onChange={(e) => set("figures", f.figures.map((y, j) => (j === i ? { ...y, value: e.target.value } : y)))} disabled={locked} />
                  <input className="g-input" aria-label={`Chiffre ${i + 1} : adresse de la source`} placeholder="Adresse de la source" value={x.url} onChange={(e) => set("figures", f.figures.map((y, j) => (j === i ? { ...y, url: e.target.value } : y)))} disabled={locked} />
                </div>
                <button type="button" className="k-btn k-btn--icon" aria-label="Retirer ce chiffre" onClick={() => set("figures", f.figures.filter((_, j) => j !== i))} disabled={locked}>
                  <X size={15} aria-hidden />
                </button>
              </div>
            ))}
          </div>
          <button type="button" className="k-btn" style={{ marginTop: 8 }} onClick={() => set("figures", [...f.figures, { label: "", value: "", url: "" }])} disabled={locked}>
            <Plus size={15} aria-hidden /> Ajouter un chiffre
          </button>
        </div>
      </div>

      <div className="ar-side">
        <div className="k-card k-card--pad">
          <div className="pr-actions__row" style={{ flexWrap: "wrap" }}>
            <button type="button" className="k-btn k-btn--primary" disabled={locked || !dirty} onClick={() => saveThen()}>
              {pending ? "…" : "Enregistrer"}
            </button>
            {article.status === "brouillon" ? (
              <button type="button" className="k-btn k-btn--ink" disabled={locked || checks.todo} onClick={() => saveThen(() => submitArticleAction(article.id))}>
                <Send size={15} aria-hidden /> Envoyer à l’approbation
              </button>
            ) : null}
            {article.status === "a_approuver" ? (
              <>
                <button type="button" className="k-btn k-btn--ok" disabled={locked || !publishable} onClick={() => saveThen(() => publishArticleAction(article.id))}>
                  <Check size={16} aria-hidden /> Approuver et publier
                </button>
                <button type="button" className="k-btn" disabled={locked} onClick={() => run(() => returnToDraftAction(article.id))}>
                  <Undo2 size={15} aria-hidden /> Remettre en brouillon
                </button>
              </>
            ) : null}
            {article.status === "publie" ? (
              <>
                <a className="k-btn" href={publicUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={15} aria-hidden /> Voir en ligne
                </a>
                {confirm === "retirer" ? (
                  <button type="button" className="k-btn k-btn--danger" disabled={locked} onClick={() => run(() => unpublishArticleAction(article.id))}>
                    Confirmer le retrait
                  </button>
                ) : (
                  <button type="button" className="k-btn" disabled={locked} onClick={() => setConfirm("retirer")}>
                    Retirer du blogue
                  </button>
                )}
              </>
            ) : null}
          </div>
          <div className="pr-actions__row" style={{ flexWrap: "wrap", marginTop: 8 }}>
            {article.fromTemplate ? (
              confirm === "chiffres" ? (
                <button type="button" className="k-btn k-btn--ink" disabled={locked} onClick={() => run(() => refreshArticleAction(article.id))}>
                  Confirmer : réécrire avec les données du jour
                </button>
              ) : (
                <button type="button" className="k-btn" disabled={locked || dirty} onClick={() => setConfirm("chiffres")} title="Réécrit le texte du gabarit avec les données du jour ; l’ancienne version reste récupérable.">
                  <RefreshCw size={15} aria-hidden /> Mettre à jour les chiffres
                </button>
              )
            ) : null}
            {article.hasPrevious && article.status !== "publie" ? (
              <button type="button" className="k-btn" disabled={locked || dirty} onClick={() => run(() => restorePreviousAction(article.id))}>
                <RotateCcw size={15} aria-hidden /> Revenir à la version précédente
              </button>
            ) : null}
            {article.status !== "publie" ? (
              <button type="button" className="k-btn" disabled={locked || dirty || !assistant.enabled} title={assistant.enabled ? "Claude propose un style plus fluide ; refusé s’il ajoute un chiffre ou un lien." : assistant.reason} onClick={() => run(() => improveStyleAction(article.id))}>
                <Sparkles size={15} aria-hidden /> Améliorer le style
              </button>
            ) : null}
          </div>
          {dirty ? <p className="ar-dirty">Modifications non enregistrées.</p> : null}
          {res ? (
            <p className={`pr-msg ${res.ok ? "is-ok" : "is-bad"}`} role={res.ok ? "status" : "alert"}>
              {res.ok ? res.message : res.error}
            </p>
          ) : null}
        </div>

        <div className="k-card k-card--pad">
          <p className="g-label">Avant de publier</p>
          <ul className="ar-checks" style={{ marginTop: 8 }}>
            <li className={checks.unknown.length ? "is-bad" : "is-ok"}>
              {checks.unknown.length ? <TriangleAlert size={16} aria-hidden /> : <Check size={16} aria-hidden />}
              <span>{checks.unknown.length ? `Chiffres sans source : ${checks.unknown.join(", ")}. Retirez-les ou déclarez-les dans « Chiffres ajoutés ».` : "Chaque chiffre est dans la source."}</span>
            </li>
            <li className={checks.todo ? "is-bad" : "is-ok"}>
              {checks.todo ? <TriangleAlert size={16} aria-hidden /> : <Check size={16} aria-hidden />}
              <span>{checks.todo ? "Il reste des passages « [À écrire] »." : "Aucun passage à écrire."}</span>
            </li>
            <li className={checks.refs ? "is-ok" : "is-bad"}>
              {checks.refs ? <Check size={16} aria-hidden /> : <TriangleAlert size={16} aria-hidden />}
              <span>{checks.refs ? `${checks.refs} source${checks.refs > 1 ? "s" : ""} citée${checks.refs > 1 ? "s" : ""}.` : "Ajoutez au moins une source."}</span>
            </li>
            <li className={checks.words >= 120 && checks.descOk ? "is-ok" : "is-bad"}>
              {checks.words >= 120 && checks.descOk ? <Check size={16} aria-hidden /> : <TriangleAlert size={16} aria-hidden />}
              <span>{checks.words >= 120 && checks.descOk ? "Longueur suffisante." : "Texte (120 mots) ou chapeau (40 caractères) trop court."}</span>
            </li>
            {!checks.coverOk ? (
              <li className="is-bad">
                <TriangleAlert size={16} aria-hidden />
                <span>Décrivez la photo de couverture.</span>
              </li>
            ) : null}
            {checks.privacy ? (
              <li className="is-bad">
                <TriangleAlert size={16} aria-hidden />
                <span>{checks.privacy}</span>
              </li>
            ) : null}
            {links !== null ? (
              <li className="is-ok">
                <Check size={16} aria-hidden />
                <span>{links} lien{links > 1 ? "s" : ""} interne{links > 1 ? "s" : ""} ajouté{links > 1 ? "s" : ""} automatiquement (villes, marques, fiches).</span>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="ar-preview" aria-label="Aperçu">
          <p className="ar-preview__cat">{CATEGORY_LABELS[f.category]} · aperçu</p>
          <h1>{f.title}</h1>
          <p className="ar-preview__desc">{f.description}</p>
          {f.coverPath ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="ar-preview__cover" src={f.coverPath} alt={f.coverAlt} />
          ) : null}
          <div className="ar-prose" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}
