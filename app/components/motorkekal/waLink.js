// Single source of truth for the business contact details used across the
// redesigned Motor Kekal storefront pages.
export const PHONE = "60127126128";
export const PHONE_DISPLAY = "+60 12-712 6128";
export const MAPS_URL = "https://maps.app.goo.gl/a9Fs6RkRSR8dnnsE9";
export const MAPS_QUERY_URL =
  "https://maps.google.com/?q=Perniagaan+Motor+Kekal+Johor+Bahru";
export const ADDRESS =
  "5, Jln Seroja 49, Taman Johor Bahru, 81100 Johor Bahru, Johor";

// Build a wa.me deep-link with an optional prefilled message.
export function waLink(message) {
  const base = `https://wa.me/${PHONE}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Small inline WhatsApp glyph reused by buttons.
export function WaIcon() {
  return (
    <svg className="wa-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15l-1.4 5 5.1-1.3A10 10 0 1012 2zm0 18.3c-1.5 0-3-.4-4.3-1.1l-.3-.2-3 .8.8-3-.2-.3A8.3 8.3 0 1112 20.3z" />
    </svg>
  );
}
