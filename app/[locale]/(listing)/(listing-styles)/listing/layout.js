import ItemListSchema from "@/app/components/seo/ItemListSchema";
import { localeAlternates } from "@/utils/seoAlternates";

const META = {
  en: {
    title: "Motorcycles For Sale Johor Bahru - Yamaha, Honda, KTM",
    description:
      "New motorcycles for sale at Perniagaan Motor Kekal, Johor Jaya. Yamaha, Kawasaki, Honda, KTM, Modenas & more. Affordable prices with in-house financing. Motorcycle shop in JB.",
  },
  ms: {
    title: "Jual Motor Baru Johor Bahru - Yamaha, Kawasaki, Honda, KTM",
    description:
      "Senarai motor baru untuk dijual di Perniagaan Motor Kekal, Johor Jaya. Yamaha, Kawasaki, Honda, KTM, Modenas & lain-lain. Harga motor murah, loan kedai tersedia. Kedai motor JB.",
  },
  zh: {
    title: "新山摩托车出售 - Yamaha、Kawasaki、Honda、KTM",
    description:
      "新山 Johor Jaya 摩托车专卖店 Perniagaan Motor Kekal 全新摩托车出售，Yamaha、Kawasaki、Honda、KTM、Modenas 等品牌，价格实惠，提供店内贷款。",
  },
};

export function generateMetadata({ params: { locale } }) {
  const meta = META[locale] || META.en;
  const alternates = localeAlternates("/listing", locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "kedai jual motor johor bahru",
      "kedai jual motor near me",
      "motor murah johor",
      "yamaha johor jaya",
      "kedai motor johor bahru",
      "motorcycle shop johor bahru",
      "motor loan kedai jb",
      "beli motor johor bahru",
      "kedai motor yamaha near me",
      "best motorcycle shop in jb",
    ],
    alternates,
    openGraph: {
      title: `${meta.title} | Perniagaan Motor Kekal`,
      description: meta.description,
      url: `https://www.motorkekal.com${alternates.canonical}`,
      type: "website",
    },
  };
}

export default async function ListingLayout({ children }) {
  return (
    <>
      <ItemListSchema />
      {children}
    </>
  );
}
