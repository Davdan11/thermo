"use client";

import { useEffect, useRef } from "react";

/* ==================================================================
   Neige qui tombe (canvas 2D) pour le héros de l'accueil.
   Trois plans de profondeur : les flocons proches sont plus gros, plus
   rapides et plus lumineux. Dérive lente au vent + balancement.
   Économe : pause hors écran et quand l'onglet est caché ; rien
   d'animé si le visiteur demande moins d'animations.
   ================================================================== */

type Flake = { x: number; y: number; r: number; vy: number; phase: number; sway: number; a: number };

export function Snowfall({ className, density = 1 }: { className?: string; density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let flakes: Flake[] = [];
    let raf = 0;
    let running = false;
    let inView = true;
    let last = 0;

    const make = (anywhere: boolean): Flake => {
      const depth = Math.random(); // 0 = loin, 1 = près
      return {
        x: Math.random() * w,
        y: anywhere ? Math.random() * h : -6 - Math.random() * 40,
        r: 0.6 + depth * depth * 2.7,
        vy: 16 + depth * 58,
        phase: Math.random() * Math.PI * 2,
        sway: 5 + depth * 16,
        a: 0.28 + depth * 0.6,
      };
    };

    const draw = (dt: number, t: number) => {
      ctx.clearRect(0, 0, w, h);
      const wind = Math.sin(t / 5200) * 14 + 6;
      for (const f of flakes) {
        if (dt > 0) {
          f.phase += dt * 0.8;
          f.y += f.vy * dt;
          f.x += (wind * (0.35 + f.r / 3.2) + Math.sin(f.phase) * f.sway * 0.5) * dt;
          if (f.y - f.r > h) Object.assign(f, make(false));
          if (f.x > w + 8) f.x = -8;
          else if (f.x < -8) f.x = w + 8;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(244,239,231,${f.a})`;
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(280, Math.round(((w * h) / 6200) * density));
      flakes = Array.from({ length: count }, () => make(true));
      if (reduce) draw(0, 0); // image fixe de neige, sans mouvement
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
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density]);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
