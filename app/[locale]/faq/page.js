import { setRequestLocale } from "next-intl/server";
import FAQContent from "./FAQContent";
import { localeAlternates } from "@/utils/seoAlternates";

// Server wrapper so the FAQ page gets its own metadata — without this the
// client component inherited the layout's, which canonicalized /faq to "/".
export function generateMetadata({ params: { locale } }) {
  return {
    title: "FAQ - Loan Motor, Penghantaran & Waranti",
    description:
      "Soalan lazim pasal beli motor di Perniagaan Motor Kekal, Johor Bahru — pembiayaan & loan motor, dokumen diperlukan, penghantaran, waranti dan servis.",
    keywords: [
      "loan motor johor bahru",
      "cara beli motor",
      "dokumen loan motor",
      "waranti motor baru",
      "faq kedai motor",
    ],
    alternates: localeAlternates("/faq", locale),
  };
}

export default function FAQPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <FAQContent />;
}
