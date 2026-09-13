"use client";

/* Raccourcis clavier de l'agenda : ← → période précédente ou suivante, T aujourd'hui, J S M vue jour, semaine, mois.
   Dans la grille du mois, les flèches passent d'un jour à l'autre (un seul jour dans l'ordre de tabulation), Entrée
   ouvre la journée. Ignorés dans un champ de saisie ou avec une touche de modification. */
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MOVES: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };

export function AgendaKeys({ prev, next, today, jour, semaine, mois }: { prev: string; next: string; today: string; jour: string; semaine: string; mois: string }) {
  const router = useRouter();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const el = e.target instanceof HTMLElement ? e.target : null;
      if (el?.closest("input, select, textarea, [contenteditable='true'], [role='dialog']")) return;
      const cell = el?.closest<HTMLElement>("[data-ag-cell]");
      if (cell && (e.key in MOVES || e.key === "Home" || e.key === "End")) {
        const cells = [...document.querySelectorAll<HTMLElement>("[data-ag-cell]")];
        const i = cells.indexOf(cell);
        const j = e.key === "Home" ? i - (i % 7) : e.key === "End" ? i - (i % 7) + 6 : i + MOVES[e.key];
        const target = cells[Math.min(cells.length - 1, Math.max(0, j))];
        if (target) {
          e.preventDefault();
          cell.tabIndex = -1;
          target.tabIndex = 0;
          target.focus();
        }
        return;
      }
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const go = k === "ArrowLeft" ? prev : k === "ArrowRight" ? next : k === "t" ? today : k === "j" ? jour : k === "s" ? semaine : k === "m" ? mois : null;
      if (!go) return;
      e.preventDefault();
      router.push(go);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, prev, next, today, jour, semaine, mois]);
  return null;
}
