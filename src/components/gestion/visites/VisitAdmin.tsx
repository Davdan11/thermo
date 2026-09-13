"use client";

/* Chantier D — réglages des visites photo (conservation, validité du lien) et actions d'une visite (nouveau lien,
   relancer la lecture, supprimer maintenant). */
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw, Save, Send, Trash2 } from "lucide-react";
import { deleteVisitAction, resendPhotosAction, retryVisionAction, saveVisitSettingsAction } from "@/app/gestion/soumissions/visites/actions";
import { Num } from "@/components/gestion/soumissions/fields";
import type { VisitSettings } from "@/lib/visites/types";

export function VisitSettingsForm({ initial }: { initial: VisitSettings }) {
  const [months, setMonths] = useState<number | null>(initial.retentionMonths);
  const [days, setDays] = useState<number | null>(initial.linkDays);
  const [busy, start] = useTransition();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  return (
    <div>
      <Num label="Conservation des photos et des réponses" suffix="mois" integer value={months} onChange={setMonths} />
      <p className="g-hint" style={{ marginTop: -4 }}>
        Affichée au client (avis Loi 25). Ensuite, photos, réponses et coordonnées de la visite sont supprimées automatiquement.
      </p>
      <Num label="Validité du lien" suffix="jours" integer value={days} onChange={setDays} />
      <button
        type="button"
        className="g-btn g-btn--primary"
        disabled={busy}
        onClick={() =>
          start(async () => {
            const r = await saveVisitSettingsAction({ retentionMonths: months ?? 0, linkDays: days ?? 0 });
            setMsg(r.ok ? { ok: true, text: r.message ?? "Enregistré." } : { ok: false, text: r.error });
          })
        }
      >
        <Save size={16} aria-hidden /> Enregistrer
      </button>
      {msg ? (
        <p className={msg.ok ? "g-hint" : "g-error"} role="status">
          {msg.text}
        </p>
      ) : null}
    </div>
  );
}

export function VisitRowActions({ id, canResend, canRetry }: { id: string; canResend: boolean; canRetry: boolean }) {
  const router = useRouter();
  const [busy, start] = useTransition();
  const [msg, setMsg] = useState<string | null>(null);
  const run = (fn: () => Promise<{ ok: boolean; error?: string; message?: string; link?: string }>) =>
    start(async () => {
      const r = await fn();
      setMsg(r.ok ? (r.link ? `Nouveau lien envoyé : ${r.link}` : (r.message ?? "Fait.")) : (r.error ?? "Impossible."));
      router.refresh();
    });
  return (
    <div className="g-actions">
      {canResend ? (
        <button type="button" className="g-btn g-btn--quiet" disabled={busy} onClick={() => run(() => resendPhotosAction(id, { sms: true, email: true }))}>
          <Send size={15} aria-hidden /> Nouveau lien
        </button>
      ) : null}
      {canRetry ? (
        <button type="button" className="g-btn g-btn--quiet" disabled={busy} onClick={() => run(() => retryVisionAction(id))}>
          <RefreshCw size={15} aria-hidden /> Relancer la lecture
        </button>
      ) : null}
      <button
        type="button"
        className="g-btn g-btn--quiet"
        disabled={busy}
        onClick={() => {
          if (window.confirm("Supprimer maintenant les photos, les réponses et les coordonnées de cette visite ? C’est définitif.")) run(() => deleteVisitAction(id));
        }}
      >
        <Trash2 size={15} aria-hidden /> Supprimer maintenant
      </button>
      {msg ? (
        <span className="g-hint" role="status" style={{ margin: 0, overflowWrap: "anywhere" }}>
          {msg}
        </span>
      ) : null}
    </div>
  );
}
