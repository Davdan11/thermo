import Link from "next/link";
import { NATURE_LABEL, type CapacitesFiche } from "@/lib/data/capacites";
import { formatMinTemp, minTempMention, type MinTempSourceType } from "@/lib/thermomatch/min-temp-source";
import { ColdChart, type ColdPoint } from "@/components/sections-v2/produit/charts";
import { Arrow, Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { INK, LABEL, LINE, MUTE, ORANGE, WASH } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   ColdClimatePerformance — capacités de chauffage selon la température,
   chacune avec sa condition d'essai et sa source (src/lib/data/capacites.ts),
   toutes du même appariement AHRI que le montant LogisVert de la fiche.
   Présentation : feuille « Grand froid » — courbe au trait (point à
   −15 °C en orange ; tireté vers une capacité maximale, autre condition
   que les capacités cotées), tableau à filets, puis le maintien à −15 °C
   écrit avec son numérateur et son dénominateur.
   Jamais de « 100 % » sur le calibre commercial ni sur la puissance
   nominale de la liste LogisVert : ce ne sont pas des mesures de chauffage.
   ------------------------------------------------------------------ */

interface ColdClimatePerformanceProps {
  capacites: CapacitesFiche;
  /** Température minimale de chauffage résolue (ProductDetail.minHeatingTemp). */
  minHeatingTempC: number | null | undefined;
  /** Nature de sa source, pour la mention ; absente = officiel. */
  minHeatingTempSource?: MinTempSourceType | null;
}

const th = "sv2f-mono py-3 text-[10.5px] font-normal uppercase";
const fr = (n: number) => n.toLocaleString("fr-CA");
const degC = (c: number) => `${c < 0 ? "−" : ""}${fr(Math.abs(c))} °C`;
const degF = (f: number) => `${f} °F`;

export function ColdClimatePerformance({ capacites, minHeatingTempC, minHeatingTempSource }: ColdClimatePerformanceProps) {
  const { mesures, maintien, remarques, ahri, calibre } = capacites;
  if (mesures.length === 0) return null;

  // Mêmes points que le tableau ; pourcentages seulement sur la base cotée à 8,3 °C.
  const points: ColdPoint[] = mesures.map((m) => ({
    t: m.tempC as number,
    btu: m.btu,
    pct: maintien ? (m.cle === "h47" ? 100 : m.cle === "h5" ? maintien.pct : null) : null,
    ref: !!maintien && m.cle === "h47",
    max: m.nature === "maximale",
    tag: m.nature === "maximale" ? "MAXIMALE" : "COTÉE",
  }));

  const notes: string[] = [...remarques];
  if (calibre) notes.push(`Le calibre commercial (${fr(calibre.btu)} BTU) est une classe de vente, pas une mesure de chauffage : il n’entre dans aucun pourcentage.`);
  if (minHeatingTempC != null) {
    notes.push(`Chauffe jusqu’à ${formatMinTemp(minHeatingTempC)} : ${minTempMention(minHeatingTempSource).toLowerCase()}. Cela ne garantit pas que l’appareil conserve toute sa capacité à cette température.`);
  }
  notes.push("Une source de chauffage d’appoint peut demeurer nécessaire selon la maison, le dimensionnement et les conditions extérieures.");

  return (
    <section id="performance" aria-labelledby="performance-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead
        id="performance-title"
        kicker="Grand froid"
        title="Performance en climat froid"
        lead={
          <>
            La capacité de chauffage d&apos;une thermopompe baisse avec la température extérieure. Chaque valeur est donnée avec sa condition d&apos;essai et sa source{ahri ? `, pour l’appariement AHRI n° ${ahri}` : ""}.
          </>
        }
      />

      {/* Dessin (décor : les valeurs sont dans le tableau) */}
      <figure className="m-0 mt-9">
        <div className="px-1">
          <ColdChart points={points} minTemp={minHeatingTempC ?? null} />
        </div>
        <figcaption className="sv2f-mono mt-4 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
          Fig. — Capacité de chauffage selon la température extérieure (tireté : autre condition d’essai)
        </figcaption>
      </figure>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-[13px] sm:text-[14px]" style={{ borderTop: `1px solid ${INK}` }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${LINE}` }}>
              <th scope="col" className={`${th} pl-2 pr-2 text-left sm:pl-3 sm:pr-4`} style={{ color: LABEL, letterSpacing: "0.1em" }}>
                Temp. extérieure
              </th>
              <th scope="col" className={`${th} px-2 text-left sm:px-4`} style={{ color: LABEL, letterSpacing: "0.1em" }}>
                Mesure
              </th>
              <th scope="col" className={`${th} px-2 text-right sm:px-4`} style={{ color: LABEL, letterSpacing: "0.1em" }}>
                Capacité
              </th>
              <th scope="col" className={`${th} hidden pl-4 pr-3 text-right sm:table-cell`} style={{ color: LABEL, letterSpacing: "0.1em" }}>
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {mesures.map((m, i) => {
              const key = m.cle === "h5";
              return (
                <Reveal as="tr" key={m.cle} y={0} delay={0.08 * i} className="sv2f-trow" style={{ borderBottom: `1px solid ${LINE}` }}>
                  <td className="sv2f-mono py-3 pl-2 pr-2 text-left sm:pl-3 sm:pr-4" style={{ color: INK }}>
                    {degC(m.tempC as number)}{" "}
                    <span className="block text-[11px] sm:inline" style={{ color: LABEL }}>
                      ({degF(m.tempF as number)})
                    </span>
                  </td>
                  <td className="px-2 py-3 text-left text-[12.5px] sm:px-4" style={{ color: MUTE }}>
                    {NATURE_LABEL[m.nature]}
                  </td>
                  <td className="sv2f-mono whitespace-nowrap px-2 py-3 text-right sm:px-4" style={{ color: key ? ORANGE : INK, fontWeight: key ? 600 : 400 }}>
                    {fr(m.btu)} BTU/h
                  </td>
                  <td className="sv2f-mono hidden whitespace-nowrap py-3 pl-4 pr-3 text-right text-[11.5px] sm:table-cell" style={{ color: LABEL }}>
                    {m.sourceCourte}
                  </td>
                </Reveal>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Maintien à −15 °C : un seul rapport, numérateur et dénominateur écrits */}
      {maintien && (
        <Reveal delay={0.1} className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1.5 px-4 py-4 sm:px-5" style={{ background: WASH, borderTop: `1px solid ${LINE}` }}>
          <p className="sv2f-mono m-0 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
            Maintien à −15 °C
          </p>
          <p className="sv2f-mono m-0 text-[21px] font-medium" style={{ color: ORANGE, letterSpacing: "-0.03em" }}>
            {maintien.pct} %
          </p>
          <p className="m-0 w-full text-[13px] leading-[1.55]" style={{ color: MUTE }}>
            {maintien.calcul}. C&apos;est le rapport qu&apos;ENERGY STAR utilise pour la mention climat froid ; deux valeurs du même appariement.
          </p>
        </Reveal>
      )}

      {/* Remarques de lecture */}
      <Reveal as="ol" delay={0.1} className="m-0 mt-5 flex list-none flex-col gap-2 p-0">
        {notes.map((n, i) => (
          <li key={i} className="flex gap-3 text-[12.5px] leading-[1.55]" style={{ color: MUTE }}>
            <span className="sv2f-mono shrink-0" style={{ color: ORANGE }}>
              {i + 1}
            </span>
            <span>{n}</span>
          </li>
        ))}
      </Reveal>
      <Link href="/methode#capacites" className="sv2f-lnk mt-4 inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: INK }}>
        <span className="sv2f-lnk-t">Comment nous lisons une capacité</span>
        <Arrow size={13} />
      </Link>
    </section>
  );
}
