import Link from "next/link";
import type { ProductDetail } from "@/lib/data/queries/product-detail";
import type { SeoModel } from "@/lib/seo/programmatic";

/* ------------------------------------------------------------------
   GoodChoiceSection — « Est-ce le bon modèle pour votre maison ? »

   Un verdict sobre, tiré des données certifiées de la fiche : type
   d'installation, tenue par grand froid, efficacité, subvention. Puis
   « Convient si / Moins indiqué si ». Aucune formule creuse, aucune
   valeur inventée : une donnée absente est dite absente.
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
      ? "Montant officiel d'Hydro-Québec pour le jumelage de référence de cette fiche. Vérifié sur chaque appariement."
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

  return (
    <section id="bon-choix" aria-labelledby="bon-choix-title" style={{ border: "1px solid #e4ddd5", background: "#fff" }}>
      <div style={{ padding: "28px 28px 8px", borderBottom: "1px solid #e4ddd5" }}>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e54b17" }}>Verdict</p>
        <h2 id="bon-choix-title" style={{ margin: "8px 0 6px", fontSize: 24, fontWeight: 800, letterSpacing: "-0.01em", color: "#071d2b", lineHeight: 1.2 }}>
          Est-ce le bon modèle pour votre maison ?
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 14, color: "#536873", lineHeight: 1.6, maxWidth: 640 }}>
          Lecture des données certifiées de cette fiche. Le calibre exact dépend de votre maison, pas de la machine.
        </p>
      </div>

      <dl style={{ margin: 0, padding: "8px 28px", display: "grid", gridTemplateColumns: "1fr", rowGap: 0 }}>
        {rows.map((r, i) => (
          <div key={r.label} style={{ display: "grid", gridTemplateColumns: "minmax(140px, 180px) 1fr", gap: 16, padding: "16px 0", borderBottom: i < rows.length - 1 ? "1px solid #f0ebe4" : "none" }}>
            <dt style={{ fontSize: 13, fontWeight: 600, color: "#536873", paddingTop: 2 }}>{r.label}</dt>
            <dd style={{ margin: 0 }}>
              <p style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#071d2b", letterSpacing: "-0.01em" }}>{r.value}</p>
              {r.note && <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "#536873", lineHeight: 1.55 }}>{r.note}</p>}
            </dd>
          </div>
        ))}
      </dl>

      <div style={{ borderTop: "1px solid #e4ddd5", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <div style={{ padding: "22px 28px" }}>
          <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1b6b3a" }}>Convient si</p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {pros.map((p) => (
              <li key={p} style={{ display: "flex", gap: 10, fontSize: 14, color: "#172126", lineHeight: 1.5 }}>
                <span aria-hidden="true" style={{ color: "#1b6b3a", fontWeight: 700, flexShrink: 0 }}>+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ padding: "22px 28px", borderLeft: "1px solid #e4ddd5" }}>
          <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a5a00" }}>Moins indiqué si</p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {cons.length ? cons.map((c) => (
              <li key={c} style={{ display: "flex", gap: 10, fontSize: 14, color: "#172126", lineHeight: 1.5 }}>
                <span aria-hidden="true" style={{ color: "#8a5a00", fontWeight: 700, flexShrink: 0 }}>–</span>
                <span>{c}</span>
              </li>
            )) : (
              <li style={{ fontSize: 14, color: "#536873" }}>Aucune réserve particulière d'après les données publiées.</li>
            )}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #e4ddd5", padding: "16px 28px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, background: "#faf8f4" }}>
        <p style={{ margin: 0, fontSize: 13, color: "#536873" }}>
          Le dimensionnement dépend de votre superficie, de votre isolation et de votre zone climatique.
        </p>
        <Link href="/trouver-ma-thermopompe" style={{ fontSize: 14, fontWeight: 700, color: "#e54b17", textDecoration: "none", whiteSpace: "nowrap" }}>
          Vérifier pour ma maison →
        </Link>
      </div>
    </section>
  );
}
