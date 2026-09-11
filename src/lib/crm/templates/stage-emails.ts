/* ==================================================================
   Courriels clients envoyés automatiquement quand une affaire change
   d'étape dans Pipedrive (pipelines Ventes, Installation, Service).

   Chaque gabarit reçoit le contexte de l'affaire (prénom, projet,
   région, modèle proposé…) et renvoie sujet + HTML. Les étapes sont
   reconnues par leur NOM normalisé, pas par leur identifiant, pour
   survivre à une réorganisation du pipeline. Aucun chiffre inventé :
   les montants et dates viennent de l'affaire ou ne sont pas cités.
   ================================================================== */
import { brandedEmail, box, p, strong, t, ul, SITE_URL, BRAND } from "./layout";

export interface DealEmailContext {
  firstName: string;
  projectType?: string;
  region?: string;
  sqft?: string;
  brand?: string;
  series?: string;
  btu?: string;
  subsidy?: string;
  installDate?: string;
  installer?: string;
  advisorName?: string;
}

export interface RenderedEmail {
  subject: string;
  html: string;
}

type Template = (c: DealEmailContext) => RenderedEmail;

/** Nom d'étape → clé de gabarit (comparaison sans accents ni ponctuation). */
export function normalizeStageName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function projet(c: DealEmailContext): string {
  return box("Votre projet", [
    ["Type", c.projectType],
    ["Région", c.region],
    ["Superficie", c.sqft ? `${c.sqft} pi²` : undefined],
    ["Modèle proposé", [c.brand, c.series].filter(Boolean).join(" ") || undefined],
    ["Capacité", c.btu ? `${c.btu} BTU` : undefined],
    ["Subvention LogisVert estimée", c.subsidy ? `${c.subsidy} $` : undefined],
  ]);
}

function wrap(c: DealEmailContext, subject: string, preheader: string, body: string, cta?: { label: string; href: string }, secondary?: { label: string; href: string }): RenderedEmail {
  return { subject, html: brandedEmail({ title: subject, preheader, firstName: c.firstName, body, cta, secondary, advisorName: c.advisorName }) };
}

const CALL = { label: "Nous appeler au 438-900-3224", href: BRAND.phoneHref };

/* ------------------------------------------------------------------
   1. VENTES
   ------------------------------------------------------------------ */
const tentativeContact1: Template = (c) =>
  wrap(c, "Nous avons tenté de vous joindre", "Un conseiller a essayé de vous appeler pour votre projet de thermopompe.",
    p(`Un conseiller a essayé de vous joindre au sujet de votre demande de thermopompe, sans succès. Rien de grave : on réessaie dès que possible.`) +
    p(`Pour aller plus vite, répondez à ce courriel avec le moment qui vous convient le mieux (matin, après-midi ou soir) et le numéro où vous joindre. Vous pouvez aussi nous appeler directement.`) +
    projet(c),
    CALL, { label: "Revoir mes recommandations ThermoMatch", href: `${SITE_URL}/trouver-ma-thermopompe` });

const tentativeContact2: Template = (c) =>
  wrap(c, "Deuxième tentative : votre dossier reste ouvert", "On n'a pas réussi à vous joindre. Dites-nous quand vous appeler.",
    p(`Nous avons tenté de vous appeler une deuxième fois, toujours sans réponse. Votre dossier reste ouvert, mais nous ne voulons pas vous déranger si le moment est mal choisi.`) +
    p(`Si votre projet tient toujours, répondez simplement à ce courriel avec un créneau ; si vous préférez qu'on ferme le dossier, dites-le-nous et nous le ferons sans insister.`) +
    projet(c),
    CALL);

const qualifieAttenteRdv: Template = (c) =>
  wrap(c, "Votre dossier est qualifié : prochaine étape, le rendez-vous", "Votre projet est admissible. On planifie l'appel ou la visite avec vous.",
    p(`Bonne nouvelle : après notre échange, votre projet est ${strong("qualifié")}. La prochaine étape est un rendez-vous avec votre conseiller pour préciser le calibre, l'emplacement des unités et la subvention LogisVert applicable.`) +
    p(`Vous recevrez une confirmation dès que la date est fixée. D'ici là, voici ce qui aide à préparer la rencontre :`) +
    ul([
      `une photo de votre ${t("panneau électrique")} (porte ouverte) ;`,
      `l'emplacement souhaité de l'unité extérieure et des unités intérieures ;`,
      `votre dernière facture d'Hydro-Québec, pour estimer les économies.`,
    ]) +
    projet(c),
    undefined, CALL);

const rdvConfirme: Template = (c) =>
  wrap(c, "Votre rendez-vous est confirmé", "Votre conseiller vous contacte au moment convenu.",
    p(`Votre rendez-vous avec un conseiller ${strong("est confirmé")}. Il vous contactera au moment convenu pour passer votre projet en revue.`) +
    p(`Si un empêchement survient, répondez à ce courriel ou appelez-nous : on déplace le rendez-vous sans problème.`) +
    projet(c),
    undefined, CALL);

const soumissionEnvoyee: Template = (c) =>
  wrap(c, "Votre soumission est prête", "Le prix installé de votre thermopompe, subvention déduite.",
    p(`Votre ${strong("soumission")} vous a été transmise. Elle détaille l'équipement proposé, l'installation, les garanties et le montant LogisVert applicable à ce jumelage précis.`) +
    p(`Prenez le temps de la lire. Trois choses à vérifier avant de comparer avec une autre offre :`) +
    ul([
      `que la capacité certifiée ${strong("à -15 °C")} est indiquée, pas seulement la capacité nominale ;`,
      `que la subvention est calculée sur le numéro de modèle exact du jumelage ;`,
      `que le panneau électrique, l'appoint et les conduits sont inclus ou clairement exclus.`,
    ]) +
    p(`Des questions ? Répondez à ce courriel, votre conseiller vous rappelle.`) +
    projet(c),
    { label: "Comprendre ma soumission", href: `${SITE_URL}/prix` }, CALL);

const negociationRelance: Template = (c) =>
  wrap(c, "Des questions sur votre soumission ?", "On reste disponible pour ajuster la proposition.",
    p(`Votre soumission est entre vos mains depuis quelques jours. Si un point vous fait hésiter, le calibre, la marque, le financement ou le moment de l'installation, dites-le-nous : la proposition peut être ajustée.`) +
    p(`Si vous avez reçu une autre offre, nous pouvons la comparer point par point avec vous, sans pression.`) +
    projet(c),
    CALL, { label: "Comparer des modèles côte à côte", href: `${SITE_URL}/comparer` });

/* ------------------------------------------------------------------
   2. INSTALLATION & OPÉRATIONS
   ------------------------------------------------------------------ */
const contratSigne: Template = (c) =>
  wrap(c, "Merci pour votre confiance, voici la suite", "Votre projet passe à l'installation. Les étapes, dans l'ordre.",
    p(`Merci d'avoir choisi ${strong(BRAND.name)}. Votre projet passe maintenant à l'équipe d'installation. Voici ce qui va se passer :`) +
    ul([
      `${strong("Commande de l'équipement")} : vous serez avisé quand il est reçu.`,
      `${strong("Date d'installation")} : fixée avec vous selon les disponibilités de l'installateur.`,
      `${strong("Installation")} : une journée dans la plupart des cas pour une murale, davantage pour une centrale ou un multizone.`,
      `${strong("Subvention LogisVert")} : la demande est faite après l'installation, avec les documents de l'installateur.`,
    ]) +
    projet(c),
    undefined, CALL);

const materielCommande: Template = (c) =>
  wrap(c, "Votre équipement est commandé", "L'unité est réservée. Prochaine étape : la date d'installation.",
    p(`Votre ${strong("équipement est commandé")}${c.brand ? ` (${t([c.brand, c.series].filter(Boolean).join(" "))})` : ""}. Dès qu'il est reçu, nous fixons avec vous la date d'installation.`) +
    p(`Pour préparer la journée : dégagez l'accès au mur intérieur et à l'emplacement extérieur, et prévoyez que le courant soit coupé une partie de la journée pour le raccordement électrique.`) +
    projet(c),
    undefined, CALL);

const dateInstallationFixee: Template = (c) =>
  wrap(c, c.installDate ? `Installation planifiée le ${c.installDate}` : "Votre date d'installation est fixée", "Voici comment préparer la journée d'installation.",
    p(`Votre installation est planifiée${c.installDate ? ` le ${strong(c.installDate)}` : ""}${c.installer ? `, par ${t(c.installer)}` : ""}. Une personne majeure doit être présente sur place.`) +
    p(`La veille, pensez à :`) +
    ul([
      `libérer l'espace devant le mur où sera fixée l'unité intérieure ;`,
      `dégager l'emplacement extérieur (neige, végétation, objets) ;`,
      `prévoir l'accès au panneau électrique.`,
    ]) +
    projet(c),
    undefined, CALL);

const installationEnCours: Template = (c) =>
  wrap(c, "Jour d'installation", "L'équipe est en route. Ce qui se passe aujourd'hui.",
    p(`C'est le jour de l'installation. L'installateur fixe les unités, passe la tuyauterie, fait le vide du circuit, raccorde l'électricité et met l'appareil en marche devant vous.`) +
    p(`Avant son départ, demandez-lui de vous montrer le mode chauffage, le nettoyage des filtres et l'emplacement du disjoncteur. Le rapport de mise en service sert à la demande LogisVert.`),
    undefined, CALL);

const travauxTermines: Template = (c) =>
  wrap(c, "Installation terminée : vos premiers gestes", "Comment tirer le meilleur de votre nouvelle thermopompe.",
    p(`Votre thermopompe est ${strong("installée et en marche")}. Quelques habitudes qui font la différence sur la facture et la durée de vie :`) +
    ul([
      `${strong("Filtres")} : rincer les filtres de l'unité murale toutes les deux à quatre semaines en saison de chauffage.`,
      `${strong("Consigne")} : garder une température stable plutôt que de monter et descendre ; la thermopompe est plus efficace en régime continu.`,
      `${strong("Unité extérieure")} : la garder dégagée de la neige et de la glace, sans la couvrir.`,
      `${strong("Appoint")} : par très grand froid, vos plinthes ou votre fournaise peuvent prendre le relais, c'est normal.`,
    ]) +
    p(`Conservez la facture et le rapport d'installation : ils sont nécessaires pour la subvention et la garantie.`) +
    projet(c),
    { label: "Lire nos guides d'entretien", href: `${SITE_URL}/guides` }, CALL);

const subventionEnAttente: Template = (c) =>
  wrap(c, "Votre demande LogisVert est en traitement", "Ce qu'Hydro-Québec vérifie et ce qu'il vous reste à faire.",
    p(`La demande de subvention ${strong("LogisVert")} pour votre installation${c.subsidy ? `, d'un montant estimé de ${strong(`${c.subsidy} $`)},` : ""} est en traitement. Hydro-Québec vérifie le jumelage exact des unités, la facture et la conformité de l'installation.`) +
    p(`Si Hydro-Québec vous demande un document, faites-nous suivre le courriel : nous vous aidons à répondre. Le versement arrive après l'approbation, selon les délais du programme.`) +
    projet(c),
    { label: "Comment fonctionne LogisVert", href: `${SITE_URL}/subventions` }, CALL);

const facturePayee: Template = (c) =>
  wrap(c, "Merci, votre dossier est complet", "Tout est réglé. On reste là pour l'entretien et vos questions.",
    p(`Votre facture est réglée et votre dossier est ${strong("complet")}. Merci pour votre confiance.`) +
    p(`Si votre expérience a été bonne, un mot à un voisin ou un proche qui hésite est la meilleure recommandation que nous puissions recevoir. Et si quelque chose n'a pas été à la hauteur, dites-le-nous d'abord : nous corrigeons.`) +
    p(`Nous reprendrons contact dans un mois pour vérifier que tout fonctionne, puis avant l'entretien annuel.`),
    undefined, CALL);

/* ------------------------------------------------------------------
   3. SERVICE & MAINTENANCE
   ------------------------------------------------------------------ */
const suiviQualite30j: Template = (c) =>
  wrap(c, "Un mois avec votre thermopompe : tout va bien ?", "Trois questions rapides sur votre confort et votre appareil.",
    p(`Cela fait environ un mois que votre thermopompe est installée. Trois questions, en répondant simplement à ce courriel :`) +
    ul([
      `Le confort est-il au rendez-vous dans les pièces visées ?`,
      `Le bruit intérieur et extérieur est-il acceptable ?`,
      `Avez-vous une question sur le fonctionnement ou la télécommande ?`,
    ]) +
    p(`Un doute, un bruit inhabituel, un code d'erreur ? Appelez-nous : la garantie couvre ces premiers ajustements.`),
    undefined, CALL);

const rappelEntretien12m: Template = (c) =>
  wrap(c, "Votre entretien annuel approche", "Un entretien par an garde la garantie et l'efficacité.",
    p(`Votre thermopompe a environ un an. Un ${strong("entretien annuel")} par un technicien garde l'efficacité de l'appareil et, chez la plupart des fabricants, une condition de la garantie.`) +
    ul([
      `nettoyage de l'échangeur intérieur et des filtres ;`,
      `vérification de la charge de fluide et des raccords ;`,
      `nettoyage de l'unité extérieure et contrôle du drain.`,
    ]) +
    p(`Répondez à ce courriel pour planifier l'entretien, nous vous proposons des dates.`),
    CALL);

/* ------------------------------------------------------------------
   Affaire perdue (statut « lost »)
   ------------------------------------------------------------------ */
const affairePerdue: Template = (c) =>
  wrap(c, "On garde votre dossier sous la main", "Si votre projet revient, tout est déjà prêt.",
    p(`Nous comprenons que le moment n'est pas le bon, ou que vous avez fait un autre choix. Merci d'avoir considéré ${strong(BRAND.name)}.`) +
    p(`Votre dossier reste accessible : si votre projet revient dans les prochains mois, un appel suffit pour reprendre là où nous en étions, avec les montants LogisVert à jour.`) +
    projet(c),
    undefined, { label: "Voir les meilleures thermopompes 2026", href: `${SITE_URL}/meilleures-thermopompes` });

/** Gabarits par nom d'étape normalisé (voir normalizeStageName). */
export const STAGE_TEMPLATES: Record<string, Template> = {
  "tentative de contact 1": tentativeContact1,
  "tentative de contact 2": tentativeContact2,
  "qualifie en attente rdv": qualifieAttenteRdv,
  "rdv confirme": rdvConfirme,
  "soumission envoyee": soumissionEnvoyee,
  "negociation relance": negociationRelance,
  "a planifier contrat signe": contratSigne,
  "materiel commande": materielCommande,
  "date d installation fixee": dateInstallationFixee,
  "installation en cours": installationEnCours,
  "travaux termines": travauxTermines,
  "subvention logisvert en attente": subventionEnAttente,
  "facture payee": facturePayee,
  "suivi qualite 30 jours": suiviQualite30j,
  "rappel entretien 12 mois": rappelEntretien12m,
};

export const LOST_TEMPLATE: Template = affairePerdue;

/** Gabarit pour un nom d'étape Pipedrive, ou null si l'étape n'envoie rien (ex. « Nouveau lead », déjà couvert à la création). */
export function templateForStage(stageName: string): Template | null {
  return STAGE_TEMPLATES[normalizeStageName(stageName)] ?? null;
}
