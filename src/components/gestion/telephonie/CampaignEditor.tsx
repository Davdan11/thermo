"use client";

/* ==================================================================
   Chantier T — campagne : nom, segment (installés il y a N à M mois,
   villes, marques), message avec aperçu exact (identification et STOP
   ajoutés), envoi test au propriétaire, puis envoi SEULEMENT par le
   bouton « Envoyer » après avoir coché la confirmation du nombre.
   ================================================================== */

import { useActionState, useMemo, useState, useTransition } from "react";
import { Pause, Play, Send, Smartphone, Trash2 } from "lucide-react";
import { createCampaignAction, deleteCampaignAction, launchCampaignAction, pauseCampaignAction, saveCampaignAction, testCampaignAction, type TelActionResult } from "@/app/gestion/(prive)/telephonie/actions";
import { renderCampaignText, MESSAGE_MAX } from "@/lib/telephonie/plan";
import type { CampaignSegment, CampaignStatus } from "@/lib/telephonie/types";
import { Msg } from "./client-bits";
import { SmsMeter } from "./SettingsForms";

export function NewCampaignForm() {
  const [state, action, pending] = useActionState<TelActionResult, FormData>(createCampaignAction, undefined);
  return (
    <form action={action} className="cr-note-form">
      <label className="g-field" style={{ margin: 0 }}>
        <span className="g-label">Nom de la campagne</span>
        <input name="name" className="g-input" required maxLength={80} placeholder="Ex. : entretien annuel, installés il y a un an" />
      </label>
      <div>
        <button type="submit" className="k-btn k-btn--primary" disabled={pending}>
          {pending ? "Création…" : "Créer le brouillon"}
        </button>
      </div>
      <Msg state={state} />
    </form>
  );
}

export function CampaignForm({ id, initial, site, locked }: { id: string; initial: { name: string; message: string; segment: CampaignSegment }; site: string; locked: boolean }) {
  const [state, action, pending] = useActionState<TelActionResult, FormData>(saveCampaignAction.bind(null, id), undefined);
  const [message, setMessage] = useState(initial.message);
  const preview = useMemo(() => renderCampaignText(message || "…", "Julie"), [message]);
  const seg = initial.segment;
  return (
    <form action={action} className="cr-form">
      <fieldset disabled={locked} style={{ border: 0, padding: 0, margin: 0, display: "grid", gap: 14 }}>
        <label className="g-field" style={{ margin: 0 }}>
          <span className="g-label">Nom</span>
          <input name="name" className="g-input" defaultValue={initial.name} maxLength={80} required />
        </label>
        <div className="cr-setting" style={{ paddingTop: 0 }}>
          <span className="cr-setting__label">Installés il y a</span>
          <div className="tp-inline">
            <input name="from" className="g-input" type="number" min={0} max={240} defaultValue={seg.installedFromMonths ?? ""} placeholder="—" aria-label="Au moins (mois)" />
            <span>à</span>
            <input name="to" className="g-input" type="number" min={0} max={240} defaultValue={seg.installedToMonths ?? ""} placeholder="—" aria-label="Au plus (mois)" />
            <span>mois</span>
          </div>
          <p className="cr-setting__hint">Ex. : 11 à 13 mois pour l’entretien annuel. Vide des deux côtés : tous les clients, installés ou non.</p>
        </div>
        <div className="cr-form__row">
          <label className="g-field" style={{ margin: 0 }}>
            <span className="g-label">Villes (séparées par des virgules)</span>
            <input name="cities" className="g-input" defaultValue={seg.cities.join(", ")} placeholder="Toutes" />
          </label>
          <label className="g-field" style={{ margin: 0 }}>
            <span className="g-label">Marques installées</span>
            <input name="brands" className="g-input" defaultValue={seg.brands.join(", ")} placeholder="Toutes" />
          </label>
        </div>
        <div className="cr-setting" style={{ borderBottom: 0 }}>
          <label className="cr-setting__label" htmlFor="tp-msg">
            Message
          </label>
          <p className="cr-setting__hint">{"{prenom}"} : prénom du client. L’identification de l’entreprise et « Répondez STOP… » sont ajoutées à chaque texto.</p>
          <textarea id="tp-msg" name="message" className="tp-textarea" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={MESSAGE_MAX} />
          <SmsMeter text={preview} />
          <p className="tp-bubble">
            <span className="tp-bubble__from">De : {site}</span>
            {preview}
          </p>
        </div>
      </fieldset>
      <Msg state={state} />
      {locked ? (
        <p className="g-hint" style={{ margin: 0 }}>
          Campagne lancée : elle ne se modifie plus.
        </p>
      ) : (
        <div>
          <button type="submit" className="k-btn k-btn--ink k-btn--lg" disabled={pending}>
            {pending ? "Enregistrement…" : "Enregistrer et mettre l’aperçu à jour"}
          </button>
        </div>
      )}
    </form>
  );
}

export function CampaignControls({ id, status, count, hasMessage, testInfo }: { id: string; status: CampaignStatus; count: number; hasMessage: boolean; testInfo: string | null }) {
  const [launchState, launch, launching] = useActionState<TelActionResult, FormData>(launchCampaignAction.bind(null, id), undefined);
  const [state, setState] = useState<TelActionResult>(undefined);
  const [pending, start] = useTransition();
  const [confirmed, setConfirmed] = useState(false);
  const run = (fn: () => Promise<TelActionResult>) => start(async () => setState(await fn()));

  if (status === "envoi" || status === "pause") {
    return (
      <div style={{ display: "grid", gap: 10 }}>
        <div>
          <button type="button" className="k-btn" disabled={pending} onClick={() => run(() => pauseCampaignAction(id, status === "envoi"))}>
            {status === "envoi" ? (
              <>
                <Pause size={15} aria-hidden /> Mettre en pause
              </>
            ) : (
              <>
                <Play size={15} aria-hidden /> Reprendre l’envoi
              </>
            )}
          </button>
        </div>
        <Msg state={state} />
      </div>
    );
  }
  if (status !== "brouillon") return null;

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div style={{ display: "grid", gap: 8 }}>
        <div>
          <button type="button" className="k-btn" disabled={pending || !hasMessage} onClick={() => run(() => testCampaignAction(id))}>
            <Smartphone size={15} aria-hidden /> {pending ? "Envoi du test…" : "M’envoyer un test"}
          </button>
        </div>
        <p className="g-hint" style={{ margin: 0 }}>
          Le texte exact, avec « Prénom », sur votre cellulaire (ALERT_SMS_TO).{testInfo ? ` Dernier test : ${testInfo}.` : ""}
        </p>
        <Msg state={state} />
      </div>

      <form action={launch} className="tp-launch">
        <input type="hidden" name="count" value={count} />
        <div>
          <span className="tp-launch__count">{count}</span> <strong>destinataire{count > 1 ? "s" : ""}</strong>
        </div>
        <label className="tp-check">
          <input type="checkbox" name="confirm" value="oui" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} disabled={!count || !hasMessage} />
          <span>
            Je confirme l’envoi de ce texto à {count} client{count > 1 ? "s" : ""}, tous avec un consentement valide (LCAP). Rien ne part sans ce clic.
          </span>
        </label>
        <div>
          <button type="submit" className="k-btn k-btn--primary k-btn--lg" disabled={!confirmed || launching || !count || !hasMessage}>
            <Send size={17} aria-hidden /> {launching ? "Lancement…" : `Envoyer à ${count} client${count > 1 ? "s" : ""}`}
          </button>
        </div>
        <Msg state={launchState} />
      </form>

      <div>
        <button type="button" className="k-btn k-btn--ghost" disabled={pending} onClick={() => run(() => deleteCampaignAction(id))}>
          <Trash2 size={15} aria-hidden /> Supprimer le brouillon
        </button>
      </div>
    </div>
  );
}
