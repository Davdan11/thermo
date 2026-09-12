"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { SelectableModelData } from "@/lib/data/queries/catalogue";
import { track } from "@/lib/analytics/track";

/* ==================================================================
   CompareSelector — sélection de modèles à comparer
   Reçoit la liste allégée (SelectableModelData) pour ne pas embarquer
   tout le registre dans la page.
   Présentation : langage du duel à glissière (encre sur acier / sable).
   ================================================================== */

const INK = "#141A1F";
const MUTE = "rgba(20,26,31,0.62)";
const LINE = "rgba(20,26,31,0.14)";
const STEEL = "#DCE3E8";
const SAND = "#EFE5D6";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface CompareSelectorProps {
  products: SelectableModelData[];
  initialSlugs?: string[];
  maxCompare: number;
}

export function CompareSelector({ products, initialSlugs = [], maxCompare }: CompareSelectorProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set(initialSlugs));
  const [search, setSearch] = useState("");

  /* Suggestions : machines avec données certifiées, photo d'abord, une par marque, 12 au plus. */
  const suggested = useMemo(() => {
    const seen = new Set<string>();
    return products
      .filter((p) => p.hspf2 !== null)
      .sort((a, b) => (Number(!!b.imageUrl) - Number(!!a.imageUrl)) || (b.hspf2 ?? 0) - (a.hspf2 ?? 0))
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
    if (selected.size >= 2) {
      track("compare_started", { count: selected.size });
      router.push(`/comparer?models=${[...selected].join(",")}`);
    }
  }, [selected, router]);

  const compareDisabled = selected.size >= maxCompare;
  const display = isSearching ? filtered : suggested;

  return (
    <div>
      <div className="mb-12 flex justify-center">
        <div className="relative w-full max-w-xl">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: MUTE }} />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par marque, nom ou capacité…"
            aria-label="Rechercher un modèle à comparer"
            className="cmpd-input h-14 w-full rounded-full pl-13 pr-12 text-base transition-all"
            style={{ border: `1px solid rgba(20,26,31,0.22)`, background: "rgba(255,255,255,0.8)", color: INK, outline: "none", boxShadow: "0 18px 40px -30px rgba(20,26,31,0.5)" }}
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} aria-label="Effacer la recherche" className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-black/5" style={{ color: MUTE }}>
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {!isSearching && (
        <h3 className="m-0 flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.26em", color: MUTE }}>
          <span aria-hidden="true" className="h-px w-8" style={{ background: INK }} />
          Suggestions
          <span aria-hidden="true" className="h-px w-8" style={{ background: INK }} />
        </h3>
      )}
      {!isSearching && (
        <p className="mx-auto mb-8 mt-3 max-w-[600px] text-center text-sm leading-relaxed" style={{ color: MUTE }}>Une machine par marque parmi celles qui ont une photo officielle et un HSPF2 certifié. Cherchez pour voir les {products.length.toLocaleString("fr-CA")} modèles.</p>
      )}
      {isSearching && filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-sm" style={{ color: MUTE }}>Aucun modèle ne correspond à votre recherche.</p>
        </div>
      )}

      {display.length > 0 && (
        <ul key={isSearching ? "recherche" : "suggestions"} className="m-0 grid list-none grid-cols-1 gap-3.5 p-0 sm:grid-cols-2 xl:grid-cols-3">
          {display.map((p, i) => {
            const isSelected = selected.has(p.slug);
            const disabled = !isSelected && compareDisabled;
            return (
              <motion.li
                key={p.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -4% 0px" }}
                transition={{ duration: 0.7, ease: EASE, delay: Math.min(i % 12, 11) * 0.035 }}
              >
                <button
                  type="button"
                  onClick={() => toggle(p.slug)}
                  disabled={disabled}
                  aria-pressed={isSelected}
                  className="cmpd-card flex w-full items-center gap-4 rounded-[20px] p-3.5 pr-4 text-left disabled:opacity-45"
                  style={{ background: isSelected ? "#fff" : "rgba(255,255,255,0.55)", border: `1px solid ${isSelected ? INK : LINE}`, boxShadow: isSelected ? `inset 0 0 0 1px ${INK}` : undefined }}
                >
                  <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-[12px]" style={{ background: "rgba(20,26,31,0.04)" }}>
                    {p.imageUrl ? (
                      <Image src={p.imageUrl} alt="" width={80} height={64} className="cmpd-photo h-16 w-20 object-contain" />
                    ) : (
                      <span className="text-[10px]" style={{ color: MUTE }}>Image à venir</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="m-0 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: MUTE }}>{p.brandName}</p>
                    <p className="m-0 mt-0.5 truncate text-[15px] font-semibold" style={{ color: INK, letterSpacing: "-0.015em" }}>{p.name}</p>
                    <p className="m-0 mt-0.5 text-xs" style={{ color: MUTE }}>
                      {p.systemTypeLabel}
                      {p.capacityBtu ? ` · ${p.capacityBtu.toLocaleString("fr-CA")} BTU` : ""}
                      {p.hspf2 !== null ? ` · HSPF2 ${p.hspf2}` : ""}
                      {p.isColdClimate ? " · grand froid" : ""}
                    </p>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"
                    style={isSelected ? { background: INK, color: "#fff", border: `1px solid ${INK}` } : { color: INK, border: `1px solid rgba(20,26,31,0.2)` }}
                  >
                    {isSelected ? "Sélectionné" : "Ajouter"}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      )}

      <AnimatePresence>
        {selected.size >= 2 && (
          <motion.div
            key="bar"
            className="safe-bottom fixed inset-x-0 bottom-[var(--mobile-bar-offset,0px)] z-50 p-4"
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 110, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div
              className="relative mx-auto flex max-w-2xl items-center justify-between gap-3 overflow-hidden rounded-full py-2 pl-5 pr-2"
              style={{ background: `linear-gradient(90deg, ${STEEL} 0%, ${STEEL} 50%, ${SAND} 50%, ${SAND} 100%)`, border: "1px solid rgba(20,26,31,0.2)", boxShadow: "0 30px 60px -28px rgba(20,26,31,0.55)", color: INK }}
            >
              <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px" style={{ background: "rgba(20,26,31,0.2)" }} />
              <p className="relative m-0 text-sm">
                <span className="font-semibold">{selected.size}</span> modèle{selected.size > 1 ? "s" : ""} sélectionné{selected.size > 1 ? "s" : ""}
              </p>
              <div className="relative flex items-center gap-1.5">
                <button type="button" onClick={() => setSelected(new Set())} className="rounded-full px-3.5 py-2 text-sm transition-colors hover:bg-black/5" style={{ color: MUTE }}>
                  Effacer
                </button>
                <button type="button" onClick={handleCompare} className="cmpd-btn h-10 whitespace-nowrap rounded-full px-5 text-sm font-semibold text-white" style={{ background: INK }}>
                  Comparer ({selected.size})
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
