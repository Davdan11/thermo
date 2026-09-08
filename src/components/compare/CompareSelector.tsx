"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SelectableModelData } from "@/lib/data/queries/catalogue";

/* ==================================================================
   CompareSelector — sélection de modèles à comparer
   Reçoit la liste allégée (SelectableModelData) pour ne pas embarquer
   tout le registre dans la page.
   ================================================================== */

interface CompareSelectorProps {
  products: SelectableModelData[];
  initialSlugs?: string[];
  maxCompare: number;
}

export function CompareSelector({ products, initialSlugs = [], maxCompare }: CompareSelectorProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set(initialSlugs));
  const [search, setSearch] = useState("");

  /* Suggestions : machines avec vraie photo et données certifiées, une par marque, 12 au plus. */
  const suggested = useMemo(() => {
    const seen = new Set<string>();
    return products
      .filter((p) => p.imageUrl && p.hspf2 !== null)
      .sort((a, b) => (b.hspf2 ?? 0) - (a.hspf2 ?? 0))
      .filter((p) => (seen.has(p.brandSlug) ? false : (seen.add(p.brandSlug), true)))
      .slice(0, 12);
  }, [products]);

  const isSearching = search.trim().length >= 2;
  const filtered = useMemo(() => {
    if (!isSearching) return [];
    const q = search.toLowerCase().trim();
    return products
      .filter((p) => `${p.brandName} ${p.name} ${p.capacityBtu ?? ""}`.toLowerCase().includes(q))
      .slice(0, 60);
  }, [products, search, isSearching]);

  const toggle = useCallback(
    (slug: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(slug)) next.delete(slug);
        else if (next.size < maxCompare) next.add(slug);
        return next;
      });
    },
    [maxCompare],
  );

  const handleCompare = useCallback(() => {
    if (selected.size >= 2) router.push(`/comparer?models=${[...selected].join(",")}`);
  }, [selected, router]);

  const compareDisabled = selected.size >= maxCompare;
  const display = isSearching ? filtered : suggested;

  return (
    <div>
      {selected.size > 0 && (
        <div className="mb-6 flex items-center justify-between gap-4 px-5 py-3 rounded-lg" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <p className="text-sm" style={{ color: "var(--color-foreground)" }}>
            <span className="font-bold">{selected.size}</span> modèle{selected.size > 1 ? "s" : ""} sélectionné{selected.size > 1 ? "s" : ""}
            <span className="ml-2 font-normal" style={{ color: "var(--color-muted)" }}>(min. 2, max. {maxCompare})</span>
          </p>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setSelected(new Set())} className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--color-muted)" }}>
              Effacer
            </button>
            <Button onClick={handleCompare} disabled={selected.size < 2} size="lg">
              Comparer maintenant
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <div className="mb-8">
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none" style={{ color: "var(--color-muted)" }} />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par marque, nom ou capacité…"
            aria-label="Rechercher un modèle à comparer"
            className="w-full h-13 rounded-xl pl-12 pr-4 text-base outline-none transition-all shadow-sm"
            style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", color: "var(--color-foreground)" }}
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} aria-label="Effacer la recherche" className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity" style={{ color: "var(--color-muted)" }}>
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {!isSearching && (
        <h3 className="text-[22px] font-bold mb-2" style={{ color: "var(--color-foreground)" }}>Suggestions</h3>
      )}
      {!isSearching && (
        <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>Une machine par marque parmi celles qui ont une photo officielle et un HSPF2 certifié. Cherchez pour voir les {products.length.toLocaleString("fr-CA")} modèles.</p>
      )}
      {isSearching && filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>Aucun modèle ne correspond à votre recherche.</p>
        </div>
      )}

      {display.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {display.map((p) => {
            const isSelected = selected.has(p.slug);
            const disabled = !isSelected && compareDisabled;
            return (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => toggle(p.slug)}
                  disabled={disabled}
                  aria-pressed={isSelected}
                  className="w-full text-left rounded-xl border bg-white p-4 flex gap-4 items-center transition-colors disabled:opacity-50"
                  style={{ borderColor: isSelected ? "var(--color-accent)" : "var(--color-border)", boxShadow: isSelected ? "0 0 0 2px var(--color-accent)" : undefined }}
                >
                  <div className="h-16 w-20 shrink-0 flex items-center justify-center rounded-md" style={{ background: "#f3f0ea" }}>
                    {p.imageUrl ? (
                      <Image src={p.imageUrl} alt="" width={80} height={64} className="object-contain h-16 w-20" />
                    ) : (
                      <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>Image à venir</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>{p.brandName}</p>
                    <p className="font-semibold truncate" style={{ color: "var(--color-foreground)" }}>{p.name}</p>
                    <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                      {p.systemTypeLabel}
                      {p.capacityBtu ? ` · ${p.capacityBtu.toLocaleString("fr-CA")} BTU` : ""}
                      {p.hspf2 !== null ? ` · HSPF2 ${p.hspf2}` : ""}
                      {p.isColdClimate ? " · grand froid" : ""}
                    </p>
                  </div>
                  <span className="text-xs font-semibold shrink-0" style={{ color: isSelected ? "var(--color-accent)" : "var(--color-muted)" }}>{isSelected ? "Sélectionné" : "Ajouter"}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {selected.size >= 2 && (
        <div className="fixed inset-x-0 bottom-0 z-40 p-4 safe-bottom">
          <div className="mx-auto max-w-2xl flex items-center justify-between gap-4 px-5 py-3 bg-surface-dark text-surface-dark-fg rounded-lg shadow-lg">
            <p className="text-sm">
              <span className="font-semibold">{selected.size}</span> modèle{selected.size > 1 ? "s" : ""} sélectionné{selected.size > 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setSelected(new Set())} className="text-sm text-surface-dark-muted-fg hover:text-surface-dark-fg transition-colors">
                Effacer
              </button>
              <button type="button" onClick={handleCompare} className="h-9 px-4 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-colors">
                Comparer ({selected.size})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
