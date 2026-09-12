import "@/components/heroes-v2/prix/prix-v2.css";
import Link from "next/link";
import { DISPLAY, MONO, SERIF, TAG, typo } from "./tokens";
import { Count, DrawPath, Drop, Grow, Item, Reveal, Root, ScrollPath, Stagger } from "./kit";
import type { ApprocheData } from "./types";

/* ==================================================================
   « Prix : notre approche », mise en page « L’étiquette » (/prix/[slug]).
   Kraft #E7D8BF, brun #2A1E14, ficelle orange. Les facteurs pendent à
   une corde à linge, la soumission complète est un colis ficelé, les
   étapes sont enfilées sur une ficelle qui se tend au défilement, les
   questions sont des étiquettes de bagage.
   ================================================================== */

const { brown: BROWN, mute: MUTE, string: STRING, rust: RUST, card: CARD, line: LINE, brass: BRASS } = TAG;
const WRAP = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12";
const H2 = { fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(40px, 5vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.02em" } as const;

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className="m-0 flex items-center gap-3 text-[11.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: light ? "#F0B08F" : RUST }}>
      <span aria-hidden="true" className="inline-block h-[2px] w-9 rounded-full" style={{ background: STRING }} />
      {children}
    </p>
  );
}

/** Clou en laiton. */
function Nail({ className = "", size = 14 }: { className?: string; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`block rounded-full ${className}`}
      style={{ width: size, height: size, background: "radial-gradient(circle at 35% 30%, #F4E3BE, #A57A3E 55%, #57391A)", boxShadow: "0 3px 4px rgba(42,30,20,0.4)" }}
    />
  );
}

/** Œillet en laiton posé sur le trou d'une étiquette. */
function Eyelet({ top = 24, left = "50%", size = 24 }: { top?: number; left?: string; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute rounded-full"
      style={{ top: top - size / 2, left, marginLeft: -size / 2, width: size, height: size, border: `4px solid ${BRASS}`, boxShadow: "inset 0 1px 1px rgba(255,255,255,0.45), 0 1px 1px rgba(42,30,20,0.35)" }}
    />
  );
}

export function ApprocheEtiquette({ keyword, count, countValue, factors, inclus, etapes, faq, site }: ApprocheData) {
  return (
    <Root className="pv2-kraft" style={{ color: BROWN, fontFamily: DISPLAY }}>
      {/* ---------- Pourquoi pas de prix unique ---------- */}
      <section aria-labelledby="tg-pourquoi" className="relative">
        <div className={WRAP}>
          <div aria-hidden="true" className="h-px w-full" style={{ background: LINE }} />
          <div className="grid gap-14 pb-24 pt-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-20 lg:pb-28 lg:pt-24">
            <div className="min-w-0">
              <Eyebrow>Notre approche</Eyebrow>
              <Reveal y={28}>
                <h2 id="tg-pourquoi" className="m-0 mt-5" style={H2}>
                  Pourquoi nous n’affichons pas <em style={{ color: RUST }}>un prix unique</em>
                </h2>
              </Reveal>
              <Reveal delay={0.15} className="mt-9 grid max-w-[720px] gap-5">
                <p className="m-0 text-[17.5px] leading-[1.72]" style={{ color: "rgba(42,30,20,0.86)" }}>
                  Plus de {count} appareils sont admissibles à LogisVert. Leurs prix bougent avec les stocks, la saison et les promotions des distributeurs&nbsp;: un tableau de prix pour {keyword} serait faux quelques semaines après sa publication.
                </p>
                <p className="m-0 text-[17.5px] leading-[1.72]" style={{ color: "rgba(42,30,20,0.86)" }}>
                  Surtout, le prix installé dépend de votre maison au moins autant que de la machine. C’est pourquoi nous publions des fourchettes par type et par calibre, jamais un prix par machine&nbsp;: chaque projet reçoit un prix écrit, remis par un installateur partenaire licencié après évaluation, cas par cas.
                </p>
                <p className="m-0 text-[15.5px] leading-[1.65]" style={{ color: MUTE, fontFamily: DISPLAY }}>
                  <span aria-hidden="true" className="mr-2" style={{ color: STRING }}>
                    ⟶
                  </span>
                  Ce que nous publions, ce sont les données certifiées&nbsp;: capacité réelle à -15&nbsp;°C, rendement SEER2 et HSPF2, et le montant LogisVert officiel de chaque jumelage.
                </p>
              </Reveal>
            </div>

            {/* Étiquette suspendue : le nombre d'appareils */}
            <div aria-hidden="true" className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:ml-auto lg:pt-2">
              <Nail className="absolute left-1/2 top-0 z-10 -ml-[7px]" />
              <Drop delay={0.2} swayDelay={0.5} className="relative pt-2">
                <svg className="mx-auto block" width="60" height="78" viewBox="0 0 60 78" fill="none">
                  <path d="M30 0 L24.5 70" stroke={STRING} strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M30 0 L35.5 70" stroke={STRING} strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <div className="relative -mt-[22px]" style={{ filter: "drop-shadow(0 24px 22px rgba(42,30,20,0.26)) drop-shadow(0 2px 2px rgba(42,30,20,0.18))" }}>
                  <div className="ps2-tagshape relative px-7 pb-8 pt-[58px]" style={{ background: CARD }}>
                    <svg className="pointer-events-none absolute inset-[8px] h-[calc(100%-16px)] w-[calc(100%-16px)]" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                      <polygon points="10,0 90,0 100,9 100,100 0,100 0,9" stroke="rgba(42,30,20,0.3)" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <p className="m-0 text-[10.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: RUST }}>
                      Plus de
                    </p>
                    <p className="m-0 mt-1 whitespace-nowrap" style={{ fontFamily: SERIF, fontSize: "clamp(64px, 7vw, 92px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                      <Count value={countValue} duration={1.8} />
                    </p>
                    <p className="m-0 mt-3 pt-3 text-[11px] uppercase leading-[1.5]" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE, borderTop: `1px dashed ${LINE}` }}>
                      appareils admissibles à LogisVert
                    </p>
                  </div>
                  <Eyelet top={24} />
                </div>
              </Drop>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Facteurs : la corde à linge ---------- */}
      <section aria-labelledby="tg-facteurs" className="relative pb-24 lg:pb-28" style={{ background: "rgba(251,245,234,0.38)" }}>
        <div className={`${WRAP} pt-20 lg:pt-24`}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end lg:gap-16">
            <div className="min-w-0">
              <Eyebrow>{factors.length} étiquettes</Eyebrow>
              <Reveal y={28}>
                <h2 id="tg-facteurs" className="m-0 mt-5" style={H2}>
                  Ce qui fait varier <em style={{ color: RUST }}>le prix installé</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <p className="m-0 text-[15.5px] leading-[1.7]" style={{ color: MUTE }}>
                Pour aller plus loin&nbsp;:{" "}
                <Link href="/guides/ce-qui-influence-le-prix-installe" className="ps2-uline font-semibold" style={{ color: BROWN }}>
                  ce qui influence le prix installé
                </Link>{" "}
                et{" "}
                <Link href="/subventions/logisvert" className="ps2-uline font-semibold" style={{ color: BROWN }}>
                  la subvention LogisVert par marque
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <ol className="m-0 mt-14 grid list-none grid-cols-1 gap-y-6 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-10">
            {factors.map(([t, d], i) => (
              <li key={t} className="ps2-hang relative min-w-0 pt-2">
                {/* Brin de corde à linge : clou à clou, avec son creux au centre */}
                <svg aria-hidden="true" className="absolute left-0 top-0 h-[34px] w-full" viewBox="0 0 100 34" preserveAspectRatio="none" fill="none">
                  <DrawPath d="M0 4 Q 50 34 100 4" stroke={STRING} strokeWidth={2.2} delay={0.08 * i} duration={0.8} />
                </svg>
                <Nail className="absolute -left-[5px] top-0 z-10" size={10} />
                <Drop delay={0.35 + i * 0.09} swayDelay={i * 0.7} className="relative mx-auto w-[88%] pt-[16px]">
                  <div className="ps2-swing">
                    <svg aria-hidden="true" className="mx-auto block" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 0 L11 30" stroke={STRING} strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M15 0 L19 30" stroke={STRING} strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    <div className="relative -mt-[12px]" style={{ filter: "drop-shadow(0 18px 16px rgba(42,30,20,0.2)) drop-shadow(0 1px 1px rgba(42,30,20,0.18))" }}>
                      <div className="ps2-tagshape relative px-6 pb-7 pt-[50px]" style={{ background: CARD, minHeight: 250 }}>
                        <span aria-hidden="true" className="absolute right-5 top-[40px] text-[11px]" style={{ fontFamily: MONO, color: RUST, letterSpacing: "0.1em" }}>
                          {String(i + 1).padStart(2, "0")}/{String(factors.length).padStart(2, "0")}
                        </span>
                        <p className="m-0 pr-10 text-[23px] leading-[1.12]" style={{ fontFamily: SERIF }}>
                          {typo(t)}
                        </p>
                        <p className="m-0 mt-3 pt-3 text-[14.5px] leading-[1.6]" style={{ color: MUTE, borderTop: `1px dashed ${LINE}` }}>
                          {typo(d)}
                        </p>
                      </div>
                      <Eyelet top={24} size={20} />
                    </div>
                  </div>
                </Drop>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Soumission complète : un colis ficelé ---------- */}
      <section aria-labelledby="tg-soumission" className="relative">
        <div className={`${WRAP} grid gap-14 py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:py-28`}>
          <div className="min-w-0 lg:pt-6">
            <Eyebrow>Avant de signer</Eyebrow>
            <Reveal y={28}>
              <h2 id="tg-soumission" className="m-0 mt-5" style={H2}>
                Ce qu’une soumission complète <em style={{ color: RUST }}>doit inclure</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="m-0 mt-8 max-w-[460px] text-[16.5px] leading-[1.72]" style={{ color: "rgba(42,30,20,0.84)" }}>
                Une soumission qui ne détaille pas ces éléments n’est pas comparable à une autre. Le prix le plus bas au téléphone est rarement le moins cher une fois installé.
              </p>
            </Reveal>
          </div>

          <Reveal className="relative min-w-0" y={34} duration={1}>
            <div className="relative" style={{ filter: "drop-shadow(0 28px 26px rgba(42,30,20,0.22)) drop-shadow(0 2px 2px rgba(42,30,20,0.16))" }}>
              <div className="relative overflow-hidden pb-10 pl-6 pr-16 pt-12 sm:pl-12 sm:pr-[132px]" style={{ background: CARD }}>
                <div aria-hidden="true" className="pointer-events-none absolute inset-[10px]" style={{ border: `1px dashed rgba(42,30,20,0.3)` }} />
                <p aria-hidden="true" className="m-0 text-[10.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: RUST }}>
                  Bordereau · contenu du colis
                </p>
                <Stagger as="ul" className="m-0 mt-5 list-none p-0" gap={0.12} delay={0.3}>
                  {inclus.map((t, i) => (
                    <Item key={t} y={10} className="grid grid-cols-[30px_minmax(0,1fr)] items-start gap-x-4 py-3.5 text-[16px] leading-[1.55]" style={{ borderTop: `1px dashed ${LINE}` }}>
                      <svg aria-hidden="true" viewBox="0 0 30 30" className="mt-[-2px] h-[28px] w-[28px]" fill="none">
                        <DrawPath d="M4 16 C 8 18, 10 22, 12 25 C 15 17, 20 9, 27 4" stroke={RUST} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" delay={0.5 + i * 0.12} duration={0.5} />
                      </svg>
                      <span className="min-w-0" style={{ color: "rgba(42,30,20,0.9)" }}>
                        {typo(t)}
                      </span>
                    </Item>
                  ))}
                </Stagger>
              </div>
              {/* Ficelle du colis : un tour horizontal, un tour vertical, un nœud */}
              <Grow className="pointer-events-none absolute left-[-10px] right-[-10px] top-[30px] block h-[3px] rounded-full" style={{ background: STRING }} delay={0.2} duration={1.1} />
              <Grow axis="y" className="pointer-events-none absolute bottom-[-10px] right-[30px] top-[-10px] block w-[3px] rounded-full sm:right-[72px]" style={{ background: STRING, transformOrigin: "50% 0" }} delay={0.5} duration={1.1} />
              <svg aria-hidden="true" className="pointer-events-none absolute right-[5px] top-[8px] sm:right-[47px]" width="54" height="46" viewBox="0 0 54 46" fill="none">
                <DrawPath d="M27 23 C 12 4, 2 14, 10 24 C 16 31, 24 26, 27 23 C 30 20, 38 15, 44 22 C 52 32, 42 42, 27 23" stroke={STRING} strokeWidth={2.4} strokeLinecap="round" delay={1.2} duration={0.8} />
                <DrawPath d="M27 23 L18 44 M27 23 L36 44" stroke={STRING} strokeWidth={2.4} strokeLinecap="round" delay={1.6} duration={0.5} />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Notre rôle : trois étiquettes sur une ficelle ---------- */}
      <section aria-labelledby="tg-role" className="relative" style={{ background: BROWN, color: "#F6EBD6" }}>
        <div className={`${WRAP} pb-20 pt-20 lg:pb-24 lg:pt-24`}>
          <Eyebrow light>Avec nous</Eyebrow>
          <Reveal y={28}>
            <h2 id="tg-role" className="m-0 mt-5" style={{ ...H2, color: "#F6EBD6" }}>
              Comment ça se passe <em style={{ color: "#F0B08F" }}>avec nous</em>
            </h2>
          </Reveal>

          <div className="relative mt-14">
            {/* Ficelle horizontale (écrans larges) : se tend au défilement */}
            <svg aria-hidden="true" className="absolute left-0 top-0 hidden h-[60px] w-full md:block" viewBox="0 0 1000 60" preserveAspectRatio="none" fill="none">
              <path d="M0 10 C 90 44, 150 44, 167 34 C 250 -4, 420 -4, 500 34 C 580 58, 760 -4, 833 34 C 880 52, 960 30, 1000 12" stroke="rgba(217,84,30,0.3)" strokeWidth={2.4} strokeDasharray="1 7" strokeLinecap="round" />
              <ScrollPath d="M0 10 C 90 44, 150 44, 167 34 C 250 -4, 420 -4, 500 34 C 580 58, 760 -4, 833 34 C 880 52, 960 30, 1000 12" stroke={STRING} strokeWidth={2.4} start="start 90%" end="end 60%" />
            </svg>
            {/* Ficelle verticale (téléphone) */}
            <svg aria-hidden="true" className="absolute bottom-6 left-[14px] top-0 w-[8px] md:hidden" viewBox="0 0 8 100" preserveAspectRatio="none" fill="none">
              <path d="M4 0 C 7 30, 1 60, 4 100" stroke="rgba(217,84,30,0.3)" strokeWidth={2.4} strokeDasharray="1 7" strokeLinecap="round" />
              <ScrollPath d="M4 0 C 7 30, 1 60, 4 100" stroke={STRING} strokeWidth={2.4} start="start 85%" end="end 70%" />
            </svg>
            <ol className="m-0 grid list-none gap-8 p-0 pl-10 md:grid-cols-3 md:gap-8 md:pl-0 md:pt-[30px]">
              {etapes.map(([t, d], i) => (
                <li key={t} className="relative min-w-0">
                  <span aria-hidden="true" className="absolute left-[-26px] top-[30px] block h-[2px] w-[26px] md:hidden" style={{ background: STRING }} />
                  <Drop delay={0.2 + i * 0.2} swayDelay={i * 0.9} className="relative md:mx-auto md:w-[86%]">
                    <div className="relative" style={{ filter: "drop-shadow(0 22px 20px rgba(0,0,0,0.35))" }}>
                      <div className="ps2-tagshape relative px-6 pb-8 pt-[52px]" style={{ background: CARD, color: BROWN }}>
                        <p className="m-0 flex items-baseline justify-between gap-3">
                          <span className="text-[10.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: RUST }}>
                            Étape
                          </span>
                          <span style={{ fontFamily: SERIF, fontSize: 40, lineHeight: 1, color: RUST }}>{i + 1}</span>
                        </p>
                        <p className="m-0 mt-2 text-[25px] leading-[1.1]" style={{ fontFamily: SERIF }}>
                          {typo(t)}
                        </p>
                        <p className="m-0 mt-3 pt-3 text-[15px] leading-[1.6]" style={{ color: MUTE, borderTop: `1px dashed ${LINE}` }}>
                          {typo(d)}
                        </p>
                      </div>
                      <Eyelet top={24} size={20} />
                    </div>
                  </Drop>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={0.2} className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/trouver-ma-thermopompe" className="ps2-btn inline-flex min-h-[52px] items-center gap-3 rounded-full py-3 pl-7 pr-6 text-[15px] font-semibold" style={{ background: "#F6EBD6", color: BROWN }}>
              Trouver ma thermopompe
              <span aria-hidden="true" className="ps2-arrow" style={{ color: STRING }}>
                ⟶
              </span>
            </Link>
            <Link href="/soumission" className="ps2-uline text-[15px] font-semibold" style={{ color: "#F6EBD6" }}>
              Demander une soumission
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Questions : étiquettes de bagage ---------- */}
      <section aria-labelledby="tg-faq" className="relative">
        <div className={`${WRAP} grid gap-12 py-24 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20 lg:py-28`}>
          <div className="min-w-0">
            <Eyebrow>{faq.length} questions</Eyebrow>
            <Reveal y={28}>
              <h2 id="tg-faq" className="m-0 mt-5" style={H2}>
                Questions <em style={{ color: RUST }}>fréquentes</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="m-0 mt-8 max-w-[380px] text-[12.5px] leading-[1.65]" style={{ fontFamily: MONO, color: MUTE }}>
                Source des données techniques et des montants LogisVert&nbsp;: liste officielle des appareils admissibles d’Hydro-Québec, ENERGY STAR. Site&nbsp;: {site}.
              </p>
            </Reveal>
          </div>
          <div className="relative min-w-0 pl-9 sm:pl-12">
            {/* Ficelle verticale où sont nouées les étiquettes */}
            <svg aria-hidden="true" className="absolute bottom-0 left-[6px] top-0 w-[8px]" viewBox="0 0 8 100" preserveAspectRatio="none" fill="none">
              <DrawPath d="M4 0 C 6 25, 2 50, 4 75 S 5 95, 4 100" stroke={STRING} strokeWidth={2.4} duration={1.4} />
            </svg>
            <Nail className="absolute left-[3px] top-[-6px] z-10" size={12} />
            <Stagger as="div" className="grid gap-4" gap={0.12}>
              {faq.map((f, i) => (
                <Item as="div" key={f.q} x={-14} y={0} className="relative">
                  <span aria-hidden="true" className="absolute left-[-30px] top-[35px] block h-[2px] w-[34px] sm:left-[-42px] sm:w-[46px]" style={{ background: STRING }} />
                  <div className="ps2-htag-wrap" style={{ filter: "drop-shadow(0 14px 14px rgba(42,30,20,0.18)) drop-shadow(0 1px 1px rgba(42,30,20,0.16))" }}>
                    <details className="ps2-faq ps2-htag group relative py-[18px] pl-12 pr-5 sm:pr-7" style={{ background: CARD }}>
                      <summary className="grid grid-cols-[minmax(0,1fr)_30px] items-start gap-x-4">
                        <span>
                          <span aria-hidden="true" className="block text-[10.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: RUST }}>
                            Question {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="mt-1 block text-[22px] leading-[1.18]" style={{ fontFamily: SERIF }}>
                            {typo(f.q)}
                          </span>
                        </span>
                        <span aria-hidden="true" className="ps2-plus mt-[14px] flex h-[30px] w-[30px] items-center justify-center rounded-full text-[18px] leading-none group-hover:bg-[#2A1E14] group-hover:text-[#FBF5EA]" style={{ border: `1.5px solid ${BROWN}`, fontFamily: MONO }}>
                          +
                        </span>
                      </summary>
                      <p className="ps2-ans m-0 mt-3 pt-3 text-[15.5px] leading-[1.7]" style={{ color: "rgba(42,30,20,0.84)", borderTop: `1px dashed ${LINE}` }}>
                        {typo(f.a)}
                      </p>
                    </details>
                    <span aria-hidden="true" className="pointer-events-none absolute left-[22px] top-[36px] -ml-[10px] -mt-[10px] h-[20px] w-[20px] rounded-full" style={{ border: `3.5px solid ${BRASS}` }} />
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </Root>
  );
}
