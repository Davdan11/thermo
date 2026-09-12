"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SearchHit } from "@/lib/search/site-search";

/* ------------------------------------------------------------------
   CatalogueSearch — debounced search with URL sync.
   Version « premium » (héros du catalogue) : suggestions en direct
   (modèles et marques, via /api/recherche) sous la pastille, et
   Entrée / la loupe qui descendent jusqu'aux résultats filtrés.
   ------------------------------------------------------------------ */

interface CatalogueSearchProps {
  /** « premium » : pastille blanche du héros du catalogue (« L’étagère », fond clair). */
  variant?: "default" | "dark" | "premium";
}

/** Zone des résultats du catalogue (src/app/thermopompes/page.tsx). */
const RESULTS_ID = "catalogue-resultats";

/** Logo monochrome de la marque, passé à l’encre ; initiale si le logo n'existe pas. */
function BrandMark({ href, title }: { href: string; title: string }) {
  const [failed, setFailed] = useState(false);
  const slug = href.split("/").filter(Boolean).pop() ?? "";
  if (failed || !slug) {
    return (
      <span className="text-[15px] font-bold" style={{ color: "#121417" }}>
        {title.charAt(0)}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/marques/mono/${slug}.png`}
      alt=""
      width={40}
      height={24}
      onError={() => setFailed(true)}
      style={{ width: 34, height: 20, objectFit: "contain", filter: "brightness(0)", opacity: 0.82 }}
    />
  );
}

export function CatalogueSearch({ variant = "default" }: CatalogueSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") ?? "";
  const premium = variant === "premium";

  // Track whether the user is actively typing (debounce pending)
  const [localValue, setLocalValue] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLFormElement>(null);

  // Suggestions (version premium)
  const [open, setOpen] = useState(false);
  const [hits, setHits] = useState<{ q: string; items: SearchHit[] }>({ q: "", items: [] });
  const [loading, setLoading] = useState(false);

  // Display value: local override while typing, otherwise URL value
  const displayValue = localValue ?? urlSearch;
  const query = displayValue.trim();
  const shownHits = hits.q === query ? hits.items : [];

  function updateURL(newSearch: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (newSearch) {
      params.set("search", newSearch);
    } else {
      params.delete("search");
    }
    params.delete("page");
    setLocalValue(null); // Sync back to URL-driven
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setLocalValue(v);
    if (premium) setOpen(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => updateURL(v), 300);
  }

  function handleClear() {
    setLocalValue(null);
    setOpen(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    updateURL("");
    inputRef.current?.focus();
  }

  /** Applique la recherche tout de suite et descend jusqu'aux résultats. */
  function showResults() {
    if (timerRef.current) clearTimeout(timerRef.current);
    updateURL(displayValue.trim());
    setOpen(false);
    inputRef.current?.blur();
    window.setTimeout(() => document.getElementById(RESULTS_ID)?.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    showResults();
  }

  // Suggestions en direct : mêmes données que la recherche de l'en-tête (modèles et marques seulement).
  useEffect(() => {
    if (!premium || query.length < 2) return;
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/recherche?q=${encodeURIComponent(query)}`, { signal: ctrl.signal });
        const data = (await res.json()) as { hits?: SearchHit[] };
        setHits({ q: query, items: (data.hits ?? []).filter((h) => h.kind === "modele" || h.kind === "marque").slice(0, 6) });
      } catch {
        /* requête annulée ou réseau : on garde l'état précédent */
      } finally {
        if (!ctrl.signal.aborted) setLoading(false);
      }
    }, 160);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [premium, query]);

  // Fermer les suggestions au clic à l'extérieur.
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  if (premium) {
    return (
      <form ref={boxRef} onSubmit={onSubmit} role="search" className="relative w-full">
        <label htmlFor="catalogue-search" className="sr-only">
          Rechercher une marque ou un modèle
        </label>
        <input
          ref={inputRef}
          id="catalogue-search"
          type="search"
          value={displayValue}
          onChange={handleChange}
          onFocus={() => query.length >= 2 && setOpen(true)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          placeholder="Une marque, un modèle, une capacité…"
          aria-expanded={open && query.length >= 2}
          aria-controls="catalogue-suggestions"
          aria-autocomplete="list"
          className="ch-search h-[58px] w-full rounded-full border border-[rgba(18,20,23,0.14)] bg-white pl-6 pr-[104px] text-[15px] text-[#121417] shadow-[0_22px_44px_-30px_rgba(18,20,23,0.5)] transition-[border-color,box-shadow] placeholder:text-[rgba(18,20,23,0.48)] hover:border-[rgba(18,20,23,0.32)] focus-visible:border-[#121417] focus-visible:shadow-[0_0_0_4px_rgba(229,75,23,0.24),0_22px_44px_-30px_rgba(18,20,23,0.5)] focus-visible:outline-none"
          // Le :focus-visible global dessine un rectangle de 2 px : on le coupe dans la pastille.
          style={{ outline: "none" }}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
        {displayValue && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Effacer la recherche"
            className="absolute right-[60px] top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[rgba(18,20,23,0.5)] transition-colors hover:bg-[rgba(18,20,23,0.06)] hover:text-[#121417]"
          >
            <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        )}
        <button
          type="submit"
          aria-label="Voir les résultats"
          className="absolute right-2 top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-[#E54B17] text-white transition-transform duration-300 hover:scale-105"
        >
          <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7.5" />
            <line x1="21" y1="21" x2="16.4" y2="16.4" />
          </svg>
        </button>

        {open && query.length >= 2 && (
          <div
            id="catalogue-suggestions"
            className="absolute left-0 right-0 top-[calc(100%+10px)] z-30 overflow-hidden rounded-[22px]"
            style={{ background: "#FFFFFF", border: "1px solid rgba(18,20,23,0.08)", boxShadow: "0 1px 0 rgba(18,20,23,0.04), 0 44px 80px -34px rgba(18,20,23,0.42)" }}
          >
            {shownHits.length === 0 ? (
              <p className="px-5 py-4 text-[14px]" style={{ color: "rgba(18,20,23,0.6)", margin: 0 }}>
                {loading || hits.q !== query ? "Recherche…" : `Aucune suggestion pour « ${query} ». Appuyez sur Entrée pour filtrer le catalogue.`}
              </p>
            ) : (
              <ul role="listbox" style={{ listStyle: "none", margin: 0, padding: "8px 0" }}>
                {shownHits.map((h) => (
                  <li key={h.href}>
                    <Link href={h.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-5 py-2.5 transition-colors hover:bg-[#F4F1EC]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl" style={{ background: h.imageUrl ? "#fff" : "#F1EDE6", boxShadow: "inset 0 0 0 1px rgba(18,20,23,0.07)" }}>
                        {h.imageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={h.imageUrl} alt="" width={40} height={40} loading="lazy" style={{ width: 36, height: 36, objectFit: "contain" }} />
                        ) : h.kind === "marque" ? (
                          <BrandMark href={h.href} title={h.title} />
                        ) : (
                          <span className="text-[15px] font-bold" style={{ color: "#121417" }}>
                            {h.title.charAt(0)}
                          </span>
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[14.5px] font-semibold" style={{ color: "#121417" }}>
                          {h.title}
                        </span>
                        {h.subtitle && (
                          <span className="block truncate text-[12.5px]" style={{ color: "rgba(18,20,23,0.55)" }}>
                            {h.subtitle}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <button
              type="button"
              onClick={showResults}
              className="flex w-full items-center justify-between px-5 py-3.5 text-left text-[13.5px] font-semibold transition-colors hover:bg-[#F4F1EC]"
              style={{ borderTop: "1px solid rgba(18,20,23,0.08)", color: "#C23D0F" }}
            >
              Voir tous les résultats dans le catalogue
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        )}
      </form>
    );
  }

  return (
    <div className="relative flex-1 max-w-md">
      <label htmlFor="catalogue-search" className="sr-only">
        Rechercher une marque ou un modèle
      </label>
      <input
        ref={inputRef}
        id="catalogue-search"
        type="search"
        value={displayValue}
        onChange={handleChange}
        placeholder="Rechercher une marque ou un modèle"
        className={cn(
          "w-full h-[42px] px-4 pr-12 rounded-[4px] border text-[13px] transition-colors focus-visible:outline-none focus-visible:border-[var(--color-accent)] focus-visible:shadow-[0_0_0_1px_var(--color-accent)]",
          variant === "dark"
            ? "bg-transparent border-white/20 text-white placeholder:text-white/40 hover:border-white/40"
            : "bg-surface border-input-border text-foreground placeholder:text-muted-fg hover:border-border-hover",
        )}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
      {/* Search icon (moved to right) */}
      <svg
        className={cn("absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none", variant === "dark" ? "text-[#F7F5F0]" : "text-[#6B7280]")}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );
}
