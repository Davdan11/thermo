"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { DISPLAY, EASE, MONO } from "@/components/heroes-v2/marques/shared";

/* ==================================================================
   Chapitre III de /marques/[slug] : fiches de catalogue, par segments.
   Le serveur passe des données allégées et déjà mises en forme
   (FicheData, ~0,4 Ko par fiche) au lieu de l’arbre rendu de chaque
   fiche. Les premières fiches sont complètes dans le HTML ; les
   suivantes y figurent en version courte (type, nom et lien vers la
   fiche : lisibles par les moteurs et sans JavaScript), puis sont
   rendues complètes, segment par segment, à l’approche du défilement.
   ================================================================== */

/* Mêmes valeurs que la palette de Monographie.tsx. */
const C = {
  cream: "#F6F1E8",
  paper: "#FBF8F2",
  print: "#EDE6D8",
  ink: "#15171A",
  mute: "rgba(21,23,26,0.72)",
  line: "rgba(21,23,26,0.16)",
} as const;

/** Une fiche du chapitre III, prête à afficher (calculée par ficheData, au serveur). */
export interface FicheData {
  slug: string;
  /** Nom complet (marque, série, capacité). */
  name: string;
  brandName: string;
  imageUrl: string | null;
  systemTypeLabel: string;
  /** Ligne monospace sous le nom : numéro, jumelages certifiés, réfrigérant. */
  specLine: string;
  isColdClimate: boolean;
  hspf2: number | null;
  seer2: number | null;
  /** « -25°C » */
  minTemp: string;
  warranty: string;
  /** Montant déjà mis en forme (« 1 234 $ »), null sans subvention. */
  logisVert: string | null;
}

function Leader({ label, value, strong = false, icon }: { label: string; value: ReactNode; strong?: boolean; icon?: ReactNode }) {
  return (
    <div className="flex items-end gap-2 py-[7px] text-[13.5px]">
      <dt className="flex shrink-0 items-center gap-1.5" style={{ color: C.mute }}>
        {icon}
        {label}
      </dt>
      <span aria-hidden="true" className="mqs-leader" />
      <dd className="shrink-0 text-right tabular-nums" style={{ margin: 0, fontWeight: strong ? 700 : 600, color: C.ink }}>
        {value}
      </dd>
    </div>
  );
}

const figure = (index: number) => `Fig. ${String(index + 1).padStart(2, "0")}`;

function Fiche({ fiche, index }: { fiche: FicheData; index: number }) {
  return (
    <article className="mqs-fiche relative flex h-full flex-col" style={{ background: C.paper, boxShadow: `0 0 0 1px ${C.line}`, fontFamily: "var(--font-sans)" }}>
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: C.print }}>
        {fiche.imageUrl ? (
          <Image
            src={fiche.imageUrl}
            alt={fiche.name}
            width={480}
            height={360}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="h-full w-full object-contain"
            style={{ padding: "9% 10%", mixBlendMode: "multiply" }}
          />
        ) : (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
            <span style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em", color: "transparent", WebkitTextStroke: `1px ${C.ink}` }}>{fiche.brandName}</span>
            <span className="text-[11px] tracking-wide" style={{ color: C.mute }}>
              Photo officielle à venir
            </span>
          </span>
        )}
        <span className="absolute left-3 top-3 text-[10.5px] uppercase tabular-nums" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: C.mute }}>
          {figure(index)}
        </span>
        {fiche.isColdClimate ? (
          <span className="absolute right-3 top-3 px-2 py-1 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", background: C.ink, color: C.cream }}>
            Climat froid
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col px-5 pt-5">
        <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }}>
          {fiche.systemTypeLabel}
        </p>
        <h3 style={{ fontFamily: DISPLAY, fontSize: 19, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.2, margin: "8px 0 0", color: C.ink }}>
          <Link href={`/produit/${fiche.slug}`} className="after:absolute after:inset-0" style={{ color: "inherit" }}>
            {fiche.name}
          </Link>
        </h3>
        <p className="text-[12.5px] leading-snug" style={{ fontFamily: MONO, color: C.mute, margin: "8px 0 0" }}>
          {fiche.specLine}
        </p>
        <dl className="mt-auto pt-4" style={{ margin: 0 }}>
          {fiche.hspf2 != null ? <Leader label="HSPF2" value={fiche.hspf2} /> : null}
          {fiche.seer2 != null ? <Leader label="SEER2" value={fiche.seer2} /> : null}
          <Leader label="Chauffage jusqu’à" value={fiche.minTemp} />
          <Leader label="Garantie" value={fiche.warranty} />
          {fiche.logisVert ? (
            <Leader
              label="LogisVert"
              strong
              value={fiche.logisVert}
              icon={<Image src="/images/hydroquebec.png" alt="" width={14} height={14} className="object-contain" style={{ width: 14, height: 14, maxWidth: "none" }} />}
            />
          ) : null}
        </dl>
        <div className="relative z-20 mt-3 py-4" style={{ borderTop: `1px solid ${C.line}` }}>
          <Link href={`/produit/${fiche.slug}`} className="inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: C.ink }}>
            Voir le modèle
            <span aria-hidden="true" className="mqs-arrow">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Version courte, dans le HTML serveur : même cadre, type, nom et lien vers la fiche. */
function FicheCourte({ fiche, index }: { fiche: FicheData; index: number }) {
  return (
    <article className="mqs-fiche relative flex h-full flex-col" style={{ background: C.paper, boxShadow: `0 0 0 1px ${C.line}`, fontFamily: "var(--font-sans)" }}>
      <div className="relative aspect-[4/3]" style={{ background: C.print }}>
        <span className="absolute left-3 top-3 text-[10.5px] uppercase tabular-nums" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: C.mute }}>
          {figure(index)}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }}>
          {fiche.systemTypeLabel}
        </p>
        <h3 style={{ fontFamily: DISPLAY, fontSize: 19, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.2, margin: "8px 0 0", color: C.ink }}>
          <Link href={`/produit/${fiche.slug}`} className="after:absolute after:inset-0" style={{ color: "inherit" }}>
            {fiche.name}
          </Link>
        </h3>
      </div>
    </article>
  );
}

/**
 * Les éléments de la liste des fiches (à placer dans le <ul> du chapitre III). Les `premier` premières
 * sont complètes dès le HTML ; les suivantes le deviennent par tranches de `segment` quand la première
 * fiche courte arrive à moins de 1 200 px de l’écran (avant d’être vue : aucun décalage visible).
 */
export function FichesSuite({ fiches, premier, segment }: { fiches: FicheData[]; premier: number; segment: number }) {
  const [shown, setShown] = useState(premier);
  const next = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = next.current;
    if (!el || shown >= fiches.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setShown((s) => Math.min(s + segment, fiches.length));
      },
      { rootMargin: "1200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, segment, fiches.length]);

  return (
    <>
      {fiches.map((fiche, i) =>
        i < shown ? (
          <motion.li
            key={fiche.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: EASE, delay: (i % 4) * 0.08 }}
          >
            <Fiche fiche={fiche} index={i} />
          </motion.li>
        ) : (
          <li key={fiche.slug} ref={i === shown ? next : undefined}>
            <FicheCourte fiche={fiche} index={i} />
          </li>
        ),
      )}
    </>
  );
}
