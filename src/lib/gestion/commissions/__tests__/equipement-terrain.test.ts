import { describe, expect, it } from "vitest";
import type { Job } from "../../types";
import { installedEquipment } from "../link";

const job = { status: "termine", audit: [] } as unknown as Job;

describe("numéros de série de la fin de chantier (volet A) dans les envois du volet B", () => {
  it("prend ceux du dossier de chantier en priorité", () => {
    expect(installedEquipment(job, { outdoor: ["EXT-123"], indoor: ["INT-1", " INT-2 "] })).toEqual({ outdoorSerial: "EXT-123", indoorSerials: ["INT-1", "INT-2"] });
  });

  it("sans dossier de chantier : aucun numéro inventé", () => {
    expect(installedEquipment(job, null)).toEqual({ outdoorSerial: null, indoorSerials: [] });
  });
});
