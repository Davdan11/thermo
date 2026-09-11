"use client";
/* ==================================================================
   Recherche de l'en-tête : un bouton loupe ouvre un champ, les
   suggestions arrivent de /api/recherche (modèles, marques, villes,
   guides, pages). Clavier : flèches, Entrée, Échap. Entrée sans
   sélection ouvre la page /recherche avec la requête.
   ================================================================== */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X, Building2, MapPin, BookOpen, FileText, Wind } from "lucide-react";
import type { SearchHit, SearchKind } from "@/lib/search/site-search";

const KIND_LABEL: Record<SearchKind, string> = { modele: "Modèles", marque: "Marques", ville: "Villes", guide: "Guides", page: "Pages" };
const KIND_ICON: Record<SearchKind, typeof Search> = { modele: Wind, marque: Building2, ville: MapPin, guide: BookOpen, page: FileText };
const KIND_ORDER: SearchKind[] = ["modele", "marque", "ville", "guide", "page"];

export function SiteSearch({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const router = useRouter();
  const [open, setOpen] = useState(variant === "mobile");
  const [q, setQ] = useState("");
  const [result, setResult] = useState<{ q: string; hits: SearchHit[] }>({ q: "", hits: [] });
  const [active, setActive] = useState(-1);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const query = q.trim();
  const showPanel = query.length >= 2;
  // Résultats affichés seulement s'ils correspondent à la requête courante (pas d'état résiduel).
  const hits = showPanel && result.q === query ? result.hits : [];

  function close() {
    if (variant === "desktop") setOpen(false);
    setQ("");
    setActive(-1);
  }

  useEffect(() => {
    if (open && variant === "desktop") inputRef.current?.focus();
  }, [open, variant]);

  useEffect(() => {
    if (query.length < 2) return;
    const t = setTimeout(async () => {
      abortRef.current?.abort();
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      setLoading(true);
      try {
        const res = await fetch(`/api/recherche?q=${encodeURIComponent(query)}`, { signal: ctrl.signal });
        const data = (await res.json()) as { hits: SearchHit[] };
        setResult({ q: query, hits: data.hits ?? [] });
        setActive(-1);
      } catch {
        /* requête annulée ou réseau : on garde l'état précédent */
      } finally {
        if (!ctrl.signal.aborted) setLoading(false);
      }
    }, 180);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    if (!open || variant !== "desktop") return;
    function onDoc(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQ("");
        setActive(-1);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, variant]);

  function go(href: string) {
    close();
    router.push(href);
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, hits.length - 1)); return; }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, -1)); return; }
    if (e.key === "Enter") {
      e.preventDefault();
      if (active >= 0 && hits[active]) go(hits[active].href);
      else if (query.length >= 2) go(`/recherche?q=${encodeURIComponent(query)}`);
    }
  }

  const grouped = KIND_ORDER.map((k) => ({ kind: k, items: hits.filter((h) => h.kind === k) })).filter((g) => g.items.length);
  const flat = grouped.flatMap((g) => g.items);

  const panel = showPanel && (
    <div
      role="listbox"
      className={variant === "desktop" ? "absolute right-0 top-[calc(100%+8px)] w-[min(92vw,560px)] rounded-2xl overflow-hidden" : "mt-2 rounded-xl overflow-hidden"}
      style={{ background: "#fff", border: "1px solid #e4ddd5", boxShadow: "0 24px 60px -24px rgba(7,29,43,.35)" }}
    >
      {hits.length === 0 ? (
        <p className="px-4 py-4 text-[14px]" style={{ color: "#536873" }}>{loading || result.q !== query ? "Recherche…" : `Aucun résultat pour « ${query} ». Essayez une marque, un numéro de modèle ou une ville.`}</p>
      ) : (
        <div className="max-h-[70vh] overflow-y-auto py-1">
          {grouped.map((g) => {
            const Icon = KIND_ICON[g.kind];
            return (
              <div key={g.kind}>
                <p className="px-4 pt-3 pb-1 text-[10.5px] font-bold uppercase tracking-[0.16em]" style={{ color: "#8a989e" }}>{KIND_LABEL[g.kind]}</p>
                {g.items.map((h) => {
                  const idx = flat.indexOf(h);
                  const isActive = idx === active;
                  return (
                    <Link
                      key={h.href}
                      href={h.href}
                      role="option"
                      aria-selected={isActive}
                      onClick={close}
                      onMouseEnter={() => setActive(idx)}
                      className="flex items-center gap-3 px-4 py-2.5 no-underline transition-colors"
                      style={{ background: isActive ? "#f7f5f0" : "transparent" }}
                    >
                      {h.kind === "modele" && h.imageUrl ? (
                        <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style={{ background: "#fff", border: "1px solid #ebe5dc" }}>
                          <img src={h.imageUrl} alt="" width={40} height={40} loading="lazy" style={{ objectFit: "contain", width: 34, height: 34 }} />
                        </span>
                      ) : (
                        <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#f7f5f0", color: "#e54b17" }}>
                          <Icon size={17} />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block text-[14px] font-semibold truncate" style={{ color: "#071d2b" }}>{h.title}</span>
                        {h.subtitle && <span className="block text-[12.5px] truncate" style={{ color: "#536873" }}>{h.subtitle}</span>}
                      </span>
                    </Link>
                  );
                })}
              </div>
            );
          })}
          <Link href={`/recherche?q=${encodeURIComponent(query)}`} onClick={close} className="block px-4 py-3 text-[13px] font-semibold no-underline" style={{ color: "#e54b17", borderTop: "1px solid #f0ebe4" }}>
            Tous les résultats pour « {query} »
          </Link>
        </div>
      )}
    </div>
  );

  const input = (
    <input
      ref={inputRef}
      type="search"
      value={q}
      onChange={(e) => setQ(e.target.value)}
      onKeyDown={onKey}
      placeholder="Modèle, marque, ville…"
      aria-label="Rechercher sur le site"
      autoComplete="off"
      className={variant === "mobile" ? "w-full bg-transparent text-[16px] outline-none" : "w-full bg-transparent text-[14px] outline-none"}
      style={{ color: "#071d2b" }}
    />
  );

  if (variant === "mobile") {
    return (
      <div ref={boxRef}>
        <div className="flex items-center gap-2 rounded-full px-4 py-2.5" style={{ border: "1px solid #dedcd5", background: "#fff" }}>
          <Search size={17} style={{ color: "#536873" }} />
          {input}
        </div>
        {panel}
      </div>
    );
  }

  return (
    <div ref={boxRef} className="relative flex items-center">
      {open ? (
        <div className="flex items-center gap-2 rounded-full pl-3.5 pr-2 py-1.5" style={{ border: "1px solid #dedcd5", background: "#fff", width: "min(48vw, 320px)" }}>
          <Search size={16} style={{ color: "#536873" }} />
          {input}
          <button type="button" onClick={close} aria-label="Fermer la recherche" className="p-1 rounded-full hover:bg-[#f7f5f0]" style={{ color: "#536873" }}>
            <X size={15} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Rechercher"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f7f5f0] transition-colors"
          style={{ color: "#0b1b24" }}
        >
          <Search size={19} />
        </button>
      )}
      {open && panel}
    </div>
  );
}
