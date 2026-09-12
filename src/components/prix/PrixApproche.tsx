/* ==================================================================
   « Prix : notre approche » — contenu partagé par /prix et /prix/[slug].

   Le site publie des fourchettes par type et calibre, pas de prix par machine : des dizaines de milliers d'appareils admissibles,
   des prix qui bougent avec les stocks et la saison, et un coût installé
   qui dépend d'abord de la maison. On documente ce qui fait varier le
   prix, ce qu'une soumission complète doit contenir, et comment un
   installateur partenaire licencié remet un prix écrit, cas par cas.
   ================================================================== */

import Link from "next/link";
import { SITE_URL } from "@/lib/seo";
import { getEligibleModelCount } from "@/lib/data/queries/stats";

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
    a: "Le montant LogisVert est fixé par Hydro-Québec pour chaque jumelage certifié : nous l'affichons sur chaque fiche. Il est versé après l'installation par un entrepreneur licencié, selon les conditions du programme. Une soumission complète l'indique clairement, séparément du prix.",
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
];

export function PrixApproche({ keyword = "une thermopompe" }: { keyword?: string }) {
  return (
    <div style={{ color: "#172126" }}>
      {/* Pourquoi pas de prix */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em", margin: "0 0 16px" }}>Pourquoi nous n&apos;affichons pas un prix unique</h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: "#3d4a53", margin: "0 0 14px" }}>
          Plus de {nbAppareils()} appareils sont admissibles à LogisVert. Leurs prix bougent avec les stocks, la saison et les promotions des
          distributeurs : un tableau de prix pour {keyword} serait faux quelques semaines après sa publication.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: "#3d4a53", margin: "0 0 14px" }}>
          Surtout, le prix installé dépend de votre maison au moins autant que de la machine. C&apos;est pourquoi nous publions des fourchettes par type et par calibre, jamais un prix par machine :
          chaque projet reçoit un prix écrit, remis par un installateur partenaire licencié après évaluation, cas par cas.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#536873", margin: 0 }}>
          Ce que nous publions, ce sont les données certifiées : capacité réelle à -15 °C, rendement SEER2 et HSPF2, et le montant LogisVert
          officiel de chaque jumelage.
        </p>
      </section>

      {/* Facteurs */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em", margin: "0 0 20px" }}>Ce qui fait varier le prix installé</h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
          {FACTORS.map(([t, d], i) => (
            <li key={t} style={{ display: "flex", gap: 16, padding: "16px 18px", background: "#fff", border: "1px solid #E5E5E5", borderRadius: 6 }}>
              <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 4, background: "#0C1821", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>
                {i + 1}
              </span>
              <div>
                <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 16 }}>{t}</p>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#536873" }}>{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#536873", margin: "16px 0 0" }}>
          Pour aller plus loin :{" "}
          <Link href="/guides/ce-qui-influence-le-prix-installe" style={{ color: "#e54b17", fontWeight: 600 }}>
            ce qui influence le prix installé
          </Link>{" "}
          et{" "}
          <Link href="/subventions/logisvert" style={{ color: "#e54b17", fontWeight: 600 }}>
            la subvention LogisVert par marque
          </Link>
          .
        </p>
      </section>

      {/* Contenu d'une soumission */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em", margin: "0 0 16px" }}>Ce qu&apos;une soumission complète doit inclure</h2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
          {INCLUS.map((t) => (
            <li key={t} style={{ display: "flex", gap: 12, fontSize: 16, lineHeight: 1.55, color: "#3d4a53" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#536873", margin: "16px 0 0" }}>
          Une soumission qui ne détaille pas ces éléments n&apos;est pas comparable à une autre. Le prix le plus bas au téléphone est rarement le
          moins cher une fois installé.
        </p>
      </section>

      {/* Notre rôle */}
      <section style={{ marginBottom: 40, background: "#0C1821", color: "#fff", borderRadius: 8, padding: "28px 24px" }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.01em", margin: "0 0 20px", color: "#fff" }}>Comment ça se passe avec nous</h2>
        <ol style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 16 }}>
          {ETAPES.map(([t, d], i) => (
            <li key={t} style={{ display: "flex", gap: 14 }}>
              <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: "#e54b17", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>
                {i + 1}
              </span>
              <div>
                <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 16 }}>{t}</p>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link href="/trouver-ma-thermopompe" style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", background: "#e54b17", color: "#fff", borderRadius: 4, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Trouver ma thermopompe
          </Link>
          <Link href="/soumission" style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", borderRadius: 4, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            Demander une soumission
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em", margin: "0 0 16px" }}>Questions fréquentes</h2>
        <div style={{ display: "grid", gap: 8 }}>
          {PRIX_FAQ.map((f) => (
            <details key={f.q} style={{ background: "#fff", border: "1px solid #E5E5E5", borderRadius: 6, padding: "14px 18px" }}>
              <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 16 }}>{f.q}</summary>
              <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.65, color: "#3d4a53" }}>{f.a}</p>
            </details>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#6B7280", margin: "20px 0 0" }}>
          Source des données techniques et des montants LogisVert : liste officielle des appareils admissibles d&apos;Hydro-Québec, ENERGY STAR.
          Site : {SITE_URL.replace("https://", "")}.
        </p>
      </section>
    </div>
  );
}
