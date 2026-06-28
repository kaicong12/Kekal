export const WHATSAPP_PHONE = "60127126128";
export const MAPS_URL = "https://maps.app.goo.gl/a9Fs6RkRSR8dnnsE9";
// Opens Google Maps on the "Perniagaan Motor Kekal" business listing
// (searches by business name rather than a raw address).
export const BUSINESS_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Perniagaan+Motor+Kekal";

export function whatsappLink(promotion) {
  const text =
    promotion.whatsappMessage ||
    `Hi, I'm interested in your "${promotion.title}" promotion`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

// Whole days remaining until endDate (0 = ends today).
export function daysLeft(endDate) {
  const ms = new Date(endDate).getTime() - Date.now();
  if (ms <= 0) return 0;
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

export function formatOfferDate(value, locale = "en") {
  return new Date(value).toLocaleDateString(
    locale === "en" ? "en-GB" : locale,
    { day: "2-digit", month: "short", year: "numeric" }
  );
}
