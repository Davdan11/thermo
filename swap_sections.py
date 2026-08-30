import re

file_path = 'src/app/technologie-thermomatch/ThermoMatchTechClient.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'(?s)(      \{/\* ============================================================\n          SECTION 7 — Vous restez maître de la décision\n          ============================================================ \*/\}\n).*?(      \{/\* ============================================================\n          SECTION 9 — Du match au projet\n          ============================================================ \*/\})')

replacement = '''      {/* ============================================================
          SECTION 7 — Conçu pour le climat québécois
          ============================================================ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#f8f6f2' }}>
        {/* Background Image with fade - exactly as in design */}
        <div className="absolute top-0 bottom-0 left-[35%] right-0 z-0 hidden lg:block">
          <Image
            src="/images/thermomatch/thermomatch-cold-climate-photo.png"
            alt="Thermopompe Mitsubishi dans la neige"
            fill
            className="object-cover object-left"
            quality={95}
          />
          {/* Gradient fade to blend with the cream background */}
          <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-[#f8f6f2] to-transparent" />
        </div>

        <Container className="relative z-10" style={{ padding: "clamp(60px, 6vw, 100px) 0" }}>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side text and icons */}
            <div className="lg:w-[45%] shrink-0 relative z-10">
              <h2 className="font-display font-bold text-[#10212b] mb-6" style={{ fontSize: "clamp(34px, 3.8vw, 44px)", lineHeight: "1.08" }}>
                Conçu pour le climat québécois.
              </h2>
              <div className="w-8 h-1 bg-[var(--tm-orange)] mb-6" />
              <p className="text-[#536873] font-medium text-[16px] mb-10">
                ThermoMatch met l&apos;accent sur les performances réelles en hiver.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { icon: <IconClimate />, title: "Températures hivernales", desc: "Seuil de fonctionnement en conditions extrêmes." },
                  { icon: <IconComfort />, title: "Cycles de dégivrage", desc: "Fréquence et conséquences sur le confort." },
                  { icon: <IconCapacity />, title: "Capacité à basse température", desc: "Maintien de la puissance quand il fait froid." },
                  { icon: <IconProperty />, title: "Efficacité saisonnière", desc: "Performance sur toute la saison de chauffage." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="text-[#10212b] mt-0.5 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#10212b] text-[15px] mb-0.5">{item.title}</h4>
                      <p className="text-[#667680] text-[13px] leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side with Chart Card overlapping background image */}
            <div className="lg:w-[55%] flex justify-end relative z-10 mt-12 lg:mt-0">
              <div className="bg-[#fffdf9] rounded-[8px] pt-8 pb-4 px-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full lg:w-[95%] relative border border-[#dcd4ca]">
                <svg viewBox="0 0 620 360" className="w-full h-auto overflow-visible" role="img" aria-label="Graphique illustratif">
                  <text className="font-bold text-[#10212b]" fontSize="20" x="52" y="40">Performance stable quand il fait froid</text>
                  <text fill="#667680" fontSize="11" fontFamily="Inter,Arial,sans-serif" x="52" y="62">Exemple de maintien de la capacité de chauffage</text>
                  
                  {/* Grid */}
                  <path stroke="#d9dfe2" strokeDasharray="4 5" d="M72 105h510M72 153h510M72 201h510M72 249h510M72 297h510"/>
                  <path stroke="#aab5ba" d="M72 89v208h510"/>
                  
                  {/* Y Axis Labels */}
                  <g fontFamily="Inter,Arial,sans-serif" fontSize="11" fill="#667680">
                    <text x="30" y="109">100%</text>
                    <text x="38" y="157">75%</text>
                    <text x="38" y="205">50%</text>
                    <text x="38" y="253">25%</text>
                    <text x="44" y="301">0%</text>
                  </g>
                  
                  {/* X Axis Labels */}
                  <g fontFamily="Inter,Arial,sans-serif" fontSize="11" fill="#667680">
                    <text x="70" y="320">−25</text>
                    <text x="168" y="320">−20</text>
                    <text x="266" y="320">−15</text>
                    <text x="367" y="320">−10</text>
                    <text x="474" y="320">−5</text>
                    <text x="574" y="320">0</text>
                    <text x="287" y="346">Température extérieure (°C)</text>
                  </g>
                  
                  {/* Lines */}
                  <path fill="none" stroke="#e54b17" strokeWidth="3" d="M80 113C180 116 270 120 365 128s150 18 210 32"/>
                  <path fill="none" stroke="#99a7ad" strokeWidth="2.5" strokeDasharray="8 6" d="M80 122c100 10 190 31 280 61s150 64 215 108"/>
                  
                  {/* Legend */}
                  <g transform="translate(60 340)">
                    <line x1="0" y1="0" x2="20" y2="0" stroke="#e54b17" strokeWidth="3"/>
                    <circle cx="10" cy="0" r="3" fill="#e54b17"/>
                    <text x="28" y="4" fontSize="11" fill="#667680" fontFamily="Inter,Arial,sans-serif">Exemple de thermopompe performante</text>
                    
                    <line x1="240" y1="0" x2="260" y2="0" stroke="#99a7ad" strokeWidth="2.5" strokeDasharray="4 3"/>
                    <text x="268" y="4" fontSize="11" fill="#667680" fontFamily="Inter,Arial,sans-serif">Thermopompe standard</text>
                  </g>

                  {/* Orange Dots */}
                  <g fill="#e54b17">
                    <circle cx="80" cy="113" r="4"/>
                    <circle cx="180" cy="116" r="4"/>
                    <circle cx="280" cy="121" r="4"/>
                    <circle cx="380" cy="131" r="4"/>
                    <circle cx="480" cy="144" r="4"/>
                    <circle cx="575" cy="160" r="4"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 8 — Vous restez maître de la décision
          ============================================================ */}
      <section className="bg-[var(--tm-navy)]" style={{ padding: "clamp(48px, 5vw, 64px) 0" }}>
        <Container>
          <div className="text-center mb-12">
            <h2
              className="font-display font-bold mb-4"
              style={{ color: '#ffffff', fontSize: "clamp(28px, 3.5vw, 38px)", lineHeight: "1.08" }}
            >
              Vous restez maître de la décision.
            </h2>
            <div className="w-[44px] h-[3px] bg-[var(--tm-orange)] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative max-w-[1100px] mx-auto">
            {/* Separators (visible on md+) */}
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[33%] w-px bg-[#35505c]" />
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[66%] w-px bg-[#35505c]" />

            {/* Col 1 */}
            <div className="flex gap-5">
              <div className="text-[var(--tm-orange)] shrink-0 mt-1">
                <svg width="40" height="50" viewBox="-2 5 40 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 10h36M0 28h36M0 46h36" />
                  <circle cx="11" cy="10" r="4" fill="var(--tm-navy)" />
                  <circle cx="26" cy="28" r="4" fill="var(--tm-navy)" />
                  <circle cx="15" cy="46" r="4" fill="var(--tm-navy)" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-2" style={{ color: '#ffffff' }}>Vos critères</h3>
                <p className="text-[13px] leading-relaxed mb-4 text-[#c5d0d5]">
                  Modifiez vos réponses quand vous voulez et voyez l&apos;impact sur les résultats.
                </p>
                <Link href="#fonctionnement" className="text-[12px] font-semibold hover:text-[var(--tm-orange)] transition-colors underline underline-offset-4 flex items-center gap-1 w-max" style={{ color: '#ffffff' }}>
                  Ajuster mes réponses <span className="text-[14px]">›</span>
                </Link>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex gap-5">
              <div className="text-[var(--tm-orange)] shrink-0 mt-1">
                <svg width="48" height="54" viewBox="-2 5 54 54" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="20" cy="26" r="19" />
                  <path d="m34 40 16 16" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-2" style={{ color: '#ffffff' }}>Vos comparaisons</h3>
                <p className="text-[13px] leading-relaxed mb-4 text-[#c5d0d5]">
                  Inspectez les spécifications, les avantages et les raisons derrière chaque suggestion.
                </p>
                <Link href="/comparer" className="text-[12px] font-semibold hover:text-[var(--tm-orange)] transition-colors underline underline-offset-4 flex items-center gap-1 w-max" style={{ color: '#ffffff' }}>
                  Voir les détails <span className="text-[14px]">›</span>
                </Link>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex gap-5">
              <div className="text-[var(--tm-orange)] shrink-0 mt-1">
                <svg width="46" height="50" viewBox="-2 4 46 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="20" cy="26" r="21" />
                  <path d="m8 26 8 8 17-20" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-2" style={{ color: '#ffffff' }}>Votre décision</h3>
                <p className="text-[13px] leading-relaxed mb-4 text-[#c5d0d5]">
                  Vous choisissez librement le modèle qui correspond le mieux à vos besoins.
                </p>
                <Link href="/thermopompes" className="text-[12px] font-semibold hover:text-[var(--tm-orange)] transition-colors underline underline-offset-4 flex items-center gap-1 w-max" style={{ color: '#ffffff' }}>
                  Je choisis <span className="text-[14px]">›</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

\\2'''

new_content = re.sub(pattern, replacement, content)
if new_content == content:
    print('Failed to match pattern')
else:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Replaced successfully')
