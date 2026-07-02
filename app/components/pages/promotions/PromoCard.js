import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { whatsappLink, daysLeft, formatOfferDate } from "./promoUtils";

const PLACEHOLDER = "/images/no-image.svg";

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" />
  </svg>
);

export default function PromoCard({ promotion, past = false }) {
  const t = useTranslations("promotions");
  const locale = useLocale();
  const image =
    promotion.imageUrl || promotion.motorcycle?.imageUrl || PLACEHOLDER;
  const remaining = daysLeft(promotion.endDate);
  const ribbon = past
    ? t("ended")
    : remaining <= 1
    ? t("endsToday")
    : t("endsInDays", { count: remaining });
  const desc = promotion.subtitle || promotion.description;

  return (
    <article className={`card card--hover promo-card${past ? " promo-card--past" : ""}`}>
      <div className="promo-card__media">
        <Image
          width={480}
          height={300}
          src={image}
          alt={promotion.title}
          unoptimized
        />
        <span className={`promo-card__ribbon${past ? " promo-card__ribbon--past" : ""}`}>
          {ribbon}
        </span>
      </div>
      <div className="promo-card__body">
        <h3>{promotion.title}</h3>
        {desc && <p>{desc}</p>}
        <span className="promo-card__valid">
          <ClockIcon />
          {past
            ? t("endedOn", { date: formatOfferDate(promotion.endDate, locale) })
            : t("offerEnds", { date: formatOfferDate(promotion.endDate, locale) })}
        </span>
        {!past && (
          <div className="promo-card__foot">
            <a
              className="btn btn--wa btn--block"
              href={whatsappLink(promotion)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {promotion.ctaText || t("claimDeal")}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
