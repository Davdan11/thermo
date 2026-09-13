"use client";

/* Aides des graphiques : largeur mesurée (dessin en pixels réels : bouts arrondis de 4 px, traits de 2 px non déformés)
   et info-bulle au survol ou au focus (clavier). Largeur par défaut identique au serveur et au premier rendu : aucun
   écart d'hydratation. */
import { useCallback, useEffect, useRef, useState } from "react";

export function useWidth<T extends HTMLElement>(initial: number) {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(initial);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setWidth(Math.max(40, Math.round(el.getBoundingClientRect().width)));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return { ref, width };
}

export interface Tip {
  x: number;
  y: number;
  title: string;
  lines: string[];
}

export function useChartTip(container: React.RefObject<HTMLElement | null>) {
  const [tip, setTip] = useState<Tip | null>(null);
  const show = useCallback(
    (target: Element, title: string, lines: string[]) => {
      const box = container.current?.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      if (!box) return;
      const x = Math.min(Math.max(t.left + t.width / 2 - box.left, 70), box.width - 70);
      setTip({ x, y: t.top - box.top, title, lines });
    },
    [container],
  );
  const hide = useCallback(() => setTip(null), []);
  const node = tip ? (
    <div className="ch-tip" style={{ left: tip.x, top: tip.y }} role="status" aria-live="polite">
      <strong>{tip.title}</strong>
      {tip.lines.map((l) => (
        <span key={l}>{l}</span>
      ))}
    </div>
  ) : null;
  return { show, hide, node };
}

/** Sommet d'axe « rond » : 4, pair sous 10, sinon 1-2-3-4-5-6-8 × 10ⁿ. */
export function niceMax(v: number): number {
  if (v <= 4) return 4;
  if (v <= 10) return Math.ceil(v / 2) * 2;
  const pow = 10 ** Math.floor(Math.log10(v));
  for (const m of [1, 2, 3, 4, 5, 6, 8, 10]) if (m * pow >= v) return m * pow;
  return 10 * pow;
}

/** Barre verticale : bout arrondi de 4 px en haut, carrée sur la ligne de base. */
export function columnPath(x: number, w: number, top: number, base: number, r = 4): string {
  const h = base - top;
  if (h <= 0.5 || w <= 0) return "";
  const rr = Math.min(r, w / 2, h);
  return `M${x},${base}V${top + rr}Q${x},${top} ${x + rr},${top}H${x + w - rr}Q${x + w},${top} ${x + w},${top + rr}V${base}Z`;
}
