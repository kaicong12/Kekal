"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// Globe icon
const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "middle", marginRight: 6 }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LanguageSwitcher = ({ className = "" }) => {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (event) => {
    const nextLocale = event.target.value;
    // Keep the current pathname, just swap the locale prefix.
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <label
      className={`language-switcher ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
      }}
      aria-label={t("label")}
    >
      <GlobeIcon />
      <select
        value={locale}
        onChange={onChange}
        aria-label={t("label")}
        style={{
          border: "none",
          background: "transparent",
          fontSize: "14px",
          cursor: "pointer",
          outline: "none",
          color: "inherit",
        }}
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {t(loc)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSwitcher;
