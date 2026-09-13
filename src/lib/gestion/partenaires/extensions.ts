/* ==================================================================
   Points d'extension de la fiche de performance, remplis par le
   volet B (argent et automatisations). Tant qu'ils renvoient null, la
   fiche affiche « à venir » et les niveaux ne s'en servent pas.

   Contrat attendu :
     paymentStats(installerId)      → délai de paiement des commissions
     satisfactionStats(installerId) → sondage de satisfaction des clients
   ================================================================== */

export interface PaymentStats {
  /** Factures de commission émises. */
  invoices: number;
  /** Payées. */
  paid: number;
  /** En retard (échéance dépassée, non payées). */
  late: number;
  /** Délai médian entre l'émission et le paiement, en jours ; null sans facture payée. */
  medianDaysToPay: number | null;
}

export interface SatisfactionStats {
  /** Réponses au sondage. */
  answers: number;
  /** Note moyenne sur 5 ; null sans réponse. */
  average: number | null;
  /** Réponses à 1 ou 2 sur 5. */
  unhappy: number;
}

/** Volet B : remplacer le corps par la lecture des factures de commission. */
export async function paymentStats(installerId: string): Promise<PaymentStats | null> {
  void installerId;
  return null;
}

/** Volet B : remplacer le corps par la lecture des sondages de satisfaction. */
export async function satisfactionStats(installerId: string): Promise<SatisfactionStats | null> {
  void installerId;
  return null;
}
