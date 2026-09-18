/* ==================================================================
   /dev/cartes-froid — aperçu de développement : trois dessins possibles
   de la zone « froid » des cartes ThermoMatch.

   La carte entière est montrée, à sa vraie taille, avec de vraies
   données (un passage du moteur, donnees-carte.ts) : c'est le seul
   moyen de juger si la zone du froid tient sa place à côté du score,
   de la photo, des chiffres certifiés et du bouton.

   Sert à faire choisir : la carte en production n'est pas touchée.
   Répond 404 dès que NODE_ENV n'est pas « development » (next build /
   next start fixent toujours NODE_ENV=production).
   ================================================================== */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { techMono } from "@/components/heroes-v2/produit/fonts-mono";
import { displayFont, serifFont } from "@/lib/fonts";
import { R } from "@/app/trouver-ma-thermopompe/_components/palette";
import { VarianteCote, VarianteFicheSignaletique, VarianteLigneDeCote, type FroidProps } from "@/app/trouver-ma-thermopompe/_components/froid-variantes";
import { CarteComplete } from "./CarteComplete";
import { cartesDeLApercu, SANS_RIEN, SOURCE_SECONDAIRE, type CarteVue } from "./donnees-carte";

export const metadata: Metadata = {
  title: "Zone « froid » des cartes ThermoMatch (développement)",
  robots: { index: false, follow: false },
};

const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const MONO = 'var(--font-tech-mono), ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';
const SERIF = "var(--font-serif), serif";

type Variante = { id: string; lettre: string; nom: string; idee: string; Composant: (p: FroidProps) => React.ReactNode };

const VARIANTES: Variante[] = [
  {
    id: "a",
    lettre: "A",
    nom: "La cote",
    idee: "Typographie seule : pas un filet, pas un aplat, pas une couleur. Une étiquette minuscule, puis le nombre — le plus grand caractère de la carte, plus grand que le nom de la marque — et la source. C'est l'air autour qui isole la zone.",
    Composant: VarianteCote,
  },
  {
    id: "b",
    lettre: "B",
    nom: "La ligne de cote",
    idee: "Un dessin technique : lignes d'attache, ligne de cote fléchée de 0 °C à la température publiée, valeur écrite au-dessus, règle graduée au degré dessous. Du trait, rien d'autre ; la cote reste ouverte quand la limite n'est pas publiée.",
    Composant: VarianteLigneDeCote,
  },
  {
    id: "c",
    lettre: "C",
    nom: "La plaque signalétique",
    idee: "Une plaque en travers de la carte : aplat crème d'un bord à l'autre, angles vifs, filet en haut et filet en bas. Dedans, la grammaire d'un tableau de spécifications — étiquette à gauche, valeur à droite, filets d'un cheveu.",
    Composant: VarianteFicheSignaletique,
  },
];

function Lettre({ v, sous }: { v: Variante; sous?: string }) {
  return (
    <p className="uppercase" style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.2em", color: R.faint, margin: "0 0 12px" }}>
      <span style={{ color: R.orangeText }}>{v.lettre}</span> — {v.nom}
      {sous ? <span style={{ textTransform: "none", letterSpacing: "0.02em" }}> · {sous}</span> : null}
    </p>
  );
}

function TitreSection({ titre, note }: { titre: string; note: string }) {
  return (
    <div style={{ borderTop: `1px solid ${R.line}`, paddingTop: 22 }}>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, margin: 0 }}>{titre}</h2>
      <p className="text-[14px] leading-relaxed" style={{ color: R.mute, margin: "10px 0 0", maxWidth: "70ch" }}>
        {note}
      </p>
    </div>
  );
}

/** Cadre qui rejoue les marges intérieures d'une carte : les variantes pleine largeur (C) s'y comportent pareil. */
function CadreZone({ children }: { children: React.ReactNode }) {
  return (
    /* paddingTop : la plaque pleine largeur (C) ne doit pas venir buter dans les coins arrondis du cadre. */
    <div className="overflow-hidden rounded-[28px] px-6 sm:px-7" style={{ background: R.card, border: `1px solid ${R.line}`, paddingTop: 22, paddingBottom: 22 }}>
      {children}
    </div>
  );
}

export default function ApercuCartesFroid() {
  if (process.env.NODE_ENV !== "development") notFound();

  const cartes: CarteVue[] = cartesDeLApercu();
  const vedette = cartes[0];

  return (
    <main
      className={`${techMono.variable} ${displayFont.variable} ${serifFont.variable}`}
      style={{ background: R.paper, color: R.ink, fontFamily: DISPLAY, colorScheme: "light", paddingBottom: 90 }}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 pt-12 sm:px-6">
        <p className="uppercase" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.2em", color: R.faint, margin: 0 }}>
          ThermoMatch — aperçu
        </p>
        <h1 style={{ fontSize: "clamp(36px, 5.4vw, 72px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.98, margin: "18px 0 0", maxWidth: "14em" }}>
          La température du grand froid, <span style={{ fontFamily: SERIF, fontStyle: "italic" }}>dessinée trois fois.</span>
        </h1>
        <p className="text-[15px] leading-relaxed" style={{ color: R.mute, margin: "20px 0 0", maxWidth: "62ch" }}>
          Même machine, mêmes chiffres, mêmes phrases : seule la mise en forme change. Le panneau crème arrondi, sa barre
          dégradée et son gros chiffre orange sont remplacés par de l’édition ou de l’ingénierie. Les cartes sont entières
          et à leur vraie taille ; scores, raisons, montant LogisVert et ordre de grandeur viennent d’un vrai passage du
          moteur (maison de 2 000 à 2 500 pi², deux étages, fournaise au gaz avec conduits). Aucune variante n’est branchée
          en production.
        </p>
      </div>

      {/* 1. Gros plan sur les trois zones, à côté les unes des autres. */}
      <section id="gros-plan" className="mx-auto w-full max-w-[1320px] px-4 pt-14 sm:px-6">
        <TitreSection
          titre="Gros plan sur la zone du froid"
          note={`La seule partie qui change, agrandie, sur la même machine (${vedette.brand} ${vedette.series}, température publiée par le fabricant).`}
        />
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {VARIANTES.map((v) => (
            <div key={v.id}>
              <Lettre v={v} />
              <CadreZone>
                <v.Composant {...vedette.froid} />
              </CadreZone>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Les trois cartes entières, côte à côte. */}
      <section id="cartes-cote-a-cote" className="mx-auto w-full max-w-[1320px] px-4 pt-20 sm:px-6">
        <TitreSection
          titre="Les trois cartes entières, côte à côte"
          note="La carte complète telle qu’elle apparaît dans les résultats : étiquette, score, marque, zone du froid, photo, unités, étiquettes de tête, chiffres certifiés, ordre de grandeur, raisons et bouton."
        />
        <div className="mt-8 grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
          {VARIANTES.map((v) => (
            <div key={v.id}>
              <Lettre v={v} />
              <CarteComplete carte={vedette} froid={<v.Composant {...vedette.froid} />} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Les trois cartes entières, empilées : chaque carte sert aussi de capture individuelle. */}
      <section id="cartes-empilees" className="mx-auto w-full max-w-[478px] px-4 pt-20 sm:px-6">
        <TitreSection titre="Les mêmes, empilées" note="L’une au-dessus de l’autre, à la largeur d’une colonne de résultats : la différence se voit d’un coup d’œil, même sur un téléphone." />
        <div className="mt-8 space-y-10 lg:max-w-[430px]">
          {VARIANTES.map((v) => (
            <div key={v.id} id={`carte-${v.id}`}>
              <Lettre v={v} />
              <CarteComplete carte={vedette} froid={<v.Composant {...vedette.froid} />} />
            </div>
          ))}
        </div>
      </section>

      {/* 3 bis. Les trois hauts de carte, serrés l'un sur l'autre : la comparaison la plus rapide. */}
      <section id="cartes-empilees-hauts" className="mx-auto w-full max-w-[478px] px-4 pt-20 sm:px-6">
        <TitreSection titre="Les trois hauts de carte, l’un sur l’autre" note="La carte est coupée juste après la zone du froid : d’un seul regard, on voit ce qui change." />
        <div className="mt-8 space-y-6 lg:max-w-[430px]">
          {VARIANTES.map((v) => (
            <div key={v.id}>
              <Lettre v={v} />
              {/* Coupe après la zone du froid : le reste de la carte est identique d'une variante à l'autre.
                  Le fondu de quelques dizaines de pixels dit que la carte continue, au lieu d'un couperet en
                  plein milieu d'une ligne de texte. */}
              <div className="relative overflow-hidden" style={{ maxHeight: 470 }}>
                <CarteComplete carte={vedette} froid={<v.Composant {...vedette.froid} />} />
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0" style={{ height: 64, background: `linear-gradient(to bottom, rgba(255,255,255,0), ${R.card})` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Les autres cas de données, zone seule. */}
      <section id="autres-cas" className="mx-auto w-full max-w-[1320px] px-4 pt-20 sm:px-6">
        <TitreSection
          titre="Les autres cas"
          note="Une température venue d’un distributeur, une machine certifiée sans température publiée, et une machine dont rien n’est publié : chaque variante doit tenir les quatre cas sans jamais avancer un chiffre."
        />
        {VARIANTES.map((v) => (
          <div key={v.id} className="mt-10">
            <Lettre v={v} />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              <CadreZone>
                <p className="uppercase" style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.18em", color: R.faint, margin: "14px 0 -8px" }}>
                  Sharp AE-X24ZU1 — source secondaire
                </p>
                <v.Composant {...SOURCE_SECONDAIRE} />
              </CadreZone>
              <CadreZone>
                <p className="uppercase" style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.18em", color: R.faint, margin: "14px 0 -8px" }}>
                  {cartes[2].brand} {cartes[2].outdoor} — certifiée, sans température
                </p>
                <v.Composant {...cartes[2].froid} />
              </CadreZone>
              <CadreZone>
                <p className="uppercase" style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.18em", color: R.faint, margin: "14px 0 -8px" }}>
                  Cas limite — rien de publié
                </p>
                <v.Composant {...SANS_RIEN} />
              </CadreZone>
            </div>
          </div>
        ))}
      </section>

      {/* Ce que chaque variante essaie de faire, en une phrase. */}
      <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 sm:px-6">
        <TitreSection titre="Le parti pris de chacune" note="En une phrase, pour trancher." />
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {VARIANTES.map((v) => (
            <div key={v.id} style={{ borderTop: `1px solid ${R.ink}`, paddingTop: 14 }}>
              <p style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.03em", margin: 0 }}>
                <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.18em", color: R.orangeText, marginRight: 10, verticalAlign: "0.18em" }}>{v.lettre}</span>
                <span style={{ fontFamily: SERIF, fontStyle: "italic" }}>{v.nom}</span>
              </p>
              <p className="text-[14px] leading-relaxed" style={{ color: R.mute, margin: "12px 0 0" }}>
                {v.idee}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
