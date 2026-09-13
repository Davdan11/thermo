/* ==================================================================
   Types de la mesure publicitaire (aucune dépendance).

   AdsFormPayload : ce que le navigateur joint à un formulaire, dans
   attribution.ads, seulement si le visiteur a fait un choix dans le
   bandeau. Refus : le choix seul (date, version), aucun identifiant.

   AdsAttribution : la même chose nettoyée par le serveur, écrite dans
   le journal des demandes à côté de l'attribution (attribution.ads).
   ================================================================== */

import type { UtmValues } from "@/lib/attribution/core";

export interface ConsentRecord {
  choice: "granted" | "denied";
  /** Moment du choix dans le bandeau (ISO). */
  at: string;
  /** Version du texte affiché (AD_CONSENT_VERSION). */
  version: string;
}

/** Identifiants de clic publicitaire (valeurs complètes : seulement avec consentement). */
export interface ClickIds {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  /** Format Meta : fb.1.<ms>.<fbclid>. */
  fbc?: string;
  msclkid?: string;
}

export interface AdsFormPayload extends ClickIds {
  consent: ConsentRecord;
  /** Témoin _fbp posé par le pixel Meta (après consentement). */
  fbp?: string;
  /** Moment de la capture des identifiants de clic (ISO). */
  clickAt?: string;
  utm?: UtmValues;
  /** Partagé avec l'événement du pixel Meta : dédoublonnage navigateur / serveur. */
  eventId?: string;
}

export interface AdsAttribution extends ClickIds {
  consent: ConsentRecord;
  fbp?: string;
  clickAt?: string;
  utm?: UtmValues;
  eventId?: string;
  /** Horodatage du serveur à la réception. */
  receivedAt: string;
}

export type ClickType = "gclid" | "gbraid" | "wbraid";
