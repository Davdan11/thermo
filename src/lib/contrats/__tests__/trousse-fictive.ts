/* Conformité C1 — données FICTIVES des tests : une trousse courte (même structure que la vraie, aucun de ses textes),
   une identité de plateforme complète et de quoi les écrire dans le dossier temporaire du test (GESTION_DATA_DIR). */
import { emptyPlatformIdentity, savePlatformIdentity, type PlatformIdentity } from "@/lib/plateforme/identite";
import { parseTrousse, saveTrousse } from "@/lib/plateforme/trousse";

/** Trousse fictive : avis 3.1 (consigne, deux phrases, case), contrat 3.2 (identification, paiement, annulation, quatre confirmations). */
export const TROUSSE_FICTIVE = [
  "TROUSSE DE TEST",
  "VERSION DE TRAVAIL 9.9",
  "1 janvier 2026",
  "## 3  Textes clients",
  "### 3.1  Avis fictif",
  "Consigne interne du test",
  "Ce document fictif est une estimation préparée par [RAISON SOCIALE DE LA PLATEFORME], sans engagement.",
  "Pour retirer votre accord, écrivez à [COURRIEL].",
  "Case obligatoire du test",
  "☐  Je demande le jumelage fictif et j’ai lu l’avis de test.",
  "### 3.2  Contrat fictif",
  "Consigne du modèle fictif.",
  "#### Identification",
  "Entrepreneur-vendeur",
  "Client",
  "[RAISON SOCIALE INSTALLATEUR][ADRESSE]NEQ [NEQ]",
  "Intermédiaire fictif : [RAISON SOCIALE DE LA PLATEFORME], [COORDONNÉES].",
  "#### Paiement",
  "Le client paie [INSTALLATEUR] selon l’échéancier du test.",
  "#### Annulation",
  "Écrire à [COURRIEL DE L’INSTALLATEUR] ou à [ADRESSE] pour annuler (test).",
  "#### Confirmations du Client",
  "☐  J’ai reçu l’identité de l’entrepreneur (test).",
  "☐  J’ai pu corriger mes renseignements (test).",
  "☐  Je comprends que [INSTALLATEUR] est l’entrepreneur et [PLATEFORME] l’intermédiaire (test).",
  "☐  J’autorise les travaux décrits (test).",
  "Nom du Client  [NOM TAPÉ]     Signature  [PREUVE]",
].join("\n");

export const IDENTITE_FICTIVE: PlatformIdentity = {
  ...emptyPlatformIdentity(),
  legalName: "Plateforme Exemple inc.",
  legalForm: "Société par actions",
  tradeName: "ThermopompesAVendre.ca",
  neq: "1234567890",
  address: "1, rue Exemple, Laval (Québec) H0H 0H0",
  phone: "514 555-0100",
  emailLegal: "juridique@exemple.ca",
  emailService: "service@exemple.ca",
  emailPrivacy: "vieprivee@exemple.ca",
  privacyOfficer: { name: "Alex Exemple", title: "Président", email: "vieprivee@exemple.ca", phone: "" },
  representative: { name: "Alex Exemple", title: "Président" },
};

/** Écrit la trousse fictive et l'identité complète dans le dossier du test. */
export async function seedPlateforme(o: { trousse?: string; identity?: Partial<PlatformIdentity> } = {}): Promise<void> {
  await saveTrousse(parseTrousse(o.trousse ?? TROUSSE_FICTIVE), "test", new Date("2026-09-01T12:00:00Z"));
  const id = { ...IDENTITE_FICTIVE, ...(o.identity ?? {}) };
  const { updatedAt: _a, updatedBy: _b, ...patch } = id;
  void _a;
  void _b;
  await savePlatformIdentity(patch, "test", new Date("2026-09-01T12:00:00Z"));
}
