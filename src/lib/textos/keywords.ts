/* ==================================================================
   Mots-clés de désabonnement, de réabonnement et d'aide.

   Twilio traite lui-même, sur un numéro nord-américain, les mots
   anglais STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, OPTOUT,
   REVOKE, START, UNSTOP, YES, HELP et INFO : il répond (en anglais)
   et bloque ensuite les envois (erreur 21610). Le message arrive
   quand même au webhook : on note le désabonnement, sans répondre
   (sinon le client recevrait deux confirmations).

   Les mots français (ARRÊT, DÉSABONNER, DÉBUT, OUI, AIDE) ne sont
   pas connus de Twilio : on note et on confirme nous-mêmes. Avec
   « Advanced Opt-Out » (service de messagerie), Twilio ajoute
   OptOutType au webhook et répond lui-même : on ne répond pas.

   Le message entier doit être le mot-clé (casse, accents, espaces
   et ponctuation ignorés) : « Arrêt. » compte, « arrêt de la
   thermopompe » non. OUI et YES ne réabonnent qu'un numéro
   désabonné : ailleurs, « Oui » est une réponse normale.
   ================================================================== */

import type { Keyword } from "./types";

const STOP_WORDS = new Set(["STOP", "STOPALL", "UNSUBSCRIBE", "CANCEL", "END", "QUIT", "OPTOUT", "REVOKE", "ARRET", "DESABONNER"]);
const START_WORDS = new Set(["START", "UNSTOP", "DEBUT"]);
const START_IF_OPTED_OUT = new Set(["YES", "OUI"]);
const HELP_WORDS = new Set(["HELP", "INFO", "AIDE"]);

/** Mots-clés auxquels Twilio répond lui-même (message exact, casse ignorée). */
const TWILIO_HANDLED = new Set(["STOP", "STOPALL", "UNSUBSCRIBE", "CANCEL", "END", "QUIT", "OPTOUT", "REVOKE", "START", "UNSTOP", "YES", "HELP", "INFO"]);

/** « Arrêt ! » → « ARRET » ; lettres seulement. */
export function normalizeKeyword(body: string): string {
  return body
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
}

/** Vrai si Twilio a déjà répondu lui-même à ce message (mot anglais exact). */
export function isTwilioKeyword(body: string): boolean {
  return TWILIO_HANDLED.has(body.trim().toUpperCase());
}

export interface KeywordMatch {
  keyword: Keyword;
  /** Twilio a déjà envoyé la confirmation : ne pas répondre. */
  twilioHandled: boolean;
}

export function matchKeyword(body: string, opts: { optedOut: boolean; optOutType?: string | null }): KeywordMatch | null {
  const type = (opts.optOutType ?? "").trim().toUpperCase();
  if (type === "STOP") return { keyword: "stop", twilioHandled: true };
  if (type === "START") return { keyword: "start", twilioHandled: true };
  if (type === "HELP") return { keyword: "aide", twilioHandled: true };

  if (body.length > 40) return null;
  const word = normalizeKeyword(body);
  if (!word) return null;
  const twilioHandled = isTwilioKeyword(body);
  if (STOP_WORDS.has(word)) return { keyword: "stop", twilioHandled };
  if (START_WORDS.has(word) || (opts.optedOut && START_IF_OPTED_OUT.has(word))) return { keyword: "start", twilioHandled };
  if (HELP_WORDS.has(word)) return { keyword: "aide", twilioHandled };
  return null;
}
