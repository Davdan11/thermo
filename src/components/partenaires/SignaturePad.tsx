"use client";

/* ==================================================================
   Signature tracée au doigt ou à la souris (canvas, événements
   « pointer »). L'image PNG (fond transparent) est écrite dans un
   champ caché à chaque trait levé. Aucune bibliothèque. Trait lissé
   (courbes quadratiques), épaisseur selon la vitesse, écran à haute
   densité pris en compte.
   ================================================================== */

import { useCallback, useEffect, useRef, useState } from "react";
import { Eraser } from "lucide-react";

export function SignaturePad({ name, onChange, label = "Signez ici avec le doigt" }: { name?: string; onChange?: (dataUrl: string) => void; label?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [value, setValue] = useState("");
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number; t: number; w: number } | null>(null);
  const strokes = useRef(0);

  const setup = useCallback(() => {
    const c = canvas.current;
    if (!c) return;
    const ratio = Math.max(1, Math.min(3, window.devicePixelRatio || 1));
    const rect = c.getBoundingClientRect();
    c.width = Math.round(rect.width * ratio);
    c.height = Math.round(rect.height * ratio);
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#0c1821";
    strokes.current = 0;
    setValue("");
    onChange?.("");
  }, [onChange]);

  useEffect(() => {
    setup();
    const onResize = () => {
      // Un redimensionnement efface le dessin : on ne le fait que si rien n'est encore signé.
      if (!strokes.current) setup();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setup]);

  const point = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top, t: e.timeStamp };
  };

  const down = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drawing.current = true;
    const p = point(e);
    last.current = { ...p, w: 2.4 };
    const ctx = e.currentTarget.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = "#0c1821";
      ctx.fill();
    }
  };

  const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current || !last.current) return;
    const ctx = e.currentTarget.getContext("2d");
    if (!ctx) return;
    const p = point(e);
    const l = last.current;
    const dist = Math.hypot(p.x - l.x, p.y - l.y);
    if (dist < 0.8) return;
    const speed = dist / Math.max(1, p.t - l.t);
    const w = Math.max(1.1, Math.min(3.2, 3.4 - speed * 1.4));
    const width = l.w * 0.6 + w * 0.4;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.quadraticCurveTo(l.x, l.y, (l.x + p.x) / 2, (l.y + p.y) / 2);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = { ...p, w: width };
  };

  const up = () => {
    if (!drawing.current) return;
    drawing.current = false;
    last.current = null;
    strokes.current += 1;
    const url = canvas.current?.toDataURL("image/png") ?? "";
    setValue(url);
    onChange?.(url);
  };

  return (
    <div className={`pp-pad-sign${value ? " is-signed" : ""}`}>
      <canvas ref={canvas} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={up} aria-label={label} role="img" />
      <span className="pp-pad-sign__hint">{label}</span>
      {value ? (
        <button type="button" className="pp-btn pp-btn--ghost pp-btn--sm pp-pad-sign__clear" onClick={setup}>
          <Eraser size={15} aria-hidden /> Effacer
        </button>
      ) : null}
      {name ? <input type="hidden" name={name} value={value} /> : null}
    </div>
  );
}
