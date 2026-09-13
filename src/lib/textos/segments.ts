/* ==================================================================
   Nombre de textos (segments) facturés pour un message.
   GSM-7 : 160 caractères pour un texto, 153 par segment au-delà.
   Dès qu'un caractère n'est pas dans l'alphabet GSM (À, ê, ç, ’,
   émoji…), tout le message passe en UCS-2 : 70, puis 67 par segment.
   Sans dépendance serveur : utilisé aussi dans les formulaires.
   ================================================================== */

const GSM_BASIC =
  "@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà";
/** Table d'extension : chaque caractère compte pour deux. */
const GSM_EXT = "^{}\\[~]|€\f";

export interface SegmentInfo {
  encoding: "GSM-7" | "UCS-2";
  /** Unités comptées (septets GSM ou unités UTF-16). */
  units: number;
  segments: number;
  /** Capacité d'un segment pour ce message (160/153 ou 70/67). */
  perSegment: number;
  /** Caractères qui forcent l'UCS-2. */
  offenders: string[];
}

export function smsSegments(text: string): SegmentInfo {
  let gsm = true;
  let units = 0;
  const offenders = new Set<string>();
  for (const c of text) {
    if (GSM_BASIC.includes(c)) units += 1;
    else if (GSM_EXT.includes(c)) units += 2;
    else {
      gsm = false;
      offenders.add(c);
    }
  }
  if (gsm) {
    const segments = units === 0 ? 0 : units <= 160 ? 1 : Math.ceil(units / 153);
    return { encoding: "GSM-7", units, segments, perSegment: segments > 1 ? 153 : 160, offenders: [] };
  }
  const u = text.length; // unités UTF-16 : un émoji en compte deux
  const segments = u <= 70 ? 1 : Math.ceil(u / 67);
  return { encoding: "UCS-2", units: u, segments, perSegment: segments > 1 ? 67 : 70, offenders: [...offenders] };
}
