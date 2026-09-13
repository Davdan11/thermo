/* Rendu serveur du document client (/devis) pour les tests : ce que voit le client, en texte HTML. */
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { QuoteDocumentView } from "@/components/gestion/soumissions/document/QuoteDocumentView";
import type { QuoteDocument } from "../types";
import { TODAY } from "./fixtures";

export function renderDoc(doc: QuoteDocument, selection: string[]): string {
  return renderToString(
    createElement(QuoteDocumentView, {
      doc,
      mode: "client",
      status: "envoyee",
      canRespond: true,
      asOf: TODAY,
      initialSelection: selection,
      contentHash: "x",
      photoBase: "/devis/x/photo/",
      action: "/devis/x/repondre",
      beaconUrl: null,
      acceptance: null,
      refusal: null,
      replacedBy: null,
      flash: null,
    }),
  );
}
