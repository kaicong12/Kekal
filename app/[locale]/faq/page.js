import { setRequestLocale } from "next-intl/server";
import FAQContent from "./FAQContent";
import { localeAlternates } from "@/utils/seoAlternates";

// Server wrapper so the FAQ page gets its own metadata — without this the
// client component inherited the layout's, which canonicalized /faq to "/".
const META = {
  en: {
    title: "FAQ - Motorcycle Loans, Delivery & Warranty",
    description:
      "Common questions about buying a motorcycle at Perniagaan Motor Kekal, Johor Bahru — financing and loans, documents needed, delivery, warranty and servicing.",
  },
  ms: {
    title: "FAQ - Loan Motor, Penghantaran & Waranti",
    description:
      "Soalan lazim pasal beli motor di Perniagaan Motor Kekal, Johor Bahru — pembiayaan & loan motor, dokumen diperlukan, penghantaran, waranti dan servis.",
  },
  zh: {
    title: "常见问题 - 摩托车贷款、交车与保修",
    description:
      "在新山 Perniagaan Motor Kekal 购买摩托车的常见问题 — 贷款与融资、所需文件、交车、保修与保养服务。",
  },
};

export function generateMetadata({ params: { locale } }) {
  const meta = META[locale] || META.en;

  return {
    title: meta.title,
    description: meta.description,
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
