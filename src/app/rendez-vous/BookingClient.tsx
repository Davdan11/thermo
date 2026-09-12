"use client";
/* ==================================================================
   Assistant de réservation : format → secteur (code postal) → date et
   heure → coordonnées → confirmation. Même parcours que sur
   bellechasseenergie.com, dans la charte Thermopompes À Vendre.
   Présentation « Le calendrier » (sections v2 entreprise) : pages de
   calendrier à anneaux, onglets d'étapes, cartes de rendez-vous. La
   logique (étapes, disponibilités, plages, paramètres d'adresse,
   validation, envoi) est inchangée.
   ================================================================== */
import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { MODES, MODE_IDS, DEFAULT_MODE, NEEDS, areaFromPostalCode, isPostalCode, hourLabel, type ModeId, type DayAvailability } from "@/lib/rdv/booking";
import { track } from "@/lib/analytics/track";
import { BookingHero, BookingConfirmedHero } from "@/components/heroes-v2/entreprise/BookingCalendar";
import { Arrow } from "@/components/heroes-v2/entreprise/shared";
import { EASE, Reveal, Shell } from "@/components/sections-v2/entreprise/kit";

const ORANGE = "#e54b17";
const ORANGE_TEXT = "#b93e12";
const INK = "#1b1512";
const PEACH = "#fbe7da";
const PAPER = "#fffcf9";
const CELL = "#fdf1e9";
const MUTED = "#6b5a50";
const FAINT = "#a8958a";
const LINE = "#efdccf";
const ERROR = "#b42318";
const PHONE = "438-900-3224";

const STEPS = ["Format et secteur", "Date et heure", "Coordonnées"];
const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];

type Availability = { today: string; days: DayAvailability[] };
type Result = { id: string; mode: ModeId; modeLabel: string; meetLink: string | null; emailed: boolean; dateLabel: string; slot: string; calendarUrl: string; area: string };

function ymdParts(ymd: string) {
  const [y, m, d] = ymd.split("-").map(Number);
  return { y, m, d };
}
function fmt(ymd: string, opts: Intl.DateTimeFormatOptions) {
  const { y, m, d } = ymdParts(ymd);
  return new Intl.DateTimeFormat("fr-CA", { ...opts, timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, d)));
}
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function groupByMonth(days: DayAvailability[]) {
  const months: Array<{ key: string; label: string; days: DayAvailability[] }> = [];
  for (const day of days) {
    const { y, m } = ymdParts(day.date);
    const key = `${y}-${m}`;
    let month = months.find((x) => x.key === key);
    if (!month) {
      month = { key, label: cap(fmt(day.date, { month: "long", year: "numeric" })), days: [] };
      months.push(month);
    }
    month.days.push(day);
  }
  return months;
}

/* ---------- Styles ---------- */
const paperStyle: CSSProperties = { background: PAPER, borderRadius: 14, boxShadow: "0 1px 0 rgba(255,255,255,0.8) inset, 0 50px 80px -50px rgba(120,60,30,0.5), 0 2px 6px rgba(120,60,30,0.08)" };
const eyebrow: CSSProperties = { display: "block", fontSize: 11.5, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: ORANGE_TEXT, marginBottom: 12 };
const h2: CSSProperties = { margin: "0 0 10px", fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.05, fontWeight: 700, color: INK, letterSpacing: "-0.04em", outline: "none" };
const sub: CSSProperties = { margin: "0 0 26px", fontSize: 15.5, color: MUTED, lineHeight: 1.6 };
const label: CSSProperties = { display: "block", fontSize: 13.5, fontWeight: 700, color: INK, marginBottom: 8 };
const input: CSSProperties = { width: "100%", padding: "13px 15px", fontSize: 16, boxSizing: "border-box", outline: "none" };
const hint: CSSProperties = { display: "block", fontSize: 13, color: MUTED, marginTop: 8, lineHeight: 1.5 };
const errorText: CSSProperties = { display: "block", fontSize: 13, color: ERROR, marginTop: 7, fontWeight: 600 };
const primaryBtn = (disabled: boolean): CSSProperties => ({ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "15px 24px", background: disabled ? "#e8d3c5" : ORANGE, color: disabled ? "#8a766a" : "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15.5, cursor: disabled ? "not-allowed" : "pointer", transition: "background-color .3s" });
const secondaryBtn: CSSProperties = { padding: "15px 20px", background: "transparent", color: INK, border: `1.5px solid ${INK}`, borderRadius: 10, fontWeight: 700, fontSize: 15.5, cursor: "pointer" };
const chip = (active: boolean, disabled = false): CSSProperties => ({
  position: "relative", overflow: "hidden", padding: "11px 15px", fontSize: 14.5, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer", borderRadius: 8,
  border: active ? `1.5px solid ${INK}` : disabled ? `1px dashed ${LINE}` : `1px solid #ead2c2`,
  background: active ? INK : disabled ? "transparent" : CELL, color: active ? "#fff" : disabled ? FAINT : INK, transition: "background-color .2s, color .2s, border-color .2s",
  textDecoration: disabled ? "line-through" : "none", textDecorationColor: "rgba(168,149,138,0.6)",
});
const optionCard = (active: boolean, disabled = false): CSSProperties => ({
  position: "relative", display: "flex", gap: 16, alignItems: "stretch", padding: "14px 18px 14px 14px", borderRadius: 12, cursor: disabled ? "not-allowed" : "pointer",
  border: active ? `2px solid ${ORANGE}` : disabled ? `1.5px dashed ${LINE}` : `1.5px solid #ecd6c8`, background: active ? "#fff4ee" : disabled ? "transparent" : PAPER, opacity: disabled ? 0.62 : 1,
  transition: "border-color .25s, background-color .25s",
});

/* Les anneaux du calendrier mural, comme dans le héros. */
function Rings() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-[18px] z-[6] flex justify-center gap-[38%]">
      {[0, 1].map((k) => (
        <svg key={k} viewBox="0 0 26 40" className="h-[40px] w-[26px]">
          <rect x={7} y={22} width={12} height={10} rx={5} fill="#E9D3C4" />
          <path d="M13 34 V10 a6 6 0 0 1 12 0 V20" fill="none" stroke="#3A2E28" strokeWidth={2.6} strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}

/* Case d'horaire dont la hauteur suit la durée du format (30, 45 ou 90 min sur une plage de 2 h). */
function Duration({ min, active }: { min: number; active: boolean }) {
  const pct = Math.min(1, min / 120) * 100;
  return (
    <span aria-hidden="true" className="flex w-[52px] shrink-0 flex-col items-center gap-1.5">
      <span className="relative block h-[58px] w-full overflow-hidden rounded-[7px]" style={{ background: CELL, border: `1px solid ${LINE}` }}>
        <motion.span className="absolute inset-x-0 top-0 block rounded-[6px]" style={{ background: active ? ORANGE : "#f1c9b3" }} initial={false} animate={{ height: `${pct}%` }} transition={{ duration: 0.6, ease: EASE }} />
      </span>
      <span className="xs-mono text-[10.5px] font-semibold" style={{ color: active ? ORANGE_TEXT : MUTED }}>
        {min}&nbsp;min
      </span>
    </span>
  );
}

/* Trait orange tracé à la main autour d'une date. */
function HandCircle({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 140" preserveAspectRatio="none" className={`pointer-events-none absolute overflow-visible ${className}`}>
      <motion.path d="M150 18 C 110 2, 40 8, 20 44 C 2 80, 40 128, 104 130 C 170 132, 196 96, 186 60 C 178 30, 140 14, 96 16" fill="none" stroke={ORANGE} strokeWidth={2.6} strokeLinecap="round" vectorEffect="non-scaling-stroke" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: "easeInOut" }} />
    </svg>
  );
}

function Check({ size = 14, color = ORANGE }: { size?: number; color?: string }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12.5 L9.5 18 L20 6" />
    </svg>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[7px] px-2.5 py-1.5 text-[14px] font-semibold" style={{ background: CELL, color: INK, border: `1px solid ${LINE}` }}>
      <span aria-hidden="true" className="block h-[7px] w-[7px] rounded-[2px]" style={{ background: ORANGE }} />
      {children}
    </span>
  );
}

const editBtn: CSSProperties = { background: "none", border: 0, color: ORANGE_TEXT, fontWeight: 700, cursor: "pointer", padding: "4px 2px", textDecoration: "underline", textUnderlineOffset: 4 };

export default function BookingClient({ faq }: { faq: Array<{ q: string; a: string }> }) {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<ModeId>(DEFAULT_MODE);
  const [postalCode, setPostalCode] = useState("");
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [monthIndex, setMonthIndex] = useState(0);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [bookingSource, setBookingSource] = useState("rendez-vous");
  const [values, setValues] = useState({ need: "installation", firstName: "", lastName: "", phone: "", email: "", address: "", city: "", notes: "", consent: false, website: "" });
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "taken">("idle");
  const [result, setResult] = useState<Result | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const modeDef = MODES[mode];
  const pcValid = isPostalCode(postalCode);
  const area = useMemo(() => (pcValid ? areaFromPostalCode(postalCode) : null), [postalCode, pcValid]);
  const months = useMemo(() => (availability ? groupByMonth(availability.days) : []), [availability]);
  const selectedDay = useMemo(() => availability?.days.find((d) => d.date === date) ?? null, [availability, date]);
  const slotLabelOf = (s: { start: string; label: string }) => (modeDef.fixedStart ? `${hourLabel(s.start)} (${modeDef.durationMin} min)` : s.label);
  const selectedSlot = selectedDay?.slots.find((s) => s.id === slot);
  const slotLabel = selectedSlot ? slotLabelOf(selectedSlot) : "";
  const openings = useMemo(() => {
    const out: Array<{ date: string; slot: string; start: string; label: string }> = [];
    for (const day of availability?.days ?? []) {
      const first = day.slots.find((s) => s.available);
      if (first) out.push({ date: day.date, slot: first.id, start: first.start, label: first.label });
      if (out.length >= 3) break;
    }
    return out;
  }, [availability]);

  // Format demandé par l'adresse (ex. /rendez-vous?format=visio depuis ThermoScan ou un courriel).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const wanted = params.get("format");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture unique de l'URL au montage
    if (wanted && (MODE_IDS as string[]).includes(wanted)) setMode(wanted as ModeId);
    // Venu des résultats ThermoMatch : le modèle choisi va dans les précisions, que le conseiller lit avant le rendez-vous.
    const modele = params.get("modele")?.trim().slice(0, 160);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture unique de l'URL au montage
    if (modele) setValues((v) => (v.notes ? v : { ...v, notes: `Modèle choisi dans ThermoMatch : ${modele}` }));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture unique de l'URL au montage
    if (params.get("source") === "thermomatch") setBookingSource("thermomatch");
  }, []);

  // Ne réagit qu'à un vrai changement d'étape : le double montage du mode strict (dev)
  // ne fait plus défiler la page jusqu'au formulaire, par-dessus le héros.
  const prevStep = useRef(step);
  useEffect(() => {
    if (prevStep.current === step) return;
    prevStep.current = step;
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [step]);


  const loadAvailability = async (slug: string) => {
    setLoading(true);
    setLoadError(false);
    try {
      const res = await fetch(`/api/rendez-vous/disponibilites?secteur=${encodeURIComponent(slug)}`, { cache: "no-store" });
      if (!res.ok) throw new Error("bad status");
      setAvailability(await res.json());
      setMonthIndex(0);
    } catch {
      setAvailability(null);
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  };

  const goToDate = () => {
    if (!area) return;
    setDate("");
    setSlot("");
    setStatus("idle");
    loadAvailability(area.slug);
    setStep(1);
  };

  const update = (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const er: Record<string, string> = {};
    if (!values.firstName.trim()) er.firstName = "Entrez votre prénom.";
    if (!/^[\d\s()+.-]{10,}$/.test(values.phone.trim())) er.phone = "Entrez un numéro à 10 chiffres.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) er.email = "Entrez un courriel valide.";
    if (mode === "domicile" && !values.address.trim()) er.address = "Entrez le numéro et la rue.";
    if (mode === "domicile" && !values.city.trim()) er.city = "Entrez la ville.";
    if (!values.consent) er.consent = "Cochez la case pour accepter la politique de confidentialité.";
    return er;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rendez-vous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, mode, postalCode, date, slot, source: bookingSource, page: typeof window !== "undefined" ? window.location.pathname : "" }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 409) {
        setStatus("taken");
        setSlot("");
        setStep(1);
        if (area) loadAvailability(area.slug);
        return;
      }
      if (!res.ok || !data.ok) throw new Error("bad status");
      setResult(data);
      setStatus("sent");
      track("rdv_booked", { mode, area: area?.slug ?? "" });
    } catch {
      setStatus("error");
    }
  };

  const firstName = values.firstName.trim();

  /* ---------- Confirmation ---------- */
  if (status === "sent" && result) {
    const online = result.mode === "visio";
    const rows: Array<[ReactNode, ReactNode]> = [
      ["Format", result.modeLabel],
      ["Date", cap(result.dateLabel)],
      ["Heure", result.slot],
      ["Où", online ? "En ligne, sur Google Meet" : result.mode === "domicile" ? `${values.address}, ${values.city}` : `Par téléphone, au ${values.phone}`],
      ["Référence", <span key="ref" className="xs-mono" style={{ letterSpacing: 1 }}>{result.id}</span>],
    ];
    return (
      <>
      <BookingConfirmedHero eyebrow={online ? "Rencontre en ligne confirmée" : result.mode === "domicile" ? "Visite confirmée" : "Appel confirmé"} firstName={firstName} ymd={date} dateLabel={result.dateLabel} slot={result.slot} />
      <Shell style={{ minHeight: "70vh", backgroundColor: PEACH, display: "flex", justifyContent: "center", padding: "56px 20px 96px" }}>
        <motion.div className="relative w-full max-w-[760px]" initial={{ opacity: 0, y: 40, rotate: 1.5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.5 }}>
          <Rings />
          <div className="overflow-hidden" style={paperStyle}>
            <div className="px-6 pb-7 pt-10 sm:px-10 sm:pb-9 sm:pt-12">
              <p style={sub}>{online ? "Un conseiller vous rencontre sur Google Meet :" : result.mode === "domicile" ? "Un conseiller de notre équipe passera chez vous :" : "Un conseiller vous appelle :"}</p>
              <dl style={{ margin: "0 0 26px", padding: 0 }}>
                {rows.map(([k, v], i) => (
                  <motion.div key={i} className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 py-3.5 sm:grid-cols-[140px_minmax(0,1fr)]" style={{ borderBottom: i < rows.length - 1 ? `1px solid ${LINE}` : "none" }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.8 + i * 0.08 }}>
                    <dt className="xs-mono text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: MUTED, paddingTop: 3 }}>{k}</dt>
                    <dd style={{ margin: 0, fontSize: 16, fontWeight: 700, color: INK }}>{v}</dd>
                  </motion.div>
                ))}
              </dl>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {online && result.meetLink && (
                  <a href={result.meetLink} target="_blank" rel="noopener noreferrer" className="xs-ring-dark" style={{ ...primaryBtn(false), textDecoration: "none" }}>Ouvrir le lien Google Meet <Arrow className="xs-arrow" size={16} /></a>
                )}
                <a href={result.calendarUrl} target="_blank" rel="noopener noreferrer" className="xs-ring-dark" style={{ ...secondaryBtn, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>Ajouter à Google Agenda</a>
              </div>
              {online && !result.meetLink && <p style={{ ...sub, margin: "18px 0 0" }}>Le lien Google Meet vous sera envoyé par courriel avant la rencontre.</p>}
              <p style={{ ...sub, margin: "18px 0 0" }}>
                {result.emailed
                  ? <>Une confirmation vous a été envoyée à <strong style={{ color: INK }}>{values.email.trim()}</strong>{online && result.meetLink ? ", avec le lien Google Meet" : ""}, avec l&apos;événement à ajouter à votre calendrier.</>
                  : <>Notre équipe vous confirmera le rendez-vous par téléphone au <strong style={{ color: INK }}>{values.phone.trim()}</strong>.</>}
              </p>
            </div>
            {/* Talon détachable */}
            <div aria-hidden="true" className="relative h-0">
              <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full" style={{ background: PEACH }} />
              <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full" style={{ background: PEACH }} />
              <span className="absolute left-5 right-5 top-0 block border-t-2 border-dashed" style={{ borderColor: LINE }} />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3.5 px-6 pb-6 pt-5 sm:px-10">
              <Link href="/" className="xs-ring-dark inline-flex items-center gap-2 text-[14.5px] font-bold" style={{ color: INK, textDecoration: "none" }}>Retour à l&apos;accueil <Arrow className="xs-arrow" size={16} /></Link>
              <p style={{ margin: 0, fontSize: 14, color: MUTED }}>Pour modifier : <a href={`tel:${PHONE.replace(/-/g, "")}`} style={{ color: ORANGE_TEXT, fontWeight: 700, textDecoration: "none" }}>{PHONE}</a>, avec votre référence.</p>
            </div>
          </div>
        </motion.div>
      </Shell>
      </>
    );
  }

  /* ---------- Assistant ---------- */
  const dayNumber = date ? Number(date.slice(8, 10)) : null;
  return (
    <>
    <BookingHero mode={mode} />
    <Shell style={{ backgroundColor: PEACH, color: INK }}>
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-4 pb-24 pt-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:pb-32 lg:pt-16">
        <motion.div className="relative min-w-0" initial={{ opacity: 0, y: 50, rotate: -1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.1, ease: EASE }}>
          {/* Pages du bloc, dessous */}
          <div aria-hidden="true" className="absolute inset-0 translate-x-[6px] translate-y-[9px] rotate-[0.9deg]" style={{ ...paperStyle, background: "#f6e2d5" }} />
          <div aria-hidden="true" className="absolute inset-0 translate-x-[3px] translate-y-[4px] rotate-[0.4deg]" style={{ ...paperStyle, background: "#fbeee5" }} />
          <Rings />
          <form id="reservation" className="relative" style={{ ...paperStyle, scrollMarginTop: 110 }} onSubmit={handleSubmit} noValidate>
            <ol aria-label="Étapes de la réservation" className="grid grid-cols-3 gap-1 px-3 pt-9 sm:px-7 sm:pt-10" style={{ margin: 0, listStyle: "none", borderBottom: `1px solid ${LINE}` }}>
              {STEPS.map((s, i) => {
                const on = i === step;
                const done = i < step;
                return (
                  <li key={s} aria-current={on ? "step" : undefined} className="relative flex items-center gap-2.5 px-1 pb-4 sm:px-2" style={{ color: on ? INK : done ? MUTED : FAINT }}>
                    <span className="xs-mono inline-flex h-[26px] w-[30px] shrink-0 items-center justify-center rounded-[6px] text-[12px] font-semibold" style={{ background: on ? ORANGE : done ? INK : CELL, color: on || done ? "#fff" : MUTED, border: on || done ? "none" : `1px solid ${LINE}` }}>
                      {done ? <Check size={13} color="#fff" /> : String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden text-[14px] font-semibold leading-tight sm:inline">{s}</span>
                    {on && <motion.span layoutId="xs-rv-step" aria-hidden="true" className="absolute inset-x-0 -bottom-px block h-[3px] rounded-full" style={{ background: ORANGE }} transition={{ duration: 0.5, ease: EASE }} />}
                  </li>
                );
              })}
            </ol>

            <motion.div key={step} className="px-5 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10" style={{ transformOrigin: "50% 0%" }} initial={{ opacity: 0, y: 18, rotateX: -6 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              {/* ---- Étape 1 ---- */}
              {step === 0 && (
                <div>
                  <span className="xs-mono" style={eyebrow}>01 / Format et secteur</span>
                  <h2 style={h2} tabIndex={-1} ref={headingRef}>Comment souhaitez-vous nous rencontrer ?</h2>
                  <p style={sub}>Par téléphone pour cadrer le projet, en ligne pour comparer des modèles à l&apos;écran, ou chez vous pour une évaluation complète.</p>

                  <fieldset style={{ border: 0, padding: 0, margin: "0 0 28px" }}>
                    <legend style={label}>Format de la rencontre</legend>
                    <div style={{ display: "grid", gap: 10 }}>
                      {MODE_IDS.map((id) => {
                        const m = MODES[id];
                        const disabled = id === "domicile" && !!area && !area.visit;
                        const active = mode === id;
                        return (
                          <label key={id} className="xs-opt" style={optionCard(active, disabled)}>
                            <input type="radio" name="mode" value={id} checked={active} disabled={disabled} onChange={() => setMode(id)} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
                            <Duration min={m.durationMin} active={active} />
                            <span className="min-w-0 self-center">
                              <span style={{ display: "block", fontSize: 16, fontWeight: 700, color: INK, letterSpacing: "-0.01em" }}>{m.label} <span style={{ fontWeight: 500, color: MUTED }}>· {m.durationMin} min</span></span>
                              <span style={{ display: "block", fontSize: 14, color: MUTED, marginTop: 3, lineHeight: 1.5 }}>{disabled ? `Non offerte dans le secteur ${area?.label}. Choisissez l’appel ou la rencontre en ligne.` : m.description}</span>
                            </span>
                            <span aria-hidden="true" className="ml-auto hidden h-[22px] w-[22px] shrink-0 items-center justify-center self-center rounded-[6px] sm:flex" style={{ border: active ? "none" : `1.5px solid ${LINE}`, background: active ? ORANGE : "transparent" }}>
                              {active && <Check size={13} color="#fff" />}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                    <div>
                      <label htmlFor="rv-postal" style={label}>Code postal <span style={{ color: ORANGE_TEXT }}>*</span></label>
                      <input id="rv-postal" type="text" inputMode="text" autoComplete="postal-code" placeholder="H1H 1H1" maxLength={7} value={postalCode} onChange={(e) => {
                        const v = e.target.value.toUpperCase();
                        setPostalCode(v);
                        // Si la visite n'est pas offerte dans le secteur, on bascule sur l'appel.
                        if (mode === "domicile" && isPostalCode(v) && !areaFromPostalCode(v).visit) setMode("telephone");
                      }} className="xs-rv-field xs-mono" style={{ ...input, maxWidth: 220, fontSize: 21, letterSpacing: "0.12em", fontWeight: 600, ["--xs-ph" as string]: "#b9a598" } as CSSProperties} aria-describedby="rv-postal-hint" />
                      <span id="rv-postal-hint" style={hint}>
                        {area ? <>Secteur : <strong style={{ color: INK }}>{area.label}</strong>{area.visit ? "" : " (appel ou rencontre en ligne seulement)"}</> : "Il sert à vous jumeler au conseiller de votre région."}
                      </span>
                    </div>
                    <div className="sm:pb-[30px]">
                      <button type="button" disabled={!pcValid} onClick={goToDate} className="xs-ring-dark" style={primaryBtn(!pcValid)}>Choisir une date <Arrow className="xs-arrow" size={16} /></button>
                    </div>
                  </div>
                  <ul className="xs-mono" style={{ display: "flex", flexWrap: "wrap", gap: 18, margin: "26px 0 0", padding: "18px 0 0", listStyle: "none", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: MUTED, borderTop: `1px dashed ${LINE}` }}>
                    {["Gratuit", "Sans engagement", "Confirmation immédiate"].map((t) => <li key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><Check size={14} /> {t}</li>)}
                  </ul>
                </div>
              )}

              {/* ---- Étape 2 ---- */}
              {step === 1 && (
                <div>
                  <span className="xs-mono" style={eyebrow}>02 / Date et heure</span>
                  <h2 style={h2} tabIndex={-1} ref={headingRef}>{mode === "domicile" ? "Quand pouvons-nous passer ?" : "Quand vous convient-il ?"}</h2>
                  <p style={{ ...sub, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                    <Tag>{modeDef.label}</Tag>
                    <Tag>{area?.label}</Tag>
                    <button type="button" onClick={() => setStep(0)} className="xs-ring-dark" style={editBtn}>Modifier</button>
                  </p>

                  {status === "taken" && <p role="alert" style={{ ...sub, color: ERROR, fontWeight: 600, padding: "12px 14px", background: "#fff1ee", borderLeft: `3px solid ${ERROR}`, borderRadius: 4 }}>Cette plage vient d&apos;être réservée par quelqu&apos;un d&apos;autre. Choisissez-en une autre.</p>}
                  {loadError && <p role="alert" style={{ ...sub, color: ERROR, fontWeight: 600, padding: "12px 14px", background: "#fff1ee", borderLeft: `3px solid ${ERROR}`, borderRadius: 4 }}>Impossible de charger les disponibilités. <button type="button" onClick={() => area && loadAvailability(area.slug)} className="xs-ring-dark" style={{ ...editBtn, padding: "0 2px" }}>Réessayer</button> ou appelez le {PHONE}.</p>}
                  {loading && (
                    <div aria-busy="true">
                      <p style={sub}>Chargement des disponibilités…</p>
                      <div aria-hidden="true" className="grid grid-cols-7 gap-1.5">
                        {Array.from({ length: 21 }, (_, i) => <span key={i} className="xs-pulse block h-[42px] rounded-[8px]" style={{ background: CELL, animationDelay: `${(i % 7) * 0.08}s` }} />)}
                      </div>
                    </div>
                  )}

                  {!loading && availability && (
                    <>
                      {openings.length > 0 && (
                        <div style={{ marginBottom: 24 }}>
                          <span style={label}>Prochaines disponibilités</span>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {openings.map((o, i) => {
                              const active = o.date === date && o.slot === slot;
                              return (
                                <motion.button key={`${o.date}-${o.slot}`} type="button" aria-pressed={active} className="xs-ring-dark" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }} onClick={() => { setDate(o.date); setSlot(o.slot); setMonthIndex(Math.max(0, months.findIndex((m) => m.days.some((x) => x.date === o.date)))); }} style={{ ...chip(active), paddingTop: 14 }}>
                                  <span aria-hidden="true" className="absolute inset-x-0 top-0 block h-[4px]" style={{ background: ORANGE }} />
                                  {cap(fmt(o.date, { weekday: "short", day: "numeric", month: "short" }))} · {slotLabelOf(o)}
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {months[monthIndex] && (
                        <div className="mb-6 rounded-[12px] p-3 sm:p-5" style={{ border: `1px solid ${LINE}`, background: "#fffaf6" }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, gap: 10 }}>
                            <button type="button" onClick={() => setMonthIndex((i) => i - 1)} disabled={monthIndex === 0} aria-label="Mois précédent" className="xs-ring-dark" style={{ ...secondaryBtn, padding: "6px 14px", borderColor: monthIndex === 0 ? LINE : INK, color: monthIndex === 0 ? FAINT : INK, cursor: monthIndex === 0 ? "not-allowed" : "pointer" }}>‹</button>
                            <span aria-live="polite" className="xs-serif" style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1, color: INK }}>{months[monthIndex].label}</span>
                            <button type="button" onClick={() => setMonthIndex((i) => i + 1)} disabled={monthIndex >= months.length - 1} aria-label="Mois suivant" className="xs-ring-dark" style={{ ...secondaryBtn, padding: "6px 14px", borderColor: monthIndex >= months.length - 1 ? LINE : INK, color: monthIndex >= months.length - 1 ? FAINT : INK, cursor: monthIndex >= months.length - 1 ? "not-allowed" : "pointer" }}>›</button>
                          </div>
                          <MonthGrid month={months[monthIndex]} today={availability.today} selected={date} onPick={(d) => { setDate(d); setSlot(""); }} />
                        </div>
                      )}
                    </>
                  )}

                  {selectedDay && (
                    <motion.fieldset key={date} style={{ border: 0, padding: 0, margin: "0 0 22px" }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
                      <legend style={label}>{cap(fmt(date, { weekday: "long", day: "numeric", month: "long" }))}</legend>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {selectedDay.slots.map((s) => {
                          const on = slot === s.id;
                          return (
                            <button key={s.id} type="button" disabled={!s.available} aria-pressed={on} onClick={() => setSlot(s.id)} className="xs-ring-dark" style={{ ...chip(on, !s.available), textAlign: "left", minHeight: 58 }}>
                              {on && <motion.span layoutId="xs-rv-slot" aria-hidden="true" className="absolute inset-0 block" style={{ background: ORANGE }} transition={{ duration: 0.4, ease: EASE }} />}
                              <span className="relative">{slotLabelOf(s)}{s.available ? "" : " · complet"}</span>
                            </button>
                          );
                        })}
                      </div>
                      <span style={hint}>{modeDef.fixedStart ? `Le rendez-vous commence à l’heure choisie et dure environ ${modeDef.durationMin} minutes.` : "Le conseiller se présente à l’intérieur de la plage choisie. Comptez environ 90 minutes."}</span>
                    </motion.fieldset>
                  )}

                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
                    <button type="button" onClick={() => setStep(0)} className="xs-ring-dark" style={secondaryBtn}>Retour</button>
                    <button type="button" disabled={!date || !slot} onClick={() => { setStatus("idle"); setStep(2); }} className="xs-ring-dark" style={primaryBtn(!date || !slot)}>Continuer <Arrow className="xs-arrow" size={16} /></button>
                  </div>
                </div>
              )}

              {/* ---- Étape 3 ---- */}
              {step === 2 && (
                <div>
                  <span className="xs-mono" style={eyebrow}>03 / Vos coordonnées</span>
                  <h2 style={h2} tabIndex={-1} ref={headingRef}>Presque terminé.</h2>
                  <p style={{ ...sub, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                    <Tag>{modeDef.short}</Tag>
                    <Tag>{cap(fmt(date, { weekday: "long", day: "numeric", month: "long" }))}</Tag>
                    <Tag>{slotLabel}</Tag>
                    <button type="button" onClick={() => setStep(1)} className="xs-ring-dark" style={editBtn}>Modifier</button>
                  </p>

                  <fieldset style={{ border: 0, padding: 0, margin: "0 0 22px" }}>
                    <legend style={label}>Objet du rendez-vous</legend>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {Object.entries(NEEDS).map(([id, text]) => (
                        <button key={id} type="button" aria-pressed={values.need === id} onClick={() => setValues((v) => ({ ...v, need: id }))} className="xs-ring-dark" style={chip(values.need === id)}>{text}</button>
                      ))}
                    </div>
                  </fieldset>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label htmlFor="rv-firstName" style={label}>Prénom <span style={{ color: ORANGE_TEXT }}>*</span></label>
                      <input id="rv-firstName" type="text" autoComplete="given-name" value={values.firstName} onChange={update("firstName")} className="xs-rv-field" style={input} aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? "rv-firstName-err" : undefined} />
                      {errors.firstName && <span id="rv-firstName-err" style={errorText}>{errors.firstName}</span>}
                    </div>
                    <div>
                      <label htmlFor="rv-lastName" style={label}>Nom</label>
                      <input id="rv-lastName" type="text" autoComplete="family-name" value={values.lastName} onChange={update("lastName")} className="xs-rv-field" style={input} />
                    </div>
                    <div>
                      <label htmlFor="rv-phone" style={label}>Téléphone <span style={{ color: ORANGE_TEXT }}>*</span></label>
                      <input id="rv-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(514) 000-0000" value={values.phone} onChange={update("phone")} className="xs-rv-field" style={{ ...input, ["--xs-ph" as string]: "#a8958a" } as CSSProperties} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "rv-phone-err" : undefined} />
                      {errors.phone && <span id="rv-phone-err" style={errorText}>{errors.phone}</span>}
                    </div>
                    <div>
                      <label htmlFor="rv-email" style={label}>Courriel <span style={{ color: ORANGE_TEXT }}>*</span></label>
                      <input id="rv-email" type="email" inputMode="email" autoComplete="email" placeholder="vous@exemple.ca" value={values.email} onChange={update("email")} className="xs-rv-field" style={{ ...input, ["--xs-ph" as string]: "#a8958a" } as CSSProperties} aria-invalid={!!errors.email} aria-describedby={errors.email ? "rv-email-err" : "rv-email-hint"} />
                      {errors.email ? <span id="rv-email-err" style={errorText}>{errors.email}</span> : <span id="rv-email-hint" style={hint}>{mode === "visio" ? "Pour la confirmation et le lien Google Meet." : "Pour la confirmation et l’événement de calendrier."}</span>}
                    </div>
                  </div>

                  {mode === "domicile" && (
                    <div className="grid gap-4 sm:grid-cols-[2fr_1fr]" style={{ marginBottom: 16 }}>
                      <div>
                        <label htmlFor="rv-address" style={label}>Adresse de la visite <span style={{ color: ORANGE_TEXT }}>*</span></label>
                        <input id="rv-address" type="text" autoComplete="street-address" placeholder="Numéro et rue" value={values.address} onChange={update("address")} className="xs-rv-field" style={{ ...input, ["--xs-ph" as string]: "#a8958a" } as CSSProperties} aria-invalid={!!errors.address} aria-describedby={errors.address ? "rv-address-err" : undefined} />
                        {errors.address && <span id="rv-address-err" style={errorText}>{errors.address}</span>}
                      </div>
                      <div>
                        <label htmlFor="rv-city" style={label}>Ville <span style={{ color: ORANGE_TEXT }}>*</span></label>
                        <input id="rv-city" type="text" autoComplete="address-level2" value={values.city} onChange={update("city")} className="xs-rv-field" style={input} aria-invalid={!!errors.city} aria-describedby={errors.city ? "rv-city-err" : undefined} />
                        {errors.city && <span id="rv-city-err" style={errorText}>{errors.city}</span>}
                      </div>
                    </div>
                  )}

                  <div style={{ marginBottom: 18 }}>
                    <label htmlFor="rv-notes" style={label}>Précisions <span style={{ fontWeight: 500, color: MUTED }}>(facultatif)</span></label>
                    <textarea id="rv-notes" rows={3} placeholder="Type de maison, appareil actuel, superficie, questions…" value={values.notes} onChange={update("notes")} className="xs-rv-field" style={{ ...input, resize: "vertical", ["--xs-ph" as string]: "#a8958a" } as CSSProperties} />
                  </div>

                  <div style={{ position: "absolute", left: -9999, top: -9999 }} aria-hidden="true">
                    <label htmlFor="rv-website">Site web</label>
                    <input id="rv-website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
                  </div>

                  <label style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14.5, color: MUTED, lineHeight: 1.5, marginBottom: 6, cursor: "pointer" }}>
                    <input type="checkbox" checked={values.consent} onChange={update("consent")} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "rv-consent-err" : undefined} className="xs-check-rv" style={{ marginTop: 1 }} />
                    <span>J&apos;accepte la <Link href="/confidentialite" style={{ color: ORANGE_TEXT, fontWeight: 600, textDecoration: "underline" }}>politique de confidentialité</Link>. <span style={{ color: ORANGE_TEXT }}>*</span></span>
                  </label>
                  {errors.consent && <span id="rv-consent-err" style={errorText}>{errors.consent}</span>}

                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 26, flexWrap: "wrap" }}>
                    <button type="button" onClick={() => setStep(1)} className="xs-ring-dark" style={secondaryBtn}>Retour</button>
                    <button type="submit" disabled={status === "sending"} aria-busy={status === "sending"} className="xs-ring-dark" style={primaryBtn(status === "sending")}>
                      {status === "sending" ? "Réservation en cours…" : <>Confirmer le rendez-vous <Arrow className="xs-arrow" size={16} /></>}
                    </button>
                  </div>
                  {status === "error" && <p role="alert" style={{ ...sub, color: ERROR, fontWeight: 600, margin: "16px 0 0", padding: "12px 14px", background: "#fff1ee", borderLeft: `3px solid ${ERROR}`, borderRadius: 4 }}>Une erreur est survenue. Réessayez ou appelez-nous au {PHONE}.</p>}
                  <p style={{ ...hint, marginTop: 16 }}><span style={{ color: ORANGE_TEXT }}>*</span> Champs obligatoires. Rendez-vous gratuit et sans engagement.</p>
                </div>
              )}
            </motion.div>
          </form>
        </motion.div>

        {/* Carte de rendez-vous : se remplit à mesure des choix (lecture seule) */}
        <aside aria-label="Votre rendez-vous" className="hidden lg:block">
          <motion.div className="sticky top-[120px]" initial={{ opacity: 0, x: 30, rotate: 2 }} whileInView={{ opacity: 1, x: 0, rotate: 1.2 }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE, delay: 0.2 }}>
            <div className="relative px-6 pb-6 pt-9" style={paperStyle}>
              <Rings />
              <div className="flex items-baseline justify-between gap-3">
                <span className="xs-serif text-[30px] leading-none" style={{ color: INK }}>{date ? fmt(date, { month: "long" }) : "Votre moment"}</span>
                <span className="xs-mono text-[11px]" style={{ color: FAINT }}>{date ? date.slice(0, 4) : ""}</span>
              </div>
              <div className="relative mx-auto mt-5 flex h-[118px] w-fit min-w-[150px] items-center justify-center px-5">
                <span className="text-center" style={{ fontSize: dayNumber ? 96 : 64, fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1, color: dayNumber ? INK : "#ead2c2" }}>{dayNumber ?? "—"}</span>
                {dayNumber && <HandCircle key={date} className="-inset-x-2 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+16px)]" />}
              </div>
              <dl className="mt-5" style={{ margin: "20px 0 0" }}>
                {([
                  ["Format", `${modeDef.label} · ${modeDef.durationMin} min`],
                  ["Secteur", area?.label ?? "—"],
                  ["Date", date ? cap(fmt(date, { weekday: "long", day: "numeric", month: "long" })) : "—"],
                  ["Heure", slotLabel || "—"],
                ] as const).map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[76px_minmax(0,1fr)] gap-3 py-2.5" style={{ borderTop: `1px solid ${LINE}` }}>
                    <dt className="xs-mono pt-0.5 text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: MUTED }}>{k}</dt>
                    <dd className="text-[14px] font-semibold" style={{ margin: 0, color: v === "—" ? FAINT : INK }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="xs-mono mt-4 text-[11px] uppercase" style={{ letterSpacing: "0.12em", color: MUTED, margin: "16px 0 0", paddingTop: 14, borderTop: `1px dashed ${LINE}` }}>
                Une question&nbsp;? <a href={`tel:${PHONE.replace(/-/g, "")}`} className="xs-ring-dark" style={{ color: ORANGE_TEXT, fontWeight: 700 }}>{PHONE}</a>
              </p>
            </div>
          </motion.div>
        </aside>

        <section aria-labelledby="rv-faq" className="min-w-0 lg:col-start-1">
          <Reveal>
            <h2 id="rv-faq" className="xs-serif" style={{ fontSize: "clamp(38px, 3.6vw, 56px)", lineHeight: 1, color: INK, margin: "8px 0 18px", fontWeight: 400 }}>Questions fréquentes</h2>
          </Reveal>
          <dl style={{ margin: 0 }}>
            {faq.map((f, i) => (
              <motion.div key={f.q} className="grid gap-x-6 gap-y-2 py-5 sm:grid-cols-[56px_minmax(0,1fr)]" style={{ borderTop: `1px solid ${LINE}` }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}>
                <span aria-hidden="true" className="xs-mono pt-1 text-[12px]" style={{ color: ORANGE_TEXT, letterSpacing: "0.12em" }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <dt style={{ fontWeight: 700, color: INK, marginBottom: 6, fontSize: 17, letterSpacing: "-0.01em" }}>{f.q}</dt>
                  <dd style={{ margin: 0, color: MUTED, lineHeight: 1.6, fontSize: 15.5 }}>{f.a}</dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </section>
      </div>
    </Shell>
    </>
  );
}

function MonthGrid({ month, today, selected, onPick }: { month: { days: DayAvailability[] }; today: string; selected: string; onPick: (d: string) => void }) {
  const first = month.days[0];
  const dayOfMonth = ymdParts(first.date).d;
  const weekdayOfFirst = (((first.weekday - (dayOfMonth - 1)) % 7) + 7) % 7;
  const pad = (weekdayOfFirst + 6) % 7;
  const cells: ReactNode[] = [];
  const cell: CSSProperties = { position: "relative", height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, fontSize: 15 };
  for (let i = 0; i < pad; i++) cells.push(<span key={`p${i}`} />);
  for (let d = 1; d < dayOfMonth; d++) cells.push(<span key={`b${d}`} aria-hidden="true" style={{ ...cell, color: "#d9c6ba" }}>{d}</span>);
  for (const day of month.days) {
    const open = day.slots.some((s) => s.available);
    const active = day.date === selected;
    cells.push(
      <button
        key={day.date}
        type="button"
        disabled={!open}
        aria-pressed={active}
        aria-label={`${fmt(day.date, { weekday: "long", day: "numeric", month: "long" })}${open ? "" : ", aucune disponibilité"}`}
        onClick={() => onPick(day.date)}
        className="xs-ring-dark transition-colors duration-200 hover:border-[#1b1512]"
        style={{ ...cell, border: open ? `1px solid ${active ? "transparent" : "#ecd3c3"}` : "1px solid transparent", background: active ? PAPER : open ? CELL : "transparent", color: open ? INK : "#cdb8ab", fontWeight: open ? 700 : 400, cursor: open ? "pointer" : "default", textDecoration: day.date === today ? "underline" : "none", textUnderlineOffset: 4 }}
      >
        <span className="relative z-[1]">{ymdParts(day.date).d}</span>
        {active && <HandCircle className="-inset-x-1 -inset-y-1 h-[calc(100%+8px)] w-[calc(100%+8px)]" />}
      </button>
    );
  }
  return (
    <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
      {WEEKDAYS.map((w, i) => <span key={i} aria-hidden="true" className="xs-mono pb-1 text-center text-[11px] font-semibold" style={{ color: MUTED, letterSpacing: "0.1em" }}>{w}</span>)}
      {cells}
    </div>
  );
}
