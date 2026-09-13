/* ==================================================================
   « Trouver un client » dans le créateur de soumissions : recherche
   instantanée dans les clients unifiés du CRM (nom, téléphone,
   courriel, ville), puis pré-remplissage des coordonnées du client
   choisi. Serveur seulement.

   Confidentialité : la liste de résultats ne contient que le nom, la
   ville, l'étape et les 4 derniers chiffres du téléphone (10 résultats
   au plus). Les coordonnées complètes ne partent que pour le client
   cliqué, dans le formulaire du propriétaire.
   AUCUNE vérification d'accès ici : les actions passent par
   requireAdmin().
   ================================================================== */

import { last4 } from "@/lib/gestion/crm/identity";
import { displayName, type CrmIndex } from "@/lib/gestion/crm/model";
import { clientPrefill, loadCrmIndex, matchesClient } from "@/lib/gestion/crm/service";
import { STAGE_SHORT } from "@/lib/gestion/crm/types";
import { createLimiter } from "@/lib/gestion/rate-limit";

export const CLIENT_SEARCH_LIMIT = 10;

/** Recherche instantanée : 60 requêtes par minute et par session. */
export const quoteClientSearchLimiter = createLimiter({ limit: 60, windowMs: 60_000 });

export interface QuoteClientHit {
  id: string;
  name: string;
  city: string;
  /** 4 derniers chiffres du téléphone, jamais le numéro complet. */
  last4: string;
  stage: string;
}

export interface QuoteClientPrefill {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

/* Chantier V : `scoped` (index restreint d'un vendeur, equipe/scope.ts) → seulement ses clients. */
export async function searchQuoteClients(q: string, scoped?: CrmIndex): Promise<QuoteClientHit[]> {
  const s = q.trim().slice(0, 80);
  if (s.length < 2) return [];
  const index = scoped ?? (await loadCrmIndex());
  return index.clients
    .filter((c) => matchesClient(c, s))
    .sort((a, b) => b.b.lastAt.localeCompare(a.b.lastAt))
    .slice(0, CLIENT_SEARCH_LIMIT)
    .map((c) => ({ id: c.b.id, name: displayName(c.b), city: c.b.city, last4: last4(c.b.phones[0]), stage: STAGE_SHORT[c.stage.stage] }));
}

/** Coordonnées d'UN client, pour le formulaire de la soumission. */
export async function quoteClientPrefill(id: string, scoped?: CrmIndex): Promise<QuoteClientPrefill | null> {
  const p = await clientPrefill(id, scoped); // Chantier V
  if (!p) return null;
  return { id: p.id, firstName: p.firstName, lastName: p.lastName, email: p.email, phone: p.phone, address: p.address, city: p.city, postalCode: p.postalCode };
}
