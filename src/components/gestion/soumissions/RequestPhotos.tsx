"use client";

/* ==================================================================
   Chantier D — « Demander des photos au client » (créateur et fiche
   client). Envoie un lien sécurisé /visite/[jeton], à durée limitée,
   par texto et par courriel (identification de l'entreprise et STOP
   dans chaque message). Hors production, rien ne part : l'envoi est
   « simulé » et affiché comme tel. Le lien est montré une seule fois,
   pour le copier au besoin (seule son empreinte est gardée).
   ================================================================== */

import { useState, useTransition } from "react";
import { Camera, Check, Copy, Mail, MessageSquare, Send, X } from "lucide-react";
import { requestPhotosAction, requestPhotosForClientAction, type RequestPhotosResult } from "@/app/gestion/soumissions/visites/actions";
import "./photos-client.css";

const STATUS: Record<string, string> = { envoye: "envoyé", echec: "échec", "non-configure": "non configuré", "sans-numero": "sans destinataire", simule: "simulé (développement)", desabonne: "désabonné : rien envoyé" };

const maskPhone = (p: string) => {
  const d = p.replace(/\D/g, "");
  return d.length >= 10 ? `••• ${d.slice(-4)}` : "";
};
const maskEmail = (e: string) => {
  const [u, dom] = e.split("@");
  return u && dom ? `${u.charAt(0)}•••@${dom}` : "";
};

export interface RequestPhotosProps {
  /** Fiche client : coordonnées reprises au serveur. */
  clientId: string | null;
  forClient?: boolean;
  quoteId?: string | null;
  firstName?: string;
  lastName?: string;
  phone: string;
  email: string;
  rooms?: string[];
  /** Créateur : enregistre la soumission d'abord (pour y rattacher les photos) ; renvoie son identifiant. */
  beforeSend?: () => Promise<string | null>;
  onSent?: () => void;
  compact?: boolean;
}

export function RequestPhotos(p: RequestPhotosProps) {
  const [open, setOpen] = useState(false);
  const canSms = Boolean(maskPhone(p.phone));
  const canEmail = Boolean(maskEmail(p.email));
  const [sms, setSms] = useState(canSms);
  const [email, setEmail] = useState(canEmail);
  const [busy, start] = useTransition();
  const [res, setRes] = useState<RequestPhotosResult | null>(null);
  const [copied, setCopied] = useState(false);

  const send = () =>
    start(async () => {
      setRes(null);
      const channels = { sms: sms && canSms, email: email && canEmail };
      let r: RequestPhotosResult;
      if (p.forClient && p.clientId) r = await requestPhotosForClientAction(p.clientId, channels);
      else {
        const quoteId = p.beforeSend ? await p.beforeSend() : (p.quoteId ?? null);
        r = await requestPhotosAction({ quoteId: quoteId ?? p.quoteId ?? null, clientId: p.clientId, contact: { firstName: p.firstName ?? "", lastName: p.lastName ?? "", phone: p.phone, email: p.email }, rooms: (p.rooms ?? []).filter(Boolean), channels });
      }
      setRes(r);
      if (r.ok) p.onSent?.();
    });

  const copy = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* rien : le lien reste affiché */
    }
  };

  return (
    <div className="sq-d-request">
      <button type="button" className={p.compact ? "k-btn" : "g-btn g-btn--ghost"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <Camera size={16} aria-hidden /> Demander des photos au client
      </button>
      {open ? (
        <div className="sq-d-sheet" role="region" aria-label="Demander des photos au client">
          <p className="g-hint" style={{ margin: 0 }}>
            Le client reçoit un lien sécurisé vers une visite guidée : panneau électrique, mur extérieur, pièces, système actuel, accès. Les photos et ses réponses arrivent ici, avec des suggestions à confirmer.
          </p>
          <div className="sq-d-sheet__row" role="group" aria-label="Envoyer par">
            <button type="button" className="sq-chip" aria-pressed={sms && canSms} disabled={!canSms} onClick={() => setSms((v) => !v)}>
              <MessageSquare size={15} aria-hidden style={{ marginRight: 6 }} /> Texto {canSms ? maskPhone(p.phone) : "(aucun cellulaire)"}
            </button>
            <button type="button" className="sq-chip" aria-pressed={email && canEmail} disabled={!canEmail} onClick={() => setEmail((v) => !v)}>
              <Mail size={15} aria-hidden style={{ marginRight: 6 }} /> Courriel {canEmail ? maskEmail(p.email) : "(aucun courriel)"}
            </button>
          </div>
          <div className="g-actions">
            <button type="button" className="g-btn g-btn--primary" disabled={busy || !((sms && canSms) || (email && canEmail))} onClick={send}>
              <Send size={16} aria-hidden /> {busy ? "Envoi…" : "Envoyer le lien"}
            </button>
            <button type="button" className="g-btn g-btn--quiet" onClick={() => setOpen(false)}>
              <X size={16} aria-hidden /> Fermer
            </button>
          </div>
          {res && !res.ok ? (
            <p className="g-error" role="alert">
              {res.error}
            </p>
          ) : null}
          {res && res.ok ? (
            <div role="status">
              <div className="sq-d-status">
                {res.sms ? (
                  <span>
                    <Check size={14} aria-hidden /> Texto : {STATUS[res.sms] ?? res.sms}
                  </span>
                ) : null}
                {res.email ? (
                  <span>
                    <Check size={14} aria-hidden /> Courriel : {STATUS[res.email] ?? res.email}
                  </span>
                ) : null}
              </div>
              <div className="sq-d-link">
                <code>{res.link}</code>
                <button type="button" className="g-btn g-btn--quiet" onClick={() => void copy(res.link)}>
                  <Copy size={15} aria-hidden /> {copied ? "Copié" : "Copier"}
                </button>
              </div>
              <p className="g-hint" style={{ margin: "6px 0 0" }}>
                Lien montré une seule fois, valide jusqu’au {new Date(res.expiresAt).toLocaleDateString("fr-CA", { day: "numeric", month: "long" })}.
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
