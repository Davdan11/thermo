/* ==================================================================
   Chantier T — TwiML de l'appel masqué (pur, testable).

   1. Twilio appelle le cellulaire du propriétaire (API REST, From =
      numéro du site). Quand il décroche : chuchotement « Appel vers
      Julie T., Laval, soumission ouverte », puis « faites le 1 ». La
      touche protège d'une boîte vocale qui décrocherait à sa place.
   2. Touche 1 : <Dial callerId="numéro du site"> vers le client. Le
      client voit le numéro du site, jamais le cellulaire.
   3. Le client décroche : il entend d'abord l'avis d'enregistrement
      (<Number url>), puis il est relié au propriétaire.
   Enregistrement seulement si le réglage est activé (désactivé par
   défaut). `base` est l'URL du site déjà échappée (xml()).
   ================================================================== */

import { xml } from "@/lib/security/twilio";

const VOICE = `language="fr-CA" voice="Polly.Gabrielle-Neural"`;

export const RECORDING_NOTICE = "Votre appel peut être enregistré pour la qualité du service.";
export const CONFIRM_PROMPT = "Faites le 1 pour joindre le client.";

/** « Appel vers Julie T., Laval, soumission ouverte. » */
export function whisperText(label: string, context: string): string {
  const who = label.trim() || "un client";
  return `Appel vers ${who}${context.trim() ? `, ${context.trim()}` : ""}.`;
}

const q = (etape: string, callId: string, extra = "") => `/api/phone/masque/${etape}?a=${encodeURIComponent(callId)}${extra}`;

/** Jambe du propriétaire : chuchotement et confirmation par la touche 1. */
export function ownerLegTwiml(base: string, callId: string, whisper: string): string {
  return `
  <Gather action="${base}${xml(q("connecter", callId))}" method="POST" numDigits="1" timeout="8" actionOnEmptyResult="true">
    <Say ${VOICE}>${xml(whisper)} ${xml(CONFIRM_PROMPT)}</Say>
    <Pause length="2"/>
    <Say ${VOICE}>${xml(CONFIRM_PROMPT)}</Say>
  </Gather>
  <Say ${VOICE}>Appel annulé.</Say>
  <Hangup/>`;
}

export interface ConnectOptions {
  base: string;
  callId: string;
  /** Numéro du site (TWILIO_PHONE_NUMBER) : c'est lui que le client voit. */
  siteNumber: string;
  clientPhone: string;
  record: boolean;
}

/** Touche 1 : appelle le client avec le numéro du site ; avis d'enregistrement joué au client quand il décroche. */
export function connectTwiml(o: ConnectOptions): string {
  const rec = o.record ? ` record="record-from-answer-dual" recordingStatusCallback="${o.base}${xml(q("enregistrement", o.callId))}" recordingStatusCallbackEvent="completed"` : "";
  return `
  <Say ${VOICE}>Un instant, j'appelle le client.</Say>
  <Dial callerId="${xml(o.siteNumber)}" action="${o.base}${xml(q("fin", o.callId))}" method="POST" timeout="30"${rec}>
    <Number url="${o.base}${xml(q("avis", o.callId))}" statusCallback="${o.base}${xml(q("statut", o.callId, "&jambe=client"))}" statusCallbackEvent="initiated ringing answered completed" statusCallbackMethod="POST">${xml(o.clientPhone)}</Number>
  </Dial>`;
}

/** Joué au client dès qu'il décroche, avant d'être relié. */
export function noticeTwiml(): string {
  return `<Say ${VOICE}>${xml(RECORDING_NOTICE)}</Say>`;
}

/** Aucune touche, ou autre que 1. */
export function cancelledTwiml(): string {
  return `<Say ${VOICE}>Appel annulé. Au revoir.</Say><Hangup/>`;
}

/** Appel introuvable ou déjà terminé. */
export function unavailableTwiml(): string {
  return `<Say ${VOICE}>Cet appel n'est plus disponible.</Say><Hangup/>`;
}
