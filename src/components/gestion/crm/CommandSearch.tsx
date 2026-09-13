"use client";

/* Recherche globale des clients : « / » ou ⌘K (Ctrl+K), icône sur le téléphone. Server Action dès 2 caractères,
   8 résultats au plus : nom, ville, étape, 4 derniers chiffres (jamais le numéro complet ni le courriel).
   Flèches pour choisir, Entrée pour ouvrir la fiche. */
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { LoaderCircle, Search } from "lucide-react";
import { searchClientsAction } from "@/app/gestion/(prive)/crm-actions";
import type { SearchResult } from "@/lib/gestion/crm/service";
import { StageChip } from "../kit/Chip";
import { Sheet } from "../kit/Sheet";

export const openSearch = () => window.dispatchEvent(new Event("gestion:search"));

function typing(t: EventTarget | null): boolean {
  const el = t as HTMLElement | null;
  return Boolean(el && (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName)));
}

export function CommandSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [results, setResults] = useState<{ q: string; list: SearchResult[] }>({ q: "", list: [] });
  const [sel, setSel] = useState(0);
  const [pending, start] = useTransition();
  const seq = useRef(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "/" && !typing(e.target) && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setOpen(true);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("gestion:search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("gestion:search", onOpen);
    };
  }, []);

  useEffect(() => {
    const term = q.trim();
    if (term.length < 2) return;
    const id = ++seq.current;
    const t = window.setTimeout(() => {
      start(async () => {
        const list = await searchClientsAction(term);
        if (id === seq.current) {
          setResults({ q: term, list });
          setSel(0);
        }
      });
    }, 160);
    return () => window.clearTimeout(t);
  }, [q]);

  const term = q.trim();
  const list = term.length >= 2 ? results.list : [];
  const go = (id: string) => {
    setOpen(false);
    setQ("");
    router.push(`/gestion/clients/${id}`);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen} title="Rechercher un client" description="Nom, ville, 4 derniers chiffres du téléphone, courriel ou numéro de soumission.">
      <div className="sh-cmd">
        <label className="sh-cmd__field">
          {pending ? <LoaderCircle size={18} className="sh-spin" aria-hidden /> : <Search size={18} aria-hidden />}
          <input
            className="sh-cmd__input"
            type="search"
            autoFocus
            autoComplete="off"
            enterKeyHint="go"
            placeholder="Ex. : Tremblay, Laval, 0142, S-2026-014"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            role="combobox"
            aria-expanded={list.length > 0}
            aria-controls="sh-cmd-list"
            aria-activedescendant={list[sel] ? `sh-cmd-${list[sel].id}` : undefined}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setSel((s) => Math.min(s + 1, list.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSel((s) => Math.max(s - 1, 0));
              } else if (e.key === "Enter" && list[sel]) {
                e.preventDefault();
                go(list[sel].id);
              }
            }}
          />
        </label>
        {list.length ? (
          <ul className="sh-cmd__list" id="sh-cmd-list" role="listbox" aria-label="Clients trouvés">
            {list.map((r, i) => (
              <li key={r.id} id={`sh-cmd-${r.id}`} role="option" aria-selected={i === sel}>
                <a
                  href={`/gestion/clients/${r.id}`}
                  className="sh-cmd__item"
                  data-selected={i === sel ? "true" : undefined}
                  onMouseEnter={() => setSel(i)}
                  onClick={(e) => {
                    e.preventDefault();
                    go(r.id);
                  }}
                >
                  <StageChip stage={r.stage} size="sm" />
                  <span style={{ minWidth: 0 }}>
                    <span className="sh-cmd__name">{r.name}</span>
                    <span className="sh-cmd__meta">{[r.city, r.stageLabel].filter(Boolean).join(" · ")}</span>
                  </span>
                  {r.last4 ? <span className="sh-cmd__meta">••{r.last4}</span> : null}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="sh-cmd__hint">{term.length < 2 ? "Tapez au moins deux caractères." : pending || results.q !== term ? "Recherche…" : "Aucun client ne correspond."}</p>
        )}
      </div>
    </Sheet>
  );
}
