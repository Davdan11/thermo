/* Avis courriel au propriétaire (NOTIFICATION_EMAIL, expéditeur habituel du site) pour les textos reçus.
   Hors production, rien ne part sauf si TEXTOS_ENVOIS_DEV=1 (voir twilio-send.ts). */

import { sendInternalMessage } from "@/lib/crm/email";
import { SITE_URL } from "@/lib/seo";
import { formatPhone } from "./phone";
import { liveSendsAllowed } from "./twilio-send";

export interface OwnerDigest {
  conversationId: string;
  phone: string;
  place?: string;
  /** Messages reçus depuis le dernier avis (au moins 1). */
  count: number;
  /** Les derniers, au plus 5. */
  messages: Array<{ body: string; media: number }>;
}

export function conversationUrl(id: string): string {
  return `${SITE_URL}/gestion/textos/${id}`;
}

export async function emailOwnerDigest(d: OwnerDigest): Promise<boolean> {
  const number = formatPhone(d.phone);
  const subject = d.count > 1 ? `${d.count} nouveaux textos de ${number}` : `Nouveau texto de ${number}`;
  if (!liveSendsAllowed()) {
    console.log(`[textos] avis courriel non envoyé (développement) : ${subject}`);
    return false;
  }
  const lines: Array<[string, string]> = [["Numéro", d.place ? `${number} (${d.place})` : number]];
  const shown = d.messages.slice(-5);
  shown.forEach((m, i) => {
    const label = shown.length > 1 ? `Message ${i + 1}` : "Message";
    const media = m.media ? ` [${m.media} pièce${m.media > 1 ? "s" : ""} jointe${m.media > 1 ? "s" : ""}]` : "";
    lines.push([label, `${m.body || "(sans texte)"}${media}`]);
  });
  if (d.count > shown.length) lines.push(["Autres", `${d.count - shown.length} message(s) plus ancien(s) dans la conversation`]);
  return sendInternalMessage({
    kind: "texto",
    subject,
    lines,
    links: [["Ouvrir la conversation et répondre", conversationUrl(d.conversationId)]],
  });
}
