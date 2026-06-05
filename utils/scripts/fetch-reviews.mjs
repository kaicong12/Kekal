import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * One-time / on-demand fetch of Google reviews via the Places API (New).
 *
 * Writes the meaningful reviews to app/data/testimonials.json, which the
 * Testimonial components render at build/runtime. The site never calls Google
 * directly — re-run this script whenever you want to refresh the snapshot:
 *
 *   node utils/scripts/fetch-reviews.mjs           # or: yarn reviews:fetch
 *
 * Requires GOOGLE_PLACES_API_KEY in .env (Places API (New) enabled, billing on).
 * Optionally set GOOGLE_PLACE_ID to skip the lookup, or GOOGLE_PLACES_QUERY to
 * change the search text used to find the listing.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.resolve(__dirname, "../../app/data/testimonials.json");

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_QUERY =
  process.env.GOOGLE_PLACES_QUERY || "Perniagaan Motor Kekal Taman Johor Jaya";
let PLACE_ID = process.env.GOOGLE_PLACE_ID || "";

// "Meaningful" filter: keep positive reviews that actually have text.
const MIN_RATING = 4;
const MIN_TEXT_LENGTH = 1;

if (!API_KEY) {
  console.error(
    "Missing GOOGLE_PLACES_API_KEY in .env (Places API (New), billing enabled)."
  );
  process.exit(1);
}

async function findPlaceId() {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.formattedAddress",
    },
    body: JSON.stringify({ textQuery: PLACE_QUERY }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || JSON.stringify(data));
  const place = data.places?.[0];
  if (!place) throw new Error(`No place found for query: "${PLACE_QUERY}"`);
  console.log(`Matched: ${place.displayName?.text} — ${place.formattedAddress}`);
  return place.id;
}

async function fetchPlace(placeId) {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}?languageCode=en`,
    {
      headers: {
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask":
          "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
      },
    }
  );
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || JSON.stringify(data));
  return data;
}

function initials(name) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() || "")
      .join("") || "?"
  );
}

async function main() {
  if (!PLACE_ID) PLACE_ID = await findPlaceId();
  const place = await fetchPlace(PLACE_ID);

  const reviews = (place.reviews || [])
    .filter((r) => (r.rating ?? 0) >= MIN_RATING)
    .map((r) => {
      // Show the review in the language the customer actually wrote it in.
      const original = r.originalText || r.text || {};
      const english = r.text || {};
      const author = r.authorAttribution?.displayName || "Google user";
      return {
        author,
        initials: initials(author),
        rating: r.rating,
        text: (original.text || "").trim(),
        languageCode: original.languageCode || "en",
        textEn: (english.text || "").trim(),
        relativeTime: r.relativePublishTimeDescription || "",
        reviewUri: r.googleMapsUri || "",
      };
    })
    .filter((r) => r.text.length >= MIN_TEXT_LENGTH);

  const out = {
    placeId: PLACE_ID,
    placeName: place.displayName?.text || "",
    rating: place.rating ?? null,
    userRatingCount: place.userRatingCount ?? null,
    googleMapsUri: place.googleMapsUri || "",
    fetchedAt: new Date().toISOString(),
    source: "Google Places API",
    reviews,
  };

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(out, null, 2) + "\n");
  console.log(
    `Wrote ${reviews.length} review(s) to ${path.relative(
      process.cwd(),
      OUTPUT
    )}`
  );
}

main().catch((err) => {
  console.error("Failed to fetch reviews:", err.message);
  process.exit(1);
});
