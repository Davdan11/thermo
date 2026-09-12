/* ==================================================================
   Sections « Monographie » : la suite du héros « Monogramme »
   (/marques/[slug]). Crème #F6F1E8, encre #15171A, grandes lettres au
   trait qui se remplissent d’encre au défilement. La page se lit comme
   un livre consacré à la marque : titre courant, chapitres numérotés,
   planches (séries), feuillet noir (ce qu’il faut comparer), fiches
   de catalogue (modèles), colophon (sources) et quatrième de couverture.
   Rendu serveur ; seules les animations sont des composants client.
   ================================================================== */
import "./sections.css";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";
import type { SeriesSummary } from "@/lib/data/queries/brand-detail";
import { GENERIC_SERIES_LABEL, isGenericSeries } from "@/lib/data/series-label";
import { DISPLAY, EASE, MONO, typo } from "@/components/heroes-v2/marques/shared";
import { InkNumeral } from "./InkNumeral";
import { DriftName } from "./MonographieClient";
import { CountUp } from "./CountUp";

const C = {
  cream: "#F6F1E8",
  paper: "#FBF8F2",
  print: "#EDE6D8",
  ink: "#15171A",
  mute: "rgba(21,23,26,0.72)",
  faint: "rgba(21,23,26,0.56)",
  line: "rgba(21,23,26,0.16)",
  creamMute: "rgba(246,241,232,0.74)",
  creamLine: "rgba(246,241,232,0.2)",
} as const;

const VIEW = { once: true, amount: 0.25 } as const;

/* ------------------------------------------------------------------
   Titre courant et en-tête de chapitre
   ------------------------------------------------------------------ */

function RunningHead({ left, right, dark = false }: { left: string; right: string; dark?: boolean }) {
  return (
    <div className="relative flex items-center justify-between gap-6 pb-3 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.22em", color: dark ? C.creamMute : C.mute }}>
      <span>{left}</span>
      <span className="text-right">{right}</span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left"
        style={{ background: dark ? C.cream : C.ink, opacity: 0.3 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------
   Chapitre I : les séries, en planches
   ------------------------------------------------------------------ */

export function SeriesPlates({ brandName, brandSlug, series }: { brandName: string; brandSlug: string; series: SeriesSummary[] }) {
  const total = series.reduce((s, x) => s + x.modelCount, 0);
  return (
    <section id="series" aria-labelledby="series-titre" className="scroll-mt-24" style={{ background: C.cream, color: C.ink, fontFamily: DISPLAY }}>
      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pb-32 lg:pt-20">
        <RunningHead left={`Thermopompes ${brandName}`} right="Chapitre I · Les séries" />
        <header className="mt-10 grid items-end gap-x-12 gap-y-6 lg:mt-14 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <InkNumeral text="01" size="clamp(110px, 15vw, 250px)" stroke="clamp(1px, 0.12vw, 2px)" className="-ml-[0.04em]" />
          <div className="min-w-0 lg:pb-3">
            <p className="text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.3em", margin: 0, color: C.mute }}>
              Chapitre I
            </p>
            <motion.h2
              id="series-titre"
              style={{ fontFamily: DISPLAY, fontSize: "clamp(34px, 4.6vw, 70px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.98, margin: "14px 0 0" }}
              initial={{ clipPath: "inset(0 0 100% 0)", y: 18 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            >
              Séries documentées
            </motion.h2>
          </div>
          <dl className="flex gap-10 lg:pb-4" style={{ margin: 0 }}>
            <div>
              <dt className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: C.mute }}>
                Planches
              </dt>
              <dd className="tabular-nums" style={{ margin: "6px 0 0", fontSize: 34, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1 }}>
                <CountUp value={series.length} />
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: C.mute }}>
                Modèles
              </dt>
              <dd className="tabular-nums" style={{ margin: "6px 0 0", fontSize: 34, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1 }}>
                <CountUp value={total} />
              </dd>
            </div>
          </dl>
        </header>

        <ol className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20" style={{ listStyle: "none", padding: 0 }}>
          {series.map((sSummary, i) => {
            const { series: s, capacityRange } = sSummary;
            const seriesName = isGenericSeries(s.name, s.slug) ? GENERIC_SERIES_LABEL : s.name.replace(" [DEV]", "");
            return (
              <motion.li
                key={s.id}
                className={i % 3 === 1 ? "lg:translate-y-12" : undefined}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1.1, ease: EASE, delay: (i % 3) * 0.12 }}
              >
                <Link href={`/thermopompes?brand=${brandSlug}&series=${s.slug}`} className="mqs-plate block" style={{ color: C.ink }}>
                  <div className="mqs-print relative aspect-[4/3] overflow-hidden" style={{ background: C.print, boxShadow: `inset 0 0 0 1px ${C.line}` }}>
                    <span className="absolute left-3 top-3 z-10 text-[10.5px] uppercase tabular-nums" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: C.mute }}>
                      Pl. {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-0">
                      {s.imageUrl ? (
                        <Image
                          src={s.imageUrl}
                          alt={`${brandName} ${seriesName}`}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                          style={{ objectFit: "contain", padding: "11% 12% 9%", mixBlendMode: "multiply" }}
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center px-6 text-center" style={{ fontSize: "clamp(22px, 2.4vw, 34px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "transparent", WebkitTextStroke: `1px ${C.ink}` }}>
                          {sSummary.systemTypeLabel}
                        </span>
                      )}
                    </div>
                    {/* Le tirage se révèle de bas en haut, comme l’encre du héros : le papier se retire vers le haut. */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 block origin-top"
                      style={{ background: C.print }}
                      initial={{ scaleY: 1 }}
                      whileInView={{ scaleY: 0 }}
                      viewport={VIEW}
                      transition={{ duration: 1.3, ease: EASE, delay: 0.15 + (i % 3) * 0.12 }}
                    />
                  </div>
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: C.mute, margin: 0 }}>
                      {sSummary.systemTypeLabel}
                    </p>
                    <h3 style={{ fontFamily: DISPLAY, fontSize: "clamp(22px, 1.9vw, 28px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.1, margin: "8px 0 0" }}>
                      <span className="mqs-plate-title">{seriesName}</span>
                    </h3>
                    <p className="text-[14.5px] leading-relaxed" style={{ color: C.mute, margin: "10px 0 0", fontFamily: "var(--font-sans)" }}>
                      {s.description || `${sSummary.modelCount} modèle${sSummary.modelCount > 1 ? "s" : ""} certifié${sSummary.modelCount > 1 ? "s" : ""}${sSummary.coldClimateCount > 0 ? `, dont ${sSummary.coldClimateCount} climat froid` : ""}.`}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3 pt-3" style={{ borderTop: `1px solid ${C.line}` }}>
                      {capacityRange ? (
                        <span className="text-[12px] tabular-nums" style={{ fontFamily: MONO, color: C.ink }}>
                          {capacityRange.min === capacityRange.max
                            ? `${capacityRange.min.toLocaleString("fr-CA")} BTU`
                            : `${capacityRange.min.toLocaleString("fr-CA")} – ${capacityRange.max.toLocaleString("fr-CA")} BTU`}
                        </span>
                      ) : (
                        <span />
                      )}
                      <span className="inline-flex items-center gap-2 text-[14px] font-semibold">
                        {sSummary.modelCount} modèle{sSummary.modelCount > 1 ? "s" : ""}
                        <span aria-hidden="true" className="mqs-arrow">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Chapitre II : feuillet noir, ce qu’il faut comparer
   ------------------------------------------------------------------ */

const COMPARE = [
  {
    title: "Performance hivernale",
    text: "La capacité à maintenir le chauffage par temps froid varie selon les modèles et la configuration. Vérifiez les données à basse température (ex: -8 °C, -15 °C).",
  },
  {
    title: "Niveau sonore",
    text: "Le confort acoustique dépend de l'unité intérieure et extérieure ainsi que du mode de fonctionnement. Consultez les données en dB(A) pour comparer.",
  },
  {
    title: "Garantie",
    text: "Les garanties varient selon les pièces et la main-d'œuvre. Lisez les conditions pour comprendre ce qui est couvert et pour quelle durée.",
  },
];

export function CompareInterleaf({ brandName }: { brandName: string }) {
  return (
    <section aria-labelledby="comparer-titre" style={{ background: C.ink, color: C.cream, fontFamily: DISPLAY }}>
      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
        <RunningHead left={`Thermopompes ${brandName}`} right="Chapitre II · Comparer" dark />
        <header className="mt-10 grid items-end gap-x-12 gap-y-6 lg:mt-14 lg:grid-cols-[auto_minmax(0,1fr)]">
          <InkNumeral text="02" ink={C.cream} size="clamp(110px, 15vw, 250px)" stroke="clamp(1px, 0.12vw, 2px)" className="-ml-[0.04em]" />
          <div className="min-w-0 lg:pb-3">
            <p className="text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.3em", margin: 0, color: C.creamMute }}>
              Chapitre II
            </p>
            <motion.h2
              id="comparer-titre"
              style={{ fontFamily: DISPLAY, fontSize: "clamp(32px, 4.2vw, 64px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: "14px 0 0", color: C.cream }}
              initial={{ clipPath: "inset(0 0 100% 0)", y: 18 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            >
              {typo(`Ce qu'il faut comparer chez ${brandName}`)}
            </motion.h2>
          </div>
        </header>
        <ol className="mt-14 grid gap-12 md:grid-cols-3 lg:mt-20 lg:gap-16" style={{ listStyle: "none", padding: 0 }}>
          {COMPARE.map((f, i) => (
            <motion.li key={f.title} className="relative pt-7" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 1, ease: EASE, delay: 0.15 + i * 0.15 }}>
              <motion.span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left"
                style={{ background: C.cream, opacity: 0.35 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: EASE, delay: 0.2 + i * 0.15 }}
              />
              <div className="flex items-baseline gap-5">
                <span aria-hidden="true" className="tabular-nums" style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.8, color: "transparent", WebkitTextStroke: `1.2px ${C.cream}` }}>
                  {i + 1}
                </span>
                <h3 style={{ fontFamily: DISPLAY, fontSize: 24, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0, color: C.cream }}>{f.title}</h3>
              </div>
              <p className="mt-5 text-[15.5px] leading-[1.7]" style={{ color: C.creamMute, margin: "20px 0 0", fontFamily: "var(--font-sans)" }}>
                {typo(f.text)}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Chapitre III : fiches de catalogue (mêmes données que ProductCard)
   ------------------------------------------------------------------ */

function warrantyOf(product: CatalogueProduct): string {
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
  return warrantyLabel || "10 ans (pièces et comp.)";
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

function Fiche({ product, index }: { product: CatalogueProduct; index: number }) {
  const { model, brand, configuration, isColdClimate } = product;
  const logisVertDollars: number | null = (product as { logisVertDollars?: number }).logisVertDollars || null;
  const hspf2 = configuration?.hspf2 ?? model.hspf2Min;
  const seer2 = configuration?.seer2 ?? model.seer2Min;
  return (
    <article className="mqs-fiche relative flex h-full flex-col" style={{ background: C.paper, boxShadow: `0 0 0 1px ${C.line}`, fontFamily: "var(--font-sans)" }}>
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: C.print }}>
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={`${brand.name} ${model.name}`}
            width={480}
            height={360}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="h-full w-full object-contain"
            style={{ padding: "9% 10%", mixBlendMode: "multiply" }}
          />
        ) : (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
            <span style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em", color: "transparent", WebkitTextStroke: `1px ${C.ink}` }}>{brand.name}</span>
            <span className="text-[11px] tracking-wide" style={{ color: C.mute }}>
              Photo officielle à venir
            </span>
          </span>
        )}
        <span className="absolute left-3 top-3 text-[10.5px] uppercase tabular-nums" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: C.mute }}>
          Fig. {String(index + 1).padStart(2, "0")}
        </span>
        {isColdClimate ? (
          <span className="absolute right-3 top-3 px-2 py-1 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", background: C.ink, color: C.cream }}>
            Climat froid
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col px-5 pt-5">
        <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }}>
          {product.systemTypeLabel}
        </p>
        <h3 style={{ fontFamily: DISPLAY, fontSize: 19, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.2, margin: "8px 0 0", color: C.ink }}>
          <Link href={`/produit/${model.slug}`} className="after:absolute after:inset-0" style={{ color: "inherit" }}>
            {brand.name} {model.name}
          </Link>
        </h3>
        <p className="text-[12.5px] leading-snug" style={{ fontFamily: MONO, color: C.mute, margin: "8px 0 0" }}>
          {model.nominalCapacityBtu ? `${Math.round(model.nominalCapacityBtu / 1000)} 000 BTU` : "Capacité non publiée"}
          {model.certifiedPairings ? ` · ${model.certifiedPairings} jumelage${model.certifiedPairings > 1 ? "s" : ""} certifié${model.certifiedPairings > 1 ? "s" : ""}` : ""}
          {product.refrigerant ? ` · ${product.refrigerant}` : ""}
        </p>
        <dl className="mt-auto pt-4" style={{ margin: 0 }}>
          {hspf2 != null ? <Leader label="HSPF2" value={hspf2} /> : null}
          {seer2 != null ? <Leader label="SEER2" value={seer2} /> : null}
          <Leader
            label="Chauffage jusqu’à"
            value={model.minimumOperatingTemperatureC != null ? `${model.minimumOperatingTemperatureC}°C` : isColdClimate ? "-25°C" : "-15°C"}
          />
          <Leader label="Garantie" value={warrantyOf(product)} />
          {logisVertDollars != null && logisVertDollars > 0 ? (
            <Leader
              label="LogisVert"
              strong
              value={`${logisVertDollars.toLocaleString("fr-CA")} $`}
              icon={<Image src="/images/hydroquebec.png" alt="" width={14} height={14} className="object-contain" style={{ width: 14, height: 14, maxWidth: "none" }} />}
            />
          ) : null}
        </dl>
        <div className="relative z-20 mt-3 py-4" style={{ borderTop: `1px solid ${C.line}` }}>
          <Link href={`/produit/${model.slug}`} className="inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: C.ink }}>
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

export function ModelFolio({ brandName, brandSlug, brandRawName, models }: { brandName: string; brandSlug: string; brandRawName: string; models: CatalogueProduct[] }) {
  const compare = (
    <Link
      href={`/thermopompes?brand=${brandSlug}`}
      className="mqs-chip-ink mqs-btn inline-flex items-center justify-center gap-3 px-5 py-3 text-[14.5px] font-semibold"
      style={{ border: `1px solid ${C.ink}`, color: C.ink }}
    >
      Comparer les modèles <span aria-hidden="true">›</span>
    </Link>
  );
  return (
    <section id="modeles" aria-labelledby="modeles-titre" className="scroll-mt-24" style={{ background: C.cream, color: C.ink, fontFamily: DISPLAY }}>
      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <RunningHead left={`Thermopompes ${brandName}`} right="Chapitre III · Les modèles" />
        <header className="mt-10 grid items-end gap-x-12 gap-y-6 lg:mt-14 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <InkNumeral text="03" size="clamp(110px, 15vw, 250px)" stroke="clamp(1px, 0.12vw, 2px)" className="-ml-[0.04em]" />
          <div className="min-w-0 lg:pb-3">
            <p className="text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.3em", margin: 0, color: C.mute }}>
              Chapitre III
            </p>
            <motion.h2
              id="modeles-titre"
              style={{ fontFamily: DISPLAY, fontSize: "clamp(34px, 4.6vw, 70px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.98, margin: "14px 0 0" }}
              initial={{ clipPath: "inset(0 0 100% 0)", y: 18 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            >
              Modèles à explorer
            </motion.h2>
          </div>
          <div className="hidden sm:block lg:pb-4">{compare}</div>
        </header>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4" style={{ listStyle: "none", padding: 0 }}>
          {models.slice(0, 48).map((product, i) => (
            <motion.li
              key={product.model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: EASE, delay: (i % 4) * 0.08 }}
            >
              <Fiche product={product} index={i} />
            </motion.li>
          ))}
        </ul>
        {models.length > 48 && (
          <p className="mt-10 text-center text-[15px]" style={{ color: C.mute, fontFamily: "var(--font-sans)" }}>
            {models.length - 48} autres modèles {brandRawName} sont au catalogue.{" "}
            <Link href={`/thermopompes?brand=${brandSlug}`} className="mqs-u font-semibold" style={{ color: C.ink }}>
              Voir tous les modèles {brandRawName}
            </Link>
          </p>
        )}
        <div className="mt-8 sm:hidden [&>a]:w-full">{compare}</div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Colophon : sources et garanties (mêmes éléments que TrustStrip)
   ------------------------------------------------------------------ */

const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
];

export function MonoColophon() {
  return (
    <section aria-label="Sources et garanties" style={{ background: C.cream, color: C.ink, fontFamily: DISPLAY }}>
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:px-12">
        <div className="pt-6" style={{ borderTop: `2px solid ${C.ink}` }}>
          <p className="text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.3em", margin: 0 }}>
            Colophon
          </p>
          <p className="text-[13.5px] leading-snug" style={{ color: C.mute, margin: "8px 0 0", fontFamily: "var(--font-sans)" }}>
            Sources et garanties
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {TRUST.map((it, i) => (
            <motion.li
              key={it.label}
              className="relative pt-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left"
                style={{ background: C.ink, opacity: 0.3 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.1 + i * 0.1 }}
              />
              <span className="block text-[15px] font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
                {typo(it.label)}
              </span>
              <span className="mt-1.5 block text-[13.5px] leading-snug" style={{ color: C.mute, fontFamily: "var(--font-sans)" }}>
                {typo(it.hint)}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Quatrième de couverture : appel à ThermoMatch
   ------------------------------------------------------------------ */

export function MonoBackCover({ title, text, brandName }: { title: string; text: string; brandName: string }) {
  return (
    <section aria-labelledby="couverture-titre" className="relative overflow-hidden" style={{ background: C.ink, color: C.cream, fontFamily: DISPLAY }}>
      <DriftName name={brandName} />
      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-[820px]">
          <motion.p
            className="text-[11.5px] font-semibold uppercase"
            style={{ letterSpacing: "0.3em", margin: 0, color: C.creamMute }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            ThermoMatch
          </motion.p>
          <motion.h2
            id="couverture-titre"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(34px, 4.6vw, 72px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: "16px 0 0", color: C.cream }}
            initial={{ clipPath: "inset(0 0 100% 0)", y: 22 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            {typo(title)}
          </motion.h2>
          <motion.p
            className="max-w-[640px] text-[17px] leading-[1.65]"
            style={{ color: C.creamMute, margin: "22px 0 0", fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
          >
            {typo(text)}
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          >
            <Link href="/trouver-ma-thermopompe" className="mqs-btn inline-flex min-h-[52px] items-center justify-center gap-3 px-7 py-4 text-[15px] font-semibold" style={{ background: C.cream, color: C.ink }}>
              Lancer ThermoMatch
              <span aria-hidden="true" className="mqs-arrow">
                →
              </span>
            </Link>
            <Link href="/soumission" className="mqs-btn inline-flex min-h-[52px] items-center justify-center px-7 py-4 text-[15px] font-semibold" style={{ border: `1px solid ${C.creamLine}`, color: C.cream }}>
              Demander une soumission
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
