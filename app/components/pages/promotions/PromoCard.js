import { useTranslations, useLocale } from "next-intl";
import { whatsappLink, formatOfferDate } from "./promoUtils";
import styles from "./Promotions.module.css";

const PLACEHOLDER = "/images/no-image.svg";

export default function PromoCard({ promotion, past = false }) {
  const t = useTranslations("promotions");
  const locale = useLocale();
  const image =
    promotion.imageUrl || promotion.motorcycle?.imageUrl || PLACEHOLDER;

  return (
    <div className={`${styles.promoCard} ${past ? styles.promoCardPast : ""}`}>
      <div
        className={styles.promoThumb}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.promoBody}>
        <h4 className={styles.promoTitle}>{promotion.title}</h4>
        {promotion.subtitle && (
          <p className={styles.promoSubtitle}>{promotion.subtitle}</p>
        )}
        <p className={styles.promoDate}>
          {past
            ? t("endedOn", { date: formatOfferDate(promotion.endDate, locale) })
            : t("offerEnds", {
                date: formatOfferDate(promotion.endDate, locale),
              })}
        </p>
        {!past && (
          <a
            href={whatsappLink(promotion)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.promoClaim}
          >
            {promotion.ctaText || t("claimDeal")}
          </a>
        )}
      </div>
    </div>
  );
}
