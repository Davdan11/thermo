"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";

/** Lien de la soumission à copier (le propriétaire le colle dans un texto ou un courriel). */
export function CopyLink({ url }: { url: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="sq-link">
      <code title={url}>{url}</code>
      <button
        type="button"
        className="g-btn g-btn--quiet"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(url);
            setDone(true);
            setTimeout(() => setDone(false), 1800);
          } catch {
            /* presse-papiers refusé */
          }
        }}
      >
        {done ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />} {done ? "Copié" : "Copier"}
      </button>
      <a className="g-btn g-btn--quiet" href={url} target="_blank" rel="noreferrer" aria-label="Ouvrir le lien (compte comme une consultation)" title="Ouvrir : compte comme une consultation du client">
        <ExternalLink size={16} aria-hidden />
      </a>
    </div>
  );
}
