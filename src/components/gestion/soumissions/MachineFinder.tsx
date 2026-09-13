"use client";

/* ==================================================================
   Chantier D — « Trouver la machine » : recherche instantanée dans
   les modèles du catalogue du site et leurs jumelages AHRI officiels.
   Marque, série, numéro de modèle, numéro AHRI, type, capacité
   (« 12000 », « 12k »), avec des filtres en un clic et des badges
   (aide LogisVert officielle, climat froid). Un clic sur un résultat
   remplit la machine, le jumelage, le plan et le forfait.
   ================================================================== */

import { useEffect, useId, useRef, useState } from "react";
import { LoaderCircle, Search, Snowflake } from "lucide-react";
import { CAPACITY_BANDS, KIND_LABELS, MACHINE_KINDS, type CapacityBand, type MachineHit, type MachineKind } from "@/lib/soumissions/machine-kinds";
import { money } from "@/lib/soumissions/money";
import "./photos-client.css";

export function MachineFinder({ onPick, busy }: { onPick: (hit: MachineHit) => void; busy?: boolean }) {
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<MachineKind | null>(null);
  const [cap, setCap] = useState<CapacityBand | null>(null);
  const [lv, setLv] = useState(false);
  const [cc, setCc] = useState(false);
  const [res, setRes] = useState<{ key: string; hits: MachineHit[]; total: number; catalog: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const key = JSON.stringify([q.trim(), kind, cap, lv, cc]);
  const active = q.trim().length >= 2 || Boolean(kind || cap || lv || cc);

  useEffect(() => {
    if (!active) return;
    const ctrl = new AbortController();
    const t = window.setTimeout(async () => {
      setLoading(true);
      const sp = new URLSearchParams({ q: q.trim() });
      if (kind) sp.set("type", kind);
      if (cap) sp.set("cap", cap);
      if (lv) sp.set("lv", "1");
      if (cc) sp.set("cc", "1");
      try {
        const r = await fetch(`/gestion/api/soumissions/machines?${sp.toString()}`, { signal: ctrl.signal, cache: "no-store" });
        const j = (await r.json().catch(() => null)) as { ok?: boolean; data?: { hits: MachineHit[]; total: number; catalog: number } } | null;
        if (j?.ok && j.data) setRes({ key, ...j.data });
      } catch {
        /* recherche annulée */
      } finally {
        setLoading(false);
      }
    }, 200);
    return () => {
      window.clearTimeout(t);
      ctrl.abort();
    };
  }, [key, active, q, kind, cap, lv, cc]);

  const hits = active && res?.key === key ? res.hits : [];
  const chip = (on: boolean, label: React.ReactNode, onClick: () => void, k?: string) => (
    <button key={k} type="button" className="sq-chip" aria-pressed={on} onClick={onClick}>
      {label}
    </button>
  );

  return (
    <div className="sq-d-finder">
      <div style={{ position: "relative" }}>
        <Search size={17} aria-hidden style={{ position: "absolute", left: 13, top: 15, color: "var(--g-faint)" }} />
        <input
          ref={inputRef}
          className="g-input"
          style={{ paddingLeft: 38 }}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && hits[0]) {
              e.preventDefault();
              onPick(hits[0]);
            }
          }}
          placeholder="Marque, série, modèle, n° AHRI ou capacité (ex. Daikin Aurora 12000)"
          aria-label="Trouver la machine dans le catalogue"
          aria-controls={listId}
          autoComplete="off"
        />
      </div>
      <div className="sq-d-finder__filters">
        <div className="sq-chips" role="group" aria-label="Type">
          {MACHINE_KINDS.map((k) => chip(kind === k, KIND_LABELS[k], () => setKind(kind === k ? null : k), k))}
        </div>
        <div className="sq-chips" role="group" aria-label="Capacité">
          {CAPACITY_BANDS.map((b) => chip(cap === b.id, `${b.label} BTU`, () => setCap(cap === b.id ? null : b.id), b.id))}
          {chip(lv, "Aide LogisVert", () => setLv(!lv), "lv")}
          {chip(cc, <><Snowflake size={14} aria-hidden style={{ marginRight: 5 }} />Climat froid</>, () => setCc(!cc), "cc")}
        </div>
      </div>
      {active && res?.key === key ? (
        <p className="sq-d-finder__count" role="status">
          {res.total ? `${res.total.toLocaleString("fr-CA")} résultat${res.total > 1 ? "s" : ""} parmi ${res.catalog.toLocaleString("fr-CA")} modèles du catalogue${res.total > hits.length ? ` (les ${hits.length} premiers)` : ""}.` : "Aucun modèle trouvé : essayez un autre mot, ou retirez un filtre."}
          {loading ? <LoaderCircle size={13} className="sq-finder__spin" aria-hidden style={{ marginLeft: 6 }} /> : null}
        </p>
      ) : !active ? (
        <p className="sq-d-finder__count">Tapez au moins deux caractères, ou choisissez un filtre.</p>
      ) : null}
      {hits.length ? (
        <ul className="sq-d-hits" id={listId} aria-label="Machines trouvées">
          {hits.map((h, i) => (
            <li key={`${h.slug}-${h.ahri ?? ""}`}>
              <button type="button" className="sq-d-hit" style={{ ["--i" as string]: Math.min(i, 10) }} disabled={busy} onClick={() => onPick(h)}>
                {h.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="sq-d-hit__img" src={h.imageUrl} alt="" loading="lazy" />
                ) : (
                  <span className="sq-d-hit__img" aria-hidden />
                )}
                <span style={{ minWidth: 0 }}>
                  <span className="sq-d-hit__name">
                    {h.brand} {h.name}
                  </span>
                  <span className="sq-d-hit__meta">
                    {[h.series && h.series !== h.name ? h.series : null, `Unité extérieure ${h.outdoorModel}`, h.ahri ? `AHRI ${h.ahri}` : null].filter(Boolean).join(" · ")}
                  </span>
                  <span className="sq-d-badges">
                    <span className="sq-d-badge">{h.kindLabel}</span>
                    {h.capacityBtu ? <span className="sq-d-badge">{h.capacityBtu.toLocaleString("fr-CA")} BTU/h</span> : null}
                    {h.maxLogisVertCents > 0 ? <span className="sq-d-badge sq-d-badge--lv">Aide LogisVert officielle jusqu’à {money(h.maxLogisVertCents)}</span> : <span className="sq-d-badge">Hors liste LogisVert</span>}
                    {h.coldClimate ? <span className="sq-d-badge sq-d-badge--cc">Climat froid</span> : null}
                    {h.pairings > 1 ? <span className="sq-d-badge">{h.pairings} jumelages</span> : null}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
