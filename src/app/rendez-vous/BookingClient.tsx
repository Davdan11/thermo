"use client";
/* ==================================================================
   Assistant de réservation : format → secteur (code postal) → date et
   heure → coordonnées → confirmation. Même parcours que sur
   bellechasseenergie.com, dans la charte Thermopompes À Vendre.
   ================================================================== */
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { CalendarCheck, Phone, Video, Home, MapPin, Clock, ArrowRight, AlertCircle, Check } from "lucide-react";
import { MODES, MODE_IDS, DEFAULT_MODE, NEEDS, areaFromPostalCode, isPostalCode, hourLabel, type ModeId, type DayAvailability } from "@/lib/rdv/booking";
import { track } from "@/lib/analytics/track";

const ORANGE = "#e54b17";
const NAVY = "#0b1b24";
const CREAM = "#f7f5f0";
const MUTED = "#536873";
const LINE = "#e4ddd5";
const PHONE = "438-900-3224";

const STEPS = ["Format et secteur", "Date et heure", "Coordonnées"];
const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];
const MODE_ICON: Record<ModeId, React.ReactNode> = { telephone: <Phone size={18} />, visio: <Video size={18} />, domicile: <Home size={18} /> };

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
const card: React.CSSProperties = { maxWidth: 720, width: "100%", backgroundColor: "#fff", border: `1px solid ${LINE}`, borderRadius: 10, overflow: "hidden" };
const eyebrow: React.CSSProperties = { display: "block", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: ORANGE, marginBottom: 10 };
const h2: React.CSSProperties = { margin: "0 0 8px", fontSize: 26, lineHeight: 1.2, fontWeight: 800, color: NAVY, letterSpacing: "-0.01em" };
const sub: React.CSSProperties = { margin: "0 0 22px", fontSize: 15, color: MUTED, lineHeight: 1.55 };
const label: React.CSSProperties = { display: "block", fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 6 };
const input: React.CSSProperties = { width: "100%", padding: "12px 14px", fontSize: 15, border: "1px solid #c9c2b8", borderRadius: 6, background: "#fff", color: NAVY, boxSizing: "border-box" };
const hint: React.CSSProperties = { display: "block", fontSize: 12.5, color: MUTED, marginTop: 6 };
const errorText: React.CSSProperties = { display: "block", fontSize: 12.5, color: "#b42318", marginTop: 6, fontWeight: 600 };
const primaryBtn = (disabled: boolean): React.CSSProperties => ({ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 22px", background: disabled ? "#c9c2b8" : ORANGE, color: "#fff", border: "none", borderRadius: 6, fontWeight: 700, fontSize: 15, cursor: disabled ? "not-allowed" : "pointer" });
const secondaryBtn: React.CSSProperties = { padding: "14px 18px", background: "#fff", color: NAVY, border: "1px solid #c9c2b8", borderRadius: 6, fontWeight: 700, fontSize: 15, cursor: "pointer" };
const chip = (active: boolean, disabled = false): React.CSSProperties => ({
  padding: "11px 14px", fontSize: 14, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer", borderRadius: 6,
  border: active ? `1.5px solid ${NAVY}` : "1px solid #d9d2c8",
  background: active ? NAVY : disabled ? "#f3efe9" : "#fff", color: active ? "#fff" : disabled ? "#a39d94" : NAVY, transition: "all .15s",
});
const optionCard = (active: boolean, disabled = false): React.CSSProperties => ({
  display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 16px", borderRadius: 8, cursor: disabled ? "not-allowed" : "pointer",
  border: active ? `1.5px solid ${ORANGE}` : "1px solid #d9d2c8", background: active ? "#fff5f1" : disabled ? "#f6f3ee" : "#fff", opacity: disabled ? 0.6 : 1,
});

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
  const [values, setValues] = useState({ need: "installation", firstName: "", lastName: "", phone: "", email: "", address: "", city: "", notes: "", consent: false, website: "" });
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "taken">("idle");
  const [result, setResult] = useState<Result | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const visited = useRef(false);

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

  useEffect(() => {
    if (!visited.current) { visited.current = true; return; }
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
        body: JSON.stringify({ ...values, mode, postalCode, date, slot, source: "rendez-vous", page: typeof window !== "undefined" ? window.location.pathname : "" }),
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
    const rows: Array<[React.ReactNode, React.ReactNode]> = [
      [<>{MODE_ICON[result.mode]} Format</>, result.modeLabel],
      [<><CalendarCheck size={16} /> Date</>, cap(result.dateLabel)],
      [<><Clock size={16} /> Heure</>, result.slot],
      [<><MapPin size={16} /> Où</>, online ? "En ligne, sur Google Meet" : result.mode === "domicile" ? `${values.address}, ${values.city}` : `Par téléphone, au ${values.phone}`],
      ["Référence", <span key="ref" style={{ fontFamily: "ui-monospace, Menlo, monospace", letterSpacing: 1 }}>{result.id}</span>],
    ];
    return (
      <div style={{ minHeight: "70vh", backgroundColor: CREAM, display: "flex", justifyContent: "center", padding: "56px 20px 80px" }}>
        <div style={card}>
          <div style={{ padding: "36px 36px 28px" }}>
            <span style={eyebrow}>{online ? "Rencontre en ligne confirmée" : result.mode === "domicile" ? "Visite confirmée" : "Appel confirmé"}</span>
            <h1 style={{ ...h2, fontSize: 28 }} tabIndex={-1} ref={headingRef}>Merci, {firstName}.</h1>
            <p style={sub}>{online ? "Un conseiller vous rencontre sur Google Meet :" : result.mode === "domicile" ? "Un conseiller de notre équipe passera chez vous :" : "Un conseiller vous appelle :"}</p>
            <dl style={{ margin: "0 0 22px", padding: 0 }}>
              {rows.map(([k, v], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: 14, padding: "12px 0", borderBottom: i < rows.length - 1 ? "1px solid #f0ebe4" : "none" }}>
                  <dt style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: MUTED }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: 15, fontWeight: 700, color: NAVY }}>{v}</dd>
                </div>
              ))}
            </dl>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {online && result.meetLink && (
                <a href={result.meetLink} target="_blank" rel="noopener noreferrer" style={{ ...primaryBtn(false), textDecoration: "none" }}><Video size={16} /> Ouvrir le lien Google Meet</a>
              )}
              <a href={result.calendarUrl} target="_blank" rel="noopener noreferrer" style={{ ...secondaryBtn, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}><CalendarCheck size={16} /> Ajouter à Google Agenda</a>
            </div>
            {online && !result.meetLink && <p style={{ ...sub, margin: "18px 0 0" }}>Le lien Google Meet vous sera envoyé par courriel avant la rencontre.</p>}
            <p style={{ ...sub, margin: "18px 0 0" }}>
              {result.emailed
                ? <>Une confirmation vous a été envoyée à <strong>{values.email.trim()}</strong>{online && result.meetLink ? ", avec le lien Google Meet" : ""}, avec l&apos;événement à ajouter à votre calendrier.</>
                : <>Notre équipe vous confirmera le rendez-vous par téléphone au <strong>{values.phone.trim()}</strong>.</>}
            </p>
          </div>
          <div style={{ padding: "18px 36px 24px", borderTop: `1px solid ${LINE}`, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" style={{ color: NAVY, textDecoration: "none", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>Retour à l&apos;accueil <ArrowRight size={16} /></Link>
            <p style={{ margin: 0, fontSize: 13.5, color: MUTED }}>Pour modifier : <a href={`tel:${PHONE.replace(/-/g, "")}`} style={{ color: ORANGE, fontWeight: 700, textDecoration: "none" }}>{PHONE}</a>, avec votre référence.</p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Assistant ---------- */
  return (
    <div style={{ backgroundColor: CREAM }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 20px 80px", display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 32 }}>
        <div style={{ maxWidth: 720 }}>
          <span style={eyebrow}>Rendez-vous avec un conseiller</span>
          <h1 style={{ margin: "0 0 12px", fontSize: 38, lineHeight: 1.1, fontWeight: 800, color: NAVY, letterSpacing: "-0.02em" }}>Choisissez le moment.<br />On s&apos;occupe du reste.</h1>
          <p style={{ ...sub, fontSize: 16 }}>Un appel, une rencontre en ligne sur Google Meet ou une visite à domicile, gratuitement et sans engagement. Confirmation immédiate, du lundi au vendredi de 8 h à 17 h.</p>
        </div>

        <form style={card} onSubmit={handleSubmit} noValidate>
          <ol aria-label="Étapes de la réservation" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, margin: 0, padding: "18px 24px", listStyle: "none", borderBottom: `1px solid ${LINE}`, background: "#fbfaf7" }}>
            {STEPS.map((s, i) => (
              <li key={s} aria-current={i === step ? "step" : undefined} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: i === step ? NAVY : i < step ? "#1b6b3a" : "#a39d94" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "50%", background: i === step ? ORANGE : i < step ? "#1b6b3a" : "#e4ddd5", color: i <= step ? "#fff" : "#7d766c", fontSize: 12 }}>{i < step ? <Check size={14} /> : i + 1}</span>
                <span className="hidden sm:inline">{s}</span>
              </li>
            ))}
          </ol>

          <div style={{ padding: "30px 32px 34px" }}>
            {/* ---- Étape 1 ---- */}
            {step === 0 && (
              <div>
                <span style={eyebrow}>01 / Format et secteur</span>
                <h2 style={h2} tabIndex={-1} ref={headingRef}>Comment souhaitez-vous nous rencontrer ?</h2>
                <p style={sub}>Par téléphone pour cadrer le projet, en ligne pour comparer des modèles à l&apos;écran, ou chez vous pour une évaluation complète.</p>

                <fieldset style={{ border: 0, padding: 0, margin: "0 0 22px" }}>
                  <legend style={label}>Format de la rencontre</legend>
                  <div style={{ display: "grid", gap: 10 }}>
                    {MODE_IDS.map((id) => {
                      const m = MODES[id];
                      const disabled = id === "domicile" && !!area && !area.visit;
                      const active = mode === id;
                      return (
                        <label key={id} style={optionCard(active, disabled)}>
                          <input type="radio" name="mode" value={id} checked={active} disabled={disabled} onChange={() => setMode(id)} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
                          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", background: active ? ORANGE : "#eef2f7", color: active ? "#fff" : NAVY, flexShrink: 0 }}>{MODE_ICON[id]}</span>
                          <span>
                            <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: NAVY }}>{m.label} <span style={{ fontWeight: 500, color: MUTED }}>· {m.durationMin} min</span></span>
                            <span style={{ display: "block", fontSize: 13.5, color: MUTED, marginTop: 2 }}>{disabled ? `Non offerte dans le secteur ${area?.label}. Choisissez l’appel ou la rencontre en ligne.` : m.description}</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div style={{ marginBottom: 8 }}>
                  <label htmlFor="rv-postal" style={label}>Code postal <span style={{ color: ORANGE }}>*</span></label>
                  <input id="rv-postal" type="text" inputMode="text" autoComplete="postal-code" placeholder="H1H 1H1" maxLength={7} value={postalCode} onChange={(e) => {
                    const v = e.target.value.toUpperCase();
                    setPostalCode(v);
                    // Si la visite n'est pas offerte dans le secteur, on bascule sur l'appel.
                    if (mode === "domicile" && isPostalCode(v) && !areaFromPostalCode(v).visit) setMode("telephone");
                  }} style={{ ...input, maxWidth: 200 }} aria-describedby="rv-postal-hint" />
                  <span id="rv-postal-hint" style={hint}>
                    {area ? <>Secteur : <strong style={{ color: NAVY }}>{area.label}</strong>{area.visit ? "" : " (appel ou rencontre en ligne seulement)"}</> : "Il sert à vous jumeler au conseiller de votre région."}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 22 }}>
                  <button type="button" disabled={!pcValid} onClick={goToDate} style={primaryBtn(!pcValid)}>Choisir une date <ArrowRight size={16} /></button>
                </div>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: 16, margin: "18px 0 0", padding: 0, listStyle: "none", fontSize: 13, color: MUTED }}>
                  {["Gratuit", "Sans engagement", "Confirmation immédiate"].map((t) => <li key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Check size={14} color="#1b6b3a" /> {t}</li>)}
                </ul>
              </div>
            )}

            {/* ---- Étape 2 ---- */}
            {step === 1 && (
              <div>
                <span style={eyebrow}>02 / Date et heure</span>
                <h2 style={h2} tabIndex={-1} ref={headingRef}>{mode === "domicile" ? "Quand pouvons-nous passer ?" : "Quand vous convient-il ?"}</h2>
                <p style={{ ...sub, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>{MODE_ICON[mode]} {modeDef.label}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><MapPin size={16} /> {area?.label}</span>
                  <button type="button" onClick={() => setStep(0)} style={{ background: "none", border: 0, color: ORANGE, fontWeight: 700, cursor: "pointer", padding: 0 }}>Modifier</button>
                </p>

                {status === "taken" && <p role="alert" style={{ ...sub, color: "#b42318", display: "flex", gap: 8 }}><AlertCircle size={18} /> Cette plage vient d&apos;être réservée par quelqu&apos;un d&apos;autre. Choisissez-en une autre.</p>}
                {loadError && <p role="alert" style={{ ...sub, color: "#b42318" }}>Impossible de charger les disponibilités. <button type="button" onClick={() => area && loadAvailability(area.slug)} style={{ background: "none", border: 0, color: ORANGE, fontWeight: 700, cursor: "pointer" }}>Réessayer</button> ou appelez le {PHONE}.</p>}
                {loading && <p style={sub} aria-busy="true">Chargement des disponibilités…</p>}

                {!loading && availability && (
                  <>
                    {openings.length > 0 && (
                      <div style={{ marginBottom: 20 }}>
                        <span style={label}>Prochaines disponibilités</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {openings.map((o) => {
                            const active = o.date === date && o.slot === slot;
                            return (
                              <button key={`${o.date}-${o.slot}`} type="button" aria-pressed={active} onClick={() => { setDate(o.date); setSlot(o.slot); setMonthIndex(Math.max(0, months.findIndex((m) => m.days.some((x) => x.date === o.date)))); }} style={chip(active)}>
                                {cap(fmt(o.date, { weekday: "short", day: "numeric", month: "short" }))} · {slotLabelOf(o)}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {months[monthIndex] && (
                      <div style={{ border: `1px solid ${LINE}`, borderRadius: 8, padding: 14, marginBottom: 18 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                          <button type="button" onClick={() => setMonthIndex((i) => i - 1)} disabled={monthIndex === 0} aria-label="Mois précédent" style={{ ...secondaryBtn, padding: "6px 12px" }}>‹</button>
                          <span aria-live="polite" style={{ fontWeight: 700, color: NAVY }}>{months[monthIndex].label}</span>
                          <button type="button" onClick={() => setMonthIndex((i) => i + 1)} disabled={monthIndex >= months.length - 1} aria-label="Mois suivant" style={{ ...secondaryBtn, padding: "6px 12px" }}>›</button>
                        </div>
                        <MonthGrid month={months[monthIndex]} today={availability.today} selected={date} onPick={(d) => { setDate(d); setSlot(""); }} />
                      </div>
                    )}
                  </>
                )}

                {selectedDay && (
                  <fieldset style={{ border: 0, padding: 0, margin: "0 0 18px" }}>
                    <legend style={label}><Clock size={14} style={{ verticalAlign: "-2px" }} /> {cap(fmt(date, { weekday: "long", day: "numeric", month: "long" }))}</legend>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {selectedDay.slots.map((s) => (
                        <button key={s.id} type="button" disabled={!s.available} aria-pressed={slot === s.id} onClick={() => setSlot(s.id)} style={chip(slot === s.id, !s.available)}>
                          {slotLabelOf(s)}{s.available ? "" : " · complet"}
                        </button>
                      ))}
                    </div>
                    <span style={hint}>{modeDef.fixedStart ? `Le rendez-vous commence à l’heure choisie et dure environ ${modeDef.durationMin} minutes.` : "Le conseiller se présente à l’intérieur de la plage choisie. Comptez environ 90 minutes."}</span>
                  </fieldset>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 8 }}>
                  <button type="button" onClick={() => setStep(0)} style={secondaryBtn}>Retour</button>
                  <button type="button" disabled={!date || !slot} onClick={() => { setStatus("idle"); setStep(2); }} style={primaryBtn(!date || !slot)}>Continuer <ArrowRight size={16} /></button>
                </div>
              </div>
            )}

            {/* ---- Étape 3 ---- */}
            {step === 2 && (
              <div>
                <span style={eyebrow}>03 / Vos coordonnées</span>
                <h2 style={h2} tabIndex={-1} ref={headingRef}>Presque terminé.</h2>
                <p style={{ ...sub, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>{MODE_ICON[mode]} {modeDef.short}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><CalendarCheck size={16} /> {cap(fmt(date, { weekday: "long", day: "numeric", month: "long" }))}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Clock size={16} /> {slotLabel}</span>
                  <button type="button" onClick={() => setStep(1)} style={{ background: "none", border: 0, color: ORANGE, fontWeight: 700, cursor: "pointer", padding: 0 }}>Modifier</button>
                </p>

                <fieldset style={{ border: 0, padding: 0, margin: "0 0 18px" }}>
                  <legend style={label}>Objet du rendez-vous</legend>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {Object.entries(NEEDS).map(([id, text]) => (
                      <button key={id} type="button" aria-pressed={values.need === id} onClick={() => setValues((v) => ({ ...v, need: id }))} style={chip(values.need === id)}>{text}</button>
                    ))}
                  </div>
                </fieldset>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label htmlFor="rv-firstName" style={label}>Prénom <span style={{ color: ORANGE }}>*</span></label>
                    <input id="rv-firstName" type="text" autoComplete="given-name" value={values.firstName} onChange={update("firstName")} style={input} aria-invalid={!!errors.firstName} />
                    {errors.firstName && <span style={errorText}>{errors.firstName}</span>}
                  </div>
                  <div>
                    <label htmlFor="rv-lastName" style={label}>Nom</label>
                    <input id="rv-lastName" type="text" autoComplete="family-name" value={values.lastName} onChange={update("lastName")} style={input} />
                  </div>
                  <div>
                    <label htmlFor="rv-phone" style={label}>Téléphone <span style={{ color: ORANGE }}>*</span></label>
                    <input id="rv-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(514) 000-0000" value={values.phone} onChange={update("phone")} style={input} aria-invalid={!!errors.phone} />
                    {errors.phone && <span style={errorText}>{errors.phone}</span>}
                  </div>
                  <div>
                    <label htmlFor="rv-email" style={label}>Courriel <span style={{ color: ORANGE }}>*</span></label>
                    <input id="rv-email" type="email" inputMode="email" autoComplete="email" placeholder="vous@exemple.ca" value={values.email} onChange={update("email")} style={input} aria-invalid={!!errors.email} />
                    {errors.email ? <span style={errorText}>{errors.email}</span> : <span style={hint}>{mode === "visio" ? "Pour la confirmation et le lien Google Meet." : "Pour la confirmation et l’événement de calendrier."}</span>}
                  </div>
                </div>

                {mode === "domicile" && (
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginBottom: 14 }}>
                    <div>
                      <label htmlFor="rv-address" style={label}>Adresse de la visite <span style={{ color: ORANGE }}>*</span></label>
                      <input id="rv-address" type="text" autoComplete="street-address" placeholder="Numéro et rue" value={values.address} onChange={update("address")} style={input} aria-invalid={!!errors.address} />
                      {errors.address && <span style={errorText}>{errors.address}</span>}
                    </div>
                    <div>
                      <label htmlFor="rv-city" style={label}>Ville <span style={{ color: ORANGE }}>*</span></label>
                      <input id="rv-city" type="text" autoComplete="address-level2" value={values.city} onChange={update("city")} style={input} aria-invalid={!!errors.city} />
                      {errors.city && <span style={errorText}>{errors.city}</span>}
                    </div>
                  </div>
                )}

                <div style={{ marginBottom: 14 }}>
                  <label htmlFor="rv-notes" style={label}>Précisions <span style={{ fontWeight: 500, color: MUTED }}>(facultatif)</span></label>
                  <textarea id="rv-notes" rows={3} placeholder="Type de maison, appareil actuel, superficie, questions…" value={values.notes} onChange={update("notes")} style={{ ...input, resize: "vertical" }} />
                </div>

                <div style={{ position: "absolute", left: -9999, top: -9999 }} aria-hidden="true">
                  <label htmlFor="rv-website">Site web</label>
                  <input id="rv-website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
                </div>

                <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, color: MUTED, lineHeight: 1.5, marginBottom: 6 }}>
                  <input type="checkbox" checked={values.consent} onChange={update("consent")} aria-invalid={!!errors.consent} style={{ marginTop: 3 }} />
                  <span>J&apos;accepte la <Link href="/confidentialite" style={{ color: ORANGE }}>politique de confidentialité</Link>. <span style={{ color: ORANGE }}>*</span></span>
                </label>
                {errors.consent && <span style={errorText}>{errors.consent}</span>}

                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 22 }}>
                  <button type="button" onClick={() => setStep(1)} style={secondaryBtn}>Retour</button>
                  <button type="submit" disabled={status === "sending"} aria-busy={status === "sending"} style={primaryBtn(status === "sending")}>
                    {status === "sending" ? "Réservation en cours…" : <>Confirmer le rendez-vous <ArrowRight size={16} /></>}
                  </button>
                </div>
                {status === "error" && <p role="alert" style={{ ...sub, color: "#b42318", margin: "14px 0 0" }}>Une erreur est survenue. Réessayez ou appelez-nous au {PHONE}.</p>}
                <p style={{ ...hint, marginTop: 14 }}><span style={{ color: ORANGE }}>*</span> Champs obligatoires. Rendez-vous gratuit et sans engagement.</p>
              </div>
            )}
          </div>
        </form>

        <section aria-labelledby="rv-faq" style={{ maxWidth: 720 }}>
          <h2 id="rv-faq" style={{ ...h2, fontSize: 22, marginTop: 8 }}>Questions fréquentes</h2>
          <dl style={{ margin: 0 }}>
            {faq.map((f) => (
              <div key={f.q} style={{ padding: "14px 0", borderBottom: `1px solid ${LINE}` }}>
                <dt style={{ fontWeight: 700, color: NAVY, marginBottom: 6 }}>{f.q}</dt>
                <dd style={{ margin: 0, color: MUTED, lineHeight: 1.55, fontSize: 15 }}>{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}

function MonthGrid({ month, today, selected, onPick }: { month: { days: DayAvailability[] }; today: string; selected: string; onPick: (d: string) => void }) {
  const first = month.days[0];
  const dayOfMonth = ymdParts(first.date).d;
  const weekdayOfFirst = (((first.weekday - (dayOfMonth - 1)) % 7) + 7) % 7;
  const pad = (weekdayOfFirst + 6) % 7;
  const cells: React.ReactNode[] = [];
  const cell: React.CSSProperties = { height: 38, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 6, fontSize: 14 };
  for (let i = 0; i < pad; i++) cells.push(<span key={`p${i}`} />);
  for (let d = 1; d < dayOfMonth; d++) cells.push(<span key={`b${d}`} aria-hidden="true" style={{ ...cell, color: "#c9c2b8" }}>{d}</span>);
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
        style={{ ...cell, border: active ? `1.5px solid ${NAVY}` : open ? "1px solid #d9d2c8" : "1px solid transparent", background: active ? NAVY : open ? "#fff" : "transparent", color: active ? "#fff" : open ? NAVY : "#c9c2b8", fontWeight: open ? 700 : 400, cursor: open ? "pointer" : "default", textDecoration: day.date === today ? "underline" : "none" }}
      >
        {ymdParts(day.date).d}
      </button>
    );
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
      {WEEKDAYS.map((w, i) => <span key={i} aria-hidden="true" style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: MUTED }}>{w}</span>)}
      {cells}
    </div>
  );
}
