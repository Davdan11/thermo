"use client";

/* ==================================================================
   « Trouver un client » : recherche instantanée dans les clients du
   CRM (nom, téléphone, courriel, ville), dès 2 caractères, 10
   résultats au plus : nom, ville, étape, 4 derniers chiffres (jamais
   le courriel ni le numéro complet). Un clic remplit prénom, nom,
   courriel, téléphone et adresse, et relie la soumission à la fiche.
   « Nouveau client » vide le client et retire le lien.
   Clavier : flèches pour choisir, Entrée pour prendre, Échap pour
   vider.
   ================================================================== */

import { useEffect, useId, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { LoaderCircle, Search, UserPlus, UserRound } from "lucide-react";
import { pickClientAction, searchClientsAction } from "@/app/gestion/soumissions/actions";
import type { QuoteClientHit, QuoteClientPrefill } from "@/lib/soumissions/clients";

export function ClientFinder({ clientId, clientName, onPick, onNew }: { clientId: string | null; clientName: string; onPick: (c: QuoteClientPrefill) => void; onNew: () => void }) {
  const [q, setQ] = useState("");
  const [res, setRes] = useState<{ q: string; list: QuoteClientHit[] }>({ q: "", list: [] });
  const [sel, setSel] = useState(0);
  const [pending, start] = useTransition();
  const [picking, setPicking] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const seq = useRef(0);
  const listId = useId();

  useEffect(() => {
    const term = q.trim();
    if (term.length < 2) return;
    const id = ++seq.current;
    const t = window.setTimeout(() => {
      start(async () => {
        const list = await searchClientsAction(term);
        if (id === seq.current) {
          setRes({ q: term, list });
          setSel(0);
        }
      });
    }, 220);
    return () => window.clearTimeout(t);
  }, [q]);

  const term = q.trim();
  const list = term.length >= 2 && res.q === term ? res.list : [];
  const searched = term.length >= 2 && res.q === term;

  const pick = async (h: QuoteClientHit) => {
    setPicking(h.id);
    setErr(null);
    const r = await pickClientAction(h.id);
    setPicking(null);
    if (r.ok) {
      onPick(r.client);
      setQ("");
      setRes({ q: "", list: [] });
    } else setErr(r.error);
  };

  return (
    <div className="sq-finder">
      <div className="sq-finder__head">
        <div className="sq-finder__who">
          {clientId ? (
            <>
              <span className="sq-finder__badge"><UserRound size={14} aria-hidden /> Relié à la fiche</span>
              <strong>{clientName || "Client"}</strong>
              <Link href={`/gestion/clients/${clientId}`} className="sq-finder__link">Voir la fiche</Link>
            </>
          ) : (
            <strong>Trouver un client existant</strong>
          )}
        </div>
        <button type="button" className="g-btn g-btn--quiet" onClick={() => { setQ(""); setErr(null); onNew(); }}>
          <UserPlus size={15} aria-hidden /> Nouveau client
        </button>
      </div>
      <div className="sq-finder__box">
        <Search size={16} aria-hidden className="sq-finder__icon" />
        <input
          className="g-input"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setSel((s) => Math.min(s + 1, Math.max(0, list.length - 1)));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setSel((s) => Math.max(0, s - 1));
            } else if (e.key === "Enter" && list[sel]) {
              e.preventDefault();
              void pick(list[sel]);
            } else if (e.key === "Escape") setQ("");
          }}
          placeholder="Nom, téléphone, courriel ou ville"
          aria-label="Chercher un client : nom, téléphone, courriel ou ville"
          aria-controls={listId}
          aria-autocomplete="list"
          autoComplete="off"
        />
        {pending || picking ? <LoaderCircle size={16} aria-hidden className="sq-finder__spin" /> : null}
      </div>
      {list.length ? (
        <ul className="sq-finder__list" id={listId} role="listbox" aria-label="Clients trouvés">
          {list.map((h, i) => (
            <li key={h.id} role="option" aria-selected={i === sel} style={{ ["--i" as string]: i }}>
              <button type="button" onClick={() => void pick(h)} onMouseEnter={() => setSel(i)} disabled={Boolean(picking)}>
                <span className="sq-finder__name">{h.name}</span>
                <span className="sq-finder__meta">{[h.city, h.last4 ? `••• ${h.last4}` : "", h.stage].filter(Boolean).join(" · ")}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : searched && !pending ? (
        <p className="g-hint sq-finder__none">Aucun client trouvé : saisissez un nouveau client ci-dessous.</p>
      ) : null}
      {err ? <p className="g-error">{err}</p> : null}
    </div>
  );
}
