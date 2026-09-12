"use client";

import "./catalogue.css";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { EASE, typo } from "./motion";

/* ==================================================================
   Galerie des résultats (/thermopompes) — équivalent de CompareSelection
   + ProductCard, dans la direction du héros : tuiles blanches aux
   grands rayons sur papier chaud, accents orange, italique à empattements.
   Même logique de sélection (5 au plus, /comparer?models=…), mêmes
   données par carte. Les cartes se révèlent une fois à l'entrée à l'écran ;
   quand les résultats changent (filtre, tri, page), la grille est remontée
   et les nouvelles tuiles arrivent en cascade.
   ================================================================== */

const INK = "#0A1419";
const CREAM = "#F4EFE7";
const ORANGE = "#E54B17";
const MAX_COMPARE = 5;

export function GalleryGrid({ products }: { products: CatalogueProduct[] }) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const router = useRouter();

  const toggleCompare = useCallback((modelId: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(modelId)) {
        next.delete(modelId);
      } else if (next.size < MAX_COMPARE) {
        next.add(modelId);
      }
      return next;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const handleCompare = useCallback(() => {
    const slugs = products.filter((p) => selectedIds.has(p.model.id)).map((p) => p.model.slug);
    if (slugs.length >= 2) {
      router.push(`/comparer?models=${slugs.join(",")}`);
    }
  }, [selectedIds, products, router]);

  const compareDisabled = selectedIds.size >= MAX_COMPARE;
  // Signature des résultats : la grille est remontée quand ils changent (la sélection, elle, est conservée).
  const sig = products.map((p) => p.model.id).join("|");

  return (
    <>
      <div key={sig} className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 sm:gap-y-9 xl:grid-cols-3">
        {products.map((product, index) => {
          const card = (
            <GalleryCard
              key={product.model.id}
              index={index}
              product={product}
              isCompareSelected={selectedIds.has(product.model.id)}
              onCompareToggle={toggleCompare}
              compareDisabled={compareDisabled}
            />
          );
          if (index === 2 || (products.length < 3 && index === products.length - 1)) {
            return (
              <React.Fragment key={product.model.id}>
                {card}
                <MatchBanner onGo={() => router.push("/trouver-ma-thermopompe")} />
              </React.Fragment>
            );
          }
          return card;
        })}
      </div>

      {/* Barre de comparaison */}
      <AnimatePresence>
        {selectedIds.size > 0 && (
          <motion.div
            key="compare-bar"
            className="safe-bottom fixed inset-x-0 bottom-0 z-40 p-4"
            role="status"
            aria-live="polite"
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 110, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-[26px] py-2.5 pl-5 pr-2.5 sm:rounded-full sm:pl-6" style={{ background: INK, color: CREAM, boxShadow: "0 30px 60px -24px rgba(10,20,25,0.65)" }}>
              <div className="flex items-center gap-4">
                <p className="m-0 text-sm">
                  <span className="font-semibold">{selectedIds.size}</span> modèle{selectedIds.size > 1 ? "s" : ""} sélectionné{selectedIds.size > 1 ? "s" : ""}
                  <span className="ml-1.5" style={{ color: "rgba(244,239,231,0.55)" }}>
                    (max {MAX_COMPARE})
                  </span>
                </p>
                <span aria-hidden="true" className="hidden gap-1 sm:flex">
                  {Array.from({ length: MAX_COMPARE }, (_, k) => (
                    <span key={k} className="block h-[3px] w-4 rounded-full transition-colors duration-300" style={{ background: k < selectedIds.size ? ORANGE : "rgba(244,239,231,0.2)" }} />
                  ))}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={clearSelection} className="catg-pill rounded-full px-3.5 py-2 text-sm hover:bg-white/10" style={{ color: "rgba(244,239,231,0.75)" }}>
                  Effacer
                </button>
                <button
                  type="button"
                  onClick={handleCompare}
                  disabled={selectedIds.size < 2}
                  className="catg-pill h-10 rounded-full px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ background: ORANGE }}
                >
                  Comparer
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------
   Tuile produit : mêmes données que ProductCard.
   ------------------------------------------------------------------ */
function GalleryCard({
  product,
  index,
  isCompareSelected,
  onCompareToggle,
  compareDisabled,
}: {
  product: CatalogueProduct;
  index: number;
  isCompareSelected?: boolean;
  onCompareToggle?: (modelId: string) => void;
  compareDisabled?: boolean;
}) {
  const { model, brand, configuration, isColdClimate } = product;

  const warranties = (product as { warranties?: Array<{ type: string; durationYears?: number }> }).warranties ?? [];
  const partsWarranty = warranties.find((w) => w.type === "parts")?.durationYears;
  const compWarranty = warranties.find((w) => w.type === "compressor")?.durationYears;
  let warrantyLabel = "";
  if (partsWarranty && compWarranty) {
    if (partsWarranty === compWarranty) warrantyLabel = `Garantie ${partsWarranty} ans`;
    else warrantyLabel = `${partsWarranty} ans (pièces) / ${compWarranty} ans (comp.)`;
  } else if (partsWarranty) {
    warrantyLabel = `Garantie ${partsWarranty} ans`;
  }
  const logisVertDollars: number | null = (product as { logisVertDollars?: number }).logisVertDollars || null;
  const logo = brandLogoPath(brand.slug);

  const hspf2 = configuration?.hspf2 != null || model.hspf2Min != null ? (configuration?.hspf2 ?? model.hspf2Min) : null;
  const seer2 = configuration?.seer2 != null || model.seer2Min != null ? (configuration?.seer2 ?? model.seer2Min) : null;
  const heatTo = model.minimumOperatingTemperatureC != null ? `${model.minimumOperatingTemperatureC}°C` : isColdClimate ? "-25°C" : "-15°C";

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 3) * 0.08 }}
    >
      <article className="catg-card group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-white">
        {/* Photo : fond blanc continu, l'unité occupe l'espace */}
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={`${brand.name} ${model.name}`}
              width={480}
              height={360}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
              className="h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          ) : logo ? (
            <div className="flex flex-col items-center gap-3 px-6">
              <Image src={logo} alt={`Logo ${brand.name}`} width={180} height={64} className="h-auto max-h-[52px] w-auto max-w-[160px] object-contain opacity-90" />
              <span className="text-[11px] tracking-wide" style={{ color: "rgba(10,20,25,0.45)" }}>
                Photo officielle à venir
              </span>
            </div>
          ) : (
            <span className="text-sm" style={{ color: "rgba(10,20,25,0.45)" }}>
              {brand.name}
            </span>
          )}
          {product.imageUrl && logo && (
            <div className="absolute left-4 top-4 flex items-center rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm" style={{ boxShadow: "0 0 0 1px rgba(10,20,25,0.07)" }}>
              <Image src={logo} alt="" width={90} height={28} className="h-auto max-h-[16px] w-auto max-w-[80px] object-contain" />
            </div>
          )}
          {isColdClimate && (
            <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide" style={{ background: INK, color: CREAM }}>
              Climat froid
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col px-5 pt-4 sm:px-6" style={{ borderTop: "1px solid rgba(10,20,25,0.06)" }}>
          <span className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: ORANGE }}>
            {product.systemTypeLabel}
          </span>
          <h3 className="m-0 mt-1.5 text-[19px] font-semibold leading-snug" style={{ letterSpacing: "-0.025em", color: INK }}>
            <Link href={`/produit/${model.slug}`} className="after:absolute after:inset-0 after:z-10 focus-visible:underline focus-visible:outline-none">
              {brand.name} {model.name}
            </Link>
          </h3>
          <p className="m-0 mt-1 text-[12.5px] leading-snug" style={{ color: "rgba(10,20,25,0.55)" }}>
            {model.nominalCapacityBtu ? `${Math.round(model.nominalCapacityBtu / 1000)} 000 BTU` : "Capacité non publiée"}
            {model.certifiedPairings ? ` · ${model.certifiedPairings} jumelage${model.certifiedPairings > 1 ? "s" : ""} certifié${model.certifiedPairings > 1 ? "s" : ""}` : ""}
            {product.refrigerant ? ` · ${product.refrigerant}` : ""}
          </p>

          <div className="mt-auto w-full pt-4">
            {(hspf2 != null || seer2 != null) && (
              <dl className="m-0 flex" style={{ borderTop: "1px solid rgba(10,20,25,0.08)" }}>
                {hspf2 != null && <Figure label="HSPF2" value={hspf2} />}
                {seer2 != null && <Figure label="SEER2" value={seer2} divider={hspf2 != null} />}
              </dl>
            )}
            <dl className="m-0">
              <Line label={typo("Chauffage jusqu'à")} value={heatTo} />
              <Line label="Garantie" value={warrantyLabel || "10 ans (pièces et comp.)"} />
              {logisVertDollars != null && logisVertDollars > 0 && (
                <Line
                  label={
                    <span className="flex items-center gap-1.5">
                      <Image src="/images/hydroquebec.png" alt="" width={16} height={16} className="object-contain" />
                      LogisVert
                    </span>
                  }
                  value={<span style={{ color: "#1b6b3a", fontWeight: 700 }}>{logisVertDollars.toLocaleString("fr-CA")} $</span>}
                />
              )}
            </dl>

            <div className="relative z-20 flex items-center justify-between gap-3 py-4" style={{ borderTop: "1px solid rgba(10,20,25,0.08)" }}>
              <Link href={`/produit/${model.slug}`} className="catg-link inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: ORANGE }}>
                Voir le modèle
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              {onCompareToggle && (
                <button
                  type="button"
                  onClick={() => onCompareToggle(model.id)}
                  disabled={compareDisabled && !isCompareSelected}
                  aria-pressed={!!isCompareSelected}
                  className="catg-pill rounded-full border px-4 py-2 text-[13px] font-semibold disabled:opacity-40"
                  style={isCompareSelected ? { background: INK, borderColor: INK, color: CREAM } : { borderColor: "rgba(10,20,25,0.16)", color: INK }}
                >
                  {isCompareSelected ? "Retirer" : "+ Comparer"}
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

function Figure({ label, value, divider = false }: { label: string; value: number; divider?: boolean }) {
  return (
    <div className="flex-1 py-3" style={divider ? { borderLeft: "1px solid rgba(10,20,25,0.08)", paddingLeft: 16 } : undefined}>
      <dt className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: "rgba(10,20,25,0.45)" }}>
        {label}
      </dt>
      <dd className="m-0 mt-0.5 tabular-nums" style={{ fontSize: 30, fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1.05, color: INK }}>
        {value}
      </dd>
    </div>
  );
}

function Line({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5" style={{ borderTop: "1px solid rgba(10,20,25,0.08)" }}>
      <dt className="text-[13.5px]" style={{ color: "rgba(10,20,25,0.58)" }}>
        {label}
      </dt>
      <dd className="m-0 text-right text-[14px] font-semibold tabular-nums" style={{ color: INK }}>
        {value}
      </dd>
    </div>
  );
}

/* ------------------------------------------------------------------
   Bannière ThermoMatch insérée dans la grille (mêmes textes).
   ------------------------------------------------------------------ */
function MatchBanner({ onGo }: { onGo: () => void }) {
  return (
    <motion.div
      className="relative col-span-1 my-2 overflow-hidden rounded-[22px] px-7 py-9 sm:col-span-2 sm:px-12 sm:py-12 xl:col-span-3"
      style={{ background: INK, color: CREAM, boxShadow: "0 40px 80px -50px rgba(10,20,25,0.8)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 block h-[2px] w-full origin-left"
        style={{ background: ORANGE }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
      />
      {/* Grand « 3 » en filigrane : les trois machines retenues */}
      <span aria-hidden="true" className="catg-serif pointer-events-none absolute -bottom-16 right-6 select-none leading-none sm:right-16" style={{ fontSize: "clamp(200px, 22vw, 340px)", color: "rgba(244,239,231,0.05)" }}>
        3
      </span>
      <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" className="mb-6 block h-[26px] object-contain brightness-0 invert" style={{ width: "auto", maxWidth: "none" }} />
          <h3 className="m-0 text-[28px] font-semibold leading-[1.05] sm:text-[40px]" style={{ letterSpacing: "-0.04em" }}>
            {typo("Trop de modèles ?")} <span className="catg-serif" style={{ fontSize: "1.08em" }}>ThermoMatch en retient trois pour votre maison<span style={{ color: ORANGE }}>.</span></span>
          </h3>
          <p className="m-0 mt-4 text-base leading-relaxed sm:text-[17px]" style={{ color: "rgba(244,239,231,0.66)" }}>
            13 questions sur votre maison, 2 minutes. Le calcul croise la capacité certifiée à -15 °C, votre superficie, votre isolation et votre zone climatique, toutes marques confondues.
          </p>
        </div>
        <div className="relative z-10 w-full shrink-0 md:w-auto">
          <button type="button" onClick={onGo} className="catg-pill catg-btn catg-link flex h-12 w-full items-center justify-center gap-2 rounded-full px-7 font-semibold text-white sm:w-auto" style={{ background: ORANGE }}>
            Lancer ThermoMatch
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
