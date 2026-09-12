import Link from "next/link";
import { Arrow, CropMarks, DrawCheck, Reveal, Rule, SheetHead } from "./motion";
import { GREEN, INK, LINE, MUTE, WASH } from "./tokens";

/* ==================================================================
   Fin de la fiche d'ingénierie : bande des garanties de données
   (équivalent thématique de TrustStrip, mêmes quatre engagements)
   puis le cartouche final ThermoMatch (équivalent de CtaThermoMatch,
   mêmes liens et même texte).
   ================================================================== */

const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
];

export function SheetTrust() {
  return (
    <section aria-label="Sources et garanties" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Rule />
        <ul className="m-0 grid list-none grid-cols-1 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((it, i) => (
            <Reveal
              as="li"
              key={it.label}
              delay={0.08 * i}
              y={10}
              className="flex items-start gap-3 border-[#D9DCDF] py-5 text-[13px] leading-snug max-sm:[&:not(:first-child)]:border-t sm:[&:nth-child(n+3)]:border-t sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:pl-6 lg:[&:nth-child(n+3)]:border-t-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-6"
            >
              <span className="mt-[1px]">
                <DrawCheck color={GREEN} size={17} delay={0.2 + 0.1 * i} />
              </span>
              <span>
                <span className="block font-semibold" style={{ color: INK }}>
                  {it.label}
                </span>
                <span className="mt-0.5 block" style={{ color: MUTE }}>
                  {it.hint}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
        <Rule color={LINE} />
      </div>
    </section>
  );
}

export function SheetCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="relative" style={{ border: `1px solid ${INK}` }}>
          <CropMarks />
          <div className="grid lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
            <div className="min-w-0 p-6 sm:p-10 lg:p-12" style={{ borderBottom: `1px solid ${INK}` }}>
              <SheetHead kicker="ThermoMatch" title={title} big rule={false} />
            </div>
            <div className="flex min-w-0 flex-col justify-between gap-8 p-6 sm:p-10 lg:border-l lg:p-12" style={{ background: WASH, borderColor: INK }}>
              <Reveal as="p" delay={0.2} className="m-0 text-[16px] leading-[1.65]" style={{ color: MUTE }}>
                {text}
              </Reveal>
              <Reveal delay={0.35} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href="/trouver-ma-thermopompe" className="sv2f-btn inline-flex min-h-[52px] items-center justify-between gap-3 rounded-[3px] px-5 text-[15px] font-semibold text-white" style={{ background: INK }}>
                  Lancer ThermoMatch
                  <Arrow />
                </Link>
                <Link href="/soumission" className="sv2f-btn sv2f-ghost inline-flex min-h-[52px] items-center justify-center rounded-[3px] px-5 text-[15px] font-semibold" style={{ border: `1px solid ${INK}`, color: INK }}>
                  Demander une soumission
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
