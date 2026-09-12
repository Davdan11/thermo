import Link from "next/link";
import type { CSSProperties } from "react";
import { ConsentLink } from "@/components/analytics/ConsentBanner";
import { getActiveBrandCount, getEligibleModelCount } from "@/lib/data/queries/stats";
import { getLogisVertListInfo } from "@/lib/subsidies/logisvert-meta";
import { BackToTop, FooterCount, FooterStage } from "./footer/FooterClient";
import { FooterWordmark } from "./footer/FooterWordmark";
import "./footer/footer.css";

/* ==================================================================
   Footer — Thermopompes À Vendre.ca
   Rendu au serveur (il est sur toutes les pages) ; seules les parties
   animées sont de petites îles client (footer/FooterClient.tsx et
   footer/FooterWordmark.tsx). Fond d'encre, texte crème, accents orange :
   1. appel final (titre, téléphone, pastille ThermoMatch) ;
   2. bande de chiffres réels (catalogue, liste LogisVert) ;
   3. marque et colonnes de liens ;
   4. mentions légales, retour en haut, puis la signature géante.
   ================================================================== */

const NAV = [
  {
    title: "Explorer",
    links: [
      { href: "/thermopompes/thermopompe-murale", label: "Thermopompes murales" },
      { href: "/thermopompes/thermopompe-multizone", label: "Thermopompes multi zones" },
      { href: "/thermopompes/thermopompe-centrale", label: "Thermopompes centrales" },
      { href: "/meilleures-thermopompes", label: "Meilleures thermopompes" },
      { href: "/thermopompe", label: "Thermopompe par ville" },
      { href: "/comparer", label: "Comparer les modèles" },
      { href: "/soumission", label: "Trouver un installateur" },
      { href: "/rendez-vous", label: "Prendre rendez-vous" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/thermoscan", label: "ThermoScan : identifier mon appareil" },
      { href: "/guides", label: "Guides et conseils" },
      { href: "/subventions", label: "Aides financières" },
      { href: "/subventions/logisvert", label: "LogisVert par marque" },
      { href: "/prix", label: "Prix : notre approche" },
      { href: "/calculateur-economies", label: "Calculatrice d’économies" },
      { href: "/glossaire", label: "Glossaire" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/carriere", label: "Carrières" },
      { href: "/contact", label: "Contact" },
      { href: "/partenaires", label: "Devenir partenaire" },
      { href: "/espace-installateur", label: "Espace installateur" },
    ],
  },
] as const;

const LEGAL: { href: string; label: string; tag?: string }[] = [
  { href: "/confidentialite", label: "Confidentialité", tag: "Loi 25" },
  { href: "/conditions", label: "Conditions d’utilisation" },
  { href: "/accessibilite", label: "Accessibilité" },
];

const NB = " "; // espace insécable (avant « : », « ; », « ? », « ! »)
const PHONE = "438-900-3224";

/** Rang dans la cascade d'apparition (délai calculé en CSS). */
const at = (i: number) => ({ "--i": i }) as CSSProperties;

function Arrow() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

type Figure = { key: string; label: string; count?: number; text?: string };

/** Chiffres réels seulement : une valeur introuvable n'est pas affichée. */
function getFigures(): Figure[] {
  const eligible = getEligibleModelCount();
  const brands = getActiveBrandCount();
  const lv = getLogisVertListInfo();
  const figures: Figure[] = [];
  if (eligible > 0) figures.push({ key: "modeles", count: eligible, label: "modèles admissibles" });
  if (brands > 0) figures.push({ key: "marques", count: brands, label: "marques au Québec" });
  if (lv.count) figures.push({ key: "jumelages", count: lv.count, label: "jumelages sur la liste LogisVert" });
  if (lv.listDate) figures.push({ key: "liste", text: lv.listDate, label: "date de la liste d’Hydro-Québec" });
  return figures;
}

export function Footer() {
  const year = new Date().getFullYear();
  const figures = getFigures();

  return (
    <FooterStage className="ft">
      {/* Arête haute : le filet orange se trace d'un bord à l'autre à l'arrivée du pied de page. */}
      <div data-rv="" aria-hidden="true" className="ft-edge-wrap">
        <span className="ft-edge" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* 1. Appel final : titre à gauche, téléphone et pastille à droite (en premier sur mobile). */}
        <div data-rv="" className="grid gap-10 pb-12 pt-16 sm:pt-20 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-20 lg:pt-28">
          <div className="lg:col-span-7">
            <p className="ft-caps ft-rv flex items-center gap-3" style={at(0)}>
              <span className="ft-tick" aria-hidden="true" />
              {`Une thermopompe en tête${NB}?`}
            </p>
            <h2 className="ft-title">
              <span className="ft-line" style={at(0)}>
                <span>Trouvez la bonne thermopompe.</span>
              </span>
              <span className="ft-line" style={at(1)}>
                <span>Au bon calibre.</span>
              </span>
              <span className="ft-line" style={at(2)}>
                <span className="ft-serif ft-accent">Pour votre maison.</span>
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:col-span-5 lg:justify-self-end">
            <p className="ft-caps ft-rv" style={at(2)}>
              Parlez-nous de votre maison
            </p>
            <a href="tel:4389003224" aria-label={`Appeler le ${PHONE}`} className="ft-phone ft-rv" style={at(3)}>
              <span className="ft-roll">
                <span>{PHONE}</span>
                <span aria-hidden="true">{PHONE}</span>
              </span>
            </a>
            <a href="mailto:info@thermopompesavendre.ca" className="ft-link ft-mail ft-rv" style={at(4)}>
              <span>info@thermopompesavendre.ca</span>
            </a>
            <div className="ft-rv mt-8" style={at(5)}>
              <Link href="/trouver-ma-thermopompe" className="ft-pill">
                <span className="ft-roll">
                  <span>Trouver ma thermopompe</span>
                  <span aria-hidden="true">Trouver ma thermopompe</span>
                </span>
                <span className="ft-knob" aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Chiffres réels, calculés au rendu à partir du catalogue et de la liste officielle. */}
        {figures.length > 0 && (
          <div data-rv="" className="ft-figs">
            <div className="ft-figs-head ft-rv" style={at(0)}>
              <p className="ft-caps">Le catalogue, en chiffres</p>
              <p className="ft-body">Fiches publiées du catalogue et liste LogisVert d’Hydro-Québec.</p>
            </div>
            <dl className="ft-figs-list" style={{ "--n": figures.length } as CSSProperties}>
              {figures.map((f, n) => (
                <div key={f.key} className="ft-fig ft-rv" style={at(n + 1)}>
                  <dt>{f.label}</dt>
                  <dd>{f.count != null ? <FooterCount value={f.count} /> : <span className="ft-serif">{f.text}</span>}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* 3. La marque, puis les trois colonnes de liens. */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_0.85fr] lg:gap-x-12 lg:py-20">
          <div data-rv="" className="col-span-2 lg:col-span-1">
            <Link href="/" className="ft-rv inline-block" style={at(0)}>
              <img
                src="/images/headerlogo-720-creme.webp"
                alt="Thermopompes À Vendre.ca — Accueil"
                width={168}
                height={56}
                loading="lazy"
                decoding="async"
                style={{ width: 168, height: 56, maxWidth: "none", display: "block" }}
              />
            </Link>
            <p className="ft-body ft-rv mt-6" style={at(1)}>
              La plateforme de comparaison de thermopompes la plus fiable au Québec.
            </p>
            <div className="ft-rv mt-8" style={at(2)}>
              <p className="ft-caps" style={{ color: "var(--ft-cream)" }}>
                Partout au Québec
              </p>
              <p className="ft-body mt-3">Nous desservons toutes les régions du Québec avec notre réseau d’installateurs certifiés.</p>
            </div>
          </div>

          {NAV.map((section, k) => (
            <nav key={section.title} aria-label={section.title} data-rv="" className={k === NAV.length - 1 ? "col-span-2 lg:col-span-1" : undefined}>
              <p className="ft-coltitle ft-rv" style={at(0)}>
                <span className="ft-serif ft-idx" aria-hidden="true">
                  0{k + 1}
                </span>
                {section.title}
              </p>
              <ul className={k === NAV.length - 1 ? "ft-list ft-list-duo" : "ft-list"}>
                {section.links.map((link, j) => (
                  <li key={link.href} className="ft-rv" style={at(j + 1)}>
                    <Link href={link.href} className="ft-link">
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* 4. Mentions légales et retour en haut ; leur défilement encre la signature. */}
      <FooterWordmark>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div data-rv="" className="ft-legal">
            <p className="ft-small ft-rv m-0" style={at(0)}>
              © {year} Thermopompes À Vendre.ca Tous droits réservés.
            </p>
            <div className="ft-legal-row ft-rv" style={at(1)}>
              <nav aria-label="Mentions légales">
                <ul className="ft-legal-row m-0 p-0" style={{ listStyle: "none" }}>
                  {LEGAL.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="ft-link ft-small">
                        <span>{l.label}</span>
                        {l.tag ? <span className="ft-tag">{l.tag}</span> : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <ConsentLink style={{ color: "var(--ft-soft)", fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase" }} />
            </div>
            <div className="ft-rv" style={at(2)}>
              <BackToTop className="ft-top" />
            </div>
          </div>
        </div>
      </FooterWordmark>
    </FooterStage>
  );
}
