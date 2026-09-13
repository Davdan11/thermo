"use client";

/* Marques avec logos : choix unique (job) ou multiple (installateur). Les marques les plus courantes et la
   sélection d'abord ; recherche et « toutes les marques » pour le reste. Les cases masquées restent dans le
   formulaire (attribut hidden) : une marque cochée puis masquée par la recherche est quand même envoyée. */
import { useMemo, useState } from "react";
import { Check, Search } from "lucide-react";
import type { BrandOption } from "@/lib/gestion/catalog";

const POPULAR = ["daikin", "mitsubishi-electric", "fujitsu", "lg", "samsung", "gree", "midea", "moovair", "panasonic", "bosch", "carrier", "lennox"];

const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function BrandGrid({
  brands,
  type,
  name,
  selected,
  onChange,
  noneLabel,
  hinted = [],
  idPrefix,
}: {
  brands: BrandOption[];
  type: "radio" | "checkbox";
  name: string;
  selected: string[];
  onChange: (ids: string[]) => void;
  /** Choix « aucune marque » (radio seulement). */
  noneLabel?: string;
  /** Marques devinées (candidature) : signalées. */
  hinted?: string[];
  idPrefix: string;
}) {
  const [query, setQuery] = useState("");
  const [all, setAll] = useState(false);
  const q = fold(query.trim());
  const visible = useMemo(() => {
    const set = new Set<string>();
    for (const b of brands) {
      const match = q ? fold(b.name).includes(q) : all || POPULAR.includes(b.id) || selected.includes(b.id) || hinted.includes(b.id);
      if (match) set.add(b.id);
    }
    return set;
  }, [brands, q, all, selected, hinted]);

  const toggle = (id: string, on: boolean) => {
    if (type === "radio") onChange(on ? [id] : []);
    else onChange(on ? [...new Set([...selected, id])] : selected.filter((x) => x !== id));
  };

  return (
    <div>
      <div className="g-brands-tools">
        <label className="g-sr" htmlFor={`${idPrefix}-q`}>Chercher une marque</label>
        <div style={{ position: "relative", flex: "1 1 200px" }}>
          <Search size={16} aria-hidden style={{ position: "absolute", left: 12, top: 14, color: "var(--g-faint)" }} />
          <input id={`${idPrefix}-q`} className="g-input" style={{ paddingLeft: 36 }} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Chercher une marque" type="search" />
        </div>
        {!q ? (
          <button type="button" className="g-btn g-btn--quiet" onClick={() => setAll((v) => !v)} aria-expanded={all}>
            {all ? "Marques courantes" : `Toutes (${brands.length})`}
          </button>
        ) : null}
        {type === "checkbox" && selected.length ? (
          <button type="button" className="g-btn g-btn--quiet" onClick={() => onChange([])}>
            Tout décocher ({selected.length})
          </button>
        ) : null}
      </div>
      <div className="g-brands" role={type === "radio" ? "radiogroup" : "group"}>
        {type === "radio" && noneLabel ? (
          <label className="g-brand-chip" hidden={Boolean(q)}>
            <input type="radio" name={name} value="" checked={selected.length === 0} onChange={() => onChange([])} />
            <span className="g-brand-chip__mono" style={{ fontSize: 13, fontWeight: 600 }}>—</span>
            {noneLabel}
          </label>
        ) : null}
        {brands.map((b) => (
          <label key={b.id} className="g-brand-chip" hidden={!visible.has(b.id)}>
            <input type={type} name={name} value={b.id} checked={selected.includes(b.id)} onChange={(e) => toggle(b.id, e.target.checked)} />
            <span className="g-brand-chip__tick" aria-hidden><Check size={12} strokeWidth={3} /></span>
            {b.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={b.logo} alt="" loading="lazy" decoding="async" />
            ) : (
              <span className="g-brand-chip__mono">{b.name.slice(0, 12)}</span>
            )}
            <span>
              {b.name}
              {hinted.includes(b.id) ? <span className="g-sr"> (devinée)</span> : null}
            </span>
            {hinted.includes(b.id) ? <span className="g-hint" style={{ fontSize: 11 }}>devinée</span> : null}
          </label>
        ))}
      </div>
      {q && visible.size === 0 ? <p className="g-hint" style={{ marginTop: 8 }}>Aucune marque ne correspond.</p> : null}
    </div>
  );
}
