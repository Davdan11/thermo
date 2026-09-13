"use client";

/* Bouton « Copier » (citation pour les médias). */
import { useState } from "react";

export function CopyText({ text, label = "Copier la citation" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="pm-copy"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          window.setTimeout(() => setDone(false), 2200);
        } catch {
          setDone(false);
        }
      }}
    >
      <span aria-live="polite">{done ? "Copiée" : label}</span>
    </button>
  );
}
