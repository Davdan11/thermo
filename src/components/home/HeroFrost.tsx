"use client";

import { useEffect, useRef } from "react";

/* ==================================================================
   Givre du héros de l'accueil : des plumes de glace (tiges courbes,
   barbes serrées à 60° qui raccourcissent vers la pointe, comme sur une
   vitre en janvier) gagnent les bords de la photo, d'autant plus loin
   qu'il fait froid (level de 0 à 1). Une croûte de fines aiguilles
   borde le cadre.
   Le dessin est calculé une fois, avec un hasard à graine fixe, puis tracé
   au fil de la croissance : chaque image ajoute seulement les nouveaux
   segments. Rien ne tourne quand le givre ne bouge pas. Côté gauche plus
   discret (le texte y est posé) ; haut (sous l'en-tête) et bas (raccord
   avec la section suivante) estompés en CSS.
   ================================================================== */

type Seg = { x1: number; y1: number; x2: number; y2: number; d: number; b: number };

/* Largeur et opacité selon la profondeur (tige, barbe, barbule), puis selon l'éloignement du bord. */
const WIDTH = [0.75, 0.5, 0.4];
const ALPHA = [0.5, 0.36, 0.26];
const FADE = [1, 0.72, 0.46];
/** Portée maximale (level = 1), en multiple de la portée de base. */
const SPAN = 1.35;

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function build(w: number, h: number, reach: number): Seg[] {
  const rnd = rng(20260912);
  const segs: Seg[] = [];
  const band = (d: number) => (d < reach * 0.35 ? 0 : d < reach * 0.8 ? 1 : 2);
  const push = (x1: number, y1: number, x2: number, y2: number, d: number, depth: number) => segs.push({ x1, y1, x2, y2, d, b: depth * 3 + band(d) });

  // Barbe : trait court et droit ; les barbes portent de minuscules barbules à 60°.
  const barb = (x0: number, y0: number, a: number, len: number, d0: number, depth: number) => {
    let x = x0;
    let y = y0;
    let d = d0;
    let side = rnd() < 0.5 ? 1 : -1;
    for (let s = 0; s < len; s += 2) {
      const nx = x + Math.cos(a) * 2;
      const ny = y + Math.sin(a) * 2;
      push(x, y, nx, ny, d, depth);
      x = nx;
      y = ny;
      d += 2;
      if (depth === 1 && s > 2 && rnd() < 0.5) {
        const bl = (len - s) * (0.35 + rnd() * 0.25);
        if (bl > 2) barb(x, y, a + side * (Math.PI / 3), bl, d, 2);
        side = -side;
      }
    }
  };
  // Tige : légère courbe, barbes alternées qui raccourcissent vers la pointe, parfois une tige fille.
  const stem = (x0: number, y0: number, a0: number, len: number, d0: number, gen: number) => {
    let x = x0;
    let y = y0;
    let a = a0;
    let d = d0;
    const curve = (rnd() - 0.5) * 0.035;
    let side = rnd() < 0.5 ? 1 : -1;
    for (let s = 0; s < len; s += 3) {
      a += curve + (rnd() - 0.5) * 0.12;
      const nx = x + Math.cos(a) * 3;
      const ny = y + Math.sin(a) * 3;
      push(x, y, nx, ny, d, 0);
      x = nx;
      y = ny;
      d += 3;
      const rest = len - s;
      if (rnd() < 0.85) {
        const bl = Math.min(15, rest * 0.3) * (0.5 + rnd() * 0.6);
        if (bl > 2) barb(x, y, a + side * (Math.PI / 3) * (0.92 + rnd() * 0.16), bl, d, 1);
        side = -side;
      }
      if (gen < 2 && rest > 24 && rnd() < 0.04) stem(x, y, a + (rnd() < 0.5 ? 1 : -1) * (Math.PI / 3), rest * (0.4 + rnd() * 0.3), d, gen + 1);
    }
  };

  // k(u) : part des départs gardés le long du bord ; s : longueur relative. Sur ordinateur, la colonne de
  // texte (environ 45 % de la largeur, à gauche) reste presque nette en haut et en bas ; bord gauche discret.
  const text = w >= 1024 ? w * 0.45 : 0;
  const edges: { n: number; k: (u: number) => number; s: number; at: (u: number) => [number, number]; a: number }[] = [
    { n: w, k: (u) => (u < text ? 0.45 : 1), s: 1, at: (u) => [u, 0], a: Math.PI / 2 },
    { n: h, k: () => 1, s: 1, at: (u) => [w, u], a: Math.PI },
    { n: w, k: (u) => (u < text ? 0.25 : 0.75), s: 0.8, at: (u) => [u, h], a: -Math.PI / 2 },
    { n: h, k: () => 0.3, s: 0.45, at: (u) => [0, u], a: 0 },
  ];
  for (const e of edges) {
    for (let u = rnd() * 12; u < e.n; u += 11 + rnd() * 20) {
      if (rnd() > e.k(u)) continue;
      const [x, y] = e.at(u);
      // Les coins gèlent plus loin que le milieu des bords.
      const corner = Math.max(0, 1 - Math.min(u, e.n - u) / Math.min(e.n / 2, reach * 1.6));
      const len = reach * (0.12 + rnd() * 0.36 + corner * 0.5) * e.s;
      stem(x, y, e.a + (rnd() - 0.5) * 1.0, len, rnd() * 6, 0);
    }
    // Croûte : aiguilles fines et serrées le long du bord.
    for (let u = 0; u < e.n; u += 2.5 + rnd() * 3) {
      if (rnd() > e.k(u)) continue;
      const [ex, ey] = e.at(u);
      const off = rnd() * 6;
      const x = ex + Math.cos(e.a) * off;
      const y = ey + Math.sin(e.a) * off;
      const l = 2 + rnd() * 9 * e.s;
      const a = e.a + (rnd() - 0.5) * 2.2;
      push(x, y, x + Math.cos(a) * l, y + Math.sin(a) * l, rnd() * 10, 2);
    }
  }
  return segs.sort((p, q) => p.d - q.d);
}

export function HeroFrost({ level, reduce, className }: { level: number; reduce: boolean; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const api = useRef<((l: number, instant: boolean) => void) | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let w = 0;
    let h = 0;
    let reach = 0;
    let segs: Seg[] | null = null;
    let idx = 0;
    let drawn = 0;
    let current = 0;
    let raf = 0;
    let rz = 0;
    let wipe = 0;
    let anim: { from: number; to: number; t0: number; dur: number } | null = null;

    const size = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      reach = 0.26 * Math.sqrt(w * h);
      segs = null; // recalculé à la première demande seulement
      idx = 0;
      drawn = 0;
    };
    const clear = () => {
      ctx.clearRect(0, 0, w, h);
      idx = 0;
      drawn = 0;
    };
    const drawTo = (dMax: number) => {
      if (!segs && w > 0) segs = build(w, h, reach);
      if (!segs) return;
      const paths: (Path2D | undefined)[] = [];
      let i = idx;
      for (; i < segs.length && segs[i].d <= dMax; i++) {
        const g = segs[i];
        const p = paths[g.b] ?? (paths[g.b] = new Path2D());
        p.moveTo(g.x1, g.y1);
        p.lineTo(g.x2, g.y2);
      }
      idx = i;
      drawn = dMax;
      ctx.lineCap = "round";
      paths.forEach((p, b) => {
        if (!p) return;
        const depth = Math.floor(b / 3);
        ctx.lineWidth = WIDTH[depth];
        ctx.strokeStyle = `rgba(226,238,246,${(ALPHA[depth] * FADE[b % 3]).toFixed(3)})`;
        ctx.stroke(p);
      });
    };
    const tick = (now: number) => {
      if (!anim) return;
      const p = Math.min(1, (now - anim.t0) / anim.dur);
      const e = 1 - Math.pow(1 - p, 3);
      drawTo(anim.from + (anim.to - anim.from) * e);
      if (p < 1) raf = requestAnimationFrame(tick);
      else anim = null;
    };
    const setTarget = (l: number, instant: boolean) => {
      current = l;
      cancelAnimationFrame(raf);
      window.clearTimeout(wipe);
      anim = null;
      if (l <= 0) {
        // Le calque s'efface (transition CSS), puis on repart d'une vitre propre.
        wipe = window.setTimeout(clear, 900);
        return;
      }
      const to = l * SPAN * reach;
      if (to < drawn) clear();
      if (instant) {
        drawTo(to);
        return;
      }
      anim = { from: drawn, to, t0: performance.now(), dur: 1500 + (1500 * (to - drawn)) / (SPAN * reach) };
      raf = requestAnimationFrame(tick);
    };
    api.current = setTarget;

    size();
    // Dessin préparé pendant un temps mort, après l'arrivée : la première saisie ne bloque pas la page.
    const pre = window.setTimeout(() => {
      const run = () => {
        if (!segs && w > 0) segs = build(w, h, reach);
      };
      if ("requestIdleCallback" in window) window.requestIdleCallback(run, { timeout: 3000 });
      else run();
    }, 4000);
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(rz);
      rz = requestAnimationFrame(() => {
        const r = canvas.getBoundingClientRect();
        if (Math.abs(r.width - w) < 1 && Math.abs(r.height - h) < 1) return;
        cancelAnimationFrame(raf);
        anim = null;
        size();
        if (current > 0) drawTo(current * SPAN * reach);
      });
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(rz);
      window.clearTimeout(wipe);
      window.clearTimeout(pre);
      ro.disconnect();
      api.current = null;
    };
  }, []);

  useEffect(() => {
    api.current?.(level, reduce);
  }, [level, reduce]);

  return (
    <div aria-hidden="true" className={className}>
      <div className="hp2-haze" style={{ opacity: level > 0 ? 0.35 + level * 0.65 : 0 }} />
      <canvas ref={ref} className="hp2-frost" style={{ opacity: level > 0 ? 1 : 0 }} />
    </div>
  );
}
