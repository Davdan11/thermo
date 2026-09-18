/* ==================================================================
   /dev/cartes-froid — aperçu de développement : trois dessins possibles
   de la zone « froid » des cartes ThermoMatch, avec de vraies machines.

   Sert à faire choisir : la carte en production n'est pas touchée.
   Répond 404 dès que NODE_ENV n'est pas « development » (next build /
   next start fixent toujours NODE_ENV=production).
   ================================================================== */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { techMono } from "@/components/heroes-v2/produit/fonts-mono";
import { displayFont, serifFont } from "@/lib/fonts";
import { OMBRE, R } from "@/app/trouver-ma-thermopompe/_components/palette";
import { VarianteCote, VarianteFicheSignaletique, VarianteLigneDeCote, type FroidProps } from "@/app/trouver-ma-thermopompe/_components/froid-variantes";
import { MACHINES, SANS_RIEN, type MachineApercu } from "./machines";

export const metadata: Metadata = {
  title: "Zone « froid » des cartes ThermoMatch (développement)",
  robots: { index: false, follow: false },
};

const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const MONO = 'var(--font-tech-mono), ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';

type Variante = { id: string; lettre: string; nom: string; idee: string; Composant: (p: FroidProps) => React.ReactNode };

const VARIANTES: Variante[] = [
  {
    id: "variante-a",
    lettre: "A",
    nom: "La cote",
    idee: "Typographie seule : filet de tête, étiquette en capitales espacées, le nombre posé sur la marge de la carte, un trait orange de sa largeur, la source dessous. Aucun panneau, aucune jauge.",
    Composant: VarianteCote,
  },
  {
    id: "variante-b",
    lettre: "B",
    nom: "La ligne de cote",
    idee: "Le froid coté comme sur un plan : ligne de cote de 0 °C à la température publiée, graduations au degré, repère sur la valeur, échelle en pointillé au-delà. Trait seulement, aucun remplissage.",
    Composant: VarianteLigneDeCote,
  },
  {
    id: "variante-c",
    lettre: "C",
    nom: "La fiche signalétique",
    idee: "La plaque vissée sur la machine : étiquette à gauche, valeur à droite, filets d'un cheveu, la température en gros sur la première ligne. Aucune boîte.",
    Composant: VarianteFicheSignaletique,
  },
];

/** Le haut de la carte de résultat, tel quel : c'est le voisinage dans lequel la zone froid doit tenir. */
function Carte({ machine, children, top = false }: { machine: MachineApercu; children: React.ReactNode; top?: boolean }) {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-[28px]"
      style={{ background: R.card, color: R.ink, border: `1px solid ${R.line}`, boxShadow: OMBRE }}
    >
      <div className="px-6 pt-6 sm:px-7 sm:pt-7">
        <span
          className="inline-block rounded-full px-3.5 py-1.5 text-[11.5px] font-bold uppercase"
          style={{ letterSpacing: "0.14em", background: top ? R.orange : "transparent", color: top ? "#fff" : R.ink, border: top ? "none" : `1px solid ${R.hair}` }}
        >
          {machine.badge}
        </span>
        <h3 style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: "20px 0 0" }}>{machine.brand}</h3>
        <p className="text-[14px] font-medium" style={{ color: R.mute, margin: "8px 0 0" }}>
          Série {machine.series}
        </p>
      </div>

      <div className="px-6 pt-5 sm:px-7">{children}</div>

      <div className="mt-auto px-6 pb-7 pt-6 sm:px-7">
        <dl className="grid gap-1.5" style={{ margin: 0 }}>
          {[
            ["Dehors", machine.outdoor],
            ["Dedans", machine.indoor],
          ].map(([l, v]) => (
            <div key={l} className="flex items-baseline gap-3">
              <dt className="w-[64px] shrink-0 text-[10.5px] font-bold uppercase" style={{ letterSpacing: "0.14em", color: R.dim }}>
                {l}
              </dt>
              <dd className="min-w-0 text-[14px] font-medium" style={{ color: R.ink, margin: 0, overflowWrap: "anywhere" }}>
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

function TitreVariante({ v }: { v: Variante }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_520px] lg:items-end">
      <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
        <span style={{ fontFamily: MONO, fontSize: "0.34em", letterSpacing: "0.18em", color: R.orangeText, verticalAlign: "0.9em", marginRight: "0.7em" }}>
          VARIANTE {v.lettre}
        </span>
        <span className="tm-serif" style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic" }}>
          {v.nom}
        </span>
      </h2>
      <p className="text-[14px] leading-relaxed" style={{ color: R.mute, margin: 0 }}>
        {v.idee}
      </p>
    </div>
  );
}

export default function ApercuCartesFroid() {
  if (process.env.NODE_ENV !== "development") notFound();

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
          La température du grand froid, dessinée trois fois.
        </h1>
        <p className="text-[15px] leading-relaxed" style={{ color: R.mute, margin: "20px 0 0", maxWidth: "58ch" }}>
          Même information, mêmes machines, mêmes phrases : seule la mise en forme change. Le panneau crème arrondi, sa
          barre dégradée et son gros chiffre orange sont remplacés par de l’édition ou de l’ingénierie. Les chiffres viennent
          du catalogue et des documents des fabricants ; aucune carte n’est branchée en production.
        </p>
      </div>

      {/* Les trois, côte à côte, sur la même machine : la vue qui sert à trancher. */}
      <section id="cote-a-cote" className="mx-auto w-full max-w-[1320px] px-4 pt-14 sm:px-6">
        <div style={{ borderTop: `1px solid ${R.line}`, paddingTop: 22 }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, margin: 0 }}>
            Les trois, côte à côte
          </h2>
          <p className="text-[14px]" style={{ color: R.mute, margin: "10px 0 0" }}>
            Même machine ({MACHINES[0].brand} {MACHINES[0].series}, température publiée par le fabricant), trois dessins.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {VARIANTES.map(({ id, lettre, nom, Composant }) => (
            <div key={id}>
              <p className="uppercase" style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.18em", color: R.faint, margin: "0 0 12px" }}>
                {lettre} — {nom}
              </p>
              <Carte machine={MACHINES[0]} top>
                <Composant {...MACHINES[0].froid} />
              </Carte>
            </div>
          ))}
        </div>
      </section>

      {/* Chaque variante sur les trois cas réels : température publiée, source secondaire, certifiée sans température. */}
      {VARIANTES.map(({ id, lettre, nom, idee, Composant }) => (
        <section key={id} id={id} className="mx-auto w-full max-w-[1320px] px-4 pt-20 sm:px-6">
          <div style={{ borderTop: `1px solid ${R.line}`, paddingTop: 22 }}>
            <TitreVariante v={{ id, lettre, nom, idee, Composant }} />
          </div>
          <div className="mt-9 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {MACHINES.map((m, i) => (
              <Carte key={m.key} machine={m} top={i === 0}>
                <Composant {...m.froid} />
              </Carte>
            ))}
          </div>
          {/* Le cas le plus sec : rien de publié, aucune certification. */}
          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="rounded-[28px] px-6 py-6 sm:px-7" style={{ background: R.card, border: `1px dashed ${R.line}` }}>
              <p className="uppercase" style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.18em", color: R.faint, margin: "0 0 16px" }}>
                Cas limite — rien de publié, aucune certification
              </p>
              <Composant {...SANS_RIEN} />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
