/* Conformité C2 — données FICTIVES des tests : identité inventée et trousse inventée qui a la même forme que la vraie
   (titres, consignes, cases, tableau, liste, avis entre guillemets). Aucun texte de la vraie trousse ici. */
import { emptyPlatformIdentity, savePlatformIdentity, type PlatformIdentity } from "@/lib/plateforme/identite";
import { parseTrousse, saveTrousse } from "@/lib/plateforme/trousse";

export const IDENTITE: PlatformIdentity = {
  ...emptyPlatformIdentity(),
  legalName: "Entreprise Fictive SENC",
  legalForm: "Société en nom collectif",
  neq: "1234567890",
  address: "1, rue Imaginaire, Laval (Québec) H0H 0H0",
  phone: "514 555-0100",
  emailLegal: "juridique@fictif.ca",
  emailService: "service@fictif.ca",
  emailPrivacy: "vieprivee@fictif.ca",
  privacyOfficer: { name: "Camille Fictive", title: "Présidente", email: "vieprivee@fictif.ca", phone: "" },
  representative: { name: "Camille Fictive", title: "Présidente" },
};

export const TROUSSE_FICTIVE = [
  "TROUSSE FICTIVE",
  "VERSION DE TRAVAIL 9.9",
  "1 janvier 2030",
  "## 3  Textes",
  "### 3.1  Jumelage fictif",
  "Consigne pour le rédacteur",
  "Intitulé fictif  Premier paragraphe d’avis inventé pour les essais.",
  "Deuxième paragraphe inventé : écrire à [COURRIEL] pour retirer l’accord.",
  "Consigne fictive du jumelage",
  "☐  Je demande le jumelage fictif de [RAISON SOCIALE DE LA PLATEFORME].",
  "## 4  Politique fictive",
  "Politique fictive datée du [DATE D’ENTRÉE EN VIGUEUR]",
  "### 4.1  Qui",
  "Site imaginaire tenu par [RAISON SOCIALE DE LA PLATEFORME] (NEQ [NEQ]).",
  "### 4.2  Responsable",
  "Responsable fictif : [NOM OU TITRE] ([COURRIEL]).",
  "### 4.3  Tableau",
  "Colonne A",
  "Colonne B",
  "Ligne un",
  "Valeur un.",
  "Ligne deux",
  "Valeur deux.",
  "### 4.4  Liste",
  "premier point;",
  "deuxième point;",
  "dernier point.",
  "### 4.10  Durées",
  "Dossier",
  "Durée",
  "Prospect fictif",
  "24 mois fictifs.",
  "Paragraphe final inventé qui clôt le tableau.",
  "## 5  Messages",
  "### 5.1  Avis sous le formulaire",
  "Consigne fictive de l’avis",
  "En envoyant, j’accepte des messages fictifs de [RAISON SOCIALE DE LA PLATEFORME].",
  "### 5.2  Rappels",
  "Consigne fictive des rappels",
  "☐  J’accepte deux rappels fictifs de [RAISON SOCIALE DE LA PLATEFORME]. [COORDONNÉES ET LIEN POLITIQUE]",
  "### 5.3  Après",
  "Consigne fictive des offres",
  "☐  J’accepte des offres fictives de [RAISON SOCIALE DE LA PLATEFORME]. [ADRESSE POSTALE]  [COURRIEL]  [LIEN POLITIQUE]",
  "Note inventée pour le programmeur, jamais affichée aux visiteurs.",
  "### 5.5  Pied",
  "Pied fictif pour [TYPE DE MESSAGES] ; expéditeur [RAISON SOCIALE] ([ADRESSE POSTALE]) ; lien [LIEN FONCTIONNEL EN UN CLIC] ; [COURRIEL] ou [TÉLÉPHONE].",
  "## 6  Appels",
  "### 6.2  Entrant",
  "« Avis fictif de [RAISON SOCIALE]. Pour refuser, faites le 2 ou dites-le. »",
  "### 6.3  Sortant",
  "« Ici [NOM] de [RAISON SOCIALE], avis fictif. D’accord? »",
  "## 7  Programme fictif",
  "Règles inventées",
  "### 7.1  Organisateur",
  "Organisateur fictif : [RAISON SOCIALE DE LA PLATEFORME] ([ADRESSE]), à partir du [DATE].",
  "### 7.3  Récompense",
  "Récompense de [MONTANT ET FORME], limite [NOMBRE OU MONTANT] par année.",
].join("\n");

export const trousseFictive = () => ({ ...parseTrousse(TROUSSE_FICTIVE), importedAt: null, importedBy: null });
export const CTX = { identity: IDENTITE, siteUrl: "https://exemple.ca" };

/** Trousse et identité fictives dans le dossier de gestion courant (GESTION_DATA_DIR) : le mode C2 s'active. */
export async function installerTrousseFictive(): Promise<void> {
  await saveTrousse(parseTrousse(TROUSSE_FICTIVE), "tests");
  await savePlatformIdentity(IDENTITE, "tests");
}
