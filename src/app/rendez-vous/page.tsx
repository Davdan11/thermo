import type { Metadata } from "next";
import { createMetadata, SITE_URL } from "@/lib/seo";
import BookingClient from "./BookingClient";

export const metadata: Metadata = createMetadata({
  title: "Prendre rendez-vous avec un conseiller — Thermopompes À Vendre.ca",
  description:
    "Réservez en ligne un appel, une rencontre Google Meet ou une visite à domicile avec un conseiller. Gratuit, sans engagement, confirmation immédiate.",
  alternates: { canonical: "/rendez-vous" },
  robots: { index: true, follow: true },
});

const FAQ = [
  { q: "Quelle est la différence entre les trois formats ?", a: "L'appel téléphonique (30 minutes) sert à cadrer votre projet. La rencontre en ligne sur Google Meet (45 minutes) permet de comparer des modèles à l'écran avec le conseiller. La visite à domicile (environ 90 minutes) est une évaluation complète sur place : mesures, panneau électrique, emplacement des unités." },
  { q: "Est-ce gratuit ?", a: "Oui. Les trois formats sont gratuits et sans engagement. Vous recevez ensuite une soumission écrite pour votre maison précise." },
  { q: "Dans quels secteurs la visite est-elle offerte ?", a: "Montréal, Laval, Rive-Nord, Rive-Sud et Lanaudière. Ailleurs au Québec, choisissez l'appel ou la rencontre en ligne." },
  { q: "Comment modifier ou annuler ?", a: "Répondez au courriel de confirmation ou appelez le 438-900-3224 en mentionnant votre numéro de référence." },
];

export default function RendezVousPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/rendez-vous#page`,
        url: `${SITE_URL}/rendez-vous`,
        name: "Prendre rendez-vous avec un conseiller",
        inLanguage: "fr-CA",
        potentialAction: {
          "@type": "ScheduleAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/rendez-vous`, actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"] },
          object: { "@type": "Service", name: "Rendez-vous gratuit avec un conseiller : appel, Google Meet ou visite à domicile" },
        },
      },
      { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BookingClient faq={FAQ} />
    </>
  );
}
