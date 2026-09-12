import Link from "next/link";
import Image from "next/image";
import { Camera, ArrowRight } from "lucide-react";

/* ==================================================================
   Mise en avant de ThermoScan ailleurs sur le site (accueil, fiches
   produit, guides, subventions, soumission). Trois formats :
   - band   : bandeau sombre pleine largeur, avec les trois gestes
   - card   : encadré clair, pour une colonne latérale ou un article
   - inline : une phrase avec lien, pour un formulaire
   Composant serveur : aucun état, aucune dépendance client.
   ================================================================== */

/* Les trois gestes, en liste numérotée sobre : pas d'icône, pas d'encadré. */
const STEPS = [
  { title: "Photographiez l'étiquette", text: "La plaque signalétique de votre appareil actuel, depuis votre téléphone." },
  { title: "ThermoScan lit la plaque", text: "Marque, modèle, année, fluide, puis la fiche certifiée ENERGY STAR correspondante." },
  { title: "Vous voyez l'écart", text: "L'efficacité face aux modèles d'aujourd'hui et le montant LogisVert admissible." },
];

const ORANGE = "#e54b17";
const NAVY = "#0C1821";
/** Logo recadré (862 × 191), sans les marges du fichier original : lisible à petite taille. */
const NAV_LOGO = "/images/thermoscan-logo-nav.webp";
const NAV_LOGO_RATIO = 862 / 191;

/** Le logo ThermoScan est blanc et orange : sur un fond clair, on le pose sur une pastille marine. */
export function ThermoScanBadge({ height = 20, href }: { height?: number; href?: string }) {
  // Largeur explicite : avec « width: auto » et le « max-width: 100% » de Tailwind, l'image se réduit à
  // zéro dans un conteneur inline-flex et la pastille s'affichait vide.
  const width = Math.round(height * NAV_LOGO_RATIO);
  // next/image : même rendu, mais quelques Ko au lieu du fichier de 862 px (44 Ko).
  const img = <Image src={NAV_LOGO} alt="ThermoScan" width={width} height={height} style={{ height, width, maxWidth: "none", display: "block" }} />;
  const style: React.CSSProperties = { display: "inline-flex", alignItems: "center", background: NAVY, borderRadius: 999, padding: `${Math.round(height * 0.28)}px ${Math.round(height * 0.6)}px`, lineHeight: 0 };
  return href ? <Link href={href} style={style} aria-label="ThermoScan">{img}</Link> : <span style={style}>{img}</span>;
}

export function ThermoScanPromo({ variant = "card", context }: { variant?: "band" | "card" | "inline"; context?: string }) {
  const href = context ? `/thermoscan?depuis=${encodeURIComponent(context)}` : "/thermoscan";

  if (variant === "inline") {
    return (
      <p style={{ margin: 0, fontSize: 14, color: "#536873", lineHeight: 1.55, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 10px" }}>
        <ThermoScanBadge height={18} />
        <span>Vous remplacez une thermopompe ?{" "}
        <Link href={href} style={{ color: ORANGE, fontWeight: 700, textDecoration: "none" }}>
          Scannez son étiquette avec ThermoScan
        </Link>{" "}
        pour joindre sa fiche à votre demande.</span>
      </p>
    );
  }

  if (variant === "band") {
    return (
      <section aria-labelledby="thermoscan-promo" style={{ background: NAVY }} className="py-16 sm:py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <img src="/images/thermoscan-logo.webp" alt="ThermoScan" width={900} height={325} style={{ height: 52, width: "auto" }} />
            <h2 id="thermoscan-promo" className="text-white font-bold tracking-tight" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", lineHeight: 1.08, margin: "22px 0 14px", letterSpacing: "-0.02em" }}>
              Vous avez déjà une thermopompe ?<br />
              <span style={{ color: "#f0e9e1" }}>Une photo suffit pour savoir ce qu&apos;elle vaut.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,.65)", fontSize: 17, lineHeight: 1.6, margin: "0 0 26px", maxWidth: 520 }}>
              ThermoScan lit la plaque signalétique, retrouve la fiche certifiée ENERGY STAR et mesure l&apos;écart d&apos;efficacité avec les modèles admissibles à LogisVert. Gratuit, sans inscription, photo effacée après lecture.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href={href} className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5" style={{ background: ORANGE, boxShadow: "0 10px 30px -10px rgba(229,75,23,.7)" }}>
                <Camera size={18} /> Scanner mon appareil
              </Link>
              <Link href="/thermoscan#etiquette" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,.22)" }}>
                Où est l&apos;étiquette ? <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "1px solid rgba(255,255,255,.14)" }}>
            {STEPS.map(({ title, text }, i) => (
              <li key={title} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "0 16px", padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,.14)" }}>
                <span aria-hidden="true" style={{ color: ORANGE, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", fontVariantNumeric: "tabular-nums", paddingTop: 4 }}>0{i + 1}</span>
                <span>
                  <span style={{ display: "block", color: "#fff", fontSize: 18, fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em" }}>{title}</span>
                  <span style={{ display: "block", color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.5, marginTop: 4 }}>{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <aside aria-labelledby="thermoscan-card" style={{ background: NAVY, color: "#fff", borderRadius: 8, padding: "24px 22px" }}>
      <img src="/images/thermoscan-logo.webp" alt="ThermoScan" width={900} height={325} style={{ height: 30, width: "auto" }} />
      <p id="thermoscan-card" style={{ margin: "14px 0 6px", fontSize: 17, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.01em" }}>Vous remplacez un appareil ? Scannez-le.</p>
      <p style={{ margin: "0 0 16px", fontSize: 13.5, color: "rgba(255,255,255,.7)", lineHeight: 1.55 }}>
        Une photo de l&apos;étiquette : ThermoScan identifie votre thermopompe actuelle, son âge, son fluide, et mesure ce que vous gagneriez avec un modèle d&apos;aujourd&apos;hui.
      </p>
      <Link href={href} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, padding: "12px 16px", background: ORANGE, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", borderRadius: 6 }}>
        <Camera size={16} /> Scanner mon appareil
      </Link>
      <p style={{ margin: "10px 0 0", fontSize: 12, color: "rgba(255,255,255,.5)", textAlign: "center" }}>Gratuit · photo effacée après lecture</p>
    </aside>
  );
}
