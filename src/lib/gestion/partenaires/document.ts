/* ==================================================================
   Document de l'entente signée : page HTML autonome et imprimable
   (styles en ligne, image de la signature en data:), même direction
   que le document de soumission (/devis) : encre, orange, crème,
   titres en police d'affichage, accents en italique.
   Servie par /entente/[jeton]/document (le partenaire) et
   /gestion/api/partenaires/document/[id] (le propriétaire), avec une
   politique de sécurité qui n'autorise aucun script.
   Le texte affiché est reconstruit de la version, puis comparé à
   l'empreinte signée : en cas d'écart, le texte conservé tel quel à
   la signature est affiché, avec un avertissement.
   ================================================================== */

import { escapeHtml as e } from "@/lib/security/escape";
import type { CompanyIdentity } from "@/lib/soumissions/types";
import { agreementHash, clauseRef } from "./agreement";
import { longDateTime } from "./format";
import type { AgreementVersion, SignedAgreement } from "./types";

const FALLBACK = { name: "Thermopompes À Vendre", phone: "438-900-3224", email: "info@thermopompesavendre.ca", web: "thermopompesavendre.ca" };

const para = (s: string) => e(s).replace(/\n/g, "<br>");

export function renderSignedDocument(d: { sig: SignedAgreement; version: AgreementVersion; company: CompanyIdentity | null; signatureDataUrl: string | null }): string {
  const { sig, version: v, company: c } = d;
  const intact = agreementHash(v) === sig.proof.textSha256;
  const us = c?.legalName || c?.tradeName || FALLBACK.name;
  const usMeta = [c?.neq ? `NEQ ${c.neq}` : "", c?.rbq ? `RBQ ${c.rbq}` : "", [c?.address, c?.city, c?.postalCode].filter(Boolean).join(", ")].filter(Boolean).join(" · ");
  const contact = [c?.phone || FALLBACK.phone, c?.email || FALLBACK.email, c?.website || FALLBACK.web].join(" · ");
  const signed = longDateTime(sig.signedAt);

  const body = intact
    ? `${v.preamble.trim() ? `<p class="pre">${para(v.preamble)}</p>` : ""}${v.articles
        .map(
          (a, i) => `<section class="art"><h2><span>Article ${i + 1}</span>${e(a.title)}</h2>${a.paragraphs.map((p, j) => `<p><b>${clauseRef(i, j)}</b>${para(p)}</p>`).join("")}</section>`,
        )
        .join("")}`
    : `<p class="warn">Le texte de la version ne correspond plus à l’empreinte signée : voici le texte conservé tel quel au moment de la signature.</p><pre class="raw">${e(sig.signedText)}</pre>`;

  const mark = sig.method === "trace" && d.signatureDataUrl ? `<img src="${d.signatureDataUrl}" alt="Signature de ${e(sig.signerName)}">` : `<span class="typed">${e(sig.signerName)}</span>`;

  return `<!doctype html>
<html lang="fr-CA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow">
<title>Entente de partenariat signée — ${e(sig.company)} (version ${sig.versionNumber})</title>
<style>
:root{--ink:#0c1821;--orange:#e54b17;--cream:#f4efe7;--paper:#fffdf9;--muted:#5b6770;--line:rgba(12,24,33,.14)}
*{box-sizing:border-box}html{background:var(--cream)}body{margin:0;color:var(--ink);font:15px/1.6 ui-sans-serif,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased}
.sheet{max-width:820px;margin:28px auto;background:var(--paper);border-radius:22px;overflow:hidden;box-shadow:0 30px 60px -40px rgba(12,24,33,.45)}
.cover{position:relative;padding:38px 44px 34px;background:radial-gradient(120% 90% at 100% 120%,rgba(229,75,23,.28),transparent 60%),var(--ink);color:var(--cream);overflow:hidden}
.cover svg{position:absolute;right:-60px;top:-60px;width:300px;height:300px;opacity:.16}.cover circle{fill:none;stroke:#f4efe7;stroke-width:1}
.eyebrow{margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#ffb08f}
h1{margin:0;font-size:34px;line-height:1.05;letter-spacing:-.03em;font-weight:680}h1 em{display:block;margin-top:6px;font:italic 400 24px/1.2 Georgia,"Times New Roman",serif;color:#f6b89f;letter-spacing:0}
.meta{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:18px;font-size:12.5px;color:rgba(244,239,231,.72)}
.parties{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding:26px 44px;border-bottom:1px solid var(--line)}
.parties p{margin:0}.parties small{display:block;font-size:10.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--orange);margin-bottom:4px}
.parties strong{font-size:16px}.parties span{display:block;font-size:12.5px;color:var(--muted)}
.content{padding:10px 44px 20px}.pre{margin:20px 0 6px;color:var(--muted)}
.art{padding:18px 0;border-bottom:1px solid var(--line);break-inside:avoid}
.art h2{margin:0 0 10px;font-size:18px;letter-spacing:-.02em}.art h2 span{display:block;font-size:10.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--orange);margin-bottom:2px}
.art p{margin:0 0 8px;max-width:68ch}.art b{display:inline-block;min-width:38px;color:var(--muted);font-variant-numeric:tabular-nums}
.sign{margin:6px 44px 24px;padding:22px 24px;border:1px solid var(--line);border-radius:18px;display:grid;grid-template-columns:1.1fr 1fr;gap:20px;break-inside:avoid}
.sign .mark{min-height:90px;display:flex;align-items:flex-end;border-bottom:1.5px solid var(--ink);padding-bottom:6px}
.sign img{max-height:110px;max-width:100%}.typed{font:italic 400 34px/1.1 Georgia,"Times New Roman",serif}
.sign dl{margin:0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}.sign dt{color:var(--muted)}.sign dd{margin:0;font-weight:600}
.proof{margin:0 44px 30px;padding:18px 22px;background:var(--cream);border-radius:16px;font-size:12px;break-inside:avoid}
.proof h3{margin:0 0 8px;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange)}
.proof dl{margin:0;display:grid;grid-template-columns:auto 1fr;gap:4px 14px}.proof dt{color:var(--muted)}.proof dd{margin:0;word-break:break-all;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11.5px}
.foot{padding:16px 44px 30px;font-size:11.5px;color:var(--muted)}
.warn{padding:12px 14px;border-radius:12px;background:#fbe9e7;color:#b42318}.raw{white-space:pre-wrap;font:13px/1.55 ui-monospace,Menlo,Consolas,monospace}
@media (max-width:640px){.cover,.content,.parties,.foot{padding-left:22px;padding-right:22px}.sign,.proof{margin-left:16px;margin-right:16px}.parties,.sign{grid-template-columns:1fr}h1{font-size:28px}.sheet{margin:0;border-radius:0}}
@page{size:letter;margin:14mm}
@media print{html,body{background:#fff}.sheet{margin:0;box-shadow:none;border-radius:0}.cover{print-color-adjust:exact;-webkit-print-color-adjust:exact}}
</style></head>
<body><main class="sheet">
<header class="cover"><svg viewBox="0 0 300 300" aria-hidden="true"><circle cx="150" cy="150" r="146"/><circle cx="150" cy="150" r="110"/><circle cx="150" cy="150" r="74"/></svg>
<p class="eyebrow">Entente de partenariat · version ${v.number} · signée</p>
<h1>${e(v.title)}<em>entre ${e(us)} et ${e(sig.company)}</em></h1>
<div class="meta"><span>Signée le ${e(signed)}</span><span>Texte final validé${v.validatedAt ? ` le ${e(longDateTime(v.validatedAt))}` : ""}</span></div>
</header>
<div class="parties"><p><small>Entre</small><strong>${e(us)}</strong><span>${e(usMeta)}</span><span>${e(contact)}</span></p><p><small>Et le partenaire</small><strong>${e(sig.company)}</strong><span>Représenté par ${e(sig.signerName)}, ${e(sig.signerTitle)}</span></p></div>
<div class="content">${body}</div>
<section class="sign"><div><div class="mark">${mark}</div><p style="margin:6px 0 0;font-size:12px;color:var(--muted)">Signature électronique de ${e(sig.signerName)}, ${e(sig.signerTitle)}</p></div>
<dl><dt>Entreprise</dt><dd>${e(sig.company)}</dd><dt>Signataire</dt><dd>${e(sig.signerName)}</dd><dt>Titre</dt><dd>${e(sig.signerTitle)}</dd><dt>Date</dt><dd>${e(signed)}</dd><dt>Déclarations</dt><dd>Autorisé à signer pour l’entreprise ; a lu et accepte l’entente</dd></dl></section>
<section class="proof"><h3>Preuve de signature</h3><dl>
<dt>Horodatage (UTC)</dt><dd>${e(sig.signedAt)}</dd>
<dt>Version</dt><dd>${sig.versionNumber} (${e(sig.versionId)})</dd>
<dt>Empreinte SHA-256 du texte signé</dt><dd>${e(sig.proof.textSha256)}</dd>
${sig.proof.imageSha256 ? `<dt>Empreinte de la signature tracée</dt><dd>${e(sig.proof.imageSha256)}</dd>` : ""}
<dt>Méthode</dt><dd>${sig.method === "trace" ? "Signature tracée au doigt ou à la souris" : "Nom tapé"}</dd>
<dt>Adresse IP</dt><dd>${e(sig.proof.ip)}</dd>
<dt>Navigateur</dt><dd>${e(sig.proof.userAgent)}</dd>
<dt>Référence</dt><dd>${e(sig.id)}</dd></dl></section>
<p class="foot">Document produit à partir du texte signé. L’empreinte SHA-256 permet de vérifier que le texte n’a pas changé depuis la signature. Pour l’enregistrer en PDF : Imprimer, puis « Enregistrer en PDF ».</p>
</main></body></html>`;
}
