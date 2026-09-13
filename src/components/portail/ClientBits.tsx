"use client";

/* Chantier P — petits îlots interactifs du portail : actualisation pendant que l'installateur est en route,
   copie du lien de parrainage. Tout le reste du portail est rendu au serveur et fonctionne sans JavaScript. */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Copy } from "lucide-react";

/** Rafraîchit la page toutes les 45 s tant qu'elle est visible (installateur en route ou sur place). */
export function LiveRefresh({ seconds = 45 }: { seconds?: number }) {
  const router = useRouter();
  useEffect(() => {
    const tick = () => {
      if (document.visibilityState === "visible") router.refresh();
    };
    const id = window.setInterval(tick, seconds * 1000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [router, seconds]);
  return null;
}

export function CopyLink({ value }: { value: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="pj-copy">
      <code title={value}>{value}</code>
      <button
        type="button"
        className="pj-btn pj-btn--ghost pj-btn--sm"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setDone(true);
            window.setTimeout(() => setDone(false), 1800);
          } catch {
            /* presse-papiers refusé : le lien reste sélectionnable */
          }
        }}
      >
        {done ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />} {done ? "Copié" : "Copier"}
      </button>
    </div>
  );
}
