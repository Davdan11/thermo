"use client";

import { useEffect, useRef } from "react";

/* ==================================================================
   Neige du héros de l'accueil, en trois profondeurs.
   Loin : poussière fine et lente ; milieu : flocons nets ; près : quelques
   gros flocons flous qui passent devant l'objectif. Chaque plan réagit
   différemment au défilement et au pointeur (parallaxe). La neige s'installe
   en quelques secondes à l'arrivée. Flocons dessinés à partir de trois
   petites images préparées une fois (pas de flou calculé à chaque image).
   Pause hors écran et onglet caché ; « réduire les animations » : une
   image fixe de neige légère.
   Snowfall.tsx reste inchangé pour les autres pages qui l'utilisent.
   ================================================================== */

type Layer = {
  /** Surface (px²) par flocon, puis plafond. */
  per: number;
  max: number;
  r: [number, number];
  vy: [number, number];
  sway: number;
  a: [number, number];
  /** 0 = flocon net, 1 = tache floue (bokeh). */
  soft: number;
  scroll: number;
  pointer: number;
  wind: number;
};

const LAYERS: Layer[] = [
  { per: 5600, max: 230, r: [0.35, 0.85], vy: [9, 17], sway: 3, a: [0.22, 0.5], soft: 0.3, scroll: 0.04, pointer: 3, wind: 0.45 },
  { per: 15000, max: 90, r: [0.9, 1.7], vy: [24, 38], sway: 7, a: [0.4, 0.72], soft: 0.45, scroll: 0.12, pointer: 8, wind: 0.8 },
  { per: 95000, max: 14, r: [2.8, 5.2], vy: [58, 84], sway: 14, a: [0.12, 0.26], soft: 1, scroll: 0.3, pointer: 20, wind: 1.2 },
];

type Flake = { x: number; y: number; r: number; vy: number; ph: number; a: number };

export function HeroSnow({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    let w = 0;
    let h = 0;
    let layers: Flake[][] = [];
    let raf = 0;
    let running = false;
    let inView = true;
    let last = 0;
    const born = performance.now();
    let px = 0;
    let tx = 0;

    const between = (r: [number, number]) => r[0] + Math.random() * (r[1] - r[0]);
    const make = (L: Layer): Flake => ({
      x: Math.random() * (w + 40) - 20,
      y: Math.random() * (h + 40) - 20,
      r: between(L.r),
      vy: between(L.vy),
      ph: Math.random() * Math.PI * 2,
      a: between(L.a),
    });
    const sprite = (soft: number) => {
      const s = document.createElement("canvas");
      s.width = s.height = 48;
      const g = s.getContext("2d");
      if (g) {
        const gr = g.createRadialGradient(24, 24, 0, 24, 24, 24);
        gr.addColorStop(0, "rgba(246,242,236,1)");
        gr.addColorStop(Math.max(0.08, 0.5 - soft * 0.42), "rgba(246,242,236,0.85)");
        gr.addColorStop(1, "rgba(246,242,236,0)");
        g.fillStyle = gr;
        g.fillRect(0, 0, 48, 48);
      }
      return s;
    };
    const sprites = LAYERS.map((L) => sprite(L.soft));

    const draw = (dt: number, t: number) => {
      ctx.clearRect(0, 0, w, h);
      // La neige s'installe : 0 → 1 en trois secondes (lissé).
      const k = reduce ? 0.6 : Math.min(1, Math.max(0, (t - born - 300) / 3000));
      const ramp = k * k * (3 - 2 * k);
      if (ramp <= 0) return;
      const gust = Math.sin(t / 6100) * 9 + Math.sin(t / 2300) * 3 + 7;
      px += (tx - px) * Math.min(1, dt * 2);
      const sy = window.scrollY;
      const W = w + 40;
      const H = h + 40;
      LAYERS.forEach((L, li) => {
        if (reduce && li === 2) return;
        const sp = sprites[li];
        const ox = px * L.pointer;
        const oy = -sy * L.scroll;
        for (const f of layers[li] ?? []) {
          if (dt > 0) {
            f.ph += dt * 0.9;
            f.y += f.vy * dt;
            f.x += (gust * L.wind + Math.sin(f.ph) * L.sway * 0.5) * dt;
            if (f.y > h + 20) {
              f.y -= H;
              f.x = Math.random() * W - 20;
            }
            if (f.x > w + 20) f.x -= W;
            else if (f.x < -20) f.x += W;
          }
          const y = ((((f.y + oy + 20) % H) + H) % H) - 20;
          const x = ((((f.x + ox + 20) % W) + W) % W) - 20;
          const R = f.r * 2.2;
          ctx.globalAlpha = f.a * ramp;
          ctx.drawImage(sp, x - R, y - R, R * 2, R * 2);
        }
      });
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const small = w < 768 ? 0.8 : 1;
      layers = LAYERS.map((L) => Array.from({ length: Math.min(L.max, Math.round(((w * h) / L.per) * small)) }, () => make(L)));
      if (reduce) draw(0, 0);
    };

    const loop = (t: number) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      draw(dt, t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce || !inView || document.hidden) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) start();
      else stop();
    });
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    if (fine && !reduce) window.addEventListener("pointermove", onMove, { passive: true });
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
