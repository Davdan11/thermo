"use client";

/* Chantier S — codes de secours, montrés UNE seule fois : copier ou télécharger, puis les ranger hors du téléphone. */
import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";

export function BackupCodesList({ codes }: { codes: string[] }) {
  const [copied, setCopied] = useState(false);
  const text = `Codes de secours — gestion ThermopompesÀVendre.ca\nChaque code ne sert qu’une fois.\n\n${codes.join("\n")}\n`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers refusé : l'utilisateur peut télécharger */
    }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "codes-de-secours-gestion.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <div className="se-codes">
      <ol className="se-codes__grid" aria-label="Codes de secours">
        {codes.map((c, i) => (
          <li key={c} style={{ animationDelay: `${i * 35}ms` }}>
            <span aria-hidden>{String(i + 1).padStart(2, "0")}</span>
            <code>{c}</code>
          </li>
        ))}
      </ol>
      <div className="se-codes__actions">
        <button type="button" className="k-btn k-btn--ghost" onClick={copy}>
          {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />} {copied ? "Copiés" : "Copier"}
        </button>
        <button type="button" className="k-btn k-btn--ghost" onClick={download}>
          <Download size={16} aria-hidden /> Télécharger (.txt)
        </button>
      </div>
    </div>
  );
}
