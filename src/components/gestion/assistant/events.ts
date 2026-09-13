/* Chantier A — ouvrir le panneau « Demande à Claude » depuis n'importe où (bouton « Résumer » de la fiche, pages). */

export const ASSISTANT_EVENT = "gestion:assistant";

export interface OpenAssistantDetail {
  /** Question à préparer (ou à envoyer tout de suite avec send). */
  question?: string;
  /** Fiche concernée (c_…). */
  clientId?: string;
  send?: boolean;
}

export const openAssistant = (detail: OpenAssistantDetail = {}) => window.dispatchEvent(new CustomEvent<OpenAssistantDetail>(ASSISTANT_EVENT, { detail }));
