"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import type { PartRow } from "./data";

/* ==================================================================
   Nomenclature : mêmes colonnes et mêmes liens que ModelTable, en deux
   habillages. « bp » = liste de pièces tracée sur le bleu de plan ;
   « al » = plaques signalétiques d’aluminium. Sous 900 px, chaque ligne
   devient une fiche ; les rôles ARIA gardent la sémantique de tableau.

   Apparition des lignes : un seul IntersectionObserver par tableau
   (jusqu’à 170 lignes), une fois par ligne. Le HTML serveur est complet
   et visible ; la classe d’animation n’est posée qu’après le montage.
   ================================================================== */

export function PartsTable({
  rows,
  skin,
  caption,
  showRank = false,
  metricLabel,
}: {
  rows: PartRow[];
  skin: "bp" | "al";
  caption?: string;
  showRank?: boolean;
  metricLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  // Sous 900 px, les longues listes (jusqu’à 170 fiches) montrent d’abord 12 modèles.
  // Tout reste dans le HTML (moteurs de recherche, lecteurs d’écran) ; le reste s’affiche au clic.
  const LIMIT = 12;
  const [open, setOpen] = useState(false);
  const collapsible = rows.length > LIMIT;

  useEffect(() => {
    const box = ref.current;
    // Lu ici directement : useReduced() vaut faux pendant l’hydratation, et les lignes ne doivent
    // jamais être masquées pour qui a demandé moins d’animations.
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!box || reduce || calm || typeof IntersectionObserver === "undefined") return;
    const trs = Array.from(box.querySelectorAll<HTMLTableRowElement>("tbody tr"));
    const vh = window.innerHeight;
    // Les lignes déjà à l’écran restent telles quelles : on n’anime que ce qui arrive.
    const pending = trs.filter((tr) => tr.getBoundingClientRect().top > vh * 0.95);
    if (!pending.length) return;
    box.classList.add("pt-anim");
    const io = new IntersectionObserver(
      (entries) => {
        let k = 0;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const tr = e.target as HTMLElement;
          tr.style.transitionDelay = `${Math.min(k, 8) * 45}ms`;
          tr.classList.add("pt-in");
          io.unobserve(tr);
          k += 1;
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    pending.forEach((tr) => {
      tr.classList.add("pt-wait");
      io.observe(tr);
    });
    return () => {
      io.disconnect();
      box.classList.remove("pt-anim");
      pending.forEach((tr) => {
        tr.classList.remove("pt-wait", "pt-in");
        tr.style.transitionDelay = "";
      });
    };
  }, [reduce, rows.length]);

  if (rows.length === 0) {
    return <p className={`pt-empty pt-empty-${skin}`}>Aucun modèle certifié ne correspond pour l’instant.</p>;
  }
  return (
    <div ref={ref} className={`pt pt-${skin}${collapsible && !open ? " pt-collapsed" : ""}`}>
      <table role="table">
        {caption ? <caption>{caption}</caption> : null}
        <thead role="rowgroup">
          <tr role="row">
            {showRank && (
              <th role="columnheader" scope="col">
                #
              </th>
            )}
            <th role="columnheader" scope="col">
              Modèle
            </th>
            <th role="columnheader" scope="col">
              Marque
            </th>
            <th role="columnheader" scope="col">
              Type
            </th>
            <th role="columnheader" scope="col" className="pt-r">
              Nominal
            </th>
            <th role="columnheader" scope="col" className="pt-r">
              À -15 °C
            </th>
            <th role="columnheader" scope="col" className="pt-r">
              HSPF2
            </th>
            <th role="columnheader" scope="col" className="pt-r">
              SEER2
            </th>
            <th role="columnheader" scope="col" className="pt-r">
              LogisVert
            </th>
            {metricLabel && (
              <th role="columnheader" scope="col" className="pt-r">
                {metricLabel}
              </th>
            )}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {rows.map((m, i) => (
            <tr key={m.key} role="row">
              {showRank && (
                <td role="cell" className="pt-rank">
                  {i + 1}
                </td>
              )}
              <td role="cell" className="pt-model">
                <div className="flex items-center gap-3">
                  <Link href={m.href} className="pt-thumb" aria-hidden="true" tabIndex={-1}>
                    {m.image ? (
                      <Image src={m.image} alt="" width={56} height={44} sizes="56px" className="h-full w-full object-contain p-1" />
                    ) : m.logo ? (
                      <Image src={m.logo} alt="" width={48} height={20} className="object-contain opacity-80" style={{ width: 44, height: 18, maxWidth: "none" }} />
                    ) : null}
                  </Link>
                  <div className="min-w-0">
                    <Link href={m.href} className="pt-name">
                      {m.name}
                    </Link>
                    <div className="pt-serial">{m.outdoorModel}</div>
                  </div>
                </div>
                {m.also ? <div className="pt-also">Aussi : {m.also}</div> : null}
              </td>
              <td role="cell" data-label="Marque">
                <Link href={m.brandHref} className="pt-brand" title={m.brand}>
                  {skin === "al" && m.logo ? (
                    <Image src={m.logo} alt={m.brand} width={80} height={24} className="object-contain object-left" style={{ width: 80, height: 22, maxWidth: "none" }} />
                  ) : (
                    <span>{m.brand}</span>
                  )}
                </Link>
              </td>
              <td role="cell" data-label="Type" className="pt-kind">
                {m.kind}
                {m.cold ? (
                  <>
                    <span className="pt-sep"> · </span>
                    <span className="pt-cold">grand froid</span>
                  </>
                ) : null}
              </td>
              <td role="cell" data-label="Nominal" className="pt-r pt-num">
                {m.nominal}
              </td>
              <td role="cell" data-label="À -15 °C" className="pt-r pt-num">
                {m.h5 ?? <span className="pt-na">n/d</span>}
              </td>
              <td role="cell" data-label="HSPF2" className="pt-r pt-num">
                {m.hspf2}
              </td>
              <td role="cell" data-label="SEER2" className="pt-r pt-num">
                {m.seer2}
              </td>
              <td role="cell" data-label="LogisVert" className="pt-r pt-num pt-lv">
                {m.logisVert ?? "—"}
              </td>
              {metricLabel && (
                <td role="cell" data-label={metricLabel} className="pt-r pt-num pt-metric">
                  {m.metric}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {collapsible ? (
        <button type="button" className="pt-more" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "Réduire la liste" : `Voir les ${rows.length - LIMIT} autres modèles`}
        </button>
      ) : null}
    </div>
  );
}
