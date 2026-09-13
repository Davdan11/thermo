"use client";

/* Chantier A — bouton « Résumer » de la fiche client : ouvre « Demande à Claude » et pose la question pour cette fiche. */
import { Sparkles } from "lucide-react";
import { openAssistant } from "./events";
import "./assistant.css";

export function AssistantSummarizeButton({ clientId }: { clientId: string }) {
  return (
    <button
      type="button"
      className="as-summarize"
      onClick={() => openAssistant({ clientId, send: true, question: "Résume cette fiche : où en est ce client, ce qui a été fait et ce qui reste à faire." })}
    >
      <Sparkles size={16} aria-hidden /> Résumer avec Claude
    </button>
  );
}

/** Bouton générique (pages Assistant et Rentabilité). */
export function OpenAssistantButton({ question, label = "Demander à Claude", className = "k-btn k-btn--ink" }: { question?: string; label?: string; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => openAssistant(question ? { question } : {})}>
      <Sparkles size={15} aria-hidden /> {label}
    </button>
  );
}
