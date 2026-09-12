import Link from "next/link";
import type { ProductDetail } from "@/lib/data/queries/product-detail";
import type { SeoModel } from "@/lib/seo/programmatic";
import { Arrow, Reveal, SheetHead, VRule } from "@/components/sections-v2/produit/motion";
import { AMBER, GREEN, INK, LABEL, LINE, MUTE, ORANGE, WASH } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   GoodChoiceSection — « Est-ce le bon modèle pour votre maison ? »

   Un verdict sobre, tiré des données certifiées de la fiche : type
   d'installation, tenue par grand froid, efficacité, subvention. Puis
   « Convient si / Moins indiqué si ». Aucune formule creuse, aucune
   valeur inventée : une donnée absente est dite absente.
   Présentation : feuille « Verdict », lignes numérotées (05.1, 05.2…).
   ------------------------------------------------------------------ */

interface Props {
  detail: ProductDetail;
  seo?: SeoModel | null;
}

const fr = (n: number) => n.toLocaleString("fr-CA");

export function GoodChoiceSection({ detail, seo }: Props) {
  const { model, configuration, isColdClimate, editorial } = detail;
  const nominal = model.nominalCapacityBtu ?? seo?.nominalBtu ?? null;
  const h5 = seo?.h5Btu ?? null;
  const cop5 = seo?.cop5 ?? null;
  const hspf2 = configuration?.hspf2 ?? seo?.hspf2 ?? null;
  const seer2 = configuration?.seer2 ?? seo?.seer2 ?? null;
  const minTemp = configuration?.minHeatingTempC ?? null;
  const logisVert = seo?.logisVertDollars ?? 0;
  const retention = nominal && h5 ? Math.round((h5 / nominal) * 100) : null;
  const noise = configuration?.noiseIndoorMinDbA ?? null;

  /* ── Verdict : quatre lignes, une donnée chacune ── */
  const rows: Array<{ label: string; value: string; note?: string }> = [];

  if (model.systemType === "wall-single") {
    rows.push({ label: "Installation", value: "Murale, une zone", note: "Sans conduits. Chauffe et climatise la pièce où elle est posée et les aires ouvertes attenantes." });
  } else if (model.systemType === "central-ducted") {
    rows.push({ label: "Installation", value: "Centrale gainable", note: "Réutilise les conduits existants d'une fournaise. Toute la maison, une seule unité intérieure." });
  } else if (model.systemType === "multi-zone") {
    rows.push({ label: "Installation", value: `Multizone, ${model.zones ? `${model.zones} têtes` : "plusieurs têtes"}`, note: "Une unité extérieure, une tête par pièce, chacune réglée séparément." });
  }

  if (h5 !== null && nominal) {
    rows.push({
      label: "Par grand froid",
      value: `${fr(h5)} BTU/h à -15 °C`,
      note: `${retention} % de la capacité nominale (${fr(nominal)} BTU/h)${cop5 !== null ? `, COP ${cop5.toLocaleString("fr-CA", { minimumFractionDigits: 2 })} à -15 °C` : ""}${minTemp !== null ? `. Fonctionne jusqu'à ${minTemp} °C` : ""}.`,
    });
  } else {
    rows.push({
      label: "Par grand froid",
      value: isColdClimate ? "Certifiée climat froid" : "Capacité à -15 °C non publiée",
      note: isColdClimate
        ? `Certification ENERGY STAR climat froid${minTemp !== null ? `. Fonctionne jusqu'à ${minTemp} °C` : ""}.`
        : "ENERGY STAR ne publie pas de mesure à -15 °C pour cet appareil. Prévoyez un appoint (plinthes) les jours de grand froid.",
    });
  }

  if (hspf2 !== null || seer2 !== null) {
    rows.push({
      label: "Efficacité",
      value: [hspf2 !== null ? `HSPF2 ${fr(hspf2)}` : null, seer2 !== null ? `SEER2 ${fr(seer2)}` : null].filter(Boolean).join(" · "),
      note: hspf2 !== null
        ? hspf2 >= 10 ? "Parmi les plus efficaces en chauffage vendues au Québec." : hspf2 >= 8.5 ? "Efficacité de chauffage dans la bonne moyenne du marché." : "Efficacité de chauffage modeste : le coût d'exploitation sera plus élevé."
        : "Le HSPF2 (chauffage) n'est pas publié ; seul le SEER2 (climatisation) l'est.",
    });
  }

  rows.push({
    label: "Subvention LogisVert",
    value: logisVert > 0 ? `${fr(logisVert)} $` : "Non admissible",
    note: logisVert > 0
      ? "Montant officiel d'Hydro-Québec pour le jumelage de référence. Thermopompes À Vendre le vérifie sur chaque appariement."
      : "Aucun appariement de cet appareil ne figure dans la liste LogisVert d'Hydro-Québec à ce jour.",
  });

  /* ── Convient si / Moins indiqué si ── */
  const pros: string[] = [];
  const cons: string[] = [];

  if (model.systemType === "wall-single") {
    pros.push("Vous chauffez aux plinthes ou aux convecteurs, sans conduits.");
    pros.push("La pièce principale est ouverte : salon, cuisine, aire commune.");
    cons.push("Votre maison a plusieurs pièces fermées à chauffer : un multizone convient mieux.");
  } else if (model.systemType === "central-ducted") {
    pros.push("Votre maison a déjà des conduits (fournaise au gaz, au mazout ou électrique).");
    pros.push("Vous voulez une seule unité intérieure et un confort uniforme.");
    cons.push("Vous n'avez pas de conduits : les ajouter coûte souvent plus cher que la machine.");
  } else if (model.systemType === "multi-zone") {
    pros.push("Plusieurs pièces fermées à chauffer avec un réglage indépendant.");
    pros.push("Vous voulez une seule unité extérieure pour limiter le bruit et l'encombrement.");
    cons.push("Une seule aire ouverte à couvrir : une murale simple zone coûte moins cher.");
  }

  if (isColdClimate || (retention !== null && retention >= 70)) {
    pros.push("Vous comptez sur la thermopompe comme chauffage principal en hiver.");
  } else {
    cons.push("Vous voulez vous passer d'appoint sous -20 °C : visez une machine certifiée climat froid.");
  }
  if (noise !== null && noise <= 22) pros.push(`Installation dans une chambre : ${noise} dB(A) au minimum, parmi les plus silencieuses.`);
  if (configuration?.hasWifi) pros.push("Vous voulez régler la température à distance : Wi-Fi intégré.");
  if (logisVert === 0) cons.push("La subvention LogisVert compte dans votre budget : elle ne s'applique pas ici.");
  if (editorial?.bestFor) pros.push(editorial.bestFor);

  if (rows.length === 0) return null;

  /* Couleur de la valeur : orange pour la mesure certifiée à -15 °C, vert pour un montant LogisVert. */
  const valueColor = (label: string) => (label === "Par grand froid" && h5 !== null && nominal ? ORANGE : label === "Subvention LogisVert" && logisVert > 0 ? GREEN : INK);

  return (
    <section id="bon-choix" aria-labelledby="bon-choix-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead
        id="bon-choix-title"
        kicker="Verdict"
        title="Est-ce le bon modèle pour votre maison ?"
        lead="Lecture des données certifiées de cette fiche. Le calibre exact dépend de votre maison, pas de la machine."
      />

      <dl className="m-0 mt-7" style={{ borderTop: `1px solid ${INK}` }}>
        {rows.map((r, i) => (
          <Reveal
            key={r.label}
            delay={0.07 * i}
            y={10}
            className="sv2f-row sv2f-tr grid grid-cols-1 gap-1.5 py-5 pl-3 pr-2 sm:grid-cols-[minmax(190px,250px)_1fr] sm:gap-6 sm:pl-4"
            style={{ borderBottom: `1px solid ${LINE}` }}
          >
            <dt className="sv2f-mono pt-1.5 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
              <span aria-hidden="true" className="sv2f-rownum" style={{ color: INK }} />
              <span aria-hidden="true"> — </span>
              {r.label}
            </dt>
            <dd className="m-0">
              <p className="m-0 text-[19px] font-semibold sm:text-[21px]" style={{ letterSpacing: "-0.03em", color: valueColor(r.label), lineHeight: 1.25 }}>
                {r.value}
              </p>
              {r.note && (
                <p className="m-0 mt-1.5 max-w-[640px] text-[13.5px] leading-[1.55]" style={{ color: MUTE }}>
                  {r.note}
                </p>
              )}
            </dd>
          </Reveal>
        ))}
      </dl>

      <div className="mt-9 grid grid-cols-1 gap-9 sm:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] sm:gap-8">
        <div className="min-w-0">
          <Reveal as="p" className="sv2f-mono m-0 flex items-center gap-3 text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: GREEN }}>
            <span aria-hidden="true" className="block h-px w-6" style={{ background: GREEN }} />
            Convient si
          </Reveal>
          <ul className="m-0 mt-3 list-none p-0">
            {pros.map((p, i) => (
              <Reveal as="li" key={p} delay={0.08 * i} y={8} className="flex gap-3 py-3 text-[14.5px] leading-[1.5]" style={{ borderTop: i ? `1px solid ${LINE}` : "none", color: INK }}>
                <span aria-hidden="true" className="sv2f-mono shrink-0" style={{ color: GREEN, fontWeight: 600 }}>
                  +
                </span>
                <span>{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <VRule className="hidden h-full sm:block" />
        <div className="min-w-0">
          <Reveal as="p" delay={0.1} className="sv2f-mono m-0 flex items-center gap-3 text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: AMBER }}>
            <span aria-hidden="true" className="block h-px w-6" style={{ background: AMBER }} />
            Moins indiqué si
          </Reveal>
          <ul className="m-0 mt-3 list-none p-0">
            {cons.length ? (
              cons.map((c, i) => (
                <Reveal as="li" key={c} delay={0.1 + 0.08 * i} y={8} className="flex gap-3 py-3 text-[14.5px] leading-[1.5]" style={{ borderTop: i ? `1px solid ${LINE}` : "none", color: INK }}>
                  <span aria-hidden="true" className="sv2f-mono shrink-0" style={{ color: AMBER, fontWeight: 600 }}>
                    –
                  </span>
                  <span>{c}</span>
                </Reveal>
              ))
            ) : (
              <li className="py-3 text-[14px]" style={{ color: MUTE }}>
                Aucune réserve particulière d&apos;après les données publiées.
              </li>
            )}
          </ul>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4" style={{ background: WASH, borderTop: `1px solid ${LINE}` }}>
        <p className="m-0 text-[13.5px]" style={{ color: MUTE }}>
          Le dimensionnement dépend de votre superficie, de votre isolation et de votre zone climatique.
        </p>
        <Link href="/trouver-ma-thermopompe" className="sv2f-lnk inline-flex items-center gap-2 whitespace-nowrap text-[14.5px] font-semibold" style={{ color: INK }}>
          <span className="sv2f-lnk-t">Vérifier pour ma maison</span>
          <span style={{ color: ORANGE, display: "inline-flex" }}>
            <Arrow size={14} />
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
