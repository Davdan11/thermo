import Link from "next/link";
import type { ReactNode } from "react";
import { DISPLAY, METER, MONO } from "./tokens";
import { Grow, Item, Reveal, Stagger } from "./kit";
import { Knob } from "./CompteurBits";

/* ==================================================================
   /calculateur-economies — sections sous le héros « Le compteur ».
   Tournesol #F4C542, encre #151515, panneaux blancs à ombre franche.
   L'explication devient un relevé de facture ligne par ligne, chaque
   ligne avec son petit instrument : part de la facture, unités de
   chaleur (COP), sélecteur de combustible, années de retour. Tous les
   chiffres affichés viennent du texte (50 %, COP 1 et 3 à 4, 7 ans →
   3 ou 4 ans).
   ================================================================== */

const { ink: INK, sun: SUN, face: FACE, red: RED, mute: MUTE } = METER;

function Line({ n, children, visual }: { n: string; children: ReactNode; visual: ReactNode }) {
  return (
    <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[3.5em_minmax(0,1fr)_320px] lg:gap-10 lg:py-12" style={{ borderTop: `2px dashed rgba(21,21,21,0.2)` }}>
      <span aria-hidden="true" className="hidden pt-2 text-[12px] font-semibold lg:block" style={{ fontFamily: MONO, color: MUTE }}>
        {n}
      </span>
      <Reveal className="min-w-0" y={18}>
        {children}
      </Reveal>
      <div className="min-w-0 self-center">{visual}</div>
    </div>
  );
}

const P = "m-0 mt-4 text-[16.5px] leading-[1.75] [&_strong]:font-semibold [&_strong]:text-[#151515]";
const H3 = { fontFamily: DISPLAY, fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.1, letterSpacing: "-0.04em", fontWeight: 800, margin: 0 } as const;

/** Part de la facture : le chauffage, souvent plus de la moitié. */
function ShareBar() {
  return (
    <div aria-hidden="true" className="rounded-[14px] bg-white px-5 py-5" style={{ border: `2px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}` }}>
      <p className="m-0 text-[10.5px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em" }}>
        Facture d’électricité
      </p>
      <div className="relative mt-4 h-[26px] overflow-hidden rounded-[6px]" style={{ boxShadow: `inset 0 0 0 2px ${INK}`, background: FACE }}>
        <Grow className="absolute inset-y-0 left-0 block" style={{ width: "58%", background: SUN, boxShadow: `inset 0 0 0 2px ${INK}` }} delay={0.3} duration={1.2} />
        <span className="absolute inset-y-[-4px] left-1/2 w-[2px]" style={{ background: RED }} />
      </div>
      <div className="mt-2 flex justify-between text-[11px]" style={{ fontFamily: MONO, color: MUTE }}>
        <span>chauffage</span>
        <span style={{ color: RED, fontWeight: 600 }}>50&nbsp;%</span>
        <span>le reste</span>
      </div>
      <p className="m-0 mt-3 text-[12px] leading-[1.5]" style={{ fontFamily: MONO, color: MUTE }}>
        souvent plus de 50&nbsp;% de la facture
      </p>
    </div>
  );
}

/** Unités de chaleur pour une unité d'électricité : 1 contre 3 à 4. */
function CopUnits() {
  const unit = (fill: string, dashed = false, key?: number) => (
    <Item as="span" key={key} y={0} className="block h-[26px] w-[26px] rounded-[5px]" style={{ background: dashed ? "transparent" : fill, border: `2px ${dashed ? "dashed" : "solid"} ${INK}` }} />
  );
  return (
    <div aria-hidden="true" className="rounded-[14px] bg-white px-5 py-5" style={{ border: `2px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}` }}>
      {[
        { k: "Plinthes électriques", heat: 1, maybe: 0, label: "1 unité de chaleur" },
        { k: "Thermopompe climat froid", heat: 3, maybe: 1, label: "3 à 4 unités de chaleur" },
      ].map((r, i) => (
        <div key={r.k} className={i ? "mt-4 pt-4" : ""} style={i ? { borderTop: `1px dashed rgba(21,21,21,0.2)` } : undefined}>
          <p className="m-0 text-[10.5px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em" }}>
            {r.k}
          </p>
          <Stagger as="div" className="mt-2.5 flex items-center gap-1.5" gap={0.14} delay={0.2 + i * 0.3}>
            {unit(INK, false, 0)}
            <Item as="span" y={0} x={-6} className="mx-2 text-[14px] font-semibold" style={{ fontFamily: MONO }}>
              →
            </Item>
            {Array.from({ length: r.heat }, (_, k) => unit(SUN, false, k + 1))}
            {r.maybe ? unit(SUN, true, 9) : null}
          </Stagger>
          <p className="m-0 mt-2 text-[11px]" style={{ fontFamily: MONO, color: MUTE }}>
            1 unité d’électricité → {r.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Retour sur investissement : l'exemple du texte, 7 ans sans aide, 3 ou 4 ans avec. */
function Years() {
  return (
    <div aria-hidden="true" className="rounded-[14px] bg-white px-5 py-5" style={{ border: `2px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}` }}>
      {[
        { k: "Sans aide financière", n: 7, dashed: 0, v: "7 ans" },
        { k: "Avec subventions", n: 3, dashed: 1, v: "3 ou 4 ans" },
      ].map((r, i) => (
        <div key={r.k} className={i ? "mt-4" : ""}>
          <div className="flex items-baseline justify-between gap-3 text-[10.5px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em" }}>
            <span>{r.k}</span>
            <span style={{ color: i ? INK : RED }}>{r.v}</span>
          </div>
          <div className="mt-2 grid grid-cols-7 gap-1">
            {Array.from({ length: 7 }, (_, k) => {
              const solid = k < r.n;
              const maybe = !solid && k < r.n + r.dashed;
              return (
                <span key={k} className="relative block h-[16px] overflow-hidden rounded-[3px]" style={{ border: `2px ${maybe ? "dashed" : "solid"} ${solid || maybe ? INK : "rgba(21,21,21,0.18)"}` }}>
                  {solid && <Grow className="absolute inset-0 block" style={{ background: i ? SUN : RED }} delay={0.3 + i * 0.5 + k * 0.08} duration={0.35} />}
                </span>
              );
            })}
          </div>
        </div>
      ))}
      <p className="m-0 mt-3 text-[11px]" style={{ fontFamily: MONO, color: MUTE }}>
        exemple cité ci-contre, en années
      </p>
    </div>
  );
}

export function CompteurExplain() {
  return (
    <section className="relative px-5 pt-24" style={{ color: INK }}>
      <div className="mx-auto max-w-[1180px]">
        <Reveal y={30} duration={1}>
          <div className="overflow-hidden rounded-[22px] bg-white" style={{ border: `2px solid ${INK}`, boxShadow: `8px 8px 0 ${INK}` }}>
            {/* En-tête de relevé */}
            <div aria-hidden="true" className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-3.5 text-[10.5px] font-semibold uppercase sm:px-10" style={{ background: SUN, borderBottom: `2px solid ${INK}`, fontFamily: MONO, letterSpacing: "0.18em" }}>
              <span className="flex items-center gap-2.5">
                <span className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: INK }} />
                Relevé explicatif
              </span>
              <span>ThermopompesÀVendre.ca</span>
            </div>

            <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[3.5em_minmax(0,1fr)_320px] lg:gap-10 lg:py-12">
              <span aria-hidden="true" className="hidden pt-3 text-[12px] font-semibold lg:block" style={{ fontFamily: MONO, color: MUTE }}>
                01
              </span>
              <Reveal className="min-w-0" y={18}>
                <h2 className="m-0" style={{ fontFamily: DISPLAY, fontSize: "clamp(30px, 3.4vw, 50px)", lineHeight: 1, letterSpacing: "-0.05em", fontWeight: 800, textWrap: "balance" }}>
                  Pourquoi calculer la rentabilité d’une thermopompe au Québec&nbsp;?
                </h2>
                <p className={P} style={{ color: "rgba(21,21,21,0.74)" }}>
                  Le Québec offre l’une des électricités les plus abordables en Amérique du Nord grâce à Hydro-Québec. Cependant, avec les hivers rigoureux, les coûts de chauffage représentent souvent plus de 50&nbsp;% de la facture d’électricité d’un ménage. Utiliser notre <strong>calculateur d’économies pour thermopompe</strong> vous permet de visualiser concrètement combien vous pourriez économiser chaque année en remplaçant vos plinthes électriques, votre fournaise au mazout ou au gaz naturel.
                </p>
              </Reveal>
              <div className="min-w-0 self-center">
                <ShareBar />
              </div>
            </div>

            <Line n="02" visual={<CopUnits />}>
              <h3 style={H3}>Comprendre le rendement (COP) en climat froid</h3>
              <p className={P} style={{ color: "rgba(21,21,21,0.74)" }}>
                Contrairement aux plinthes électriques traditionnelles qui transforment 1 unité d’électricité en 1 unité de chaleur (rendement de 100&nbsp;%), une thermopompe extrait la chaleur de l’air extérieur. Les modèles modernes certifiés &quot;Climat Froid&quot; (Cold Climate) peuvent atteindre un coefficient de performance (COP) de 3.0 à 4.0. Cela signifie qu’elles produisent <strong>3 à 4 fois plus de chaleur pour la même quantité d’électricité consommée</strong>, d’où les économies drastiques.
              </p>
            </Line>

            <Line n="03" visual={<Knob from="Mazout · gaz" to="Thermopompe" />}>
              <h3 style={H3}>Mazout et Gaz&nbsp;: Les plus grandes économies</h3>
              <p className={P} style={{ color: "rgba(21,21,21,0.74)" }}>
                Si votre maison est actuellement chauffée au mazout (huile) ou au gaz naturel, la transition vers une thermopompe centrale ou murale est encore plus rentable. Avec la volatilité du prix des combustibles fossiles, le chauffage électrique par thermopompe stabilise vos coûts tout en réduisant considérablement votre empreinte carbone. L’écart dépend du prix du combustible remplacé et du rendement réel de la machine en hiver.
              </p>
            </Line>

            <Line n="04" visual={<Years />}>
              <h3 style={H3}>N’oubliez pas les subventions gouvernementales</h3>
              <p className={P} style={{ color: "rgba(21,21,21,0.74)" }}>
                Notre calculateur estime le retour sur investissement brut. Cependant, des programmes très avantageux comme <strong>LogisVert d’Hydro-Québec</strong> ou le programme <strong>Chauffez Vert</strong> du gouvernement provincial peuvent vous rembourser des milliers de dollars sur l’achat de votre équipement. Une thermopompe qui se rentabilisait en 7 ans sans aide financière peut voir son retour sur investissement chuter à seulement 3 ou 4 ans grâce à ces subventions&nbsp;!
              </p>
            </Line>
          </div>
        </Reveal>

        {/* Appel à l'action : le panneau tournesol, disque qui tourne */}
        <Reveal y={30} duration={1} className="mt-20">
          <div className="ps2-hard relative overflow-hidden rounded-[22px]" style={{ background: SUN, border: `2px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}` }}>
            {/* Fenêtre du disque */}
            <div aria-hidden="true" className="relative mx-6 mt-6 h-[22px] overflow-hidden rounded-[6px] sm:mx-12 sm:mt-8" style={{ background: INK }}>
              <div className="absolute inset-x-2 inset-y-[5px] overflow-hidden rounded-[2px]" style={{ background: "linear-gradient(#8E8E88, #E9E9E4 45%, #77776F)" }}>
                <div
                  className="ps2-disc absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${RED} 0 12px, transparent 12px), repeating-linear-gradient(90deg, rgba(58,58,54,0.8) 0 1px, transparent 1px 18px)`,
                    backgroundSize: "540px 100%, 540px 100%",
                    backgroundRepeat: "repeat-x, repeat-x",
                  }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.55), transparent 18%, transparent 82%, rgba(0,0,0,0.55))" }} />
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-between gap-10 px-6 py-10 sm:px-12 md:flex-row md:items-center md:py-14">
              <div className="max-w-xl text-left">
                <h4 className="m-0 mb-4" style={{ fontFamily: DISPLAY, fontSize: "clamp(30px, 3.4vw, 46px)", lineHeight: 1, letterSpacing: "-0.05em", fontWeight: 800, color: INK }}>
                  Prêt à arrêter de chauffer les nuages&nbsp;?
                </h4>
                <p className="m-0 mb-6 text-[17px] leading-relaxed" style={{ color: "rgba(21,21,21,0.82)" }}>
                  Obtenez une soumission écrite pour l’installation d’une thermopompe certifiée «&nbsp;Climat Froid&nbsp;», adaptée à votre maison et évaluée cas par cas.
                </p>
                <ul className="m-0 flex list-none flex-col gap-4 p-0 text-[14.5px] font-semibold sm:flex-row sm:gap-6">
                  {["100% Gratuit", "Sans engagement"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px]" style={{ background: INK }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={SUN} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex-shrink-0 md:w-auto">
                <Link
                  href="/soumission"
                  className="ps2-btn group flex w-full items-center justify-center gap-3 rounded-full px-8 py-5 text-lg font-bold md:w-auto"
                  style={{ background: INK, color: SUN, boxShadow: `0 5px 0 rgba(21,21,21,0.35)` }}
                >
                  Demander une soumission
                  <svg className="ps2-arrow h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
