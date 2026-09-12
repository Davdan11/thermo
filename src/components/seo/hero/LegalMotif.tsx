"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Caption, EASE, K, Parallax } from "./parts";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Pages juridiques : sommaire typographique, sobre et lent.
   Grands numéros en italique, un trait orange glisse d'une section à
   l'autre comme un signet ; chaque ligne mène à sa section.
   ================================================================== */

export function LegalMotif({ heading, note, items }: { heading: string; note?: string; items: Array<{ id: string; label: string }> }) {
  const reduce = useReduced();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce || items.length < 2) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % items.length), 3600);
    return () => window.clearInterval(t);
  }, [reduce, items.length]);

  return (
    <Parallax distance={-40} className="lg:ml-auto lg:max-w-[500px]">
      <motion.nav aria-label={heading} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, ease: EASE, delay: 0.5 }}>
        <div className="flex items-baseline justify-between gap-4 pb-4" style={{ borderBottom: `1px solid ${K.line}` }}>
          <Caption>{heading}</Caption>
          {note ? <p className="text-right text-[12.5px]" style={{ color: K.mute, margin: 0 }}>{note}</p> : null}
        </div>
        <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {items.map((it, i) => (
            <motion.li
              key={it.id}
              className="relative"
              style={{ borderBottom: `1px solid ${K.line}` }}
              initial={reduce ? false : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.75 + i * 0.1 }}
            >
              <a href={`#${it.id}`} className="sh-link grid grid-cols-[2.6rem_1fr_auto] items-baseline gap-3 py-3 sm:py-3.5" style={{ color: i === active ? K.cream : K.mute }}>
                <span className="sh-serif text-[24px] leading-none" style={{ color: i === active ? K.orange : K.faint, transition: "color 1.2s" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15.5px] leading-snug" style={{ transition: "color 1.2s" }}>{it.label}</span>
                <span aria-hidden="true" className="sh-arrow text-[13px]">→</span>
              </a>
              {i === active ? (
                <motion.span layoutId="sh-legal-mark" aria-hidden="true" className="absolute -bottom-px left-0 h-px w-full" style={{ background: K.orange }} transition={{ duration: 1.4, ease: EASE }} />
              ) : null}
            </motion.li>
          ))}
        </ol>
      </motion.nav>
    </Parallax>
  );
}
