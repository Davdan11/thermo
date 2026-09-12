/* ==================================================================
   « Prix : notre approche » — contenu partagé par /prix et /prix/[slug].

   Le site publie des fourchettes par type et calibre, pas de prix par machine : des dizaines de milliers d'appareils admissibles,
   des prix qui bougent avec les stocks et la saison, et un coût installé
   qui dépend d'abord de la maison. On documente ce qui fait varier le
   prix, ce qu'une soumission complète doit contenir, et comment un
   installateur partenaire licencié remet un prix écrit, cas par cas.

   Le contenu vit ici ; la mise en page suit la direction artistique de
   la page : « reçu » sur /prix, « étiquette » sur /prix/[slug]
   (src/components/sections-v2/prix/).
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import { getEligibleModelCount } from "@/lib/data/queries/stats";
import { ApprocheRecu } from "@/components/sections-v2/prix/ApprocheRecu";
import { ApprocheEtiquette } from "@/components/sections-v2/prix/ApprocheEtiquette";

const nbAppareils = () => getEligibleModelCount().toLocaleString("fr-CA");

export const PRIX_FAQ: Array<{ q: string; a: string }> = [
  {
    q: "Pourquoi des fourchettes plutôt qu'un prix par machine?",
    a: `Parce qu'un prix installé dépend de votre maison autant que de la machine : distance entre les unités, panneau électrique, conduits, accès. Avec plus de ${nbAppareils()} appareils admissibles dont les prix changent selon les stocks et la saison, un prix par modèle serait faux quelques semaines plus tard. Nous publions donc les fourchettes que le marché québécois documente, par type, calibre et gamme, avec leurs sources et leur date, et un prix écrit remis après évaluation.`,
  },
  {
    q: "Comment obtenir un prix pour ma maison?",
    a: "Répondez au questionnaire ThermoMatch ou demandez directement une soumission. Nous transmettons votre dossier à un installateur partenaire licencié RBQ de votre région, qui évalue votre maison et vous remet un prix écrit, installation et subvention LogisVert incluses. C'est gratuit et sans engagement.",
  },
  {
    q: "Que doit contenir une soumission sérieuse?",
    a: "Le modèle exact des unités extérieure et intérieure avec leur numéro AHRI, la main-d'œuvre et le matériel d'installation, les travaux électriques, la mise en service, la garantie du fabricant et celle de l'installateur, le montant LogisVert du jumelage exact et un échéancier.",
  },
  {
    q: "La subvention LogisVert est-elle déduite du prix?",
    a: "Le montant LogisVert est fixé par Hydro-Québec pour chaque jumelage certifié : Thermopompes À Vendre l'affiche sur chaque fiche. Il est versé après l'installation par un entrepreneur licencié, selon les conditions du programme. Une soumission complète l'indique clairement, séparément du prix.",
  },
];

export function getPrixFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PRIX_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

const FACTORS = [
  ["La capacité et le type d'appareil", "Une murale 9 000 BTU et une centrale 36 000 BTU ne demandent ni le même matériel ni le même temps de pose."],
  ["La distance entre les unités", "Chaque mètre de ligne frigorifique et de câblage s'ajoute, et une longue course peut exiger un modèle plus puissant."],
  ["Le panneau électrique", "Un panneau saturé ou un circuit dédié à ajouter change le devis du maître électricien."],
  ["Les conduits et l'existant", "Pour une centrale, l'état des conduits et de la fournaise à remplacer pèse davantage que la machine."],
  ["L'accès et la pose", "Support mural ou au sol, hauteur, murs de maçonnerie, drain de condensat : autant de variables propres à votre maison."],
  ["La région et la saison", "Les délais et les tarifs des installateurs varient d'une région à l'autre et avec la demande de la haute saison."],
  ["La garantie réellement offerte", "Deux soumissions au même prix ne se valent pas si l'une inclut cinq ans de main-d'œuvre et l'autre rien."],
] as const;

const INCLUS = [
  "Le modèle exact des unités extérieure et intérieure, avec le numéro AHRI du jumelage",
  "La main-d'œuvre et le matériel d'installation : ligne frigorifique, support, drain, isolation",
  "Les travaux électriques par un maître électricien, disjoncteur et circuit dédié",
  "La mise en service, les tests et l'explication du fonctionnement",
  "La garantie du fabricant et la garantie de main-d'œuvre de l'installateur",
  "Le montant LogisVert du jumelage exact, indiqué séparément",
  "L'échéancier d'installation et les conditions de paiement",
];

const ETAPES = [
  ["Vous décrivez votre maison", "ThermoMatch retient trois machines réellement adaptées, avec leurs données certifiées."],
  ["Nous transmettons votre dossier", "À un installateur partenaire licencié RBQ de votre région. Nous restons votre interlocuteur ; vos coordonnées ne sont jamais vendues."],
  ["Vous recevez un prix écrit", "Après évaluation de votre maison : équipement, installation, électricité, garantie et LogisVert, noir sur blanc. Gratuit et sans engagement."],
] as const;

export function PrixApproche({ keyword = "une thermopompe", variant = "recu" }: { keyword?: string; variant?: "recu" | "etiquette" }) {
  const data = {
    keyword,
    count: nbAppareils(),
    countValue: getEligibleModelCount(),
    factors: FACTORS,
    inclus: INCLUS,
    etapes: ETAPES,
    faq: PRIX_FAQ,
    site: SITE_URL.replace("https://", ""),
  };
  return variant === "etiquette" ? <ApprocheEtiquette {...data} /> : <ApprocheRecu {...data} />;
}
