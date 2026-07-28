export const WHATSAPP_PHONE = "60127126128";
export const MAPS_URL = "https://maps.app.goo.gl/a9Fs6RkRSR8dnnsE9";
// Opens Google Maps on the "Perniagaan Motor Kekal" business listing
// (searches by business name rather than a raw address).
export const BUSINESS_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Perniagaan+Motor+Kekal";

export const PROMOTION_TERMS = {
  en: "Promotional prices are valid until the stated end date and apply to the advertised model only. Prices exclude registration, insurance and road tax unless stated otherwise. Cannot be combined with other ongoing offers. Perniagaan Motor Kekal reserves the right to amend or withdraw any promotion at any time.",
  ms: "Harga promosi sah sehingga tarikh tamat yang dinyatakan dan hanya terpakai untuk model yang diiklankan. Harga tidak termasuk pendaftaran, insurans dan cukai jalan melainkan dinyatakan sebaliknya. Tidak boleh digabungkan dengan tawaran lain yang sedang berjalan. Perniagaan Motor Kekal berhak meminda atau menarik balik sebarang promosi pada bila-bila masa.",
  zh: "促销价格于所示结束日期前有效，且仅适用于所宣传的车款。除另有说明外，价格不含注册费、保险及路税。不可与其他进行中的优惠同时使用。Perniagaan Motor Kekal 保留随时修改或取消任何促销活动的权利。",
};

export function promotionTerms(locale = "en") {
  return PROMOTION_TERMS[locale] ?? PROMOTION_TERMS.en;
}

export function formatRinggit(value) {
  return `RM ${Number(value || 0).toLocaleString("en-MY")}`;
}

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
