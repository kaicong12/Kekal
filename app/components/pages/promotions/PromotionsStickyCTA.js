"use client";
import { useTranslations } from "next-intl";
import { BUSINESS_MAPS_URL } from "./promoUtils";
import styles from "./Promotions.module.css";

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function PromotionsStickyCTA() {
  const t = useTranslations("promotions");
  return (
    <div className={styles.stickyBar}>
      <a
        href={BUSINESS_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.stickyBtn}
      >
        <PinIcon />
        {t("visitToClaim")}
      </a>
    </div>
  );
}
