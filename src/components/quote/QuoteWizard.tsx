"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { QuoteFormValues, quoteFormSchema } from "@/lib/validation/quote";
import { getCityFromPostalCode } from "@/lib/quote/postal-codes";
import {
  loadProjectDraft,
  saveProjectDraft,
  clearProjectDraft,
  projectDraftToQuoteFormData,
  getProjectSummary,
  thermoMatchAnswersToProjectDraft,
  type ProjectDraft,
  type ProjectSummaryItem,
} from "@/lib/project/project-draft";

/* ==============================================================
   Types
   ============================================================== */

type QuoteMode = "thermomatch-prefilled" | "standalone";

/* ==============================================================
   QuoteWizard — dual mode component
   ============================================================== */

export function QuoteWizard() {
  const searchParams = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [quoteMode, setQuoteMode] = useState<QuoteMode>("standalone");
  const [draft, setDraft] = useState<ProjectDraft | null>(null);
  const [summaryItems, setSummaryItems] = useState<ProjectSummaryItem[]>([]);

  // Form state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<QuoteFormValues>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Editable summary state
  const [editingGroup, setEditingGroup] = useState<string | null>(null);

  /* ---- Initialize: detect mode and load draft ---- */
  useEffect(() => {
    const source = searchParams.get("source");
    const savedDraft = loadProjectDraft();

    if (
      source === "thermomatch" &&
      savedDraft?.thermoMatchCompleted === true
    ) {
      setQuoteMode("thermomatch-prefilled");
      setDraft(savedDraft);
      setSummaryItems(getProjectSummary(savedDraft));

      // Pre-fill form data from draft
      const prefilled = projectDraftToQuoteFormData(savedDraft);
      setFormData(prefilled);
    } else {
      setQuoteMode("standalone");
    }

    setIsLoaded(true);
  }, [searchParams]);

  /* ---- Helpers ---- */
  const handleChange = (field: keyof QuoteFormValues, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }

    // Postal code auto-detect city
    if (field === "postalCode" && typeof value === "string") {
      const clean = value.replace(/\s/g, "");
      if (clean.length >= 3) {
        const city = getCityFromPostalCode(clean);
        if (city) setFormData((prev) => ({ ...prev, city }));
      }
    }
  };

  const totalSteps = quoteMode === "thermomatch-prefilled" ? 3 : 5;

  const stepLabel = (s: number): string => {
    if (quoteMode === "thermomatch-prefilled") {
      if (s === 1) return "Précisions d'installation";
      if (s === 2) return "Vos coordonnées";
      if (s === 3) return "Vérification et envoi";
    } else {
      if (s === 1) return "Lieu et propriété";
      if (s === 2) return "Votre besoin";
      if (s === 3) return "Détails et préférences";
      if (s === 4) return "Évaluation du projet";
      if (s === 5) return "Coordonnées";
    }
    return "";
  };

  /* ---- Validation ---- */
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (quoteMode === "standalone") {
      if (currentStep === 1) {
        if (!formData.postalCode) newErrors.postalCode = "Le code postal est requis.";
        else if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(formData.postalCode)) {
          newErrors.postalCode = "Code postal invalide (ex: H1A 1A1).";
        }
        if (!formData.propertyType) newErrors.propertyType = "Veuillez choisir un type de propriété.";
      }
      if (currentStep === 2) {
        if (!formData.systemIntent) newErrors.systemIntent = "Veuillez choisir une option.";
      }
      if (currentStep === 3) {
        if (!formData.timeline) newErrors.timeline = "Veuillez choisir un échéancier.";
      }
      if (currentStep === 5) {
        if (!formData.firstName) newErrors.firstName = "Le prénom est requis.";
        if (!formData.email) newErrors.email = "L'adresse courriel est requise.";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Courriel invalide.";
        if (!formData.phone) newErrors.phone = "Le numéro de téléphone est requis.";
        if (!formData.consentProcessing) newErrors.consentProcessing = "Vous devez accepter les conditions.";
        if (!formData.consentSharing) newErrors.consentSharing = "Vous devez accepter le partage des informations.";
      }
    } else {
      // Prefilled mode
      if (currentStep === 1) {
        if (!formData.timeline) newErrors.timeline = "Veuillez choisir un échéancier.";
      }
      if (currentStep === 2) {
        if (!formData.firstName) newErrors.firstName = "Le prénom est requis.";
        if (!formData.email) newErrors.email = "L'adresse courriel est requise.";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Courriel invalide.";
        if (!formData.phone) newErrors.phone = "Le numéro de téléphone est requis.";
      }
      if (currentStep === 3) {
        if (!formData.consentProcessing) newErrors.consentProcessing = "Vous devez accepter les conditions.";
        if (!formData.consentSharing) newErrors.consentSharing = "Vous devez accepter le partage des informations.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    const finalStep = quoteMode === "thermomatch-prefilled" ? 3 : 5;
    if (!validateStep(finalStep)) return;

    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await fetch("/api/soumission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: quoteMode === "thermomatch-prefilled" ? "thermomatch" : "direct",
        }),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi.");
      }

      const result = await response.json();
      sessionStorage.setItem("quote-reference", result.reference || "REF-ERROR");

      // Cleanup
      clearProjectDraft();
      sessionStorage.removeItem("thermomatch-answers");

      window.location.href = "/soumission/confirmation";
    } catch (err: any) {
      setApiError(err.message || "Impossible de soumettre la demande.");
      setIsSubmitting(false);
    }
  };

  // Don't render until we know the mode
  if (!isLoaded) return null;

  /* ==============================================================
     RENDER
     ============================================================== */

  return (
    <Container className="max-w-3xl py-6 pb-24">
      {/* ---- Recovery banner (prefilled mode) ---- */}
      {quoteMode === "thermomatch-prefilled" && step === 1 && (
        <div className="mb-8 p-5 bg-green-500/5 border border-green-500/20 rounded-[12px]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground text-[15px]">
                Votre projet ThermoMatch a été récupéré
              </p>
              <p className="text-sm text-muted mt-1">
                Vos 9 réponses ont été conservées. Il ne reste que quelques renseignements pour préparer votre proposition.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---- Header (adapts to mode) ---- */}
      {quoteMode === "thermomatch-prefilled" && step === 1 && (
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Compléter votre demande
          </h1>
          <p className="text-[15px] text-muted">
            Ajoutez les précisions d'installation et vos coordonnées. Environ 2 minutes.
          </p>
        </div>
      )}

      {quoteMode === "standalone" && step === 1 && (
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Demande de soumission
          </h1>
          <p className="text-[15px] text-muted">
            Complétez ce court formulaire. Selon votre région et vos besoins, votre demande sera prise en charge par notre équipe.
          </p>
        </div>
      )}

      {/* ---- Progress bar ---- */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-brand">
            Étape {step} sur {totalSteps}
          </span>
          <span className="text-sm text-muted">{stepLabel(step)}</span>
        </div>
        <div className="w-full bg-border h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand h-full transition-all duration-300 ease-in-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {apiError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {apiError}
        </div>
      )}

      {/* ==============================================================
         PREFILLED MODE — Step 1: Summary + Installation details
         ============================================================== */}
      {quoteMode === "thermomatch-prefilled" && step === 1 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Editable summary */}
          <div className="bg-surface border border-border rounded-[12px] overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-background/50">
              <h2 className="text-base font-semibold text-foreground">Résumé de votre projet</h2>
            </div>
            <div className="divide-y divide-border">
              {summaryItems.map((item) => (
                <div key={item.label} className="flex items-center justify-between px-6 py-3.5">
                  <span className="text-sm text-muted">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Installation details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Précisions d'installation</h2>
            <div className="space-y-5">
              {/* Project type */}
              <div className="space-y-2">
                <label className="block text-[15px] font-semibold">S'agit-il d'un ajout ou d'un remplacement? *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "ajout", label: "Ajout (nouveau système)" },
                    { id: "remplacement", label: "Remplacement d'un système existant" },
                    { id: "nouvelle-installation", label: "Première installation" },
                    { id: "ne-sais-pas", label: "Je ne sais pas" },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className={`
                        flex items-center p-4 border rounded-[10px] cursor-pointer transition-colors
                        ${formData.projectType === opt.id ? "border-brand bg-brand/5" : "border-border hover:border-brand/30"}
                      `}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        className="sr-only"
                        checked={formData.projectType === opt.id}
                        onChange={() => handleChange("projectType" as any, opt.id)}
                      />
                      <span className={`font-medium text-[15px] ${formData.projectType === opt.id ? "text-brand" : "text-foreground"}`}>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Conditional: Mural/Multizone questions */}
              {(formData.systemIntent === "murale_simple" || formData.systemIntent === "murale_multi") && (
                <>
                  <div className="space-y-2">
                    <label className="block text-[15px] font-semibold">Combien d'unités intérieures souhaitées?</label>
                    <select
                      className="w-full rounded-[10px] border border-input-border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px]"
                      value={(formData as any).indoorUnitsWanted || ""}
                      onChange={(e) => handleChange("indoorUnitsCount" as any, e.target.value)}
                    >
                      <option value="">Sélectionner</option>
                      <option value="1">1 unité</option>
                      <option value="2">2 unités</option>
                      <option value="3">3 unités</option>
                      <option value="4">4 unités</option>
                      <option value="5+">5 ou plus</option>
                      <option value="inconnu">Je ne sais pas</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[15px] font-semibold">À quel(s) étage(s)?</label>
                    <Input
                      placeholder="Ex: Rez-de-chaussée et 2e étage, salon et chambres"
                      value={(formData as any).unitFloors || ""}
                      onChange={(e) => handleChange("floorsForUnits" as any, e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* Conditional: Central questions */}
              {formData.systemIntent === "centrale" && (
                <>
                  <div className="space-y-2">
                    <label className="block text-[15px] font-semibold">La propriété possède-t-elle déjà des conduits?</label>
                    <select
                      className="w-full rounded-[10px] border border-input-border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px]"
                      value={formData.hasDucts || ""}
                      onChange={(e) => handleChange("hasDucts", e.target.value)}
                    >
                      <option value="">Sélectionner</option>
                      <option value="oui_existant">Oui, système central existant</option>
                      <option value="oui_inconnu">Oui, mais état inconnu</option>
                      <option value="non">Non, pas de conduits</option>
                      <option value="inconnu">Je ne sais pas</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[15px] font-semibold">Où se trouve ou se trouverait l'équipement central?</label>
                    <select
                      className="w-full rounded-[10px] border border-input-border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px]"
                      value={formData.indoorUnitLocation || ""}
                      onChange={(e) => handleChange("indoorUnitLocation", e.target.value)}
                    >
                      <option value="">Sélectionner</option>
                      <option value="sous_sol">Sous-sol</option>
                      <option value="grenier">Grenier</option>
                      <option value="garage">Garage</option>
                      <option value="mecanique">Salle mécanique</option>
                      <option value="autre">Autre</option>
                      <option value="inconnu">Je ne sais pas</option>
                    </select>
                  </div>
                </>
              )}

              {/* Timeline */}
              <div className="space-y-2">
                <label className="block text-[15px] font-semibold">Quand souhaitez-vous réaliser le projet? *</label>
                <select
                  className={`w-full rounded-[10px] border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px] ${errors.timeline ? "border-red-500" : "border-input-border"}`}
                  value={formData.timeline || ""}
                  onChange={(e) => handleChange("timeline", e.target.value)}
                >
                  <option value="">Sélectionner</option>
                  <option value="asap">Dès que possible</option>
                  <option value="30jours">Dans les 30 prochains jours</option>
                  <option value="1-3mois">Dans les 1 à 3 prochains mois</option>
                  <option value="plus-tard">Plus tard</option>
                  <option value="magasine">Je magasine seulement</option>
                </select>
                {errors.timeline && <p className="text-[13px] text-red-500 mt-1">{errors.timeline}</p>}
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="block text-[15px] font-semibold">Adresse complète du projet (facultatif)</label>
                <Input
                  placeholder="123 rue Principale, Ville, QC"
                  value={(formData as any).fullAddress || ""}
                  onChange={(e) => handleChange("fullAddress" as any, e.target.value)}
                />
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="block text-[15px] font-semibold">Commentaires ou précisions (facultatif)</label>
                <textarea
                  className="w-full rounded-[10px] border border-input-border bg-surface px-[18px] py-4 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand min-h-[100px] resize-y"
                  placeholder="Toute information utile pour votre projet..."
                  value={(formData as any).notes || ""}
                  onChange={(e) => handleChange("notes" as any, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
         PREFILLED MODE — Step 2: Contact
         ============================================================== */}
      {quoteMode === "thermomatch-prefilled" && step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h2 className="text-xl font-semibold mb-2">Vos coordonnées</h2>
            <p className="text-sm text-muted mb-6">
              Un conseiller de notre équipe vous contactera pour analyser votre projet et vous fournir votre évaluation.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Prénom *</label>
                  <Input
                    type="text"
                    value={formData.firstName || ""}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-[13px] text-red-500">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Nom (facultatif)</label>
                  <Input
                    type="text"
                    value={formData.lastName || ""}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Courriel *</label>
                  <Input
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-[13px] text-red-500">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Téléphone *</label>
                  <Input
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-[13px] text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[15px] font-semibold">Moyen de communication préféré</label>
                <div className="flex gap-3">
                  {[
                    { id: "phone", label: "Téléphone" },
                    { id: "email", label: "Courriel" },
                    { id: "any", label: "Aucune préférence" },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className={`
                        flex items-center px-4 py-3 border rounded-[10px] cursor-pointer transition-colors flex-1 justify-center
                        ${formData.preferredContact === opt.id ? "border-brand bg-brand/5" : "border-border hover:border-brand/30"}
                      `}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        className="sr-only"
                        checked={formData.preferredContact === opt.id}
                        onChange={() => handleChange("preferredContact", opt.id)}
                      />
                      <span className={`font-medium text-sm ${formData.preferredContact === opt.id ? "text-brand" : "text-foreground"}`}>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
         PREFILLED MODE — Step 3: Review & Submit
         ============================================================== */}
      {quoteMode === "thermomatch-prefilled" && step === 3 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Vérification avant envoi</h2>
            <p className="text-muted leading-relaxed mb-6">
              Vérifiez les informations ci-dessous avant de soumettre votre demande.
            </p>

            {/* Full summary */}
            <div className="bg-surface border border-border rounded-[12px] overflow-hidden mb-6">
              <div className="px-6 py-4 border-b border-border bg-background/50">
                <h3 className="font-semibold text-sm text-muted uppercase tracking-wide">Votre projet</h3>
              </div>
              <div className="divide-y divide-border">
                {summaryItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-6 py-3">
                    <span className="text-sm text-muted">{item.label}</span>
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
                {formData.timeline && (
                  <div className="flex items-center justify-between px-6 py-3">
                    <span className="text-sm text-muted">Échéancier</span>
                    <span className="text-sm font-medium text-foreground">{formData.timeline}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact summary */}
            <div className="bg-surface border border-border rounded-[12px] overflow-hidden mb-6">
              <div className="px-6 py-4 border-b border-border bg-background/50">
                <h3 className="font-semibold text-sm text-muted uppercase tracking-wide">Coordonnées</h3>
              </div>
              <div className="divide-y divide-border">
                {formData.firstName && (
                  <div className="flex items-center justify-between px-6 py-3">
                    <span className="text-sm text-muted">Nom</span>
                    <span className="text-sm font-medium text-foreground">
                      {formData.firstName} {formData.lastName || ""}
                    </span>
                  </div>
                )}
                {formData.email && (
                  <div className="flex items-center justify-between px-6 py-3">
                    <span className="text-sm text-muted">Courriel</span>
                    <span className="text-sm font-medium text-foreground">{formData.email}</span>
                  </div>
                )}
                {formData.phone && (
                  <div className="flex items-center justify-between px-6 py-3">
                    <span className="text-sm text-muted">Téléphone</span>
                    <span className="text-sm font-medium text-foreground">{formData.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Consents */}
            <div className="space-y-4 pt-4 border-t border-border">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                    checked={formData.consentProcessing || false}
                    onChange={(e) => handleChange("consentProcessing", e.target.checked)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Traitement de la demande *</span>
                  <span className="text-[13px] text-muted">J'accepte les conditions d'utilisation et la politique de confidentialité.</span>
                  {errors.consentProcessing && <span className="text-[13px] text-red-500 mt-1">{errors.consentProcessing}</span>}
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                    checked={formData.consentSharing || false}
                    onChange={(e) => handleChange("consentSharing", e.target.checked)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Partage pour évaluation *</span>
                  <span className="text-[13px] text-muted">J'accepte que ma demande soit transmise à notre équipe interne pour obtenir mon évaluation.</span>
                  {errors.consentSharing && <span className="text-[13px] text-red-500 mt-1">{errors.consentSharing}</span>}
                </div>
              </label>
            </div>

            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input type="text" name="honeypot" tabIndex={-1} value={(formData as any).honeypot || ""} onChange={(e) => handleChange("honeypot" as any, e.target.value)} />
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
         STANDALONE MODE — Original 5-step form
         ============================================================== */}

      {/* --- STEP 1 --- */}
      {quoteMode === "standalone" && step === 1 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Suggest ThermoMatch */}
          <div className="p-4 bg-brand/5 border border-brand/10 rounded-[10px] flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Vous ne savez pas quelle thermopompe choisir?</p>
              <p className="text-[13px] text-muted mt-0.5">Répondez à quelques questions pour obtenir des recommandations personnalisées.</p>
            </div>
            <a href="/trouver-ma-thermopompe" className="shrink-0 ml-4 text-sm font-semibold text-brand hover:underline">
              Lancer ThermoMatch →
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Où se trouve le projet?</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-[15px] font-semibold">Code postal *</label>
                <Input
                  placeholder="H1A 1A1"
                  value={formData.postalCode || ""}
                  onChange={(e) => handleChange("postalCode", e.target.value)}
                  className={errors.postalCode ? "border-red-500" : ""}
                />
                {errors.postalCode && <p className="text-[13px] text-red-500">{errors.postalCode}</p>}
              </div>

              {formData.city && (
                <div className="p-3 bg-brand/5 border border-brand/10 rounded-[10px] flex items-center justify-between">
                  <span className="text-sm font-medium text-brand">Région détectée : {formData.city}</span>
                  <button
                    onClick={() => setFormData((prev) => ({ ...prev, city: "" }))}
                    className="text-[13px] text-brand underline"
                  >
                    Modifier
                  </button>
                </div>
              )}

              {!formData.city && (formData.postalCode?.length ?? 0) >= 3 && (
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Ville</label>
                  <Input
                    value={formData.city || ""}
                    onChange={(e) => handleChange("city", e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Type de propriété</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: "unifamiliale", label: "Maison unifamiliale" },
                { id: "condo", label: "Condo" },
                { id: "duplex", label: "Duplex" },
                { id: "triplex", label: "Triplex" },
                { id: "multiplex", label: "4 logements et +" },
                { id: "mobile", label: "Maison mobile" },
                { id: "autre", label: "Autre" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`
                    flex items-center p-4 border rounded-[10px] cursor-pointer transition-colors
                    ${formData.propertyType === opt.id ? "border-brand bg-brand/5" : "border-border hover:border-brand/30"}
                  `}
                >
                  <input
                    type="radio"
                    name="propertyType"
                    className="sr-only"
                    checked={formData.propertyType === opt.id}
                    onChange={() => handleChange("propertyType", opt.id)}
                  />
                  <span className={`font-medium ${formData.propertyType === opt.id ? "text-brand" : "text-foreground"}`}>
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
            {errors.propertyType && <p className="text-[13px] text-red-500 mt-2">{errors.propertyType}</p>}
          </div>
        </div>
      )}

      {/* --- STEP 2 (standalone) --- */}
      {quoteMode === "standalone" && step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h2 className="text-xl font-semibold mb-4">Quel type de système recherchez-vous?</h2>
            <div className="space-y-3">
              {[
                { id: "murale_simple", label: "Thermopompe murale (1 zone)", desc: "Pour chauffer ou climatiser une aire ouverte." },
                { id: "murale_multi", label: "Thermopompe murale (Multizone)", desc: "Pour couvrir plusieurs étages ou pièces fermées." },
                { id: "centrale", label: "Thermopompe centrale", desc: "Utilise des conduits d'air existants ou à construire." },
                { id: "remplacement", label: "Remplacement d'un système existant", desc: "Mon appareil actuel est défectueux ou en fin de vie." },
                { id: "inconnu", label: "Je ne sais pas encore", desc: "J'ai besoin de conseils pour choisir." },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`
                    flex flex-col p-4 border rounded-[10px] cursor-pointer transition-colors
                    ${formData.systemIntent === opt.id ? "border-brand bg-brand/5" : "border-border hover:border-brand/30"}
                  `}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="systemIntent"
                      className="h-4 w-4 text-brand focus:ring-brand border-gray-300"
                      checked={formData.systemIntent === opt.id}
                      onChange={() => handleChange("systemIntent", opt.id)}
                    />
                    <span className={`ml-3 font-medium ${formData.systemIntent === opt.id ? "text-brand" : "text-foreground"}`}>
                      {opt.label}
                    </span>
                  </div>
                  <p className="ml-7 mt-1 text-sm text-muted">{opt.desc}</p>
                </label>
              ))}
            </div>
            {errors.systemIntent && <p className="text-[13px] text-red-500 mt-2">{errors.systemIntent}</p>}
          </div>
        </div>
      )}

      {/* --- STEP 3 (standalone) --- */}
      {quoteMode === "standalone" && step === 3 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-xl font-semibold mb-4">Détails de l'installation</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[15px] font-semibold">Superficie approximative à couvrir</label>
              <select
                className="w-full rounded-[10px] border border-input-border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px]"
                value={formData.sqft || ""}
                onChange={(e) => handleChange("sqft", e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="<750">Moins de 750 pi²</option>
                <option value="750-999">750 à 999 pi²</option>
                <option value="1000-1249">1 000 à 1 249 pi²</option>
                <option value="1250-1499">1 250 à 1 499 pi²</option>
                <option value="1500-1999">1 500 à 1 999 pi²</option>
                <option value="2000-2499">2 000 à 2 499 pi²</option>
                <option value="2500+">2 500 pi² ou plus</option>
                <option value="inconnu">Je ne sais pas</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold">Quel système chauffez-vous actuellement?</label>
              <select
                className="w-full rounded-[10px] border border-input-border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px]"
                value={formData.currentHeating || ""}
                onChange={(e) => handleChange("currentHeating", e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="plinthes">Plinthes électriques</option>
                <option value="fournaise_elec">Fournaise électrique</option>
                <option value="thermopompe_centrale">Thermopompe centrale</option>
                <option value="thermopompe_murale">Thermopompe murale</option>
                <option value="gaz">Gaz naturel</option>
                <option value="mazout">Mazout</option>
                <option value="bois">Bois</option>
                <option value="plusieurs">Plusieurs systèmes</option>
                <option value="inconnu">Je ne sais pas</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {formData.systemIntent === "centrale" && (
              <>
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Présence de conduits d'air</label>
                  <select
                    className="w-full rounded-[10px] border border-input-border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px]"
                    value={formData.hasDucts || ""}
                    onChange={(e) => handleChange("hasDucts", e.target.value)}
                  >
                    <option value="">Sélectionner</option>
                    <option value="oui_existant">Oui, système central existant</option>
                    <option value="oui_inconnu">Oui, mais état inconnu</option>
                    <option value="non">Non, pas de conduits</option>
                    <option value="inconnu">Je ne sais pas</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Emplacement prévu de l'unité intérieure</label>
                  <select
                    className="w-full rounded-[10px] border border-input-border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px]"
                    value={formData.indoorUnitLocation || ""}
                    onChange={(e) => handleChange("indoorUnitLocation", e.target.value)}
                  >
                    <option value="">Sélectionner</option>
                    <option value="sous_sol">Sous-sol</option>
                    <option value="mecanique">Salle mécanique</option>
                    <option value="grenier">Grenier</option>
                    <option value="vide_sanitaire">Vide sanitaire</option>
                    <option value="autre">Autre</option>
                    <option value="inconnu">Je ne sais pas</option>
                  </select>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold">Échéancier prévu *</label>
              <select
                className={`w-full rounded-[10px] border bg-surface px-[18px] py-3 text-[15px] text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand h-[52px] ${errors.timeline ? "border-red-500" : "border-input-border"}`}
                value={formData.timeline || ""}
                onChange={(e) => handleChange("timeline", e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="asap">Dès que possible</option>
                <option value="30jours">Dans les 30 prochains jours</option>
                <option value="1-3mois">Dans les 1 à 3 prochains mois</option>
                <option value="plus-tard">Plus tard</option>
                <option value="magasine">Je magasine seulement</option>
              </select>
              {errors.timeline && <p className="text-[13px] text-red-500 mt-1">{errors.timeline}</p>}
            </div>
          </div>
        </div>
      )}

      {/* --- STEP 4 (standalone) --- */}
      {quoteMode === "standalone" && step === 4 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Votre projet est prêt à être évalué</h2>
            <p className="text-muted leading-relaxed mb-6">
              Nous avons recueilli suffisamment d'informations pour comprendre vos besoins.
              Une analyse est nécessaire pour valider le modèle idéal et les particularités
              de l'installation afin d'établir un prix précis pour votre habitation de <strong>{formData.city || "votre région"}</strong>.
            </p>

            <div className="bg-surface border border-border p-5 rounded-[12px] mb-6">
              <h3 className="font-medium text-sm text-muted uppercase tracking-wide mb-3">Résumé</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted">Type :</span>
                  <span className="font-medium text-foreground">{formData.systemIntent}</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted">Chauffage actuel :</span>
                  <span className="font-medium text-foreground">{formData.currentHeating || "Non spécifié"}</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span className="text-muted">Échéancier :</span>
                  <span className="font-medium text-foreground">{formData.timeline}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* --- STEP 5 (standalone) --- */}
      {quoteMode === "standalone" && step === 5 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h2 className="text-xl font-semibold mb-2">Vos coordonnées</h2>
            <p className="text-sm text-muted mb-6">
              Un conseiller de notre équipe vous contactera pour analyser votre projet et vous fournir votre évaluation.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Prénom *</label>
                  <Input
                    type="text"
                    value={formData.firstName || ""}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-[13px] text-red-500">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Nom (Facultatif)</label>
                  <Input
                    type="text"
                    value={formData.lastName || ""}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Courriel *</label>
                  <Input
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-[13px] text-red-500">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-[15px] font-semibold">Téléphone *</label>
                  <Input
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-[13px] text-red-500">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Consents */}
            <div className="mt-8 space-y-4 pt-6 border-t border-border">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                    checked={formData.consentProcessing || false}
                    onChange={(e) => handleChange("consentProcessing", e.target.checked)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Traitement de la demande *</span>
                  <span className="text-[13px] text-muted">J'accepte les conditions d'utilisation et la politique de confidentialité.</span>
                  {errors.consentProcessing && <span className="text-[13px] text-red-500 mt-1">{errors.consentProcessing}</span>}
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                    checked={formData.consentSharing || false}
                    onChange={(e) => handleChange("consentSharing", e.target.checked)}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Partage pour évaluation *</span>
                  <span className="text-[13px] text-muted">J'accepte que ma demande soit transmise à notre équipe interne pour obtenir mon évaluation.</span>
                  {errors.consentSharing && <span className="text-[13px] text-red-500 mt-1">{errors.consentSharing}</span>}
                </div>
              </label>
            </div>

            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input type="text" name="honeypot" tabIndex={-1} value={(formData as any).honeypot || ""} onChange={(e) => handleChange("honeypot" as any, e.target.value)} />
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
         Navigation Buttons (shared)
         ============================================================== */}
      <div className="mt-10 flex items-center justify-between pt-6 border-t border-border">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="text-sm font-medium text-muted hover:text-foreground transition-colors px-4 py-2"
            disabled={isSubmitting}
          >
            ← Retour
          </button>
        ) : (
          <div /> // Spacer
        )}

        {step < totalSteps ? (
          <button
            type="button"
            onClick={nextStep}
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            {quoteMode === "standalone" && step === 4 ? "Continuer" : "Suivant"}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
        )}
      </div>
    </Container>
  );
}
