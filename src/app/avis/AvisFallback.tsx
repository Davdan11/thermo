"use client";

import { MotionConfig, motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { C, DISPLAY, EASE } from "@/components/home/premium/shared";
import { Eyebrow, Lines, PillLink, VIEW } from "@/components/home/premium/suite-shared";

/* ==================================================================
   /avis sans lien Google configuré : merci, et un chemin vers /contact.
   Encre, crème et orange de l'accueil ; cinq étoiles qui se dessinent
   une à une, puis le titre et les boutons.
   ================================================================== */

const SERIF = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic" as const, fontWeight: 400, letterSpacing: "-0.02em" };
const STAR = "M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z";

export function AvisFallback() {
  const reduce = useReduced();
  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="avis-titre" className="relative overflow-hidden" style={{ background: C.ink, color: C.cream, fontFamily: DISPLAY }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(760px 520px at 78% 30%, rgba(229,75,23,0.16), rgba(229,75,23,0) 70%)" }} />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1440px] flex-col justify-center px-5 py-[14vh] sm:px-8 lg:px-12">
          <div aria-hidden="true" className="flex gap-2 sm:gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" className="h-8 w-8 sm:h-11 sm:w-11">
                <motion.path
                  d={STAR}
                  fill={C.orange}
                  stroke={C.orange}
                  strokeWidth={1.2}
                  strokeLinejoin="round"
                  initial={reduce ? false : { pathLength: 0, fillOpacity: 0 }}
                  animate={{ pathLength: 1, fillOpacity: 1 }}
                  transition={{ pathLength: { duration: 0.7, ease: EASE, delay: 0.15 + i * 0.12 }, fillOpacity: { duration: 0.4, delay: 0.55 + i * 0.12 } }}
                />
              </svg>
            ))}
          </div>
          <Eyebrow style={{ marginTop: 40 }}>Votre avis</Eyebrow>
          <Lines
            as="h1"
            id="avis-titre"
            lines={["Merci de", <span key="s" style={SERIF}>votre confiance.</span>]}
            style={{ fontSize: "clamp(46px, 7vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.05em", fontWeight: 600, margin: "22px 0 0" }}
          />
          <motion.p
            className="max-w-[560px] text-[17px] leading-relaxed sm:text-[18px]"
            style={{ color: C.mute, margin: "28px 0 0" }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          >
            Notre page d’avis Google n’est pas encore en ligne. En attendant, dites-nous comment ça s’est passé : par écrit ou au téléphone, votre commentaire nous aide.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          >
            <PillLink href="/contact">Nous écrire</PillLink>
            <a href="tel:4389003224" className="su-focus text-[16px] font-semibold" style={{ color: C.cream, textDecoration: "none" }}>
              438-900-3224
            </a>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
