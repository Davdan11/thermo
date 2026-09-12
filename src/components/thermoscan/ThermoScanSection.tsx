"use client";
import React, { useState, useCallback, useEffect, useId, type ReactNode } from "react";
import {
  Camera, Upload, Search, RotateCcw, ArrowRight,
  AlertCircle, X, CheckCircle, Thermometer, Zap,
  Shield, TrendingUp, Info,
} from "lucide-react";
import { motion } from "motion/react";
import type { ScanResult, CatalogMatch, WarrantyEntry } from "@/lib/thermoscan/types";
import { track } from "@/lib/analytics/track";
import { saveExistingUnit } from "@/lib/project/project-draft";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { MONO } from "@/components/heroes-v2/outils/fonts";
import { Corners } from "@/components/sections-v2/outils/kit";
import "@/components/sections-v2/outils/viseur/viseur.css";

/* ==================================================================
   Outil ThermoScan (page /thermoscan). Présentation « viseur » : graphite,
   blanc, orange d'affichage tête haute, relevés en mono, coins de mise
   au point. Chaque étape arrive par une mise au point (flou vers net).
   La logique est inchangée : photo (caméra ou galerie), appel à
   /api/thermoscan/analyze, confirmation des champs, recherche dans le
   catalogue, fiche technique, comparaison, fiche par courriel, brouillon
   de projet.
   ================================================================== */

type Step = "intro" | "guide" | "capture" | "analyzing" | "confirm" | "speccard" | "compare";

const HUD = "#FF6A2B";
const LINE = "rgba(255,255,255,0.14)";
const MUTE = "rgba(255,255,255,0.72)";
const FAINT = "rgba(255,255,255,0.5)";
const TONE = { danger: "#FF7A5C", warn: "#F2B64C", ok: "#6FD39B" } as const;

/* helpers */
function fmtBtu(v: number | null | undefined): string {
  if (!v) return "N/D";
  return `${v.toLocaleString("fr-CA")} BTU/h`;
}
function fmtNum(v: number | null | undefined, d = 1): string {
  if (v === null || v === undefined) return "N/D";
  return Number(v).toFixed(d);
}
function ageLabel(year: number | null | undefined): string {
  if (!year) return "";
  const age = new Date().getFullYear() - year;
  if (age <= 0) return "Neuf";
  return `${age} an${age > 1 ? "s" : ""}`;
}

/* refrigerant alert */
function refrigerantNote(ref: string | null | undefined) {
  if (!ref) return null;
  const r = ref.toUpperCase();
  if (r.includes("R-22") || r.includes("R22"))
    return { level: "danger" as const, text: "Le R-22 n'est plus fabriqué ni importé au Canada depuis 2020 : recharge coûteuse et de plus en plus rare. Remplacement à prioriser." };
  if (r.includes("R-410A") || r.includes("R410A"))
    return { level: "warn" as const, text: "R-410A encore disponible, mais en transition vers des fluides à plus faible potentiel de réchauffement (R-454B, R-32)." };
  if (r.includes("R-454B") || r.includes("R-32"))
    return { level: "ok" as const, text: "Fluide de nouvelle génération à faible impact environnemental." };
  return null;
}

/* age alert */
function ageAlert(year: number | null | undefined) {
  if (!year) return null;
  const age = new Date().getFullYear() - year;
  if (age >= 15) return { level: "danger" as const, text: `Appareil de ${age} ans. Au-delà de la durée de vie typique (12 à 15 ans). Risque de pannes et pièces difficiles à trouver.` };
  if (age >= 10) return { level: "warn" as const, text: `Appareil de ${age} ans. Dans la zone d'usure. Un remplacement préventif est souvent plus économique.` };
  return null;
}

/* Petit titre mono (relevé du viseur). */
function Kicker({ children, color = HUD }: { children: ReactNode; color?: string }) {
  return (
    <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color, margin: 0 }}>
      {children}
    </p>
  );
}

/* Chaque étape arrive par une mise au point : flou vers net. */
function Focus({ children }: { children: ReactNode }) {
  const reduce = useReduced();
  return (
    <motion.div initial={{ opacity: 0, filter: "blur(8px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={reduce ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

/* analyzing animation */
const STEPS_TXT = [
  "Lecture de l'étiquette…",
  "Extraction des informations…",
  "Recherche dans le catalogue…",
  "Vérification des caractéristiques…",
  "Préparation de la comparaison…",
];
function AnalyzingView() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => Math.min(i + 1, STEPS_TXT.length - 1)), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="py-6" role="status" aria-live="polite">
      <div className="relative mx-auto overflow-hidden" style={{ aspectRatio: "16 / 7", maxWidth: 520, background: "rgba(255,255,255,0.02)" }}>
        <Corners color={HUD} size={18} weight={2} />
        <span aria-hidden="true" className="vz-scan absolute inset-x-[8%] h-px" style={{ background: HUD }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-[18px] font-semibold text-white" style={{ margin: 0, letterSpacing: "-0.01em" }}>Analyse en cours…</p>
          <p className="mt-2 text-[12px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: HUD, margin: "8px 0 0" }}>{STEPS_TXT[idx]}</p>
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto mt-5 flex max-w-[520px] gap-1.5">
        {STEPS_TXT.map((_, i) => (
          <span key={i} className="h-[3px] flex-1" style={{ background: i <= idx ? HUD : "rgba(255,255,255,0.14)", transition: "background-color 0.3s" }} />
        ))}
      </div>
    </div>
  );
}

/* alert banner */
function AlertBanner({ level, text }: { level: "danger" | "warn" | "ok"; text: string }) {
  return (
    <div className="flex gap-3 items-start py-3 pl-4 pr-3 text-[14px] leading-relaxed" style={{ borderLeft: `2px solid ${TONE[level]}`, background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.86)" }}>
      <AlertCircle size={15} className="flex-shrink-0 mt-[3px]" style={{ color: TONE[level] }} />{text}
    </div>
  );
}

/* spec row */
function SpecRow({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b last:border-0" style={{ borderColor: LINE }}>
      <span className="text-[11.5px] uppercase pt-[3px]" style={{ fontFamily: MONO, letterSpacing: "0.06em", color: FAINT }}>{label}</span>
      <div className="text-right">
        <span className="text-[15px] font-semibold text-white">{value}</span>
        {sub && <p className="text-[12px] mt-0.5" style={{ color: FAINT, margin: "2px 0 0" }}>{sub}</p>}
      </div>
    </div>
  );
}

/* section card */
function SectionCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="relative" style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.02)" }}>
      <div className="flex items-center gap-2.5 px-4 py-3 border-b" style={{ borderColor: LINE, background: "rgba(255,255,255,0.03)" }}>
        <Icon size={15} style={{ color: HUD }} />
        <p className="text-[11px] uppercase text-white" style={{ fontFamily: MONO, letterSpacing: "0.14em", margin: 0 }}>{title}</p>
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
}

/* warranty card */
function WarrantyCard({ warranties }: { warranties: WarrantyEntry[] }) {
  const reduce = useReduced();
  if (!warranties || warranties.length === 0) return null;

  // Pick best warranty (most years of parts coverage)
  const best = [...warranties].sort((a, b) => (b.partsYears ?? 0) - (a.partsYears ?? 0))[0];
  const hasMultiple = warranties.length > 1;

  function WarBar({ years, max = 12, label }: { years: number | null; max?: number; label: string }) {
    if (!years) return null;
    const pct = Math.min(100, (years / max) * 100);
    const color = years >= 10 ? TONE.ok : years >= 7 ? TONE.warn : TONE.danger;
    return (
      <div className="mb-3">
        <div className="flex justify-between text-[11.5px] mb-1.5 uppercase" style={{ fontFamily: MONO, letterSpacing: "0.06em" }}>
          <span style={{ color: FAINT }}>{label}</span>
          <span style={{ color }}>{years} an{years > 1 ? "s" : ""}</span>
        </div>
        <div className="h-[3px] overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <motion.div className="h-full" style={{ background: color }} initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} />
        </div>
      </div>
    );
  }

  return (
    <SectionCard icon={Shield} title="Garantie fabricant">
      <div className="py-4">
        {hasMultiple && (
          <p className="text-[12.5px] mb-3 italic" style={{ color: FAINT, margin: "0 0 12px" }}>
            {warranties.length} options de garantie disponibles selon le modèle et l&apos;installateur.
          </p>
        )}
        <WarBar years={best.partsYears} label="Pièces" />
        <WarBar years={best.compressorYears} label="Compresseur" />
        {best.laborYears !== null && best.laborYears !== undefined && (
          <WarBar years={best.laborYears} label="Main-d'oeuvre" />
        )}
        {best.registrationNote && (
          <p className="text-[12.5px] leading-relaxed mt-3 py-2 pl-3" style={{ borderLeft: `2px solid ${TONE.warn}`, color: "rgba(255,255,255,0.82)", margin: "12px 0 0" }}>
            {best.registrationNote}
          </p>
        )}
        {hasMultiple && (
          <p className="text-[12px] mt-2" style={{ color: FAINT, margin: "8px 0 0" }}>
            Option maximale affichée. Durée selon la série et les conditions d&apos;inscription.
          </p>
        )}
      </div>
    </SectionCard>
  );
}


/* delta row */
function DeltaRow({ label, current, recommended, better, note }: {
  label: string; current: string; recommended: string; better: boolean; note?: string;
}) {
  return (
    <div className="py-3.5 border-b last:border-0" style={{ borderColor: LINE }}>
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: FAINT }}>{label}</span>
        {better && <span className="text-[10.5px] uppercase px-1.5 py-[2px]" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TONE.ok, border: `1px solid ${TONE.ok}` }}>Mieux</span>}
      </div>
      <div className="flex items-center gap-3 text-sm">
        <div className="flex-1 text-center">
          <p className="text-[11px] uppercase mb-0.5" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: FAINT, margin: "0 0 2px" }}>Actuel</p>
          <p className="font-semibold text-white" style={{ margin: 0 }}>{current}</p>
        </div>
        <ArrowRight size={16} style={{ color: HUD, flexShrink: 0 }} />
        <div className="flex-1 text-center">
          <p className="text-[11px] uppercase mb-0.5" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: FAINT, margin: "0 0 2px" }}>Recommandé</p>
          <p className="font-bold" style={{ margin: 0, color: better ? TONE.ok : "#fff" }}>{recommended}</p>
        </div>
      </div>
      {note && <p className="text-[12.5px] mt-2 italic" style={{ color: FAINT, margin: "8px 0 0" }}>{note}</p>}
    </div>
  );
}

/* device spec card */
function DeviceSpecCard({
  brand, model, year, match, labelSpecs, warranties, onCompare, hasThermomatch, sessionId,
}: {
  brand: string; model: string; year: number | null | undefined;
  match: CatalogMatch | null; labelSpecs?: any | null;
  warranties?: WarrantyEntry[] | null;
  onCompare: () => void; hasThermomatch: boolean; sessionId?: string;
}) {
  // Prefer catalog data; fall back to Gemini-read label specs (e.g. CELCIA, Asian brands)
  const ls       = labelSpecs ?? null;
  const refStr   = match?.refrigerant ?? ls?.refrigerant ?? null;
  const refNote  = refrigerantNote(refStr);
  const ageNote  = ageAlert(year);
  const hspf2    = match?.hspf2 ? (typeof match.hspf2 === "object" ? match.hspf2.max : match.hspf2) : null;
  const seer2    = match?.seer2 ? (typeof match.seer2 === "object" ? match.seer2.max : match.seer2) : null;
  // Heating BTU: catalog then label (Watts converted to BTU/h)
  const btu5F    = match?.heatingCapacity5F?.max ?? match?.nominalBtu ?? ls?.heatingBtuH ?? ls?.coolingBtuH ?? null;
  // Raw label values (Watts)
  const heatW    = ls?.heatingCapacityW ?? null;
  const coolW    = ls?.coolingCapacityW ?? null;
  const coolBtu  = ls?.coolingBtuH ?? null;
  const pwrHeatW = ls?.powerInputHeatingW ?? null;
  const voltStr  = ls?.voltage ?? null;
  const chargeG  = ls?.refrigerantChargeG ?? null;
  const weightS  = ls?.weightKg ?? null;
  const hasLabelW = !!(heatW || coolW);
  const alerts = [ageNote, refNote].filter(Boolean) as { level: "danger" | "warn" | "ok"; text: string }[];
  const btnPrimary = "vz-btn vz-primary w-full px-4 py-3.5 text-[14.5px]";

  return (
    <div className="flex flex-col gap-4">
      {/* Cartouche : l'appareil verrouillé */}
      <div className="relative flex items-start justify-between gap-3 px-5 py-4" style={{ background: "rgba(255,255,255,0.02)" }}>
        <Corners color={HUD} size={12} weight={2} />
        <div className="min-w-0">
          <Kicker>Appareil identifié</Kicker>
          <h3 className="font-semibold text-white text-[24px] leading-tight mt-1.5" style={{ letterSpacing: "-0.02em", margin: "6px 0 0" }}>{brand}</h3>
          {model && <p className="text-[13px] mt-1 break-all" style={{ fontFamily: MONO, color: MUTE, margin: "4px 0 0" }}>{model}</p>}
        </div>
        {year && (
          <div className="text-right flex-shrink-0">
            <p className="text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: FAINT, margin: 0 }}>Mis sur le marché</p>
            <p className="font-semibold text-white text-[20px]" style={{ margin: "2px 0 0" }}>{year}</p>
            <p className="text-[12px]" style={{ color: FAINT, margin: 0 }}>{ageLabel(year)}</p>
          </div>
        )}
      </div>

      {alerts.length > 0 && (
        <div className="flex flex-col gap-2">{alerts.map((a, i) => <AlertBanner key={i} {...a} />)}</div>
      )}

      <SectionCard icon={Thermometer} title="Performance">
        {btu5F ? (
          <SpecRow
            label={match ? "Capacité chauffage (-15 °C)" : "Puissance chauffage"}
            value={fmtBtu(btu5F)}
            sub={match ? "Capacité à -15 °C (5 °F), conditions hivernales" : "Calculé depuis les watts de l'étiquette"}
          />
        ) : null}
        {!match && coolBtu ? (
          <SpecRow label="Puissance climatisation" value={fmtBtu(coolBtu)} sub="Calculé depuis les watts de l'étiquette" />
        ) : null}
        {heatW ? <SpecRow label="Puissance chaud (étiquette)" value={`${heatW.toLocaleString("fr-CA")} W`} /> : null}
        {coolW ? <SpecRow label="Puissance froid (étiquette)" value={`${coolW.toLocaleString("fr-CA")} W`} /> : null}
        {pwrHeatW ? <SpecRow label="Consommation chauffage" value={`${pwrHeatW.toLocaleString("fr-CA")} W`} /> : null}
        {!btu5F && !coolBtu && !heatW && !coolW ? (
          <SpecRow label="Capacité" value="Non disponible" />
        ) : null}
        {match && <SpecRow label="Certifié climat froid" value={match.coldClimate ? "Oui" : "Non"} />}
      </SectionCard>

      <SectionCard icon={Zap} title="Caractéristiques techniques">
        {hspf2 ? (
          <SpecRow label="HSPF2 (efficacité chauffage)"
            value={fmtNum(hspf2)}
            sub={hspf2 >= 10 ? "Bonne efficacité" : hspf2 >= 9 ? "Efficacité standard" : "Inférieure à la norme 2026"} />
        ) : (
          <SpecRow label="HSPF2" value="N/D — marque hors catalogue ENERGY STAR" />
        )}
        {seer2 ? (
          <SpecRow label="SEER2 (climatisation)"
            value={fmtNum(seer2)}
            sub={seer2 >= 20 ? "Très efficace" : seer2 >= 17 ? "Efficacité correcte" : "Inférieure aux normes actuelles"} />
        ) : null}
        <SpecRow label="Fluide frigorigène" value={refStr ?? "N/D"} />
        {chargeG ? <SpecRow label="Charge de fluide" value={`${chargeG} g`} /> : null}
        {voltStr ? <SpecRow label="Tension" value={voltStr} /> : null}
        {weightS ? <SpecRow label="Poids" value={weightS} /> : null}
      </SectionCard>

      <p className="text-[11px] uppercase flex items-center gap-2" style={{ fontFamily: MONO, letterSpacing: "0.06em", color: FAINT, margin: 0 }}>
        <Info size={12} className="flex-shrink-0" style={{ color: HUD }} />
        {match?.source === "legacy-catalog"
          ? "Données ENERGY STAR Canada 2011 à 2026"
          : match?.source === "catalog-2026"
          ? "Données ENERGY STAR Canada 2026"
          : hasLabelW
          ? "Valeurs lues directement sur l'étiquette"
          : "Données de l'étiquette, catalogue non disponible pour ce fabricant"}
      </p>

      {warranties && warranties.length > 0 && (
        <WarrantyCard warranties={warranties} />
      )}

      {hasThermomatch ? (
        <button onClick={onCompare} className={btnPrimary}>
          Voir la comparaison ThermoMatch <ArrowRight size={16} className="vz-arrow" />
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          <a href="/trouver-ma-thermopompe" className={btnPrimary}>
            Obtenir mes recommandations ThermoMatch <ArrowRight size={16} className="vz-arrow" />
          </a>
          <p className="text-[12.5px] text-center" style={{ color: FAINT, margin: 0 }}>ThermoMatch analyse votre profil pour recommander le modèle idéal.</p>
        </div>
      )}

      <a href="/rendez-vous?format=visio" className="vz-btn vz-ghost w-full px-4 py-3 text-[14px] text-center">
        Discuter de cet appareil avec un conseiller (Google Meet) <ArrowRight size={14} className="vz-arrow flex-shrink-0" />
      </a>

      <FicheForm
        sessionId={sessionId}
        device={{
          brand, model, year: year ?? null, refrigerant: refStr,
          heatingBtu: btu5F ?? null, hspf2: hspf2 ?? null, seer2: seer2 ?? null,
          coldClimate: match ? match.coldClimate : null, inCatalog: !!match,
          alerts: alerts.map((a) => a.text),
        }}
      />
    </div>
  );
}

/* La fiche par courriel : un prénom, un courriel, et le visiteur repart avec sa fiche.
   Côté serveur, c'est un lead (journal, Pipedrive, alerte à l'équipe). */
function FicheForm({ device, sessionId }: {
  device: { brand: string; model: string; year: number | null; refrigerant: string | null; heatingBtu: number | null; hspf2: number | null; seer2: number | null; coldClimate: boolean | null; inCatalog: boolean; alerts: string[] };
  sessionId?: string;
}) {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) { setMessage("Entrez votre prénom et un courriel valide."); return; }
    if (!consent) { setMessage("Cochez la case pour recevoir la fiche."); return; }
    setState("sending"); setMessage("");
    try {
      const res = await fetch("/api/thermoscan/fiche", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim(), phone: phone.trim(), consent, website, device, sessionId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "");
      track("thermoscan_fiche", { in_catalog: device.inCatalog });
      setState("done");
      setMessage(data.emailed ? `La fiche part à ${email.trim()}. Vérifiez vos courriels indésirables au besoin.` : "Demande reçue. Un conseiller vous enverra la fiche rapidement.");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error && err.message ? err.message : "Envoi impossible pour le moment. Réessayez ou appelez le 438-900-3224.");
    }
  };

  if (state === "done") return (
    <div role="status" className="py-3 pl-4 pr-3 text-[14px] flex gap-3 items-start" style={{ borderLeft: `2px solid ${TONE.ok}`, background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.88)" }}>
      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: TONE.ok }} /> {message}
    </div>
  );

  if (!open) return (
    <button type="button" onClick={() => setOpen(true)} className="vz-link self-start text-[14px] font-semibold text-left">
      Recevoir cette fiche par courriel
    </button>
  );

  return (
    <form onSubmit={submit} noValidate className="relative p-5" style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.02)" }}>
      <p className="font-semibold text-[16px] text-white" style={{ margin: "0 0 4px" }}>Recevoir cette fiche par courriel</p>
      <p className="text-[13px]" style={{ color: FAINT, margin: "0 0 16px" }}>Pour la garder, la partager ou la montrer à un installateur.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Field label="Prénom" value={firstName} onChange={setFirstName} placeholder="Marie" />
        <Field label="Courriel" value={email} onChange={setEmail} type="email" placeholder="vous@exemple.ca" />
      </div>
      <div className="mb-4">
        <Field label="Téléphone (facultatif)" value={phone} onChange={setPhone} type="tel" placeholder="(514) 000-0000" />
      </div>
      <div className="absolute" style={{ left: -9999, top: -9999 }} aria-hidden="true">
        <label htmlFor="ts-website">Site web</label>
        <input id="ts-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <label className="flex items-start gap-3 text-[12.5px] leading-relaxed mb-4 cursor-pointer" style={{ color: MUTE }}>
        <span className="vz-check">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.4l2.8 2.6L12.5 4.8" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span>J&apos;accepte que Thermopompes À Vendre conserve ces renseignements pour m&apos;envoyer la fiche et me proposer un suivi. <a href="/confidentialite" className="vz-link">Politique de confidentialité</a>.</span>
      </label>
      {message && <p role="alert" className="text-[13px] mb-3" style={{ color: TONE.danger, margin: "0 0 12px" }}>{message}</p>}
      <button type="submit" disabled={state === "sending"} className="vz-btn vz-primary w-full px-4 py-3 text-[14.5px]" style={{ opacity: state === "sending" ? 0.7 : 1 }}>
        {state === "sending" ? "Envoi…" : "Recevoir ma fiche"} <ArrowRight size={16} className="vz-arrow" />
      </button>
    </form>
  );
}

/* compare view */
function CompareView({
  currentBrand, currentModel, currentYear, currentMatch, recommendations, onReset,
}: {
  currentBrand: string; currentModel: string; currentYear: number | null;
  currentMatch: CatalogMatch | null; recommendations: any[]; onReset: () => void;
}) {
  const [tab, setTab] = useState(0);
  const [manualRecs, setManualRecs] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<CatalogMatch[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const allRecs = [...recommendations, ...manualRecs];

  useEffect(() => {
    if (searchQuery.trim().length < 3) {
      setSearchResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setSearchLoading(true);
      try {
        const res = await fetch(`/api/thermoscan/search?model=${encodeURIComponent(searchQuery)}`);
        const data = await res.json();
        if (data.success && data.matches) {
          setSearchResults(data.matches.slice(0, 5));
        }
      } catch (e) {
        console.error("Erreur de recherche", e);
      } finally {
        setSearchLoading(false);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSelectManual = (match: CatalogMatch) => {
    const newRec = {
      product: {
        brand: match.brand,
        outdoorModel: match.outdoorModel,
        series: match.outdoorModel,
        coldClimate: match.coldClimate,
        refrigerant: match.refrigerant,
        hspf2: match.hspf2,
      },
      subsidyEstimate: 0,
    };
    setManualRecs(prev => [...prev, newRec]);
    setIsSearching(false);
    setSearchQuery("");
    setTab(allRecs.length);
  };

  const btnPrimary = "vz-btn vz-primary w-full px-4 py-3.5 text-[14.5px]";
  const btnSecondary = "vz-btn vz-ghost w-full px-4 py-3 text-[14px]";

  if (allRecs.length === 0 && !isSearching) return (
    <div className="relative text-center py-10 px-4" style={{ background: "rgba(255,255,255,0.02)" }}>
      <Corners color={HUD} size={16} weight={2} />
      <CheckCircle size={28} className="mx-auto mb-4" style={{ color: TONE.ok }} />
      <p className="font-semibold text-white text-[19px] mb-2" style={{ margin: "0 0 8px" }}>{currentBrand} {currentModel}</p>
      <p className="text-[14px] mb-6 max-w-sm mx-auto" style={{ color: MUTE, margin: "0 auto 24px" }}>
        Obtenez des recommandations automatiques ou cherchez un modèle précis à comparer.
      </p>
      <div className="flex flex-col gap-3 max-w-sm mx-auto">
        <a href="/trouver-ma-thermopompe" className="vz-btn vz-primary px-5 py-3 text-[14.5px]">
          Faire le questionnaire <ArrowRight size={16} className="vz-arrow" />
        </a>
        <button onClick={() => setIsSearching(true)} className={btnSecondary}>
          <Search size={16} /> Chercher un modèle à comparer
        </button>
      </div>
    </div>
  );

  if (isSearching) return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-white text-[19px]" style={{ margin: 0 }}>Rechercher un modèle</h3>
        <button onClick={() => setIsSearching(false)} aria-label="Fermer la recherche" className="vz-btn p-2" style={{ color: MUTE }}><X size={18} /></button>
      </div>
      <div className="relative">
        <Search className="absolute left-1 top-1/2 -translate-y-1/2" size={17} style={{ color: FAINT }} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Ex: Daikin Aurora, Moovair..."
          aria-label="Rechercher un modèle"
          className="vz-input"
          style={{ paddingLeft: 30, outline: "none" }}
          autoFocus
        />
      </div>
      {searchLoading && <p className="text-[11px] uppercase text-center py-4" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: HUD, margin: 0 }}>Recherche...</p>}
      {!searchLoading && searchQuery.trim().length >= 3 && searchResults.length === 0 && (
        <p className="text-[13px] text-center py-4" style={{ color: FAINT, margin: 0 }}>Aucun modèle trouvé pour "{searchQuery}".</p>
      )}
      {!searchLoading && searchResults.length > 0 && (
        <div className="flex flex-col gap-2 mt-1">
          {searchResults.map((m, i) => (
            <button key={i} onClick={() => handleSelectManual(m)} className="vz-result flex flex-col text-left p-3.5" style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.02)" }}>
              <p className="font-semibold text-[14.5px] text-white" style={{ margin: 0 }}>{m.brand} <span className="text-[12.5px]" style={{ fontFamily: MONO, color: MUTE }}>{m.outdoorModel}</span></p>
              <p className="text-[12px] mt-1 flex items-center gap-2" style={{ fontFamily: MONO, color: FAINT, margin: "4px 0 0" }}>
                <span>SEER2: {m.seer2 ? (typeof m.seer2 === "number" ? m.seer2 : m.seer2.min) : "N/D"}</span>
                {m.coldClimate && <span className="px-1.5 py-0.5 text-[10px] uppercase" style={{ color: "#9CC8FF", border: "1px solid rgba(156,200,255,0.5)", letterSpacing: "0.08em" }}>Climat Froid</span>}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const rec = allRecs[tab];
  const rp = rec?.product;

  const curHspf2 = currentMatch?.hspf2 ? (typeof currentMatch.hspf2 === "object" ? currentMatch.hspf2.max : Number(currentMatch.hspf2)) : null;
  const recHspf2 = rp?.hspf2 ? (typeof rp.hspf2 === "object" ? rp.hspf2.max : Number(rp.hspf2)) : null;

  const deltas = [
    {
      label: "HSPF2 (efficacité chauffage)",
      current: curHspf2 ? fmtNum(curHspf2) : "N/D",
      recommended: recHspf2 ? fmtNum(recHspf2) : "N/D",
      better: !!(curHspf2 && recHspf2 && recHspf2 > curHspf2),
      note: curHspf2 && recHspf2 && recHspf2 > curHspf2
        ? `+${(((recHspf2 - curHspf2) / curHspf2) * 100).toFixed(0)} % plus efficace en chauffage. Réduction directe sur la facture de chauffage.`
        : undefined,
    },
    {
      label: "Certifié climat froid",
      current: currentMatch?.coldClimate ? "Oui" : "Non certifié",
      recommended: rp?.coldClimate ? "Oui" : "Non",
      better: !currentMatch?.coldClimate && !!rp?.coldClimate,
      note: !currentMatch?.coldClimate && rp?.coldClimate
        ? "Chauffage garanti jusqu'à -25 °C ou -30 °C selon le modèle, contre environ -15 °C pour un appareil non certifié."
        : undefined,
    },
    {
      label: "Fluide frigorigène",
      current: currentMatch?.refrigerant ?? "N/D",
      recommended: rp?.refrigerant ?? "Selon modèle",
      better: !!(currentMatch?.refrigerant?.includes("R-22") && !rp?.refrigerant?.includes("R-22")),
      note: currentMatch?.refrigerant?.includes("R-22")
        ? "Le R-22 n'est plus fabriqué : recharge coûteuse et rare. Les fluides actuels (R-32, R-454B) restent disponibles."
        : undefined,
    },
    currentYear ? {
      label: "Âge de l'appareil",
      current: `${ageLabel(currentYear)} (${currentYear})`,
      recommended: "Neuf, garantie complète",
      better: true,
      note: "Garantie fabricant complète sur un appareil neuf.",
    } : null,
    rec?.subsidyEstimate > 0 ? {
      label: "Subvention LogisVert",
      current: "Non disponible",
      recommended: `Jusqu'à ${rec.subsidyEstimate.toLocaleString("fr-CA")} $`,
      better: true,
      note: "Programme d'Hydro-Québec, déduit du coût d'achat selon l'admissibilité.",
    } : null,
  ].filter(Boolean) as any[];

  const bigWins = deltas.filter(d => d.better);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Kicker>Comparaison ThermoMatch</Kicker>
        <h3 className="font-semibold text-white text-[21px] mt-1.5" style={{ letterSpacing: "-0.02em", margin: "6px 0 0" }}>
          {currentBrand} {currentModel}
          {currentYear && <span className="font-normal text-[16px]" style={{ color: FAINT }}> ({currentYear})</span>}
        </h3>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 items-center">
        {allRecs.map((r, i) => (
          <button key={i} onClick={() => setTab(i)} aria-pressed={tab === i}
            className="vz-tab flex-shrink-0 px-4 py-2 text-[13px] font-semibold"
            style={{
              background: tab === i ? "#fff" : "transparent",
              color: tab === i ? "#141414" : MUTE,
              border: `1px solid ${tab === i ? "#fff" : LINE}`,
              borderRadius: 3,
            }}
          >
            {i < recommendations.length ? `${i + 1}. ${r.product?.brand}` : `Manuel : ${r.product?.brand}`}
          </button>
        ))}
        <button onClick={() => setIsSearching(true)} className="vz-tab flex-shrink-0 px-3 py-2 text-[13px] font-semibold flex items-center gap-1" style={{ border: `1px dashed ${LINE}`, color: MUTE, borderRadius: 3 }}>
          <Search size={14} /> + Modèle
        </button>
      </div>

      {bigWins.length > 0 && (
        <div className="py-4 pl-4 pr-3" style={{ borderLeft: `2px solid ${TONE.ok}`, background: "rgba(255,255,255,0.03)" }}>
          <p className="font-semibold text-[14px] mb-2 flex items-center gap-2" style={{ color: TONE.ok, margin: "0 0 8px" }}>
            <TrendingUp size={15} />
            {bigWins.length} amélioration{bigWins.length > 1 ? "s" : ""} clé{bigWins.length > 1 ? "s" : ""}
          </p>
          <ul className="space-y-1.5" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {bigWins.map((w: any, i: number) => (
              <li key={i} className="text-[13.5px] flex items-start gap-2" style={{ color: "rgba(255,255,255,0.84)" }}>
                <span className="mt-0.5 flex-shrink-0" style={{ color: TONE.ok, fontFamily: MONO }}>+</span>
                <span><strong className="text-white">{w.label}</strong>{w.note ? ` - ${w.note}` : ""}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <SectionCard icon={ArrowRight} title="Détail de la comparaison">
        {deltas.map((d: any, i: number) => <DeltaRow key={i} {...d} />)}
      </SectionCard>

      {rp && (
        <SectionCard icon={Shield} title={`Modèle recommandé, ${rp.brand}`}>
          {(rp.outdoorModel || rp.series) && <SpecRow label="Modèle" value={rp.outdoorModel ?? rp.series} />}
          {rp.coldClimate && <SpecRow label="Certifié climat froid" value="Oui" />}
          {rp.refrigerant && <SpecRow label="Fluide frigorigène" value={rp.refrigerant} />}
          {rec?.subsidyEstimate > 0 && (
            <SpecRow label="Subvention estimée" value={`${rec.subsidyEstimate.toLocaleString("fr-CA")} $`}
              sub="LogisVert, sous réserve d'admissibilité" />
          )}
        </SectionCard>
      )}

      <a href="/soumission" className={btnPrimary}>
        Obtenir une soumission pour ce modèle <ArrowRight size={16} className="vz-arrow" />
      </a>
      <button onClick={onReset} className={btnSecondary}>
        Scanner un autre appareil
      </button>
    </div>
  );
}

/* field input */
function Field({ label, value, onChange, note, type = "text", placeholder }: {
  label: string; value: string; onChange?: (v: string) => void;
  note?: string | null; type?: string; placeholder?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] uppercase mb-1" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: FAINT }}>{label}</label>
      <input id={id} type={type} value={value} placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="vz-input"
        style={{ outline: "none" }}
      />
      {note && <p className="mt-1.5 text-[12.5px]" style={{ color: TONE.warn, margin: "6px 0 0" }}>{note}</p>}
    </div>
  );
}

/* Coins de mise au point d'une tuile, visibles au survol et au focus clavier. */
function TileCorners({ color = HUD }: { color?: string }) {
  return (
    <span aria-hidden="true" className="vz-corners pointer-events-none absolute -inset-[6px]"><Corners color={color} size={10} weight={1.5} /></span>
  );
}

/* main */
interface Props { thermomatchResults?: any[]; compact?: boolean; }

export function ThermoScanSection({ thermomatchResults, compact }: Props) {
  const [step, setStep]           = useState<Step>("intro");
  const [preview, setPreview]     = useState<string | null>(null);
  const [file, setFile]           = useState<File | null>(null);
  const [scan, setScan]           = useState<ScanResult | null>(null);
  const [error, setError]         = useState<string | null>(null);
  const [brand, setBrand]         = useState("");
  const [model, setModel]         = useState("");
  const [year, setYear]           = useState<number | undefined>();
  const [bestMatch, setBestMatch] = useState<CatalogMatch | null>(null);
  const [labelSpecs, setLabelSpecs] = useState<any | null>(null);
  const [warranties, setWarranties] = useState<WarrantyEntry[] | null>(null);
  const [reSearching, setReSearching] = useState(false);
  const typeId = useId();

  /* Si le client corrige la marque ou le modèle lu sur l'étiquette, on relance la recherche
     dans le catalogue au lieu de garder la correspondance de la lecture initiale. */
  const confirmAndSearch = useCallback(async () => {
    const scannedModel = scan?.fields.modelNumber.value ?? "";
    const scannedBrand = scan?.fields.brand.value ?? "";
    const changed = model.trim() !== scannedModel.trim() || brand.trim() !== scannedBrand.trim();
    if (changed && model.trim().length >= 3) {
      setReSearching(true);
      try {
        const res = await fetch("/api/thermoscan/search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ brand: brand.trim(), modelNumber: model.trim() }) });
        const data = await res.json();
        if (data?.success) setBestMatch(data.bestMatch ?? null);
      } catch {
        /* on garde la correspondance actuelle */
      } finally {
        setReSearching(false);
      }
    }
    // L'appareil identifié est gardé dans le brouillon de projet : la demande de soumission le reprend.
    if (brand.trim() || model.trim()) {
      const m = bestMatch;
      saveExistingUnit({
        brand: brand.trim() || "Marque inconnue",
        model: model.trim(),
        year: year ?? null,
        refrigerant: m?.refrigerant ?? labelSpecs?.refrigerant ?? null,
        heatingBtu: m?.heatingCapacity5F?.max ?? m?.nominalBtu ?? labelSpecs?.heatingBtuH ?? null,
        hspf2: m?.hspf2 ? (typeof m.hspf2 === "object" ? m.hspf2.max : m.hspf2) : null,
      });
    }
    setStep("speccard");
  }, [scan, model, brand, bestMatch, year, labelSpecs]);


  const handleFile = useCallback((f: File) => {
    setError(null);
    if (!["image/jpeg","image/png","image/webp","image/heic","image/heif"].includes(f.type)) {
      setError("Format non accepté : JPEG, PNG ou WebP."); return;
    }
    if (f.size > 8 * 1024 * 1024) { setError("Photo trop volumineuse (max 8 MB)."); return; }
    setFile(f);
    const r = new FileReader();
    r.onload = (e) => setPreview(e.target?.result as string);
    r.readAsDataURL(f);
    setStep("capture");
  }, []);

  const onInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFile(e.target.files[0]);
  }, [handleFile]);

  const analyze = useCallback(async () => {
    if (!file) return;
    setStep("analyzing"); setError(null);
    const fd = new FormData();
    fd.append("image", file);
    try {
      const res = await fetch("/api/thermoscan/analyze", { method: "POST", body: fd });
      const data = await res.json();
      if (!data.success) { setError(data.error ?? "Erreur inconnue"); setStep("capture"); return; }
      const s: ScanResult = data.result;
      setScan(s);
      track("thermoscan_analyzed");
      setBrand(s.fields.brand.value ?? "");
      setModel(s.fields.modelNumber.value ?? "");
      setYear(s.fields.manufactureYear.value ?? undefined);
      setBestMatch(s.bestMatch);
      setLabelSpecs((s as any).rawLabelSpecs ?? null);
      setWarranties((s as any).brandWarranties ?? null);
      setStep("confirm");
    } catch { setError("Erreur réseau. Vérifiez votre connexion."); setStep("capture"); }
  }, [file]);

  const reset = () => {
    setStep("intro"); setScan(null); setPreview(null); setFile(null);
    setBestMatch(null); setError(null); setBrand(""); setModel(""); setYear(undefined);
    setLabelSpecs(null); setWarranties(null);
  };


  const btnPrimary = "vz-btn vz-primary w-full px-4 py-3.5 text-[14.5px]";
  const btnSecondary = "vz-btn vz-ghost w-full px-4 py-3.5 text-[14px]";

  const Back = ({ to }: { to: Step }) => (
    <button onClick={() => setStep(to)}
      className="vz-btn mb-6 gap-1.5 px-0 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: FAINT }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      Retour
    </button>
  );
  const ErrorBanner = () => error ? (
    <div role="alert" className="flex gap-3 items-start py-3 pl-4 pr-3 text-[14px] mb-5" style={{ borderLeft: `2px solid ${TONE.danger}`, background: "rgba(255,122,92,0.08)", color: "#fff" }}>
      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: TONE.danger }} />{error}
    </div>
  ) : null;

  if (step === "intro") return (
    <Focus>
      <ErrorBanner />
      <div className="flex flex-col gap-3" data-compact={compact ? "" : undefined}>
        <label htmlFor="ts-camera" className="vz-tile vz-tile-main">
          <TileCorners color="#fff" />
          <Camera size={22} className="text-white flex-shrink-0" />
          <span className="min-w-0 flex-1">
            <span className="block font-semibold text-white text-[16px]">Prendre une photo</span>
            <span className="block text-[13px]" style={{ color: "rgba(255,255,255,0.8)" }}>Ouvre la caméra de votre téléphone</span>
          </span>
          <ArrowRight size={17} className="vz-arrow flex-shrink-0" />
          <input id="ts-camera" type="file" accept="image/*" capture="environment" className="sr-only" onChange={onInput} />
        </label>
        <label htmlFor="ts-import" className="vz-tile">
          <TileCorners />
          <Upload size={20} className="flex-shrink-0" style={{ color: HUD }} />
          <span className="min-w-0 flex-1">
            <span className="block font-semibold text-white text-[16px]">Importer une photo</span>
            <span className="block text-[13px]" style={{ color: FAINT }}>Depuis votre galerie</span>
          </span>
          <ArrowRight size={17} className="vz-arrow flex-shrink-0" />
          <input id="ts-import" type="file" accept="image/jpeg,image/png,image/webp,image/heic" className="sr-only" onChange={onInput} />
        </label>
        <button onClick={() => setStep("guide")} className="vz-tile">
          <TileCorners />
          <Info size={20} className="flex-shrink-0" style={{ color: HUD }} />
          <span className="min-w-0 flex-1">
            <span className="block font-semibold text-white text-[16px]">Où trouver l&apos;étiquette ?</span>
            <span className="block text-[13px]" style={{ color: FAINT }}>Guide photos en 30 secondes</span>
          </span>
          <ArrowRight size={17} className="vz-arrow flex-shrink-0" />
        </button>
      </div>
    </Focus>
  );

  if (step === "guide") return (
    <Focus>
      <Back to="intro" />
      <h3 className="font-semibold text-white text-[21px] mb-5" style={{ letterSpacing: "-0.02em", margin: "0 0 20px" }}>Où trouver l&apos;étiquette ?</h3>
      <ol className="flex flex-col mb-6" style={{ listStyle: "none", margin: "0 0 24px", padding: 0, borderTop: `1px solid ${LINE}` }}>
        {[
          { n: 1, title: "Unité intérieure (murale)", desc: "Côté ou dessous de l'unité accrochée au mur." },
          { n: 2, title: "Unité extérieure", desc: "Panneau latéral ou arrière de l'unité métallique dehors." },
          { n: 3, title: "Ce que vous cherchez", desc: "Autocollant ou plaque : Model, M/N, Serial, BTU." },
        ].map(item => (
          <li key={item.n} className="flex gap-4 py-4 items-start" style={{ borderBottom: `1px solid ${LINE}` }}>
            <span className="text-[12px] flex-shrink-0 pt-0.5" style={{ fontFamily: MONO, color: HUD }}>[{item.n}]</span>
            <div>
              <p className="font-semibold text-[15px] text-white" style={{ margin: "0 0 2px" }}>{item.title}</p>
              <p className="text-[13.5px]" style={{ color: FAINT, margin: 0 }}>{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="py-4 pl-4 pr-3 mb-6" style={{ borderLeft: `2px solid ${HUD}`, background: "rgba(255,255,255,0.03)" }}>
        <div className="flex items-center gap-2 mb-2">
          <Info size={14} className="flex-shrink-0" style={{ color: HUD }} />
          <p className="text-[11px] uppercase text-white" style={{ fontFamily: MONO, letterSpacing: "0.14em", margin: 0 }}>Conseils photo</p>
        </div>
        <ul className="space-y-1.5 text-[13.5px]" style={{ color: MUTE, listStyle: "none", margin: 0, padding: 0 }}>
          <li>— Approchez-vous : toute l&apos;étiquette doit être visible</li>
          <li>— Bon éclairage, sans reflets ni ombres</li>
          <li>— Le numéro de modèle doit être parfaitement net</li>
        </ul>
      </div>
      <label htmlFor="ts-guide-cam" className={`${btnPrimary} vz-tile-label cursor-pointer relative`}>
        <Camera size={18} /> Prendre la photo maintenant
        <input id="ts-guide-cam" type="file" accept="image/*" capture="environment" className="sr-only" onChange={onInput} />
      </label>
    </Focus>
  );

  if (step === "capture") return (
    <Focus>
      <Back to="intro" />
      <h3 className="font-semibold text-white text-[21px] mb-4" style={{ letterSpacing: "-0.02em", margin: "0 0 16px" }}>Vérifiez la photo</h3>
      {preview && (
        <div className="relative mb-5 p-3" style={{ background: "#0F0F0F" }}>
          <Corners color={HUD} size={16} weight={2} />
          <img src={preview} alt="Étiquette" className="w-full max-h-72 object-contain" />
          <span aria-hidden="true" className="absolute left-4 top-3 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: HUD }}>Plaque · prête</span>
          <button onClick={() => { setPreview(null); setFile(null); setStep("intro"); }}
            aria-label="Retirer la photo"
            className="vz-btn absolute top-3 right-3 w-9 h-9 text-white" style={{ background: "rgba(0,0,0,0.6)", border: `1px solid ${LINE}` }}>
            <X size={15} />
          </button>
        </div>
      )}
      <ErrorBanner />
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={analyze} disabled={!file} className={`${btnPrimary} flex-1`}
          style={file ? undefined : { background: "rgba(255,255,255,0.1)", borderColor: "transparent", color: FAINT }}>
          <Search size={16} /> Analyser l&apos;étiquette
        </button>
        <label htmlFor="ts-retake" className={`${btnSecondary} vz-tile-label relative sm:w-auto sm:flex-shrink-0 cursor-pointer`}>
          <RotateCcw size={16} /> Autre photo
          <input id="ts-retake" type="file" accept="image/*" capture="environment" className="sr-only" onChange={onInput} />
        </label>
      </div>
    </Focus>
  );

  if (step === "analyzing") return <AnalyzingView />;

  if (step === "confirm") {
    const f = scan?.fields;
    return (
      <Focus>
        <Back to="capture" />
        <div className="flex items-center gap-3 mb-5">
          {scan?.confidence === "confirmed"
            ? <CheckCircle size={20} className="flex-shrink-0" style={{ color: TONE.ok }} />
            : <AlertCircle size={20} className="flex-shrink-0" style={{ color: TONE.warn }} />}
          <div>
            <p className="font-semibold text-white text-[18px]" style={{ margin: 0 }}>Vérifiez les informations</p>
            <p className="text-[12.5px]" style={{ color: FAINT, margin: "2px 0 0" }}>{scan?.statusMessage ?? ""}</p>
          </div>
        </div>
        {scan && scan.warnings.length > 0 && (
          <div className="py-3 pl-4 pr-3 mb-5 flex flex-col gap-1" style={{ borderLeft: `2px solid ${TONE.warn}`, background: "rgba(255,255,255,0.03)" }}>
            {scan.warnings.map((w, i) => (
              <p key={i} className="text-[13px] flex items-start gap-2" style={{ color: "rgba(255,255,255,0.84)", margin: 0 }}>
                <AlertCircle size={12} className="flex-shrink-0 mt-[4px]" style={{ color: TONE.warn }} />{w}
              </p>
            ))}
          </div>
        )}
        <div className="flex flex-col gap-4 mb-6">
          <Field label="Marque" value={brand} onChange={setBrand} />
          <Field label="Numéro de modèle" value={model} onChange={setModel} note={f?.modelNumber.note ?? null} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Année approx." value={year?.toString() ?? ""}
              onChange={v => setYear(parseInt(v) || undefined)} type="number" placeholder="Ex: 2012" />
            <div>
              <label htmlFor={typeId} className="block text-[11px] uppercase mb-1" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: FAINT }}>Type</label>
              <select id={typeId} className="vz-input" style={{ outline: "none" }}>
                <option value="outdoor">Unité extérieure</option>
                <option value="indoor">Unité intérieure</option>
              </select>
            </div>
          </div>
        </div>
        {bestMatch && (
          <div className="relative p-3.5 mb-5 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.03)" }}>
            <Corners color={TONE.ok} size={9} weight={1.5} />
            <CheckCircle size={16} className="flex-shrink-0" style={{ color: TONE.ok }} />
            <div>
              <p className="font-semibold text-[14.5px] text-white" style={{ margin: 0 }}>{bestMatch.brand} — {bestMatch.outdoorModel}</p>
              <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.06em", color: FAINT, margin: "3px 0 0" }}>Trouvé dans le catalogue, score {bestMatch.matchScore}/100</p>
            </div>
          </div>
        )}
        <button onClick={confirmAndSearch} disabled={reSearching} className={btnPrimary} style={{ opacity: reSearching ? 0.7 : 1 }}>
          {reSearching ? "Recherche dans le catalogue…" : "Voir la fiche technique"} <ArrowRight size={16} className="vz-arrow" />
        </button>
      </Focus>
    );
  }

  if (step === "speccard") return (
    <Focus>
      <Back to="confirm" />
      <DeviceSpecCard
        brand={brand || "Marque inconnue"}
        model={model}
        year={year ?? null}
        match={bestMatch}
        labelSpecs={labelSpecs}
        warranties={warranties}
        hasThermomatch={!!(thermomatchResults?.length)}
        onCompare={() => setStep("compare")}
        sessionId={scan?.sessionId}
      />
    </Focus>
  );

  if (step === "compare") return (
    <Focus>
      <Back to="speccard" />
      <CompareView
        currentBrand={brand || "Appareil actuel"}
        currentModel={model}
        currentYear={year ?? null}
        currentMatch={bestMatch}
        recommendations={thermomatchResults ?? []}
        onReset={reset}
      />
    </Focus>
  );

  return null;
}
