"use client";

import { useState } from "react";
import { MecanismeHero } from "@/components/heroes-v2/outils/MecanismeHero";
import { ManualSections } from "@/components/sections-v2/outils/mecanisme/ManualSections";

/* ==============================================================
   /technologie-thermomatch : héros « Le mécanisme » (planche 01),
   puis la suite du manuel technique (planches 02 à 09), dans
   components/sections-v2/outils/mecanisme.
   ============================================================== */

/* ==============================================================
   FAQ Data
   ============================================================== */

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "ThermoMatch remplace-t-il un conseiller?",
    answer: "Non. ThermoMatch vous aide à comprendre et à comparer les options. Les détails finaux du projet sont ensuite validés avant la proposition et l'installation.",
  },
  {
    id: "faq-2",
    question: "D'où viennent les données?",
    answer: "Thermopompes À Vendre tire les capacités de chauffage à -15 °C, les COP, HSPF2, SEER2 et les montants de subvention de la liste officielle LogisVert d'Hydro-Québec, bâtie sur les appariements certifiés AHRI et ENERGY STAR. Chaque recommandation cite la référence AHRI de l'appariement et la date de la liste utilisée. Quand une donnée n'est pas certifiée, nous l'indiquons comme estimée.",
  },
  {
    id: "faq-3",
    question: "Puis-je modifier mes réponses?",
    answer: "Oui. Vous pouvez revenir sur vos critères et actualiser vos résultats sans recommencer tout le parcours.",
  },
  {
    id: "faq-4",
    question: "Est-ce gratuit?",
    answer: "Oui. L'utilisation de ThermoMatch et la demande de proposition sont gratuites et sans engagement.",
  },
];

/* ==============================================================
   MAIN COMPONENT
   ============================================================== */

export function ThermoMatchTechClient({ modelCount }: { modelCount: number }) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Planche 01 — Héros « Le mécanisme » : schéma éclaté du tri du catalogue */}
      <MecanismeHero modelCount={modelCount} />

      {/* Planches 02 à 09 — critères, données, séquence, climat, décision, projet, questions, mise en service */}
      <ManualSections modelCount={modelCount} faq={FAQ_ITEMS} openFaq={openFaq} onToggleFaq={toggleFaq} />
    </>
  );
}
