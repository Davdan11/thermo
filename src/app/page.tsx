import Link from "next/link";
import Image from "next/image";
import { HeroThermoMatchBar } from "@/components/home/HeroThermoMatchBar";
import { CompareSectionAnimated } from "@/components/home/CompareSectionAnimated";
import { ModelesADecouvrir } from "@/components/home/ModelesADecouvrir";

/* ─────────────────────────────────────────────────────────────────────────
   HOMEPAGE — ThermopompesÀVendre.ca
   Reproduced from the design mockup.
   All colours are inlined (hex) so they survive any CSS-variable failure.
───────────────────────────────────────────────────────────────────────────*/
export default function HomePage() {
  return (
    <main style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)", color: "#172126", backgroundColor: "#fff" }}>

      {/* ══════════════════════════════════════════════════════════════════
          HERO — full-width dark background with winter house photo
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", backgroundColor: "#0b1b24", minHeight: 600, display: "flex", flexDirection: "column" }}>
        {/* Background photo — right side, fading to dark on left */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Image
            src="/images/thermomatch/thermomatch-hero-winter-home.png"
            alt="Maison moderne en hiver avec thermopompe Mitsubishi"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "60% center" }}
          />
          {/* Dark overlay gradient */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,27,36,1) 0%, rgba(11,27,36,0.92) 35%, rgba(11,27,36,0.55) 62%, rgba(11,27,36,0.15) 100%)" }} />
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1360, margin: "0 auto", width: "100%", padding: "0 40px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <div style={{ paddingTop: 96, paddingBottom: 80 }}>
            <h1 style={{ color: "#fff", fontSize: "clamp(36px, 4.5vw, 62px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.025em", margin: "0 0 28px 0", maxWidth: 560 }}>
              La bonne<br />thermopompe.<br />
              Pour votre maison.<br />
              Pour le Québec.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 17, lineHeight: 1.6, maxWidth: 520, marginBottom: 44 }}>
              Comparez les modèles selon votre région, votre maison et votre budget. Des données vérifiées, pas de la publicité.
            </p>

            {/* ThermoMatch bar — includes trust badges below */}
            <HeroThermoMatchBar />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MAGASINEZ — 3 type cards (Murales / Multizones / Centrales)
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", padding: "64px 0 56px" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "48px 80px", alignItems: "start" }}>
            {/* Left label */}
            <div style={{ maxWidth: 200 }}>
              <p style={{ color: "#172126", fontSize: "clamp(20px,2vw,26px)", fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
                Magasinez avec<br />les bonnes<br />informations.
              </p>
            </div>
            {/* Right 3 cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {[
                { label: "Murales", href: "/thermopompes?type=murale", src: "/images/categorie-murale-daikin-hd.png" },
                { label: "Multizones", href: "/thermopompes?type=multizone", src: "/images/categorie-multizone-mitsubishi-electric-hd.png" },
                { label: "Centrales", href: "/thermopompes?type=centrale", src: "/images/categorie-centrale-samsung-hd.png" },
              ].map((t) => (
                <Link key={t.label} href={t.href} className="group" style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#0b1b24", borderRadius: 6, overflow: "hidden", position: "relative", aspectRatio: "4/3", display: "flex", alignItems: "flex-end" }}>
                    <Image
                      src={t.src}
                      alt={t.label}
                      fill
                      className="transition-transform duration-500 group-hover:scale-105"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, padding: "12px 16px", background: "linear-gradient(to top, rgba(11,27,36,1) 0%, transparent 100%)" }}>
                      <p className="text-white group-hover:text-[#e54b17] transition-colors duration-300" style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>{t.label}</p>
                    </div>
                  </div>
                </Link>
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
      <section style={{ backgroundColor: "#fff", padding: "56px 0", borderTop: "1px solid #f0ede8" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 80, alignItems: "center" }}>
            {/* Left */}
            <div>
              <p style={{ color: "#172126", fontSize: "clamp(18px,1.8vw,24px)", fontWeight: 700, lineHeight: 1.3, margin: "0 0 14px" }}>
                Toutes les grandes<br />marques.<br />Un seul endroit<br />pour les comparer.
              </p>
              <div style={{ width: 32, height: 2, backgroundColor: "#e54b17" }} />
            </div>

            {/* Right: logos 2 rows × 4 cols + cta */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px 40px", marginBottom: 32 }}>
                {[
                  { src: "/images/marques/logo-daikin-bleu-nuit.png", alt: "Daikin", href: "/marques/daikin" },
                  { src: "/images/marques/logo-mitsubishi-electric-bleu-nuit.png", alt: "Mitsubishi Electric", href: "/marques/mitsubishi-electric" },
                  { src: "/images/marques/logo-fujitsu-bleu-nuit.png", alt: "Fujitsu", href: "/marques/fujitsu" },
                  { src: "/images/marques/logo-gree-bleu-nuit.png", alt: "Gree", href: "/marques/gree" },
                  { src: "/images/marques/logo-midea-bleu-nuit.png", alt: "Midea", href: "/marques/midea" },
                  { src: "/images/marques/logo-lg-bleu-nuit.png", alt: "LG", href: "/marques/lg" },
                  { src: "/images/marques/logo-samsung-bleu-nuit.png", alt: "Samsung", href: "/marques/samsung" },
                  { src: "/images/marques/logo-moovair-bleu-nuit.png", alt: "Moovair", href: "/marques/moovair" },
                ].map((brand) => (
                  <Link key={brand.alt} href={brand.href} className="transition-all duration-300 hover:scale-105 hover:opacity-80" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", height: 52 }}>
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={140}
                      height={48}
                      style={{ objectFit: "contain", maxHeight: 48, width: "auto" }}
                    />
                  </Link>
                ))}
              </div>
              <Link href="/marques" className="transition-colors duration-300 border border-[#e5e5e5] hover:border-[#e54b17] text-[#172126] hover:text-[#e54b17]" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 600, fontSize: 14, padding: "10px 20px", borderRadius: 4, textDecoration: "none" }}>
                Voir toutes les marques
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          THERMOMATCH — app section with steps + mockup screenshots
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f5f0", padding: "72px 0" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left: mockup screenshots */}
          <div style={{ position: "relative", display: "flex", gap: 16 }}>
            {/* Primary mockup card */}
            <div style={{ flex: 1, backgroundColor: "#fff", border: "1px solid #e5e5e5", borderRadius: 8, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
              <div style={{ backgroundColor: "#0b1b24", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 9, fontWeight: 900, color: "#e54b17", letterSpacing: "0.12em", textTransform: "uppercase" }}>ThermoMatch</span>
              </div>
              <div style={{ padding: 16 }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: "#172126", marginBottom: 12 }}>Thermo Match</p>
                <div style={{ backgroundColor: "#f0ede8", borderRadius: 4, padding: "10px 12px", marginBottom: 10 }}>
                  <p style={{ fontSize: 9, color: "#6b7280", margin: "0 0 4px" }}>Votre maison</p>
                  <div style={{ height: 6, backgroundColor: "#e5e5e5", borderRadius: 2 }}><div style={{ height: "100%", width: "70%", backgroundColor: "#e54b17", borderRadius: 2 }} /></div>
                </div>
                <div style={{ backgroundColor: "#f0ede8", borderRadius: 4, padding: "10px 12px", marginBottom: 10 }}>
                  <p style={{ fontSize: 9, color: "#6b7280", margin: "0 0 4px" }}>Vos critères</p>
                  <div style={{ height: 6, backgroundColor: "#e5e5e5", borderRadius: 2 }}><div style={{ height: "100%", width: "85%", backgroundColor: "#172126", borderRadius: 2 }} /></div>
                </div>
                <div style={{ backgroundColor: "#f0ede8", borderRadius: 4, padding: "10px 12px" }}>
                  <p style={{ fontSize: 9, color: "#6b7280", margin: "0 0 4px" }}>Votre budget</p>
                  <div style={{ height: 6, backgroundColor: "#e5e5e5", borderRadius: 2 }}><div style={{ height: "100%", width: "55%", backgroundColor: "#172126", borderRadius: 2 }} /></div>
                </div>
              </div>
            </div>

            {/* Secondary smaller card */}
            <div style={{ width: 120, backgroundColor: "#fff", border: "1px solid #e5e5e5", borderRadius: 8, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", alignSelf: "flex-start", marginTop: 40 }}>
              <div style={{ position: "relative", height: 80 }}>
                <Image src="/images/thermomatch/thermomatch-recommendation-home.png" alt="Maison" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 10 }}>
                <p style={{ fontSize: 9, fontWeight: 600, color: "#172126", margin: "0 0 4px" }}>Résultats</p>
                <p style={{ fontSize: 8, color: "#6b7280", margin: 0 }}>3 modèles recommandés</p>
              </div>
            </div>
          </div>

          {/* Right: steps */}
          <div>
            <p style={{ color: "#172126", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 8 }}>
              Votre maison. Vos critères.<br />Les bonnes options.
            </p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.6, marginBottom: 36 }}>
              Répondez à quelques questions — ThermoMatch identifie les systèmes qui correspondent à votre maison, votre région et vos priorités.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
              {[
                { n: "1", title: "Dites-lui vos besoins", desc: "Superficie, chauffage actuel, région climatique et type de maison — les bases qui déterminent tout." },
                { n: "2", title: "On évalue les options", desc: "Nous comparons les modèles disponibles selon vos critères, sans publicité et sans parti pris." },
                { n: "3", title: "Choisissez votre modèle", desc: "Vous obtenez une liste courte, avec les données qui comptent pour décider en connaissance de cause." },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#e54b17", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>{s.n}</span>
                  </div>
                  <div>
                    <p style={{ color: "#172126", fontWeight: 700, fontSize: 15, margin: "0 0 4px", lineHeight: 1.3 }}>{s.title}</p>
                    <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/trouver-ma-thermopompe" className="bg-[#e54b17] hover:bg-[#d44315] hover:-translate-y-0.5 transition-all duration-300" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 24px", borderRadius: 4, textDecoration: "none", boxShadow: "0 4px 14px rgba(229,75,23,0.2)" }}>
              Commencer ThermoMatch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          LES AIDES FINANCIÈRES — dark section with unit photo + grant info
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0b1b24", padding: "72px 0" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left: text */}
          <div>
            <p style={{ color: "#e54b17", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>LES AIDES FINANCIÈRES</p>
            <h2 style={{ color: "#fff", fontSize: "clamp(24px,2.5vw,36px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
              Les aides financières,<br />enfin plus simples.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.65, marginBottom: 32 }}>
              Nous vous guidons à travers les programmes d&apos;aide disponibles au Québec pour vous aider à maximiser votre remboursement.
            </p>

            {/* Grant items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {[
                "Programme Chauffez Vert",
                "Rénoclimat — Transition énergétique",
                "Aides municipales supplémentaires",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e54b17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/subventions" className="bg-[#e54b17] hover:bg-[#d44315] hover:-translate-y-0.5 transition-all duration-300" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 24px", borderRadius: 4, textDecoration: "none", boxShadow: "0 4px 14px rgba(229,75,23,0.2)" }}>
              Profiter des programmes
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
          </div>

          {/* Right: photo + grant card overlay */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", height: 380, borderRadius: 6, overflow: "hidden" }}>
              <Image src="/images/thermomatch/thermomatch-cold-climate-photo.png" alt="Thermopompe extérieure en hiver" fill style={{ objectFit: "cover" }} />
            </div>

            {/* Floating card */}
            <div style={{ position: "absolute", bottom: -16, left: -24, backgroundColor: "#fff", borderRadius: 8, padding: "20px 24px", boxShadow: "0 16px 48px rgba(0,0,0,0.3)", minWidth: 220 }}>
              <p style={{ fontSize: 11, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 4 }}>Exemple — Chauffez Vert</p>
              <p style={{ fontSize: 28, fontWeight: 800, color: "#172126", margin: "0 0 12px", lineHeight: 1 }}>Jusqu&apos;à 5 720 $</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[["Résidentiel", "jusqu&apos;à 5 000 $"], ["Locatif", "jusqu&apos;à 4 000 $"], ["Commercial", "jusqu&apos;à 7 000 $"]].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                    <span style={{ fontSize: 12, color: "#6b7280" }} dangerouslySetInnerHTML={{ __html: k }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#172126" }} dangerouslySetInnerHTML={{ __html: v }} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 10, color: "#9ca3af", marginTop: 8, marginBottom: 0 }}>Montants indicatifs uniquement, vérifiez sur les sites officiels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COMPRENDRE AVANT DE CHOISIR — 3 editorial guide cards
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", padding: "72px 0" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36 }}>
            <div>
              <p style={{ color: "#e54b17", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>NOS GUIDES</p>
              <h2 style={{ color: "#172126", fontSize: "clamp(22px,2.2vw,30px)", fontWeight: 700, margin: 0 }}>Comprendre avant de choisir.</h2>
            </div>
            <Link href="/guides" className="transition-colors duration-300 border border-[#e5e5e5] hover:border-[#e54b17] text-[#172126] hover:text-[#e54b17]" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 600, fontSize: 14, padding: "10px 18px", borderRadius: 4, textDecoration: "none" }}>
              Voir les guides
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
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
          DE LA COMPARAISON À L'INSTALLATION — 4 étapes + outdoor photo
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f5f0", padding: "72px 0" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left: text + 4 steps */}
          <div>
            <p style={{ color: "#e54b17", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>COMMENT ÇA MARCHE</p>
            <h2 style={{ color: "#172126", fontSize: "clamp(22px,2.2vw,30px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 40 }}>
              De la comparaison<br />à l&apos;installation.
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 32px" }}>
              {[
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e54b17" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, label: "Comparez", desc: "En un seul endroit, sans publicité" },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e54b17" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>, label: "Comparez", desc: "Les données techniques vérifiées" },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e54b17" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>, label: "Filtrez", desc: "Choisissez selon vos priorités" },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e54b17" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, label: "Installez", desc: "Vérifiez les performances par grand froid" },
              ].map((s) => (
                <div key={s.label + s.desc}>
                  <div style={{ marginBottom: 10 }}>{s.icon}</div>
                  <p style={{ color: "#172126", fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{s.label}</p>
                  <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: outdoor unit photo */}
          <div style={{ position: "relative", height: 420, borderRadius: 6, overflow: "hidden" }}>
            <Image src="/images/thermopompe-exterieure-neige.png" alt="Thermopompe extérieure dans la neige" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA BANNER — orange
      ══════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#e54b17", padding: "64px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr auto auto", alignItems: "center", gap: 40 }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Prêt à trouver la bonne thermopompe ?</p>
            <h2 style={{ color: "#fff", fontSize: "clamp(24px,2.5vw,36px)", fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.02em" }}>
              Démarrez par vos critères.<br />On s&apos;occupe du reste.
            </h2>
          </div>

          <Link href="/trouver-ma-thermopompe" className="bg-[#0b1b24] hover:bg-[#172126] hover:-translate-y-0.5 transition-all duration-300" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 700, fontSize: 15, padding: "15px 28px", borderRadius: 4, textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }}>
            Commencer maintenant
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </Link>

          {/* Unit photo */}
          <div style={{ width: 160, position: "relative", height: 120 }}>
            <Image src="/images/thermomatch/thermomatch-cta-unit-transparent.png" alt="Thermopompe" fill style={{ objectFit: "contain", objectPosition: "bottom right" }} />
          </div>
        </div>
      </section>

    </main>
  );
}
