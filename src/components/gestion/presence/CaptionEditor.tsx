"use client";

/* Éditeur de légende : texte et mots-clics. Avertit quand un nombre n'existe pas dans la source de la publication. */
import { useActionState, useMemo, useState } from "react";
import { TriangleAlert } from "lucide-react";
import { saveTextAction, type PresenceResult } from "@/app/gestion/(prive)/presence/actions";
import { composeCaption, normalizeHashtags } from "@/lib/presence/captions";
import { unknownNumbers } from "@/lib/presence/numbers";
import type { Post, PostSource } from "@/lib/presence/types";

const IG_MAX = 2200;

export function CaptionEditor({ post, source, disabled }: { post: Pick<Post, "id" | "series" | "text" | "hashtags" | "link">; source: Pick<PostSource, "values" | "texts">; disabled: boolean }) {
  const [text, setText] = useState(post.text);
  const [tags, setTags] = useState(post.hashtags.join(" "));
  const [state, action, pending] = useActionState<PresenceResult, FormData>(saveTextAction, undefined);
  const unknown = useMemo(() => unknownNumbers(text, source), [text, source]);
  const igLength = useMemo(() => composeCaption({ ...post, text, hashtags: normalizeHashtags(tags) }, "instagram").length, [post, text, tags]);
  const dirty = text !== post.text || tags !== post.hashtags.join(" ");

  return (
    <form action={action} className="pr-editor">
      <input type="hidden" name="id" value={post.id} />
      <label className="g-field">
        <span className="g-label">Texte de la publication</span>
        <textarea name="text" className="g-textarea pr-editor__text" rows={11} value={text} onChange={(e) => setText(e.target.value)} disabled={disabled} maxLength={2000} />
      </label>
      <div className="pr-editor__meta">
        <span className={igLength > IG_MAX ? "is-bad" : undefined}>
          Instagram : {igLength} / {IG_MAX} caractères
        </span>
      </div>
      {unknown.length ? (
        <div className="pr-warn" role="alert">
          <TriangleAlert size={16} aria-hidden />
          <p>
            {unknown.length === 1 ? "Ce nombre n’est pas dans la source" : "Ces nombres ne sont pas dans la source"} : <b>{[...new Set(unknown.map((n) => n.raw))].join(", ")}</b>. Vérifiez-le avant d’approuver : on ne publie jamais un chiffre sans source.
          </p>
        </div>
      ) : null}
      <label className="g-field">
        <span className="g-label">Mots-clics (2 sur Facebook, 4 sur Instagram au plus)</span>
        <input name="hashtags" className="g-input" value={tags} onChange={(e) => setTags(e.target.value)} disabled={disabled} maxLength={300} />
      </label>
      <div className="pr-actions__row">
        <button type="submit" className="k-btn k-btn--primary" disabled={disabled || pending || !dirty}>
          {pending ? "Enregistrement…" : "Enregistrer le texte"}
        </button>
        {dirty ? (
          <button
            type="button"
            className="k-btn k-btn--ghost"
            onClick={() => {
              setText(post.text);
              setTags(post.hashtags.join(" "));
            }}
          >
            Annuler les changements
          </button>
        ) : null}
      </div>
      {state ? (
        <p className={`pr-msg ${state.ok ? "is-ok" : "is-bad"}`} role={state.ok ? "status" : "alert"}>
          {state.ok ? state.message : state.error}
        </p>
      ) : null}
    </form>
  );
}
