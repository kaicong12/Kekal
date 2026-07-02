"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import CountdownTimer from "./CountdownTimer";
import Pill from "@/app/components/motorkekal/Pill";
import { WaIcon } from "@/app/components/motorkekal/waLink";
import { whatsappLink, daysLeft, formatOfferDate } from "./promoUtils";

const PLACEHOLDER = "/images/no-image.svg";

export default function FeaturedPromoCard({ promotion }) {
  const t = useTranslations("promotions");
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const image =
    promotion.imageUrl || promotion.motorcycle?.imageUrl || PLACEHOLDER;
  const remaining = daysLeft(promotion.endDate);
  const badge =
    remaining <= 1 ? t("endsToday") : t("endsInDays", { count: remaining });
  const desc = promotion.description || promotion.subtitle;

  return (
    <div className="promo-featured">
      <div className="promo-featured__body">
        <div>
          <Pill status="live">{badge}</Pill>
        </div>
        <h2>{promotion.title}</h2>
        {desc && <p>{desc}</p>}

        {mounted && (
          <div className="promo-countdown" suppressHydrationWarning>
            <span className="promo-countdown__label">
              {t("offerEnds", {
                date: formatOfferDate(promotion.endDate, locale),
              })}
            </span>
            <CountdownTimer endDate={promotion.endDate} />
          </div>
        )}

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 26 }}>
          <a
            className="btn btn--wa btn--lg"
            href={whatsappLink(promotion)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon />
            {promotion.ctaText || t("claimDeal")}
          </a>
          <Link
            className="btn btn--outline btn--lg"
            href="/listing"
            style={{
              background: "transparent",
              color: "#fff",
              borderColor: "rgba(255,255,255,0.3)",
            }}
          >
            {t("viewAllStock")}
          </Link>
        </div>
      </div>

      <div className="promo-featured__media">
        <Image
          width={640}
          height={480}
          src={image}
          alt={promotion.title}
          unoptimized
        />
      </div>
    </div>
  );
}
