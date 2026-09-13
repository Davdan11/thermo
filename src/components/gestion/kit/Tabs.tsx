"use client";

/* ==================================================================
   Refonte R1 — onglets d'une fiche (client, partenaire). Tous les
   panneaux sont rendus au serveur (mêmes cartes, mêmes rôles qu'avant
   la refonte) ; l'onglet visible change sans rechargement.
   - ?onglet=… : onglet ouvert au chargement (lien direct, retour d'une
     action) ; l'adresse suit l'onglet choisi (replaceState).
   - #ancre : un lien vers une carte (#identite, #conformite…) ouvre
     l'onglet qui la contient, puis y défile.
   - Clavier : flèches gauche et droite, Début, Fin (motif ARIA tabs).
   - Animation discrète : trait qui glisse, panneau qui apparaît ;
     rien si l'utilisateur réduit les animations.
   ================================================================== */

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

export interface TabDef {
  id: string;
  label: string;
  /** Petit nombre à côté du libellé (soumissions, jobs, non lus). */
  count?: number | string;
  /** Pastille orange (quelque chose attend). */
  hot?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function Tabs({ tabs, panels, initial, label, param = "onglet" }: { tabs: TabDef[]; panels: Record<string, React.ReactNode>; initial?: string; label: string; param?: string }) {
  const reduced = useReduced();
  const uid = useId();
  const first = tabs[0]?.id ?? "";
  const [cur, setCur] = useState(initial && tabs.some((t) => t.id === initial) ? initial : first);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const select = useCallback(
    (id: string, focus = false) => {
      setCur(id);
      if (focus) refs.current[id]?.focus();
      try {
        const u = new URL(window.location.href);
        if (id === first) u.searchParams.delete(param);
        else u.searchParams.set(param, id);
        u.hash = "";
        window.history.replaceState(window.history.state, "", u);
      } catch {
        /* adresse inchangée : sans conséquence */
      }
    },
    [first, param],
  );

  // #ancre → onglet qui contient la carte, puis défilement jusqu'à elle.
  useEffect(() => {
    const go = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      const panel = el?.closest<HTMLElement>("[data-tab-panel]")?.dataset.tabPanel;
      if (!el || !panel) return;
      setCur(panel);
      requestAnimationFrame(() => el.scrollIntoView({ block: "start", behavior: reduced ? "auto" : "smooth" }));
    };
    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, [reduced]);

  const onKey = (e: React.KeyboardEvent) => {
    const i = tabs.findIndex((t) => t.id === cur);
    const to = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : null;
    if (to === null) return;
    e.preventDefault();
    select(tabs[(to + tabs.length) % tabs.length].id, true);
  };

  return (
    <div className="kt">
      <div className="kt-list" role="tablist" aria-label={label} onKeyDown={onKey}>
        {tabs.map((t) => {
          const on = t.id === cur;
          return (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[t.id] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-t-${t.id}`}
              aria-selected={on}
              aria-controls={`${uid}-p-${t.id}`}
              tabIndex={on ? 0 : -1}
              className="kt-tab"
              onClick={() => select(t.id)}
            >
              {on ? reduced ? <span className="kt-ind" aria-hidden /> : <motion.span layoutId={`${uid}-ind`} className="kt-ind" aria-hidden transition={{ duration: 0.36, ease: EASE }} /> : null}
              <span className="kt-tab__label">{t.label}</span>
              {t.count !== undefined && t.count !== 0 && t.count !== "" ? <b className={t.hot ? "is-hot" : undefined}>{t.count}</b> : null}
            </button>
          );
        })}
      </div>
      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" id={`${uid}-p-${t.id}`} aria-labelledby={`${uid}-t-${t.id}`} data-tab-panel={t.id} hidden={t.id !== cur} className="kt-panel" tabIndex={-1}>
          {panels[t.id]}
        </div>
      ))}
    </div>
  );
}
