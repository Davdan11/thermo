/* ==================================================================
   Chantier A — ouvrir un brouillon dans l'outil habituel, AU CLIC du
   propriétaire (jamais envoyé avec la page, jamais envoyé à Anthropic) :
   - courriel : lien mailto: vers l'adresse du client (objet et texte) ;
   - texto : la conversation existante dans Textos, sinon le lien sms:
     (comme le bouton « Texto » de la fiche).
   Rien n'est envoyé ici : c'est le propriétaire qui envoie.
   AUCUNE vérification d'accès : l'action appelante fait requireAdmin().
   ================================================================== */

import { loadCrmIndex } from "../crm/service";

export async function draftHref(clientId: string, canal: "texto" | "courriel", objet: string, texte: string): Promise<string | null> {
  const c = (await loadCrmIndex()).byId.get(clientId);
  if (!c) return null;
  if (canal === "courriel") {
    const email = c.b.emails[0];
    return email ? `mailto:${email}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(texte)}` : null;
  }
  const conv = c.b.textos[0];
  if (conv) return `/gestion/textos/${conv.id}`;
  const phone = c.b.phones[0];
  return phone ? `sms:${phone}?body=${encodeURIComponent(texte)}` : null;
}
