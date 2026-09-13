/* ==================================================================
   Catalogue des automatisations (page /gestion/automatisations) : ce
   que fait chacune, pour qui, par quel canal, à quel moment.
   ================================================================== */

import type { AutomationId } from "./types";

export type AutomationGroup = "argent" | "installation" | "apres-vente" | "proprietaire";

export interface AutomationDef {
  id: AutomationId;
  group: AutomationGroup;
  label: string;
  audience: "Client" | "Installateur" | "Propriétaire";
  channels: string;
  when: string;
  description: string;
}

export const GROUP_LABELS: Record<AutomationGroup, string> = {
  argent: "L’argent",
  installation: "Avant et pendant l’installation",
  "apres-vente": "Après l’installation",
  proprietaire: "Pour vous",
};

export const AUTOMATIONS: AutomationDef[] = [
  {
    id: "facture-commission",
    group: "argent",
    label: "Facture de commission",
    audience: "Installateur",
    channels: "Courriel",
    when: "Le lendemain de la fin du chantier, 8 h",
    description: "Pourcentage réglable du sous-total de la soumission acceptée, après rabais et avant taxes. L’aide LogisVert n’y entre jamais. Sans soumission liée : une tâche vous le signale.",
  },
  {
    id: "relance-facture",
    group: "argent",
    label: "Relances des factures",
    audience: "Installateur",
    channels: "Courriel et texto",
    when: "7 et 14 jours après l’émission, 9 h",
    description: "Rappel d’échéance puis avis de retard. En retard, l’installateur ne reçoit plus d’offres de jobs jusqu’au paiement ; la pause se lève dès que la facture est payée.",
  },
  {
    id: "rappel-veille",
    group: "installation",
    label: "Rappel la veille de l’installation",
    audience: "Client",
    channels: "Courriel et texto",
    when: "La veille, à partir de 16 h (au plus tard 21 h)",
    description: "Date, heure d’arrivée, quoi préparer (accès, stationnement, panneau électrique) et un lien « Un problème ? Changer la date » qui vous alerte aussitôt.",
  },
  {
    id: "sondage",
    group: "apres-vente",
    label: "Sondage de satisfaction",
    audience: "Client",
    channels: "Courriel et texto",
    when: "8 h après la fin du chantier (la nuit : 9 h le lendemain)",
    description: "Une note de 1 à 5 en un clic et un commentaire. Séparé de la demande d’avis Google, qui part à tous les clients.",
  },
  {
    id: "alerte-proprietaire",
    group: "proprietaire",
    label: "Alertes au propriétaire",
    audience: "Propriétaire",
    channels: "Courriel et texto",
    when: "Dès la réponse du client",
    description: "Note de 3 ou moins, problème signalé, changement de date, entretien demandé, aide LogisVert : alerte immédiate et tâche « rappeler le client » (la tâche est toujours créée).",
  },
  {
    id: "avis-google",
    group: "apres-vente",
    label: "Demande d’avis Google",
    audience: "Client",
    channels: "Courriel (robot des avis)",
    when: "5 jours après la fin du chantier",
    description: "À TOUS les clients, sans égard à leur note (Google interdit de filtrer). Jamais deux fois pour la même adresse ; jamais à une adresse désabonnée.",
  },
  {
    id: "dossier-logisvert",
    group: "apres-vente",
    label: "Dossier LogisVert",
    audience: "Client",
    channels: "Courriel et texto",
    when: "Le lendemain de la fin du chantier, 10 h",
    description: "Comment faire la demande à Hydro-Québec, avec les modèles, la référence AHRI, les numéros de série et le montant officiel prévu. L’aide est versée au client.",
  },
  {
    id: "suivi-logisvert",
    group: "apres-vente",
    label: "Suivi LogisVert",
    audience: "Client",
    channels: "Courriel et texto",
    when: "« Demande faite ? » à 10 et 24 jours ; « Reçue ? » 45 et 75 jours après la demande",
    description: "Réponse du client en un clic ; statut visible dans sa fiche et à l’accueil. « Besoin d’aide » vous alerte.",
  },
  {
    id: "garantie",
    group: "apres-vente",
    label: "Enregistrement de garantie",
    audience: "Client",
    channels: "Courriel et texto",
    when: "2 jours après la fin du chantier, 10 h",
    description: "Seulement quand la fiche de la marque indique que la garantie doit être enregistrée ; sinon, rien ne part.",
  },
  {
    id: "entretien",
    group: "apres-vente",
    label: "Entretien annuel",
    audience: "Client",
    channels: "Courriel et texto",
    when: "12 mois après l’installation, 10 h",
    description: "Rappel au client et tâche « proposer l’entretien » : une nouvelle occasion pour l’installateur.",
  },
  {
    id: "reference",
    group: "apres-vente",
    label: "Programme de référence",
    audience: "Client",
    channels: "Courriel",
    when: "Le lendemain d’une note de 4 ou 5, 10 h",
    description: "Lien personnel suivi par l’attribution des demandes. La récompense se règle ici ; vide, aucune récompense n’est mentionnée.",
  },
  {
    id: "resume-matin",
    group: "proprietaire",
    label: "Résumé du matin",
    audience: "Propriétaire",
    channels: "Courriel et texto",
    when: "Chaque jour, 7 h",
    description: "Tâches du jour, installations du jour, paiements en retard, soumissions chaudes.",
  },
  {
    id: "rapport-hebdo",
    group: "proprietaire",
    label: "Rapport hebdomadaire",
    audience: "Propriétaire",
    channels: "Courriel et texto",
    when: "Le lundi, 7 h 30",
    description: "Demandes, installations, factures, paiements reçus et en retard, satisfaction, LogisVert, références ; bilan : ce qui a marché, ce qui bloque, quoi faire (rédigé par l’assistant IA quand la clé Anthropic existe, sinon par règles).",
  },
  // Refonte R2.
  {
    id: "alerte-etape",
    group: "proprietaire",
    label: "Alertes de délais du pipeline",
    audience: "Propriétaire",
    channels: "Texto",
    when: "Délai d’alerte de l’étape dépassé, tâche restée ouverte (1 h par défaut) ; jamais pendant les heures silencieuses",
    description: "« Client prêt depuis 6 h, aucun installateur », « Contrat prêt à signer depuis 48 h »… Une tâche apparaît d’abord dans À faire ; le texto ne part que si elle reste ouverte. Un seul avis par dossier et par étape, trois au plus par passage. Délais et étapes réglables dans Réglages → Étapes du parcours.",
  },
];

export const automationDef = (id: AutomationId) => AUTOMATIONS.find((a) => a.id === id)!;
