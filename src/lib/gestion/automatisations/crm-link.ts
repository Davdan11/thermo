/* ==================================================================
   Pont vers le CRM (phase 1) pour les automatisations : tâches créées
   au nom de « automatisation » et client d'un job. Chargé à la demande
   (import dynamique) : le moteur ne lit l'index du CRM que s'il en a
   besoin. Injectable dans les tests.
   ================================================================== */

export interface CrmDeps {
  addTask(t: { clientId: string | null; title: string; dueAt: Date }): Promise<void>;
  clientIdForJob(jobId: string): Promise<string | null>;
}

export const crmDeps: CrmDeps = {
  async addTask(t) {
    const crm = await import("../crm/service");
    const r = await crm.addTask(t, "automatisation");
    // Client introuvable (fiche fusionnée entre-temps) : la tâche est gardée, sans client.
    if (!r.ok && t.clientId) await crm.addTask({ ...t, clientId: null }, "automatisation");
  },
  async clientIdForJob(jobId) {
    const crm = await import("../crm/service");
    return (await crm.freshIndex()).byJob.get(jobId) ?? null;
  },
};
