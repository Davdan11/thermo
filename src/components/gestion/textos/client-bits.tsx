"use client";

/* Petits éléments client de la boîte des textos : rafraîchissement, lecture, copie du numéro. */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Copy } from "lucide-react";

/** Relit la page toutes les 20 s quand l'onglet est visible, et au retour sur l'onglet (nouveaux textos, statuts). */
export function AutoRefresh({ every = 20_000 }: { every?: number }) {
  const router = useRouter();
  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState === "visible") router.refresh();
    };
    const id = window.setInterval(refresh, every);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [router, every]);
  return null;
}

/** Conversation affichée : marquée lue (seulement quand elle est vraiment à l'écran, jamais par préchargement). */
export function MarkRead({ action, unread }: { action: () => Promise<void>; unread: number }) {
  useEffect(() => {
    if (unread > 0 && document.visibilityState === "visible") void action();
  }, [action, unread]);
  return null;
}

export function CopyNumber({ value }: { value: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="g-btn g-btn--ghost t-btn-sm"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setDone(true);
          window.setTimeout(() => setDone(false), 1800);
        } catch {
          /* presse-papiers refusé : rien à faire */
        }
      }}
    >
      {done ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
      {done ? "Copié" : "Copier le numéro"}
    </button>
  );
}
