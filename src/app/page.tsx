import Link from "next/link";
import Image from "next/image";
import { HeroThermoMatchBar } from "@/components/home/HeroThermoMatchBar";
import { CompareSectionAnimated } from "@/components/home/CompareSectionAnimated";
import { ModelesADecouvrir } from "@/components/home/ModelesADecouvrir";
import { FadeIn } from "@/components/ui/FadeIn";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: { absolute: "Thermopompe au Québec : comparez toutes les marques | Thermopompes À Vendre.ca" },
  description:
    "Toutes les thermopompes vendues au Québec, comparées avec les données certifiées d'Hydro-Québec : capacité à -15 °C, HSPF2, subvention LogisVert. Trois bons choix en 2 minutes.",
  canonicalPath: "/",
});

/* ─────────────────────────────────────────────────────────────────────────
   HOMEPAGE — Thermopompes À Vendre.ca
   Reproduced from the design mockup.
   All colours are inlined (hex) so they survive any CSS-variable failure.
───────────────────────────────────────────────────────────────────────────*/
export default function HomePage() {
  return (
    <main style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)", color: "#172126", backgroundColor: "#fff" }}>

      {/* ══════════════════════════════════════════════════════════════════
          HERO — full-width dark background with winter house photo
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#0b1b24", display: "flex", flexDirection: "column" }} className="min-h-[85vh] lg:min-h-[75vh]">
        {/* Background photo — right side, fading to dark on left */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Image
            src="/images/thermomatch/thermomatch-hero-winter-home.png"
            alt="Maison moderne en hiver avec thermopompe Mitsubishi"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={70}
            style={{ objectFit: "cover", objectPosition: "60% center" }}
          />
          {/* Dark overlay gradient — stronger on mobile */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,27,36,1) 0%, rgba(11,27,36,0.92) 35%, rgba(11,27,36,0.55) 62%, rgba(11,27,36,0.15) 100%)" }} />
          <div className="absolute inset-0 bg-[rgba(11,27,36,0.55)] md:hidden" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-center max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="pt-20 pb-10 md:pt-32 md:pb-24">
            <FadeIn delay={100}>
              <h1 style={{ color: "#fff", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 24px 0", maxWidth: 720, fontStyle: "italic" }}>
                Trouvez la thermopompe qui convient vraiment à votre maison.
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-sm sm:text-lg hidden sm:block" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 540, marginBottom: 48 }}>
                Comparez les modèles selon votre région, votre maison et votre budget. Des données vérifiées, pas de la publicité.
              </p>
            </FadeIn>

            {/* ThermoMatch bar — includes trust badges below */}
            <HeroThermoMatchBar />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MAGASINEZ — 3 type cards (Murales / Multizones / Centrales)
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff" }} className="py-16 sm:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-24 items-center">
            {/* Left label */}
            <FadeIn direction="left">
              <div style={{ maxWidth: 280 }}>
                <p style={{ color: "#172126", fontSize: "clamp(24px,2.5vw,32px)", fontWeight: 800, lineHeight: 1.2, margin: 0, letterSpacing: "-0.01em" }}>
                  Magasinez avec{" "}<br />les bonnes{" "}<br />informations.
                </p>
                <div className="w-10 h-1 bg-[#e54b17] mt-6 rounded-full" />
              </div>
            </FadeIn>
            {/* Right 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: "Murales", href: "/thermopompes?type=murale", src: "/images/categorie-murale-daikin-hd.webp" },
                { label: "Multizones", href: "/thermopompes?type=multizone", src: "/images/categorie-multizone-mitsubishi-electric-hd.webp" },
                { label: "Centrales", href: "/thermopompes?type=centrale", src: "/images/categorie-centrale-samsung-hd.webp" },
              ].map((t, i) => (
                <FadeIn key={t.label} delay={150 * (i + 1)}>
                  <Link href={t.href} className="group block" style={{ textDecoration: "none" }}>
                    <div className="bg-[#0b1b24] rounded-2xl overflow-hidden relative aspect-[4/3] flex items-end shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src={t.src}
                        alt=""
                        fill
                        className="transition-transform duration-700 group-hover:scale-105"
                        style={{ objectFit: "cover" }}
                      />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, padding: "20px", background: "linear-gradient(to top, rgba(11,27,36,0.9) 0%, transparent 100%)" }}>
                        <p className="text-white group-hover:text-[#e54b17] transition-colors duration-300" style={{ fontWeight: 800, fontSize: 18, margin: 0 }}>{t.label}</p>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CompareSectionAnimated />

      <ModelesADecouvrir />
      {/* ══════════════════════════════════════════════════════════════════
          TOUTES LES GRANDES MARQUES — brand logos grid
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", borderTop: "1px solid #f0ede8" }} className="py-12 sm:py-16">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-24 items-center">
            {/* Left */}
            <FadeIn direction="left">
              <div>
                <p style={{ color: "#172126", fontSize: "clamp(24px,2.5vw,32px)", fontWeight: 800, lineHeight: 1.25, margin: "0 0 24px", letterSpacing: "-0.01em", fontStyle: "italic" }}>
                  Toutes les grandes{" "}<br />marques.{" "}<br />Un seul endroit{" "}<br />pour les comparer.
                </p>
                <div style={{ width: 40, height: 4, backgroundColor: "#e54b17", borderRadius: 9999 }} />
              </div>
            </FadeIn>

            {/* Right: logos 2 rows × 4 cols + cta */}
            <div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-10 mb-12">
                {[
                  { src: "/images/marques/mono/daikin.png", alt: "Daikin", href: "/marques/daikin" },
                  { src: "/images/marques/mono/mitsubishi-electric.png", alt: "Mitsubishi Electric", href: "/marques/mitsubishi-electric" },
                  { src: "/images/marques/mono/fujitsu.png", alt: "Fujitsu", href: "/marques/fujitsu" },
                  { src: "/images/marques/mono/gree.png", alt: "Gree", href: "/marques/gree" },
                  { src: "/images/marques/mono/lg.png", alt: "LG", href: "/marques/lg" },
                  { src: "/images/marques/mono/samsung.png", alt: "Samsung", href: "/marques/samsung" },
                  { src: "/images/marques/mono/panasonic.png", alt: "Panasonic", href: "/marques/panasonic" },
                  { src: "/images/marques/mono/moovair.png", alt: "Moovair", href: "/marques/moovair" },
                  { src: "/images/marques/mono/bosch.png", alt: "Bosch", href: "/marques/bosch" },
                  { src: "/images/marques/mono/lennox.png", alt: "Lennox", href: "/marques/lennox" },
                  { src: "/images/marques/mono/carrier.png", alt: "Carrier", href: "/marques/carrier" },
                  { src: "/images/marques/mono/tosot.png", alt: "Tosot", href: "/marques/tosot" },
                ].map((brand, i) => (
                  <FadeIn key={brand.alt} delay={40 * i} direction="none">
                    <Link href={brand.href} title={brand.alt} className="group/logo transition-all duration-300 opacity-60 hover:opacity-100" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", height: 56 }}>
                      <Image
                        src={brand.src}
                        alt={brand.alt}
                        width={180}
                        height={60}
                        className="transition-transform duration-300 group-hover/logo:scale-[1.06]"
                        style={{ objectFit: "contain", maxHeight: 30, maxWidth: 130, width: "auto", height: "auto" }}
                      />
                    </Link>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={400} direction="up">
                <Link href="/marques" className="transition-all duration-300 border border-[#e5e5e5] hover:border-[#e54b17] text-[#172126] hover:text-[#e54b17]" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 600, fontSize: 15, padding: "12px 24px", borderRadius: 9999, textDecoration: "none" }}>
                  Voir toutes les marques
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          THERMOMATCH — dark section with laptop mockup + 3 steps
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0b1b24", overflow: "hidden", position: "relative" }} className="py-10 sm:py-14 lg:py-16">
        {/* Laptop bleeds to the left edge on desktop */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[58%] z-0">
          <FadeIn direction="left" delay={200} className="h-full flex items-center justify-end">
            <Image
              src="/images/thermomatch/thermomatch-hero-device-transparent.png"
              alt="ThermoMatch — Trouvez la bonne thermopompe"
              width={1000}
              height={676}
              sizes="(max-width: 1024px) 100vw, 920px"
              className="tav-float"
              style={{ width: "110%", maxWidth: 920, height: "auto", objectFit: "contain", display: "block", marginLeft: "-5%" }}
              priority
            />
          </FadeIn>
        </div>

        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[58%_1fr] gap-8 lg:gap-8 items-center">
            {/* Left: laptop mockup — mobile only (desktop uses absolute) */}
            <FadeIn direction="left" delay={200} className="lg:hidden">
              <Image
                src="/images/thermomatch/thermomatch-hero-device-transparent.png"
                alt="ThermoMatch — Trouvez la bonne thermopompe"
                width={800}
                height={540}
                sizes="100vw"
                style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
                priority
              />
            </FadeIn>

            {/* Spacer for the absolute-positioned laptop on desktop */}
            <div className="hidden lg:block" />

            {/* Right: title + steps */}
            <FadeIn>
              <div>
                <h2 style={{ color: "#fff", fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.01em" }}>
                  Votre maison. Vos critères.{" "}<br />Les bonnes options.
                </h2>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.6, marginBottom: 36, maxWidth: 460 }}>
                  Répondez à quelques questions — ThermoMatch identifie les systèmes qui correspondent à votre maison, votre région et vos priorités.
                </p>

                {/* 3 Steps — horizontal with connecting lines */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 mb-10">
                  {[
                    { n: "1", title: "Décrivez votre maison", desc: "Répondez à quelques questions sur votre logement et vos besoins." },
                    { n: "2", title: "Comparez les options", desc: "Découvrez les modèles qui correspondent et comprenez les différences." },
                    { n: "3", title: "Recevez une soumission pour votre maison", desc: "Un installateur partenaire licencié évalue votre projet sur place. Le prix se fait cas par cas, jamais au catalogue." },
                  ].map((s, i) => (
                    <div key={s.n} className="flex-1 flex flex-col items-start sm:items-center text-left sm:text-center relative">
                      {/* Connecting line (between circles) */}
                      {i < 2 && (
                        <div className="hidden sm:block absolute top-[16px] left-[calc(50%+18px)] right-[calc(-50%+18px)] h-[2px] bg-[#1a2d3d]" />
                      )}
                      <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#e54b17", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginBottom: 12, position: "relative", zIndex: 2 }}>
                        <span style={{ color: "#fff", fontSize: 13, fontWeight: 800 }}>{s.n}</span>
                      </div>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: "0 0 6px", lineHeight: 1.3 }}>{s.title}</p>
                      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.5, margin: 0, maxWidth: 200 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>

                <Link href="/trouver-ma-thermopompe" className="group flex items-center bg-[#e54b17] text-white font-semibold text-[18px] pl-8 pr-6 py-4 rounded-sm no-underline transition-all duration-300 hover:bg-[#d44315] hover:shadow-lg w-fit">
                  Commencer <img src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch™" className="inline-block h-[40px] ml-3 mr-1 object-contain brightness-0 invert" />
                  <svg className="ml-2 transition-transform duration-300 group-hover:translate-x-1" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          LES AIDES FINANCIÈRES — light section with unit photo + grant info
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f5f0", overflow: "hidden", position: "relative" }} className="py-12 sm:py-16 lg:py-20">
        
        {/* Right Background Image — bleeds to the right edge with gradient blend */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] z-0">
          <div style={{ position: "relative", height: "100%", width: "100%" }}>
            <Image src="/images/thermomatch/thermomatch-cold-climate-photo.png" alt="Thermopompe Mitsubishi Electric" fill style={{ objectFit: "cover", objectPosition: "center center" }} />
            {/* Gradient blend from left (#f7f5f0) to transparent */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #f7f5f0 0%, #f7f5f0 5%, transparent 35%)", zIndex: 1 }} />
          </div>
        </div>

        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left: text */}
          <div>
            <FadeIn direction="up">
              <h2 style={{ color: "#172126", fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.01em", fontStyle: "italic" }}>
                Les aides financières,{" "}<br />enfin plus simples.
              </h2>
              <div style={{ width: 40, height: 3, backgroundColor: "#e54b17", marginBottom: 24 }} />
              <p style={{ color: "#536873", fontSize: 16, lineHeight: 1.6, marginBottom: 40, maxWidth: 420 }}>
                Nous vérifions pour vous les programmes d&apos;aide disponibles au Québec.
              </p>

              {/* Grant items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 48 }}>
                {[
                  {
                    title: "Programmes vérifiés",
                    desc: "Données à jour et admissibilité claire.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#172126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )
                  },
                  {
                    title: "Économies maximisées",
                    desc: "Trouvez les aides qui s'appliquent à votre projet.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#172126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1v22" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    )
                  },
                  {
                    title: "Moins de paperasse",
                    desc: "On vous guide à chaque étape.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#172126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                        <path d="M9 14l2 2 4-4"/>
                      </svg>
                    )
                  },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div className="mt-1" style={{ color: "#172126" }}>{item.icon}</div>
                    <div>
                      <p style={{ color: "#172126", fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{item.title}</p>
                      <p style={{ color: "#536873", fontSize: 14, margin: 0, lineHeight: 1.5, maxWidth: 300 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </FadeIn>

            <FadeIn delay={200}>
              <Link href="/subventions" className="group flex items-center justify-between bg-[#e54b17] text-white font-semibold text-[15px] pl-6 pr-4 py-3 rounded-sm no-underline transition-all duration-300 hover:bg-[#d44315] hover:shadow-md w-fit">
                Vérifier les subventions
                <svg className="ml-4 transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </FadeIn>
          </div>

          {/* Right: floating card ON TOP of the background image */}
          <FadeIn direction="left" delay={300} className="relative flex justify-end items-center min-h-[400px]">
            
            {/* Mobile Image (shown only on mobile since desktop uses absolute bg) */}
            <div className="block lg:hidden absolute inset-0 z-0 overflow-hidden rounded-lg">
              <Image src="/images/thermomatch/thermomatch-cold-climate-photo.png" alt="Thermopompe Mitsubishi Electric" fill style={{ objectFit: "cover" }} className="opacity-30" />
            </div>

            {/* Floating card — positioned over the background image */}
            <div style={{ backgroundColor: "rgba(253,252,250,0.97)", borderRadius: 12, padding: "32px", boxShadow: "0 24px 64px rgba(0,0,0,0.12)", width: "100%", maxWidth: 360, zIndex: 10, backdropFilter: "blur(8px)" }}>
              <p style={{ fontSize: 12, color: "#172126", fontWeight: 600, marginBottom: 8 }}>Admissible à</p>
              <p style={{ fontSize: 32, fontWeight: 800, color: "#172126", margin: "0 0 4px", lineHeight: 1.1 }}>Jusqu&apos;à 5 720 $</p>
              <p style={{ fontSize: 13, color: "#536873", margin: "0 0 24px" }}>en aides financières</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  ["Rénoclimat", "Jusqu&apos;à 3 000 $"],
                  ["LogisVert", "Jusqu&apos;à 2 000 $"],
                  ["Hydro-Québec", "Jusqu&apos;à 720 $"]
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ fontSize: 13, color: "#172126" }} dangerouslySetInnerHTML={{ __html: k }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#172126" }} dangerouslySetInnerHTML={{ __html: v }} />
                  </div>
                ))}
              </div>
              
              <div style={{ height: 1, backgroundColor: "#e5e5e5", marginBottom: 16 }} />
              
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <p style={{ fontSize: 11, color: "#6b7280", margin: 0 }}>Montant estimé pour votre projet.</p>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COMPRENDRE AVANT DE CHOISIR — 3 editorial guide cards
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff" }} className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10">
          <FadeIn direction="down">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <p style={{ color: "#e54b17", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>NOS GUIDES</p>
                <h2 style={{ color: "#172126", fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, margin: 0, letterSpacing: "-0.01em", fontStyle: "italic" }}>Comprendre avant de choisir.</h2>
              </div>
              <Link href="/guides" className="transition-all duration-300 border border-[#e5e5e5] hover:border-[#e54b17] text-[#172126] hover:text-[#e54b17] self-start sm:self-auto flex-shrink-0 bg-white shadow-sm hover:shadow-md" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 15, padding: "12px 24px", borderRadius: 9999, textDecoration: "none" }}>
                Voir les guides
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Quelle thermopompe choisir pour mon type de maison ?", cat: "Les bases", img: "/images/thermomatch/thermomatch-hero-winter-home.png", href: "/guides" },
              { title: "Murale, multizone : laquelle est vraiment rentable ?", cat: "Les fiches", img: "/images/thermomatch/thermomatch-recommendation-home.png", href: "/guides" },
              { title: "Bien comparer les performances par grand froid", cat: "Les fiches", img: "/images/thermomatch/thermomatch-cold-climate-photo.png", href: "/guides" },
            ].map((g) => (
              <Link key={g.title} href={g.href} className="group" style={{ textDecoration: "none" }}>
                <article>
                  <div style={{ position: "relative", height: 200, borderRadius: 4, overflow: "hidden", marginBottom: 16 }}>
                    <Image src={g.img} alt={g.title} fill className="transition-transform duration-500 group-hover:scale-105" style={{ objectFit: "cover" }} />
                  </div>
                  <p style={{ color: "#e54b17", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{g.cat}</p>
                  <p className="text-[#172126] group-hover:text-[#e54b17] transition-colors duration-300" style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.35, marginBottom: 8 }}>{g.title}</p>
                  <span className="text-[#e54b17] group-hover:translate-x-1 inline-block transition-transform duration-300" style={{ fontSize: 13, fontWeight: 600 }}>Lire le guide →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          DE LA COMPARAISON À L'INSTALLATION — compact dark banner
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0b1b24" }} className="py-8 sm:py-10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Left: title */}
            <div className="shrink-0 lg:border-r lg:border-[#1a2d3d] lg:pr-12">
              <h2 style={{ color: "#fff", fontSize: "clamp(20px,2vw,26px)", fontWeight: 800, lineHeight: 1.25, fontStyle: "italic", margin: 0 }}>
                De la comparaison{" "}<br />à l&apos;installation.
              </h2>
              <div style={{ width: 32, height: 3, backgroundColor: "#e54b17", marginTop: 12 }} />
            </div>

            {/* Right: 4 steps in a row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 flex-1">
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, label: "Comprendre", desc: "On vous aide à bien cerner vos besoins et les options qui s'offrent à vous." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>, label: "Comparer", desc: "Comparez les meilleurs modèles et obtenez un prix juste et transparent." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, label: "Planifier", desc: "Choisissez votre installateur et planifiez l'installation à votre convenance." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, label: "Installer", desc: "Installation professionnelle et service après-vente assuré." },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ marginBottom: 8 }}>{s.icon}</div>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: "0 0 6px" }}>{s.label}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA BANNER — orange
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#e54b17", overflow: "hidden", position: "relative" }} className="py-12 lg:py-16">
        {/* Right: transparent thermopompe PNG — big and well positioned */}
        <FadeIn delay={200} direction="left" className="hidden lg:block absolute right-[-80px] top-[-60px] bottom-[-60px] w-[85%] z-0">
          <div style={{ position: "relative", height: "100%", width: "100%" }}>
            <Image src="/images/thermomatch/thermomatch-cta-unit-transparent.png" alt="Thermopompe" fill className="tav-float tav-float-delay" style={{ objectFit: "contain", objectPosition: "right bottom" }} />
          </div>
        </FadeIn>

        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + button */}
          <FadeIn direction="up">
            <div style={{ padding: "24px 0" }}>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 700, marginBottom: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>Prêt à trouver la bonne thermopompe ?</p>
              <h2 style={{ color: "#fff", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 32px", letterSpacing: "-0.02em", fontStyle: "italic" }}>
                Démarrez par vos critères.{" "}<br />On s&apos;occupe du reste.
              </h2>
              <Link href="/trouver-ma-thermopompe" className="group flex items-center justify-between bg-[#0b1b24] text-white font-semibold text-[16px] pl-6 pr-2 py-2 rounded-full no-underline transition-all duration-300 hover:bg-[#172126] hover:shadow-2xl w-fit">
                Commencer maintenant
                <div className="flex items-center justify-center bg-white text-[#0b1b24] rounded-full w-9 h-9 ml-8 transition-transform duration-300 group-hover:scale-110">
                  <svg className="transition-transform duration-300 group-hover:translate-x-0.5" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </FadeIn>
          </div>
        </div>
      </section>

    </main>
  );
}

