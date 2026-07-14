import { setRequestLocale } from "next-intl/server";
import Home from "./home/page";
import Wrapper from "@/app/layout/wrapper";
import { localeAlternates } from "@/utils/seoAlternates";

// Locale-specific homepage meta. en/ms fall back to the layout defaults
// (already written in Malay/English mix); zh gets a native title since the
// Chinese homepage is the site's best-performing page in search.
const HOME_META = {
  zh: {
    // Runs through the layout's "%s | Perniagaan Motor Kekal" template.
    title: "新山摩托车行 - 新车·维修·保养",
    description:
      "柔佛再也（新山）超过30年的摩托车行。出售 Yamaha、Honda、Kawasaki、KTM 新车，提供贷款、维修保养、保险与路税服务。",
  },
};

export function generateMetadata({ params: { locale } }) {
  return {
    ...(HOME_META[locale] || {}),
    alternates: localeAlternates("/", locale),
  };
}

export default function MainRoot({ params: { locale } }) {
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
