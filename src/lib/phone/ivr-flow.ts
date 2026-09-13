/* ==================================================================
   Parcours d'un appel au numéro du site (Twilio) :
   menu → bureau (téléphone IP Yealink, en SIP) → cellulaire du
   propriétaire (heures d'ouverture seulement) → boîte vocale.

   Le client ne voit jamais le numéro du cellulaire ; le propriétaire voit
   le numéro du client et entend d'abord « Appel de Thermopompes À Vendre »
   (chuchotement) pour savoir que c'est un appel d'affaires.

   Réglages (shared/.env, jamais dans le dépôt, qui est public) :
   - TWILIO_SIP_URI : adresse SIP du téléphone du bureau (sip:utilisateur@domaine) ;
   - TWILIO_FORWARD_CELL : cellulaire du propriétaire (+1XXXXXXXXXX) ;
   - TWILIO_FORWARD_VENTES / TWILIO_FORWARD_SAV : anciens renvois, ignorés
     s'ils valent le numéro du site (l'appel tournerait en rond).
   ================================================================== */

import { xml } from "@/lib/security/twilio";

export type Dept = "ventes" | "service" | "technique";

export interface PhoneConfig {
  ownNumber: string;
  sipUri: string | null;
  officeNumbers: Record<Dept, string | null>;
  cellNumber: string | null;
}

type Env = Record<string, string | undefined>;

const last10 = (s: string) => s.replace(/\D/g, "").slice(-10);

/** Un numéro de renvoi utilisable : rempli et différent du numéro du site. */
function usable(n: string | undefined, own: string): string | null {
  const v = (n ?? "").trim();
  if (!v) return null;
  if (own && last10(v) === last10(own)) return null;
  return v;
}

export function phoneConfig(env: Env = process.env): PhoneConfig {
  const own = (env.TWILIO_PHONE_NUMBER ?? "").trim();
  const sip = (env.TWILIO_SIP_URI ?? "").trim();
  const ventes = usable(env.TWILIO_FORWARD_VENTES, own);
  return {
    ownNumber: own,
    sipUri: /^sip:[^@\s]+@[^@\s]+$/i.test(sip) ? sip : null,
    officeNumbers: { ventes, service: usable(env.TWILIO_FORWARD_SAV, own) ?? ventes, technique: ventes },
    cellNumber: usable(env.TWILIO_FORWARD_CELL, own),
  };
}

export type OfficeTarget = { kind: "sip"; uri: string } | { kind: "number"; number: string };

/** Téléphone du bureau : l'adresse SIP d'abord, sinon un ancien renvoi valide. */
export function officeTarget(cfg: PhoneConfig, dept: Dept): OfficeTarget | null {
  if (cfg.sipUri) return { kind: "sip", uri: cfg.sipUri };
  const n = cfg.officeNumbers[dept];
  return n ? { kind: "number", number: n } : null;
}

export function toDept(value: string | null | undefined): Dept {
  return value === "service" || value === "technique" ? value : "ventes";
}

/** Heures d'ouverture : du lundi au vendredi, de 8 h à 18 h, heure de Montréal. */
export function isBusinessHours(now: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Montreal", weekday: "short", hour: "numeric", hour12: false }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0") % 24;
  return weekday !== "Sat" && weekday !== "Sun" && hour >= 8 && hour < 18;
}

/** Messages de transfert (mêmes textes que les fichiers ElevenLabs de /api/phone/audio). */
const TRANSFER_TEXT: Record<Dept, string> = {
  ventes: "Parfait, je vous transfère à notre équipe des ventes. Un instant s'il vous plaît.",
  service: "Je vous transfère au service après-vente. Un instant s'il vous plaît.",
  technique: "Je vous transfère à un conseiller technique. Un instant.",
};

/** Voix ElevenLabs seulement si la clé est définie ; sinon la voix Polly québécoise de Twilio (jamais un fichier en erreur). */
export function useRecordedVoice(env: Env = process.env): boolean {
  return Boolean((env.ELEVENLABS_API_KEY ?? "").trim());
}

export function transferPrompt(base: string, dept: Dept, audio: string, recorded: boolean): string {
  return recorded
    ? `<Play>${base}/api/phone/audio/${audio}</Play>`
    : `<Say language="fr-CA" voice="Polly.Gabrielle-Neural">${xml(TRANSFER_TEXT[dept])}</Say>`;
}

const record = (base: string) => `record="record-from-answer" recordingStatusCallback="${base}/api/phone/recording"`;

/** Conformité C2 : suite d'un appel qui a refusé l'enregistrement (touche 9) : aucun attribut record, « enr=non » propagé. */
export interface DialOptions {
  /** false : l'appelant a fait le 9 : aucun enregistrement ni transcription. */
  record?: boolean;
}
const recAttr = (base: string, o: DialOptions) => (o.record === false ? "" : ` ${record(base)}`);
const enrParam = (o: DialOptions) => (o.record === false ? "&amp;enr=non" : "");

/** Fait sonner le bureau ; sans réponse, Twilio rappelle no-answer à l'étape « bureau ». `base` est déjà échappé. */
export function officeDialTwiml(base: string, dept: Dept, target: OfficeTarget, audio: string, recorded = useRecordedVoice(), o: DialOptions = {}): string {
  const endpoint = target.kind === "sip" ? `<Sip>${xml(target.uri)}</Sip>` : `<Number>${xml(target.number)}</Number>`;
  return `
  ${transferPrompt(base, dept, audio, recorded)}
  <Dial action="${base}/api/phone/ivr/no-answer?dept=${dept}&amp;etape=bureau${enrParam(o)}" timeout="18"${recAttr(base, o)}>
    ${endpoint}
  </Dial>`;
}

/** Fait sonner le cellulaire, avec le chuchotement joué au propriétaire avant de joindre le client. */
export function cellDialTwiml(base: string, dept: Dept, cell: string, o: DialOptions = {}): string {
  return `
  <Dial action="${base}/api/phone/ivr/no-answer?dept=${dept}&amp;etape=cellulaire${enrParam(o)}" timeout="20"${recAttr(base, o)}>
    <Number url="${base}/api/phone/ivr/chuchotement?dept=${dept}">${xml(cell)}</Number>
  </Dial>`;
}
