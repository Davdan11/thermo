import type { ProductDetail } from "@/lib/data/queries/product-detail";
import { logisVertDeLaFiche } from "@/lib/subsidies/logisvert-official";
import { getLogisVertListInfo } from "@/lib/subsidies/logisvert-meta";
import Image from "next/image";
import { ArrowRule, CropMarks, DrawCheck, InViewTick, Reveal, Rule, SheetHead } from "@/components/sections-v2/produit/motion";
import { AMBER, GREEN, INK, LABEL, LINE, MUTE } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   LogisVertBadge — subvention de la liste LogisVert en vigueur

   Montant : celui de la liste officielle (fichier que lit l'outil de
   recherche d'Hydro-Québec), jamais estimé. Libellés de l'outil :
   « Subvention » et, pour les combinaisons admissibles,
   « Bonification – Multilogements ».
   Une fiche absente de la liste en vigueur l'indique clairement, sans
   montant : elle n'est pas admissible pour une installation faite
   aujourd'hui.
   Présentation : feuille « Subvention » de la fiche d'ingénierie.
   ------------------------------------------------------------------ */

const OUTIL_HQ = "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/recherche-themopompes-efficaces.html";
const CONDITIONS_HQ = "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/residentiel.html";
const BONIF_HQ = "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/residentiel/bonification-multilogements.html";

interface LogisVertBadgeProps {
  detail: ProductDetail;
}

const frIso = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function HqLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: INK, textDecorationColor: GREEN }}>
      {children}
    </a>
  );
}

export function LogisVertBadge({ detail }: LogisVertBadgeProps) {
  const { model, brand, outdoorUnit } = detail;
  const liste = getLogisVertListInfo();
  const entry = logisVertDeLaFiche(model, brand.name, outdoorUnit?.modelNumber);
  const head = (
    <SheetHead
      id="logisvert-title"
      kicker="Subvention"
      title="Programme LogisVert — Hydro-Québec"
      aside={<Image src="/images/hydroquebec.png" alt="Logo Hydro-Québec" width={32} height={32} style={{ width: 26, height: 26, maxWidth: "none", objectFit: "contain" }} />}
    />
  );

  // Absente de la liste en vigueur : aucune subvention, et on le dit.
  if (!entry || entry.logisVertDollars <= 0) {
    const retiree = model.logisVertListed === false;
    return (
      <section id="subvention-logisvert" aria-labelledby="logisvert-title" style={{ scrollMarginTop: 110 }}>
        {head}
        <div className="relative mt-7 p-5 sm:p-8" style={{ border: `1px solid ${LINE}` }}>
          <CropMarks />
          <p className="sv2f-mono m-0 text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: AMBER }}>
            {retiree ? "Retirée de la liste en vigueur" : "Absente de la liste en vigueur"}
          </p>
          <p className="m-0 mt-3 max-w-[640px] text-[15px] leading-[1.65]" style={{ color: MUTE }}>
            Cette unité extérieure ne figure pas dans la liste des thermopompes admissibles au programme LogisVert
            {liste.listDate ? <> du <strong style={{ color: INK }}>{liste.listDate}</strong></> : null}. Une thermopompe installée
            aujourd’hui doit être certifiée ENERGY STAR<sup>®</sup> et figurer dans cette liste pour donner droit à une subvention : ce
            site n’affiche donc aucun montant pour ce modèle.
            {/* La date du retrait n'est dite que si elle est plus ancienne que la liste en vigueur (sinon elle répète la phrase). */}
            {retiree && model.logisVertRetiredAt && model.logisVertRetiredAt !== liste.listDateIso ? (
              <> Absente de la liste depuis celle du {frIso(model.logisVertRetiredAt)}.</>
            ) : null}
          </p>
          <p className="m-0 mt-3 max-w-[640px] text-[13px] leading-[1.6]" style={{ color: LABEL }}>
            Déjà installée ? Le montant dépend de la liste en vigueur à la date d’installation : Hydro-Québec publie les listes
            précédentes dans ses archives.
          </p>
        </div>
        <Reveal as="p" delay={0.1} className="m-0 mt-5 max-w-[780px] text-[12.5px] leading-[1.6]" style={{ color: LABEL }}>
          Vérifiez un modèle avec l’<HqLink href={OUTIL_HQ}>outil de recherche d’Hydro-Québec</HqLink>.
        </Reveal>
      </section>
    );
  }

  const dollars = entry.logisVertDollars;
  const btu = entry.heatingBtu17F;
  const bonification = entry.bonificationMultilogements ?? 0;

  return (
    <section id="subvention-logisvert" aria-labelledby="logisvert-title" style={{ scrollMarginTop: 110 }}>
      {head}

      {/* Détail encadré : capacité certifiée → montant */}
      <div className="relative mt-7 p-5 sm:p-8" style={{ border: `1px solid ${LINE}` }}>
        <CropMarks />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
          <div className="min-w-0">
            <Reveal as="p" className="m-0 max-w-[560px] text-[15px] leading-[1.65]" style={{ color: MUTE }}>
              {/* Espace insécable avant les deux-points : la ligne ne se coupe jamais devant « : ». */}
              Subvention de la liste officielle d’Hydro-Québec, pour la combinaison AHRI {entry.ahri}&nbsp;: {entry.coldClimate ? "120" : "50"}&nbsp;$ par 1 000 BTU/h à −8 °C
              {entry.coldClimate ? " (certifiée ENERGY STAR climat froid)" : " (certifiée ENERGY STAR)"}, capacité de{" "}
              <strong className="whitespace-nowrap" style={{ color: INK }}>{btu.toLocaleString("fr-CA")} BTU/h à −8 °C</strong>.
            </Reveal>

            <Reveal delay={0.15} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="sv2f-mono px-3 py-2 text-[12.5px]" style={{ border: `1px solid ${INK}` }}>
                <span style={{ color: LABEL }}>Capacité : </span>
                <span style={{ color: INK, fontWeight: 600 }}>{btu.toLocaleString("fr-CA")} BTU/h à −8 °C</span>
              </span>
              <span className="block min-w-[48px] flex-1">
                <ArrowRule color={GREEN} delay={0.35} />
              </span>
              <span className="sv2f-mono px-3 py-2 text-[12.5px] font-semibold" style={{ border: `1px solid ${GREEN}`, color: GREEN }}>
                {dollars.toLocaleString("fr-CA")} $
              </span>
            </Reveal>
            <Reveal delay={0.3} className="sv2f-mono mt-3 flex items-center gap-2 text-[11px] uppercase" style={{ color: GREEN, letterSpacing: "0.1em" }}>
              <DrawCheck color={GREEN} size={14} delay={0.9} />
              Liste Hydro-Québec{liste.listDate ? ` du ${liste.listDate}` : ""}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:min-w-[260px] lg:text-right">
            <p className="sv2f-mono m-0 text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: LABEL }}>
              Subvention
            </p>
            <p className="sv2f-mono m-0 mt-2 whitespace-nowrap" style={{ color: GREEN, fontSize: "clamp(48px, 5.4vw, 84px)", fontWeight: 500, letterSpacing: "-0.065em", lineHeight: 0.95 }}>
              <InViewTick value={dollars} duration={1.6} />
              &nbsp;$
            </p>
            <Rule color={GREEN} className="mt-4" delay={0.6} origin="right" />
          </Reveal>
        </div>

        {bonification > 0 && (
          <Reveal delay={0.2} className="mt-7 pt-5 text-[13.5px] leading-[1.6]" style={{ borderTop: `1px solid ${LINE}`, color: MUTE }}>
            <span className="sv2f-mono mr-2 text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: LABEL }}>
              Bonification – Multilogements
            </span>
            <strong className="sv2f-mono whitespace-nowrap" style={{ color: INK }}>+ {bonification.toLocaleString("fr-CA")} $</strong>
            <br />
            Seulement pour le propriétaire d’un multilogement admissible (zone de précarité énergétique désignée par Hydro-Québec,
            immeuble construit en 1995 ou avant, un compteur par logement, entre autres conditions), pour une installation faite à
            compter du 15 juin 2026. Ne s’applique pas à une maison. <HqLink href={BONIF_HQ}>Conditions de la bonification</HqLink>.
          </Reveal>
        )}
      </div>

      {/* Conditions */}
      <Reveal as="p" delay={0.1} className="m-0 mt-5 max-w-[780px] text-[12.5px] leading-[1.6]" style={{ color: LABEL }}>
        Montant tiré de la liste des thermopompes admissibles lue par l’outil de recherche d’Hydro-Québec. Il faut aussi respecter
        les conditions du programme (thermopompe neuve, installation par une entreprise titulaire des licences de la RBQ,
        demande dans les neuf mois, entre autres) ; la subvention ne peut dépasser le coût d’achat et d’installation avant taxes.{" "}
        <HqLink href={CONDITIONS_HQ}>Conditions complètes sur le site d’Hydro-Québec</HqLink>.
        {liste.checkedDate ? (
          <>
            <br />
            <span className="sv2f-mono mt-1.5 inline-block text-[11px]" style={{ color: LABEL }}>
              * Liste vérifiée le {liste.checkedDate}
            </span>
          </>
        ) : null}
      </Reveal>
    </section>
  );
}
