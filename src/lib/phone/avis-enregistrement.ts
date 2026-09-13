/* ==================================================================
   Conformité C2 — avis d'enregistrement des appels (trousse 6.2 et
   6.3, lus dans les données) dits au téléphone.

   Voix Polly.Gabrielle-Neural (fr-CA) : seulement du SSML accepté par
   les voix Neural (prosody rate, break, say-as, sub), jamais pitch,
   emphasis ni effets (test ssml-polly-neural). Le texte de l'avis est
   dit tel quel ; la balise <sub> ne change que la prononciation du nom
   du site et de l'adresse de la politique.

   Menu entrant : notre menu garde le 2 pour le service après-vente ;
   « continuer sans enregistrement » est la touche 9 (NO_RECORDING_DIGIT).
   ================================================================== */

import { xml } from "@/lib/security/twilio";

export { NO_RECORDING_DIGIT } from "@/lib/consentements/textes";

export const VOICE = `language="fr-CA" voice="Polly.Gabrielle-Neural"`;

const SITE_RE = /\b(ThermopompesAVendre\.ca)(\/confidentialite)?/gi;
const siteAlias = (path?: string) => `Thermopompes À Vendre point c a${path ? ", barre oblique, confidentialité" : ""}`;

/** Texte → SSML sûr (échappé) ; nom du site et adresse de la politique prononcés avec <sub>. */
export function speakable(text: string): string {
  return xml(text).replace(SITE_RE, (_m, dom: string, path?: string) => `<sub alias="${siteAlias(path)}">${dom}${path ?? ""}</sub>`);
}

/** Même texte pour la voix ElevenLabs (texte brut). */
export function spokenPlain(text: string): string {
  return text.replace(SITE_RE, (_m, _dom: string, path?: string) => siteAlias(path));
}

export const MENU_SSML =
  `Pour les ventes et les soumissions, faites le <say-as interpret-as="cardinal">1</say-as>. <break time="500ms"/> ` +
  `Pour le service après-vente, faites le <say-as interpret-as="cardinal">2</say-as>. <break time="500ms"/> ` +
  `Pour parler à un conseiller, faites le <say-as interpret-as="cardinal">3</say-as>.`;

export const WELCOME_TEXT = "Bonjour et bienvenue chez Thermopompes À Vendre.";
export const NO_RECORDING_CONFIRM = "D'accord : cet appel ne sera pas enregistré.";

/** Accueil avec l'avis 6.2 (voix Polly) : l'avis, puis le menu ; la touche 9 est offerte par l'avis lui-même. */
export function welcomeNoticeTwiml(base: string, notice: string): string {
  return `
  <Gather action="${base}/api/phone/ivr/route" method="POST" numDigits="1" timeout="12">
    <Say ${VOICE}>
      <prosody rate="88%">
        ${xml(WELCOME_TEXT)}
        <break time="500ms"/>
        ${speakable(notice)}
        <break time="700ms"/>
        ${MENU_SSML}
      </prosody>
    </Say>
  </Gather>
  <Redirect>${base}/api/phone/ivr/welcome</Redirect>`;
}

/** Accueil avec l'avis 6.2 (fichiers ElevenLabs) ; `v` change quand le texte change (cache de Twilio). */
export function welcomeNoticeAudioTwiml(base: string, noticeSha: string): string {
  const audio = `${base}/api/phone/audio`;
  return `
  <Gather action="${base}/api/phone/ivr/route" method="POST" numDigits="1" timeout="10">
    <Play>${audio}/accueil</Play>
    <Pause length="1"/>
    <Play>${audio}/avis-enregistrement?v=${xml(noticeSha)}</Play>
    <Pause length="1"/>
    <Play>${audio}/menu</Play>
  </Gather>
  <Play>${audio}/repeat-menu</Play>
  <Redirect>${base}/api/phone/ivr/welcome</Redirect>`;
}

/** Touche 9 : confirmation, puis le même menu ; la suite de l'appel porte « enr=non » (aucun enregistrement). */
export function noRecordingMenuTwiml(base: string, recordedVoice: boolean): string {
  const say = recordedVoice
    ? `<Play>${base}/api/phone/audio/sans-enregistrement</Play>
    <Play>${base}/api/phone/audio/menu</Play>`
    : `<Say ${VOICE}>
      <prosody rate="88%">
        ${xml(NO_RECORDING_CONFIRM)}
        <break time="500ms"/>
        ${MENU_SSML}
      </prosody>
    </Say>`;
  return `
  <Gather action="${base}/api/phone/ivr/route?enr=non" method="POST" numDigits="1" timeout="12">
    ${say}
  </Gather>
  <Redirect>${base}/api/phone/ivr/route?enr=non&amp;menu=1</Redirect>`;
}
