"use client";
/* ==================================================================
   Bouton « Partager mes résultats » : copie le lien permanent des
   recommandations (réponses encodées dans l'URL, recalcul côté serveur).
   ================================================================== */
import { useState } from "react";
import { Link2, Check, Share2 } from "lucide-react";
import type { QuestionnaireAnswers } from "@/lib/thermomatch/answers";
import { shareUrlFor } from "@/lib/thermomatch/share-code";
import { track } from "@/lib/analytics/track";

export function ShareResultsButton({ answers, compact = false }: { answers: QuestionnaireAnswers; compact?: boolean }) {
  const [state, setState] = useState<"idle" | "copied" | "manual">("idle");
  const [manualUrl, setManualUrl] = useState("");

  async function share() {
    const url = shareUrlFor(answers, window.location.origin);
    track("thermomatch_shared");
    if (typeof navigator.share === "function" && /Android|iPhone|iPad/i.test(navigator.userAgent)) {
      try {
        await navigator.share({ title: "Mes recommandations ThermoMatch", text: "Les thermopompes recommandées pour ma maison, avec le montant LogisVert.", url });
        return;
      } catch {
        /* partage annulé : on retombe sur la copie */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setState("copied");
      setTimeout(() => setState("idle"), 2500);
    } catch {
      setManualUrl(url);
      setState("manual");
    }
  }

  return (
    <div className={compact ? "" : "w-full max-w-3xl mx-auto"}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
          style={{ border: "1px solid rgba(255,255,255,.22)", background: state === "copied" ? "rgba(22,163,74,.25)" : "rgba(255,255,255,.06)" }}
        >
          {state === "copied" ? <Check size={16} /> : <Share2 size={16} />}
          {state === "copied" ? "Lien copié" : "Partager mes résultats"}
        </button>
        {!compact && (
          <span className="text-[13px]" style={{ color: "rgba(255,255,255,.5)" }}>
            Un lien à envoyer à votre conjoint ou à un installateur ; il rouvre ces recommandations.
          </span>
        )}
      </div>
      {state === "manual" && (
        <div className="mt-3 flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)" }}>
          <Link2 size={14} className="shrink-0" style={{ color: "rgba(255,255,255,.6)" }} />
          <input readOnly value={manualUrl} onFocus={(e) => e.currentTarget.select()} className="w-full bg-transparent text-[13px] text-white outline-none" aria-label="Lien de partage" />
        </div>
      )}
    </div>
  );
}
