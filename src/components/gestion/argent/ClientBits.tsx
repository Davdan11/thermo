"use client";

/* Petits éléments interactifs partagés du volet B : impression, copie d'un lien. */
import { useState } from "react";
import { Check, Copy, Printer } from "lucide-react";

export function PrintButton({ className = "fa-tool", label = "Imprimer" }: { className?: string; label?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.print()}>
      <Printer size={15} aria-hidden /> {label}
    </button>
  );
}

/** Lien à copier (outil : « ar-copy » ; dossier du client : « sv-copy »). */
export function CopyField({ value, variant = "ar", label = "Copier" }: { value: string; variant?: "ar" | "sv"; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className={`${variant}-copy`}>
      <code title={value}>{value}</code>
      <button
        type="button"
        className={variant === "sv" ? "sv-btn sv-btn--ghost" : "k-btn"}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setDone(true);
            setTimeout(() => setDone(false), 1800);
          } catch {
            /* presse-papiers refusé : le lien reste sélectionnable */
          }
        }}
      >
        {done ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />} {done ? "Copié" : label}
      </button>
    </div>
  );
}
