"use client";

/* Recherche d'un modèle du catalogue (nom, numéro ou slug), limitée à la marque choisie s'il y en a une. */
import { useEffect, useId, useState } from "react";
import { Search, X } from "lucide-react";

export interface ModelPick {
  slug: string;
  label: string;
  brandId: string;
  capacityBtu: number | null;
  systemType: string;
  systemTypeLabel: string;
}

export function ModelSearch({ brand, value, onChange }: { brand: string; value: { slug: string; label: string } | null; onChange: (m: ModelPick | null) => void }) {
  const [query, setQuery] = useState("");
  const [found, setFound] = useState<{ key: string; items: ModelPick[] } | null>(null);
  const listId = useId();
  const key = `${brand}|${query.trim()}`;
  const active = query.trim().length >= 2;

  useEffect(() => {
    if (!active) return;
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/gestion/api/modeles?q=${encodeURIComponent(query.trim())}${brand ? `&marque=${encodeURIComponent(brand)}` : ""}`, { signal: ctrl.signal, cache: "no-store" });
        const json = await res.json().catch(() => null);
        setFound({ key, items: json?.ok ? json.data : [] });
      } catch {
        /* annulée */
      }
    }, 250);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [key, active, brand, query]);

  if (value) {
    return (
      <div className="g-picked">
        <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}>{value.label}</span>
        <input type="hidden" name="modelSlug" value={value.slug} />
        <button type="button" className="g-btn g-btn--quiet" onClick={() => onChange(null)} aria-label="Retirer le modèle">
          <X size={16} aria-hidden /> Retirer
        </button>
      </div>
    );
  }
  const items = active && found?.key === key ? found.items : [];
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Search size={16} aria-hidden style={{ position: "absolute", left: 12, top: 15, color: "var(--g-faint)" }} />
        <input
          id="model-search"
          className="g-input"
          style={{ paddingLeft: 36 }}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={brand ? "Numéro ou nom du modèle" : "Choisissez d’abord une marque, ou cherchez partout"}
          aria-controls={listId}
          aria-autocomplete="list"
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="modelSlug" value="" />
      {items.length ? (
        <ul className="g-suggest" id={listId} role="listbox" aria-label="Modèles trouvés">
          {items.map((m) => (
            <li key={m.slug} role="option" aria-selected={false}>
              <button type="button" onClick={() => { onChange(m); setQuery(""); }}>
                <span style={{ fontWeight: 600 }}>{m.label}</span>
                <span className="g-hint">{m.systemTypeLabel}{m.capacityBtu ? ` · ${m.capacityBtu.toLocaleString("fr-CA")} BTU` : ""}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : active && found?.key === key ? (
        <p className="g-hint" style={{ marginTop: 6 }}>Aucun modèle trouvé{brand ? " pour cette marque" : ""}.</p>
      ) : null}
    </div>
  );
}
