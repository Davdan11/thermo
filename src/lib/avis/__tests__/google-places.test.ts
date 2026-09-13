import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getGoogleReviews, parsePlaceDetails, placesConfig, relativeTimeFr } from "../google-places";

const now = new Date("2026-09-12T12:00:00Z");
const sample = {
  displayName: { text: "Thermopompes À Vendre" },
  googleMapsUri: "https://maps.google.com/?cid=1",
  rating: 4.7,
  userRatingCount: 23,
  reviews: [
    {
      name: "places/abc/reviews/1",
      rating: 5,
      text: { text: "Texte traduit par Google", languageCode: "fr" },
      originalText: { text: "Excellent travail", languageCode: "fr" },
      authorAttribution: { displayName: "Jean T.", uri: "https://www.google.com/maps/contrib/1", photoUri: "https://lh3.googleusercontent.com/a/photo" },
      publishTime: "2026-08-20T12:00:00Z",
      googleMapsUri: "https://www.google.com/maps/reviews/1",
    },
    { name: "places/abc/reviews/2", rating: 4, authorAttribution: { displayName: "Sans texte" }, publishTime: "2025-06-01T00:00:00Z" },
    { name: "places/abc/reviews/3", rating: 9, text: { text: "note invalide" } },
    { name: "places/abc/reviews/4", rating: 3, authorAttribution: { uri: "javascript:alert(1)" }, text: { text: "Correct" }, relativePublishTimeDescription: "il y a un an" },
  ],
};

describe("avis Google (Places API (New))", () => {
  const env = process.env;
  beforeEach(() => {
    process.env = { ...env, GOOGLE_PLACES_API_KEY: "", GOOGLE_PLACE_ID: "" };
  });
  afterEach(() => {
    process.env = env;
    vi.restoreAllMocks();
  });

  it("garde le texte d'origine, l'auteur, son profil et la date relative", () => {
    const data = parsePlaceDetails(sample, now);
    expect(data).not.toBeNull();
    expect(data!.mapsUri).toBe("https://maps.google.com/?cid=1");
    expect(data!.rating).toBe(4.7);
    expect(data!.count).toBe(23);
    expect(data!.reviews).toHaveLength(3);
    const [a, b, c] = data!.reviews;
    expect(a).toMatchObject({ author: "Jean T.", text: "Excellent travail", rating: 5, authorUri: "https://www.google.com/maps/contrib/1", reviewUri: "https://www.google.com/maps/reviews/1" });
    expect(a.relativeTime).toBe("il y a 3 semaines");
    expect(b).toMatchObject({ author: "Sans texte", text: "", rating: 4 });
    expect(b.relativeTime).toMatch(/ann[ée]e derni[èe]re/);
    expect(c).toMatchObject({ author: "Utilisateur Google", authorUri: null, relativeTime: "il y a un an" });
  });

  it("rien à afficher : aucun avis, pas de fiche Maps, réponse illisible", () => {
    expect(parsePlaceDetails({ ...sample, reviews: [] }, now)).toBeNull();
    expect(parsePlaceDetails({ ...sample, googleMapsUri: undefined }, now)).toBeNull();
    expect(parsePlaceDetails(null, now)).toBeNull();
    expect(parsePlaceDetails("erreur", now)).toBeNull();
  });

  it("dates relatives en français", () => {
    expect(relativeTimeFr("2026-09-12T08:00:00Z", now)).toMatch(/aujourd/);
    expect(relativeTimeFr("2026-09-11T08:00:00Z", now)).toBe("hier");
    expect(relativeTimeFr("2026-09-09T08:00:00Z", now)).toBe("il y a 3 jours");
    expect(relativeTimeFr("2026-07-20T08:00:00Z", now)).toMatch(/il y a 1 mois|le mois dernier/);
  });

  it("non configuré : aucun appel à Google, rien à afficher", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    expect(placesConfig()).toBeNull();
    expect(await getGoogleReviews()).toBeNull();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("erreur de Google ou réseau : rien à afficher", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "cle";
    process.env.GOOGLE_PLACE_ID = "places/ChIJabc123";
    expect(placesConfig()).toEqual({ key: "cle", placeId: "ChIJabc123" });
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(new Response("{}", { status: 403 }));
    expect(await getGoogleReviews()).toBeNull();
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("réseau"));
    expect(await getGoogleReviews()).toBeNull();
  });

  it("configuré : appelle Place Details (New) avec la clé et le masque de champs", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "cle";
    process.env.GOOGLE_PLACE_ID = "ChIJabc123";
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(new Response(JSON.stringify(sample), { status: 200 }));
    const data = await getGoogleReviews();
    expect(data?.reviews.length).toBe(3);
    const [url, init] = fetchSpy.mock.calls[0] as [string, RequestInit & { next?: { revalidate?: number } }];
    expect(url).toBe("https://places.googleapis.com/v1/places/ChIJabc123?languageCode=fr&regionCode=CA");
    expect((init.headers as Record<string, string>)["X-Goog-Api-Key"]).toBe("cle");
    expect((init.headers as Record<string, string>)["X-Goog-FieldMask"]).toContain("reviews");
    expect(init.next?.revalidate).toBe(86_400);
  });
});
