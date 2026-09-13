"use client";

/* Recherche globale : « / » ou ⌘K (Ctrl+K), icône sur le téléphone.
   - Pages (refonte R1) : « paiements », « réglages textos », « rbq »… trouvées aussitôt dans la carte de la navigation
     du rôle (aucun appel au serveur).
   - Clients : Server Action dès 2 caractères, 8 résultats au plus : nom, ville, étape, 4 derniers chiffres (jamais le
     numéro complet ni le courriel).
   Flèches pour choisir, Entrée pour ouvrir. */
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { CornerDownLeft, LoaderCircle, Search } from "lucide-react";
import { searchClientsAction } from "@/app/gestion/(prive)/crm-actions";
import type { SearchResult } from "@/lib/gestion/crm/service";
import { searchPages, type PageHit } from "@/lib/gestion/nav/sections";
import { StageChip } from "../kit/Chip";
import { Sheet } from "../kit/Sheet";

export const openSearch = () => window.dispatchEvent(new Event("gestion:search"));

function typing(t: EventTarget | null): boolean {
  const el = t as HTMLElement | null;
  return Boolean(el && (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName)));
}

type Entry = { kind: "page"; id: string; href: string; page: PageHit } | { kind: "client"; id: string; href: string; client: SearchResult };

export function CommandSearch({ pages = [] }: { pages?: PageHit[] } = {}) {
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
  const pageHits = term.length >= 2 ? searchPages(pages, term, 5) : [];
  const clients = term.length >= 2 ? results.list : [];
  const entries: Entry[] = [
    ...pageHits.map((p) => ({ kind: "page" as const, id: `p-${p.href.replace(/[^a-z0-9]+/gi, "-")}`, href: p.href, page: p })),
    ...clients.map((c) => ({ kind: "client" as const, id: `c-${c.id}`, href: `/gestion/clients/${c.id}`, client: c })),
  ];
  const cur = Math.min(sel, Math.max(entries.length - 1, 0));
  const go = (href: string) => {
    setOpen(false);
    setQ("");
    router.push(href);
  };
  const row = (e: Entry, i: number) => (
    <li key={e.id} id={`sh-cmd-${e.id}`} role="option" aria-selected={i === cur}>
      <a
        href={e.href}
        className="sh-cmd__item"
        data-selected={i === cur ? "true" : undefined}
        onMouseEnter={() => setSel(i)}
        onClick={(ev) => {
          ev.preventDefault();
          go(e.href);
        }}
      >
        {e.kind === "page" ? (
          <>
            <span className="sh-cmd__page" aria-hidden>
              <CornerDownLeft size={15} />
            </span>
            <span style={{ minWidth: 0 }}>
              <span className="sh-cmd__name">{e.page.label}</span>
              <span className="sh-cmd__meta">{e.page.section}</span>
            </span>
          </>
        ) : (
          <>
            <StageChip stage={e.client.stage} size="sm" />
            <span style={{ minWidth: 0 }}>
              <span className="sh-cmd__name">{e.client.name}</span>
              <span className="sh-cmd__meta">{[e.client.city, e.client.stageLabel].filter(Boolean).join(" · ")}</span>
            </span>
            {e.client.last4 ? <span className="sh-cmd__meta">••{e.client.last4}</span> : <span />}
          </>
        )}
      </a>
    </li>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen} title="Rechercher" description="Un client (nom, ville, 4 derniers chiffres, courriel, numéro de soumission) ou une page (paiements, réglages…).">
      <div className="sh-cmd">
        <label className="sh-cmd__field">
          {pending ? <LoaderCircle size={18} className="sh-spin" aria-hidden /> : <Search size={18} aria-hidden />}
          <input
            className="sh-cmd__input"
            type="search"
            autoFocus
            autoComplete="off"
            enterKeyHint="go"
            placeholder="Ex. : Tremblay, Laval, 0142, paiements"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setSel(0);
            }}
            role="combobox"
            aria-expanded={entries.length > 0}
            aria-controls="sh-cmd-list"
            aria-activedescendant={entries[cur] ? `sh-cmd-${entries[cur].id}` : undefined}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setSel(Math.min(cur + 1, entries.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSel(Math.max(cur - 1, 0));
              } else if (e.key === "Enter" && entries[cur]) {
                e.preventDefault();
                go(entries[cur].href);
              }
            }}
          />
        </label>
        {entries.length ? (
          <ul className="sh-cmd__list" id="sh-cmd-list" role="listbox" aria-label="Pages et clients trouvés">
            {pageHits.length ? (
              <li role="presentation" className="sh-cmd__group">
                Pages
              </li>
            ) : null}
            {entries.map((e, i) => (e.kind === "page" ? row(e, i) : null))}
            {clients.length ? (
              <li role="presentation" className="sh-cmd__group">
                Clients
              </li>
            ) : null}
            {entries.map((e, i) => (e.kind === "client" ? row(e, i) : null))}
          </ul>
        ) : null}
        {!clients.length ? <p className="sh-cmd__hint">{term.length < 2 ? "Tapez au moins deux caractères." : pending || results.q !== term ? "Recherche des clients…" : pageHits.length ? "Aucun client ne correspond." : "Aucun client ni page ne correspond."}</p> : null}
      </div>
    </Sheet>
  );
}
