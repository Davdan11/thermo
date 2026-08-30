import re

file_path = 'src/app/technologie-thermomatch/ThermoMatchTechClient.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to match from SECTION 6 Comment ça fonctionne to SECTION 7
pattern = re.compile(r'(?s)(      \{/\* ============================================================\n          SECTION 6 — Comment ça fonctionne \(Processus\)\n          ============================================================ \*/\}\n).*?(      \{/\* ============================================================\n          SECTION 7 — Vous restez maître de la décision\n          ============================================================ \*/\})')

replacement = '''      {/* ============================================================
          SECTION 6 — Comment ça fonctionne (Processus)
          ============================================================ */}
      <section id="fonctionnement" className="bg-[var(--tm-cream)] relative overflow-hidden" style={{ padding: "clamp(60px, 6vw, 100px) 0" }}>
        {/* Desktop Version: Exact SVG for 100% pixel perfection */}
        <div className="hidden lg:flex justify-center w-full relative z-10 px-4 max-w-[1200px] mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="70 20 1300 400" role="img" aria-labelledby="process-title" style={{ maxWidth: '100%', height: 'auto' }}>
            <title id="process-title">Comment votre match est construit</title>
            <style>{`
              .t{font-family:Inter,Arial,sans-serif;fill:#10212b}
              .title{font-size:38px;font-weight:700;text-anchor:middle}
              .num{font-size:30px;fill:#e54b17;font-weight:400}
              .h{font-size:17px;font-weight:700}
              .p{font-size:12px;fill:#667680}
              .wire{fill:none;stroke:#e54b17;stroke-width:1.5}
              .card{fill:#fffdf9;stroke:#dcd4ca}
              .smallh{font-size:11px;font-weight:700}
              .small{font-size:10px;fill:#536873}
              .radio{fill:#fff;stroke:#cfc6ba}
              .orange{fill:#e54b17}
              .green{fill:none;stroke:#15a267;stroke-width:1.5}
              .track{stroke:#f3bba6;stroke-width:5;stroke-linecap:round}
              .bar{stroke:#e54b17;stroke-width:5;stroke-linecap:round}
            `}</style>
            <text className="t title" x="722" y="52">Comment votre match est construit.</text>
            <path className="wire" d="M154 101H354q18 0 18 18v238q0 18 18 18h20M474 101h190q18 0 18 18v238q0 18 18 18h22M780 101h194q18 0 18 18v238q0 18 18 18h20"/>
            <g fill="#e54b17">
              <circle cx="154" cy="101" r="3"/><circle cx="410" cy="375" r="3"/><circle cx="474" cy="101" r="3"/><circle cx="722" cy="375" r="3"/><circle cx="780" cy="101" r="3"/><circle cx="1030" cy="375" r="3"/>
            </g>
            <g transform="translate(95 86)">
              <text className="t num" x="0" y="0">01</text>
              <text className="t h" x="0" y="38">Décrivez votre maison</text>
              <text className="t p" x="0" y="62">Répondez à quelques questions</text>
              <text className="t p" x="0" y="78">simples sur votre propriété et</text>
              <text className="t p" x="0" y="94">vos besoins.</text>
              <g transform="translate(0 124)">
                <rect className="card" width="194" height="220" rx="8"/>
                <text className="t smallh" x="16" y="26">Quelle est la superficie</text>
                <text className="t smallh" x="16" y="40">de votre espace à chauffer?</text>
                <circle className="radio" cx="22" cy="72" r="5"/>
                <text className="t small" x="34" y="76">Moins de 1 000 pi²</text>
                <circle fill="#fff" stroke="#e54b17" strokeWidth="1.5" cx="22" cy="101" r="5"/>
                <circle className="orange" cx="22" cy="101" r="2.5"/>
                <text className="t small" x="34" y="105">1 000 à 2 000 pi²</text>
                <circle className="radio" cx="22" cy="130" r="5"/>
                <text className="t small" x="34" y="134">Plus de 2 000 pi²</text>
                <rect className="orange" x="14" y="170" width="166" height="32" rx="2"/>
                <text x="97" y="190" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#fff">Suivant</text>
              </g>
            </g>
            <g transform="translate(410 86)">
              <text className="t num" x="0" y="0">02</text>
              <text className="t h" x="0" y="38">ThermoMatch filtre les options</text>
              <text className="t p" x="0" y="62">Les modèles qui ne répondent pas</text>
              <text className="t p" x="0" y="78">à vos critères essentiels sont</text>
              <text className="t p" x="0" y="94">écartés.</text>
              <g transform="translate(0 156)">
                <rect className="card" width="194" height="162" rx="8"/>
                <text className="t smallh" x="16" y="30">Options retenues pour vous</text>
                <circle className="green" cx="22" cy="70" r="7"/>
                <path className="green" d="m18 70 3 3 5-6"/>
                <text className="t small" x="38" y="74">38 modèles évalués</text>
                <circle className="green" cx="22" cy="110" r="7"/>
                <path className="green" d="m18 110 3 3 5-6"/>
                <text className="t smallh" x="38" y="114">7 modèles retenus</text>
              </g>
            </g>
            <g transform="translate(722 86)">
              <text className="t num" x="0" y="0">03</text>
              <text className="t h" x="0" y="38">Les modèles sont classés</text>
              <text className="t h" x="0" y="58">selon vos priorités</text>
              <text className="t p" x="0" y="82">Les options restantes sont classées</text>
              <text className="t p" x="0" y="98">en fonction de ce qui compte le</text>
              <text className="t p" x="0" y="114">plus pour vous.</text>
              <g transform="translate(0 156)">
                <rect className="card" width="194" height="162" rx="8"/>
                <text className="t smallh" x="16" y="27">Meilleures options pour vous</text>
                <g className="t" fontSize="12" fontWeight="700">
                  <text x="14" y="66">1</text>
                  <text x="14" y="103">2</text>
                  <text x="14" y="140">3</text>
                </g>
                <g fill="#d6dde0" stroke="#81929a">
                  <rect x="38" y="48" width="29" height="23" rx="3"/><circle cx="52" cy="59.5" r="7" fill="none"/>
                  <rect x="38" y="85" width="29" height="23" rx="3"/><circle cx="52" cy="96.5" r="7" fill="none"/>
                  <rect x="38" y="122" width="29" height="23" rx="3"/><circle cx="52" cy="133.5" r="7" fill="none"/>
                </g>
                <path className="track" d="M82 59h92M82 96h92M82 133h92"/>
                <path className="bar" d="M82 59h84M82 96h69M82 133h54"/>
              </g>
            </g>
            <g transform="translate(1030 86)">
              <text className="t num" x="0" y="0">04</text>
              <text className="t h" x="0" y="38">Chaque recommandation</text>
              <text className="t h" x="0" y="58">est expliquée</text>
              <text className="t p" x="0" y="82">Comprenez pourquoi chaque</text>
              <text className="t p" x="0" y="98">modèle correspond à votre</text>
              <text className="t p" x="0" y="114">situation.</text>
              <g transform="translate(0 145)">
                <rect className="card" width="220" height="173" rx="8"/>
                <text className="t smallh" x="16" y="28">Pourquoi ce modèle?</text>
                <g className="orange">
                  <circle cx="21" cy="57" r="5"/><circle cx="21" cy="85" r="5"/><circle cx="21" cy="113" r="5"/><circle cx="21" cy="141" r="5"/>
                </g>
                <g className="t small">
                  <text x="34" y="61">Adapté à votre maison</text>
                  <text x="34" y="89">Bonne performance en hiver</text>
                  <text x="34" y="117">Silencieux</text>
                  <text x="34" y="145">Correspond à votre budget</text>
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* Mobile Version: Stacked HTML cards without wires */}
        <Container>
          <div className="lg:hidden">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-[var(--tm-ink)]" style={{ fontSize: "clamp(30px, 6vw, 40px)", lineHeight: "1.1" }}>
                Comment votre match est construit.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {[
                {
                  num: "01",
                  title: "Décrivez votre maison",
                  desc: "Répondez à quelques questions simples sur votre propriété et vos besoins.",
                  graphic: (
                    <svg viewBox="0 0 194 220" width="100%" height="auto" fill="none" className="max-w-[220px]">
                      <rect fill="#fffdf9" stroke="#dcd4ca" width="194" height="220" rx="8"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="26">Quelle est la superficie</text>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="40">de votre espace à chauffer?</text>
                      <circle fill="#fff" stroke="#cfc6ba" cx="22" cy="72" r="5"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873" x="34" y="76">Moins de 1 000 pi²</text>
                      <circle fill="#fff" stroke="#e54b17" strokeWidth="1.5" cx="22" cy="101" r="5"/>
                      <circle fill="#e54b17" cx="22" cy="101" r="2.5"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873" x="34" y="105">1 000 à 2 000 pi²</text>
                      <circle fill="#fff" stroke="#cfc6ba" cx="22" cy="130" r="5"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873" x="34" y="134">Plus de 2 000 pi²</text>
                      <rect fill="#e54b17" x="14" y="170" width="166" height="32" rx="2"/>
                      <text x="97" y="190" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#fff">Suivant</text>
                    </svg>
                  )
                },
                {
                  num: "02",
                  title: "ThermoMatch filtre les options",
                  desc: "Les modèles qui ne répondent pas à vos critères essentiels sont écartés.",
                  graphic: (
                    <svg viewBox="0 0 194 162" width="100%" height="auto" fill="none" className="max-w-[220px]">
                      <rect fill="#fffdf9" stroke="#dcd4ca" width="194" height="162" rx="8"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="30">Options retenues pour vous</text>
                      <circle fill="none" stroke="#15a267" strokeWidth="1.5" cx="22" cy="70" r="7"/>
                      <path fill="none" stroke="#15a267" strokeWidth="1.5" d="m18 70 3 3 5-6"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873" x="38" y="74">38 modèles évalués</text>
                      <circle fill="none" stroke="#15a267" strokeWidth="1.5" cx="22" cy="110" r="7"/>
                      <path fill="none" stroke="#15a267" strokeWidth="1.5" d="m18 110 3 3 5-6"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="38" y="114">7 modèles retenus</text>
                    </svg>
                  )
                },
                {
                  num: "03",
                  title: "Les modèles sont classés",
                  desc: "Les options restantes sont classées en fonction de ce qui compte le plus pour vous.",
                  graphic: (
                    <svg viewBox="0 0 194 162" width="100%" height="auto" fill="none" className="max-w-[220px]">
                      <rect fill="#fffdf9" stroke="#dcd4ca" width="194" height="162" rx="8"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="27">Meilleures options pour vous</text>
                      <g fontFamily="Inter,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#10212b">
                        <text x="14" y="66">1</text>
                        <text x="14" y="103">2</text>
                        <text x="14" y="140">3</text>
                      </g>
                      <g fill="#d6dde0" stroke="#81929a">
                        <rect x="38" y="48" width="29" height="23" rx="3"/><circle cx="52" cy="59.5" r="7" fill="none"/>
                        <rect x="38" y="85" width="29" height="23" rx="3"/><circle cx="52" cy="96.5" r="7" fill="none"/>
                        <rect x="38" y="122" width="29" height="23" rx="3"/><circle cx="52" cy="133.5" r="7" fill="none"/>
                      </g>
                      <path fill="none" stroke="#f3bba6" strokeWidth="5" strokeLinecap="round" d="M82 59h92M82 96h92M82 133h92"/>
                      <path fill="none" stroke="#e54b17" strokeWidth="5" strokeLinecap="round" d="M82 59h84M82 96h69M82 133h54"/>
                    </svg>
                  )
                },
                {
                  num: "04",
                  title: "Chaque recommandation est expliquée",
                  desc: "Comprenez pourquoi chaque modèle correspond à votre situation.",
                  graphic: (
                    <svg viewBox="0 0 220 173" width="100%" height="auto" fill="none" className="max-w-[220px]">
                      <rect fill="#fffdf9" stroke="#dcd4ca" width="220" height="173" rx="8"/>
                      <text fontFamily="Inter,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#10212b" x="16" y="28">Pourquoi ce modèle?</text>
                      <g fill="#e54b17">
                        <circle cx="21" cy="57" r="5"/><circle cx="21" cy="85" r="5"/><circle cx="21" cy="113" r="5"/><circle cx="21" cy="141" r="5"/>
                      </g>
                      <g fontFamily="Inter,Arial,sans-serif" fontSize="10" fill="#536873">
                        <text x="34" y="61">Adapté à votre maison</text>
                        <text x="34" y="89">Bonne performance en hiver</text>
                        <text x="34" y="117">Silencieux</text>
                        <text x="34" y="145">Correspond à votre budget</text>
                      </g>
                    </svg>
                  )
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col relative z-10">
                  <div className="mb-4">
                    <span style={{ color: 'var(--tm-orange)', fontSize: 30, fontWeight: 400 }}>{step.num}</span>
                  </div>
                  <h3 className="font-bold text-[17px] mb-2" style={{ color: 'var(--tm-ink)' }}>{step.title}</h3>
                  <p className="text-[13px] leading-relaxed mb-8 max-w-[90%]" style={{ color: 'var(--tm-muted)' }}>
                    {step.desc}
                  </p>
                  <div className="mt-auto drop-shadow-sm">
                    {step.graphic}
                  </div>
                </div>
              ))}
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
