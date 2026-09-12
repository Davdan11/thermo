/* eslint-disable react/no-unescaped-entities */
/* ==================================================================
   Bloc de maillage interne d'une fiche produit :
   - machines identiques vendues sous d'autres marques (rebadges)
   - page de la classe de capacité, de la marque par type, LogisVert
   - classements pertinents
   Utilisé seulement par /produit/[slug] : présenté comme deux feuilles
   de la fiche d'ingénierie (équivalences ≡, classement par COP en barres).
   ================================================================== */

import Link from "next/link";
import { capacitySlug, getSeoModel, getSeoModels, CAPACITY_CLASSES } from "@/lib/seo/programmatic";
import { Arrow, GrowBar, Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE, ORANGE, WASH } from "@/components/sections-v2/produit/tokens";

export function ProductSeoLinks({ slug }: { slug: string }) {
  const m = getSeoModel(slug);
  if (!m) return null;
  const rep = m.canonicalSlug === m.slug ? m : getSeoModel(m.canonicalSlug);
  const siblings = rep ? [rep, ...rep.alsoSoldAs.map((a) => getSeoModel(a.slug)).filter((x): x is NonNullable<typeof x> => !!x)] : [];
  const others = siblings.filter((x) => x.slug !== m.slug);
  const sameClass = getSeoModels()
    .filter((x) => x.canonicalSlug === x.slug && x.slug !== rep?.slug && x.nominalBtu === m.nominalBtu && x.kind === m.kind && x.brandSlug !== m.brandSlug)
    .sort((a, b) => (b.cop5 ?? 0) - (a.cop5 ?? 0))
    .slice(0, 4);
  const typeSlug = m.kind === "murale" ? "murales" : "centrales";
  const maxCop = Math.max(0, ...sameClass.map((x) => x.cop5 ?? 0));

  const chip = "sv2f-chip sv2f-mono inline-block px-3 py-2 text-[12.5px] no-underline";

  return (
    <section className="flex flex-col gap-16 lg:gap-20">
      {others.length > 0 && (
        <div>
          <SheetHead
            kicker="Équivalences"
            title="Même machine, autres marques"
            lead={
              <>
                Ces fiches partagent exactement les mêmes données certifiées (capacité à -8 °C et -15 °C, COP, SEER2, HSPF2) : il s'agit
                selon toute vraisemblance du même appareil vendu sous une autre marque. Comparez le prix installé et la garantie.
              </>
            }
          />
          <div className="mt-6 flex flex-wrap items-start gap-2.5">
            <Reveal className="flex items-center gap-2.5">
              <span className="sv2f-mono inline-block px-3 py-2 text-[12.5px]" style={{ background: INK, color: "#fff", border: `1px solid ${INK}` }}>
                {m.brand} {m.name}
              </span>
              <span aria-hidden="true" className="sv2f-mono px-1 text-[18px]" style={{ color: ORANGE, lineHeight: 1 }}>
                ≡
              </span>
            </Reveal>
            <ul className="m-0 flex min-w-0 flex-1 basis-[280px] list-none flex-wrap gap-2.5 p-0">
              {others.map((x, i) => (
                <Reveal as="li" key={x.slug} delay={0.1 + 0.05 * i} y={0} x={-8} className="min-w-0 max-w-full">
                  <Link href={`/produit/${x.slug}`} className={`${chip} max-w-full`} style={{ border: `1px solid ${LINE}`, color: INK, overflowWrap: "anywhere" }}>
                    {x.brand} {x.name}
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      )}

      {sameClass.length > 0 && (
        <div>
          <SheetHead kicker="Même classe" title={`Autres ${m.kind === "murale" ? "murales" : "centrales"} ${m.nominalBtu.toLocaleString("fr-CA")} BTU, par COP à -15 °C`} />
          <ol className="m-0 mt-6 list-none p-0" style={{ borderTop: `1px solid ${INK}` }}>
            {sameClass.map((x, i) => (
              <Reveal
                as="li"
                key={x.slug}
                delay={0.07 * i}
                y={8}
                className="sv2f-tr grid grid-cols-[34px_minmax(0,1fr)] items-baseline gap-x-3 gap-y-2 py-4 pl-3 pr-2 md:grid-cols-[40px_minmax(0,1fr)_minmax(220px,320px)] md:items-center"
                style={{ borderBottom: `1px solid ${LINE}` }}
              >
                <span aria-hidden="true" className="sv2f-mono text-[12px]" style={{ color: LABEL }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link href={`/produit/${x.slug}`} className="sv2f-lnk min-w-0 text-[15px] font-semibold" style={{ color: INK, textDecoration: "none", overflowWrap: "anywhere" }}>
                  <span className="sv2f-lnk-t">
                    {x.brand} {x.name}
                  </span>
                </Link>
                <div className="col-start-2 min-w-0 md:col-start-3">
                  <span className="sv2f-mono block text-[12px]" style={{ color: MUTE }}>
                    {x.cop5 !== null ? `COP ${x.cop5.toLocaleString("fr-CA", { minimumFractionDigits: 2 })}` : ""}
                    {x.h5Btu !== null ? ` · ${x.h5Btu.toLocaleString("fr-CA")} BTU/h à -15 °C` : ""}
                  </span>
                  {x.cop5 !== null && maxCop > 0 && (
                    <span className="mt-2 block">
                      <GrowBar pct={(x.cop5 / maxCop) * 100} color={i === 0 ? ORANGE : INK} height={3} track={WASH} delay={0.15 + 0.07 * i} />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      )}

      <Reveal className="-mt-6 flex flex-wrap gap-2.5 lg:-mt-10">
        {(CAPACITY_CLASSES as readonly number[]).includes(m.nominalBtu) && (
          <Link href={`/thermopompes/${capacitySlug(m.nominalBtu)}`} className="sv2f-chip sv2f-lnk inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold" style={pill}>
            Toutes les thermopompes {m.nominalBtu.toLocaleString("fr-CA")} BTU <Arrow size={13} />
          </Link>
        )}
        <Link href={`/marques/${m.brandSlug}/${typeSlug}`} className="sv2f-chip sv2f-lnk inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold" style={pill}>
          {m.kind === "murale" ? "Murales" : "Centrales"} {m.brand} <Arrow size={13} />
        </Link>
        {m.logisVertDollars > 0 && (
          <Link href={`/subventions/logisvert/${m.brandSlug}`} className="sv2f-chip sv2f-lnk inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold" style={pill}>
            Subvention LogisVert {m.brand} <Arrow size={13} />
          </Link>
        )}
        {m.coldClimate && (
          <Link href="/meilleures-thermopompes/grand-froid" className="sv2f-chip sv2f-lnk inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold" style={pill}>
            Classement grand froid <Arrow size={13} />
          </Link>
        )}
      </Reveal>
    </section>
  );
}

const pill: React.CSSProperties = {
  border: `1px solid ${INK}`,
  color: INK,
  textDecoration: "none",
};
