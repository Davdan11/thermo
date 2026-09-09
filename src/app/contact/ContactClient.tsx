"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CheckCircle, ArrowRight, ShieldCheck, MessageCircle, Info } from "lucide-react";
import { track } from "@/lib/analytics/track";

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "question", message: "", website: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Envoi impossible.");
      track("contact_submitted", { subject: form.subject });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Envoi impossible. Appelez-nous au 438-900-3224.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0b1b24]">
        <Image
          src="/images/contact-support.jpg"
          alt="Support Thermopompe A Vendre"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b24] via-[#0b1b24]/80 to-transparent" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e54b17]/20 text-[#e54b17] font-bold text-xs uppercase tracking-widest mb-6">
              Contact & Support
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              Nous sommes là <br />
              <span className="text-[#e54b17]">pour vous aider.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed font-medium">
              Avez-vous des questions sur un modèle, besoin d'assistance avec une soumission ou d'informations sur les subventions gouvernementales ? Notre équipe d'experts québécois est prête à vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 relative z-20 -mt-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: Info & Timeline */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100">
                <h2 className="text-2xl font-black text-[#0b1b24] mb-8">Coordonnées</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#e54b17]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#e54b17]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Téléphone</p>
                      <a href="tel:4389003224" className="text-2xl font-black text-[#0b1b24] hover:text-[#e54b17] transition-colors">
                        438-900-3224
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#e54b17]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#e54b17]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Courriel</p>
                      <a href="mailto:info@thermopompesavendre.ca" className="text-lg font-bold text-[#0b1b24] hover:text-[#e54b17] transition-colors break-all">
                        info@thermopompesavendre.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Heures d'ouverture</p>
                      <p className="text-base font-bold text-[#0b1b24]">Lundi au Vendredi</p>
                      <p className="text-sm text-gray-500">8h00 à 18h00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Zone de service</p>
                      <p className="text-base font-bold text-[#0b1b24]">Partout au Québec</p>
                      <p className="text-sm text-gray-500">Grand Montréal, Québec, et plus.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#f8f9fa] rounded-3xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-[#0b1b24] mb-6 flex items-center gap-2">
                  <Info className="w-6 h-6 text-[#10b981]" />
                  Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium leading-relaxed">Obtenez des conseils neutres et objectifs sur les meilleures marques (Daikin, Mitsubishi, Zephyr).</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium leading-relaxed">Assistance pour vérifier votre admissibilité au programme Logis Vert.</span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium leading-relaxed">Support technique ou questions sur une soumission existante.</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">
                {submitted ? (
                  <div className="text-center py-16">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 mx-auto bg-[#10b981]/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-12 h-12 text-[#10b981]" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-[#0b1b24] mb-4">Message envoyé !</h3>
                    <p className="text-lg text-gray-500 max-w-md mx-auto mb-8">
                      Merci de nous avoir contactés. L'un de nos conseillers vous répondra par courriel ou par téléphone dans les plus brefs délais (généralement en moins de 24h ouvrables).
                    </p>
                    <button onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 text-[#e54b17] font-bold hover:text-[#d44315] transition-colors">
                      Envoyer un autre message <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h2 className="text-3xl font-black text-[#0b1b24] mb-3">Envoyez-nous un message</h2>
                      <p className="text-gray-500 font-medium">Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#0b1b24]">Prénom</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Jean"
                            autoComplete="given-name"
                            value={form.firstName}
                            onChange={set("firstName")}
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#e54b17] focus:ring-4 focus:ring-[#e54b17]/10 outline-none transition-all font-medium text-[#0b1b24]" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#0b1b24]">Nom</label>
                          <input 
                            type="text" 
                            placeholder="Tremblay"
                            autoComplete="family-name"
                            value={form.lastName}
                            onChange={set("lastName")}
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#e54b17] focus:ring-4 focus:ring-[#e54b17]/10 outline-none transition-all font-medium text-[#0b1b24]" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0b1b24]">Courriel</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="jean.tremblay@exemple.com"
                          autoComplete="email"
                          value={form.email}
                          onChange={set("email")}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#e54b17] focus:ring-4 focus:ring-[#e54b17]/10 outline-none transition-all font-medium text-[#0b1b24]" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0b1b24]">Sujet</label>
                        <select value={form.subject} onChange={set("subject")} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#e54b17] focus:ring-4 focus:ring-[#e54b17]/10 outline-none transition-all font-medium text-[#0b1b24]">
                          <option value="question">Question générale</option>
                          <option value="soumission">Demande d'information sur une soumission</option>
                          <option value="subvention">Information sur les subventions (Logis Vert)</option>
                          <option value="support">Support après-vente</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0b1b24]">Message</label>
                        <textarea 
                          required 
                          rows={5} 
                          placeholder="Comment pouvons-nous vous aider ?"
                          value={form.message}
                          onChange={set("message")}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#e54b17] focus:ring-4 focus:ring-[#e54b17]/10 outline-none transition-all resize-none font-medium text-[#0b1b24]" 
                        />
                      </div>

                      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                        <label>Site web <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} /></label>
                      </div>
                      {error && <p role="alert" className="text-sm text-red-600 font-medium">{error}</p>}
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full py-5 rounded-xl font-black text-white flex items-center justify-center gap-2 transition-all ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e54b17] hover:bg-[#d44315] shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1'}`}
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <MessageCircle className="w-5 h-5" />
                            Envoyer le message
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-gray-400 font-medium mt-4">
                        Vos données servent uniquement à répondre à votre message. Voir notre politique de confidentialité.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0b1b24] mb-4">Questions fréquentes</h2>
            <p className="text-gray-500 font-medium">Trouvez des réponses rapides à vos questions.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0b1b24] mb-2">Comment fonctionne ThermoMatch ?</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                ThermoMatch est un outil intelligent qui analyse vos besoins (superficie, étages, isolation) pour vous recommander les 3 meilleures thermopompes pour votre situation spécifique, en calculant la puissance exacte requise.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0b1b24] mb-2">Est-ce que je peux obtenir la subvention Logis Vert ?</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Chaque fiche de notre catalogue affiche le montant LogisVert officiel d'Hydro-Québec pour le jumelage exact. Toutes les marques sont traitées de la même façon, et l'installateur partenaire s'occupe des documents avec vous.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0b1b24] mb-2">Combien de temps faut-il pour l'installation ?</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Une fois la soumission approuvée, l'installation peut généralement être effectuée en 1 à 2 semaines, selon la saison. L'installation elle-même prend généralement moins d'une journée.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
