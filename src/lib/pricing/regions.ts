import type { QuebecRegion } from "./types";

export function postalCodeToRegion(postalCode: string | undefined): QuebecRegion {
  if (!postalCode) return "unknown";

  const cleaned = postalCode.replace(/\s/g, "").toUpperCase();
  if (cleaned.length < 3) return "unknown";

  const fsa = cleaned.slice(0, 3);
  const firstTwo = cleaned.slice(0, 2);
  const firstChar = cleaned[0];

  if (firstChar !== "G" && firstChar !== "H" && firstChar !== "J") {
    return "unknown";
  }

  if (firstTwo === "H1" || firstTwo === "H2" || firstTwo === "H3" ||
      firstTwo === "H4" || firstTwo === "H5" || firstTwo === "H8" ||
      firstTwo === "H9") {
    return "montreal";
  }

  if (firstTwo === "H7") return "laval";

  if (firstTwo === "J2" || firstTwo === "J3" || firstTwo === "J4" ||
      firstTwo === "J5" || firstTwo === "J6") {
    return "monteregie";
  }

  if (firstTwo === "J7") return "laurentides";

  if (firstTwo === "J8" || firstTwo === "J9") return "outaouais";

  if (firstTwo === "J0") {
    const third = fsa[2];
    if (third === "Y" || third === "Z") return "abitibi";
    if (third === "K" || third === "N") return "lanaudiere";
    return "monteregie";
  }

  if (firstTwo === "J1") return "estrie";

  if (firstTwo === "G1" || firstTwo === "G2" || firstTwo === "G3") {
    return "quebec-city";
  }

  if (firstTwo === "G7") return "saguenay";
  
  if (firstTwo === "G8" || firstTwo === "G9") return "mauricie";

  return "unknown";
}
