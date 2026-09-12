import type { Metadata } from "next";
import { createMetadata, getFaqPageSchema } from "@/lib/seo";
import FAQPageClient from "./FaqClient";
import { FAQ_ITEMS } from "./faqData";

export const metadata: Metadata = createMetadata({
  title: `FAQ thermopompe : questions fréquentes au Québec`,
  description:
    `Réponses aux questions les plus fréquentes sur les thermopompes : fonctionnement, BTU, SEER2, HSPF2, prix, subventions, installation et entretien au Québec.`,
  canonicalPath: "/faq",
  robots: { index: true, follow: true },
});

export default function FaqPage() {
  const allQuestions = FAQ_ITEMS.flatMap((cat) =>
    cat.questions.map((q) => ({ question: q.q, answer: q.a }))
  );
  const faqSchema = getFaqPageSchema(allQuestions);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
