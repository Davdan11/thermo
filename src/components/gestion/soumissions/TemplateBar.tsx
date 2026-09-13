"use client";

/* ==================================================================
   Modèles de soumission, en haut du créateur :
   - « Partir d'un modèle » : pose machine, plan type, prix, inclus,
     exclus, hypothèses et déroulement, sans toucher au client ;
   - « Enregistrer comme modèle » : un nom (ex. « Murale standard ») ;
     un modèle du même nom est mis à jour.
   Les modèles se suppriment dans les réglages des soumissions.
   ================================================================== */

import { useState } from "react";
import { BookmarkPlus, LayoutTemplate } from "lucide-react";

export interface TemplateOption {
  id: string;
  name: string;
  summary: string;
}

export function TemplateBar({ templates, onApply, onSave, busy }: { templates: TemplateOption[]; onApply: (id: string) => void; onSave: (name: string) => Promise<{ ok: boolean; text: string }>; busy: boolean }) {
  const [naming, setNaming] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  return (
    <div className="sq-tplbar">
      {templates.length ? (
        <label className="sq-tplbar__pick">
          <LayoutTemplate size={16} aria-hidden />
          <select className="g-select" value="" onChange={(e) => e.target.value && onApply(e.target.value)} disabled={busy} aria-label="Partir d’un modèle">
            <option value="">Partir d’un modèle…</option>
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} · {t.summary}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <span className="g-hint sq-tplbar__none">Aucun modèle pour l’instant : enregistrez une soumission type pour la réutiliser.</span>
      )}
      {naming ? (
        <form
          className="sq-tplbar__save"
          onSubmit={async (e) => {
            e.preventDefault();
            const r = await onSave(name);
            setMsg(r);
            if (r.ok) {
              setNaming(false);
              setName("");
            }
          }}
        >
          <input className="g-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom du modèle, ex. Murale standard" maxLength={80} aria-label="Nom du modèle" autoFocus />
          <button type="submit" className="g-btn g-btn--ink" disabled={busy || !name.trim()}>{busy ? "…" : "Enregistrer"}</button>
          <button type="button" className="g-btn g-btn--quiet" onClick={() => setNaming(false)}>Annuler</button>
        </form>
      ) : (
        <button type="button" className="g-btn g-btn--quiet" onClick={() => { setNaming(true); setMsg(null); }}>
          <BookmarkPlus size={15} aria-hidden /> Enregistrer comme modèle
        </button>
      )}
      {msg ? <p className={`sq-tplbar__msg ${msg.ok ? "is-ok" : "is-bad"}`} role="status">{msg.text}</p> : null}
    </div>
  );
}
