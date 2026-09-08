"use client";

import { useState } from "react";

const T = { ink: "#071b27", inkDeep: "#03141e", surface: "#faf8f4", muted: "#49545b", border: "rgba(16,32,45,0.14)" };

const field: React.CSSProperties = { padding: "14px 16px", borderRadius: 4, border: `1px solid ${T.border}`, backgroundColor: T.surface, outline: "none", fontSize: 15 };
const label: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: T.ink };
const col: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 8 };

export function PartnerForm() {
  const [form, setForm] = useState({ company: "", rbq: "", contact: "", phone: "", email: "", region: "", brands: "", volume: "Moins de 50", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending"); setError("");
    try {
      const res = await fetch("/api/partenaires", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Envoi impossible.");
      setStatus("sent");
    } catch (err) {
      setStatus("error"); setError(err instanceof Error ? err.message : "Envoi impossible.");
    }
  }

  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: "24px 0" }}>
        <p style={{ color: T.ink, fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>Candidature reçue</p>
        <p style={{ color: T.muted, margin: 0, lineHeight: 1.6 }}>Merci. Nous vérifions la licence RBQ et revenons vers vous sous quelques jours ouvrables pour planifier une première rencontre.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={col}><label style={label} htmlFor="pf-company">Nom de l'entreprise</label><input id="pf-company" required type="text" autoComplete="organization" style={field} value={form.company} onChange={set("company")} /></div>
        <div style={col}><label style={label} htmlFor="pf-rbq">Numéro RBQ</label><input id="pf-rbq" required type="text" style={field} value={form.rbq} onChange={set("rbq")} /></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={col}><label style={label} htmlFor="pf-contact">Personne contact</label><input id="pf-contact" required type="text" autoComplete="name" style={field} value={form.contact} onChange={set("contact")} /></div>
        <div style={col}><label style={label} htmlFor="pf-phone">Téléphone</label><input id="pf-phone" required type="tel" inputMode="tel" autoComplete="tel" style={field} value={form.phone} onChange={set("phone")} /></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={col}><label style={label} htmlFor="pf-email">Courriel</label><input id="pf-email" required type="email" autoComplete="email" style={field} value={form.email} onChange={set("email")} /></div>
        <div style={col}><label style={label} htmlFor="pf-region">Région desservie</label><input id="pf-region" type="text" placeholder="ex. Montérégie, Estrie" style={field} value={form.region} onChange={set("region")} /></div>
      </div>
      <div style={col}><label style={label} htmlFor="pf-brands">Quelles marques installez-vous principalement?</label><input id="pf-brands" type="text" placeholder="ex. Daikin, Fujitsu, Mitsubishi" style={field} value={form.brands} onChange={set("brands")} /></div>
      <div style={col}>
        <label style={label} htmlFor="pf-volume">Volume approximatif annuel (installations)</label>
        <select id="pf-volume" style={field} value={form.volume} onChange={set("volume")}>
          <option>Moins de 50</option><option>50 à 150</option><option>150 à 500</option><option>Plus de 500</option>
        </select>
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
        <label>Site web <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} /></label>
      </div>
      {error && <p role="alert" style={{ color: "#b42318", fontSize: 14, margin: 0 }}>{error}</p>}
      <button type="submit" disabled={status === "sending"} style={{ marginTop: 16, width: "100%", height: 56, backgroundColor: T.inkDeep, color: "white", border: "none", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", opacity: status === "sending" ? 0.7 : 1 }}>
        {status === "sending" ? "Envoi…" : "Envoyer la candidature"}
      </button>
      <p style={{ textAlign: "center", fontSize: 12, color: T.muted, margin: "8px 0 0" }}>Vos informations restent confidentielles et servent uniquement à évaluer votre candidature.</p>
    </form>
  );
}
