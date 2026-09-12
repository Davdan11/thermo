import Link from "next/link";
import { DISPLAY, MONO, RECU, typo } from "./tokens";
import { Count, DrawPath, Feed, Grow, Item, Print, Reveal, Stagger, Stamp } from "./kit";
import { RECU_WRAP, RecuBarcode, RecuEyebrow } from "./RecuSections";
import type { ApprocheData } from "./types";

/* ==================================================================
   « Prix : notre approche », mise en page « Le reçu » (/prix).
   Même contenu que la version étiquette : pourquoi pas de prix unique,
   facteurs, contenu d'une soumission, notre rôle, questions.
   ================================================================== */

const { paper: PAPER, sheet: SHEET, ink: INK, mute: MUTE, rule: RULE } = RECU;

const H2 = { fontFamily: DISPLAY, fontSize: "clamp(34px, 3.8vw, 60px)", lineHeight: 0.96, letterSpacing: "-0.05em", fontWeight: 700 } as const;
const BODY = "m-0 text-[17px] leading-[1.72]";

export function ApprocheRecu({ keyword, count, countValue, factors, inclus, etapes, faq, site }: ApprocheData) {
  return (
    <div style={{ background: PAPER, color: INK }}>
      {/* ---------- Pourquoi pas de prix unique ---------- */}
      <section aria-labelledby="recu-pourquoi" className="pb-24 pt-8 sm:pb-28">
        <div className={`${RECU_WRAP} grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20`}>
          <Reveal className="min-w-0" y={24}>
            <div className="pt-8" style={{ borderTop: `1.5px solid ${INK}` }}>
              <p className="m-0 text-[11.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: MUTE }}>
                Plus de
              </p>
              <p aria-hidden="true" className="m-0 mt-1 whitespace-nowrap" style={{ fontFamily: DISPLAY, fontSize: "clamp(76px, 11vw, 190px)", fontWeight: 700, letterSpacing: "-0.065em", lineHeight: 0.84 }}>
                <Count value={countValue} duration={1.8} />
              </p>
              <p className="m-0 mt-4 text-[12px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em" }}>
                appareils admissibles à LogisVert
              </p>
              {/* Ligne de reçu biffée : le prix par machine que nous ne publions pas */}
              <div aria-hidden="true" className="relative mt-10 max-w-[520px] text-[13px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.06em" }}>
                <span className="flex items-baseline" style={{ color: MUTE }}>
                  <span>Prix par machine</span>
                  <span className="mx-2 flex-1 translate-y-[-3px]" style={{ borderBottom: `1px dotted ${RULE}` }} />
                  <span>— — —</span>
                </span>
                <Grow className="absolute left-[-4px] right-[-4px] top-1/2 block h-[2px]" style={{ background: INK }} delay={0.6} duration={0.9} />
              </div>
            </div>
          </Reveal>

          <div className="min-w-0 lg:pt-8">
            <RecuEyebrow>Notre approche</RecuEyebrow>
            <Print as="div" n={11} duration={0.7}>
              <h2 id="recu-pourquoi" className="m-0 mt-5" style={H2}>
                Pourquoi nous n’affichons pas un prix unique
              </h2>
            </Print>
            <Reveal delay={0.15} className="mt-8 grid gap-5">
              <p className={BODY} style={{ color: "rgba(27,27,27,0.8)" }}>
                Plus de {count} appareils sont admissibles à LogisVert. Leurs prix bougent avec les stocks, la saison et les promotions des distributeurs&nbsp;: un tableau de prix pour {keyword} serait faux quelques semaines après sa publication.
              </p>
              <p className={BODY} style={{ color: "rgba(27,27,27,0.8)" }}>
                Surtout, le prix installé dépend de votre maison au moins autant que de la machine. C’est pourquoi nous publions des fourchettes par type et par calibre, jamais un prix par machine&nbsp;: chaque projet reçoit un prix écrit, remis par un installateur partenaire licencié après évaluation, cas par cas.
              </p>
              <p className="m-0 pl-4 text-[15px] leading-[1.65]" style={{ color: MUTE, borderLeft: `3px solid ${INK}` }}>
                Ce que nous publions, ce sont les données certifiées&nbsp;: capacité réelle à -15&nbsp;°C, rendement SEER2 et HSPF2, et le montant LogisVert officiel de chaque jumelage.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Facteurs : un reçu détaillé ---------- */}
      <section aria-labelledby="recu-facteurs" className="pb-24 sm:pb-28">
        <div className={`${RECU_WRAP} grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20`}>
          <div className="min-w-0">
            <div className="lg:sticky lg:top-[110px]">
              <RecuEyebrow>{factors.length} facteurs</RecuEyebrow>
              <Print as="div" n={10} duration={0.65}>
                <h2 id="recu-facteurs" className="m-0 mt-5" style={H2}>
                  Ce qui fait varier le prix installé
                </h2>
              </Print>
              <Reveal delay={0.2}>
                <p className="m-0 mt-8 max-w-[440px] text-[15.5px] leading-[1.7]" style={{ color: MUTE }}>
                  Pour aller plus loin&nbsp;:{" "}
                  <Link href="/guides/ce-qui-influence-le-prix-installe" className="ps2-uline font-semibold" style={{ color: INK }}>
                    ce qui influence le prix installé
                  </Link>{" "}
                  et{" "}
                  <Link href="/subventions/logisvert" className="ps2-uline font-semibold" style={{ color: INK }}>
                    la subvention LogisVert par marque
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal className="min-w-0" y={34} duration={1}>
            <div className="mx-auto max-w-[680px] lg:mr-0" style={{ filter: "drop-shadow(0 26px 30px rgba(27,27,27,0.12))" }}>
              <div className="ps2-zz px-6 pb-9 pt-10 sm:px-10" style={{ background: SHEET, fontFamily: MONO }}>
                <p aria-hidden="true" className="m-0 text-center text-[12.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em" }}>
                  ThermopompesÀVendre.ca
                </p>
                <p aria-hidden="true" className="m-0 text-center text-[12px]" style={{ color: MUTE }}>
                  Ce qui compose un prix installé
                </p>
                <div aria-hidden="true" className="mb-1 mt-4 grid grid-cols-[2.6em_minmax(0,1fr)] gap-x-3 pb-2 pt-3 text-[10.5px] uppercase" style={{ borderTop: `1.5px dashed ${INK}`, color: MUTE, letterSpacing: "0.1em" }}>
                  <span>N°</span>
                  <span>Facteur</span>
                </div>
                <Stagger as="ol" className="m-0 list-none p-0" gap={0.11}>
                  {factors.map(([t, d], i) => (
                    <Item key={t} clip className="grid grid-cols-[2.6em_minmax(0,1fr)] gap-x-3 py-3.5" style={{ borderTop: `1px dotted ${RULE}` }}>
                      <span className="pt-[1px] text-[12px]" style={{ color: MUTE }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13.5px] font-semibold uppercase leading-[1.4]" style={{ letterSpacing: "0.04em" }}>
                          {typo(t)}
                        </span>
                        <span className="mt-1 block text-[15px] leading-[1.6]" style={{ fontFamily: DISPLAY, color: "rgba(27,27,27,0.72)" }}>
                          {typo(d)}
                        </span>
                      </span>
                    </Item>
                  ))}
                </Stagger>
                <div aria-hidden="true" className="mt-3 pt-4 text-center" style={{ borderTop: `1.5px dashed ${INK}` }}>
                  <p className="m-0 text-[12.5px] font-semibold uppercase" style={{ letterSpacing: "0.08em" }}>
                    Le prix exact&nbsp;: soumission écrite
                  </p>
                  <div className="mt-3 flex justify-center">
                    <RecuBarcode seed={factors.map((f) => f[0]).join("")} height={26} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Soumission complète : une liste à cocher ---------- */}
      <section aria-labelledby="recu-soumission" className="pb-24 sm:pb-28">
        <div className={`${RECU_WRAP} grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20`}>
          <div className="min-w-0 lg:order-2 lg:pt-4">
            <RecuEyebrow>Avant de signer</RecuEyebrow>
            <Print as="div" n={11} duration={0.7}>
              <h2 id="recu-soumission" className="m-0 mt-5" style={H2}>
                Ce qu’une soumission complète doit inclure
              </h2>
            </Print>
            <Reveal delay={0.2}>
              <p className="m-0 mt-8 max-w-[460px] text-[16px] leading-[1.7]" style={{ color: "rgba(27,27,27,0.78)" }}>
                Une soumission qui ne détaille pas ces éléments n’est pas comparable à une autre. Le prix le plus bas au téléphone est rarement le moins cher une fois installé.
              </p>
            </Reveal>
          </div>

          <Reveal className="relative min-w-0 lg:order-1" y={34} duration={1}>
            <div className="relative max-w-[720px]" style={{ filter: "drop-shadow(0 26px 30px rgba(27,27,27,0.12))" }}>
              <div className="ps2-zz relative px-6 pb-10 pt-10 sm:px-10" style={{ background: SHEET }}>
                <div aria-hidden="true" className="flex items-baseline justify-between gap-4 pb-3 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE, borderBottom: `1.5px dashed ${INK}` }}>
                  <span>Élément</span>
                  <span>Inclus</span>
                </div>
                <Stagger as="ul" className="m-0 list-none p-0" gap={0.12} delay={0.2}>
                  {inclus.map((t, i) => (
                    <Item key={t} y={10} className="grid grid-cols-[minmax(0,1fr)_28px] items-start gap-x-5 py-3.5 text-[16px] leading-[1.55]" style={{ borderBottom: `1px dotted ${RULE}` }}>
                      <span className="min-w-0" style={{ color: "rgba(27,27,27,0.86)" }}>
                        {typo(t)}
                      </span>
                      <span aria-hidden="true" className="relative mt-[2px] block h-[24px] w-[24px]" style={{ border: `1.5px solid ${INK}` }}>
                        <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full" fill="none">
                          <DrawPath d="M5 12.5 L10 17 L19 6.5" stroke={INK} strokeWidth={2.4} strokeLinecap="square" delay={0.35 + i * 0.12} duration={0.45} />
                        </svg>
                      </span>
                    </Item>
                  ))}
                </Stagger>
                <div aria-hidden="true" className="mt-5 flex items-center justify-between gap-4 text-[12px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.08em" }}>
                  <span>Total des éléments</span>
                  <span>
                    {inclus.length} / {inclus.length}
                  </span>
                </div>
                <div aria-hidden="true" className="h-14 sm:h-10" />
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-[22px] left-6 sm:left-auto sm:right-[max(40px,calc(100%-720px+40px))]">
              <Stamp delay={1.2} rotate={-7} className="px-4 py-2 text-center" style={{ color: INK, fontFamily: MONO }}>
                <span className="block text-[13px] font-semibold uppercase sm:text-[15px]" style={{ letterSpacing: "0.16em" }}>
                  Soumission complète
                </span>
                <span className="block text-[9px] uppercase sm:text-[10px]" style={{ letterSpacing: "0.24em" }}>
                  comparable
                </span>
              </Stamp>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Notre rôle : l'imprimante ---------- */}
      <section aria-labelledby="recu-role" style={{ background: INK, color: PAPER }}>
        <div className={`${RECU_WRAP} pb-20 pt-16 sm:pb-24 sm:pt-20`}>
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <div className="min-w-0">
              <RecuEyebrow light>Avec nous</RecuEyebrow>
              <Print as="div" n={10} duration={0.6}>
                <h2 id="recu-role" className="m-0 mt-5" style={{ ...H2, color: PAPER }}>
                  Comment ça se passe avec nous
                </h2>
              </Print>
            </div>
            <p aria-hidden="true" className="m-0 flex items-center gap-2 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: "rgba(250,248,243,0.55)" }}>
              <span className="ps2-blink inline-block h-[6px] w-[6px] rounded-full" style={{ background: "#9FC7A5" }} />
              {etapes.length} étapes
            </p>
          </div>

          {/* Fente de l'imprimante, d'où sortent les trois tickets */}
          <div className="relative mt-12">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 block h-[8px] rounded-full" style={{ background: "#000", boxShadow: "inset 0 2px 3px rgba(0,0,0,0.95), 0 1px 0 rgba(255,255,255,0.1)" }} />
            <ol className="m-0 grid list-none gap-5 p-0 pt-[4px] md:grid-cols-3 md:gap-6">
              {etapes.map(([t, d], i) => (
                <li key={t} className="min-w-0 px-2 sm:px-4">
                  <Feed delay={0.15 + i * 0.28} duration={1.15}>
                    <div className="ps2-zz-b h-full px-6 pb-9 pt-7" style={{ background: SHEET, color: INK }}>
                      <p className="m-0 flex items-baseline justify-between gap-3 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: MUTE }}>
                        <span>Étape</span>
                        <span className="text-[26px] font-semibold" style={{ color: INK, letterSpacing: "-0.04em" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </p>
                      <div className="my-3" style={{ borderTop: `1.5px dashed ${INK}` }} />
                      <p className="m-0 text-[20px] font-bold leading-[1.2]" style={{ fontFamily: DISPLAY, letterSpacing: "-0.025em" }}>
                        {typo(t)}
                      </p>
                      <p className="m-0 mt-2.5 text-[15px] leading-[1.6]" style={{ color: "rgba(27,27,27,0.72)" }}>
                        {typo(d)}
                      </p>
                    </div>
                  </Feed>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/trouver-ma-thermopompe" className="ps2-btn inline-flex min-h-[52px] items-center gap-3 px-6 text-[13.5px] font-medium uppercase" style={{ background: PAPER, color: INK, fontFamily: MONO, letterSpacing: "0.08em", borderRadius: 3 }}>
              Trouver ma thermopompe
              <span aria-hidden="true" className="ps2-arrow">
                →
              </span>
            </Link>
            <Link href="/soumission" className="ps2-uline text-[15px] font-semibold" style={{ color: PAPER }}>
              Demander une soumission
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Questions : des talons détachables ---------- */}
      <section aria-labelledby="recu-faq" className="pb-28 pt-24 sm:pt-28">
        <div className={`${RECU_WRAP} grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20`}>
          <div className="min-w-0">
            <RecuEyebrow>{faq.length} questions</RecuEyebrow>
            <Print as="div" n={9} duration={0.55}>
              <h2 id="recu-faq" className="m-0 mt-5" style={H2}>
                Questions fréquentes
              </h2>
            </Print>
          </div>
          <div className="min-w-0">
            <Reveal y={28}>
              <div style={{ filter: "drop-shadow(0 22px 26px rgba(27,27,27,0.1))" }}>
                <div className="ps2-zz px-5 py-6 sm:px-9 sm:py-8" style={{ background: SHEET }}>
                  {faq.map((f, i) => (
                    <div key={f.q}>
                      {i > 0 && <div aria-hidden="true" className="ps2-perf mx-[-20px] my-1 sm:mx-[-36px]" style={{ color: RULE, ["--notch" as string]: PAPER }} />}
                      <details className="ps2-faq group py-4">
                        <summary className="grid grid-cols-[3.2em_minmax(0,1fr)_32px] items-start gap-x-3">
                          <span aria-hidden="true" className="pt-[3px] text-[12px]" style={{ fontFamily: MONO, color: MUTE }}>
                            Q.{String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[17.5px] font-semibold leading-[1.35]" style={{ fontFamily: DISPLAY, letterSpacing: "-0.015em" }}>
                            {typo(f.q)}
                          </span>
                          <span aria-hidden="true" className="ps2-plus flex h-[28px] w-[28px] items-center justify-center text-[18px] leading-none group-hover:bg-[#1B1B1B] group-hover:text-[#FAF8F3]" style={{ border: `1.5px solid ${INK}`, fontFamily: MONO }}>
                            +
                          </span>
                        </summary>
                        <p className="ps2-ans m-0 mt-3 pl-[calc(3.2em+12px)] pr-2 text-[15.5px] leading-[1.7]" style={{ color: "rgba(27,27,27,0.78)" }}>
                          {typo(f.a)}
                        </p>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-between gap-5">
              <p className="m-0 max-w-[560px] text-[12.5px] leading-[1.6]" style={{ fontFamily: MONO, color: MUTE }}>
                Source des données techniques et des montants LogisVert&nbsp;: liste officielle des appareils admissibles d’Hydro-Québec, ENERGY STAR. Site&nbsp;: {site}.
              </p>
              <RecuBarcode seed={site} height={24} />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
